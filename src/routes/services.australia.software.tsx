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

export const Route = createFileRoute("/services/australia/software")({
  head: () => ({
    meta: [
      {
        title:
          "Australia SaMD, AI & Cybersecurity Regulatory Consulting | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "TGA Software as a Medical Device (SaMD) regulatory status, exclusions/exemptions, IEC 62304 software lifecycle, ISO 27001, cybersecurity risk management, and AI/ML clinical evidence.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/software" }],
  }),
  component: AustraliaSoftwarePage,
});

function AustraliaSoftwarePage() {
  const triggers = [
    "New SaMD, digital health platform, or medical mobile application launch",
    "AI / machine-learning algorithms with diagnostic or therapeutic medical purposes",
    "Software update or algorithmic modification that may change clinical function or risk profile",
    "Connected medical device with cloud infrastructure and cybersecurity exposure",
    "Software previously classified as non-device or wellness tool in another jurisdiction",
    "Integration of third-party software, open-source libraries, or SOUP into a medical device",
  ];

  const supportItems = [
    "Software regulatory-status assessment (Therapeutic Goods Medical Devices Regulations)",
    "Intended purpose, clinical algorithm, and marketing claims review",
    "Classification rules application for software-based medical devices",
    "Exclusion and exemption assessment under Australian digital health reforms",
    "Essential Principles evidence strategy for software",
    "IEC 62304-oriented lifecycle documentation review (architecture, unit, integration, system testing)",
    "Software risk management and hazard analysis (ISO 14971)",
    "Cybersecurity risk management, threat modelling, and SBOM documentation",
    "System architecture, cloud interfaces, and data-flow documentation",
    "SOUP / third-party software controls and vulnerability tracking",
    "Software verification and validation (V&V) test report review",
    "Clinical and analytical performance evidence for software-driven diagnostic claims",
    "UDI implications for downloadable and cloud-hosted software",
    "Software change control, patch management, and lifecycle versioning strategy",
  ];

  const challenges = [
    "Clinical claims added through routine software sprint releases without regulatory impact assessment",
    "Cybersecurity treated separately from patient safety and device risk management",
    "Software Bill of Materials (SBOM) disconnected from QMS configuration control",
    "Verification and validation testing performed on non-production-equivalent build environments",
    "Machine learning / AI model parameter adjustments implemented without assessing ARTG, labelling, or evidence impact",
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
            <span className="text-navy">Software &amp; SaMD</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              SaMD, AI &amp; Cybersecurity
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Software, SaMD, AI &amp; Cybersecurity Regulatory Support
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Australian software regulation begins with regulatory-status assessment. Some software meets the medical-device definition and requires ARTG inclusion; other software may be excluded or exempt. For regulated software, the intended medical function drives classification, evidence and lifecycle obligations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Australian Software Strategy <ArrowRight className="h-4 w-4" />
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
                Does the software change alter the intended medical function, performance claim or risk profile in a way that affects classification, evidence or the ARTG basis?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Authorize Your Digital Health and SaMD Innovation in Australia"
        description="Our software regulatory engineers structure IEC 62304 lifecycles, prepare cybersecurity threat files, and assess TGA software exemptions."
      />
    </>
  );
}
