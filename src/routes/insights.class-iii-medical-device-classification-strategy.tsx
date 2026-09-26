import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/class-iii-medical-device-classification-strategy.json";

export const Route = createFileRoute("/insights/class-iii-medical-device-classification-strategy")({
  head: () => ({
    meta: [
      { title: "Class III Medical Device Strategy | NKB Regovanta" },
      { name: "description", content: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Class III Medical Device Strategy | NKB Regovanta" },
      { property: "og:description", content: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/class-iii-medical-device-classification-strategy" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/insights/cardiovascular_surgical_implant.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Class III Medical Device Strategy | NKB Regovanta" },
      { name: "twitter:description", content: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/insights/cardiovascular_surgical_implant.jpg" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/class-iii-medical-device-classification-strategy" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
