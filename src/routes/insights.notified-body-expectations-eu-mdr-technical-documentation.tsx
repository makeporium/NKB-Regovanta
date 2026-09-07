import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/notified-body-expectations-eu-mdr-technical-documentation.json";

export const Route = createFileRoute("/insights/notified-body-expectations-eu-mdr-technical-documentation")({
  head: () => ({
    meta: [
      { title: "EU MDR Technical Documentation Guide | NKB Regovanta" },
      { name: "description", content: "Prepare an MDR technical file with consistent scope, claim-to-evidence links, controlled revisions, and traceable responses to review questions." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "EU MDR Technical Documentation: Make the Evidence Trail Clear" },
      { property: "og:description", content: "Prepare an MDR technical file with consistent scope, claim-to-evidence links, controlled revisions, and traceable responses to review questions." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/notified-body-expectations-eu-mdr-technical-documentation" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/cs_eu_mdr_remediation_1786441191745.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR Technical Documentation: Make the Evidence Trail Clear" },
      { name: "twitter:description", content: "Prepare an MDR technical file with consistent scope, claim-to-evidence links, controlled revisions, and traceable responses to review questions." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/cs_eu_mdr_remediation_1786441191745.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/notified-body-expectations-eu-mdr-technical-documentation" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
