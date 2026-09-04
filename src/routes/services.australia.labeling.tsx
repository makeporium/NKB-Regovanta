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

export const Route = createFileRoute("/services/australia/labeling")({
  head: () => ({
    meta: [
      {
        title:
          "Australia Labelling, IFU, Advertising & UDI / AusUDID Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Australian medical device labelling review under Essential Principle 13, Sponsor/Manufacturer identification, TGA Advertising Code compliance, and phased UDI / AusUDID database submission.",
      },
      { name: "keywords", content: "Australia Labelling, IFU, Advertising & UDI / AusUDID Compliance, services australia labeling, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Australia Labelling, IFU, Advertising & UDI / AusUDID Compliance | NKB Regovanta" },
      { property: "og:description", content: "Australian medical device labelling review under Essential Principle 13, Sponsor/Manufacturer identification, TGA Advertising Code compliance, and phased UDI / AusUDID database submission." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/australia/labeling" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Australia Labelling, IFU, Advertising & UDI / AusUDID Compliance | NKB Regovanta" },
      { name: "twitter:description", content: "Australian medical device labelling review under Essential Principle 13, Sponsor/Manufacturer identification, TGA Advertising Code compliance, and phased UDI / AusUDID database submission." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/labeling" }],
  }),
  component: AustraliaLabelingPage,
});

function AustraliaLabelingPage() {
  const triggers = [
    "New Australian market launch or commercial relabelling",
    "Class III or Class IIb device now subject to mandatory Australian UDI requirements",
    "Preparing Class IIa, Class Is or IVD portfolios for subsequent UDI rollout phases",
    "Changing indications, clinical claims, warnings, packaging configurations or catalogue numbers",
    "Creating, uploading, and managing machine-readable records in the AusUDID database",
    "Using US FDA or EU MDR UDI identifiers and verifying Australian acceptance criteria",
  ];

  const supportItems = [
    "Label and Instructions for Use (IFU) regulatory compliance review (Essential Principle 13)",
    "Australian Sponsor and legal manufacturer identification requirements",
    "Intended purpose, clinical indications, and claim alignment with ARTG entry",
    "Contraindications, warnings, precautions, and residual risk statements",
    "Sterile barrier, measuring device, and implantable-device specific labelling",
    "IVD label specifications, performance parameters, and analytical limitations",
    "Electronic IFU (e-labelling) and software interface labelling considerations",
    "Direct-to-consumer and professional healthcare advertising review under the TGA Advertising Code",
    "Australian UDI applicability, barcode formats (GS1, HIBCC), and phased compliance timelines",
    "UDI-DI / packaging hierarchy strategy (unit of use, primary, secondary, shipper)",
    "AusUDID data compilation, validation, and electronic submission",
    "Assessment of UDI triggers following engineering or labelling modifications",
    "Consent-to-Supply strategy and application for temporary UDI non-compliances where eligible",
    "Harmonization across Label, IFU, ARTG entry, Declaration of Conformity, and AusUDID",
  ];

  const challenges = [
    "UDI carrier assigned to the incorrect packaging level",
    "AusUDID metadata inconsistent with ARTG inclusion or physical packaging labels",
    "Catalogue or model modification implemented without triggering a required new UDI-DI",
    "EU or US UDI formats carried forward without confirming Australian data attribute rules",
    "Marketing and web advertising claims broader than the approved ARTG intended purpose",
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
            <Link to="/services/australia" className="hover:text-navy transition-colors">Australia</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Labelling &amp; UDI</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              EP 13 &amp; AusUDID System
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Australian Labelling, IFU, Advertising &amp; UDI / AusUDID Compliance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Australian labelling must remain consistent with the intended purpose, technical evidence, Manufacturer Evidence and ARTG inclusion. Australia is also implementing UDI on a phased basis, with mandatory requirements already commencing for higher-risk devices from 1 July 2026.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Australian Labelling &amp; UDI Readiness <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* When This Support Is Needed */}
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
              <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                If the device changes, which data objects must change together — label, UDI-DI, AusUDID, ARTG, Declaration of Conformity and technical documentation?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Audit Your Packaging and Implement Australian UDI Compliance"
        description="Our labelling team reviews Essential Principle 13 compliance, structures AusUDID entries, and audits marketing claims."
      />
    </>
  );
}
