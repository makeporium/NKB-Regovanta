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

export const Route = createFileRoute("/services/uae/classification")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP Medical Device Classification & Regulatory Status | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "MOHAP product classification service for Medical Equipment and IVDs in the United Arab Emirates. Class I, II, III, IV determination, SaMD qualification, and classification letter applications.",
      },
      { name: "keywords", content: "UAE MOHAP Medical Device Classification & Regulatory Status, services uae classification, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE MOHAP Medical Device Classification & Regulatory Status | NKB Regovanta" },
      { property: "og:description", content: "MOHAP product classification service for Medical Equipment and IVDs in the United Arab Emirates. Class I, II, III, IV determination, SaMD qualification, and classification letter applications." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/classification" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE MOHAP Medical Device Classification & Regulatory Status | NKB Regovanta" },
      { name: "twitter:description", content: "MOHAP product classification service for Medical Equipment and IVDs in the United Arab Emirates. Class I, II, III, IV determination, SaMD qualification, and classification letter applications." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/classification" }],
  }),
  component: UAEClassificationPage,
});

function UAEClassificationPage() {
  const triggers = [
    "Introducing a new medical device, IVD, software, or combination product into the UAE market",
    "Formal confirmation is required regarding whether the product requires MOHAP registration",
    "Borderline product qualification (medical equipment vs cosmetic vs general consumer product)",
    "Structuring a device family, kit, system, or accessory grouping for registration filing",
    "An engineering modification or clinical claim expansion may alter the established risk class",
  ];

  const supportItems = [
    "Product qualification and UAE federal regulatory-status assessment",
    "Intended purpose, clinical indications, claims, and target user-population review",
    "Class I, II, III, and IV risk classification assessment for medical equipment/devices",
    "IVD Class I-IV risk classification and analytical route determination",
    "Assessment of accessories, procedure kits, systems, and model families",
    "Software as a Medical Device (SaMD) and digital health regulatory status assessment",
    "Review of country-of-origin (COO) and reference-country (EU, US, Japan) regulatory authorizations",
    "Product catalogue, packaging labels, leaflet, and technical brochure readiness",
    "MOHAP Product Classification Service application filing and official letter receipt",
    "Assessment of whether another UAE authority (e.g. MOIAT / ECAS, Dubai Municipality) applies",
    "Comprehensive regulatory roadmap connecting classification to registration dossier depth",
  ];

  const challenges = [
    "Does the product's primary mode of action qualify it as medical equipment under MOHAP definitions?",
    "Will a clinical claim on marketing leaflets push a borderline product into a higher medical device class?",
    "Do all system accessories and consumables share the same classification rationale?",
    "Does the product catalogue align with the regulatory authorization in the country of origin?",
    "Has a formal MOHAP classification letter been obtained to avoid customs clearance delays?",
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
            <span className="text-navy">Product Classification</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              MOHAP Risk Classes I-IV
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              UAE MOHAP Regulatory Strategy &amp; Product Classification
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Classification Should Establish the Entire UAE Regulatory Route. The UAE pathway should begin with product qualification, intended purpose and the regulatory status of the product — not with a registration form. MOHAP's classification service can determine whether a product requires MOHAP registration and provides a formal classification outcome based on the information submitted.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Define Your UAE Regulatory Pathway <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Classification &amp; Strategy Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Strategic Regulatory Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not treat classification as a label. We use it to determine evidence depth, registration route, local applicant requirements, technical documentation, testing, labeling and post-market obligations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Determine Your MOHAP Medical Device Classification"
        description="Our UAE regulatory specialists evaluate intended purpose, submit classification requests, and obtain formal MOHAP classification letters."
      />
    </>
  );
}
