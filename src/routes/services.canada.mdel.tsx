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

export const Route = createFileRoute("/services/canada/mdel")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Medical Device Establishment Licence (MDEL) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Medical Device Establishment Licence (MDEL) applications and compliance support for Class I manufacturers, Canadian importers, and distributors. Procedures for distribution records, mandatory problem reporting, and recalls.",
      },
      { name: "keywords", content: "Health Canada Medical Device Establishment Licence (MDEL), services canada mdel, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Health Canada Medical Device Establishment Licence (MDEL) | NKB Regovanta" },
      { property: "og:description", content: "Medical Device Establishment Licence (MDEL) applications and compliance support for Class I manufacturers, Canadian importers, and distributors. Procedures for distribution records, mandatory problem reporting, and re..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada/mdel" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Health Canada Medical Device Establishment Licence (MDEL) | NKB Regovanta" },
      { name: "twitter:description", content: "Medical Device Establishment Licence (MDEL) applications and compliance support for Class I manufacturers, Canadian importers, and distributors. Procedures for distribution records, mandatory problem reporting, and re..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/mdel" }],
  }),
  component: CanadaMDELPage,
});

function CanadaMDELPage() {
  const mdelReviewItems = [
    "Determine whether the establishment requires an MDEL and which activities must be included.",
    "Confirm establishment name, address and regulatory activity information.",
    "Identify device classes and categories handled by the establishment.",
    "Review procedures for distribution records and traceability.",
    "Review complaint handling and escalation procedures.",
    "Review mandatory problem reporting procedures.",
    "Review recall procedures and responsibilities.",
    "Review storage, handling and distribution controls where relevant.",
    "Assess importer/distributor responsibilities for verifying device licensing and labelling.",
    "Support annual licence review requirements and licence amendments/notifications.",
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
            <span className="text-navy">MDEL Establishment</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Establishment Licence (SOR/98-282)
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Medical Device Establishment Licence (MDEL)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              An MDEL authorizes an establishment to conduct regulated activities involving medical devices in Canada. It commonly applies to Class I manufacturers and to importers and distributors of medical devices across all classes, subject to regulatory exemptions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Assess Your MDEL Requirements <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* MDEL Is an Operational Compliance Licence */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">MDEL Is an Operational Compliance Licence</h2>
            <p className="text-xs sm:text-[13px] text-navy/80 font-medium leading-relaxed mb-6">
              An MDEL is not simply a company registration. The establishment must have procedures and controls capable of supporting the regulated activities listed on the licence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mdelReviewItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mt-6">
              <p className="text-xs font-bold text-amber-900">Inspection-Readiness Perspective:</p>
              <p className="text-xs text-amber-900/80 font-medium leading-relaxed mt-1">
                For an MDEL holder, Health Canada may look beyond the existence of procedures and examine whether the establishment can demonstrate effective implementation through records, complaint files, distribution data, recall capability and licensing controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish and Maintain Your Health Canada MDEL Licence"
        description="Our quality and compliance consultants draft standard operating procedures, prepare initial MDEL filings, and manage annual licence reviews."
      />
    </>
  );
}
