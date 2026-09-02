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

export const Route = createFileRoute("/services/canada/ivd")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada IVD Registration & Performance Evidence | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "In Vitro Diagnostic (IVD) classification under Schedule 1 Part 2, Class II-IV MDL licensing, analytical performance studies (LoD, precision, cross-reactivity), and clinical performance evaluation for Health Canada.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/ivd" }],
  }),
  component: CanadaIVDPage,
});

function CanadaIVDPage() {
  const ivdStrategy = [
    "IVD qualification and classification under Schedule 1 Part 2",
    "Intended-use and specimen-type review (serum, plasma, whole blood, urine, swab)",
    "Analyte and clinical-use assessment",
    "Near-patient / point-of-care (PoC) considerations",
    "MDL pathway for Class II, III or IV IVDs",
    "MDSAP and QMS alignment",
    "Analytical performance evidence strategy",
    "Clinical performance evidence strategy",
    "Reference method/comparator strategy",
    "Labelling and performance-claim review",
    "Laboratory study coordination",
    "IMDRF ToC dossier development for higher-risk IVDs",
    "Post-market and change-control planning",
  ];

  const analyticalStudies = [
    "Precision, repeatability and reproducibility (within-run, between-run, multi-site)",
    "Analytical sensitivity / limit of detection (LoD) & limit of quantitation (LoQ)",
    "Analytical specificity and interference substances",
    "Linearity and measuring range",
    "Cross-reactivity with closely related analytes",
    "Cut-off determination and clinical threshold validation",
    "Specimen stability and transport/storage handling",
    "Reagent stability, open-vial and onboard calibration shelf-life",
    "Clinical sensitivity and specificity relative to reference method",
    "Comparison with reference method or standard comparator assay",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/canada" className="hover:text-navy transition-colors">Canada</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">IVD Registration</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              In Vitro Diagnostics
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Health Canada IVD Registration &amp; Performance Evidence
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              IVDs are classified under a separate Canadian classification framework because risk is driven not only by the assay technology but by how the result will be used and the consequences of an incorrect result.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your Health Canada IVD Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Our IVD Strategy */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">Our IVD Strategy Includes</h2>
              <div className="space-y-2">
                {ivdStrategy.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Analytical Performance Studies */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">Analytical Performance Evidence</h2>
              <div className="space-y-2">
                {analyticalStudies.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#e03131] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
            <p className="text-xs font-bold text-navy">Expert Focus:</p>
            <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
              A performance claim should never be stronger than the study design that supports it. We map intended use and performance claims to the analytical and clinical evidence before the dossier is finalized.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Prepare Your Health Canada IVD Pre-Market Submission"
        description="Our diagnostic specialists guide analytical validation studies, comparator assay benchmarking, and bilingual package inserts."
      />
    </>
  );
}
