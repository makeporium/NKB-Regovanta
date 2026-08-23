/**
 * src/server/regulatoryFeed.ts
 *
 * Server function: parallel RSS fetch → keyword filter → batch AI extraction
 * CDN headers ensure Vercel Edge caches results for 10 min (s-maxage=600)
 * with a 30-min stale-while-revalidate window — zero cold-start cost at scale.
 */

import { createServerFn } from "@tanstack/react-start";
import { XMLParser } from "fast-xml-parser";
import { getWebRequest } from "vinxi/http";

// ─── Types ────────────────────────────────────────────────────────────────────

export type SourceAgency = "CDSCO" | "USFDA" | "EU_MDR" | "MDSAP";
export type ImpactLevel = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
export type Category =
    | "Guidance"
    | "Final Rule"
    | "Classification"
    | "Compliance Deadline";

export interface RegulatoryItem {
    title: string;
    source_agency: SourceAgency;
    category: Category;
    impact_level: ImpactLevel;
    action_required: string;
    summary: string;
    source_url: string;
}

// ─── Config ───────────────────────────────────────────────────────────────────

const FEEDS = [
    {
        url: "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/cdrh-safety-communications/rss.xml",
        label: "FDA CDRH",
    },
    {
        url: "https://health.ec.europa.eu/medical-devices-topics-interest/notified-bodies-and-eudamed_en",
        label: "EU MDCG",
    },
    {
        url: "https://news.google.com/rss/search?q=CDSCO+OR+IVD+OR+%22MDR+2017%22+OR+MDSAP+medtech&hl=en-IN&gl=IN&ceid=IN:en",
        label: "Google News MedTech",
    },
];

const KEYWORDS = [
    "CDSCO",
    "FDA",
    "510(k)",
    "eSTAR",
    "IVD",
    "MDR 2017",
    "MDSAP",
    "notified body",
    "notified bodies",
    "medical device",
    "CE mark",
    "PMA",
    "De Novo",
    "substantial equivalence",
    "clinical evaluation",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

interface RawItem {
    title: string;
    link: string;
    description?: string;
    pubDate?: string;
}

/** Parse an RSS/Atom feed XML into raw items, tolerating missing fields. */
function parseRssFeed(xml: string): RawItem[] {
    try {
        const parser = new XMLParser({ ignoreAttributes: false });
        const result = parser.parse(xml);

        // Standard RSS 2.0
        const channel =
            result?.rss?.channel ?? result?.feed ?? result?.["rdf:RDF"]?.channel;
        if (!channel) return [];

        const items: unknown[] = Array.isArray(channel.item)
            ? channel.item
            : channel.item
                ? [channel.item]
                : Array.isArray(channel.entry)
                    ? channel.entry
                    : channel.entry
                        ? [channel.entry]
                        : [];

        return items
            .map((item: unknown) => {
                const i = item as Record<string, unknown>;
                return {
                    title: String(i["title"] ?? ""),
                    link: String(
                        i["link"] ??
                        (typeof i["link"] === "object"
                            ? (i["link"] as Record<string, unknown>)["@_href"]
                            : "") ??
                        ""
                    ),
                    description: String(i["description"] ?? i["summary"] ?? ""),
                    pubDate: String(i["pubDate"] ?? i["updated"] ?? i["dc:date"] ?? ""),
                };
            })
            .filter((it) => it.title.length > 0);
    } catch {
        return [];
    }
}

/** Returns true if a feed item contains at least one regulatory keyword. */
function keywordMatch(item: RawItem): boolean {
    const haystack =
        `${item.title} ${item.description ?? ""}`.toLowerCase();
    return KEYWORDS.some((kw) => haystack.includes(kw.toLowerCase()));
}

/** Fetch a single feed URL, returning an empty array on any error. */
async function fetchFeed(url: string): Promise<RawItem[]> {
    try {
        const res = await fetch(url, {
            headers: { "User-Agent": "RegulatoryBot/1.0 (MedTech Intelligence)" },
            signal: AbortSignal.timeout(8_000),
        });
        if (!res.ok) return [];
        const xml = await res.text();
        return parseRssFeed(xml);
    } catch {
        return [];
    }
}

/** Build a compact batch prompt from filtered items. */
function buildPrompt(items: RawItem[]): string {
    const itemList = items
        .slice(0, 20) // cap at 20 items to keep tokens lean
        .map(
            (it, i) =>
                `[${i + 1}] TITLE: ${it.title}\nURL: ${it.link}\nSNIPPET: ${(it.description ?? "").slice(0, 200)}`
        )
        .join("\n\n");

    return `You are a regulatory intelligence specialist for the medical device industry.

Analyze the following ${items.length} regulatory feed items and return ONLY a valid JSON array.
Each object must have EXACTLY these keys (no extras):
- "title": concise cleaned title (string)
- "source_agency": one of ["CDSCO","USFDA","EU_MDR","MDSAP"]
- "category": one of ["Guidance","Final Rule","Classification","Compliance Deadline"]
- "impact_level": one of ["CRITICAL","HIGH","MEDIUM","LOW"]
- "action_required": one concrete action manufacturers/regulators should take (string)
- "summary": ≤50 words summarising regulatory significance (string)
- "source_url": original URL (string)

Rules:
- If uncertain about agency, infer from URL/content clues; default to "USFDA".
- CRITICAL = deadline <30 days or market removal; HIGH = new mandatory requirement; MEDIUM = guidance update; LOW = informational.
- Return raw JSON array only — no markdown fences, no commentary.

ITEMS:
${itemList}`;
}

/** Call OpenRouter (OpenAI-compatible) with a single batch prompt. */
async function callAI(prompt: string): Promise<RegulatoryItem[]> {
    const apiKey = process.env["OPENROUTER_API_KEY"] ?? process.env["OPENAI_API_KEY"];
    if (!apiKey) {
        console.warn("[RegulatoryFeed] No AI API key set – returning mock data.");
        return MOCK_ITEMS;
    }

    const isOpenRouter = !!process.env["OPENROUTER_API_KEY"];
    const endpoint = isOpenRouter
        ? "https://openrouter.ai/api/v1/chat/completions"
        : "https://api.openai.com/v1/chat/completions";

    const model = isOpenRouter
        ? (process.env["OPENROUTER_MODEL"] ?? "google/gemini-flash-1.5")
        : (process.env["OPENAI_MODEL"] ?? "gpt-4o-mini");

    try {
        const res = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
                ...(isOpenRouter
                    ? { "HTTP-Referer": "https://regulatory.vercel.app" }
                    : {}),
            },
            body: JSON.stringify({
                model,
                temperature: 0.1,
                max_tokens: 4096,
                messages: [{ role: "user", content: prompt }],
            }),
            signal: AbortSignal.timeout(30_000),
        });

        if (!res.ok) {
            console.error("[RegulatoryFeed] AI API error:", res.status, await res.text());
            return MOCK_ITEMS;
        }

        const json = (await res.json()) as {
            choices?: { message?: { content?: string } }[];
        };
        const raw = json.choices?.[0]?.message?.content ?? "[]";

        const parsed = JSON.parse(raw) as RegulatoryItem[];
        return Array.isArray(parsed) ? parsed : MOCK_ITEMS;
    } catch (err) {
        console.error("[RegulatoryFeed] AI call failed:", err);
        return MOCK_ITEMS;
    }
}

