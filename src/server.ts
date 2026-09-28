import "./lib/error-capture";

import { createClient } from "@supabase/supabase-js";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (module) => (module.default ?? module) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

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

async function applyRedirectOrLog404(request: Request, response: Response): Promise<Response> {
  if (request.method !== "GET" || response.status !== 404) return response;

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
    return new Response(null, {
      status: rule.status_code === 302 ? 302 : 301,
      headers: {
        Location: new URL(rule.new_path, requestUrl.origin).toString(),
        "Cache-Control": "no-store",
      },
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
  return response;
}

async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isUnhandledServerError(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`Unhandled SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isUnhandledServerError(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown };
    return payload.unhandled === true;
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const redirected = await applyRedirectOrLog404(request, response);
      return await normalizeCatastrophicSsrResponse(redirected);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
