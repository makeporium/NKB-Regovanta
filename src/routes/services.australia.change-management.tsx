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

export const Route = createFileRoute("/services/australia/change-management")({
  head: () => ({
    meta: [
      {
        title:
          "Australia ARTG Variations, Significant Changes & Lifecycle Support | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "TGA significant change evaluation, ARTG variation applications under Section 9D, kind-of-device impact analysis, Manufacturer Evidence updates, and lifecycle engineering change control in Australia.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/australia/change-management" }],
  }),
  component: AustraliaChangeManagementPage,
});

function AustraliaChangeManagementPage() {
  const triggers = [
    "Design or technical specification modification to a marketed device",
    "Raw material, chemical formulation, or critical supplier change",
    "Software, firmware, or cybersecurity algorithmic update",
    "Manufacturing site relocation, line extension, or legal entity transfer",
    "Manufacturing process, sterilisation method, or cycle parameter change",
    "Primary/secondary packaging or shelf-life / expiry date extension",
    "Labelling, IFU, clinical indication, or intended purpose expansion",
    "Clinical evaluation update or new performance data generation",
    "Conformity certificate change, scope renewal, or transition to MDR/IVDR",
    "Sponsor transfer, corporate restructuring, or manufacturer data modification",
  ];

  const supportItems = [
    "Regulatory change-impact assessment against Therapeutic Goods legislation",
    "Verification and validation requirement definition for proposed changes",
    "Manufacturer Evidence variation strategy and TGA Business Services filing",
    "ARTG Section 9D variation application vs. new ARTG inclusion assessment",
    "Conformity certificate scope and notified body / CAB impact review",
    "Technical documentation and Essential Principles update roadmap",
    "Clinical / performance evidence impact assessment",
    "Risk management file (ISO 14971) update and benefit-risk re-evaluation",
    "Labelling, packaging artwork, and IFU modification review",
    "UDI trigger analysis and AusUDID data attribute update execution",
    "Sponsor notification protocols and governance documentation",
    "Post-market surveillance and annual reporting continuity planning",
  ];

  const challenges = [
    "Change implemented in production before regulatory impact assessment is performed",
    "New device model assumed to fit under existing ARTG inclusion without kind-of-device grouping review",
    "Conformity certificate updated overseas but not reflected in TGA Manufacturer Evidence",
    "Software update alters clinical performance or diagnostic output but is treated as routine maintenance",
    "UDI change trigger missed during catalogue or model restructuring",
    "Manufacturing transfer completed without validating process equivalency and regulatory evidence",
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
            <Link to="/services/australia" className="hover:text-navy transition-colors">Australia</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Change Management</span>
          </div>

          <Link
            to="/services/australia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Australia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Section 9D Variations &amp; Changes
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              ARTG Variations, Significant Changes &amp; Device Lifecycle Support
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Device changes can affect more than the technical file. A modification may affect conformity assessment evidence, Manufacturer Evidence, ARTG representation, UDI, labelling, Sponsor records or post-market obligations. Changes should therefore be assessed before implementation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Assess an Australian Device Change <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* When This Support Is Needed */}
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Support Includes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                Does the change alter the regulatory basis on which conformity was demonstrated or the kind of medical device represented in the ARTG?
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Manage ARTG Variations and Device Lifecycle Changes"
        description="Our regulatory strategists assess change impact, lodge Section 9D variations, and maintain Manufacturer Evidence continuity."
      />
    </>
  );
}
