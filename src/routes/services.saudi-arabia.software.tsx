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

export const Route = createFileRoute("/services/saudi-arabia/software")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA SaMD, Software, AI & Cybersecurity Regulatory Consulting | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Software as a Medical Device (SaMD) and AI/ML regulation in Saudi Arabia. IEC 62304 software lifecycles, cybersecurity risk management, SBOM, algorithmic validation, and SFDA MDMA authorization.",
      },
      { name: "keywords", content: "SFDA SaMD, Software, AI & Cybersecurity Regulatory Consulting, services saudi arabia software, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "SFDA SaMD, Software, AI & Cybersecurity Regulatory Consulting | NKB Regovanta" },
      { property: "og:description", content: "Software as a Medical Device (SaMD) and AI/ML regulation in Saudi Arabia. IEC 62304 software lifecycles, cybersecurity risk management, SBOM, algorithmic validation, and SFDA MDMA authorization." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia/software" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SFDA SaMD, Software, AI & Cybersecurity Regulatory Consulting | NKB Regovanta" },
      { name: "twitter:description", content: "Software as a Medical Device (SaMD) and AI/ML regulation in Saudi Arabia. IEC 62304 software lifecycles, cybersecurity risk management, SBOM, algorithmic validation, and SFDA MDMA authorization." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/software" }],
  }),
  component: SaudiSoftwarePage,
});

function SaudiSoftwarePage() {
  const triggers = [
    "Standalone software (SaMD), mobile medical app, or cloud-based clinical platform entering Saudi Arabia",
    "Incorporating Artificial Intelligence (AI) or Machine Learning (ML) algorithms for diagnostic or predictive purposes",
    "Releasing a significant software update, algorithmic revision, or cybersecurity firmware patch",
    "Compiling cybersecurity risk management documentation and Software Bill of Materials (SBOM) for SFDA review",
  ];

  const supportItems = [
    "SaMD qualification and medical device regulatory status determination under SFDA guidelines",
    "Intended clinical purpose, algorithmic outputs, and clinical marketing claims review",
    "Software risk classification strategy based on IMDRF framework and SFDA rules",
    "IEC 62304 software lifecycle documentation compilation (architecture, unit, integration, system testing)",
    "Software architecture diagrams, data-flow models, and external interface descriptions",
    "Software of Unknown Provenance (SOUP) and third-party library vulnerability management",
    "Software hazard analysis and risk management under ISO 14971",
    "Software verification and validation (V&V) test report authoring and traceability matrix",
    "Cybersecurity risk management file, threat modelling, and vulnerability penetration evidence",
    "Clinical performance validation for software-driven diagnostic or treatment recommendations",
    "AI/ML algorithmic transparency, training data provenance, and change-control protocols",
    "GHAD portal submission, bilingual Arabic/English e-IFU alignment, and software version tracking",
    "Post-market software defect tracking, patch management, and vigilance procedures",
  ];

  const challenges = [
    "Does the software provide medical decision support that qualifies it as a regulated medical device?",
    "Is the software risk class commensurate with the severity of clinical impact resulting from an erroneous output?",
    "Are all software system requirements bidirectionally traceable to verification test cases and risk controls?",
    "Is the released software build version accurately documented across application forms and technical files?",
    "Could an ongoing AI model retraining pipeline trigger a mandatory regulatory variation with SFDA?",
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
            <span className="text-navy">Software &amp; SaMD</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              IEC 62304 &amp; Cybersecurity
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              SaMD, Software, AI &amp; Cybersecurity (SFDA)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Software Regulatory Strategy Begins With the Medical Function. Software may itself meet the medical-device definition or may form part of a hardware medical device. The Saudi strategy should therefore begin with intended medical purpose, software functionality and risk before deciding classification and evidence requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Saudi Software Strategy <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Software &amp; AI Regulatory Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Integrated Review Strategy:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not review software documentation in isolation. We connect the medical function, classification, failure modes, cybersecurity risks, validation evidence and claims to the Saudi authorization pathway.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Authorize Your SaMD and AI Health Software with SFDA"
        description="Our digital health regulatory engineers prepare IEC 62304 lifecycles, cybersecurity risk documentation, and MDMA submissions."
      />
    </>
  );
}
