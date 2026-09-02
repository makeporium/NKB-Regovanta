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

export const Route = createFileRoute("/services/new-zealand/qms-compliance")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand QMS & Sponsor Compliance Readiness (ISO 13485) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Quality management system and regulatory compliance readiness for New Zealand Sponsors and importers. ISO 13485 alignment, distribution record keeping, and Medsafe inspection support.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/qms-compliance" }],
  }),
  component: NZQMSCompliancePage,
});

function NZQMSCompliancePage() {
  const triggers = [
    "Establishing quality management controls and record retention procedures for a New Zealand Sponsor",
    "Aligning quality procedures with ISO 13485 and the Medicines Regulations 1984",
    "Preparing for a Medsafe safety investigation, compliance review, or importer audit",
    "Remediating compliance gaps in distribution traceability, complaint files, or recall procedures",
  ];

  const supportItems = [
    "Quality-system gap assessment against New Zealand legal requirements and ISO 13485",
    "Document and record-control review (distribution records, complaint logs, technical file access)",
    "Supplier and outsourced-process control interfaces between foreign manufacturer and NZ Sponsor",
    "Risk-management implementation and benefit-risk review under ISO 14971",
    "Validation evidence review (sterilization, packaging, manufacturing processes)",
    "Complaint handling, adverse event evaluation, and Medsafe escalation procedures",
    "Corrective and Preventive Action (CAPA) system effectiveness review",
    "Management of change (MOC) and WAND record update implementation",
    "Distribution and batch traceability records in compliance with New Zealand regulations",
    "Recall procedure readiness and mock recall execution under the NZ Recall Code",
    "Internal audit and executive management review support",
    "Medsafe regulatory inquiry and inspection response planning",
  ];

  const challenges = [
    "Can the sponsor produce complete distribution records showing where every batch was supplied?",
    "Are customer complaints received in New Zealand systematically investigated and recorded?",
    "Can the organization demonstrate active, controlled implementation through records rather than SOPs alone?",
    "Are changes made by the foreign manufacturer immediately communicated to the NZ Sponsor?",
    "Can personnel comfortably explain recall execution and Medsafe communication procedures during an audit?",
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
            <Link to="/services/new-zealand" className="hover:text-navy transition-colors">New Zealand</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">QMS &amp; Compliance</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              ISO 13485 &amp; Record Controls
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              QMS &amp; Compliance Readiness (New Zealand)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Sponsor Needs Controls That Work in Practice. New Zealand does not turn WAND notification into a pre-market QMS certification process, but manufacturers and sponsors still need controlled systems capable of supporting safe supply, complaint handling, records, corrective action, changes and recalls.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your NZ Compliance System <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our QMS &amp; Compliance Readiness Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Practical Audit Readiness:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                Our readiness question is practical: if Medsafe asks the sponsor to demonstrate what was supplied, where it went, what complaint was received, how the manufacturer investigated it and what corrective action followed, can the records tell a complete and controlled story?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Auditable QMS & Record Controls for New Zealand"
        description="Our quality system auditors assess ISO 13485 alignment, establish distribution traceability, and prepare sponsors for Medsafe scrutiny."
      />
    </>
  );
}
