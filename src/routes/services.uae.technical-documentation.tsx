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
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uae/technical-documentation")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP Technical Documentation & Safety / Performance Evidence | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Technical file compilation and review for UAE MOHAP medical equipment registration. Essential principles verification, ISO 14971 risk management, clinical evaluation, and pre-clinical evidence mapping.",
      },
      { name: "keywords", content: "UAE MOHAP Technical Documentation & Safety / Performance Evidence, services uae technical documentation, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE MOHAP Technical Documentation & Safety / Performance Evidence | NKB Regovanta" },
      { property: "og:description", content: "Technical file compilation and review for UAE MOHAP medical equipment registration. Essential principles verification, ISO 14971 risk management, clinical evaluation, and pre-clinical evidence mapping." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/technical-documentation" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE MOHAP Technical Documentation & Safety / Performance Evidence | NKB Regovanta" },
      { name: "twitter:description", content: "Technical file compilation and review for UAE MOHAP medical equipment registration. Essential principles verification, ISO 14971 risk management, clinical evaluation, and pre-clinical evidence mapping." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/technical-documentation" }],
  }),
  component: UAETechnicalDocPage,
});

function UAETechnicalDocPage() {
  const triggers = [
    "Compiling a comprehensive technical dossier for Class I, II, III, or IV MOHAP registration",
    "Adapting an overseas EU MDR/IVDR technical file or US FDA 510(k)/PMA dossier for the UAE market",
    "Responding to MOHAP technical evaluation committee requests for safety and performance evidence",
    "Verifying end-to-end traceability between risk mitigations, test reports, and marketing brochure claims",
  ];

  const supportItems = [
    "Device description, engineering specifications, models, configurations, and accessories",
    "Intended clinical purpose, indications, contraindications, and marketing claim alignment",
    "Design and manufacturing process flows, critical supplier evaluations, and facility controls",
    "Risk management file and benefit-risk documentation under ISO 14971",
    "Applicable international standards review and conformity evidence mapping",
    "Biological evaluation and biocompatibility testing evidence (ISO 10993 series)",
    "Sterilization validation and sterile barrier packaging integrity reports",
    "Packaging transit simulation and real-time / accelerated shelf-life aging evidence",
    "Electrical safety and Electromagnetic Compatibility (EMC) testing reports (IEC 60601)",
    "Software lifecycle documentation, architecture, and cybersecurity verification (IEC 62304)",
    "Usability and human factors engineering documentation (IEC 62366-1)",
    "Clinical evaluation reports (CER) and clinical safety/efficacy evidence for medical devices",
    "Analytical and clinical performance evaluation evidence for IVDs",
    "Bilingual labeling, Instructions for Use (IFU), and promotional brochure consistency review",
    "Post-market surveillance plans and lifecycle documentation update procedures",
  ];

  const challenges = [
    "Is the tested device configuration identical to the finished commercial article to be supplied in the UAE?",
    "Do pre-clinical laboratory reports substantiate the exact clinical claims made in the product brochure and IFU?",
    "Are test standards and version editions recognized and accepted by MOHAP technical evaluators?",
    "Are worst-case product selection rationales scientifically defended in mechanical and biological test reports?",
    "Do all risk mitigation controls in the risk file have corresponding, verified test evidence?",
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
            <Link to="/services/uae" className="hover:text-navy transition-colors">United Arab Emirates</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Technical Documentation</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Safety &amp; Efficacy Evidence
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Technical Documentation &amp; Safety / Performance Evidence
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Technical Documentation Must Substantiate the Product Being Registered. MOHAP may review the evidence supporting the device's safety, efficacy/performance and conformity. The dossier should therefore tell one consistent story from intended purpose and risk through verification, validation, clinical/performance evidence and labeling.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your UAE Technical File <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Technical File Components We Compile &amp; Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Traceability Standard:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We review evidence traceability: Intended Purpose -&gt; Classification -&gt; Risk -&gt; Verification / Validation -&gt; Clinical or Performance Evidence -&gt; Labeling. A report is not sufficient merely because it exists; it must apply to the marketed configuration and support the claims being registered.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Your Technical Dossier for UAE MOHAP Review"
        description="Our regulatory engineers compile technical documentation, map evidence matrices, and review pre-clinical data for MOHAP conformity."
      />
    </>
  );
}
