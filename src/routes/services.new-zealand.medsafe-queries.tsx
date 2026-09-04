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

export const Route = createFileRoute("/services/new-zealand/medsafe-queries")({
  head: () => ({
    meta: [
      {
        title:
          "Medsafe Queries, Safety Review & Technical Response Support | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Strategic response formulation for Medsafe regulatory inquiries, safety reviews, and compliance audits in New Zealand. Root-cause analysis, evidence coordination, and technical rebuttal drafting.",
      },
      { name: "keywords", content: "Medsafe Queries, Safety Review & Technical Response Support, services new zealand medsafe queries, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Medsafe Queries, Safety Review & Technical Response Support | NKB Regovanta" },
      { property: "og:description", content: "Strategic response formulation for Medsafe regulatory inquiries, safety reviews, and compliance audits in New Zealand. Root-cause analysis, evidence coordination, and technical rebuttal drafting." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/new-zealand/medsafe-queries" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medsafe Queries, Safety Review & Technical Response Support | NKB Regovanta" },
      { name: "twitter:description", content: "Strategic response formulation for Medsafe regulatory inquiries, safety reviews, and compliance audits in New Zealand. Root-cause analysis, evidence coordination, and technical rebuttal drafting." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/medsafe-queries" }],
  }),
  component: NZMedsafeQueriesPage,
});

function NZMedsafeQueriesPage() {
  const triggers = [
    "Medsafe issues a formal inquiry or request for information regarding a device supplied in New Zealand",
    "A product safety concern, adverse event report, or international alert prompts a Medsafe review",
    "Medsafe requests technical documentation, clinical evidence, or risk management files from the sponsor",
    "Responding to quality system, distribution traceability, or labeling compliance audits",
  ];

  const supportItems = [
    "Question-by-question regulatory and safety analysis of the Medsafe inquiry",
    "Root-cause analysis to identify the underlying safety or regulatory concern behind the request",
    "Sponsor and manufacturer evidence coordination and gap assessment",
    "Technical-file cross-referencing and objective evidence compilation",
    "Clinical evaluation and performance justification authoring",
    "Risk-management linkage and benefit-risk documentation updates under ISO 14971",
    "Complaint and incident investigation evidence review",
    "Labeling, package insert, and intended-purpose reconciliation",
    "Laboratory test-report adequacy review and protocol re-evaluation",
    "Corrective action (CAPA) formulation and recall/field-action response support",
    "Consolidated technical response drafting and structured rebuttal letters",
    "Cross-document consistency review prior to official Medsafe submission",
  ];

  const challenges = [
    "Does the drafted response answer Medsafe's core safety question directly rather than evasively?",
    "Is every technical statement supported by verifiable laboratory data, standards, or clinical literature?",
    "Do revised documents remain strictly consistent across all technical file sections and product labels?",
    "Can existing international evidence be scientifically justified to resolve Medsafe concerns?",
    "Is the complete response package finalized and submitted within the timeframe requested by Medsafe?",
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
            <span className="text-navy">Medsafe Queries</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Safety Review &amp; Response
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Medsafe Queries, Safety Review &amp; Technical Response
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Best Response Addresses the Safety Concern Behind the Request. Medsafe may seek information where there are concerns about a device, its safety, sponsor compliance, a recall or post-market event. A strong response should identify the underlying regulatory question, assemble the relevant evidence and ensure the sponsor and manufacturer provide one consistent position.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your Medsafe Response <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Medsafe Response Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Response Logic:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We use the logic: Request -&gt; Underlying Safety / Regulatory Concern -&gt; Evidence Gap -&gt; Corrective Strategy -&gt; Consolidated Response. We avoid answering only the surface wording when the real issue is evidence sufficiency, safety, classification or sponsor control.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Resolve Medsafe Regulatory Queries and Safety Inquiries"
        description="Our senior regulatory strategists deconstruct inquiries, draft evidence-based justifications, and close Medsafe requests."
      />
    </>
  );
}
