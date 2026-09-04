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

export const Route = createFileRoute("/services/saudi-arabia/testing-strategy")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Pre-clinical testing strategy for SFDA MDMA submissions, electrical safety (IEC 60601), EMC, biocompatibility (ISO 10993), sterilization, and SFDA-recognized laboratory coordination.",
      },
      { name: "keywords", content: "SFDA Medical Device Testing Strategy & Laboratory Coordination, services saudi arabia testing strategy, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "SFDA Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta" },
      { property: "og:description", content: "Pre-clinical testing strategy for SFDA MDMA submissions, electrical safety (IEC 60601), EMC, biocompatibility (ISO 10993), sterilization, and SFDA-recognized laboratory coordination." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia/testing-strategy" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SFDA Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta" },
      { name: "twitter:description", content: "Pre-clinical testing strategy for SFDA MDMA submissions, electrical safety (IEC 60601), EMC, biocompatibility (ISO 10993), sterilization, and SFDA-recognized laboratory coordination." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/testing-strategy" }],
  }),
  component: SaudiTestingStrategyPage,
});

function SaudiTestingStrategyPage() {
  const triggers = [
    "Existing global test reports do not fully cover the specific product configurations intended for Saudi Arabia",
    "SFDA has issued a deficiency notice requesting additional physical, electrical, biological, or chemical testing data",
    "A complex device family or multi-component system requires scientifically defended worst-case sample selection",
    "IVD analytical or clinical performance evaluation studies are required to substantiate diagnostic claims",
    "A change in raw materials, manufacturing process, software, or sterilization creates new testing requirements",
  ];

  const supportItems = [
    "Testing gap assessment against SFDA recognized standards and international consensus benchmarks",
    "Applicable standard and test method determination (ISO, IEC, ASTM, CLSI, Pharmacopoeial monographs)",
    "Worst-case device and configuration rationale documentation",
    "Sample size, batch selection, and statistical justification protocols",
    "Pre-test protocol review, acceptance criteria validation, and test article quarantine governance",
    "Coordination with SFDA-recognized, ILAC-accredited, and GLP-compliant testing laboratories",
    "Biocompatibility and biological evaluation studies (ISO 10993 series)",
    "Chemical characterization and toxicological risk assessment (ISO 10993-17 / ISO 10993-18)",
    "Sterilization validation, bioburden testing, and sterile barrier integrity testing",
    "Packaging transit simulation (ASTM D4169 / ISTA) and real-time/accelerated shelf-life aging studies",
    "Electrical safety and Electromagnetic Compatibility (EMC) testing (IEC 60601 series)",
    "Bench, mechanical, durability, and functional performance testing",
    "Software verification, validation, and automated test execution review (IEC 62304)",
    "Cybersecurity vulnerability assessment and penetration testing evidence",
    "Usability and human factors testing (IEC 62366-1)",
    "Final laboratory test report regulatory review prior to MDMA technical file integration",
  ];

  const challenges = [
    "Does the test protocol evaluate the actual finished commercial device or a justified worst-case model?",
    "Are test acceptance criteria directly tied to design inputs, risk controls, and clinical safety thresholds?",
    "Does the lab report clearly document exact model numbers, batch/lot identifiers, and software build versions?",
    "Can the testing data bridge minor engineering variations between international and Saudi product lines?",
    "Will SFDA evaluators be able to trace test results directly to the claims made in the Arabic/English IFU?",
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
            <span className="text-navy">Testing Strategy</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Laboratory &amp; Protocol Design
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Testing Strategy &amp; Laboratory Coordination (SFDA)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Testing Should Be Designed to Close a Regulatory Evidence Gap. NKB Regovanta helps manufacturers determine which tests are required to support the SFDA pathway and how those studies should be designed so the resulting evidence is usable in the technical file. Where external testing is required, we can coordinate with established laboratories and review study protocols and reports from the perspective of the final MDMA dossier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your Saudi Testing Strategy <ArrowRight className="h-4 w-4" />
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
              <p className="text-xs font-bold text-navy">Protocol Design Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                At protocol level, we challenge the tested configuration, worst-case rationale, sample selection, applicable standard, acceptance criteria and whether the study actually answers the safety/performance question it is intended to support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Structure Pre-Clinical Testing for SFDA MDMA Approval"
        description="Our testing strategists define study protocols, justify worst-case testing rationale, and manage accredited laboratories."
      />
    </>
  );
}
