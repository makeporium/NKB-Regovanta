import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/borderline-medical-device-classification-strategy.json";

export const Route = createFileRoute("/insights/borderline-medical-device-classification-strategy")({
  head: () => ({
    meta: [
      { title: "Borderline Medical Device Classification | NKB Regovanta" },
      { name: "description", content: "Assess borderline products using intended purpose, mode of action, claims, and jurisdiction-specific reasoning before selecting a device class." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Borderline Products: Separate Device Qualification From Risk Classification" },
      { property: "og:description", content: "Assess borderline products using intended purpose, mode of action, claims, and jurisdiction-specific reasoning before selecting a device class." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/borderline-medical-device-classification-strategy" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/industry_cosmetics_1786310589050.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Borderline Products: Separate Device Qualification From Risk Classification" },
      { name: "twitter:description", content: "Assess borderline products using intended purpose, mode of action, claims, and jurisdiction-specific reasoning before selecting a device class." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/industry_cosmetics_1786310589050.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/borderline-medical-device-classification-strategy" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
