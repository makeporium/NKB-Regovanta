import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/fda-qmsr-compliance-guide.json";

export const Route = createFileRoute("/insights/fda-qmsr-compliance-guide")({
  head: () => ({
    meta: [
      { title: "FDA QMSR & ISO 13485 Compliance Guide | NKB Regovanta" },
      { name: "description", content: "Assess FDA QMSR readiness through connected product records, supplier controls, complaints, and management decisions rather than a document count." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "FDA QMSR Readiness: Follow a Product Record Through the Quality System" },
      { property: "og:description", content: "Assess FDA QMSR readiness through connected product records, supplier controls, complaints, and management decisions rather than a document count." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/fda-qmsr-compliance-guide" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/insight_fda_qmsr_1786440932587.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FDA QMSR Readiness: Follow a Product Record Through the Quality System" },
      { name: "twitter:description", content: "Assess FDA QMSR readiness through connected product records, supplier controls, complaints, and management decisions rather than a document count." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/insight_fda_qmsr_1786440932587.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/fda-qmsr-compliance-guide" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
