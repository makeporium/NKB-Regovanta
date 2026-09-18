import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Calendar, User, Clock, ArrowLeft, Share2, Check, Bookmark, Eye } from "lucide-react";
import { toast } from "sonner";

interface ArticleDetail {
  id: string;
  title: string;
  slug: string;
  content_html: string;
  excerpt?: string | undefined;
  featured_image?: string | undefined;
  featured_image_alt?: string | undefined;
  publish_date_ist?: string | undefined;
  updated_at?: string | undefined;
  status: string;
  author?: {
    name: string;
    role?: string | undefined;
    avatar_url?: string | undefined;
    bio?: string | undefined;
  } | undefined;
  category?: {
    name: string;
    slug: string;
  } | undefined;
}

export const Route = createFileRoute("/insights/$slug")({
  component: DynamicInsightArticlePage,
});

function DynamicInsightArticlePage() {
  const { slug } = Route.useParams();
  const [article, setArticle] = useState<ArticleDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const isPreview =
    typeof window !== "undefined" &&
    (new URLSearchParams(window.location.search).get("preview") === "1" ||
      new URLSearchParams(window.location.search).get("preview") === "true");

  useEffect(() => {
    loadArticle();
  }, [slug]);

  const loadArticle = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          content_html,
          excerpt,
          featured_image,
          featured_image_alt,
          publish_date_ist,
          updated_at,
          status,
          authors (name, credentials, photo_url, bio),
          blog_categories (name, slug)
        `)
        .eq("slug", slug)
        .single();

      if (error || !data) {
        setArticle(null);
      } else {
        const item: ArticleDetail = {
          id: data.id,
          title: data.title,
          slug: data.slug,
          content_html: data.content_html,
          excerpt: data.excerpt,
          featured_image: data.featured_image,
          featured_image_alt: data.featured_image_alt,
          publish_date_ist: data.publish_date_ist,
          updated_at: data.updated_at,
          status: data.status,
          author: (data as any).authors ? {
            name: (data as any).authors.name,
            role: (data as any).authors.credentials,
            avatar_url: (data as any).authors.photo_url,
            bio: (data as any).authors.bio,
          } : undefined,
          category: (data as any).blog_categories ? {
            name: (data as any).blog_categories.name,
            slug: (data as any).blog_categories.slug,
          } : undefined,
        };
        setArticle(item);
      }
    } catch {
      setArticle(null);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Article link copied to clipboard");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="flex items-center gap-3 text-slate-500 font-medium">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          Loading regulatory insight...
        </div>
      </div>
    );
  }

  if (!article || (article.status !== "published" && !isPreview)) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Insight Not Found</h1>
        <p className="mt-3 text-slate-600">
          The regulatory guide you are looking for may have been moved, updated, or unpublished.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Browse All Insights
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            Contact Regulatory Advisor
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = article.publish_date_ist
    ? new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      }).format(new Date(article.publish_date_ist))
    : "Recently Published";

  const wordCount = (article.content_html || "").replace(/<[^>]+>/g, "").split(/\s+/).length;
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 200));
  const canonicalUrl = `https://www.nkbregovanta.com/insights/${article.slug}`;

  // Structured Schema.org data for BlogPosting & Breadcrumbs
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt || article.title,
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
        image: article.featured_image ? `https://www.nkbregovanta.com${article.featured_image}` : undefined,
        datePublished: article.publish_date_ist,
        dateModified: article.updated_at || article.publish_date_ist,
        author: {
          "@type": "Person",
          name: article.author?.name || "NKB Regovanta Regulatory Intelligence",
        },
        publisher: {
          "@type": "Organization",
          name: "NKB Regovanta Solutions Pvt. Ltd.",
          url: "https://www.nkbregovanta.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.nkbregovanta.com/favicon.png",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nkbregovanta.com/" },
          { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.nkbregovanta.com/insights" },
          { "@type": "ListItem", position: 3, name: article.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <article className="min-h-screen bg-white py-12 lg:py-20 text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph).replace(/</g, "\\u003c") }}
      />

      {/* Draft Preview Bar */}
      {isPreview && article.status !== "published" && (
        <div className="sticky top-0 z-50 mb-8 flex items-center justify-between bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>PREVIEW MODE: This article is currently saved as a <strong>{article.status?.toUpperCase() || "DRAFT"}</strong> in the database.</span>
          </div>
          <Link
            to="/admin/blog/posts"
            className="rounded bg-slate-900 px-2.5 py-1 text-[11px] text-white hover:bg-slate-800 transition"
          >
            Back to Admin
          </Link>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/insights" className="hover:text-primary transition-colors">Insights</Link>
          {article.category && (
            <>
              <span>/</span>
              <span className="text-slate-700">{article.category.name}</span>
            </>
          )}
        </nav>

        {/* Category Pill */}
        {article.category && (
          <div className="mb-4">
            <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              {article.category.name}
            </span>
          </div>
        )}

        {/* Article Title */}
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>

        {/* Excerpt */}
        {article.excerpt && (
          <p className="mt-5 text-xl leading-relaxed text-slate-600 font-normal">
            {article.excerpt}
          </p>
        )}

        {/* Metadata Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-slate-100 py-4 text-xs sm:text-sm text-slate-500">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              <span className="font-semibold text-slate-800">
                {article.author?.name || "NKB Regovanta Team"}
              </span>
              {article.author?.role && <span className="text-slate-400">({article.author.role})</span>}
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>{formattedDate} (IST)</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-slate-400" />
              <span>{readTimeMinutes} min read</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
            {copied ? "Link Copied" : "Share Guide"}
          </button>
        </div>

        {/* Featured Image */}
        {article.featured_image && (
          <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <img
              src={article.featured_image}
              alt={article.featured_image_alt || article.title}
              className="aspect-video w-full object-cover"
              loading="eager"
            />
            {article.featured_image_alt && (
              <p className="px-4 py-2 text-center text-xs text-slate-400 italic">
                {article.featured_image_alt}
              </p>
            )}
          </div>
        )}

        {/* Body Content */}
        <div
          className="prose prose-slate lg:prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-img:rounded-xl prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-slate-200 my-10"
          dangerouslySetInnerHTML={{ __html: article.content_html }}
        />

        {/* Author Bio Box */}
        {article.author?.bio && (
          <div className="my-12 flex flex-col gap-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/50 to-slate-50 p-6 sm:flex-row sm:items-center sm:gap-6">
            {article.author.avatar_url && (
              <img
                src={article.author.avatar_url}
                alt={article.author.name}
                className="h-20 w-20 rounded-full border-2 border-white object-cover shadow"
              />
            )}
            <div className="flex-1">
              <h3 className="text-base font-bold text-slate-900">{article.author.name}</h3>
              {article.author.role && (
                <p className="text-xs font-medium text-blue-700">{article.author.role}</p>
              )}
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {article.author.bio}
              </p>
            </div>
          </div>
        )}

        {/* Consulting CTA */}
        <aside className="my-14 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-8 text-white shadow-xl">
          <h2 className="text-2xl font-bold tracking-tight">Need Expert Regulatory Strategy for This Device?</h2>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
            Our medical device and IVD regulatory consultants support pre-market submissions, clinical evaluation, technical documentation dossiers, and regulatory audits worldwide.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Discuss Your Project With NKB Regovanta
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
            >
              Browse All Guides
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
