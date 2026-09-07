import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/ivdr-class-d-verification-notified-bodies.json";

export const Route = createFileRoute("/insights/ivdr-class-d-verification-notified-bodies")({
  head: () => ({
    meta: [
      { title: "EU IVDR Class D Verification Guide | NKB Regovanta" },
      { name: "description", content: "Prepare Class D IVD verification with clear configurations, performance evidence, batch records, and notified-body or reference-laboratory interfaces." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Class D IVD Verification: Coordinate the Product Evidence and Batch Workflow" },
      { property: "og:description", content: "Prepare Class D IVD verification with clear configurations, performance evidence, batch records, and notified-body or reference-laboratory interfaces." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/ivdr-class-d-verification-notified-bodies" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/industry_ivd_1786310578306.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Class D IVD Verification: Coordinate the Product Evidence and Batch Workflow" },
      { name: "twitter:description", content: "Prepare Class D IVD verification with clear configurations, performance evidence, batch records, and notified-body or reference-laboratory interfaces." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/industry_ivd_1786310578306.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/ivdr-class-d-verification-notified-bodies" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
