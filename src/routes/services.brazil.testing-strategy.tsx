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

export const Route = createFileRoute("/services/brazil/testing-strategy")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Medical Device Testing Strategy & Laboratory Coordination | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Pre-clinical testing strategy for ANVISA registrations, INMETRO electrical safety coordination, biocompatibility, sterilization, and ANVISA-recognized / ILAC-accredited laboratory management.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/testing-strategy" }],
  }),
  component: BrazilTestingStrategyPage,
});

function BrazilTestingStrategyPage() {
  const triggers = [
    "Existing global test reports do not fully cover the Brazilian marketed device configuration",
    "ANVISA has raised a specific testing or pre-clinical validation exigência during technical review",
    "A new device family or complex grouping requires scientifically justified worst-case model selection",
    "IVD analytical or clinical performance evaluation studies are required under RDC 830/2023",
    "A design, raw material, manufacturing site, or sterilization change creates new testing requirements",
  ];

  const supportItems = [
    "Testing gap assessment against Brazilian and international recognized standards",
    "Applicable standard and test method review (ISO, IEC, ASTM, CLSI, Pharmacopoeia)",
    "Worst-case device and configuration rationale documentation",
    "Sample-size, lot selection, and statistical power rationale development",
    "Protocol and acceptance-criteria review prior to study initiation",
    "Laboratory coordination with ANVISA-recognized and ILAC/RBC-accredited facilities",
    "Biocompatibility and chemical characterization testing (ISO 10993)",
    "Sterilization validation, packaging seal integrity, and shelf-life ageing studies",
    "Electrical safety and EMC testing (IEC 60601 series & INMETRO certification interface)",
    "Bench, mechanical, durability, and functional performance testing",
    "Software verification and validation (IEC 62304)",
    "Cybersecurity penetration and vulnerability assessment evidence",
    "Human factors and usability engineering testing (IEC 62366-1)",
    "IVD analytical and clinical performance studies",
    "Final laboratory report regulatory adequacy review before dossier insertion",
  ];

  const challenges = [
    "Does the study protocol test the actual commercial device or an appropriate, justified worst case?",
    "Are acceptance criteria linked directly to design inputs, risk controls, or clinical relevance?",
    "Does the final lab report identify models, lot numbers, software versions, and configurations clearly?",
    "Can the test evidence bridge minor engineering differences between global and Brazilian variants?",
    "Will ANVISA assessors be able to cleanly trace the test outcome to the claimed clinical performance?",
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
            <span className="text-navy">Testing Strategy</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              ILAC &amp; ANVISA Lab Coordination
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Testing Strategy &amp; Laboratory Coordination
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Testing should be planned from the regulatory decision backward. NKB Regovanta helps manufacturers identify what evidence is needed for Brazil, whether existing global reports can be leveraged, and where new studies are required. Where third-party testing is needed, we can coordinate with established laboratories and review protocols and reports before they enter the ANVISA dossier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your Brazil Testing Strategy <ArrowRight className="h-4 w-4" />
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
              <p className="text-xs font-bold text-navy">Regulatory Testing Philosophy:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not simply send a test list to a laboratory. We define the regulatory question the study must answer, challenge the configuration and acceptance criteria, and make sure the resulting report can be used directly in the Brazilian technical dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Design and Coordinate Your Pre-Clinical Testing for ANVISA Approval"
        description="Our team structures test plans, justifies worst-case articles, and manages accredited testing laboratories."
      />
    </>
  );
}
