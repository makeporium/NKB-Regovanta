# Article rewrite completion

All 32 copied article bodies were replaced in the local website on 7 September 2026. The new guides contain approximately 14,600 words of original explanatory content, with distinct practical examples, preparation checklists, FAQs and references to official regulatory sources.

- Preserved all 32 URLs and existing publication dates; displayed truthful updated dates.
- Updated listing titles/descriptions and page metadata to match the new material.
- Added a shared accessible article layout, contextual citations, organization authorship, BlogPosting and breadcrumb structured data, and relevant service links.
- Following the individual noindex review, all 32 rewritten articles now allow indexing. The whole site has 230 indexable pages and 35 documented exclusions; see SEO_NOINDEX_REVIEW.md.
- Retained archived source files for comparison and disabled the old scraped-content generator.
- Verified no matching 20-word passages against the archived copies. This is a local comparison, not a universal plagiarism certification.
- Added a build gate for replacement hashes, complete coverage, indexing decisions, source keys, route integration and service links.

Validation: source SEO checks, TypeScript, seven regression tests, production build and rendered checks across all 265 content pages passed. Rendered checks verify every replacement paragraph appears in its article.

Read ARTICLE_REWRITES.md for all 32 articles in one document. Individual editable content is in src/content/articles. A regulatory specialist has not independently reviewed the new content; do not add a named reviewer until that review occurs.

Changes are not deployed. Next: specialist review, deployment and live verification, Search Console sitemap submission and baseline measurement, then prioritized service-page and keyword work described in SEO_IMPLEMENTATION_AND_NEXT_STEPS.md.
