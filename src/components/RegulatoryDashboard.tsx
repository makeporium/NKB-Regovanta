import { useState, useMemo } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {
    Activity,
    AlertCircle,
    Building2,
    Calendar,
    CheckCircle2,
    Clock,
    ExternalLink,
    Filter,
    Globe2,
    RefreshCw,
    Search,
    ShieldAlert,
    ShieldCheck,
    Sparkles,
    Zap,
} from "lucide-react";
import type {
    RegulatoryItem,
    SourceAgency,
    UpdateType,
    Impact,
} from "@/lib/regulatorySchema";

// ── Config Maps ────────────────────────────────────────────────────────────────

const AGENCY_CONFIG: Record<
    SourceAgency | "ALL",
    { label: string; badge: string; pillActive: string }
> = {
    ALL: {
        label: "All Agencies",
        badge: "bg-slate-100 text-slate-800 border-slate-200",
        pillActive: "bg-[#0b3a96] text-white border-[#0b3a96]",
    },
    CDSCO: {
        label: "CDSCO India",
        badge: "bg-orange-50 text-orange-800 border-orange-200",
        pillActive: "bg-orange-600 text-white border-orange-600",
    },
    USFDA: {
        label: "US FDA",
        badge: "bg-blue-50 text-[#0b3a96] border-blue-200",
        pillActive: "bg-[#0b3a96] text-white border-[#0b3a96]",
    },
    EU_MDR: {
        label: "EU MDR / IVDR",
        badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
        pillActive: "bg-emerald-700 text-white border-emerald-700",
    },
    MDSAP: {
        label: "MDSAP",
        badge: "bg-purple-50 text-purple-800 border-purple-200",
        pillActive: "bg-purple-700 text-white border-purple-700",
    },
    OTHER: {
        label: "Other Agencies",
        badge: "bg-gray-100 text-gray-800 border-gray-200",
        pillActive: "bg-gray-700 text-white border-gray-700",
    },
};

const IMPACT_STYLES: Record<Impact, { badge: string; dot: string }> = {
    High: {
        badge: "bg-rose-50 text-rose-800 border-rose-200 font-bold",
        dot: "bg-rose-500 animate-pulse",
    },
    Medium: {
        badge: "bg-amber-50 text-amber-800 border-amber-200 font-bold",
        dot: "bg-amber-500",
    },
    Low: {
        badge: "bg-emerald-50 text-emerald-800 border-emerald-200 font-bold",
        dot: "bg-emerald-500",
    },
};

const UPDATE_TYPE_BADGES: Record<string, string> = {
    Recall: "bg-rose-50 text-rose-800 border-rose-200",
    "Warning Letter": "bg-rose-50 text-rose-800 border-rose-200",
    "Safety Alert": "bg-amber-50 text-amber-800 border-amber-200",
    "Final Rule": "bg-blue-50 text-[#0b3a96] border-blue-200",
    Guidance: "bg-emerald-50 text-emerald-800 border-emerald-200",
    "Draft Guidance": "bg-teal-50 text-teal-800 border-teal-200",
    Notification: "bg-purple-50 text-purple-800 border-purple-200",
    "Standard Update": "bg-slate-100 text-slate-800 border-slate-200",
    Other: "bg-gray-100 text-gray-700 border-gray-200",
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
            type="button"
            onClick={onClick}
            className={`rounded-full border px-4 py-1.5 text-xs font-bold transition-all duration-200 cursor-pointer shadow-2xs ${
                active
                    ? `${activeClass ?? "bg-[#0b3a96] text-white border-[#0b3a96]"} shadow-md scale-[1.02]`
                    : "border-gray-200/90 bg-white text-gray-700 hover:border-[#0b3a96]/40 hover:text-[#0b3a96] hover:bg-blue-50/40"
            }`}
        >
            {label}
        </button>
    );
}

function MetaRow({
    icon: Icon,
    label,
    value,
}: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
}) {
    if (!value || value === "N/A") return null;
    return (
        <div className="flex items-start gap-2 text-xs">
            <Icon className="h-3.5 w-3.5 text-gray-400 shrink-0 mt-0.5" />
            <span className="text-gray-500 shrink-0 font-medium">{label}:</span>
            <span className="text-navy font-semibold">{value}</span>
        </div>
    );
}

