/**
 * scripts/send-newsletter.ts
 *
 * The newsletter generation + send pipeline.
 *
 * USAGE:
 *   Preview only (sends to RESEND_FROM address):
 *     npx tsx scripts/send-newsletter.ts
 *
 *   Send to all confirmed subscribers:
 *     npx tsx scripts/send-newsletter.ts --send
 *
 * Requires .env.local with:
 *   GROQ_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_KEY,
 *   RESEND_API_KEY, RESEND_FROM, SITE_URL
 */

import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

// ── Load .env.local manually (no dotenv dependency needed) ────────────────────
const envPath = resolve(process.cwd(), ".env.local");
if (existsSync(envPath)) {
    const lines = readFileSync(envPath, "utf-8").split("\n");
    for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eqIdx = trimmed.indexOf("=");
        if (eqIdx === -1) continue;
        const key = trimmed.slice(0, eqIdx).trim();
        const value = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, "");
        if (!process.env[key]) process.env[key] = value;
    }
    console.log("[env] Loaded .env.local");
} else {
    console.warn("[env] No .env.local found — relying on process environment.");
}

// ── Dynamic imports after env is loaded ──────────────────────────────────────
const { createClient } = await import("@supabase/supabase-js");
const { Resend } = await import("resend");
const { fetchRegulatoryFeedForNewsletter } = await import("../src/server/regulatoryFeed");

// ── Config ────────────────────────────────────────────────────────────────────
const SEND_FOR_REAL = process.argv.includes("--send");
const BATCH_SIZE = 50;
const BATCH_DELAY_MS = 300;

const supabase = createClient(
    process.env.SUPABASE_URL ?? "",
    process.env.SUPABASE_SERVICE_KEY ?? "",
    { auth: { persistSession: false } }
);

const resend = new Resend(process.env.RESEND_API_KEY ?? "");
const FROM = process.env.RESEND_FROM ?? "newsletter@example.com";
const SITE = (process.env.SITE_URL ?? "http://localhost:3001").replace(/\/$/, "");

// ── Agency styling ────────────────────────────────────────────────────────────
const AGENCY_STYLE: Record<string, { color: string; bg: string; emoji: string; label: string }> = {
    CDSCO:  { color: "#fed7aa", bg: "#431407", emoji: "🇮🇳", label: "CDSCO" },
    USFDA:  { color: "#bfdbfe", bg: "#1e3a5f", emoji: "🇺🇸", label: "US FDA" },
    EU_MDR: { color: "#a7f3d0", bg: "#064e3b", emoji: "🇪🇺", label: "EU MDR" },
    MDSAP:  { color: "#ddd6fe", bg: "#2e1065", emoji: "🌐", label: "MDSAP" },
    OTHER:  { color: "#d4d4d8", bg: "#27272a", emoji: "📋", label: "Other" },
};

