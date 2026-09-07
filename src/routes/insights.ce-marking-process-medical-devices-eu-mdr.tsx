import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/ce-marking-process-medical-devices-eu-mdr.json";

export const Route = createFileRoute("/insights/ce-marking-process-medical-devices-eu-mdr")({
  head: () => ({
    meta: [
      { title: "EU MDR CE Marking Step-by-Step Guide | NKB Regovanta" },
      { name: "description", content: "Sequence EU MDR qualification, classification, evidence, conformity assessment, declaration, and ongoing obligations in a practical project plan." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "The EU MDR CE-Marking Process: Plan the Decisions and Handoffs" },
      { property: "og:description", content: "Sequence EU MDR qualification, classification, evidence, conformity assessment, declaration, and ongoing obligations in a practical project plan." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/ce-marking-process-medical-devices-eu-mdr" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/eu_mdr_market_1786306179767.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "The EU MDR CE-Marking Process: Plan the Decisions and Handoffs" },
      { name: "twitter:description", content: "Sequence EU MDR qualification, classification, evidence, conformity assessment, declaration, and ongoing obligations in a practical project plan." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/eu_mdr_market_1786306179767.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/ce-marking-process-medical-devices-eu-mdr" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
