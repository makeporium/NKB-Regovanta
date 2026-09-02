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

export const Route = createFileRoute("/services/canada/mdsap")({
  head: () => ({
    meta: [
      {
        title:
          "MDSAP Canada & ISO 13485 Quality-System Readiness | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Full MDSAP (Medical Device Single Audit Program) QMS readiness, ISO 13485 compliance alignment for Health Canada Class II, III and IV Medical Device Licences (MDL), audit defense, and nonconformity remediation.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/mdsap" }],
  }),
  component: CanadaMDSAPPage,
});

function CanadaMDSAPPage() {
  const mdsapCapabilities = [
    "MDSAP gap assessment against ISO 13485 and Health Canada regulatory requirements (SOR/98-282)",
    "QMS scope and certificate alignment with the legal manufacturer and licensed devices",
    "Design and development controls for applicable device classes",
    "Risk-management integration (ISO 14971:2019)",
    "Supplier and outsourced-process controls",
    "Complaint handling and Mandatory Problem Reporting (MPR) interfaces",
    "Recall and advisory notice processes",
    "CAPA and nonconformity controls",
    "Change control and licence-impact assessment",
    "Post-market surveillance and regulatory reporting interfaces",
    "MDSAP audit preparation and response to audit nonconformities",
    "Coordination of regulatory evidence with the QMS and technical dossier",
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
            <span className="text-navy">MDSAP Certification</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Mandatory for Class II, III &amp; IV
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              MDSAP Canada &amp; ISO 13485 Quality-System Readiness
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              For manufacturers of Class II, III and IV devices, quality-system certification is a core part of the Canadian licensing framework. Health Canada relies on ISO 13485 certification issued through a recognized Medical Device Single Audit Program (MDSAP) auditing organization.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Assess Your MDSAP Canada Readiness <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-3">Our MDSAP Support Goes Beyond Certificate Collection</h2>
            <p className="text-xs sm:text-[13px] text-navy/80 font-medium leading-relaxed mb-6">
              The MDSAP certificate, the technical dossier and the Health Canada licence should not tell three different stories. The legal manufacturer, device scope, manufacturing controls, design responsibilities and post-market processes must remain aligned.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mdsapCapabilities.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Prepare Your Quality System for MDSAP Canada Audit"
        description="Our quality engineers audit QMS procedures, align MDSAP scopes, and coordinate with recognized auditing organizations."
      />
    </>
  );
}
