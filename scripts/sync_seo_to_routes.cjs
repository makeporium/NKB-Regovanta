/**
 * sync_seo_to_routes.cjs
 *
 * Synchronizes SEO metadata from the Supabase `seo_meta` table
 * directly into the local `src/routes/*.tsx` source files.
 *
 * This ensures that:
 * 1. Your Git codebase / .tsx files match changes made in the Admin Dashboard.
 * 2. Client-side TanStack Router hydration uses the updated metadata.
 * 3. Fallbacks and static code stay 100% consistent with the database.
 *
 * Usage:
 *   node scripts/sync_seo_to_routes.cjs
 *   or: npm run seo:sync
 */

const fs = require("node:fs");
const path = require("node:path");
const { createClient } = require("@supabase/supabase-js");

const project = path.resolve(__dirname, "..");
const routesDir = path.join(project, "src", "routes");

const SUPABASE_URL = "https://zoihnehiptkfgxshtazi.supabase.co";
const SUPABASE_KEY = "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function buildRouteFileMap() {
  const files = fs
    .readdirSync(routesDir)
    .filter(
      (f) =>
        f.endsWith(".tsx") &&
        !f.startsWith("__") &&
        !f.startsWith("admin.") &&
        !f.startsWith("blog.") &&
        !f.includes("$")
    );

  const routeMap = new Map(); // routePath -> filePath

  for (const file of files) {
    const fullPath = path.join(routesDir, file);
    const content = fs.readFileSync(fullPath, "utf8");

    const match = content.match(/createFileRoute\(\s*["']([^"']+)["']\s*\)/);
    if (match) {
      let routePath = match[1].replace(/_/g, "").replace(/\/$/, "") || "/";
      routeMap.set(routePath, fullPath);
    }
  }

  return routeMap;
}

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function updateFileSeo(filePath, meta) {
  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  // 1. Update title: { title: "..." }
  if (meta.seo_title) {
    const titleRegex = /(\{\s*title:\s*["'])([^"']*)(["']\s*\})/;
    if (titleRegex.test(content)) {
      const escapedNewTitle = meta.seo_title.replace(/"/g, '\\"');
      content = content.replace(titleRegex, `$1${escapedNewTitle}$3`);
      modified = true;
    }
  }

  // 2. Update description: { name: "description", content: "..." }
  if (meta.meta_description) {
    const descRegex = /(\{\s*name:\s*["']description["'],\s*content:\s*["'])([^"']*)(["']\s*\})/;
    if (descRegex.test(content)) {
      const escapedNewDesc = meta.meta_description.replace(/"/g, '\\"');
      content = content.replace(descRegex, `$1${escapedNewDesc}$3`);
      modified = true;
    }
  }

  // 3. Update og:title: { property: "og:title", content: "..." }
  if (meta.og_title || meta.seo_title) {
    const newOgTitle = (meta.og_title || meta.seo_title).replace(/"/g, '\\"');
    const ogTitleRegex = /(\{\s*property:\s*["']og:title["'],\s*content:\s*["'])([^"']*)(["']\s*\})/;
    if (ogTitleRegex.test(content)) {
      content = content.replace(ogTitleRegex, `$1${newOgTitle}$3`);
      modified = true;
    }
  }

  // 4. Update og:description: { property: "og:description", content: "..." }
  if (meta.og_description || meta.meta_description) {
    const newOgDesc = (meta.og_description || meta.meta_description).replace(/"/g, '\\"');
    const ogDescRegex = /(\{\s*property:\s*["']og:description["'],\s*content:\s*["'])([^"']*)(["']\s*\})/;
    if (ogDescRegex.test(content)) {
      content = content.replace(ogDescRegex, `$1${newOgDesc}$3`);
      modified = true;
    }
  }

  // 5. Update twitter:title
  if (meta.twitter_title || meta.seo_title) {
    const newTwTitle = (meta.twitter_title || meta.seo_title).replace(/"/g, '\\"');
    const twTitleRegex = /(\{\s*name:\s*["']twitter:title["'],\s*content:\s*["'])([^"']*)(["']\s*\})/;
    if (twTitleRegex.test(content)) {
      content = content.replace(twTitleRegex, `$1${newTwTitle}$3`);
      modified = true;
    }
  }

  // 6. Update twitter:description
  if (meta.twitter_description || meta.meta_description) {
    const newTwDesc = (meta.twitter_description || meta.meta_description).replace(/"/g, '\\"');
    const twDescRegex = /(\{\s*name:\s*["']twitter:description["'],\s*content:\s*["'])([^"']*)(["']\s*\})/;
    if (twDescRegex.test(content)) {
      content = content.replace(twDescRegex, `$1${newTwDesc}$3`);
      modified = true;
    }
  }

  // 7. Update og:image & twitter:image if provided
  if (meta.og_image) {
    const newImg = meta.og_image.startsWith("http") ? meta.og_image : `https://www.nkbregovanta.com${meta.og_image}`;
    const ogImgRegex = /(\{\s*property:\s*["']og:image["'],\s*content:\s*["'])([^"']*)(["']\s*\})/;
    if (ogImgRegex.test(content)) {
      content = content.replace(ogImgRegex, `$1${newImg}$3`);
      modified = true;
    }
    const twImgRegex = /(\{\s*name:\s*["']twitter:image["'],\s*content:\s*["'])([^"']*)(["']\s*\})/;
    if (twImgRegex.test(content)) {
      content = content.replace(twImgRegex, `$1${newImg}$3`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }
  return false;
}

async function sync() {
  console.log("🔄 Fetching SEO metadata from Supabase seo_meta table...");
  const { data: records, error } = await supabase.from("seo_meta").select("*");

  if (error) {
    console.error("❌ Failed to fetch seo_meta:", error.message);
    process.exit(1);
  }

  console.log(`📋 Found ${records.length} SEO records in database.`);
  const routeMap = buildRouteFileMap();
  console.log(`📁 Found ${routeMap.size} route files in src/routes/.\n`);

  let updatedCount = 0;
  let skippedCount = 0;

  for (const record of records) {
    const targetUrl = record.target_url.replace(/\/$/, "") || "/";
    const filePath = routeMap.get(targetUrl);

    if (!filePath) {
      skippedCount++;
      continue;
    }

    const wasUpdated = updateFileSeo(filePath, record);
    if (wasUpdated) {
      console.log(`  ✅ Synced: ${targetUrl} -> ${path.basename(filePath)}`);
      updatedCount++;
    }
  }

  console.log(`\n🎉 Synchronization complete!`);
  console.log(`   Updated: ${updatedCount} files`);
  console.log(`   Skipped/Unchanged: ${records.length - updatedCount}`);
}

sync().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
