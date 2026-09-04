import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FileText,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  HelpCircle,
  AlertTriangle,
  Layers,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/510k")({
  head: () => ({
    meta: [
      { title: "510(k) Premarket Notification Consultant | US FDA Clearance | NKB Regovanta" },
      {
        name: "description",
        content:
          "Complete US FDA 510(k) premarket notification consulting. Substantial equivalence strategy, predicate selection, testing strategy, eSTAR preparation, and FDA deficiency response.",
      },
      {
        name: "keywords",
        content:
          "510k submission consultant, FDA 510k clearance, substantial equivalence, eSTAR 510k, predicate device research, CDRH portal, NKB Regovanta",
      },
      { property: "og:title", content: "510(k) Premarket Notification Support | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We structure the 510(k) around the substantial equivalence decision FDA must make — aligning predicate eligibility, evidence requirements and eSTAR dossier.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/510k" },
      { name: "keywords", content: "FDA 510k consultant, 510k submission India, eSTAR FDA submission, substantial equivalence predicate, FDA clearance consultant, medical device FDA consultant" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "510(k) Premarket Notification Consultant | US FDA Clearance | NKB Regovanta" },
      { name: "twitter:description", content: "Complete US FDA 510(k) premarket notification consulting. Substantial equivalence strategy, predicate selection, testing strategy, eSTAR preparation, and FDA deficiency response." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/510k" }],
  }),
  component: FiveTenKPage,
});

function FiveTenKPage() {
  const whenNeeded = [
    "When introducing a new device type that is subject to premarket notification",
    "When the proposed device can potentially demonstrate substantial equivalence to a legally marketed predicate",
    "When certain significant changes to an already cleared device may trigger a new 510(k) assessment",
    "When changes to technology, materials, software, sterilization, labeling or performance may affect safety or effectiveness",
  ];

  const buildSteps = [
    "Classification and pathway confirmation",
    "Predicate research and substantial equivalence strategy",
    "Testing and standards strategy",
    "Biocompatibility, sterilization, packaging and shelf-life evidence",
    "Software, cybersecurity, electrical safety and EMC where applicable",
    "Human factors and IVD performance evidence where applicable",
    "eSTAR preparation and technical consistency review",
    "FDA Interactive Review and Additional Information response support",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is a substantial equivalence predicate in an FDA 510(k) submission?","acceptedAnswer":{"@type":"Answer","text":"A predicate device is a legally marketed device to which the new device is compared for 510(k) clearance. It must share the same intended use and have the same or comparable technological characteristics as the new device."}},{"@type":"Question","name":"Is eSTAR mandatory for all FDA 510(k) submissions?","acceptedAnswer":{"@type":"Answer","text":"Yes. As of October 1, 2023, FDA requires all 510(k) submissions to be filed using the eSTAR (electronic Submission Template and Resource) standardized PDF format. Paper 510(k) submissions are no longer accepted."}},{"@type":"Question","name":"How long does FDA 510(k) clearance take in 2026?","acceptedAnswer":{"@type":"Answer","text":"Under MDUFA V, FDA's performance goal is to issue a decision within 90 days for 90% of 510(k)s. In practice, most routine submissions achieve clearance in 3–6 months, including any Additional Information (AI) request cycles."}},{"@type":"Question","name":"What is the difference between FDA 510(k) clearance and FDA PMA approval?","acceptedAnswer":{"@type":"Answer","text":"510(k) clearance is for Class II devices that demonstrate substantial equivalence to a predicate. PMA (Premarket Approval) is required for Class III devices and requires independent clinical evidence of safety and effectiveness — a much more rigorous process."}},{"@type":"Question","name":"What types of devices require a 510(k) submission?","acceptedAnswer":{"@type":"Answer","text":"Class II medical devices typically require a 510(k) unless they are 510(k)-exempt. Class I devices are usually exempt. Class III devices require PMA unless a De Novo has been granted. Some devices may qualify for the De Novo pathway to create a new device category."}}]}) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "510(k) Premarket Notification Support",
              url: "https://www.nkbregovanta.com/services/usa/510k",
              description:
                "Comprehensive US FDA 510(k) premarket notification support including substantial equivalence, testing strategy, and eSTAR preparation.",
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
                { "@type": "ListItem", position: 3, name: "USA FDA", item: "https://www.nkbregovanta.com/services/usa" },
                { "@type": "ListItem", position: 4, name: "510(k) Premarket Notification", item: "https://www.nkbregovanta.com/services/usa/510k" },
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
            <Link to="/services/usa" className="hover:text-navy transition-colors">USA FDA</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">510(k) Premarket Notification</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <FileText className="h-3.5 w-3.5" /> Primary US Premarket Pathway
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              510(k) Premarket Notification Support
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We structure the 510(k) around the substantial equivalence decision FDA must make. Classification, predicate eligibility, technological differences, evidence requirements and labeling are aligned before the eSTAR submission is built.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Discuss Your 510(k) Strategy <ArrowRight className="h-4 w-4" />
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
              {/* What Is a 510(k)? */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What Is a 510(k)?
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  A 510(k) is a premarket submission used to demonstrate that a device is <strong className="text-navy font-bold">substantially equivalent</strong> to an appropriate legally marketed predicate device before commercial distribution in the United States. For many Class II devices, and certain devices in other classes, this is the primary premarket pathway.
                </p>
              </div>

              {/* When Is a 510(k) Typically Needed? */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When Is a 510(k) Typically Needed?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {whenNeeded.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/80 border border-gray-200/70 hover:bg-blue-50/30 transition-colors"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13.5px] text-navy/80 font-medium leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* How We Build the 510(k) */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  How We Build the 510(k)
                </h3>
                <p className="text-[14px] text-navy/75 leading-relaxed font-medium">
                  We do not begin by filling the eSTAR. We first establish whether the regulatory strategy can withstand FDA review. Our assessment covers classification, product code, intended use, indications for use, predicate eligibility, technological characteristics, FDA guidance, consensus standards and the evidence required to support differences from the predicate:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {buildSteps.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[13px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviewer-Level Consistency Check */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200">
                <div className="flex items-center gap-2.5 mb-2 text-amber-900">
                  <AlertTriangle className="h-5 w-5 text-amber-700" />
                  <h4 className="text-base font-extrabold">Reviewer-Level Consistency Check</h4>
                </div>
                <p className="text-[13.5px] text-amber-950/90 leading-relaxed font-medium">
                  Before submission, we challenge whether the same regulatory position is maintained across: <strong>Indications for Use → Device Description → Predicate Comparison → Risk → Testing → Labeling</strong>. A technically sound report can still create a deficiency if it conflicts with another section of the dossier.
                </p>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Evidence-Driven Substantial Equivalence
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We build the regulatory and evidence strategy that supports the substantial equivalence decision — not just the submission file.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Key 510(k) Elements
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Mandatory eSTAR electronic format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Predicate comparison &amp; SE rationale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Non-clinical bench, biocompatibility &amp; safety testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Software / Cybersecurity documentation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Planning a 510(k) Clearance?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Engage senior FDA regulatory experts to de-risk your submission strategy.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Discuss 510(k) Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Build Your 510(k) Submission?"
        description="Partner with NKB Regovanta to create a defensible, reviewer-proof FDA dossier."
      />
    </>
  );
}
