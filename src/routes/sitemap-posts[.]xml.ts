import { createFileRoute } from "@tanstack/react-router";
import { generateLivePostsSitemap, sitemapErrorResponse, xmlResponse } from "@/lib/server/sitemap";

export const Route = createFileRoute("/sitemap-posts.xml")({
  server: {
    handlers: {
      GET: async () => {
        try {
          return xmlResponse(await generateLivePostsSitemap());
        } catch (error) {
          return sitemapErrorResponse(error);
        }
      },
    },
  },
});
