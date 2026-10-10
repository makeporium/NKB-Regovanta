import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { QueryPopup } from "../components/site/QueryPopup";
import { Toaster } from "../components/ui/sonner";
import { toast } from "sonner";
import { WifiOff } from "lucide-react";
import { supabase } from "../lib/supabase";
import { settingsService } from "../lib/services/settingsService";
import { pageContentService, type PageVisualContent } from "../lib/services/pageContentService";
import { DynamicPageRenderer } from "../components/site/DynamicPageRenderer";

function NotFoundComponent() {
  const [dynamicContent, setDynamicContent] = useState<PageVisualContent | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") {
      setChecking(false);
      return;
    }
    const cleanPath = window.location.pathname.replace(/\/$/, "") || "/";
    pageContentService.getContent(cleanPath).then((content) => {
      if (content && (content.hero?.h1 || (content.sections && content.sections.length > 0) || (content.faqs && content.faqs.length > 0))) {
        setDynamicContent(content);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <div className="min-h-screen bg-white" />;
  }

  if (dynamicContent) {
    return <DynamicPageRenderer content={dynamicContent} />;
  }

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

import type { ErrorComponentProps } from "@tanstack/react-router";

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const err = error instanceof Error ? error : new Error(String(error || "Unknown error"));
  console.error(err);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(err, { boundary: "tanstack_root_error_component" });
  }, [err]);

  const isNetworkError =
    err?.message?.includes("Failed to fetch") ||
    err?.message?.includes("dynamically imported module") ||
    err?.message?.includes("Loading chunk") ||
    err?.name === "ChunkLoadError";

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {isNetworkError ? "Connection Slow or Interrupted" : "This page didn't load"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {isNetworkError
            ? "Your internet connection experienced a delay or packet drop while loading website resources."
            : "Something went wrong on our end. You can try refreshing or head back home."}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              if (isNetworkError) {
                window.location.reload();
              } else {
                router.invalidate();
                reset();
              }
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {isNetworkError ? "Reload page" : "Try again"}
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
  loader: () => settingsService.getAll(),
  head: ({ loaderData }) => ({
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
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "theme-color", content: "#0b3a96" },
      { property: "og:site_name", content: "NKB Regovanta" },
      ...(loaderData?.search_console_tag
        ? [{ name: "google-site-verification", content: loaderData.search_console_tag }]
        : []),
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
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Building No 20, Awadh Kunj, Faridi Nagar, CIMAP",
          "addressLocality": "Lucknow",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "226015",
          "addressCountry": "IN"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "16192 Coastal Highway",
          "addressLocality": "Lewes",
          "addressRegion": "Delaware",
          "postalCode": "19958",
          "addressCountry": "US"
        }
      ],
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
  const settings = Route.useLoaderData();
  const gtmId = /^GTM-[A-Z0-9]+$/i.test(settings.gtm_container_id) ? settings.gtm_container_id : "";
  const ga4Id = /^G-[A-Z0-9]+$/i.test(settings.ga4_measurement_id) ? settings.ga4_measurement_id : "";
  return (
    <html lang="en">
      <head>
        {gtmId && <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`,
          }}
        />}

        {ga4Id && <script async src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`} />}
        {ga4Id && <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
gtag('config', ${JSON.stringify(ga4Id)});`,
          }}
        />}

        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var l=localStorage.getItem("nkb_selected_lang");if(l==="ar"){document.documentElement.setAttribute("dir","rtl");document.documentElement.setAttribute("lang","ar");}}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
        />
      </head>
      <body>
        {gtmId && <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function ClientSeoManager() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;

    const cleanPath = pathname.replace(/\/$/, "") || "/";
    async function loadSeo() {
      try {
        const [{ data }, { data: schema }, { data: pageRow }] = await Promise.all([
          supabase
            .from("seo_meta")
            .select("seo_title, meta_description, canonical_url, og_title, og_description, twitter_title, twitter_description, robots_index, robots_follow")
            .eq("target_url", cleanPath)
            .maybeSingle(),
          supabase
            .from("schema_data")
            .select("custom_json, is_enabled")
            .eq("target_url", cleanPath)
            .maybeSingle(),
          supabase
            .from("pages")
            .select("h1")
            .eq("url_path", cleanPath)
            .maybeSingle(),
        ]);

        const targetCanonical = data?.canonical_url || `https://www.nkbregovanta.com${cleanPath}`;
        let canonicalEl = document.querySelector('link[rel="canonical"]');
        if (!canonicalEl) {
          canonicalEl = document.createElement("link");
          canonicalEl.setAttribute("rel", "canonical");
          document.head.appendChild(canonicalEl);
        }
        canonicalEl.setAttribute("href", targetCanonical);

        if (!data) return;

        const robotsMeta = document.querySelector('meta[name="robots"]');
        if (robotsMeta && data.robots_index && data.robots_follow) {
          robotsMeta.setAttribute("content", `${data.robots_index}, ${data.robots_follow}`);
        }

        if (data.seo_title) {
          document.title = decodeHtmlEntities(data.seo_title);
        }

        if (pageRow?.h1) {
          const h1El = document.querySelector("h1");
          const cleanH1 = decodeHtmlEntities(pageRow.h1.trim());
          if (h1El && h1El.textContent?.trim() !== cleanH1) {
            h1El.textContent = cleanH1;
          }
        }

        if (data.meta_description) {
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) {
            metaDesc.setAttribute("content", decodeHtmlEntities(data.meta_description));
          }
        }

        if (data.og_title || data.seo_title) {
          const ogTitle = document.querySelector('meta[property="og:title"]');
          if (ogTitle) {
            ogTitle.setAttribute("content", decodeHtmlEntities(data.og_title || data.seo_title));
          }
        }

        if (data.og_description || data.meta_description) {
          const ogDesc = document.querySelector('meta[property="og:description"]');
          if (ogDesc) {
            ogDesc.setAttribute("content", decodeHtmlEntities(data.og_description || data.meta_description));
          }
        }

        if (data.twitter_title || data.seo_title) {
          const twTitle = document.querySelector('meta[name="twitter:title"]');
          if (twTitle) {
            twTitle.setAttribute("content", decodeHtmlEntities(data.twitter_title || data.seo_title));
          }
        }

        if (data.twitter_description || data.meta_description) {
          const twDesc = document.querySelector('meta[name="twitter:description"]');
          if (twDesc) {
            twDesc.setAttribute("content", decodeHtmlEntities(data.twitter_description || data.meta_description));
          }
        }

        document.getElementById("admin-managed-schema")?.remove();
        if (schema?.is_enabled && schema.custom_json) {
          const raw = String(schema.custom_json).replace(/<script[^>]*>|<\/script>/gi, "").trim();
          JSON.parse(raw);
          const script = document.createElement("script");
          script.id = "admin-managed-schema";
          script.type = "application/ld+json";
          script.text = raw;
          document.head.appendChild(script);
        }
      } catch {
        // Silently continue if Supabase is offline
      }
    }

    loadSeo();

    const handleSeoChanged = () => {
      loadSeo();
    };

    window.addEventListener("nkb_seo_changed", handleSeoChanged);
    return () => {
      window.removeEventListener("nkb_seo_changed", handleSeoChanged);
    };
  }, [pathname]);

  return null;
}

