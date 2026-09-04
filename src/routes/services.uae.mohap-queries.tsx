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

export const Route = createFileRoute("/services/uae/mohap-queries")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP Queries, Deficiency Response & Technical Review Support | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Strategic response formulation for UAE MOHAP technical queries, registration deficiency letters, and scientific review objections. Root-cause analysis, dossier revisions, and time-bound closure.",
      },
      { name: "keywords", content: "UAE MOHAP Queries, Deficiency Response & Technical Review Support, services uae mohap queries, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE MOHAP Queries, Deficiency Response & Technical Review Support | NKB Regovanta" },
      { property: "og:description", content: "Strategic response formulation for UAE MOHAP technical queries, registration deficiency letters, and scientific review objections. Root-cause analysis, dossier revisions, and time-bound closure." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/mohap-queries" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE MOHAP Queries, Deficiency Response & Technical Review Support | NKB Regovanta" },
      { name: "twitter:description", content: "Strategic response formulation for UAE MOHAP technical queries, registration deficiency letters, and scientific review objections. Root-cause analysis, dossier revisions, and time-bound closure." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/mohap-queries" }],
  }),
  component: UAEMohapQueriesPage,
});

function UAEMohapQueriesPage() {
  const triggers = [
    "An official MOHAP deficiency letter or technical query has been issued in the electronic portal",
    "A medical equipment registration application faces scientific, clinical, or quality objections from the committee",
    "MOHAP has requested physical samples, Certificate of Analysis (CoA), or laboratory test validation data",
    "Responding to quality system, warehouse compliance, or sterilization inquiries within strict statutory windows",
  ];

  const supportItems = [
    "Question-by-question regulatory and technical analysis of the MOHAP inquiry",
    "Root-cause analysis to identify the underlying regulatory concern behind the question",
    "Technical-file cross-referencing and objective evidence-gap assessment",
    "Clinical evaluation and IVD performance justification authoring",
    "Risk-management linkage and benefit-risk documentation updates under ISO 14971",
    "Certificate-scope, manufacturing site, and model-family reconciliation",
    "Labeling, package insert, and Arabic IFU wording harmonization",
    "Laboratory test-report adequacy review and protocol re-evaluation",
    "Supplementary testing strategy and execution coordination where required",
    "Consolidated technical response dossier authoring and structured rebuttal letters",
    "Cross-section consistency check prior to final electronic resubmission in the MOHAP portal",
  ];

  const challenges = [
    "Does the drafted response answer the MOHAP evaluator's core concern directly rather than evasively?",
    "Is every technical statement supported by verifiable laboratory data, standards, or clinical literature?",
    "Do revised documents remain strictly consistent across all technical file sections and Arabic labels?",
    "Can existing international evidence be scientifically justified to avoid unnecessary repeat testing?",
    "Is the complete response package finalized and submitted well before the statutory MOHAP deadline?",
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
            <span className="text-navy">Queries &amp; Deficiencies</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Deficiency Resolution &amp; Rebuttal
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              MOHAP Queries, Deficiency Response &amp; Technical Review Support
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Best Response Addresses the Regulatory Concern Behind the Question. A MOHAP technical query may request one document, but the underlying concern can be broader: classification, certificate scope, insufficient safety/efficacy evidence, labeling inconsistency, product-family mismatch, missing analysis or unsupported claims. NKB Regovanta first identifies the underlying regulatory concern and then develops the response strategy.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your MOHAP Deficiency <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Deficiency Response Methodology</h2>
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
                Our response logic is: Question -&gt; Root Regulatory Concern -&gt; Evidence Gap -&gt; Corrective Strategy -&gt; Consolidated Response. We do not answer only the wording of the question if the underlying issue is larger.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Resolve MOHAP Inquiries and Secure Timely Device Registration"
        description="Our senior regulatory strategists analyze deficiency letters, formulate scientific rebuttals, and close technical committee queries."
      />
    </>
  );
}
