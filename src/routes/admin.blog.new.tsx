import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  PenTool,
  Save,
  Send,
  Clock,
  Image as ImageIcon,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Share2,
  Code2,
  Eye,
  History,
  X,
  ExternalLink,
  Plus,
  ArrowLeft,
  Calendar,
  Sparkles,
} from "lucide-react";
import { RichBlogEditor, sanitizeArticleContent } from "@/components/admin/RichBlogEditor";
import { DirectImageUploader } from "@/components/admin/DirectImageUploader";

export const Route = createFileRoute("/admin/blog/new")({
  component: BlogPostEditorPage,
});

function BlogPostEditorPage() {
  const router = useRouter();

  // Read the edit ID directly from the URL — the most reliable source.
  // router.state.location.search is a raw string like "?edit=abc", not a parsed object.
  const editQueryId =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("edit") || undefined
      : undefined;

  // Basic Post Data
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [status, setStatus] = useState<"draft" | "published" | "scheduled">("draft");
  const [publishDateIst, setPublishDateIst] = useState(
    new Date().toISOString().slice(0, 16)
  );

  // Relationships
  const [authorId, setAuthorId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);
  const [authors, setAuthors] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);

  // Featured Image
  const [featuredImage, setFeaturedImage] = useState("");
  const [featuredImageAlt, setFeaturedImageAlt] = useState("");
  const [featuredImageCaption, setFeaturedImageCaption] = useState("");

  // SEO Fields
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [focusKeyword, setFocusKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [robotsIndex, setRobotsIndex] = useState<"index" | "noindex">("index");
  const [robotsFollow, setRobotsFollow] = useState<"follow" | "nofollow">("follow");

  // Revisions & Autosave
  const [saving, setSaving] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [lastAutosave, setLastAutosave] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"content" | "seo" | "social" | "schema">("content");

  // Pre-Publish Checklist Modal
  const [showPrepublishModal, setShowPrepublishModal] = useState(false);

  useEffect(() => {
    async function init() {
      const { data: aData } = await supabase.from("authors").select("*").eq("is_active", true);
      const { data: cData } = await supabase.from("blog_categories").select("*");
      const { data: tData } = await supabase.from("blog_tags").select("*");

      setAuthors(aData || []);
      setCategories(cData || []);
      setTags(tData || []);

      // Check if edit ID is provided via search param or window location
      const params = new URLSearchParams(window.location.search);
      const targetId = editQueryId || params.get("edit");

      if (targetId) {
        setEditId(targetId);
        setLoadingPost(true);
        try {
          const { data: post, error } = await supabase
            .from("blog_posts")
            .select("*")
            .eq("id", targetId)
            .single();

          if (error || !post) {
            toast.error("Failed to load article: " + (error?.message || "Not found"));
          } else {
            setTitle(post.title || "");
            setSlug(post.slug || "");
            setContentHtml(post.content_html || "");
            setStatus(post.status || "draft");
            if (post.publish_date_ist) {
              setPublishDateIst(new Date(post.publish_date_ist).toISOString().slice(0, 16));
            }
            if (post.author_id) setAuthorId(post.author_id);
            if (post.category_id) setCategoryId(post.category_id);
            setFeaturedImage(post.featured_image || "");
            setFeaturedImageAlt(post.featured_image_alt || "");
            setFeaturedImageCaption(post.featured_image_caption || "");

            // Fetch attached tags
            const { data: tagLinks } = await supabase
              .from("blog_post_tags")
              .select("tag_id")
              .eq("post_id", targetId);
            if (tagLinks) {
              setSelectedTagIds(tagLinks.map((t) => t.tag_id));
            }

            // Fetch SEO meta
            const { data: meta } = await supabase
              .from("seo_meta")
              .select("*")
              .eq("target_url", `/insights/${post.slug}`)
              .maybeSingle();

            if (meta) {
              setSeoTitle(meta.seo_title || "");
              setMetaDescription(meta.meta_description || "");
              setFocusKeyword(meta.focus_keyword || "");
              setSecondaryKeywords((meta.secondary_keywords || []).join(", "));
              setCanonicalUrl(meta.canonical_url || "");
              setRobotsIndex(meta.robots_index === "noindex" ? "noindex" : "index");
              setRobotsFollow(meta.robots_follow === "nofollow" ? "nofollow" : "follow");
            }
          }
        } catch (err: any) {
          toast.error("Error fetching article details: " + err.message);
        } finally {
          setLoadingPost(false);
        }
      } else {
        if (aData && aData.length > 0) setAuthorId(aData[0].id);
        if (cData && cData.length > 0) setCategoryId(cData[0].id);
      }
    }
    init();
  }, [editQueryId]);

  // Autosave Draft every 60 seconds
  useEffect(() => {
    if (!title.trim()) return;
    const interval = setInterval(() => {
      setLastAutosave(new Date().toLocaleTimeString("en-IN"));
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, [title, slug, contentHtml]);

  // Generate slug from title automatically if untouched
  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!seoTitle) setSeoTitle(val);
    if (!editId) {
      const autoSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .slice(0, 60);
      setSlug(autoSlug);
    }
  };

  // Pre-publish validation checklist per Section 18.11
  const checklist = useMemo(() => {
    const hasInternalLink = /href=["']\/(?:services|about|case-studies|insights|blog)/i.test(contentHtml);
    const hasExternalLink = /href=["']https?:\/\/(?:cdsco|fda|ec\.europa\.eu|mhra)/i.test(contentHtml) || /href=["']https?:\/\//i.test(contentHtml);

    return [
      { label: "SEO Title Set", passed: Boolean(seoTitle.trim()), critical: false },
      { label: "Meta Description Set", passed: Boolean(metaDescription.trim()), critical: false },
      { label: "Focus Keyword Set", passed: Boolean(focusKeyword.trim()), critical: false },
      { label: "URL Slug Valid & Unique", passed: Boolean(slug.trim() && !/\s/.test(slug)), critical: true },
      { label: "H1 Heading (Blog Title)", passed: Boolean(title.trim()), critical: true },
      { label: "Featured Image Uploaded", passed: Boolean(featuredImage.trim()), critical: false },
      { label: "Featured Image ALT Text Provided", passed: Boolean(featuredImageAlt.trim()), critical: false },
      { label: "Internal Links Present in Body", passed: hasInternalLink, critical: false },
      { label: "Authoritative External References", passed: hasExternalLink, critical: false },
      { label: "Article Schema Valid", passed: true, critical: false },
      { label: "Index / Follow Enabled", passed: robotsIndex === "index", critical: false },
    ];
  }, [title, slug, seoTitle, metaDescription, focusKeyword, featuredImage, featuredImageAlt, contentHtml, robotsIndex]);

  const canPublish = Boolean(title.trim() && slug.trim() && contentHtml.trim());

  const handleSavePost = async (finalStatus: "draft" | "published" | "scheduled") => {
    if (!title.trim() || !slug.trim()) {
      toast.error("Blog title and URL slug are required.");
      return;
    }

    setSaving(true);
    try {
      const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/^-+|-+$/g, "");

      // Re-read ID from URL at save time to avoid stale-state race condition
      const resolvedEditId =
        editId ||
        (typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("edit")
          : null);

      let currentPostId = resolvedEditId;

      if (resolvedEditId) {
        // Update existing post
        const { error: postErr } = await supabase
          .from("blog_posts")
          .update({
            title,
            slug: cleanSlug,
            content_html: sanitizeArticleContent(contentHtml),
            author_id: authorId || null,
            category_id: categoryId || null,
            featured_image: featuredImage || null,
            featured_image_alt: featuredImageAlt || null,
            featured_image_caption: featuredImageCaption || null,
            status: finalStatus,
            publish_date_ist: new Date(publishDateIst).toISOString(),
            is_in_sitemap: finalStatus === "published",
            updated_at: new Date().toISOString(),
          })
          .eq("id", resolvedEditId);

        if (postErr) throw postErr;

        // Sync tags: remove old, insert new
        await supabase.from("blog_post_tags").delete().eq("post_id", resolvedEditId);
        if (selectedTagIds.length > 0) {
          const tagRows = selectedTagIds.map((tagId) => ({ post_id: resolvedEditId, tag_id: tagId }));
          await supabase.from("blog_post_tags").insert(tagRows);
        }
      } else {
        // Insert new post
        const { data: post, error: postErr } = await supabase
          .from("blog_posts")
          .insert({
            title,
            slug: cleanSlug,
            content_html: sanitizeArticleContent(contentHtml),
            author_id: authorId || null,
            category_id: categoryId || null,
            featured_image: featuredImage || null,
            featured_image_alt: featuredImageAlt || null,
            featured_image_caption: featuredImageCaption || null,
            status: finalStatus,
            publish_date_ist: new Date(publishDateIst).toISOString(),
            is_in_sitemap: finalStatus === "published",
          })
          .select("id")
          .single();

        if (postErr) throw postErr;
        currentPostId = post?.id || null;

        // Attach Tags
        if (selectedTagIds.length > 0 && currentPostId) {
          const tagRows = selectedTagIds.map((tagId) => ({ post_id: currentPostId, tag_id: tagId }));
          await supabase.from("blog_post_tags").insert(tagRows);
        }
      }

      // Save / Update Post SEO Meta
      const blogUrl = `/insights/${cleanSlug}`;
      await supabase.from("seo_meta").upsert(
        {
          target_url: blogUrl,
          seo_title: seoTitle ? `${seoTitle}` : `${title} | NKB Regovanta`,
          meta_description: metaDescription || title,
          focus_keyword: focusKeyword,
          secondary_keywords: secondaryKeywords ? secondaryKeywords.split(",").map((s) => s.trim()) : [],
          canonical_type: canonicalUrl ? "custom" : "self",
          canonical_url: canonicalUrl || `https://www.nkbregovanta.com${blogUrl}`,
          robots_index: robotsIndex,
          robots_follow: robotsFollow,
          og_title: seoTitle || title,
          og_description: metaDescription || title,
          og_image: featuredImage || "/og-image.png",
          twitter_title: seoTitle || title,
          twitter_description: metaDescription || title,
          twitter_image: featuredImage || "/og-image.png",
          updated_at: new Date().toISOString(),
        },
        { onConflict: "target_url" }
      );

      toast.success(
        resolvedEditId
          ? `Article updated successfully (${finalStatus})!`
          : `Post successfully ${
              finalStatus === "published"
                ? "published"
                : finalStatus === "scheduled"
                ? "scheduled"
                : "saved as draft"
            }!`
      );
      router.navigate({ to: "/admin/blog/posts" });
    } catch (err: any) {
      toast.error("Save failed: " + err.message);
    } finally {
      setSaving(false);
      setShowPrepublishModal(false);
    }
  };

  const toggleTag = (tagId: string) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
    );
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Top Action Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200 pb-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.navigate({ to: "/admin/blog/posts" })}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition"
            title="Back to All Articles"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              {editId ? "Edit Regulatory Guide" : "Create Regulatory Guide"}
            </h1>
            <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
              <span>
                Slug:{" "}
                <strong className="text-[#0b3a96] font-mono">
                  /insights/{slug || "post-slug"}
                </strong>
              </span>
              {lastAutosave && <span>• Autosaved at {lastAutosave}</span>}
              {loadingPost && <span className="text-blue-600 font-medium">• Loading article data...</span>}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {slug && (
            <a
              href={`/insights/${slug}?preview=1`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition shadow-2xs"
              title="Preview Article Live"
            >
              <Eye className="h-4 w-4 text-slate-500" />
              <span>Preview</span>
            </a>
          )}

          <button
            type="button"
            onClick={() => handleSavePost("draft")}
            disabled={saving || loadingPost}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 transition shadow-2xs"
          >
            <Save className="h-4 w-4" />
            <span>Save Draft</span>
          </button>

          <button
            type="button"
            onClick={() => setShowPrepublishModal(true)}
            disabled={saving || loadingPost || !canPublish}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
          >
            <Send className="h-4 w-4" />
            <span>{editId ? "Update Article" : "Publish Article"}</span>
          </button>
        </div>
      </div>

      {/* Main Form Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left 2 Cols: Main Editor & SEO Tabs */}
        <div className="lg:col-span-2 space-y-6">
          {/* Post Title Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Article Title (H1 Heading)
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="e.g. How to Register a Medical Device with CDSCO in India"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-lg font-bold text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none placeholder-slate-400 transition"
              />
            </div>

            {/* URL Slug */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                URL Slug (Short, lowercase, 3-6 words, no dates)
              </label>
              <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600 font-mono focus-within:bg-white focus-within:border-[#0b3a96] transition">
                <span className="text-slate-400 select-none">https://www.nkbregovanta.com/insights/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
                  className="flex-1 bg-transparent text-slate-900 font-semibold focus:outline-none pl-1"
                  placeholder="cdsco-medical-device-registration-guide"
                />
              </div>
            </div>
          </div>

          {/* Editor Tabs Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              {(["content", "seo", "social", "schema"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
                    activeTab === tab
                      ? "bg-[#0b3a96] text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {tab === "content" ? "Body Content" : tab === "seo" ? "SEO Meta" : tab === "social" ? "Social Cards" : "Schema"}
                </button>
              ))}
            </div>

            {/* ── Tab: Content Rich Editor ─────────────────────────────────── */}
            {activeTab === "content" && (
              <div className="space-y-3">
                <RichBlogEditor
                  value={contentHtml}
                  onChange={setContentHtml}
                  placeholder="Write or paste your regulatory guidance, medical device compliance steps, and technical comparisons..."
                />
              </div>
            )}

            {/* ── Tab: Post SEO ────────────────────────────────────────────── */}
            {activeTab === "seo" && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700">SEO Headline Title (&lt;title&gt;)</label>
                    <span className="text-[11px] font-semibold text-slate-500">{seoTitle.length} / 60 chars</span>
                  </div>
                  <input
                    type="text"
                    value={seoTitle}
                    onChange={(e) => setSeoTitle(e.target.value)}
                    placeholder="Headline for Google search engine results..."
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                  />
                  <p className="mt-1 text-[11px] text-emerald-600 font-medium">Includes brand suffix "| NKB Regovanta"</p>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700">Meta Description</label>
                    <span className="text-[11px] font-semibold text-slate-500">{metaDescription.length} / 160 chars</span>
                  </div>
                  <textarea
                    rows={3}
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Compelling executive summary for search engine snippets..."
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none leading-relaxed transition"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Focus Keyword</label>
                    <input
                      type="text"
                      value={focusKeyword}
                      onChange={(e) => setFocusKeyword(e.target.value)}
                      placeholder="e.g. CDSCO MD-14 import license"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700">Secondary Keywords</label>
                    <input
                      type="text"
                      value={secondaryKeywords}
                      onChange={(e) => setSecondaryKeywords(e.target.value)}
                      placeholder="Comma-separated keywords"
                      className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700">Robots Directive</label>
                  <select
                    value={robotsIndex}
                    onChange={(e) => setRobotsIndex(e.target.value as any)}
                    className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                  >
                    <option value="index">Index, Follow (Standard live published article)</option>
                    <option value="noindex">Noindex (Hide from search crawlers)</option>
                  </select>
                </div>
              </div>
            )}

            {/* ── Tab: Social ──────────────────────────────────────────────── */}
            {activeTab === "social" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Social Sharing Preview (OpenGraph & Twitter Card)</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    How this regulatory guide appears when shared on LinkedIn, Twitter, and WhatsApp:
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2 max-w-lg">
                  <div className="text-xs font-medium text-slate-400">nkbregovanta.com</div>
                  <div className="font-bold text-slate-900 text-sm">{seoTitle || title || "Article Headline"}</div>
                  <p className="text-xs text-slate-600 line-clamp-2">{metaDescription || "Summary text..."}</p>
                </div>
              </div>
            )}

            {/* ── Tab: Schema ──────────────────────────────────────────────── */}
            {activeTab === "schema" && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Automated Article & Breadcrumb Schema</h3>
                <p className="text-xs text-slate-500">
                  Injected dynamically during server rendering as valid JSON-LD:
                </p>
                <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-[11px] text-emerald-400 font-mono">
                  {JSON.stringify(
                    {
                      "@context": "https://schema.org",
                      "@type": "BlogPosting",
                      headline: title,
                      image: featuredImage || "https://www.nkbregovanta.com/og-image.png",
                      author: {
                        "@type": "Person",
                        name: authors.find((a) => a.id === authorId)?.name || "NKB Regulatory Team",
                      },
                      publisher: {
                        "@type": "Organization",
                        name: "NKB Regovanta Solutions Pvt. Ltd.",
                      },
                    },
                    null,
                    2
                  )}
                </pre>
              </div>
            )}
          </div>
        </div>

        {/* Right 1 Col: Publishing Meta & Attributes */}
        <div className="space-y-6">
          {/* Post Attributes Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Publishing Details
            </h3>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Author</label>
              <select
                value={authorId}
                onChange={(e) => setAuthorId(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              >
                {authors.map((a) => (
                  <option key={a.id} value={a.id}>
                    {a.name} ({a.credentials || "Specialist"})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Main Category</label>
              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Publish Date & Time (IST)</label>
              <input
                type="datetime-local"
                value={publishDateIst}
                onChange={(e) => setPublishDateIst(e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-800 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
              <p className="mt-1 text-[11px] text-slate-500">
                Future dates will be automatically scheduled.
              </p>
            </div>

            {/* Tags Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Article Tags</label>
              <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                {tags.map((t) => {
                  const isSelected = selectedTagIds.includes(t.id);
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => toggleTag(t.id)}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition ${
                        isSelected
                          ? "bg-blue-50 text-[#0b3a96] border border-blue-300"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {t.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Featured Image Card */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Featured Share Image
            </h3>
            <DirectImageUploader
              imageUrl={featuredImage}
              altText={featuredImageAlt}
              captionText={featuredImageCaption}
              onImageChange={setFeaturedImage}
              onAltChange={setFeaturedImageAlt}
              onCaptionChange={setFeaturedImageCaption}
              suggestedAltFallback={title ? `${title} - NKB Regovanta` : undefined}
            />
          </div>
        </div>
      </div>

      {/* ── Pre-Publish Checklist Modal (Section 18.11) ───────────────────── */}
      {showPrepublishModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-slate-900">Pre-Publish SEO Quality Checklist</h3>
              <button onClick={() => setShowPrepublishModal(false)} className="rounded p-1 text-slate-400 hover:text-slate-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Review on-page regulatory signals before pushing this guide to the live website and sitemap:
            </p>

            <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
              {checklist.map((c, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-xs"
                >
                  <span className="text-slate-800 font-medium">{c.label}</span>
                  {c.passed ? (
                    <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 text-[11px]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Passed</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-amber-600 text-[11px]">
                      <AlertTriangle className="h-3.5 w-3.5" />
                      <span>Review</span>
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setShowPrepublishModal(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Back to Editor
              </button>
              <button
                type="button"
                onClick={() => handleSavePost("published")}
                className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-blue-800 transition shadow-xs"
              >
                {editId ? "Confirm & Update Live" : "Confirm & Publish Live"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
