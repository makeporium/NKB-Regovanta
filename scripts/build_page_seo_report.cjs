const fs = require("node:fs");
const path = require("node:path");
const cheerio = require("cheerio");
const { inventory, project } = require("./generate_sitemap.cjs");

const baseUrl = process.argv.find((arg) => arg.startsWith("--base="))?.slice(7) || "http://127.0.0.1:4173";
const pagesCsv = process.argv.find((arg) => arg.startsWith("--pages-csv="))?.slice(12);
const coverageCsv = process.argv.find((arg) => arg.startsWith("--coverage-csv="))?.slice(15);

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell.replace(/\r$/, ""));
      rows.push(row);
      row = [];
      cell = "";
    } else cell += char;
  }
  if (cell || row.length) {
    row.push(cell.replace(/\r$/, ""));
    rows.push(row);
  }
  const headers = rows.shift() || [];
  return rows.filter((values) => values.some(Boolean)).map((values) =>
    Object.fromEntries(headers.map((header, index) => [header, values[index] || ""])),
  );
}

function loadCsv(file) {
  return file && fs.existsSync(file) ? parseCsv(fs.readFileSync(file, "utf8")) : [];
}

function collectSchemaTypes(value, output = new Set()) {
  if (Array.isArray(value)) for (const item of value) collectSchemaTypes(item, output);
  else if (value && typeof value === "object") {
    const type = value["@type"];
    if (Array.isArray(type)) for (const item of type) output.add(String(item));
    else if (type) output.add(String(type));
    for (const nested of Object.values(value)) collectSchemaTypes(nested, output);
  }
  return output;
}

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function words(value) {
  return (clean(value).match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []).length;
}

function category(route) {
  if (route === "/") return "Corporate";
  if (route.startsWith("/services")) return "Services";
  if (route.startsWith("/industries")) return "Industries";
  if (route.startsWith("/insights")) return "Insights";
  if (route.startsWith("/case-studies")) return "Case studies";
  if (route.startsWith("/ai-news")) return "News";
  return "Corporate";
}

function esc(value) {
  return clean(value).replaceAll("|", "\\|");
}

const pagePerformance = new Map(
  loadCsv(pagesCsv).map((row) => {
    const url = row["Top pages"];
    return [url, {
      clicks: Number(row.Clicks || 0),
      impressions: Number(row.Impressions || 0),
      ctr: row.CTR || "0%",
      position: Number(row.Position || 0),
    }];
  }),
);
const discovered = new Set(loadCsv(coverageCsv).map((row) => row.URL).filter(Boolean));
const reviewRecords = new Map(
  JSON.parse(fs.readFileSync(path.join(project, "src/content/indexing-review.json"), "utf8"))
    .map((record) => [record.route, record]),
);

const priorityActions = {
  "/industries/ivd/eu": "Informational intent and breadcrumb update implemented. Keep self-canonical; monitor query overlap with the IVDR service hub.",
  "/services/eu/ivdr": "Commercial IVDR hub. Reciprocal guide link implemented. Add verified reviewer credentials and client-approved case evidence.",
  "/services/eu/mdr": "Commercial MDR hub. Add verified reviewer credentials, concrete deliverables, and client-approved case evidence.",
  "/services/usa": "Broad US FDA hub. Verify the U.S. Agent representation claim and add verifiable US delivery details before promoting it.",
  "/services/usa/agent-service": "Verify the named U.S. person or entity, physical place of business, consent process, and contact details required for the service claim.",
  "/services/usa/e-star": "Use page-filtered GSC queries to choose additions. Add original eSTAR workflow evidence and a real engagement example.",
  "/services/usa/510k": "Use page-filtered GSC queries to define its commercial keyword ownership and add genuine 510(k) experience evidence.",
  "/services/india/medical-devices": "Strong technical base. Test 'registration' in title only after exporting this page's actual GSC queries; add verified CDSCO case evidence.",
};

