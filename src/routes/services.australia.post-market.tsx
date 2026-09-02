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

export const Route = createFileRoute("/services/australia/post-market")({
  head: () => ({
    meta: [
      {
        title:
          "TGA Post-Market Surveillance, MDIR Incident Reporting & Vigilance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Australia TGA post-market vigilance, Medical Device Incident Reporting (MDIR in IRIS), 48-hour/10-day/30-day timelines, annual reporting for Class III & implantable devices, recalls, and PRAC market actions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/post-market" }],
  }),
  component: AustraliaPostMarketPage,
});

function AustraliaPostMarketPage() {
  const triggers = [
    "New ARTG inclusion requiring a functioning Australian post-market operating model",
    "Adverse event or near-incident occurring in Australia or overseas involving the device",
    "Safety signal, trend, or recurring complaint cluster identified in global PMS data",
    "Field Safety Corrective Action (FSCA), recall, safety alert, or product correction initiated",
    "Higher-risk device subject to mandatory annual reports for the first three years of inclusion",
    "TGA post-market review, compliance audit, or official Section 41JA information request",
  ];

  const supportItems = [
    "Post-market surveillance (PMS) system review and Australian standard operating procedure setup",
    "Complaint triage and adverse-event reportability assessment",
    "Medical Device Incident Reporting (MDIR) submission via the TGA IRIS database",
    "48-hour serious public health threat reporting management",
    "10-day death or serious deterioration reporting assessment and lodgement",
    "30-day potential recurrence / serious deterioration reporting management",
    "Follow-up investigation coordination and final regulatory report drafting",
    "Statistical trend analysis, signal detection, and risk mitigation review",
    "Manufacturer root-cause investigation and CAPA linkage",
    "Market action / Recall action / PRAC communication and TGA strategy alignment",
    "Overseas regulatory action assessment and mandatory Australian notification",
    "Annual reports authoring for implantable Class IIb, Class III and Class 4 IVDs",
    "Risk management file (ISO 14971) and labelling updates following post-market findings",
    "Response drafting for TGA post-market reviews and regulatory inquiries",
  ];

  const challenges = [
    "Adverse event reportability decision not documented in a defensible audit trail",
    "Manufacturer overseas investigation and Sponsor TGA report contain conflicting conclusions",
    "Overseas recall or safety notice not assessed for impact on Australian ARTG supply",
    "CAPA investigations not closed back into risk management and design history files",
    "Annual report unit-distribution data cannot be reconciled with complaint records",
    "Field corrective action initiated in Australia before Sponsor and TGA strategy is aligned",
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
            <span className="text-navy">Post-Market Surveillance</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              IRIS Vigilance &amp; MDIR
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Post-Market Surveillance, MDIR Reporting, Annual Reports &amp; Market Actions
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              ARTG inclusion creates continuing obligations. Sponsors must monitor device safety and performance, manage complaints, report adverse events within the prescribed timeframes, coordinate investigations and market actions, maintain records and respond to TGA post-market requests.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your Australia Post-Market System <ArrowRight className="h-4 w-4" />
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

          {/* Reporting Timelines Callout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200 text-center">
              <span className="text-2xl font-black text-[#0b7261] block mb-1">48 Hours</span>
              <p className="text-xs font-bold text-navy mb-1">Public Health Threat</p>
              <p className="text-[11px] text-gray-500">Serious threat to public health requires initial reporting within 48 hours.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200 text-center">
              <span className="text-2xl font-black text-[#0b7261] block mb-1">10 Days</span>
              <p className="text-xs font-bold text-navy mb-1">Death or Serious Deterioration</p>
              <p className="text-[11px] text-gray-500">Events leading to patient death or severe injury reportable within 10 calendar days.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200 text-center">
              <span className="text-2xl font-black text-navy block mb-1">30 Days</span>
              <p className="text-xs font-bold text-navy mb-1">Potential Recurrence</p>
              <p className="text-[11px] text-gray-500">Malfunctions that could cause death/injury on recurrence reportable within 30 days.</p>
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
                Can the Sponsor show a complete evidence trail from the first complaint to the final regulatory and corrective-action decision?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Rigorous TGA Post-Market Vigilance and MDIR Compliance"
        description="Our vigilance experts evaluate reportability, lodge MDIR records in IRIS, and manage TGA recall communications."
      />
    </>
  );
}
