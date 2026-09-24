import { useEffect, useState, useRef } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import {
  SUPPORTED_LANGUAGES,
  getStoredLanguage,
  setLanguage,
  initTranslationEngine,
  type LanguageOption,
} from "@/lib/translation";

interface LanguageSwitcherProps {
  variant?: "header" | "mobile" | "footer";
  className?: string;
}

export function LanguageSwitcher({ variant = "header", className = "" }: LanguageSwitcherProps) {
  const [currentLang, setCurrentLang] = useState<string>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize translation engine on client mount
    initTranslationEngine();
    setCurrentLang(getStoredLanguage());

    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setCurrentLang(customEvent.detail);
      }
    };

    window.addEventListener("nkb_language_change", handleLangChange);

    // Close dropdown on outside click
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("nkb_language_change", handleLangChange);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeLangOption: LanguageOption =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) ??
    SUPPORTED_LANGUAGES[0] ?? {
      code: "en",
      name: "English",
      nativeName: "English",
      flag: "🇬🇧",
      dir: "ltr",
      region: "Global / US / UK / AU",
    };

  const handleSelectLanguage = (lang: LanguageOption) => {
    setIsOpen(false);
    if (lang.code !== currentLang) {
      setCurrentLang(lang.code);
      setLanguage(lang.code);
    }
  };

  // Mobile layout rendering
  if (variant === "mobile") {
    return (
      <div className={`py-3.5 border-t border-border flex items-center justify-between gap-3 ${className}`}>
        <div className="flex items-center gap-2 text-xs font-bold text-navy">
          <Globe className="h-4 w-4 text-[#0b3a96] shrink-0" />
          <span>Language / اللغة</span>
        </div>
        <div className="relative">
          <select
            value={currentLang}
            onChange={(e) => {
              const selected = SUPPORTED_LANGUAGES.find((l) => l.code === e.target.value);
              if (selected) handleSelectLanguage(selected);
            }}
            aria-label="Select website language"
            className="appearance-none bg-slate-50 hover:bg-slate-100 text-navy font-bold text-xs py-2 pl-3 pr-8 rounded-lg border border-gray-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0b3a96]/40 transition-colors shadow-2xs"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.nativeName} ({lang.name})
              </option>
            ))}
          </select>
          <ChevronDown className="h-3.5 w-3.5 text-navy/60 pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    );
  }

  // Footer layout rendering
  if (variant === "footer") {
    return (
      <div className={`relative inline-block ${className}`} ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/20 bg-white/10 hover:bg-white/15 text-xs text-white transition-colors"
          aria-expanded={isOpen}
          aria-label="Change language"
        >
          <Globe className="h-3.5 w-3.5 text-blue-300" />
          <span>{activeLangOption.flag}</span>
          <span className="font-medium">{activeLangOption.nativeName}</span>
          <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute bottom-full mb-2 left-0 w-64 rounded-xl border border-gray-200 bg-white shadow-2xl p-2 z-50 text-slate-800">
            <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 py-1 mb-1">
              Select Regional Language
            </div>
            <div className="space-y-1 max-h-72 overflow-y-auto pr-1">
              {SUPPORTED_LANGUAGES.map((lang) => {
                const isSelected = lang.code === currentLang;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang)}
                    className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors ${
                      isSelected
                        ? "bg-blue-50 text-[#0b3a96] font-bold"
                        : "hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <span className="font-semibold">{lang.nativeName}</span>
                      <span className="text-[10.5px] text-gray-400">({lang.name})</span>
                    </div>
                    {isSelected && <Check className="h-3.5 w-3.5 text-[#0b3a96]" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default Desktop Header layout
  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-gray-200/80 bg-slate-50 hover:bg-slate-100/90 text-xs font-semibold text-slate-700 hover:text-navy transition-all shadow-2xs hover:border-gray-300"
        aria-expanded={isOpen}
        aria-label="Language selector"
      >
        <Globe className="h-3.5 w-3.5 text-[#0b3a96]" />
        <span className="text-sm leading-none">{activeLangOption.flag}</span>
        <span className="font-bold text-[12px] leading-tight text-slate-800">
          {activeLangOption.code.toUpperCase()}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-slate-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-gray-200 bg-white shadow-2xl p-2.5 z-50 text-slate-800 animate-in fade-in-50 zoom-in-95 duration-150">
          <div className="flex items-center justify-between px-2.5 py-1.5 mb-1.5 border-b border-gray-100">
            <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#0b3a96]">
              Regional Languages
            </span>
            <span className="text-[10px] text-gray-400 font-medium">All 265+ Pages</span>
          </div>

          <div className="space-y-1 max-h-[420px] overflow-y-auto pr-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelectLanguage(lang)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-all ${
                    isSelected
                      ? "bg-blue-50/80 text-[#0b3a96] font-bold border border-blue-100"
                      : "hover:bg-slate-50 text-slate-700 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2.5 text-left">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div>
                      <div className="flex items-center gap-1.5 leading-tight">
                        <span className="font-bold text-[12.5px] text-slate-800">
                          {lang.nativeName}
                        </span>
                        <span className="text-[11px] text-slate-400 font-normal">
                          • {lang.name}
                        </span>
                      </div>
                      <span className="text-[9.5px] text-slate-500 leading-tight block mt-0.5 font-normal">
                        {lang.region}
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="h-4 w-4 text-[#0b3a96] shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="mt-2 pt-2 border-t border-gray-100 px-2 py-1 bg-slate-50/80 rounded-xl text-[10px] text-gray-500 flex items-center justify-between">
            <span>Automatic Arabic RTL supported</span>
            <span className="text-[9px] font-bold text-[#0b7261]">Instant Translation</span>
          </div>
        </div>
      )}
    </div>
  );
}
