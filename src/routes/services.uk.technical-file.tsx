import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  FileText,
  Sparkles,
  ArrowRight,
  FileCheck,
  Search,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uk/technical-file")({
  head: () => ({
    meta: [
      { title: "UK MDR Technical Documentation & Gap Assessment | NKB Regovanta" },
      {
        name: "description",
        content:
          "Senior UK MDR 2002 technical documentation compilation, GSPR / Essential Requirements mapping, clinical evaluation, risk management, and technical gap assessment for UKCA marking.",
      },
      {
        name: "keywords",
        content:
          "UK MDR technical file, UKCA technical documentation, UK MDR 2002 essential requirements, medical device technical file UK, NKB Regovanta",
      },
      { property: "og:title", content: "UK MDR Technical Documentation & Gap Assessment | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "A registration record does not replace technical evidence. We trace the complete regulatory story across your technical dossier for UK Approved Body and MHRA scrutiny.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/uk/technical-file" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "UK MDR Technical Documentation & Gap Assessment | NKB Regovanta" },
      { name: "twitter:description", content: "Senior UK MDR 2002 technical documentation compilation, GSPR / Essential Requirements mapping, clinical evaluation, risk management, and technical gap assessment for UKCA marking." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uk/technical-file" }],
  }),
  component: UKTechnicalFilePage,
});

function UKTechnicalFilePage() {
  const reviewScope = [
    "Device description, variants, specifications and intended clinical purpose",
    "Classification rationale against UK MDR 2002 Annex IX rules",
    "Design and manufacturing process validation information",
    "Essential Requirements / GSPR conformity evidence mapping",
    "ISO 14971 risk management file and benefit-risk analysis",
    "Clinical evaluation report (CER) or IVD performance evidence",
    "Design verification and validation (V&V) data packages",
    "ISO 10993 biocompatibility & chemical characterization",
    "Sterilization validation and microbiological safety evidence",
    "Packaging validation, transport simulation and shelf-life studies",
    "IEC 60601-1 electrical safety and electromagnetic compatibility (EMC)",
    "IEC 62304 software development lifecycle and verification",
    "Cybersecurity documentation and vulnerability assessment",
    "IEC 62366 usability engineering / human factors validation",
    "Labeling, Instructions for Use (IFU) and UKCA / UKRP mark placement",
    "Post-market surveillance (PMS) plan and PMSR / PSUR procedures",
    "Vigilance, serious incident reporting and FSCA standard operating procedures",
    "Change-control records and engineering change justifications",
  ];

  const storySteps = [
    { num: "01", label: "Intended Purpose" },
    { num: "02", label: "Classification" },
    { num: "03", label: "Risk Analysis" },
    { num: "04", label: "Requirements" },
    { num: "05", label: "V&V Testing" },
    { num: "06", label: "Clinical / PER Evidence" },
    { num: "07", label: "Labeling & IFU" },
    { num: "08", label: "PMS Feedback" },
  ];

  const gapOutputs = [
    "Critical regulatory nonconformity and compliance vulnerabilities",
    "Missing or insufficient technical and analytical testing evidence",
    "Internal document inconsistencies across engineering and regulatory files",
    "Outdated standards, harmonized references or obsolete test methods",
    "Weak traceability linkages between risk controls and test verification",
    "Clinical or IVD performance evidence sufficiency gaps",
    "Labeling, claims and Instructions for Use mismatches",
    "Post-market surveillance procedure and reporting gaps",
    "Prioritized, time-bound remediation roadmap for UKCA / Approved Body submission",
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
              name: "UK MDR Technical Documentation & Gap Assessment",
              url: "https://www.nkbregovanta.com/services/uk/technical-file",
              description:
                "Comprehensive technical file compilation, Essential Requirements checklist mapping, and gap remediation under the UK Medical Devices Regulations 2002.",
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
                { "@type": "ListItem", position: 4, name: "Technical File", item: "https://www.nkbregovanta.com/services/uk/technical-file" },
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
            <span className="text-navy">Technical Documentation</span>
          </div>

          <Link
            to="/services/uk"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to UK Market Overview
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <FileCheck className="h-3.5 w-3.5" /> UK MDR 2002 &amp; UKCA Dossiers
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              Technical Documentation &amp; UK MDR Gap Assessment
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              A registration record does not replace the technical evidence supporting the product. The manufacturer must maintain documentation demonstrating that the device meets the applicable regulatory requirements under the route being used to access Great Britain.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Review Your UK Technical File <ArrowRight className="h-4 w-4" />
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
              {/* How We Review the File */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl font-extrabold text-navy tracking-tight">
                  Tracing the Regulatory Story Across the Dossier
                </h2>
                <p className="text-[13px] text-navy/75 font-medium leading-relaxed">
                  We do not review documents in isolation. We trace the complete regulatory narrative across every section of your technical file:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 pt-2">
                  {storySteps.map((item) => (
                    <div key={item.num} className="p-3 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                      <span className="text-[10px] font-extrabold text-blue-600 block">{item.num}</span>
                      <p className="text-[11px] font-extrabold text-navy mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Documentation Scope */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  18 Key Technical File Review Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {reviewScope.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-[12.5px] font-medium text-navy/90 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gap Assessment Output */}
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h3 className="text-lg font-extrabold text-navy">
                  Gap Assessment Deliverables &amp; Remediation Roadmap
                </h3>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {gapOutputs.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-3"
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
                  Coherent Evidence Over Presence of Documents
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  If the intended purpose, risk analysis, testing evidence and labeling describe different versions of the product or make unsupported claims, the file is not technically robust even if every document is present. We ensure complete cross-file consistency.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  UKCA Conformity Routes
                </h4>
                <div className="space-y-3 text-xs font-medium text-navy/75">
                  <p><strong className="text-navy">UK MDR 2002 Part II:</strong> Medical devices (Annex II, IV, V, VI routes)</p>
                  <p><strong className="text-navy">UK MDR 2002 Part III:</strong> Active implantable medical devices</p>
                  <p><strong className="text-navy">UK MDR 2002 Part IV:</strong> In vitro diagnostic medical devices</p>
                </div>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Audit Your Technical File</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Have our regulatory engineers review your dossier against UK Approved Body expectations.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Schedule Technical Audit <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Construct an Unassailable Technical File for UK Market Authorization"
        description="Our regulatory dossier specialists map Essential Requirements, clinical evidence, and risk management into a unified file."
      />
    </>
  );
}
