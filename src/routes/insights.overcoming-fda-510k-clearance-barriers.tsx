import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/overcoming-fda-510k-clearance-barriers.json";

export const Route = createFileRoute("/insights/overcoming-fda-510k-clearance-barriers")({
  head: () => ({
    meta: [
      { title: "FDA 510(k) Clearance Barriers Guide | NKB Regovanta" },
      { name: "description", content: "Address 510(k) obstacles by distinguishing pathway, intended-use, performance-evidence, and submission-consistency problems." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "FDA 510(k) Problems: Diagnose the Evidence Gap Before Responding" },
      { property: "og:description", content: "Address 510(k) obstacles by distinguishing pathway, intended-use, performance-evidence, and submission-consistency problems." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/overcoming-fda-510k-clearance-barriers" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_market_1786305218141.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FDA 510(k) Problems: Diagnose the Evidence Gap Before Responding" },
      { name: "twitter:description", content: "Address 510(k) obstacles by distinguishing pathway, intended-use, performance-evidence, and submission-consistency problems." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_market_1786305218141.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/overcoming-fda-510k-clearance-barriers" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
