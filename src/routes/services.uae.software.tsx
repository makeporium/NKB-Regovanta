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

export const Route = createFileRoute("/services/uae/software")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP SaMD, Software, AI & Cybersecurity Regulatory Consulting | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Software as a Medical Device (SaMD) and AI/ML regulation in the UAE. IEC 62304 software lifecycles, cybersecurity risk management, SBOM, algorithmic validation, and MOHAP medical equipment registration.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/software" }],
  }),
  component: UAESoftwarePage,
});

function UAESoftwarePage() {
  const triggers = [
    "Standalone software (SaMD), mobile medical apps, or cloud-based clinical platforms entering the UAE",
    "Incorporating Artificial Intelligence (AI) or Machine Learning (ML) algorithms for diagnostic or predictive purposes",
    "Releasing a significant software update, algorithmic revision, or cybersecurity firmware patch",
    "Compiling cybersecurity risk management documentation and Software Bill of Materials (SBOM) for MOHAP review",
  ];

  const supportItems = [
    "Software regulatory-status and intended-medical-purpose assessment under MOHAP guidelines",
    "SaMD / software risk classification strategy based on IMDRF framework and UAE rules",
    "IEC 62304 software lifecycle documentation compilation (architecture, unit, integration, system testing)",
    "Software architecture diagrams, data-flow models, and external interface descriptions",
    "Software of Unknown Provenance (SOUP) and third-party library vulnerability management",
    "Software hazard analysis and risk management under ISO 14971",
    "Software verification and validation (V&V) test report authoring and traceability matrix",
    "Cybersecurity risk management file, threat modelling, and vulnerability penetration evidence",
    "Data integrity, cloud security, and UAE health data privacy interface considerations",
    "Usability and human factors engineering documentation (IEC 62366-1)",
    "Clinical performance validation for software-driven diagnostic or treatment recommendations",
    "AI/ML algorithmic transparency, training data provenance, and change-control protocols",
    "Bilingual English/Arabic e-IFU alignment, release notes, and software version tracking",
    "Post-market software defect tracking, patch management, and vigilance procedures",
  ];

  const challenges = [
    "Does the software provide medical decision support that qualifies it as regulated medical equipment in the UAE?",
    "Is the software risk class commensurate with the severity of clinical impact resulting from an erroneous output?",
    "Are all software system requirements bidirectionally traceable to verification test cases and risk controls?",
    "Is the released software build version accurately documented across application forms and technical files?",
    "Could an ongoing AI model retraining pipeline trigger a mandatory regulatory variation with MOHAP?",
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
            <span className="text-navy">Software &amp; SaMD</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              IEC 62304 &amp; Digital Health
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              SaMD, Software, AI &amp; Cybersecurity (UAE MOHAP)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Software Strategy Begins With the Intended Medical Function. Software may be regulated as a medical device or form part of a hardware device. The UAE strategy should start with intended medical purpose and claims, then connect classification, software lifecycle evidence, cybersecurity, clinical/performance substantiation and post-market change control.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your UAE Software Strategy <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Software &amp; AI Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Medical Function Focus:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We review software as a medical function, not merely as code. The evidence must connect the clinical or diagnostic claim to the software requirements, risks, validation and ongoing change-control strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Authorize SaMD and AI Medical Software in the UAE"
        description="Our digital health regulatory engineers prepare IEC 62304 documentation, cybersecurity risk files, and MOHAP registrations."
      />
    </>
  );
}
