import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ArrowRight,
  Building2,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/qms")({
  head: () => ({
    meta: [
      { title: "EU MDR & IVDR QMS Integration, Article 10 & PRRC Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Integrate EU MDR 2017/745 Article 10 & IVDR 2017/746 Quality Management System requirements, ISO 13485 alignment, PRRC governance, and Notified Body audit readiness.",
      },
      {
        name: "keywords",
        content:
          "EU MDR QMS integration, Article 10 MDR QMS, Article 15 PRRC Person Responsible for Regulatory Compliance, ISO 13485 MDR alignment, IVDR QMS, Notified Body QMS audit, NKB Regovanta",
      },
      { property: "og:title", content: "MDR / IVDR QMS Integration, Article 10 & PRRC | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We embed EU MDR/IVDR mandates into ISO 13485 quality systems, establishing robust PRRC governance and audit-proven implementation.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/qms" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR & IVDR QMS Integration, Article 10 & PRRC Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "Integrate EU MDR 2017/745 Article 10 & IVDR 2017/746 Quality Management System requirements, ISO 13485 alignment, PRRC governance, and Notified Body audit readiness." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/qms" }],
  }),
  component: EUQMSPage,
});

function EUQMSPage() {
  const qmsAreas = [
    "Design and development controls & Design History File (DHF)",
    "Risk management integration aligned with ISO 14971",
    "Supplier and outsourced-process control & critical supplier audits",
    "Verification, validation and manufacturing process validation",
    "Clinical evaluation / performance evaluation governance",
    "PMS, PMCF / PMPF and vigilance reporting procedures",
    "Complaint handling and trend reporting systems",
    "CAPA and nonconformity management",
    "Change control and Notified Body notification triggers",
    "Document and record control across device lifecycles",
    "Training, competence and regulatory qualification records",
    "Internal audit and management review governance",
    "Regulatory data, UDI and EUDAMED registration controls",
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
              name: "EU MDR & IVDR QMS Integration, Article 10 & PRRC",
              url: "https://www.nkbregovanta.com/services/eu/qms",
              description:
                "Integration of EU MDR and IVDR quality management system mandates, Article 10 compliance, and Article 15 PRRC regulatory governance.",
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
                { "@type": "ListItem", position: 3, name: "European Union", item: "https://www.nkbregovanta.com/services/eu" },
                { "@type": "ListItem", position: 4, name: "QMS & PRRC", item: "https://www.nkbregovanta.com/services/eu/qms" },
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
            <Link to="/services/eu" className="hover:text-navy transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">QMS Integration &amp; PRRC</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ClipboardCheck className="h-3.5 w-3.5" /> Article 10 &amp; Article 15 Governance
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              MDR / IVDR QMS Integration, Article 10 &amp; PRRC
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Regulatory compliance cannot be sustained through technical documentation alone. NKB Regovanta reviews how MDR/IVDR obligations are embedded into the manufacturer’s quality system so that procedures, records and implementation remain aligned with the certified device and its lifecycle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Align Your QMS with MDR / IVDR <ArrowRight className="h-4 w-4" />
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
              {/* QMS Areas We Assess */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  13 Core QMS Areas We Assess
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {qmsAreas.map((item, idx) => (
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

              {/* PRRC & Regulatory Governance */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <UserCheck className="h-5 w-5 text-[#0b3a96]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-navy">
                    PRRC &amp; Regulatory Governance (Article 15)
                  </h3>
                </div>
                <p className="text-[13.5px] text-navy/75 leading-relaxed font-medium">
                  Where applicable, we review how Person Responsible for Regulatory Compliance (PRRC) responsibilities interface with batch release, technical documentation maintenance, PMS/vigilance and lifecycle compliance. The objective is clear accountability, demonstrable qualification records, and uncompromised regulatory oversight.
                </p>
              </div>

              {/* Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Implementation Testing Over Paper Checklists
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  A compliant technical file cannot compensate for weak implementation. We test whether the QMS can produce objective evidence that the regulatory strategy is actually being executed on the manufacturing floor and in post-market surveillance.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Audit Readiness Scope
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• ISO 13485:2016 + MDR/IVDR Gap Analysis</p>
                  <p>• Mock Notified Body Stage 1 &amp; Stage 2 Audits</p>
                  <p>• Critical Subcontractor &amp; Supplier Audits</p>
                  <p>• CAPA Remediation &amp; Root-Cause Resolution</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Prepare for QMS Audit</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Ensure your quality management system produces defensible objective evidence before Notified Body inspectors arrive.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Schedule QMS Audit <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Your Quality System with European Regulatory Mandates"
        description="Connect your procedures, PRRC responsibilities, and technical files into one seamless audit-ready infrastructure."
      />
    </>
  );
}
