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

export const Route = createFileRoute("/services/australia/technical-documentation")({
  head: () => ({
    meta: [
      {
        title:
          "Australia TGA Technical Documentation & Essential Principles | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Schedule 3 Essential Principles evidence mapping, IMDRF Table of Contents technical dossier structure, risk management (ISO 14971), clinical evaluation, and TGA audit readiness.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/technical-documentation" }],
  }),
  component: AustraliaTechnicalDocPage,
});

function AustraliaTechnicalDocPage() {
  const triggers = [
    "Preparing for ARTG inclusion or a mandatory/discretionary TGA application audit",
    "Using an EU MDR / IVDR dossier or FDA 510(k)/PMA submission as the starting technical package",
    "Responding to a TGA post-market information request or compliance check",
    "Introducing a high-risk, novel, implantable, software-based or combination technology in Australia",
    "Updating an older technical file to reflect new Australian requirements such as UDI and cybersecurity",
  ];

  const supportItems = [
    "Device description, intended purpose and variant specification mapping",
    "Essential Principles (Schedule 3) applicability checklist and evidence mapping",
    "Risk management and benefit-risk documentation (ISO 14971)",
    "Design and manufacturing process verification information",
    "Pre-clinical verification and validation evidence review",
    "Biological evaluation / biocompatibility evidence (ISO 10993)",
    "Sterilisation and microbiological validation documentation",
    "Packaging, transport and real-time/accelerated shelf-life evidence",
    "Electrical safety and EMC testing evidence (IEC 60601 series)",
    "Software lifecycle documentation (IEC 62304)",
    "Cybersecurity risk management and threat modelling evidence",
    "Usability and human factors engineering files (IEC 62366-1)",
    "Clinical evaluation report (CER) and clinical performance evidence",
    "IVD analytical and clinical performance evidence mapping",
    "Australian labelling, IFU, promotional claim and UDI consistency",
  ];

  const challenges = [
    "Gaps between marketed claims and underlying pre-clinical/clinical evidence",
    "Essential Principles checklist citing standards without evidence traceability",
    "Risk controls not verified in the test evidence or protocols",
    "Different device configurations or test articles used across technical reports",
    "Label / IFU claims broader than the clinical or performance substantiation",
    "UDI information not controlled with the same discipline as core labelling data",
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
            <span className="text-navy">Technical Documentation</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Schedule 3 Essential Principles
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Technical Documentation &amp; Essential Principles Evidence
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Australian market access is supported by evidence demonstrating conformity with the Essential Principles. Technical documentation developed for the EU, US, UK or Canada can often be leveraged, but it must be assessed against the Australian classification, intended purpose, conformity evidence, labelling and application route.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Australian Technical Evidence <ArrowRight className="h-4 w-4" />
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
                Can each material claim on the Australian label be traced to risk controls and verification, validation, clinical or performance evidence in the dossier?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Your Technical File for TGA Essential Principles"
        description="Our regulatory engineers map overseas technical dossiers to Schedule 3 Essential Principles and verify test report adequacy."
      />
    </>
  );
}
