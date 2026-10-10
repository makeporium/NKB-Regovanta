import React, { useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Layers,
  HelpCircle,
} from "lucide-react";
import type { PageVisualContent, PageSectionItem, PageFaqItem } from "@/lib/services/pageContentService";

interface DynamicPageRendererProps {
  content: PageVisualContent;
  className?: string;
  isPreview?: boolean;
}

function decodeEntities(str: string | undefined): string {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

export function DynamicPageRenderer({ content, className = "", isPreview = false }: DynamicPageRendererProps) {
  const router = useRouter();
  const { hero, sections = [], faqs = [], ctaBanner, customHtml, fullHtmlOverride } = content;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isPreview) return;
    const target = (e.target as HTMLElement).closest("a");
    if (!target) return;
    const href = target.getAttribute("href");
    if (!href) return;

    if (
      href.startsWith("/") &&
      !href.startsWith("//") &&
      !target.getAttribute("target") &&
      !target.hasAttribute("download")
    ) {
      e.preventDefault();
      router.navigate({ to: href as any });
    }
  };

  if (
    fullHtmlOverride &&
    (content.contentMode === "code" || (!hero?.h1 && (!sections || sections.length === 0)))
  ) {
    return (
      <div
        className={`w-full min-h-screen bg-white text-slate-800 antialiased ${className}`}
        onClick={handleContainerClick}
        dangerouslySetInnerHTML={{ __html: fullHtmlOverride }}
      />
    );
  }

  return (
    <div className={`w-full min-h-screen bg-white text-slate-800 antialiased ${className}`}>
      {/* ── 1. HERO SECTION ─────────────────────────────────────────────── */}
      {hero && (hero.h1 || hero.lead || hero.badge) && (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-indigo-50/30 to-white py-16 sm:py-24 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`space-y-6 ${hero.image ? "lg:col-span-7" : "lg:col-span-12 max-w-4xl mx-auto text-center"}`}>
                {hero.badge && (
                  <div className={`inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3.5 py-1 text-xs font-bold text-[#0b3a96] border border-blue-200 shadow-2xs ${hero.image ? "" : "mx-auto"}`}>
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>{decodeEntities(hero.badge)}</span>
                  </div>
                )}

                {hero.h1 && (
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
                    {decodeEntities(hero.h1)}
                  </h1>
                )}

                {hero.lead && (
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
                    {decodeEntities(hero.lead)}
                  </p>
                )}

                {(hero.primaryCtaText || hero.secondaryCtaText) && (
                  <div className={`flex flex-wrap items-center gap-3 pt-2 ${hero.image ? "" : "justify-center"}`}>
                    {hero.primaryCtaText && (
                      <Link
                        to={hero.primaryCtaLink || "/contact"}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0b3a96] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition"
                      >
                        <span>{hero.primaryCtaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    {hero.secondaryCtaText && (
                      <Link
                        to={hero.secondaryCtaLink || "/insights"}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-2xs hover:bg-slate-50 transition"
                      >
                        <span>{hero.secondaryCtaText}</span>
                      </Link>
                    )}
                  </div>
                )}
              </div>

              {hero.image && (
                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-xl max-w-md w-full">
                    <img
                      src={hero.image}
                      alt={hero.h1 || "Page Feature Asset"}
                      className="w-full h-auto object-cover max-h-[420px]"
                      loading="eager"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── 2. DYNAMIC CONTENT SECTIONS ─────────────────────────────────── */}
      {sections.length > 0 && (
        <div className="divide-y divide-slate-100">
          {sections.map((sec, idx) => (
            <section key={sec.id || idx} className="py-16 sm:py-20">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Type: Two-Column Image + Text */}
                {sec.type === "two_col" && (
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${sec.imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}>
                    <div className={`space-y-4 ${sec.image ? (sec.imagePosition === "left" ? "lg:col-span-7 lg:order-2" : "lg:col-span-7") : "lg:col-span-12"}`}>
                      {sec.badge && (
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          {sec.badge}
                        </span>
                      )}
                      {sec.heading && (
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                          {sec.heading}
                        </h2>
                      )}
                      {sec.subheading && (
                        <p className="text-sm font-semibold text-slate-600">{sec.subheading}</p>
                      )}
                      {sec.bodyHtml && (
                        <div
                          className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: sec.bodyHtml }}
                        />
                      )}
                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="space-y-2 pt-2">
                          {sec.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {sec.image && (
                      <div className={`flex justify-center ${sec.imagePosition === "left" ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}`}>
                        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg w-full">
                          <img
                            src={sec.image}
                            alt={sec.imageAlt || sec.heading || "Section Media"}
                            className="w-full h-auto object-cover max-h-[380px]"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Type: Features Grid */}
                {sec.type === "features" && (
                  <div className="space-y-10">
                    <div className="max-w-3xl space-y-3">
                      {sec.badge && (
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                          {sec.badge}
                        </span>
                      )}
                      {sec.heading && (
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                          {sec.heading}
                        </h2>
                      )}
                      {sec.subheading && (
                        <p className="text-sm text-slate-600 leading-relaxed">{sec.subheading}</p>
                      )}
                    </div>

                    {sec.bullets && sec.bullets.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sec.bullets.map((bullet, fIdx) => (
                          <div
                            key={fIdx}
                            className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs hover:shadow-md hover:border-blue-300 transition space-y-2"
                          >
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#0b3a96] border border-blue-100">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="text-sm font-bold text-slate-900">{bullet}</h3>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Type: Key Stats */}
                {sec.type === "stats" && (sec.customHtml || (sec.stats && sec.stats.length > 0)) && (
                  sec.customHtml ? (
                    <div
                      className="w-full overflow-hidden"
                      dangerouslySetInnerHTML={{ __html: sec.customHtml }}
                    />
                  ) : (
                    <div className="space-y-8 text-center max-w-5xl mx-auto">
                      {sec.heading && (
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                          {sec.heading}
                        </h2>
                      )}
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                        {(sec.stats || []).map((st, sIdx) => (
                          <div key={sIdx} className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-1 text-center">
                            <div className="text-2xl font-black text-[#0b3a96]">{st.value}</div>
                            <div className="text-xs font-semibold text-slate-600">{st.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}

                {/* Type: Custom HTML */}
                {sec.type === "custom_html" && sec.customHtml && (
                  <div
                    className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white p-6"
                    dangerouslySetInnerHTML={{ __html: sec.customHtml }}
                  />
                )}

                {/* Type: Standard Content */}
                {(!sec.type || sec.type === "content") && (
                  <div className="max-w-4xl space-y-4">
                    {sec.badge && (
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        {sec.badge}
                      </span>
                    )}
                    {sec.heading && (
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        {sec.heading}
                      </h2>
                    )}
                    {sec.subheading && (
                      <p className="text-sm font-semibold text-slate-600">{sec.subheading}</p>
                    )}
                    {sec.bodyHtml && (
                      <div
                        className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sec.bodyHtml }}
                      />
                    )}
                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="space-y-2 pt-2">
                        {sec.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      )}

      {/* ── 3. FAQ ACCORDION BLOCK ──────────────────────────────────────── */}
      {faqs && faqs.length > 0 && (
        <section className="bg-slate-50/80 py-16 sm:py-20 border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center justify-center gap-1">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Frequently Asked Questions</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                Regulatory Answers &amp; Guidance
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-sm hover:text-blue-700 transition"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-blue-700" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── 4. CALL TO ACTION BANNER ────────────────────────────────────── */}
      {ctaBanner && ctaBanner.enabled !== false && (ctaBanner.heading || ctaBanner.description) && (
        <section className="bg-gradient-to-r from-[#0b3a96] to-indigo-900 py-16 sm:py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              {ctaBanner.heading || "Ready to Accelerate Global Regulatory Approvals?"}
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto leading-relaxed">
              {ctaBanner.description || "Speak directly with our senior MedTech regulatory consultants for strategic advisory."}
            </p>
            <div>
              <Link
                to={ctaBanner.buttonLink || "/contact"}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#0b3a96] shadow-xl hover:bg-blue-50 transition"
              >
                <span>{ctaBanner.buttonText || "Schedule Advisory Consultation"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── 5. CUSTOM HTML BOTTOM INJECTION ─────────────────────────────── */}
      {customHtml && (
        <div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8"
          dangerouslySetInnerHTML={{ __html: customHtml }}
        />
      )}
    </div>
  );
}
