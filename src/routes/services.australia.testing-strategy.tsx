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

export const Route = createFileRoute("/services/australia/testing-strategy")({
  head: () => ({
    meta: [
      {
        title:
          "Australia Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Strategic pre-clinical testing protocol design, NATA-accredited and ISO 17025 laboratory coordination, biocompatibility, electrical safety EMC, and IVD performance studies for TGA.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/testing-strategy" }],
  }),
  component: AustraliaTestingStrategyPage,
});

function AustraliaTestingStrategyPage() {
  const triggers = [
    "New medical device or IVD requiring verification and validation evidence for TGA submission",
    "Predicate or overseas evidence does not fully cover the Australian marketed configuration or indications",
    "TGA application audit identifies a specific testing or pre-clinical data gap",
    "New material, supplier, sterilisation process, software version, packaging system or manufacturing site",
    "Performance claims require additional analytical, bench, usability or clinical substantiation",
  ];

  const supportItems = [
    "Biocompatibility and biological evaluation (ISO 10993 series)",
    "Chemical characterisation and toxicological risk assessment",
    "Sterilisation validation (EO, Gamma, E-beam, Steam, VHP)",
    "Packaging validation and transportation transit testing (ASTM D4169, ISO 11607)",
    "Shelf-life and accelerated / real-time ageing studies",
    "Electrical safety and EMC testing (IEC 60601-1, IEC 60601-1-2)",
    "Bench and functional performance verification",
    "Mechanical durability, fatigue and tensile testing",
    "Software verification and validation (IEC 62304)",
    "Cybersecurity penetration testing and vulnerability analysis",
    "Human factors and usability engineering validation (IEC 62366-1)",
    "IVD analytical performance studies (sensitivity, specificity, LoD, precision)",
    "IVD clinical performance studies and comparator benchmarking",
    "Device-specific verification and validation protocols",
    "Protocol and final-report regulatory review before dossier inclusion",
    "Laboratory coordination with NATA and ISO 17025 accredited facilities",
  ];

  const challenges = [
    "Worst-case configuration chosen for convenience rather than clinical/safety risk",
    "Protocol acceptance criteria that are not technically or clinically justified",
    "Testing to a standard version that does not fully address the claimed use",
    "Samples that do not represent the final production-equivalent finished device",
    "Final laboratory reports that cannot be cleanly mapped into the Essential Principles checklist",
    "IVD analytical studies disconnected from the claimed specimen type or intended population",
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
            <span className="text-navy">Testing Strategy</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              NATA &amp; ISO 17025 Lab Coordination
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Testing Strategy &amp; Laboratory Coordination
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Testing should be designed around the regulatory question it needs to answer. NKB Regovanta defines the testing strategy from classification, risks, Essential Principles, device claims and conformity evidence, then coordinates with established laboratories where external testing is required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your Australia Testing Strategy <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Testing Areas We Support &amp; Coordinate</h2>
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
                Will the final test report answer the regulatory question TGA is likely to ask — or merely show that a laboratory test was completed?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Execute Pre-Clinical Testing with Clear TGA Regulatory Alignment"
        description="Our team designs study protocols, justifies sample sizes, and oversees testing at accredited laboratories."
      />
    </>
  );
}
