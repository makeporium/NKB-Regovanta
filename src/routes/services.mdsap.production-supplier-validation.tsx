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
  Factory,
  Truck,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute(
  "/services/mdsap/production-supplier-validation",
)({
  head: () => ({
    meta: [
      {
        title:
          "Production, Supplier & Process Validation Readiness | MDSAP | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Strengthen manufacturing controls, critical supplier governance, cleanliness, sterilization, and process validation evidence for MDSAP audits.",
      },
      {
        property: "og:title",
        content:
          "Production, Supplier & Process Validation Readiness | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "The audit moves quickly from procedure to shop floor and supplier records. Rigorous production control, validation, and tier-1 supplier readiness.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/mdsap/production-supplier-validation",
      },
    ],
  }),
  component: ProductionSupplierValidationPage,
});

function ProductionSupplierValidationPage() {
  const supportItems = [
    "Manufacturing-process control and DMR alignment",
    "Work instruction and production-record (DHR) compliance",
    "Identification, lot control and device traceability systems",
    "Acceptance, in-process inspection and final release evidence",
    "Process validation strategy (IQ/OQ/PQ) and revalidation triggers",
    "Sterilization and special-process interfaces where applicable",
    "Equipment qualification, calibration and preventive maintenance",
    "Environmental monitoring / cleanroom contamination control",
    "Supplier qualification, risk classification and re-evaluation files",
    "Critical supplier Quality Agreements and outsourced-process controls",
    "Incoming inspection and supplier performance monitoring",
    "Supplier change notification governance and impact assessments",
    "Nonconforming product and concession controls",
  ];

  const auditorTesting = [
    "Whether validated manufacturing processes consistently remain in a validated state",
    "Whether supplier controls are proportionate to device risk and patient impact",
    "Whether outsourced processes are actively controlled, not simply purchased",
    "Whether production records prove flawless execution against current specifications",
    "Whether supplier or process changes are formally assessed before implementation",
    "Whether nonconforming product decisions rigorously protect against unintended release",
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
            <span className="text-navy">Production &amp; Suppliers</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #8
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              Production, Supplier &amp; Process Validation Readiness
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              The Audit Moves Quickly From Procedure to the Shop Floor and Supplier Evidence
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              Production and purchasing readiness should demonstrate that the device released to market is consistently manufactured under controlled conditions and that outsourced processes remain under the legal manufacturer’s control. This is where weak supplier governance, incomplete validation, uncontrolled changes and poor traceability frequently become visible.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Review Production &amp; Supplier Readiness <ArrowRight className="h-4 w-4" />
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
                Operations &amp; Supply Chain
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our Production &amp; Supplier Support Includes
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
                  We trace critical product characteristics back to the process and supplier controls that protect them. For higher-risk or outsourced processes, we ask whether the organization can demonstrate <strong>qualification, acceptance criteria, validation, change notification, ongoing monitoring and escalation</strong> - not merely an approved supplier certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Audit-Proof Your Manufacturing &amp; Supplier Controls"
        description="Verify process validations, DHR batch completeness, and critical supplier agreements with NKB Regovanta."
      />
    </>
  );
}
