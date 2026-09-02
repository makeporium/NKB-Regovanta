import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ShieldAlert,
  Award,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/de-novo")({
  head: () => ({
    meta: [
      { title: "De Novo Classification & PMA Support Consultant | US FDA | NKB Regovanta" },
      {
        name: "description",
        content:
          "End-to-end consulting for US FDA De Novo classification requests and Premarket Approval (PMA) applications for novel and high-risk medical devices.",
      },
      {
        name: "keywords",
        content:
          "FDA De Novo classification, Premarket Approval PMA, novel medical device FDA, Class III medical device, special controls FDA, NKB Regovanta",
      },
      { property: "og:title", content: "De Novo & PMA Support | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "For novel or higher-risk devices, we build the regulatory strategy around the evidence FDA will need to reach a classification or approval decision.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/de-novo" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/de-novo" }],
  }),
  component: DeNovoPMAPage,
});

function DeNovoPMAPage() {
  const whenDeNovo = [
    "No appropriate legally marketed predicate exists",
    "The device is novel but may be suitable for Class I or Class II controls",
    "Risks can potentially be mitigated through general and/or special controls",
    "FDA interaction is needed to clarify classification or evidence expectations",
  ];

  const whenPMA = [
    "The device is Class III and subject to PMA requirements",
    "The device presents a higher risk profile requiring more extensive evidence",
    "Clinical evidence and manufacturing controls form a central part of the approval decision",
  ];

  const supportSteps = [
    "Pathway assessment and FDA interaction strategy",
    "Risk characterization",
    "Proposed controls for De Novo (General & Special Controls)",
    "Non-clinical evidence planning",
    "Clinical evidence strategy where applicable",
    "Software and cybersecurity documentation",
    "Human factors & usability engineering",
    "Labeling and instructions for use",
    "Quality and manufacturing considerations (QMSR compliance)",
    "Submission structure and FDA response support",
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
              name: "De Novo & PMA Support",
              url: "https://www.nkbregovanta.com/services/usa/de-novo",
              description:
                "US FDA De Novo classification requests and Premarket Approval (PMA) dossier preparation and regulatory strategy.",
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
                { "@type": "ListItem", position: 4, name: "De Novo & PMA", item: "https://www.nkbregovanta.com/services/usa/de-novo" },
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
            <span className="text-navy">De Novo &amp; PMA Support</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="h-3.5 w-3.5" /> Novel &amp; High-Risk Device Pathways
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              De Novo &amp; PMA Support
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              For novel or higher-risk devices, we build the regulatory strategy around the evidence FDA will need to reach a classification or approval decision, integrating risk, controls, non-clinical evidence, clinical evidence and FDA interaction.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Discuss De Novo / PMA Strategy <ArrowRight className="h-4 w-4" />
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
              {/* What These Pathways Are */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What These Pathways Are
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  <strong>De Novo</strong> is a classification pathway for certain novel devices where no suitable predicate exists and the risks can be addressed through appropriate controls. <strong>PMA</strong> is the premarket approval pathway for applicable Class III devices requiring a higher level of evidence to demonstrate safety and effectiveness.
                </p>
              </div>

              {/* When De Novo & PMA May Be Appropriate */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80">
                  <div className="flex items-center gap-2 mb-3 text-blue-700">
                    <Award className="h-5 w-5" />
                    <h3 className="text-base font-extrabold text-navy">When De Novo May Be Appropriate</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {whenDeNovo.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-navy/80 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80">
                  <div className="flex items-center gap-2 mb-3 text-red-700">
                    <ShieldAlert className="h-5 w-5" />
                    <h3 className="text-base font-extrabold text-navy">When PMA May Be Required</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {whenPMA.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-navy/80 font-medium">
                        <CheckCircle2 className="h-4 w-4 text-[#0b3a96] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How We Support the Strategy */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  How We Support the Strategy
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {supportSteps.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#0b3a96] shrink-0" />
                      <span className="text-[13px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Difference */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Our Difference</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Integrated Regulatory Decision Architecture
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  For De Novo and PMA, we do not treat risk, testing, clinical evidence, labeling and manufacturing as separate workstreams. We align them around the regulatory decision FDA ultimately needs to make.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Pathway Comparison
                </h4>
                <div className="space-y-4 text-xs font-medium text-navy/75">
                  <div>
                    <p className="font-bold text-navy text-sm">De Novo Pathway</p>
                    <p className="text-navy/60 mt-0.5">Creates a brand-new classification &amp; product code for future 510(k) predicates.</p>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <p className="font-bold text-navy text-sm">PMA Pathway</p>
                    <p className="text-navy/60 mt-0.5">Requires rigorous clinical trial evidence &amp; pre-approval FDA facility inspection.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Novel Device Strategy?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Establish whether your device qualifies for De Novo classification instead of a full PMA.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Discuss Novel Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Pioneering a Novel Medical Device in the US?"
        description="Our senior strategists design robust De Novo and PMA submissions that establish clinical efficacy and regulatory leadership."
      />
    </>
  );
}
