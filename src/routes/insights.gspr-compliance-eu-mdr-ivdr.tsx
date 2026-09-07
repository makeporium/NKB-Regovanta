import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/gspr-compliance-eu-mdr-ivdr.json";

export const Route = createFileRoute("/insights/gspr-compliance-eu-mdr-ivdr")({
  head: () => ({
    meta: [
      { title: "GSPR Compliance for EU MDR & IVDR | NKB Regovanta" },
      { name: "description", content: "Build a usable GSPR matrix linking applicable requirements to methods, controlled evidence, product configurations, and unresolved gaps." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "GSPR Compliance: Turn the Checklist Into an Evidence Map" },
      { property: "og:description", content: "Build a usable GSPR matrix linking applicable requirements to methods, controlled evidence, product configurations, and unresolved gaps." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/gspr-compliance-eu-mdr-ivdr" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/eu_mdr_market_1786306179767.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GSPR Compliance: Turn the Checklist Into an Evidence Map" },
      { name: "twitter:description", content: "Build a usable GSPR matrix linking applicable requirements to methods, controlled evidence, product configurations, and unresolved gaps." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/eu_mdr_market_1786306179767.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/gspr-compliance-eu-mdr-ivdr" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
