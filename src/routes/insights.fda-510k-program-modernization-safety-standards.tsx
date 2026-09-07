import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/fda-510k-program-modernization-safety-standards.json";

export const Route = createFileRoute("/insights/fda-510k-program-modernization-safety-standards")({
  head: () => ({
    meta: [
      { title: "FDA 510(k) Modernization Guide | NKB Regovanta" },
      { name: "description", content: "Understand predicate relevance, final versus draft guidance, and the limited scope of FDA's Safety and Performance Based Pathway." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "510(k) Modernisation: Assess Predicate Relevance and Performance Evidence" },
      { property: "og:description", content: "Understand predicate relevance, final versus draft guidance, and the limited scope of FDA's Safety and Performance Based Pathway." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/fda-510k-program-modernization-safety-standards" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_market_1786305218141.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "510(k) Modernisation: Assess Predicate Relevance and Performance Evidence" },
      { name: "twitter:description", content: "Understand predicate relevance, final versus draft guidance, and the limited scope of FDA's Safety and Performance Based Pathway." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_market_1786305218141.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/fda-510k-program-modernization-safety-standards" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
