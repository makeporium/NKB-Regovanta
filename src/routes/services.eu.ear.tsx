import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Building2,
  Globe2,
  FileText,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/eu/ear")({
  head: () => ({
    meta: [
      { title: "European Authorized Representative (EAR / EC REP) Services | NKB Regovanta" },
      {
        name: "description",
        content:
          "Legally mandated European Authorized Representative (EC REP / EAR) representation in the EU for medical device and IVD manufacturers under MDR Article 11 and IVDR Article 11.",
      },
      {
        name: "keywords",
        content:
          "European Authorized Representative EAR, EC REP services Europe, MDR Article 11 Authorised Representative, Competent Authority liaison, EUDAMED registration, NKB Regovanta",
      },
      { property: "og:title", content: "European Authorized Representative (EC REP) | NKB Regovanta" },
      {
        property: "og:description",
        content:
          "Fulfill your legal representation mandates across all 27 EU member states with our senior European regulatory representation infrastructure.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/eu/ear" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "European Authorized Representative (EAR / EC REP) Services | NKB Regovanta" },
      { name: "twitter:description", content: "Legally mandated European Authorized Representative (EC REP / EAR) representation in the EU for medical device and IVD manufacturers under MDR Article 11 and IVDR Article 11." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/eu/ear" }],
  }),
  component: EUEARPage,
});

function EUEARPage() {
  const earOfferings = [
    {
      title: "Device Registration with EU Competent Authorities",
      desc: "As your appointed European Authorized Representative (EAR), NKB Regovanta fulfills all MDR/IVDR local representation mandates for non-EU manufacturers, facilitating direct device registration and maintaining mandatory regulatory records.",
    },
    {
      title: "Documentation & Technical Conformity Assurance",
      desc: "Our regulatory compliance experts conduct rigorous verifications of your Declaration of Conformity (DoC), CE Certificates, and Annex II/III Technical Files to ensure continuous audit readiness.",
    },
    {
      title: "Direct Competent Authority & Notified Body Liaison",
      desc: "NKB Regovanta manages all formal communications, safety inquiries, and clarification requests from EU Competent Authorities and Notified Bodies on your behalf.",
    },
    {
      title: "Vigilance & Incident Communication",
      desc: "We serve as the primary conduit for safety notifications, coordinating Field Safety Corrective Actions (FSCA), Field Safety Notices (FSN), and serious incident reporting.",
    },
    {
      title: "Inspection & Audit Representation",
      desc: "We maintain all statutorily required files, official correspondence, and post-market records immediately accessible for authority inspections and audits.",
    },
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
              name: "European Authorized Representative (EAR / EC REP) Services",
              url: "https://www.nkbregovanta.com/services/eu/ear",
              description:
                "Legally mandated European Authorized Representative representation under Regulation (EU) 2017/745 and Regulation (EU) 2017/746.",
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
                { "@type": "ListItem", position: 4, name: "EC REP (EAR)", item: "https://www.nkbregovanta.com/services/eu/ear" },
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
            <span className="text-navy">European Authorized Representative</span>
          </div>

          <Link
            to="/services/eu"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to EU Services Hub
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <Globe2 className="h-3.5 w-3.5" /> MDR / IVDR Article 11 Mandate
            </div>
            <h1
              className="font-display font-extrabold text-navy leading-[1.08] mb-4"
              style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}
            >
              European Authorized Representative (EAR / EC REP)
            </h1>
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-navy/75 font-medium mb-8">
              For medical device and IVD manufacturers located outside the EU/EEA, appointing a legally designated European Authorized Representative (EC REP) is a mandatory prerequisite to place products on the Union market.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-navy text-white text-[13px] font-semibold px-6 py-3 rounded-sm hover:bg-navy/90 transition-all shadow-sm"
              >
                Appoint Your EC REP <ArrowRight className="h-4 w-4" />
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
              <div className="p-7 rounded-2xl bg-surface/40 border border-gray-200/80 space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                  Core EAR Responsibilities &amp; Capabilities
                </h2>
                <div className="grid grid-cols-1 gap-3.5 pt-2">
                  {earOfferings.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs flex items-start gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0b3a96] flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5">
                        0{idx + 1}
                      </div>
                      <div>
                        <h4 className="text-[14px] font-extrabold text-navy">{item.title}</h4>
                        <p className="text-[12.5px] text-navy/70 mt-1 font-medium leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Differentiator */}
              <div className="p-7 rounded-2xl bg-gradient-to-br from-navy to-[#0b2b6b] text-white shadow-md">
                <div className="flex items-center gap-2.5 mb-3 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Expert Representation</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Active Regulatory Guardianship Across 27 Member States
                </h3>
                <p className="text-[13.5px] text-white/85 leading-relaxed font-normal">
                  We do not act as passive mailbox representatives. We actively safeguard your commercial access, scrutinize labeling and PRRC qualifications, verify technical documentation completeness, and interface with European authorities.
                </p>
              </div>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200/80 shadow-xs">
                <h4 className="text-sm font-extrabold text-navy uppercase tracking-wider mb-4 pb-3 border-b border-gray-200">
                  EC REP Mandate Requirements
                </h4>
                <ul className="space-y-2.5 text-xs text-navy/75 font-medium">
                  <li>• Written mandate contract per Article 11</li>
                  <li>• Verified PRRC availability at EC REP</li>
                  <li>• Technical file access &amp; 10/15-year archiving</li>
                  <li>• EUDAMED Actor Registration &amp; SRN linkage</li>
                </ul>
              </div>

              <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-200 text-center">
                <h4 className="text-base font-extrabold text-navy mb-2">Appoint Your EAR</h4>
                <p className="text-xs text-navy/70 mb-5 leading-relaxed">
                  Establish legally compliant representation in the European Union.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-navy hover:bg-navy/90 text-white text-xs font-bold py-3 rounded-md transition-colors"
                >
                  Request EC REP Agreement <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Secure Legally Mandated Representation Across the European Union"
        description="Partner with NKB Regovanta as your European Authorized Representative (EC REP)."
      />
    </>
  );
}
