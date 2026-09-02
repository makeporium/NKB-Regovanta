import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Microscope,
  ShieldAlert,
  HelpCircle,
  Clock,
  Layers,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/class-d-ivdr")({
  head: () => ({
    meta: [
      { title: "Class D High-Risk IVD Strategy, EURL & Common Specifications | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU IVDR 2017/746 Class D regulatory consulting. EU Reference Laboratory (EURL) verification, Common Specifications (CS), batch release, and Notified Body high-risk conformity assessment.",
      },
      {
        name: "keywords",
        content:
          "Class D IVDR Europe, EU Reference Laboratory EURL IVD, Common Specifications IVDR, Rule 1 Rule 2 IVDR, high risk IVD certification, NKB Regovanta",
      },
      { property: "og:title", content: "Class D IVD Strategy, EURL & Higher-Risk Scrutiny | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "For Class D IVDs, we sequence analytical and clinical evidence, Common Specifications, Notified Body review and designated EURL verification early.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/class-d-ivdr" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/class-d-ivdr" }],
  }),
  component: EUClassDIVDRPage,
});

function EUClassDIVDRPage() {
  const classDPoints = [
    "Rule 1 / Rule 2 / applicable Class D classification rationale & claim boundaries",
    "Notified Body Annex IX or Annex X/XI high-risk conformity assessment planning",
    "Performance evaluation depth and robust clinical specimen bank evidence",
    "Compliance with European Common Specifications (CS) (Commission Implementing Regulation (EU) 2022/1107) where applicable",
    "EU Reference Laboratory (EURL) involvement where the device falls within a designated EURL scope and the relevant procedure applies",
    "Performance verification testing by designated EURL laboratories where applicable",
    "Batch testing / verification procedures and release protocol implications where applicable",
    "Certified reference materials, reference measurement procedures and lot consistency",
    "High-risk change-control impact assessments and mandatory Notified Body notifications",
    "Annual PMPF evaluation report authoring and annual PSUR submissions",
    "Project timeline sequencing accounting for concurrent Notified Body and EURL reviews",
  ];

  const planningQuestions = [
    "Is the Class D classification rationale robust and aligned with the exact intended purpose?",
    "Does a current European Common Specification (CS) apply to the target analyte?",
    "Does the device fall within the scope of an operational EU Reference Laboratory (EURL)?",
    "Are study materials, multiple lots and reference methods suitable for highest-tier scrutiny?",
    "Does the regulatory project plan allow for EURL / NB interaction and batch testing logistics?",
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
              name: "Class D IVD Strategy, EURL & Higher-Risk Scrutiny",
              url: "https://www.nkbregovanta.com/services/eu/class-d-ivdr",
              description:
                "Regulatory consulting, Common Specifications compliance, and EURL verification planning for highest-risk Class D IVDs under EU IVDR 2017/746.",
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
                { "@type": "ListItem", position: 5, name: "Class D IVDR", item: "https://www.nkbregovanta.com/services/eu/class-d-ivdr" },
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
            <span className="text-navy">Class D &amp; EURL Strategy</span>
          </div>

          <Link
            to="/services/eu/ivdr"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU IVDR Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="h-3.5 w-3.5" /> Highest-Risk IVDR Scrutiny
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Class D IVD Strategy, EURL &amp; Higher-Risk Scrutiny
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Class D IVDs (blood screening assays, life-threatening infectious pathogens) undergo the highest regulatory scrutiny in Europe. We sequence analytical and clinical evidence generation, Common Specifications, Notified Body review and designated EURL verification.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#123820] text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-[#0a2012] transition-all shadow-sm"
              >
                Build Your Class D IVDR Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Class D Points */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  Class D Strategy Considerations
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {classDPoints.map((item, idx) => (
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

              {/* Planning Questions */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <HelpCircle className="h-5 w-5 text-navy" />
                  <h3 className="text-lg font-extrabold text-navy">
                    Key Questions for Senior Regulatory Review
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {planningQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <span className="text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[13px] font-medium text-navy/85">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NKB Planning Approach */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#123820] to-[#091a0f] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">NKB Planning Approach</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Early Sequencing Prevents Late Surprises
                </h3>
                <p className="text-[13.5px] text-emerald-100/90 leading-relaxed font-normal">
                  For Class D IVDs, we map the regulatory pathway early so that analytical and clinical evidence generation, Common Specifications compliance, Notified Body review and any applicable EURL interface are carefully sequenced rather than discovered late in the development program.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Class D Regulatory Elements
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• <strong className="text-navy">Common Specifications:</strong> Mandatory analytical &amp; diagnostic thresholds</p>
                  <p>• <strong className="text-navy">EURL Verification:</strong> Verification of performance claims where applicable</p>
                  <p>• <strong className="text-navy">Batch Verification:</strong> Control of manufactured lots where required</p>
                  <p>• <strong className="text-navy">Annual PSUR &amp; PMPF:</strong> Strict yearly lifecycle reporting</p>
                </div>
              </div>

              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Class D Assessment</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Map your Class D IVDR timeline, Common Specifications, and EURL verification requirements.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#123820] hover:bg-[#0a2012] text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Schedule Class D Assessment <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Master Class D IVDR Compliance with Seasoned Regulatory Leadership"
        description="Our high-risk IVD consultants guide manufacturers through Common Specifications, Notified Bodies, and EURLs."
      />
    </>
  );
}