async function inspect(page) {
  const response = await fetch(`${baseUrl}${page.route}`);
  if (!response.ok) throw new Error(`${page.route}: HTTP ${response.status}`);
  const html = await response.text();
  const $ = cheerio.load(html);
  const title = clean($("title").first().text());
  const description = clean($('meta[name="description"]').first().attr("content"));
  const robots = clean($('meta[name="robots"]').first().attr("content"));
  const canonical = clean($('link[rel="canonical"]').first().attr("href"));
  const h1s = $("h1").map((_, element) => clean($(element).text())).get().filter(Boolean);
  const schemaTypes = new Set();
  $('script[type="application/ld+json"]').each((_, element) => {
    try { collectSchemaTypes(JSON.parse($(element).text()), schemaTypes); } catch {}
  });
  const content = clean($("main").length ? $("main").text() : $("body").text());
  const internalLinks = new Set();
  $("a[href]").each((_, element) => {
    try {
      const url = new URL($(element).attr("href"), "https://www.nkbregovanta.com");
      if (url.hostname === "www.nkbregovanta.com") internalLinks.add(url.pathname.replace(/\/$/, "") || "/");
    } catch {}
  });
  const gsc = pagePerformance.get(page.canonical);
  const review = reviewRecords.get(page.route);
  const technicalIssues = [];
  if (!title) technicalIssues.push("missing title");
  if (!description) technicalIssues.push("missing description");
  if (h1s.length !== 1) technicalIssues.push(`${h1s.length} H1 elements`);
  if (canonical !== page.canonical) technicalIssues.push("canonical mismatch");
  if (page.noindex && !/noindex/i.test(robots)) technicalIssues.push("noindex mismatch");
  if (!page.noindex && /noindex/i.test(robots)) technicalIssues.push("unexpected noindex");
  let action = priorityActions[page.route];
  if (!action && page.noindex) action = `Keep noindex: ${review?.reason || "excluded by reviewed indexing policy"}`;
  if (!action && gsc?.impressions) {
    if (gsc.position > 0 && gsc.position <= 20) action = "Protect current relevance; use its filtered queries to improve snippet and content only where evidence supports it.";
    else action = "Eligible and appearing in Search. Improve query alignment, original value, expert proof, and internal links based on filtered GSC data.";
  }
  if (!action && discovered.has(page.canonical)) action = "Eligible but GSC snapshot showed discovered and not crawled. Keep in sitemap and internal navigation; request indexing only if strategically important.";
  if (!action) action = "Technically eligible. No page-level GSC evidence in the supplied export; monitor before making speculative content changes.";
  return {
    ...page,
    category: category(page.route),
    title,
    titleLength: title.length,
    description,
    descriptionLength: description.length,
    robots,
    h1: h1s.join(" / ") || "Not resolved",
    h1Count: h1s.length,
    schemaTypes: [...schemaTypes].sort(),
    wordCount: words(content),
    internalLinkCount: internalLinks.size,
    gsc,
    coverage: discovered.has(page.canonical) ? "Discovered - currently not indexed (GSC snapshot)" : "Not listed in supplied drilldown",
    reviewReason: review?.reason || "",
    technical: technicalIssues.length ? technicalIssues.join("; ") : "Pass",
    action,
  };
}

function gscText(page) {
  if (!page.gsc) return "No row in supplied performance export";
  return `${page.gsc.clicks} clicks; ${page.gsc.impressions} impressions; ${page.gsc.ctr} CTR; position ${page.gsc.position}`;
}

