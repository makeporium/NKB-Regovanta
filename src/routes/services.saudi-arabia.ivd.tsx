import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Shield,
  FileText,
  Building2,
  Activity,
  Layers,
  FlaskConical,
  Award,
  RefreshCw,
  TrendingUp,
  Cpu,
  Sparkles,
  Check,
  Stethoscope,
  Microscope,
  Clock,
  HelpCircle,
  FileCheck2,
  AlertTriangle,
  Scale,
  Globe2,
  UserCheck,
  Package,
  Truck,
  FileCode,
  Syringe,
  Pill,
  BarChart3,
  Landmark,
  Network,
  Factory,
  Monitor,
  Target,
  Users,
  Settings,
  ShieldAlert,
  Handshake,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/saudi-arabia/ivd")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA IVD Registration & Performance Evidence (Class A-D) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "In Vitro Diagnostic (IVD) marketing authorization with SFDA. Class A, B, C, D classification, analytical and clinical performance evidence, stability studies, Arabic labeling, and GHAD submission.",
      },
      { name: "keywords", content: "SFDA IVD Registration & Performance Evidence (Class A-D), services saudi arabia ivd, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "SFDA IVD Registration & Performance Evidence (Class A-D) | NKB Regovanta" },
      { property: "og:description", content: "In Vitro Diagnostic (IVD) marketing authorization with SFDA. Class A, B, C, D classification, analytical and clinical performance evidence, stability studies, Arabic labeling, and GHAD submission." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia/ivd" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SFDA IVD Registration & Performance Evidence (Class A-D) | NKB Regovanta" },
      { name: "twitter:description", content: "In Vitro Diagnostic (IVD) marketing authorization with SFDA. Class A, B, C, D classification, analytical and clinical performance evidence, stability studies, Arabic labeling, and GHAD submission." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/ivd" }],
  }),
  component: SaudiIVDPage,
});

function SaudiIVDPage() {
  const triggers = [
    "Commercializing a new Class A, B, C, or D in vitro diagnostic (IVD) medical device in Saudi Arabia",
    "Transitioning an existing CE-marked (IVDR) or FDA-cleared diagnostic test to the SFDA GHAD portal",
    "Expanding clinical intended uses, specimen types, diagnostic cut-offs, or target patient populations",
    "Addressing an SFDA technical deficiency regarding analytical sensitivity, specificity, or clinical accuracy",
  ];

  const supportItems = [
    "IVD qualification and Class A, B, C, and D risk classification under SFDA rules",
    "Intended clinical purpose, analyte/biomarker, specimen type, and assay format review",
    "Performance-evidence gap assessment against SFDA technical guidance",
    "Analytical sensitivity and Limit of Detection (LoD) / Limit of Quantitation (LoQ) evaluation",
    "Analytical specificity, cross-reactivity, and endogenous/exogenous interference evaluation",
    "Accuracy / trueness and precision (repeatability and intermediate precision) testing review",
    "Measuring range, linearity, and high-dose hook effect documentation",
    "Cut-off determination and clinical decision threshold statistical justification",
    "Specimen stability, transport stability, and in-use / open-vial reagent stability studies",
    "Clinical sensitivity, clinical specificity, and diagnostic concordance evaluation",
    "Comparator method and gold standard reference method justification",
    "Clinical performance study protocol authoring and laboratory coordination",
    "Bilingual Arabic and English IVD labeling, packaging artwork, and package insert review",
    "Post-market performance monitoring, vigilance, and diagnostic variation assessment",
  ];

  const challenges = [
    "Are the specimen types (e.g. serum, plasma, capillary blood, saliva) validated in performance studies identical to label claims?",
    "Do diagnostic sensitivity and specificity claims derive from a statistically powered, representative clinical cohort?",
    "Are analytical cut-offs, cross-reactivity panels, and common interferents fully documented with raw data?",
    "Does the clinical evidence support every intended-use clinical setting (point-of-care, self-test, central lab)?",
    "Are reagent stability, calibrator traceability, and control values defended under Saudi climate storage conditions?",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-teal-50/30 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/saudi-arabia" className="hover:text-navy transition-colors">Saudi Arabia</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">IVD Registration</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Class A-D In Vitro Diagnostics
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              IVD Registration &amp; Performance Evidence (SFDA)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              IVDs Require a Dedicated Performance-Evidence Strategy. SFDA classifies IVD medical devices as Class A, B, C or D based on individual and public-health risk. The regulatory strategy should connect the intended purpose, analyte or marker, specimen type, target population, classification, analytical performance, clinical performance and post-market obligations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your Saudi IVD Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* When This Is Needed */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">When This Support Is Needed</h2>
              <div className="space-y-2.5">
                {triggers.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Challenge */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">What We Challenge Before Submission</h2>
              <div className="space-y-2.5">
                {challenges.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Support Includes */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-6">Our IVD Regulatory Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Performance Focus:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                Our focus is not whether a performance report exists. We evaluate whether the analytical and clinical evidence actually supports the intended purpose and claims for the IVD that will be marketed in Saudi Arabia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Obtain SFDA Marketing Authorization for In Vitro Diagnostics"
        description="Our diagnostic specialists evaluate analytical performance evidence, validate clinical concordance, and compile MDMA submissions in GHAD."
      />
    </>
  );
}
