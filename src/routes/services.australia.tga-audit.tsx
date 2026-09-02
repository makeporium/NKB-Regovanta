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
  Search,
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/australia/tga-audit")({
  head: () => ({
    meta: [
      {
        title:
          "TGA Application Audit, Regulatory Engagement & Information Requests | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "TGA Level 1 and Level 2 application audit defense, Section 41JA information request responses, mock audit assessments, and clinical evidence justifications for ARTG inclusions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/tga-audit" }],
  }),
  component: AustraliaTGAAuditPage,
});

function AustraliaTGAAuditPage() {
  const triggers = [
    "Application category is subject to mandatory or discretionary TGA application audit",
    "High-risk, novel, implantable, or complex medical device / IVD submission",
    "Using comparable overseas evidence (CE MDR, FDA) and needing to demonstrate equivalence of scope and evidence",
    "TGA requests additional information (Section 41JA) or clarification during dossier screening",
    "Existing submission has inconsistent evidence, outdated testing, or unclear clinical rationale",
    "Manufacturer seeks pre-submission regulatory engagement or formal meetings on a novel technology",
  ];

  const supportItems = [
    "Pre-audit application readiness assessment and mock audit review",
    "Likely audit evidence mapping and question vulnerability analysis",
    "Technical dossier gap assessment against Essential Principles",
    "Clinical evidence readiness and Clinical Evaluation Report (CER) defense",
    "IVD performance evidence readiness and analytical study review",
    "Essential Principles evidence cross-referencing and verification",
    "Risk-management traceability and ISO 14971 consistency check",
    "Labelling, IFU, and promotional claim harmonization",
    "Technical justification and regulatory rationale development",
    "Response package drafting and cross-reference control",
    "Management of formal Requests for Information (RFI / Section 41JA)",
    "Preparation for regulatory engagement discussions and TGA teleconferences",
  ];

  const challenges = [
    "Answering only the literal wording of the question without resolving the underlying regulatory concern",
    "Providing voluminous additional documents without a clear roadmap or executive justification",
    "Introducing new inconsistencies across the dossier while revising individual response files",
    "Defending a classification, GMDN, or kind-of-device choice without rule-based rationale",
    "Using overseas regulatory approval as a substitute for demonstrating direct Australian applicability",
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
            <span className="text-navy">TGA Application Audit</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Application Audit &amp; RFI Defense
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              TGA Application Audit, Regulatory Engagement &amp; Information Requests
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              TGA may select an ARTG application for audit depending on the device and application pathway. Audit questions can probe far beyond administrative data and may examine the regulatory basis for classification, conformity assessment, clinical / performance evidence, Essential Principles, labelling and risk controls.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare for TGA Review <ArrowRight className="h-4 w-4" />
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
              <h2 className="text-lg font-extrabold text-navy mb-4">What We Challenge in Response Filings</h2>
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
                What regulatory conclusion is TGA unable to reach from the current dossier, and what evidence or rationale will allow that conclusion to be reached?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Defend Your ARTG Application Against TGA Audit Scrutiny"
        description="Our senior regulatory strategists deconstruct TGA queries, compile clinical justifications, and formulate rigorous response packages."
      />
    </>
  );
}
