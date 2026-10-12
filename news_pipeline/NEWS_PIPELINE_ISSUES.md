# News Pipeline — Issues and Fixes Needed

Folder: `news_pipeline/` · Branch: `krish_branch` · Reviewed: 12 Oct 2026

These issues are **not fixed yet**. Each one lists the problem, where it is, and the fix it needs.

> Found by reading the code; the app was not built or run. Confirm items 1–3 with `npm run build` and a deploy preview before and after fixing.

## Priority summary

| # | Issue | Severity | File(s) |
|---|---|---|---|
| 1 | Client entry likely crashes in the browser | 🔴 Broken | `src/client.tsx`, `index.html` |
| 2 | Server entry uses an older TanStack Start API | 🔴 Broken | `src/server.tsx`, `src/router.ts` |
| 3 | Vercel config only serves static files | 🔴 Broken | `vercel.json` |
| 4 | AI summaries can attach to the wrong article | 🔴 Wrong data | `src/server/regulatoryFeed.ts` |
| 5 | "FDA CDRH" feed is a Google News search, trusted as official | 🟠 Wrong data | `src/server/regulatoryFeed.ts` |
| 6 | No CDSCO/MDSAP feeds, no de-duplication, 6-item cap | 🟠 Wrong data | `src/server/regulatoryFeed.ts` |
| 7 | No caching — every page view hits RSS + Groq | 🟠 Cost / rate limits | `src/routes/regulatory-updates.tsx` |
| 8 | Groq failures are silent ("no updates") | 🟠 Reliability | `src/server/regulatoryFeed.ts` |
| 9 | `groq/compound-mini` is an agentic system, not a plain model | 🟡 Reliability | `src/server/regulatoryFeed.ts` |
| 10 | Junk build files committed | 🟡 Housekeeping | `.tanstack/`, `app.config.timestamp_*.js` |
| 11 | Three diverging copies of the feed logic | 🟡 Maintenance | see below |
| 12 | Small parsing bugs | 🟡 Minor | `src/server/regulatoryFeed.ts` |

---

## 1. Client entry likely crashes in the browser 🔴

**Problem.** `src/client.tsx` mounts the app SPA-style:

```tsx
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
```

But `src/routes/__root.tsx` renders the whole `<html>` document, so the server-rendered page has no `#root` element. `getElementById('root')` returns `null` and `.innerHTML` throws. The page shows the server HTML but never becomes interactive, so the agency / impact filters in `RegulatoryDashboard` won't work. `index.html` is a leftover from a plain-Vite setup and isn't used by TanStack Start.

**Fix.** Use TanStack Start's own client entry, which hydrates the whole document:

- Delete `src/client.tsx` and `index.html`, so Start uses its default client entry, **or**
- Replace `src/client.tsx` with a hydrating entry:

```tsx
// src/client.tsx
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start/client";

hydrateRoot(
    document,
    <StrictMode>
        <StartClient />
    </StrictMode>
);
```

Then open `/regulatory-updates`, check the console for errors, and click a filter to confirm it reacts.

---

## 2. Server entry uses an older TanStack Start API 🔴

**Problem.** The 26 Sep commit changed `src/server.tsx` to:

```tsx
export default createStartHandler({
    createRouter,
    getRouterManifest: () => import("./routeTree.gen"),
})(defaultStreamHandler);
```

This is the older object-style API. `@tanstack/react-start@1.168.x` expects the router to come from `getRouter()` in `src/router.ts`. Also, `getRouterManifest` should never point at `routeTree.gen`. `router.ts` already contains a workaround for the same mismatch:

```ts
// Satisfy TanStack internal module runner
export const getRouter = async () => createRouter();
export default { getRouter, createRouter };
```

**Fix.**

- Delete `src/server.tsx` so Start uses its default server entry. Only keep a custom one if you need middleware, and if so write it the way the 1.168 docs show.
- Clean up `src/router.ts` so it simply exports `getRouter`:

```ts
// src/router.ts
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function getRouter() {
    return createRouter({
        routeTree,
        defaultPreload: "intent",
        scrollRestoration: true,
    });
}

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof getRouter>;
    }
}
```

Then run `npm run build` followed by `npm run preview` and load `/regulatory-updates`.

---

## 3. Vercel config only serves static files 🔴

**Problem.** `vercel.json` says:

```json
"outputDirectory": ".output/public",
"framework": null,
"functions": { "src/server/**": { "maxDuration": 30 } }
```

With `framework: null` and the output set to the public folder, Vercel deploys only the static assets. The SSR pages and the server function that calls Groq would not run. The `functions` glob refers to source files, which is not how TanStack Start's server build is laid out, so it matches nothing.

