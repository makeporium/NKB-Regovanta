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

export const Route = createFileRoute("/services/new-zealand/ivd")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand IVD Regulatory & Performance Evidence Support | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "In Vitro Diagnostic (IVD) regulatory compliance and voluntary WAND notification in New Zealand. Analytical and clinical performance evidence, stability studies, and Medsafe compliance.",
      },
      { name: "keywords", content: "New Zealand IVD Regulatory & Performance Evidence Support, services new zealand ivd, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "New Zealand IVD Regulatory & Performance Evidence Support | NKB Regovanta" },
      { property: "og:description", content: "In Vitro Diagnostic (IVD) regulatory compliance and voluntary WAND notification in New Zealand. Analytical and clinical performance evidence, stability studies, and Medsafe compliance." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/new-zealand/ivd" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "New Zealand IVD Regulatory & Performance Evidence Support | NKB Regovanta" },
      { name: "twitter:description", content: "In Vitro Diagnostic (IVD) regulatory compliance and voluntary WAND notification in New Zealand. Analytical and clinical performance evidence, stability studies, and Medsafe compliance." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/ivd" }],
  }),
  component: NZIVDPage,
});

function NZIVDPage() {
  const triggers = [
    "Commercializing an in vitro diagnostic (IVD) reagent, kit, or instrument in the New Zealand market",
    "Assessing whether to utilize voluntary WAND notification or maintain non-notified status for exempt IVDs",
    "Expanding clinical intended uses, specimen types, diagnostic cut-offs, or target patient populations",
    "Ensuring IVD analytical and clinical performance evidence satisfies Medsafe safety expectations",
  ];

  const supportItems = [
    "IVD regulatory status assessment under the Medicines Act 1981",
    "Assessment of voluntary WAND notification strategy and GMDN coding",
    "Intended clinical purpose, analyte/biomarker, specimen type, and target user review",
    "Analytical performance evidence review (sensitivity, specificity, LoD, LoQ)",
    "Clinical performance evidence review (clinical sensitivity, specificity, predictive values)",
    "Precision, repeatability, and reproducibility study evaluation",
    "Interference testing (endogenous/exogenous) and cross-reactivity evaluation",
    "Measuring range, linearity, cut-off determination, and high-dose hook effect documentation",
    "Specimen stability, transport stability, and in-use / open-vial reagent stability studies",
    "Comparator method and reference gold standard justification",
    "Performance study gap assessment and accredited laboratory coordination",
    "IVD labeling, packaging artwork, and Instructions for Use (IFU) review",
    "Post-market performance monitoring, vigilance, and recall readiness",
  ];

  const challenges = [
    "Are all specimen types (e.g. serum, plasma, capillary blood, urine) claimed on the label validated by studies?",
    "Do diagnostic sensitivity and specificity claims derive from a statistically powered, representative clinical cohort?",
    "Are analytical cut-offs, cross-reactivity panels, and common interferents fully documented with raw data?",
    "Does the clinical evidence support every intended-use clinical setting (point-of-care, self-test, hospital laboratory)?",
    "Are reagent stability, calibrator traceability, and control values defended under New Zealand transport conditions?",
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
            <Link to="/services/new-zealand" className="hover:text-navy transition-colors">New Zealand</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">IVD Support</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              WAND Exemption &amp; Performance Evidence
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              IVD Regulatory &amp; Performance Evidence Support (New Zealand)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              IVDs Are Exempt From Mandatory WAND Notification — Not From New Zealand Law. In-vitro diagnostic devices are currently exempt from mandatory WAND notification, although voluntary notification is possible. They remain medical devices under the Medicines Act and must still meet applicable safety, sponsor, labelling, advertising, complaint, recall and post-market responsibilities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your NZ IVD Strategy <ArrowRight className="h-4 w-4" />
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
              <p className="text-xs font-bold text-navy">Performance Rationale:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not force an EU IVDR or Australian IVD class onto the current New Zealand WAND framework. We focus on the legal status in New Zealand and whether the available analytical and clinical evidence actually supports the intended purpose and claims of the IVD being supplied.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Substantiate In Vitro Diagnostics in New Zealand"
        description="Our diagnostic specialists evaluate analytical performance evidence, validate clinical concordance, and manage voluntary WAND listings."
      />
    </>
  );
}
