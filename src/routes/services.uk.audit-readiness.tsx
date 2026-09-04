import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Building2,
  Sparkles,
  ArrowRight,
  FileCheck2,
  Search,
  ShieldCheck,
  Award,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/audit-readiness")({
  head: () => ({
    meta: [
      { title: "UK Approved Body & Conformity Assessment Readiness | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior UK Approved Body audit preparation, mock interviews, ISO 13485 QMS review, technical file pre-assessment, and nonconformity resolution under UK MDR 2002.",
      },
      {
        name: "keywords",
        content:
          "UK Approved Body readiness, UKCA audit preparation, UK MDR conformity assessment, Approved Body deficiency response, mock audit medical device UK, NKB Regovanta",
      },
      { property: "og:title", content: "UK Approved Body & Conformity Assessment Readiness | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Approved Body readiness is an evidence and implementation exercise. We prepare your team, pre-assess technical files, and defend nonconformity responses.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/audit-readiness" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UK Approved Body & Conformity Assessment Readiness | NKB Regovanta" },
      { name: "twitter:description", content: "Senior UK Approved Body audit preparation, mock interviews, ISO 13485 QMS review, technical file pre-assessment, and nonconformity resolution under UK MDR 2002." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/audit-readiness" }],
  }),
  component: UKAuditReadinessPage,
});

function UKAuditReadinessPage() {
  const readinessSupport = [
    "UK Approved Body conformity assessment route and annex selection",
    "Body selection, designated scope matching and application lodgement",
    "Formal application dossier completeness and readiness verification",
    "ISO 13485 Quality Management System (QMS) audit readiness review",
    "Technical file pre-assessment against UK MDR 2002 essential requirements",
    "ISO 14971 risk management file and hazard traceability scrutiny",
    "Clinical evaluation report (CER) or IVD performance evidence appraisal",
    "Design verification, validation, biocompatibility and software review",
    "Labeling, packaging proofs, IFU and UKCA marking readiness",
    "Stage 1 and Stage 2 audit preparation and executive coaching",
    "Mock audit execution and live evidence-trace interview rehearsals",
    "Audit finding, observation and nonconformity response strategy",
    "CAPA root-cause investigation and corrective action implementation",
    "Technical-review deficiency response and submission drafting",
    "Multi-year certification-maintenance and surveillance audit planning",
  ];

  const findingMethod = [
    { num: "01", label: "Audit Finding" },
    { num: "02", label: "Root Cause" },
    { num: "03", label: "Evidence Gap" },
    { num: "04", label: "Corrective Strategy" },
    { num: "05", label: "Revised Evidence & Implementation" },
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
              name: "UK Approved Body & Conformity Assessment Readiness",
              url: "https://www.nkbregovanta.com/services/uk/audit-readiness",
              description:
                "Audit preparation, QMS readiness, technical file pre-assessment, and deficiency defense for UK Approved Body certification.",
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
                { "@type": "ListItem", position: 4, name: "Approved Body Readiness", item: "https://www.nkbregovanta.com/services/uk/audit-readiness" },
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
            <span className="text-navy">Approved Body Readiness</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Building2 className="h-3.5 w-3.5" /> UK Approved Body Certification
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              UK Approved Body &amp; Conformity Assessment Readiness
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Where UKCA conformity assessment requires third-party involvement, the manufacturer must be prepared for both quality-system and technical-documentation scrutiny. Approved Body readiness is an evidence and implementation exercise, not a document-submission checklist.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Prepare for UK Approved Body Review <ArrowRight className="h-4 w-4" />
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
              {/* Finding Resolution Method */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  How We Approach Audit Findings &amp; Deficiencies
                </h2>
                <p className="text-[13px] text-navy/75 font-medium leading-relaxed">
                  A finding can originate from more than the document where it appears. We trace issues to their systemic root cause:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-2">
                  {findingMethod.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Readiness Support Deliverables */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  15 Core Approved Body Readiness Services
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {readinessSupport.map((item, idx) => (
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

              {/* Senior Perspective */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior Regulatory Perspective</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Root-Cause Resolution, Not Cosmetic Responses
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We determine whether the root cause of an audit finding is missing evidence, weak rationale, inconsistent documentation, inadequate implementation, insufficient risk linkage or an incorrect regulatory assumption.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Designated UK Approved Bodies
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>We work with all leading designated UK Approved Bodies (BSI Assurance UK, SGS United Kingdom, TÜV SÜD BABT, UL International, DEKRA Certification UK) to ensure seamless application lodgement and audit clearance.</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Mock Audit Simulation</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Prepare your quality and engineering teams with our rigorous mock audit rehearsal.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Book Mock Audit <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Pass Your UK Approved Body Audit on the First Pass"
        description="Our seasoned lead auditors prepare your team and technical documentation for total audit success."
      />
    </>
  );
}
