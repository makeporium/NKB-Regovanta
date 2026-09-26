/**
 * src/server/newsletter.ts
 *
 * Server-side functions for the newsletter subscription flow.
 * "use server" directive ensures these run only on the server (TanStack Start).
 *
 * Functions exported:
 *  - subscribeFn    → validate email, insert pending row, send confirmation email
 *  - confirmFn      → flip status to 'confirmed' via token
 *  - unsubscribeFn  → flip status to 'unsubscribed' via email
 */

"use server";

import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { supabase } from "./db";

// ── Helpers ────────────────────────────────────────────────────────────────────

function getResend(): Resend {
    const key = process.env.RESEND_API_KEY ?? "";
    if (!key) throw new Error("RESEND_API_KEY not set in environment.");
    return new Resend(key);
}

function siteUrl(): string {
    return (process.env.SITE_URL ?? "http://localhost:3001").replace(/\/$/, "");
}

function fromAddress(): string {
    return process.env.RESEND_FROM ?? "newsletter@example.com";
}

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

// ── Confirmation email HTML ────────────────────────────────────────────────────

function confirmationEmailHtml(confirmUrl: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Confirm your subscription</title>
</head>
<body style="margin:0;padding:0;background:#09090b;font-family:system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#09090b;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#18181b;border:1px solid #27272a;border-radius:12px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a5f 0%,#1a2a4a 100%);padding:32px 40px;">
              <p style="margin:0;color:#93c5fd;font-size:11px;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">NKB Regovanta</p>
              <h1 style="margin:8px 0 0;color:#f4f4f5;font-size:22px;font-weight:700;line-height:1.3;">
                Confirm your subscription
              </h1>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 20px;color:#a1a1aa;font-size:15px;line-height:1.7;">
                You're one click away from receiving the weekly <strong style="color:#e4e4e7;">Regulatory Intelligence Brief</strong> —
                AI-structured updates from CDSCO, US FDA, EU MDR, and MDSAP, delivered every Monday.
              </p>
              <table cellpadding="0" cellspacing="0" style="margin:28px 0;">
                <tr>
                  <td style="background:#2563eb;border-radius:8px;">
                    <a href="${confirmUrl}" style="display:inline-block;padding:14px 32px;color:#fff;font-size:15px;font-weight:600;text-decoration:none;border-radius:8px;">
                      ✓ Confirm my subscription
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:0;color:#52525b;font-size:13px;line-height:1.6;">
                If you didn't sign up, you can safely ignore this email — you won't be subscribed.
                This link expires after 7 days.
              </p>
              <hr style="border:none;border-top:1px solid #27272a;margin:28px 0;" />
              <p style="margin:0;color:#3f3f46;font-size:12px;">
                Or copy this link into your browser:<br/>
                <span style="color:#52525b;word-break:break-all;">${confirmUrl}</span>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ── subscribeFn ────────────────────────────────────────────────────────────────

export const subscribeFn = createServerFn({ method: "POST" })
    .validator((data: unknown) => {
        if (typeof data !== "object" || data === null || !("email" in data)) {
            throw new Error("Invalid payload");
        }
        return data as { email: string };
    })
    .handler(async ({ data }) => {
        const email = (data.email ?? "").trim().toLowerCase();

        if (!isValidEmail(email)) {
            return { ok: false, message: "Please enter a valid email address." };
        }

        // Check if already subscribed
        const { data: existing } = await supabase
            .from("subscribers")
            .select("status, confirm_token")
            .eq("email", email)
            .single();

        if (existing) {
            if (existing.status === "confirmed") {
                return { ok: true, message: "You're already subscribed! 🎉" };
            }
            if (existing.status === "pending") {
                // Re-send the confirmation
                const confirmUrl = `${siteUrl()}/confirm?token=${existing.confirm_token}`;
                const resend = getResend();
                await resend.emails.send({
                    from: fromAddress(),
                    to: email,
                    subject: "Confirm your NKB Regovanta newsletter subscription",
                    html: confirmationEmailHtml(confirmUrl),
                });
                return { ok: true, message: "Confirmation email re-sent — check your inbox." };
            }
            if (existing.status === "unsubscribed") {
                // Allow re-subscribe: reset to pending
                const { error } = await supabase
                    .from("subscribers")
                    .update({ status: "pending", confirm_token: crypto.randomUUID(), confirmed_at: null })
                    .eq("email", email);
                if (error) throw new Error(error.message);
            }
        }

        // Fresh insert
        const { data: inserted, error: insertErr } = await supabase
            .from("subscribers")
            .insert({ email, status: "pending" })
            .select("confirm_token")
            .single();

        if (insertErr) {
            console.error("[subscribe] insert error:", insertErr);
            return { ok: false, message: "Something went wrong. Please try again." };
        }

        const confirmUrl = `${siteUrl()}/confirm?token=${inserted.confirm_token}`;
        const resend = getResend();

        const { error: emailErr } = await resend.emails.send({
            from: fromAddress(),
            to: email,
            subject: "Confirm your NKB Regovanta newsletter subscription",
            html: confirmationEmailHtml(confirmUrl),
        });

        if (emailErr) {
            console.error("[subscribe] email send error:", emailErr);
            return { ok: false, message: "Could not send confirmation email. Please try again." };
        }

        return { ok: true, message: "Check your inbox — confirmation email sent! 📬" };
    });

// ── confirmFn ─────────────────────────────────────────────────────────────────

export const confirmFn = createServerFn({ method: "GET" })
    .validator((data: unknown) => {
        if (typeof data !== "object" || data === null || !("token" in data)) {
            throw new Error("Invalid payload");
        }
        return data as { token: string };
    })
    .handler(async ({ data }) => {
        const token = (data.token ?? "").trim();
        if (!token) return { ok: false, message: "Missing confirmation token." };

        const { data: rows, error } = await supabase
            .from("subscribers")
            .update({ status: "confirmed", confirmed_at: new Date().toISOString() })
            .eq("confirm_token", token)
            .eq("status", "pending")
            .select("email");

        if (error) {
            console.error("[confirm] update error:", error);
            return { ok: false, message: "Something went wrong. Please try again." };
        }

        if (!rows || rows.length === 0) {
            return { ok: false, message: "This link is invalid or has already been used." };
        }

        return { ok: true, email: rows[0].email };
    });

// ── unsubscribeFn ─────────────────────────────────────────────────────────────

export const unsubscribeFn = createServerFn({ method: "GET" })
    .validator((data: unknown) => {
        if (typeof data !== "object" || data === null || !("email" in data)) {
            throw new Error("Invalid payload");
        }
        return data as { email: string };
    })
    .handler(async ({ data }) => {
        const email = (data.email ?? "").trim().toLowerCase();
        if (!isValidEmail(email)) return { ok: false, message: "Invalid email address." };

        const { error } = await supabase
            .from("subscribers")
            .update({ status: "unsubscribed" })
            .eq("email", email);

        if (error) {
            console.error("[unsubscribe] error:", error);
            return { ok: false, message: "Something went wrong. Please try again." };
        }

        return { ok: true };
    });
