
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

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    const cleanPath = url.pathname.replace(/\/$/, "") || "/";
    const redirectTarget = REDIRECTS[cleanPath];
    if (redirectTarget) {
      return Response.redirect(new URL(redirectTarget + url.search, request.url), 301);
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
