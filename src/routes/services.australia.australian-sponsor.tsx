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

export const Route = createFileRoute("/services/australia/australian-sponsor")({
  head: () => ({
    meta: [
      {
        title:
          "Australian Sponsor Services & Regulatory Governance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Professional Australian Sponsor representation for foreign medical device and IVD manufacturers. ARTG inclusion holder, TGA liaison, vigilance & MDIR incident reporting, recall coordination, and UDI data maintenance.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/australian-sponsor" }],
  }),
  component: AustraliaSponsorPage,
});

function AustraliaSponsorPage() {
  const triggers = [
    "Foreign manufacturer without an Australian legal entity",
    "Existing commercial distributor acting as Sponsor but lacking regulatory governance and independence",
    "Transfer of ARTG inclusions from one Sponsor to another",
    "New device launch requiring a clear manufacturer–Sponsor quality and regulatory interface",
    "Post-market issue, recall, safety signal or overseas regulatory action affecting Australian supply",
    "Certificate, manufacturing site, labelling or product change requiring Sponsor regulatory assessment",
  ];

  const supportItems = [
    "Pre-market Sponsor readiness and ARTG inclusion coordination",
    "Manufacturer–Sponsor regulatory responsibilities and formal Quality/Regulatory Agreement",
    "Access to technical, clinical, performance and safety information systems",
    "Conditions of inclusion monitoring and compliance governance",
    "TGA official information and sample request coordination",
    "Complaint and adverse-event escalation protocols",
    "Medical Device Incident Reporting (MDIR) in the TGA IRIS database",
    "Recall / product alert / product correction support under Australian market-action procedures (PRAC)",
    "Overseas regulatory action impact assessment",
    "Manufacturer Evidence and ARTG change monitoring",
    "UDI / AusUDID responsibilities and data record maintenance",
    "Record retention and traceability compliance support",
    "Importer and distributor communication pathways",
  ];

  const challenges = [
    "Manufacturer informs the Sponsor only after a change has already been implemented",
    "Sponsor cannot access current technical or post-market records upon TGA request",
    "Complaints reach local commercial distributors but are never escalated to the Sponsor",
    "Overseas recall or regulator action is not assessed for Australian ARTG impact",
    "UDI, ARTG, labelling and technical-file changes are managed in separate, disconnected silos",
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
            <span className="text-navy">Australian Sponsor</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Legal Representation &amp; Governance
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Australian Sponsor Services &amp; Regulatory Governance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              A foreign manufacturer needs an Australian-based Sponsor to interface with the TGA and hold the ARTG inclusion. The Sponsor role is regulatory and ongoing: it requires access to technical and safety information, control of regulatory communications, vigilance readiness and the ability to act when the manufacturer changes the device or a safety issue emerges.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Discuss Australian Sponsor Support <ArrowRight className="h-4 w-4" />
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
                Could the Sponsor independently demonstrate to TGA why the device remains compliant, what changed, what incidents occurred and what corrective actions were taken?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Appoint a Dedicated Australian Sponsor with Full Regulatory Integrity"
        description="Our Australian team provides independent Sponsor representation, manages TGA inquiries, and maintains post-market compliance."
      />
    </>
  );
}
