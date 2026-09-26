/**
 * src/server/regulatoryFeed.ts
 *
 * Fetches RSS feeds, keyword-filters, and calls Groq to generate
 * rich newsletter-ready summaries (headline + 2-sentence summary + action note).
 * Imported directly by scripts/send-newsletter.ts.
 */

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
        url: "https://www.fda.gov/AboutFDA/ContactFDA/StayInformed/RSSFeeds/MedWatch/rss.xml",
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

const KEYWORDS = [
    "Cdsco", "Medical device", "Ivd", "MDR 2017",
    "USFDA 510k", "estar", "eumdr", "euivdr",
    "mdsap", "notified body",
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
        b64 = b64.replace(/-/g, "+").replace(/_/g, "/");
        while (b64.length % 4 !== 0) b64 += "=";
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
    if (item.feed_source === "FDA CDRH" || item.feed_source === "EU MDCG") return true;
    const haystack = `${item.title} ${item.description ?? ""}`.toLowerCase();
    return KEYWORDS.some((kw) => haystack.includes(kw.toLowerCase()));
}

async function fetchFeed(url: string, label: string): Promise<RawItem[]> {
    try {
        const res = await fetch(url, {
            headers: { "User-Agent": "RegulatoryBot/1.0" },
            signal: AbortSignal.timeout(8_000),
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
    const itemList = items.map((it, i) => `[${i + 1}] TITLE: ${it.title}`).join("\n");
    return `You are a regulatory intelligence editor writing a weekly newsletter for MedTech professionals.

For each feed item below, write:
- "headline": a punchy rewritten headline (max 12 words)
- "summary": 2 sentences — what happened + why it matters to MedTech companies
- "action": one-line "Action required" note IF urgent, otherwise empty string ""

Return ONLY a valid JSON array of objects with keys: headline, summary, action.
No markdown, no commentary. Raw JSON only.

ITEMS:
${itemList}`;
}

async function callGroq(prompt: string): Promise<{ headline: string; summary: string; action: string }[]> {
    const apiKey = process.env.GROQ_API_KEY ?? "";
    if (!apiKey) throw new Error("GROQ_API_KEY not set.");

    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "compound-beta-mini",
            temperature: 0.2,
            messages: [{ role: "user", content: prompt }],
        }),
        signal: AbortSignal.timeout(30_000),
    });

    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Groq API error ${res.status}: ${errText.slice(0, 200)}`);
    }

    const json = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    let raw = json.choices?.[0]?.message?.content ?? "[]";

    // Strip markdown fences if present
    const arrayMatch = raw.match(/\[\s*\{[\s\S]*\}\s*\]/);
    if (arrayMatch) raw = arrayMatch[0];
    else raw = raw.replace(/<think>[\s\S]*?<\/think>/g, "").replace(/```json/g, "").replace(/```/g, "").trim();

    return JSON.parse(raw);
}

const MOCK_ITEMS: RegulatoryItem[] = [
    {
        title: "CDSCO Issues Revised IVD Import Licensing Guidelines 2024",
        source_agency: "CDSCO",
        summary: "CDSCO has updated IVD import licensing rules requiring all manufacturers to resubmit documentation under the revised framework by March 2025. Companies importing IVD products must act before the deadline to avoid shipment holds.",
        source_url: "https://cdsco.gov.in/opencms/opencms/en/Medical-Device-Diagnostics/",
    },
    {
        title: "FDA Finalizes eSTAR Electronic Submission Template v3.2",
        source_agency: "USFDA",
        summary: "FDA mandates eSTAR v3.2 for all 510(k) and De Novo submissions, with paper format discontinued after the 90-day transition window. Manufacturers must update submission workflows immediately.",
        source_url: "https://www.fda.gov/medical-devices/how-study-and-market-your-device/estar",
    },
    {
        title: "EU MDR Notified Body Audit Capacity Constraints — Q4 2024",
        source_agency: "EU_MDR",
        summary: "EU Commission warns of continued Notified Body bottlenecks, urging manufacturers to book MDR conformity assessment audits well ahead of 2027 deadlines. Delays of 12-18 months are common.",
        source_url: "https://health.ec.europa.eu/medical-devices-topics-interest/notified-bodies-and-eudamed_en",
    },
    {
        title: "MDSAP Audit Approach Document Updated for 2025 Cycle",
        source_agency: "MDSAP",
        summary: "The MDSAP consortium released revised audit approach documents with grading methodology changes effective for all 2025 surveillance and certification audits. Manufacturers should review updated non-conformity escalation criteria.",
        source_url: "https://www.who.int/teams/regulation-prequalification/regulation-and-safety/medical-devices/mdsap",
    },
];

export async function fetchRegulatoryFeedForNewsletter(): Promise<RegulatoryItem[]> {
    console.log("[Feed] Fetching RSS feeds...");
    const rawArrays = await Promise.all(FEEDS.map((f) => fetchFeed(f.url, f.label)));
    const allItems = rawArrays.flat();
    const filtered = allItems.filter(keywordMatch);

    const sorted = filtered.sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
        const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
        return dateB - dateA;
    });

    if (sorted.length === 0) {
        console.log("[Feed] No live items — using mock data.");
        return MOCK_ITEMS;
    }

    const fdaItems = sorted.filter((i) => i.feed_source === "FDA CDRH").slice(0, 2);
    const euItems = sorted.filter((i) => i.feed_source === "EU MDCG").slice(0, 2);
    const googleItems = sorted.filter((i) => i.feed_source.includes("Google")).slice(0, 3);
    const topItems = [...fdaItems, ...euItems, ...googleItems];

    const preClassified: RegulatoryItem[] = topItems.map((item) => {
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
        console.log(`[Feed] Calling Groq for ${topItems.length} items...`);
        const aiResults = await callGroq(buildPrompt(topItems));
        return preClassified.map((item, idx) => {
            const ai = aiResults[idx];
            const headline = ai?.headline && !ai.headline.startsWith("{") ? ai.headline : item.title;
            const summary = ai?.summary && !ai.summary.startsWith("{") ? ai.summary : item.title;
            return { ...item, title: headline, summary };
        });
    } catch (err) {
        console.warn("[Feed] Groq call failed, using raw titles:", err);
        return preClassified.map((item) => ({ ...item, summary: item.title }));
    }
}
