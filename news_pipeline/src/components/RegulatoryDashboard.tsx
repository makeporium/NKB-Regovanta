import { useState, useMemo } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import type {
    RegulatoryItem,
    SourceAgency,
    UpdateType,
    Impact,
} from "~/lib/regulatorySchema";

// ── Config Maps ────────────────────────────────────────────────────────────────

const AGENCY_CONFIG: Record<
    SourceAgency | "ALL",
    { label: string; color: string; bg: string }
> = {
    ALL:    { label: "All Agencies", color: "text-zinc-300",    bg: "bg-zinc-700" },
    CDSCO:  { label: "CDSCO",       color: "text-orange-300",  bg: "bg-orange-600" },
    USFDA:  { label: "US FDA",      color: "text-blue-300",    bg: "bg-blue-600" },
    EU_MDR: { label: "EU MDR",      color: "text-emerald-300", bg: "bg-emerald-600" },
    MDSAP:  { label: "MDSAP",       color: "text-violet-300",  bg: "bg-violet-600" },
    OTHER:  { label: "Other",       color: "text-zinc-400",    bg: "bg-zinc-600" },
};

const IMPACT_STYLES: Record<Impact, { color: string; dot: string }> = {
    High:   { color: "text-red-400",    dot: "bg-red-400" },
    Medium: { color: "text-amber-400",  dot: "bg-amber-400" },
    Low:    { color: "text-emerald-400", dot: "bg-emerald-400" },
};

const UPDATE_TYPE_COLOR: Record<string, string> = {
    "Recall":         "border-red-700/40 text-red-400 bg-red-950/40",
    "Warning Letter": "border-red-700/40 text-red-400 bg-red-950/40",
    "Safety Alert":   "border-amber-700/40 text-amber-400 bg-amber-950/40",
    "Final Rule":     "border-blue-700/40 text-blue-400 bg-blue-950/40",
    "Guidance":       "border-emerald-700/40 text-emerald-400 bg-emerald-950/40",
    "Draft Guidance": "border-teal-700/40 text-teal-400 bg-teal-950/40",
    "Notification":   "border-violet-700/40 text-violet-400 bg-violet-950/40",
    "Standard Update":"border-zinc-700/40 text-zinc-400 bg-zinc-900/40",
    "Other":          "border-zinc-700/40 text-zinc-400 bg-zinc-900/40",
};

const AGENCIES: (SourceAgency | "ALL")[] = ["ALL", "CDSCO", "USFDA", "EU_MDR", "MDSAP"];

// ── Sub-components ─────────────────────────────────────────────────────────────

