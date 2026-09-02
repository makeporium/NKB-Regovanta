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

export const Route = createFileRoute("/services/new-zealand/wand-notification")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand WAND Notification & Medsafe Database Filing | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Web Assisted Notification of Devices (WAND) database filing with Medsafe in New Zealand. 30-day statutory notifications, GMDN descriptors, product identifier entry, and WAND amendments.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/wand-notification" }],
  }),
  component: NZWandNotificationPage,
});

function NZWandNotificationPage() {
  const triggers = [
    "A New Zealand Sponsor must notify a medical device or SaMD to the Medsafe WAND database within 30 calendar days",
    "Transitioning an existing product line or adding new models, sizes, or catalogue codes to WAND",
    "Correcting or updating manufacturer, sponsor, intended purpose, or classification data in WAND",
    "Establishing multi-importer WAND notification records for the same foreign-manufactured device",
  ];

  const supportItems = [
    "WAND sponsor account setup, delegation, and administrator readiness",
    "Manufacturer corporate detail and manufacturing site verification",
    "Device notification strategy and model family grouping assessment",
    "Risk-class (Schedule 2) and GMDN preferred term review",
    "Product identifier (make, model, catalogue/part number) review for higher-risk devices",
    "WAND electronic form compilation, data-entry, and submission support",
    "Post-notification verification and confirmation record archiving",
    "WAND database correction and update support when device details change",
    "Sponsor detail, corporate address, or authorized administrator change filings",
    "Statutory 30-day timeline compliance management for imported consignments",
  ];

  const challenges = [
    "Has the notification been submitted within 30 calendar days of the device first arriving in New Zealand?",
    "Does the declared GMDN descriptor accurately match the intended clinical use of the product?",
    "Are manufacturer legal name and address details identical to overseas regulatory certificates?",
    "For Class IIb, III, and AIMD devices, are all required product identifiers accurately entered in WAND?",
    "Is there a documented process to notify Medsafe promptly whenever notified WAND information changes?",
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
            <span className="text-navy">WAND Notification</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Medsafe WAND Database
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              WAND Notification &amp; Sponsor Readiness (Medsafe)
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              WAND Notification Is a Legal Notification — Not a Product Approval. For most medical devices, the New Zealand Sponsor must notify prescribed information to the Web Assisted Notification of Devices (WAND) database within 30 calendar days of becoming the sponsor. The sponsor is also responsible for ensuring that notified information remains accurate and is corrected when it changes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Prepare Your WAND Notification <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our WAND Notification Support Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Quality Check Rule:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We quality-check the regulatory basis behind each WAND field. The objective is not just to complete the database entry, but to ensure the sponsor can stand behind the classification, GMDN, manufacturer details, intended purpose and device information declared in WAND.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Notify Your Medical Devices to Medsafe's WAND Database"
        description="Our New Zealand regulatory specialists manage WAND database submissions, verify GMDN descriptors, and ensure statutory compliance."
      />
    </>
  );
}
