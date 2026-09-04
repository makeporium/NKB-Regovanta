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

export const Route = createFileRoute("/services/saudi-arabia/authorized-representative")({
  head: () => ({
    meta: [
      {
        title:
          "Saudi Authorized Representative (AR) Services | SFDA Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Licensed Saudi Authorized Representative (AR) representation for medical device and IVD manufacturers. GHAD portal management, regulatory mandate governance, vigilance reporting, and SFDA liaison.",
      },
      { name: "keywords", content: "Saudi Authorized Representative (AR) Services, SFDA Compliance, services saudi arabia authorized representative, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Saudi Authorized Representative (AR) Services | SFDA Compliance | NKB Regovanta" },
      { property: "og:description", content: "Licensed Saudi Authorized Representative (AR) representation for medical device and IVD manufacturers. GHAD portal management, regulatory mandate governance, vigilance reporting, and SFDA liaison." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia/authorized-representative" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saudi Authorized Representative (AR) Services | SFDA Compliance | NKB Regovanta" },
      { name: "twitter:description", content: "Licensed Saudi Authorized Representative (AR) representation for medical device and IVD manufacturers. GHAD portal management, regulatory mandate governance, vigilance reporting, and SFDA liaison." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/authorized-representative" }],
  }),
  component: SaudiARPage,
});

function SaudiARPage() {
  const triggers = [
    "A manufacturer established outside the Kingdom of Saudi Arabia requires legal representation under the Medical Devices Law",
    "Appointing an independent Saudi Authorized Representative to maintain control over registrations rather than commercial distributors",
    "Transitioning representation to a compliant, licensed Authorized Representative with full GHAD portal capability",
    "Establishing robust post-market vigilance, complaint escalation, and field safety corrective action (FSCA) governance",
  ];

  const supportItems = [
    "Authorized Representative selection, qualification, and onboarding support in the Kingdom",
    "Manufacturer-AR mandate and legal agreement drafting in accordance with SFDA regulations",
    "Alignment of device categories, product listings, and legal manufacturer corporate data",
    "AR establishment-licensing coordination under MDS-REQ 9 where applicable",
    "MDMA communication, dossier submission, and petition tracking in the GHAD system",
    "Direct liaison with SFDA technical evaluators during pre-market reviews and audits",
    "Technical documentation retention, security, and immediate access protocols",
    "Post-market complaint intake, vigilance triage, and serious incident escalation pathways",
    "Field Safety Corrective Action (FSCA) and recall communication governance",
    "Change-notification protocols and regulatory variation management",
    "Record-retention and supply chain traceability interface maintenance",
  ];

  const challenges = [
    "Is the Authorized Representative agreement structured to protect manufacturer IP while fulfilling statutory obligations?",
    "Can the AR provide immediate access to technical files and clinical data upon official SFDA inspection request?",
    "How quickly does the manufacturer notify the AR of design modifications, adverse events, or global field safety notices?",
    "Are commercial distributors and local importers operating cleanly under the AR's regulatory umbrella?",
    "Does the AR hold an active, valid establishment license for all relevant medical device categories in the Kingdom?",
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
            <Link to="/services/saudi-arabia" className="hover:text-navy transition-colors">Saudi Arabia</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Authorized Representative</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              In-Kingdom Legal Representation
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Saudi Authorized Representative (AR) Services
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Authorized Representative Is a Regulatory Governance Role. For manufacturers established outside the Kingdom, the Saudi regulatory pathway requires a locally established Authorized Representative to represent the manufacturer in relation to the Medical Devices Law and its Implementing Regulation. The AR role should be treated as an ongoing regulatory interface, not as an address-only service.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your Saudi AR Governance <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Saudi AR Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Governance Model:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We establish who must know what, by when, and which records must be available in Saudi Arabia when SFDA asks for evidence. That governance becomes critical during vigilance, inspections, recalls and significant changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Appoint a Licensed Saudi Authorized Representative"
        description="Our In-Kingdom regulatory team provides independent Authorized Representative services, manages GHAD filings, and maintains complete regulatory governance."
      />
    </>
  );
}
