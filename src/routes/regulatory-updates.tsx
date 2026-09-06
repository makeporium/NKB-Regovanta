import { createFileRoute } from "@tanstack/react-router";
import { fetchRegulatoryFeedFn } from "@/functions/regulatoryFeed";
import { RegulatoryDashboard } from "@/components/RegulatoryDashboard";

export const Route = createFileRoute("/regulatory-updates")({
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
                title: "Global Regulatory Updates Feed | NKB Regovanta",
            },
            {
                name: "description",
                content:
                    "Comprehensive medical device regulatory updates from FDA, CDSCO, EU MDR, and MDSAP. Track safety alerts, guidance publications, and compliance notices.",
            },
            {
                property: "og:title",
                content: "Global Regulatory Updates Feed | NKB Regovanta",
            },
            {
                property: "og:description",
                content:
                    "Comprehensive medical device regulatory updates from FDA, CDSCO, EU MDR, and MDSAP. Track safety alerts, guidance publications, and compliance notices.",
            },
            {
                property: "og:url",
                content: "https://www.nkbregovanta.com/regulatory-updates",
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
                content: "Global Regulatory Updates Feed | NKB Regovanta",
            },
            {
                name: "twitter:description",
                content:
                    "Comprehensive medical device regulatory updates from FDA, CDSCO, EU MDR, and MDSAP. Track safety alerts, guidance publications, and compliance notices.",
            },
            {
                name: "twitter:image",
                content: "https://www.nkbregovanta.com/og-image.png",
            },
        ],
        links: [
            {
                rel: "canonical",
                href: "https://www.nkbregovanta.com/regulatory-updates",
            },
        ],
        scripts: [
            {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: "Global Medical Device Regulatory Updates Feed",
                    description:
                        "Comprehensive medical device regulatory updates from FDA, CDSCO, EU MDR, and MDSAP. Track safety alerts, guidance publications, and compliance notices.",
                    publisher: {
                        "@type": "Organization",
                        name: "NKB Regovanta",
                        url: "https://www.nkbregovanta.com",
                    },
                }),
            },
        ],
    }),
    component: RegulatoryUpdatesPage,
});

function RegulatoryUpdatesPage() {
    const { items, cachedAt } = Route.useLoaderData();
    return <RegulatoryDashboard items={items} cachedAt={cachedAt} title="Global Regulatory Updates & Intelligence Feed" />;
}
