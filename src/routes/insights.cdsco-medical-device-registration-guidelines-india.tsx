import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/cdsco-medical-device-registration-guidelines-india.json";

export const Route = createFileRoute("/insights/cdsco-medical-device-registration-guidelines-india")({
  head: () => ({
    meta: [
      { title: "CDSCO Device Registration Guide India | NKB Regovanta" },
      { name: "description", content: "Prepare an Indian medical-device registration strategy using product classification, applicant roles, manufacturing or import scope, and current rules." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Medical Device Registration in India: Define the Applicant, Product, and Route" },
      { property: "og:description", content: "Prepare an Indian medical-device registration strategy using product classification, applicant roles, manufacturing or import scope, and current rules." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/cdsco-medical-device-registration-guidelines-india" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/india_cdsco_market_1786307143373.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Device Registration in India: Define the Applicant, Product, and Route" },
      { name: "twitter:description", content: "Prepare an Indian medical-device registration strategy using product classification, applicant roles, manufacturing or import scope, and current rules." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/india_cdsco_market_1786307143373.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/cdsco-medical-device-registration-guidelines-india" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
