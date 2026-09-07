import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/biological-evaluation-testing-medical-devices-iso-10993.json";

export const Route = createFileRoute("/insights/biological-evaluation-testing-medical-devices-iso-10993")({
  head: () => ({
    meta: [
      { title: "ISO 10993 Biocompatibility Testing | NKB Regovanta" },
      { name: "description", content: "Plan biological evaluation using finished-device contact, materials, processing, available evidence, and current standards-recognition requirements." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "ISO 10993 Biological Evaluation: Define the Question Before Ordering Tests" },
      { property: "og:description", content: "Plan biological evaluation using finished-device contact, materials, processing, available evidence, and current standards-recognition requirements." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/biological-evaluation-testing-medical-devices-iso-10993" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/cs_fda_biocompatibility_1786441176273.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ISO 10993 Biological Evaluation: Define the Question Before Ordering Tests" },
      { name: "twitter:description", content: "Plan biological evaluation using finished-device contact, materials, processing, available evidence, and current standards-recognition requirements." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/cs_fda_biocompatibility_1786441176273.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/biological-evaluation-testing-medical-devices-iso-10993" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
