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

export const Route = createFileRoute("/services/uae/post-market")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP Post-Market Monitoring, Vigilance & Field Safety Actions (FSCA) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Post-market surveillance (PMS) and vigilance for medical devices and IVDs in the UAE. MOHAP adverse incident reporting, Field Safety Corrective Actions (FSCA), recall coordination, and periodic safety updates.",
      },
      { name: "keywords", content: "UAE MOHAP Post-Market Monitoring, Vigilance & Field Safety Actions (FSCA), services uae post market, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE MOHAP Post-Market Monitoring, Vigilance & Field Safety Actions (FSCA) | NKB Regovanta" },
      { property: "og:description", content: "Post-market surveillance (PMS) and vigilance for medical devices and IVDs in the UAE. MOHAP adverse incident reporting, Field Safety Corrective Actions (FSCA), recall coordination, and periodic safety updates." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/post-market" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE MOHAP Post-Market Monitoring, Vigilance & Field Safety Actions (FSCA) | NKB Regovanta" },
      { name: "twitter:description", content: "Post-market surveillance (PMS) and vigilance for medical devices and IVDs in the UAE. MOHAP adverse incident reporting, Field Safety Corrective Actions (FSCA), recall coordination, and periodic safety updates." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/post-market" }],
  }),
  component: UAEPostMarketPage,
});

function UAEPostMarketPage() {
  const triggers = [
    "Medical devices, equipment, or IVDs are actively marketed in the UAE requiring statutory post-market vigilance",
    "A serious adverse event, patient injury, or technical malfunction occurs within the UAE or overseas",
    "A global Field Safety Corrective Action (FSCA), product recall, or customer safety notice affects UAE inventory",
    "MOHAP issues a post-market safety inquiry or requests root-cause investigation records",
  ];

  const supportItems = [
    "Post-Market Surveillance (PMS) system and procedure setup aligned with MOHAP regulations",
    "Customer complaint intake, triage, and adverse event reportability assessment",
    "Direct electronic incident reporting to the MOHAP Pharmacovigilance and Medical Device Section",
    "Manufacturer-to-Licensed-Medical-Warehouse communication and escalation pathways",
    "Root-cause investigation, engineering failure analysis, and CAPA formulation",
    "Periodic Safety Update Reports (PSUR) and Post-Market Clinical Follow-up (PMCF) report authoring",
    "Field Safety Corrective Action (FSCA) strategy, recall execution, and quarantined product governance",
    "Field Safety Notice (FSN) drafting in bilingual English and Arabic formats for UAE healthcare providers",
    "Global safety signal evaluation and risk assessment for the UAE healthcare sector",
    "Risk management file and labeling updates following post-market safety findings",
    "Coordination with local commercial importers, distributors, and private/public healthcare entities",
  ];

  const challenges = [
    "Is the adverse incident reportable to MOHAP within statutory time limits?",
    "Does a global corrective action or recall notice apply to devices distributed in the UAE?",
    "Are investigation conclusions substantiated by objective laboratory data or design history records?",
    "Has the device risk management file been updated with newly detected post-market failure modes?",
    "Are field action communications and affected batch/serial traceability completely documented for MOHAP inspectors?",
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
            <span className="text-navy">Post-Market &amp; Vigilance</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              MOHAP Vigilance &amp; FSCA
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Post-Market Monitoring, Vigilance &amp; Field Actions (UAE)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Registration Creates Ongoing Safety and Market-Surveillance Responsibilities. Post-market monitoring should connect complaints, adverse events, safety signals, manufacturer investigations, corrective actions, overseas regulatory actions and local communications. MOHAP's registration requirements explicitly include post-marketing monitoring expectations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your UAE Post-Market System <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Post-Market &amp; Vigilance Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Lifecycle Surveillance Integration:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We connect Complaint / Incident -&gt; Investigation -&gt; Risk -&gt; CAPA -&gt; Field Action / Reporting -&gt; Technical File / Labeling Update. This keeps post-market information inside the regulatory lifecycle instead of treating vigilance as a stand-alone administrative task.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Seamless MOHAP Post-Market Vigilance and Recall Preparedness"
        description="Our vigilance team evaluates incident reportability, coordinates Field Safety Notices, and manages regulatory reporting in the UAE."
      />
    </>
  );
}
