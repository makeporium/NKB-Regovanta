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
      {
        name: "keywords",
        content:
          "NKB Regovanta, NKB Regovanta Solutions, NKB Regovanta Solutions Pvt. Ltd., nkbregovanta, regovanta, medical device regulatory consultants, CDSCO consulting, CDSCO medical device registration, US FDA 510k, EU MDR 2017/745, IVDR 2017/746, ISO 13485 QMS, MDSAP certification, Indian Authorized Agent, drug import license India, cosmetics MoCRA, PC-PNDT certificate, WPC ETA approval, IEC AD Code",
      },
      { name: "author", content: "NKB Regovanta Solutions Pvt. Ltd." },
      { name: "publisher", content: "NKB Regovanta" },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "googlebot",
        content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      },
      {
        name: "bingbot",
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
          "Regulatory, quality and market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics. From first idea to global market access.",
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
          "Regulatory, quality and market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics. From first idea to global market access.",
      },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:image:alt", content: "NKB Regovanta Logo & Brand Banner" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com" },
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
      "description": "NKB Regovanta Solutions Pvt. Ltd. is a leading regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing, US FDA 510(k), and EU MDR/IVDR market access consulting firm for Medical Devices, IVDs, Pharmaceuticals, and Cosmetics.",
      "email": "contact@nkbregovanta.com",
      "telephone": "+918400039062",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Noida",
        "addressRegion": "Uttar Pradesh",
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
      ],
      "knowsAbout": [
        "CDSCO Medical Device Classification & Licensing",
        "CDSCO Pharmaceutical & Drug Import Registration (Form 41 / Form 10)",
        "Indian Authorized Agent (AIR) Services",
        "US FDA 510(k) Submissions & US Agent Services",
        "EU MDR 2017/745 & EU IVDR 2017/746 CE Marking",
        "ISO 13485:2016 QMS Implementation & Internal Audits",
        "MDSAP Readiness & Audit Support",
        "Cosmetics Regulatory Compliance (MoCRA, EU RP, CDSCO COS-1/2)",
        "PC-PNDT Certificate Registration",
        "WPC ETA Approval for Wireless Medical Devices",
        "IEC & AD Code Customs Registration",
        "Post-Market Surveillance (PMS) & Vigilance Reporting",
        "Clinical Evaluation Reports (CER) & Performance Evaluation Reports (PER)"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Regulatory & Quality Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CDSCO Medical Device & Drug Licensing India",
              "url": "https://www.nkbregovanta.com/services/india"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "US FDA 510(k), De Novo & US Agent Services",
              "url": "https://www.nkbregovanta.com/services/usa"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EU MDR & IVDR CE Marking Compliance",
              "url": "https://www.nkbregovanta.com/services/eu"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ISO 13485 & MDSAP Quality Management Systems",
              "url": "https://www.nkbregovanta.com/services/iso-13485"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UK MHRA Registration & UKRP Services",
              "url": "https://www.nkbregovanta.com/services/uk"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WPC Wireless Equipment Type Approval (ETA)",
              "url": "https://www.nkbregovanta.com/services/wpc-wireless-medical-devices"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PC-PNDT Certificate Registration",
              "url": "https://www.nkbregovanta.com/services/pc-pndt-certificate"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IEC & AD Code Customs ICEGATE Registration",
              "url": "https://www.nkbregovanta.com/services/iec-ad-code"
            }
          }
        ]
      }
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
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.nkbregovanta.com/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
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
