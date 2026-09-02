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

export const Route = createFileRoute("/services/saudi-arabia/post-market")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA Post-Market Surveillance, Vigilance & Field Safety Actions (FSCA) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Post-market surveillance (PMS) and tecnovigilance in Saudi Arabia. SFDA adverse incident reporting, Field Safety Corrective Actions (FSCA), customer safety notices, and periodic safety updates.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/post-market" }],
  }),
  component: SaudiPostMarketPage,
});

function SaudiPostMarketPage() {
  const triggers = [
    "Medical devices or IVDs are actively commercialized in Saudi Arabia requiring statutory post-market oversight",
    "A serious adverse event, patient injury, or technical malfunction occurs within the Kingdom or overseas",
    "A global Field Safety Corrective Action (FSCA), product recall, or customer safety notice affects Saudi inventory",
    "SFDA issues a post-market safety inquiry or requests root-cause investigation records",
  ];

  const supportItems = [
    "Post-Market Surveillance (PMS) system and procedure setup aligned with SFDA regulations",
    "Customer complaint intake, triage, and adverse event reportability assessment",
    "Direct electronic incident reporting to the SFDA National Pharmacovigilance and Device Center",
    "Manufacturer-to-Authorized-Representative (AR) emergency communication and escalation pathways",
    "Root-cause investigation, engineering failure analysis, and CAPA formulation",
    "Periodic Safety Update Reports (PSUR) and Post-Market Clinical Follow-up (PMCF) report authoring",
    "Field Safety Corrective Action (FSCA) strategy, recall execution, and quarantined product governance",
    "Field Safety Notice (FSN) drafting in bilingual Arabic and English formats for healthcare providers",
    "Global safety signal evaluation and risk assessment for the Saudi patient population",
    "Risk management file and labeling updates following post-market safety findings",
    "Coordination with local commercial importers, distributors, and healthcare facilities",
  ];

  const challenges = [
    "Is the incident reportable to the SFDA within statutory time limits (e.g. 2 days for public health threats, 10 days for death/serious injury)?",
    "Does a global corrective action or recall notice apply to devices distributed in the Saudi market?",
    "Are investigation conclusions substantiated by objective pre-clinical or failure analysis data?",
    "Has the device risk management file been updated with newly detected post-market failure modes?",
    "Are field action communications and affected batch/serial traceability completely documented for the SFDA?",
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
            <span className="text-navy">Post-Market &amp; Vigilance</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              SFDA Vigilance &amp; FSCA
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Post-Market Surveillance, Vigilance &amp; Field Safety Actions (SFDA)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              MDMA Approval Creates Ongoing Safety and Surveillance Obligations. SFDA regulates the complete device lifecycle, including post-market surveillance, incident management, safety signals and field actions. Manufacturers and their Saudi regulatory interfaces must have processes to identify, investigate, assess and communicate safety issues after commercialization.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your Saudi Post-Market System <ArrowRight className="h-4 w-4" />
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
              <p className="text-xs font-bold text-navy">Lifecycle Data Loop:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We connect Complaint / Incident -&gt; Investigation -&gt; Risk -&gt; CAPA -&gt; FSCA / Reporting -&gt; Technical File / Labeling Update. This allows post-market data to feed the lifecycle evidence rather than sit outside it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Rigorous SFDA Post-Market Vigilance and Recall Preparedness"
        description="Our vigilance specialists evaluate incident reportability, lodge SFDA notifications, and coordinate Field Safety Corrective Actions."
      />
    </>
  );
}
