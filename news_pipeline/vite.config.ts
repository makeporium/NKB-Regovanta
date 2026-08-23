import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
    resolve: {
        alias: {
            "~": "/src",
        },
    },
    plugins: [
        TanStackRouterVite({ routesDirectory: "./src/routes", generatedRouteTree: "./src/routeTree.gen.ts" }),
        react(),
        tailwindcss(),
    ],
    server: {
        port: 3001,
    },
});
