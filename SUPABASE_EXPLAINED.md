# Supabase & SSR Architecture Guide - NKB Regovanta

Welcome to the backend architecture guide for **NKB Regovanta**. This document is designed to give you a clear, practical understanding of how your Supabase database and server-side rendering (SSR) work together to power your SEO control panel and blog management system.

---

## 1. What is Supabase & How Does It Work Here?

### Not "Just a Database"
Supabase is an open-source Firebase alternative built entirely on top of **PostgreSQL**, the world's most trusted enterprise relational database.

When you use Supabase in this project, three things happen simultaneously:
1. **PostgreSQL Database**: Holds your tables (`pages`, `seo_meta`, `blog_posts`, `redirects`, `not_found_log`, etc.) with strict data types, foreign keys, and indexes.
2. **PostgREST API**: Supabase automatically generates RESTful APIs directly from your database schema. When you write:
   ```ts
   const { data } = await supabase.from("blog_posts").select("*").eq("status", "published");
   ```
   You are sending a standard HTTPS request to your Supabase cloud endpoint (`https://zoihnehiptkfgxshtazi.supabase.co/rest/v1/blog_posts?status=eq.published`). PostgREST translates this directly into a high-performance SQL query in PostgreSQL.
3. **Row Level Security (RLS)**: Security rules run directly inside the database engine, ensuring that only authenticated admin requests can write or alter sensitive data.

---

## 2. Key Database Concepts Used in This Project

### A. The "Upsert" Operation (`ON CONFLICT DO UPDATE`)
**Why we use it:**
When saving SEO settings for a page like `/services/india`, you don't want to check: *"Does this URL already exist in the database? If yes, run UPDATE; if no, run INSERT."* Doing that requires two network round-trips and risks race conditions.

Instead, we use an **Upsert**:
```ts
await supabase.from("seo_meta").upsert(
  {
    target_url: "/services/india",
    seo_title: "CDSCO Medical Device Registration Services in India",
    meta_description: "...",
  },
  { onConflict: "target_url" }
);
```
**How Postgres handles it:**
Because `target_url` has a `UNIQUE` constraint in `schema.sql`, PostgreSQL checks if a row with that `target_url` already exists. If it exists, PostgreSQL updates it in place. If it doesn't exist, it inserts a new row. This is fast, atomic, and error-free.

---

### B. Relational Joins Without Writing SQL (Foreign Keys)
In a relational database, you avoid duplicating data. For example:
- A blog post shouldn't store the author's full biography, credentials, and photo inside every post row.
- Instead, `blog_posts` stores an `author_id` pointing to the `authors` table.

In Supabase, because we defined:
```sql
author_id UUID REFERENCES public.authors(id) ON DELETE SET NULL
```
PostgREST allows us to query the post **and** its author in a single call using nested syntax:
```ts
const { data } = await supabase
  .from("blog_posts")
  .select(`
    title,
    slug,
    content_html,
    authors (name, credentials, photo_url)
  `)
  .eq("slug", slug);
```
PostgreSQL automatically performs an inner/left join behind the scenes and returns a clean, nested JSON object ready for React to render.

---

### C. Primary Keys & UUIDs
Instead of sequential auto-incrementing integers (`id: 1, 2, 3`), every table in our schema uses **UUIDv4** (Universally Unique Identifiers), like:
`c9bf9e57-1685-4c89-bafb-ff5af830be8a`.

**Why this is better:**
- Sequential IDs (`/blog/1`, `/blog/2`) allow competitors to scrape or guess how many articles or pages you have.
- UUIDs are mathematically unique across the entire world, making them collision-proof and secure against enumeration attacks.

---

## 3. Why SSR HTML Injection is Mandatory for SEO

### The Difference Between Client-Side React and Server-Side Rendering
Most modern websites built with React render inside the visitor's browser. When a browser loads the page, it gets an empty `<div id="root"></div>`, downloads a JavaScript bundle, runs the JavaScript, fetches data from Supabase, and finally paints the text and images.

**The Problem with Search Crawlers (Googlebot, Bingbot, LinkedIn, Twitter):**
1. Search engine crawlers want raw HTML fast. Many crawlers do not wait for JavaScript to execute, or only execute it days later in a secondary crawling queue.
2. Social media crawlers (LinkedIn, WhatsApp, Twitter/X) **never execute JavaScript at all**. They only read the raw `<meta property="og:image">` and `<meta property="og:title">` tags sent in the initial HTTP response.
3. If your SEO titles, descriptions, and OpenGraph tags are only added by React on the client side, social cards will be blank and Google may index fallback titles instead of your optimized titles.

