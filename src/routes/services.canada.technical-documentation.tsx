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
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/canada/technical-documentation")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Technical Documentation & Evidence Strategy | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "IMDRF Table of Contents dossier planning, Essential Principles compliance, pre-clinical testing evidence, biocompatibility, software V&V, and clinical evaluation for Health Canada Class III and IV submissions.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/technical-documentation" }],
  }),
  component: CanadaTechnicalDocPage,
});

function CanadaTechnicalDocPage() {
  const evidenceArchitecture = [
    "Device description, principles of operation and variants/configurations",
    "Intended use, indications, contraindications and target population",
    "Device classification and regulatory history",
    "Essential principles / Canadian safety and effectiveness requirements",
    "Risk-management documentation and benefit-risk reasoning (ISO 14971)",
    "Design verification and validation",
    "Bench and functional performance testing",
    "Biocompatibility and chemical characterization (ISO 10993)",
    "Sterilization, packaging and shelf-life evidence",
    "Electrical safety and EMC where applicable (IEC 60601)",
    "Software verification and validation and cybersecurity where applicable",
    "Usability/human factors evidence (IEC 62366-1)",
    "Clinical evidence for higher-risk devices where required",
    "IVD analytical and clinical performance evidence",
    "Labelling, IFU and promotional consistency",
    "Post-market history and supporting regulatory information where applicable",
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
            <span className="text-navy">Technical Documentation</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              IMDRF ToC Dossier
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Technical Documentation &amp; Health Canada Evidence Strategy
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The level of technical evidence required increases with device risk. For Class III and IV devices, Health Canada uses a structured application framework based on the IMDRF Table of Contents, together with Canada-specific content requirements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Health Canada Technical Evidence <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Evidence Architecture We Review */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">Evidence Architecture We Review</h2>
            <p className="text-xs sm:text-[13px] text-navy/80 font-medium leading-relaxed mb-6">
              Our review verifies that every performance claim is supported by underlying study data, the tested configuration represents the marketed device, and risk management is coherent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {evidenceArchitecture.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 mt-6">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We challenge whether each performance claim is actually supported by the evidence submitted, whether the tested configuration represents the marketed device, and whether risk, testing, clinical evidence and labelling remain internally consistent.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Build an Audit-Proof Technical Dossier for Health Canada"
        description="Our technical writers structure IMDRF Table of Contents files, map Essential Principles, and review safety and effectiveness data."
      />
    </>
  );
}
