import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/class-iii-medical-device-classification-strategy.json";

export const Route = createFileRoute("/insights/class-iii-medical-device-classification-strategy")({
  head: () => ({
    meta: [
      { title: "Class III Medical Device Strategy | NKB Regovanta" },
      { name: "description", content: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA." },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "FDA Class III Strategy: Establish the Regulatory Path Before Committing to Studies" },
      { property: "og:description", content: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/class-iii-medical-device-classification-strategy" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/industry_medical_devices_1786310566137.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FDA Class III Strategy: Establish the Regulatory Path Before Committing to Studies" },
      { name: "twitter:description", content: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/industry_medical_devices_1786310566137.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/class-iii-medical-device-classification-strategy" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
