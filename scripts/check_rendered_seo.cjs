const { inventory } = require("./generate_sitemap.cjs");
const { load } = require("cheerio");
const base = process.argv[2];
if (!base || !/^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(base)) {
  throw new Error("Provide a local HTTP origin, for example http://127.0.0.1:4173");
}
const pages = inventory();
const failures = [];
let next = 0;
let completed = 0;
async function worker() {
  while (next < pages.length) {
    const page = pages[next++];
    try {
      const response = await fetch(base + page.route, {signal: AbortSignal.timeout(60000)});
      if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
      const $ = load(await response.text());
      const articlePath = require('node:path').join(__dirname, '../src/content/articles', page.route.split('/').pop() + '.json');
      if (page.route.startsWith('/insights/') && require('node:fs').existsSync(articlePath)) {
        const article = JSON.parse(require('node:fs').readFileSync(articlePath, 'utf8'));
        const body = $('article').text();
        for (const paragraph of [article.intro, ...article.sections.flatMap(s => s.paragraphs), article.example, article.faq.answer]) {
          if (!body.includes(paragraph)) throw new Error('replacement paragraph missing from rendered HTML');
        }
        if ($('h1').text() !== article.title) throw new Error('replacement title mismatch');
      }
      if ($("h1").length !== 1) throw new Error(`${$("h1").length} H1 elements`);
      if ($('meta[name="description"]').length !== 1) throw new Error("description count");
      if ($('link[rel="canonical"]').length !== 1 || $('link[rel="canonical"]').attr("href") !== page.canonical) {
        throw new Error("canonical mismatch");
      }
      const noindex = /noindex/.test($('meta[name="robots"]').attr("content") || "");
      if (noindex !== page.noindex) throw new Error("noindex mismatch");
      if ($('meta[name="googlebot"], meta[name="bingbot"]').length) throw new Error("redundant bot directive");
      for (const script of $('script[type="application/ld+json"]').toArray()) JSON.parse($(script).html());
      if ($('a[href="/services/india/manufacturing-licenses"]').length) throw new Error("old broken footer link");
    } catch (error) { failures.push(`${page.route}: ${error.message}`); }
    completed++;
    if (completed % 50 === 0) console.log(`Verified ${completed}/${pages.length} pages`);
  }
}
Promise.all(Array.from({length: 3}, () => worker())).then(() => {
  if (failures.length) { console.error(failures.join("\n")); process.exitCode = 1; }
  else console.log(`Rendered SEO passed on all ${pages.length} pages.`);
});
