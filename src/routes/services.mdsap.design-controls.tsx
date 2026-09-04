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
  PenTool,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/design-controls")({
  head: () => ({
    meta: [
      { title: "Design & Development Control Readiness | MDSAP | NKB Regovanta" },
      { name: "description", content: "Ensure design controls, user needs, V&V, transfer, software lifecycles, and Design History Files (DHF) are audit-ready and evidence-backed." },
      { name: "keywords", content: "MDSAP design controls, Design History File DHF audit, medical device V&V evidence, design change control MDSAP, IEC 62304 software lifecycle" },
      { property: "og:title", content: "Design & Development Control Readiness | NKB Regovanta" },
      { property: "og:description", content: "Design controls are often where the deepest nonconformities arise. Build defensible DHF, V&V, and design transfer records." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/mdsap/design-controls" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Design & Development Control Readiness | MDSAP | NKB Regovanta" },
      { name: "twitter:description", content: "Ensure design controls, user needs, V&V, transfer, software lifecycles, and Design History Files (DHF) are audit-ready and evidence-backed." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/mdsap/design-controls" },
    ],
  }),
  component: DesignControlsPage,
});

function DesignControlsPage() {
  const supportItems = [
    "Design and development planning and phase-gate governance",
    "User needs and measurable design-input quality",
    "Design-output completeness and specification control",
    "Design review effectiveness and cross-functional signoffs",
    "Verification traceability and protocol/report alignment",
    "Validation strategy under representative clinical and user configurations",
    "Design transfer readiness to internal manufacturing or contract sites",
    "Design change control and risk reassessment",
    "ISO 14971 Risk management file integration",
    "IEC 62304 Software lifecycle interfaces where applicable",
    "IEC 62366 Usability / human factors engineering interfaces",
    "Clinical or performance evidence linkage",
    "Design History File (DHF) / design-record completeness",
  ];

  const auditorTesting = [
    "Whether inputs are complete, unambiguous and verifiable",
    "Whether V&V objectively demonstrates all engineering requirements were met",
    "Whether validation truly reflects intended clinical use and user profiles",
    "Whether risk controls are verified and traceable across the DHF",
    "Whether design changes systematically trigger V&V, risk, labeling and regulatory assessments",
    "Whether production receives fully controlled and complete design outputs",
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
            <span className="text-navy">Design Controls</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #7
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Design &amp; Development Control Readiness
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              Design Controls Must Demonstrate a Controlled Chain From User Need to Released Product
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              Design-control findings often arise not because a design file is completely absent, but because the evidence chain is incomplete. Inputs may not be measurable, verification may not trace to requirements, validation may not represent intended users or use conditions, transfer may be weak, or design changes may not be connected to risk and regulatory assessment.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Strengthen Your Design-Control Evidence <ArrowRight className="h-4 w-4" />
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
                DHF &amp; Engineering Scope
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Design Readiness Support Includes
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
                  We review design as a <strong>regulatory evidence chain</strong>: Intended Use &rarr; User Needs &rarr; Inputs &rarr; Risk Controls &rarr; Outputs &rarr; Verification &rarr; Validation &rarr; Transfer &rarr; Change Control &rarr; Post-Market Feedback. The question is not whether every template is complete; it is whether the chain supports a safe, reproducible and legally marketed device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Audit-Ready Design History Files (DHF)"
        description="Ensure your design controls and risk management files withstand the deepest scrutiny from MDSAP auditors with NKB Regovanta."
      />
    </>
  );
}
