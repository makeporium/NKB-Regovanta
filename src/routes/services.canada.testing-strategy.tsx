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

export const Route = createFileRoute("/services/canada/testing-strategy")({
  head: () => ({
    meta: [
      {
        title:
          "Medical Device Testing Strategy & Laboratory Coordination (Canada) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Strategic pre-clinical testing protocol design, worst-case rationale development, and GLP/ISO 17025 accredited laboratory coordination for Health Canada MDL submissions.",
      },
      { name: "keywords", content: "Medical Device Testing Strategy & Laboratory Coordination (Canada), services canada testing strategy, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Medical Device Testing Strategy & Laboratory Coordination (Canada) | NKB Regovanta" },
      { property: "og:description", content: "Strategic pre-clinical testing protocol design, worst-case rationale development, and GLP/ISO 17025 accredited laboratory coordination for Health Canada MDL submissions." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada/testing-strategy" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Medical Device Testing Strategy & Laboratory Coordination (Canada) | NKB Regovanta" },
      { name: "twitter:description", content: "Strategic pre-clinical testing protocol design, worst-case rationale development, and GLP/ISO 17025 accredited laboratory coordination for Health Canada MDL submissions." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/testing-strategy" }],
  }),
  component: CanadaTestingStrategyPage,
});

function CanadaTestingStrategyPage() {
  const testingAreas = [
    "Bench and functional performance testing",
    "Biocompatibility and chemical characterization (ISO 10993)",
    "Sterilization validation (EO, Gamma, Steam, VHP)",
    "Packaging and transportation validation (ASTM D4169, ISO 11607)",
    "Shelf-life and accelerated/real-time ageing studies",
    "Electrical safety and EMC (IEC 60601-1, IEC 60601-1-2)",
    "Software verification and validation (IEC 62304)",
    "Cybersecurity testing and supporting vulnerability documentation",
    "Human factors and usability engineering (IEC 62366-1)",
    "Mechanical and durability testing",
    "IVD analytical performance studies",
    "IVD clinical performance studies",
    "Other product-specific verification and validation",
  ];

  const approachSteps = [
    "Define what regulatory question the test must answer.",
    "Confirm applicable recognized or relevant standards.",
    "Challenge sample selection and device configuration.",
    "Identify appropriate worst-case rationale where relevant.",
    "Review comparator/reference method selection.",
    "Review acceptance criteria before study execution.",
    "Review protocols for regulatory adequacy.",
    "Review deviations and their impact on interpretability.",
    "Review reports before dossier integration.",
    "Trace the resulting evidence back to the licence application and claimed performance.",
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
            <span className="text-navy">Testing Strategy</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Lab Coordination &amp; Protocol Review
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Testing Strategy &amp; Laboratory Coordination
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Testing should be designed around the regulatory question the evidence must answer. NKB Regovanta helps manufacturers define the evidence strategy before studies are initiated and can coordinate testing with established laboratories where external testing is required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Build Your Canada Testing Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Testing Areas */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">Testing Areas We Can Support</h2>
              <div className="space-y-2">
                {testingAreas.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How NKB Approaches Testing */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">How NKB Approaches Testing</h2>
              <div className="space-y-2">
                {approachSteps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-medium text-navy/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
            <p className="text-xs font-bold text-navy">Our Difference:</p>
            <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
              We do not simply refer the client to a laboratory. We sit between the manufacturer, laboratory and Health Canada dossier so the generated evidence is fit for regulatory review and does not have to be recreated later.
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Coordinate Your Pre-Clinical Testing with Expert Regulatory Oversight"
        description="Our engineers define acceptance criteria, justify sample sizes and worst-case test articles, and manage accredited laboratories."
      />
    </>
  );
}
