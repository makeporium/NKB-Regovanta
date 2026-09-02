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

export const Route = createFileRoute("/services/brazil/ivd")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA IVD Registration & Performance Evidence (RDC 830/2023) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "In Vitro Diagnostic (IVD) classification (Class I-IV under RDC 830/2023), analytical and clinical performance evidence, Portuguese package inserts, and ANVISA Notificação/Registro submissions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/ivd" }],
  }),
  component: BrazilIVDPage,
});

function BrazilIVDPage() {
  const triggers = [
    "Launching a Class I, II, III, or IV IVD in the Brazilian market",
    "An IVD has been reclassified under the modernized RDC 830/2023 framework",
    "A performance claim, validated specimen type, target population, or intended clinical use is changing",
    "Existing EU IVDR or US FDA analytical and clinical performance evidence needs assessment for Brazilian submission",
  ];

  const supportItems = [
    "IVD qualification and Class I-IV risk classification under RDC 830/2023",
    "Intended use, analyte detection, specimen type, and clinical setting review",
    "Notificação versus Registro pathway strategy for diagnostic products",
    "Performance evidence gap assessment against Brazilian requirements",
    "Analytical performance evaluation strategy (sensitivity, specificity, LoD, LoQ, precision, cross-reactivity)",
    "Clinical performance evaluation strategy and comparator method benchmarking",
    "Performance study planning and protocol authoring",
    "Laboratory coordination with accredited clinical testing centers",
    "Technical dossier compilation according to RDC 830/2023 structure",
    "Portuguese labeling, package insert, and IFU review",
    "Post-market surveillance, tecnovigilância, and adverse incident reporting",
    "IVD change management, variation filing, and revalidation assessment",
  ];

  const analyticalParameters = [
    "Analytical sensitivity and limit of detection (LoD) / quantitation (LoQ)",
    "Analytical specificity, cross-reactivity, and potential interferents",
    "Accuracy / trueness and precision (repeatability and reproducibility)",
    "Measuring range, linearity, and high-dose hook effect where applicable",
    "Cut-off determination and clinical decision threshold justification",
    "Specimen stability under transportation, refrigeration, and freeze-thaw cycles",
    "Clinical sensitivity and specificity relative to an established reference method",
    "Comparator / reference method justification and diagnostic concordance",
  ];

  const challenges = [
    "Are the specimen types tested the exact same as those claimed on the Brazilian label?",
    "Do diagnostic sensitivity and specificity claims come from an appropriate population and comparator?",
    "Are cut-off, interference, and cross-reactivity claims adequately supported by objective data?",
    "Does the evidence support every intended-use population, user environment, or clinical setting?",
    "Have reclassification implications under RDC 830/2023 been fully addressed?",
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
            <span className="text-navy">IVD Registration</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              RDC 830/2023 IVD Framework
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              IVD Registration &amp; Performance Evidence (Brazil)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              IVDs in Brazil are regulated under RDC 830/2023, which updated risk classification, notification/registration procedures, changes, revalidation, cancellation, labeling and instructions for use. The regulatory pathway must connect the intended use, analyte, specimen, target population, risk class and performance claims to the analytical and clinical evidence available.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your ANVISA IVD Strategy <ArrowRight className="h-4 w-4" />
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

          {/* Analytical Performance Parameters */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">Performance Evidence Parameters Reviewed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {analyticalParameters.map((param, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{param}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Clinical Substantiation Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We build the IVD submission around the clinical question the test is intended to answer. Every major claim should be traceable to appropriate analytical or clinical performance evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Authorize Your In Vitro Diagnostic with ANVISA"
        description="Our diagnostic specialists evaluate analytical performance studies, clinical accuracy, and Portuguese package inserts for RDC 830/2023 compliance."
      />
    </>
  );
}
