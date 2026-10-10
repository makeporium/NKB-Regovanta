const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  "https://zoihnehiptkfgxshtazi.supabase.co",
  "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP"
);

function decodeEntities(str) {
  if (!str) return str;
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

async function run() {
  const { data: pages, error } = await supabase
    .from("pages")
    .select("id, url_path, h1")
    .like("h1", "%&amp;%");

  if (error) {
    console.error("Error fetching pages:", error);
    return;
  }

  console.log(`Found ${pages?.length || 0} pages with &amp; in h1`);

  if (pages && pages.length > 0) {
    for (const p of pages) {
      const cleanH1 = decodeEntities(p.h1);
      await supabase
        .from("pages")
        .update({ h1: cleanH1, updated_at: new Date().toISOString() })
        .eq("id", p.id);
    }
    console.log("Successfully cleaned all pages.h1 rows!");
  }

  // Also check seo_meta
  const { data: seoRows } = await supabase
    .from("seo_meta")
    .select("id, target_url, seo_title, meta_description")
    .like("seo_title", "%&amp;%");

  console.log(`Found ${seoRows?.length || 0} seo_meta with &amp; in seo_title`);

  if (seoRows && seoRows.length > 0) {
    for (const s of seoRows) {
      await supabase
        .from("seo_meta")
        .update({
          seo_title: decodeEntities(s.seo_title),
          meta_description: decodeEntities(s.meta_description),
          updated_at: new Date().toISOString(),
        })
        .eq("id", s.id);
    }
    console.log("Successfully cleaned seo_meta rows!");
  }

  // Check homepage specifically
  const { data: homePage } = await supabase
    .from("pages")
    .select("url_path, h1")
    .eq("url_path", "/");
  console.log("Homepage in DB after cleanup:", homePage);
}

run();
