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

export const Route = createFileRoute("/services/new-zealand/sponsor")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand Sponsor Services & In-Country Representation | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Professional New Zealand Sponsor services for foreign medical device, IVD, and software manufacturers. Legal sponsor representation, Medsafe liaison, distribution records, and recall readiness.",
      },
      { name: "keywords", content: "New Zealand Sponsor Services & In-Country Representation, services new zealand sponsor, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "New Zealand Sponsor Services & In-Country Representation | NKB Regovanta" },
      { property: "og:description", content: "Professional New Zealand Sponsor services for foreign medical device, IVD, and software manufacturers. Legal sponsor representation, Medsafe liaison, distribution records, and recall readiness." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/new-zealand/sponsor" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "New Zealand Sponsor Services & In-Country Representation | NKB Regovanta" },
      { name: "twitter:description", content: "Professional New Zealand Sponsor services for foreign medical device, IVD, and software manufacturers. Legal sponsor representation, Medsafe liaison, distribution records, and recall readiness." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand/sponsor" }],
  }),
  component: NZSponsorPage,
});

function NZSponsorPage() {
  const triggers = [
    "A foreign manufacturer without an established legal entity in New Zealand requires an authorized NZ Sponsor",
    "Appointing an independent regulatory sponsor to maintain control over product WAND entries separate from commercial distributors",
    "Establishing regulatory governance between the overseas manufacturer, NZ Sponsor, and local importers",
    "Managing sponsor obligations, Medsafe official correspondence, and post-market safety investigations",
  ];

  const supportItems = [
    "New Zealand Sponsor eligibility, legal appointment, and role assessment",
    "Manufacturer-Sponsor regulatory mandate and quality responsibility agreement alignment",
    "WAND sponsor account setup, notification governance, and ongoing record management",
    "Access to manufacturer technical files, clinical evaluations, and risk documentation",
    "Distribution-record and batch traceability systems for New Zealand consignments",
    "Customer complaint intake, triage, and adverse-event escalation pathways to Medsafe",
    "Recall and field safety corrective action (FSCA) execution readiness under the Recall Code",
    "Direct liaison and technical correspondence with Medsafe medical device evaluators",
    "WAND data maintenance and lifecycle variation communication",
    "Record-retention framework in compliance with the Medicines Regulations 1984",
    "Multiple-importer regulatory strategy where multiple commercial entities distribute the same device",
  ];

  const challenges = [
    "Is the New Zealand Sponsor a legally established resident entity in New Zealand?",
    "Does the regulatory agreement safeguard manufacturer IP while fulfilling statutory reporting duties?",
    "Can the sponsor produce complete technical files upon Medsafe request within statutory timeframes?",
    "How quickly must the manufacturer notify the sponsor of design changes, safety alerts, or overseas recalls?",
    "Are commercial distributor arrangements kept distinct from regulatory sponsor ownership?",
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
            <span className="text-navy">Sponsor Services</span>
          </div>

          <Link
            to="/services/new-zealand"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to New Zealand Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Legally Responsible Local Entity
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[40px]">
              New Zealand Sponsor Services &amp; Regulatory Governance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              The Sponsor Is the Legally Responsible Local Entity. New Zealand law places legal responsibility on the Sponsor — generally a New Zealand importer, exporter or local manufacturer arranging supply of the device. Sponsor obligations extend well beyond WAND notification and include device safety, record keeping, recall readiness and communication with Medsafe.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[13px] font-semibold px-6 py-3 rounded-md transition-all shadow-sm"
              >
                Strengthen Your NZ Sponsor Governance <ArrowRight className="h-4 w-4" />
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
            <h2 className="text-xl font-extrabold text-navy mb-6">Our Sponsor Governance Scope</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {supportItems.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b7261] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90 leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-200 mt-6">
              <p className="text-xs font-bold text-navy">Lifecycle Governance Principle:</p>
              <p className="text-xs text-navy/80 font-medium leading-relaxed mt-1">
                We treat sponsor governance as a lifecycle control. We establish who receives complaints, who assesses reportability, who owns WAND updates, how manufacturer investigations are obtained, and how affected customers can be identified quickly if a recall or correction becomes necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Appoint Independent New Zealand Sponsor Representation"
        description="Our In-Country specialists act as or coordinate your legal NZ Sponsor, manage Medsafe communications, and ensure post-market compliance."
      />
    </>
  );
}
