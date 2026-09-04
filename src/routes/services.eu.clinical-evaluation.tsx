import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Activity,
  Sparkles,
  ArrowRight,
  Stethoscope,
  ShieldAlert,
  FileText,
  Search,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/clinical-evaluation")({
  head: () => ({
    meta: [
      { title: "EU MDR Clinical Evaluation & CER Consultant | MEDDEV 2.7/1 & MDCG | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU MDR 2017/745 Clinical Evaluation Reports (CER), Clinical Evaluation Plans (CEP), equivalence assessment, clinical data gap analysis, and PMCF strategy.",
      },
      {
        name: "keywords",
        content:
          "MDR Clinical Evaluation Report CER, CEP Clinical Evaluation Plan, MEDDEV 2.7/1 Rev 4 MDR, MDCG 2020-6 clinical evidence, equivalence MDR Article 61, PMCF plan, NKB Regovanta",
      },
      { property: "og:title", content: "MDR Clinical Evaluation & CER Evidence Strategy | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "The CER is not a literature report — it is the regulatory conclusion on whether clinical evidence supports safety, performance, and claims.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/clinical-evaluation" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR Clinical Evaluation & CER Consultant | MEDDEV 2.7/1 & MDCG | NKB Regovanta" },
      { name: "twitter:description", content: "Senior EU MDR 2017/745 Clinical Evaluation Reports (CER), Clinical Evaluation Plans (CEP), equivalence assessment, clinical data gap analysis, and PMCF strategy." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/clinical-evaluation" }],
  }),
  component: EUClinicalEvaluationPage,
});

function EUClinicalEvaluationPage() {
  const structureItems = [
    "Clinical Evaluation Plan (CEP) aligned to intended purpose, claims and GSPR",
    "State-of-the-art and alternative treatment / benchmark technology context",
    "Systematic literature search protocol and documented appraisal methodology",
    "Identification of device-specific and relevant external clinical data",
    "Assessment of clinical claims against available objective evidence",
    "Equivalence strategy (MDR Article 61(3)) & full data-access considerations",
    "Clinical evidence sufficiency and quantitative gap assessment",
    "Benefit-risk integration and residual risk acceptability",
    "Determination on need for premarket clinical investigations",
    "PMCF strategy targeted directly to residual evidence gaps",
    "Clinical Evaluation Report (CER) authoring & annual lifecycle updates",
    "Summary of Safety & Clinical Performance (SSCP) clinical-content alignment",
  ];

  const reviewerQuestions = [
    "Does every material clinical claim have supporting clinical evidence?",
    "Is the evidence specific enough for the exact intended purpose and patient population?",
    "Is equivalence actually defensible across technical, biological and clinical characteristics?",
    "Are unfavourable clinical data and limitations transparently evaluated?",
    "Does the PMCF plan close a defined evidence gap rather than merely collect generic feedback?",
    "Do CER conclusions align seamlessly with risk management, labeling and PMS?",
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
              name: "MDR Clinical Evaluation & CER Evidence Strategy",
              url: "https://www.nkbregovanta.com/services/eu/clinical-evaluation",
              description:
                "Authoring and defense of Clinical Evaluation Plans (CEP), Clinical Evaluation Reports (CER), and PMCF strategies under EU MDR 2017/745.",
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
                { "@type": "ListItem", position: 4, name: "Clinical Evaluation", item: "https://www.nkbregovanta.com/services/eu/clinical-evaluation" },
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
            <span className="text-navy">Clinical Evaluation &amp; CER</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Activity className="h-3.5 w-3.5" /> MDR Article 61 &amp; Annex XIV
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              MDR Clinical Evaluation &amp; CER Evidence Strategy
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              The CER is not a literature report. It is the regulatory conclusion on whether clinical evidence supports safety, performance, clinical benefit and claims under state-of-the-art medical standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Review Your MDR Clinical Evidence Strategy <ArrowRight className="h-4 w-4" />
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
              {/* How NKB Structures Clinical Evaluation */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  How NKB Structures Clinical Evaluation
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {structureItems.map((item, idx) => (
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

              {/* Questions a Senior Reviewer Should Ask */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-2.5">
                  <Stethoscope className="h-5 w-5 text-blue-700" />
                  <h3 className="text-lg font-extrabold text-navy">
                    Questions a Senior Notified Body Reviewer Asks
                  </h3>
                </div>
                <div className="grid grid-cols-1 gap-2.5 pt-1">
                  {reviewerQuestions.map((q, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[13px] font-medium text-navy/85">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Unbroken Traceability from Claim to PMCF
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We trace Clinical Claims → Evidence → Benefit-Risk → Residual Uncertainty → PMCF. If a claim cannot be traced to sufficient evidence, the issue must be resolved through claim refinement, new evidence or a defined post-market evidence strategy.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  CER Document Deliverables
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• Clinical Evaluation Plan (CEP)</p>
                  <p>• Literature Search Protocol &amp; Full Appraisal Report</p>
                  <p>• Equivalence Rationale &amp; Technical Comparison</p>
                  <p>• Clinical Evaluation Report (CER)</p>
                  <p>• Post-Market Clinical Follow-up (PMCF) Plan</p>
                  <p>• Summary of Safety &amp; Clinical Performance (SSCP)</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Audit-Proof Your CER</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Have our clinical evaluation writers and former Notified Body assessors audit your CER before submission.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request CER Review <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Deliver Defensible Clinical Evidence That Withstands Notified Body Audits"
        description="Our clinical evaluation teams combine medical writing excellence with rigorous regulatory methodology."
      />
    </>
  );
}
