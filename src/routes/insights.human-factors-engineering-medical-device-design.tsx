import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/human-factors-engineering-medical-device-design.json";

export const Route = createFileRoute("/insights/human-factors-engineering-medical-device-design")({
  head: () => ({
    meta: [
      { title: "Human Factors in Medical Device Design | NKB Regovanta" },
      { name: "description", content: "Integrate human factors into early device design through user research, task analysis, formative evaluation, and traceable design decisions." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Human Factors in Device Design: Find Use Problems Before Validation" },
      { property: "og:description", content: "Integrate human factors into early device design through user research, task analysis, formative evaluation, and traceable design decisions." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/human-factors-engineering-medical-device-design" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/cs_fda_simulated_use_1786441155542.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Human Factors in Device Design: Find Use Problems Before Validation" },
      { name: "twitter:description", content: "Integrate human factors into early device design through user research, task analysis, formative evaluation, and traceable design decisions." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/cs_fda_simulated_use_1786441155542.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/human-factors-engineering-medical-device-design" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
