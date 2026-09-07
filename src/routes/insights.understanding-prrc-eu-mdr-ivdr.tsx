import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/understanding-prrc-eu-mdr-ivdr.json";

export const Route = createFileRoute("/insights/understanding-prrc-eu-mdr-ivdr")({
  head: () => ({
    meta: [
      { title: "PRRC Role Under EU MDR & EU IVDR | NKB Regovanta" },
      { name: "description", content: "Define a workable PRRC arrangement with appropriate qualifications, access to evidence, escalation routes, and clear manufacturer responsibilities." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Appointing a PRRC: Make the Responsibility Work Beyond the Contract" },
      { property: "og:description", content: "Define a workable PRRC arrangement with appropriate qualifications, access to evidence, escalation routes, and clear manufacturer responsibilities." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/understanding-prrc-eu-mdr-ivdr" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Appointing a PRRC: Make the Responsibility Work Beyond the Contract" },
      { name: "twitter:description", content: "Define a workable PRRC arrangement with appropriate qualifications, access to evidence, escalation routes, and clear manufacturer responsibilities." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/understanding-prrc-eu-mdr-ivdr" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
