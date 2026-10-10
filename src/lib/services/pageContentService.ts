import { supabase } from "@/lib/supabase";

export interface PageSectionItem {
  id: string;
  type: "content" | "two_col" | "features" | "stats" | "custom_html";
  badge?: string;
  heading?: string;
  subheading?: string;
  bodyHtml?: string;
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  stats?: Array<{ label: string; value: string }>;
  customHtml?: string;
}

export interface PageFaqItem {
  q: string;
  a: string;
}

export interface PageVisualContent {
  hero?: {
    badge?: string | undefined;
    h1?: string | undefined;
    lead?: string | undefined;
    primaryCtaText?: string | undefined;
    primaryCtaLink?: string | undefined;
    secondaryCtaText?: string | undefined;
    secondaryCtaLink?: string | undefined;
    image?: string | undefined;
  } | undefined;
  sections?: PageSectionItem[] | undefined;
  faqs?: PageFaqItem[] | undefined;
  ctaBanner?: {
    enabled?: boolean | undefined;
    heading?: string | undefined;
    description?: string | undefined;
    buttonText?: string | undefined;
    buttonLink?: string | undefined;
  } | undefined;
  customHtml?: string | undefined;
  fullHtmlOverride?: string | undefined;
  contentMode?: "visual" | "code" | undefined;
  updated_at?: string | undefined;
}

export function normalizeUrlPath(urlPath: string): string {
  if (!urlPath) return "/";
  let clean = urlPath.trim();
  if (!clean.startsWith("/")) clean = "/" + clean;
  if (clean.length > 1 && clean.endsWith("/")) clean = clean.slice(0, -1);
  return clean;
}

export function getContentKey(urlPath: string): string {
  return `page_content:${normalizeUrlPath(urlPath)}`;
}

// In-memory cache for dynamic page overrides
const contentCache = new Map<string, PageVisualContent | null>();
let knownOverriddenKeys: Set<string> | null = null;
let knownKeysPromise: Promise<Set<string>> | null = null;

// Cross-tab broadcast channel
let contentBroadcastChannel: BroadcastChannel | null = null;
if (typeof window !== "undefined" && typeof BroadcastChannel !== "undefined") {
  try {
    contentBroadcastChannel = new BroadcastChannel("nkb_page_content_sync");
    contentBroadcastChannel.onmessage = (event) => {
      const data = event.data;
      if (data && data.path) {
        const cleanPath = normalizeUrlPath(data.path);
        const key = getContentKey(cleanPath);
        if (data.action === "revert") {
          contentCache.set(key, null);
          if (knownOverriddenKeys) knownOverriddenKeys.delete(key);
          try {
            localStorage.removeItem(`nkb_${key}`);
            sessionStorage.removeItem(`nkb_${key}`);
          } catch {
            // ignore
          }
        } else if (data.action === "save" && data.content) {
          contentCache.set(key, data.content);
          if (knownOverriddenKeys) knownOverriddenKeys.add(key);
        }
        window.dispatchEvent(
          new CustomEvent("nkb_content_override_changed", {
            detail: { path: cleanPath, action: data.action, content: data.content },
          })
        );
      }
    };
  } catch {
    // ignore
  }
}

function broadcastContentSync(
  urlPath: string,
  action: "revert" | "save",
  content?: PageVisualContent
) {
  const cleanPath = normalizeUrlPath(urlPath);
  if (typeof window !== "undefined") {
    try {
      if (contentBroadcastChannel) {
        contentBroadcastChannel.postMessage({ path: cleanPath, action, content });
      }
      window.dispatchEvent(
        new CustomEvent("nkb_content_override_changed", {
          detail: { path: cleanPath, action, content },
        })
      );
    } catch {
      // ignore
    }
  }
}

// Immediately initialize known overridden keys from localStorage/sessionStorage if present
if (typeof window !== "undefined") {
  try {
    const stored =
      localStorage.getItem("nkb_overridden_page_keys") ||
      sessionStorage.getItem("nkb_overridden_page_keys");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        knownOverriddenKeys = new Set(parsed);
      }
    }
  } catch {
    // ignore
  }
}

