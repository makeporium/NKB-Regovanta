import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/samd-classification-submission-usfda.json";

export const Route = createFileRoute("/insights/samd-classification-submission-usfda")({
  head: () => ({
    meta: [
      { title: "US FDA SaMD Classification Guide | NKB Regovanta" },
      { name: "description", content: "Define medical software functions, assess FDA regulatory treatment, and connect classification and submission evidence to the intended use." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "FDA SaMD Planning: Assess the Software Function Before Selecting a Submission" },
      { property: "og:description", content: "Define medical software functions, assess FDA regulatory treatment, and connect classification and submission evidence to the intended use." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/samd-classification-submission-usfda" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/cs_algorithm_claim_1786441224937.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FDA SaMD Planning: Assess the Software Function Before Selecting a Submission" },
      { name: "twitter:description", content: "Define medical software functions, assess FDA regulatory treatment, and connect classification and submission evidence to the intended use." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/cs_algorithm_claim_1786441224937.png" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/samd-classification-submission-usfda" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
