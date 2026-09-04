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

export const Route = createFileRoute("/services/saudi-arabia/labeling")({
  head: () => ({
    meta: [
      {
        title:
          "SFDA Labeling, IFU, UDI & Advertising Compliance (MDS-REQ 8) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Saudi FDA medical device and IVD labeling compliance. Arabic and English IFU translation review, Saudi-DI UDI database submission, packaging requirements, and promotional marketing approval under MDS-REQ 8.",
      },
      { name: "keywords", content: "SFDA Labeling, IFU, UDI & Advertising Compliance (MDS-REQ 8), services saudi arabia labeling, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "SFDA Labeling, IFU, UDI & Advertising Compliance (MDS-REQ 8) | NKB Regovanta" },
      { property: "og:description", content: "Saudi FDA medical device and IVD labeling compliance. Arabic and English IFU translation review, Saudi-DI UDI database submission, packaging requirements, and promotional marketing approval under MDS-REQ 8." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia/labeling" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SFDA Labeling, IFU, UDI & Advertising Compliance (MDS-REQ 8) | NKB Regovanta" },
      { name: "twitter:description", content: "Saudi FDA medical device and IVD labeling compliance. Arabic and English IFU translation review, Saudi-DI UDI database submission, packaging requirements, and promotional marketing approval under MDS-REQ 8." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/labeling" }],
  }),
  component: SaudiLabelingPage,
});

function SaudiLabelingPage() {
  const triggers = [
    "Preparing Arabic and English product labels, packaging artwork, and IFUs for Saudi market launch",
    "Implementing physical and digital Unique Device Identification (Saudi-DI UDI) on product packaging",
    "Reviewing marketing, commercial advertising, or promotional campaign materials under MDS-REQ 8",
    "Updating manufacturer, legal Authorized Representative, or regulatory contact details on labeling",
  ];

  const supportItems = [
    "Product label and Instructions for Use (IFU) regulatory compliance review against SFDA standards",
    "Bilingual Arabic and English language alignment for professional and lay-user medical devices",
    "Legal manufacturer and Saudi Authorized Representative identification on primary/secondary packaging",
    "Warnings, contraindications, precautions, and residual risk statement harmonization",
    "Standardized symbol verification (ISO 15223-1) and localized storage/sterility condition labeling",
    "Saudi-DI UDI code assignment, barcode verification (GS1 / HIBCC), and electronic database submission",
    "IVD-specific labeling, reagent storage, specimen handling, and performance claim review",
    "Electronic Instructions for Use (e-IFU) eligibility assessment and secure hosting compliance",
    "Medical device advertising, commercial brochure, and promotional campaign review under MDS-REQ 8",
    "Regulatory impact assessment for post-approval packaging revisions and artwork changes",
  ];

  const challenges = [
    "Does the device require mandatory Arabic instructions for use based on its intended user (lay person vs professional)?",
    "Are the Authorized Representative's legal name, establishment license number, and Saudi address displayed accurately?",
    "Do Saudi-DI UDI records in the SFDA portal match the physical packaging hierarchy (unit of use, box, carton)?",
    "Do promotional marketing claims in Arabic strictly reflect the clinical intended use authorized in the MDMA?",
    "Are temperature, humidity, sterility, and expiration symbols completely aligned with study validation reports?",
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
            <span className="text-navy">Labeling &amp; UDI</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              MDS-REQ 8 &amp; Saudi-DI UDI
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Labeling, IFU, UDI &amp; Advertising Compliance (SFDA)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Saudi-Market Product Must Match the Authorized Regulatory Position. Labeling and Instructions for Use should remain consistent with the intended purpose, technical file, risk controls and marketing authorization. Saudi requirements may also affect language presentation, manufacturer and AR information, symbols, UDI and promotional claims.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Saudi Labeling <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Labeling &amp; Advertising Scope</h2>
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
                We compare the label against the MDMA record, technical file and underlying evidence. A labeling change can become a regulatory change if it alters intended purpose, indication, performance claims or risk profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ensure Bilingual Arabic Labeling and Saudi-DI UDI Compliance"
        description="Our regulatory team audits packaging artwork, translates clinical IFUs into Arabic, and manages Saudi-DI electronic submissions."
      />
    </>
  );
}
