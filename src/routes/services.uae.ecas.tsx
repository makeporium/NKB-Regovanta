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

export const Route = createFileRoute("/services/uae/ecas")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOIAT / ECAS Conformity Assessment & Certificate of Conformity | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Emirates Conformity Assessment Scheme (ECAS) under MOIAT for regulated medical device components, electrical modules, power adapters, and wireless units. Certificate of Conformity (CoC) consulting.",
      },
      { name: "keywords", content: "UAE MOIAT / ECAS Conformity Assessment & Certificate of Conformity, services uae ecas, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE MOIAT / ECAS Conformity Assessment & Certificate of Conformity | NKB Regovanta" },
      { property: "og:description", content: "Emirates Conformity Assessment Scheme (ECAS) under MOIAT for regulated medical device components, electrical modules, power adapters, and wireless units. Certificate of Conformity (CoC) consulting." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/ecas" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE MOIAT / ECAS Conformity Assessment & Certificate of Conformity | NKB Regovanta" },
      { name: "twitter:description", content: "Emirates Conformity Assessment Scheme (ECAS) under MOIAT for regulated medical device components, electrical modules, power adapters, and wireless units. Certificate of Conformity (CoC) consulting." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/ecas" }],
  }),
  component: UAEECASPage,
});

function UAEECASPage() {
  const triggers = [
    "A medical device or accessory includes electrical, low-voltage (LVD), or wireless radio components regulated by MOIAT",
    "Screening whether finished equipment or accessories require separate ECAS Certificate of Conformity (CoC)",
    "Addressing UAE customs inquiries regarding MOIAT / ECAS compliance for imported medical electronics",
    "Harmonizing accredited laboratory test reports between MOHAP registration files and MOIAT requirements",
  ];

  const supportItems = [
    "ECAS / MOIAT technical regulation applicability screening for medical products and electrical modules",
    "Product-scope and mandatory standard review (Low Voltage, RoHS, Energy Efficiency, Wireless / TDRA)",
    "Accredited ISO/IEC 17025 laboratory test-report readiness and CB Scheme certificate review",
    "UAE commercial trade license and local applicant interface coordination",
    "Certificate of Conformity (CoC) electronic application preparation and documentation filing",
    "Alignment of MOIAT conformity evidence with MOHAP medical equipment technical files",
    "ECAS annual renewal planning and regulatory lifecycle maintenance",
    "Resolution of UAE customs and border inspection queries regarding ECAS certification",
  ];

  const challenges = [
    "Is ECAS applicable to the finished medical device or only to specific power adapters and electrical sub-components?",
    "Do test reports originate from ILAC-accredited or IECEE CB Scheme laboratories recognized by MOIAT?",
    "Is there total consistency between product ratings on the ECAS application, MOHAP file, and device labels?",
    "Does the local UAE trade entity have the appropriate commercial license activities for ECAS issuance?",
    "Is the ECAS Certificate of Conformity kept active to prevent shipment holds at UAE customs ports?",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-amber-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/uae" className="hover:text-navy transition-colors">United Arab Emirates</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">MOIAT / ECAS</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              MOIAT Conformity Assessment
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              ECAS / MOIAT Conformity Assessment (Where Separately Applicable)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              ECAS is the Emirates Conformity Assessment Scheme administered through the UAE Ministry of Industry and Advanced Technology (MOIAT). It is a separate conformity-certification route for products subject to MOIAT technical regulations; it is not the MOHAP medical-device registration portal. For a medical-device project, NKB Regovanta screens whether ECAS is separately relevant and aligns documentation so MOIAT and MOHAP pathways never contradict.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Assess ECAS / MOIAT Applicability <ArrowRight className="h-4 w-4" />
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
                    <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our MOIAT / ECAS Advisory Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200 mt-6">
              <p className="text-xs font-bold text-navy">Distinction Clarification:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                MOHAP medical equipment registration and MOIAT/ECAS are separate regulatory systems. We ensure that electrical safety, EMC, and wireless evidence submitted to MOIAT are completely aligned with the medical device technical file submitted to MOHAP.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Screen and Secure MOIAT / ECAS Conformity for Regulated Components"
        description="Our UAE conformity engineers assess ECAS applicability, review CB Scheme reports, and obtain Certificates of Conformity."
      />
    </>
  );
}
