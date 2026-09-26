import { supabase } from "@/lib/supabase";

export interface SitemapSummary {
  lastGeneratedAt: string | null;
  totalPagesCount: number;
  totalPostsCount: number;
  totalUrlsCount: number;
  isIncludeCategories: boolean;
}

export const sitemapService = {
  async getSummary(): Promise<SitemapSummary> {
    try {
      const { count: pagesCount } = await supabase
        .from("pages")
        .select("*", { count: "exact", head: true })
        .eq("status", "published")
        .eq("is_in_sitemap", true);

      const { count: postsCount } = await supabase
        .from("blog_posts")
        .select("*", { count: "exact", head: true })
        .eq("status", "published")
        .eq("is_in_sitemap", true);

      const { data: setting } = await supabase
        .from("settings")
        .select("value")
        .eq("key", "sitemap_last_generated")
        .single();

      const pCount = pagesCount || 0;
      const bCount = postsCount || 0;

      return {
        lastGeneratedAt: setting?.value || null,
        totalPagesCount: pCount,
        totalPostsCount: bCount,
        totalUrlsCount: pCount + bCount,
        isIncludeCategories: true,
      };
    } catch {
      return {
        lastGeneratedAt: null,
        totalPagesCount: 0,
        totalPostsCount: 0,
        totalUrlsCount: 0,
        isIncludeCategories: true,
      };
    }
  },

  async generatePagesXml(): Promise<string> {
    const { data: pages } = await supabase
      .from("pages")
      .select("url_path, updated_at, status, is_in_sitemap")
      .eq("status", "published")
      .eq("is_in_sitemap", true)
      .order("url_path", { ascending: true });

    const escape = (text: string) =>
      text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

    const urls = (pages || []).map((p) => {
      const loc = `https://www.nkbregovanta.com${p.url_path === "/" ? "" : p.url_path}`;
      const lastmod = p.updated_at ? p.updated_at.split("T")[0] : new Date().toISOString().split("T")[0];
      return `  <url>\n    <loc>${escape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  },

  async generatePostsXml(): Promise<string> {
    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, updated_at, status, is_in_sitemap")
      .eq("status", "published")
      .eq("is_in_sitemap", true)
      .order("publish_date_ist", { ascending: false });

    const escape = (text: string) =>
      text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

    const urls = (posts || []).map((p) => {
      const loc = `https://www.nkbregovanta.com/blog/${p.slug}`;
      const lastmod = p.updated_at ? p.updated_at.split("T")[0] : new Date().toISOString().split("T")[0];
      return `  <url>\n    <loc>${escape(loc)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  },

  async generateIndexXml(): Promise<string> {
    const today = new Date().toISOString().split("T")[0];
    return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>https://www.nkbregovanta.com/sitemap-pages.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>https://www.nkbregovanta.com/sitemap-posts.xml</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>\n</sitemapindex>\n`;
  },

  async regenerate(): Promise<{ success: boolean; error?: string }> {
    try {
      const now = new Date().toISOString();
      await supabase.from("settings").upsert(
        { key: "sitemap_last_generated", value: now, updated_at: now },
        { onConflict: "key" }
      );
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  },

  async togglePageSitemap(pageId: string, isInSitemap: boolean): Promise<boolean> {
    const { error } = await supabase
      .from("pages")
      .update({ is_in_sitemap: isInSitemap, updated_at: new Date().toISOString() })
      .eq("id", pageId);
    return !error;
  },
};
