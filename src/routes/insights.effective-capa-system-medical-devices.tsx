import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/effective-capa-system-medical-devices.json";

export const Route = createFileRoute("/insights/effective-capa-system-medical-devices")({
  head: () => ({
    meta: [
      { title: "ISO 13485 & QMSR CAPA System Guide | NKB Regovanta" },
      { name: "description", content: "Build CAPA records around problem definition, investigation, cause-based actions, effectiveness measures, and a justified closure decision." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Medical Device CAPA: Show That the Cause Was Addressed" },
      { property: "og:description", content: "Build CAPA records around problem definition, investigation, cause-based actions, effectiveness measures, and a justified closure decision." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/effective-capa-system-medical-devices" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/qms_inspection_office.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Device CAPA: Show That the Cause Was Addressed" },
      { name: "twitter:description", content: "Build CAPA records around problem definition, investigation, cause-based actions, effectiveness measures, and a justified closure decision." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/qms_inspection_office.jpg" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/effective-capa-system-medical-devices" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
