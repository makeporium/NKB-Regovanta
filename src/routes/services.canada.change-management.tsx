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

export const Route = createFileRoute("/services/canada/change-management")({
  head: () => ({
    meta: [
      {
        title:
          "Health Canada Licence Amendments & Significant Changes | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Health Canada significant change assessment, Medical Device Licence (MDL) amendments, design/material modifications, labelling changes, and annual licence renewals.",
      },
      { name: "keywords", content: "Health Canada Licence Amendments & Significant Changes, services canada change management, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Health Canada Licence Amendments & Significant Changes | NKB Regovanta" },
      { property: "og:description", content: "Health Canada significant change assessment, Medical Device Licence (MDL) amendments, design/material modifications, labelling changes, and annual licence renewals." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/canada/change-management" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Health Canada Licence Amendments & Significant Changes | NKB Regovanta" },
      { name: "twitter:description", content: "Health Canada significant change assessment, Medical Device Licence (MDL) amendments, design/material modifications, labelling changes, and annual licence renewals." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/change-management" }],
  }),
  component: CanadaChangeManagementPage,
});

function CanadaChangeManagementPage() {
  const changesAssessed = [
    "Intended use, indications, or contraindication expansions",
    "Design and functional performance modifications",
    "Material, chemical formulation, or biocompatibility changes",
    "Software algorithms, architecture, and cybersecurity updates",
    "Manufacturing site relocations, additions, or process alterations",
    "Critical supplier or subcontractor substitutions",
    "Sterilization method, cycle parameters, or contract sterilizer changes",
    "Primary/secondary packaging and shelf-life / expiry extensions",
    "Labelling, IFU, and marketing claim adjustments",
    "Device family, group, or catalogue identifier additions",
    "Changes to model numbers or device configurations",
    "Private label licence amendments and notifications",
  ];

  const lifecycleSteps = [
    "Determine whether the change affects safety, effectiveness, or licensed indications.",
    "Determine whether the change qualifies as a Significant Change under Health Canada policy.",
    "Identify required verification, validation, and pre-clinical testing evidence.",
    "Assess whether additional clinical or performance data is required.",
    "Assess impact on risk management documentation (ISO 14971) and labelling.",
    "Assess MDSAP and QMS documentation impact.",
    "Determine whether an amendment application, minor-change filing, or annual update is appropriate.",
    "Update the technical dossier, REP metadata, and regulatory records.",
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
            <span className="text-navy">Licence Amendments &amp; Changes</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Significant Change Assessment
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Licence Amendments, Significant Changes &amp; Lifecycle Maintenance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              A Health Canada licence must remain aligned with the device that is actually manufactured and sold. Certain changes to Class II, III and IV devices require a new or amended MDL, while other changes may be documented internally or handled through a different regulatory mechanism.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Assess a Canadian Device Change <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Changes We Assess */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">Changes We Assess</h2>
              <div className="space-y-2">
                {changesAssessed.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-navy/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Lifecycle Assessment */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200/80">
              <h2 className="text-lg font-extrabold text-navy mb-4">Our Lifecycle Assessment Logic</h2>
              <div className="space-y-2">
                {lifecycleSteps.map((step, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white border border-gray-200 flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-xs font-medium text-navy/90">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
            <p className="text-xs font-bold text-navy">Expert Focus:</p>
            <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
              The question is not simply “Did the device change?” It is “Does the change alter the basis on which Health Canada accepted the device’s safety, effectiveness, quality or licensed indications?”
            </p>
          </div>
        </div>
      </section>

      <CTABand
        title="Manage Health Canada Licence Amendments and Lifecycle Changes"
        description="Our regulatory strategists determine amendment triggers, compile change justifications, and update technical files."
      />
    </>
  );
}
