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
  ArrowRight,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/canada/classification")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Medical Device & IVD Classification (SOR/98-282) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Definitive Health Canada risk classification for Medical Devices and IVDs under Schedule 1 of the Medical Devices Regulations (SOR/98-282). Class I, II, III, and IV regulatory determination.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/classification" }],
  }),
  component: CanadaClassificationPage,
});

function CanadaClassificationPage() {
  const approaches = [
    "Confirm whether the product meets the Canadian definition of a medical device or IVD.",
    "Review intended use, indications, target population and user environment.",
    "Apply the non-IVD or IVD classification rules under Schedule 1 of the Medical Devices Regulations.",
    "Assess invasiveness, duration of contact, active functions, energy transfer, monitoring functions and consequences of device failure for non-IVDs.",
    "For IVDs, assess the analyte, intended purpose, testing context, donor/transfusion implications, disease significance and consequences of an incorrect result.",
    "Determine Class I, II, III or IV and the resulting MDL/MDEL/MDSAP route.",
    "Identify applicable standards, labelling requirements and evidence expectations.",
  ];

  const nonIvdFactors = [
    "Degree of invasiveness (non-invasive, invasive via body orifice, surgically invasive)",
    "Duration of contact (transient <60 min, short term up to 30 days, long term >30 days)",
    "Active functions and energy delivery (thermal, electrical, ionizing radiation)",
    "Monitoring of vital physiological parameters and automated diagnostic feedback",
    "Biological impact, central circulatory system contact, central nervous system contact",
    "Consequences of device failure or malfunction on patient safety",
  ];

  const ivdFactors = [
    "Analyte detected and biological/clinical significance",
    "Intended purpose (screening, diagnosis, monitoring, prognosis, staging)",
    "Testing context: laboratory professional vs. Point-of-Care (PoC) / Near-patient vs. Self-testing",
    "Public health implications (blood donor screening, critical infectious diseases)",
    "Consequences of false positive or false negative results on patient management",
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
            <span className="text-navy">Product Classification</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              SOR/98-282 Schedule 1 Rules
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Regulatory Strategy &amp; Product Classification (Canada)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Classification is the first regulatory decision because it determines the licensing route, submission depth, quality-system expectations and the level of evidence Health Canada will review.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Define Your Health Canada Pathway <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* How NKB Approaches Classification */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">How NKB Approaches Classification</h2>
            <p className="text-xs sm:text-[13px] text-navy/80 font-medium leading-relaxed mb-6">
              We begin with the device definition and intended use rather than selecting a class based on a superficially similar product. We assess the regulatory characteristics that drive classification and document the rationale so the downstream licensing strategy is built on a defensible basis.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {approaches.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Non-IVD */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h3 className="text-sm font-extrabold text-navy mb-3">Non-IVD Classification Drivers (Schedule 1 Part 1)</h3>
                <ul className="space-y-2 text-xs text-gray-700 font-medium">
                  {nonIvdFactors.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IVD */}
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <h3 className="text-sm font-extrabold text-navy mb-3">IVD Classification Drivers (Schedule 1 Part 2)</h3>
                <ul className="space-y-2 text-xs text-gray-700 font-medium">
                  {ivdFactors.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#e03131] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 mt-6">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                The question is not simply “What class is this device?” It is “What regulatory obligations are triggered by this classification, and what evidence will Health Canada expect for this risk profile?”
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Determine Your Health Canada Risk Classification"
        description="Our Canadian regulatory specialists establish the formal classification rationale and map your pathway to market."
      />
    </>
  );
}
