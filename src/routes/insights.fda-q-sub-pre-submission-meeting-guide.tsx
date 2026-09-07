import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/fda-q-sub-pre-submission-meeting-guide.json";

export const Route = createFileRoute("/insights/fda-q-sub-pre-submission-meeting-guide")({
  head: () => ({
    meta: [
      { title: "FDA Q-Submission (Pre-Sub) Guide | NKB Regovanta" },
      { name: "description", content: "Prepare a focused FDA Pre-Submission with a defined device, evidence context, proposed approach, and questions tied to development decisions." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "FDA Pre-Submissions: Ask Questions That Resolve a Development Decision" },
      { property: "og:description", content: "Prepare a focused FDA Pre-Submission with a defined device, evidence context, proposed approach, and questions tied to development decisions." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/fda-q-sub-pre-submission-meeting-guide" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_regulatory_1786305043898.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FDA Pre-Submissions: Ask Questions That Resolve a Development Decision" },
      { name: "twitter:description", content: "Prepare a focused FDA Pre-Submission with a defined device, evidence context, proposed approach, and questions tied to development decisions." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/usa_fda_regulatory_1786305043898.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/fda-q-sub-pre-submission-meeting-guide" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
