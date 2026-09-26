/**
 * src/server/db.ts
 *
 * Supabase admin client — server-side only.
 * Uses the SERVICE ROLE key which bypasses Row Level Security.
 * NEVER import this file in any client-side / browser bundle.
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY ?? "";

if (!supabaseUrl || !supabaseServiceKey) {
    console.error("[DB] Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in environment.");
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
    auth: { persistSession: false },
});

export interface Subscriber {
    id: string;
    email: string;
    status: "pending" | "confirmed" | "unsubscribed";
    confirm_token: string;
    created_at: string;
    confirmed_at: string | null;
}
