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
  Activity,
  BellRing,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/complaint-vigilance")({
  head: () => ({
    meta: [
      {
        title: "Complaint, Vigilance & Post-Market Readiness | MDSAP | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Build systems for complaint handling, adverse-event reporting across 5 jurisdictions, trend analysis, and FSCA advisory notice readiness under MDSAP.",
      },
      {
        property: "og:title",
        content:
          "Complaint, Vigilance & Post-Market Readiness | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "A complaint file can expose the entire QMS. Strengthen vigilance reportability decisions and field safety corrective actions under MDSAP.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap/complaint-vigilance",
      },
    ],
  }),
  component: ComplaintVigilancePage,
});

function ComplaintVigilancePage() {
  const supportItems = [
    "Complaint intake and triage protocols",
    "Complaint investigation depth and root cause adequacy",
    "Reportability assessment across applicable jurisdictions (FDA eMDR, Health Canada, TGA, ANVISA, MHLW)",
    "Timeliness and escalation controls against statutory deadlines",
    "Adverse-event reporting evidence and transmission logs",
    "Advisory notice / field safety corrective action (FSCA) readiness",
    "Statistical trend and early warning signal analysis",
    "CAPA linkage and trigger criteria",
    "ISO 14971 Risk-management feedback and risk-file updates",
    "Supplier and manufacturing investigation interfaces",
    "Label / IFU change linkage based on user feedback",
    "Management review escalation and vigilance metrics",
    "Distribution and traceability records for field actions",
  ];

  const auditorTesting = [
    "Whether every complaint is evaluated consistently against documented procedures",
    "Whether reportability decisions are documented and jurisdiction-aware",
    "Whether investigations are proportionate to device risk and patient harm",
    "Whether repeat issues trigger statistical trending and automatic CAPA",
    "Whether post-market information feeds directly back into risk and design processes",
    "Whether field action decisions can be executed rapidly and traced to individual serial/lot numbers",
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
            <span className="text-navy">Complaint &amp; Vigilance</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #9
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Complaint, Vigilance &amp; Post-Market Readiness
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              A Complaint File Can Expose the Entire QMS
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              Complaint handling is one of the most revealing MDSAP audit trails because a single record can touch investigation, adverse-event reporting, CAPA, risk management, supplier quality, design change, labeling, field action and management review. Weak reportability logic or delayed escalation can quickly become a regulatory concern rather than a documentation issue.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Strengthen Complaint &amp; Vigilance Readiness <ArrowRight className="h-4 w-4" />
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
                Post-Market Controls
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Complaint &amp; Vigilance Support Includes
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
                  We sample complaint records the way an auditor does: from intake through closure. The file must show <strong>what happened, how the event was investigated, whether it was reportable in each applicable market, whether risk changed, whether CAPA was needed and whether a field or design action followed</strong>. Missing links are treated as system weaknesses, not clerical omissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Harmonize Multi-Country Vigilance &amp; Reporting"
        description="Protect your MDSAP certification with bulletproof adverse event reporting logic and complaint investigation workflows."
      />
    </>
  );
}
