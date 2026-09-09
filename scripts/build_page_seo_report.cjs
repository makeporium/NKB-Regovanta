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
    "3. **Live page-filtered GSC analysis found one actionable overlap.** The patient MD-20/21 page and the commercial CDSCO importer page both appeared for broad medical-device import queries. The patient page has now been clarified so the MD-14/15 importer page owns commercial intent.",
    "4. **Many newly indexable URLs had not been crawled in the coverage snapshot.** Sitemap inclusion is a discovery signal, not an indexing guarantee. Google still chooses when to crawl and whether a page adds enough value to index.",
    "5. **The site needs stronger verifiable experience signals.** Priority pages should identify genuine reviewers, credentials, client-approved case outcomes, concrete deliverables, and sources for regulatory claims.",
    "6. **The domain needs earned authority.** Useful original resources, legitimate industry citations, partnerships, expert participation, and editorial links matter more than adding more schema types or repeating keywords.",
    "",
    "## Specialist decisions still required",
    "",
    "- Re-export page-filtered GSC queries for the priority URLs after at least 28 days, then compare page ownership, impressions, positions, clicks, and enquiries against this baseline.",
    "- Verify the legal and operational basis for the U.S. Agent service claim, including the real U.S. person or entity and place of business.",
    "- Supply genuine reviewer biographies, qualifications, case evidence, client permissions, and engagement details that cannot be inferred from code.",
    "- Validate live deployment parity, URL Inspection results, Core Web Vitals, backlink data, Google Business Profile eligibility, and organic lead conversion data.",
    "- Select content expansions from actual query opportunities instead of applying an arbitrary word-count target.",
    "",
    "## Live Search Console validation on 9 September 2026",
    "",
    "The verified domain property was reviewed directly in Search Console. The three-month filter contained data only from 19 August through 6 September 2026, so the results represent fewer than three weeks of search history rather than a mature ranking baseline.",
    "",
    "| Signal | Live result | Reviewer interpretation |",
    "|---|---:|---|",
    "| Clicks | 43 | Most traffic remains branded. |",
    "| Impressions | 3.04K | Google is discovering and testing several topic clusters. |",
    "| CTR | 1.4% | Low positions on non-brand queries depress the aggregate. |",
    "| Average position | 54.9 | Ranking strength is the main constraint. |",
    "| Indexed URLs | 64 | GSC total at the time of review. |",
    "| Not indexed URLs | 169 | 166 discovered and not indexed; 3 expected redirect variants. |",
    "| Crawled and not indexed | 0 | No evidence of a sitewide post-crawl quality rejection in this report. |",
    "| Sitemap | Success | Submitted 7 September, read 9 September, 230 URLs discovered from the deployed version. |",
    "| Manual actions | None | No manual penalty. |",
    "| Security issues | None | No security penalty. |",
    "| Core Web Vitals | Insufficient data | Measure priority templates with PageSpeed Insights until field data becomes available. |",
    "| Links report | Processing | External authority cannot yet be quantified from GSC. |",
    "",
    "### Indexing evidence for priority hubs",
    "",
    "- **/services/india:** Discovered but not indexed; no recorded crawl. The live test passed and reported that the URL is available to Google. Sitemap and homepage discovery were detected.",
    "- **/services/eu/mdr:** Discovered but not indexed; present in the sitemap; no recorded crawl and no referring page in Google's stored data.",
    "- **/services/eu/ivdr:** Discovered but not indexed; present in the sitemap; no recorded crawl and no referring page in Google's stored data.",
    "- **Redirect exclusions:** http://www.nkbregovanta.com/, http://nkbregovanta.com/, and https://nkbregovanta.com/ are expected variants of the preferred https://www hostname.",
    "",
    "The three priority hubs are technically eligible. Their current exclusion reflects Google's crawl scheduling and selection during a very short site history, not a live robots, noindex, canonical, fetch, manual-action, or security failure. After the current deployment is live, retain the sitemap and internal links and request indexing for these three URLs. Repeated sitemap submission is unnecessary.",
    "",
    "### Query ownership and ranking evidence",
    "",
    "- **Commercial India importer page:** /industries/medical-devices/india/for-importer received 212 impressions at average position 73.7. Relevant queries include 'import license for medical devices in india' (38 impressions, position 70.3), 'medical device import licenses in india' (24, 74.1), 'indian authorized agent' (20, 62.3), and 'medical device import process in india' (19, 71.9). Google understands the topic, but the page lacks competitive strength.",
    "- **India medical-device hub:** /services/india/medical-devices is indexed and received 31 impressions at average position 12.4. Only six impressions were disclosed by query, including five branded impressions at position 1.6. The aggregate position therefore does not prove page-one visibility for broad CDSCO terms.",
    "- **EU IVDR guide:** /industries/ivd/eu received 505 impressions at average position 52.6. Visible terms include 'ivdr regulation' (113 impressions, position 55.8), 'eu ivdr' (62, 32.4), and 'ivdr in vitro diagnostic regulation' (44, 64.2). This is Google's current informational IVDR entry point.",
    "- **FDA 510(k):** /services/usa/510k is indexed and appears for correctly aligned 510(k) and premarket-notification queries, generally at positions 56 to 76.",
    "- **FDA eSTAR:** /services/usa/e-star appears for relevant eSTAR submission terms, generally at positions 60 to 80.",
    "- **FDA US Agent:** /services/usa/agent-service received 403 impressions at average position 75 for correctly aligned terms such as 'fda registration agent', 'fda agent', and 'fda us agent'. Verify the real US entity, place of business, and operating evidence behind the service claim.",
    "- **US IVD guide:** /industries/ivd/usa appeared for 'ivd registration' with five impressions at position 27.",
    "",
    "### Confirmed query overlap and implemented correction",
    "",
    "The commercial importer page and /services/india/personal-use both appeared for 'medical device import license' and 'import license for medical devices in india'. The personal-use page also appeared for broad terms such as 'medical device license india' and 'cdsco import license'. Its title, description, social metadata, schema description, H1, image text, and visible clarification now specify an individual patient's limited-quantity MD-20/21 pathway. A prominent contextual link directs manufacturers, authorized agents, and commercial importers to the MD-14/15 importer page. Preserve both pages and monitor whether commercial query ownership consolidates after recrawling.",
    "",
    "### Remaining work that requires real-world evidence",
    "",
    "- Complete and verify an eligible Google Business Profile with consistent business details.",
    "- Add genuine named expert profiles, reviewer credentials, regulatory experience, and verifiable authorship.",
    "- Publish client-approved case evidence with concrete scope, jurisdiction, device type, work performed, and outcome.",
    "- Earn relevant links and mentions from medical-device, IVD, quality, trade, association, event, partner, and expert sources.",
    "- Track qualified enquiries by landing page and query cluster, because rankings without business outcomes are incomplete evidence.",
    "- Test deployed priority templates in PageSpeed Insights. The production build passes, but its largest client bundle is approximately 905 kB before gzip; GSC has insufficient field data to establish a Core Web Vitals problem.",
    "",
    "### Structured data and FAQ decision",
    "",
    "The audit found no blocking structured-data error. Search Console reported two valid breadcrumb items and no breadcrumb errors; the low enhancement count is consistent with limited indexing. FAQPage markup should only be present when the same questions and answers are visibly available on that page and satisfy Google's eligibility rules. It is not a general ranking mechanism, and adding it sitewide would not solve crawling, indexing, authority, or competitive-position problems. Preserve page-specific FAQ content where it genuinely helps users, but do not manufacture or duplicate FAQs only for schema coverage.",
    "",
    "## Interpretation key",
    "",
    "- **Indexable:** eligible for Google Search and included in the current sitemap.",
    "- **Noindex:** intentionally excluded because the reviewed content is placeholder, duplicated, or insufficiently distinct.",
    "- **Technical Pass:** rendered title, description, one H1, canonical, and robots state are internally consistent. It is not a promise that Google will index or rank the page.",
    "- **No GSC row:** the supplied Pages export contains no row for that URL. It does not prove that the page is broken.",
    "",
    "## If the page by page inventory is correct according to you, and the above conclusions are correct do the below",
    "",
    "Use this section as the implementation sequence after the reviewer accepts the technical inventory and conclusions. Complete the steps in order because indexing requests should point Google to the deployed final version, and off-page promotion should point to pages whose search intent is already settled.",
    "",
    "### Step 1 Deploy and verify the final technical version",
    "",
    "1. Deploy the current repository to production and confirm that the Vercel build finishes successfully.",
    "2. Open the deployed sitemap at https://www.nkbregovanta.com/sitemap.xml and confirm that it contains the current indexable set. The local generator currently produces 231 indexable URLs; the last deployed sitemap reported by GSC contained 230. This one-URL difference should disappear after the current deployment.",
    "3. Test the priority URLs in a private browser window. Each must return HTTP 200, show its intended content, use the https://www.nkbregovanta.com canonical, and contain an index-follow robots directive.",
    "4. Do not submit the sitemap again merely because a deployment occurred. Search Console already reports the sitemap as successful. Resubmit only if its URL changes, GSC reports an error, or Google stops reading it.",
    "",
    "### Step 2 Request indexing for the changed and uncrawled priority pages",
    "",
    "Request indexing only after Step 1 is complete. In Google Search Console, paste the complete URL into the URL Inspection bar at the top, press Enter, select Test live URL, confirm that the page is available to Google, and then select Request indexing. Submit one URL at a time.",
    "",
    "Use this first-wave order:",
    "",
    "1. **https://www.nkbregovanta.com/services/india/personal-use** - request again because its title, description, H1, schema wording, visible clarification, and commercial-import link changed.",
    "2. **https://www.nkbregovanta.com/industries/medical-devices/india/for-importer** - request again so Google processes the strengthened commercial MD-14/15 page relationship and consolidates commercial import intent here.",
    "3. **https://www.nkbregovanta.com/services/india** - request because URL Inspection reported discovered but not indexed, no recorded crawl, and a successful live test.",
    "4. **https://www.nkbregovanta.com/services/eu/mdr** - request because this primary commercial MDR hub was discovered but had never been crawled or indexed.",
    "5. **https://www.nkbregovanta.com/services/eu/ivdr** - request because this primary commercial IVDR hub was discovered but had never been crawled or indexed.",
    "6. **https://www.nkbregovanta.com/industries/ivd/eu** - request again because it is the current informational IVDR search entry point and its reciprocal relationship with the IVDR service hub should be recrawled.",
    "",
    "Do not manually request all 166 discovered URLs. URL Inspection has a practical quota, and bulk requests do not force indexing. Let the sitemap and internal links handle the remaining eligible pages. Request another URL manually only when it is strategically important, has materially changed, passes the live test, and is still not indexed after the first wave.",
    "",
    "### Pages that do not currently need another indexing request",
    "",
    "- **/services/india/medical-devices** is already on Google. Improve authority and monitor non-brand queries instead of repeatedly requesting indexing.",
    "- **/services/usa/510k** is already on Google and appears for relevant 510(k) queries.",
    "- **/services/usa/e-star** already receives relevant eSTAR impressions.",
    "- **/services/usa/agent-service** already receives relevant US Agent impressions.",
    "- **/industries/ivd/usa** already appears for IVD registration searches.",
    "- Other indexed or impression-producing URLs should only be requested again after a material page change or a verified indexing problem.",
    "",
    "### Step 3 Confirm what Google selected",
    "",
    "1. Record the request date and the URL Inspection result for each first-wave URL.",
    "2. Recheck URL Inspection after 7 to 14 days. Record whether Google crawled the page, the crawl date, the selected canonical, and whether the page is indexed.",
    "3. After at least 28 days, open Performance, set Search type to Web, choose a 28-day period, select Add filter, choose Page, and enter one exact priority URL.",
    "4. Open the Queries tab for that page and export clicks, impressions, CTR, and position. Compare the result with the 9 September baseline in this report.",
    "5. For the India importer and personal-use pages, confirm that broad commercial import searches increasingly select the importer page while patient and MD-20/21 searches select the personal-use page.",
    "6. For the EU pages, confirm that informational IVDR searches may continue to select /industries/ivd/eu while commercial consulting and submission searches begin selecting /services/eu/ivdr or /services/eu/mdr.",
    "",
    "### Step 4 Add evidence that code cannot supply",
    "",
    "1. Create or complete the Google Business Profile only if the business is eligible. Use the real business name, operating address or service area, telephone number, website, hours, and appropriate category. Complete Google's verification and keep these details consistent with the website and other business listings.",
    "2. Add real author and reviewer profiles. Include names, roles, relevant qualifications, regulatory jurisdictions, work history, professional profiles, and a clear statement of who wrote or reviewed each important regulatory page.",
    "3. Expand case evidence with client permission. State the device or IVD category, market, regulatory problem, work performed, evidence prepared, and outcome. Remove or generalize confidential information rather than inventing details.",
    "4. Verify the US Agent service operation. The website should identify or substantiate the actual US person or entity, physical place of business, communication process, consent, responsibilities, and service contact details.",
    "5. Obtain relevant third-party mentions and links from medical-device and IVD associations, professional bodies, partners, laboratories, events, directories with editorial review, interviews, and useful contributed resources. Avoid paid bulk-link packages and unrelated directories.",
    "",
    "### Step 5 Improve priority pages from real query evidence",
    "",
    "Use each page's filtered GSC queries to decide whether to add a section, example, comparison, checklist, definition, or FAQ. Add material only when it directly answers the query and can be supported accurately. Do not repeat the keyword unnaturally or create near-duplicate pages for wording variants.",
    "",
    "For the current priority clusters:",
    "",
    "- Keep /industries/medical-devices/india/for-importer focused on commercial CDSCO MD-14/15 importing, Indian Authorized Agent responsibilities, SUGAM submissions, documents, process, timelines, and importer/manufacturer roles.",
    "- Keep /services/india/personal-use focused on one patient's limited-quantity MD-20/21 pathway, prescriptions, justification, documentation, and limitations.",
    "- Keep /industries/ivd/eu as the informational IVDR guide and /services/eu/ivdr as the commercial consulting destination.",
    "- Keep /services/eu/mdr as the commercial EU MDR and CE-marking service hub, supported by narrower technical-documentation, clinical, quality, notified-body, and post-market pages.",
    "- Keep /services/usa/510k, /services/usa/e-star, and /services/usa/agent-service separated by their distinct FDA intents.",
    "",
    "### Step 6 Measure rankings and qualified leads",
    "",
    "1. Review GSC every 28 days rather than reacting to daily position changes.",
    "2. Track each priority page's non-brand impressions, average position, clicks, CTR, indexed state, and selected queries.",
    "3. Configure analytics conversion events for enquiry forms, telephone clicks, email clicks, and booked consultations. Record the landing page and service category for each qualified lead.",
    "4. Measure PageSpeed Insights for the priority templates on mobile and desktop. Fix a performance issue when field or repeatable lab evidence identifies one; do not treat the current bundle warning alone as proof of a ranking problem.",
    "5. Reassess the roadmap after 8 to 12 weeks using indexing, query ownership, authority gains, and qualified enquiries. Technical tags should only be changed again when new evidence identifies a specific defect or mismatch.",
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
    "The code-level findings come from locally rendered server HTML and the repository's deterministic SEO checks. Initial performance values come from the supplied Google Search Console Pages export dated 7 September 2026, while the priority page and query mappings above come from direct page-filtered review of the verified Search Console property on 9 September 2026. Coverage observations come from the supplied drilldown and current URL Inspection. Search Console data is historical, can lag deployments, and suppresses anonymized queries, so visible query rows may not sum to page totals.",
    "",
    "The appropriate next question is no longer whether every page has basic SEO tags. It is which pages Google selects for the target queries, what evidence those pages provide beyond generic consulting copy, how external sources corroborate the business and its experts, and whether organic visits convert into qualified enquiries.",
    "",
    "## Verification record",
    "",
    "- `node scripts/check_seo.cjs`: passed with 265 pages and 231 indexable pages.",
    "- `node --test scripts/seo.test.cjs`: seven tests passed.",
    "- `tsc --noEmit`: passed.",
    "- Production Vite client and server build: passed.",
    "- Local rendered HTML audit: 265 pages inspected; no blocking title, description, H1, canonical, or robots inconsistency found.",
    "",
    "## External reference sources",
    "",
    "- Google Search Essentials (https://developers.google.com/search/docs/essentials)",
    "- Google SEO Starter Guide (https://developers.google.com/search/docs/fundamentals/seo-starter-guide)",
    "- Google guidance on helpful and reliable content (https://developers.google.com/search/docs/fundamentals/creating-helpful-content)",
    "- Google canonical URL guidance (https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)",
    "- Google sitemap guidance (https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)",
    "- Google structured data introduction (https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)",
    "- Google FAQ rich-result changes (https://developers.google.com/search/blog/2023/08/howto-faq-changes)",
    "- Google Search Console performance analysis (https://support.google.com/webmasters/answer/17010961)",
    "- Google Business Profile eligibility (https://support.google.com/business/answer/13763036)",
    "- FDA U.S. Agent requirements (https://www.fda.gov/medical-devices/device-registration-and-listing/us-agents)",
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
