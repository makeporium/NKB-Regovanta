import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/iec-62304-medical-device-software-lifecycle.json";

export const Route = createFileRoute("/insights/iec-62304-medical-device-software-lifecycle")({
  head: () => ({
    meta: [
      { title: "IEC 62304 Software Lifecycle Guide | NKB Regovanta" },
      { name: "description", content: "Organise a medical-device software lifecycle around traceable requirements, risk controls, verification, third-party software, and release records." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "IEC 62304 in Practice: Keep Requirements, Risk Controls, and Releases Connected" },
      { property: "og:description", content: "Organise a medical-device software lifecycle around traceable requirements, risk controls, verification, third-party software, and release records." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/iec-62304-medical-device-software-lifecycle" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/cs_algorithm_claim_1786441224937.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IEC 62304 in Practice: Keep Requirements, Risk Controls, and Releases Connected" },
      { name: "twitter:description", content: "Organise a medical-device software lifecycle around traceable requirements, risk controls, verification, third-party software, and release records." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/cs_algorithm_claim_1786441224937.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/iec-62304-medical-device-software-lifecycle" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
