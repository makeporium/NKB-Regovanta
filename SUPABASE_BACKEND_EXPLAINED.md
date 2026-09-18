# NKB Regovanta - Supabase Backend Guide & Learning Walkthrough

Welcome to the backend architecture guide for the **NKB Regovanta SEO Control Panel and Blog System**. This document breaks down the database, how Supabase works, why we made specific design choices, and how your website interacts with it.

---

## 1. What is Supabase & Why Are We Using It?

### The Core Problem with File-Based Databases (SQLite) on Modern Hosting
When websites are deployed to platforms like **Vercel** or **Cloudflare**, they run in **serverless environments**. 
* In serverless hosting, the server turns on to handle a request and then turns off.
* The disk space is **ephemeral (temporary)**. If you write to a local file like `data/regovanta.db`, every time Vercel redeploys your site or spins up a new serverless container, that file is **wiped clean**.
* Any new blog post or SEO title saved in the admin panel would disappear!

### The Supabase Solution
**Supabase** provides a managed **PostgreSQL database in the cloud**.
1. **Permanent Storage**: All data lives securely in the cloud. Deploying your website 100 times will never erase your data.
2. **PostgreSQL Power**: PostgreSQL is the world's most advanced open-source relational database. It is ACID-compliant, supports JSON columns (`JSONB`), arrays (`TEXT[]`), and handles concurrent traffic effortlessly.
3. **Instant API**: Supabase automatically provides a REST API around your tables, which we interact with using `@supabase/supabase-js`.
4. **Visual Dashboard**: You can log into [supabase.com/dashboard](https://supabase.com/dashboard) and visually browse your tables, view rows, edit data, and export backups anytime.

---

## 2. Supabase Core Concepts Explained

### A. Environment Variables (`.env`)
To connect your app to Supabase, we added two variables to your `.env` file:
* **`VITE_SUPABASE_URL`**: The unique cloud address of your database project (`https://zoihnehiptkfgxshtazi.supabase.co`).
* **`VITE_SUPABASE_PUBLISHABLE_KEY`**: A secure key that tells Supabase your application has permission to make API calls to your project.
*(Note: A small lesson learned: trailing punctuation like `.` at the end of a key in chat messages makes the API key invalid! We stripped the dot to make the connection 100% active).*

### B. Tables & Relationships
Our system creates tables that represent the core features of the client's brief:
1. **`admin_users`**: Stores admin accounts. Passwords are never stored in plain text; they are hashed using **PBKDF2** with unique cryptographic salts. It also tracks `failed_attempts` and `locked_until` to lock accounts for 15 minutes after 5 bad password attempts.
2. **`pages`**: Stores every page on your site (`/`, `/about`, `/services/india`, etc.) with its name, slug, status, and H1 heading.
3. **`seo_meta`**: Stores SEO details for each URL: `<title>`, meta description, canonical URL, robots meta (`index, follow` or `noindex`), focus keywords, and OpenGraph/Twitter social cards.
4. **`blog_posts`**: Stores articles with titles, slugs (`/blog/how-to-register`), HTML body, featured images, ALT text, authors, and categories.
5. **`blog_categories` & `blog_tags`**: Organizes posts into regulatory topics (CDSCO, FDA, EU MDR).
6. **`redirects`**: Stores 301 and 302 rules (`old_path` -> `new_path`) and automatically tracks how many times each redirect was triggered (`hits`).
7. **`keywords`**: Tracks target search phrases and checks if they appear in the title, H1, and URL.
8. **`images`**: Tracks image files, detecting missing ALT text and flagging files over 200 KB.
9. **`settings`**: Stores site-wide settings (GA4 ID, GTM ID, Search Console meta tag, organization address).

### C. Why We Use UUIDs (`gen_random_uuid()`)
Instead of standard sequential numbers (`id = 1, 2, 3...`), every row uses a **UUID** (Universally Unique Identifier like `c8a6f3b0-4a8f-4318-97c2-84197e79c8d1`).
* **Why?** UUIDs cannot be guessed by malicious visitors. If someone sees `/admin/blog/1`, they can easily guess `/admin/blog/2`. With UUIDs, URLs cannot be scraped or tampered with.

### D. What is Row Level Security (RLS)?
PostgreSQL has a security feature called **Row Level Security (RLS)**.
* Even if someone gets access to your Supabase API URL, RLS restricts what rows they can read or modify.
* In our schema (`supabase/schema.sql`), we configured RLS policies so that:
  - Public visitors can **only SELECT (read)** published blog posts and public SEO meta tags.
  - Draft posts, revision history, and user passwords cannot be read by unauthorized visitors.

---

## 3. How to Set Up Your Database in Supabase (1-Minute Step)

We have generated the complete SQL setup file for you in `supabase/setup_complete.sql`. It includes all tables, security policies, and pre-seeds all 267 existing pages and 32 regulatory articles!

### Step-by-Step Instructions:
1. Log into your Supabase Dashboard:
   👉 **[https://supabase.com/dashboard/project/zoihnehiptkfgxshtazi](https://supabase.com/dashboard/project/zoihnehiptkfgxshtazi)**
2. In the left-hand sidebar, click on **SQL Editor** (icon looks like a terminal `>_`).
3. Click **"+ New Query"**.
4. Open the file [`supabase/setup_complete.sql`](file:///c:/Users/astro/Desktop/AYUSH%20ALL/Client%20Projects/NKB%20REGOVANTA/supabase/setup_complete.sql) in your code editor, copy all of its content (`Ctrl + A`, `Ctrl + C`).
5. Paste it into the Supabase SQL Editor and click the green **"Run"** button in the bottom right.
6. Supabase will execute the script in a few seconds and display:
   `Success. No rows returned.`

Once that is run, your Supabase cloud database is fully initialized with all tables, default admin credentials, site settings, and all 267+ existing page routes!

---

## 4. Default Admin Login Credentials
Your initial administrative user is pre-configured:
* **Email**: `admin@nkbregovanta.com`
* **Username**: `admin`
* **Password**: `AdminPassword123!`

*(You will be able to change this password anytime in the panel under Settings > Admin Users or your user profile).*
