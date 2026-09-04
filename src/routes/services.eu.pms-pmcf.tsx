import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Shield,
  Sparkles,
  ArrowRight,
  RefreshCw,
  AlertTriangle,
  Activity,
  FileText,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/pms-pmcf")({
  head: () => ({
    meta: [
      { title: "EU MDR PMCF, PMS, PSUR & Vigilance Consultant | NKB Regovanta" },
      {
        name: "description", content: "EU MDR Post-Market Clinical Follow-Up (PMCF) consulting. PMCF plan and report preparation per MEDDEV 2.12/2, clinical data gap analysis, registry study design, literature surveillance protocol, and PSUR compilation for EU MDR-compliant devices.",
      },
      {
        name: "keywords",
        content:
          "EU MDR PMS plan, MDR PSUR periodic safety update report, PMCF plan evaluation report, MDR vigilance serious incidents, FSCA field safety corrective action, NKB Regovanta",
      },
      { property: "og:title", content: "MDR PMCF, PMS, PSUR & Vigilance | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Post-market is an active evidence system, not an annual documentation exercise. We connect complaints, trends, risk, and CER updates.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/pms-pmcf" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "EU MDR PMCF, PMS, PSUR & Vigilance Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "EU MDR Post-Market Clinical Follow-Up (PMCF) consulting. PMCF plan and report preparation per MEDDEV 2.12/2, clinical data gap analysis, registry study design, literature surveillance protocol, and PSUR compilation fo..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/pms-pmcf" }],
  }),
  component: EUPMSPMCFPage,
});

function EUPMSPMCFPage() {
  const lifecycleModel = [
    { num: "01", label: "Complaints & PMS Inputs" },
    { num: "02", label: "Signal & Trend Review" },
    { num: "03", label: "Risk Management Update" },
    { num: "04", label: "CAPA & Change Control" },
    { num: "05", label: "CER & PMCF Update" },
    { num: "06", label: "Technical File Update" },
  ];

  const supportAreas = [
    "PMS Plan and PMS Report compilation (Class I devices)",
    "PSUR strategy and preparation (Class IIa, IIb and III devices per Article 86)",
    "PMCF Plan targeted specifically to residual clinical uncertainties",
    "PMCF Evaluation Report authoring and integration with CER",
    "Statistical trend reporting and safety signal evaluation",
    "Serious incident and vigilance assessment under Article 87",
    "Field Safety Corrective Action (FSCA) strategy, FSN and documentation",
    "Complaint data evaluation and direct linkage to ISO 14971 risk files",
    "CAPA linkage and corrective action effectiveness evaluation",
    "CER update triggers and continuous clinical evidence maintenance",
    "Summary of Safety & Clinical Performance (SSCP) annual updates",
    "Periodic review of marketing claims and benefit-risk acceptability",
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
              name: "MDR PMCF, PMS, PSUR & Vigilance Consulting",
              url: "https://www.nkbregovanta.com/services/eu/pms-pmcf",
              description:
                "Post-Market Surveillance, PMCF execution, PSUR compilation, and vigilance reporting under EU MDR 2017/745.",
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
                { "@type": "ListItem", position: 4, name: "PMS & PMCF", item: "https://www.nkbregovanta.com/services/eu/pms-pmcf" },
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
            <span className="text-navy">PMS, PMCF, PSUR &amp; Vigilance</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <RefreshCw className="h-3.5 w-3.5" /> Active Lifecycle Evidence
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              MDR PMCF, PMS, PSUR &amp; Vigilance
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Post-market is an active evidence system, not an annual documentation exercise. We connect post-market clinical data to risk management, CAPA, CER and technical file maintenance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Strengthen Your MDR Post-Market System <ArrowRight className="h-4 w-4" />
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
              {/* Lifecycle Feedback Model */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  The Closed-Loop Lifecycle Feedback Model
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2">
                  {lifecycleModel.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 12 Support Areas */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  12 Key Post-Market Compliance Deliverables
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {supportAreas.map((item, idx) => (
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

              {/* Senior Regulatory View */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior Regulatory View</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Explain What New Clinical Knowledge Was Learned
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  A mature PMS system must clearly answer: What new clinical information was learned? Did the benefit-risk profile shift? Does the clinical evidence remain sufficient? And what updates were triggered in the technical documentation or labeling?
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  PSUR Submission Frequencies
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">Class III &amp; Implantable:</strong> Annual update + EUDAMED upload</p>
                  <p><strong className="text-navy">Class IIb:</strong> Annual update</p>
                  <p><strong className="text-navy">Class IIa:</strong> At least every 2 years</p>
                  <p><strong className="text-navy">Class I:</strong> PMS Report updated when necessary</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">PSUR / PMCF Support</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Draft robust PSURs and PMCF evaluation reports to maintain CE mark validity.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Prepare PSUR Report <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maintain Seamless Post-Market Compliance Across the Device Lifecycle"
        description="Our post-market specialists establish closed-loop feedback systems that safeguard your CE mark certification."
      />
    </>
  );
}
