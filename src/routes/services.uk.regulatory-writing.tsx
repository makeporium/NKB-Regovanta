import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FileText,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/regulatory-writing")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "UK Regulatory Writing & CER | NKB Regovanta" },
      {
        name: "description",
        content:
          "Regulatory and medical writing for the UK market: Clinical Evaluation Reports (CER), PMSR, PSUR, risk management files, and clinical protocols.",
      },
      { property: "og:title", content: "UK Regulatory Writing & CER | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Regulatory and medical writing for the UK market: Clinical Evaluation Reports (CER), PMSR, PSUR, risk management files, and clinical protocols.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/regulatory-writing" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UK Regulatory Writing & CER | NKB Regovanta" },
      {
        name: "twitter:description",
        content:
          "Regulatory and medical writing for the UK market: Clinical Evaluation Reports (CER), PMSR, PSUR, risk management files, and clinical protocols.",
      },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/regulatory-writing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "UK Regulatory & Medical Writing Services",
          description: "Clinical Evaluation Reports (CER), PSUR, and technical file writing for the UK medical device market.",
          provider: {
            "@type": "Organization",
            name: "NKB Regovanta",
            url: "https://www.nkbregovanta.com",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "United Kingdom",
          },
        }),
      },
    ],
  }),
  component: UKRegulatoryWritingPage,
});

function UKRegulatoryWritingPage() {
  const writingAreas = [
    "Clinical Evaluation Reports (CER) and clinical literature search protocols",
    "Post-Market Surveillance Plans, PMSR and Periodic Safety Update Reports (PSUR)",
    "ISO 14971 Risk Management Plans, Hazard Analysis and Benefit-Risk Summaries",
    "In Vitro Diagnostic (IVD) Performance Evaluation Reports and Scientific Validity dossiers",
    "Biological Safety Evaluation Reports and toxicological risk assessments",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/uk" className="hover:text-navy transition-colors">United Kingdom</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Regulatory Writing</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl">
              UK Regulatory &amp; Clinical Writing Services
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              We author scientifically defensible clinical evaluation reports, post-market surveillance files, and risk management dossiers for UK Approved Body submission.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services/uk/technical-file"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                View Technical File Compilation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl font-extrabold text-navy">Specialized Writing Capabilities</h2>
            <div className="grid grid-cols-1 gap-2.5">
              {writingAreas.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface/40 border border-gray-200/80 flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Author Defensible Clinical and Technical Dossiers for the UK"
        description="Our medical writers deliver audit-ready CERs, risk management files, and PMS reports."
      />
    </>
  );
}
