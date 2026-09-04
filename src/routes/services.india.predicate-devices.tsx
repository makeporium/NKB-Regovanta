import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ClipboardList, PackageSearch, Activity, ArrowRight, ShieldCheck, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/predicate-devices")({
  component: PredicateDevicesPage,
  head: () => ({
    meta: [
      { title: "Import License for Predicate Medical Devices India | MD-14 & MD-15 | NKB Regovanta" },
      { name: "description", content: "End-to-end CDSCO consulting for MD-14 import licence applications and MD-15 import licence grant for Class A, B, C & D predicate medical devices. IAA/AIR appointment, SUGAM portal submission, dossier preparation, and deficiency response. NKB Regovanta India." },
      { name: "keywords", content: "MD-14 application India, MD-15 import licence, CDSCO predicate device, Indian Authorized Agent IAA, SUGAM portal, medical device import consultant India, Class B C D import licence" },
      { property: "og:title", content: "Import License for Predicate Medical Devices India | MD-14 & MD-15 | NKB Regovanta" },
      { property: "og:description", content: "End-to-end CDSCO consulting for MD-14 import licence applications and MD-15 import licence grant for Class A, B, C & D predicate medical devices. IAA/AIR appointment, SUGAM portal submission, dossier preparation, and deficiency response. NKB Regovanta India." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/india/predicate-devices" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Import License for Predicate Medical Devices India | MD-14 & MD-15 | NKB Regovanta" },
      { name: "twitter:description", content: "End-to-end CDSCO consulting for MD-14 import licence applications and MD-15 import licence grant for Class A, B, C & D predicate medical devices. IAA/AIR appointment, SUGAM portal submission, dossier preparation, and deficiency response. NKB Regovanta India." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/predicate-devices" },
    ],
  }),
});

function PredicateDevicesPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Import License for Predicate Medical Devices  (Forms MD-14, MD-15)" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Import</span> License for Predicate Medical Devices <br/> (Forms MD-14, MD-15)
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Secure the mandatory MD-15 import license to legally distribute and sell your medical devices across the Indian healthcare market.
            </p>
            <Link
              to="/contact"
              className="mt-[2.2cqw] inline-flex w-fit items-center gap-[1.2cqw] rounded-[0.45cqw] bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-[1.9cqw] py-[0.95cqw] text-[1.05cqw] font-bold text-white shadow-lg shadow-[#0a3d96]/20 transition-opacity hover:opacity-90"
            >
              Consult Our CDSCO Experts
              <ArrowRight className="h-[1.3cqw] w-[1.3cqw]" />
            </Link>
          </div>

          {heroBadges.map(({ icon: Icon, lines, x, y, side }) => (
            <div
              key={lines.join(" ")}
              className="absolute flex h-[5cqw] w-[5cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,35,64,0.10)] ring-1 ring-[#e4ecf7]"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <Icon className="h-[2.5cqw] w-[2.5cqw] text-[#12306f]" strokeWidth={1.6} />
              <p
                className={
                  side === "right"
                    ? "absolute left-full top-1/2 ml-[0.9cqw] -translate-y-1/2 whitespace-nowrap text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                    : "absolute left-1/2 top-full mt-[0.7cqw] -translate-x-1/2 whitespace-nowrap text-center text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                }
              >
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden px-4 pt-12 pb-8 sm:px-6">
          <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-4 font-semibold text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to India CDSCO Services
          </Link>
          <p role="heading" aria-level={1} aria-hidden="true" className="font-display text-3xl font-bold leading-tight text-[#0f2340] sm:text-4xl">
            <span className="text-[#0b3a96]">Import</span> License for Predicate Medical Devices <br/> (Forms MD-14, MD-15)
          </p>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Secure the mandatory MD-15 import license to legally distribute and sell your medical devices across the Indian healthcare market.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Import License for Predicate Medical Devices  (Forms MD-14, MD-15)" className="mt-8 w-full" />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <Activity className="h-7 w-7 text-blue-600" />
                  What is an MD-15 License?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The MD-15 license is the official import license granted by the Central Drugs Standard Control Organization (CDSCO). It authorizes the importation of medical devices—spanning Classes A, B, C, and D—into India, enabling their legal commercialization and distribution.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  To obtain this license, applicants must submit Form MD-14. The CDSCO has actively worked to simplify the importation system, creating a more streamlined pathway for compliant medical devices of all risk classes to enter the market.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-6">Who Needs It?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Indian Importers
                    </h4>
                    <p className="text-sm text-gray-600">Companies based in India whose core operation is importing medical devices require this license.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Authorized Indian Agents
                    </h4>
                    <p className="text-sm text-gray-600">Foreign manufacturers must appoint a local Authorized Agent to act as their liaison with CDSCO and hold the MD-15 license on their behalf.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  The MD-14 Application Process
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Application via Form MD-14 | NKB Regovanta", desc: "The Authorized Agent submits the online MD-14 application on the CDSCO portal, detailing the device's generic name, intended use, risk class, and materials." },
                    { title: "Document Upload | NKB Regovanta", desc: "A comprehensive Device Master File is required, including product specifications, biocompatibility data, clinical evidence, QMS certificates, and Free Sale Certificates (FSC)." },
                    { title: "Fee Payment | NKB Regovanta", desc: "Payment of the requisite government fees as stipulated in the Second Schedule of the Medical Device Rules, 2017." },
                    { title: "CDSCO Review & Approval | NKB Regovanta", desc: "The licensing authority rigorously reviews the technical dossier. Upon satisfaction, they issue the MD-15 import license." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-700">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">{step.title}</h4>
                        <p className="text-gray-600 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>Validity Note:</strong> The MD-15 license remains valid for 5 years from its date of issue, provided the mandatory retention fees are paid periodically to maintain its active status.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <h3 className="text-xl font-bold mb-6">How We Can Help</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>In-depth gap analysis of your Device Master File</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Seamless preparation and submission of Form MD-14</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Active liaison with CDSCO to expedite the review process</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Acting as your Authorized Indian Agent</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Consult an Expert
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the difference between Form MD-14 and Form MD-15?", "acceptedAnswer": { "@type": "Answer", "text": "Form MD-14 is the application submitted on CDSCO's SUGAM portal to apply for a medical device import licence. Form MD-15 is the actual import licence document granted by CDSCO after the application is reviewed and approved." } },
            { "@type": "Question", "name": "Who can apply for a CDSCO MD-14 import licence in India?", "acceptedAnswer": { "@type": "Answer", "text": "Only an Indian entity — either an Indian Authorized Agent (IAA) or Authorized Indian Representative (AIR) — holding a valid wholesale drug licence and appointed by the foreign manufacturer via notarized Power of Attorney can file the MD-14 application on SUGAM." } },
            { "@type": "Question", "name": "How long does CDSCO MD-15 import licence approval take?", "acceptedAnswer": { "@type": "Answer", "text": "For Class A devices: 15–60 days. For Class B, C, D devices with predicates: 3–6 months. Novel devices requiring Expert Committee evaluation: 9–18 months." } },
            { "@type": "Question", "name": "What documents are required for CDSCO medical device import registration?", "acceptedAnswer": { "@type": "Answer", "text": "Key documents include: SUGAM application, device technical specifications, performance testing reports, ISO 13485 manufacturing certificate, CE or FDA clearance if applicable, predicate device details, Declaration of Conformity, and a notarized Power of Attorney for the Indian agent." } },
            { "@type": "Question", "name": "Can a foreign company directly apply for an MD-14 licence?", "acceptedAnswer": { "@type": "Answer", "text": "No. CDSCO regulations require all import licence applications to be filed by an Indian Authorized Agent (IAA) or Authorized Indian Representative (AIR) appointed by the foreign manufacturer." } }
          ]
        }) }}
      />
    </div>
  );
}

const heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;
