import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/qms-documentation-iso-13485-compliance.json";

export const Route = createFileRoute("/insights/qms-documentation-iso-13485-compliance")({
  head: () => ({
    meta: [
      { title: "Defensible QMS Documentation Guide | NKB Regovanta" },
      { name: "description", content: "Organise medical-device QMS documentation around process ownership, controlled records, traceability, and reliable retrieval." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "ISO 13485 Documentation: Build a System People Can Use and Auditors Can Trace" },
      { property: "og:description", content: "Organise medical-device QMS documentation around process ownership, controlled records, traceability, and reliable retrieval." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/qms-documentation-iso-13485-compliance" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/qms_inspection_office.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ISO 13485 Documentation: Build a System People Can Use and Auditors Can Trace" },
      { name: "twitter:description", content: "Organise medical-device QMS documentation around process ownership, controlled records, traceability, and reliable retrieval." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/qms_inspection_office.jpg" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/qms-documentation-iso-13485-compliance" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
