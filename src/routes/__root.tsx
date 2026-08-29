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
          "CDSCO Medical Device Import Licence, MD-14 application, MD-15 import licence, Class A GSR 777(E) registration, Investigational Device Import MD-18 MD-19, Clinical evaluation import permission MD-24 MD-25, Novel medical device import MD-26 MD-27, IVD test licence MD-16 MD-17, Class A & B manufacturing licence MD-3 MD-5, Class C & D manufacturing licence MD-7 MD-9, Loan manufacturing licence MD-4 MD-6 / MD-8 MD-10, Test licence for manufacturing MD-12 MD-13, Indian Authorized Agent (AIR / IAA), SUGAM portal registration support, CDSCO product classification & predicate strategy, Medical device regulatory consultant India, Drug Import Licence India, Registration Certificate Form 41 CDSCO, Import Licence Form 10 / 10-A, Form 40 application support, Form 8 / 8-A support, Test Licence Form 11, Foreign manufacturer registration India, Overseas manufacturing site registration, Plant Master File (PMF) CDSCO, Drug Master File (DMF) open part, API import registration India, Phytopharmaceutical & biologics regulatory support, PC-PNDT Certificate registration, Form A & Form B PCPNDT ultrasound registration, PCPNDT consultant India, WPC ETA approval medical devices, Saral Sanchar WPC import license (RLO permit), Dealer Possession License (DPL), IEC Code registration DGFT, AD Code registration ICEGATE customs profile, Bank authority letter AD Code, Free Sale Certificate (FSC) CDSCO, Market Standing Certificate (MSC), Non-Conviction Certificate (NCC), MD-42 certificate, Neutral / Special Code certificate, US FDA 510k submission consultant, FDA 510(k) clearance medical devices, eSTAR FDA dossier compilation, FDA De Novo classification, PMA Premarket Approval FDA, US FDA US Agent services for foreign facilities, FDA Establishment Registration and Device Listing (FURLS), FDA Official Correspondent, 513(g) Information Request, FDA Q-Submission / Pre-Sub, MoCRA compliance support, FDA cosmetic facility registration, FDA cosmetic product listing (SPL), EU MDR 2017/745 regulatory consultant, CE Marking medical devices Europe, Notified Body coordination EU, Technical Documentation / STED dossier, GSPR compliance, EU IVDR 2017/746 consultant, Performance Evaluation Report (PER), European Authorized Representative (EC REP / EAR), EUDAMED registration support, Clinical Evaluation Report (CER) EU MDR, PMS / PMCF plans, UK MHRA medical device registration, UK Responsible Person (UKRP), UKCA marking medical devices, Australia TGA ARTG inclusion, Australian Sponsor medical devices, Health Canada MDL (Medical Device Licence), Health Canada MDEL (Medical Device Establishment Licence), ANVISA Brazil registration, BRH Brazilian Registration Holder, Saudi Arabia SFDA, UAE MOHAP medical device registration, ISO 13485 implementation consultant, ISO 13485 QMS gap assessment, MDSAP audit readiness support (FDA, HC, TGA, ANVISA, MHLW), ISO 13485 internal audits, FDA QMSR compliance, ISO 14971 Risk Management, CAPA management, CDSCO cosmetic import registration COS-1 COS-2, Cosmetics manufacturing licence COS-5 COS-8, EU Cosmetic Responsible Person (EU RP), Cosmetic Product Safety Report (CPSR), CPNP notification, UK SCPN notification, Canada Cosmetic Notification Form (CNF), Australia AICIS cosmetics, NKB Regovanta, NKB Regovanta Solutions",
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
      "description": "NKB Regovanta Solutions Pvt. Ltd. is a premier global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing (MD-14/15, MD-3 to MD-9, Form 41/10), US FDA 510(k), and EU MDR/IVDR market access consulting firm for Medical Devices, IVDs, Pharmaceuticals, and Cosmetics.",
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
        "CDSCO Medical Device Import Licence (MD-14 & MD-15)",
        "CDSCO Medical Device Manufacturing Licence (MD-3/5, MD-7/9, MD-4/6, MD-8/10)",
        "Class A GSR 777(E) Registration & Test Licences (MD-12/13, MD-16/17)",
        "Investigational & Novel Medical Device Import (MD-18/19, MD-24/25, MD-26/27)",
        "Indian Authorized Agent (AIR / IAA) Representation & SUGAM Portal Support",
        "CDSCO Product Classification & Predicate Device Strategy",
        "Medical Device Regulatory Consultant India",
        "Drug Import Licence India (Form 41 Registration Certificate & Form 10/10-A)",
        "Pharmaceutical Form 40, Form 8/8-A and Form 11 Test Licence Support",
        "Foreign Manufacturer Registration & Overseas Manufacturing Site Registration",
        "Plant Master File (PMF) & Drug Master File (DMF Open Part) CDSCO",
        "API Import Registration India & Phytopharmaceutical / Biologics Support",
        "PC-PNDT Certificate Registration (Form A & Form B Ultrasound / Diagnostic Imaging)",
        "WPC ETA Approval for Medical Devices & Saral Sanchar RLO / DPL Licensing",
        "IEC Code DGFT & AD Code ICEGATE Customs Profile Registration",
        "Free Sale Certificate (FSC), Market Standing (MSC), Non-Conviction (NCC) & MD-42",
        "US FDA 510(k) Clearance & eSTAR Dossier Compilation Consultant",
        "FDA De Novo Classification & Premarket Approval (PMA)",
        "US FDA US Agent Services for Foreign Facilities & FURLS Registration / Listing",
        "FDA Official Correspondent, 513(g) Information Request & Q-Submission / Pre-Sub",
        "MoCRA Compliance, FDA Cosmetic Facility Registration & Cosmetic Product Listing (SPL)",
        "EU MDR 2017/745 Regulatory Consultant & CE Marking Europe",
        "Technical Documentation & STED Dossier Compilation with GSPR Compliance",
        "EU IVDR 2017/746 Consultant & Performance Evaluation Report (PER)",
        "European Authorized Representative (EC REP / EAR) & EUDAMED Registration",
        "Clinical Evaluation Reports (CER) EU MDR & PMS / PMCF Plans",
        "UK MHRA Medical Device Registration, UK Responsible Person (UKRP) & UKCA Marking",
        "Australia TGA ARTG Inclusion & Australian Sponsor Services",
        "Health Canada Medical Device Licence (MDL) & Establishment Licence (MDEL)",
        "ANVISA Brazil Registration & Brazilian Registration Holder (BRH)",
        "Saudi Arabia SFDA Medical Device & Pharma Registration",
        "UAE MOHAP Medical Device Registration & Import Clearance",
        "ISO 13485:2016 QMS Implementation, Gap Assessment & Internal Audits",
        "MDSAP Audit Readiness Support (FDA, HC, TGA, ANVISA, MHLW)",
        "FDA QMSR Quality System Harmonization, ISO 14971 Risk Management & CAPA",
        "Cosmetics CDSCO Import Registration (COS-1 / COS-2) & Manufacturing (COS-5 / COS-8)",
        "EU Cosmetic Responsible Person (EU RP), CPSR Safety Assessment & CPNP Notification",
        "UK SCPN Notification, Canada Cosmetic Notification (CNF) & Australia AICIS"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Regulatory & Quality Consulting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CDSCO Medical Device & IVD Licensing India (MD-14/15, MD-3 to MD-10, AIR)",
              "url": "https://www.nkbregovanta.com/services/india/medical-devices"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CDSCO Pharmaceutical & Drug Import Licensing (Form 41, Form 10, PMF, DMF)",
              "url": "https://www.nkbregovanta.com/services/drug-licenses-for-importers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "US FDA 510(k), eSTAR, De Novo, PMA & US Agent Services",
              "url": "https://www.nkbregovanta.com/services/usa"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "EU MDR 2017/745 & EU IVDR 2017/746 CE Marking & EC REP",
              "url": "https://www.nkbregovanta.com/services/eu"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ISO 13485 QMS, MDSAP Readiness & FDA QMSR Compliance",
              "url": "https://www.nkbregovanta.com/services/iso-13485"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UK MHRA Registration, UKRP & UKCA Marking",
              "url": "https://www.nkbregovanta.com/services/uk"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Australia TGA ARTG Inclusion & Sponsor Services",
              "url": "https://www.nkbregovanta.com/services/australia"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Health Canada MDL & MDEL Licensing",
              "url": "https://www.nkbregovanta.com/services/canada"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ANVISA Brazil Registration & BRH Services",
              "url": "https://www.nkbregovanta.com/services/brazil"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Saudi Arabia SFDA & UAE MOHAP Market Access",
              "url": "https://www.nkbregovanta.com/services/saudi-arabia"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PC-PNDT Certificate Registration (Form A & Form B)",
              "url": "https://www.nkbregovanta.com/services/pc-pndt-certificate"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "WPC Wireless Equipment Type Approval (ETA & DPL)",
              "url": "https://www.nkbregovanta.com/services/wpc-wireless-medical-devices"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IEC Code DGFT & AD Code ICEGATE Customs Registration",
              "url": "https://www.nkbregovanta.com/services/iec-ad-code"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "CDSCO Free Sale (FSC), MSC, NCC & MD-42 Certificates",
              "url": "https://www.nkbregovanta.com/services/india/free-sale"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Cosmetics Regulatory Services (MoCRA, EU RP, CDSCO COS-1/2, CPSR)",
              "url": "https://www.nkbregovanta.com/industries/cosmetics"
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
