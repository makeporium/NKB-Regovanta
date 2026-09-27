import { createClient } from "@supabase/supabase-js";
import staticPages from "@/generated/sitemap-pages.json";

const ORIGIN = "https://www.nkbregovanta.com";

type StaticPage = { route: string; canonical: string; legacyRoutes?: string[] };
type SitemapRow = { loc: string; lastmod?: string | undefined };

function serverSupabase() {
  const env = typeof process !== "undefined" ? process.env : {};
  const metaEnv = (import.meta as ImportMeta & { env?: Record<string, string> }).env || {};
  const url =
    env["SUPABASE_URL"] ||
    env["VITE_SUPABASE_URL"] ||
    metaEnv["VITE_SUPABASE_URL"] ||
    "https://zoihnehiptkfgxshtazi.supabase.co";
  const key =
    env["SUPABASE_ANON_KEY"] ||
    env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
    metaEnv["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
    "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP";
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function dateOnly(value?: string | null) {
  return value ? value.split("T")[0] : undefined;
}

function renderUrlSet(rows: SitemapRow[]) {
  const body = rows
    .map((row) => {
      const lastmod = row.lastmod ? `<lastmod>${escapeXml(row.lastmod)}</lastmod>` : "";
      return `  <url><loc>${escapeXml(row.loc)}</loc>${lastmod}</url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export async function generateLivePagesSitemap() {
  const supabase = serverSupabase();
  const [{ data: pages, error: pagesError }, { data: redirects, error: redirectsError }] =
    await Promise.all([
      supabase.from("pages").select("url_path, updated_at, status, is_in_sitemap"),
      supabase.from("redirects").select("old_path, new_path, is_active").eq("is_active", true),
    ]);

  if (pagesError) throw new Error(`Unable to load sitemap page settings: ${pagesError.message}`);
  if (redirectsError)
    throw new Error(`Unable to load sitemap redirects: ${redirectsError.message}`);

  const settingsByPath = new Map((pages || []).map((page) => [page.url_path, page]));
  const oldPathForDestination = new Map(
    (redirects || []).map((rule) => [rule.new_path, rule.old_path]),
  );
  const rows = (staticPages as StaticPage[]).flatMap((page) => {
    const legacySetting = page.legacyRoutes?.map((path) => settingsByPath.get(path)).find(Boolean);
    const setting =
      settingsByPath.get(page.route) ||
      legacySetting ||
      settingsByPath.get(oldPathForDestination.get(page.route) || "");
    if (setting && (setting.status !== "published" || !setting.is_in_sitemap)) return [];
    return [{ loc: page.canonical, lastmod: dateOnly(setting?.updated_at) }];
  });
  return renderUrlSet(rows);
}

export async function generateLivePostsSitemap() {
  const supabase = serverSupabase();
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("slug, updated_at")
    .or(
      `status.eq.published,and(status.eq.scheduled,publish_date_ist.lte.${new Date().toISOString()})`,
    )
    .eq("is_in_sitemap", true)
    .order("publish_date_ist", { ascending: false });
  if (error) throw new Error(`Unable to load published sitemap posts: ${error.message}`);
  return renderUrlSet(
    (posts || []).map((post) => ({
      loc: `${ORIGIN}/insights/${post.slug}`,
      lastmod: dateOnly(post.updated_at),
    })),
  );
}

export function generateSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${ORIGIN}/sitemap-pages.xml</loc></sitemap>\n  <sitemap><loc>${ORIGIN}/sitemap-posts.xml</loc></sitemap>\n</sitemapindex>\n`;
}

export function xmlResponse(xml: string, status = 200) {
  return new Response(xml, {
    status,
    headers: {
      "Content-Type": "application/xml; charset=UTF-8",
      "Cache-Control": "no-store, max-age=0, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export function sitemapErrorResponse(error: unknown) {
  console.error("Sitemap generation failed", error);
  return xmlResponse(
    '<?xml version="1.0" encoding="UTF-8"?>\n<error>Sitemap temporarily unavailable</error>\n',
    503,
  );
}
