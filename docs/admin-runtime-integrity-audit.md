# Admin Dashboard Runtime Integrity Audit

Date: 27 September 2026

## Purpose

This audit checks whether Admin Dashboard actions actually change the public website in the way their success messages claim. A successful database write is not treated as proof that a public feature works.

## Corrected in this change

| Area                      | Previous behaviour                                                                                                                     | Correction                                                                                                                                                                                                                   |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sitemap                   | `/sitemap.xml` was a build-time file. The “Regenerate” button only wrote a timestamp. Child sitemap URLs did not exist.                | Added live sitemap index, page sitemap, and post sitemap server routes. The Admin button now fetches and validates all three endpoints before reporting success.                                                             |
| Blog sitemap URLs         | The unused runtime generator emitted `/blog/{slug}` although public posts use `/insights/{slug}`.                                      | All live post sitemap URLs now use `/insights/{slug}`.                                                                                                                                                                       |
| Sitemap freshness         | New posts appeared only after a deployment.                                                                                            | Published posts and due scheduled posts are queried from Supabase on every sitemap request with `no-store`.                                                                                                                  |
| Static page sitemap       | Admin inclusion flags and current code routes were disconnected.                                                                       | The pages sitemap uses a build-verified route manifest plus live Admin status/inclusion settings. Legacy-to-current route aliases are supported.                                                                             |
| Admin route inventory     | 120 Admin page and SEO records still used the old short URLs after code routes were renamed.                                           | Added an idempotent synchronizer and migrated all 120 page paths, slugs, SEO targets, self-canonicals, and matching internal-link records.                                                                                   |
| Robots editor             | Admin stored `robots.txt` in the database while production served a static file.                                                       | Added a live `/robots.txt` server route backed by the Admin setting, with a safe fallback. Save now fails if either the setting or version-history write fails.                                                              |
| GA4 and GTM settings      | Admin settings were stored but ignored; different IDs were hard-coded in the public root.                                              | Public HTML now uses validated Admin IDs. Existing production IDs were migrated into settings so tracking is preserved.                                                                                                      |
| Search Console            | Verification code was stored but never rendered publicly.                                                                              | The verification meta tag is now server-rendered in public HTML.                                                                                                                                                             |
| Redirect Manager          | Rules were stored in Supabase but never handled by the website.                                                                        | Global request middleware now checks database redirects after a 404 and returns the configured 301/302. Redirect hits are recorded.                                                                                          |
| 404 Log                   | The Admin screen displayed a database table, but public 404 requests did not populate it.                                              | Unmatched requests are now recorded or incremented after redirect resolution.                                                                                                                                                |
| Broken-link scan          | The button waited 1.5 seconds and always claimed zero critical errors without scanning anything.                                       | Added a server-side checker for catalogued links, batching 50 at a time, recording redirects/errors/timeouts, and reporting actual counts. External links are marked for manual review to avoid unsafe server-side requests. |
| SEO audit                 | Missing-H1 results fell back to 34 hard-coded issues and old example URLs. The recheck button showed success even after query failure. | Removed fabricated fallback issues/dates, added database error handling, and only shows success after a completed audit.                                                                                                     |
| SEO health/activity       | The 87% score, page totals, activity entries, and “View all” action were hard-coded.                                                    | Health metrics now derive from the current audit, and fabricated activity was replaced with the current audit time and finding count.                                                                                        |
| Scheduled posts           | Posts could be saved as “scheduled” but never automatically became publicly readable or listed.                                        | Due scheduled posts are treated as public by the listing, article route, SEO head, and sitemap.                                                                                                                              |
| Blog save                 | Tag, SEO metadata, and internal-link writes ignored errors while the final toast still said success.                                   | Secondary writes are checked; a success toast is not shown when one fails.                                                                                                                                                   |
| Blog deletion redirect    | Deletion created `/blog/{slug}` redirects for posts that actually live at `/insights/{slug}` and ignored insert errors.                | Uses `/insights/{slug}` and aborts the trash action if the requested redirect cannot be created.                                                                                                                             |
| Category editing          | It claimed to create redirects for nonexistent `/blog/category/...` public pages.                                                      | Removed the phantom redirect claim and checks reassignment errors before deleting a category.                                                                                                                                |
| Schema editor             | Structured data was stored but not emitted by the public application.                                                                  | Enabled custom JSON-LD is now validated and injected on the matching public page.                                                                                                                                            |
| SEO robots/canonical data | Canonicals were applied client-side, but robots settings were ignored.                                                                 | Public SEO hydration now applies canonical and robots settings.                                                                                                                                                              |
| Page slug editor          | It appeared to rename a code-backed public route but changed only the database slug, producing a redirect to a nonexistent route.      | Code-backed slugs are read-only in Admin and explain that route-file and redirect changes require a GitHub deployment.                                                                                                       |
| Page draft status         | The UI claimed “Hidden from visitors,” although deployed static routes remained accessible.                                            | Wording now accurately says the page is excluded from the managed sitemap while the deployed route remains accessible.                                                                                                       |
| Planned internal links    | Toast claimed a planned link would automatically become Live, but no detector existed.                                                 | Toast now states that the link must be implemented and then marked Live.                                                                                                                                                     |
| Image metadata            | Toast implied rendered image markup had changed, though only the catalogue row changed.                                                | Toast now distinguishes catalogue metadata from code-backed rendered ALT text.                                                                                                                                               |
| Tag indexing              | Toast implied public tag pages were indexed/noindexed, but no public tag archive exists.                                               | Toast now identifies this as a stored preference for a future public archive.                                                                                                                                                |

