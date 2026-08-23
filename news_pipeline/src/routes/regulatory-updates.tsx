/**
 * src/routes/regulatory-updates.tsx
 *
 * TanStack Route: server loader → RegulatoryDashboard UI.
 * CDN cache headers are applied inside fetchRegulatoryFeed server fn so the
 * Vercel Edge layer caches the entire SSR payload for 10 min.
 */

import { createFileRoute } from "@tanstack/react-router";
import { fetchRegulatoryFeedFn } from "~/server/regulatoryFeed";
import { RegulatoryDashboard } from "~/components/RegulatoryDashboard";

export const Route = createFileRoute("/regulatory-updates")({
    // ── Loader runs server-side (SSR) ──────────────────────────────────────────
    loader: async () => {
        const items = await fetchRegulatoryFeedFn();
        return {
            items,
            cachedAt: new Date().toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "Asia/Kolkata",
            }),
        };
    },

    // ── Head metadata for SEO ──────────────────────────────────────────────────
    head: () => ({
        meta: [
            {
                title: "Regulatory Updates | MedTech Intelligence Feed",
            },
            {
                name: "description",
                content:
                    "Live AI-structured regulatory notices from FDA, CDSCO, EU MDR and MDSAP. Updated every 10 minutes via Vercel Edge CDN.",
            },
        ],
    }),

    // ── Error boundary ─────────────────────────────────────────────────────────
    errorComponent: ({ error }) => (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950">
            <div className="glass max-w-md rounded-xl p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-950/60 border border-red-700/40">
                    <svg
                        className="h-6 w-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                    </svg>
                </div>
                <h2 className="text-lg font-semibold text-zinc-50 mb-2">
                    Feed Unavailable
                </h2>
                <p className="text-sm text-zinc-400 mb-6">
                    {error instanceof Error
                        ? error.message
                        : "An unexpected error occurred while loading regulatory data."}
                </p>
                <a
                    href="/regulatory-updates"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                    Retry
                </a>
            </div>
        </div>
    ),

    // ── Pending UI while SSR streams ───────────────────────────────────────────
    pendingComponent: () => (
        <div className="flex min-h-screen items-center justify-center bg-zinc-950">
            <div className="text-center space-y-4">
                <div className="mx-auto h-10 w-10 rounded-full border-2 border-blue-500/30 border-t-blue-500 animate-spin" />
                <p className="text-sm text-zinc-500">
                    Fetching regulatory intelligence…
                </p>
            </div>
        </div>
    ),

    // ── Page component ─────────────────────────────────────────────────────────
    component: RegulatoryUpdatesPage,
});

function RegulatoryUpdatesPage() {
    const { items, cachedAt } = Route.useLoaderData();
    return <RegulatoryDashboard items={items} cachedAt={cachedAt} />;
}
