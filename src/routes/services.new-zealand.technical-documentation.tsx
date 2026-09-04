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
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/new-zealand/technical-documentation")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand Technical Documentation & Safety / Performance Evidence | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Technical file substantiation and safety evidence compilation for medical devices supplied in New Zealand. Risk management (ISO 14971), clinical evaluation, testing evidence, and Medsafe audit readiness.",
      },
      { name: "keywords", content: "New Zealand Technical Documentation & Safety / Performance Evidence, services new zealand technical documentation, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "New Zealand Technical Documentation & Safety / Performance Evidence | NKB Regovanta" },
      { property: "og:description", content: "Technical file substantiation and safety evidence compilation for medical devices supplied in New Zealand. Risk management (ISO 14971), clinical evaluation, testing evidence, and Medsafe audit readiness." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/new-zealand/technical-documentation" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "New Zealand Technical Documentation & Safety / Performance Evidence | NKB Regovanta" },
      { name: "twitter:description", content: "Technical file substantiation and safety evidence compilation for medical devices supplied in New Zealand. Risk management (ISO 14971), clinical evaluation, testing evidence, and Medsafe audit readiness." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/technical-documentation" }],
  }),
  component: NZTechnicalDocPage,
});

function NZTechnicalDocPage() {
  const triggers = [
    "Establishing technical file substantiation for devices notified in the Medsafe WAND database",
    "Adapting an overseas EU MDR technical file, Australian TGA dossier, or US FDA 510(k) for New Zealand supply",
    "Responding to Medsafe safety inquiries, product quality investigations, or compliance audits",
    "Verifying end-to-end evidence traceability between risk management files, test reports, and marketed claims",
  ];

  const supportItems = [
    "Device description, engineering specifications, models, configurations, and accessories",
    "Intended clinical purpose, indications, contraindications, and marketing claim alignment",
    "Design and manufacturing process flows, critical supplier evaluations, and facility controls",
    "Risk management file and benefit-risk documentation under ISO 14971",
    "Verification and validation testing evidence mapping",
    "Biological evaluation and biocompatibility testing evidence (ISO 10993 series)",
    "Sterilization validation and sterile barrier packaging integrity reports",
    "Packaging transit simulation and real-time / accelerated shelf-life aging evidence",
    "Electrical safety and Electromagnetic Compatibility (EMC) testing reports (IEC 60601)",
    "Software lifecycle documentation, architecture, and cybersecurity verification (IEC 62304)",
    "Usability and human factors engineering documentation (IEC 62366-1)",
    "Clinical evaluation reports (CER) and clinical safety/efficacy evidence for medical devices",
    "Analytical and clinical performance evaluation evidence for IVDs",
    "Labeling, Instructions for Use (IFU), and promotional brochure consistency review",
    "Post-market surveillance plans and lifecycle documentation update procedures",
  ];

  const challenges = [
    "Does the technical documentation support the exact device configuration and intended use supplied in NZ?",
    "Can the sponsor produce complete, current technical files upon Medsafe request without delay?",
    "Are test standards and editions recognized and accepted by international consensus and Medsafe?",
    "Do worst-case product testing rationales scientifically cover all commercial model variants?",
    "Do all risk mitigation controls in the risk file have corresponding, verified test reports?",
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
            <span className="text-navy">Technical Documentation</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Evidence Substantiation
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Technical Documentation &amp; Safety / Performance Evidence
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Sponsor Must Be Able to Substantiate the Device Behind the WAND Entry. WAND is not a technical-dossier approval process, but a sponsor still has legal responsibilities for the safety of devices supplied in New Zealand. Technical evidence therefore needs to remain available and coherent enough to support the intended purpose, risk controls, performance claims and any Medsafe safety investigation or market action.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your New Zealand Technical Evidence <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Technical File Components We Compile &amp; Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Evidence Chain Standard:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We review the technical file as one evidence chain: Intended Purpose -&gt; Classification -&gt; Risk -&gt; Verification / Validation -&gt; Clinical or Performance Evidence -&gt; Labelling -&gt; Post-Market. A WAND entry may be simple, but the evidence behind the device should still withstand safety scrutiny.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Substantiate Your Medical Device with Complete Technical Evidence"
        description="Our regulatory engineers compile technical documentation, map evidence matrices, and ensure Medsafe audit readiness."
      />
    </>
  );
}
