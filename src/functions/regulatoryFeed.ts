"use server";
import { createServerFn } from "@tanstack/react-start";
import { XMLParser } from "fast-xml-parser";
import {
    AIItemSchema,
    type RegulatoryItem,
    type SourceAgency,
    type UpdateType,
    type Impact,
} from "@/lib/regulatorySchema";

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
        let b64 = url.split("articles/")[1]?.split("?")[0];
        if (!b64) return url;
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
    return "OTHER";
}

// ── Fallback parser if Gemini API key is missing or calls fail ──────────────────

function fallbackFromRss(items: RawItem[]): RegulatoryItem[] {
    return items.map((it) => {
        const agency = classifyAgency(it);
        const lower = (it.title + " " + (it.description ?? "")).toLowerCase();
        let update_type: UpdateType = "Other";
        if (lower.includes("recall")) update_type = "Recall";
        else if (lower.includes("warning letter")) update_type = "Warning Letter";
        else if (lower.includes("draft guidance")) update_type = "Draft Guidance";
        else if (lower.includes("guidance")) update_type = "Guidance";
        else if (lower.includes("safety alert") || lower.includes("alert")) update_type = "Safety Alert";
        else if (lower.includes("final rule") || lower.includes("rule")) update_type = "Final Rule";
        else if (lower.includes("notification")) update_type = "Notification";
        else if (lower.includes("standard")) update_type = "Standard Update";

        let impact: Impact = "Medium";
        if (update_type === "Recall" || update_type === "Warning Letter" || lower.includes("urgent")) impact = "High";
        else if (update_type === "Guidance" || update_type === "Final Rule") impact = "Medium";
        else impact = "Low";

        let jurisdiction = "Global";
        if (agency === "CDSCO") jurisdiction = "India";
        else if (agency === "USFDA") jurisdiction = "USA";
        else if (agency === "EU_MDR") jurisdiction = "EU";
        else if (agency === "MDSAP") jurisdiction = "MDSAP / Global";

        const cleanSummary = (it.description ?? "")
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .trim()
            .slice(0, 200) || it.title;

        return {
            title: it.title,
            source_url: it.link,
            published_date: it.pubDate ?? "",
            source_agency: agency,
            update_type,
            impact,
            jurisdiction,
            device_types: lower.includes("ivd") ? ["IVD"] : ["Medical Devices"],
            summary: cleanSummary.length > 0 ? cleanSummary : "Regulatory notice retrieved from official regulatory channels.",
            effective_date: "",
            deadline: "",
            action_required: "Review notice requirements for product portfolio impact.",
        };
    });
}

// ── AI Prompt Builder ──────────────────────────────────────────────────────────

function buildPrompt(items: RawItem[]): string {
    const itemList = items
        .map(
            (it, i) =>
                `[${i + 1}] TITLE: ${it.title}\nRAW SNIPPET: ${(it.description ?? "").replace(/<[^>]*>/g, "").slice(0, 180)}`
        )
        .join("\n\n");

    return `You are a Senior Regulatory Affairs Specialist for the global medical device, IVD, and pharmaceutical industry.

Analyze each of the following news notices and rewrite them into structured regulatory intelligence for executive manufacturers and compliance teams.

For EACH item, produce a JSON object with these EXACT keys:
- "is_relevant": boolean (true if this is a legitimate medical device, IVD, pharma, or healthcare regulatory update; false if general stock news, marketing spam, or irrelevant)
- "update_type": one of "Guidance" | "Recall" | "Final Rule" | "Warning Letter" | "Draft Guidance" | "Safety Alert" | "Notification" | "Standard Update" | "Other"
- "impact": one of "High" | "Medium" | "Low" (High for recalls, safety alerts, bans, major rule changes; Medium for guidances and standard updates; Low for general notifications)
- "jurisdiction": string (e.g. "USA", "India", "EU", "Global", "UK", "Canada", "Australia")
- "device_types": array of strings (e.g. ["IVD"], ["Class III Implants"], ["Orthopedic Devices"], ["Software as a Medical Device"], or ["General Medical Devices"])
- "summary": string (1 to 2 clear, authoritative, rewritten sentences in professional regulatory consulting tone. Max 45 words. Do NOT just copy the snippet; explain the practical compliance significance).
- "effective_date": string (ISO date if mentioned, otherwise "")
- "deadline": string (ISO date if mentioned, otherwise "")
- "action_required": string (Action manufacturers/RA teams should take, e.g. "Audit STED file", "Submit 510(k) change notice", "Check UDI compliance", or "Review applicability to product line")
- "source_agency": one of "CDSCO" | "USFDA" | "EU_MDR" | "MDSAP" | "OTHER"

Return ONLY a raw JSON array matching this schema. No markdown backticks, no preamble, no explanations.

ITEMS TO ANALYZE:
${itemList}`;
}

// ── Google Gemini AI Caller ────────────────────────────────────────────────────