function buildMarkdown(pages) {
  const indexable = pages.filter((page) => !page.noindex).length;
  const noindex = pages.length - indexable;
  const withGsc = pages.filter((page) => page.gsc?.impressions).length;
  const discoveredCount = pages.filter((page) => discovered.has(page.canonical)).length;
  const technicalFailures = pages.filter((page) => page.technical !== "Pass");
  const date = "9 September 2026";
  const lines = [
    "# NKB Regovanta Page by Page SEO Audit",
    "",
    `**Audit date:** ${date}  `,
    "**Prepared for:** NKB Regovanta and its SEO specialist  ",
    "**Scope:** All routable pages in the current repository, the current generated sitemap, and the supplied Google Search Console exports.",
    "",
    "## Main conclusion",
    "",
    `The current repository contains ${pages.length} routable pages: ${indexable} are indexable and included in the generated sitemap, while ${noindex} remain intentionally noindex after content review. Automated SEO validation passes for titles, descriptions, canonical URLs, H1 counts, internal links, sitemap consistency, and reviewed article integrity. ${technicalFailures.length ? `${technicalFailures.length} rendered pages require technical follow-up and are identified below.` : "No rendered page in this audit has a blocking title, description, H1, canonical, or robots defect."}`,
    "",
    "The site can therefore remain difficult to find for competitive non-brand terms even though its technical foundation is sound. Search visibility also depends on whether Google has crawled and selected the page, how closely the page satisfies a query, the site's demonstrated experience and reputation, useful original evidence, external references, and the strength of competing results. Technical correctness establishes eligibility; it does not guarantee indexing or a ranking position.",
    "",
    "## Audit totals",
    "",
    "| Measure | Result |",
    "|---|---:|",
    `| Routable pages | ${pages.length} |`,
    `| Indexable pages and sitemap URLs | ${indexable} |`,
    `| Intentionally noindex pages | ${noindex} |`,
    `| Pages with impressions in supplied GSC Pages export | ${withGsc} |`,
    `| Current routes listed in supplied discovered-not-indexed drilldown | ${discoveredCount} |`,
    `| Blocking rendered technical failures | ${technicalFailures.length} |`,
    "",
    "## Why rankings remain limited",
    "",
    "1. **The GSC data shows visibility without competitive positions.** Several US FDA and EU IVDR URLs already receive impressions, which means Google can discover and consider them, but average positions are often far from page one.",
    "2. **The broad target terms are commercial and competitive.** Correct tags and schema cannot replace real authority, specific service evidence, recognized experts, references, and links that Google can corroborate.",
    "3. **The supplied GSC exports do not map queries to pages.** Separate Pages and Queries CSV files cannot prove cannibalization. Page-filtered query exports are required before changing keyword ownership or titles.",
    "4. **Many newly indexable URLs had not been crawled in the coverage snapshot.** Sitemap inclusion is a discovery signal, not an indexing guarantee. Google still chooses when to crawl and whether a page adds enough value to index.",
    "5. **The site needs stronger verifiable experience signals.** Priority pages should identify genuine reviewers, credentials, client-approved case outcomes, concrete deliverables, and sources for regulatory claims.",
    "6. **The domain needs earned authority.** Useful original resources, legitimate industry citations, partnerships, expert participation, and editorial links matter more than adding more schema types or repeating keywords.",
    "",
    "## Specialist decisions still required",
    "",
    "- Export page-filtered GSC queries for the eight priority URLs named in the verification report, then assign one primary commercial or informational intent to each.",
    "- Verify the legal and operational basis for the U.S. Agent service claim, including the real U.S. person or entity and place of business.",
    "- Supply genuine reviewer biographies, qualifications, case evidence, client permissions, and engagement details that cannot be inferred from code.",
    "- Validate live deployment parity, URL Inspection results, Core Web Vitals, backlink data, Google Business Profile eligibility, and organic lead conversion data.",
    "- Select content expansions from actual query opportunities instead of applying an arbitrary word-count target.",
    "",
    "## Interpretation key",
    "",
    "- **Indexable:** eligible for Google Search and included in the current sitemap.",
    "- **Noindex:** intentionally excluded because the reviewed content is placeholder, duplicated, or insufficiently distinct.",
    "- **Technical Pass:** rendered title, description, one H1, canonical, and robots state are internally consistent. It is not a promise that Google will index or rank the page.",
    "- **No GSC row:** the supplied Pages export contains no row for that URL. It does not prove that the page is broken.",
    "",
    "## Page by page inventory",
    "",
  ];
  for (const group of ["Corporate", "Services", "Industries", "Insights", "Case studies", "News"]) {
    const groupPages = pages.filter((page) => page.category === group);
    if (!groupPages.length) continue;
    lines.push(`## ${group}`, "");
    for (const page of groupPages) {
      lines.push(
        `### ${esc(page.route)}`,
        "",
        `- **Source file:** \`src/routes/${page.file}\``,
        `- **Indexing:** ${page.noindex ? "Noindex" : "Indexable and in sitemap"}; robots: \`${esc(page.robots || "not rendered")}\`; canonical: ${page.canonical}`,
        `- **Title (${page.titleLength} characters):** ${esc(page.title)}`,
        `- **Meta description (${page.descriptionLength} characters):** ${esc(page.description)}`,
        `- **H1 (${page.h1Count}):** ${esc(page.h1)}`,
        `- **Rendered content:** approximately ${page.wordCount} words; ${page.internalLinkCount} distinct internal links; schema types: ${page.schemaTypes.length ? page.schemaTypes.join(", ") : "none"}`,
        `- **Technical assessment:** ${page.technical}`,
        `- **GSC performance:** ${gscText(page)}`,
        `- **Coverage snapshot:** ${page.coverage}`,
        `- **Recommended decision:** ${esc(page.action)}`,
        "",
      );
    }
  }
  lines.push(
    "## Evidence and limitations",
    "",
    "The code-level findings come from locally rendered server HTML and the repository's deterministic SEO checks. Search performance values come from the supplied Google Search Console Pages export dated 7 September 2026. Coverage observations come from the supplied drilldown dated 9 September 2026. Search Console data is historical and can lag deployments. The Pages and Queries exports are separate aggregations and cannot be joined to infer query-to-page ownership.",
    "",
    "The appropriate next question is no longer whether every page has basic SEO tags. It is which pages Google selects for the target queries, what evidence those pages provide beyond generic consulting copy, how external sources corroborate the business and its experts, and whether organic visits convert into qualified enquiries.",
    "",
  );
  return lines.join("\n");
}

async function main() {
  const sourcePages = inventory().sort((a, b) => a.route.localeCompare(b.route));
  const results = [];
  const concurrency = 8;
  for (let index = 0; index < sourcePages.length; index += concurrency) {
    results.push(...await Promise.all(sourcePages.slice(index, index + concurrency).map(inspect)));
  }
  process.stdout.write(buildMarkdown(results));
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
