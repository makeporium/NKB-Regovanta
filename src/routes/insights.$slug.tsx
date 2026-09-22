import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  Check,
  Eye,
  ChevronDown,
  ChevronUp,
  BookOpen,
  ShieldCheck,
  Linkedin,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Tag,
} from "lucide-react";
import { toast } from "sonner";
import { CTABand } from "@/components/site/Bits";

interface FaqItem {
  question: string;
  answer: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleDetail {
  id: string;
  title: string;
  slug: string;
  content_html: string;
  excerpt?: string | undefined;
  featured_image?: string | undefined;
  featured_image_alt?: string | undefined;
  featured_image_caption?: string | undefined;
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
  seo_meta?: {
    seo_title?: string | undefined;
    meta_description?: string | undefined;
    focus_keyword?: string | undefined;
    canonical_url?: string | undefined;
    robots_index?: string | undefined;
    og_title?: string | undefined;
    og_description?: string | undefined;
    og_image?: string | undefined;
  } | undefined;
  tags?: Array<{
    name: string;
    slug: string;
  }> | undefined;
}

/**
 * Strips foreign doctype, head, style, and script tags that could leak into the DOM
 */
export function cleanArticleHtml(rawHtml: string): string {
  if (!rawHtml) return "";

  let cleaned = rawHtml
    .replace(/<!doctype[^>]*>/gi, "")
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");

  const mainMatch = cleaned.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch && mainMatch[1]) {
    cleaned = mainMatch[1];
  } else {
    const bodyMatch = cleaned.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch && bodyMatch[1]) cleaned = bodyMatch[1];
  }

  cleaned = cleaned.replace(/<\/?(?:html|body|main)[^>]*>/gi, "").trim();
  return cleaned;
}

/**
 * Extracts Q&A pairs from FAQ sections for Schema.org FAQPage generation
 */
export function extractFaqs(html: string): FaqItem[] {
  if (!html) return [];
  const faqs: FaqItem[] = [];

  const faqHeadingRegex = /<h2[^>]*>[^<]*(?:faq|frequently asked questions)[^<]*<\/h2>([\s\S]*?)(?=<h2|$)/i;
  const match = html.match(faqHeadingRegex);
  if (!match || !match[1]) return [];

  const sectionContent = match[1];
  const qaRegex = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let qaMatch;
  while ((qaMatch = qaRegex.exec(sectionContent)) !== null) {
    if (qaMatch[1] && qaMatch[2]) {
      const question = qaMatch[1].replace(/<[^>]+>/g, "").trim();
      const answer = qaMatch[2].replace(/<[^>]+>/g, "").trim();
      if (question && answer) {
        faqs.push({ question, answer });
      }
    }
  }
  return faqs;
}

/**
 * Generates Table of Contents items with slugified IDs
 */
export function extractTableOfContents(html: string): { toc: TocItem[]; htmlWithIds: string } {
  if (!html) return { toc: [], htmlWithIds: "" };
  const toc: TocItem[] = [];
  let index = 0;

  const htmlWithIds = html.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, levelStr, attrs, text) => {
    const level = parseInt(levelStr, 10);
    const plainText = text.replace(/<[^>]+>/g, "").trim();
    if (!plainText) return match;

    const id = "section-" + (plainText.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || `heading-${index++}`);
    toc.push({ id, text: plainText, level });

    // Ensure id attribute is inserted into the heading
    if (/id=["'][^"']*["']/i.test(attrs)) {
      return match;
    }
    return `<h${level}${attrs} id="${id}">${text}</h${level}>`;
  });

  return { toc, htmlWithIds };
}

