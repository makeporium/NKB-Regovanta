import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Target,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  HelpCircle,
  HelpCircle as QuestionIcon,
  Scale,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/predicate-strategy")({
  head: () => ({
    meta: [
      { title: "Predicate & Substantial Equivalence Strategy | FDA 510(k) | NKB Regovanta" },
      {
        name: "description",
        content:
          "Expert FDA predicate device selection and substantial equivalence strategy. Bridge technological differences with robust performance evidence to withstand FDA review.",
      },
      {
        name: "keywords",
        content:
          "FDA predicate device, substantial equivalence strategy, 510k predicate selection, technological differences FDA, predicate comparison table, NKB Regovanta",
      },
      { property: "og:title", content: "Predicate & Substantial Equivalence Strategy | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We evaluate whether a proposed predicate can withstand FDA's substantial equivalence analysis and build the evidence required to bridge differences.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/predicate-strategy" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Predicate & Substantial Equivalence Strategy | FDA 510(k) | NKB Regovanta" },
      { name: "twitter:description", content: "Expert FDA predicate device selection and substantial equivalence strategy. Bridge technological differences with robust performance evidence to withstand FDA review." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/predicate-strategy" }],
  }),
  component: PredicateStrategyPage,
});

function PredicateStrategyPage() {
  const whenNeeded = [
    "Before a new 510(k) submission is developed",
    "When multiple potential predicates exist",
    "When the subject device contains meaningful technological differences",
    "When a previous predicate strategy has been questioned by FDA",
    "When the manufacturer needs to understand what evidence will be required to bridge differences",
  ];

  const suitabilityCriteria = [
    "Regulation number, product code and classification",
    "Intended use and indications for use",
    "Patient population and anatomical site",
    "Operating principle, materials and energy source",
    "Software functionality and key technology features",
    "Performance characteristics and specifications",
    "Sterilization and patient-contact characteristics",
    "FDA decision summaries, guidance and consensus standards",
    "Performance evidence needed to address differences",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Predicate & Substantial Equivalence Strategy",
              url: "https://www.nkbregovanta.com/services/usa/predicate-strategy",
              description:
                "FDA 510(k) predicate device evaluation, substantial equivalence justification, and performance evidence bridging.",
              provider: {
                "@type": "ProfessionalService",
                name: "NKB Regovanta Solutions Pvt. Ltd.",
                url: "https://www.nkbregovanta.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nkbregovanta.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.nkbregovanta.com/services" },
                { "@type": "ListItem", position: 3, name: "USA FDA", item: "https://www.nkbregovanta.com/services/usa" },
                { "@type": "ListItem", position: 4, name: "Predicate Strategy", item: "https://www.nkbregovanta.com/services/usa/predicate-strategy" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/usa" className="hover:text-navy transition-colors">USA FDA</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Predicate &amp; Substantial Equivalence</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="h-3.5 w-3.5" /> Substantial Equivalence Foundation
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Predicate &amp; Substantial Equivalence Strategy
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We evaluate whether a proposed predicate can withstand FDA's substantial equivalence analysis, then trace every meaningful technological difference into the evidence needed to support it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Discuss Your Predicate Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* What This Service Is */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <Target className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  Predicate selection is not simply a search for the most commercially similar cleared device. A defensible predicate strategy must align intended use, technological characteristics and supporting performance evidence in a way that can sustain FDA review.
                </p>
              </div>

              {/* When It Is Needed */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When It Is Needed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whenNeeded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-gray-200/70 hover:bg-blue-50/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13.5px] text-navy/80 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Assess Predicate Suitability */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  How We Assess Predicate Suitability
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {suitabilityCriteria.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[13px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Regulatory Question */}
              <div className="p-7 rounded-2xl bg-blue-50/70 border border-blue-200">
                <div className="flex items-center gap-2.5 mb-2 text-[#0b3a96]">
                  <QuestionIcon className="h-5 w-5" />
                  <h4 className="text-base font-extrabold text-navy">Our Regulatory Question</h4>
                </div>
                <p className="text-[14.5px] text-navy/90 leading-relaxed font-semibold italic">
                  &ldquo;For every meaningful difference, we ask: Does this difference raise a different question of safety or effectiveness? If not, what evidence is needed to demonstrate that the difference can be appropriately bridged?&rdquo;
                </p>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Defensible Argument &amp; Evidence Plan
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  The objective is not to find the closest-looking device. It is to identify a predicate that supports a coherent, defensible regulatory argument and evidence plan.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Predicate Hierarchy
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Primary Predicate (Same intended use &amp; tech)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Reference Devices (Scientific support for tech differences)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Multiple Predicates (When justified by FDA guidance)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Evaluate Your Predicate Options</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Avoid 510(k) hold letters with an ironclad substantial equivalence strategy.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Discuss Predicate Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Need to Verify Your Predicate Strategy?"
        description="Our senior FDA consultants will audit your predicate choices and substantial equivalence arguments."
      />
    </>
  );
}
