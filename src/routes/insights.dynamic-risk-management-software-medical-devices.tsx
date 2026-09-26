import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/dynamic-risk-management-software-medical-devices.json";

export const Route = createFileRoute("/insights/dynamic-risk-management-software-medical-devices")({
  head: () => ({
    meta: [
      { title: "Medical Device Software Risk Management | NKB Regovanta" },
      { name: "description", content: "Connect software incidents, dependency updates, and clinical feedback to risk assessment, change control, and verified release decisions." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Medical Device Software Risk Management | NKB Regovanta" },
      { property: "og:description", content: "Connect software incidents, dependency updates, and clinical feedback to risk assessment, change control, and verified release decisions." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/dynamic-risk-management-software-medical-devices" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/insights/risk_assessment_analytics.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Device Software Risk Management | NKB Regovanta" },
      { name: "twitter:description", content: "Connect software incidents, dependency updates, and clinical feedback to risk assessment, change control, and verified release decisions." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/insights/risk_assessment_analytics.jpg" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/dynamic-risk-management-software-medical-devices" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
