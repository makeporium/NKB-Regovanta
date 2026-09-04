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
  Workflow,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/process-readiness")({
  head: () => ({
    meta: [
      { title: "MDSAP Process-Based Audit Readiness | Trace Simulations | NKB Regovanta" },
      { name: "description", content: "Prepare for MDSAP audits the way auditors follow evidence: cross-process linkages across the 7 MDSAP process areas, record retrieval, and process-owner interview drills." },
      { name: "keywords", content: "MDSAP process audit readiness, audit trail simulation, cross process linkages, 7 process areas MDSAP, process owner interview drills" },
      { property: "og:title", content: "MDSAP Process-Based Audit Readiness | NKB Regovanta" },
      { property: "og:description", content: "Prepare the way an auditor follows evidence. Cross-functional audit trail simulations and process-owner readiness drills." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/mdsap/process-readiness" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MDSAP Process-Based Audit Readiness | Trace Simulations | NKB Regovanta" },
      { name: "twitter:description", content: "Prepare for MDSAP audits the way auditors follow evidence: cross-process linkages across the 7 MDSAP process areas, record retrieval, and process-owner interview drills." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/mdsap/process-readiness" },
    ],
  }),
  component: ProcessReadinessPage,
});

function ProcessReadinessPage() {
  const supportItems = [
    "Readiness across all seven MDSAP process areas",
    "Process-owner responsibility mapping",
    "Process interaction and handoff review",
    "Risk-based record sampling exercises",
    "Record traceability and retrieval drills",
    "Complaint-to-CAPA-to-risk trace exercises",
    "Design-input-to-transfer-to-production trace exercises",
    "Supplier issue-to-NCR-to-CAPA trace exercises",
    "Regulatory registration and change-control trace exercises",
    "Auditor-style questioning and evidence challenge",
    "Process-owner interview preparation",
  ];

  const auditorTesting = [
    "Whether processes interact as described in quality manual and operational SOPs",
    "Whether product and patient risk determines the depth and rigor of control",
    "Whether process owners understand regulatory consequences, not just procedural steps",
    "Whether records can be retrieved quickly and contemporaneously during audit sessions",
    "Whether the evidence tells one consistent, uncontradicted story across departments",
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
            <span className="text-navy">Process-Based Readiness</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #3
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              MDSAP Process-Based Audit Readiness
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              Prepare the Way an Auditor Follows Evidence
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              MDSAP is designed around processes and their interactions. Auditors move through records, risks and interfaces rather than remaining inside one SOP. A complaint may lead into reportability, investigation, CAPA, risk management, supplier control, design change, advisory notice and management review. Readiness therefore depends on whether those links are real and traceable.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Prepare for a Process-Based MDSAP Audit <ArrowRight className="h-4 w-4" />
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
                Methodology &amp; Drills
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Process Readiness Support Includes
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
                  We simulate <strong>audit trails</strong> instead of rehearsing scripted answers. One exercise may begin with a complaint and continue through adverse-event assessment, investigation, risk-file review, CAPA, design or labeling change and effectiveness verification. If the chain breaks, the organization may have good procedures but still be vulnerable during an MDSAP audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Test Your QMS Process Linkages?"
        description="Experience realistic process trace audits and interview coaching with NKB Regovanta before your recognized Auditing Organization arrives."
      />
    </>
  );
}
