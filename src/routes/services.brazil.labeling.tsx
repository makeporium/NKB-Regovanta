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
  Languages,
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/brazil/labeling")({
  head: () => ({
    meta: [
      {
        title:
          "Portuguese Labeling, IFU, UDI & SIUD Compliance (Brazil) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "ANVISA medical device and IVD Portuguese labeling review under RDC 751/2022, electronic IFU compliance, UDI requirements (RDC 591/2021), and SIUD database management under IN 426/2026.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/labeling" }],
  }),
  component: BrazilLabelingPage,
});

function BrazilLabelingPage() {
  const triggers = [
    "Preparing Brazilian Portuguese labels, packaging artwork, and IFUs for initial market launch",
    "Updating Brazil Registration Holder details or legal manufacturer corporate data",
    "Implementing physical and barcode UDI on medical device labels and packaging levels",
    "Preparing, formatting, or transmitting UDI data records directly to ANVISA's SIUD database",
    "Evaluating whether a proposed labeling update could affect approved clinical indications or claims",
  ];

  const supportItems = [
    "Brazilian Portuguese labeling compliance review (RDC 751/2022 & RDC 830/2023)",
    "Instructions for Use (IFU / Manual de Instruções) review and translation-control strategy",
    "Legal manufacturer and Detentor do Registro (BRH) identification on primary/secondary packaging",
    "Model, catalogue code, variant, and trade name consistency review",
    "Standardized symbols, contraindications, warnings, and precautions alignment",
    "Sterility, storage condition, and validated shelf-life statement verification",
    "IVD-specific labeling, analytical performance specifications, and handling instructions",
    "Electronic labeling (e-IFU / Instruções de Uso em formato eletrônico) eligibility and implementation",
    "UDI applicability and phased implementation readiness (RDC 591/2021)",
    "UDI-DI / packaging hierarchy strategy and data governance",
    "SIUD database record compilation, verification, and transmission under IN 426/2026",
    "Change impact assessment for post-approval labeling and IFU revisions",
  ];

  const challenges = [
    "Does the Portuguese label accurately identify both the authorized Brazilian holder and the legal manufacturer?",
    "Are Portuguese claims identical in clinical meaning to the approved global intended use and technical file?",
    "Do UDI-DI identifiers and SIUD metadata match the regulated product models and packaging hierarchy?",
    "Does a proposed minor labeling change inadvertently introduce a new clinical indication or risk claim?",
    "Are storage temperature, humidity, sterility, and expiration statements fully supported by study validation?",
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
            <span className="text-navy">Labeling &amp; UDI / SIUD</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              RDC 751/2022 &amp; SIUD Database
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Portuguese Labeling, IFU, UDI &amp; SIUD Compliance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Brazilian market access requires labeling and instructions for use to remain consistent with the ANVISA regularization, intended purpose, manufacturer/holder information and technical evidence. UDI requirements under RDC 591/2021 are being implemented by risk class, and ANVISA's SIUD database has been operational since March 2026 under IN 426/2026.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Brazil Labeling &amp; UDI Readiness <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Labeling &amp; UDI Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Consistency Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We compare the public-facing product information against the approved/notified regulatory data and technical evidence. Labels, IFUs, UDI data and ANVISA records should identify the same device and support the same intended use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Your Portuguese Packaging and Maintain SIUD Compliance"
        description="Our labeling consultants audit artwork for RDC 751/2022 conformity, review translations, and manage SIUD electronic submissions."
      />
    </>
  );
}
