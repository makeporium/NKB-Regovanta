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

export const Route = createFileRoute("/services/canada/inspection")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Inspection & Compliance Readiness | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Health Canada inspection preparation, MDEL audit readiness, mock inspection simulation, complaint file reviews, recall drills, and deficiency response strategy.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/inspection" }],
  }),
  component: CanadaInspectionPage,
});

function CanadaInspectionPage() {
  const inspectionItems = [
    "MDEL inspection readiness assessment and gap analysis",
    "Complaint file review, investigation rigor, and closure timeliness",
    "Distribution-record and batch traceability stress-testing",
    "Recall procedure validation and mock-recall drill execution",
    "Mandatory problem reporting controls and MDR compliance checks",
    "Labelling, IFU, and licence verification controls",
    "Importer/distributor quality management agreements and audits",
    "Corrective and preventive action (CAPA) evidence and root-cause analysis",
    "Personnel training records, job descriptions, and qualification files",
    "Response strategy for Health Canada inspection observations and non-compliances",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/canada" className="hover:text-navy transition-colors">Canada</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Inspection Readiness</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Audit &amp; Inspection Defense
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Health Canada Inspection &amp; Compliance Readiness
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Health Canada inspections focus on the activities an establishment actually performs. A mature compliance system must demonstrate implementation through records, not only the existence of procedures.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare for Health Canada Inspection <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Inspection Items */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">Inspection Readiness Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {inspectionItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 mt-6">
              <p className="text-xs font-bold text-navy">Inspection Lens:</p>
              <p className="text-sm font-extrabold text-[#0b3a96] mt-1">
                Procedure → Record → Regulatory Decision → Evidence of Implementation → Effectiveness
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Simulate and Defend Your Health Canada Regulatory Audit"
        description="Our former auditors conduct mock inspections, stress-test complaint files, and prepare CAPA response packages."
      />
    </>
  );
}
