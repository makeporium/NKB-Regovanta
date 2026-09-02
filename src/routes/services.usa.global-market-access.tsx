import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Globe2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  TrendingUp,
  Layers,
  Compass,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/global-market-access")({
  head: () => ({
    meta: [
      { title: "Planning for Global Market Access | Harmonized Regulatory Strategy | NKB Regovanta" },
      {
        name: "description",
        content:
          "Harmonized global regulatory planning for US FDA, EU MDR/IVDR, India CDSCO, UK MHRA, Australia TGA, and Health Canada. One aligned evidence and testing plan.",
      },
      {
        name: "keywords",
        content:
          "global market access medical devices, regulatory harmonization, FDA and EU MDR strategy, CDSCO and TGA alignment, multi-market regulatory roadmap, NKB Regovanta",
      },
      { property: "og:title", content: "Planning for Global Market Access | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We plan regulatory evidence across target markets so common testing and technical documentation can be leveraged strategically across US, EU, India and APAC.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/global-market-access" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/global-market-access" }],
  }),
  component: GlobalMarketAccessPage,
});

function GlobalMarketAccessPage() {
  const whenNeeded = [
    "When the same Medical Device or IVD is planned for US, EU, India or other markets",
    "Before major testing programs are initiated",
    "When the manufacturer wants to avoid repeating equivalent studies for different jurisdictions",
    "When existing technical documentation must be adapted for additional markets",
    "When manufacturing and quality planning must support international expansion",
  ];

  const evidenceToAlign = [
    "Biocompatibility (ISO 10993 global standards)",
    "Sterilization validation (ISO 11135 / 11137)",
    "Packaging and shelf life (ISO 11607 / ASTM)",
    "Electrical safety and EMC (IEC 60601 family)",
    "Software and cybersecurity (IEC 62304 / FDA guidance)",
    "Risk management file (ISO 14971)",
    "Human factors & usability engineering (IEC 62366)",
    "Performance testing & bench studies",
    "Clinical evidence & Clinical Evaluation Reports (CER / PER)",
    "IVD analytical and clinical performance",
    "Quality-system documentation (MDSAP / ISO 13485 / QMSR)",
    "Technical documentation / STED dossiers",
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
              name: "Planning for Global Market Access",
              url: "https://www.nkbregovanta.com/services/usa/global-market-access",
              description:
                "Harmonized multi-market regulatory strategy and evidence alignment across US FDA, EU MDR, CDSCO, and international health authorities.",
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
                { "@type": "ListItem", position: 4, name: "Global Market Access", item: "https://www.nkbregovanta.com/services/usa/global-market-access" },
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
            <span className="text-navy">Global Market Access</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Globe2 className="h-3.5 w-3.5" /> Harmonized Multi-Market Strategy
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Planning for Global Market Access
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We plan regulatory evidence across target markets so common testing and technical documentation can be leveraged where scientifically and regulatorily appropriate, while market-specific gaps are identified early.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Build Your Global Regulatory Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Highlight Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-navy to-blue-950 text-white shadow-md text-center sm:text-left">
                <p className="text-xs uppercase font-extrabold text-blue-300 tracking-widest mb-1.5">Strategic Alignment</p>
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  One Product. Multiple Markets. One Strategically Aligned Evidence Plan.
                </h3>
              </div>

              {/* What This Service Is */}
              <div className="bg-surface/40 p-7 sm:p-8 rounded-2xl border border-gray-200/80">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-navy shrink-0">
                    <Compass className="h-5 w-5 text-[#0b3a96]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  A product intended for several markets should not automatically become several unrelated regulatory projects. A coordinated evidence strategy can reduce duplication and improve consistency while still respecting jurisdiction-specific requirements.
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

              {/* Our Regulatory Planning Model */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  Our Regulatory Planning Model
                </h3>
                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200">
                  <p className="text-[14px] sm:text-[15px] font-extrabold text-navy text-center sm:text-left leading-relaxed">
                    Target Markets → Regulatory Requirements → Common Evidence → Market-Specific Gaps → Submission Strategy
                  </p>
                </div>
              </div>

              {/* Evidence We Evaluate for Alignment */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  Evidence We Evaluate for Alignment
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {evidenceToAlign.map((item, idx) => (
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
                  True Cross-Jurisdiction Evidence Leverage
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not simply list countries where registration is possible. We identify which evidence can legitimately be leveraged across markets and which regulatory gaps remain market-specific.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Global Target Jurisdictions
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>United States (US FDA 510(k), De Novo, PMA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>European Union (EU MDR 2017/745, IVDR 2017/746)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>India (CDSCO Medical Device Rules 2017)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>UK, Australia, Canada, Brazil, Saudi Arabia &amp; UAE</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Multi-Country Launch?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Design your testing and technical documentation once to serve multiple global health authorities.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Build Global Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Ready to Plan Your Multi-Market Regulatory Roadmap?"
        description="Our international regulatory consultants align your evidence strategy to accelerate worldwide approvals."
      />
    </>
  );
}