**Fix.** Deploy using TanStack Start's Vercel target as described in its hosting docs (Start builds the server output for Vercel itself). Then remove `outputDirectory`, `framework: null` and the `functions` block from `vercel.json`. Check a preview deployment loads `/regulatory-updates` with real data.

---

## 4. AI summaries can attach to the wrong article 🔴

**Problem.** In `callAI`, the model's array is matched to the RSS items **by position**:

```ts
const originalItem = items[idx];   // idx = position in the AI's output
results.push({
    title: originalItem.title,
    source_url: originalItem.link,
    ...aiFields,                    // summary, impact, agency… from the AI
});
```

If the model skips, merges or reorders even one item, every later summary, impact level and agency appears under the **wrong title and link**. Items that fail Zod validation are skipped by `continue`, but that's fine because the index still advances. The real risk is the model's own ordering.

**Fix.** Give every item an ID, make the model echo it back, and match on it:

```ts
// buildPrompt
const itemList = items
    .map((it, i) => `[id=${i}] TITLE: ${it.title}\nSNIPPET: ${(it.description ?? "").slice(0, 120)}`)
    .join("\n\n");
// …and add to the field list in the prompt:
// - "id": number — copy the id of the item you are describing, exactly
```

```ts
// regulatorySchema.ts
export const AIItemSchema = z.object({
    id: z.number().int(),
    is_relevant: z.boolean(),
    // …rest unchanged
});
```

```ts
// callAI — match by id, not by array position
const seen = new Set<number>();
for (const raw of parsed) {
    const v = AIItemSchema.safeParse(raw);
    if (!v.success) continue;
    const { id, is_relevant, ...aiFields } = v.data;
    const originalItem = items[id];
    if (!originalItem || seen.has(id) || !is_relevant) continue;
    seen.add(id);
    results.push({
        title: originalItem.title,
        source_url: originalItem.link,
        published_date: originalItem.pubDate ?? "",
        ...aiFields,
    });
}
```

Also omit `id` in `RegulatoryItemSchema` (alongside `is_relevant`) so it doesn't reach the UI.

---

## 5. "FDA CDRH" feed is a Google News search 🟠

**Problem.** The first feed is labelled `"FDA CDRH"` but is a Google News query:

```ts
url: "https://news.google.com/rss/search?q=FDA+medical+device+guidance+OR+recall+OR+clearance…",
label: "FDA CDRH",
```

Because of the label, `keywordMatch` lets everything through unfiltered and `classifyAgency` stamps every item `USFDA`. News articles *about* the FDA get shown as official FDA notices.

