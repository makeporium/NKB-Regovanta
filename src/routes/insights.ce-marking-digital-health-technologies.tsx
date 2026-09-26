import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/ce-marking-digital-health-technologies.json";

export const Route = createFileRoute("/insights/ce-marking-digital-health-technologies")({
  head: () => ({
    meta: [
      { title: "CE Marking for Digital Health Under EU MDR | NKB Regovanta" },
      { name: "description", content: "Plan EU medical software qualification, classification, clinical evidence, and release controls around a clearly defined intended purpose." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "CE Marking for Digital Health Under EU MDR | NKB Regovanta" },
      { property: "og:description", content: "Plan EU medical software qualification, classification, clinical evidence, and release controls around a clearly defined intended purpose." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/ce-marking-digital-health-technologies" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CE Marking for Digital Health Under EU MDR | NKB Regovanta" },
      { name: "twitter:description", content: "Plan EU medical software qualification, classification, clinical evidence, and release controls around a clearly defined intended purpose." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/ce-marking-digital-health-technologies" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
