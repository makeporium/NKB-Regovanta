import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FileText,
  Sparkles,
  ArrowRight,
  Barcode,
  Globe2,
  Languages,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/labeling")({
  head: () => ({
    meta: [
      { title: "EU MDR & IVDR Labeling, IFU & Multilingual Compliance | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU MDR Annex I Chapter III and IVDR Annex I Chapter III labeling compliance, Instructions for Use (IFU), eIFU Regulation (EU) 2021/2226, ISO 15223-1 symbols, and 24-language translation governance.",
      },
      {
        name: "keywords",
        content:
          "EU MDR labeling requirements, IVDR IFU compliance, ISO 15223-1 medical device symbols, electronic IFU eIFU Europe, multilingual labeling MDR, NKB Regovanta",
      },
      { property: "og:title", content: "EU MDR & IVDR Labeling, IFU & Multilingual Compliance | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We audit and format medical device and IVD packaging, artwork, sterile barrier labels, and Instructions for Use across all 27 EU member states.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/labeling" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR & IVDR Labeling, IFU & Multilingual Compliance | NKB Regovanta" },
      { name: "twitter:description", content: "Senior EU MDR Annex I Chapter III and IVDR Annex I Chapter III labeling compliance, Instructions for Use (IFU), eIFU Regulation (EU) 2021/2226, ISO 15223-1 symbols, and 24-language translation governance." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/labeling" }],
  }),
  component: EULabelingPage,
});

function EULabelingPage() {
  const labelingItems = [
    "Annex I Chapter III Section 23 (MDR) / Section 20 (IVDR) GSPR compliance audit",
    "ISO 15223-1 medical device symbology validation and symbol justification",
    "UDI carrier (GS1 / HIBCC) layout, Human Readable Interpretation (HRI) and 2D DataMatrix placement",
    "Sterile barrier system and protective packaging label distinction",
    "Instructions for Use (IFU) authoring, risk warnings, contraindications and clinical claims alignment",
    "Electronic Instructions for Use (eIFU) compliance under Regulation (EU) 2021/2226",
    "National language requirement mapping across target EU member state markets",
    "Translation governance procedures and technical accuracy verification",
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
              name: "EU MDR & IVDR Labeling, IFU & Multilingual Compliance",
              url: "https://www.nkbregovanta.com/services/eu/labeling",
              description:
                "Packaging artwork, IFU authoring, symbology, and multilingual compliance under EU MDR and IVDR.",
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
                { "@type": "ListItem", position: 4, name: "Labeling & IFU", item: "https://www.nkbregovanta.com/services/eu/labeling" },
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
            <span className="text-navy">Labeling &amp; IFU Compliance</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Languages className="h-3.5 w-3.5" /> ISO 15223-1 &amp; Multilingual IFU
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Labeling, IFU &amp; Multilingual Artwork Compliance
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Labeling is the visible interface of your regulatory compliance. We verify product labels, primary and secondary packaging, UDI placement, sterile barriers and Instructions for Use against stringent MDR/IVDR mandates.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Audit Your Artwork &amp; IFU <ArrowRight className="h-4 w-4" />
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
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  Labeling &amp; IFU Deliverables
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {labelingItems.map((item, idx) => (
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

              {/* Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  100% Alignment with Risk Management and CER/PER
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  Every warning, contraindication, residual risk mitigation and clinical claim in the Instructions for Use must match the ISO 14971 risk management file and the Clinical Evaluation Report verbatim. We audit this chain to eliminate Notified Body nonconformities.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Multilingual Compliance
                </h4>
                <p className="text-xs text-navy/75 font-medium leading-relaxed">
                  Each EU member state defines specific language requirements for user information. We provide official country-by-country translation tables to ensure compliance across all target distribution territories.
                </p>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Labeling Review</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Submit your packaging proofs and IFUs for comprehensive regulatory audit.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Review Packaging Proofs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ensure Flawless Packaging, Symbology, and Multilingual IFUs"
        description="Our labeling specialists audit and align your artwork across European regulatory standards."
      />
    </>
  );
}
