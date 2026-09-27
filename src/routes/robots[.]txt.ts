import { createClient } from "@supabase/supabase-js";
import { createFileRoute } from "@tanstack/react-router";

const fallback = "User-agent: *\nAllow: /\nSitemap: https://www.nkbregovanta.com/sitemap.xml";

function client() {
  const env = typeof process !== "undefined" ? process.env : {};
  const metaEnv = (import.meta as ImportMeta & { env?: Record<string, string> }).env || {};
  const url =
    env["SUPABASE_URL"] ||
    env["VITE_SUPABASE_URL"] ||
    metaEnv["VITE_SUPABASE_URL"] ||
    "https://zoihnehiptkfgxshtazi.supabase.co";
  const key =
    env["SUPABASE_ANON_KEY"] ||
    env["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
    metaEnv["VITE_SUPABASE_PUBLISHABLE_KEY"] ||
    "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP";
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const { data, error } = await client()
          .from("settings")
          .select("value")
          .eq("key", "robots_txt")
          .maybeSingle();
        const body = !error && data?.value ? data.value : fallback;
        return new Response(body.endsWith("\n") ? body : `${body}\n`, {
          headers: {
            "Content-Type": "text/plain; charset=UTF-8",
            "Cache-Control": "no-store, max-age=0, must-revalidate",
            "X-Content-Type-Options": "nosniff",
          },
        });
      },
    },
  },
});
