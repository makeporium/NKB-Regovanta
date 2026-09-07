const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

const project = path.resolve(__dirname, "..");
const origin = "https://www.nkbregovanta.com";

function inventory(routesDir = path.join(project, "src/routes")) {
  return fs.readdirSync(routesDir)
    .filter((file) => file.endsWith(".tsx") && !file.startsWith("__"))
    .map((file) => {
      const source = fs.readFileSync(path.join(routesDir, file), "utf8");
      const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
      let route;
      let canonical;
      let noindex = false;
      function visit(node) {
        if (ts.isCallExpression(node) && node.expression.getText(ast) === "createFileRoute"
          && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) {
          route = node.arguments[0].text.replaceAll("_", "").replace(/\/$/, "") || "/";
        }
        if (ts.isObjectLiteralExpression(node)) {
          const values = {};
          for (const prop of node.properties) {
            if (ts.isPropertyAssignment(prop) && ts.isStringLiteral(prop.initializer)) {
              values[prop.name.getText(ast).replace(/["']/g, "")] = prop.initializer.text;
            }
          }
          if (values.rel === "canonical") canonical = values.href;
          if (["robots", "googlebot", "bingbot"].includes(values.name)
            && /\bnoindex\b/i.test(values.content || "")) noindex = true;
        }
        ts.forEachChild(node, visit);
      }
      visit(ast);
      if (!route) throw new Error(`Missing literal route: ${file}`);
      if (!canonical) {
        if (/return\s*<Outlet\s*\/>/.test(source)) return null;
        throw new Error(`Missing canonical: ${file}`);
      }
      const url = new URL(canonical);
      if (url.origin !== origin || (url.pathname.replace(/\/$/, "") || "/") !== route) {
        throw new Error(`Canonical mismatch: ${file}`);
      }
      return { file, route, canonical, noindex };
    }).filter(Boolean);
}

function renderSitemap(pages = inventory()) {
  const urls = pages.filter((page) => !page.noindex).map((page) => page.canonical).sort();
  if (new Set(urls).size !== urls.length) throw new Error("Duplicate sitemap URL");
  const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  // Omit lastmod unless a trustworthy content-modification date is maintained.
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + urls.map((url) => `  <url><loc>${escape(url)}</loc></url>`).join("\n")
    + "\n</urlset>\n";
}

if (require.main === module) {
  const output = renderSitemap();
  const target = path.join(project, "public/sitemap.xml");
  if (process.argv.includes("--check")) {
    if (fs.readFileSync(target, "utf8").replaceAll("\r\n", "\n") !== output) {
      console.error("Sitemap is stale. Run npm run seo:sitemap.");
      process.exitCode = 1;
    } else console.log("Sitemap matches all indexable canonical routes.");
  } else {
    fs.writeFileSync(target, output);
    console.log(`Generated sitemap with ${inventory().filter((page) => !page.noindex).length} URLs.`);
  }
}
module.exports = { inventory, renderSitemap, project };
