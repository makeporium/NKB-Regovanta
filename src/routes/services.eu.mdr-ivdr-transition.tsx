import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  RefreshCw,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
  Clock,
  Layers,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/mdr-ivdr-transition")({
  head: () => ({
    meta: [
      { title: "MDD to MDR & IVDD to IVDR Legacy Transition Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU MDR Article 120 & IVDR Article 110 legacy transition consulting, gap analysis, technical documentation remediation, CER/PER upgrades, and Notified Body recertification.",
      },
      {
        name: "keywords",
        content:
          "MDD to MDR transition, IVDD to IVDR transition, Article 120 MDR extension, legacy medical devices Europe, MDR gap analysis, Notified Body recertification, NKB Regovanta",
      },
      { property: "og:title", content: "MDD/AIMDD to MDR & IVDD to IVDR Transition | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We distinguish documentation gaps from true evidence and strategy gaps — preventing unnecessary rewriting and focusing remediation on what affects CE conformity.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/mdr-ivdr-transition" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MDD to MDR & IVDD to IVDR Legacy Transition Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "Senior EU MDR Article 120 & IVDR Article 110 legacy transition consulting, gap analysis, technical documentation remediation, CER/PER upgrades, and Notified Body recertification." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/mdr-ivdr-transition" }],
  }),
  component: EULegacyTransitionPage,
});

function EULegacyTransitionPage() {
  const transitionSteps = [
    "Classification reassessment against MDR Annex VIII / IVDR Annex VIII rules",
    "Conformity-assessment route impact & Notified Body scope confirmation",
    "Annex II / III technical file gap assessment against new regulatory mandates",
    "General Safety and Performance Requirements (GSPR) checklist remediation",
    "ISO 14971 risk-management file overhaul & state-of-the-art updates",
    "Clinical Evaluation (CER) / Performance Evaluation (PER) evidence gap closure",
    "PMS, PMCF / PMPF, and PSUR infrastructure remediation",
    "QMS updates aligned with MDR Article 10 & IVDR Article 10 mandates",
    "Labeling, symbol updates, Basic UDI-DI assignment & EUDAMED readiness",
    "Notified Body formal transition application, scheduling & audit defense",
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
              name: "MDD to MDR & IVDD to IVDR Legacy Transition Consulting",
              url: "https://www.nkbregovanta.com/services/eu/mdr-ivdr-transition",
              description:
                "Gap analysis, technical documentation remediation, and Notified Body recertification under EU MDR 2017/745 and IVDR 2017/746 transitional provisions.",
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
                { "@type": "ListItem", position: 4, name: "Legacy Transition", item: "https://www.nkbregovanta.com/services/eu/mdr-ivdr-transition" },
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
            <span className="text-navy">Legacy Transition Support</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <RefreshCw className="h-3.5 w-3.5" /> Article 120 &amp; Article 110 Compliance
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              MDD/AIMDD to MDR &amp; IVDD to IVDR Transition
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Transitioning legacy products to the MDR/IVDR framework requires methodical gap identification across clinical data, risk management and GSPR evidence. We upgrade your legacy files into audit-ready CE packages.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Assess Your Transition Roadmap <ArrowRight className="h-4 w-4" />
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
              {/* Transition Roadmap */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  10-Point Transition Remediation Program
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {transitionSteps.map((item, idx) => (
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

              {/* Senior-Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior-Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Distinguish Documentation Gaps from True Evidence Gaps
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We distinguish cosmetic documentation gaps from genuine clinical evidence gaps and regulatory strategy gaps. That prevents unnecessary, expensive rewriting and focuses your remediation budget exactly on what affects conformity and certification.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Transition Deadline Milestones
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">Regulation (EU) 2023/607:</strong> Extended MDR transition deadlines apply only if formal Notified Body applications and QMS agreements are signed in time.</p>
                  <p><strong className="text-navy">Regulation (EU) 2024/1860:</strong> Phased IVDR transition deadlines contingent on active QMS and Notified Body lodgement.</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Legacy File Remediation</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Protect your market revenue by securing timely transition to MDR/IVDR.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Schedule Gap Analysis <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Seamlessly Transition Your European Legacy Medical Devices &amp; IVDs"
        description="Our remediation experts transform legacy Directive files into audit-ready MDR and IVDR conformity packages."
      />
    </>
  );
}
