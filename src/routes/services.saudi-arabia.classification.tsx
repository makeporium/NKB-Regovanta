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

export const Route = createFileRoute("/services/saudi-arabia/classification")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA Medical Device & IVD Classification (Class A-D) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "SFDA risk classification for Medical Devices (Class A, B, C, D) and IVDs in Saudi Arabia. Intended purpose justification, software SaMD rules, and MDMA evidence roadmap.",
      },
      { name: "keywords", content: "SFDA Medical Device & IVD Classification (Class A-D), services saudi arabia classification, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "SFDA Medical Device & IVD Classification (Class A-D) | NKB Regovanta" },
      { property: "og:description", content: "SFDA risk classification for Medical Devices (Class A, B, C, D) and IVDs in Saudi Arabia. Intended purpose justification, software SaMD rules, and MDMA evidence roadmap." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia/classification" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SFDA Medical Device & IVD Classification (Class A-D) | NKB Regovanta" },
      { name: "twitter:description", content: "SFDA risk classification for Medical Devices (Class A, B, C, D) and IVDs in Saudi Arabia. Intended purpose justification, software SaMD rules, and MDMA evidence roadmap." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/classification" }],
  }),
  component: SaudiClassificationPage,
});

function SaudiClassificationPage() {
  const triggers = [
    "Introducing a new medical device or IVD into the Kingdom of Saudi Arabia",
    "Intended clinical purpose or indications differ from existing US FDA or CE mark claims",
    "Uncertainty regarding whether a software algorithm constitutes a regulated SaMD or accessory",
    "Structuring a device family or system grouping for MDMA submission in the GHAD portal",
    "Evaluating whether an engineering change or software update alters the established SFDA risk class",
  ];

  const supportItems = [
    "Product qualification and Saudi regulatory-status assessment",
    "Intended purpose, clinical indication, and marketing claims review",
    "Class A, B, C, and D classification assessment for non-IVD medical devices",
    "IVD Class A, B, C, and D risk-based classification assessment",
    "Accessory, system, and medical device combination considerations",
    "Software as a Medical Device (SaMD) and digital health classification strategy",
    "Classification-rule justification documentation under SFDA guidelines",
    "Regulatory evidence roadmap connecting classification to MDMA technical file depth",
    "Assessment of whether a change in intended purpose or technology affects classification",
  ];

  const challenges = [
    "Does the intended medical purpose cleanly defend the assigned SFDA risk class?",
    "Are sterile, measuring, or reusable surgical attributes properly identified for Class A devices?",
    "Will an active diagnostic or therapeutic function trigger higher-risk Class C/D rules?",
    "Does the overseas technical file directly support the Saudi configuration and claims?",
    "Have all system components, accessories, and consumables been appropriately classified?",
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
            <span className="text-navy">Product Classification</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              SFDA Risk Rules (Class A, B, C, D)
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              SFDA Regulatory Strategy &amp; Product Classification
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Classification Drives the Saudi Evidence and Authorization Route. Saudi Arabia uses a risk-based classification framework for medical devices. Devices other than IVDs are classified as Class A, B, C or D, with additional distinctions for certain Class A sterile, measuring and reusable surgical instruments. IVDs are also classified from Class A through Class D based on individual and public-health risk.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Define Your SFDA Regulatory Pathway <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Strategic Approach:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not stop at assigning a class. We trace the classification into the technical documentation, level of evidence, QMS expectations, local regulatory structure and post-market controls that must follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Your SFDA Risk Classification and Authorization Pathway"
        description="Our Saudi regulatory consultants classify your medical devices, IVDs and SaMD under SFDA rules to build a compliant MDMA strategy."
      />
    </>
  );
}
