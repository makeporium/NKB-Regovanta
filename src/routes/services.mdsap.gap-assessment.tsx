import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Target,
  FileCheck2,
  Layers,
  HelpCircle,
  Building2,
  Globe2,
  AlertTriangle,
  FileSearch,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/gap-assessment")({
  head: () => ({
    meta: [
      {
        title: "MDSAP QMS Gap Assessment | Audit Exposure Modeling | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Detailed gap assessment against ISO 13485:2016 and MDSAP specific requirements across the 7 core process areas.",
      },
      {
        property: "og:title",
        content: "MDSAP QMS Gap Assessment | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "A gap assessment should predict audit exposure, not produce a 200-line checklist. Full process interaction and systemic weakness evaluation.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap/gap-assessment",
      },
    ],
  }),
  component: GapAssessmentPage,
});

function GapAssessmentPage() {
  const supportItems = [
    "ISO 13485:2016 baseline and MDSAP process mapping",
    "Quality manual, SOP, work instruction and form review",
    "Management review and quality-objective evidence",
    "Internal audit program effectiveness",
    "CAPA and nonconformity control",
    "Complaint handling and reportability decision records",
    "Design control and design-change evidence",
    "Production, process validation and release records",
    "Supplier controls and outsourced-process governance",
    "Marketing authorization and facility-registration controls",
    "Jurisdiction-specific reporting, record and licensing requirements",
    "Cross-document consistency review",
  ];

  const auditorTesting = [
    "Procedure-to-practice consistency across sampled operational records",
    "Objective evidence over a representative historical operating period",
    "Whether repeated gaps indicate a systemic quality management weakness",
    "Whether one weakness propagates into other linked MDSAP process areas",
    "Whether records prove effective control rather than administrative completion",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/mdsap" className="hover:text-navy transition-colors">
              MDSAP
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">QMS Gap Assessment</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #2
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              MDSAP QMS Gap Assessment
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              A Gap Assessment Should Predict Audit Exposure - Not Produce a 200-Line Checklist
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              An experienced MDSAP gap assessment examines documented requirements, implementation evidence and the regulatory consequences of process failure. A compliant-looking SOP is not enough if records demonstrate inconsistent execution or if the procedure does not trigger the correct country-specific regulatory action.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Assess Your MDSAP Readiness <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-200">
                Evaluation Areas
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Gap Assessment Support Includes
              </h2>
              <ul className="space-y-3">
                {supportItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#0b7261] shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/80 font-medium leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div className="p-7 rounded-3xl bg-slate-50 border border-gray-200 shadow-2xs">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
                  Auditor Expectations
                </div>
                <h3 className="text-xl font-extrabold text-navy mb-4">
                  What the Auditor Is Really Testing
                </h3>
                <ul className="space-y-3">
                  {auditorTesting.map((test, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-navy/80 font-medium leading-relaxed">
                        {test}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-md">
                <h3 className="text-xl font-bold mb-3">
                  How NKB Regovanta Approaches It
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
                  We classify gaps by audit exposure, regulatory significance and process propagation. A weak complaint process, for example, is not treated as one isolated finding because it may also compromise vigilance, CAPA, risk management, design change and management review. The remediation plan therefore addresses the <strong>system</strong>, not only the symptom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Predict Your MDSAP Audit Exposure Today"
        description="Book an objective, senior-level MDSAP gap assessment with NKB Regovanta to uncover and remediate systemic QMS vulnerabilities."
      />
    </>
  );
}
