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

export const Route = createFileRoute("/services/brazil/registration")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Medical Device Notification & Registration (Cadastro/Registro) | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "ANVISA pre-market submissions for Medical Devices and IVDs via the Solicita system. Class I-II Notificação, Class III-IV Registro, technical dossier compilation, and exigência defense.",
      },
      { name: "keywords", content: "ANVISA Medical Device Notification & Registration (Cadastro/Registro), services brazil registration, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "ANVISA Medical Device Notification & Registration (Cadastro/Registro) | NKB Regovanta" },
      { property: "og:description", content: "ANVISA pre-market submissions for Medical Devices and IVDs via the Solicita system. Class I-II Notificação, Class III-IV Registro, technical dossier compilation, and exigência defense." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/brazil/registration" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ANVISA Medical Device Notification & Registration (Cadastro/Registro) | NKB Regovanta" },
      { name: "twitter:description", content: "ANVISA pre-market submissions for Medical Devices and IVDs via the Solicita system. Class I-II Notificação, Class III-IV Registro, technical dossier compilation, and exigência defense." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/registration" }],
  }),
  component: BrazilRegistrationPage,
});

function BrazilRegistrationPage() {
  const triggers = [
    "Launching a Class I, II, III or IV medical device in Brazil",
    "Transferring or restructuring a product portfolio under a Brazilian registration holder (BRH)",
    "Adding new models, commercial configurations, or family members to an existing authorization",
    "Moving from an older Brazilian authorization structure to the current RDC 751/2022 regulatory framework",
  ];

  const supportItems = [
    "Notificação application strategy for Class I and II devices (RDC 751/2022)",
    "Registration (Registro/Cadastro) strategy for Class III and IV devices",
    "Application and petition planning in ANVISA's electronic Solicita system",
    "Technical dossier compilation according to Brazilian structure",
    "Legal manufacturer and Brazilian registration holder (BRH) data alignment",
    "Grouping and family assessment for optimal dossier submission",
    "Declarations, authorizations, and power-of-attorney documentation",
    "Labeling, Portuguese IFU package review, and e-labelling strategy",
    "Submission coordination and real-time petition status follow-up",
    "ANVISA technical query and official exigência response formulation",
    "Revalidation planning and renewal tracking for registered products",
  ];

  const challenges = [
    "Is the selected petition subject code correct for the product and intended change?",
    "Do the model list and commercial configurations match the technical dossier exactly?",
    "Does the Brazilian holder have the correct corporate operating authorization (AFE) scope for the activity?",
    "Is the dossier complete enough to survive an in-depth technical review or subsequent compliance audit?",
    "Are there contradictions between the Portuguese IFU, application form, and underlying performance evidence?",
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
            <Link to="/services/brazil" className="hover:text-navy transition-colors">Brazil</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Notification &amp; Registration</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Solicita Pre-Market Applications
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              ANVISA Notification &amp; Registration (Cadastro &amp; Registro)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              ANVISA uses different pre-market routes according to risk. Class I and II devices generally follow notification, while Class III and IV devices require registration and technical review. The submission must be consistent across the application form, legal manufacturer, Brazilian holder, intended use, models, technical name, classification, labeling and supporting evidence.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your ANVISA Submission <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Pre-Market Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Application Quality Principle:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We build the application from the source evidence outward. Before submission, we cross-check the legal manufacturer, Brazilian holder, device name, technical name, models, intended use, risk class, certificates, dossier and label so ANVISA receives one coherent regulatory position.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="File Your ANVISA Notification or Registration with Confidence"
        description="Our team prepares complete electronic dossiers in Solicita, tracks petition progress, and defends against ANVISA exigências."
      />
    </>
  );
}
