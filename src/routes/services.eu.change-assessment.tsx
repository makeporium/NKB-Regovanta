import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  ArrowRight,
  RefreshCw,
  FileText,
  Building2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/change-assessment")({
  head: () => ({
    meta: [
      { title: "EU MDR & IVDR Change Assessment & Lifecycle Control Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior regulatory change assessment under EU MDR 2017/745 and IVDR 2017/746. Substantial vs non-substantial change evaluation, Notified Body notification triggers, and technical file updates.",
      },
      {
        name: "keywords",
        content:
          "MDR change assessment, significant change MDR Article 120, Notified Body change notification, IVDR change control, technical documentation update, NKB Regovanta",
      },
      { property: "og:title", content: "Change Assessment & Lifecycle Control | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We assess how design, manufacturing, supplier, software, labeling, and evidence changes impact your CE certificate before implementation.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/change-assessment" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/change-assessment" }],
  }),
  component: EUChangeAssessmentPage,
});

function EUChangeAssessmentPage() {
  const changeTypes = [
    "Design modifications and raw material / polymer changes",
    "Software updates, cybersecurity patches and algorithmic refinements",
    "Manufacturing site transfers, line additions and process validations",
    "Supplier changes, critical subcontractor switches and material supply security",
    "Sterilization method changes, packaging alterations and shelf-life extensions",
    "Labeling, Instructions for Use (IFU), intended purpose and claim revisions",
    "Performance specification changes and assay reformulation",
    "Clinical / analytical / clinical-performance evidence impact evaluation",
    "QMS scope changes and Notified Body certificate boundary impacts",
    "Notified Body prior-approval vs annual notification trigger determinations",
  ];

  const decisionLogic = [
    { num: "01", label: "Proposed Change Definition" },
    { num: "02", label: "Impact on Intended Purpose & Design" },
    { num: "03", label: "Risk & Evidence Impact Assessment" },
    { num: "04", label: "V&V / Clinical Testing Need" },
    { num: "05", label: "Technical File & QMS Update" },
    { num: "06", label: "NB Notification / Registration Action" },
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
              name: "EU MDR & IVDR Change Assessment & Lifecycle Control",
              url: "https://www.nkbregovanta.com/services/eu/change-assessment",
              description:
                "Regulatory impact assessments for device, software, manufacturing, and labeling changes under EU MDR 2017/745 and IVDR 2017/746.",
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
                { "@type": "ListItem", position: 4, name: "Change Assessment", item: "https://www.nkbregovanta.com/services/eu/change-assessment" },
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
            <span className="text-navy">Change Assessment &amp; Lifecycle</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="h-3.5 w-3.5" /> Lifecycle Change Control
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Change Assessment &amp; Lifecycle Control
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We assess the regulatory impact of engineering, supplier, manufacturing, software and labeling changes before implementation — determining whether a modification requires prior Notified Body approval or internal technical documentation updates.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Assess a Device, Manufacturing or Regulatory Change <ArrowRight className="h-4 w-4" />
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
              {/* Decision Logic */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  The 6-Step Regulatory Decision Logic
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {decisionLogic.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Change Types */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  10 Change Categories We Evaluate
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {changeTypes.map((item, idx) => (
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

              {/* Senior-Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior-Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Protecting Certificate Validity Before Tooling Changes
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  Implementing a significant change without mandatory Notified Body notification can result in immediate certificate suspension. We provide rigorous, documented regulatory impact assessments that justify whether a change is substantial under MDCG guidance.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  MDCG Change Guidance
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">MDCG 2020-3:</strong> Significant changes regarding the transitional provisions for MDR</p>
                  <p><strong className="text-navy">MDCG 2022-6:</strong> Significant changes under IVDR Article 110</p>
                  <p><strong className="text-navy">Notified Body Prior-Approval:</strong> Required for substantial design, material or intended-use expansions.</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Assess a Proposed Change</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Evaluate whether your upcoming device modification triggers Notified Body notification.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request Change Assessment <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Continuous CE Mark Conformity Through Every Device Evolution"
        description="Our regulatory lifecycle consultants provide defensible change impact evaluations and Notified Body notifications."
      />
    </>
  );
}
