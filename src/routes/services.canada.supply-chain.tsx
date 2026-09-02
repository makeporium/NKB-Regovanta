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

export const Route = createFileRoute("/services/canada/supply-chain")({
  head: () => ({
    meta: [
      {
        title:
          "Canadian Manufacturer, Importer & Supply-Chain Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Compliance agreements, importer MDEL obligations, distribution record traceability, recall procedures, and regulatory ownership across the Canadian medical device supply chain.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/canada/supply-chain" }],
  }),
  component: CanadaSupplyChainPage,
});

function CanadaSupplyChainPage() {
  const supplyChainItems = [
    "Legal manufacturer and establishment-role assessment",
    "Importer and distributor MDEL requirements and verification",
    "Verification of device licensing (MDL/MDEL) before import or commercial sale",
    "Distribution records, lot-level tracking, and supply-chain traceability",
    "Complaint communication workflows between Canadian partners and the legal manufacturer",
    "Mandatory problem reporting responsibilities and timeline enforcement",
    "Recall responsibilities, Health Canada notifications, and effectiveness checks",
    "Storage, handling, temperature monitoring, and transport controls",
    "Quality agreements, regulatory contracts, and responsibility mapping",
    "Change notification protocols and licence maintenance interfaces",
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
            <span className="text-navy">Supply-Chain Compliance</span>
          </div>

          <Link
            to="/services/canada"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Canada Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
              Economic Operators &amp; Importers
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Manufacturer, Importer &amp; Supply-Chain Compliance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Canadian market access depends on more than the manufacturer’s device licence. The roles of the importer and distributor, MDEL status, traceability, complaint routing and regulatory responsibilities must be clear across the supply chain.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#e03131] hover:bg-[#c92a2a] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Canadian Supply-Chain Compliance <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Supply Chain Items */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-gray-200/80">
            <h2 className="text-xl font-extrabold text-navy mb-4">Supply Chain &amp; Importer Compliance Framework</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supplyChainItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200 mt-6">
              <p className="text-xs font-bold text-navy">Expert Focus:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                A compliant supply chain requires clear ownership of the regulatory decisions: who verifies licence status, who receives complaints, who assesses reportability, who communicates recalls and who maintains the records Health Canada may request.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Align Your Canadian Import and Distribution Operations"
        description="Our team drafts quality agreements, audits importer standard operating procedures, and verifies MDEL compliance."
      />
    </>
  );
}
