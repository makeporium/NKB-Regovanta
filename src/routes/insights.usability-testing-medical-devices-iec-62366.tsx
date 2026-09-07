import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/usability-testing-medical-devices-iec-62366.json";

export const Route = createFileRoute("/insights/usability-testing-medical-devices-iec-62366")({
  head: () => ({
    meta: [
      { title: "IEC 62366 Usability Testing Guide | NKB Regovanta" },
      { name: "description", content: "Plan usability evaluations around representative users, critical tasks, realistic conditions, observations, and justified interpretation." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Medical Device Usability Testing: Design a Study That Answers the Safety Question" },
      { property: "og:description", content: "Plan usability evaluations around representative users, critical tasks, realistic conditions, observations, and justified interpretation." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/usability-testing-medical-devices-iec-62366" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/cs_fda_simulated_use_1786441155542.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Device Usability Testing: Design a Study That Answers the Safety Question" },
      { name: "twitter:description", content: "Plan usability evaluations around representative users, critical tasks, realistic conditions, observations, and justified interpretation." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/cs_fda_simulated_use_1786441155542.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/usability-testing-medical-devices-iec-62366" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