// ─── Mock fallback ─────────────────────────────────────────────────────────────

const MOCK_ITEMS: RegulatoryItem[] = [
    {
        title: "CDSCO Issues Revised IVD Import Licensing Guidelines 2024",
        source_agency: "CDSCO",
        category: "Guidance",
        impact_level: "HIGH",
        action_required:
            "Review updated import licensing requirements and submit revised applications by Q1 2025.",
        summary:
            "CDSCO has updated IVD import licensing rules requiring all manufacturers to resubmit documentation under the revised framework by March 2025.",
        source_url:
            "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/",
    },
    {
        title: "FDA Finalizes eSTAR Electronic Submission Template v3.2",
        source_agency: "USFDA",
        category: "Final Rule",
        impact_level: "CRITICAL",
        action_required:
            "Transition all new 510(k) submissions to eSTAR v3.2 immediately; legacy format rejected after 90 days.",
        summary:
            "FDA mandates eSTAR v3.2 for all 510(k) and De Novo submissions. Paper format will no longer be accepted after the 90-day transition window.",
        source_url: "https://www.fda.gov/medical-devices/how-study-and-market-your-device/estar",
    },
    {
        title: "EU MDR Notified Body Audit Capacity Update – Q4 2024",
        source_agency: "EU_MDR",
        category: "Compliance Deadline",
        impact_level: "HIGH",
        action_required:
            "Contact your Notified Body immediately to confirm audit scheduling for MDR transition compliance.",
        summary:
            "EU Commission warns of continued Notified Body capacity constraints, urging manufacturers to book MDR conformity assessment audits well in advance of 2027 deadlines.",
        source_url: "https://health.ec.europa.eu/medical-devices-topics-interest/notified-bodies-and-eudamed_en",
    },
    {
        title: "MDSAP Audit Approach Document Updated for 2025 Cycle",
        source_agency: "MDSAP",
        category: "Guidance",
        impact_level: "MEDIUM",
        action_required:
            "Update internal QMS documentation to align with the revised MDSAP audit approach criteria before year-end.",
        summary:
            "The MDSAP consortium released revised audit approach documents covering grading methodology changes effective for all 2025 surveillance and certification audits.",
        source_url: "https://www.who.int/teams/regulation-prequalification/regulation-and-safety/medical-devices/mdsap",
    },
    {
        title: "FDA 510(k) Substantial Equivalence Decision Making – Guidance Finalized",
        source_agency: "USFDA",
        category: "Guidance",
        impact_level: "MEDIUM",
        action_required:
            "Incorporate FDA's updated intended use and technological characteristics analysis into your 510(k) strategy.",
        summary:
            "FDA finalizes guidance clarifying the step-by-step decision-making process for determining substantial equivalence, particularly for combination products and novel technologies.",
        source_url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents",
    },
];

// ─── Main Server Function ──────────────────────────────────────────────────────

export const fetchRegulatoryFeed = createServerFn({ method: "GET" }).handler(
    async () => {
        // 1. Set CDN cache headers — must happen before any await to be honoured
        //    by Vercel Edge on the initial response.
        const req = getWebRequest();
        if (req) {
            // @ts-expect-error – vinxi augments the Request with a Response helper
            const res = req[Symbol.for("vinxi.response")];
            if (res?.setHeader) {
                res.setHeader(
                    "Cache-Control",
                    "public, s-maxage=600, stale-while-revalidate=1800"
                );
            }
        }

        // 2. Fetch all feeds in parallel, fail gracefully per feed.
        const rawArrays = await Promise.all(FEEDS.map((f) => fetchFeed(f.url)));
        const allItems = rawArrays.flat();

        // 3. Lightweight keyword filter before touching the AI.
        const filtered = allItems.filter(keywordMatch);

        // 4. If no live items were found, return mock data for demo purposes.
        if (filtered.length === 0) {
            return MOCK_ITEMS;
        }

        // 5. Build compact batch prompt and call AI once.
        const prompt = buildPrompt(filtered);
        const structured = await callAI(prompt);

        return structured;
    }
);
