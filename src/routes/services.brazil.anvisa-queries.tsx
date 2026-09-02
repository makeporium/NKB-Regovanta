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

export const Route = createFileRoute("/services/brazil/anvisa-queries")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Queries, Exigências & Inspection Response Strategy | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "ANVISA official exigência response formulation, technical query resolution, root-cause analysis, BGMP inspection finding CAPA packages, and submission defense.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/anvisa-queries" }],
  }),
  component: BrazilAnvisaQueriesPage,
});

function BrazilAnvisaQueriesPage() {
  const triggers = [
    "An official ANVISA exigência or technical deficiency letter has been received",
    "A Class III or IV registration dossier has been questioned during pre-market technical review",
    "BGMP / CBPF on-site inspection non-conformances require root-cause analysis and formal CAPA response",
    "ANVISA requests clarification on testing, labeling, classification, clinical data, or manufacturing controls",
  ];

  const supportItems = [
    "Question-by-question regulatory and technical assessment of ANVISA's query",
    "Root-cause analysis of the underlying regulatory concern",
    "Evidence-gap determination and scientific justification strategy",
    "Cross-functional response planning across R&D, clinical, quality, and regulatory teams",
    "Dossier section revision and document harmonization",
    "Supplementary test-report and study protocol review",
    "Portuguese labeling, package artwork, and IFU correction strategy",
    "Risk-management file and clinical/performance evidence cross-referencing",
    "CAPA response package support for BGMP inspection observations",
    "Final response package quality check and electronic submission via Solicita",
  ];

  const challenges = [
    "Does the response answer the actual regulatory question directly and defensibly?",
    "Is every technical statement supported by underlying objective study data?",
    "Do revised documents remain strictly consistent with the remainder of the technical dossier?",
    "Is new laboratory testing genuinely required or can existing evidence be scientifically justified?",
    "Does the corrective action address systemic quality root causes rather than only the single observed finding?",
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
            <Link to="/services/brazil" className="hover:text-navy transition-colors">Brazil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">ANVISA Queries &amp; Exigências</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Exigência &amp; Inspection Defense
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              ANVISA Queries, Technical Requirements &amp; Inspection Response
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              ANVISA questions should be answered by addressing the regulatory concern behind the request, not by simply adding documents. A technically complete but poorly structured response can create additional review cycles if it does not explain why the evidence resolves the specific issue raised.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Plan Your ANVISA Response Strategy <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Response Support Methodology</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Senior Regulatory Methodology:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We first determine why ANVISA is asking the question. Is the issue missing evidence, inconsistent documentation, insufficient testing, weak classification rationale, certificate-scope mismatch, or an actual product/compliance gap? The response strategy is then built around closing that specific concern.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Resolve ANVISA Exigências with Expert Regulatory Justification"
        description="Our team deconstructs technical queries, prepares evidence-based response packages, and secures timely approvals."
      />
    </>
  );
}
