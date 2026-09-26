# Newsletter Automation — Full Implementation Plan
**Stack:** TanStack Start · Supabase · Resend · Groq AI · GitHub Actions  
**App:** `news_pipeline` (existing), new route `/newsletter`

---

## Overview

```
Visitor fills form (/newsletter)
    ↓ POST /api/subscribe
    ↓ Supabase inserts row (status: pending)
    ↓ Resend sends confirmation email
    
Visitor clicks confirmation link
    ↓ GET /api/confirm?token=xxx
    ↓ Supabase flips row to confirmed

GitHub Actions (weekly cron)
    ↓ runs scripts/send-newsletter.ts
    ↓ Groq drafts content from RSS feeds (reuses regulatoryFeed.ts)
    ↓ Resend batch-sends to all confirmed subscribers
    ↓ Each email includes unsubscribe link

Visitor clicks unsubscribe
    ↓ GET /api/unsubscribe?email=xxx
    ↓ Supabase flips row to unsubscribed
```

---

## Phase 0 — Accounts to create (you do this first)

| Service | URL | What to do |
|---|---|---|
| **Supabase** | supabase.com | Create free project, note `Project URL` + `service_role key` |
| **Resend** | resend.com | Create free account, add your domain, copy API key |

> **Resend free tier:** 100 emails/day, 3,000/month — enough for early stage.

---

## Phase 1 — DNS / Deliverability (Resend dashboard)

1. Go to Resend → **Domains** → Add Domain
2. Add SPF, DKIM, DMARC records to your DNS registrar
3. Wait for green ✅ verified status
4. Send a test email from the dashboard to confirm inbox delivery

**Files changed:** None (pure DNS config)

---

## Phase 2 — Supabase Table

Run this SQL in the **Supabase SQL Editor**:

```sql
create table subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  status text not null default 'pending', -- pending | confirmed | unsubscribed
  confirm_token uuid default gen_random_uuid(),
  created_at timestamp with time zone default now(),
  confirmed_at timestamp with time zone
);

alter table subscribers enable row level security;
-- No public policies = service key only (server-side)
```

**Files changed:** None (Supabase dashboard)

---

## Phase 3 — Environment Variables

Add to `news_pipeline/.env.local` (create if missing):
```
GROQ_API_KEY=gsk_...          # already used
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_KEY=eyJ...   # service_role key (NOT anon key)
RESEND_API_KEY=re_...
RESEND_FROM=newsletter@yourdomain.com
SITE_URL=https://yourdomain.com
```

Add same secrets to **GitHub repo → Settings → Secrets → Actions**:
- `GROQ_API_KEY`
- `SUPABASE_URL`
- `SUPABASE_SERVICE_KEY`
- `RESEND_API_KEY`
- `RESEND_FROM`
- `SITE_URL`

---

## Phase 4 — New Dependencies

```bash
cd news_pipeline
npm install @supabase/supabase-js resend
```

---

## Phase 5 — Server Functions (TanStack Start)

New file: `news_pipeline/src/server/newsletter.ts`

Exports 3 server functions:
- `subscribeFn({ email })` — inserts pending row, sends confirmation email via Resend
- `confirmFn({ token })` — updates status to `confirmed`
- `unsubscribeFn({ email })` — updates status to `unsubscribed`

These run server-side only (`"use server"`) — the Supabase service key and Resend key never reach the browser.

---

## Phase 6 — New Route: `/newsletter`

New file: `news_pipeline/src/routes/newsletter.tsx`

**Page sections:**
1. **Hero** — "Stay ahead of regulatory changes" headline
2. **Signup form** — email input + subscribe button (calls `subscribeFn`)
3. **States** — idle / loading / success ("Check your email!") / error
4. **What to expect** — frequency, content preview (CDSCO, FDA, EU MDR, MDSAP)
5. **Unsubscribe note** — "1-click unsubscribe in every email"

Matches existing dark zinc-950 aesthetic of `RegulatoryDashboard`.

---

## Phase 7 — Confirm & Unsubscribe Routes

**`/confirm`** (`src/routes/confirm.tsx`):
- Reads `?token=` from URL
- Calls `confirmFn`
- Shows success/error page

**`/unsubscribe`** (`src/routes/unsubscribe.tsx`):
- Reads `?email=` from URL  
- Calls `unsubscribeFn`
- Shows "You've been unsubscribed" page

---

## Phase 8 — Newsletter Send Script

New file: `news_pipeline/scripts/send-newsletter.ts`

**Steps it runs:**
1. Calls `fetchRegulatoryFeed()` (reuses existing pipeline — same RSS + Groq)
2. Formats items into a rich HTML email template
3. Fetches all `confirmed` subscribers from Supabase
4. Sends via Resend in batches of 50 (stays safely under rate limits)
5. Each email includes:
   - Agency-colored section headers
   - Article title + AI summary + "Read more" link
   - `Unsubscribe` link: `{SITE_URL}/unsubscribe?email={email}`

**Human approval checkpoint:** Script emails *you* a preview first. It only proceeds to the full subscriber list when called with `--send` flag:
```bash
# Preview (emails only to RESEND_FROM):
npx tsx scripts/send-newsletter.ts

# Actually send to all subscribers:
npx tsx scripts/send-newsletter.ts --send
```

---

## Phase 9 — GitHub Actions Workflow

New file: `.github/workflows/newsletter.yml`

```yaml
name: Weekly Regulatory Newsletter
on:
  schedule:
    - cron: '0 6 * * 1'  # Every Monday at 6am UTC (11:30am IST)
  workflow_dispatch:      # Manual trigger button in GitHub UI
```

Steps: checkout → setup Node → install deps → run `send-newsletter.ts --send`

---

## Files to Create / Modify

| Action | File |
|---|---|
| **Create** | `src/server/newsletter.ts` |
| **Create** | `src/routes/newsletter.tsx` |
| **Create** | `src/routes/confirm.tsx` |
| **Create** | `src/routes/unsubscribe.tsx` |
| **Create** | `scripts/send-newsletter.ts` |
| **Create** | `.github/workflows/newsletter.yml` |
| **Modify** | `src/routes/index.tsx` — add "Newsletter" nav link |
| **Modify** | `package.json` — add `@supabase/supabase-js`, `resend` |
| **Modify** | `.env.example` — document new env vars |

---

## Testing Checklist (before going live)

- [ ] Domain verified in Resend dashboard
- [ ] Supabase table created, test row inserted manually
- [ ] `npm install` runs without errors
- [ ] `/newsletter` page loads, form submits, "Check your email" shows
- [ ] Confirmation email arrives, clicking link flips row to `confirmed`
- [ ] Run `npx tsx scripts/send-newsletter.ts` — preview email arrives in your inbox
- [ ] Unsubscribe link in the email works (flips row to `unsubscribed`)
- [ ] GitHub Actions manual trigger sends correctly
- [ ] Cron schedule enabled

---

## Suggested Changes to Your Original Plan

| Original | Suggested change | Reason |
|---|---|---|
| Anthropic Claude for drafting | **Groq `compound-beta-mini`** | Already used in the pipeline — no new API key |
| Separate backend service | **TanStack Start server functions** | Fits your existing app — no new server needed |
| Generic email template | **Agency-colored HTML sections** (CDSCO 🟠 / FDA 🔵 / EU MDR 🟢 / MDSAP 🟣) | Matches your existing UI branding |
| Batch 100/day Resend limit | **Batches of 50 with 200ms delay** | More conservative, better for early reputation |
| Always auto-send | **`--send` flag gate** | You review the preview email before the real send |
