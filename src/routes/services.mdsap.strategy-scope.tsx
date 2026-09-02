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

export const Route = createFileRoute("/services/mdsap/strategy-scope")({
  head: () => ({
    meta: [
      {
        title:
          "MDSAP Regulatory Strategy & Scope Assessment | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Define audit scope, legal manufacturer boundaries, facility mapping, product categories, and regulatory expectations across the 5 MDSAP jurisdictions.",
      },
      {
        property: "og:title",
        content: "MDSAP Regulatory Strategy & Scope Assessment | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Start with scope before rewriting procedures. Comprehensive MDSAP audit universe mapping and legal manufacturer boundary determination.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap/strategy-scope",
      },
    ],
  }),
  component: StrategyScopePage,
});

function StrategyScopePage() {
  const supportItems = [
    "Legal manufacturer and site-scope assessment",
    "Product-family and technology mapping",
    "Design, manufacturing, service and distribution activity mapping",
    "Outsourced process and contract-manufacturer assessment",
    "Applicable-jurisdiction determination (US, Canada, Brazil, Japan, Australia)",
    "Certification scope and certificate wording review",
    "Existing ISO 13485 / MDSAP audit history review",
    "Open CAPA, complaint, recall and regulatory-action review",
    "Audit-cycle planning: initial, surveillance and re-audit readiness",
    "Readiness timeline based on actual remediation risk rather than an arbitrary audit date",
  ];

  const auditorTesting = [
    "Whether declared scope matches actual activities and products",
    "Whether outsourced activities remain effectively controlled by the manufacturer",
    "Whether market declarations are complete and current across all 5 participating jurisdictions",
    "Whether QMS responsibilities and interfaces are clear across internal and external sites",
    "Whether records outside the corporate SOP set can be sampled without exposing scope gaps",
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
            <span className="text-navy">Strategy &amp; Scope</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #1
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              MDSAP Regulatory Strategy &amp; Scope Assessment
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              Start With Scope Before You Start Rewriting Procedures
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              MDSAP audit scope drives the entire readiness strategy. Before remediation begins, the manufacturer needs a clear view of the legal manufacturer, audited sites, product families, design and manufacturing activities, outsourced processes, critical suppliers, service activities and regulatory jurisdictions that will fall within the certification scope.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Define Your MDSAP Audit Scope <ArrowRight className="h-4 w-4" />
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
                Core Deliverables
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Scope Assessment Support Includes
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
                  We create an <strong>audit universe</strong> before detailed remediation. This identifies the sites, processes, products, jurisdictions and record populations that an auditor could reasonably sample. It prevents the common mistake of polishing procedures while leaving supplier files, production evidence, regulatory registrations or post-market records inconsistent with the certification scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Establish Your MDSAP Audit Scope?"
        description="Connect with NKB Regovanta's senior MDSAP advisors to map your legal manufacturer entities, product lines, and multi-country certification parameters."
      />
    </>
  );
}
