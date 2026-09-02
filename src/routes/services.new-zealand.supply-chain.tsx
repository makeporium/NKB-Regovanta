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

export const Route = createFileRoute("/services/new-zealand/supply-chain")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand Importer, Distributor & Local Supply Chain Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Regulatory supply chain governance for New Zealand medical device importers and distributors. Multi-importer WAND strategies, distribution traceability records, and recall readiness.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/supply-chain" }],
  }),
  component: NZSupplyChainPage,
});

function NZSupplyChainPage() {
  const triggers = [
    "Supplying medical devices through multiple independent commercial importers in New Zealand",
    "Structuring regulatory sponsor responsibilities versus commercial distribution agreements",
    "Establishing distribution record keeping and batch traceability systems for New Zealand consignments",
    "Setting up rapid recall customer-notification capability under the NZ Recall Code",
  ];

  const supportItems = [
    "Importer and sponsor role mapping under the Medicines Regulations 2003",
    "Multiple-importer WAND notification strategy and record synchronization",
    "Distribution and batch traceability records setup and auditing",
    "Warehouse storage, ambient temperature control, and handling procedure review",
    "Customer complaint intake and distributor escalation pathways",
    "Direct manufacturer communication and adverse-event notification protocols",
    "Recall, customer notification, and product quarantine readiness",
    "Control of approved product labels, user manuals, and promotional information",
    "Product change, discontinuation, and regulatory update communication",
    "Supply-chain support for Medsafe regulatory audits and safety investigations",
  ];

  const challenges = [
    "Does each New Zealand commercial importer understand its separate WAND notification obligations?",
    "Can the supply chain trace specific batch/serial numbers to healthcare facilities within hours?",
    "Are commercial distributors contractually obligated to report all complaints and incidents to the sponsor immediately?",
    "Are marketing brochures and promotional materials strictly controlled against approved claims?",
    "Is there a clear procedure to quarantine affected inventory across all distributors during a recall?",
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
            <Link to="/services/new-zealand" className="hover:text-navy transition-colors">New Zealand</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Supply Chain &amp; Importers</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Supply Chain &amp; Traceability
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Importer, Distributor &amp; Local Supply Chain Compliance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Each New Zealand Importer Can Carry Its Own Sponsor Obligations. Importers and distributors are central to the New Zealand medical-device framework. Where more than one importer supplies the same device, each importer may have its own WAND notification obligations because a notification is specific to the sponsor-device combination.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your New Zealand Supply Chain <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Supply Chain &amp; Importer Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Commercial Route Mapping:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We map the local commercial route before notification so there is no gap between who imports the device, who is the sponsor, whose WAND entry applies and who can identify customers during a recall. This is a regulatory supply-chain decision, not just a logistics decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Structure Your New Zealand Supply Chain and Distribution Traceability"
        description="Our supply chain specialists align multi-importer WAND records, audit batch traceability, and ensure recall readiness."
      />
    </>
  );
}
