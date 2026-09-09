# Google Search Console Live Audit — 9 September 2026

## Scope and reporting window

This review was performed directly in the verified `nkbregovanta.com` Search Console property on 9 September 2026. Although the Performance filter was set to **3 months**, the property only displayed data from **19 August through 6 September 2026**. The findings therefore describe a new, short-lived search history and should not be treated as a mature ranking baseline.

## Property-level findings

| Signal | Live GSC result | Assessment |
|---|---:|---|
| Search clicks | 43 | Most clicks are branded; non-brand traffic remains minimal. |
| Search impressions | 3.04K | Google is discovering and testing several topic clusters. |
| CTR | 1.4% | Depressed by broad non-brand impressions at low positions. |
| Average position | 54.9 | The primary constraint is ranking strength, not a sitewide rendering failure. |
| Indexed URLs | 64 | Current GSC Page Indexing total. |
| Not-indexed URLs | 169 | 166 discovered/not indexed plus 3 expected redirect URLs. |
| Crawled, currently not indexed | 0 | No evidence of a sitewide post-crawl quality rejection in this report. |
| Sitemap | Success; last read 9 Sep; 230 discovered pages | Healthy and current. Repeated resubmission is unnecessary. |
| Manual actions | None | No manual penalty. |
| Security issues | None | No security penalty. |
| Breadcrumb enhancement | 2 valid; 0 invalid | No structured-data error reported. Low count primarily reflects limited indexing. |
| Core Web Vitals | Insufficient field data on mobile and desktop | No GSC field verdict is currently possible. Use lab testing meanwhile. |
| Links report | Still processing | Google has not yet produced link data for this new property. |

The three redirect exclusions are the normal hostname/protocol variants:

- `http://www.nkbregovanta.com/`
- `http://nkbregovanta.com/`
- `https://nkbregovanta.com/`

These should redirect to the preferred HTTPS `www` hostname and are not an indexing defect.

## CDSCO and India findings

### `/services/india`

- Performance: 0 impressions and 0 clicks in the available window.
- Google Index: **Discovered — currently not indexed**.
- Sitemap detected: `https://www.nkbregovanta.com/sitemap.xml`.
- Referring page in stored Google data: homepage.
- Last crawl: none.
- Live test on 9 September: **URL is available to Google** and breadcrumbs contain four valid items.

Conclusion: the page is technically accessible but Google has not crawled or selected it. This is an indexing delay/selection issue, not a live noindex, robots, canonical, or fetch failure.

### `/services/india/medical-devices`

- Current URL Inspection verdict: **URL is on Google**.
- Performance: 1 click, 31 impressions, 3.2% CTR, average position 12.4.
- Visible query data accounts for only six impressions:
  - `nkb regovanta`: 5 impressions, position 1.6.
  - `india medical device expedited market access`: 1 impression, position 86.
- The other impressions are anonymized by GSC.

Conclusion: the aggregate position of 12.4 must not be interpreted as evidence that the page ranks around position 12 for broad CDSCO terms. The only visible high-ranking query is branded.

### `/industries/medical-devices/india/for-importer`

- Performance: 0 clicks, 212 impressions, average position 73.7.
- The page is consistently selected for the intended commercial import topic, including:
  - `import license for medical devices in india`: 38 impressions, position 70.3.
  - `medical device import licenses in india`: 24 impressions, position 74.1.
  - `medical device import process in india`: 19 impressions, position 71.9.
  - `indian authorized agent (iaa)`: 20 impressions, position 62.3.

Conclusion: keyword ownership is broadly correct, but the page lacks enough authority and competitive strength to rank. Preserve this page as the commercial-import destination.

### `/services/india/personal-use`

Query-to-page analysis exposed genuine overlap with commercial import intent:

| Query | Importer page | Personal-use page |
|---|---:|---:|
| `medical device license india` | — | 18 impressions at position 52.4 |
| `cdsco import license` | — | 9 impressions at position 85.1 |
| `medical device import license` | 15 impressions at position 78.7 | 8 impressions at position 85.4 |
| `import license for medical devices in india` | 38 impressions at position 70.3 | 8 impressions at position 54.8 |

