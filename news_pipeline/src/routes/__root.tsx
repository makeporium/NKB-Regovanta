import {
    createRootRoute,
    Outlet,
    ScrollRestoration,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import globalCss from "~/styles/global.css?url";

export const Route = createRootRoute({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
                title: "Regulatory Intelligence Feed | MedTech Live Updates",
            },
            {
                name: "description",
                content:
                    "Live AI-powered regulatory intelligence for FDA, CDSCO, EU MDR and MDSAP medtech updates.",
            },
        ],
        links: [
            { rel: "stylesheet", href: globalCss },
            {
                rel: "preconnect",
                href: "https://fonts.googleapis.com",
            },
            {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
            },
        ],
    }),
    component: RootComponent,
});

function RootComponent() {
    return (
        <RootDocument>
            <Outlet />
        </RootDocument>
    );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <html lang="en">
            <head>
                <Meta />
            </head>
            <body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
