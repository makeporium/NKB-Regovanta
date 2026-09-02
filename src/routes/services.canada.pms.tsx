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

export const Route = createFileRoute("/services/canada/pms")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Post-Market Surveillance & Mandatory Problem Reporting | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Health Canada Mandatory Problem Reporting (MPR), preliminary and final incident reporting (10-day and 30-day timelines), recall management, and post-market surveillance systems.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/pms" }],
  }),
  component: CanadaPMSPage,
});

function CanadaPMSPage() {
  const pmsSupport = [
    "Complaint handling procedures and escalation logic",
    "Reportability assessment under the Medical Devices Regulations (SOR/98-282 Part 1, Div. 2)",
    "Preliminary and final incident reporting support",
    "10-day and 30-day mandatory problem reporting assessment",
    "Foreign incident / corrective-action assessment where applicable",
    "Trend review and signal assessment",
    "Recall strategy and Health Canada communication support",
    "Corrective and preventive action (CAPA) integration",
    "Risk-management file updates (ISO 14971)",
    "Labelling and Instructions for Use (IFU) updates",
    "Licence-impact and change assessment",
    "Post-market documentation and regulatory record maintenance",
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
            <span className="text-navy">Post-Market Surveillance</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Mandatory Problem Reporting (MPR)
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Post-Market Surveillance, Complaints &amp; Mandatory Problem Reporting
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Canadian market access continues after licensing. Manufacturers, importers and distributors must maintain complaint, reporting, recall and corrective-action systems capable of identifying and responding to device risks.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your Canada Post-Market System <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Post-Market Deliverables */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">Our Post-Market Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pmsSupport.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
                <p className="text-xs font-bold text-amber-900">Reporting Timelines:</p>
                <p className="text-xs text-amber-900/80 font-medium leading-relaxed mt-1">
                  For incidents occurring in Canada, a preliminary report is generally due within <strong>10 calendar days</strong> when death or serious deterioration in health has occurred, and within <strong>30 calendar days</strong> when such an outcome did not occur but could occur if the incident recurred.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
                <p className="text-xs font-bold text-navy">Expert Focus:</p>
                <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                  We do not treat complaints as isolated quality records. We connect complaint data to reportability, risk, CAPA, recall decisions, licence impact and the technical evidence supporting the device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Rigorous Health Canada Vigilance and Post-Market Compliance"
        description="Our post-market specialists assess incident reportability, lodge MPR notifications, and manage recall communications."
      />
    </>
  );
}
