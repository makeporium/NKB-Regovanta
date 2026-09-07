import { createFileRoute } from "@tanstack/react-router";
import { OriginalArticle } from "@/components/site/OriginalArticle";
import article from "@/content/articles/remote-patient-monitoring-devices-regulatory-framework.json";

export const Route = createFileRoute("/insights/remote-patient-monitoring-devices-regulatory-framework")({
  head: () => ({
    meta: [
      { title: "Remote Patient Monitoring Regulations | NKB Regovanta" },
      { name: "description", content: "Assess remote-monitoring systems through their measurement claims, alerts, data flow, home-use conditions, and clinical responsibilities." },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Remote Patient Monitoring: Define the Clinical Workflow Before the Device Boundary" },
      { property: "og:description", content: "Assess remote-monitoring systems through their measurement claims, alerts, data flow, home-use conditions, and clinical responsibilities." },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/remote-patient-monitoring-devices-regulatory-framework" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/medtech_reg_lab.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Remote Patient Monitoring: Define the Clinical Workflow Before the Device Boundary" },
      { name: "twitter:description", content: "Assess remote-monitoring systems through their measurement claims, alerts, data flow, home-use conditions, and clinical responsibilities." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/medtech_reg_lab.jpg" }
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/insights/remote-patient-monitoring-devices-regulatory-framework" }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return <OriginalArticle article={article} />;
}
