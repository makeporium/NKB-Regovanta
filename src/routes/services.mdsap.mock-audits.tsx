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
  Users,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/mock-audits")({
  head: () => ({
    meta: [
      { title: "Mock MDSAP Audits & Interview Preparation | NKB Regovanta" },
      { name: "description", content: "Full-system and targeted mock MDSAP audits, opening/closing meetings, record retrieval drills, and process-owner interview coaching." },
      { name: "keywords", content: "MDSAP mock audit, simulated Auditing Organization audit, audit interview coaching medical devices, record retrieval drill MDSAP" },
      { property: "og:title", content: "Mock MDSAP Audits & Interview Preparation | NKB Regovanta" },
      { property: "og:description", content: "A mock audit should create productive pressure before the real auditor does. Realistic cross-process simulations and evidence challenges." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/mdsap/mock-audits" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mock MDSAP Audits & Interview Preparation | NKB Regovanta" },
      { name: "twitter:description", content: "Full-system and targeted mock MDSAP audits, opening/closing meetings, record retrieval drills, and process-owner interview coaching." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/mdsap/mock-audits" },
    ],
  }),
  component: MockAuditsPage,
});

function MockAuditsPage() {
  const supportItems = [
    "Full-system or targeted process mock audits",
    "Remote or on-site audit simulation",
    "Opening and closing meeting simulation",
    "Process-owner interview coaching",
    "Live record sampling across historical batches",
    "Auditor-style follow-up questioning",
    "Cross-process trace exercises",
    "Evidence retrieval timing and pressure tests",
    "Regulatory decision challenge",
    "Daily finding review and risk triage",
    "Management briefing on high-risk observations",
    "Prioritized remediation plan after the mock audit",
  ];

  const auditorTesting = [
    "Whether staff answer the question asked and support answers with records",
    "Whether process owners understand the purpose and risk of their process",
    "Whether the organization can retrieve evidence without prolonged searching",
    "Whether records from different functions contradict each other",
    "Whether management recognizes systemic issues rather than defending isolated errors",
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
            <span className="text-navy">Mock Audits</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #6
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Mock MDSAP Audits &amp; Interview Preparation
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              A Mock Audit Should Create Productive Pressure Before the Real Auditor Does
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              A credible mock MDSAP audit is not a friendly document review. It should reproduce the audit sequence, challenge process owners, sample live records, follow evidence across departments and expose weaknesses in retrieval, decision-making and cross-functional ownership.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Run a Mock MDSAP Audit <ArrowRight className="h-4 w-4" />
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
                Simulation Scope
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Mock Audit Support Includes
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
                  We coach teams not to memorize responses. Experienced auditors test <strong>understanding, ownership and consistency</strong>. Our mock audits therefore focus on whether the person can explain the process, identify the relevant record, describe the escalation logic and show how the process connects to regulatory obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Schedule an On-Site or Remote Mock MDSAP Audit"
        description="Put your QMS to the test under realistic Auditing Organization conditions with NKB Regovanta's senior auditors."
      />
    </>
  );
}
