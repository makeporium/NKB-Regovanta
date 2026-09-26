# NKB Regovanta - SEO Control Panel & Blog Management User Guide

This guide is designed for the NKB Regovanta marketing and regulatory consulting team. It explains how to access and use every feature in the new Admin Panel independently, without touching code or relying on a developer.

---

## 1. Access & Security

### 1.1 How to Log In
1. Navigate to: `https://www.nkbregovanta.com/admin/login` (or `/admin` which automatically redirects).
2. Enter your credentials:
   - **Email / Username**: `admin@nkbregovanta.com` or `admin`
   - **Password**: `AdminPassword123!`
3. **Remember Me**: Check this box if you are on a trusted device to keep your session active across browser restarts.
4. Click **Sign in to Console**.

> [!IMPORTANT]
> **Account Lockout Protection:** If 5 incorrect passwords are entered within 15 minutes, the account is automatically locked for 15 minutes to defend against unauthorized access.
> **Session Inactivity Timeout:** For security, if there is no mouse movement, keystrokes, or scrolling for 30 minutes, your session will automatically expire and prompt you to log back in.

---

## 2. Admin Dashboard (`/admin/dashboard`)

The dashboard provides a high-level command center with **9 live metric cards**:
1. **Total Pages**: Number of registered pages on the website.
2. **Indexed Pages**: Number of pages with `index, follow` directive. *(Note: This reflects your on-page robots directives; consult Google Search Console for actual Google search index counts).*
3. **Noindexed Pages**: Pages excluded from search indexing (e.g., tags, landing variations).
4. **Missing Meta Titles / Descriptions**: Pages that need immediate SEO attention.
5. **Active 301 Redirects**: URLs currently redirecting traffic.
6. **404 Errors Logged**: Broken URL hits detected and logged.
7. **Published Blog Posts**: Live regulatory articles.
8. **Scheduled Posts**: Articles queued to publish automatically in IST.
9. **Draft Posts**: Works in progress.

Clicking any card immediately opens the corresponding management screen.

---

## 3. SEO Control Panel

### 3.1 All Pages SEO (`/admin/seo/pages`)
Manage the title, meta description, and canonical URL for every page on the website.
- **Search & Filter**: Find pages by URL path or name.
- **Full Responsive Table & Pagination**:
  - Browse pages with configurable rows per page (`15`, `25`, `50`, `100`, or `All`).
  - Smooth horizontal scrolling ensures all 6 columns (`Page URL`, `SEO Title`, `Meta Description`, `Index`, `Status`, and `Action`) are fully visible without truncation on any screen size.
  - Page jumper and Prev/Next buttons make navigating hundreds of pages effortless.
- **Google Search Preview**: A live Google SERP box shows how your title and description will appear on desktop Google searches (clamped at 600px).
- **Live Character Counters**:
  - **Title Tag**:
    - `< 30 characters`: Too short (Amber)
    - `30 - 60 characters`: Optimal (Green)
    - `> 60 characters`: Too long / truncated by Google (Rose)
  - **Meta Description**:
    - `< 70 characters`: Too short (Amber)
    - `70 - 160 characters`: Optimal (Green)
    - `> 160 characters`: Too long / truncated by Google (Rose)
- **On-Page SEO Checklist Sidebar**: Shows real-time checkmarks for H1 presence, primary keyword in title, image ALT tags, and structured schema.
- **Slug Change Safeguard**: If you ever change a page URL, the system prompts you: *"Would you like to automatically create a 301 redirect from the old URL to the new URL?"*

### 3.2 SEO Issue Tracker (`/admin/seo/dashboard`)
A prioritized to-do list categorizing all SEO health items across 10 categories:
- Missing titles / descriptions
- Duplicate titles or descriptions
- Broken internal links
- Missing image ALT tags
- Missing canonical URLs
- Orphan pages (pages with 0 internal links pointing to them)
- Click **"Fix"** next to any issue to jump straight to the affected page.

### 3.3 Keywords Manager (`/admin/seo/keywords`)
Track which keywords are assigned to which pages:
- **Primary Keyword Collision Warning**: If you try to assign the same primary keyword to two different pages, the system alerts you to prevent keyword cannibalization.
- **Verification Badges**: Green badges indicate whether your target keyword appears in the Title, H1, or URL.
- **CSV Import / Export**: Import your existing keyword lists from Excel/CSV with preview and duplicate filtering, or export your current registry.

