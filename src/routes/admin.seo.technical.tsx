import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { settingsService } from "@/lib/services/settingsService";
import { sitemapService } from "@/lib/services/sitemapService";
import {
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  ArrowRight,
  Bot,
  Network,
  BarChart3,
  Search,
  EyeOff,
  ArrowRightLeft,
  BookmarkCheck,
} from "lucide-react";

export const Route = createFileRoute("/admin/seo/technical")({
  component: TechnicalSeoPage,
});

function TechnicalSeoPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const settings = await settingsService.getAll();
      const sitemap = await sitemapService.getSummary();
      const robotsHistory = await settingsService.getRobotsHistory();

      const { data: noindexPages } = await supabase
        .from("seo_meta")
        .select("target_url, robots_index, canonical_type, canonical_url")
        .eq("robots_index", "noindex");

      const { data: excludedSitemapPages } = await supabase
        .from("pages")
        .select("url_path, name")
        .eq("status", "published")
        .eq("is_in_sitemap", false);

      const { data: redirects } = await supabase.from("redirects").select("old_path, new_path");

      // Check chains
      const redirMap = new Map();
      for (const r of redirects || []) redirMap.set(r.old_path, r.new_path);
      const chains: Array<{ from: string; step: string; to: string }> = [];
      for (const r of redirects || []) {
        if (redirMap.has(r.new_path)) {
          chains.push({ from: r.old_path, step: r.new_path, to: redirMap.get(r.new_path) });
        }
      }

      // Check canonical pointing to different URL
      const { data: customCanonicals } = await supabase
        .from("seo_meta")
        .select("target_url, canonical_url")
        .eq("canonical_type", "custom");

      // Robots check
      const robotsContent = settings.robots_txt || "";
      const isBlockingAll =
        robotsContent.includes("User-agent: *") && robotsContent.includes("Disallow: /");

      setData({
        settings,
        sitemap,
        lastRobotsEdit: robotsHistory[0] || null,
        isBlockingAll,
        noindexCount: noindexPages?.length || 0,
        excludedSitemapCount: excludedSitemapPages?.length || 0,
        chainsCount: chains.length,
        customCanonicalsCount: customCanonicals?.length || 0,
        isGa4Set: Boolean(settings.ga4_measurement_id),
        isGtmSet: Boolean(settings.gtm_container_id),
        isGscSet: Boolean(settings.search_console_tag),
      });
      setLoading(false);
    }
    load();
  }, []);

  if (loading || !data) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        <span>Compiling technical SEO audit...</span>
      </div>
    );
  }

  const technicalChecks = [
    {
      label: "Site-Wide Robots.txt Block Status",
      status: data.isBlockingAll ? "critical" : "pass",
      text: data.isBlockingAll
        ? "CRITICAL: robots.txt contains Disallow: / under User-agent: *"
        : "Healthy: Crawlers allowed across public routes",
      detail: data.lastRobotsEdit
        ? `Last edited by ${data.lastRobotsEdit.created_by_name} on ${new Date(data.lastRobotsEdit.created_at).toLocaleDateString("en-IN")}`
        : "Default configuration",
      linkText: "Configure Robots.txt",
      path: "/admin/settings/robots",
    },
    {
      label: "Pages Set to Noindex / Nofollow",
      status: data.noindexCount > 0 ? "warning" : "pass",
      text: `${data.noindexCount} page(s) currently marked Noindex`,
      detail: "Hidden intentionally or mistakenly from search engines",
      linkText: "Review Pages List",
      path: "/admin/seo/pages",
    },
    {
      label: "Pages Manually Excluded from XML Sitemap",
      status: data.excludedSitemapCount > 0 ? "warning" : "pass",
      text: `${data.excludedSitemapCount} published page(s) excluded from sitemap`,
      detail: "Excluded pages are not advertised directly to Google crawlers",
      linkText: "Manage Sitemap Inclusions",
      path: "/admin/settings/sitemap",
    },
    {
      label: "Redirect Chains & Loops (A → B → C)",
      status: data.chainsCount > 0 ? "warning" : "pass",
      text: data.chainsCount > 0 ? `${data.chainsCount} multi-hop redirect chain(s) found` : "Zero redirect chains or loops detected",
      detail: "Chains waste crawl budget and add latency; point A directly to C",
      linkText: "Optimize Redirects",
      path: "/admin/seo/redirects",
    },
    {
      label: "Pages with Cross-URL Custom Canonicals",
      status: data.customCanonicalsCount > 0 ? "info" : "pass",
      text: `${data.customCanonicalsCount} page(s) point canonical to a different URL`,
      detail: "Instructs Google to index a different master URL",
      linkText: "Review Canonicals",
      path: "/admin/seo/canonicals",
    },
    {
      label: "XML Sitemap Generation Health",
      status: data.sitemap.totalUrlsCount > 0 ? "pass" : "warning",
      text: `Active sitemap with ${data.sitemap.totalUrlsCount} indexed URLs`,
      detail: `Pages: ${data.sitemap.totalPagesCount} | Articles: ${data.sitemap.totalPostsCount}`,
      linkText: "View Sitemap Controls",
      path: "/admin/settings/sitemap",
    },
    {
      label: "Analytics & Tracking Verification Tags",
      status: data.isGscSet && (data.isGa4Set || data.isGtmSet) ? "pass" : "warning",
      text: `Search Console: ${data.isGscSet ? "Connected" : "Missing"} | GA4/GTM: ${data.isGa4Set || data.isGtmSet ? "Active" : "Missing"}`,
      detail: "Ensures traffic measurement and Google Search Console performance data",
      linkText: "Configure Tracking",
      path: "/admin/settings/analytics",
    },
  ];

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">SEO</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Technical SEO</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Technical SEO Health Summary</h1>
          <p className="mt-0.5 text-xs text-slate-500">
            Read-only audit of high-impact technical signals that govern site-wide crawlability, indexation, and analytics.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {technicalChecks.map((chk, idx) => {
          const isCritical = chk.status === "critical";
          const isWarning = chk.status === "warning";
          const isPass = chk.status === "pass";

          return (
            <div
              key={idx}
              className={`flex flex-col justify-between gap-4 rounded-xl border p-4.5 sm:flex-row sm:items-center shadow-xs ${
                isCritical
                  ? "border-rose-200 bg-rose-50/70"
                  : isWarning
                  ? "border-amber-200 bg-amber-50/60"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {isCritical && <ShieldAlert className="h-4 w-4 text-rose-600" />}
                  {isWarning && <AlertTriangle className="h-4 w-4 text-amber-600" />}
                  {isPass && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
                  <span className="text-xs font-bold text-slate-900">{chk.label}</span>
                </div>
                <div className={`text-xs font-semibold ${isCritical ? "text-rose-900" : isWarning ? "text-amber-900" : "text-slate-800"}`}>
                  {chk.text}
                </div>
                <div className="text-[11px] text-slate-500">{chk.detail}</div>
              </div>

              <Link
                to={chk.path}
                className="inline-flex items-center gap-1.5 self-start rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-[#0b3a96] hover:text-white hover:border-[#0b3a96] transition sm:self-center shrink-0"
              >
                <span>{chk.linkText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
