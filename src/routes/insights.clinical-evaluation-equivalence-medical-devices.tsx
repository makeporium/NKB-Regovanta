import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/clinical-evaluation-equivalence-medical-devices.json";

export const Route = createFileRoute("/insights/clinical-evaluation-equivalence-medical-devices")({
  head: () => ({
    meta: [
      { title: "EU MDR Clinical Equivalence Guide | NKB Regovanta" },
      { name: "description", content: "Evaluate technical, biological, and clinical equivalence, data access, and evidence gaps before relying on another device's clinical data." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Clinical Equivalence Under EU MDR: Establish What the Comparison Can Support" },
      { property: "og:description", content: "Evaluate technical, biological, and clinical equivalence, data access, and evidence gaps before relying on another device's clinical data." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/clinical-evaluation-equivalence-medical-devices" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/cs_eu_mdr_remediation_1786441191745.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clinical Equivalence Under EU MDR: Establish What the Comparison Can Support" },
      { name: "twitter:description", content: "Evaluate technical, biological, and clinical equivalence, data access, and evidence gaps before relying on another device's clinical data." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/cs_eu_mdr_remediation_1786441191745.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/clinical-evaluation-equivalence-medical-devices" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
