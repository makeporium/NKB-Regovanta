import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Award,
  Sparkles,
  ArrowRight,
  Scale,
  Calendar,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/conformity-assurance")({
  head: () => ({
    meta: [
      { title: "CE Recognition & UKCA Market Access Strategy | UK MDR 2002 | NKB Regovanta" },
      {
        name: "description",
        content:
          "Strategic consulting on CE recognition in Great Britain up to 2030, UKCA marking pathways, UK Approved Body selection, transition timelines, and Northern Ireland dual-market strategy.",
      },
      {
        name: "keywords",
        content:
          "CE recognition UK 2030, UKCA marking strategy, UK MDR 2002 conformity assessment, UK Approved Body, Northern Ireland UKNI marking, NKB Regovanta",
      },
      { property: "og:title", content: "CE Recognition & UKCA Market Access Strategy | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Great Britain accepts eligible CE-marked devices under transitional rules up to 30 June 2030. We define the most defensible and resilient conformity route for your portfolio.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/conformity-assurance" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CE Recognition & UKCA Market Access Strategy | UK MDR 2002 | NKB Regovanta" },
      { name: "twitter:description", content: "Strategic consulting on CE recognition in Great Britain up to 2030, UKCA marking pathways, UK Approved Body selection, transition timelines, and Northern Ireland dual-market strategy." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/conformity-assurance" }],
  }),
  component: UKConformityAssurancePage,
});

function UKConformityAssurancePage() {
  const assessmentConsiderations = [
    "Current CE certification basis and underlying European Directive or Regulation",
    "Applicable EU legislation (EU MDR 2017/745, EU IVDR 2017/746 or legacy Directives)",
    "Device risk classification and conformity assessment annexes",
    "Validity, surveillance audits and expiry dates of relevant CE certificates",
    "Current Great Britain CE-recognition legal timelines (valid up to 30 June 2030)",
    "Potential future UK regulatory reform and international recognition frameworks",
    "Commercial and tender necessity for direct UKCA marking certification",
    "Availability, capacity and designated scope of suitable UK Approved Bodies",
    "Portfolio-level multi-year transition roadmap and budget allocation",
    "Northern Ireland Protocol implications and CE / UKNI marking interaction",
    "Dual-market packaging, labeling and IFU harmonization strategy",
  ];

  const ukcaSupportItems = [
    "UK MDR 2002 conformity assessment route determination (Part II, III or IV)",
    "UK Approved Body involvement assessment and designation scope matching",
    "Technical documentation gap analysis against UK essential requirements",
    "ISO 13485 Quality Management System readiness for UK Approved Body audit",
    "UK Declaration of Conformity (DoC) authoring and legal signing governance",
    "UKCA and UKRP labeling placement, symbology and packaging artwork design",
    "Approved Body stage 1 & stage 2 audit preparation and evidence rehearsal",
    "Transition and portfolio roadmap balancing CE recognition with UKCA rollout",
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
              name: "CE Recognition & UKCA Market Access Strategy",
              url: "https://www.nkbregovanta.com/services/uk/conformity-assurance",
              description:
                "Strategic guidance on UK CE recognition transitional arrangements and UKCA conformity certification under UK MDR 2002.",
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
                { "@type": "ListItem", position: 3, name: "United Kingdom", item: "https://www.nkbregovanta.com/services/uk" },
                { "@type": "ListItem", position: 4, name: "CE Recognition & UKCA", item: "https://www.nkbregovanta.com/services/uk/conformity-assurance" },
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
            <Link to="/services/uk" className="hover:text-navy transition-colors">United Kingdom</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">CE Recognition &amp; UKCA</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="h-3.5 w-3.5" /> UKCA vs. CE Recognition Route
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              CE Recognition &amp; UKCA Market Access Strategy
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              Great Britain currently accepts eligible CE-marked medical devices under defined transitional arrangements up to 30 June 2030, while UKCA remains an available conformity route. The appropriate strategy should be determined product by product.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Assess Your CE Recognition / UKCA Strategy <ArrowRight className="h-4 w-4" />
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
              {/* Strategic Context */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-3">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  Current Great Britain Strategic Context
                </h2>
                <p className="text-[13px] text-navy/75 leading-relaxed font-medium">
                  Eligible CE-marked devices remain accepted in Great Britain under current transitional arrangements. Devices compliant with EU MDR or EU IVDR may currently be placed on the GB market up to <strong>30 June 2030</strong>, while earlier Directive-based devices are subject to their applicable transition limits. The UK has also consulted on longer-term recognition of CE-marked devices.
                </p>
              </div>

              {/* Assessment Considerations */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  11 Strategic Assessment Considerations
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {assessmentConsiderations.map((item, idx) => (
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

              {/* UKCA Strategy Support */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h3 className="text-lg font-extrabold text-navy">
                  UKCA Certification Support Deliverables
                </h3>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {ukcaSupportItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
                    >
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[12.5px] font-medium text-navy/85">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Senior Perspective */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Senior Regulatory Perspective</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Defensible and Commercially Resilient Access
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  The decision is not "CE or UKCA?" in isolation. The real question is which route provides the most defensible and commercially resilient path for the product portfolio while maintaining simultaneous access to Great Britain, Northern Ireland and global markets.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Key Milestones
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">Up to 30 June 2030:</strong> EU MDR &amp; IVDR CE-marked devices permitted on GB market</p>
                  <p><strong className="text-navy">Northern Ireland:</strong> EU MDR/IVDR applies directly with CE or CE+UKNI</p>
                  <p><strong className="text-navy">Direct UKCA:</strong> Optional now, mandatory when CE transition lapses</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Define Your Pathway</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Evaluate whether CE recognition or UKCA certification is optimal for your portfolio.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Consult on Pathway <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Maximize Market Longevity Across Great Britain and Northern Ireland"
        description="Our regulatory strategists balance CE recognition timelines with proactive UKCA certification roadmaps."
      />
    </>
  );
}
