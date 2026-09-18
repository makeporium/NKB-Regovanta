import "./lib/error-capture";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { supabase } from "./lib/supabase";
import { settingsService } from "./lib/services/settingsService";
import { sitemapService } from "./lib/services/sitemapService";

const STATIC_REDIRECTS: Record<string, string> = {
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
  "/services/audit-compliance": "/services/medical-device-audit-compliance-support",
};

// In-memory cache for redirects to prevent database overload
let cachedRedirects: Map<string, { target_url: string; status_code: number }> | null = null;
let lastRedirectsFetch = 0;
const CACHE_TTL_MS = 60 * 1000;

async function getRedirect(path: string): Promise<{ target_url: string; status_code: number } | null> {
  const now = Date.now();
  if (!cachedRedirects || now - lastRedirectsFetch > CACHE_TTL_MS) {
    try {
      const { data } = await supabase
        .from("redirects")
        .select("old_path, new_path, status_code")
        .eq("is_active", true);

      const map = new Map<string, { target_url: string; status_code: number }>();
      if (data) {
        for (const r of data) {
          const clean = (r.old_path || "").replace(/\/$/, "") || "/";
          map.set(clean, { target_url: r.new_path, status_code: r.status_code || 301 });
        }
      }
      cachedRedirects = map;
      lastRedirectsFetch = now;
    } catch {
      // Fallback
    }
  }

  if (cachedRedirects && cachedRedirects.has(path)) {
    return cachedRedirects.get(path)!;
  }

  if (STATIC_REDIRECTS[path]) {
    return { target_url: STATIC_REDIRECTS[path]!, status_code: 301 };
  }

  return null;
}

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

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> {
    const url = new URL(request.url);
    const cleanPath = url.pathname.replace(/\/$/, "") || "/";

    // 1. Dynamic robots.txt
    if (cleanPath === "/robots.txt") {
      try {
        const settings = await settingsService.getAll();
        return new Response(settings.robots_txt || "User-agent: *\nAllow: /\n", {
          status: 200,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=3600",
          },
        });
      } catch {
        return new Response("User-agent: *\nAllow: /\nSitemap: https://www.nkbregovanta.com/sitemap.xml\n", {
          status: 200,
          headers: { "content-type": "text/plain; charset=utf-8" },
        });
      }
    }

    // 2. Dynamic XML Sitemaps
    if (cleanPath === "/sitemap.xml") {
      try {
        const xml = await sitemapService.generateIndexXml();
        return new Response(xml, {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=3600",
          },
        });
      } catch (err: any) {
        console.error("Sitemap index generation error:", err);
      }
    }

    if (cleanPath === "/sitemap-pages.xml") {
      try {
        const xml = await sitemapService.generatePagesXml();
        return new Response(xml, {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=3600",
          },
        });
      } catch (err: any) {
        console.error("Pages sitemap error:", err);
      }
    }

    if (cleanPath === "/sitemap-posts.xml") {
      try {
        const xml = await sitemapService.generatePostsXml();
        return new Response(xml, {
          status: 200,
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600, s-maxage=3600",
          },
        });
      } catch (err: any) {
        console.error("Posts sitemap error:", err);
      }
    }

    // 3. Dynamic 301 / 302 Redirects
    const redirectInfo = await getRedirect(cleanPath);
    if (redirectInfo) {
      // Fire-and-forget hit counter update
      void (async () => {
        try {
          const { data: redir } = await supabase
            .from("redirects")
            .select("id, hits")
            .eq("old_path", cleanPath)
            .maybeSingle();

          if (redir) {
            await supabase
              .from("redirects")
              .update({
                hits: (redir.hits || 0) + 1,
                last_hit_at: new Date().toISOString(),
              })
              .eq("id", redir.id);
          }
        } catch {}
      })();

      const target = redirectInfo.target_url.startsWith("http")
        ? redirectInfo.target_url
        : new URL(redirectInfo.target_url + url.search, request.url).toString();

      return Response.redirect(target, redirectInfo.status_code);
    }

    // 4. TanStack Start Application SSR Handler
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);

      // 5. Admin Panel Security Headers: Strictly prevent search indexing
      if (url.pathname.startsWith("/admin")) {
        normalized.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive, nosnippet");
      }

      // 6. 404 Logging with hit deduplication
      if (normalized.status === 404 && !url.pathname.startsWith("/_") && !url.pathname.includes(".")) {
        void (async () => {
          try {
            const targetPath = url.pathname + (url.search || "");
            const ref = request.headers.get("referer") || null;

            const { data: existing } = await supabase
              .from("not_found_log")
              .select("id, hits")
              .eq("url_path", targetPath)
              .maybeSingle();

            if (existing) {
              await supabase
                .from("not_found_log")
                .update({
                  hits: (existing.hits || 1) + 1,
                  referrer: ref || undefined,
                  last_hit_at: new Date().toISOString(),
                })
                .eq("id", existing.id);
            } else {
              await supabase.from("not_found_log").insert({
                url_path: targetPath,
                hits: 1,
                referrer: ref,
                first_hit_at: new Date().toISOString(),
                last_hit_at: new Date().toISOString(),
              });
            }
          } catch {}
        })();
      }

      // 7. Dynamic SEO Meta, Analytics & Schema Injection for HTML Responses
      const contentType = normalized.headers.get("content-type") ?? "";
      if (normalized.status === 200 && contentType.includes("text/html") && !url.pathname.startsWith("/admin")) {
        try {
          const [metaRes, settings, schemaRes] = await Promise.all([
            supabase
              .from("seo_meta")
              .select("seo_title, meta_description, canonical_url, robots_index, robots_follow, og_title, og_description, og_image, twitter_title, twitter_description, twitter_image")
              .eq("target_url", cleanPath)
              .maybeSingle(),
            settingsService.getAll().catch(() => null),
            supabase
              .from("schema_data")
              .select("schema_type, is_enabled, custom_json, faq_items")
              .eq("target_url", cleanPath)
              .eq("is_enabled", true)
              .maybeSingle(),
          ]);

          let html = await normalized.text();

          // A. Inject Analytics & Verification tags
          if (settings) {
            let headInjections = "";
            let bodyInjections = "";

            if (settings.search_console_tag) {
              headInjections += `\n    <meta name="google-site-verification" content="${escapeHtml(settings.search_console_tag)}" />`;
            }

            if (settings.ga4_measurement_id) {
              const gaId = escapeHtml(settings.ga4_measurement_id);
              headInjections += `\n    <!-- Google Analytics (GA4) -->\n    <script async src="https://www.googletagmanager.com/gtag/js?id=${gaId}"></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n      gtag('config', '${gaId}');\n    </script>`;
            }

            if (settings.gtm_container_id) {
              const gtmId = escapeHtml(settings.gtm_container_id);
              headInjections += `\n    <!-- Google Tag Manager -->\n    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');</script>`;
              bodyInjections += `\n    <!-- Google Tag Manager (noscript) -->\n    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>`;
            }

            if (headInjections) {
              html = html.replace(/<\/head>/i, `${headInjections}\n  </head>`);
            }
            if (bodyInjections) {
              html = html.replace(/<body([^>]*)>/i, `<body$1>${bodyInjections}`);
            }
          }

          // B. Inject Schema.org JSON-LD structured data
          if (schemaRes?.data?.is_enabled) {
            const s = schemaRes.data;
            let schemaScripts = "";

            if (s.custom_json && s.custom_json.trim()) {
              try {
                const parsed = JSON.parse(s.custom_json);
                schemaScripts += `\n    <script type="application/ld+json">\n${JSON.stringify(parsed, null, 2)}\n    </script>`;
              } catch {}
            }

            if (Array.isArray(s.faq_items) && s.faq_items.length > 0) {
              const validFaqs = s.faq_items.filter((f: any) => f.question && f.answer);
              if (validFaqs.length > 0) {
                const faqSchema = {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: validFaqs.map((f: any) => ({
                    "@type": "Question",
                    name: f.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: f.answer,
                    },
                  })),
                };
                schemaScripts += `\n    <script type="application/ld+json">\n${JSON.stringify(faqSchema, null, 2)}\n    </script>`;
              }
            }

            if (schemaScripts) {
              html = html.replace(/<\/head>/i, `${schemaScripts}\n  </head>`);
            }
          }

          // C. Dynamic SEO Meta Replacement
          const meta = metaRes?.data;
          if (meta) {
            if (meta.seo_title) {
              const escTitle = escapeHtml(meta.seo_title);
              html = html.replace(/<title>.*?<\/title>/i, `<title>${escTitle}</title>`);
              const ogTitle = escapeHtml(meta.og_title || meta.seo_title);
              html = html.replace(/(<meta\s+property=["']og:title["']\s+content=["'])[^"']*?(["'])/i, `$1${ogTitle}$2`);
              const twTitle = escapeHtml(meta.twitter_title || meta.seo_title);
              html = html.replace(/(<meta\s+name=["']twitter:title["']\s+content=["'])[^"']*?(["'])/i, `$1${twTitle}$2`);
            }

            if (meta.meta_description) {
              const escDesc = escapeHtml(meta.meta_description);
              html = html.replace(/(<meta\s+name=["']description["']\s+content=["'])[^"']*?(["'])/i, `$1${escDesc}$2`);
              const ogDesc = escapeHtml(meta.og_description || meta.meta_description);
              html = html.replace(/(<meta\s+property=["']og:description["']\s+content=["'])[^"']*?(["'])/i, `$1${ogDesc}$2`);
              const twDesc = escapeHtml(meta.twitter_description || meta.meta_description);
              html = html.replace(/(<meta\s+name=["']twitter:description["']\s+content=["'])[^"']*?(["'])/i, `$1${twDesc}$2`);
            }

            if (meta.og_image) {
              const escOgImg = escapeHtml(meta.og_image);
              html = html.replace(/(<meta\s+property=["']og:image["']\s+content=["'])[^"']*?(["'])/i, `$1${escOgImg}$2`);
            }

            if (meta.twitter_image || meta.og_image) {
              const escTwImg = escapeHtml(meta.twitter_image || meta.og_image);
              html = html.replace(/(<meta\s+name=["']twitter:image["']\s+content=["'])[^"']*?(["'])/i, `$1${escTwImg}$2`);
            }

            if (meta.canonical_url) {
              const escCan = escapeHtml(meta.canonical_url);
              html = html.replace(/(<link\s+rel=["']canonical["']\s+href=["'])[^"']*?(["'])/i, `$1${escCan}$2`);
            }

            if (meta.robots_index === "noindex") {
              const robotsDirective = meta.robots_follow === "nofollow" ? "noindex, nofollow" : "noindex, follow";
              if (/<meta\s+name=["']robots["']/i.test(html)) {
                html = html.replace(/(<meta\s+name=["']robots["']\s+content=["'])[^"']*?(["'])/i, `$1${robotsDirective}$2`);
              } else {
                html = html.replace(/<\/head>/i, `    <meta name="robots" content="${robotsDirective}" />\n  </head>`);
              }
            }
          }

          const newHeaders = new Headers(normalized.headers);
          return new Response(html, {
            status: normalized.status,
            statusText: normalized.statusText,
            headers: newHeaders,
          });
        } catch (e) {
          console.error("SSR HTML meta/tag enhancement error:", e);
        }
      }

      return normalized;
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
