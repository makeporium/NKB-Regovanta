import { createFileRoute } from "@tanstack/react-router";
import { generateLivePagesSitemap, sitemapErrorResponse, xmlResponse } from "@/lib/server/sitemap";

export const Route = createFileRoute("/sitemap-pages.xml")({
  server: {
    handlers: {
      GET: async () => {
        try {
          return xmlResponse(await generateLivePagesSitemap());
        } catch (error) {
          return sitemapErrorResponse(error);
        }
      },
    },
  },
});
