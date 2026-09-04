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

export const Route = createFileRoute("/services/australia/artg-inclusion")({
  head: () => ({
    meta: [
      {
        title:
          "Australia ARTG Inclusion & Application Preparation | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "TGA ARTG inclusion applications for Medical Devices and IVDs. Kind-of-device grouping, GMDN code alignment, TBS electronic submissions, and application audit defense.",
      },
      { name: "keywords", content: "Australia ARTG Inclusion & Application Preparation, services australia artg inclusion, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Australia ARTG Inclusion & Application Preparation | NKB Regovanta" },
      { property: "og:description", content: "TGA ARTG inclusion applications for Medical Devices and IVDs. Kind-of-device grouping, GMDN code alignment, TBS electronic submissions, and application audit defense." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/australia/artg-inclusion" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Australia ARTG Inclusion & Application Preparation | NKB Regovanta" },
      { name: "twitter:description", content: "TGA ARTG inclusion applications for Medical Devices and IVDs. Kind-of-device grouping, GMDN code alignment, TBS electronic submissions, and application audit defense." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/artg-inclusion" }],
  }),
  component: AustraliaARTGInclusionPage,
});

function AustraliaARTGInclusionPage() {
  const triggers = [
    "First ARTG inclusion for a manufacturer",
    "Adding new models, families or variants to an existing product line",
    "Assessing whether multiple products can sit under one ARTG inclusion",
    "Correcting an existing ARTG entry that no longer matches the supplied product",
    "Changing Sponsor or manufacturer information on the register",
    "Preparing for application audit or preliminary-assessment questions",
  ];

  const supportItems = [
    "ARTG inclusion pathway assessment (Class I to III & IVD Class 1 to 4)",
    "Kind-of-device and grouping strategy to optimize ARTG entries",
    "GMDN term assessment and precision code selection",
    "Manufacturer and Sponsor data alignment across all systems",
    "Manufacturer Evidence linkage review and verification",
    "Declaration of Conformity review and harmonization",
    "Intended purpose and classification consistency review",
    "Supporting documentation package compilation",
    "TGA Business Services (TBS) application preparation and lodgement",
    "Application audit / Request for Information (RFI) response support",
    "ARTG entry quality check and certificate validation after inclusion",
  ];

  const challenges = [
    "Grouping products that do not meet the same kind-of-device criteria",
    "GMDN term that does not accurately represent intended purpose or technology",
    "Mismatch between ARTG application and Declaration of Conformity",
    "Manufacturer Evidence identifier that does not cover the proposed class / scope",
    "Claims or model information in Australian labelling that exceed the ARTG regulatory basis",
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
            <span className="text-navy">ARTG Inclusion</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Australian Register of Therapeutic Goods
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              ARTG Inclusion Strategy &amp; Application Preparation
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              ARTG inclusion is not a simple product-by-product registration. The application is built around the Australian concept of a “kind of medical device”, with classification, GMDN, manufacturer, conformity assessment evidence and grouping logic determining how devices are represented in the ARTG.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your ARTG Inclusion <ArrowRight className="h-4 w-4" />
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
                If TGA asks for the Declaration of Conformity, conformity evidence and technical dossier today, will every document support the same device scope represented by the ARTG application?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Submit Your ARTG Inclusion with Full Regulatory Defensibility"
        description="Our Australian regulatory consultants prepare TBS submissions, link Manufacturer Evidence, and manage TGA application reviews."
      />
    </>
  );
}
