import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { sitemapService, type SitemapSummary } from "@/lib/services/sitemapService";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  Network,
  RefreshCw,
  ExternalLink,
  Download,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Search,
} from "lucide-react";

export const Route = createFileRoute("/admin/settings/sitemap")({
  component: SitemapSettingsPage,
});

function SitemapSettingsPage() {
  const [summary, setSummary] = useState<SitemapSummary | null>(null);
  const [pages, setPages] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [regenerating, setRegenerating] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const sum = await sitemapService.getSummary();
    setSummary(sum);

    const { data: pageRows } = await supabase
      .from("pages")
      .select("id, name, url_path, status, is_in_sitemap")
      .order("url_path", { ascending: true });

    setPages(pageRows || []);
    setLoading(false);
  };

  const handleRegenerate = async () => {
    setRegenerating(true);
    const res = await sitemapService.regenerate();
    setRegenerating(false);

    if (res.success) {
      toast.success("XML Sitemap regenerated and synchronized!");
      loadData();
    } else {
      toast.error(res.error || "Failed to regenerate sitemap.");
    }
  };

  const handleToggle = async (page: any) => {
    const nextVal = !page.is_in_sitemap;
    const ok = await sitemapService.togglePageSitemap(page.id, nextVal);
    if (ok) {
      setPages((prev) =>
        prev.map((p) => (p.id === page.id ? { ...p, is_in_sitemap: nextVal } : p))
      );
      toast.success(`"${page.url_path}" ${nextVal ? "included in" : "excluded from"} sitemap.`);
      const sum = await sitemapService.getSummary();
      setSummary(sum);
    } else {
      toast.error("Failed to update inclusion status.");
    }
  };

  const handleDownload = async () => {
    const xml = await sitemapService.generateIndexXml();
    const blob = new Blob([xml], { type: "application/xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "sitemap.xml";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded sitemap.xml");
  };

  const filteredPages = pages.filter(
    (p) =>
      p.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.url_path?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading || !summary) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        <span>Loading sitemap controls...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">XML Sitemap Management</h1>
          <p className="mt-1 text-xs text-slate-500">
            Automated XML sitemap generation compliant with Google Search Central specifications.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition shadow-2xs"
          >
            <Download className="h-4 w-4" />
            <span>Download Index</span>
          </button>
          <button
            onClick={handleRegenerate}
            disabled={regenerating}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
          >
            <RefreshCw className={`h-4 w-4 ${regenerating ? "animate-spin" : ""}`} />
            <span>{regenerating ? "Updating..." : "Regenerate Sitemap"}</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="text-xs font-semibold text-slate-500">Total Sitemap URLs</div>
          <div className="mt-2 text-2xl font-bold text-slate-900">{summary.totalUrlsCount}</div>
          <p className="mt-1 text-[11px] text-slate-500">Live indexable entries</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="text-xs font-semibold text-slate-500">Pages in Sitemap</div>
          <div className="mt-2 text-2xl font-bold text-[#0b3a96]">{summary.totalPagesCount}</div>
          <p className="mt-1 text-[11px] text-slate-500">Service & core landing pages</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="text-xs font-semibold text-slate-500">Articles in Sitemap</div>
          <div className="mt-2 text-2xl font-bold text-emerald-600">{summary.totalPostsCount}</div>
          <p className="mt-1 text-[11px] text-slate-500">Published regulatory guides</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
          <div className="text-xs font-semibold text-slate-500">Last Generated</div>
          <div className="mt-2 text-sm font-bold text-slate-800">
            {summary.lastGeneratedAt
              ? new Date(summary.lastGeneratedAt).toLocaleString("en-IN", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })
              : "Active & Realtime"}
          </div>
          <p className="mt-1 text-[11px] text-emerald-600 font-medium flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3" />
            <span>Auto-updates on publish</span>
          </p>
        </div>
      </div>

      {/* Sitemaps Endpoints */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900">Sitemap Endpoints</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 hover:border-blue-300 hover:bg-blue-50/50 transition"
          >
            <div>
              <div className="text-xs font-semibold text-slate-900 font-mono">/sitemap.xml</div>
              <div className="text-[11px] text-slate-500">Master Index File</div>
            </div>
            <ExternalLink className="h-4 w-4 text-slate-400" />
          </a>

          <a
            href="/sitemap-pages.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 hover:border-blue-300 hover:bg-blue-50/50 transition"
          >
            <div>
              <div className="text-xs font-semibold text-slate-900 font-mono">/sitemap-pages.xml</div>
              <div className="text-[11px] text-slate-500">Service & Landing Pages</div>
            </div>
            <ExternalLink className="h-4 w-4 text-slate-400" />
          </a>

          <a
            href="/sitemap-posts.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3 hover:border-blue-300 hover:bg-blue-50/50 transition"
          >
            <div>
              <div className="text-xs font-semibold text-slate-900 font-mono">/sitemap-posts.xml</div>
              <div className="text-[11px] text-slate-500">Regulatory Blog Posts</div>
            </div>
            <ExternalLink className="h-4 w-4 text-slate-400" />
          </a>
        </div>
      </div>

      {/* Bulk Inclusion Controls */}
      <div className="space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-base font-bold text-slate-900">Bulk Include / Exclude Pages</h2>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by name or URL..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-xs text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs max-h-96 overflow-y-auto">
          <table className="w-full text-left text-xs">
            <thead className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50 font-semibold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-5 py-3">Page Name</th>
                <th className="px-5 py-3">Path</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Sitemap Inclusion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPages.map((page) => (
                <tr key={page.id} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-2.5 font-medium text-slate-900">{page.name}</td>
                  <td className="px-5 py-2.5 font-mono text-[#0b3a96]">{page.url_path}</td>
                  <td className="px-5 py-2.5">
                    <span className="capitalize text-slate-500 font-medium">{page.status}</span>
                  </td>
                  <td className="px-5 py-2.5 text-right">
                    <button
                      onClick={() => handleToggle(page)}
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold transition ${
                        page.is_in_sitemap
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                          : "bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100"
                      }`}
                    >
                      <span>{page.is_in_sitemap ? "Included" : "Excluded"}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
