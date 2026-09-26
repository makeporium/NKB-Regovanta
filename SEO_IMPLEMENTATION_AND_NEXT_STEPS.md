# SEO implementation and next steps

Date: September 7, 2026. Changes are local; this report does not assert deployment or Google indexing.

## Implemented

- Replaced four broken footer links with existing loan-licence and manufacturing landing pages.
- Fixed all 24 TypeScript diagnostics: header collection access, RSS link parsing, environment-key access, and 19 CTA prop mismatches.
- Reduced 17 India pages to one accessible H1 outside breakpoint-specific hero artwork; desktop/mobile visual titles remain unchanged.
- Removed redundant Googlebot/Bingbot indexing declarations and the unsupported site-search structured-data action.
- Bounded external news requests to a 2.5-second RSS deadline and a shared 3.5-second AI deadline; cached successful feed results for 15 minutes per server instance and coalesced concurrent refreshes. Last successful data is retained during transient upstream failures.
- Made the enquiry popup user-triggered instead of repeatedly interrupting visitors.
- Replaced four raw /src/assets URLs with bundled imports.
- Optimized 34 referenced images with lossless WebP. Originals remain available. Aggregate size: 39,587,298 to 26,831,250 bytes (32.2% smaller). Rendered pixels and image dimensions were verified against every original; this is an asset saving, not a measured Core Web Vitals improvement.
- Added explicit dimensions to directly imported images, homepage hero fetch priority, and deferred loading for below-fold homepage images.
- Consolidated sitemap generation into one implementation. It reads route declarations with the TypeScript parser, handles multiline declarations and layout routes, excludes noindex pages, validates canonicals, rejects duplicate destinations, and omits invented lastmod dates. The Python entry point delegates to it.
- Added prebuild SEO and type checks, targeted sitemap regression tests, and an optional local rendered-page checker.
- Repaired syntax errors in the historical image-update script without executing its mutations.
- Marked historical SEO reports as stale rather than relying on their old counts or promised rankings.

## Original article replacements

All 32 copied article bodies have been replaced with original guides, including practical examples, checklists and official regulatory references. Existing URLs and initial publication dates are preserved; the replacement date is September 7, 2026. There is no claim of independent human expert review.

After the page-by-page noindex review, all 32 original article replacements now allow indexing. Across the website, 158 of the 193 previously excluded pages were restored and 35 retain documented exclusions. See SEO_NOINDEX_REVIEW.md and SEO_NOINDEX_REVIEW.csv for every decision. The scraper-based generator remains disabled.

The build checks replacement coverage, content hashes, route integration, indexing decisions, service links, source references and absence of matching 20-word passages against archived copies. This comparison covers the local archive, not the entire internet. See ARTICLE_REWRITE_REPORT.md and ARTICLE_REWRITES.md.

## Final inventory

265 content pages; 12 additional layout routes. There are 230 indexable pages and 35 noindex pages. All 230 indexable canonical URLs are in the sitemap, including the formerly omitted India importer and manufacturer landing pages.

SEO_PAGE_DECISIONS.csv lists every content route, its indexing state, and its next action.

## Verification commands

- npm run typecheck
- npm run seo:check
- npm run test:seo
- npm run build (runs sitemap generation, SEO checks and typecheck first)
- node scripts/check_rendered_seo.cjs http://127.0.0.1:4173 (with local development server running)

Verification completed: TypeScript and source SEO checks passed; all seven regression tests passed; all 265 local rendered pages passed. The final production build result is recorded in .seo-build-verification.log.

The rendered checker covers all 265 pages: response status, exactly one H1, description count, canonical, noindex state, absence of redundant bot tags, JSON-LD syntax and the obsolete footer destination. The 32 replacement articles are also checked for their full expected paragraphs and H1 titles.

Repository-wide formatting lint debt remains separate from these functional fixes. A successful build does not imply passing Core Web Vitals, indexing, or rankings.

## Next SEO work, in priority order

1. Deploy the reviewed changes through the existing production workflow. Confirm the live sitemap contains 230 URLs and the revised noindex directives are present. Resubmit the sitemap in Search Console. Request indexing only for improved indexable pages, respecting the retained exclusions.
2. Establish a current Search Console baseline: export queries and landing pages for the last 3 months; review Pages exclusions, Google-selected canonicals, manual actions and Core Web Vitals. Separate branded and non-branded performance. Prior audit documents are not evidence of current account status.
3. Map each commercially important search intent to one primary landing page. Start with medical device regulatory consulting, CDSCO import/manufacturing, FDA 510(k), EU MDR/IVDR, ISO 13485, MDSAP and UKRP. Use query evidence and client priorities rather than invented search-volume figures.
4. Resolve the 35 documented remaining exclusions, prioritising outdated UAE guidance, India IVD claims, the PMA/De Novo overlap and the placeholder/bridge pages. The individual indexing review is complete. Keep repetitive stubs excluded; improve genuinely distinct services before indexing; merge genuinely equivalent pages into their closest relevant destination with an intentional redirect. Do not redirect unrelated services to the homepage or indiscriminately enable indexing.
5. Have a named regulatory specialist review the 32 original replacements for product-specific nuance. Add reviewer credentials only after that review actually occurs. Maintain references and revise articles when regulations or guidance change.
6. Strengthen service pages with substantiated experience, clear scope and deliverables, project process, useful questions, relevant case studies and contextual links. Verify all client-logo permissions, testimonials, credentials and numerical outcome claims with the client.
7. Measure real mobile performance after deployment using PageSpeed Insights and Search Console. Inspect LCP, INP and CLS on the homepage, India hub, FDA 510(k) and manufacturing pages. Consider responsive image variants and further compression only against measured needs and visual review.
8. Verify Google Business Profile and consistent business details. Develop legitimate professional citations, partner references and original educational resources; avoid bulk paid links or ranking guarantees.
9. Measure enquiries as well as rankings. Confirm successful enquiry events and actual delivery without sending test messages to real recipients unless authorized. Review non-branded clicks, relevant landing-page impressions and qualified enquiries monthly.

## References

- https://developers.google.com/search/docs/crawling-indexing/block-indexing
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/snippet