function FilterPill({
    label,
    active,
    onClick,
    activeClass,
}: {
    label: string;
    active: boolean;
    onClick: () => void;
    activeClass?: string;
}) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 ${
                active
                    ? `${activeClass ?? "bg-zinc-700 text-white"} border-transparent shadow-lg`
                    : "border-zinc-700 bg-zinc-900/60 text-zinc-400 hover:border-zinc-500 hover:bg-zinc-800/60"
            }`}
        >
            {label}
        </button>
    );
}

function MetaRow({ icon, label, value }: { icon: string; label: string; value: string }) {
    if (!value || value === "N/A") return null;
    return (
        <div className="flex items-start gap-2 text-xs">
            <span className="text-zinc-600 shrink-0 mt-0.5">{icon}</span>
            <span className="text-zinc-500 shrink-0">{label}:</span>
            <span className="text-zinc-300">{value}</span>
        </div>
    );
}

function FeedCard({ item }: { item: RegulatoryItem }) {
    const agencyCfg = AGENCY_CONFIG[item.source_agency] || AGENCY_CONFIG["OTHER"];
    const impactCfg = IMPACT_STYLES[item.impact] || IMPACT_STYLES["Low"];
    const updateTypeStyle = UPDATE_TYPE_COLOR[item.update_type] || UPDATE_TYPE_COLOR["Other"];

    return (
        <article className="glass group relative flex flex-col gap-3 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-600/50 hover:shadow-xl hover:shadow-zinc-900/50">
            {/* Top badges row */}
            <div className="flex flex-wrap items-center gap-2">
                {/* Agency */}
                <span className={`rounded-md bg-zinc-800/80 px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase ${agencyCfg.color}`}>
                    {item.source_agency.replace("_", " ")}
                </span>
                {/* Update Type */}
                <span className={`rounded-md border px-2 py-0.5 text-[10px] font-semibold ${updateTypeStyle}`}>
                    {item.update_type}
                </span>
                {/* Impact */}
                <span className={`inline-flex items-center gap-1 text-[10px] font-medium ${impactCfg.color}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${impactCfg.dot}`} />
                    {item.impact}
                </span>
            </div>

            {/* Title */}
            <h2 className="text-sm font-semibold leading-snug text-zinc-50 group-hover:text-white">
                {item.title}
            </h2>

            {/* Summary */}
            <p className="text-sm leading-relaxed text-zinc-400">{item.summary}</p>

            {/* Metadata grid */}
            <div className="space-y-1.5 border-t border-zinc-800/60 pt-3">
                <MetaRow icon="🌍" label="Jurisdiction" value={item.jurisdiction} />
                <MetaRow icon="🏥" label="Device Types" value={item.device_types.join(", ")} />
                {item.effective_date && (
                    <MetaRow icon="📅" label="Effective Date" value={item.effective_date} />
                )}
                {item.deadline && (
                    <MetaRow icon="⏰" label="Deadline" value={item.deadline} />
                )}
                {item.action_required && (
                    <MetaRow icon="⚡" label="Action Required" value={item.action_required} />
                )}
                {item.published_date && (
                    <MetaRow icon="📰" label="Published" value={new Date(item.published_date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })} />
                )}
            </div>

            {/* Source link */}
            <div className="flex items-center justify-end pt-1 mt-auto">
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <a
                            href={item.source_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:bg-zinc-800 hover:text-zinc-200"
                        >
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                            Original Source
                        </a>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content className="max-w-[260px] truncate rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-zinc-300 shadow-xl" sideOffset={6}>
                            {item.source_url}
                            <Tooltip.Arrow className="fill-zinc-800" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </div>
        </article>
    );
}

// ── Main Dashboard ─────────────────────────────────────────────────────────────

interface RegulatoryDashboardProps {
    items: RegulatoryItem[];
    cachedAt?: string;
}

export function RegulatoryDashboard({ items, cachedAt }: RegulatoryDashboardProps) {
    const [search, setSearch] = useState("");
    const [agency, setAgency] = useState<SourceAgency | "ALL">("ALL");
    const [updateType, setUpdateType] = useState<UpdateType | "ALL">("ALL");
    const [impact, setImpact] = useState<Impact | "ALL">("ALL");

    // Derive unique values for filter dropdowns
    const uniqueUpdateTypes = useMemo(() => {
        const set = new Set(items.map((i) => i.update_type));
        return Array.from(set).sort();
    }, [items]);

    const filtered = useMemo(() => {
        const q = search.toLowerCase().trim();
        return items.filter((item) => {
            const agencyOk = agency === "ALL" || item.source_agency === agency;
            const typeOk = updateType === "ALL" || item.update_type === updateType;
            const impactOk = impact === "ALL" || item.impact === impact;
            const searchOk =
                !q ||
                item.title.toLowerCase().includes(q) ||
                item.summary.toLowerCase().includes(q) ||
                item.jurisdiction.toLowerCase().includes(q) ||
                item.device_types.some((d) => d.toLowerCase().includes(q));
            return agencyOk && typeOk && impactOk && searchOk;
        });
    }, [items, search, agency, updateType, impact]);

    const clearFilters = () => {
        setSearch("");
        setAgency("ALL");
        setUpdateType("ALL");
        setImpact("ALL");
    };

    return (
        <Tooltip.Provider delayDuration={300}>
            <div className="min-h-screen bg-zinc-950 px-4 py-8 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl space-y-6">
                    {/* ── Header ── */}
                    <header className="space-y-1">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/20 border border-blue-500/30">
                                        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                                        </svg>
                                    </div>
                                    <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
                                        Regulatory Intelligence
                                    </h1>
                                    <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 border border-emerald-700/40 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        LIVE
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-500">
                                    AI-structured feed · FDA, CDSCO, EU MDR & MDSAP
                                    {cachedAt && (
                                        <span className="ml-2 text-zinc-600">· Updated {cachedAt}</span>
                                    )}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold tabular-nums text-zinc-100">{filtered.length}</p>
                                <p className="text-xs text-zinc-500">
                                    {filtered.length === items.length ? "total notices" : `of ${items.length} notices`}
                                </p>
                            </div>
                        </div>
                    </header>

                    <div className="h-px bg-zinc-800" />

                    {/* ── Controls ── */}
                    <div className="space-y-4">
                        {/* Row 1: Search + Agency pills */}
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="relative">
                                <svg className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                                <input
                                    type="search"
                                    placeholder="Search notices…"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full rounded-lg border border-zinc-700 bg-zinc-900/80 py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-500 outline-none transition focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20 sm:w-72"
                                />
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {AGENCIES.map((a) => (
                                    <FilterPill
                                        key={a}
                                        label={AGENCY_CONFIG[a].label}
                                        active={agency === a}
                                        onClick={() => setAgency(a)}
                                        activeClass={`${AGENCY_CONFIG[a].bg} text-white`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Row 2: Update Type + Impact filters */}
                        <div className="flex flex-wrap items-center gap-3">
                            {/* Update Type dropdown */}
                            <select
                                value={updateType}
                                onChange={(e) => setUpdateType(e.target.value as UpdateType | "ALL")}
                                className="rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-xs text-zinc-300 outline-none transition focus:border-blue-500/70 focus:ring-2 focus:ring-blue-500/20"
                            >
                                <option value="ALL">All Update Types</option>
                                {uniqueUpdateTypes.map((t) => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>

                            {/* Impact pills */}
                            {(["ALL", "High", "Medium", "Low"] as const).map((lvl) => (
                                <FilterPill
                                    key={lvl}
                                    label={lvl === "ALL" ? "All Impact" : `${lvl} Impact`}
                                    active={impact === lvl}
                                    onClick={() => setImpact(lvl)}
                                    activeClass={
                                        lvl === "High" ? "bg-red-600 text-white"
                                        : lvl === "Medium" ? "bg-amber-600 text-white"
                                        : lvl === "Low" ? "bg-emerald-600 text-white"
                                        : "bg-zinc-700 text-white"
                                    }
                                />
                            ))}

                            {/* Clear all */}
                            {(agency !== "ALL" || updateType !== "ALL" || impact !== "ALL" || search) && (
                                <button
                                    onClick={clearFilters}
                                    className="text-xs text-blue-400 hover:underline ml-auto"
                                >
                                    Clear all filters
                                </button>
                            )}
                        </div>
                    </div>

                    {/* ── Feed Grid ── */}
                    {filtered.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <svg className="h-12 w-12 text-zinc-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p className="text-zinc-500 text-sm">
                                {items.length === 0
                                    ? "Unable to load live updates. Check your API key and try refreshing."
                                    : "No notices match your filters."}
                            </p>
                            {items.length > 0 && (
                                <button onClick={clearFilters} className="mt-3 text-xs text-blue-400 hover:underline">
                                    Clear filters
                                </button>
                            )}
                        </div>
                    ) : (
                        <ScrollArea.Root className="relative">
                            <ScrollArea.Viewport>
                                <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
                                    {filtered.map((item, idx) => (
                                        <FeedCard key={`${item.source_url}-${idx}`} item={item} />
                                    ))}
                                </div>
                            </ScrollArea.Viewport>
                            <ScrollArea.Scrollbar orientation="vertical" className="flex w-1.5 touch-none select-none rounded-full bg-zinc-800 p-px">
                                <ScrollArea.Thumb className="flex-1 rounded-full bg-zinc-600 hover:bg-zinc-500" />
                            </ScrollArea.Scrollbar>
                        </ScrollArea.Root>
                    )}

                    {/* ── Footer ── */}
                    <footer className="border-t border-zinc-800/60 pt-6 text-center">
                        <p className="text-xs text-zinc-600">
                            Powered by Groq AI · Real-time regulatory intelligence ·{" "}
                            <span className="text-zinc-500">
                                Data sourced from FDA, CDSCO, EU Commission & MDSAP public feeds
                            </span>
                        </p>
                    </footer>
                </div>
            </div>
        </Tooltip.Provider>
    );
}
