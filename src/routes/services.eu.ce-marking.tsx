import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Award,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Globe2,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ce-marking")({
  head: () => ({
    meta: [
      { title: "CE Marking & EU Registration Consultant | MDR & IVDR | NKB Regovanta" },
      {
        name: "description",
        content:
          "End-to-end CE Marking consulting for Medical Devices and IVDs. EU Declaration of Conformity, Notified Body CE certificates, UDI compliance, and EUDAMED registration.",
      },
      {
        name: "keywords",
        content:
          "CE marking medical devices Europe, EU Declaration of Conformity DoC, CE marking IVD, CE certificate MDR, EU registration, NKB Regovanta",
      },
      { property: "og:title", content: "CE Marking & EU Registration | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "CE marking managed as the outcome of classification, conformity assessment, evidence, technical documentation, QMS and Notified Body review.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ce-marking" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CE Marking & EU Registration Consultant | MDR & IVDR | NKB Regovanta" },
      { name: "twitter:description", content: "End-to-end CE Marking consulting for Medical Devices and IVDs. EU Declaration of Conformity, Notified Body CE certificates, UDI compliance, and EUDAMED registration." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ce-marking" }],
  }),
  component: EUCEMarkingPage,
});

function EUCEMarkingPage() {
  const ceSequence = [
    { num: "01", label: "Qualification" },
    { num: "02", label: "Classification" },
    { num: "03", label: "Conformity Assessment" },
    { num: "04", label: "Evidence & Testing" },
    { num: "05", label: "Technical Documentation" },
    { num: "06", label: "QMS / Notified Body" },
    { num: "07", label: "Declaration of Conformity" },
    { num: "08", label: "CE Marking Affixed" },
    { num: "09", label: "Registration / UDI" },
    { num: "10", label: "Lifecycle Compliance" },
  ];

  const supportItems = [
    "Conformity assessment route selection (Annex IX, X, XI)",
    "Notified Body CE certification management & audit liaison",
    "EU Declaration of Conformity (DoC) drafting and legal verification",
    "CE mark graphic, labeling, IFU and symbol alignment (ISO 15223-1)",
    "Basic UDI-DI and UDI-DI assignment & verification",
    "EUDAMED actor registration & device registration data",
    "Economic operator mandate review (Manufacturer, EC REP, Importer)",
    "Ongoing CE certificate maintenance & annual renewal strategy",
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
              name: "CE Marking & EU Registration Consulting",
              url: "https://www.nkbregovanta.com/services/eu/ce-marking",
              description:
                "Comprehensive CE marking guidance, Declaration of Conformity preparation, and European market access.",
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
                { "@type": "ListItem", position: 4, name: "CE Marking", item: "https://www.nkbregovanta.com/services/eu/ce-marking" },
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
            <span className="text-navy">CE Marking &amp; Registration</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="h-3.5 w-3.5" /> Market Clearance Authorization
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              CE Marking &amp; EU Device Registration
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              We manage CE marking as the defensible outcome of classification, conformity assessment, evidence, technical documentation, QMS and Notified Body review — not as a standalone administrative task.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Plan Your CE Marking Strategy <ArrowRight className="h-4 w-4" />
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
              {/* CE Marking Sequence */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  The Complete 10-Step CE Marking Sequence
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-2">
                  {ceSequence.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Items */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  CE Marking Compliance Deliverables
                </h2>
                <div className="grid grid-cols-1 gap-2.5 pt-2">
                  {supportItems.map((item, idx) => (
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

              {/* Expert Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Differentiator</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Legally Binding Declaration of Conformity
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  The EU Declaration of Conformity is a solemn legal statement that the device meets all applicable Union harmonisation legislation. We ensure that every standard, certificate, Basic UDI-DI and GSPR referenced in your DoC is backed by unimpeachable technical evidence.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  Market Entry Elements
                </h4>
                <ul className="space-y-2.5 text-xs text-navy/75 font-medium">
                  <li>• Notified Body Certificate of Conformity</li>
                  <li>• Appointed European Authorized Representative (EC REP)</li>
                  <li>• EUDAMED Single Registration Number (SRN)</li>
                  <li>• UDI-DI &amp; UDI-PI compliant labeling</li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Ready for CE Marking?</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Start your European market registration with senior regulatory leadership.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Initiate CE Marking <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Achieve Seamless European CE Mark Clearance"
        description="Partner with NKB Regovanta for end-to-end conformity assessment and commercial launch support."
      />
    </>
  );
}
