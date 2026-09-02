import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FlaskConical,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Scale,
  Microscope,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ivdr-classification")({
  head: () => ({
    meta: [
      { title: "EU IVDR Classification & Conformity Assessment Consultant | Rules 1-7 | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU IVDR 2017/746 qualification and risk classification consulting across Class A, B, C, and D under Annex VIII Rules 1–7, companion diagnostics, and conformity assessment pathways.",
      },
      {
        name: "keywords",
        content:
          "EU IVDR classification rules 1 to 7, IVDR Annex VIII, Class A B C D IVD Europe, companion diagnostics CDx IVDR, Notified Body IVDR route, NKB Regovanta",
      },
      { property: "og:title", content: "IVDR Classification & Conformity Assessment | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We establish the defensible reasoning chain from analyte and intended purpose to IVDR Rules 1–7 and evidence burden.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ivdr-classification" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ivdr-classification" }],
  }),
  component: EUIVDRClassificationPage,
});

function EUIVDRClassificationPage() {
  const classificationItems = [
    "Intended purpose, target analyte / biological marker and specimen type review",
    "Target clinical population, user environment and medical decision context",
    "Application of IVDR Annex VIII Rules 1–7 across all assay components",
    "Application of the strictest rule where multiple intended purposes or rules apply",
    "Companion diagnostic (CDx) classification and medicinal product co-development strategy",
    "Near-patient testing (NPT) and self-testing regulatory scrutiny and usability impacts",
    "Software qualification (standalone vs accessory) and IVD algorithm classification",
    "Class A (sterile vs non-sterile), Class B, Class C and Class D conformity assessment selection",
    "Notified Body designation code matching and review capacity planning",
    "Performance evaluation depth and ongoing post-market obligations driven by class",
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
              name: "IVDR Classification & Conformity Assessment Consulting",
              url: "https://www.nkbregovanta.com/services/eu/ivdr-classification",
              description:
                "Expert qualification, risk-based classification under Rules 1–7, and conformity assessment planning under Regulation (EU) 2017/746.",
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
                { "@type": "ListItem", position: 4, name: "IVDR Classification", item: "https://www.nkbregovanta.com/services/eu/ivdr-classification" },
              ],
            },
          ]),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu" className="hover:text-navy transition-colors">European Union</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services/eu/ivdr" className="hover:text-navy transition-colors">EU IVDR</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">IVDR Classification</span>
          </div>

          <Link
            to="/services/eu/ivdr"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU IVDR Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <FlaskConical className="h-3.5 w-3.5" /> Annex VIII Rules 1–7
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              IVDR Classification &amp; Conformity Assessment
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Under IVDR, over 85% of all in vitro diagnostic assays require Notified Body certification. We establish the exact reasoning chain from analyte, specimen and intended purpose to Annex VIII classification rules and evidence burden.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#123820] text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-[#0a2012] transition-all shadow-sm"
              >
                Define Your IVDR Regulatory Pathway <ArrowRight className="h-4 w-4" />
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
              {/* Classification Strategy Deliverables */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  IVDR Classification Strategy Scope
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {classificationItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#059669] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[13px] font-medium text-navy/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior-Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#123820] to-[#091a0f] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior-Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Harmonized Logic from Rule to PER &amp; Labeling
                </h3>
                <p className="text-[13.5px] text-emerald-100/90 leading-relaxed font-normal">
                  We assess not only the rule outcome, but the exact reasoning chain from intended purpose to classification and then to the evidence burden. That rationale remains rock-solid in the technical documentation, PER, labeling and EUDAMED registration data.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  IVDR Risk Class Summary
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">Class A:</strong> General lab products &amp; instruments (Self-declaration unless sterile)</p>
                  <p><strong className="text-navy">Class B:</strong> General IVDs &amp; self-tests without critical risk</p>
                  <p><strong className="text-navy">Class C:</strong> Infectious agents, cancer markers, prenatal &amp; CDx</p>
                  <p><strong className="text-navy">Class D:</strong> High-risk blood screening, life-threatening pathogens (EURL scope)</p>
                </div>
              </div>

              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Classify Your IVD Assay</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Establish defensible IVDR classification rationales before commissioning expensive laboratory studies.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#123820] hover:bg-[#0a2012] text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Classify Your Assay <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Establish an Unshakeable IVDR Classification &amp; Conformity Strategy"
        description="Our IVD specialists analyze your assay markers, clinical claims, and risk class under Regulation (EU) 2017/746."
      />
    </>
  );
}
