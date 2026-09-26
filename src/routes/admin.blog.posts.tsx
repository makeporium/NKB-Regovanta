import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  BookOpen,
  Send,
  FileEdit,
  Clock,
  FolderTree,
  Plus,
  Search,
  Copy,
  Trash2,
  Eye,
  Edit2,
  RefreshCw,
  AlertTriangle,
  X,
  ArrowRightLeft,
} from "lucide-react";

export const Route = createFileRoute("/admin/blog/posts")({
  component: AllBlogPostsPage,
});

interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published" | "scheduled" | "trash";
  publish_date_ist?: string | undefined;
  created_at?: string | undefined;
  view_count?: number | undefined;
  author?: { name: string } | undefined;
  category?: { name: string; slug: string } | undefined;
}

function AllBlogPostsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPostItem[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Delete / 301 Prompt Modal State
  const [deletingPost, setDeletingPost] = useState<BlogPostItem | null>(null);
  const [redirectTarget, setRedirectTarget] = useState("/blog");
  const [createRedirectOnDelete, setCreateRedirectOnDelete] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data: postRows, error } = await supabase
      .from("blog_posts")
      .select("id, title, slug, status, publish_date_ist, created_at, view_count, author_id, category_id, authors(name), blog_categories(name, slug)")
      .order("created_at", { ascending: false });

    const { data: catRows } = await supabase.from("blog_categories").select("id, name, slug");

    if (error) {
      toast.error("Failed to load blog posts: " + error.message);
    } else {
      const formatted = (postRows || []).map((p: any) => ({
        id: p.id,
        title: p.title,
        slug: p.slug,
        status: p.status,
        publish_date_ist: p.publish_date_ist,
        created_at: p.created_at,
        view_count: p.view_count || 0,
        author: p.authors ? { name: p.authors.name } : undefined,
        category: p.blog_categories ? { name: p.blog_categories.name, slug: p.blog_categories.slug } : undefined,
      }));
      setPosts(formatted);
      setCategories(catRows || []);
    }
    setLoading(false);
  };

  // Duplicate Action: creates a new Draft with -copy added to slug
  const handleDuplicate = async (post: BlogPostItem) => {
    try {
      const { data: original } = await supabase.from("blog_posts").select("*").eq("id", post.id).single();
      if (!original) return;

      const newSlug = `${original.slug}-copy-${Date.now().toString().slice(-4)}`;
      const { error } = await supabase.from("blog_posts").insert({
        ...original,
        id: undefined,
        title: `${original.title} (Copy)`,
        slug: newSlug,
        status: "draft",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;
      toast.success(`Duplicated "${post.title}" as new Draft.`);
      loadData();
    } catch (err: any) {
      toast.error("Duplicate failed: " + err.message);
    }
  };

  // Toggle Publish / Unpublish
  const handleTogglePublish = async (post: BlogPostItem) => {
    const nextStatus = post.status === "published" ? "draft" : "published";
    const { error } = await supabase
      .from("blog_posts")
      .update({
        status: nextStatus,
        is_in_sitemap: nextStatus === "published",
        updated_at: new Date().toISOString(),
      })
      .eq("id", post.id);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Post is now ${nextStatus}.`);
      loadData();
    }
  };

  // Execute Delete / Move to Trash
  const handleConfirmDelete = async () => {
    if (!deletingPost) return;

    // Create 301 redirect if live post is deleted
    if (deletingPost.status === "published" && createRedirectOnDelete && redirectTarget) {
      await supabase.from("redirects").insert({
        old_path: `/blog/${deletingPost.slug}`,
        new_path: redirectTarget,
        status_code: 301,
        is_active: true,
      });
      toast.info(`Created 301 redirect from /blog/${deletingPost.slug} to ${redirectTarget}`);
    }

    const { error } = await supabase
      .from("blog_posts")
      .update({
        status: "trash",
        trashed_at: new Date().toISOString(),
        is_in_sitemap: false,
      })
      .eq("id", deletingPost.id);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(`Post moved to Trash (held for 30 days).`);
      setDeletingPost(null);
      loadData();
    }
  };

  // Metric counts
  const totalPosts = posts.filter((p) => p.status !== "trash").length;
  const publishedPosts = posts.filter((p) => p.status === "published").length;
  const draftPosts = posts.filter((p) => p.status === "draft").length;
  const scheduledPosts = posts.filter((p) => p.status === "scheduled").length;

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.slug.toLowerCase().includes(search.toLowerCase());

      const matchStatus = statusFilter === "all" ? p.status !== "trash" : p.status === statusFilter;
      const matchCategory =
        categoryFilter === "all" || p.category?.slug === categoryFilter;

      return matchSearch && matchStatus && matchCategory;
    });
  }, [posts, search, statusFilter, categoryFilter]);

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">Blog</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">All Posts</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Regulatory Blog Posts</h1>
            <p className="mt-0.5 text-xs text-slate-500">
              Draft, schedule, duplicate, and publish technical compliance insights and market access articles.
            </p>
          </div>

          <Link
            to="/admin/blog/new"
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#082a6d] transition"
          >
            <Plus className="h-4 w-4" />
            <span>Add New Post</span>
          </Link>
        </div>
      </div>

      {/* 5 Metric Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <button
          onClick={() => setStatusFilter("all")}
          className={`rounded-xl border p-4 text-left transition ${
            statusFilter === "all"
              ? "border-[#0b3a96] bg-blue-50/50 shadow-xs"
              : "border-slate-200 bg-white hover:border-slate-300 shadow-xs"
          }`}
        >
          <div className="text-xs font-medium text-slate-500">Total Posts</div>
          <div className="mt-1.5 text-2xl font-bold text-slate-900">{totalPosts}</div>
        </button>

        <button
          onClick={() => setStatusFilter("published")}
          className={`rounded-xl border p-4 text-left transition ${
            statusFilter === "published"
              ? "border-emerald-600 bg-emerald-50/50 shadow-xs"
              : "border-slate-200 bg-white hover:border-slate-300 shadow-xs"
          }`}
        >
          <div className="text-xs font-medium text-emerald-700">Published</div>
          <div className="mt-1.5 text-2xl font-bold text-emerald-700">{publishedPosts}</div>
        </button>

        <button
          onClick={() => setStatusFilter("draft")}
          className={`rounded-xl border p-4 text-left transition ${
            statusFilter === "draft"
              ? "border-slate-400 bg-slate-100 shadow-xs"
              : "border-slate-200 bg-white hover:border-slate-300 shadow-xs"
          }`}
        >
          <div className="text-xs font-medium text-slate-600">Drafts</div>
          <div className="mt-1.5 text-2xl font-bold text-slate-700">{draftPosts}</div>
        </button>

        <button
          onClick={() => setStatusFilter("scheduled")}
          className={`rounded-xl border p-4 text-left transition ${
            statusFilter === "scheduled"
              ? "border-teal-600 bg-teal-50/50 shadow-xs"
              : "border-slate-200 bg-white hover:border-slate-300 shadow-xs"
          }`}
        >
          <div className="text-xs font-medium text-teal-700">Scheduled</div>
          <div className="mt-1.5 text-2xl font-bold text-teal-700">{scheduledPosts}</div>
        </button>

        <Link
          to="/admin/blog/categories"
          className="rounded-xl border border-slate-200 bg-white p-4 text-left hover:border-slate-300 shadow-xs transition"
        >
          <div className="text-xs font-medium text-purple-700">Categories</div>
          <div className="mt-1.5 text-2xl font-bold text-purple-700">{categories.length}</div>
        </Link>
      </div>

      {/* Filters & Search */}
      <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs sm:grid-cols-4">
        <div className="relative sm:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search article titles or slugs..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          />
        </div>

        <div>
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          >
            <option value="all">All Categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="scheduled">Scheduled</option>
            <option value="trash">Trash (30-day retention)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-5 py-3">Title & URL Slug</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Author</th>
                <th className="px-5 py-3">Publish Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-500">
                    Loading blog posts...
                  </td>
                </tr>
              ) : filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-500">
                    No blog posts found.
                  </td>
                </tr>
              ) : (
                filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3.5 max-w-sm">
                      <Link
                        to="/admin/blog/new"
                        search={{ edit: post.id } as any}
                        className="font-semibold text-slate-900 hover:text-[#0b3a96] hover:underline transition truncate block"
                        title="Click to edit article"
                      >
                        {post.title}
                      </Link>
                      <div className="font-mono text-[11px] text-[#0b3a96] truncate">
                        /insights/{post.slug}
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">
                      {post.category ? (
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                          {post.category.name}
                        </span>
                      ) : (
                        <span className="text-slate-400">Uncategorized</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600">
                      {post.author?.name || "Regulatory Team"}
                    </td>
                    <td className="px-5 py-3.5 text-slate-500">
                      {post.publish_date_ist
                        ? new Date(post.publish_date_ist).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                        : "Draft"}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
                          post.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : post.status === "scheduled"
                            ? "bg-teal-50 text-teal-700 border border-teal-200"
                            : post.status === "draft"
                            ? "bg-slate-100 text-slate-600 border border-slate-200"
                            : "bg-rose-50 text-rose-700 border border-rose-200"
                        }`}
                      >
                        {post.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <Link
                          to="/admin/blog/new"
                          search={{ edit: post.id } as any}
                          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-[#0b3a96] transition"
                          title="Edit Article"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </Link>

                        <a
                          href={`/insights/${post.slug}${post.status !== "published" ? "?preview=1" : ""}`}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                          title="Preview Live / Draft"
                        >
                          <Eye className="h-3.5 w-3.5" />
                        </a>

                        <button
                          onClick={() => handleDuplicate(post)}
                          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                          title="Duplicate as Draft"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>

                        <button
                          onClick={() => handleTogglePublish(post)}
                          className="rounded p-1.5 text-[#0b3a96] hover:bg-blue-50"
                          title={post.status === "published" ? "Unpublish" : "Publish"}
                        >
                          <Send className="h-3.5 w-3.5" />
                        </button>

                        <button
                          onClick={() => setDeletingPost(post)}
                          className="rounded p-1.5 text-rose-600 hover:bg-rose-50"
                          title="Delete (Move to 30-Day Trash)"
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

      {/* Delete / Move to Trash Modal with 301 Prompt */}
      {deletingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <h3 className="text-base font-bold text-slate-900">Move Article to Trash?</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to delete <strong className="text-slate-900">"{deletingPost.title}"</strong>? It will remain in Trash for 30 days before permanent deletion.
            </p>

            {deletingPost.status === "published" && (
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-3.5 space-y-2 text-xs">
                <p className="font-semibold text-amber-900 flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>This article is currently LIVE</span>
                </p>
                <label className="flex items-center gap-2 cursor-pointer text-slate-800">
                  <input
                    type="checkbox"
                    checked={createRedirectOnDelete}
                    onChange={(e) => setCreateRedirectOnDelete(e.target.checked)}
                    className="rounded border-slate-300 text-[#0b3a96] focus:ring-blue-500"
                  />
                  <span>Create 301 redirect to avoid 404 error</span>
                </label>

                {createRedirectOnDelete && (
                  <div className="pt-1">
                    <label className="block text-[11px] text-slate-600">Redirect Destination URL</label>
                    <input
                      type="text"
                      value={redirectTarget}
                      onChange={(e) => setRedirectTarget(e.target.value)}
                      placeholder="/blog or /services/..."
                      className="mt-1 w-full rounded border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800 font-mono"
                    />
                  </div>
                )}
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setDeletingPost(null)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="rounded-lg bg-rose-600 px-5 py-2 text-xs font-semibold text-white hover:bg-rose-500"
              >
                Move to Trash
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
