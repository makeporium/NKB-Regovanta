import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Scale,
  Layers,
  FileCheck2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/technical-documentation")({
  head: () => ({
    meta: [
      { title: "EU MDR & IVDR Technical Documentation & GSPR Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Expert EU MDR & IVDR Annex II and Annex III Technical Documentation compilation, GSPR evidence mapping, and Notified Body audit defense.",
      },
      {
        name: "keywords",
        content:
          "MDR technical documentation Annex II Annex III, GSPR checklist Europe, General Safety and Performance Requirements, IVDR technical file, Notified Body review technical file, NKB Regovanta",
      },
      { property: "og:title", content: "EU Technical Documentation & GSPR Compliance | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We build and review Annex II / III technical documentation as one connected regulatory argument, mapping GSPR to objective testing and clinical evidence.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/technical-documentation" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/technical-documentation" }],
  }),
  component: EUTechnicalDocumentationPage,
});

function EUTechnicalDocumentationPage() {
  const annexSections = [
    { num: "Section 1", title: "Device Description & Specification", desc: "Including variants, configurations, accessories and Basic UDI-DI identification." },
    { num: "Section 2", title: "Information Supplied by Manufacturer", desc: "Labeling, Instructions for Use (IFU), packaging and multilingual requirements." },
    { num: "Section 3", title: "Design & Manufacturing Information", desc: "Design stages, critical suppliers, manufacturing processes and validation." },
    { num: "Section 4", title: "Demonstration of Conformity with GSPR", desc: "Applicability rationale, harmonised standards & objective evidence mapping." },
    { num: "Section 5", title: "Benefit-Risk Analysis & Risk Management", desc: "ISO 14971 risk management file, hazard identification & risk control verification." },
    { num: "Section 6", title: "Product Verification & Validation", desc: "Biocompatibility, electrical safety, software, bench testing & clinical/performance data." },
    { num: "Annex III", title: "Post-Market Surveillance Documentation", desc: "PMS plan, PMS report / PSUR, PMCF/PMPF plan & vigilance procedures." },
  ];

  const evidenceChain = [
    { step: "01", label: "Intended Purpose" },
    { step: "02", label: "Claims" },
    { step: "03", label: "GSPR Mapping" },
    { step: "04", label: "Risk Controls" },
    { step: "05", label: "V&V Evidence" },
    { step: "06", label: "Clinical / Performance" },
    { step: "07", label: "Labeling Alignment" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "EU MDR & IVDR Technical Documentation & GSPR Compliance",
              url: "https://www.nkbregovanta.com/services/eu/technical-documentation",
              description:
                "Comprehensive Annex II and Annex III Technical Documentation compilation, GSPR evidence mapping, and Notified Body review readiness.",
              provider: {
                "@type": "ProfessionalService",
                name: "NKB Regovanta Solutions Pvt. Ltd.",
                url: "https://www.nkbregovanta.com",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nkbregovanta.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://www.nkbregovanta.com/services" },
                { "@type": "ListItem", position: 3, name: "European Union", item: "https://www.nkbregovanta.com/services/eu" },
                { "@type": "ListItem", position: 4, name: "Technical Documentation", item: "https://www.nkbregovanta.com/services/eu/technical-documentation" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu" className="hover:text-navy transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Technical Documentation &amp; GSPR</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <FileCheck2 className="h-3.5 w-3.5" /> Annex II &amp; Annex III Architecture
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Technical Documentation &amp; GSPR Compliance
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We build and review Annex II / III technical documentation as one connected regulatory argument. Each major claim is traced to the risk controls, verification/validation evidence, clinical or performance evidence and labeling that support it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Strengthen Your Technical Documentation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-10">
              {/* Evidence Chain */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  How NKB Reviews the Technical File
                </h2>
                <p className="text-[13px] text-navy/75 leading-relaxed font-medium">
                  We review the technical documentation as one connected regulatory argument rather than isolated folders.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-2">
                  {evidenceChain.map((item) => (
                    <div key={item.step} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.step}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Documentation Scope */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  Technical Documentation Scope (Annex II &amp; III)
                </h2>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {annexSections.map((sec) => (
                    <div
                      key={sec.num}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-4"
                    >
                      <div className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-extrabold text-xs shrink-0 mt-0.5">
                        {sec.num}
                      </div>
                      <div>
                        <h4 className="text-[13.5px] font-extrabold text-navy">{sec.title}</h4>
                        <p className="text-[12px] text-navy/70 mt-0.5 font-medium">{sec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GSPR Evidence Mapping & Notified Body Lens */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md space-y-4">
                <div className="flex items-center gap-2.5 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Notified Body Lens</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  GSPR Evidence Mapping with Objective Substantiation
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  A reference to a harmonised standard is not enough if the underlying evidence does not actually demonstrate the applicable requirement. We challenge both the applicability rationale and the quality of the test reports, validation records, or clinical/performance data cited.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Documentation Review Checklist
                </h4>
                <ul className="space-y-2.5 text-xs text-navy/75 font-medium">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Cross-document terminology consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Risk-benefit alignment with clinical data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Labeling claims verified against test reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Annex III PMS alignment with CER/PER</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Audit-Ready Dossiers</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Avoid costly Notified Body nonconformities with pre-submission technical documentation audits.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request File Audit <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Transform Your Technical File into a Defensible Conformity Package"
        description="Our senior specialists review and structure your Annex II & III documentation for seamless Notified Body approval."
      />
    </>
  );
}
