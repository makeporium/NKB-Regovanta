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

export const Route = createFileRoute("/services/australia/ivd")({
  head: () => ({
    meta: [
      {
        title:
          "Australia IVD Regulatory Strategy & ARTG Inclusion | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Risk-based IVD classification (Class 1-4), analytical and clinical performance evidence, Performance Evaluation Report (PER), Class 4 annual reporting, and ARTG inclusion for in vitro diagnostics in Australia.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/ivd" }],
  }),
  component: AustraliaIVDPage,
});

function AustraliaIVDPage() {
  const triggers = [
    "Class 1, 2, 3 or 4 IVD market launch in Australia",
    "Self-testing, point-of-care (PoC), near-patient, or centralized laboratory IVD system",
    "New analyte, specimen type, intended target population, or expanded clinical claim",
    "Transition to new Manufacturer Evidence, IVDR certification, or MDSAP audit basis",
    "Performance study planning, assay validation, or analytical gap remediation",
    "Class 4 high-risk IVD requiring higher scrutiny, preliminary review, and mandatory annual reporting",
  ];

  const supportItems = [
    "IVD qualification and risk-based classification (Class 1 to 4)",
    "Intended purpose, analyte detection, specimen type, and clinical-use review",
    "Conformity assessment and Manufacturer Evidence pathway strategy",
    "ARTG inclusion and kind-of-device grouping for IVDs",
    "Essential Principles compliance mapping for in vitro diagnostics",
    "Analytical performance evaluation strategy (sensitivity, specificity, LoD, LoQ, precision, cross-reactivity)",
    "Clinical performance evaluation strategy and diagnostic accuracy benchmarking",
    "Performance study design, protocol authoring, and clinical trial coordination",
    "Laboratory coordination with accredited diagnostic testing facilities",
    "IVD labelling, Instructions for Use (IFU), and package insert review",
    "Class 4 annual reporting systems readiness and post-market tracking",
    "Post-market surveillance, vigilance, and IRIS adverse incident reporting",
    "UDI / AusUDID readiness in line with phased Australian implementation",
    "IVD variation, design modification, and lifecycle change control",
  ];

  const challenges = [
    "Performance claims not supported by the exact specimen type or validated population",
    "Clinical performance evidence generated using an inappropriate comparator or reference method",
    "Cut-off values or clinical acceptance criteria not clinically justified",
    "Analytical studies performed on a reagent/instrument configuration different from the marketed assay",
    "IVD intended purpose stated in marketing broader than the study cohort",
    "Class 4 post-market annual reporting responsibilities not operationalised within Sponsor workflows",
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
            <Link to="/services/australia" className="hover:text-navy transition-colors">Australia</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">IVD Registration</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              In Vitro Diagnostics (Class 1–4)
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              IVD Regulatory Strategy, Performance Evidence &amp; ARTG Inclusion
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Australian IVD regulation is risk-based and classification depends on intended purpose and the potential public-health or personal harm from an incorrect result. IVD market access therefore requires both an ARTG strategy and a performance-evidence strategy that supports the claims made for the assay or system.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your Australian IVD Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* When This Support Is Needed */}
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                If the IVD gives an incorrect result, what is the individual and public-health consequence — and does the classification and evidence package reflect that risk?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Authorize Your In Vitro Diagnostic in Australia"
        description="Our diagnostic regulatory experts guide analytical studies, clinical performance validations, and ARTG inclusion applications."
      />
    </>
  );
}
