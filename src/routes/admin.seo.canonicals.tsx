import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { BookmarkCheck, Search, AlertTriangle, CheckCircle2, Edit2, ExternalLink, X, Save } from "lucide-react";

export const Route = createFileRoute("/admin/seo/canonicals")({
  component: CanonicalsOverviewPage,
});

interface CanonicalItem {
  id: string;
  target_url: string;
  canonical_type: "self" | "custom";
  canonical_url: string;
  robots_index: "index" | "noindex";
}

function CanonicalsOverviewPage() {
  const [items, setItems] = useState<CanonicalItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  // Edit Modal State
  const [editingItem, setEditingItem] = useState<CanonicalItem | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("seo_meta")
      .select("id, target_url, canonical_type, canonical_url, robots_index")
      .order("target_url", { ascending: true });

    setItems(
      (data || []).map((d) => ({
        id: d.id,
        target_url: d.target_url,
        canonical_type: d.canonical_type || "self",
        canonical_url: d.canonical_url || `https://www.nkbregovanta.com${d.target_url === "/" ? "" : d.target_url}`,
        robots_index: d.robots_index || "index",
      }))
    );
    setLoading(false);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem) return;

    setSaving(true);
    const { error } = await supabase
      .from("seo_meta")
      .update({
        canonical_type: editingItem.canonical_type,
        canonical_url: editingItem.canonical_url,
        updated_at: new Date().toISOString(),
      })
      .eq("id", editingItem.id);

    setSaving(false);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Canonical settings updated!");
      setEditingItem(null);
      loadData();
    }
  };

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchSearch =
        item.target_url.toLowerCase().includes(search.toLowerCase()) ||
        item.canonical_url.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "all" || item.canonical_type === typeFilter;
      return matchSearch && matchType;
    });
  }, [items, search, typeFilter]);

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">SEO</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Canonicals</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Canonical Tags Overview</h1>
          <p className="mt-0.5 text-xs text-slate-500">
            Prevent duplicate content penalties by instructing search engines which URL is the master authoritative version.
          </p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs sm:grid-cols-4">
        <div className="relative sm:col-span-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by URL path or canonical destination..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          />
        </div>

        <div>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          >
            <option value="all">All Canonicals</option>
            <option value="self">Self Canonical (Default)</option>
            <option value="custom">Custom Canonical Target Only</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[760px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-5 py-3">Page URL Path</th>
                <th className="px-5 py-3">Canonical Type</th>
                <th className="px-5 py-3">Authoritative Target</th>
                <th className="px-5 py-3">Signals</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                    Loading canonical configurations...
                  </td>
                </tr>
              ) : filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                    No records matching filter.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => {
                  const hasContradiction = item.robots_index === "noindex" && item.canonical_type === "custom";

                  return (
                    <tr key={item.id} className="hover:bg-slate-50 transition">
                      <td className="px-5 py-3.5 font-mono font-medium text-slate-900">{item.target_url}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                            item.canonical_type === "self"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-blue-50 text-[#0b3a96] border border-blue-200"
                          }`}
                        >
                          {item.canonical_type === "self" ? "Self Canonical" : "Custom"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-mono text-[#0b3a96] max-w-sm truncate">
                        {item.canonical_url}
                      </td>
                      <td className="px-5 py-3.5">
                        {hasContradiction ? (
                          <span className="inline-flex items-center gap-1 font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200" title="Contradicting signals: Page is Noindex AND has Custom Canonical">
                            <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                            <span>Contradiction</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 font-medium text-slate-500">
                            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                            <span>Normal</span>
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <button
                          onClick={() => setEditingItem({ ...item })}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-[#0b3a96] hover:text-white hover:border-[#0b3a96] transition"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                          <span>Edit</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-semibold text-slate-900">Edit Canonical URL</h3>
              <button onClick={() => setEditingItem(null)} className="text-slate-400 hover:text-slate-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500">Page URL</label>
                <input
                  type="text"
                  disabled
                  value={editingItem.target_url}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-mono text-slate-600 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">Canonical Strategy</label>
                <select
                  value={editingItem.canonical_type}
                  onChange={(e) => {
                    const val = e.target.value as "self" | "custom";
                    setEditingItem({
                      ...editingItem,
                      canonical_type: val,
                      canonical_url:
                        val === "self"
                          ? `https://www.nkbregovanta.com${editingItem.target_url === "/" ? "" : editingItem.target_url}`
                          : editingItem.canonical_url,
                    });
                  }}
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                >
                  <option value="self">Self Canonical (Points to itself)</option>
                  <option value="custom">Custom URL (Points to another master page)</option>
                </select>
              </div>

              {editingItem.canonical_type === "custom" && (
                <div>
                  <label className="block text-xs font-medium text-slate-700">Authoritative Destination</label>
                  <input
                    type="url"
                    required
                    value={editingItem.canonical_url}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, canonical_url: e.target.value })
                    }
                    placeholder="https://www.nkbregovanta.com/..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-mono text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                  />
                </div>
              )}

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-[#082a6d] disabled:opacity-50 transition"
                >
                  {saving ? "Saving..." : "Save Canonical"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
