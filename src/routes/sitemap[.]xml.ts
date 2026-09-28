import { createFileRoute } from "@tanstack/react-router";
import { generateSitemapIndex, xmlResponse } from "@/lib/server/sitemap";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => xmlResponse(generateSitemapIndex()),
    },
  },
});
