import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export function createRouter() {
    return createTanStackRouter({
        routeTree,
        defaultPreload: "intent",
        scrollRestoration: true,
    });
}

// Satisfy TanStack internal module runner
export const getRouter = async () => createRouter();
export default { getRouter, createRouter };

declare module "@tanstack/react-router" {
    interface Register {
        router: ReturnType<typeof createRouter>;
    }
}