Action implemented in code: the page title, description, social metadata, schema name, hero wording, and image alternative text now emphasize **an individual patient's limited-quantity MD-20/21 pathway**. A prominent contextual link sends manufacturers and commercial importers to the MD-14/15 importer page. This preserves the useful personal-use page while clarifying commercial keyword ownership.

### `/services/india/class-a-import`

- Performance: 0 clicks, 43 impressions, average position 14.1.
- Only one visible query is disclosed; most impressions are anonymized.

Conclusion: keep indexed, but do not claim it ranks at position 14 for a known Class A query until more non-anonymized data becomes available.

## EU MDR and IVDR findings

### `/services/eu/mdr`

- Performance: no impressions.
- Google Index: **Discovered — currently not indexed**.
- Sitemap detected, but no referring page appears in Google's stored crawl data.
- Last crawl: none.

### `/services/eu/ivdr`

- Performance: no impressions.
- Google Index: **Discovered — currently not indexed**.
- Sitemap detected, but no referring page appears in Google's stored crawl data.
- Last crawl: none.

### `/industries/ivd/eu`

- Performance: 0 clicks, 505 impressions, average position 52.6.
- Google currently associates the IVDR topic with this informational guide:
  - `ivdr regulation`: 113 impressions, position 55.8.
  - `eu ivdr`: 62 impressions, position 32.4.
  - `ivdr in vitro diagnostic regulation`: 44 impressions, position 64.2.
  - `eu ivdr regulations`: 6 impressions, position 30.8.

Conclusion: the informational page has correct topical ownership and is Google's current IVDR entry point. The commercial IVDR service page cannot compete until Google crawls and indexes it. Recent internal links to the service page should be retained; GSC's stored referring-page data predates their processing.

For `eu mdr submission`, Google showed `/services/eu/technical-documentation` for two impressions at position 78. The intended `/services/eu/mdr` hub is not currently eligible to own the query because it is not indexed.

## US FDA findings

### `/services/usa/510k`

- Current URL Inspection verdict: **URL is on Google**.
- Visible queries are correctly aligned with 510(k) premarket-notification intent, but positions are generally 56–76.

### `/services/usa/e-star`

- Google selects this page for `estar submission` and multiple eSTAR-assistance terms.
- Visible positions are generally in the 60s through 80s.

### `/services/usa/agent-service`

- Performance: 0 clicks, 403 impressions, average position 75.
- Query ownership is correct: `fda registration agent`, `fda agent`, `fda us agent`, `us agent services`, and related terms all map to this page.

Conclusion: the FDA pages generally have correct intent ownership. Their weak positions point to authority, trust evidence, competitive differentiation, and site maturity rather than page-selection errors.

## Priority decisions

1. Keep the sitemap as submitted. It is successful and was read on 9 September.
2. Preserve `/industries/medical-devices/india/for-importer` as the commercial India import page.
3. Deploy the patient-only clarification made to `/services/india/personal-use`.
4. Keep the recent internal links into `/services/eu/mdr` and `/services/eu/ivdr`; then request indexing for these two hubs after the deployment is live.
5. Do not merge or noindex the indexed FDA, IVDR guide, India importer, Class A, or 510(k) pages.
6. Recheck the same queries after at least 28 days. The current history covers fewer than three weeks and is too young for stable ranking conclusions.
7. Build corroborated authority: named expert profiles, verifiable case evidence, professional citations/mentions, relevant industry links, and a complete Google Business Profile. GSC's Links report is not yet available, so external authority remains the largest unmeasured factor.
8. Measure the deployed priority pages with PageSpeed Insights or Lighthouse. The production build succeeds, but its largest client bundle is about 905 kB before gzip; GSC does not yet have enough field data to show whether this causes a Core Web Vitals problem.

## Evidence limitations

Search Console hides anonymized queries. Page-level totals can therefore be much larger than the visible query rows. Average position is an aggregate of the topmost result for each impression and is not a fixed rank. Current URL Inspection was used where present status mattered; Performance data only proves appearance during the available reporting window.
