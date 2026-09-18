import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { FolderTree, Plus, Edit2, Trash2, X, Save, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/admin/blog/categories")({
  component: BlogCategoriesPage,
});

interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  seo_title?: string;
  meta_description?: string;
  intro_text?: string;
  post_count?: number;
}

function BlogCategoriesPage() {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Add / Edit Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editId, setEditId] = useState<string | null>(null);
  const [oldSlug, setOldSlug] = useState("");
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [introText, setIntroText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Delete / Reassign Modal
  const [deletingCategory, setDeletingCategory] = useState<CategoryItem | null>(null);
  const [reassignTargetId, setReassignTargetId] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data: catRows } = await supabase.from("blog_categories").select("*").order("name", { ascending: true });
    const { data: postRows } = await supabase.from("blog_posts").select("category_id");

    const counts = new Map<string, number>();
    for (const p of postRows || []) {
      if (p.category_id) {
        counts.set(p.category_id, (counts.get(p.category_id) || 0) + 1);
      }
    }

    const merged = (catRows || []).map((c) => ({
      ...c,
      post_count: counts.get(c.id) || 0,
    }));

    setCategories(merged);
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setModalMode("add");
    setEditId(null);
    setOldSlug("");
    setName("");
    setSlug("");
    setSeoTitle("");
    setMetaDescription("");
    setIntroText("");
    setIsModalOpen(true);
  };

  const handleOpenEdit = (c: CategoryItem) => {
    setModalMode("edit");
    setEditId(c.id);
    setOldSlug(c.slug);
    setName(c.name);
    setSlug(c.slug);
    setSeoTitle(c.seo_title || "");
    setMetaDescription(c.meta_description || "");
    setIntroText(c.intro_text || "");
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-");

    if (modalMode === "add") {
      const { error } = await supabase.from("blog_categories").insert({
        name: name.trim(),
        slug: cleanSlug,
        seo_title: seoTitle.trim(),
        meta_description: metaDescription.trim(),
        intro_text: introText.trim(),
      });

      if (error) toast.error(error.message);
      else {
        toast.success(`Category "${name}" created.`);
        setIsModalOpen(false);
        loadData();
      }
    } else if (modalMode === "edit" && editId) {
      // Auto 301 if slug changes
      if (oldSlug !== cleanSlug) {
        await supabase.from("redirects").insert({
          old_path: `/blog/category/${oldSlug}`,
          new_path: `/blog/category/${cleanSlug}`,
          status_code: 301,
          is_active: true,
        });
        toast.info(`Created 301 redirect from /blog/category/${oldSlug} to /blog/category/${cleanSlug}`);
      }

      const { error } = await supabase
        .from("blog_categories")
        .update({
          name: name.trim(),
          slug: cleanSlug,
          seo_title: seoTitle.trim(),
          meta_description: metaDescription.trim(),
          intro_text: introText.trim(),
        })
        .eq("id", editId);

      if (error) toast.error(error.message);
      else {
        toast.success("Category updated.");
        setIsModalOpen(false);
        loadData();
      }
    }

    setSubmitting(false);
  };

  const handleConfirmDelete = async () => {
    if (!deletingCategory) return;
    setSubmitting(true);

    // Reassign posts if there are existing posts
    if ((deletingCategory.post_count || 0) > 0 && reassignTargetId) {
      await supabase
        .from("blog_posts")
        .update({ category_id: reassignTargetId })
        .eq("category_id", deletingCategory.id);
    }

    const { error } = await supabase.from("blog_categories").delete().eq("id", deletingCategory.id);
    setSubmitting(false);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Category deleted and associated posts reassigned.");
      setDeletingCategory(null);
      loadData();
    }
  };

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Blog Categories</h1>
          <p className="mt-1 text-xs text-slate-500">
            Structure articles by core regulatory discipline with dedicated category hub landing pages.
          </p>
        </div>

        <button
          onClick={handleOpenAdd}
          className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 transition"
        >
          <Plus className="h-4 w-4" />
          <span>Add Category</span>
        </button>
      </div>

      {/* Categories Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[650px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold uppercase tracking-wider text-slate-600">
              <tr>
                <th className="px-5 py-3.5">Category Name</th>
                <th className="px-5 py-3.5">Category URL Path</th>
                <th className="px-5 py-3.5 text-center">Articles</th>
                <th className="px-5 py-3.5">SEO Title</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                    Loading categories...
                  </td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                    No categories found.
                  </td>
                </tr>
              ) : (
                categories.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3 font-semibold text-slate-900">{c.name}</td>
                    <td className="px-5 py-3 font-mono text-[#0b3a96]">/insights/category/{c.slug}</td>
                    <td className="px-5 py-3 text-center">
                      <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 font-bold text-slate-700">
                        {c.post_count || 0}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-slate-500 max-w-xs truncate">{c.seo_title || "Default"}</td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleOpenEdit(c)}
                          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
                          title="Edit Category"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            setDeletingCategory(c);
                            const others = categories.filter((cat) => cat.id !== c.id);
                            if (others.length > 0 && others[0]) setReassignTargetId(others[0].id);
                          }}
                          className="rounded p-1.5 text-rose-600 hover:bg-rose-50 transition"
                          title="Delete Category"
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

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                {modalMode === "add" ? "Add Category" : "Edit Category"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="rounded p-1 text-slate-400 hover:text-slate-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700">Category Name</label>
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
                  placeholder="e.g. CDSCO"
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

              <div>
                <label className="block text-xs font-semibold text-slate-700">Category SEO Title</label>
                <input
                  type="text"
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Title for category hub page..."
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">Introductory Text</label>
                <textarea
                  rows={3}
                  value={introText}
                  onChange={(e) => setIntroText(e.target.value)}
                  placeholder="Short paragraph at the top of category page..."
                  className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none leading-relaxed transition"
                />
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
                  {submitting ? "Saving..." : "Save Category"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete / Reassign Modal */}
      {deletingCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-slate-900">Delete Category: {deletingCategory.name}</h3>
            {(deletingCategory.post_count || 0) > 0 ? (
              <div className="space-y-3">
                <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800 space-y-1">
                  <p className="font-semibold flex items-center gap-1.5 text-amber-900">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <span>This category contains {deletingCategory.post_count} article(s)</span>
                  </p>
                  <p>Per system rules, please select a new category to move these articles to:</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">Move Articles To:</label>
                  <select
                    value={reassignTargetId}
                    onChange={(e) => setReassignTargetId(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                  >
                    {categories
                      .filter((cat) => cat.id !== deletingCategory.id)
                      .map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            ) : (
              <p className="text-xs text-slate-600">
                This category contains 0 posts and can be safely deleted.
              </p>
            )}

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setDeletingCategory(null)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={handleConfirmDelete}
                className="rounded-lg bg-rose-600 px-5 py-2 text-xs font-semibold text-white hover:bg-rose-700 transition shadow-xs"
              >
                {submitting ? "Deleting..." : "Confirm & Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