export const Route = createFileRoute("/insights/$slug")({
  loader: async ({ params }) => {
    const slug = params.slug;
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
          featured_image_caption,
          publish_date_ist,
          updated_at,
          status,
          authors (name, credentials, photo_url, bio),
          blog_categories (name, slug)
        `)
        .eq("slug", slug)
        .maybeSingle();

      if (error || !data) {
        return { post: null, faqs: [] };
      }

      // Fetch attached SEO Meta
      const { data: seoMeta } = await supabase
        .from("seo_meta")
        .select("*")
        .eq("target_url", `/insights/${slug}`)
        .maybeSingle();

      const cleanedHtml = cleanArticleHtml(data.content_html || "");
      const faqs = extractFaqs(cleanedHtml);

      // Fetch attached Tags
      const { data: tagRows } = await supabase
        .from("blog_post_tags")
        .select("blog_tags(name, slug)")
        .eq("post_id", data.id);

      const tags = (tagRows || [])
        .map((r: any) => r.blog_tags)
        .filter(Boolean);

      const item: ArticleDetail = {
        id: data.id,
        title: data.title,
        slug: data.slug,
        content_html: cleanedHtml,
        excerpt: data.excerpt,
        featured_image: data.featured_image,
        featured_image_alt: data.featured_image_alt,
        featured_image_caption: data.featured_image_caption,
        publish_date_ist: data.publish_date_ist,
        updated_at: data.updated_at,
        status: data.status,
        author: (data as any).authors
          ? {
              name: (data as any).authors.name,
              role: (data as any).authors.credentials,
              avatar_url: (data as any).authors.photo_url,
              bio: (data as any).authors.bio,
            }
          : undefined,
        category: (data as any).blog_categories
          ? {
              name: (data as any).blog_categories.name,
              slug: (data as any).blog_categories.slug,
            }
          : undefined,
        seo_meta: seoMeta || undefined,
        tags,
      };

      return { post: item, faqs };
    } catch {
      return { post: null, faqs: [] };
    }
  },

  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    const faqs = loaderData?.faqs || [];
    const canonicalUrl = `https://www.nkbregovanta.com/insights/${params.slug}`;

    if (!post) {
      return {
        meta: [
          { title: "Insight Article | NKB Regovanta" },
          { name: "robots", content: "noindex, follow" },
        ],
        links: [{ rel: "canonical", href: canonicalUrl }],
      };
    }

    const title = post.seo_meta?.seo_title || `${post.title} | NKB Regovanta`;
    const description =
      post.seo_meta?.meta_description ||
      post.excerpt ||
      `Expert medical device regulatory guidance on ${post.title} by NKB Regovanta specialists.`;
    const authorName = post.author?.name || "NKB Regovanta Regulatory Intelligence";
    const categoryName = post.category?.name || "Medical Device Regulatory Affairs";
    const heroImage = post.featured_image
      ? post.featured_image.startsWith("http")
        ? post.featured_image
        : `https://www.nkbregovanta.com${post.featured_image}`
      : "https://www.nkbregovanta.com/og-image.png";

    // Structured Schema.org Graphs: BlogPosting, BreadcrumbList, FAQPage
    const schemaList: any[] = [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: description,
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
        image: heroImage,
        datePublished: post.publish_date_ist || new Date().toISOString(),
        dateModified: post.updated_at || post.publish_date_ist || new Date().toISOString(),
        articleSection: categoryName,
        keywords: [
          post.seo_meta?.focus_keyword,
          ...(post.tags || []).map((t) => t.name),
        ].filter(Boolean).join(", "),
        author: {
          "@type": "Person",
          name: authorName,
          jobTitle: post.author?.role || "Regulatory Affairs Specialist",
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
          { "@type": "ListItem", position: 2, name: "Global Regulatory Insights", item: "https://www.nkbregovanta.com/insights" },
          { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
        ],
      },
    ];

    if (faqs && faqs.length > 0) {
      schemaList.push({
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.answer,
          },
        })),
      });
    }

    const schemaGraph = {
      "@context": "https://schema.org",
      "@graph": schemaList,
    };

    const keywordList = [
      post.seo_meta?.focus_keyword,
      ...(post.tags || []).map((t) => t.name),
    ].filter(Boolean).join(", ");

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "author", content: authorName },
        ...(keywordList ? [{ name: "keywords", content: keywordList }] : []),
        {
          name: "robots",
          content:
            post.status === "published"
              ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
              : "noindex, nofollow",
        },
        { property: "og:site_name", content: "NKB Regovanta" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "article" },
        { property: "og:image", content: heroImage },
        { property: "article:published_time", content: post.publish_date_ist },
        { property: "article:modified_time", content: post.updated_at || post.publish_date_ist },
        { property: "article:author", content: authorName },
        { property: "article:section", content: categoryName },
        ...(post.tags || []).map((t) => ({ property: "article:tag", content: t.name })),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: heroImage },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaGraph).replace(/</g, "\\u003c"),
        },
      ],
    };
  },

  component: DynamicInsightArticlePage,
});

