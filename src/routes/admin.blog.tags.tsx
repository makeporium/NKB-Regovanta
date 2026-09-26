import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Tag, Plus, Edit2, Trash2, X, Power, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/admin/blog/tags")({
  component: BlogTagsPage,
});

interface TagItem {
  id: string;
  name: string;
  slug: string;
  allow_indexing: boolean;
}

function BlogTagsPage() {
  const [tags, setTags] = useState<TagItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editId, setEditId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [allowIndexing, setAllowIndexing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data } = await supabase.from("blog_tags").select("*").order("name", { ascending: true });
    setTags(data || []);
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setModalMode("add");
    setEditId(null);
    setName("");
    setSlug("");
    setAllowIndexing(false);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (t: TagItem) => {
    setModalMode("edit");
    setEditId(t.id);
    setName(t.name);
    setSlug(t.slug);
    setAllowIndexing(t.allow_indexing);
    setIsModalOpen(true);
  };

  const handleToggleIndexing = async (t: TagItem) => {
    const nextVal = !t.allow_indexing;
    const { error } = await supabase
      .from("blog_tags")
      .update({ allow_indexing: nextVal })
      .eq("id", t.id);

    if (error) {
      toast.error(error.message);
    } else {
      setTags((prev) => prev.map((item) => (item.id === t.id ? { ...item, allow_indexing: nextVal } : item)));
      toast.success(`Tag indexing ${nextVal ? "allowed" : "blocked (noindex)"}.`);
    }
  };

  const handleDelete = async (t: TagItem) => {
    if (!confirm(`Delete tag "${t.name}"?`)) return;
    const { error } = await supabase.from("blog_tags").delete().eq("id", t.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Tag deleted.");
      loadData();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-");

    if (modalMode === "add") {
      const { error } = await supabase.from("blog_tags").insert({
        name: name.trim(),
        slug: cleanSlug,
        allow_indexing: allowIndexing,
      });

      if (error) toast.error(error.message);
      else {
        toast.success(`Tag "${name}" added.`);
        setIsModalOpen(false);
        loadData();
      }
    } else if (modalMode === "edit" && editId) {
      const { error } = await supabase
        .from("blog_tags")
        .update({
          name: name.trim(),
          slug: cleanSlug,
          allow_indexing: allowIndexing,
        })
        .eq("id", editId);

      if (error) toast.error(error.message);
      else {
        toast.success("Tag updated.");
        setIsModalOpen(false);
        loadData();
      }
    }
    setSubmitting(false);
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Article Topic Tags</h1>
          <p className="mt-1 text-xs text-slate-500">
            Manage granular topic tags with built-in search engine indexing controls.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 transition"
        >
          <Plus className="h-4 w-4" />
          <span>Add Tag</span>
        </button>
      </div>

      {/* Thin Content Safeguard Callout */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs text-blue-900 flex items-start gap-3">
        <ShieldCheck className="h-5 w-5 shrink-0 text-[#0b3a96] mt-0.5" />
        <div>
          <p className="font-semibold text-blue-950">Thin Content Protection Active</p>
          <p className="mt-0.5 leading-relaxed text-blue-800">
            Per SEO ground rules, tag pages default to <strong>Noindex</strong> so thin 2-article lists do not compete with real pillar articles. You can toggle indexing per tag once it accumulates enough content.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[550px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-5 py-3.5">Tag Name</th>
                <th className="px-5 py-3.5">Tag URL Path</th>
                <th className="px-5 py-3.5">Search Indexing Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-slate-500">
                    Loading tags...
                  </td>
                </tr>
              ) : tags.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-5 py-8 text-center text-slate-500">
                    No tags found.
                  </td>
                </tr>
              ) : (
                tags.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3 font-semibold text-slate-900">{t.name}</td>
                    <td className="px-5 py-3 font-mono text-[#0b3a96]">/insights/tag/{t.slug}</td>
                    <td className="px-5 py-3">
                      <button
                        onClick={() => handleToggleIndexing(t)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium transition ${
                          t.allow_indexing
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                        }`}
                      >
                        <Power className="h-3 w-3" />
                        <span>{t.allow_indexing ? "Indexed" : "Noindex (Recommended)"}</span>
                      </button>
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(t)}
                          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
                          title="Edit Tag"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(t)}
                          className="rounded p-1.5 text-rose-600 hover:bg-rose-50 transition"
                          title="Delete Tag"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {modalMode === "add" ? "Add Topic Tag" : "Edit Tag"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="rounded p-1 text-slate-400 hover:text-slate-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">Tag Label</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (modalMode === "add") {
                      setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"));
                    }
                  }}
                  placeholder="e.g. FDA 510(k)"
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">URL Slug</label>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div className="pt-1">
                <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 font-medium">
                  <input
                    type="checkbox"
                    checked={allowIndexing}
                    onChange={(e) => setAllowIndexing(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Allow tag hub page to be indexed (Default off)</span>
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-blue-800 disabled:opacity-50 transition shadow-xs"
                >
                  {submitting ? "Saving..." : "Save Tag"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
