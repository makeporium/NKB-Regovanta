import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  FileText,
  CheckCircle2,
  EyeOff,
  BookOpen,
  Send,
  FileEdit,
  Clock,
  Image,
  AlertTriangle,
  Activity,
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Search,
  Globe,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/admin/dashboard")({
  component: MainDashboardPage,
});

interface DashboardMetrics {
  totalPages: number;
  indexedPages: number;
  noindexPages: number;
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  scheduledPosts: number;
  totalImages: number;
  imagesNeedingOptimisation: number;
  seoIssuesCount: number;
}

function MainDashboardPage() {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalPages: 0,
    indexedPages: 0,
    noindexPages: 0,
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    scheduledPosts: 0,
    totalImages: 0,
    imagesNeedingOptimisation: 0,
    seoIssuesCount: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        // 1. Pages stats
        const { data: pages } = await supabase.from("pages").select("id, status, is_in_sitemap");
        const totalP = pages?.length || 0;
        const noindexP = pages?.filter((p) => !p.is_in_sitemap).length || 0;
        const indexedP = totalP - noindexP;

        // 2. Blog posts stats
        const { data: posts } = await supabase.from("blog_posts").select("id, status");
        const totalB = posts?.length || 0;
        const pubB = posts?.filter((p) => p.status === "published").length || 0;
        const draftB = posts?.filter((p) => p.status === "draft").length || 0;
        const schedB = posts?.filter((p) => p.status === "scheduled").length || 0;

        // 3. Images stats
        const { data: images } = await supabase.from("images").select("id, warnings_json, alt_text, is_decorative");
        const totalImg = images?.length || 0;
        const needOpt = images?.filter(
          (img) =>
            (!img.alt_text && !img.is_decorative) ||
            (Array.isArray(img.warnings_json) && img.warnings_json.length > 0)
        ).length || 0;

        // 4. SEO issues count
        const { count: brokenCount } = await supabase
          .from("broken_links")
          .select("*", { count: "exact", head: true })
          .eq("label", "Broken");

        const totalIssues = (brokenCount || 0) + needOpt;

        setMetrics({
          totalPages: totalP,
          indexedPages: indexedP,
          noindexPages: noindexP,
          totalPosts: totalB,
          publishedPosts: pubB,
          draftPosts: draftB,
          scheduledPosts: schedB,
          totalImages: totalImg,
          imagesNeedingOptimisation: needOpt,
          seoIssuesCount: totalIssues,
        });
      } catch (err) {
        console.error("Failed to load dashboard metrics:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMetrics();
  }, []);

  const cards = [
    {
      title: "Total Pages",
      value: metrics.totalPages,
      description: "All website service & content pages",
      icon: FileText,
      path: "/admin/seo/pages",
      color: "text-[#0b3a96]",
      bg: "bg-blue-50",
      border: "border-slate-200",
    },
    {
      title: "Indexed Pages",
      value: metrics.indexedPages,
      description: "Pages allowed for search indexing",
      helpLine: "Check Google Search Console for actual crawl status.",
      icon: CheckCircle2,
      path: "/admin/seo/pages",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-slate-200",
    },
    {
      title: "Noindex Pages",
      value: metrics.noindexPages,
      description: "Pages excluded from search indexing",
      icon: EyeOff,
      path: "/admin/seo/pages",
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-slate-200",
    },
    {
      title: "Total Blog Posts",
      value: metrics.totalPosts,
      description: "Regulatory articles & market guides",
      icon: BookOpen,
      path: "/admin/blog/posts",
      color: "text-purple-700",
      bg: "bg-purple-50",
      border: "border-slate-200",
    },
    {
      title: "Published Posts",
      value: metrics.publishedPosts,
      description: "Live articles available to visitors",
      icon: Send,
      path: "/admin/blog/posts",
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-slate-200",
    },
    {
      title: "Draft Posts",
      value: metrics.draftPosts,
      description: "Articles currently in preparation",
      icon: FileEdit,
      path: "/admin/blog/posts",
      color: "text-slate-600",
      bg: "bg-slate-100",
      border: "border-slate-200",
    },
    {
      title: "Scheduled Posts",
      value: metrics.scheduledPosts,
      description: "Queued for automated release",
      icon: Clock,
      path: "/admin/blog/posts",
      color: "text-teal-700",
      bg: "bg-teal-50",
      border: "border-slate-200",
    },
    {
      title: "Total Images",
      value: metrics.totalImages,
      description: "Catalogued media & diagram assets",
      icon: Image,
      path: "/admin/seo/images",
      color: "text-indigo-700",
      bg: "bg-indigo-50",
      border: "border-slate-200",
    },
    {
      title: "Images to Optimise",
      value: metrics.imagesNeedingOptimisation,
      description: "Missing ALT text or file > 200 KB",
      icon: AlertTriangle,
      path: "/admin/seo/images",
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-slate-200",
    },
    {
      title: "Open SEO Issues",
      value: metrics.seoIssuesCount,
      description: "Actionable warnings & blockers",
      icon: Activity,
      path: "/admin/seo/dashboard",
      color: "text-rose-700",
      bg: "bg-rose-50",
      border: "border-slate-200",
    },
  ];

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Overview</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Admin Overview</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Comprehensive regulatory portal oversight, page indexing status, and marketing pipeline.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/admin/seo/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#082a6d] transition"
            >
              <Activity className="h-3.5 w-3.5" />
              <span>Open SEO Dashboard</span>
            </Link>

            <Link
              to="/admin/blog/new"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
            >
              <span>+ New Post</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Welcome Banner */}
      <div className="rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50/70 via-white to-slate-50 p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-[#0b3a96] p-3 text-white shadow-xs">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-base font-bold text-slate-900">
              NKB Regovanta Independent Admin Hub
            </h2>
            <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Manage website SEO tags, canonical URLs, image metadata, 301 redirects, and publication of technical regulatory articles directly from this portal without writing code.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-xs shrink-0">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>Supabase Live Connected</span>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.title}
              to={card.path}
              className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all duration-150 hover:-translate-y-0.5 hover:border-[#0b3a96]/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">{card.title}</span>
                  <div className={`rounded-lg p-2 ${card.bg} ${card.color}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-2xl font-bold tracking-tight text-slate-900">
                    {loading ? "..." : card.value}
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500 line-clamp-1">{card.description}</p>
                </div>
              </div>

              <div className="mt-4 border-t border-slate-100 pt-2.5">
                {card.helpLine ? (
                  <p className="text-[10px] text-slate-400 italic line-clamp-1">{card.helpLine}</p>
                ) : (
                  <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 group-hover:text-[#0b3a96] transition">
                    <span>Manage section</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </div>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Launch & Workflows Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Workflow Guidance Card */}
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Editorial & SEO Daily Workflows</h3>
              <p className="text-xs text-slate-500">Standard operating procedure for content marketing</p>
            </div>
            <span className="text-xs font-semibold text-[#0b3a96] bg-blue-50 px-2.5 py-1 rounded-md">
              SOP Checklist
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0b3a96] text-[10px] font-bold text-white">
                  1
                </span>
                <h4 className="font-semibold text-slate-900">On-Page SEO Optimization</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Navigate to <strong>Pages SEO Editor</strong> &gt; Inspect missing H1 or Title warnings &gt; Update meta description (140-160 chars) &gt; Set canonical URL &gt; Save.
              </p>
              <Link
                to="/admin/seo/pages"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0b3a96] hover:underline pt-1"
              >
                <span>Go to Pages Table</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4 space-y-2">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                  2
                </span>
                <h4 className="font-semibold text-slate-900">Publishing Regulatory Insights</h4>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Click <strong>+ New Post</strong> &gt; Write markdown or rich article &gt; Provide featured image with descriptive ALT text &gt; Set category &gt; Click Publish.
              </p>
              <Link
                to="/admin/blog/posts"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 hover:underline pt-1"
              >
                <span>View All Posts</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Global Impact / Quick Shortcuts */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1">
              <Globe className="h-4 w-4 text-[#0b3a96]" />
              <span>International Regulatory Reach</span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Managing compliance intelligence and market access across CDSCO (India), US FDA 510(k), EU MDR / IVDR, TGA (Australia), ANVISA (Brazil), and Health Canada.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Total Live Pages Catalogued</span>
                <span className="font-bold text-slate-900">{metrics.totalPages}</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100">
                <span className="text-slate-600">Published Articles</span>
                <span className="font-bold text-emerald-600">{metrics.publishedPosts}</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5">
                <span className="text-slate-600">Audit Status</span>
                <span className="font-bold text-[#0b3a96]">Healthy</span>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#0b3a96] hover:underline flex items-center gap-1"
            >
              <span>Visit Public Website</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <span className="text-[10px] text-slate-400">v2.4 Production</span>
          </div>
        </div>
      </div>
    </div>
  );
}
