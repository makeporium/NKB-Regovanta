import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, ShieldCheck, FileCheck2, ScrollText, AlertTriangle, Scale } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-cosmetics.png";

export const Route = createFileRoute("/industries/cosmetics_/usa")({
  head: () => ({
    meta: [
      { title: "USA Cosmetics Regulatory Services & MoCRA Compliance | NKB Regovanta" },
      { name: "description", content: "USA MoCRA cosmetics compliance: FDA cosmetic facility registration, Cosmetic Product Listing (SPL format), safety substantiation documentation, and labelling compliance for cosmetics and personal care products sold in the United States." },
      { name: "keywords", content: "USA Cosmetics Regulatory Services & MoCRA Compliance, industries cosmetics usa, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "USA Cosmetics Regulatory Services & MoCRA Compliance | NKB Regovanta" },
      { property: "og:description", content: "USA MoCRA cosmetics compliance: FDA cosmetic facility registration, Cosmetic Product Listing (SPL format), safety substantiation documentation, and labelling compliance for cosmetics and personal care products sold in..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/industries/cosmetics/usa" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "USA Cosmetics Regulatory Services & MoCRA Compliance | NKB Regovanta" },
      { name: "twitter:description", content: "USA MoCRA cosmetics compliance: FDA cosmetic facility registration, Cosmetic Product Listing (SPL format), safety substantiation documentation, and labelling compliance for cosmetics and personal care products sold in..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
  links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/industries/cosmetics/usa" },
  ],
  }),
  component: USACosmetics,
});

const services = [
  {
    icon: <ScrollText className="h-6 w-6 text-accent mb-4" />,
    title: "FDA Product & Facility Registration",
    desc: "We ensure seamless compliance with mandatory MoCRA requirements by managing both your FDA Cosmetic Product Listing and Cosmetic Facility Registration.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
    title: "MoCRA Compliance & Strategy",
    desc: "Navigate the updated Modernization of Cosmetics Regulation Act with our experts to ensure strict safety substantiation and regulatory adherence.",
  },
  {
    icon: <Scale className="h-6 w-6 text-accent mb-4" />,
    title: "Product Classification (Cosmetic vs. Drug)",
    desc: "We help determine the precise regulatory category for your product, ensuring items with therapeutic claims are correctly registered under drug pathways if necessary.",
  },
  {
    icon: <FileCheck2 className="h-6 w-6 text-accent mb-4" />,
    title: "FDA Labeling & Claims Review",
    desc: "Our rigorous review process guarantees that your ingredient nomenclature, mandatory warnings, and marketing claims meet all FDA and FD&C Act standards.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-accent mb-4" />,
    title: "Adverse Event Tracking & Reporting",
    desc: "We provide comprehensive post-marketing surveillance support to track, document, and report adverse events securely in accordance with MoCRA.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-accent mb-4" />,
    title: "Ingredient & Formulation Analysis",
    desc: "Thorough scientific evaluation of your cosmetic formulations to guarantee that all ingredients comply with the latest federal safety guidelines.",
  },
];

function USACosmetics() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white overflow-hidden pb-4 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
            <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/industries/cosmetics" className="hover:text-navy transition-colors">Cosmetics</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">USA</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">USA Regulatory Services</p>
          <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            Cosmetics Regulatory Services in the USA
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            The United States represents the largest global market for cosmetic products. With the enactment of the Modernization of Cosmetics Regulation Act (MoCRA), navigating FDA requirements has become more critical and stringent than ever before. We provide the expertise you need to ensure flawless compliance and rapid market entry.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-surface/30 border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-border/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Navigating the Modernization of Cosmetics Regulation Act (MoCRA)</h2>
            <div className="prose prose-blue max-w-none text-navy/80 space-y-6">
              <p className="text-[15px] leading-relaxed">
                Historically, the U.S. cosmetics industry operated with relatively minimal pre-market regulatory oversight. The introduction of <strong>MoCRA (Modernization of Cosmetics Regulation Act of 2022)</strong> revolutionized this landscape, significantly expanding the FDA's regulatory authority and imposing new mandatory compliance standards for manufacturers and brand owners.
              </p>
              <p className="text-[15px] leading-relaxed">
                Under the new framework, the FDA possesses the authority to review cosmetic products directly and enforce mandatory recalls for non-compliance. Brands must now establish robust protocols for <strong>Post-Marketing Surveillance</strong> and rigorous adverse event reporting.
              </p>
              <p className="text-[15px] leading-relaxed">
                A critical step in U.S. compliance is accurate product classification. The FDA strictly distinguishes between standard cosmetics and products with therapeutic claims. Items such as antiperspirants, anti-dandruff shampoos, acne treatments, and fluoride mouthwashes are legally classified as drugs in the U.S. market. Incorrect classification can lead to immediate regulatory action and border detentions.
              </p>
              <p className="text-[15px] leading-relaxed">
                NKB Regovanta provides end-to-end regulatory support designed specifically to navigate these complexities. From securing your mandatory FDA Facility Registration and Product Listing to conducting meticulous label and claims reviews, we ensure your products align perfectly with the Federal Food, Drug, and Cosmetic (FD&C) Act and MoCRA guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-navy">Comprehensive FDA Compliance Solutions</h2>
             <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
               Our structured, cost-effective approach guarantees that your brand meets every FDA requirement while accelerating your speed-to-market across the United States.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="p-8 rounded-md bg-surface/50 border border-border hover:bg-surface transition-colors">
                {s.icon}
                <h3 className="font-bold text-navy text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-navy/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface/30 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">Is FDA registration now mandatory for cosmetics?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                Yes. Under MoCRA, both FDA Cosmetic Facility Registration and FDA Cosmetic Product Listing are mandatory requirements for any brand legally marketing cosmetic products in the United States.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">What does MoCRA compliance entail?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                MoCRA requires strict adherence to updated FDA regulations, which introduce mandatory product/facility registration, enhanced safety substantiation, proactive post-market adverse event reporting, and grants the FDA legal authority to issue mandatory recalls.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy mb-2">What are the FDA cosmetic labeling requirements?</h3>
              <p className="text-navy/70 text-[15px] leading-relaxed">
                Labels must clearly display the product identity, net contents, a complete ingredient list using standard nomenclature, the manufacturer or importer's details, appropriate safety warnings, and only truthful, non-therapeutic claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Ensure your cosmetics are FDA compliant" btnText="Contact Our US Experts" />
    </>
  );
}
