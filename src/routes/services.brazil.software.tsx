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

export const Route = createFileRoute("/services/brazil/software")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA SaMD, Software, AI & Cybersecurity Regulatory Consulting (RDC 657/2022) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Software as a Medical Device (SaMD) regularization under RDC 657/2022 in Brazil. IEC 62304 software lifecycles, cybersecurity risk management, AI/ML clinical evidence, and algorithmic change control.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/software" }],
  }),
  component: BrazilSoftwarePage,
});

function BrazilSoftwarePage() {
  const triggers = [
    "Standalone software (SaMD), digital health platform, or software-enabled medical device entering Brazil",
    "Artificial intelligence (AI) / Machine Learning (ML) functionality is being incorporated for clinical use",
    "A software update or patch alters clinical diagnostic functionality, output metrics, or risk controls",
    "Cybersecurity risk evidence and SBOM documentation must be strengthened for ANVISA dossier submission",
  ];

  const supportItems = [
    "SaMD qualification and regulatory-status assessment under RDC 657/2022",
    "Intended clinical use, algorithmic purpose, and marketing claims review",
    "Risk classification strategy for software-based medical devices",
    "RDC 657/2022 regularization pathway determination (Notificação vs Cadastro)",
    "Software architecture, data-flow diagrams, and system description compilation",
    "IEC 62304-oriented software lifecycle documentation review (architecture, unit, integration, system testing)",
    "Software hazard analysis and risk management (ISO 14971)",
    "SOUP, third-party component, and open-source library vulnerability management",
    "Software verification and validation (V&V) test report review",
    "Cybersecurity risk-management evidence and threat modelling documentation",
    "Clinical and analytical performance evidence for software-driven diagnostic or treatment claims",
    "Version numbering and software configuration control governance",
    "Software change impact assessment for updates, patches, and AI model retraining",
    "Post-market software vigilance and defect tracking systems setup",
  ];

  const challenges = [
    "Does the claimed software function create a regulated medical-device intended purpose under ANVISA rules?",
    "Is the software risk class properly aligned to the clinical consequence of an erroneous output?",
    "Are software requirements fully traceable to verification tests and risk mitigation controls?",
    "Is the released software build version clearly identified in the submission forms and technical evidence?",
    "Could an algorithm parameter adjustment or cybersecurity update trigger a mandatory regulatory variation?",
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
            <Link to="/services/brazil" className="hover:text-navy transition-colors">Brazil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Software &amp; SaMD</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              RDC 657/2022 Digital Health
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              SaMD, Software, AI &amp; Cybersecurity Regulatory Support (Brazil)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Software as a Medical Device is specifically regulated under RDC 657/2022. The first regulatory question is whether the software is a medical device and, if so, how its intended medical purpose, risk and functionality determine classification and regularization. Software changes also require disciplined lifecycle assessment because a new algorithm, claim or risk-control function can affect the approved regulatory basis.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Brazil Software Strategy <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Software &amp; Cybersecurity Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">SaMD Assessment Philosophy:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We assess the software as a regulated medical function, not just an IT product. We connect clinical purpose, classification, risk controls, software architecture, V&V, cybersecurity and post-market change management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Regularize Your SaMD and AI Medical Software in Brazil"
        description="Our software regulatory experts structure IEC 62304 lifecycles, prepare cybersecurity documentation, and navigate RDC 657/2022 requirements."
      />
    </>
  );
}
