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
  RefreshCw,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/capa-remediation")({
  head: () => ({
    meta: [
      {
        title:
          "Nonconformity, CAPA & Remediation Support | MDSAP | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Root cause analysis, effective systemic CAPA, trend prevention, and remediation packages for recognized Auditing Organizations under MDSAP.",
      },
      {
        property: "og:title",
        content:
          "Nonconformity, CAPA & Remediation Support | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Closing the finding is not the same as correcting the system. Build defensible CAPA responses and extent-of-condition evaluations under MDSAP.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap/capa-remediation",
      },
    ],
  }),
  component: CapaRemediationPage,
});

function CapaRemediationPage() {
  const supportItems = [
    "Audit finding and nonconformity triage",
    "Immediate containment strategy and risk mitigation",
    "Extent-of-condition assessment across all product families",
    "Root-cause analysis facilitation (5-Why, Fishbone, Is/Is Not)",
    "Correction vs corrective-action distinction",
    "Systemic CAPA development and action plan formulation",
    "Risk and regulatory impact assessment",
    "Retrospective record review where needed",
    "Procedure / form / training remediation",
    "Implementation evidence package compilation",
    "Effectiveness-check design and statistical sampling",
    "Recurrence and trend monitoring",
    "Closure package preparation for the Auditing Organization (AO)",
  ];

  const auditorTesting = [
    "Whether the root cause explains why the quality system allowed the failure to occur",
    "Whether the extent of the issue was assessed beyond the sampled record",
    "Whether corrective action genuinely addresses the systemic failure mechanism",
    "Whether implementation is complete and objectively evidenced",
    "Whether effectiveness criteria can demonstrate sustained correction over time",
    "Whether associated regulatory or product risks were formally evaluated",
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
            <span className="text-navy">CAPA &amp; Remediation</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #10
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Nonconformity, CAPA &amp; Remediation Support
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              Closing the Finding Is Not the Same as Correcting the System
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              MDSAP findings become difficult when the manufacturer responds to the observed example instead of the underlying process failure. Effective remediation requires containment where needed, sound root-cause analysis, correction, systemic corrective action, verification of implementation and evidence that the action actually prevented recurrence.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Build a Defensible CAPA Response <ArrowRight className="h-4 w-4" />
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
                Remediation Framework
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our CAPA &amp; Remediation Support Includes
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
                  Our response logic is: <strong>Finding &rarr; Regulatory / Quality Risk &rarr; Containment &rarr; Extent &rarr; Root Cause &rarr; Systemic CAPA &rarr; Implementation Evidence &rarr; Effectiveness &rarr; Closure</strong>. We challenge superficial root causes such as “human error” or “training issue” unless the evidence supports them and the control-system weakness has been addressed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Need to Respond to MDSAP Audit Findings?"
        description="Let NKB Regovanta author and defend rigorous, systemic CAPA closure packages for your Auditing Organization."
      />
    </>
  );
}