async function callGeminiAI(
    prompt: string,
    items: RawItem[]
): Promise<RegulatoryItem[]> {
    // Read API key (support GEMINI_API_KEY, GOOGLE_API_KEY, or fallback GROQ_API_KEY)
    const apiKey =
        (typeof process !== "undefined" && (process.env?.GEMINI_API_KEY || process.env?.GOOGLE_API_KEY)) ||
        (import.meta as any).env?.GEMINI_API_KEY ||
        (import.meta as any).env?.GOOGLE_API_KEY ||
        "";

    if (!apiKey || apiKey === "your_gemini_api_key_here" || apiKey === "your_groq_api_key_here") {
        console.warn("[RegulatoryFeed] GEMINI_API_KEY not set in .env. Using structured RSS fallback.");
        return [];
    }

    // Try Gemini 2.0 Flash first, fallback to 1.5 Flash if needed
    const models = ["gemini-2.0-flash", "gemini-1.5-flash"];

    for (const model of models) {
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [{ text: prompt }],
                        },
                    ],
                    generationConfig: {
                        responseMimeType: "application/json",
                        temperature: 0.1,
                    },
                }),
                signal: AbortSignal.timeout(30_000),
            });

            if (!res.ok) {
                const errText = await res.text();
                console.warn(`[RegulatoryFeed] Gemini (${model}) API error ${res.status}:`, errText.slice(0, 160));
                continue; // try next model
            }

            const data = (await res.json()) as {
                candidates?: {
                    content?: {
                        parts?: { text?: string }[];
                    };
                }[];
            };

            const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "[]";

            // Clean any potential wrapper or fences
            let cleanJson = rawText.trim();
            if (cleanJson.startsWith("```json")) {
                cleanJson = cleanJson.replace(/^```json/, "").replace(/```$/, "").trim();
            } else if (cleanJson.startsWith("```")) {
                cleanJson = cleanJson.replace(/^```/, "").replace(/```$/, "").trim();
            }

            const parsed = JSON.parse(cleanJson);
            if (!Array.isArray(parsed)) {
                console.warn(`[RegulatoryFeed] Gemini (${model}) returned non-array JSON.`);
                continue;
            }

            // Validate each item with Zod, filter by is_relevant, merge original RSS links
            const results: RegulatoryItem[] = [];
            for (let idx = 0; idx < parsed.length; idx++) {
                const validation = AIItemSchema.safeParse(parsed[idx]);
                if (!validation.success) {
                    console.warn(`[RegulatoryFeed] Item ${idx + 1} failed schema validation:`, validation.error.issues[0]?.message);
                    continue;
                }

                const aiItem = validation.data;
                if (!aiItem.is_relevant) {
                    continue; // Skip filtered irrelevant articles
                }

                const originalItem = items[idx];
                if (!originalItem) continue;

                const { is_relevant: _, ...aiFields } = aiItem;
                results.push({
                    title: originalItem.title,
                    source_url: originalItem.link,
                    published_date: originalItem.pubDate ?? "",
                    ...aiFields,
                });
            }

            if (results.length > 0) {
                console.log(`[RegulatoryFeed] Gemini (${model}) successfully processed ${results.length} relevant notices.`);
                return results;
            }
        } catch (err) {
            console.error(`[RegulatoryFeed] Error calling Gemini with ${model}:`, err);
        }
    }

    return [];
}

// ── Main Export ─────────────────────────────────────────────────────────────────

export async function fetchRegulatoryFeed(): Promise<RegulatoryItem[]> {
    console.log("[RegulatoryFeed] Regulatory Pipeline triggered.");

    // 1. Fetch all feeds in parallel
    const rawArrays = await Promise.all(FEEDS.map((f) => fetchFeed(f.url, f.label)));
    const allItems = rawArrays.flat();
    console.log(`[RegulatoryFeed] Fetched ${allItems.length} raw notices.`);

    // 2. Keyword pre-filter
    const filtered = allItems.filter(keywordMatch);
    console.log(`[RegulatoryFeed] ${filtered.length} notices passed compliance keyword filter.`);

    if (filtered.length === 0) {
        return [];
    }

    // 3. Sort by date (newest first)
    const sorted = filtered.sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
        const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
        return dateB - dateA;
    });

    // 4. Pick top items per source
    const fdaItems = sorted.filter((i) => i.feed_source === "FDA CDRH").slice(0, 3);
    const euItems = sorted.filter((i) => i.feed_source === "EU MDCG").slice(0, 3);
    const googleItems = sorted.filter((i) => i.feed_source.includes("Google")).slice(0, 4);
    const topItems = [...fdaItems, ...euItems, ...googleItems];

    // 5. Send to Gemini AI for analysis and rewriting
    const prompt = buildPrompt(topItems);
    const results = await callGeminiAI(prompt, topItems);

    if (results.length > 0) {
        return results;
    }

    // 6. Graceful fallback if GEMINI_API_KEY is not yet added
    console.log("[RegulatoryFeed] Returning structured RSS fallback notices.");
    return fallbackFromRss(topItems);
}

// ── Server Function Wrapper ────────────────────────────────────────────────────
export const fetchRegulatoryFeedFn = createServerFn({ method: "GET" }).handler(
    fetchRegulatoryFeed,
);

// Re-export types for the frontend
export type { RegulatoryItem, SourceAgency } from "@/lib/regulatorySchema";
