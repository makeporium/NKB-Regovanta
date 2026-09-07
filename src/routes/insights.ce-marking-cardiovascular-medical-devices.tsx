import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/ce-marking-cardiovascular-medical-devices.json";

export const Route = createFileRoute("/insights/ce-marking-cardiovascular-medical-devices")({
  head: () => ({
    meta: [
      { title: "CE Marking for Cardiovascular Devices | NKB Regovanta" },
      { name: "description", content: "Plan cardiovascular-device evidence across design performance, patient contact, clinical benefit, and follow-up without assuming one route fits all products." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Cardiovascular Device CE Marking: Organise Evidence Around the Clinical Claim" },
      { property: "og:description", content: "Plan cardiovascular-device evidence across design performance, patient contact, clinical benefit, and follow-up without assuming one route fits all products." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/ce-marking-cardiovascular-medical-devices" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/medtech_reg_lab.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cardiovascular Device CE Marking: Organise Evidence Around the Clinical Claim" },
      { name: "twitter:description", content: "Plan cardiovascular-device evidence across design performance, patient contact, clinical benefit, and follow-up without assuming one route fits all products." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/medtech_reg_lab.jpg" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/ce-marking-cardiovascular-medical-devices" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
