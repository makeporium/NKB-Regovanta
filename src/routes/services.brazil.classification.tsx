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

export const Route = createFileRoute("/services/brazil/classification")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Brazil Medical Device & IVD Classification (RDC 751/2022) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "ANVISA risk classification for Medical Devices (Class I-IV under RDC 751/2022) and IVDs (RDC 830/2023). Technical name selection, family grouping, and Notificação vs Cadastro determination.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/classification" }],
  }),
  component: BrazilClassificationPage,
});

function BrazilClassificationPage() {
  const triggers = [
    "A new medical device or IVD is being introduced in the Brazilian market",
    "The intended use or clinical claims differ from an existing US/EU global registration",
    "The manufacturer is uncertain whether the product is a medical device, accessory, SaMD or IVD",
    "A product family needs to be grouped appropriately for Brazilian regularization",
    "An existing classification may be affected by a design, software or intended-use change",
  ];

  const supportItems = [
    "Product qualification and Brazilian regulatory status assessment",
    "Intended purpose, clinical indications and marketing claims review",
    "Class I, II, III, and IV risk classification under RDC 751/2022",
    "IVD risk classification under RDC 830/2023",
    "Accessory, system and family grouping considerations",
    "Brazilian technical-name (nome técnico) and grouping strategy",
    "Notificação versus Cadastro / Registro pathway assessment",
    "Initial BGMP / CBPF applicability and timeline assessment",
    "Regulatory evidence roadmap and technical dossier gap analysis",
  ];

  const challenges = [
    "Does the intended use support the proposed risk class?",
    "Does the Brazilian technical name align with the device actually being marketed?",
    "Are all models legitimately grouped under the same family or notification/registration?",
    "Will a planned claim or feature move the device into a higher-risk rule?",
    "Does the current global evidence actually support the Brazilian configuration?",
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
            <span className="text-navy">Product Classification</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              RDC 751/2022 &amp; RDC 830/2023
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              ANVISA Regulatory Strategy &amp; Product Classification
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Correct classification is the foundation of the Brazilian submission. Under RDC 751/2022, medical devices are classified from Class I to IV according to risk. The classification determines whether the product follows notification or registration, the level of evidence expected, BGMP implications and the way changes will be controlled after market entry.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Define Your ANVISA Regulatory Pathway <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">ANVISA Classification Principle:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not treat classification as a checkbox. We trace the classification decision into the entire Brazilian pathway: registration regime, dossier depth, manufacturing certification (CBPF), labeling, post-market controls and change obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Your ANVISA Risk Classification and Pathway"
        description="Our Brazilian regulatory specialists classify your devices under RDC 751/2022, map nome técnico codes, and determine Notificação vs Registro."
      />
    </>
  );
}
