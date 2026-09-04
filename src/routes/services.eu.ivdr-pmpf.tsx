import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ArrowRight,
  RefreshCw,
  FlaskConical,
  Activity,
  AlertTriangle,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ivdr-pmpf")({
  head: () => ({
    meta: [
      { title: "EU IVDR PMPF, PMS, PSUR & Vigilance Consultant | NKB Regovanta" },
      {
        name: "description", content: "EU IVDR Post-Market Performance Follow-Up (PMPF) consulting. PMPF plan and report preparation, performance data gap analysis, proficiency testing program design, and IVD surveillance strategy for IVDR-compliant in vitro diagnostic devices in Europe.",
      },
      {
        name: "keywords",
        content:
          "IVDR PMPF plan, IVDR PSUR periodic safety update report, post-market performance follow-up Europe, IVDR vigilance, PER annual update, NKB Regovanta",
      },
      { property: "og:title", content: "IVDR PMPF, PMS, PSUR & Vigilance | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Performance evaluation continues after CE marking. PMPF should be designed to confirm specific residual performance questions.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ivdr-pmpf" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU IVDR PMPF, PMS, PSUR & Vigilance Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "EU IVDR Post-Market Performance Follow-Up (PMPF) consulting. PMPF plan and report preparation, performance data gap analysis, proficiency testing program design, and IVD surveillance strategy for IVDR-compliant in vit..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ivdr-pmpf" }],
  }),
  component: EUIVDRPMPFPage,
});

function EUIVDRPMPFPage() {
  const loopSteps = [
    { num: "01", label: "PMS / Complaint Data" },
    { num: "02", label: "Performance Signals" },
    { num: "03", label: "Risk Management Update" },
    { num: "04", label: "PMPF Execution" },
    { num: "05", label: "PER Annual Update" },
    { num: "06", label: "Claims / Labeling / CAPA" },
  ];

  const supportItems = [
    "PMS Plan and PMS Report compilation (Class A and Class B IVDs)",
    "PSUR strategy and annual/biennial preparation (Class C and Class D IVDs per Article 81)",
    "PMPF Plan linked directly to residual analytical and clinical uncertainties",
    "PMPF Evaluation Report authoring and integration into the PER",
    "Scientific validity surveillance & state-of-the-art literature monitoring",
    "Analytical performance trend monitoring across commercial reagent lots",
    "Real-world clinical performance monitoring and user feedback analysis",
    "Complaint data evaluation, signal detection and statistical trending",
    "Vigilance, serious incident assessment and Competent Authority reporting under Article 82",
    "Field Safety Corrective Action (FSCA) and Field Safety Notice (FSN) support",
    "ISO 14971 risk management file updates based on post-market findings",
    "Summary of Safety & Performance (SSP) annual updates for Class C & D devices",
    "Design and reagent change-control linkage to maintain certified status",
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
              name: "IVDR PMPF, PMS, PSUR & Vigilance Consulting",
              url: "https://www.nkbregovanta.com/services/eu/ivdr-pmpf",
              description:
                "Post-Market Performance Follow-up (PMPF), PMS planning, PSUR reporting, and vigilance compliance under EU IVDR 2017/746.",
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
                { "@type": "ListItem", position: 4, name: "EU IVDR", item: "https://www.nkbregovanta.com/services/eu/ivdr" },
                { "@type": "ListItem", position: 5, name: "IVDR PMPF & PMS", item: "https://www.nkbregovanta.com/services/eu/ivdr-pmpf" },
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
            <span className="text-navy">PMPF &amp; Post-Market</span>
          </div>

          <Link
            to="/services/eu/ivdr"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU IVDR Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <RefreshCw className="h-3.5 w-3.5" /> Annex XIII Part B &amp; Articles 78–86
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              IVDR PMPF, PMS, PSUR &amp; Vigilance
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Performance evaluation does not end at CE marking. Post-Market Performance Follow-up (PMPF) is a proactive evidence engine designed to confirm or further characterize specific diagnostic performance questions throughout the commercial lifecycle.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#123820] text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-[#0a2012] transition-all shadow-sm"
              >
                Strengthen Your IVDR Post-Market Evidence <ArrowRight className="h-4 w-4" />
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
              {/* Lifecycle Evidence Loop */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  The Closed-Loop Lifecycle Evidence Cycle
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {loopSteps.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-emerald-700 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 13 Support Areas */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  13 Key IVDR Post-Market Compliance Deliverables
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {supportItems.map((item, idx) => (
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

              {/* Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#123820] to-[#091a0f] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-emerald-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Targeted Post-Market Evidence, Not Generic Surveys
                </h3>
                <p className="text-[13.5px] text-emerald-100/90 leading-relaxed font-normal">
                  PMPF must not be generic customer satisfaction surveys. It should be specifically designed to confirm or further characterize the defined analytical and clinical performance questions that remain after initial CE marking.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  PSUR Deadlines (Article 81)
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">Class D IVDs:</strong> Annual PSUR + EUDAMED upload + Notified Body review</p>
                  <p><strong className="text-navy">Class C IVDs:</strong> Annual PSUR update</p>
                  <p><strong className="text-navy">Class A &amp; B IVDs:</strong> PMS Report updated as necessary</p>
                </div>
              </div>

              <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Draft Your IVDR PSUR</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Ensure timely submission of compliant IVDR PSUR and PMPF evaluation reports.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-[#123820] hover:bg-[#0a2012] text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request PMPF Support <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Defensible Real-World Evidence for Your IVD Portfolio"
        description="Our post-market scientists establish proactive PMPF and PMS frameworks that preserve CE mark certification."
      />
    </>
  );
}
