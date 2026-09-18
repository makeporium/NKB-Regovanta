import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/dental-scanners-manufacturing-regulatory-standards.json";

export const Route = createFileRoute("/insights/dental-scanners-manufacturing-regulatory-standards")({
  head: () => ({
    meta: [
      { title: "Intraoral Dental Scanner Regulations | NKB Regovanta" },
      { name: "description", content: "Plan dental-scanner evidence for intended use, scan accuracy, software processing, reprocessing, and downstream digital workflows." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Intraoral Dental Scanner Regulations | NKB Regovanta" },
      { property: "og:description", content: "Plan dental-scanner evidence for intended use, scan accuracy, software processing, reprocessing, and downstream digital workflows." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/dental-scanners-manufacturing-regulatory-standards" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/insights/digital_dental_clinic.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Intraoral Dental Scanner Regulations | NKB Regovanta" },
      { name: "twitter:description", content: "Plan dental-scanner evidence for intended use, scan accuracy, software processing, reprocessing, and downstream digital workflows." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/insights/digital_dental_clinic.jpg" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/dental-scanners-manufacturing-regulatory-standards" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
