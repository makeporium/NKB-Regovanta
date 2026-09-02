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

export const Route = createFileRoute("/services/brazil/bgmp")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA BGMP / CBPF Compliance & Inspection Readiness (RDC 665/2022) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Brazilian Good Manufacturing Practice (BGMP / RDC 665/2022) compliance, CBPF certification under RDC 687/2022, ISO 13485 gap remediation, MDSAP leverage, and ANVISA on-site audit readiness.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/bgmp" }],
  }),
  component: BrazilBGMPPage,
});

function BrazilBGMPPage() {
  const triggers = [
    "A Class III or IV medical device or IVD product registration is planned in Brazil",
    "A formal CBPF (Certificado de Boas Práticas de Fabricação) initial application or renewal is required",
    "The manufacturer is preparing for an ANVISA on-site inspection or risk-based desk review",
    "Existing ISO 13485 procedures need to be mapped to Brazilian RDC 665/2022 requirements",
    "ANVISA or an MDSAP auditing organization has identified GMP non-conformances requiring remediation",
  ];

  const supportItems = [
    "RDC 665/2022 comprehensive quality-system gap assessment",
    "ISO 13485-to-Brazil Good Manufacturing Practice cross-mapping",
    "Design control and Design History File (DHF) review",
    "Risk-management integration and benefit-risk documentation (ISO 14971)",
    "Supplier controls, critical subcontractor evaluation, and purchasing controls",
    "CAPA, complaint handling, nonconformity management, and root-cause systems",
    "Process validation, cleanroom qualification, and special-process controls",
    "Software validation within the quality management system (IEC 62304 / ISO 13485)",
    "Traceability, Device Master Record (DMR), and Device History Record (DHR) controls",
    "Internal audit and executive management review readiness",
    "Mock inspection, auditor training, and evidence-room / war-room preparation",
    "CAPA strategy, root cause analysis, and formal response for inspection findings",
    "CBPF petition compilation, filing, and status follow-up with ANVISA",
  ];

  const challenges = [
    "Can the company demonstrate active implementation through records, not only written SOPs?",
    "Are design changes systematically linked to risk management updates and verification/validation?",
    "Are supplier evaluation and incoming controls commensurate with component/process risk?",
    "Are customer complaints actively feeding CAPA investigations and product risk evaluations?",
    "Can manufacturing sites explain outsourced processes and critical suppliers consistently during audit?",
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
            <span className="text-navy">BGMP &amp; CBPF</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              RDC 665/2022 &amp; RDC 687/2022
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              BGMP / CBPF Compliance &amp; ANVISA Inspection Readiness
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Brazilian Good Manufacturing Practice expectations for medical devices and IVDs are consolidated in RDC 665/2022. For manufacturers of Class III and IV devices, ANVISA CBPF certification is governed by RDC 687/2022 and related administrative requirements. The regulatory issue is not simply whether the manufacturer holds ISO 13485 certification; ANVISA expects evidence that the applicable Brazilian GMP requirements are effectively implemented.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare for BGMP / CBPF Review <ArrowRight className="h-4 w-4" />
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

          {/* MDSAP Considerations Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 shadow-2xs">
            <h3 className="text-sm font-extrabold text-navy mb-2 flex items-center gap-2">
              <ShieldCheck className="h-4.5 w-4.5 text-[#0b7261]" /> MDSAP Program Considerations for Brazil
            </h3>
            <p className="text-xs text-gray-700 font-medium leading-relaxed">
              Where MDSAP evidence is relevant to ANVISA certification strategy, we assess how the available audit/certificate scope can be leveraged and whether any Brazil-specific gaps (such as tecnovigilância interfaces, RDC 665/2022 technical specifications, and legal manufacturer representation) remain.
            </p>
          </div>

          {/* Our Support Includes */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-6">Our BGMP &amp; CBPF Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Audit Methodology:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We test implementation, not document titles. For each system, we follow objective evidence through the process — procedure, record, decision, risk impact, CAPA and effectiveness — in the same way an experienced ANVISA inspector would.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Prepare for ANVISA BGMP Inspection and Secure CBPF Certification"
        description="Our quality system auditors conduct mock audits, remediate RDC 665/2022 gaps, and manage CBPF petition submissions."
      />
    </>
  );
}
