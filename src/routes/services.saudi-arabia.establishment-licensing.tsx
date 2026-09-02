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

export const Route = createFileRoute("/services/saudi-arabia/establishment-licensing")({
  head: () => ({
    meta: [
      {
        title:
          "Medical Device Establishment Licensing (MDEL / MDS-REQ 9) | SFDA Saudi Arabia | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "SFDA establishment licensing for medical device importers, distributors, authorized representatives, and warehouses under MDS-REQ 9. GHAD account setup, QMS procedures, and supply-chain compliance.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia/establishment-licensing" }],
  }),
  component: SaudiEstablishmentLicensingPage,
});

function SaudiEstablishmentLicensingPage() {
  const triggers = [
    "Establishing a new commercial entity or subsidiary for medical device importation or distribution in Saudi Arabia",
    "Securing or renewing an SFDA Establishment License for Authorized Representatives, Importers, or Distributors",
    "Aligning storage warehouses, 3PL logistics facilities, and transportation controls with SFDA Good Storage Practices",
    "Ensuring local supply chain partners maintain full traceability and compliance with the Medical Devices Law",
  ];

  const supportItems = [
    "Establishment activity and license-scope assessment (Manufacturer, Importer, Distributor, AR, Warehouse)",
    "Authorized Representative establishment qualification and licensing under MDS-REQ 9",
    "Importer and distributor commercial role and regulatory boundary mapping",
    "Warehouse storage facility inspection readiness (temperature, humidity, pest control, segregation)",
    "GHAD unified portal establishment-registration and account management",
    "Quality Management System (QMS) and standard operating procedure development for local operations",
    "Technical manager and qualified person appointment qualification requirements",
    "Supply-chain complaint escalation, product hold, and vigilance reporting interfaces",
    "Batch/serial traceability and commercial distribution record-control governance",
    "Establishment license renewal, activity scope expansion, and site amendment support",
  ];

  const challenges = [
    "Does the commercial entity hold the exact establishment activity license required for its distribution operations?",
    "Do storage and transportation facilities have continuous, calibrated temperature and environmental logging?",
    "Are contractual quality agreements in place between the overseas manufacturer, AR, importers, and distributors?",
    "Can the local warehouse execute a rapid product quarantine or physical recall within statutory SFDA timelines?",
    "Is the appointed technical manager properly registered and authorized in the GHAD system?",
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
            <span className="text-navy">Establishment Licensing</span>
          </div>

          <Link
            to="/services/saudi-arabia"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Saudi Arabia Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              MDS-REQ 9 &amp; Supply Chain
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              Medical Device Establishment Licensing &amp; Local Supply Chain
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              Market Access Depends on Both Device Authorization and Licensed Local Activities. SFDA separately licenses medical-device establishments according to their activity. Importers, distributors, Authorized Representatives, warehouses and other establishments may have activity-specific licensing obligations under MDS-REQ 9 and the Medical Devices Law framework.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Review Your Saudi Supply-Chain Model <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Establishment Licensing Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Layered Regulatory Approach:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                Device authorization and establishment licensing are separate regulatory layers. We make sure the MDMA strategy and the local commercial model work together rather than being developed independently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Obtain Your SFDA Medical Device Establishment License (MDEL)"
        description="Our supply-chain specialists structure MDS-REQ 9 establishment licensing, implement storage QMS procedures, and register facilities in GHAD."
      />
    </>
  );
}