function TopProgressBar() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" || s.isLoading });
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let t1: ReturnType<typeof setTimeout> | undefined;
    let t2: ReturnType<typeof setTimeout> | undefined;

    if (isLoading) {
      setVisible(true);
      setProgress(20);
      t1 = setTimeout(() => setProgress(50), 100);
      t2 = setTimeout(() => setProgress(80), 300);
    } else if (visible) {
      setProgress(100);
      timer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 250);
    }

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (timer) clearTimeout(timer);
    };
  }, [isLoading, visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[99999] pointer-events-none transition-all duration-300 ease-out"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #dca85b, #3b82f6, #0b3a96)",
        boxShadow: "0 0 10px rgba(11, 58, 150, 0.7)",
      }}
    />
  );
}

function NetworkStatusMonitor() {
  const [isOffline, setIsOffline] = useState(false);
  const isLoading = useRouterState({ select: (s) => s.status === "pending" || s.isLoading });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleOffline = () => {
      setIsOffline(true);
      toast.error("You are offline. Please check your internet connection.", {
        id: "offline-status",
        duration: 8000,
      });
    };

    const handleOnline = () => {
      setIsOffline(false);
      toast.success("Internet connection restored.", {
        id: "offline-status",
        duration: 4000,
      });
    };

    if (!navigator.onLine) {
      setIsOffline(true);
    }

    // Network Information API check for slow 2G/3G connections
    const conn = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    if (conn) {
      const checkSpeed = () => {
        if (conn.effectiveType === "slow-2g" || conn.effectiveType === "2g") {
          toast.warning("Slow internet detected. Pages and media may take longer to load.", {
            id: "slow-conn-notice",
            duration: 6000,
          });
        }
      };
      checkSpeed();
      conn.addEventListener?.("change", checkSpeed);
      window.addEventListener("offline", handleOffline);
      window.addEventListener("online", handleOnline);

      return () => {
        window.removeEventListener("offline", handleOffline);
        window.removeEventListener("online", handleOnline);
        conn.removeEventListener?.("change", checkSpeed);
      };
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);
    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Show helpful prompt if route navigation takes longer than 4 seconds
  useEffect(() => {
    if (!isLoading) return;
    const slowTimer = setTimeout(() => {
      toast.info("Connection seems slow. Loading page resources...", {
        id: "nav-slow-toast",
        duration: 4500,
      });
    }, 4000);

    return () => clearTimeout(slowTimer);
  }, [isLoading]);

  if (!isOffline) return null;

  return (
    <div className="fixed bottom-4 left-4 z-[99999] flex items-center gap-2.5 rounded-lg bg-red-600 px-4 py-2.5 text-xs font-semibold text-white shadow-xl animate-in slide-in-from-bottom-3 duration-300">
      <WifiOff className="h-4 w-4 animate-pulse shrink-0" />
      <span>You are offline. Please check your internet connection.</span>
    </div>
  );
}

