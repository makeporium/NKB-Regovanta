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

export const Route = createFileRoute("/services/brazil/change-management")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Changes, Variations, Revalidation & Lifecycle Support | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "ANVISA change categorization (alteração / aditamento), registration revalidation (revalidação), manufacturing site additions, technical file updates, and lifecycle engineering change control in Brazil.",
      },
      { name: "keywords", content: "ANVISA Changes, Variations, Revalidation & Lifecycle Support, services brazil change management, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "ANVISA Changes, Variations, Revalidation & Lifecycle Support | NKB Regovanta" },
      { property: "og:description", content: "ANVISA change categorization (alteração / aditamento), registration revalidation (revalidação), manufacturing site additions, technical file updates, and lifecycle engineering change control in Brazil." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/brazil/change-management" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ANVISA Changes, Variations, Revalidation & Lifecycle Support | NKB Regovanta" },
      { name: "twitter:description", content: "ANVISA change categorization (alteração / aditamento), registration revalidation (revalidação), manufacturing site additions, technical file updates, and lifecycle engineering change control in Brazil." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil/change-management" }],
  }),
  component: BrazilChangeManagementPage,
});

function BrazilChangeManagementPage() {
  const triggers = [
    "Design, raw material, or engineering specification changes are planned for a registered device",
    "Manufacturing site relocation, line expansion, or critical component supplier is changing",
    "Software algorithms, AI/ML models, firmware, or cybersecurity patches are being released",
    "Sterilization method, packaging material, or validated shelf-life duration is changing",
    "Intended clinical use, indications, packaging artwork, or performance claims are changing",
    "A 5-year registration renewal / revalidation (revalidação de registro) deadline is approaching",
  ];

  const supportItems = [
    "Regulatory change-impact assessment against RDC 751/2022, RDC 830/2023, and ANVISA guidance",
    "Notification / registration change categorization (alteração de notificação / alteração de registro)",
    "Technical dossier update strategy and verification/validation gap assessment",
    "Risk-management file update and benefit-risk re-evaluation (ISO 14971)",
    "Clinical and analytical performance evidence impact assessment",
    "BGMP / CBPF certification impact assessment following site transfers or process changes",
    "Legal manufacturer, manufacturing site, and certificate change petition support",
    "Portuguese label and IFU revision review and harmonization",
    "UDI change trigger analysis and SIUD database record updating",
    "Revalidation planning, petition drafting, and submission prior to statutory deadlines",
    "Transfer of registration ownership (transferência de titularidade) and cancellation strategy",
  ];

  const challenges = [
    "Could the planned change alter the device risk classification or approved intended clinical use?",
    "Does the existing pre-clinical test evidence still represent the modified device configuration?",
    "Does the change require formal ANVISA approval (deferimento) prior to commercial implementation?",
    "Do Brazilian public register records, packaging labels, or SIUD data need to be updated simultaneously?",
    "Does a manufacturing site transfer affect the approved BGMP / CBPF certificate scope?",
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
            <span className="text-navy">Change Management</span>
          </div>

          <Link
            to="/services/brazil"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Brazil Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Alterações &amp; Revalidação
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Changes, Variations, Revalidation &amp; Lifecycle Support (Brazil)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Changes to a device after Brazilian regularization can affect the notification/registration, technical dossier, BGMP certification, labeling, UDI/SIUD data and post-market obligations. The correct action depends on the type and significance of the change and should be assessed before implementation whenever possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Assess a Brazil Device Change <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Lifecycle Change Management Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Lifecycle Evaluation Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We do not ask only whether the product changed. We ask whether the change affects the regulatory basis on which ANVISA accepted the device: classification, intended use, technical evidence, manufacturing controls, safety/performance or product identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Manage ANVISA Variations and Revalidation Filings"
        description="Our regulatory strategists assess change impact, structure alteração petitions in Solicita, and manage revalidação renewals."
      />
    </>
  );
}
