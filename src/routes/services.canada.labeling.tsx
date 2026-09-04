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

export const Route = createFileRoute("/services/canada/labeling")({
  head: () => ({
    meta: [
      {
        title:
          "Canadian Labelling, French/English & IFU Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Health Canada bilingual labelling compliance under Part 21 of the Medical Devices Regulations (SOR/98-282). Primary and secondary packaging, Instructions for Use (IFU), and electronic labelling.",
      },
      { name: "keywords", content: "Canadian Labelling, French/English & IFU Compliance, services canada labeling, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Canadian Labelling, French/English & IFU Compliance | NKB Regovanta" },
      { property: "og:description", content: "Health Canada bilingual labelling compliance under Part 21 of the Medical Devices Regulations (SOR/98-282). Primary and secondary packaging, Instructions for Use (IFU), and electronic labelling." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada/labeling" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Canadian Labelling, French/English & IFU Compliance | NKB Regovanta" },
      { name: "twitter:description", content: "Health Canada bilingual labelling compliance under Part 21 of the Medical Devices Regulations (SOR/98-282). Primary and secondary packaging, Instructions for Use (IFU), and electronic labelling." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/labeling" }],
  }),
  component: CanadaLabelingPage,
});

function CanadaLabelingPage() {
  const labellingReviewItems = [
    "Device name and legal manufacturer identity",
    "Device identifier and catalogue/model information",
    "Intended use and directions for use",
    "Warnings, precautions, contraindications and limitations",
    "Sterility, storage and expiry information where applicable",
    "Primary and secondary packaging artwork",
    "IFU and package inserts",
    "IVD performance specifications where applicable",
    "Near-patient IVD labelling considerations",
    "Electronic labelling strategy where eligible",
    "Alignment of claims with the licensed indications and evidence package",
    "English/French language requirements based on the intended user and sales channel",
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
            <span className="text-navy">Labelling &amp; Bilingual</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              SOR/98-282 Part 21 Rules
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Canadian Labelling, French/English &amp; IFU Compliance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Canadian labelling requirements are not a translation exercise. The label, package, instructions for use and promotional claims must remain consistent with the licensed device, intended use and performance evidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Canadian Labelling <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Our Labelling Review Includes */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">Our Labelling Review Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {labellingReviewItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mt-6">
              <p className="text-xs font-bold text-amber-900">Language Requirement:</p>
              <p className="text-xs text-amber-900/80 font-medium leading-relaxed mt-1">
                For devices sold to the general public, specified label information and directions for use must be available in both English and French. For other devices, labelling may be in either official language, with the other official language made available on request. Near-patient IVD requirements should be assessed separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Audit Your Artwork and IFUs for Health Canada Compliance"
        description="Our labelling team reviews bilingual requirements, packaging legibility, symbol alignment, and electronic labelling."
      />
    </>
  );
}
