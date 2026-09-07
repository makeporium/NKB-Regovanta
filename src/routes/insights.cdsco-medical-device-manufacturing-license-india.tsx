import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/cdsco-medical-device-manufacturing-license-india.json";

export const Route = createFileRoute("/insights/cdsco-medical-device-manufacturing-license-india")({
  head: () => ({
    meta: [
      { title: "CDSCO Device Manufacturing License Guide | NKB Regovanta" },
      { name: "description", content: "Plan an Indian medical-device manufacturing application around classification, site scope, product evidence, and consistent licence documentation." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "CDSCO Manufacturing Licences: Prepare the Product and Site Evidence Together" },
      { property: "og:description", content: "Plan an Indian medical-device manufacturing application around classification, site scope, product evidence, and consistent licence documentation." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/cdsco-medical-device-manufacturing-license-india" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/india_cdsco_market_1786307143373.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CDSCO Manufacturing Licences: Prepare the Product and Site Evidence Together" },
      { name: "twitter:description", content: "Plan an Indian medical-device manufacturing application around classification, site scope, product evidence, and consistent licence documentation." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/india_cdsco_market_1786307143373.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/cdsco-medical-device-manufacturing-license-india" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
