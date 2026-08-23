import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "~": path.resolve(process.cwd(), "./src"),
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
