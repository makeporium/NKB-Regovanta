import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
    component: () => (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-zinc-50 mb-4">
                    Regulatory Intelligence
                </h1>
                <p className="text-zinc-400 mb-6">
                    AI-powered MedTech regulatory feed.
                </p>
                <a
                    href="/regulatory-updates"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                    View Live Feed →
                </a>
            </div>
        </div>
    ),
});
