import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FileText,
  ArrowRight,
  Barcode,
  Globe2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/labeling")({
  head: () => ({
    meta: [
      { title: "UKCA Labeling, Artwork & UKRP Identification Compliance | NKB Regovanta" },
      {
        name: "description",
        content:
          "UKCA marking labeling requirements, Instructions for Use (IFU), UK Responsible Person (UKRP) identification on packaging, and symbology compliance.",
      },
      { name: "keywords", content: "UKCA Labeling, Artwork & UKRP Identification Compliance, services uk technical file, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "UKCA Labeling, Artwork & UKRP Identification Compliance | NKB Regovanta" },
      { property: "og:description", content: "UKCA marking labeling requirements, Instructions for Use (IFU), UK Responsible Person (UKRP) identification on packaging, and symbology compliance." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/technical-file" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UKCA Labeling, Artwork & UKRP Identification Compliance | NKB Regovanta" },
      { name: "twitter:description", content: "UKCA marking labeling requirements, Instructions for Use (IFU), UK Responsible Person (UKRP) identification on packaging, and symbology compliance." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/technical-file" }],
  }),
  component: UKLabelingPage,
});

function UKLabelingPage() {
  const labelingItems = [
    "UKCA marking symbol placement, proportions and legibility on primary/secondary packaging",
    "UK Responsible Person (UKRP) legal name and address identification requirements",
    "Instructions for Use (IFU) authoring, contraindications, and risk warning alignment",
    "Dual-market packaging design (UKCA + CE mark co-existence)",
    "UDI barcode placement and GMDN / product identifier consistency",
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
            <span className="text-navy">Labeling &amp; Artwork</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl">
              UKCA Labeling &amp; Artwork Compliance
            </h1>
            <p className="text-[15px] leading-relaxed text-navy/75 font-medium mb-8">
              We audit packaging artwork, sterile barrier labels, and Instructions for Use to verify compliance with UKCA marking rules and mandatory UKRP identification.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services/uk/technical-file"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                View Technical File Review <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-xl font-extrabold text-navy">UK Labeling Rules &amp; Verification</h2>
            <div className="grid grid-cols-1 gap-2.5">
              {labelingItems.map((item, idx) => (
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
        title="Audit Your Packaging and Labeling for UKCA Compliance"
        description="Our labeling specialists review artwork and IFUs to ensure full compliance with UK regulations."
      />
    </>
  );
}
