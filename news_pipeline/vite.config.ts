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
        proxy: {
            "/api/proxy/fda": {
                target: "https://www.fda.gov",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/proxy\/fda/, ""),
            },
            "/api/proxy/eu": {
                target: "https://health.ec.europa.eu",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/proxy\/eu/, ""),
            },
            "/api/proxy/google": {
                target: "https://news.google.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/proxy\/google/, ""),
            },
        },
    },
});
