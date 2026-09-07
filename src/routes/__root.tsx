import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { QueryPopup } from "../components/site/QueryPopup";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NKB Regovanta — Regulatory, Quality & Global Market Access" },
      {
        name: "description",
        content:
          "NKB Regovanta is a premier global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing, US FDA 510(k), and EU MDR/IVDR compliance consulting firm for Medical Devices, IVDs, Pharmaceuticals, and Cosmetics.",
      },
      { name: "author", content: "NKB Regovanta Solutions Pvt. Ltd." },
      { name: "publisher", content: "NKB Regovanta" },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      { name: "application-name", content: "NKB Regovanta" },
      { name: "apple-mobile-web-app-title", content: "NKB Regovanta" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "theme-color", content: "#0b3a96" },
      { property: "og:site_name", content: "NKB Regovanta" },
      { property: "og:title", content: "NKB Regovanta — Regulatory, Quality & Global Market Access" },
      {
        property: "og:description",
        content:
          "Premier global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing (MD-14/15, MD-3 to MD-9), US FDA 510(k), EU MDR/IVDR, Pharma & Cosmetics consulting.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.nkbregovanta.com" },
      { property: "og:locale", content: "en_US" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { property: "og:image:secure_url", content: "https://www.nkbregovanta.com/og-image.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "NKB Regovanta — Regulatory, Quality & Global Market Access" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@nkbregovanta" },
      { name: "twitter:creator", content: "@nkbregovanta" },
      { name: "twitter:title", content: "NKB Regovanta — Regulatory, Quality & Global Market Access" },
      {
        name: "twitter:description",
        content:
          "Premier global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing, US FDA 510(k), EU MDR/IVDR, Pharma & Cosmetics consulting.",
      },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:image:alt", content: "NKB Regovanta Logo & Brand Banner" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700;800;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48 32x32 16x16" },
      { rel: "icon", href: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { rel: "icon", href: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const structuredDataGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://www.nkbregovanta.com/#organization",
      "name": "NKB Regovanta",
      "legalName": "NKB Regovanta Solutions Pvt. Ltd.",
      "alternateName": [
        "NKB Regovanta Solutions",
        "NKB Regovanta Solutions Pvt. Ltd.",
        "NKBS",
        "Regovanta",
        "nkbregovanta",
        "nkbregovanta.com"
      ],
      "url": "https://www.nkbregovanta.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.nkbregovanta.com/#logo",
        "url": "https://www.nkbregovanta.com/favicon.png",
        "caption": "NKB Regovanta Logo"
      },
      "image": "https://www.nkbregovanta.com/og-image.png",
      "description": "NKB Regovanta Solutions Pvt. Ltd. is a premier global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing (MD-14/15, MD-3 to MD-9, Form 41/10), US FDA 510(k), and EU MDR/IVDR market access consulting firm for Medical Devices, IVDs, Pharmaceuticals, and Cosmetics.",
      "email": "contact@nkbregovanta.com",
      "telephone": ["+919513699000", "+919180351425", "+918400039062"],
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Building No 20, Awadh Kunj, Faridi Nagar, CIMAP",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226015",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Worldwide",
        "India",
        "United States",
        "European Union",
        "United Kingdom",
        "Australia",
        "Canada",
        "Saudi Arabia",
        "United Arab Emirates",
        "Brazil",
        "New Zealand"
      ],
      "sameAs": [
        "https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.nkbregovanta.com/#website",
      "url": "https://www.nkbregovanta.com",
      "name": "NKB Regovanta",
      "alternateName": ["NKB Regovanta Solutions", "nkbregovanta", "Regovanta"],
      "publisher": {
        "@id": "https://www.nkbregovanta.com/#organization"
      },
      "inLanguage": "en-US"
    }
  ]
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. */}
          <Outlet />
        </main>
        <Footer />
        <QueryPopup />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
