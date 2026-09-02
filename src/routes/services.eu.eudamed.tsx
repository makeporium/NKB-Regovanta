import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Database,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  Barcode,
  Layers,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/eudamed")({
  head: () => ({
    meta: [
      { title: "EUDAMED Registration, UDI & Economic Operator Compliance | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU MDR & IVDR EUDAMED registration consulting, Single Registration Number (SRN), Basic UDI-DI strategy, UDI-DI / UDI-PI labeling, and EC REP / Importer agreements.",
      },
      {
        name: "keywords",
        content:
          "EUDAMED registration consultant, SRN Single Registration Number Europe, Basic UDI-DI assignment, UDI-DI UDI-PI MDR, EC REP European Authorised Representative, Importer distributor obligations, NKB Regovanta",
      },
      { property: "og:title", content: "EUDAMED, UDI & Economic Operator Compliance | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Regulatory data consistency is part of technical compliance. We align technical files, Declaration of Conformity, UDI, and EUDAMED modules into one controlled dataset.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/eudamed" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/eudamed" }],
  }),
  component: EUEUDAMEDPage,
});

function EUEUDAMEDPage() {
  const consistencyChain = [
    { num: "01", label: "Technical Documentation" },
    { num: "02", label: "Declaration of Conformity" },
    { num: "03", label: "Product Labeling" },
    { num: "04", label: "UDI-DI / Basic UDI-DI" },
    { num: "05", label: "EUDAMED Database" },
    { num: "06", label: "Economic Operator Records" },
  ];

  const supportAreas = [
    "Actor registration & Single Registration Number (SRN) acquisition",
    "Manufacturer and European Authorized Representative (EC REP) data alignment",
    "Importer and distributor compliance verification under MDR/IVDR Articles 13 & 14",
    "Basic UDI-DI hierarchy structuring and grouping strategy",
    "UDI-DI / UDI-PI barcode symbology and packaging label implementation (GS1 / HIBCC)",
    "Device and certificate data formatting for mandatory EUDAMED modules",
    "EU Declaration of Conformity (DoC) data harmonization with EUDAMED records",
    "Multilingual labeling and UDI consistency audits across all 27 EU member states",
    "Economic-operator agreement drafting and regulatory mandate review",
    "Regulatory database lifecycle maintenance following engineering and labeling changes",
    "Coordinated updates linking Annex II/III files directly to public registry entries",
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
              name: "EUDAMED, UDI & Economic Operator Compliance",
              url: "https://www.nkbregovanta.com/services/eu/eudamed",
              description:
                "Actor registration, Single Registration Number (SRN), UDI assignment, and EUDAMED module submission under EU MDR and IVDR.",
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
                { "@type": "ListItem", position: 4, name: "EUDAMED & UDI", item: "https://www.nkbregovanta.com/services/eu/eudamed" },
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
            <span className="text-navy">EUDAMED &amp; Economic Operators</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Database className="h-3.5 w-3.5" /> Controlled Regulatory Dataset
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              EUDAMED, UDI &amp; Economic Operator Compliance
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Regulatory data consistency is an integral part of technical compliance — not merely an administrative registration task. We harmonize technical documentation, UDI assignments, and EUDAMED modules across the commercial supply chain.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Prepare Your EU Registration &amp; UDI Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Consistency Check Flow */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  The End-to-End Data Consistency Chain
                </h2>
                <p className="text-[13px] text-navy/75 leading-relaxed font-medium">
                  We verify that every device identifier and manufacturer statement remains 100% harmonized across all data touchpoints.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {consistencyChain.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Areas */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  11 Key Registration &amp; Supply Chain Services
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {supportAreas.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Controlled Datasets Eliminate Costly Mismatches
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We review regulatory data as one controlled dataset. Minor discrepancies in trade names, Basic UDI-DI grouping, model codes, intended purpose statements, manufacturer address or certificate numbers create severe customs delays and post-market audit nonconformities.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  EUDAMED 6 Modules
                </h4>
                <div className="space-y-2.5 text-xs font-medium text-navy/75">
                  <p>1. Actor Registration (SRN)</p>
                  <p>2. UDI &amp; Device Registration</p>
                  <p>3. Notified Bodies &amp; Certificates</p>
                  <p>4. Clinical Investigations &amp; Studies</p>
                  <p>5. Vigilance &amp; Post-Market</p>
                  <p>6. Market Surveillance</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">EUDAMED &amp; UDI Setup</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Obtain your SRN and structure your Basic UDI-DI hierarchy with our regulatory data experts.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Start EUDAMED Setup <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Unify Your Device Identification and European Registry Data"
        description="Our regulatory informatics specialists structure Basic UDI-DI architectures and manage complete EUDAMED compliance."
      />
    </>
  );
}
