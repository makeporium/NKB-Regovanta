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

export const Route = createFileRoute("/services/new-zealand/post-market")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand Post-Market Surveillance, Adverse Events & Recall Support | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Post-market surveillance (PMS), adverse incident reporting, and recall management under Medsafe guidelines in New Zealand. 10-day serious incident reporting and Recall Code compliance.",
      },
      { name: "keywords", content: "New Zealand Post-Market Surveillance, Adverse Events & Recall Support, services new zealand post market, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "New Zealand Post-Market Surveillance, Adverse Events & Recall Support | NKB Regovanta" },
      { property: "og:description", content: "Post-market surveillance (PMS), adverse incident reporting, and recall management under Medsafe guidelines in New Zealand. 10-day serious incident reporting and Recall Code compliance." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/new-zealand/post-market" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "New Zealand Post-Market Surveillance, Adverse Events & Recall Support | NKB Regovanta" },
      { name: "twitter:description", content: "Post-market surveillance (PMS), adverse incident reporting, and recall management under Medsafe guidelines in New Zealand. 10-day serious incident reporting and Recall Code compliance." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/post-market" }],
  }),
  component: NZPostMarketPage,
});

function NZPostMarketPage() {
  const triggers = [
    "Medical devices, equipment, or IVDs are actively supplied in New Zealand requiring statutory post-market oversight",
    "A serious adverse event, patient injury, or technical malfunction occurs within New Zealand or overseas",
    "A global Field Safety Corrective Action (FSCA), product recall, or customer safety notice affects New Zealand inventory",
    "Medsafe issues a safety inquiry, product alert, or requests root-cause investigation records",
  ];

  const supportItems = [
    "Post-Market Surveillance (PMS) system and procedure setup aligned with Medsafe guidelines",
    "Customer complaint intake, triage, and adverse event reportability assessment",
    "Initial and final adverse-event reporting to Medsafe (within 10 calendar days for death/serious injury)",
    "Manufacturer-to-Sponsor emergency communication and technical investigation pathways",
    "Root-cause investigation, engineering failure analysis, and CAPA formulation",
    "Periodic Safety Update Reports (PSUR) and Post-Market Clinical Follow-up (PMCF) report authoring",
    "Recall and non-recall corrective action strategy under the New Zealand Recall Code",
    "Field Safety Notice (FSN) drafting for New Zealand healthcare providers and distributors",
    "Distribution-record and affected-customer rapid traceability audits",
    "Assessment of overseas recalls and regulatory safety alerts for New Zealand market impact",
    "Risk management file and labeling updates following post-market safety findings",
  ];

  const challenges = [
    "Is the incident reportable to Medsafe within the recommended 10 calendar day window for serious injury?",
    "Does a global corrective action or recall notice apply to devices distributed in New Zealand?",
    "Can the sponsor produce complete distribution records showing exactly where affected batches were sent?",
    "Has the device risk management file been updated with newly detected post-market failure modes?",
    "Are field action communications and affected batch/serial traceability completely documented for Medsafe?",
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
            <span className="text-navy">Post-Market &amp; Recalls</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Medsafe Vigilance &amp; Recall Code
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Post-Market Surveillance, Adverse Events &amp; Recall Support
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              New Zealand Sponsor Responsibilities Continue After Supply. Medsafe expects sponsors to identify and manage safety issues associated with medical devices supplied in New Zealand. The sponsor should have effective complaint, investigation, adverse-event, distribution-record and recall/corrective-action processes that can operate quickly when a safety concern emerges.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your NZ Post-Market System <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Post-Market &amp; Recall Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">10-Day Reporting Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                For death or serious injury, Medsafe recommends initial reporting as soon as possible and within 10 calendar days. We connect Complaint / Incident -&gt; Investigation -&gt; Risk -&gt; CAPA -&gt; Medsafe Reporting / Recall Action -&gt; Technical Evidence / Labelling Update so post-market information actively drives lifecycle compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Rigorous Medsafe Post-Market Vigilance and Recall Readiness"
        description="Our vigilance team evaluates incident reportability, coordinates Field Safety Notices, and manages regulatory reporting in New Zealand."
      />
    </>
  );
}
