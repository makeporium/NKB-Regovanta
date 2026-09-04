import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
  Layers,
  Award,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/qms")({
  head: () => ({
    meta: [
      { title: "UK MDR 2002 Quality Management System (QMS) | ISO 13485 | NKB Regovanta" },
      {
        name: "description", content: "UK MDR 2002 Quality Management System consulting including ISO 13485:2016 implementation, UK Conformity Assessed (UKCA) technical file preparation, MHRA registration, and QMS compliance for medical devices marketed in Great Britain and Northern Ireland.",
      },
      { name: "keywords", content: "UK MDR 2002 Quality Management System (QMS), ISO 13485, services uk audit readiness, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UK MDR 2002 Quality Management System (QMS) | ISO 13485 | NKB Regovanta" },
      { property: "og:description", content: "UK MDR 2002 Quality Management System consulting including ISO 13485:2016 implementation, UK Conformity Assessed (UKCA) technical file preparation, MHRA registration, and QMS compliance for medical devices marketed in..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/audit-readiness" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UK MDR 2002 Quality Management System (QMS) | ISO 13485 | NKB Regovanta" },
      { name: "twitter:description", content: "UK MDR 2002 Quality Management System consulting including ISO 13485:2016 implementation, UK Conformity Assessed (UKCA) technical file preparation, MHRA registration, and QMS compliance for medical devices marketed in..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/audit-readiness" }],
  }),
  component: UKQMSPage,
});

function UKQMSPage() {
  const qmsItems = [
    "ISO 13485:2016 quality management system adaptation for UK MDR 2002",
    "Post-market surveillance and UK vigilance reporting standard operating procedures",
    "Design control, risk management (ISO 14971) and technical documentation linkages",
    "Supplier quality management and critical subcontractor control",
    "Internal quality audits and UK Approved Body audit preparation",
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/uk" className="hover:text-navy transition-colors">United Kingdom</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">QMS Implementation</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl">
              QMS Implementation &amp; UK MDR Alignment
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              We guide the adaptation of ISO 13485-certified Quality Management Systems to satisfy UK Medical Devices Regulations 2002 and UK Approved Body certification prerequisites.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services/uk/audit-readiness"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                View Approved Body Audit Readiness <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl font-extrabold text-navy">QMS Areas Covered</h2>
            <div className="grid grid-cols-1 gap-2.5">
              {qmsItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-surface/40 border border-gray-200/80 flex items-start gap-3">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-navy/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Align Your Quality Management System with UK Regulatory Mandates"
        description="Connect with our quality assurance specialists to ensure total ISO 13485 and UK MDR compliance."
      />
    </>
  );
}
