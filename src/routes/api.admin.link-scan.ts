import { createFileRoute } from "@tanstack/react-router";

type LinkInput = { source_url: string; target_url: string; anchor_text?: string };

const siteOrigin = "https://www.nkbregovanta.com";

export const Route = createFileRoute("/api/admin/link-scan")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json().catch(() => null)) as { links?: LinkInput[] } | null;
        if (!body?.links || !Array.isArray(body.links) || body.links.length > 50) {
          return Response.json({ error: "A maximum of 50 links is required." }, { status: 400 });
        }

        const results = await Promise.all(
          body.links.map(async (link) => {
            let target: URL;
            try {
              target = new URL(link.target_url, siteOrigin);
            } catch {
              return { ...link, http_status: 0, label: "Broken", is_external: false };
            }
            const isExternal =
              target.hostname !== "www.nkbregovanta.com" && target.hostname !== "nkbregovanta.com";
            if (isExternal) {
              return { ...link, http_status: null, label: "Check manually", is_external: true };
            }
            try {
              const response = await fetch(target, {
                method: "HEAD",
                redirect: "manual",
                signal: AbortSignal.timeout(10_000),
                headers: { "User-Agent": "NKB-Regovanta-Link-Auditor/1.0" },
              });
              const label =
                response.status >= 300 && response.status < 400
                  ? "Redirected"
                  : response.status >= 400
                    ? "Broken"
                    : "Healthy";
              return { ...link, http_status: response.status, label, is_external: false };
            } catch {
              return { ...link, http_status: 0, label: "Timeout", is_external: false };
            }
          }),
        );
        return Response.json({ results });
      },
    },
  },
});
