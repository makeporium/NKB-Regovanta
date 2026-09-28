const fs = require("node:fs");
const path = require("node:path");
const { createClient } = require("@supabase/supabase-js");

const project = path.resolve(__dirname, "..");
const manifest = JSON.parse(
  fs.readFileSync(path.join(project, "src/generated/sitemap-pages.json"), "utf8"),
);
const apply = process.argv.includes("--apply");
const origin = "https://www.nkbregovanta.com";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL ||
    process.env.SUPABASE_URL ||
    "https://zoihnehiptkfgxshtazi.supabase.co",
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP",
);

async function main() {
  const [
    { data: pages, error: pageReadError },
    { data: metas, error: metaReadError },
    { data: links, error: linkReadError },
  ] = await Promise.all([
    supabase.from("pages").select("id, url_path, slug"),
    supabase.from("seo_meta").select("id, target_url, canonical_url"),
    supabase.from("internal_links").select("id, source_url, target_url"),
  ]);
  if (pageReadError || metaReadError || linkReadError)
    throw pageReadError || metaReadError || linkReadError;

  const pagesByPath = new Map((pages || []).map((row) => [row.url_path, row]));
  const metasByPath = new Map((metas || []).map((row) => [row.target_url, row]));
  const moves = manifest.flatMap((entry) => {
    if (pagesByPath.has(entry.route)) return [];
    const oldPath = (entry.legacyRoutes || []).find((candidate) => pagesByPath.has(candidate));
    return oldPath ? [{ oldPath, newPath: entry.route }] : [];
  });

  console.log(`${apply ? "Applying" : "Would apply"} ${moves.length} Admin route migrations.`);
  for (const move of moves) {
    console.log(`${move.oldPath} -> ${move.newPath}`);
    if (!apply) continue;
    const page = pagesByPath.get(move.oldPath);
    const meta = metasByPath.get(move.oldPath);
    const slug = move.newPath.split("/").filter(Boolean).at(-1) || "home";
    const { error: pageError } = await supabase
      .from("pages")
      .update({
        url_path: move.newPath,
        slug,
        updated_at: new Date().toISOString(),
      })
      .eq("id", page.id);
    if (pageError) throw pageError;

    if (meta && !metasByPath.has(move.newPath)) {
      const canonicalWasSelf =
        !meta.canonical_url || meta.canonical_url === `${origin}${move.oldPath}`;
      const { error: metaError } = await supabase
        .from("seo_meta")
        .update({
          target_url: move.newPath,
          ...(canonicalWasSelf ? { canonical_url: `${origin}${move.newPath}` } : {}),
          updated_at: new Date().toISOString(),
        })
        .eq("id", meta.id);
      if (metaError) throw metaError;
    }

    for (const link of links || []) {
      const update = {};
      if (link.source_url === move.oldPath) update.source_url = move.newPath;
      if (link.target_url === move.oldPath) update.target_url = move.newPath;
      if (Object.keys(update).length) {
        const { error: linkError } = await supabase
          .from("internal_links")
          .update(update)
          .eq("id", link.id);
        if (linkError) throw linkError;
      }
    }
  }
}

main().catch((error) => {
  console.error("Admin route synchronization failed:", error);
  process.exitCode = 1;
});
