import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  Link2,
  Plus,
  Search,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  X,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/admin/seo/internal-links")({
  component: InternalLinksPage,
});

interface InternalLinkItem {
  id: string;
  source_url: string;
  anchor_text: string;
  target_url: string;
  status: "Live" | "Planned";
}

function InternalLinksPage() {
  const [links, setLinks] = useState<InternalLinkItem[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [redirects, setRedirects] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterMode, setFilterMode] = useState<"all" | "orphans" | "redirected" | "planned">("all");

  // Planned Link Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sourceUrl, setSourceUrl] = useState("");
  const [anchorText, setAnchorText] = useState("");
  const [targetUrl, setTargetUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data: linkRows } = await supabase.from("internal_links").select("*");
    const { data: pageRows } = await supabase.from("pages").select("url_path, name, status, is_in_sitemap");
    const { data: redirRows } = await supabase.from("redirects").select("old_path");

    setLinks(linkRows || []);
    setPages(pageRows || []);
    setRedirects((redirRows || []).map((r) => r.old_path));
    setLoading(false);
  };

  const handleAddPlanned = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("internal_links").insert({
      source_url: sourceUrl.trim(),
      anchor_text: anchorText.trim(),
      target_url: targetUrl.trim(),
      status: "Planned",
    });

    setSubmitting(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Planned link added! It will automatically switch to Live when detected.");
      setIsModalOpen(false);
      setSourceUrl("");
      setAnchorText("");
      setTargetUrl("");
      loadData();
    }
  };

  // Compute incoming and outgoing counts
  const incomingMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const l of links) {
      map.set(l.target_url, (map.get(l.target_url) || 0) + 1);
    }
    return map;
  }, [links]);

  // Identify orphan pages
  const orphanPages = useMemo(() => {
    return pages.filter((p) => p.status === "published" && p.is_in_sitemap && (incomingMap.get(p.url_path) || 0) === 0);
  }, [pages, incomingMap]);

  const filteredLinks = useMemo(() => {
    return links.filter((l) => {
      const matchSearch =
        l.source_url.toLowerCase().includes(search.toLowerCase()) ||
        l.target_url.toLowerCase().includes(search.toLowerCase()) ||
        l.anchor_text.toLowerCase().includes(search.toLowerCase());

      if (filterMode === "redirected") {
        return matchSearch && redirects.includes(l.target_url);
      }
      if (filterMode === "planned") {
        return matchSearch && l.status === "Planned";
      }
      return matchSearch;
    });
  }, [links, search, filterMode, redirects]);

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">SEO</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Internal Links</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Internal Linking Architecture</h1>
            <p className="mt-0.5 text-xs text-slate-500">
              Audit link graph flow, eliminate orphan pages, and ensure all links point directly to active URLs.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#082a6d] transition"
          >
            <Plus className="h-4 w-4" />
            <span>Plan New Link</span>
          </button>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <button
          onClick={() => setFilterMode("all")}
          className={`rounded-xl border p-4.5 text-left transition shadow-xs ${
            filterMode === "all" ? "border-[#0b3a96] bg-blue-50/50" : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="text-xs font-semibold text-[#0b3a96]">Total Catalogued Links</div>
          <div className="mt-1.5 text-2xl font-bold text-slate-900">{links.length}</div>
          <p className="mt-1 text-xs text-slate-500">Across site pages and regulatory guides</p>
        </button>

        <button
          onClick={() => setFilterMode("orphans")}
          className={`rounded-xl border p-4.5 text-left transition shadow-xs ${
            filterMode === "orphans" ? "border-amber-500 bg-amber-50/50" : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="text-xs font-semibold text-amber-700">Orphan Pages Detected</div>
          <div className="mt-1.5 text-2xl font-bold text-amber-700">{orphanPages.length}</div>
          <p className="mt-1 text-xs text-slate-500">Published pages with 0 incoming links</p>
        </button>

        <button
          onClick={() => setFilterMode("redirected")}
          className={`rounded-xl border p-4.5 text-left transition shadow-xs ${
            filterMode === "redirected" ? "border-rose-500 bg-rose-50/50" : "border-slate-200 bg-white hover:border-slate-300"
          }`}
        >
          <div className="text-xs font-semibold text-rose-700">Points to Redirected URL</div>
          <div className="mt-1.5 text-2xl font-bold text-rose-700">
            {links.filter((l) => redirects.includes(l.target_url)).length}
          </div>
          <p className="mt-1 text-xs text-slate-500">Internal links needing destination updates</p>
        </button>
      </div>

      {/* Orphan Pages Warning Drawer */}
      {filterMode === "orphans" ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5 space-y-3 shadow-xs">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <span>Orphan Pages List ({orphanPages.length})</span>
            </h3>
            <button onClick={() => setFilterMode("all")} className="text-xs font-semibold text-[#0b3a96] hover:underline">
              Back to all links
            </button>
          </div>
          <p className="text-xs text-slate-600">
            These published, indexable pages have no internal links pointing to them. Google crawlers may struggle to find and rank them.
          </p>

          <div className="overflow-hidden rounded-lg border border-slate-200 max-h-72 overflow-y-auto bg-white">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 uppercase font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-2.5">Page Name</th>
                  <th className="px-4 py-2.5">URL Path</th>
                  <th className="px-4 py-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orphanPages.map((p) => (
                  <tr key={p.url_path} className="hover:bg-slate-50">
                    <td className="px-4 py-2 text-slate-900 font-medium">{p.name}</td>
                    <td className="px-4 py-2 font-mono text-slate-500">{p.url_path}</td>
                    <td className="px-4 py-2 text-right">
                      <Link
                        to="/admin/seo/pages"
                        className="text-[#0b3a96] font-semibold hover:underline text-[11px]"
                      >
                        Edit in Pages
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Regular Links Table */
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by source, target, or anchor text..."
              className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none shadow-xs"
            />
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs min-w-[760px]">
                <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-600">
                  <tr>
                    <th className="px-5 py-3">Source Page</th>
                    <th className="px-5 py-3">Anchor Text</th>
                    <th className="px-5 py-3">Target Destination</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3">Flags</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                        Loading internal link graph...
                      </td>
                    </tr>
                  ) : filteredLinks.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                        No internal links matching criteria.
                      </td>
                    </tr>
                  ) : (
                    filteredLinks.map((l) => {
                      const pointsToRedirect = redirects.includes(l.target_url);
                      return (
                        <tr key={l.id} className="hover:bg-slate-50 transition">
                          <td className="px-5 py-3.5 font-mono text-slate-700">{l.source_url}</td>
                          <td className="px-5 py-3.5 font-medium text-slate-900">"{l.anchor_text}"</td>
                          <td className="px-5 py-3.5 font-mono text-[#0b3a96]">{l.target_url}</td>
                          <td className="px-5 py-3.5">
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                                l.status === "Live"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : "bg-purple-50 text-purple-700 border border-purple-200"
                              }`}
                            >
                              {l.status}
                            </span>
                          </td>
                          <td className="px-5 py-3.5">
                            {pointsToRedirect && (
                              <span className="inline-flex items-center gap-1 font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200 text-[11px]">
                                <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
                                <span>Points to Redirect</span>
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Planned Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-semibold text-slate-900">Add Planned Internal Link</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleAddPlanned} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700">Source Page URL</label>
                <input
                  type="text"
                  required
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  placeholder="/services/india"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-mono text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">Planned Anchor Text</label>
                <input
                  type="text"
                  required
                  value={anchorText}
                  onChange={(e) => setAnchorText(e.target.value)}
                  placeholder="e.g. CDSCO medical device registration"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">Target Page URL</label>
                <input
                  type="text"
                  required
                  value={targetUrl}
                  onChange={(e) => setTargetUrl(e.target.value)}
                  placeholder="/services/cdsco-registration"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-mono text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-[#082a6d] disabled:opacity-50 transition"
                >
                  {submitting ? "Adding..." : "Add Planned Link"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