// ── HTML Email Template ───────────────────────────────────────────────────────
function buildEmailHtml(
    items: { title: string; source_agency: string; summary: string; source_url: string }[],
    unsubscribeUrl: string,
    weekLabel: string
): string {
    const articleRows = items
        .filter((i) => i.source_agency !== "OTHER")
        .map((item) => {
            const style = AGENCY_STYLE[item.source_agency] ?? AGENCY_STYLE.OTHER;
            const hasLink = item.source_url && item.source_url !== "#";
            return `
      <tr>
        <td style="padding:0 0 24px 0;">
          <table width="100%" cellpadding="0" cellspacing="0"
                 style="background:#18181b;border:1px solid #27272a;border-radius:10px;overflow:hidden;">
            <!-- Agency badge -->
            <tr>
              <td style="background:${style.bg};padding:10px 20px;">
                <span style="color:${style.color};font-size:11px;font-weight:700;
                             letter-spacing:0.12em;text-transform:uppercase;">
                  ${style.emoji} ${style.label}
                </span>
              </td>
            </tr>
            <!-- Content -->
            <tr>
              <td style="padding:20px 20px 16px;">
                <p style="margin:0 0 10px;color:#f4f4f5;font-size:16px;
                          font-weight:700;line-height:1.4;">
                  ${item.title}
                </p>
                <p style="margin:0 0 16px;color:#a1a1aa;font-size:14px;
                          line-height:1.7;">
                  ${item.summary}
                </p>
                ${hasLink ? `
                <a href="${item.source_url}"
                   style="display:inline-block;padding:8px 18px;background:#27272a;
                          color:#a1a1aa;font-size:13px;font-weight:500;
                          text-decoration:none;border-radius:6px;
                          border:1px solid #3f3f46;">
                  Read full notice →
                </a>` : ""}
              </td>
            </tr>
          </table>
        </td>
      </tr>`;
        })
        .join("");

    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>NKB Regovanta — Weekly Regulatory Brief</title>
</head>
<body style="margin:0;padding:0;background:#09090b;font-family:system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"
         style="background:#09090b;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">

          <!-- ── Header ── -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a5f 0%,#1a2a4a 100%);
                        border-radius:12px 12px 0 0;padding:32px 40px 28px;">
              <p style="margin:0 0 4px;color:#93c5fd;font-size:11px;font-weight:700;
                         letter-spacing:0.15em;text-transform:uppercase;">
                NKB Regovanta
              </p>
              <h1 style="margin:0 0 6px;color:#f4f4f5;font-size:24px;font-weight:800;
                          line-height:1.2;">
                Weekly Regulatory Brief
              </h1>
              <p style="margin:0;color:#60a5fa;font-size:13px;">
                ${weekLabel} · AI-structured updates from CDSCO, FDA, EU MDR & MDSAP
              </p>
            </td>
          </tr>

          <!-- ── Live indicator bar ── -->
          <tr>
            <td style="background:#111827;padding:10px 40px;
                        border-left:1px solid #1f2937;border-right:1px solid #1f2937;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:8px;height:8px;background:#22c55e;
                              border-radius:50%;margin-right:8px;">&nbsp;</td>
                  <td style="padding-left:8px;color:#6b7280;font-size:12px;">
                    Fresh intelligence — fetched &amp; summarised moments ago
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ── Articles ── -->
          <tr>
            <td style="background:#09090b;padding:32px 40px 0;
                        border-left:1px solid #18181b;border-right:1px solid #18181b;">
              <table width="100%" cellpadding="0" cellspacing="0">
                ${articleRows}
              </table>
            </td>
          </tr>

          <!-- ── Footer ── -->
          <tr>
            <td style="background:#18181b;border-radius:0 0 12px 12px;
                        border:1px solid #27272a;border-top:none;
                        padding:24px 40px;text-align:center;">
              <p style="margin:0 0 10px;color:#3f3f46;font-size:12px;line-height:1.6;">
                You're receiving this because you subscribed to NKB Regovanta's
                regulatory intelligence newsletter.
              </p>
              <a href="${unsubscribeUrl}"
                 style="color:#52525b;font-size:12px;text-decoration:underline;">
                Unsubscribe
              </a>
              <span style="color:#27272a;margin:0 8px;">·</span>
              <a href="${SITE}"
                 style="color:#52525b;font-size:12px;text-decoration:underline;">
                View online dashboard
              </a>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── Text fallback ─────────────────────────────────────────────────────────────
function buildEmailText(
    items: { title: string; source_agency: string; summary: string; source_url: string }[],
    unsubscribeUrl: string,
    weekLabel: string
): string {
    const lines = [
        `NKB REGOVANTA — WEEKLY REGULATORY BRIEF`,
        weekLabel,
        `AI-structured updates from CDSCO, FDA, EU MDR & MDSAP`,
        ``,
    ];

    for (const item of items.filter((i) => i.source_agency !== "OTHER")) {
        const style = AGENCY_STYLE[item.source_agency] ?? AGENCY_STYLE.OTHER;
        lines.push(`[${style.label}] ${item.title}`);
        lines.push(item.summary);
        if (item.source_url && item.source_url !== "#") {
            lines.push(`Read more: ${item.source_url}`);
        }
        lines.push("");
    }

    lines.push("---");
    lines.push(`Unsubscribe: ${unsubscribeUrl}`);
    lines.push(`Dashboard: ${SITE}`);
    return lines.join("\n");
}

// ── Batch send helper ─────────────────────────────────────────────────────────
async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sendBatch(
    emails: string[],
    subject: string,
    htmlTemplate: string,
    textTemplate: string
) {
    let successCount = 0;
    let failCount = 0;

    for (let i = 0; i < emails.length; i += BATCH_SIZE) {
        const batch = emails.slice(i, i + BATCH_SIZE);
        console.log(`  Sending batch ${Math.floor(i / BATCH_SIZE) + 1} (${batch.length} emails)...`);

        const results = await Promise.allSettled(
            batch.map((email) => {
                const unsubUrl = `${SITE}/unsubscribe?email=${encodeURIComponent(email)}`;
                const html = htmlTemplate.replace(/UNSUBSCRIBE_URL_PLACEHOLDER/g, unsubUrl);
                const text = textTemplate.replace(/UNSUBSCRIBE_URL_PLACEHOLDER/g, unsubUrl);

                return resend.emails.send({
                    from: FROM,
                    to: email,
                    subject,
                    html,
                    text,
                });
            })
        );

        for (const r of results) {
            if (r.status === "fulfilled") successCount++;
            else {
                failCount++;
                console.error("  ✗ Send failed:", r.reason);
            }
        }

        if (i + BATCH_SIZE < emails.length) {
            await sleep(BATCH_DELAY_MS);
        }
    }

    return { successCount, failCount };
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main() {
    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("  NKB Regovanta — Newsletter Pipeline");
    console.log(`  Mode: ${SEND_FOR_REAL ? "🔴 SEND TO ALL SUBSCRIBERS" : "🟡 PREVIEW (sending to you only)"}`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    // Validate env
    const required = ["GROQ_API_KEY", "SUPABASE_URL", "SUPABASE_SERVICE_KEY", "RESEND_API_KEY", "RESEND_FROM", "SITE_URL"];
    const missing = required.filter((k) => !process.env[k]);
    if (missing.length > 0) {
        console.error("❌ Missing environment variables:", missing.join(", "));
        console.error("   Create .env.local from .env.example and fill in all values.");
        process.exit(1);
    }

    // Step 1: Fetch & draft content
    console.log("📡 Step 1/3 — Fetching regulatory intelligence...");
    const items = await fetchRegulatoryFeedForNewsletter();
    console.log(`   ✓ Got ${items.length} items (${items.filter(i => i.source_agency !== "OTHER").length} after filtering OTHER)\n`);

    // Step 2: Build email
    const now = new Date();
    const weekLabel = now.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Kolkata",
    });
    const subject = `Regulatory Brief — ${now.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`;

    // Build templates with placeholder (replaced per-subscriber at send time)
    const htmlTemplate = buildEmailHtml(items, "UNSUBSCRIBE_URL_PLACEHOLDER", weekLabel);
    const textTemplate = buildEmailText(items, "UNSUBSCRIBE_URL_PLACEHOLDER", weekLabel);

    // Step 3: Send
    console.log("📨 Step 2/3 — Preparing subscriber list...");

    let recipientEmails: string[];

    if (SEND_FOR_REAL) {
        const { data: subscribers, error } = await supabase
            .from("subscribers")
            .select("email")
            .eq("status", "confirmed");

        if (error) {
            console.error("❌ Supabase query failed:", error.message);
            process.exit(1);
        }

        recipientEmails = (subscribers ?? []).map((s: { email: string }) => s.email);
        console.log(`   ✓ Found ${recipientEmails.length} confirmed subscribers\n`);

        if (recipientEmails.length === 0) {
            console.log("⚠️  No confirmed subscribers found. Nothing to send.");
            process.exit(0);
        }
    } else {
        // Preview mode: send only to the FROM address
        recipientEmails = [FROM];
        console.log(`   ✓ Preview mode — sending to: ${FROM}\n`);
    }

    console.log("🚀 Step 3/3 — Sending emails...");
    const { successCount, failCount } = await sendBatch(recipientEmails, subject, htmlTemplate, textTemplate);

    console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log(`  ✓ Sent:   ${successCount}`);
    if (failCount > 0) console.log(`  ✗ Failed: ${failCount}`);
    console.log(`  Subject: "${subject}"`);

    if (!SEND_FOR_REAL) {
        console.log("\n  📬 Preview sent to your inbox.");
        console.log("  When you're happy, run with --send to send to all subscribers:");
        console.log("  npx tsx scripts/send-newsletter.ts --send");
    }

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
}

main().catch((err) => {
    console.error("❌ Fatal error:", err);
    process.exit(1);
});
