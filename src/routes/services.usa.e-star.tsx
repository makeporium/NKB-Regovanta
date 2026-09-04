import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Sparkles,
  ArrowRight,
  HelpCircle,
  AlertTriangle,
  FileCheck2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/e-star")({
  head: () => ({
    meta: [
      { title: "eSTAR Dossier Preparation Consultant | US FDA 510(k) & De Novo | NKB Regovanta" },
      {
        name: "description",
        content:
          "Complete US FDA eSTAR dossier preparation and compilation services. We develop the regulatory content, technical evidence, and cross-section consistency behind the eSTAR template.",
      },
      {
        name: "keywords",
        content:
          "FDA eSTAR dossier, eSTAR preparation consultant, eSTAR template 510k, eSTAR De Novo, CDRH portal submission, NKB Regovanta",
      },
      { property: "og:title", content: "eSTAR Dossier Preparation Services | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We treat eSTAR as the container for the regulatory argument — building comprehensive, cross-checked FDA dossiers that pass technical screening.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/e-star" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "eSTAR Dossier Preparation Consultant | US FDA 510(k) & De Novo | NKB Regovanta" },
      { name: "twitter:description", content: "Complete US FDA eSTAR dossier preparation and compilation services. We develop the regulatory content, technical evidence, and cross-section consistency behind the eSTAR template." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/e-star" }],
  }),
  component: EStarPage,
});

function EStarPage() {
  const whenNeeded = [
    "For applicable 510(k) and De Novo submissions",
    "When a manufacturer has supporting reports but needs an integrated FDA dossier",
    "When multiple teams have generated documents and consistency across the submission must be controlled",
    "When a prior submission has been delayed by gaps, contradictions or weak cross-referencing",
  ];

  const whatWeDevelop = [
    "Device description and indications for use",
    "Classification and predicate information",
    "Substantial equivalence comparison",
    "Standards and guidance conformance",
    "Performance evidence documentation",
    "Biocompatibility evaluation & test reports",
    "Sterilization, packaging and shelf life validation",
    "Software and cybersecurity documentation",
    "Electrical safety and EMC reports",
    "Human factors & usability engineering",
    "Labeling, IFU and package inserts",
    "Clinical or performance evidence where applicable",
    "Supporting attachments and cross-references",
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
              name: "eSTAR Dossier Preparation",
              url: "https://www.nkbregovanta.com/services/usa/e-star",
              description:
                "US FDA eSTAR dossier compilation, technical evidence integration, and cross-section consistency review for 510(k) and De Novo submissions.",
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
                { "@type": "ListItem", position: 3, name: "USA FDA", item: "https://www.nkbregovanta.com/services/usa" },
                { "@type": "ListItem", position: 4, name: "eSTAR Dossier", item: "https://www.nkbregovanta.com/services/usa/e-star" },
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
            <Link to="/services/usa" className="hover:text-navy transition-colors">USA FDA</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">eSTAR Dossier Preparation</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <ClipboardList className="h-3.5 w-3.5" /> Official FDA Submission Template
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              eSTAR Dossier Preparation
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We treat eSTAR as the container for the regulatory argument — not as the strategy itself. The dossier is built only after pathway, predicate and evidence requirements are clear, then checked for cross-section consistency.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Prepare Your eSTAR Submission <ArrowRight className="h-4 w-4" />
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
              {/* What This Service Is */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  eSTAR is the structured FDA submission format used for applicable device submissions. A complete template alone does not make a strong submission; the strength comes from the regulatory logic, evidence quality and consistency of the information placed within it.
                </p>
              </div>

              {/* When It Is Needed */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When It Is Needed
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whenNeeded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-gray-200/70 hover:bg-blue-50/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13.5px] text-navy/80 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Develop and Review */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  What We Develop and Review
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {whatWeDevelop.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[12.5px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submission Consistency Review */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-2.5 mb-2 text-amber-900">
                  <AlertTriangle className="h-5 w-5 text-amber-700" />
                  <h4 className="text-base font-extrabold">Submission Consistency Review</h4>
                </div>
                <p className="text-[13.5px] text-amber-950/90 leading-relaxed font-medium">
                  We trace the core regulatory story across <strong>Indications for Use → Device Description → Predicate Comparison → Risk Controls → Performance Evidence → Labeling</strong>. Contradictions between these sections are challenged and resolved before submission.
                </p>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Substance Over Simple Template Filling
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We develop the regulatory content behind the eSTAR — not merely populate the FDA template.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  eSTAR Specifications
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Mandatory for all 510(k) submissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Automated technical screening by FDA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>CDRH Customer Portal electronic submission</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Ready to Compile Your eSTAR?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Pass FDA's automated technical screening on your very first submission attempt.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Prepare eSTAR Submission <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Build Your eSTAR Dossier?"
        description="Our FDA team ensures seamless compliance and zero screening rejections."
      />
    </>
  );
}
