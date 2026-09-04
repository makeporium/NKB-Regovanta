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
  FolderArchive,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/audit-documentation")({
  head: () => ({
    meta: [
      { title: "Audit Documentation & Objective Evidence Preparation | MDSAP | NKB Regovanta" },
      { name: "description", content: "Review and strengthen SOPs, records, forms, and objective evidence packages across all 7 MDSAP process areas." },
      { name: "keywords", content: "MDSAP audit documentation, objective evidence QMS, MDSAP SOP review, medical device audit evidence, Auditing Organization document checklist" },
      { property: "og:title", content: "Audit Documentation & Objective Evidence Preparation | NKB Regovanta" },
      { property: "og:description", content: "MDSAP auditors follow audit trails, not static documents. We audit-harden your records and cross-process evidence trails." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/mdsap/audit-documentation" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Audit Documentation & Objective Evidence Preparation | MDSAP | NKB Regovanta" },
      { name: "twitter:description", content: "Review and strengthen SOPs, records, forms, and objective evidence packages across all 7 MDSAP process areas." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/mdsap/audit-documentation" },
    ],
  }),
  component: AuditDocumentationPage,
});

function AuditDocumentationPage() {
  const supportItems = [
    "Document-control readiness and revision integrity",
    "Current approved SOP, work instruction and form verification",
    "Training matrix and employee competency evidence",
    "Management review packages and action tracking",
    "Internal audit program evidence and closed findings",
    "CAPA and nonconformance (NCR) files",
    "Complaint and vigilance reporting files",
    "Design records (DHF) and traceability matrices",
    "Supplier evaluation files and incoming monitoring records",
    "Production, process validation and batch release (DHR) records",
    "Calibration, maintenance and environmental records",
    "Regulatory registration and licensing evidence across 5 markets",
    "Change-control packages and risk assessments",
    "Record-retention and rapid retrieval readiness drills",
  ];

  const auditorTesting = [
    "Whether the record is contemporaneous, complete and duly approved",
    "Whether the record was generated under the correct valid procedure revision",
    "Whether data and cross-references from different systems fully reconcile",
    "Whether sampled evidence demonstrates a consistent pattern of effective quality control",
    "Whether records can be retrieved smoothly without creating new ad-hoc explanations during the audit",
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
            <span className="text-navy">Audit Documentation</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #11
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Audit Documentation &amp; Objective Evidence Preparation
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              The Audit Is Won or Lost in the Records Behind the Procedure
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              MDSAP auditors need objective evidence that processes are implemented and effective. Readiness therefore includes organizing records so they can be retrieved quickly, traced to current procedures and reconciled across departments. A beautifully written SOP cannot compensate for incomplete, contradictory or poorly controlled records.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Prepare Your MDSAP Evidence Package <ArrowRight className="h-4 w-4" />
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
                Evidence Files
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Documentation Support Includes
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
                  We do not recommend building an “audit room” of selected perfect records. We identify <strong>representative record populations, test retrieval and verify consistency</strong>. The objective is to ensure the normal operating evidence can withstand sampling - because experienced auditors will follow anomalies and expand samples when the first records raise questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Audit-Proof Your Operating Evidence Packages"
        description="Ensure your records and quality documentation reconcile seamlessly across systems with NKB Regovanta."
      />
    </>
  );
}
