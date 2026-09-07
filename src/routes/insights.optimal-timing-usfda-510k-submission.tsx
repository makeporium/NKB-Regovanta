import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/optimal-timing-usfda-510k-submission.json";

export const Route = createFileRoute("/insights/optimal-timing-usfda-510k-submission")({
  head: () => ({
    meta: [
      { title: "FDA 510(k) Submission Timing Strategy | NKB Regovanta" },
      { name: "description", content: "Assess 510(k) readiness through intended use, predicate strategy, completed evidence, configuration control, and capacity to answer review questions." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "When to Submit a 510(k): Use Readiness Gates Instead of a Calendar Target" },
      { property: "og:description", content: "Assess 510(k) readiness through intended use, predicate strategy, completed evidence, configuration control, and capacity to answer review questions." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/optimal-timing-usfda-510k-submission" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_regulatory_1786305043898.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "When to Submit a 510(k): Use Readiness Gates Instead of a Calendar Target" },
      { name: "twitter:description", content: "Assess 510(k) readiness through intended use, predicate strategy, completed evidence, configuration control, and capacity to answer review questions." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_regulatory_1786305043898.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/optimal-timing-usfda-510k-submission" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
