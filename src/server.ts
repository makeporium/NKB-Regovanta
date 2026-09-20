
const REDIRECTS: Record<string, string> = {
  "/services/regulatory-affairs": "/services/global-medical-device-ivd-regulatory-affairs-consulting",
  "/services/drug-device-combination-products": "/services/drug-device-combination-product-consulting",
  "/services/regulatory-due-diligence": "/services/medical-device-ivd-regulatory-due-diligence",
  "/services/wpc-wireless-medical-devices": "/services/wpc-approval-wireless-medical-devices-india",
  "/services/pc-pndt-certificate": "/services/pc-pndt-registration-consultant-certificate-india",
  "/services/iec-ad-code": "/services/iec-ad-code-registration-india",
  "/services/drug-licenses-for-importers": "/services/drug-licenses-importers-india-form-10-form-41",
  "/services/manufacturing": "/services/pharmaceutical-cleanroom-manufacturing-equipment",
  "/services/iso-13485": "/services/iso-13485-implementation-certification-consulting",
  "/services/technical-documentation": "/services/medical-device-technical-documentation-consulting",
  "/services/market-access": "/services/global-market-access-consulting-medical-devices",
  "/services/audit-compliance": "/services/medical-device-audit-compliance-support"
};
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

import { supabase } from "./lib/supabase";

async function handleDynamicSitemap(): Promise<Response> {
  try {
    const origin = "https://www.nkbregovanta.com";
    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, updated_at, publish_date_ist")
      .eq("status", "published");

    const dynamicUrls = (posts || []).map((p) => `${origin}/insights/${p.slug}`);

    // Read static sitemap or parse URLs from disk
    const baseUrls: string[] = [];
    try {
      const fs = await import("node:fs");
      const path = await import("node:path");
      const sitemapPath = path.resolve(process.cwd(), "public/sitemap.xml");
      if (fs.existsSync(sitemapPath)) {
        const content = fs.readFileSync(sitemapPath, "utf8");
        const locRegex = /<loc>(.*?)<\/loc>/g;
        let match;
        while ((match = locRegex.exec(content)) !== null) {
          if (match[1]) baseUrls.push(match[1]);
        }
      }
    } catch {
      // Fallback if fs is restricted
    }

    const allUrls = Array.from(new Set([...baseUrls, ...dynamicUrls])).sort();
    const escape = (text: string) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
    const xml =
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      allUrls.map((url) => `  <url><loc>${escape(url)}</loc></url>`).join("\n") +
      "\n</urlset>\n";

    return new Response(xml, {
      status: 200,
      headers: {
        "content-type": "application/xml; charset=utf-8",
        "cache-control": "public, max-age=60, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Dynamic sitemap generation error:", error);
    return new Response("<error>Failed to generate sitemap</error>", {
      status: 500,
      headers: { "content-type": "application/xml; charset=utf-8" },
    });
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    const cleanPath = url.pathname.replace(/\/$/, "") || "/";
    const redirectTarget = REDIRECTS[cleanPath];
    if (redirectTarget) {
      return Response.redirect(new URL(redirectTarget + url.search, request.url), 301);
    }

    if (cleanPath === "/sitemap.xml" || cleanPath === "/api/sitemap") {
      return await handleDynamicSitemap();
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
