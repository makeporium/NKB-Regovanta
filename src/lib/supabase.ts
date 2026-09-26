import { createClient } from "@supabase/supabase-js";

const env = typeof process !== "undefined" && process.env ? process.env : {};
const metaEnv = typeof import.meta !== "undefined" && (import.meta as any).env ? (import.meta as any).env : {};

const supabaseUrl =
  env["VITE_SUPABASE_URL"] ||
  env["SUPABASE_URL"] ||
  metaEnv["VITE_SUPABASE_URL"] ||
  "https://zoihnehiptkfgxshtazi.supabase.co";

const supabaseKey =
  env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
  env["SUPABASE_ANON_KEY"] ||
  metaEnv["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
  "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
