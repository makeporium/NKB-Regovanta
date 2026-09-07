import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/core-regulations-medical-device-global-compliance.json";

export const Route = createFileRoute("/insights/core-regulations-medical-device-global-compliance")({
  head: () => ({
    meta: [
      { title: "Core Global MedTech Regulations Guide | NKB Regovanta" },
      { name: "description", content: "Create a product-specific register linking device rules, software, electrical safety, biological evaluation, and other applicable obligations." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Build a Medical Device Requirements Register Across Regulatory Disciplines" },
      { property: "og:description", content: "Create a product-specific register linking device rules, software, electrical safety, biological evaluation, and other applicable obligations." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/core-regulations-medical-device-global-compliance" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/media__1786282925761.optimized.webp" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Build a Medical Device Requirements Register Across Regulatory Disciplines" },
      { name: "twitter:description", content: "Create a product-specific register linking device rules, software, electrical safety, biological evaluation, and other applicable obligations." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/media__1786282925761.optimized.webp" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/core-regulations-medical-device-global-compliance" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
