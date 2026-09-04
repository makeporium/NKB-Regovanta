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

export const Route = createFileRoute("/services/uae/supply-chain")({
  head: () => ({
    meta: [
      {
        title:
          "UAE Medical Warehouse, Local Supply Chain & Commercial Readiness | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Licensed UAE medical warehouse setup, importation permits, storage and distribution governance under MOHAP. Post-registration supply-chain compliance, batch traceability, and commercial launch readiness.",
      },
      { name: "keywords", content: "UAE Medical Warehouse, Local Supply Chain & Commercial Readiness, services uae supply chain, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UAE Medical Warehouse, Local Supply Chain & Commercial Readiness | NKB Regovanta" },
      { property: "og:description", content: "Licensed UAE medical warehouse setup, importation permits, storage and distribution governance under MOHAP. Post-registration supply-chain compliance, batch traceability, and commercial launch readiness." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uae/supply-chain" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UAE Medical Warehouse, Local Supply Chain & Commercial Readiness | NKB Regovanta" },
      { name: "twitter:description", content: "Licensed UAE medical warehouse setup, importation permits, storage and distribution governance under MOHAP. Post-registration supply-chain compliance, batch traceability, and commercial launch readiness." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae/supply-chain" }],
  }),
  component: UAESupplyChainPage,
});

function UAESupplyChainPage() {
  const triggers = [
    "Establishing a commercial distribution channel with licensed UAE medical warehouses and marketing offices",
    "Setting up importation clearance procedures and customs compliance for MOHAP-registered devices",
    "Establishing traceability, storage conditions, and complaint escalation pathways with commercial distributors",
    "Transitioning from product registration approval to full commercial launch across public and private hospitals",
  ];

  const supportItems = [
    "Medical warehouse and marketing office role assessment and qualification",
    "Manufacturer-Local Applicant-Distributor responsibility mapping and quality agreements",
    "Importation permit and customs clearance interface review with MOHAP",
    "Storage and handling controls (ambient, air-conditioned, cold-chain monitoring)",
    "Product catalogue, model hierarchy, and serial/batch traceability governance",
    "Customer complaint escalation from distributors and healthcare facilities",
    "Safety alert, Field Safety Notice, and product recall communication pathways",
    "Control of approved bilingual labels, IFUs, and promotional brochures in distribution channels",
    "Regulatory change communication and supply-chain impact management",
    "Portfolio expansion and multi-distributor registration-maintenance planning",
    "Commercial launch readiness and regulatory handover after registration approval",
  ];

  const challenges = [
    "Does the commercial importer hold a valid MOHAP medical warehouse license covering the device categories?",
    "Are temperature-controlled transport and warehouse storage validated through calibrated dataloggers?",
    "Can product lots be traced from UAE port of entry to individual hospital departments within hours?",
    "Are commercial distributors legally bound to report all customer complaints and safety events immediately?",
    "Are promotional materials used by local sales teams strictly limited to authorized MOHAP claims?",
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
            <span className="text-navy">Supply Chain &amp; Warehouse</span>
          </div>

          <Link
            to="/services/uae"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UAE Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Commercial &amp; Warehouse Governance
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Medical Warehouse, Local Supply Chain &amp; Commercial Readiness
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              A Strong UAE Strategy Connects Regulatory Approval With the Actual Supply Chain. Medical equipment registration is linked to the local commercial structure. The applicant must be appropriately licensed, and the manufacturer, local applicant, importation, storage, distribution and post-market pathways must remain aligned after product registration.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your UAE Supply-Chain Model <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Supply-Chain &amp; Warehouse Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Operating Model Integration:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We connect regulatory approval to the operating model so the entity that registers the device can also maintain the evidence, traceability and communication controls expected throughout the lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Align Your UAE Supply Chain and Warehouse Operations with MOHAP Regulations"
        description="Our supply chain specialists structure quality agreements, audit warehouse distribution controls, and support commercial launch."
      />
    </>
  );
}
