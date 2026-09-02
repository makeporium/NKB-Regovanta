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

export const Route = createFileRoute("/services/uae/labeling")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP Labeling, IFU, Packaging & Advertising Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Medical device and IVD labeling compliance for UAE MOHAP. Bilingual Arabic and English IFU review, packaging artwork verification, Unique Device Identification (UDI), and promotional marketing compliance.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/labeling" }],
  }),
  component: UAELabelingPage,
});

function UAELabelingPage() {
  const triggers = [
    "Preparing Arabic and English product labels, packaging artwork, and IFUs for UAE market launch",
    "Verifying commercial brochures, leaflets, and promotional materials against registered MOHAP claims",
    "Implementing Unique Device Identification (UDI) barcodes on device primary and secondary packaging",
    "Updating manufacturer, licensed local marketing office, or storage condition statements on labeling",
  ];

  const supportItems = [
    "Product label and Instructions for Use (IFU) regulatory compliance review against MOHAP guidelines",
    "Bilingual Arabic and English language presentation review for professional and home-use medical devices",
    "Legal manufacturer and UAE licensed medical warehouse / MAH identification on packaging",
    "Warnings, contraindications, precautions, and residual risk statement harmonization",
    "Standardized symbol verification (ISO 15223-1) and localized storage/sterility condition labeling",
    "UDI barcode verification (GS1 / HIBCC) and product identifier consistency review",
    "IVD-specific labeling, reagent storage temperatures, specimen handling, and performance claims",
    "Electronic Instructions for Use (e-IFU) eligibility assessment and compliance",
    "Packaging artwork, clinical user manual, and commercial marketing brochure review",
    "Regulatory impact assessment for post-approval packaging revisions and artwork updates",
  ];

  const challenges = [
    "Does the product require mandatory Arabic instructions for use based on its intended user (lay user vs healthcare professional)?",
    "Are the licensed UAE applicant's legal details and MOHAP registration reference numbers formatted correctly?",
    "Do UDI identifiers and model reference numbers match the registered commercial catalogue exactly?",
    "Do promotional marketing claims in brochures strictly reflect the clinical intended purpose authorized by MOHAP?",
    "Are temperature, humidity, sterility, and expiration symbols completely aligned with stability validation reports?",
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
            <span className="text-navy">Labeling &amp; IFU</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Bilingual Artwork &amp; UDI
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Labeling, IFU, Packaging &amp; Market-Claim Compliance (UAE)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Product Presented in the UAE Must Match the Registered Regulatory Position. Labels, IFUs, packaging and product brochures are part of the evidence submitted to MOHAP and should remain consistent with the registered intended purpose, model list, warnings, precautions and supporting evidence. English or Arabic product information may also be relevant depending on the application and product presentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your UAE Labeling <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Labeling &amp; Packaging Review Scope</h2>
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
                We compare the market-facing product against the registration dossier. A seemingly simple label change can become a regulatory issue if it changes intended purpose, indications, performance claims, user population or risk controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Your Bilingual Packaging and Promotional Claims for the UAE"
        description="Our labeling consultants audit artwork for MOHAP compliance, translate clinical IFUs into Arabic, and verify UDI identifiers."
      />
    </>
  );
}
