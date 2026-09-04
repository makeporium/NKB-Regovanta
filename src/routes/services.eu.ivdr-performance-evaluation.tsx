import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Sparkles,
  ArrowRight,
  Microscope,
  FileCheck2,
  Activity,
  Layers,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ivdr-performance-evaluation")({
  head: () => ({
    meta: [
      { title: "EU IVDR Performance Evaluation Plan & Report (PEP / PER) Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Authoring and defense of IVDR Performance Evaluation Plans (PEP), Performance Evaluation Reports (PER), Annex XIII evidence architecture, and continuous PMPF.",
      },
      {
        name: "keywords",
        content:
          "IVDR Performance Evaluation Report PER, IVDR PEP plan, Annex XIII IVDR performance evaluation, scientific validity report, analytical performance clinical performance, NKB Regovanta",
      },
      { property: "og:title", content: "IVDR Performance Evaluation & PER Evidence Architecture | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We build the 3-pillar evidence matrix linking scientific validity, analytical performance and clinical performance directly to your PER and PMPF.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ivdr-performance-evaluation" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU IVDR Performance Evaluation Plan & Report (PEP / PER) Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "Authoring and defense of IVDR Performance Evaluation Plans (PEP), Performance Evaluation Reports (PER), Annex XIII evidence architecture, and continuous PMPF." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ivdr-performance-evaluation" }],
  }),
  component: EUIVDRPerformanceEvaluationPage,
});

function EUIVDRPerformanceEvaluationPage() {
  const modelSteps = [
    { num: "01", label: "Intended Purpose" },
    { num: "02", label: "Performance Claims" },
    { num: "03", label: "Scientific Validity" },
    { num: "04", label: "Analytical Performance" },
    { num: "05", label: "Clinical Performance" },
    { num: "06", label: "PER Integration" },
    { num: "07", label: "PMPF Lifecycle" },
  ];

  const pepItems = [
    "Intended purpose, intended user and clinical utility definition",
    "Analyte / marker identification and associated medical condition",
    "Target clinical population, specimen types and storage conditions",
    "Specific analytical and clinical performance claims",
    "Applicable state of the art and standard-of-care benchmark methods",
    "Methodology, protocols and criteria for generating required evidence",
    "Identification of scientific validity, analytical and clinical performance datasets",
    "Quantitative evidence gap analysis and justification of needed studies",
    "Predefined acceptance criteria and statistical hypotheses",
    "PMPF strategy and annual / biennial lifecycle update triggers",
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
              name: "IVDR Performance Evaluation (PEP & PER) Evidence Architecture",
              url: "https://www.nkbregovanta.com/services/eu/ivdr-performance-evaluation",
              description:
                "Authoring, gap assessment, and Notified Body defense of IVDR Performance Evaluation Plans and Reports under Annex XIII of Regulation (EU) 2017/746.",
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
                { "@type": "ListItem", position: 4, name: "IVDR Performance Evaluation", item: "https://www.nkbregovanta.com/services/eu/ivdr-performance-evaluation" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu" className="hover:text-navy transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu/ivdr" className="hover:text-navy transition-colors">EU IVDR</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Performance Evaluation (PER)</span>
          </div>

          <Link
            to="/services/eu/ivdr"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU IVDR Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <FileCheck2 className="h-3.5 w-3.5" /> Annex XIII 3-Pillar Evidence
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              IVDR Performance Evaluation — Evidence Architecture
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Under Annex XIII, the Performance Evaluation Report (PER) integrates Scientific Validity, Analytical Performance and Clinical Performance into one definitive conclusion on whether clinical evidence supports safety, diagnostic accuracy and GSPR conformity.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#123820] text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-[#0a2012] transition-all shadow-sm"
              >
                Build Your IVDR Performance Evidence Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Model */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  The IVDR Performance Evaluation Model
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
                  {modelSteps.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-emerald-700 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PEP Structure */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  Performance Evaluation Plan (PEP) Scope
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {pepItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#059669] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#123820] to-[#091a0f] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Evidence Matrix Before Writing
                </h3>
                <p className="text-[13.5px] text-emerald-100/90 leading-relaxed font-normal">
                  We do not start by blindly writing the PER. We first construct an evidence matrix linking each intended-purpose element and performance claim to the specific data needed to substantiate it, identifying and closing gaps before Notified Body review.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  PER Deliverables
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• Performance Evaluation Plan (PEP)</p>
                  <p>• Scientific Validity Report (SVR)</p>
                  <p>• Analytical Performance Report (APR)</p>
                  <p>• Clinical Performance Report (CPR)</p>
                  <p>• Integrated Performance Evaluation Report (PER)</p>
                  <p>• Post-Market Performance Follow-up (PMPF) Plan</p>
                </div>
              </div>

              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Build Your PER</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Have our IVD scientists draft or remediate your Performance Evaluation documentation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#123820] hover:bg-[#0a2012] text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request PER Authoring <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Author Robust Performance Evaluation Documentation Under EU IVDR"
        description="Our clinical and analytical specialists build audit-ready PER files that ensure smooth Notified Body approval."
      />
    </>
  );
}
