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
      { title: "NKB Regovanta — Medical Device, IVD & Pharma Regulatory Consulting India" },
      { name: "description", content: "NKB Regovanta Solutions Pvt. Ltd. provides CDSCO, US FDA, EU MDR/IVDR, ISO 13485, and global market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics. India-based regulatory consultants serving 15+ countries." },
      { name: "author", content: "NKB Regovanta Solutions Pvt. Ltd." },
      { property: "og:title", content: "NKB Regovanta — Medical Device, IVD & Pharma Regulatory Consulting India" },
      { property: "og:description", content: "NKB Regovanta Solutions Pvt. Ltd. provides CDSCO, US FDA, EU MDR/IVDR, ISO 13485, and global market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.nkbregovanta.com" },
      { property: "og:site_name", content: "NKB Regovanta" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NKB Regovanta — Medical Device, IVD & Pharma Regulatory Consulting India" },
      { name: "twitter:description", content: "NKB Regovanta Solutions Pvt. Ltd. provides CDSCO, US FDA, EU MDR/IVDR, ISO 13485, and global market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics." },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "NKB Regovanta",
  "alternateName": ["NKB Regovanta Solutions", "NKB Regovanta Solutions Pvt. Ltd."],
  "url": "https://www.nkbregovanta.com",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "NKB Regovanta Solutions Pvt. Ltd.",
  "alternateName": "NKB Regovanta",
  "url": "https://www.nkbregovanta.com",
  "logo": "https://www.nkbregovanta.com/favicon.png",
  "image": "https://www.nkbregovanta.com/og-image.png",
  "description": "Global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing, US FDA 510(k), and EU MDR/IVDR market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "sameAs": [
    "https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/"
  ],
  "knowsAbout": [
    "CDSCO Medical Device Classification & Licensing",
    "CDSCO Pharmaceutical & Drug Import Registration",
    "US FDA 510(k) Submissions & US Agent",
    "EU MDR 2017/745 & EU IVDR 2017/746 CE Marking",
    "ISO 13485:2016 QMS Implementation & Internal Audits",
    "MDSAP Readiness & Audit Support",
    "Cosmetics Regulatory Compliance (MoCRA, EU RP, CDSCO COS-1/2)",
    "PC-PNDT Certificate Registration",
    "WPC ETA Approval for Medical Equipment",
    "IEC & AD Code Customs Registration"
  ]
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
