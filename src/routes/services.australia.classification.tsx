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

export const Route = createFileRoute("/services/australia/classification")({
  head: () => ({
    meta: [
      {
        title:
          "Australia TGA Medical Device & IVD Classification | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Strategic TGA classification for Medical Devices (Class I, Is, Im, IIa, IIb, III) and IVDs (Class 1-4) under Australian Therapeutic Goods Regulations. GMDN code determination and kind-of-device assessment.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/classification" }],
  }),
  component: AustraliaClassificationPage,
});

function AustraliaClassificationPage() {
  const triggers = [
    "Launching a new medical device or IVD in Australia",
    "Changing intended purpose, indications, duration of use, anatomical site or user population",
    "Adding software functionality or converting a hardware feature into software",
    "Introducing sterile, measuring, implantable or active functionality",
    "Using an overseas classification as the starting point and needing to confirm whether Australian rules produce the same outcome",
    "Building a multi-market product family where Australian grouping and evidence must be aligned early",
  ];

  const supportItems = [
    "Product qualification as a medical device, IVD, software-based medical device or other therapeutic good",
    "Intended purpose and claims review against Australian regulatory definitions",
    "Class I, Is, Im, IIa, IIb and III classification strategy for non-IVD medical devices",
    "IVD Class 1, 2, 3 and 4 classification strategy under the risk-based IVD rules",
    "Accessory, system and procedure pack considerations",
    "Software / SaMD classification and exemption / exclusion assessment where applicable",
    "GMDN term selection and “kind of medical device” grouping assessment",
    "Conformity assessment route determination based on risk class",
    "Initial UDI applicability and compliance-timing assessment",
    "Regulatory evidence roadmap from classification to ARTG inclusion",
  ];

  const challenges = [
    "Whether the intended purpose supports the proposed class",
    "Whether multiple classification rules apply and the highest class has been considered",
    "Whether accessories and software have been classified separately where required",
    "Whether the GMDN / kind-of-device strategy matches the proposed ARTG inclusion",
    "Whether the existing conformity evidence actually covers the Australian scope",
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
            <span className="text-navy">Product Classification</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Therapeutic Goods Regulations
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Australia Regulatory Strategy &amp; Product Classification
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Classification is not an administrative label. It drives the minimum conformity evidence, ARTG pathway, application-audit exposure, UDI timing and post-market obligations. NKB Regovanta reviews the intended purpose and the device characteristics that actually trigger the Australian classification rules before the market-access plan is fixed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Define Your TGA Regulatory Pathway <ArrowRight className="h-4 w-4" />
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
                If the intended purpose changes, does the classification still hold — and does the existing conformity evidence still cover the Australian kind of device?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Your Australian Medical Device Classification"
        description="Our TGA regulatory specialists evaluate your intended purpose, map GMDN codes, and structure a compliant ARTG grouping strategy."
      />
    </>
  );
}
