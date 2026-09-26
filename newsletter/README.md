# NKB Regovanta — Newsletter System

Automated weekly regulatory intelligence newsletter.

**Stack:** Supabase (subscribers DB) · Resend (email delivery) · Groq AI (content generation) · GitHub Actions (automation)

---

## Quick Start

### 1. Create accounts
- [Supabase](https://supabase.com) — free project → note `Project URL` + `service_role key`
- [Resend](https://resend.com) — free account → verify your domain → copy API key

### 2. Set up Supabase table
Run `supabase-setup.sql` in the Supabase Dashboard → SQL Editor.

### 3. Configure environment
```bash
cp .env.example .env.local
# Fill in all values in .env.local
```

### 4. Install dependencies
```bash
npm install
```

### 5. Test the pipeline (preview only)
```bash
npm run preview
# Sends a preview email to RESEND_FROM only
```

### 6. Send to all subscribers
```bash
npm run send
# Only run after reviewing the preview!
```

---

## Subscription Flow

```
User visits /newsletter → fills form
    ↓
POST /api/subscribe → Supabase inserts pending row
    ↓
Resend sends confirmation email with /confirm?token=xxx link
    ↓
User clicks → status flips to confirmed
    ↓
User receives weekly newsletter every Monday
    ↓ (if they want out)
User clicks Unsubscribe → /unsubscribe?email=xxx → status flips to unsubscribed
```

---

## Files

| File | Purpose |
|---|---|
| `src/server/db.ts` | Supabase admin client (server-only) |
| `src/server/newsletter.ts` | Subscribe / confirm / unsubscribe server functions |
| `src/server/regulatoryFeed.ts` | RSS fetch + Groq AI summarisation |
| `scripts/send-newsletter.ts` | Newsletter generation + batch send script |
| `supabase-setup.sql` | Run once in Supabase SQL Editor |
| `.github/workflows/newsletter.yml` | Weekly GitHub Actions cron |

---

## GitHub Actions Setup

Add these secrets in **repo Settings → Secrets → Actions**:

| Secret | Value |
|---|---|
| `GROQ_API_KEY` | From console.groq.com |
| `SUPABASE_URL` | From Supabase project settings |
| `SUPABASE_SERVICE_KEY` | Service role key (NOT anon key) |
| `RESEND_API_KEY` | From resend.com dashboard |
| `RESEND_FROM` | `newsletter@yourdomain.com` |
| `SITE_URL` | `https://yourdomain.com` |

---

## Email Preview

The newsletter email contains agency-colored sections:
- 🟠 **CDSCO** — India regulatory
- 🔵 **US FDA** — FDA alerts & guidance
- 🟢 **EU MDR** — European MDR/IVDR updates
- 🟣 **MDSAP** — MDSAP audit news

Each article includes an AI-written headline, 2-sentence summary, and "Read full notice" link.
