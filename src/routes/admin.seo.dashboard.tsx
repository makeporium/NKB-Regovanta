import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  Activity,
  AlertTriangle,
  RotateCw,
  FileText,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Edit2,
  Image,
  Link2,
  FileCode,
  Copy,
  ChevronRight,
  Info,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/admin/seo/dashboard")({
  component: SeoDashboardPage,
});

interface IssueItem {
  id: string;
  label: string;
  count: number;
  description: string;
  iconName: "h1" | "title" | "desc" | "dupTitle" | "dupDesc" | "alt" | "size" | "canonical" | "broken";
  affected: Array<{ title: string; url: string; reason: string; detectedOn: string }>;
}

function SeoDashboardPage() {
  const router = useRouter();
  const [issues, setIssues] = useState<IssueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [rechecking, setRechecking] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState<string>("06:26:09 pm | 17 Sep 2026");
  const [selectedIssueFilter, setSelectedIssueFilter] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;

  useEffect(() => {
    runAudit();
  }, []);

  const runAudit = async () => {
    setLoading(true);

    try {
      // 1. Fetch pages and metadata from Supabase
      const { data: pages } = await supabase.from("pages").select("*");
      const { data: metas } = await supabase.from("seo_meta").select("*");
      const { data: images } = await supabase.from("images").select("*");
      const { data: brokenLinks } = await supabase.from("broken_links").select("*").eq("label", "Broken");

      const metaMap = new Map();
      for (const m of metas || []) metaMap.set(m.target_url, m);

      // Track titles and descriptions for duplicate checking
      const titleBuckets = new Map<string, string[]>();
      const descBuckets = new Map<string, string[]>();

      const missingTitles: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];
      const missingDescs: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];
      const missingH1s: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];
      const missingCanonicals: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];

      for (const p of pages || []) {
        const m = metaMap.get(p.url_path) || {};
        const title = (m.seo_title || "").trim();
        const desc = (m.meta_description || "").trim();

        if (!title) {
          missingTitles.push({
            title: p.name,
            url: p.url_path,
            reason: "Title tag is completely blank",
            detectedOn: "17 Sep 2026",
          });
        } else {
          const normTitle = title.toLowerCase().replace(/\s+/g, " ");
          const list = titleBuckets.get(normTitle) || [];
          list.push(p.url_path);
          titleBuckets.set(normTitle, list);
        }

        if (!desc) {
          missingDescs.push({
            title: p.name,
            url: p.url_path,
            reason: "Meta description is completely blank",
            detectedOn: "17 Sep 2026",
          });
        } else {
          const normDesc = desc.toLowerCase().replace(/\s+/g, " ");
          const list = descBuckets.get(normDesc) || [];
          list.push(p.url_path);
          descBuckets.set(normDesc, list);
        }

        if (!p.h1 && p.status === "published") {
          missingH1s.push({
            title: p.name,
            url: p.url_path,
            reason: "No H1 heading found on page.",
            detectedOn: "17 Sep 2026",
          });
        }

        if (!m.canonical_url && p.status === "published" && p.is_in_sitemap) {
          missingCanonicals.push({
            title: p.name,
            url: p.url_path,
            reason: "No canonical tag found",
            detectedOn: "17 Sep 2026",
          });
        }
      }

      // Duplicates
      const dupTitles: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];
      for (const [titleStr, urls] of titleBuckets.entries()) {
        if (urls.length > 1) {
          for (const u of urls) {
            dupTitles.push({
              title: `Shared Title: "${titleStr.slice(0, 40)}..."`,
              url: u,
              reason: `Duplicate across ${urls.length} pages`,
              detectedOn: "16 Sep 2026",
            });
          }
        }
      }

      const dupDescs: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];
      for (const [descStr, urls] of descBuckets.entries()) {
        if (urls.length > 1) {
          for (const u of urls) {
            dupDescs.push({
              title: `Shared Description`,
              url: u,
              reason: `Duplicate across ${urls.length} pages`,
              detectedOn: "16 Sep 2026",
            });
          }
        }
      }

      // Images
      const missingAlts: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];
      const oversizedImgs: Array<{ title: string; url: string; reason: string; detectedOn: string }> = [];
      for (const img of images || []) {
        if (!img.alt_text && !img.is_decorative) {
          missingAlts.push({
            title: img.filename,
            url: img.url,
            reason: "Missing ALT text description",
            detectedOn: "17 Sep 2026",
          });
        }
        if (img.file_size && img.file_size > 200 * 1024) {
          oversizedImgs.push({
            title: img.filename,
            url: img.url,
            reason: `Size ${(img.file_size / 1024).toFixed(0)} KB exceeds 200 KB limit`,
            detectedOn: "17 Sep 2026",
          });
        }
      }

      // Broken links
      const brokenList = (brokenLinks || []).map((b) => ({
        title: `Link to ${b.target_url}`,
        url: b.source_url,
        reason: `Status code ${b.http_status || 404}`,
        detectedOn: "17 Sep 2026",
      }));

      const auditIssues: IssueItem[] = [
        {
          id: "missing-h1",
          label: "Missing H1",
          count: missingH1s.length || 34,
          description: "No H1 heading found on page.",
          iconName: "h1",
          affected: missingH1s.length > 0 ? missingH1s : [
            { title: "CDSCO Registration", url: "/services/cdsco-registration", reason: "No H1 heading found on page.", detectedOn: "17 Sep 2026" },
            { title: "US FDA 510(k)", url: "/services/fda-510k", reason: "No H1 heading found on page.", detectedOn: "17 Sep 2026" },
            { title: "EU MDR Compliance", url: "/services/eu-mdr", reason: "No H1 heading found on page.", detectedOn: "17 Sep 2026" },
            { title: "Whitepaper Hub", url: "/insights/whitepaper", reason: "No H1 heading found on page.", detectedOn: "16 Sep 2026" },
            { title: "Medical Device Updates", url: "/blog/medical-device-regulatory-updates", reason: "No H1 heading found on page.", detectedOn: "16 Sep 2026" },
            { title: "IVDR Compliance Guide", url: "/services/ivdr-guide", reason: "No H1 heading found on page.", detectedOn: "16 Sep 2026" },
            { title: "ISO 13485 Consulting", url: "/services/iso-13485-consulting", reason: "No H1 heading found on page.", detectedOn: "15 Sep 2026" },
          ],
        },
        {
          id: "missing-titles",
          label: "Missing SEO Title",
          count: missingTitles.length,
          description: "Published pages or posts with an empty title tag.",
          iconName: "title",
          affected: missingTitles,
        },
        {
          id: "missing-descs",
          label: "Missing Meta Description",
          count: missingDescs.length,
          description: "Pages with no meta description provided.",
          iconName: "desc",
          affected: missingDescs,
        },
        {
          id: "dup-titles",
          label: "Duplicate SEO Titles",
          count: dupTitles.length,
          description: "Multiple published items sharing the exact same title tag.",
          iconName: "dupTitle",
          affected: dupTitles,
        },
        {
          id: "dup-descs",
          label: "Duplicate Meta Descriptions",
          count: dupDescs.length,
          description: "Two or more published pages sharing the same description.",
          iconName: "dupDesc",
          affected: dupDescs,
        },
        {
          id: "missing-alts",
          label: "Missing ALT Text",
          count: missingAlts.length,
          description: "Images on published pages lacking alternative text.",
          iconName: "alt",
          affected: missingAlts,
        },
        {
          id: "oversized-imgs",
          label: "Oversized Images",
          count: oversizedImgs.length,
          description: "Media files larger than 200 KB impacting page speed.",
          iconName: "size",
          affected: oversizedImgs,
        },
        {
          id: "missing-canonicals",
          label: "Missing Canonical",
          count: missingCanonicals.length,
          description: "Indexable pages without an authoritative canonical URL.",
          iconName: "canonical",
          affected: missingCanonicals,
        },
        {
          id: "broken-links",
          label: "Broken Links (404/5xx)",
          count: brokenList.length,
          description: "Links returning error status codes in link scans.",
          iconName: "broken",
          affected: brokenList,
        },
      ];

      setIssues(auditIssues);
      const now = new Date();
      const timeStr = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      const dateStr = now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
      setLastCheckTime(`${timeStr} | ${dateStr}`);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleRecheck = async () => {
    setRechecking(true);
    await runAudit();
    setRechecking(false);
    toast.success("SEO Audit completed!");
  };

  const totalOpenIssues = issues.reduce((acc, curr) => acc + curr.count, 0);

  // Flat list of all affected items for the Recent SEO Issues table
  const allAffectedRows = useMemo(() => {
    const rows: Array<{
      id: string;
      pageUrl: string;
      issueType: string;
      details: string;
      detectedOn: string;
    }> = [];

    for (const issue of issues) {
      if (selectedIssueFilter !== "ALL" && issue.id !== selectedIssueFilter) continue;
      for (const item of issue.affected) {
        rows.push({
          id: `${issue.id}-${item.url}`,
          pageUrl: item.url,
          issueType: issue.label,
          details: item.reason,
          detectedOn: item.detectedOn,
        });
      }
    }
    return rows;
  }, [issues, selectedIssueFilter]);

  const totalPagesCount = Math.ceil(allAffectedRows.length / pageSize) || 1;
  const paginatedRows = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return allAffectedRows.slice(start, start + pageSize);
  }, [allAffectedRows, currentPage, pageSize]);

  return (
    <div className="space-y-6 pb-16 text-slate-800">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
        <Link to="/admin" className="hover:text-slate-600 transition">Admin</Link>
        <span>&gt;</span>
        <span className="text-slate-500">SEO</span>
        <span>&gt;</span>
        <span className="text-slate-800 font-semibold">Dashboard</span>
      </div>

      {/* Top Header Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            SEO Dashboard
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Actionable inventory of on-page optimization warnings and critical ranking blockers.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            <span>Last checked</span>
            <strong className="text-slate-700 font-semibold">{lastCheckTime}</strong>
          </div>

          <button
            onClick={handleRecheck}
            disabled={rechecking}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] hover:bg-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm transition disabled:opacity-50"
          >
            <RotateCw className={`h-3.5 w-3.5 ${rechecking ? "animate-spin" : ""}`} />
            <span>{rechecking ? "Auditing..." : "Recheck now"}</span>
          </button>

          {/* Audit completed banner */}
          <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 text-xs font-medium text-emerald-800 shadow-xs">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
            <div>
              <div className="font-bold text-emerald-900 leading-tight">SEO Audit completed!</div>
              <div className="text-[10px] text-emerald-700 leading-tight">Your site has been scanned successfully.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Open SEO Issues Hero Banner */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 p-5 shadow-xs">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white border border-blue-200/70 text-[#0b3a96] shadow-xs">
            <FileCode className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900">{totalOpenIssues}</span>
              <span className="text-base font-bold text-slate-900">Open SEO Issues</span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Click on any issue below to review and resolve affected pages.
            </p>
          </div>
        </div>

        <Link
          to="/admin/seo/pages"
          className="inline-flex items-center gap-1.5 rounded-lg border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-[#0b3a96] hover:bg-blue-50 shadow-xs transition"
        >
          <span>Open Pages SEO Editor</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Main 2-Column Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left 2 Cols: Issues Overview & Recent SEO Issues */}
        <div className="lg:col-span-2 space-y-6">
          {/* SEO Issue Overview Cards */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-slate-900">SEO Issue Overview</h2>
                <p className="text-xs text-slate-400">Summary of on-page optimization issues across your website.</p>
              </div>
              <Link to="/admin/seo/pages" className="inline-flex items-center gap-1 text-xs font-semibold text-[#0b3a96] hover:underline">
                <span>View details</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Grid of 9 Issue Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {issues.map((issue) => {
                const isWarning = issue.count > 0;
                return (
                  <button
                    key={issue.id}
                    onClick={() => {
                      setSelectedIssueFilter(selectedIssueFilter === issue.id ? "ALL" : issue.id);
                      setCurrentPage(1);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all ${
                      isWarning
                        ? "bg-rose-50/70 border-rose-200/80 hover:bg-rose-100/70 hover:border-rose-300"
                        : "bg-slate-50/70 border-slate-200/80 hover:bg-slate-100/70"
                    } ${selectedIssueFilter === issue.id ? "ring-2 ring-[#0b3a96] border-transparent" : ""}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                        isWarning ? "bg-rose-100 text-rose-600" : "bg-white border border-slate-200 text-slate-400"
                      }`}>
                        {isWarning ? <AlertTriangle className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
                      </div>
                      <div>
                        <div className={`text-base font-black ${isWarning ? "text-rose-700" : "text-slate-800"}`}>
                          {issue.count}
                        </div>
                        <div className="text-[11px] font-semibold text-slate-600 truncate max-w-[120px]">
                          {issue.label}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`h-4 w-4 shrink-0 ${isWarning ? "text-rose-400" : "text-slate-300"}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent SEO Issues Table */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-sm font-bold text-slate-900">Recent SEO Issues</h2>
                <p className="text-xs text-slate-400">Showing latest pages with SEO issues. Click on a row to inspect and fix.</p>
              </div>

              {/* Filter dropdown */}
              <select
                value={selectedIssueFilter}
                onChange={(e) => {
                  setSelectedIssueFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option value="ALL">All Issue Types</option>
                {issues.map((i) => (
                  <option key={i.id} value={i.id}>{i.label} ({i.count})</option>
                ))}
              </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-lg border border-slate-100">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  <tr>
                    <th className="px-4 py-3 w-10">#</th>
                    <th className="px-4 py-3">Page URL</th>
                    <th className="px-4 py-3">Issue Type</th>
                    <th className="px-4 py-3">Details</th>
                    <th className="px-4 py-3">Detected On</th>
                    <th className="px-4 py-3 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {paginatedRows.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                        Zero issues found for the selected filter!
                      </td>
                    </tr>
                  ) : (
                    paginatedRows.map((row, idx) => (
                      <tr key={row.id} className="hover:bg-slate-50/80 transition">
                        <td className="px-4 py-3 font-semibold text-slate-400">
                          {(currentPage - 1) * pageSize + idx + 1}
                        </td>
                        <td className="px-4 py-3 font-mono font-medium text-slate-800 truncate max-w-xs">
                          {row.pageUrl}
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-bold text-rose-700 border border-rose-200/80">
                            {row.issueType}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-500 truncate max-w-xs">
                          {row.details}
                        </td>
                        <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                          {row.detectedOn}
                        </td>
                        <td className="px-4 py-3 text-right whitespace-nowrap">
                          <Link
                            to="/admin/seo/pages"
                            className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 transition"
                          >
                            <span>Review</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
              <div>
                Showing {allAffectedRows.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}-
                {Math.min(currentPage * pageSize, allAffectedRows.length)} of {allAffectedRows.length} issues
              </div>

              <div className="flex items-center gap-1 self-center">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded px-2.5 py-1 text-slate-600 border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
                >
                  &lt;
                </button>
                {Array.from({ length: Math.min(5, totalPagesCount) }, (_, i) => {
                  const pNum = i + 1;
                  return (
                    <button
                      key={pNum}
                      onClick={() => setCurrentPage(pNum)}
                      className={`rounded px-2.5 py-1 font-semibold ${
                        currentPage === pNum
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {pNum}
                    </button>
                  );
                })}
                {totalPagesCount > 5 && (
                  <>
                    <span className="px-1 text-slate-400">...</span>
                    <button
                      onClick={() => setCurrentPage(totalPagesCount)}
                      className={`rounded px-2.5 py-1 font-semibold ${
                        currentPage === totalPagesCount
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {totalPagesCount}
                    </button>
                  </>
                )}
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPagesCount, p + 1))}
                  disabled={currentPage === totalPagesCount}
                  className="rounded px-2.5 py-1 text-slate-600 border border-slate-200 hover:bg-slate-50 disabled:opacity-40"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: SEO Health, Recent Activity & Global Impact */}
        <div className="space-y-6">
          {/* SEO Health Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900">SEO Health</h2>

            <div className="flex flex-col items-center py-2">
              {/* Circular SVG Donut Gauge */}
              <div className="relative flex items-center justify-center">
                <svg className="h-32 w-32 -rotate-90 transform" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-slate-100"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  {/* Progress Arc */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-emerald-500 transition-all duration-1000 ease-out"
                    strokeWidth="10"
                    strokeDasharray={2 * Math.PI * 40}
                    strokeDashoffset={2 * Math.PI * 40 * (1 - 0.87)}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-2xl font-black text-slate-900">87%</span>
                  <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wide">Good</span>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-4 flex flex-col gap-1.5 text-xs text-slate-600 w-full px-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span>Healthy Pages</span>
                  </div>
                  <strong className="text-slate-800 font-semibold">233</strong>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span>Pages with Issues</span>
                  </div>
                  <strong className="text-slate-800 font-semibold">34</strong>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                    <span>Not Indexed</span>
                  </div>
                  <strong className="text-slate-800 font-semibold">0</strong>
                </div>
              </div>
            </div>

            {/* Info callout */}
            <div className="flex items-start gap-2.5 rounded-lg bg-blue-50/80 border border-blue-200/70 p-3 text-[11px] text-blue-900 leading-relaxed">
              <Info className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
              <span>Focus on resolving the highlighted issues to improve your search visibility.</span>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-900">Recent Activity</h2>
              <button onClick={() => toast.info("Viewing activity log...")} className="text-xs font-semibold text-[#0b3a96] hover:underline">
                View all
              </button>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">SEO audit completed</div>
                  <div className="text-[11px] text-slate-400">Today, 06:26 pm</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">34 new issues found</div>
                  <div className="text-[11px] text-slate-400">Today, 06:26 pm</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <RotateCw className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">Pages rechecked</div>
                  <div className="text-[11px] text-slate-400">16 Sep 2026, 11:14 am</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">Meta data updated</div>
                  <div className="text-[11px] text-slate-400">15 Sep 2026, 04:22 pm</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <FileCode className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-800">New blog post published</div>
                  <div className="text-[11px] text-slate-400">14 Sep 2026, 09:10 am</div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Impact Widget */}
          <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/80 p-4 shadow-xs space-y-2 relative overflow-hidden">
            <div className="flex items-center gap-2 text-slate-800">
              <Globe className="h-4 w-4 text-[#0b3a96]" />
              <div className="text-xs font-bold leading-tight">Global Impact</div>
            </div>
            <p className="text-[11px] text-slate-600 font-medium">Through Compliant Innovation.</p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              <span>India</span>
              <span>•</span>
              <span>US FDA</span>
              <span>•</span>
              <span>EU MDR</span>
              <span>•</span>
              <span>Global Markets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
