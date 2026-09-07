import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/regulation-eu-2024-1860-mdr-ivdr-transition.json";

export const Route = createFileRoute("/insights/regulation-eu-2024-1860-mdr-ivdr-transition")({
  head: () => ({
    meta: [
      { title: "EU IVDR Transition Eligibility Guide | NKB Regovanta" },
      { name: "description", content: "Assess IVDR legacy-device transition eligibility, application milestones, change restrictions, and evidence before relying on extended dates." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "IVDR Transition Planning: Check Eligibility Before Relying on the Deadline" },
      { property: "og:description", content: "Assess IVDR legacy-device transition eligibility, application milestones, change restrictions, and evidence before relying on extended dates." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/regulation-eu-2024-1860-mdr-ivdr-transition" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/eu_mdr_market_1786306179767.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IVDR Transition Planning: Check Eligibility Before Relying on the Deadline" },
      { name: "twitter:description", content: "Assess IVDR legacy-device transition eligibility, application milestones, change restrictions, and evidence before relying on extended dates." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/eu_mdr_market_1786306179767.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/regulation-eu-2024-1860-mdr-ivdr-transition" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
