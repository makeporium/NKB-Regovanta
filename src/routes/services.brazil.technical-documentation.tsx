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

export const Route = createFileRoute("/services/brazil/technical-documentation")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Technical Documentation & Safety/Performance Evidence (RDC 848/2024) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "ANVISA technical file compilation, Essential Safety and Performance evidence mapping under RDC 848/2024, ISO 14971 risk management, clinical evaluation, and pre-market dossier defense.",
      },
      { name: "keywords", content: "ANVISA Technical Documentation & Safety/Performance Evidence (RDC 848/2024), services brazil technical documentation, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "ANVISA Technical Documentation & Safety/Performance Evidence (RDC 848/2024) | NKB Regovanta" },
      { property: "og:description", content: "ANVISA technical file compilation, Essential Safety and Performance evidence mapping under RDC 848/2024, ISO 14971 risk management, clinical evaluation, and pre-market dossier defense." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/brazil/technical-documentation" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ANVISA Technical Documentation & Safety/Performance Evidence (RDC 848/2024) | NKB Regovanta" },
      { name: "twitter:description", content: "ANVISA technical file compilation, Essential Safety and Performance evidence mapping under RDC 848/2024, ISO 14971 risk management, clinical evaluation, and pre-market dossier defense." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/technical-documentation" }],
  }),
  component: BrazilTechnicalDocPage,
});

function BrazilTechnicalDocPage() {
  const triggers = [
    "A Class III or IV registration dossier is being prepared for ANVISA submission",
    "A Class I or II notification technical file needs to be verified and made defensible for post-market audit",
    "ANVISA has issued an official exigência requesting technical performance or safety evidence",
    "Existing global technical documentation (EU MDR/IVDR STED or FDA 510(k)) must be adapted to Brazil",
  ];

  const supportItems = [
    "Device description, principles of operation, and intended use specification",
    "Design, material specifications, and manufacturing process flow information",
    "Essential Safety and Performance Requirements (RDC 848/2024) evidence mapping",
    "Risk-management documentation and benefit-risk evaluation (ISO 14971)",
    "Bench, functional, and mechanical performance test report integration",
    "Biological evaluation and biocompatibility testing evidence (ISO 10993)",
    "Sterilization validation and microbiological barrier documentation",
    "Packaging integrity, transportation transit, and real-time/accelerated shelf-life evidence",
    "Electrical safety and EMC testing evidence (IEC 60601 series & INMETRO where applicable)",
    "Software lifecycle documentation and cybersecurity evidence (IEC 62304 / RDC 657/2022)",
    "Usability and human factors engineering documentation (IEC 62366-1)",
    "Clinical evaluation report (CER) and clinical evidence review",
    "IVD analytical and clinical performance evaluation mapping",
    "Portuguese labeling, IFU, and promotional claims consistency review",
  ];

  const challenges = [
    "Is the tested configuration the exact same as the finished commercial device submitted to ANVISA?",
    "Do pre-clinical laboratory reports support the exact clinical claims made in the Portuguese IFU?",
    "Are test standards and version dates current and acceptable to ANVISA technical assessors?",
    "Are worst-case sample selection and testing rationales scientifically defensible?",
    "Do risk mitigation controls in the risk management file have corresponding verification evidence?",
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
            <span className="text-navy">Technical Documentation</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              RDC 848/2024 &amp; RDC 751/2022
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Technical Documentation &amp; Safety/Performance Evidence
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              ANVISA expects the technical dossier to demonstrate that the device is safe, performs as intended and meets the applicable Brazilian essential safety and performance requirements. RDC 848/2024 updated the essential safety and performance framework and extends it to IVDs. A dossier built for the EU, US or Canada can often be leveraged, but it must be mapped to the Brazilian product, classification and regulatory route.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Brazil Technical Dossier <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Technical Dossier Components We Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Traceability Principle:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We review traceability across Intended Use → Risk → Safety/Performance Requirement → Verification/Validation → Clinical/Performance Evidence → Labeling. The dossier must tell one consistent regulatory story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Your Technical Dossier for ANVISA Acceptance"
        description="Our regulatory writers map overseas dossiers to RDC 848/2024 Essential Principles, review pre-clinical data, and compile submission files."
      />
    </>
  );
}
