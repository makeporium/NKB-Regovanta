import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Activity,
  Sparkles,
  ArrowRight,
  Microscope,
  Stethoscope,
  ClipboardList,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ivdr-clinical-performance")({
  head: () => ({
    meta: [
      { title: "EU IVDR Clinical Performance Studies & Clinical Evidence Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU IVDR 2017/746 clinical performance study design, diagnostic sensitivity & specificity, clinical protocol planning, competent authority ethics approvals, and PER integration.",
      },
      {
        name: "keywords",
        content:
          "IVDR clinical performance studies, diagnostic sensitivity specificity IVD, clinical performance plan IVDR, MDCG performance studies IVDR, biobank specimens IVDR, NKB Regovanta",
      },
      { property: "og:title", content: "IVDR Clinical Performance & Performance Studies | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "The question is whether the study design is capable of supporting the exact clinical performance claim, intended population, and use environment described in the dossier.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ivdr-clinical-performance" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU IVDR Clinical Performance Studies & Clinical Evidence Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "Senior EU IVDR 2017/746 clinical performance study design, diagnostic sensitivity & specificity, clinical protocol planning, competent authority ethics approvals, and PER integration." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ivdr-clinical-performance" }],
  }),
  component: EUIVDRClinicalPerformancePage,
});

function EUIVDRClinicalPerformancePage() {
  const strategyItems = [
    "Clinical performance claims definition mapped to exact target clinical condition",
    "Target patient population, demographics and intended point-of-care / lab setting",
    "Diagnostic sensitivity and diagnostic specificity calculation and clinical relevance",
    "Positive/negative predictive values (PPV/NPV) and likelihood ratios aligned with prevalence",
    "Gold-standard comparator and reference method selection strategy",
    "Specimen selection, collection protocols and strict inclusion / exclusion criteria",
    "Prospective clinical collection vs banked / retrospective specimen justification",
    "Sample-size calculation, statistical power and analysis plan justification",
    "Multi-center clinical site setup, operator variability and inter-laboratory reproducibility",
    "Protocol for handling indeterminate, invalid, borderline and discrepant test results",
    "Predefined statistical acceptance criteria and blinded evaluation protocols",
    "Integration of clinical performance conclusions directly into PER, IFU and marketing claims",
  ];

  const studyPlanningItems = [
    "Determination of whether the trial falls under IVDR Article 58 / 70 performance study provisions",
    "Competent Authority notification and Ethics Committee (IRB/EC) submission planning",
    "Clinical Performance Study Plan (CPSP) and Investigator's Brochure (IB) compilation",
    "Adverse event and safety reporting pathway governance during the study",
    "Study deviations, protocol amendments and GCP / ISO 20916 data integrity compliance",
    "Clinical Performance Study Report (CPSR) structure and traceability to intended purpose",
    "Post-Market Performance Follow-up (PMPF) study design for post-clearance clinical tracking",
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
              name: "IVDR Clinical Performance Studies & Clinical Evidence Strategy",
              url: "https://www.nkbregovanta.com/services/eu/ivdr-clinical-performance",
              description:
                "Protocol design, clinical performance evaluation, and regulatory study planning under Annex XIII and Articles 57–77 of EU IVDR 2017/746.",
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
                { "@type": "ListItem", position: 4, name: "EU IVDR", item: "https://www.nkbregovanta.com/services/eu/ivdr" },
                { "@type": "ListItem", position: 5, name: "Clinical Performance", item: "https://www.nkbregovanta.com/services/eu/ivdr-clinical-performance" },
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
            <span className="text-navy">Clinical Performance</span>
          </div>

          <Link
            to="/services/eu/ivdr"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU IVDR Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Activity className="h-3.5 w-3.5" /> ISO 20916 &amp; Annex XIII Section 1.3
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              IVDR Clinical Performance &amp; Performance Studies
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Clinical performance demonstrates the ability of an IVD to yield results correlated with a particular clinical condition or physiological state. We design statistically sound clinical protocols and manage study regulatory compliance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#123820] text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-[#0a2012] transition-all shadow-sm"
              >
                Design Your IVDR Clinical Performance Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Clinical Performance Strategy */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  12 Key Clinical Performance Strategy Elements
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {strategyItems.map((item, idx) => (
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

              {/* Study Regulatory Planning */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <ClipboardList className="h-5 w-5 text-emerald-700" />
                  <h3 className="text-lg font-extrabold text-navy">
                    Performance Study Regulatory Planning (Articles 57–77)
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {studyPlanningItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[13px] font-medium text-navy/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior-Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#123820] to-[#091a0f] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior-Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Capable of Supporting the Exact Clinical Claim
                </h3>
                <p className="text-[13.5px] text-emerald-100/90 leading-relaxed font-normal">
                  The question is not simply whether a clinical study was completed. The critical question is whether the study design, specimen diversity and statistical power are capable of supporting the exact clinical performance claims, intended population and clinical use environment described in the technical documentation.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Study Governance Standards
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• <strong className="text-navy">ISO 20916:</strong> Clinical performance studies using specimens from human subjects</p>
                  <p>• <strong className="text-navy">MDCG 2020-16:</strong> Guidance on IVD Classification &amp; Studies</p>
                  <p>• Ethics Committee &amp; Competent Authority Submissions</p>
                  <p>• Biobank Specimen Data Integrity Verification</p>
                </div>
              </div>

              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Plan Your Clinical Study</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Design a defensible clinical performance protocol aligned with EU IVDR requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#123820] hover:bg-[#0a2012] text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Consult on Clinical Study <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Substantiate Your IVD Diagnostic Accuracy with Robust Clinical Evidence"
        description="Our clinical specialists author ISO 20916-compliant study plans and defensible performance reports."
      />
    </>
  );
}
