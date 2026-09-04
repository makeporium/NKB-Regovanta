import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Sparkles,
  ArrowRight,
  Beaker,
  TestTubes,
  HelpCircle,
  Dna,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ivdr-analytical-performance")({
  head: () => ({
    meta: [
      { title: "EU IVDR Analytical Performance Studies & Protocol Strategy | NKB Regovanta" },
      {
        name: "description",
        content:
          "Define and execute IVDR analytical performance studies: precision, LoD/LoQ, specificity, interference, cross-reactivity, stability, and metrological traceability.",
      },
      {
        name: "keywords",
        content:
          "IVDR analytical performance studies, LoD LoQ precision IVD, cross-reactivity interference IVDR, reagent stability testing, metrological traceability ISO 17511, NKB Regovanta",
      },
      { property: "og:title", content: "IVDR Analytical Performance Strategy | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Analytical evidence must be claim-driven, protocol-defined and traceable to the final PER. We design protocols and coordinate laboratory testing.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ivdr-analytical-performance" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU IVDR Analytical Performance Studies & Protocol Strategy | NKB Regovanta" },
      { name: "twitter:description", content: "Define and execute IVDR analytical performance studies: precision, LoD/LoQ, specificity, interference, cross-reactivity, stability, and metrological traceability." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ivdr-analytical-performance" }],
  }),
  component: EUIVDRAnalyticalPerformancePage,
});

function EUIVDRAnalyticalPerformancePage() {
  const charList = [
    "Analytical sensitivity & detection limits (LoB, LoD, LoQ)",
    "Analytical specificity & discrimination capability",
    "Trueness / systematic bias against certified reference materials",
    "Precision: Repeatability (within-run) & Reproducibility (between-day/site/operator)",
    "Measuring range, linearity and hook effect determination",
    "Cut-off determination for qualitative and semi-quantitative assays",
    "Interference testing (endogenous substances like bilirubin/hemoglobin & drug metabolites)",
    "Cross-reactivity against phylogenetically related or homologous targets",
    "Carry-over assessment in automated analyzers",
    "Specimen matrix equivalence, collection tube validation and specimen stability",
    "Reagent, calibrator and control in-use, onboard and transport stability",
    "Metrological traceability of calibrator values (ISO 17511)",
    "Lot-to-lot consistency and assay robustness against environmental variations",
  ];

  const protocolQuestions = [
    "Does the study material / matrix accurately represent true clinical specimens?",
    "Are lots, operators, testing sites, instruments and days sufficient to challenge reproducibility?",
    "Are specimen concentrations and edge-of-range samples statistically sound?",
    "Are tested interferents and potential cross-reactants scientifically justified?",
    "Is the comparator / reference measurement procedure appropriate?",
    "Were statistical acceptance criteria predefined and justified prior to testing?",
    "Are experimental deviations transparently reported with impact evaluations?",
    "Can the final study report be mapped directly to the GSPR claim and PER?",
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
              name: "IVDR Analytical Performance Protocol Strategy & Lab Coordination",
              url: "https://www.nkbregovanta.com/services/eu/ivdr-analytical-performance",
              description:
                "Design, protocol development, and laboratory coordination of analytical performance evaluations under Annex XIII of EU IVDR 2017/746.",
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
                { "@type": "ListItem", position: 5, name: "Analytical Performance", item: "https://www.nkbregovanta.com/services/eu/ivdr-analytical-performance" },
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
            <span className="text-navy">Analytical Performance</span>
          </div>

          <Link
            to="/services/eu/ivdr"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU IVDR Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Beaker className="h-3.5 w-3.5" /> Annex XIII Section 1.2
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              IVDR Analytical Performance Strategy
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Analytical evidence must be claim-driven, protocol-defined and traceable to the final PER. We define the study matrix, review protocols before laboratory execution, and verify data integrity against Notified Body expectations.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#123820] text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-[#0a2012] transition-all shadow-sm"
              >
                Plan Your IVDR Analytical Performance Studies <ArrowRight className="h-4 w-4" />
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
              {/* Characteristics */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  13 Key Analytical Performance Characteristics
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {charList.map((item, idx) => (
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

              {/* Protocol Review Questions */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h3 className="text-lg font-extrabold text-navy">
                  Protocol Review Questions We Challenge Upfront
                </h3>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {protocolQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[13px] font-medium text-navy/85">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Laboratory Coordination */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#123820] to-[#091a0f] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Laboratory Coordination</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Pre-Execution Protocol Vetting
                </h3>
                <p className="text-[13.5px] text-emerald-100/90 leading-relaxed font-normal">
                  Where external laboratory testing is required, NKB Regovanta coordinates with ISO 17025 accredited facilities, reviews test protocols before bench work begins, and audits final reports to guarantee they directly close the regulatory evidence gap.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Applicable CLSI Guidelines
                </h4>
                <div className="space-y-2.5 text-xs font-medium text-navy/75">
                  <p>• <strong className="text-navy">EP05-A3:</strong> Precision Evaluation</p>
                  <p>• <strong className="text-navy">EP17-A2:</strong> LoB, LoD, LoQ Limits</p>
                  <p>• <strong className="text-navy">EP07-A3:</strong> Interference Testing</p>
                  <p>• <strong className="text-navy">EP06-A:</strong> Linearity &amp; Range</p>
                  <p>• <strong className="text-navy">EP25-A:</strong> In-Vitro Stability Testing</p>
                </div>
              </div>

              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Protocol Review</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Have our analytical assay experts review your testing protocols prior to running expensive bench runs.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#123820] hover:bg-[#0a2012] text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Review Assay Protocol <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Execute Flawless Analytical Performance Studies for EU IVDR Clearance"
        description="Our assay specialists design protocols, power calculations, and testing matrices that Notified Bodies approve."
      />
    </>
  );
}
