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

export const Route = createFileRoute("/services/saudi-arabia/inspection")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA Inspection & Quality-System Readiness (MDS-REQ 10 / ISO 13485) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "SFDA on-site audit and inspection preparation for medical device manufacturers and local establishments. QMS gap assessment under MDS-REQ 10, mock audits, and corrective action closure.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/inspection" }],
  }),
  component: SaudiInspectionPage,
});

function SaudiInspectionPage() {
  const triggers = [
    "Preparing for an SFDA on-site regulatory audit or establishment inspection in Saudi Arabia",
    "Aligning quality management procedures with SFDA requirements under MDS-REQ 10 and ISO 13485",
    "Undergoing an inspection of warehouse storage, distribution facilities, or Authorized Representative operations",
    "Responding to formal inspection observations, non-conformities, or corrective action requests from the SFDA",
  ];

  const supportItems = [
    "Quality Management System (QMS) gap assessment against MDS-REQ 10 and ISO 13485",
    "Document and record-control readiness (Device Master Records, Device History Records)",
    "Design and development control evidence review (Design History Files)",
    "Risk management implementation and post-production feedback loops (ISO 14971)",
    "Purchasing controls, critical supplier evaluations, and incoming inspection records",
    "Process validation, cleanroom environmental monitoring, and sterilization records",
    "Customer complaint handling, technical investigation, and vigilance reporting records",
    "Corrective and Preventive Action (CAPA) system effectiveness review",
    "Management of change (MOC) and design change control implementation records",
    "Internal audit and executive management review readiness",
    "Mock inspection, personnel interview coaching, and audit war-room preparation",
    "Response drafting, root cause analysis, and CAPA submission for SFDA inspection findings",
  ];

  const challenges = [
    "Can the organization demonstrate active, controlled implementation through records rather than written SOPs alone?",
    "Are design and manufacturing changes systematically traced back to risk management file updates?",
    "Are supplier quality controls and audits commensurate with the critical risk level of supplied components?",
    "Are customer complaints and tecnovigilance reports consistently feeding CAPA investigations?",
    "Can personnel comfortably explain outsourced processes, warehouse controls, and calibration records during an SFDA audit?",
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
            <span className="text-navy">Inspection &amp; QMS</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              MDS-REQ 10 &amp; ISO 13485
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              SFDA Inspection &amp; Quality-System Readiness
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Inspection Readiness Requires Objective Evidence, Not Only SOPs. SFDA maintains requirements for inspections and quality management systems for medical-device establishments and manufacturers. Inspection readiness should demonstrate that documented controls are actually implemented and can be traced through records.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare for SFDA Inspection <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Inspection &amp; QMS Readiness Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Audit Readiness Test:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                Our inspection question is simple: if SFDA follows one real device, complaint, change or supplier issue through your system, can the organization demonstrate consistent, controlled and effective implementation?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Prepare for SFDA Regulatory Audits with Expert Inspection Coaching"
        description="Our quality system auditors conduct mock inspections, remediate MDS-REQ 10 gaps, and resolve inspection findings."
      />
    </>
  );
}
