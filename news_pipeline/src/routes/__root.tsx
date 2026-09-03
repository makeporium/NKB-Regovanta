import {
    createRootRoute,
    Outlet,
    ScrollRestoration,
    HeadContent,
    Scripts,
} from "@tanstack/react-router";
import "~/styles/global.css";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <html lang="en" className="dark">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <HeadContent />
            </head>
            <body className="antialiased font-inter bg-zinc-950 text-zinc-50 min-h-screen selection:bg-blue-500/30">
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