export const pageContentService = {
  /**
   * Synchronously get cached content if available in memory, localStorage, or sessionStorage
   */
  getSyncContent(urlPath: string): PageVisualContent | null | undefined {
    const cleanPath = normalizeUrlPath(urlPath);
    const key = getContentKey(cleanPath);

    // If known keys list is initialized and this key is confirmed NOT in it, return null immediately
    if (knownOverriddenKeys && !knownOverriddenKeys.has(key)) {
      return null;
    }

    if (contentCache.has(key)) {
      return contentCache.get(key) || null;
    }
    if (typeof window !== "undefined") {
      try {
        const stored =
          localStorage.getItem(`nkb_${key}`) || sessionStorage.getItem(`nkb_${key}`);
        if (stored) {
          const parsed: PageVisualContent = JSON.parse(stored);
          contentCache.set(key, parsed);
          return parsed;
        }
      } catch {
        // ignore
      }
    }
    return undefined;
  },

  /**
   * Check synchronously if a URL path is known to have an override
   * Returns true (has override), false (definitely no override), or undefined (unknown yet)
   */
  isKeyOverriddenSync(urlPath: string): boolean | undefined {
    if (!knownOverriddenKeys) return undefined;
    const cleanPath = normalizeUrlPath(urlPath);
    const key = getContentKey(cleanPath);
    return knownOverriddenKeys.has(key);
  },

  /**
   * Self-healing pre-fetch of all known overridden page keys on application load.
   * Reconciles local storage against database and purges any deleted/stale overrides.
   */
  async initKnownKeys(forceRefresh = false): Promise<Set<string>> {
    if (!forceRefresh && knownKeysPromise) return knownKeysPromise;

    knownKeysPromise = (async () => {
      try {
        const { data, error } = await supabase
          .from("settings")
          .select("key")
          .like("key", "page_content:%");

        if (error || !data) {
          return knownOverriddenKeys || new Set();
        }

        const freshKeys = new Set(data.map((r) => r.key));

        // Self-heal: purge any stale entries from localStorage and sessionStorage
        if (typeof window !== "undefined") {
          try {
            if (knownOverriddenKeys) {
              for (const oldKey of knownOverriddenKeys) {
                if (!freshKeys.has(oldKey)) {
                  localStorage.removeItem(`nkb_${oldKey}`);
                  sessionStorage.removeItem(`nkb_${oldKey}`);
                  contentCache.set(oldKey, null);
                  const pathPart = oldKey.replace(/^page_content:/, "");
                  broadcastContentSync(pathPart, "revert");
                }
              }
            }

            // Also check all localStorage keys starting with nkb_page_content:
            for (let i = 0; i < localStorage.length; i++) {
              const k = localStorage.key(i);
              if (k && k.startsWith("nkb_page_content:")) {
                const subKey = k.replace(/^nkb_/, "");
                if (!freshKeys.has(subKey)) {
                  localStorage.removeItem(k);
                  contentCache.set(subKey, null);
                  const pathPart = subKey.replace(/^page_content:/, "");
                  broadcastContentSync(pathPart, "revert");
                }
              }
            }

            const rawKeys = JSON.stringify(Array.from(freshKeys));
            localStorage.setItem("nkb_overridden_page_keys", rawKeys);
            sessionStorage.setItem("nkb_overridden_page_keys", rawKeys);
          } catch {
            // ignore
          }
        }

        knownOverriddenKeys = freshKeys;
        return freshKeys;
      } catch {
        return knownOverriddenKeys || new Set();
      } finally {
        knownKeysPromise = null;
      }
    })();

    return knownKeysPromise;
  },

  /**
   * Fetch saved visual content from Supabase settings for a specific URL path
   */
  async getContent(urlPath: string, forceFresh = false): Promise<PageVisualContent | null> {
    const cleanPath = normalizeUrlPath(urlPath);
    const key = getContentKey(cleanPath);

    // If known keys list is initialized and definitely does NOT have this key, return null immediately
    if (knownOverriddenKeys && !knownOverriddenKeys.has(key)) {
      contentCache.set(key, null);
      if (typeof window !== "undefined") {
        try {
          localStorage.removeItem(`nkb_${key}`);
          sessionStorage.removeItem(`nkb_${key}`);
        } catch {
          // ignore
        }
      }
      return null;
    }

    // Return from in-memory cache if already loaded and not force-fresh
    if (!forceFresh && contentCache.has(key)) {
      const cached = contentCache.get(key);
      if (cached !== undefined) return cached;
    }

    try {
      const { data, error } = await supabase
        .from("settings")
        .select("value")
        .eq("key", key)
        .maybeSingle();

      if (error || !data?.value) {
        contentCache.set(key, null);
        if (knownOverriddenKeys) knownOverriddenKeys.delete(key);
        if (typeof window !== "undefined") {
          try {
            localStorage.removeItem(`nkb_${key}`);
            sessionStorage.removeItem(`nkb_${key}`);
            if (knownOverriddenKeys) {
              const raw = JSON.stringify(Array.from(knownOverriddenKeys));
              localStorage.setItem("nkb_overridden_page_keys", raw);
              sessionStorage.setItem("nkb_overridden_page_keys", raw);
            }
          } catch {
            // ignore
          }
        }
        return null;
      }

      const parsed: PageVisualContent = JSON.parse(data.value);
      contentCache.set(key, parsed);
      if (knownOverriddenKeys) knownOverriddenKeys.add(key);

      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(`nkb_${key}`, data.value);
          sessionStorage.setItem(`nkb_${key}`, data.value);
          if (knownOverriddenKeys) {
            const raw = JSON.stringify(Array.from(knownOverriddenKeys));
            localStorage.setItem("nkb_overridden_page_keys", raw);
            sessionStorage.setItem("nkb_overridden_page_keys", raw);
          }
        } catch {
          // ignore
        }
      }

      return parsed;
    } catch (err) {
      console.warn("Could not load dynamic page content for", urlPath, err);
      return null;
    }
  },

  /**
   * Save visual page content to Supabase settings, and update related schema_data
   */
  async saveContent(
    urlPath: string,
    content: PageVisualContent
  ): Promise<{ success: boolean; error?: string }> {
    try {
      const cleanPath = normalizeUrlPath(urlPath);
      const key = getContentKey(cleanPath);
      const payload: PageVisualContent = {
        ...content,
        updated_at: new Date().toISOString(),
      };

      const jsonStr = JSON.stringify(payload);

      // 1. Save dynamic content in settings table
      const { error: settingsErr } = await supabase.from("settings").upsert(
        {
          key,
          value: jsonStr,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "key" }
      );

      if (settingsErr) throw settingsErr;

      // Update client caches immediately
      contentCache.set(key, payload);
      if (knownOverriddenKeys) {
        knownOverriddenKeys.add(key);
      }
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem(`nkb_${key}`, jsonStr);
          sessionStorage.setItem(`nkb_${key}`, jsonStr);
          if (knownOverriddenKeys) {
            const rawKeys = JSON.stringify(Array.from(knownOverriddenKeys));
            localStorage.setItem("nkb_overridden_page_keys", rawKeys);
            sessionStorage.setItem("nkb_overridden_page_keys", rawKeys);
          }
        } catch {
          // ignore
        }
      }

      // Broadcast live sync
      broadcastContentSync(cleanPath, "save", payload);

      // 2. If FAQs exist, automatically generate and sync Google FAQ Schema into schema_data
      if (content.faqs && content.faqs.length > 0) {
        const faqEntities = content.faqs
          .filter((f) => f.q?.trim() && f.a?.trim())
          .map((f) => ({
            "@type": "Question",
            name: f.q.trim(),
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a.trim(),
            },
          }));

        if (faqEntities.length > 0) {
          const faqSchemaGraph = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqEntities,
          };

          await supabase.from("schema_data").upsert(
            {
              target_url: cleanPath,
              schema_type: "FAQPage",
              is_enabled: true,
              custom_json: JSON.stringify(faqSchemaGraph, null, 2),
              faq_items: content.faqs,
              updated_at: new Date().toISOString(),
            },
            { onConflict: "target_url" }
          );
        }
      }

      return { success: true };
    } catch (err: any) {
      console.error("Failed to save dynamic page content:", err);
      return { success: false, error: err.message || "Failed to save page content" };
    }
  },

  /**
   * Completely clear dynamic visual content override for a URL from Supabase,
   * localStorage, sessionStorage, in-memory cache, and broadcast to all live tabs.
   */
  async deleteContent(urlPath: string): Promise<boolean> {
    try {
      const cleanPath = normalizeUrlPath(urlPath);
      const key = getContentKey(cleanPath);

      // 1. Delete from database
      const { error } = await supabase.from("settings").delete().eq("key", key);

      // 2. Clear in-memory caches
      contentCache.set(key, null);
      if (knownOverriddenKeys) {
        knownOverriddenKeys.delete(key);
      }

      // 3. Clear localStorage and sessionStorage thoroughly
      if (typeof window !== "undefined") {
        try {
          localStorage.removeItem(`nkb_${key}`);
          sessionStorage.removeItem(`nkb_${key}`);
          localStorage.removeItem(`nkb_page_content:${urlPath}`);
          sessionStorage.removeItem(`nkb_page_content:${urlPath}`);
          localStorage.removeItem(`nkb_page_content:${cleanPath}`);
          sessionStorage.removeItem(`nkb_page_content:${cleanPath}`);

          if (knownOverriddenKeys) {
            const raw = JSON.stringify(Array.from(knownOverriddenKeys));
            localStorage.setItem("nkb_overridden_page_keys", raw);
            sessionStorage.setItem("nkb_overridden_page_keys", raw);
          }
        } catch {
          // ignore
        }
      }

      // 4. Broadcast revert to all active tabs and components
      broadcastContentSync(cleanPath, "revert");

      return !error;
    } catch {
      return false;
    }
  },
};