function MainContentWrapper({ cleanPath }: { cleanPath: string }) {
  const isAdmin = cleanPath.startsWith("/admin");

  if (isAdmin) {
    return <Outlet />;
  }

  // 1. Check synchronous cache first (0ms latency)
  const syncContent = pageContentService.getSyncContent(cleanPath);
  const isOverriddenSync = pageContentService.isKeyOverriddenSync(cleanPath);

  const [overrideContent, setOverrideContent] = useState<PageVisualContent | null | undefined>(syncContent);
  const [isChecking, setIsChecking] = useState<boolean>(() => {
    if (syncContent !== undefined) return false;
    if (isOverriddenSync === false) return false;
    return true;
  });

  useEffect(() => {
    let active = true;

    // Listen for live cross-tab and in-window override changes (saves or reverts)
    const handleOverrideChanged = (e: Event) => {
      const customEvent = e as CustomEvent<{
        path: string;
        action: string;
        content?: PageVisualContent;
      }>;
      if (customEvent.detail && customEvent.detail.path === cleanPath) {
        if (customEvent.detail.action === "revert") {
          setOverrideContent(null);
          setIsChecking(false);
        } else if (customEvent.detail.action === "save" && customEvent.detail.content) {
          setOverrideContent(customEvent.detail.content);
          setIsChecking(false);
        }
      }
    };

    window.addEventListener("nkb_content_override_changed", handleOverrideChanged);

    // If synchronously confirmed to have no override, reset override state immediately
    if (isOverriddenSync === false) {
      setOverrideContent(null);
      setIsChecking(false);
    }

    // Always revalidate with fresh database check
    pageContentService.getContent(cleanPath, true).then((content) => {
      if (active) {
        if (content && ((content.sections && content.sections.length > 0) || content.fullHtmlOverride)) {
          setOverrideContent(content);
        } else {
          setOverrideContent(null);
        }
        setIsChecking(false);
      }
    });

    return () => {
      active = false;
      window.removeEventListener("nkb_content_override_changed", handleOverrideChanged);
    };
  }, [cleanPath, isOverriddenSync]);

  if (overrideContent && ((overrideContent.sections && overrideContent.sections.length > 0) || overrideContent.fullHtmlOverride)) {
    return <DynamicPageRenderer content={overrideContent} />;
  }

  // If this route is known to be overridden and is loading the override, don't flash the original page first!
  if (isChecking && isOverriddenSync === true) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#0b3a96] border-t-transparent" />
      </div>
    );
  }

  return <Outlet />;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const cleanPath = pathname.replace(/\/$/, "") || "/";
  const isAdmin = pathname.startsWith("/admin");

  useEffect(() => {
    // Preload known page overrides on app boot for 0ms transitions
    pageContentService.initKnownKeys();
  }, []);

  useEffect(() => {
    // Automatically recover from temporary network glitches or stale chunk preloads
    const handlePreloadError = () => {
      const key = "nkb_preload_retry";
      const lastRetry = sessionStorage.getItem(key);
      const now = Date.now();
      if (!lastRetry || now - parseInt(lastRetry, 10) > 15000) {
        sessionStorage.setItem(key, now.toString());
        window.location.reload();
      }
    };

    window.addEventListener("vite:preloadError", handlePreloadError);
    return () => window.removeEventListener("vite:preloadError", handlePreloadError);
  }, []);

  if (isAdmin) {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-blue-500 selection:text-white">
          <Outlet />
        </div>
        <Toaster position="top-right" richColors />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TopProgressBar />
      <NetworkStatusMonitor />
      <ClientSeoManager />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* Renders dynamic content override if active; otherwise renders original React route */}
          <MainContentWrapper key={cleanPath} cleanPath={cleanPath} />
        </main>
        <Footer />
        <QueryPopup />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