## How sitemap updates work now

1. A GitHub deployment builds `src/generated/sitemap-pages.json` from the real route files and canonical tags. Build checks fail if a canonical and route disagree.
2. `/sitemap.xml` is a live index pointing to `/sitemap-pages.xml` and `/sitemap-posts.xml`.
3. `/sitemap-pages.xml` combines the deployed route manifest with current Admin page status and sitemap-inclusion settings.
4. `/sitemap-posts.xml` queries current published posts and scheduled posts whose publication time has arrived.
5. All sitemap responses use `no-store`, so a newly published or unpublished post is reflected on the next request without another GitHub deployment.
6. A static page URL still requires a GitHub deployment because the actual TanStack route file must exist. After deployment, the generated route manifest updates automatically.

## Verified

- Production build completed successfully.
- TypeScript check completed successfully.
- SEO checks passed for 265 routes, including 231 indexable static pages.
- Local live endpoints returned:
  - `/sitemap.xml`: HTTP 200, XML sitemap index.
  - `/sitemap-pages.xml`: HTTP 200, 231 current page URLs.
  - `/sitemap-posts.xml`: HTTP 200, 47 current published post URLs.
  - `/robots.txt`: HTTP 200, live database content.
- Server-rendered home HTML contains the configured Search Console, GTM, and GA4 identifiers.
- Admin route synchronization is idempotent: a second dry run reports zero pending migrations.

## Remaining architectural limitations

These are not represented as completed public actions by the updated toasts, but they should be planned separately:

1. **Admin authorization is client-side/custom.** The application does not currently use a server-verified Supabase Auth session for every Admin mutation. RLS and endpoint authorization should be reviewed before giving untrusted users Admin access.
2. **Static-page SEO overrides hydrate on the client.** Database title, description, canonical, robots, and custom schema changes are applied after hydration. For strongest crawler/social-preview behaviour, move per-page Admin metadata into the server-rendered route head.
3. **General Settings are only partly consumed.** Tracking, Search Console, and robots are live. Organisation/contact/logo/default-share fields remain duplicated in hard-coded header, footer, and base structured data.
4. **Image catalogue metadata cannot rewrite TSX markup.** Existing static page image ALT text remains code-backed. Blog images managed through the editor are separate and work through blog content.
5. **Keyword records are editorial tracking data.** There is no Search Console/rank-tracker integration, so position and traffic are not automatically refreshed.
6. **Categories and tags have no public archive routes.** Their records can organise posts, but indexing settings cannot affect a public archive until those routes exist.
7. **Link scan scope is catalogued links.** It checks records in `internal_links`; it is not yet a full HTML crawler of all 231 rendered pages.
8. **Preview script mismatch.** The Vercel/Nitro build succeeds, but the existing `npm run preview` command expects `dist/server/server.js` instead of the Vercel output. Development mode and Vercel deployment are unaffected.

## Operational commands

- Refresh static route manifest: `npm run seo:sitemap`
- Check all SEO invariants: `npm run seo:check`
- Dry-run Admin route synchronization: `npm run seo:sync-admin-routes`
- Apply Admin route synchronization: `npm run seo:sync-admin-routes -- --apply`
- Full production validation: `npm run build`
