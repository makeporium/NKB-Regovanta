import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Scale,
  HelpCircle,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/classification")({
  head: () => ({
    meta: [
      { title: "EU MDR & IVDR Qualification & Classification Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Strategic qualification and risk-based classification under EU MDR 2017/745 (Class I, IIa, IIb, III) and EU IVDR 2017/746 (Class A, B, C, D Rules 1-7).",
      },
      {
        name: "keywords",
        content:
          "EU MDR classification rules, EU IVDR classification rules 1-7, medical device qualification Europe, IVD qualification, MDR conformity assessment routes, NKB Regovanta",
      },
      { property: "og:title", content: "EU MDR & IVDR Qualification & Classification | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We establish the regulatory basis before technical documentation is developed — determining conformity routes, Notified Body involvement, and evidence burden.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/classification" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/classification" }],
  }),
  component: EUClassificationPage,
});

function EUClassificationPage() {
  const mdrItems = [
    "Qualification as a medical device under the MDR framework",
    "Intended purpose and clinical claims review",
    "Application of MDR classification rules, including software (Rule 11) and special rules",
    "Assessment of Class I, Is, Im, Ir, IIa, IIb and III pathways",
    "Implantable, active, software, substance-based and custom-made device considerations",
    "Conformity assessment route and Notified Body involvement",
    "Borderline / combination-product considerations where relevant",
  ];

  const ivdrItems = [
    "Qualification as an In Vitro Diagnostic (IVD)",
    "Intended purpose, analyte/marker, population and clinical context review",
    "Application of IVDR Rules 1–7",
    "Assessment of Class A, B, C and D pathways",
    "Multiple intended purposes and higher-class rule considerations",
    "Companion diagnostic and high-risk classification considerations",
    "Conformity assessment strategy, including higher-risk review expectations",
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
              name: "Regulatory Strategy, Qualification & Classification EU MDR & IVDR",
              url: "https://www.nkbregovanta.com/services/eu/classification",
              description:
                "Strategic qualification and classification of medical devices and IVDs under EU MDR 2017/745 and EU IVDR 2017/746.",
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
                { "@type": "ListItem", position: 4, name: "Classification", item: "https://www.nkbregovanta.com/services/eu/classification" },
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
            <span className="text-navy">Qualification &amp; Classification</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="h-3.5 w-3.5" /> Early Regulatory Foundation
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Regulatory Strategy, Qualification &amp; Classification
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Correct qualification and classification determine the conformity assessment route, Notified Body involvement, evidence burden, QMS expectations and post-market obligations. NKB Regovanta establishes the regulatory basis before technical documentation is developed.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Define Your EU Regulatory Pathway <ArrowRight className="h-4 w-4" />
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
              {/* MDR Medical Devices */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <ShieldCheck className="h-5 w-5 text-[#0b3a96]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    For MDR Medical Devices
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {mdrItems.map((item, idx) => (
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

              {/* IVDR In Vitro Diagnostics */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                    <FlaskConical className="h-5 w-5 text-[#b45309]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    For IVDR In Vitro Diagnostics
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {ivdrItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#b45309] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior-Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior-Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Classification Drives the Entire Evidence Roadmap
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not stop at &ldquo;what class is the product?&rdquo; We ask what the classification means for evidence, clinical studies, QMS scope, Notified Body scrutiny, timelines and lifecycle obligations — and build the roadmap from that decision.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Conformity Route Matrix
                </h4>
                <div className="space-y-3.5 text-xs font-medium text-navy/75">
                  <div>
                    <p className="font-bold text-navy">MDR Annex IX / X / XI</p>
                    <p className="text-navy/60 mt-0.5">QMS assessment, technical documentation assessment &amp; product verification routes.</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="font-bold text-navy">IVDR Annex IX / X / XI</p>
                    <p className="text-navy/60 mt-0.5">Over 85% of IVDs now require Notified Body certification under Rules 1–7.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Need Classification Strategy?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Establish defensible MDR &amp; IVDR classification rules before investing in dossier compilation.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Define Pathway <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish Your EU Regulatory Identity with Absolute Certainty"
        description="Partner with our senior regulatory strategists to classify your device and select the optimal conformity assessment route."
      />
    </>
  );
}
