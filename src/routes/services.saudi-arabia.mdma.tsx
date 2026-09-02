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

export const Route = createFileRoute("/services/saudi-arabia/mdma")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA MDMA Application & Technical File Strategy (GHAD) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Medical Devices Marketing Authorization (MDMA) submissions via SFDA GHAD portal under MDS-REQ 1. Technical file compilation, Essential Principles mapping, and deficiency defense.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/mdma" }],
  }),
  component: SaudiMDMAPage,
});

function SaudiMDMAPage() {
  const triggers = [
    "Preparing an initial MDMA application for Class A, B, C, or D medical devices or IVDs in Saudi Arabia",
    "Restructuring an existing MDMA authorization following device line expansions or model additions",
    "Transitioning legacy registrations to current unified GHAD electronic portal standards",
    "Addressing SFDA requests for additional technical, clinical, or quality system information",
  ];

  const supportItems = [
    "MDMA route assessment and pre-submission application readiness",
    "Technical-file compilation and assessment strategy under MDS-REQ 1",
    "Device family and grouping assessment for consolidated submissions",
    "Manufacturer and Saudi Authorized Representative (AR) data alignment",
    "Declaration of Conformity and quality system (ISO 13485) evidence review",
    "SFDA Essential Principles of Safety and Performance evidence mapping",
    "Risk-management documentation and ISO 14971 benefit-risk review",
    "Clinical evaluation reports (CER) and IVD performance evidence review",
    "Labeling, packaging artwork, and bilingual Arabic/English IFU alignment",
    "Electronic application submission and real-time tracking in the GHAD portal",
    "Response drafting and technical rebuttal for SFDA queries and deficiency notices",
    "Authorization-record review and post-approval documentation handover",
  ];

  const challenges = [
    "Does the device family grouping strictly satisfy SFDA's 'kind of device' criteria?",
    "Is every claim in the Arabic/English IFU supported by verifiable verification and validation data?",
    "Are Free Sale Certificates (FSC) and QMS certificates current and properly authenticated?",
    "Does the technical file provide adequate traceability from Essential Principles to test reports?",
    "Are all manufacturing and sterilization sites correctly listed and aligned with AR authorizations?",
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
            <span className="text-navy">MDMA Application</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              GHAD Portal &amp; MDS-REQ 1
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              MDMA Application &amp; Technical File Strategy
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              MDMA Must Be Built Around a Defensible Technical File. The Medical Devices Marketing Authorization is the principal SFDA market-authorization route for medical devices intended to be supplied in Saudi Arabia. The application is supported by a technical file demonstrating conformity with SFDA requirements and the essential principles of safety and performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your MDMA Submission <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our MDMA Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Regulatory Rigor:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not begin with the submission portal. We begin with the regulatory basis that makes the MDMA application defensible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Secure Your SFDA Medical Device Marketing Authorization (MDMA)"
        description="Our regulatory experts structure compliant technical files under MDS-REQ 1, submit through GHAD, and manage approvals."
      />
    </>
  );
}