**Fix.** Either point it at a real FDA feed (FDA publishes RSS feeds for medical device recalls, safety communications and press releases; pick the right URLs from fda.gov's RSS page), or rename it `"Google News FDA"` so it goes through the keyword filter and normal classification like the other Google feeds.

---

## 6. No CDSCO/MDSAP feeds, no de-duplication, 6-item cap 🟠

**Problem.**

- The dashboard has CDSCO and MDSAP filters, but there is no feed dedicated to either, so they'll usually be empty.
- Only 6 items reach the AI (`slice(0, 2)` per group), and both Google feeds share one group of 2.
- The two Google queries overlap, and nothing removes duplicates, so the same story can appear twice.

**Fix.**

- Add a Google News query focused on CDSCO/India (e.g. `CDSCO OR DCGI "medical device"`) and one for MDSAP. A real CDSCO notices source would be better if a stable one can be found.
- De-duplicate by decoded URL, falling back to normalised title, before picking top items:

```ts
function dedupe(items: RawItem[]): RawItem[] {
    const seen = new Set<string>();
    return items.filter((it) => {
        const key = it.link || it.title.toLowerCase().replace(/\W+/g, " ").trim();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}
```

- Raise the per-group cap, e.g. 3 per feed. One Groq call can handle 10–15 short items.

---

## 7. No caching — every page view hits RSS + Groq 🟠

**Problem.** `regulatory-updates.tsx` has `shouldReload: true` and calls the server function on every visit. The header comment says *"CDN cache headers are applied inside fetchRegulatoryFeed server fn"*, but no headers are set there. The meta description promises *"Updated every 10 minutes via Vercel Edge CDN"*, which isn't true. With any traffic this means 4 RSS fetches plus a Groq call per page view, which runs into Groq rate limits and cost.

**Fix.** Cache the result on the server for 10 minutes. A simple in-memory cache works per server instance:

```ts
// src/server/regulatoryFeed.ts
const TTL_MS = 10 * 60 * 1000;
let cache: { at: number; items: RegulatoryItem[] } | null = null;
let inFlight: Promise<RegulatoryItem[]> | null = null;

export async function getRegulatoryFeedCached(): Promise<RegulatoryItem[]> {
    if (cache && Date.now() - cache.at < TTL_MS) return cache.items;
    if (!inFlight) {
        inFlight = fetchRegulatoryFeed()
            .then((items) => {
                // don't cache an empty result caused by a failure
                if (items.length > 0) cache = { at: Date.now(), items };
                return items;
            })
            .finally(() => { inFlight = null; });
    }
    return inFlight;
}

export const fetchRegulatoryFeedFn = createServerFn({ method: "GET" }).handler(
    getRegulatoryFeedCached,
);
```

On serverless, each instance has its own memory, so also send a CDN cache header from the server function (TanStack Start provides a response-header helper in `@tanstack/react-start/server`). For a shared cache across instances, store the result in Supabase or a KV store. Return the real cache time to the UI instead of the render time (`cachedAt`), and remove `shouldReload: true`.

---

## 8. Groq failures are silent 🟠

**Problem.** `callAI` returns `[]` on any failure: missing key, HTTP error, bad JSON, timeout. The page then shows "no updates", and the route's `errorComponent` never fires. A broken API key looks identical to a quiet news week.

**Fix.** Throw (or return a status) so the UI can tell them apart:

```ts
if (!apiKey) throw new Error("Feed is misconfigured (GROQ_API_KEY missing).");
if (!res.ok) throw new Error(`AI service error (${res.status}). Please try again shortly.`);
```

Combined with #7, it's better to serve the last good cached result plus a "may be out of date" note than to show an empty page.

---

## 9. `groq/compound-mini` is an agentic system 🟡

**Problem.** `groq/compound-mini` is Groq's compound system that can run web search and tools. For "classify and summarise these 6 items into JSON" that's slower, less predictable, and can add content that isn't in the source item. The code already has to strip `<think>` tags and markdown fences to find the JSON.

**Fix.** Use a plain chat model from Groq's current model list and request JSON output (`response_format: { type: "json_object" }`). Wrap the array in an object, e.g. `{ "items": [...] }`, since JSON mode returns an object. Then the regex clean-up can go.

---

## 10. Junk build files committed 🟡

**Problem.** These are generated files and shouldn't be in git:

```
news_pipeline/.tanstack/tmp/98b8376a-14222bde37754e07d00693d1ed91b40d
news_pipeline/app.config.timestamp_1787487495975.js
news_pipeline/app.config.timestamp_1787487543826.js
news_pipeline/app.config.timestamp_1787487582509.js
```

**Fix.**

```bash
cd news_pipeline
git rm -r --cached .tanstack app.config.timestamp_*.js
printf '\n.tanstack/\napp.config.timestamp_*.js\n' >> .gitignore
```

`app.config.ts` was removed when the project moved to Vite, so the timestamp files can be deleted outright.

---

## 11. Three diverging copies of the feed logic 🟡

**Problem.** The same RSS → keyword filter → Groq pipeline exists three times, and they have already drifted apart (different feeds, keywords, prompts, model names, agency defaults):

| Copy | Used by |
|---|---|
| `news_pipeline/src/server/regulatoryFeed.ts` | standalone news_pipeline app |
| `newsletter/src/server/regulatoryFeed.ts` | weekly email |
| `src/functions/regulatoryFeed.ts` (main site) | live `/ai-news` page |

A fix in one doesn't reach the others.

**Fix.** Decide which is the real product: the standalone app or the main site's `/ai-news`. Fix that copy first, then move the shared parts (feeds, parsing, de-dup, prompt, Groq call) into one module that the others import.

---

## 12. Small parsing bugs 🟡

- **Atom links become `"[object Object]"`.** In `parseRssFeed`, `String(i["link"] ?? …)` runs before the object check, so an Atom `<link href="…"/>` is stringified as an object:

  ```ts
  const linkField = i["link"];
  const rawUrl =
      typeof linkField === "string" ? linkField
      : typeof linkField === "object" && linkField !== null
          ? String((linkField as Record<string, unknown>)["@_href"] ?? "")
          : "";
  ```

- **Unparseable dates break the sort.** `new Date("garbage").getTime()` is `NaN`, which makes the comparator inconsistent. Use `Number.isNaN(t) ? 0 : t`.
- **Google News links often stay as Google links.** Newer Google News article IDs don't contain the plain URL, so `decodeGoogleNewsUrl` falls back to the `news.google.com` link. This works for users, but the de-dup in #6 needs to account for it.
- **"Cached at" is just the render time.** See #7.

---

## Suggested order

1. Fix #1–#3 together and confirm with a build plus a preview deploy.
2. Fix #4 (wrong summaries under wrong links).
3. Fix #7 and #8 (caching and visible errors).
4. Fix #5, #6 and #9 (feed quality).
5. Fix #10–#12 (cleanup).
