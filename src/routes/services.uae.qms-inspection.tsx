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

export const Route = createFileRoute("/services/uae/qms-inspection")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP QMS, Establishment & Inspection Readiness | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Quality management system and MOHAP establishment inspection readiness in the UAE. ISO 13485 alignment, licensed medical warehouse audits, storage and distribution controls, and CAPA remediation.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/qms-inspection" }],
  }),
  component: UAEQMSInspectionPage,
});

function UAEQMSInspectionPage() {
  const triggers = [
    "Preparing for a MOHAP regulatory inspection of a licensed medical warehouse or marketing office",
    "Aligning quality management procedures with ISO 13485 and UAE Good Distribution Practice (GDP)",
    "Auditing cold-chain storage facilities, temperature mapping, and batch traceability systems",
    "Responding to MOHAP inspection findings, non-conformities, or corrective action requests",
  ];

  const supportItems = [
    "Local establishment license and authorized operating scope review",
    "Medical warehouse and marketing office operational readiness assessment",
    "ISO 13485 and UAE Good Distribution Practice (GDP) quality-system alignment",
    "Document control, Device Master Records, and distribution record retention",
    "Critical supplier qualification, contract warehouse, and outsourced process controls",
    "Warehouse storage, climate control, temperature monitoring, and quarantine procedures",
    "Customer complaint handling, technical investigation, and vigilance reporting procedures",
    "Traceability, batch segregation, and rapid recall simulation readiness",
    "Corrective and Preventive Action (CAPA) and change-control system implementation",
    "Personnel training matrix, organizational charts, and job responsibility definitions",
    "Internal audit and executive management review readiness",
    "MOHAP inspection support, war-room setup, and finding remediation planning",
  ];

  const challenges = [
    "Can the local warehouse prove consistent temperature and humidity controls through continuous datalogger records?",
    "Are non-conforming or quarantined devices physically segregated and electronically locked?",
    "Is every batch distributed in the UAE traceable to specific healthcare facilities within hours?",
    "Are customer complaints and tecnovigilance reports consistently feeding CAPA investigations?",
    "Can warehouse personnel confidently explain quarantine SOPs and recall procedures to MOHAP inspectors?",
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
            <Link to="/services/uae" className="hover:text-navy transition-colors">United Arab Emirates</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">QMS &amp; Inspection</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              ISO 13485 &amp; UAE GDP
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              QMS, Establishment &amp; Inspection Readiness (UAE)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Product Registration and Local Establishment Controls Must Work Together. The UAE commercial route involves both product registration and appropriately licensed local entities. Quality-system and establishment controls should therefore support storage, distribution, complaints, traceability, document control and regulatory communication for the registered device portfolio.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your UAE Compliance System <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our QMS &amp; Warehouse Inspection Readiness Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Implementation Test:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We test implementation rather than document presence. If an authority traces one device from receipt through distribution, complaint investigation and corrective action, the records should tell a controlled and consistent story.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Prepare for MOHAP Warehouse Inspections and QMS Audits"
        description="Our quality system auditors conduct mock warehouse inspections, remediate GDP non-conformities, and verify temperature traceability."
      />
    </>
  );
}