### 3.4 Image SEO & Asset Manager (`/admin/seo/images`)
Audit and update image tags:
- **Missing ALT Warning**: Flags images without alternative text for screen readers and Google Image search.
- **Decorative Toggle**: If an image is purely decorative, toggle "Mark as Decorative" (`alt=""`) so search engines know to ignore it.
- **File Size Warnings**: Warns if any image exceeds 200 KB so site speed remains lightning fast.
- **Layout Shift Safeguard**: Checks that width and height dimensions are specified to avoid Cumulative Layout Shift (CLS).

### 3.5 301 / 302 Redirect Manager (`/admin/seo/redirects`)
Create and manage URL redirects when restructuring content:
- **Self-Redirect Blocked**: You cannot redirect a URL to itself.
- **Loop & Chain Detection**: The system warns you if redirecting `/a` to `/b` creates a circular loop.
- **Hit Counter**: Tracks how many times each redirect has been triggered by visitors and bots.
- **Export to CSV**: Download your active redirects at any time.

### 3.6 Canonical URLs (`/admin/seo/canonicals`)
- Manage self-referential vs cross-domain or custom canonical links.
- **Contradiction Alert**: If a page has both `noindex` and a custom canonical URL, the system alerts you that this is an SEO contradiction.

### 3.7 Schema Markup (JSON-LD) (`/admin/seo/schema`)
- Built-in visual editor for **FAQPage**, **Organization**, **Service**, and custom JSON-LD.
- **Syntax Validator**: Validates JSON syntax in real time before saving.
- Direct link to Google's Rich Results Test and Schema.org Validator.

### 3.8 Broken Links & 404 Log (`/admin/seo/broken-links`)
- Monitors 404 errors encountered by real visitors.
- **1-Click 301 Fix**: Click "Create Redirect" next to any logged 404 error to instantly forward that traffic to the correct page.

---

## 4. Blog & Regulatory Insights Management

### 4.1 All Articles (`/admin/blog/posts`)
- Filter posts by **All**, **Published**, **Draft**, **Scheduled**, or **Trash**.
- **Duplicate Action**: Clone an existing post into a new draft with `-copy` slug to quickly create new guides with consistent formatting.
- **Unpublish / Trash**: When unpublishing or trashing a post, the system asks if you want to set up an automatic 301 redirect to another article or to `/insights` so no traffic is lost.
- **30-Day Trash Retention**: Deleted posts stay in Trash for 30 days before permanent purging, allowing 1-click restoration.

### 4.2 Article Editor (`/admin/blog/new`)
- **Rich Text Editor**: Write headings (H2, H3), paragraphs, bullet points, numbered lists, blockquotes, and regulatory citations.
- **Clean Paste Filter**: Automatically cleans formatting when pasting from Microsoft Word, Google Docs, or external websites.
- **Featured Image & ALT Text**: Upload or link a high-resolution featured image; requires ALT text before publishing.
- **Author Credentials**: Select from registered regulatory authors to display author bio, photo, and credentials (E-E-A-T compliant).
- **Categories & Tags**:
  - Assign to primary category (e.g., *EU MDR*, *US FDA*, *CDSCO India*).
  - Tags are set to `noindex` by default to prevent thin duplicate tag archives.
- **Schedule in IST**: Pick a future date and time in Indian Standard Time (`Asia/Kolkata`); posts publish automatically on schedule.
- **Pre-Publish Checklist**: Before publishing, a modal confirms:
  - Title character count is optimal
  - Meta description is provided
  - Primary keyword is present in Title and Content
  - Featured image has descriptive ALT text
  - Category is assigned

---

## 5. Site Settings & Maintenance

### 5.1 General Settings (`/admin/settings/general`)
- Site title suffix (default: ` | NKB Regovanta`)
- Default OpenGraph share image
- Organization Schema details (legal name, phone, address, LinkedIn profile)
- Image size limit threshold

### 5.2 Robots.txt (`/admin/settings/robots`)
- Visual text editor for `robots.txt`.
- **Disallow: / Safeguard**: If you ever type `Disallow: /` (which would hide the entire website from Google), a high-priority warning modal prevents accidental deindexing!
- **Version History**: Saves the last 5 revisions with timestamp and author name, allowing 1-click restore.

### 5.3 XML Sitemaps (`/admin/settings/sitemap`)
- Generates `/sitemap.xml` (index), `/sitemap-pages.xml` (pages), and `/sitemap-posts.xml` (blog posts).
- Bulk inclusion table allows you to include or exclude any individual page with a single toggle.

### 5.4 Admin Users (`/admin/settings/users`)
- Create new admin accounts with Name, Username, Email, and initial password.
- **Account Safeguards**:
  - An administrator cannot delete their own logged-in account.
  - The system prevents deleting the last active admin account.
