import { createClient } from "@supabase/supabase-js";
import { createCsrfMiddleware, createMiddleware, createStart } from "@tanstack/react-start";

function serverSupabase() {
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

const dynamicRedirects = createMiddleware().server(async ({ request, next }) => {
  const result = await next();
  if (request.method !== "GET" || result.response.status !== 404) return result;

  const requestUrl = new URL(request.url);
  const path = requestUrl.pathname.replace(/\/$/, "") || "/";
  const supabase = serverSupabase();
  const { data: rule } = await supabase
    .from("redirects")
    .select("id, new_path, status_code, hits")
    .eq("old_path", path)
    .eq("is_active", true)
    .maybeSingle();

  if (rule?.new_path) {
    void supabase
      .from("redirects")
      .update({
        hits: Number(rule.hits || 0) + 1,
        last_hit_at: new Date().toISOString(),
      })
      .eq("id", rule.id);
    const destination = new URL(rule.new_path, requestUrl.origin);
    return new Response(null, {
      status: rule.status_code === 302 ? 302 : 301,
      headers: { Location: destination.toString(), "Cache-Control": "no-store" },
    });
  }

  const { data: existing } = await supabase
    .from("not_found_log")
    .select("id, hits")
    .eq("url_path", path)
    .maybeSingle();
  if (existing) {
    void supabase
      .from("not_found_log")
      .update({
        hits: Number(existing.hits || 0) + 1,
        last_hit_at: new Date().toISOString(),
        referrer: request.headers.get("referer"),
      })
      .eq("id", existing.id);
  } else {
    void supabase.from("not_found_log").insert({
      url_path: path,
      hits: 1,
      referrer: request.headers.get("referer"),
      first_hit_at: new Date().toISOString(),
      last_hit_at: new Date().toISOString(),
    });
  }
  return result;
});

export const startInstance = createStart(() => ({
  requestMiddleware: [
    createCsrfMiddleware({ filter: (ctx) => ctx.handlerType === "serverFn" }),
    dynamicRedirects,
  ],
}));
