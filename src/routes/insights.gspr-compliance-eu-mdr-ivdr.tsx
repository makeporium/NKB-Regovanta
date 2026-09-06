import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

const imgArticle = "/assets/brain/eu_mdr_market_1786306179767.png";

export const Route = createFileRoute("/insights/gspr-compliance-eu-mdr-ivdr")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: "GSPR Compliance for EU MDR & IVDR | NKB Regovanta" },
      {
        name: "description",
        content: "Practical guidance for establishing objective regulatory evidence, state-of-the-art standards alignment, and checklist traceability.",
      },
      { property: "og:title", content: "GSPR Compliance for EU MDR & IVDR | NKB Regovanta" },
      {
        property: "og:description",
        content: "Practical guidance for establishing objective regulatory evidence, state-of-the-art standards alignment, and checklist traceability.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/gspr-compliance-eu-mdr-ivdr" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "GSPR Compliance for EU MDR & IVDR | NKB Regovanta" },
      { name: "twitter:description", content: "Practical guidance for establishing objective regulatory evidence, state-of-the-art standards alignment, and checklist traceability." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/insights/gspr-compliance-eu-mdr-ivdr" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Achieving GSPR Compliance: Navigating Annex I of EU MDR and IVDR",
            "description": "Practical guidance for establishing objective regulatory evidence, state-of-the-art standards alignment, and checklist traceability.",
            "image": "https://www.nkbregovanta.com/assets/brain/eu_compliance_1786396542227.png",
            "author": {
              "@type": "Organization",
              "name": "NKB Regovanta Solutions Pvt. Ltd.",
              "url": "https://www.nkbregovanta.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "NKB Regovanta Solutions Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.nkbregovanta.com/favicon.png"
              }
            },
            "datePublished": "2026-08-27",
            "mainEntityOfPage": "https://www.nkbregovanta.com/insights/gspr-compliance-eu-mdr-ivdr"
          })
        }}
      />

      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              EU TECHNICAL FILES
            </span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">2026-08-27</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            Achieving GSPR Compliance: Navigating Annex I of EU MDR and IVDR
          </h1>

          <p className="text-lg sm:text-xl text-blue-900/80 font-medium leading-relaxed mb-10 pb-6 border-b border-gray-100">
            Practical guidance for establishing objective regulatory evidence, state-of-the-art standards alignment, and checklist traceability.
          </p>

          <img 
            src={imgArticle} 
            alt="Achieving GSPR Compliance: Navigating Annex I of EU MDR and IVDR" 
            className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl mb-12 shadow-md border border-gray-100" 
          />

          <div className="prose prose-lg max-w-none text-navy/80 space-y-6 leading-relaxed">
<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">GSPR Requirements for EU MDR and IVDR</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">GSPR Requirements for EU MDR and IVDR the EU Parliament published on 05 May 2017 sets forth new and important requirements for medical device and in vitro diagnostic manufacturers that distribute products in the EU. New General Safety and Performance Requirements for EU MDR &amp; IVDR is for ensuring that devices placed on the EU market are fit for the new technological challenges. In this respect, the new texts lay down certain new General Safety and Performance Requirements for EU MDR &amp; IVDR for all medical devices that incorporate electronic programmable systems and software that are medical devices in themselves.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The MDCG guidance provides a listing of all GSPR Requirements for EU MDR and IVDR in MDR Annex I &amp; IVDR Annex I pertaining to cybersecurity. The MDR and IVDR request manufacturers of medical devices to consider the state of the art when designing, developing and upgrading medical devices across their life cycles.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Regulatory Excellence for Global Medical Device Markets</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Manufacturers should demonstrate state-of-the-art within their decisions (based on applicable standards, guidance, their own proprietary knowledge and publicly available scientific/technical information) while demonstrating appropriateness to proportionally address security risk.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">GSPR Requirements for EU MDR and IVDR</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The medical sector plays a crucial role not only to the health of European Union (EU) citizens but to the European economy as well. The medical devices market in the EU contributes to one-third of the global market, at around €110 billion. Due to the COVID-19 pandemic and increased demand for medical devices, the European Parliament agreed to the EU Commission’s proposal to postpone the application of the MDR by one year. It is essential that the majority of medical producers around the world are compliant with the EU MDR/IVDR. Hundreds of thousands of products will need to be re-certified in order to continue being sold in the European market.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">General Safety and Performance Requirements for EU MDR &amp; IVDR apply to all medical device classes, as well as the design phase in the manufacturing process. Additional steps include the development of quality and risk management systems, as well as conducting a benefit-risk analysis and clinical evaluations. Manufacturers are also required to supply label information, including instructions of use. The MDR/IVDR obligates the manufacturer or authorized representative in the EU to generate the technical documentation and sign the declaration of conformity.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">All technical documentation must be kept for 10 to 15 years depending on the device type. Manufacturers must draw a post-market surveillance technical file to show how the performance data about their device is collected. Indeed, the new regulations offer better co-ordination mechanisms and post-market surveillance. The essential requirements (ER) are the key elements to compliance with MDD and AIMDD. The new regulation EU MDR replaces the essential requirements (ER) by General Safety And Performance Requirements for EU MDR &amp; IVDR (GSPR).</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">General Safety And Performance Requirements for EU MDR &amp; IVDR (EU MDR) are almost similar to Essential Requirements (MDD), there are some additional requirements and some expanded requirements, and some new topics are introduced in GSPR.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Main Requirements of GSPR</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">The requirements of GSPR is covered in Annex I of MDR with 3 chapters.</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Chapter 1 – General requirements</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Chapter II – Requirements regarding design and manufacture</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Chapter III – Requirements regarding the information supplied with the device</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Fulfilling the general safety and performance requirements listed in Annex I is one of the most fundamental preconditions to placing any medical device on the European mark. “Placing on the market and putting into service”. The ”requirements” are a set of product characteristics, which are considered by the European authorities as being essential to ensuring that any new device will be safe and perform as intended throughout its life.</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Categories</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">CDSCO Category</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Medical device Manufacturing</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">News/Updates</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">QMS</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Regulatory</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Turnkey Project Management</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">US FDA</p>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Subscribe Newsletter</p>

<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">Recent Posts</h2>

<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">Predetermined Change Control Plan (PCCP) for SaMD: FDA Requirements</p>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50/60 to-slate-50 border border-blue-100 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-4">How NKB Regovanta Can Support Your Programme</h3>
            <p className="text-navy/80 leading-relaxed mb-6">
              Our multidisciplinary team of regulatory affairs strategists, former auditors, and quality system engineers partners with medical technology innovators worldwide. We bridge complex regulatory standards with practical, commercial market-access pathways.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Global Regulatory Strategy &amp; Submissions</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Technical Documentation &amp; GSPR Files</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <FileText className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">ISO 13485 &amp; FDA QMSR Implementation</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <Globe2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Market Authorization &amp; Authorized Representation</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTABand 
        title="Ready to navigate your medical device regulatory pathway?" 
        description="Speak directly with NKB Regovanta's senior regulatory consultants for clear, practical guidance." 
        action="Schedule a Consultation" 
      />
    </>
  );
}
