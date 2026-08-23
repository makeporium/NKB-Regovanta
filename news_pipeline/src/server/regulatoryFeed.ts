"use server";
import { createServerFn } from "@tanstack/react-start";
import { XMLParser } from "fast-xml-parser";

export type SourceAgency = "CDSCO" | "USFDA" | "EU_MDR" | "MDSAP" | "OTHER";

export interface RegulatoryItem {
    title: string;
    source_agency: SourceAgency;
    summary: string;
    source_url: string;
}

const FEEDS = [
    {
        url: "https://news.google.com/rss/search?q=FDA+medical+device+guidance+OR+recall+OR+clearance&hl=en-US&gl=US&ceid=US:en",
        label: "FDA CDRH",
    },
    {
        url: "https://news.google.com/rss/search?q=%22european+commission%22+AND+(%22MDR%22+OR+%22IVDR%22+OR+%22MDCG%22)&hl=en-GB&gl=GB&ceid=GB:en",
        label: "EU MDCG",
    },
    {
        url: "https://news.google.com/rss/search?q=medical+device+OR+medtech+OR+CDSCO+OR+USFDA+OR+MDCG&hl=en-IN&gl=IN&ceid=IN:en",
        label: "Google News Broad",
    },
    {
        url: "https://news.google.com/rss/search?q=%22notified+body%22+OR+%22MDSAP%22+OR+%22IVDR%22+OR+%22CE+mark%22+device&hl=en-IN&gl=IN&ceid=IN:en",
        label: "Google News Regulatory",
    }
];

const KEYWORDS = [
    "Cdsco",
    "Medical device",
    "Ivd",
    "MDR 2017",
    "USFDA 510k",
    "estar",
    "eumdr",
    "euivdr",
    "mdsap",
    "notified body",
];

interface RawItem {
    title: string;
    link: string;
    description?: string;
    pubDate?: string;
    feed_source: string;
}

function decodeGoogleNewsUrl(url: string): string {
    if (!url.includes("articles/CBMi") && !url.includes("articles/CAAq")) return url;
    try {
        let b64 = url.split("articles/")[1].split("?")[0];
        b64 = b64.replace(/-/g, '+').replace(/_/g, '/');
        while (b64.length % 4 !== 0) b64 += '=';
        const decoded = atob(b64);
        const match = decoded.match(/https?:\/\/[^\s\x00-\x1F\x7F"\\]+/);
        return match ? match[0] : url;
    } catch {
        return url;
    }
}

function parseRssFeed(xml: string, label: string): RawItem[] {
    try {
        const parser = new XMLParser({ ignoreAttributes: false });
        const result = parser.parse(xml);

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
                const rawUrl = String(
                    i["link"] ??
                    (typeof i["link"] === "object"
                        ? (i["link"] as Record<string, unknown>)["@_href"]
                        : "") ??
                    ""
                );
                return {
                    title: String(i["title"] ?? ""),
                    link: decodeGoogleNewsUrl(rawUrl),
                    description: String(i["description"] ?? i["summary"] ?? ""),
                    pubDate: String(i["pubDate"] ?? i["updated"] ?? i["dc:date"] ?? ""),
                    feed_source: label,
                };
            })
            .filter((it) => it.title.length > 0);
    } catch {
        return [];
    }
}

function keywordMatch(item: RawItem): boolean {
    if (item.feed_source === 'FDA CDRH' || item.feed_source === 'EU MDCG') return true;
    const haystack = `${item.title} ${item.description ?? ""}`.toLowerCase();
    return KEYWORDS.some((kw) => haystack.includes(kw.toLowerCase()));
}

async function fetchFeed(url: string, label: string): Promise<RawItem[]> {
    try {
        const res = await fetch(url, {
            headers: { 
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36" 
            },
            signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) return [];
        const xml = await res.text();
        return parseRssFeed(xml, label);
    } catch {
        return [];
    }
}

function feedSourceToAgency(feedSource: string): RegulatoryItem["source_agency"] {
    if (feedSource === "FDA CDRH") return "USFDA";
    if (feedSource === "EU MDCG") return "EU_MDR";
    return "OTHER";
}

function buildPrompt(items: RawItem[]): string {
    const itemList = items
        .map((it, i) => `[${i + 1}] TITLE: ${it.title}`)
        .join("\n");

    return `You are a regulatory intelligence specialist.

For each feed item below, write a one-sentence summary of <=10 words.
Return ONLY a valid JSON array of objects with keys:
- "summary": your <=10 word summary
- "source_url": leave this as an empty string ""

Rules: Raw JSON array only, no markdown.

ITEMS:
${itemList}`;
}

async function callAI(prompt: string): Promise<RegulatoryItem[]> {
    const apiKey = process.env.GROQ_API_KEY ?? "";
    if (!apiKey) {
        return [{ title: "API KEY ERROR: GROQ_API_KEY not found. Check .env.local.", source_agency: "OTHER", summary: "Add GROQ_API_KEY to .env.local and restart the dev server.", source_url: "#" }];
    }

    try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "groq/compound-mini",
                temperature: 0.1,
                messages: [{ role: "user", content: prompt }],
            }),
            signal: AbortSignal.timeout(30_000),
        });

        if (!res.ok) {
            const errText = await res.text();
            return [{ title: `GROQ API ERROR ${res.status}`, source_agency: "OTHER", summary: errText.slice(0, 150), source_url: "#" }];
        }

        const json = (await res.json()) as { choices?: { message?: { content?: string } }[] };
        const raw = json.choices?.[0]?.message?.content ?? "[]";

        let cleanJson = raw;
        const arrayMatch = raw.match(/\[\s*\{[\s\S]*\}\s*\]/);
        if (arrayMatch) {
            cleanJson = arrayMatch[0];
        } else {
            cleanJson = raw.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
            cleanJson = cleanJson.replace(/```json/g, "").replace(/```/g, "").trim();
        }

        const parsed = JSON.parse(cleanJson) as RegulatoryItem[];
        return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
        console.error("[RegulatoryFeed] AI call failed:", err);
        return [];
    }
}