function FeedCard({ item }: { item: RegulatoryItem }) {
    const agencyCfg = AGENCY_CONFIG[item.source_agency] || AGENCY_CONFIG["OTHER"];
    const impactCfg = IMPACT_STYLES[item.impact] || IMPACT_STYLES["Low"];
    const updateTypeBadge = UPDATE_TYPE_BADGES[item.update_type] || UPDATE_TYPE_BADGES["Other"];

    return (
        <article className="group relative flex flex-col justify-between rounded-3xl border border-gray-200/90 bg-white p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-[#0b3a96]/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            {/* Top Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0b3a96] via-blue-500 to-[#dca85b]" />

            <div>
                {/* Top Badges Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pt-1">
                    <div className="flex flex-wrap items-center gap-2">
                        {/* Agency Badge */}
                        <span className={`rounded-md border px-2.5 py-0.5 text-[11px] font-black uppercase tracking-wider ${agencyCfg.badge} shadow-2xs`}>
                            {item.source_agency.replace("_", " ")}
                        </span>
                        {/* Notice Type Badge */}
                        <span className={`rounded-md border px-2.5 py-0.5 text-[11px] font-bold ${updateTypeBadge}`}>
                            {item.update_type}
                        </span>
                    </div>

                    {/* Impact Level Badge */}
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] ${impactCfg.badge} shadow-2xs`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${impactCfg.dot}`} />
                        {item.impact} Impact
                    </span>
                </div>

                {/* Notice Title */}
                <h3 className="text-base sm:text-[17px] font-extrabold text-navy group-hover:text-[#0b3a96] transition-colors leading-snug mb-3 font-display">
                    {item.title}
                </h3>

                {/* Rewritten Summary */}
                <p className="text-[13.5px] sm:text-sm leading-relaxed text-gray-600 font-medium mb-5">
                    {item.summary}
                </p>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-gray-100 mt-auto">
                {/* Metadata details */}
                <div className="space-y-1.5 bg-slate-50/80 rounded-xl p-3 border border-gray-100/90">
                    <MetaRow icon={Globe2} label="Jurisdiction" value={item.jurisdiction} />
                    <MetaRow icon={Building2} label="Applicable Devices" value={item.device_types.join(", ")} />
                    {item.effective_date && (
                        <MetaRow icon={Calendar} label="Effective Date" value={item.effective_date} />
                    )}
                    {item.deadline && (
                        <MetaRow icon={Clock} label="Compliance Deadline" value={item.deadline} />
                    )}
                    {item.action_required && (
                        <MetaRow icon={Zap} label="Recommended Action" value={item.action_required} />
                    )}
                    {item.published_date && (
                        <MetaRow
                            icon={Calendar}
                            label="Published Notice"
                            value={new Date(item.published_date).toLocaleDateString("en-IN", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        />
                    )}
                </div>

                {/* Source Verification Link */}
                <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Official Regulatory Source
                    </span>
                    <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                            <a
                                href={item.source_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-xl bg-blue-50 hover:bg-[#0b3a96] text-[#0b3a96] hover:text-white px-3.5 py-1.5 text-xs font-bold transition-all duration-300 shadow-2xs border border-blue-100 group-hover:border-[#0b3a96]"
                            >
                                <span>View Notice</span>
                                <ExternalLink className="h-3 w-3" />
                            </a>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content
                                className="max-w-[320px] truncate rounded-lg bg-navy text-white px-3 py-1.5 text-xs shadow-xl z-50 border border-blue-900"
                                sideOffset={6}
                            >
                                {item.source_url}
                                <Tooltip.Arrow className="fill-navy" />
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </div>
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
            <div className="min-h-screen bg-[#f8fafc] text-navy selection:bg-[#0b3a96] selection:text-white">
                {/* ── 1. HERO SECTION (NKB Executive Theme) ── */}
                <section className="relative overflow-hidden bg-gradient-to-b from-[#071b36] via-[#0b274e] to-[#0f3468] text-white pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20 border-b border-blue-900/40">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]" />
                    <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                            <div className="max-w-3xl">
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-md mb-4">
                                    <Sparkles className="h-3.5 w-3.5 text-[#F5C754]" />
                                    <span>AI-Powered Multi-Jurisdiction Regulatory Intelligence</span>
                                </div>

                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-display">
                                    Global Regulatory Intelligence Feed
                                </h1>

                                <p className="mt-4 text-sm sm:text-base text-blue-100/90 leading-relaxed font-medium">
                                    Real-time surveillance monitoring official releases, recall notifications, safety alerts, and guidance publications from US FDA (CDRH), CDSCO India, European Commission (EU MDR/IVDR MDCG), and MDSAP.
                                </p>

                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 text-xs font-bold text-emerald-300 backdrop-blur-sm">
                                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                        LIVE PIPELINE ACTIVE
                                    </span>
                                    {cachedAt && (
                                        <span className="text-xs text-blue-200/80 font-medium">
                                            Synchronized at {cachedAt} IST
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Total Notices Counter Card */}
                            <div className="flex items-center gap-4 bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-md self-start lg:self-end shrink-0 shadow-lg">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="text-3xl sm:text-4xl font-black tabular-nums text-white leading-none">
                                        {filtered.length}
                                    </p>
                                    <p className="text-[11px] font-bold text-blue-200 uppercase tracking-wider mt-1">
                                        {filtered.length === items.length ? "Total Notices" : `of ${items.length} Filtered`}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => window.location.reload()}
                                    title="Reload latest live pipeline"
                                    className="ml-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-blue-200 hover:text-white border border-white/10 transition-all cursor-pointer shadow-xs"
                                >
                                    <RefreshCw className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 2. FEED & CONTROLS CONTAINER ── */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                    {/* Filter & Search Bar Card */}
                    <div className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-7 shadow-xs mb-8 space-y-5">
                        {/* Row 1: Search & Agency Pills */}
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                            <div className="relative flex-1 max-w-lg">
                                <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="search"
                                    placeholder="Search by keywords, device type, or topic…"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full rounded-2xl border border-gray-200 bg-slate-50/80 py-2.5 pl-10 pr-4 text-sm text-navy placeholder:text-gray-400 outline-none transition focus:bg-white focus:border-[#0b3a96] focus:ring-2 focus:ring-[#0b3a96]/10"
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                                {AGENCIES.map((a) => (
                                    <FilterPill
                                        key={a}
                                        label={AGENCY_CONFIG[a].label}
                                        active={agency === a}
                                        onClick={() => setAgency(a)}
                                        activeClass={AGENCY_CONFIG[a].pillActive}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Row 2: Notice Type & Impact Pills */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-gray-100">
                            <div className="flex flex-wrap items-center gap-3">
                                {/* Notice Type Dropdown */}
                                <div className="relative">
                                    <select
                                        value={updateType}
                                        onChange={(e) => setUpdateType(e.target.value as UpdateType | "ALL")}
                                        aria-label="Filter by notice type"
                                        className="rounded-xl border border-gray-200 bg-slate-50/80 px-3.5 py-1.5 text-xs font-bold text-navy outline-none transition focus:border-[#0b3a96] focus:bg-white cursor-pointer"
                                    >
                                        <option value="ALL">All Notice Types</option>
                                        {uniqueUpdateTypes.map((t) => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Impact Level Filter Pills */}
                                {(["ALL", "High", "Medium", "Low"] as const).map((lvl) => (
                                    <FilterPill
                                        key={lvl}
                                        label={lvl === "ALL" ? "All Impact" : `${lvl} Impact`}
                                        active={impact === lvl}
                                        onClick={() => setImpact(lvl)}
                                        activeClass={
                                            lvl === "High"
                                                ? "bg-rose-600 text-white border-rose-600"
                                                : lvl === "Medium"
                                                ? "bg-amber-600 text-white border-amber-600"
                                                : lvl === "Low"
                                                ? "bg-emerald-600 text-white border-emerald-600"
                                                : "bg-[#0b3a96] text-white border-[#0b3a96]"
                                        }
                                    />
                                ))}
                            </div>

                            {/* Reset Filter Button */}
                            {(agency !== "ALL" || updateType !== "ALL" || impact !== "ALL" || search) && (
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="text-xs font-bold text-[#0b3a96] hover:underline cursor-pointer transition-colors"
                                >
                                    Reset Filters
                                </button>
                            )}
                        </div>
                    </div>

                    {/* ── 3. FEED GRID ── */}
                    {filtered.length === 0 ? (
                        <div className="rounded-3xl border border-gray-200/90 bg-white p-12 text-center shadow-xs">
                            <ShieldAlert className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-navy mb-2">
                                {items.length === 0
                                    ? "Synchronizing Live Feeds…"
                                    : "No Matching Regulatory Notices"}
                            </h3>
                            <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                                {items.length === 0
                                    ? "Live surveillance is communicating with FDA CDRH, EU MDCG, and CDSCO streams. Click below to refresh."
                                    : "Try broadening your filter criteria or clearing keywords to see all live notices."}
                            </p>
                            {items.length > 0 ? (
                                <button
                                    type="button"
                                    onClick={clearFilters}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#0b3a96] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#082a6e] transition-all cursor-pointer shadow-md"
                                >
                                    <Filter className="h-3.5 w-3.5" />
                                    Clear Active Filters
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => window.location.reload()}
                                    className="inline-flex items-center gap-2 rounded-xl bg-[#0b3a96] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#082a6e] transition-all cursor-pointer shadow-md"
                                >
                                    <RefreshCw className="h-3.5 w-3.5" />
                                    Refresh Pipeline
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                            {filtered.map((item, idx) => (
                                <FeedCard key={`${item.source_url}-${idx}`} item={item} />
                            ))}
                        </div>
                    )}

                    {/* ── 4. INTELLIGENCE FOOTER ── */}
                    <div className="mt-12 text-center border-t border-gray-200/80 pt-8 space-y-2">
                        <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0b3a96] bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full shadow-2xs">
                            <Sparkles className="h-3.5 w-3.5 text-[#dca85b]" />
                            <span>Powered by Google Gemini AI &amp; NKB Regovanta Global Regulatory Affairs</span>
                        </div>
                        <p className="text-xs text-gray-500 max-w-xl mx-auto">
                            Automated regulatory surveillance engine aggregating official notices, guidances, and safety advisories across US FDA, CDSCO, European Commission, and Notified Body channels.
                        </p>
                    </div>
                </div>
            </div>
        </Tooltip.Provider>
    );
}
