import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/regulatory-compliance-strategy-global-medtech.json";

export const Route = createFileRoute("/insights/regulatory-compliance-strategy-global-medtech")({
  head: () => ({
    meta: [
      { title: "Global MedTech Regulatory Strategy Guide | NKB Regovanta" },
      { name: "description", content: "Separate reusable product evidence from market-specific classification, representation, and submission needs in a global regulatory plan." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Global MedTech Strategy: Sequence Markets Around Reusable Evidence" },
      { property: "og:description", content: "Separate reusable product evidence from market-specific classification, representation, and submission needs in a global regulatory plan." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/regulatory-compliance-strategy-global-medtech" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/media__1786282925761.optimized.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Global MedTech Strategy: Sequence Markets Around Reusable Evidence" },
      { name: "twitter:description", content: "Separate reusable product evidence from market-specific classification, representation, and submission needs in a global regulatory plan." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/media__1786282925761.optimized.webp" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/regulatory-compliance-strategy-global-medtech" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
