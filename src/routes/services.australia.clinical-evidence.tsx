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

export const Route = createFileRoute("/services/australia/clinical-evidence")({
  head: () => ({
    meta: [
      {
        title:
          "Australia TGA Clinical Evidence & Benefit-Risk Strategy | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "TGA Clinical Evaluation Reports (CER), equivalent device justification, clinical literature systematic reviews, benefit-risk determination, and clinical audit readiness for ARTG inclusions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/clinical-evidence" }],
  }),
  component: AustraliaClinicalEvidencePage,
});

function AustraliaClinicalEvidencePage() {
  const supportItems = [
    "Clinical evidence gap assessment against TGA Clinical Evidence Guidelines",
    "Systematic clinical literature search and appraisal strategy",
    "Clinical Evaluation Report (CER) drafting, updating, and remediation",
    "Comparable and equivalent device technical and clinical equivalence justification",
    "Clinical investigation protocol strategy and regulatory oversight where primary data is needed",
    "Clinical claim substantiation and marketing claim alignment",
    "Benefit-risk determination and residual clinical risk quantification (ISO 14971)",
    "Post-market clinical follow-up (PMCF) and registry evidence integration",
    "Preparation for TGA application audit questions on clinical data and literature sufficiency",
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
            <span className="text-navy">Clinical Evidence</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Clinical Evaluation &amp; CER
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Clinical Evidence &amp; Benefit-Risk Strategy
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Clinical evidence should support intended purpose, safety, performance and benefit-risk. The depth of evidence expected depends on device risk, novelty, claims, technology, available comparable evidence and the Australian application pathway.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Clinical Evidence Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Support Items */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Clinical Evidence Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">NKB Evidence-Sufficiency Test:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not ask only whether a clinical evaluation exists. We ask whether the evidence is sufficient for the exact intended purpose, risk profile and claims of the Australian device — and whether it can be defended if TGA selects the application for audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Substantiate Your Device Claims with Robust Clinical Data"
        description="Our clinical regulatory writers compile CERs, justify clinical equivalence, and prepare clinical audit defense packages."
      />
    </>
  );
}
