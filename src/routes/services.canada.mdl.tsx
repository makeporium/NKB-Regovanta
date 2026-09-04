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

export const Route = createFileRoute("/services/canada/mdl")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Medical Device Licence (MDL) - Class II, III & IV | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Pre-market Medical Device Licence (MDL) preparation and submission for Class II, III, and IV devices in Canada. IMDRF Table of Contents dossier compilation, REP filing, and Health Canada review management.",
      },
      { name: "keywords", content: "Health Canada Medical Device Licence (MDL) - Class II, III & IV, services canada mdl, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Health Canada Medical Device Licence (MDL) - Class II, III & IV | NKB Regovanta" },
      { property: "og:description", content: "Pre-market Medical Device Licence (MDL) preparation and submission for Class II, III, and IV devices in Canada. IMDRF Table of Contents dossier compilation, REP filing, and Health Canada review management." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada/mdl" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Health Canada Medical Device Licence (MDL) - Class II, III & IV | NKB Regovanta" },
      { name: "twitter:description", content: "Pre-market Medical Device Licence (MDL) preparation and submission for Class II, III, and IV devices in Canada. IMDRF Table of Contents dossier compilation, REP filing, and Health Canada review management." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/mdl" }],
  }),
  component: CanadaMDLPage,
});

function CanadaMDLPage() {
  const mdlSupport = [
    "Licence pathway and application-type assessment",
    "Device grouping strategy: single device, family, group or group family where applicable",
    "Manufacturer and device information review",
    "MDSAP certificate and scope alignment",
    "Health Canada Regulatory Enrolment Process (REP) data preparation where applicable",
    "Class-specific application forms and supporting documentation",
    "IMDRF Table of Contents dossier planning for Class III and IV submissions",
    "Health Canada-specific evidence requirements and regional content",
    "Application quality review before submission",
    "Response strategy for screening deficiencies or requests for additional information",
    "Licence issuance review and post-approval maintenance planning",
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
            <span className="text-navy">MDL Registration</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Class II, III &amp; IV Devices
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Medical Device Licence (MDL) - Class II, III &amp; IV
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              A Medical Device Licence is required for Class II, III and IV medical devices before they may be imported or sold in Canada. The licence is issued to the manufacturer and is tied to the licensed device or device family/grouping.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your Health Canada MDL Submission <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* How Submission Changes by Class */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 shadow-2xs">
              <span className="text-xs font-extrabold text-[#0b3a96] uppercase tracking-wider block mb-1">Class II</span>
              <h3 className="text-base font-extrabold text-navy mb-2">Streamlined Application</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Generally a more streamlined licence application, but classification, device identifiers, labelling and MDSAP quality-system evidence must still align.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 shadow-2xs">
              <span className="text-xs font-extrabold text-[#0b3a96] uppercase tracking-wider block mb-1">Class III</span>
              <h3 className="text-base font-extrabold text-navy mb-2">Substantive Review</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Requires a substantive pre-market review and a structured IMDRF ToC technical evidence package supporting safety and effectiveness.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 shadow-2xs">
              <span className="text-xs font-extrabold text-[#e03131] uppercase tracking-wider block mb-1">Class IV</span>
              <h3 className="text-base font-extrabold text-navy mb-2">Comprehensive Dossier</h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Highest-risk devices require the most comprehensive evidence package, including detailed safety and effectiveness data and, where applicable, clinical evidence.
              </p>
            </div>
          </div>

          {/* Our MDL Support Includes */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-6">Our MDL Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {mdlSupport.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 mt-6">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                A technically strong dossier is not created by filling every available folder. The evidence must be proportionate to the device class, linked to the safety and effectiveness requirements and presented in a way that allows Health Canada to trace the claim to the supporting data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="File Your Health Canada MDL Application with Confidence"
        description="Our regulatory consultants ensure your submission aligns with MDSAP scopes, IMDRF requirements, and Health Canada evidence expectations."
      />
    </>
  );
}
