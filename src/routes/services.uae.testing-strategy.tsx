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

export const Route = createFileRoute("/services/uae/testing-strategy")({
  head: () => ({
    meta: [
      {
        title:
          "UAE Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Pre-clinical testing strategy for UAE MOHAP medical equipment registration. Biocompatibility (ISO 10993), electrical safety (IEC 60601), EMC, sterilization, and accredited laboratory coordination.",
      },
      { name: "keywords", content: "UAE Medical Device Testing Strategy & Laboratory Coordination, services uae testing strategy, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta" },
      { property: "og:description", content: "Pre-clinical testing strategy for UAE MOHAP medical equipment registration. Biocompatibility (ISO 10993), electrical safety (IEC 60601), EMC, sterilization, and accredited laboratory coordination." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/testing-strategy" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta" },
      { name: "twitter:description", content: "Pre-clinical testing strategy for UAE MOHAP medical equipment registration. Biocompatibility (ISO 10993), electrical safety (IEC 60601), EMC, sterilization, and accredited laboratory coordination." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/testing-strategy" }],
  }),
  component: UAETestingStrategyPage,
});

function UAETestingStrategyPage() {
  const triggers = [
    "Existing global test reports do not fully cover the specific product configurations intended for the UAE",
    "MOHAP or technical evaluators request additional pre-clinical safety, electrical, biological, or chemical test data",
    "A complex product family or modular system requires a scientifically justified worst-case testing model",
    "IVD analytical or clinical performance evaluation studies are required to substantiate diagnostic claims",
    "A raw material, manufacturing process, software version, or sterilization method change requires new test evidence",
  ];

  const supportItems = [
    "Testing gap assessment against MOHAP recognized standards and international consensus benchmarks",
    "Applicable standard and test method determination (ISO, IEC, ASTM, CLSI, Pharmacopoeia)",
    "Worst-case device and configuration rationale documentation",
    "Sample size, batch selection, and statistical justification protocols",
    "Pre-test protocol review, acceptance criteria validation, and test article quarantine governance",
    "Coordination with accredited, ILAC-recognized, and GLP-compliant testing laboratories",
    "Biocompatibility and biological evaluation studies (ISO 10993 series)",
    "Chemical characterization and toxicological risk assessment (ISO 10993-17 / ISO 10993-18)",
    "Sterilization validation, bioburden testing, and sterile barrier packaging integrity testing",
    "Packaging transit simulation (ASTM D4169 / ISTA) and real-time/accelerated shelf-life aging studies",
    "Electrical safety and Electromagnetic Compatibility (EMC) testing (IEC 60601 series)",
    "Bench, mechanical, durability, and functional performance testing",
    "Software verification, validation, and automated test execution review (IEC 62304)",
    "Cybersecurity vulnerability assessment and penetration testing evidence",
    "Usability and human factors testing (IEC 62366-1)",
    "MOHAP physical sample and Certificate of Analysis (CoA) readiness where requested",
    "Final laboratory test report regulatory review prior to MOHAP dossier integration",
  ];

  const challenges = [
    "Does the test protocol evaluate the actual finished commercial device or a scientifically justified worst case?",
    "Are test acceptance criteria directly tied to design inputs, risk controls, and clinical safety thresholds?",
    "Does the lab report clearly document exact model numbers, batch/lot identifiers, and software build versions?",
    "Can the testing data bridge minor engineering variations between international and UAE product lines?",
    "Will MOHAP evaluators be able to trace test results directly to the claims made in the product brochure and IFU?",
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
            <span className="text-navy">Testing Strategy</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Laboratory &amp; Protocol Design
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Testing Strategy &amp; Laboratory Coordination (UAE)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Testing Should Be Designed Around the Regulatory Question. NKB Regovanta helps manufacturers determine what testing is required to support the UAE registration evidence package and whether existing global test reports can be leveraged. Where new testing is needed, we can coordinate with established laboratories and review protocols and reports from a regulatory perspective.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your UAE Testing Strategy <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Testing Disciplines We Design &amp; Coordinate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Regulatory Testing Rationale:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                At protocol level, we challenge the worst-case device, sample selection, applicable standard, test method, acceptance criteria, deviations and whether the resulting report actually supports the intended use and regulatory claim. We do not simply refer the manufacturer to a laboratory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Structure Pre-Clinical Testing for UAE MOHAP Approval"
        description="Our testing strategists define study protocols, justify worst-case testing rationale, and manage accredited laboratories."
      />
    </>
  );
}
