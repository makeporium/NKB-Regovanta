# Verification of the Claude SEO Research Report

**Site:** NKB Regovanta  
**Review date:** 9 September 2026  
**Reviewed material:** Claude's `seo_deep_research_cdsco_eu_usfda.md`, the current repository, the supplied Google Search Console exports dated 7 and 9 September 2026, locally rendered pages, and current official Google/FDA guidance.

## Executive verdict

Claude correctly identified the business problem: non-brand visibility for the broad CDSCO, EU MDR/IVDR, and US FDA topics is weak, while several narrow India queries are showing early page-one visibility. Its long-term emphasis on stronger proof, useful content, internal linking, and earned authority is directionally sound.

The proposed technical diagnosis is mostly stale or unsupported. The current target service pages already contain `Service` and `BreadcrumbList` JSON-LD. Google accepts JSON-LD in either the `<head>` or `<body>`. The 32 rewritten articles are JSON-backed original pages, not iframe stubs. `FAQPage` markup is not a useful rich-result target for this commercial consultancy, and meta-keywords do not affect Google rankings. The proposed cross-canonical from `/industries/ivd/eu` to `/services/eu/ivdr` should not be implemented.

The next gains are more likely to come from:

1. a clean query-to-page map based on page-filtered GSC data;
2. stronger evidence of real expertise, named reviewers, case outcomes, and business legitimacy;
3. selective expansion of pages that already show relevant impressions;
4. valid contextual internal links between guides, service hubs, and narrow services;
5. earned industry references and links;
6. deployment, live-HTML, crawling, and Core Web Vitals verification.

## What was checked

- `node scripts/check_seo.cjs` passes: **265 pages, 231 indexable**.
- The generated sitemap currently contains **231 URLs**, not 233.
- The five priority pages were rendered locally and inspected in their server HTML.
- The informational EU IVD page and transactional EU IVDR service page were compared using five-word shingles from their `<main>` content.
- All 32 rewritten article JSON files were inspected as a set.
- The supplied GSC `Pages.csv`, `Queries.csv`, and coverage `Table.csv` were treated as data, not instructions.
- Claims about Google behavior were checked against Google Search Central and Search Console documentation.
- The U.S. Agent claim was checked against FDA guidance.

## Claim-by-claim review

