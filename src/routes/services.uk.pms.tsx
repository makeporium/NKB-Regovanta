import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  AlertTriangle,
  FileSpreadsheet,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/pms")({
  head: () => ({
    meta: [
      { title: "Great Britain Post-Market Surveillance (PMS), PMSR / PSUR & Vigilance | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior regulatory compliance for Great Britain's strengthened 2025 PMS requirements, PMSR, Periodic Safety Update Reports (PSUR), vigilance reporting, and UKRP incident coordination.",
      },
      {
        name: "keywords",
        content:
          "UK PMS post-market surveillance 2025, MHRA PMSR PSUR, GB vigilance incident reporting MORE, Field Safety Corrective Action UK, NKB Regovanta",
      },
      { property: "og:title", content: "Great Britain Post-Market Surveillance & PSUR | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Great Britain strengthened its PMS rules from June 2025. We connect post-market complaints, safety signals, and vigilance back into your technical documentation and risk files.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/pms" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/pms" }],
  }),
  component: UKPMSPage,
});

function UKPMSPage() {
  const pmsSupport = [
    "PMS system gap assessment against new GB post-market regulations",
    "Proactive PMS Plan development, review and lifecycle remediation",
    "Post-Market Surveillance Report (PMSR) authoring for Class I devices",
    "Periodic Safety Update Report (PSUR) strategy and scheduling for Class IIa, IIb, III & IVDs",
    "Complaint data evaluation, statistical trending and threshold monitoring",
    "Safety and performance signal evaluation and emerging risk detection",
    "Benefit-risk reassessment based on commercial clinical experience",
    "Corrective and Preventive Action (CAPA) linkage and investigation support",
    "ISO 14971 risk management file and hazard traceability updates",
    "Technical documentation feedback loops and CER / PER data refreshes",
    "Structured information flow governance between foreign manufacturer and UKRP",
    "Periodic executive reviews and continuous post-market lifecycle maintenance",
  ];

  const vigilanceSupport = [
    "Incident triage and adverse event causality determination",
    "Serious-incident reportability assessment against MHRA guidance criteria",
    "MHRA submission support via the MORE (Medicines & Medical Devices Online Reporting) portal",
    "Statistically significant trend reporting and adverse signal alerts",
    "Field Safety Corrective Action (FSCA) root-cause and containment strategy",
    "Field Safety Notice (FSN) drafting, customer notification and MHRA review",
    "Initial, follow-up and final closure reporting within mandatory statutory timelines",
    "CAPA integration preventing recurrence of field device failures",
    "UKRP representation and direct liaison with MHRA vigilance enforcement officers",
    "Coordinated global vigilance alignment preventing conflicting international notices",
  ];

  const feedbackLoop = [
    { num: "01", label: "Complaint / Incident" },
    { num: "02", label: "Signal Detection" },
    { num: "03", label: "Risk Reassessment" },
    { num: "04", label: "CAPA Action" },
    { num: "05", label: "PMS / PSUR Update" },
    { num: "06", label: "Technical File Refinement" },
    { num: "07", label: "Regulatory Action" },
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
              name: "Great Britain Post-Market Surveillance, PMSR / PSUR & Vigilance",
              url: "https://www.nkbregovanta.com/services/uk/pms",
              description:
                "Post-Market Surveillance (PMS) plans, Periodic Safety Update Reports (PSUR), and MHRA vigilance reporting for medical devices and IVDs in Great Britain.",
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
                { "@type": "ListItem", position: 4, name: "Post-Market Surveillance", item: "https://www.nkbregovanta.com/services/uk/pms" },
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
            <span className="text-navy">Post-Market Surveillance</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <RefreshCw className="h-3.5 w-3.5" /> Strengthened GB 2025 PMS Rules
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Great Britain Post-Market Surveillance, PMSR / PSUR &amp; Vigilance
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Great Britain strengthened its medical-device post-market surveillance requirements from 16 June 2025. Manufacturers must treat PMS as a structured regulatory system that continuously evaluates safety, performance and emerging risk throughout the product lifecycle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Strengthen Your GB Post-Market System <ArrowRight className="h-4 w-4" />
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
              {/* Feedback Loop */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  The Closed-Loop Post-Market Evidence System
                </h2>
                <p className="text-[13px] text-navy/75 font-medium leading-relaxed">
                  We connect real-world post-market data directly back into the technical file and risk management system:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
                  {feedbackLoop.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PMS Deliverables */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  12 Key PMS &amp; PSUR Deliverables
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {pmsSupport.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vigilance & FSCA Support */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Shield className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-extrabold text-navy">
                    Vigilance, Incident Reporting &amp; FSCA Support
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {vigilanceSupport.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[13px] font-medium text-navy/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior Perspective */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Approach</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Post-Market Intelligence That Protects Market Authorization
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  The objective is not only to file periodic reports on time, but to determine whether post-market data changes the known risk profile, performance conclusions, labeling, corrective actions or commercial strategy.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Mandatory Reporting Timelines
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">Serious Public Health Threat:</strong> Report to MHRA within 2 days</p>
                  <p><strong className="text-navy">Death or Unanticipated Deterioration:</strong> Report to MHRA within 10 days</p>
                  <p><strong className="text-navy">Other Serious Incidents:</strong> Report to MHRA within 15 days</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Audit Your PMS System</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Ensure your post-market surveillance aligns with the June 2025 GB statutory rules.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request PMS Assessment <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish an Audit-Proof Post-Market Surveillance &amp; Vigilance Engine"
        description="Our post-market specialists handle PMSR, PSUR, and MORE incident reporting with precision."
      />
    </>
  );
}
