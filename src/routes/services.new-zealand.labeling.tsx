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

export const Route = createFileRoute("/services/new-zealand/labeling")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand Labeling, IFU & Advertising Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Medical device and IVD labeling compliance under New Zealand Medicines Regulations. Instructions for Use (IFU), packaging artwork, sponsor details, and advertising review under Medsafe guidelines.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/labeling" }],
  }),
  component: NZLabelingPage,
});

function NZLabelingPage() {
  const triggers = [
    "Preparing product labels, packaging artwork, and Instructions for Use (IFU) for New Zealand market launch",
    "Verifying that commercial brochures, websites, and marketing materials comply with Medsafe advertising rules",
    "Adding New Zealand Sponsor legal contact details to primary/secondary packaging or user manuals",
    "Updating storage temperature, sterility, or clinical indication statements on packaging",
  ];

  const supportItems = [
    "Product label and Instructions for Use (IFU) regulatory compliance review against NZ Regulations",
    "Legal manufacturer and New Zealand Sponsor identification on packaging and user documentation",
    "Intended clinical purpose and therapeutic claims alignment with technical evidence",
    "Warnings, precautions, contraindications, and residual risk statement harmonization",
    "Standardized symbol verification (ISO 15223-1) and storage/sterility condition labeling",
    "Sterile, measuring, and implantable device specific labeling information review",
    "Electronic Instructions for Use (e-IFU) eligibility assessment and compliance",
    "IVD-specific labeling, specimen handling, and diagnostic performance claims review",
    "Advertising, brochure, and commercial marketing claim review under the Medicines Act 1981",
    "Regulatory impact assessment for post-approval packaging revisions and artwork updates",
  ];

  const challenges = [
    "Are the legal manufacturer and New Zealand Sponsor clearly identified on packaging or documentation?",
    "Do promotional marketing claims in brochures strictly reflect the clinical evidence in the technical file?",
    "Does marketing material avoid prohibited therapeutic claims under Section 58 of the Medicines Act?",
    "Are all model numbers, catalogue codes, and batch/lot symbols aligned with the WAND database record?",
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
            <Link to="/services/new-zealand" className="hover:text-navy transition-colors">New Zealand</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Labeling &amp; IFU</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Medicines Act Compliance
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Labelling, IFU &amp; Advertising Compliance (New Zealand)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Marketed Product Must Remain Consistent With Its Intended Purpose and Evidence. Labelling and Instructions for Use should accurately communicate the device identity, intended purpose, safe use, warnings and manufacturer/sponsor information required for the New Zealand market. Advertising should not make misleading or unsupported therapeutic claims.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your New Zealand Labelling <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Labeling &amp; Advertising Review Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Consistency Standard:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We compare the marketed claims against the technical evidence, risk controls and WAND/sponsor information. A commercial label change can become a regulatory issue if it alters intended purpose, device description, safety information or the basis on which the sponsor classified and supplied the device.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Packaging Artwork and Promotional Claims for New Zealand"
        description="Our labeling consultants audit artwork for Medsafe compliance, verify sponsor details, and review marketing claims."
      />
    </>
  );
}