| Claude claim or recommendation | Verdict | Evidence and decision |
|---|---|---|
| Broad CDSCO, EU IVDR, and US FDA visibility is weak | **Supported** | The supplied three-month GSC exports show `/industries/ivd/eu` at 456 impressions and position 54.78, `/services/usa/agent-service` at 403 and 75.01, and `/services/india/medical-devices` at 29 and 12.83. This is a real visibility problem. |
| `/industries/ivd/eu` captures all IVDR traffic | **Not proven** | `Pages.csv` and `Queries.csv` are separate aggregate tables. They cannot establish which page appeared for each query. Export page-filtered query data or use the Search Console API with page and query dimensions. |
| 85 impressions in the last 24 hours for `/industries/ivd/eu` | **Unverified** | That data is not present in the files supplied for this review. It may have been visible in Claude's session, but it cannot be audited from the attachment. |
| Google chose `/industries/ivd/eu` as canonical for all IVDR queries | **Unsupported** | The source only proves that this URL received impressions. Canonical selection requires URL Inspection or equivalent canonical data. Both current pages use self-canonicals. |
| EU MDR, EU IVDR, and USA hubs have no page-level schema | **False for current source** | All three render `Service` and `BreadcrumbList`. India medical devices does too. Relevant source lines: [EU MDR](C:/Users/astro/Desktop/AYUSH%20ALL/Client%20Projects/NKB%20REGOVANTA/src/routes/services.eu.mdr.tsx:248), [EU IVDR](C:/Users/astro/Desktop/AYUSH%20ALL/Client%20Projects/NKB%20REGOVANTA/src/routes/services.eu.ivdr.tsx:290), [USA](C:/Users/astro/Desktop/AYUSH%20ALL/Client%20Projects/NKB%20REGOVANTA/src/routes/services.usa.index.tsx:179), and [India](C:/Users/astro/Desktop/AYUSH%20ALL/Client%20Projects/NKB%20REGOVANTA/src/routes/services.india.medical-devices.tsx:112). |
| Body-injected JSON-LD is inferior because it loads later | **False as a Google requirement** | Google explicitly supports JSON-LD in both `<head>` and `<body>` and can read dynamically injected JSON-LD. Use the location that is reliable and maintainable. [Google: structured data formats](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) |
| Add `FAQPage` schema to priority pages | **Do not implement for SEO** | Google says FAQ rich results are regularly available only to well-known authoritative government and health sites. NKB is a commercial consultancy. Keep useful visible FAQs, but do not expect FAQ markup to improve ranking or appearance. [Google FAQ update](https://developers.google.com/search/blog/2023/08/howto-faq-changes?hl=en) |
| Cross-canonical `/industries/ivd/eu` to `/services/eu/ivdr` | **Do not implement** | Canonicals consolidate duplicate or very similar URLs. These pages have distinct informational and commercial purposes. Google documents canonicals for duplicate or very similar pages. [Google canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) |
| The two EU IVDR pages are duplicates/cannibalizing because they cover the same topic | **Not established** | Their rendered main content contains 1,561 and 827 words respectively. Only 3 five-word sequences overlap: 0.13% Jaccard similarity. The industry page already links to the service page. Query overlap may still exist, but it must be measured with query-to-page GSC data. |
| Add the proposed title tags immediately | **Partly useful, but test with page-level query data first** | Current titles and H1s already distinguish the pages reasonably well. The proposed USA title would narrow a broad hub too heavily to 510(k). The India title may benefit from including “registration,” but the supplied exports do not map the relevant queries to that page. Google recommends titles that are unique, concise, and accurately descriptive. [Google title guidance](https://developers.google.com/search/docs/appearance/title-link) |
| 30+ insight articles are roughly 2 KB iframe stubs | **False** | The current repository has 32 article JSON files, no iframe matches in the article routes/content, and approximately 517–620 words per JSON record. They are short articles, but they are not embeds or empty stubs. |
| Expand every article to 2,000+ words | **Do not use a blanket word target** | Google explicitly says it has no preferred word count. Expand only when a page needs more original evidence, explanation, tools, examples, or decisions to satisfy the query. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| Add a meta-keywords tag | **Do not implement** | Google ignores the meta-keywords tag for web ranking. “Internal clarity” belongs in the planned SEO inventory document, not public HTML. [Google on meta-keywords](https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag?hl=en) |
| Competitors have 10,000-word pages, DA 50+, and 50–500 referring domains | **Unverified** | The report contains no citations, crawl evidence, or tool exports supporting those figures. “Domain Authority” is a third-party metric, not a Google metric. Obtain an Ahrefs/Semrush/Majestic export before using numeric backlink claims in planning. |
| Page speed is good because the site is an SPA with code splitting | **Unsupported** | Code splitting does not prove good Core Web Vitals. Validate field data in GSC and test the deployed priority URLs in PageSpeed Insights. |
| All 233 pages are in the sitemap | **Stale** | The current generated sitemap contains 231 indexable URLs and the SEO checker reports 265 routes total. A sitemap is a discovery hint and does not guarantee crawling, indexing, or ranking. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap?hl=en) |
| Backlinks should be built | **Directionally correct** | Earn relevant editorial references through original research, regulatory resources, real partnerships, expert commentary, and events. Avoid paid followed guest-post links, automated links, or keyword-rich link schemes. [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies) |

## Current priority-page state

| Page | Current title/H1 intent | Indexing and canonical | Rendered schema | Review |
|---|---|---|---|---|
| `/industries/ivd/eu` | Informational: IVD regulation in the EU | Indexable; self-canonical | `Service`; no breadcrumb | Content is clearly informational, but the description and `Service` schema still use consulting language. Align schema and description with guide intent and add breadcrumb markup. |
| `/services/eu/ivdr` | Commercial: EU IVDR regulatory consulting | Indexable; self-canonical | `Service` + `BreadcrumbList` | Keep this as the commercial IVDR hub. It already links to narrow IVDR services. Add a reciprocal contextual link to the informational guide. |
| `/services/eu/mdr` | Commercial: EU MDR compliance/CE marking consulting | Indexable; self-canonical | `Service` + `BreadcrumbList` | No schema gap. Improve proof and query coverage based on page-filtered GSC data rather than adding more generic schema. |
| `/services/usa` | Commercial: broad US FDA consulting and 510(k) | Indexable; self-canonical | `Service` + `BreadcrumbList` | No schema gap. Verify the U.S. Agent representation claim and strengthen real expertise/proof. |
| `/services/india/medical-devices` | Commercial: CDSCO licensing and approvals | Indexable; self-canonical | `Service` + `BreadcrumbList` | Strong long-form page. Consider a title test containing “registration” only after collecting its actual query set. |

The local rendered pages contained approximately 1,043–2,170 server-visible words. The report's statement that these pages lack content or schema does not match the current source.

## Edits that should actually be made

### 1. Clarify the two EU IVDR page roles

Keep both URLs indexable and self-canonical.

- `/industries/ivd/eu`: target informational searches such as “IVDR regulation,” “EU IVDR requirements,” classifications, transition rules, and evidence obligations.
- `/services/eu/ivdr`: target commercial searches such as “EU IVDR consultant,” “IVDR consulting services,” “PER consultant,” and “IVDR notified body readiness support.”
- Replace the informational page's `Service` schema with semantic markup consistent with an informational guide and add `BreadcrumbList`.
- Change its meta description so it describes the guide rather than selling consulting.
- Keep its existing link to the service page and add a reciprocal guide link from the service page.

This resolves intent ambiguity without sacrificing the informational URL or consolidating two distinct pages.

### 2. Verify and correct the U.S. Agent claim before promoting it

The current USA hub says that NKB provides U.S. Agent representation, while the visible business address is in India. FDA requires a device establishment's U.S. Agent to reside in the United States or maintain a place of business there; a mailbox or answering service is insufficient. [FDA U.S. Agents](https://www.fda.gov/medical-devices/device-registration-and-listing/us-agents)

Obtain the real U.S. agent entity/person, physical U.S. address, contact arrangement, and consent process. If NKB has a valid U.S. operation or partner, show verifiable details on the relevant page. If it does not, rewrite the offer as coordination or referral through a qualified U.S. Agent. This is a trust and factual-accuracy issue before it is an SEO issue.

### 3. Add demonstrable experience and editorial accountability

The broad markets are sensitive professional topics. Generic claims such as “experts,” “premier,” or “proven track record” are weaker than verifiable evidence. Google recommends clear sourcing, background about the author/site, and evidence that content is written or reviewed by someone who demonstrably knows the topic. [Google people-first content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

For each priority service hub and its supporting guides, add only genuine, client-approved information:

- named author or regulatory reviewer;
- job title and relevant qualifications;
- reviewer profile page and LinkedIn link;
- reviewed/updated date and a short editorial policy;
- anonymized case outcome with device type, jurisdiction, work performed, and result;
- concrete deliverables and engagement process;
- citations beside time-sensitive regulatory claims.

Do not invent years of experience, approval counts, client logos, office locations, or credentials.

### 4. Expand content selectively from GSC evidence

The 32 rewritten articles are a valid base, but most are concise. Do not expand all of them to an arbitrary length. Prioritize articles/pages where the filtered GSC report shows:

- a relevant query at positions 8–30;
- meaningful impressions with low CTR;
- multiple closely related questions that the page does not yet answer;
- a service page that needs a supporting informational resource.

Useful additions include decision trees, submission checklists, comparison tables, realistic examples, downloadable templates, and original expert explanations. Rewriting public sources at greater length without additional value is unlikely to create the required authority.

### 5. Measure query-to-page ownership correctly

The supplied `Pages.csv` and `Queries.csv` cannot be joined. Search Console's own workflow is to select a query and then inspect the Pages tab, or filter by URL and inspect Queries. [Search Console performance tasks](https://support.google.com/webmasters/answer/17010961)

Export the last 3 months and comparison period for these exact URLs:

- `/industries/ivd/eu`
- `/services/eu/ivdr`
- `/services/eu/mdr`
- `/services/usa`
- `/services/usa/agent-service`
- `/services/usa/e-star`
- `/services/usa/510k`
- `/services/india/medical-devices`

For each URL, export its **Queries** table with clicks, impressions, CTR, and position. Also take a few important queries such as `ivdr regulation`, `eu ivdr consultant`, `eu mdr consultant`, `fda registration agent`, `510k consultant`, and `cdsco medical device registration`, then export the **Pages** table. That evidence will show whether multiple pages truly compete for the same query.

### 6. Verify deployment and performance using the deployed pages

The web retrieval snapshot available during this review was six days old and showed an older USA hub, while the current local route renders the newer H1 and JSON-LD. This does not prove the deployment is stale, but it means source and live HTML must be compared after the next deployment.

After deployment:

1. fetch the live HTML of the priority pages and confirm titles, canonical tags, robots directives, and JSON-LD;
2. run Google's Rich Results Test for supported types such as breadcrumbs;
3. inspect the URLs in GSC and record Google-selected canonical, last crawl, and rendered page;
4. review GSC Core Web Vitals and PageSpeed Insights for mobile LCP, INP, and CLS;
5. resubmit the sitemap once, then monitor crawling rather than repeatedly resubmitting it.

## Changes from Claude's report that should not be made

- Do not cross-canonical the informational EU IVD page to the IVDR service page.
- Do not add `FAQPage` markup across commercial service pages for ranking.
- Do not add meta-keywords tags.
- Do not move valid body JSON-LD into the head solely for SEO.
- Do not create 2,000-word versions of every article just to meet a word count.
- Do not build US city pages from the location-modified eSTAR queries unless NKB has genuine local operations and substantially distinct local value; templated city pages risk becoming doorway pages.
- Do not treat schema quantity, sitemap submission, or indexing count as a substitute for query relevance and authority.

## Important work the Claude report omitted

### Conditional Google Business Profile

A Google Business Profile is useful only if NKB makes in-person contact with customers at a genuine staffed location or visits customers in its service area. Google excludes online-only businesses and virtual offices. If the Noida office meets the rules, create or complete one accurate profile with the real business name, category, hours, phone, website, photos, services, and review process. [Google Business Profile eligibility](https://support.google.com/business/answer/13763036?hl=en)

### Conversion and business evidence

Track qualified organic enquiries by landing page in GA4 and connect them to CRM outcomes. Rankings alone do not show whether the traffic produces relevant regulatory consulting leads. Google distinguishes Search Console as the source for search performance and Analytics as the source for on-site behavior. [Google on Search Console and Analytics](https://developers.google.com/search/docs/monitor-debug/google-analytics-search-console)

### Earned authority rather than bulk link acquisition

Create resources worth citing: original regulatory surveys, anonymized approval-pathway analyses, regulatory change summaries reviewed by named experts, webinar materials, calculators/checklists, and collaborations with legitimate laboratories, manufacturers, associations, or conferences. Seek editorially chosen links and mentions rather than buying placements.

## Recommended order of work

1. **Immediately:** verify the U.S. Agent representation and correct it if necessary.
2. **Next code/content pass:** align `/industries/ivd/eu` with informational intent, add breadcrumb markup, and add reciprocal contextual linking.
3. **Data collection:** obtain the eight page-filtered GSC query exports and important query-filtered page exports.
4. **Content plan:** assign one primary intent to each priority URL and select only the pages with proven impressions or a clear strategic gap for expansion.
5. **Trust work:** add verified people, credentials, editorial review, real case evidence, and business details.
6. **Off-site work:** complete an eligible Business Profile and pursue legitimate industry citations, partnerships, and coverage.
7. **Measurement:** compare 28-day and 3-month impressions, clicks, CTR, position, conversions, and indexed status after recrawling.

## Final assessment of Claude's report

The report is useful as an initial brainstorming document, but it should not be used as an implementation specification. Its strongest point is the recognition that broad commercial topics need more authority than narrow low-competition certificate queries. Its weakest points are the unsupported cannibalization conclusion, stale schema audit, blanket FAQ/word-count recommendations, meta-keywords recommendation, and uncited competitor metrics.

The site has reached a solid technical baseline. The remaining work is precise page ownership, verified expertise, content with original practical value, legitimate authority signals, and measurement from page-query data.
