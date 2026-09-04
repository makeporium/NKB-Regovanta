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

export const Route = createFileRoute("/services/brazil/tecnovigilance")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Tecnovigilância, Adverse Event Reporting & Post-Market Surveillance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Brazil tecnovigilância post-market surveillance systems, ANVISA adverse event reporting (Notivisa / Formulário de Tecnovigilância), complaint triage, field safety corrective actions (FSCA), and recall coordination.",
      },
      { name: "keywords", content: "ANVISA Tecnovigilância, Adverse Event Reporting & Post-Market Surveillance, services brazil tecnovigilance, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "ANVISA Tecnovigilância, Adverse Event Reporting & Post-Market Surveillance | NKB Regovanta" },
      { property: "og:description", content: "Brazil tecnovigilância post-market surveillance systems, ANVISA adverse event reporting (Notivisa / Formulário de Tecnovigilância), complaint triage, field safety corrective actions (FSCA), and recall coordination." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/brazil/tecnovigilance" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ANVISA Tecnovigilância, Adverse Event Reporting & Post-Market Surveillance | NKB Regovanta" },
      { name: "twitter:description", content: "Brazil tecnovigilância post-market surveillance systems, ANVISA adverse event reporting (Notivisa / Formulário de Tecnovigilância), complaint triage, field safety corrective actions (FSCA), and recall coordination." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/tecnovigilance" }],
  }),
  component: BrazilTecnovigilancePage,
});

function BrazilTecnovigilancePage() {
  const triggers = [
    "Medical devices or IVDs are actively commercialized in Brazil requiring formal post-market oversight",
    "A serious adverse event, patient injury, or critical technical complaint has occurred in Brazil or globally",
    "A global recall, field safety corrective action (FSCA), or safety alert affects Brazilian distributed units",
    "ANVISA issues an official post-market audit notice or requests complaint investigation data",
  ];

  const supportItems = [
    "Post-market surveillance (PMS) system review and Brazilian standard operating procedure setup",
    "Customer complaint intake, triage, and technical defect classification",
    "Adverse-event and technical-complaint reportability assessment under ANVISA regulations",
    "Manufacturer-to-Brazilian-Holder (BRH) escalation and communication workflow implementation",
    "Investigation, root-cause analysis, and engineering evidence review",
    "Risk-management file feedback and ISO 14971 residual risk re-evaluation",
    "CAPA linkage, corrective action execution, and effectiveness verification",
    "ANVISA electronic notification via NOTIVISA and Formulário de Tecnovigilância",
    "Field Safety Corrective Action (FSCA) strategy, customer health alerts, and recall execution",
    "Global safety signal assessment and Brazilian population risk evaluation",
    "Corrective labeling, packaging artwork, and IFU warning updates following safety findings",
    "Annual post-market trend analysis and safety surveillance report authoring",
  ];

  const challenges = [
    "Is the technical complaint or adverse event reportable under Brazilian tecnovigilância timelines?",
    "Does a global corrective action or safety notice apply to the Brazilian product population?",
    "Are investigation conclusions supported by objective pre-clinical and engineering evidence?",
    "Has the device risk management file been updated with newly detected post-market hazards?",
    "Are field-action customer communications and affected-lot traceability fully documented for ANVISA?",
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
            <span className="text-navy">Tecnovigilância &amp; PMS</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              NOTIVISA &amp; Post-Market Vigilance
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Post-Market Surveillance &amp; Tecnovigilância (Brazil)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Tecnovigilance is ANVISA's post-market surveillance system for adverse events and technical complaints involving medical devices and IVDs. Market authorization does not end the regulatory obligation; the Brazilian holder and manufacturer must be able to detect safety signals, investigate complaints, implement corrective action and execute field actions when necessary.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your Brazil Tecnovigilance System <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Tecnovigilância Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Connected Vigilance Chain:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We connect the post-market chain rather than treating each complaint as an isolated record: Complaint / Event → Investigation → Risk → CAPA → Field Action / Reporting → Technical Documentation and Labeling Update.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Rigorous Tecnovigilância and Post-Market Compliance"
        description="Our vigilance specialists evaluate incident reportability, lodge NOTIVISA notifications, and coordinate recall actions with ANVISA."
      />
    </>
  );
}
