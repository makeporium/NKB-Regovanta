import { createFileRoute } from "@tanstack/react-router";
import { fetchRegulatoryFeedFn } from "@/functions/regulatoryFeed";
import { RegulatoryDashboard } from "@/components/RegulatoryDashboard";

export const Route = createFileRoute("/ai-news")({
    loader: async () => {
        try {
            const items = await fetchRegulatoryFeedFn();
            return {
                items: items ?? [],
                cachedAt: new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Asia/Kolkata",
                }),
            };
        } catch (error) {
            console.error("Failed to load regulatory feed:", error);
            return {
                items: [],
                cachedAt: new Date().toLocaleTimeString("en-IN", {
                    hour: "2-digit",
                    minute: "2-digit",
                    timeZone: "Asia/Kolkata",
                }),
            };
        }
    },
    head: () => ({
        meta: [
            {
                title: "Live Regulatory Intelligence Feed & AI News | NKB Regovanta",
            },
            {
                name: "description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                name: "keywords",
                content:
                    "regulatory intelligence, AI medical device regulatory news, FDA updates, CDSCO notifications, EU MDR IVDR alerts, MDSAP changes, regulatory news feed",
            },
            {
                property: "og:title",
                content: "Live Regulatory Intelligence Feed & AI News | NKB Regovanta",
            },
            {
                property: "og:description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                property: "og:url",
                content: "https://www.nkbregovanta.com/ai-news",
            },
            {
                property: "og:type",
                content: "website",
            },
            {
                property: "og:image",
                content: "https://www.nkbregovanta.com/og-image.png",
            },
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            {
                name: "twitter:title",
                content: "Live Regulatory Intelligence Feed & AI News | NKB Regovanta",
            },
            {
                name: "twitter:description",
                content:
                    "Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.",
            },
            {
                name: "twitter:image",
                content: "https://www.nkbregovanta.com/og-image.png",
            },
        ],
        links: [
            {
                rel: "canonical",
                href: "https://www.nkbregovanta.com/ai-news",
            },
        ],
    }),
    component: AiNewsPage,
});

function AiNewsPage() {
    const { items, cachedAt } = Route.useLoaderData();
    return <RegulatoryDashboard items={items} cachedAt={cachedAt} />;
}
