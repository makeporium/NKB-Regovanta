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

export const Route = createFileRoute("/services/canada/software")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Medical Device Software, SaMD & Cybersecurity | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Software as a Medical Device (SaMD) classification, IEC 62304 lifecycle documentation, cybersecurity threat modelling, and AI/ML predetermined change control plans for Health Canada.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/software" }],
  }),
  component: CanadaSoftwarePage,
});

function CanadaSoftwarePage() {
  const softwareItems = [
    "Determine whether the software qualifies as a medical device (SaMD / SiMD)",
    "Assess classification under the Canadian framework (SOR/98-282)",
    "Define software architecture, clinical algorithms, and system boundaries",
    "Review software development lifecycle evidence (IEC 62304:2006+A1:2015)",
    "Review software verification and validation (unit, integration, system testing)",
    "Review SOUP / COTS / third-party software library controls and bill of materials",
    "Cybersecurity risk management, threat modeling, and vulnerability mitigation",
    "Interoperability and medical device data system (MDDS) interface evidence",
    "Usability and human factors engineering for software interfaces (IEC 62366-1)",
    "Clinical/performance evidence for software-driven diagnostic or treatment claims",
    "Predetermined change/change-control strategy for machine-learning-enabled functions",
    "Post-market monitoring, patching, and software update controls",
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
            <span className="text-navy">Software &amp; Cybersecurity</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              SaMD &amp; IEC 62304
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Medical Device Software, SaMD &amp; Cybersecurity
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Software-enabled medical devices and standalone software require a regulatory strategy that connects intended use, classification, software functions, risk controls, verification and validation, cybersecurity and lifecycle change management.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Canada Software Strategy <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Software Compliance Areas */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">Software &amp; Cybersecurity Compliance Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {softwareItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 mt-6">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                For software, the licensing question is not only whether the code works. Health Canada must be able to understand what the software does clinically, how failure could affect the user or patient, and how the manufacturer controls changes after licensing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Authorize Your Digital Health and SaMD Software in Canada"
        description="Our software regulatory experts audit lifecycle files, prepare cybersecurity threat analyses, and construct AI/ML change plans."
      />
    </>
  );
}
