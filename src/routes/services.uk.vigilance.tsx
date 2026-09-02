import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  AlertTriangle,
  FileCheck2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/vigilance")({
  head: () => ({
    meta: [
      { title: "UK MHRA Vigilance & Field Safety Corrective Action (FSCA) | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior regulatory vigilance support for medical devices and IVDs in the UK. Adverse incident triage, MHRA MORE portal reporting, Field Safety Notices (FSN), and FSCA root-cause investigations.",
      },
      {
        name: "keywords",
        content:
          "UK MHRA vigilance reporting, MORE portal medical device incident, FSCA Field Safety Corrective Action UK, Field Safety Notice FSN, UKRP vigilance coordination, NKB Regovanta",
      },
      { property: "og:title", content: "UK MHRA Vigilance & FSCA Support | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "When a safety issue arises, we triage reportability, author Field Safety Notices, interface with MHRA, and link findings directly to CAPA and risk management.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/vigilance" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/vigilance" }],
  }),
  component: UKVigilancePage,
});

function UKVigilancePage() {
  const vigilanceDeliverables = [
    "Initial adverse incident triage and device causality investigation",
    "Statutory reportability assessment against MHRA vigilance guidance",
    "Serious-incident classification (death, severe deterioration, public health threat)",
    "Regulatory reporting timeline assessment (2, 10 or 15 calendar days)",
    "Initial, periodic follow-up and final closure report authoring in MORE portal",
    "Adverse trend assessment and signal detection across user feedback",
    "Field Safety Corrective Action (FSCA) decision and risk justification support",
    "Field Safety Notice (FSN) drafting, customer notification and MHRA pre-review",
    "ISO 14971 risk management file and hazard probability updates",
    "Corrective and Preventive Action (CAPA) root-cause investigation linkage",
    "Seamless UKRP and overseas manufacturer coordination",
    "Direct regulatory communication and formal response management with MHRA",
    "Comprehensive incident closure dossier compilation and archive maintenance",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "UK MHRA Vigilance & Field Safety Corrective Action (FSCA) Support",
              url: "https://www.nkbregovanta.com/services/uk/vigilance",
              description:
                "Adverse incident triage, MORE portal reporting, Field Safety Notices, and vigilance management with the UK MHRA.",
              provider: {
                "@type": "ProfessionalService",
                name: "NKB Regovanta Solutions Pvt. Ltd.",
                url: "https://www.nkbregovanta.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nkbregovanta.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.nkbregovanta.com/services" },
                { "@type": "ListItem", position: 3, name: "United Kingdom", item: "https://www.nkbregovanta.com/services/uk" },
                { "@type": "ListItem", position: 4, name: "Vigilance & FSCA", item: "https://www.nkbregovanta.com/services/uk/vigilance" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/uk" className="hover:text-navy transition-colors">United Kingdom</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Vigilance &amp; FSCA</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldAlert className="h-3.5 w-3.5" /> Rapid Incident Response
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              UK Vigilance &amp; Field Safety Corrective Action (FSCA)
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              When a safety issue arises, the regulatory response must be grounded in event seriousness, device relationship, recurrence potential, and risk to patients. We provide end-to-end incident triage, MORE reporting, and FSCA execution.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Discuss a UK Vigilance or FSCA Issue <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* 13 Key Vigilance Deliverables */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  13 Core Vigilance &amp; FSCA Capabilities
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {vigilanceDeliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-red-600 mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Approach</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Connecting Vigilance Directly to the Technical File
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not separate vigilance from the technical file. A serious incident can change the benefit-risk profile, trigger CAPA, affect labeling, require additional verification or validation, and alter the post-market evidence plan. We assess the regulatory consequence beyond the individual incident report.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  MORE Reporting Portal
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>All serious adverse incidents in Great Britain must be reported electronically via the MHRA MORE (Medicines &amp; Medical Devices Online Reporting) system. Our team handles account administration and direct XML/portal lodgements.</p>
                </div>
              </div>

              <div className="bg-red-50/60 p-6 rounded-2xl border border-red-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Active Field Action?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Have an urgent adverse incident or potential field safety corrective action in the UK?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Contact Vigilance Team <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Protect Patient Safety and Regulatory Good Standing in the UK"
        description="Our vigilance specialists navigate MHRA reporting, Field Safety Notices, and rapid incident resolution."
      />
    </>
  );
}
