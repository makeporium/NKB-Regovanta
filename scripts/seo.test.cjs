const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { inventory, renderSitemap } = require("./generate_sitemap.cjs");

function fixture(t, files) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "nkb-seo-test-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  for (const [name, source] of Object.entries(files)) fs.writeFileSync(path.join(dir, name), source);
  return dir;
}
const page = (route, robots = "") => `export const Route = createFileRoute(
  '${route}'
)({ head: () => ({ meta: [${robots}], links: [{ rel: 'canonical', href: 'https://www.nkbregovanta.com${route.replace(/\/$/, "")}' }] }) });`;

test("multiline route and bot-specific exclusion survive sitemap generation", (t) => {
  const dir = fixture(t, {
    "services.tsx": "function Layout() { return <Outlet /> } const Route = createFileRoute('/services')({component: Layout});",
    "services.index.tsx": page("/services/"),
    "services.private.tsx": page("/services/private", "{name: 'googlebot', content: 'noindex, follow'}"),
  });
  const rows = inventory(dir);
  assert.equal(rows.length, 2);
  const xml = renderSitemap(rows);
  assert.match(xml, /<loc>https:\/\/www.nkbregovanta.com\/services<\/loc>/);
  assert.doesNotMatch(xml, /private|lastmod|priority/);
});

test("missing and mismatched canonicals fail instead of publishing wrong URLs", (t) => {
  const missing = fixture(t, {"page.tsx": "const Route = createFileRoute('/page')({component: Page});"});
  assert.throws(() => inventory(missing), /Missing canonical/);
  const mismatch = fixture(t, {"page.tsx": page("/page").replace(".com/page", ".com/wrong")});
  assert.throws(() => inventory(mismatch), /Canonical mismatch/);
});

test("duplicate sitemap destinations are rejected", () => {
  const item = { canonical: "https://www.nkbregovanta.com/page", noindex: false };
  assert.throws(() => renderSitemap([item, item]), /Duplicate/);
});


test("news cache coalesces concurrent requests and retains data during upstream outages", async () => {
  const vm = require("node:vm");
  const ts = require("typescript");
  const feedPath = path.join(__dirname, "../src/functions/regulatoryFeed.ts");
  const source = fs.readFileSync(feedPath, "utf8").replaceAll("import.meta.env", "({})");
  const compiled = ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}}).outputText;
  let requests = 0;
  let unavailable = false;
  let now = Date.now();
  class Clock extends Date { static now() { return now; } }
  const exports = {};
  vm.runInNewContext(compiled, {
    exports, Date: Clock, AbortSignal, process: {env: {}},
    console: {log() {}, warn() {}, error() {}},
    require(name) {
      if (name === "@tanstack/react-start") return {createServerFn: () => ({handler: (fn) => fn})};
      if (name === "@/lib/regulatorySchema") return {AIItemSchema: {safeParse: () => ({success: false})}};
      return require(name);
    },
    async fetch() {
      requests++;
      if (unavailable) throw new Error("upstream unavailable");
      return {ok: true, text: async () => '<rss><channel><item><title>Medical device regulatory guidance</title><link>https://example.test/notice</link><pubDate>Mon, 07 Sep 2026 00:00:00 GMT</pubDate></item></channel></rss>'};
    },
  });
  const [a, b] = await Promise.all([exports.fetchRegulatoryFeed(), exports.fetchRegulatoryFeed()]);
  assert.equal(requests, 4);
  assert.ok(a.length > 0);
  assert.equal(a, b);
  assert.equal(await exports.fetchRegulatoryFeed(), a);
  assert.equal(requests, 4);
  now += 16 * 60_000;
  unavailable = true;
  assert.equal(await exports.fetchRegulatoryFeed(), a);
  assert.equal(requests, 8);
  assert.equal(await exports.fetchRegulatoryFeed(), a);
  assert.equal(requests, 8);
});
