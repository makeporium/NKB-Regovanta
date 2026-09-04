import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ArrowRight,
  Pill,
  Syringe,
  FileText,
  Building2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/article-117")({
  head: () => ({
    meta: [
      { title: "EU MDR Article 117 Drug-Device Combination Products & Notified Body Opinion | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior regulatory consulting for Drug-Device Combination Products under EU MDR Article 117, Notified Body Opinion (NBOp) dossier compilation, GSPR conformity, and EMA / Competent Authority interface.",
      },
      {
        name: "keywords",
        content:
          "EU MDR Article 117, Drug-Device Combination Products, Notified Body Opinion NBOp, GSPR compliance medicinal products, prefilled syringes auto-injectors, NKB Regovanta",
      },
      { property: "og:title", content: "Drug-Device Combination Products & Article 117 | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We align device-constituent GSPR evidence, usability, functional performance, and Notified Body Opinion preparation for pharmaceutical combination products.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/article-117" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR Article 117 Drug-Device Combination Products & Notified Body Opinion | NKB Regovanta" },
      { name: "twitter:description", content: "Senior regulatory consulting for Drug-Device Combination Products under EU MDR Article 117, Notified Body Opinion (NBOp) dossier compilation, GSPR conformity, and EMA / Competent Authority interface." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/article-117" }],
  }),
  component: EUArticle117Page,
});

function EUArticle117Page() {
  const supportItems = [
    "Article 117 applicability assessment (integral vs co-packaged / referenced combinations)",
    "Device constituent qualification, intended purpose and applicable MDR GSPR mapping",
    "Risk management file (ISO 14971) focused on device-drug interactions and delivery errors",
    "Human factors & usability engineering studies for delivery devices (IEC 62366-1)",
    "Functional performance, dose accuracy and delivery repeatability testing",
    "Biocompatibility (ISO 10993) and chemical characterization of fluid path materials",
    "Sterility assurance, terminal sterilization validation and packaging integrity",
    "Technical documentation preparation specifically tailored for Notified Body Opinion (NBOp)",
    "Direct Notified Body interaction, deficiency defense and post-opinion change impact assessment",
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
              name: "EU MDR Article 117 Drug-Device Combination Products & Notified Body Opinion",
              url: "https://www.nkbregovanta.com/services/eu/article-117",
              description:
                "Regulatory consulting for medicinal products with integral device constituent parts requiring a Notified Body Opinion under EU MDR Article 117.",
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
                { "@type": "ListItem", position: 4, name: "Article 117", item: "https://www.nkbregovanta.com/services/eu/article-117" },
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
            <span className="text-navy">Article 117 Combinations</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Syringe className="h-3.5 w-3.5" /> Notified Body Opinion (NBOp)
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Drug-Device Combination Products &amp; Article 117
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              For medicinal products incorporating an integral device constituent part (such as pre-filled pens, auto-injectors, or inhalers), Article 117 mandates evidence of conformity with applicable MDR Annex I GSPRs and a Notified Body Opinion (NBOp). We prepare and defend the complete device evidence dossier.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Assess Your Article 117 Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Deliverables */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  Article 117 Compliance &amp; NBOp Deliverables
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {supportItems.map((item, idx) => (
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
                  Combined Product Risk and Delivery Realities
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We align the device-constituent risks, usability protocols and validation evidence directly with the combined product clinical use and drug characteristics, rather than treating the device component as an isolated checklist.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Typical Product Types
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• Pre-filled syringes &amp; pens</p>
                  <p>• Auto-injectors &amp; wearable bolus injectors</p>
                  <p>• Metered dose inhalers (MDIs) &amp; DPIs</p>
                  <p>• Transdermal delivery systems</p>
                  <p>• Implants with drug-eluting functions</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Need an NBOp Dossier?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Prepare your device constituent documentation to interface smoothly with EMA or National Competent Authority MAA submissions.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request NBOp Support <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Secure Your Notified Body Opinion under EU MDR Article 117"
        description="Our combination product specialists integrate medical device engineering with pharmaceutical regulatory submissions."
      />
    </>
  );
}
