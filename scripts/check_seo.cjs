const fs = require("node:fs");
const path = require("node:path");
const { inventory, renderSitemap, project } = require("./generate_sitemap.cjs");
const pages = inventory();
const failures = [];
const routes = new Set(pages.map((page) => page.route));
const titles = new Map();
const descriptions = new Map();
for (const page of pages) {
  const source = fs.readFileSync(path.join(project, "src/routes", page.file), "utf8");
  const title = source.match(/\btitle:\s*["']([^"']+)/)?.[1];
  const description = source.match(/name:\s*["']description["'],\s*content:\s*["']([^"']+)/)?.[1];
  for (const [label, value, seen] of [["title", title, titles], ["description", description, descriptions]]) {
    if (!value) failures.push(`${page.file}: missing ${label}`);
    else if (seen.has(value)) failures.push(`${page.file}: duplicate ${label} with ${seen.get(value)}`);
    else seen.set(value, page.file);
  }
  const headings = source.match(/<h1[\s>]/g) || [];
  if (headings.length > 1) failures.push(`${page.file}: multiple H1 elements`);
}
function scan(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) scan(file);
    else if (/\.tsx?$/.test(file) && !file.endsWith("routeTree.gen.ts")) {
      const source = fs.readFileSync(file, "utf8");
      for (const match of source.matchAll(/(?:to|href)\s*[=:]\s*["'](\/[^"']*)/g)) {
        const target = match[1].split(/[?#]/)[0].replace(/\/$/, "") || "/";
        if (!routes.has(target) && !fs.existsSync(path.join(project, "public", target))) {
          failures.push(`${path.relative(project, file)}: unresolved link ${target}`);
        }
      }
      if (/["']\/src\/assets\//.test(source)) failures.push(`${file}: unbundled source asset URL`);
    }
  }
}
scan(path.join(project, "src"));
failures.push(...require("./check_articles.cjs").checkArticles(pages));
failures.push(...require("./check_indexing_review.cjs").checkIndexingReview(pages));
if (fs.readFileSync(path.join(project, "public/sitemap.xml"), "utf8").replaceAll("\r\n", "\n") !== renderSitemap(pages)) {
  failures.push("Sitemap does not match indexable routes");
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else console.log(`SEO checks passed: ${pages.length} pages; ${pages.filter((page) => !page.noindex).length} indexable.`);
