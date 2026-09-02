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

export const Route = createFileRoute("/services/new-zealand/classification")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand Medical Device Classification & Schedule 2 Strategy | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Medical device risk classification under Schedule 2 of the Medicines Regulations 2003 in New Zealand. Class I, Is/Im, IIa, IIb, III, AIMD determination, and GMDN coding strategy.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/classification" }],
  }),
  component: NZClassificationPage,
});

function NZClassificationPage() {
  const triggers = [
    "Introducing a new medical device, IVD, SaMD, or accessory into the New Zealand market",
    "Determining the applicable risk class under Schedule 2 of the Medicines (Database of Medical Devices) Regulations 2003",
    "Selecting the correct GMDN code and collective term for WAND database notification",
    "Evaluating whether a device qualifies for statutory WAND exemption (e.g. In Vitro Diagnostics)",
    "An engineering modification or clinical claim expansion may alter the established risk class",
  ];

  const supportItems = [
    "Product qualification and regulatory-status assessment under the Medicines Act 1981",
    "Intended clinical purpose, indications, claims, and target user-population review",
    "Schedule 2 risk-class determination (Class I, Class I sterile/measuring, Class IIa, Class IIb, Class III, AIMD)",
    "Accessory, procedure pack, and medical device system classification considerations",
    "Software as a Medical Device (SaMD) and digital health regulatory status assessment",
    "GMDN code selection, preferred term verification, and descriptor mapping",
    "Assessment of mandatory WAND notification vs statutory exemption",
    "Cross-market equivalence review (comparing EU MDR, Australian TGA, and US FDA classifications with NZ rules)",
    "Comprehensive regulatory roadmap from sponsor appointment through post-market compliance",
  ];

  const challenges = [
    "Does the product qualify as a medical device under Section 3A of the Medicines Act 1981?",
    "Will a clinical marketing claim shift the device into a higher risk class under Schedule 2?",
    "Does the GMDN code accurately reflect the intended medical purpose and technology?",
    "Are all system accessories and consumables correctly grouped or classified separately?",
    "Can the New Zealand Sponsor defend the declared classification if Medsafe initiates a safety audit?",
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
            <span className="text-navy">Product Classification</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Schedule 2 Risk Framework
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Regulatory Strategy &amp; Product Classification (New Zealand)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Classification Drives the New Zealand Sponsor and WAND Strategy. New Zealand uses a GHTF-based medical-device classification framework with Class I, Class I sterile/measuring, Class IIa, Class IIb, Class III and AIMD categories. Classification is determined using the rules in Schedule 2 and must be assigned by the New Zealand Sponsor when notifying a device to WAND.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Define Your New Zealand Regulatory Pathway <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Classification &amp; Strategy Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Classification Strategy Standard:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not simply map a foreign-market class into New Zealand. We apply the New Zealand rules and then trace that classification into the WAND data set, grouping strategy, sponsor declaration, technical-evidence expectations and post-market controls that follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Classify Your Medical Device Under New Zealand Schedule 2 Rules"
        description="Our New Zealand regulatory strategists evaluate intended purpose, determine risk classes, and assign optimal GMDN codes."
      />
    </>
  );
}
