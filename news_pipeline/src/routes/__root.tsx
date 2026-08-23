import {
    createRootRoute,
    Outlet,
    ScrollRestoration,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import globalCss from "~/styles/global.css?url";

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <div className="antialiased font-inter">
            <Outlet />
            <ScrollRestoration />
        </div>
    );
}
