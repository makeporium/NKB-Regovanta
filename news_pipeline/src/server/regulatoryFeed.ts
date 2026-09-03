"use server";
import { createServerFn } from "@tanstack/react-start";
import { XMLParser } from "fast-xml-parser";
import { z } from "zod";
import {
    AIItemSchema,
    type RegulatoryItem,
    type SourceAgency,
} from "~/lib/regulatorySchema";

// ── Feed Sources ───────────────────────────────────────────────────────────────

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
    },
];

// ── Keyword pre-filter (cheap local filter before AI) ──────────────────────────

const KEYWORDS = [
    "cdsco", "medical device", "ivd", "mdr 2017", "usfda", "510k", "510(k)",
    "estar", "eumdr", "euivdr", "mdsap", "notified body", "fda", "recall",
    "ce mark", "ivdr", "mdcg", "de novo", "pma", "guidance", "clearance",
];

// ── Raw RSS item type ──────────────────────────────────────────────────────────

interface RawItem {
    title: string;
    link: string;
    description?: string;
    pubDate?: string;
    feed_source: string;
}

// ── URL decoding (Google News wraps real URLs in Base64) ────────────────────────

function decodeGoogleNewsUrl(url: string): string {
    if (!url.includes("articles/CBMi") && !url.includes("articles/CAAq")) return url;
    try {
        let b64 = url.split("articles/")[1].split("?")[0];
        b64 = b64.replace(/-/g, "+").replace(/_/g, "/");
        while (b64.length % 4 !== 0) b64 += "=";
        const decoded = atob(b64);
        const match = decoded.match(/https?:\/\/[^\s\x00-\x1F\x7F"\\]+/);
        return match ? match[0] : url;
    } catch {
        return url;
    }
}

// ── RSS XML Parser ─────────────────────────────────────────────────────────────

function parseRssFeed(xml: string, label: string): RawItem[] {
    try {
        const parser = new XMLParser({ ignoreAttributes: false });
        const result = parser.parse(xml);
        const channel = result?.rss?.channel ?? result?.feed ?? result?.["rdf:RDF"]?.channel;
        if (!channel) return [];

        const items: unknown[] = Array.isArray(channel.item)
            ? channel.item
            : channel.item ? [channel.item]
            : Array.isArray(channel.entry) ? channel.entry
            : channel.entry ? [channel.entry]
            : [];

        return items
            .map((item: unknown) => {
                const i = item as Record<string, unknown>;
                const rawUrl = String(
                    i["link"] ??
                    (typeof i["link"] === "object"
                        ? (i["link"] as Record<string, unknown>)["@_href"]
                        : "") ?? ""
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

// ── Keyword pre-filter ─────────────────────────────────────────────────────────

function keywordMatch(item: RawItem): boolean {
    if (item.feed_source === "FDA CDRH" || item.feed_source === "EU MDCG") return true;
    const haystack = `${item.title} ${item.description ?? ""}`.toLowerCase();
    return KEYWORDS.some((kw) => haystack.includes(kw));
}

// ── Fetch a single RSS feed ────────────────────────────────────────────────────

async function fetchFeed(url: string, label: string): Promise<RawItem[]> {
    try {
        const res = await fetch(url, {
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36",
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

// ── Agency classification from feed source ─────────────────────────────────────

function classifyAgency(item: RawItem): SourceAgency {
    if (item.feed_source === "FDA CDRH") return "USFDA";
    if (item.feed_source === "EU MDCG") return "EU_MDR";
    if (item.feed_source.includes("Google")) {
        const lower = (item.title + " " + (item.description ?? "")).toLowerCase();
        if (lower.includes("cdsco") || lower.includes("dcgi") || lower.includes("india")) return "CDSCO";
        if (lower.includes("fda") || lower.includes("510k") || lower.includes("recall")) return "USFDA";
        if (lower.includes("mdr") || lower.includes("ivdr") || lower.includes("ce mark") || lower.includes("eu ")) return "EU_MDR";
        if (lower.includes("mdsap")) return "MDSAP";
    }
    return "OTHER"; // STEP 5: default is OTHER, not CDSCO
}

// ── AI Prompt Builder ──────────────────────────────────────────────────────────

function buildPrompt(items: RawItem[]): string {
    const itemList = items
        .map(
            (it, i) =>
                `[${i + 1}] TITLE: ${it.title}\nSNIPPET: ${(it.description ?? "").slice(0, 120)}`
        )
        .join("\n\n");

    return `You are a regulatory intelligence analyst for the medical devices industry.

For EACH item below, analyze and return a JSON object with these fields:

- "is_relevant": boolean — true if this is a genuine regulatory/compliance update for the medical device industry. false if it's a general business article, stock market news, or unrelated content.
- "update_type": one of "Guidance" | "Recall" | "Final Rule" | "Warning Letter" | "Draft Guidance" | "Safety Alert" | "Notification" | "Standard Update" | "Other"
- "impact": one of "High" | "Medium" | "Low"
- "jurisdiction": string — e.g. "USA", "India", "EU", "Global", "Canada", "Australia"
- "device_types": array of strings — e.g. ["IVD", "Class III Implant"], or ["General"] if not specific
- "summary": string — 1 to 3 sentences, max 50 words. A concise professional summary of the regulatory significance.
- "effective_date": string — ISO date if mentioned, otherwise ""
- "deadline": string — ISO date if mentioned, otherwise ""
- "action_required": string — brief action manufacturers must take, or "" if none mentioned
- "source_agency": one of "CDSCO" | "USFDA" | "EU_MDR" | "MDSAP" | "OTHER"

Return ONLY a raw JSON array. No markdown. No explanation. No wrapping object.

ITEMS:
${itemList}`;
}

// ── Groq AI Caller ─────────────────────────────────────────────────────────────

async function callAI(
    prompt: string,
    items: RawItem[]
): Promise<RegulatoryItem[]> {
    const apiKey = process.env.GROQ_API_KEY ?? "";
    if (!apiKey) {
        console.error("[RegulatoryFeed] GROQ_API_KEY not found in environment.");
        return [];
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
            console.error(`[RegulatoryFeed] Groq API error ${res.status}:`, errText.slice(0, 200));
            return [];
        }

        const json = (await res.json()) as {
            choices?: { message?: { content?: string } }[];
        };
        const raw = json.choices?.[0]?.message?.content ?? "[]";

        // Strip <think> tags, markdown fences, and extract JSON array
        let cleanJson = raw;
        const arrayMatch = raw.match(/\[\s*\{[\s\S]*\}\s*\]/);
        if (arrayMatch) {
            cleanJson = arrayMatch[0];
        } else {
            cleanJson = raw.replace(/<think>[\s\S]*?<\/think>/g, "").trim();
            cleanJson = cleanJson.replace(/```json/g, "").replace(/```/g, "").trim();
        }

        const parsed = JSON.parse(cleanJson);
        if (!Array.isArray(parsed)) {
            console.error("[RegulatoryFeed] AI did not return an array.");
            return [];
        }

        // Validate each item with Zod, filter by is_relevant, merge source data
        const results: RegulatoryItem[] = [];
        for (let idx = 0; idx < parsed.length; idx++) {
            const validation = AIItemSchema.safeParse(parsed[idx]);
            if (!validation.success) {
                console.warn(`[RegulatoryFeed] Item ${idx + 1} failed Zod validation:`, validation.error.issues[0]?.message);
                continue;
            }

            const aiItem = validation.data;

            // STEP: AI relevance filtering — drop irrelevant items
            if (!aiItem.is_relevant) {
                continue;
            }

            const originalItem = items[idx];
            if (!originalItem) continue;

            // Merge AI output with original RSS data (source_url & published_date from RSS, NOT AI)
            const { is_relevant: _, ...aiFields } = aiItem;
            results.push({
                title: originalItem.title,
                source_url: originalItem.link, // STEP 4: always from RSS
                published_date: originalItem.pubDate ?? "",
                ...aiFields,
            });
        }

        return results;
    } catch (err) {
        console.error("[RegulatoryFeed] AI call failed:", err);
        return [];
    }
}

// ── Main Export ─────────────────────────────────────────────────────────────────

export async function fetchRegulatoryFeed(): Promise<RegulatoryItem[]> {
    console.log("[RegulatoryFeed] Pipeline started.");

    // 1. Fetch all feeds in parallel
    const rawArrays = await Promise.all(FEEDS.map((f) => fetchFeed(f.url, f.label)));
    const allItems = rawArrays.flat();
    console.log(`[RegulatoryFeed] Fetched ${allItems.length} raw items.`);

    // 2. Keyword pre-filter (cheap, saves AI tokens)
    const filtered = allItems.filter(keywordMatch);
    console.log(`[RegulatoryFeed] ${filtered.length} items passed keyword filter.`);

    if (filtered.length === 0) {
        return []; // STEP 7: no mock fallback — just empty
    }

    // 3. Sort by date (newest first)
    const sorted = filtered.sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
        const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
        return dateB - dateA;
    });

    // 4. Pick top 2 per category
    const fdaItems = sorted.filter((i) => i.feed_source === "FDA CDRH").slice(0, 2);
    const euItems = sorted.filter((i) => i.feed_source === "EU MDCG").slice(0, 2);
    const googleItems = sorted.filter((i) => i.feed_source.includes("Google")).slice(0, 2);
    const topItems = [...fdaItems, ...euItems, ...googleItems];
    console.log(`[RegulatoryFeed] Selected ${topItems.length} top items for AI processing.`);

    // 5. Send to AI for relevance + classification + metadata extraction
    const prompt = buildPrompt(topItems);
    const results = await callAI(prompt, topItems);
    console.log(`[RegulatoryFeed] AI returned ${results.length} relevant items.`);

    return results;
}

// ── Server Function Wrapper ────────────────────────────────────────────────────
export const fetchRegulatoryFeedFn = createServerFn({ method: "GET" }).handler(
    fetchRegulatoryFeed,
);

// Re-export types for the frontend
export type { RegulatoryItem, SourceAgency } from "~/lib/regulatorySchema";
