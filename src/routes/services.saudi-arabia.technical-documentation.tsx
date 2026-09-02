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

export const Route = createFileRoute("/services/saudi-arabia/technical-documentation")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA Technical Documentation & Essential Principles (MDS-REQ 1) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Technical documentation compilation for SFDA MDMA submissions under MDS-REQ 1. Essential Principles checklist mapping, ISO 14971 risk management, clinical evaluation, and pre-clinical evidence.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/technical-documentation" }],
  }),
  component: SaudiTechnicalDocPage,
});

function SaudiTechnicalDocPage() {
  const triggers = [
    "Compiling a complete technical file for Class A, B, C, or D MDMA authorization under MDS-REQ 1",
    "Adapting an existing EU MDR/IVDR technical file or US FDA 510(k)/PMA dossier for Saudi Arabia",
    "SFDA has issued an official deficiency notice questioning pre-clinical, clinical, or testing evidence",
    "Establishing robust traceability between risk mitigations, test reports, and Arabic/English IFU claims",
  ];

  const supportItems = [
    "Device description, technical specifications, and intended medical purpose documentation",
    "Design and manufacturing process flows, critical supplier controls, and site information",
    "SFDA Essential Principles of Safety and Performance evidence mapping checklist",
    "Risk management file and benefit-risk analysis documentation under ISO 14971",
    "Biological evaluation and biocompatibility testing evidence (ISO 10993)",
    "Sterilization validation and microbiological barrier integrity reports",
    "Packaging qualification, transit simulation, and real-time/accelerated shelf-life evidence",
    "Electrical safety and Electromagnetic Compatibility (EMC) testing reports (IEC 60601)",
    "Software lifecycle documentation, architecture, and cybersecurity verification (IEC 62304)",
    "Usability and human factors engineering documentation (IEC 62366-1)",
    "Clinical evaluation reports (CER), clinical investigation data, and literature reviews",
    "IVD analytical performance (LoD, LoQ, linearity, precision) and clinical concordance data",
    "Bilingual Arabic and English labeling, packaging artwork, and IFU consistency review",
    "Post-market surveillance plans and lifecycle documentation update governance",
  ];

  const challenges = [
    "Is the tested device configuration identical to the finished commercial article to be marketed in Saudi Arabia?",
    "Do pre-clinical laboratory reports substantiate the exact clinical claims made in the Arabic/English IFU?",
    "Are test standards and editions current, fully harmonized, and recognized by the SFDA?",
    "Are worst-case product selection rationales scientifically defended in mechanical and biological test reports?",
    "Do all risk control measures in the risk management file have corresponding, verified test evidence?",
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
            <span className="text-navy">Technical Documentation</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              MDS-REQ 1 Technical File
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Technical Documentation &amp; Essential Principles (SFDA)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Technical Documentation Must Demonstrate Safety and Performance — Not Merely Contain Reports. SFDA reviews the technical file as evidence that the device is designed, manufactured and controlled to meet applicable safety and performance requirements. The file should connect intended purpose, risk management, verification and validation, clinical or performance evidence, labeling and post-market controls.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Saudi Technical File <ArrowRight className="h-4 w-4" />
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
              <p className="text-xs font-bold text-navy">Traceability Chain:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We trace Intended Purpose -&gt; Classification -&gt; Essential Principles -&gt; Risk -&gt; Verification / Validation -&gt; Clinical or Performance Evidence -&gt; Labeling. A report may be technically sound but still fail to support the Saudi submission if the tested configuration, claims or acceptance criteria do not match the marketed device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Your Technical File with SFDA Essential Principles"
        description="Our regulatory engineers compile MDS-REQ 1 technical documentation, map evidence matrices, and review pre-clinical data."
      />
    </>
  );
}