### How Our SSR Middleware (`src/server.ts`) Solves This
Before the HTML ever leaves the server to travel across the internet to the visitor or Googlebot, `src/server.ts` intercepts the request:
```
[User or Googlebot requests https://www.nkbregovanta.com/insights/cdsco-guide]
                           │
                           ▼
             [src/server.ts Middleware]
                           │
 ┌─────────────────────────┴──────────────────────────┐
 │ 1. Check Redirects: Is this path in `redirects`?    │
 │    --> If YES, return instant 301 HTTP redirect     │
 │                                                    │
 │ 2. Check Database for Custom SEO Meta:              │
 │    --> Fetch `seo_meta` for this path              │
 │    --> Fetch Analytics IDs (GA4, GTM, GSC)          │
 │    --> Fetch Schema.org JSON-LD from `schema_data` │
 │                                                    │
 │ 3. Inject Directly into Server HTML String:         │
 │    --> Replace <title> with Admin's custom title   │
 │    --> Replace <meta name="description">           │
 │    --> Replace <meta property="og:image">          │
 │    --> Inject GA4 & GTM scripts into <head>        │
 │    --> Inject GTM noscript after <body>            │
 │    --> Inject Schema.org <script type="ld+json">   │
 └─────────────────────────┬──────────────────────────┘
                           │
                           ▼
    [Complete, fully-rendered HTML sent to Crawler]
```
Googlebot receives 100% finished HTML on the very first byte (TTFB) with zero JavaScript delays.

---

## 4. Summary of Code Changes & What They Accomplish

### 1. SSR Engine Fixes (`src/server.ts`)
- **Redirects Table Column Alignment**: Changed query to `old_path` and `new_path` to match PostgreSQL `public.redirects` schema. Added automatic `hits` counter increment and `last_hit_at` timestamping.
- **SEO Meta Integration**: Changed query from `pages` to `seo_meta` keyed by `target_url = cleanPath`. Full support for dynamic `<title>`, `<meta name="description">`, `<link rel="canonical">`, `<meta property="og:image">`, and `<meta name="twitter:image">`.
- **Analytics & Search Console Injection**: Dynamically injects Google Search Console verification meta tag, Google Analytics 4 (GA4) tracking snippet, and Google Tag Manager (GTM) container script + noscript directly into HTML.
- **Structured Data Schema (JSON-LD)**: Queries `schema_data` and injects verified JSON-LD blocks and automated FAQPage structured schemas into the document `<head>`.
- **404 Hit Deduplication**: Prevents database crashes on repeated 404 visits by checking if the URL was previously logged, incrementing `hits`, and updating `last_hit_at`.

### 2. Public Insights Knowledge Hub (`src/routes/insights.index.tsx` & `insights.$slug.tsx`)
- Connected public insights page to Supabase `blog_posts` table where `status = 'published'`. Newly published articles from the admin panel appear in real-time alongside existing regulatory guides.
- Fixed author relation columns in `insights.$slug.tsx` (`credentials`, `photo_url`) to match `schema.sql`.

### 3. Blog Editor Edit Flow (`src/routes/admin.blog.new.tsx`)
- Added full support for edit mode via `?edit=<id>`.
- Loads existing post content, assigned tags, and SEO metadata into editor state.
- Saves changes using SQL `UPDATE` rather than duplicate insertion.
- Standardized article URLs to `/insights/${slug}` so preview, sitemap, and public routes are strictly unified.

### 4. Self-Healing 404-to-301 Redirect Loop
- In `admin.seo.broken-links.tsx`, clicking **"Create Redirect"** next to any 404 error now navigates to `/admin/seo/redirects?from=<bad_url>`.
- `admin.seo.redirects.tsx` automatically intercepts this query param, opens the redirect creation modal, and pre-populates the missing URL into `old_path`.
- The admin merely enters the correct live destination and saves. Traffic is permanently fixed in under 5 seconds.

---

## 5. Quick Verification Reference

| Feature | Where it is configured | How it is served |
| :--- | :--- | :--- |
| **SEO Titles & Descriptions** | `/admin/seo/pages` | Intercepted in `src/server.ts` from `seo_meta` table and injected into HTML `<head>` |
| **301 / 302 Redirects** | `/admin/seo/redirects` | Handled at the very top of `src/server.ts` before rendering starts |
| **Google Analytics (GA4)** | `/admin/settings/analytics` | Injected into `<head>` in `src/server.ts` from `settings` table |
| **Google Search Console** | `/admin/settings/search-console` | Injected as `<meta name="google-site-verification">` in `src/server.ts` |
| **Blog Articles** | `/admin/blog/new` | Saved to `blog_posts` table; rendered dynamically at `/insights/:slug` |
| **404 Errors** | Automatic capture | Logged to `not_found_log`; viewable at `/admin/seo/broken-links` (tab: 404 Log) |
