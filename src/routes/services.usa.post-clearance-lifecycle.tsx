import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Wrench,
  Sparkles,
  ArrowRight,
  HelpCircle,
  RefreshCw,
  FileCheck,
  Search,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/usa/post-clearance-lifecycle")({
  head: () => ({
    meta: [
      { title: "Post-Clearance & Medical Device Lifecycle Support | FDA | NKB Regovanta" },
      {
        name: "description",
        content:
          "FDA post-market regulatory compliance, medical device change assessment, Special 510(k) evaluation, UDI / GUDID updates, and ongoing lifecycle management.",
      },
      {
        name: "keywords",
        content:
          "FDA post clearance support, device lifecycle management, medical device change control FDA, Special 510k assessment, UDI GUDID compliance, NKB Regovanta",
      },
      { property: "og:title", content: "Post-Clearance & Device Lifecycle Support | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "We assess the regulatory impact of device changes before implementation to safeguard the basis of your existing FDA clearance.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/usa/post-clearance-lifecycle" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Post-Clearance & Medical Device Lifecycle Support | FDA | NKB Regovanta" },
      { name: "twitter:description", content: "FDA post-market regulatory compliance, medical device change assessment, Special 510(k) evaluation, UDI / GUDID updates, and ongoing lifecycle management." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa/post-clearance-lifecycle" }],
  }),
  component: PostClearanceLifecyclePage,
});

function PostClearanceLifecyclePage() {
  const whenNeeded = [
    "Design or technology changes",
    "Material or supplier changes",
    "Manufacturing site transfer",
    "Manufacturing process changes",
    "Sterilization or packaging changes",
    "Shelf-life changes",
    "Software or cybersecurity changes",
    "Labeling or indications-for-use changes",
    "Performance specification changes",
  ];

  const howWeAssess = [
    "What exactly is changing and why?",
    "Does the intended use or indication change?",
    "Do technological characteristics change?",
    "Could safety, effectiveness or performance be affected?",
    "Is verification or validation required?",
    "Does the change remain within the basis of the original clearance?",
    "Is internal documentation sufficient, or is a Special 510(k), Traditional 510(k) or other action needed?",
  ];

  const ongoingSupport = [
    "Change assessments & regulatory justification memos",
    "Labeling and UDI-related updates (GUDID management)",
    "Registration and listing updates",
    "Product line extensions & accessory additions",
    "Post-market regulatory documentation",
    "Future submission strategy",
    "Regulatory documentation maintenance",
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
              name: "Post-Clearance & Device Lifecycle Support",
              url: "https://www.nkbregovanta.com/services/usa/post-clearance-lifecycle",
              description:
                "US FDA medical device change control assessment, Special 510(k) determination, and ongoing post-market lifecycle compliance.",
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
                { "@type": "ListItem", position: 4, name: "Device Lifecycle", item: "https://www.nkbregovanta.com/services/usa/post-clearance-lifecycle" },
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
            <span className="text-navy">Post-Clearance &amp; Lifecycle</span>
          </div>

          <Link
            to="/services/usa"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to US FDA Services
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Wrench className="h-3.5 w-3.5" /> Ongoing Post-Market Compliance
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Post-Clearance &amp; Device Lifecycle Support
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We assess the regulatory impact of device changes before implementation — focusing on whether the modification affects intended use, technological characteristics, safety, effectiveness, performance or the basis of the original clearance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Assess a Device Change <ArrowRight className="h-4 w-4" />
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
                    <RefreshCw className="h-5 w-5 text-[#0b3a96]" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                    What This Service Is
                  </h2>
                </div>
                <p className="text-[14.5px] text-navy/80 leading-relaxed font-medium">
                  FDA clearance or authorization is not the end of regulatory responsibility. Devices change over time, and each material change should be assessed to determine whether additional verification, documentation or a new FDA submission may be required.
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

              {/* How We Assess a Change */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  How We Assess a Change
                </h3>
                <div className="grid grid-cols-1 gap-3 pt-2">
                  {howWeAssess.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-center gap-3"
                    >
                      <Search className="h-4.5 w-4.5 text-[#0b3a96] shrink-0" />
                      <span className="text-[13.5px] font-bold text-navy">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ongoing Lifecycle Support */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy tracking-tight">
                  Ongoing Lifecycle Support
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {ongoingSupport.map((item, idx) => (
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
                  Proactive Regulatory Clarity Before Change Implementation
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We help manufacturers make the regulatory decision before the change is implemented, rather than discovering later that the modification altered the basis of the existing clearance.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Change Pathways
                </h4>
                <ul className="space-y-3 text-xs font-medium text-navy/75">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Internal Letter-to-File (Justified &amp; Documented)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Special 510(k) (30-day review for design changes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>Traditional 510(k) (New performance / intended use)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Planning a Product Change?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Evaluate whether your modification triggers a new 510(k) or can be documented internally.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Assess a Device Change <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Need to Evaluate a Medical Device Modification?"
        description="Our regulatory experts prepare defensible change control rationales and Special 510(k) submissions."
      />
    </>
  );
}
