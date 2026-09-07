import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/notified-body-selection-conformity-assessment-guide.json";

export const Route = createFileRoute("/insights/notified-body-selection-conformity-assessment-guide")({
  head: () => ({
    meta: [
      { title: "Notified Body Selection Guide | NKB Regovanta" },
      { name: "description", content: "Choose a notified body by confirming designation scope, product fit, assessment requirements, and realistic readiness rather than quoted timing alone." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Selecting a Notified Body: Match Designation, Scope, and Project Readiness" },
      { property: "og:description", content: "Choose a notified body by confirming designation scope, product fit, assessment requirements, and realistic readiness rather than quoted timing alone." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/notified-body-selection-conformity-assessment-guide" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Selecting a Notified Body: Match Designation, Scope, and Project Readiness" },
      { name: "twitter:description", content: "Choose a notified body by confirming designation scope, product fit, assessment requirements, and realistic readiness rather than quoted timing alone." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/notified-body-selection-conformity-assessment-guide" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
