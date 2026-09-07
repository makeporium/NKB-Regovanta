import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/gspr-foundation-medical-device-development.json";

export const Route = createFileRoute("/insights/gspr-foundation-medical-device-development")({
  head: () => ({
    meta: [
      { title: "GSPR in Medical Device R&D | NKB Regovanta" },
      { name: "description", content: "Use GSPRs during device development to define measurable design inputs, evidence dependencies, and review gates before testing begins." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Use GSPRs Early: Convert Regulatory Expectations Into Design Inputs" },
      { property: "og:description", content: "Use GSPRs during device development to define measurable design inputs, evidence dependencies, and review gates before testing begins." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/gspr-foundation-medical-device-development" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Use GSPRs Early: Convert Regulatory Expectations Into Design Inputs" },
      { name: "twitter:description", content: "Use GSPRs during device development to define measurable design inputs, evidence dependencies, and review gates before testing begins." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/gspr-foundation-medical-device-development" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
