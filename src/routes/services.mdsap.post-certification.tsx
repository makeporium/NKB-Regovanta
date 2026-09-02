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
  Headphones,
  Award,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/post-certification")({
  head: () => ({
    meta: [
      {
        title:
          "Audit Response & Post-Certification Support | MDSAP | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Support during audit, management of findings, response packages, surveillance audit readiness, and continuous MDSAP QMS maintenance.",
      },
      {
        property: "og:title",
        content:
          "Audit Response & Post-Certification Support | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "MDSAP readiness continues after the closing meeting. Surveillance audits, scope modifications, and ongoing 5-jurisdiction compliance support.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap/post-certification",
      },
    ],
  }),
  component: PostCertificationPage,
});

function PostCertificationPage() {
  const supportItems = [
    "Closing-meeting finding review and risk triage",
    "Response strategy and process-owner assignment",
    "CAPA response drafting and evidence organization",
    "Auditing Organization (AO) query and deficiency rebuttal support",
    "Effectiveness verification planning and milestone tracking",
    "Surveillance audit annual readiness drills",
    "Re-audit / recertification 3-year cycle planning",
    "Certificate scope change and expansion assessment",
    "Site / process / product change regulatory impact assessment",
    "Global regulatory change monitoring and standard updates",
    "Internal MDSAP maintenance and supplier audits",
    "Management review integration and executive scorecards",
    "Ongoing jurisdiction-specific compliance and licensing support",
  ];

  const auditorTesting = [
    "Whether corrective actions remain demonstrably effective after formal finding closure",
    "Whether previous audit findings or nonconformities recur in subsequent cycles",
    "Whether significant quality, design or site changes were controlled and reported where legally required",
    "Whether the QMS remains dynamically aligned to evolving regulatory requirements across all 5 countries",
    "Whether surveillance evidence shows sustained system maturity rather than temporary audit remediation",
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
            <span className="text-navy">Post-Certification Support</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #12
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Audit Response &amp; Post-Certification Support
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              MDSAP Readiness Continues After the Closing Meeting
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              After the audit, the manufacturer may need to respond to findings, provide evidence to the Auditing Organization, implement CAPA, maintain certification through surveillance audits and ensure changes to sites, products, processes or regulatory status are assessed for MDSAP impact. Certification should therefore become part of the operating QMS rather than a periodic project.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Support Your MDSAP Audit Cycle <ArrowRight className="h-4 w-4" />
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
                Surveillance &amp; Governance
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Post-Certification Support Includes
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
                  We treat the first MDSAP audit as the start of a <strong>controlled audit cycle</strong>. Findings, regulatory changes, significant complaints, process changes and new market entries should feed the internal audit plan and management review so the next surveillance audit does not rediscover the same systemic weaknesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Continuous MDSAP Audit Readiness"
        description="Retain NKB Regovanta's senior consultants for annual surveillance audit support, scope expansions, and ongoing regulatory compliance."
      />
    </>
  );
}
