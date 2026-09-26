// ─────────────────────────────────────────────────────────────
// Multi-Language Translation Engine (Client-Side Headless Layer)
// Supports: English, Arabic (RTL), French, Portuguese, German, Spanish, Hindi, Chinese, Japanese, Korean
// ─────────────────────────────────────────────────────────────

export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: "ltr" | "rtl";
  region: string;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧", dir: "ltr", region: "Global / US / UK / AU" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦", dir: "rtl", region: "Saudi Arabia (SFDA) & UAE (MOHAP)" },
  { code: "zh-CN", name: "Chinese", nativeName: "中文", flag: "🇨🇳", dir: "ltr", region: "China (NMPA) / East Asia" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", dir: "ltr", region: "Japan (PMDA / MHLW)" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷", dir: "ltr", region: "South Korea (MFDS)" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷", dir: "ltr", region: "Canada (Health Canada) & EU" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷", dir: "ltr", region: "Brazil (ANVISA)" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪", dir: "ltr", region: "Germany / EU (MDR/IVDR)" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸", dir: "ltr", region: "Spain / EU & Latin America" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", dir: "ltr", region: "India (CDSCO)" },
];

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: {
          new (options: unknown, elementId: string): unknown;
          InlineLayout?: {
            SIMPLE?: number;
          };
        };
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

const STORAGE_KEY = "nkb_selected_lang";

export function getStoredLanguage(): string {
  if (typeof window === "undefined") return "en";
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.some((l) => l.code === stored)) {
      return stored;
    }
    // Check googtrans cookie if localStorage was empty
    const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([a-zA-Z\-]{2,10})/);
    if (match && match[1] && SUPPORTED_LANGUAGES.some((l) => l.code === match[1])) {
      return match[1];
    }
  } catch {
    // Ignore error
  }
  return "en";
}

let isInitialized = false;

export function initTranslationEngine() {
  if (typeof window === "undefined" || isInitialized) return;
  isInitialized = true;

  // Restore RTL or LTR immediately on load based on stored language
  const currentLang = getStoredLanguage();
  applyDocumentDirection(currentLang);

  // Ensure translation target div exists in DOM
  let container = document.getElementById("google_translate_element");
  if (!container) {
    container = document.createElement("div");
    container.id = "google_translate_element";
    container.style.display = "none";
    document.body.appendChild(container);
  }

  // Register the global callback expected by Google Translate
  window.googleTranslateElementInit = () => {
    try {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: SUPPORTED_LANGUAGES.map((l) => l.code).join(","),
            autoDisplay: false,
          },
          "google_translate_element"
        );
      }
    } catch (e) {
      console.warn("Translation initialization error:", e);
    }
  };

  // Only inject the script if not already present
  if (!document.getElementById("google-translate-script")) {
    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.type = "text/javascript";
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.onerror = () => {
      // Silently catch blocking by privacy extensions (e.g. uBlock, German firewalls)
      console.warn("Translation service unreachable or blocked by client privacy settings.");
    };
    document.body.appendChild(script);
  }
}

export function applyDocumentDirection(langCode: string) {
  if (typeof document === "undefined") return;
  const langConfig = SUPPORTED_LANGUAGES.find((l) => l.code === langCode);
  const dir = langConfig?.dir || "ltr";
  document.documentElement.setAttribute("dir", dir);
  document.documentElement.setAttribute("lang", langCode);
}

export function setLanguage(langCode: string): void {
  if (typeof window === "undefined") return;

  const currentLang = getStoredLanguage();
  if (currentLang === langCode) return;

  const hostname = window.location.hostname;
  const isEn = langCode === "en";

  try {
    localStorage.setItem(STORAGE_KEY, langCode);
  } catch {
    // Ignore storage issues
  }

  applyDocumentDirection(langCode);

  // Clear or set the googtrans cookie across all host/domain boundaries
  const domains = [
    "",
    `; domain=${hostname}`,
    `; domain=.${hostname}`,
    `; domain=.${hostname.replace(/^www\./, "")}`,
  ];

  if (isEn) {
    // Delete cookie to return to native English
    domains.forEach((d) => {
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/${d};`;
    });
  } else {
    // Set cookie for target language
    domains.forEach((d) => {
      document.cookie = `googtrans=/en/${langCode}; path=/${d};`;
    });
  }

  // Dispatch custom event for UI updates
  window.dispatchEvent(new CustomEvent("nkb_language_change", { detail: langCode }));

  // Try to find the Google Translate hidden combo and trigger change event
  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
  } else {
    // If widget not ready or returning to English from cache, reload to apply cookie cleanly
    window.location.reload();
  }
}
