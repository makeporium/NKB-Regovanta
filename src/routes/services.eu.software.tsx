import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Lock,
  FileCode,
  Layers,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/software")({
  head: () => ({
    meta: [
      { title: "EU MDR & IVDR Medical Device Software (SaMD) & Cybersecurity Consultant | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior EU MDR Rule 11 & IVDR Software as a Medical Device (SaMD) regulatory consulting, IEC 62304 lifecycle documentation, MDCG 2019-16 cybersecurity, and clinical validation.",
      },
      {
        name: "keywords",
        content:
          "MDR Rule 11 software classification, SaMD Europe EU MDR, IEC 62304 software lifecycle, MDCG 2019-16 cybersecurity medical devices, AI in medical devices Europe, NKB Regovanta",
      },
      { property: "og:title", content: "Medical Device Software (SaMD) & Cybersecurity | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We trace medical function into classification, risk, IEC 62304 lifecycle V&V, MDCG 2019-16 cybersecurity, and clinical evidence.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/software" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/software" }],
  }),
  component: EUSoftwarePage,
});

function EUSoftwarePage() {
  const softwareItems = [
    "Software qualification as medical device / IVD and Rule 11 classification strategy",
    "Software lifecycle planning strictly aligned with IEC 62304 (Class A, B, C)",
    "Software architecture, SOUP / OTS third-party software and configuration management",
    "Software requirements, verification, code review and automated validation testing",
    "Usability engineering and user-interface risk mitigation (IEC 62366-1)",
    "Cybersecurity risk management and secure development lifecycle (MDCG 2019-16)",
    "Interoperability, cloud/mobile environments and data-interface validation",
    "Clinical evaluation / performance evaluation of algorithmic and AI/ML functions",
    "PMS strategy for software versioning, vulnerability monitoring and OTA field updates",
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
              name: "EU MDR & IVDR Medical Device Software (SaMD) & Cybersecurity",
              url: "https://www.nkbregovanta.com/services/eu/software",
              description:
                "Regulatory consulting for medical device software, SaMD, AI/ML algorithms, IEC 62304 compliance, and MDCG 2019-16 cybersecurity.",
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
                { "@type": "ListItem", position: 4, name: "Software & SaMD", item: "https://www.nkbregovanta.com/services/eu/software" },
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
            <span className="text-navy">Software, SaMD &amp; Cybersecurity</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Cpu className="h-3.5 w-3.5" /> IEC 62304 &amp; Rule 11 Architecture
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Medical Device Software, SaMD &amp; Cybersecurity
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Under MDR Rule 11 and IVDR, standalone software frequently up-classifies to Class IIa, IIb or Class C. We build the complete technical file connecting medical function, software architecture, risk controls and clinical evaluation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Discuss Your EU Software Regulatory Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Scope */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  Software Lifecycle &amp; Cybersecurity Deliverables
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {softwareItems.map((item, idx) => (
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

              {/* Reviewer Lens */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Reviewer Lens</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Link Medical Function Directly to Verification &amp; Clinical Claims
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  A software technical file can be technically complete with code repositories and unit tests, but still face severe Notified Body pushback if the intended medical function, classification rules, risk controls and clinical/performance claims are not consistently harmonized.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Applicable European Guidance
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p>• <strong className="text-navy">MDCG 2019-11:</strong> Qualification &amp; Classification of Software</p>
                  <p>• <strong className="text-navy">MDCG 2019-16:</strong> Cybersecurity Requirements</p>
                  <p>• <strong className="text-navy">MDCG 2020-1:</strong> Clinical Evaluation of SaMD</p>
                  <p>• <strong className="text-navy">IEC 62304 &amp; IEC 82304-1:</strong> Health Software</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">SaMD Pre-Assessment</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Evaluate your software architecture and cybersecurity documentation before Notified Body review.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Review Software File <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Bring Compliant Medical Device Software to the European Market"
        description="Our software regulatory engineers bridge the gap between agile coding sprints and strict Notified Body compliance."
      />
    </>
  );
}
