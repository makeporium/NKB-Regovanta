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
  Link2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/mdsap/qms-alignment")({
  head: () => ({
    meta: [
      { title: "ISO 13485 to MDSAP QMS Alignment | Global System Design | NKB Regovanta" },
      { name: "description", content: "Align your ISO 13485 Quality Management System to MDSAP requirements without creating 5 disconnected QMS variants. Embedded decision trees and local triggers." },
      { name: "keywords", content: "ISO 13485 MDSAP alignment, unified quality management system, global QMS design, regulatory triggers ISO 13485" },
      { property: "og:title", content: "ISO 13485 to MDSAP QMS Alignment | NKB Regovanta" },
      { property: "og:description", content: "ISO 13485 is the foundation; MDSAP tests the regulatory system built on top of it. One unified quality management system with country-specific logic." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/mdsap/qms-alignment" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ISO 13485 to MDSAP QMS Alignment | Global System Design | NKB Regovanta" },
      { name: "twitter:description", content: "Align your ISO 13485 Quality Management System to MDSAP requirements without creating 5 disconnected QMS variants. Embedded decision trees and local triggers." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/mdsap/qms-alignment" },
    ],
  }),
  component: QmsAlignmentPage,
});

function QmsAlignmentPage() {
  const supportItems = [
    "ISO 13485:2016 baseline assessment",
    "MDSAP process-to-clause mapping",
    "Country-specific regulatory matrices",
    "Regulatory responsibility assignment",
    "Marketing authorization and facility-registration controls",
    "Complaint and mandatory-reporting decision trees",
    "Advisory notice / field action controls",
    "Record-retention requirement mapping",
    "Regulatory change-assessment process",
    "Training for jurisdiction-specific responsibilities",
    "Global procedure plus local-workflow architecture where appropriate",
  ];

  const auditorTesting = [
    "Whether country requirements are operationalized rather than merely referenced",
    "Whether employees know when a local country-specific requirement is triggered",
    "Whether regulatory responsibilities are assigned to competent, trained functions",
    "Whether operational records prove the local requirement was actually followed",
    "Whether global procedures remain usable when multiple markets are involved",
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
            <span className="text-navy">ISO 13485 to MDSAP Alignment</span>
          </div>

          <Link
            to="/services/mdsap"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to MDSAP Hub
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              MDSAP CONSULTING SERVICE #4
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[42px]">
              ISO 13485 to MDSAP QMS Alignment
            </h1>
            <p className="text-lg text-[#0b3a96] font-bold mb-4">
              ISO 13485 Is the Foundation; MDSAP Tests the Regulatory System Built on Top of It
            </p>
            <p className="text-[15px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              A mature ISO 13485 system provides the core QMS architecture, but MDSAP adds jurisdiction-specific regulatory requirements and a defined audit approach. The transition should not create five disconnected QMS variants. It should create one controlled system in which local requirements are embedded where the relevant process decisions occur.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Align ISO 13485 With MDSAP <ArrowRight className="h-4 w-4" />
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
                Integration Framework
              </div>
              <h2 className="text-2xl font-extrabold text-navy mb-6">
                Our QMS Alignment Support Includes
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
                  We avoid creating five parallel quality systems. The preferred architecture is a <strong>global QMS with controlled jurisdiction-specific decision logic</strong> built into registration, labeling, vigilance, complaint escalation, record retention, change control and field action processes. That makes the system scalable and easier to defend during audit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Upgrade Your ISO 13485 QMS for MDSAP"
        description="Partner with NKB Regovanta to integrate regulatory decision logic directly into your core quality management procedures."
      />
    </>
  );
}
