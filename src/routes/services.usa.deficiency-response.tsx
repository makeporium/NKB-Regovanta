import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Send,
  Sparkles,
  ArrowRight,
  HelpCircle,
  AlertCircle,
  FileSearch2,
  CheckSquare,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/deficiency-response")({
  head: () => ({
    meta: [
      { title: "FDA Deficiency Response & Additional Information (AI) Support | NKB Regovanta" },
      {
        name: "description",
        content:
          "Strategic response preparation for FDA 510(k), De Novo, and PMA Additional Information (AI) requests, hold letters, and interactive review deficiency queries.",
      },
      {
        name: "keywords",
        content:
          "FDA deficiency letter response, FDA AI hold letter, 510k deficiency response, CDRH interactive review questions, FDA response consultant, NKB Regovanta",
      },
      { property: "og:title", content: "FDA Deficiency Response & AI Support | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We deconstruct each FDA deficiency to fix the root regulatory argument — transforming hold letters into cleared medical devices.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/deficiency-response" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "FDA Deficiency Response & Additional Information (AI) Support | NKB Regovanta" },
      { name: "twitter:description", content: "Strategic response preparation for FDA 510(k), De Novo, and PMA Additional Information (AI) requests, hold letters, and interactive review deficiency queries." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/deficiency-response" }],
  }),
  component: DeficiencyResponsePage,
});

function DeficiencyResponsePage() {
  const whenNeeded = [
    "After receipt of an FDA Additional Information request",
    "During Interactive Review when FDA requests clarification or additional evidence",
    "When a predicate or substantial equivalence strategy has been challenged",
    "When testing, biocompatibility, sterilization, software, cybersecurity or labeling deficiencies are raised",
    "When the original submission was prepared internally or by another consultant and an independent technical review is needed",
  ];

  const responseMethod = [
    "Deconstruct the reviewer question",
    "Identify the root regulatory or technical concern",
    "Review the affected submission sections and source evidence",
    "Determine whether clarification, re-analysis, revised documentation or new testing is required",
    "Rebuild the affected regulatory argument where necessary",
    "Prepare a clear consolidated response with supporting evidence and cross-references",
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
              name: "FDA Additional Information & Deficiency Response",
              url: "https://www.nkbregovanta.com/services/usa/deficiency-response",
              description:
                "Expert resolution and response preparation for FDA Additional Information requests and deficiency hold letters.",
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
                { "@type": "ListItem", position: 4, name: "Deficiency Response", item: "https://www.nkbregovanta.com/services/usa/deficiency-response" },
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
            <span className="text-navy">Deficiency Response</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              <AlertCircle className="h-3.5 w-3.5" /> Fast-Track Hold Resolution
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              FDA Additional Information &amp; Deficiency Response
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We deconstruct each FDA question to identify the underlying regulatory concern, trace it back through the submission and determine whether the real issue is evidence, study design, predicate logic, labeling, consistency or presentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Send Us Your FDA Deficiency Letter for Review <ArrowRight className="h-4 w-4" />
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
              {/* What This Service Is */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <FileSearch2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  An FDA deficiency should not be answered by simply adding more information. The first task is to determine why the reviewer raised the question and what must be resolved for the review to progress.
                </p>
              </div>

              {/* When It Is Needed */}
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-navy mb-5 flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-blue-600" /> When It Is Needed
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

              {/* Our Response Method */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  Our Response Method
                </h3>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {responseMethod.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <CheckSquare className="h-5 w-5 text-[#0b3a96] shrink-0" />
                      <span className="text-[13.5px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Look For */}
              <div className="p-7 rounded-2xl bg-slate-50 border border-gray-200/80">
                <h3 className="text-lg font-extrabold text-navy mb-3">What We Look For</h3>
                <p className="text-[14px] text-navy/80 leading-relaxed font-medium">
                  We assess whether the deficiency reflects missing evidence, an unsupported claim, inadequate test design, an inappropriate predicate comparison, inconsistent labeling, contradictory documentation or simply poor presentation of existing data.
                </p>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Root-Cause Resolution at the Source
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not treat FDA comments as isolated checklist items. We trace each question to the weakness in the underlying regulatory argument and fix that weakness at source.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  FDA 180-Day AI Clock
                </h4>
                <p className="text-xs text-navy/70 leading-relaxed">
                  Upon receiving an AI hold letter, sponsors have up to <strong>180 calendar days</strong> to submit a full response before the file is deemed withdrawn by CDRH.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 text-xs font-semibold text-red-700">
                  Early deconstruction is critical to determine if new testing is required.
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Received an FDA Hold?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Send your deficiency letter for an immediate confidential technical assessment.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Send Deficiency Letter <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Need to Respond to an FDA Deficiency Letter?"
        description="Our experts will deconstruct the FDA review queries and prepare a definitive, airtight response package."
      />
    </>
  );
}