function DynamicInsightArticlePage() {
  const loaderData = Route.useLoaderData();
  const { slug } = Route.useParams();
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const isPreview =
    typeof window !== "undefined" &&
    (new URLSearchParams(window.location.search).get("preview") === "1" ||
      new URLSearchParams(window.location.search).get("preview") === "true");

  const article = loaderData?.post;
  const faqs = loaderData?.faqs || [];

  const { toc, htmlWithIds } = useMemo(() => {
    if (!article?.content_html) return { toc: [], htmlWithIds: "" };
    return extractTableOfContents(article.content_html);
  }, [article?.content_html]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Article link copied to clipboard");
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const shareOnLinkedIn = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const title = encodeURIComponent(article?.title || "");
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank", "width=600,height=500");
    }
  };

  const shareOnTwitter = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Essential Regulatory Guidance: ${article?.title || ""}`);
      window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank", "width=600,height=500");
    }
  };

  const shareOnWhatsApp = () => {
    if (typeof window !== "undefined") {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`Read this regulatory guidance: ${article?.title} - ${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    }
  };

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
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition-colors"
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

  const wordCount = (article.content_html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 200));

  return (
    <article className="min-h-screen bg-white py-12 lg:py-16 text-slate-900">
      {/* Draft Preview Warning Bar */}
      {isPreview && article.status !== "published" && (
        <div className="sticky top-0 z-50 mb-8 flex items-center justify-between bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md">
          <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>
              PREVIEW MODE: This article is saved as a <strong>{article.status?.toUpperCase() || "DRAFT"}</strong>.
            </span>
          </div>
          <Link
            to="/admin/blog/posts"
            className="rounded bg-slate-900 px-2.5 py-1 text-[11px] text-white hover:bg-slate-800 transition"
          >
            Back to Admin
          </Link>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#0b3a96] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Global Regulatory Insights
          </Link>

          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link to="/" className="hover:text-[#0b3a96] transition-colors">Home</Link>
            <span>/</span>
            <Link to="/insights" className="hover:text-[#0b3a96] transition-colors">Insights</Link>
            {article.category && (
              <>
                <span>/</span>
                <span className="text-slate-700 font-semibold">{article.category.name}</span>
              </>
            )}
          </nav>
        </div>

        {/* Category Pill & Publication Date */}
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {article.category?.name || "REGULATORY INSIGHT"}
          </span>
          <span className="text-slate-300 text-sm">•</span>
          <span className="text-sm font-medium text-slate-500">{formattedDate}</span>
          <span className="text-slate-300 text-sm">•</span>
          <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-slate-400" />
            {readTimeMinutes} min read
          </span>
        </div>

        {/* Main Article Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0a192f] leading-tight tracking-tight mb-6">
          {article.title}
        </h1>

        {/* Article Excerpt */}
        {article.excerpt && (
          <p className="text-lg sm:text-xl text-[#1e3a8a]/85 font-medium leading-relaxed mb-8 pb-6 border-b border-gray-100">
            {article.excerpt}
          </p>
        )}

        {/* Author Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-3">
            {article.author?.avatar_url ? (
              <img
                src={article.author.avatar_url}
                alt={article.author.name}
                className="h-10 w-10 rounded-full border border-slate-200 object-cover shadow-2xs"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-[#0b3a96] font-bold">
                {article.author?.name ? article.author.name.charAt(0) : "N"}
              </div>
            )}
            <div>
              <div className="font-bold text-slate-900">
                {article.author?.name || "NKB Regulatory Intelligence"}
              </div>
              <div className="text-xs text-slate-500">
                {article.author?.role || "Medical Device & IVD Regulatory Practice"}
              </div>
            </div>
          </div>

          {/* Social Share Group */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">Share:</span>
            <button
              onClick={shareOnLinkedIn}
              title="Share on LinkedIn"
              className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </button>
            <button
              onClick={shareOnTwitter}
              title="Share on Twitter / X"
              className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              onClick={shareOnWhatsApp}
              title="Share on WhatsApp"
              className="rounded-lg border border-slate-200 bg-slate-50 p-2 text-slate-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
            </button>
            <button
              onClick={handleShare}
              title="Copy link"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copied ? "Copied" : "Copy Link"}</span>
            </button>
          </div>
        </div>

        {/* Featured Image */}
        {article.featured_image && (
          <div className="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-md">
            <img
              src={article.featured_image}
              alt={article.featured_image_alt || article.title}
              className="aspect-video sm:h-[450px] w-full object-cover"
              loading="eager"
            />
            {article.featured_image_alt && (
              <p className="px-4 py-2.5 text-center text-xs text-slate-500 italic bg-slate-50/80 border-t border-slate-100">
                {article.featured_image_alt}
              </p>
            )}
          </div>
        )}

        {/* 2-Column Desktop Grid with Sticky Table of Contents Sidebar */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Main Article Content Column */}
          <div className="lg:col-span-8">
            <div
              className="dynamic-article-prose prose prose-lg prose-navy max-w-none text-[#1f2937] leading-relaxed space-y-6 prose-headings:font-bold prose-headings:text-[#0a192f] prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:pt-8 prose-h2:pb-2 prose-h2:border-t prose-h2:border-gray-100 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-6 prose-a:text-[#0b3a96] prose-a:underline hover:prose-a:text-blue-700 prose-strong:text-[#0a192f] prose-img:rounded-xl prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-slate-200"
              dangerouslySetInnerHTML={{ __html: htmlWithIds }}
            />

            {/* Topic Tags Badges */}
            {article.tags && article.tags.length > 0 && (
              <div className="my-10 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-600">
                  <Tag className="h-3.5 w-3.5 text-[#0b3a96]" />
                  <span>Related Topics &amp; Regulatory Focus:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag.slug}
                      className="inline-flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs hover:border-[#0b3a96] hover:bg-blue-50 hover:text-[#0b3a96] transition-all"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Structured FAQ Section Accordion if extracted */}
            {faqs.length > 0 && (
              <div className="my-14 rounded-2xl border border-blue-100 bg-slate-50/60 p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <HelpCircle className="h-6 w-6 text-[#0b3a96]" />
                  <h2 className="text-2xl font-bold text-[#0a192f] m-0">
                    Frequently Asked Questions
                  </h2>
                </div>
                <div className="space-y-3">
                  {faqs.map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <div
                        key={i}
                        className="rounded-xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveFaq(isOpen ? null : i)}
                          className="flex w-full items-center justify-between p-4 text-left font-bold text-slate-900 hover:text-[#0b3a96] transition"
                        >
                          <span className="text-base leading-snug">{faq.question}</span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-[#0b3a96] shrink-0 ml-3" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-slate-400 shrink-0 ml-3" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="border-t border-slate-100 p-4 text-sm text-slate-700 leading-relaxed bg-slate-50/40">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Author Bio Box */}
            {article.author?.bio && (
              <div className="my-12 flex flex-col gap-5 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-slate-50 p-6 sm:flex-row sm:items-center sm:gap-6 shadow-2xs">
                {article.author.avatar_url && (
                  <img
                    src={article.author.avatar_url}
                    alt={article.author.name}
                    className="h-20 w-20 rounded-full border-2 border-white object-cover shadow-sm shrink-0"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-slate-900">{article.author.name}</h3>
                    <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                      <ShieldCheck className="h-3 w-3" /> Verified Regulatory Expert
                    </span>
                  </div>
                  {article.author.role && (
                    <p className="text-xs font-semibold text-[#0b3a96] mt-0.5">{article.author.role}</p>
                  )}
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {article.author.bio}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Table of Contents Box */}
              {toc.length > 0 && (
                <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 shadow-2xs">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-3">
                    <BookOpen className="h-4 w-4 text-[#0b3a96]" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 text-xs">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-1 hover:text-[#0b3a96] transition-colors leading-snug ${
                          item.level === 3
                            ? "pl-3 text-slate-500 hover:text-slate-800"
                            : "font-semibold text-slate-700"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Consultation Advisory Card */}
              <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-900 to-[#0a192f] p-6 text-white shadow-lg">
                <span className="inline-block rounded-full bg-blue-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-200 mb-3">
                  Consultation
                </span>
                <h3 className="text-lg font-bold leading-snug">
                  Need Fast CDSCO / FDA / EU MDR Clearance?
                </h3>
                <p className="mt-2 text-xs text-blue-100/90 leading-relaxed">
                  Our specialists handle classification, Device Master Files (DMF), quality systems (ISO 13485), and regulatory submissions worldwide.
                </p>
                <div className="mt-5 space-y-2">
                  <Link
                    to="/contact"
                    className="block w-full rounded-lg bg-white px-4 py-2.5 text-center text-xs font-bold text-[#0b3a96] hover:bg-blue-50 transition shadow-sm"
                  >
                    Schedule a Regulatory Consultation
                  </Link>
                  <Link
                    to="/insights"
                    className="block w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-center text-xs font-semibold text-white hover:bg-white/20 transition"
                  >
                    Browse All Regulatory Guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard CTABand across full width before footer */}
      <div className="mt-16">
        <CTABand
          title="Facing medical device compliance bottlenecks or Notified Body review findings?"
          description="NKB Regovanta conducts thorough regulatory gap assessments, dossier remediation, and health authority liaison to secure market approvals with confidence."
          action="Schedule a Regulatory Strategy Session"
        />
      </div>
    </article>
  );
}
