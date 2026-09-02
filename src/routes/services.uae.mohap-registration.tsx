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

export const Route = createFileRoute("/services/uae/mohap-registration")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP Medical Device Registration & Dossier Strategy | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "MOHAP Medical Equipment and IVD registration in the United Arab Emirates. Electronic dossier compilation, Free Sale Certificate (FSC), CE Declaration of Conformity, and technical committee approval.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/mohap-registration" }],
  }),
  component: UAEMohapRegistrationPage,
});

function UAEMohapRegistrationPage() {
  const triggers = [
    "Registering medical equipment, consumables, IVDs, or SaMD with MOHAP for legal importation and sale in the UAE",
    "Transitioning an existing product line to current MOHAP electronic portal standards",
    "Adding new models, catalogue codes, sizes, or accessories to an active MOHAP registration certificate",
    "Addressing MOHAP technical evaluation committee queries, document deficiencies, or sample requests",
  ];

  const supportItems = [
    "Registration readiness and dossier submission route assessment",
    "MOHAP electronic system application form and administrative data preparation",
    "Manufacturer registration and manufacturing-site qualification verification",
    "Valid Free Sale Certificate (FSC) / Certificate of Free Sale authentication strategy",
    "Country-of-origin (COO) and reference-market evidence compilation (US FDA, EU CE, Health Canada, Japan MHLW)",
    "CE Declaration of Conformity (EU MDR / IVDR) and ISO 13485 QMS certificate review",
    "Detailed product description, models, configurations, sizes, and commercial catalogue preparation",
    "Safety and clinical efficacy evidence strategy, particularly for Class III and IV high-risk devices",
    "Bilingual packaging labeling, Instructions for Use (IFU), and marketing brochure compilation",
    "Physical sample, Certificate of Analysis (CoA), and laboratory testing readiness where requested",
    "MOHAP technical query resolution and electronic resubmission management",
    "Final MOHAP Registration Certificate review and regulatory handover",
  ];

  const challenges = [
    "Are manufacturer and manufacturing site details registered in the MOHAP database prior to device submission?",
    "Does the Free Sale Certificate explicitly include all submitted model variants and intended clinical indications?",
    "Is there complete data consistency between the CE DoC, IFU, brochure, and MOHAP application forms?",
    "Are high-risk device clinical evaluation reports and bench safety data defensible before technical committees?",
    "Can physical samples and Certificates of Analysis be supplied within statutory MOHAP response windows?",
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
            <span className="text-navy">MOHAP Registration</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Medical Equipment Registration
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              MOHAP Medical Device Registration &amp; Dossier Strategy
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Registration Must Be Built Around a Consistent Regulatory Evidence Package. MOHAP registration enables medical equipment to be imported and traded in the UAE when the applicable conditions are met. A strong application depends on consistency between the local applicant, manufacturing site, product family, intended purpose, classification, country-of-origin evidence, conformity documentation, technical evidence and labeling.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your MOHAP Registration <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our MOHAP Dossier Compilation Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Data Cross-Check Standard:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We cross-check every major data point before submission: manufacturer name, product name, model list, intended purpose, classification, certificate scope, labels and technical evidence. Many avoidable delays originate from inconsistencies rather than a complete absence of documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="File Your MOHAP Medical Device Registration with Complete Dossier Defense"
        description="Our UAE regulatory specialists compile electronic dossiers, authenticate free-sale evidence, and resolve technical committee queries."
      />
    </>
  );
}