const MOCK_ITEMS: RegulatoryItem[] = [
    {
        title: "CDSCO Issues Revised IVD Import Licensing Guidelines 2024",
        source_agency: "CDSCO",
        summary: "CDSCO has updated IVD import licensing rules requiring all manufacturers to resubmit documentation under the revised framework by March 2025.",
        source_url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/",
    },
    {
        title: "FDA Finalizes eSTAR Electronic Submission Template v3.2",
        source_agency: "USFDA",
        summary: "FDA mandates eSTAR v3.2 for all 510(k) and De Novo submissions. Paper format will no longer be accepted after the 90-day transition window.",
        source_url: "https://www.fda.gov/medical-devices/how-study-and-market-your-device/estar",
    },
    {
        title: "EU MDR Notified Body Audit Capacity Update Q4 2024",
        source_agency: "EU_MDR",
        summary: "EU Commission warns of continued Notified Body capacity constraints, urging manufacturers to book MDR conformity assessment audits well in advance of 2027 deadlines.",
        source_url: "https://health.ec.europa.eu/medical-devices-topics-interest/notified-bodies-and-eudamed_en",
    },
    {
        title: "MDSAP Audit Approach Document Updated for 2025 Cycle",
        source_agency: "MDSAP",
        summary: "The MDSAP consortium released revised audit approach documents covering grading methodology changes effective for all 2025 surveillance and certification audits.",
        source_url: "https://www.who.int/teams/regulation-prequalification/regulation-and-safety/medical-devices/mdsap",
    },
    {
        title: "FDA 510(k) Substantial Equivalence Decision Making Guidance Finalized",
        source_agency: "USFDA",
        summary: "FDA finalizes guidance clarifying the step-by-step decision-making process for determining substantial equivalence, particularly for combination products and novel technologies.",
        source_url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents",
    },
];

export async function fetchRegulatoryFeed(): Promise<RegulatoryItem[]> {
    const rawArrays = await Promise.all(FEEDS.map((f) => fetchFeed(f.url, f.label)));
    const allItems = rawArrays.flat();
    const filtered = allItems.filter(keywordMatch);

    const sorted = filtered.sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
        const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
        return dateB - dateA;
    });

    if (sorted.length === 0) {
        return MOCK_ITEMS;
    }

    const fdaItems = sorted.filter(i => i.feed_source === "FDA CDRH").slice(0, 2);
    const euItems = sorted.filter(i => i.feed_source === "EU MDCG").slice(0, 2);
    const googleItems = sorted.filter(i => i.feed_source.includes("Google")).slice(0, 2);
    const topItems = [...fdaItems, ...euItems, ...googleItems];

    const preClassified: RegulatoryItem[] = topItems.map(item => {
        let agency = feedSourceToAgency(item.feed_source);
        if (item.feed_source.includes("Google")) {
            const lower = (item.title + " " + (item.description ?? "")).toLowerCase();
            if (lower.includes("cdsco") || lower.includes("dcgi") || lower.includes("india")) agency = "CDSCO";
            else if (lower.includes("fda") || lower.includes("510k") || lower.includes("recall")) agency = "USFDA";
            else if (lower.includes("mdr") || lower.includes("ivdr") || lower.includes("ce mark") || lower.includes("eu ")) agency = "EU_MDR";
            else if (lower.includes("mdsap")) agency = "MDSAP";
            else agency = "CDSCO";
        }
        return { title: item.title, source_agency: agency, summary: "", source_url: item.link };
    });

    try {
        const summaryRes = await callAI(buildPrompt(topItems));
        return preClassified.map((item, idx) => {
            const aiSummary = summaryRes[idx]?.summary ?? "";
            const cleanSummary = aiSummary && !aiSummary.startsWith("{") ? aiSummary : item.title.slice(0, 80);
            return { ...item, summary: cleanSummary };
        });
    } catch {
        return preClassified.map(item => ({ ...item, summary: item.title.slice(0, 80) }));
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// Guarantees server-side-only execution (process.env, Node fetch) on both
// initial SSR and client-side navigations via the TanStack Start RPC layer.
export const fetchRegulatoryFeedFn = createServerFn({ method: "GET" }).handler(
    fetchRegulatoryFeed,
);
