import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ShieldCheck, Scale, FileText, ArrowRight, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/non-conviction")({
  component: NonConvictionPage,
  head: () => ({
    meta: [
      { title: "Non-Conviction Certificate (NCC) CDSCO India | NKB Regovanta" },
      { name: "description", content: "Obtain a CDSCO Non-Conviction Certificate (NCC) to prove total regulatory compliance for medical device tenders, institutional procurement and global market audits." },
      { name: "keywords", content: "Non-Conviction Certificate (NCC), CDSCO NCC certificate, State Licensing Authority NCC, drug and cosmetic non conviction certificate India, NKB Regovanta" },
      { property: "og:title", content: "Non-Conviction Certificate (NCC) CDSCO | NKB Regovanta" },
      { property: "og:description", content: "Non-Conviction Certificate (NCC) licensing assistance for medical device & pharmaceutical manufacturers in India." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/india/non-conviction" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/non-conviction" },
    ],
  }),
});

function NonConvictionPage() {
  return (
    <div className="bg-white">
            {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Non-Conviction Certificate  (NCC)" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Non-Conviction</span> Certificate <br/> (NCC)
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Demonstrate your impeccable regulatory record and secure essential qualification documents for major tenders and procurements in India.
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
          <h1 className="font-display text-3xl font-bold leading-tight text-[#0f2340] sm:text-4xl">
            <span className="text-[#0b3a96]">Non-Conviction</span> Certificate <br/> (NCC)
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Demonstrate your impeccable regulatory record and secure essential qualification documents for major tenders and procurements in India.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Non-Conviction Certificate  (NCC)" className="mt-8 w-full" />
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
                  <Scale className="h-7 w-7 text-blue-600" />
                  What is the NCC?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Non-Conviction Certificate (NCC) is a vital official document issued by the Central Drugs Standard Control Organization (CDSCO) or the respective State Licensing Authority. It confirms that a medical device company—whether a manufacturer or importer—has a clean legal record with no history of convictions for serious regulatory offenses.
                </p>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-navy mb-4">The NCC verifies the absence of incidents such as:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-gray-700 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                      <span>Serious injuries or deaths linked to the company's medical devices.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                      <span>Reported major device malfunctions or safety recalls.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                      <span>Failure of devices to meet stipulated quality standards.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-blue-600" />
                  Why is the NCC Crucial?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Beyond standard manufacturing and import approvals, the NCC acts as official proof of your company’s strong regulatory compliance record. It is often an absolute prerequisite for major commercial opportunities.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Essential for Tenders & Procurements</h4>
                      <p className="text-sm text-gray-700 mt-1">Many public (government hospitals) and private sector tenders mandate the NCC as a primary pre-qualification document. Without it, you are effectively blocked from bidding.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Demonstrates Quality & Ethics</h4>
                      <p className="text-sm text-gray-700 mt-1">It serves as an official testament to your strict adherence to ethical practices and the absence of legal liabilities concerning product safety.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Enhances Market Reputation</h4>
                      <p className="text-sm text-gray-700 mt-1">An NCC issued by the licensing authority significantly boosts your brand's reputation, assuring clients and partners of your absolute reliability.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-6">Eligibility & Application Requirements</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To be eligible, your company must hold a valid manufacturing or import license (CLA or SLA) and have no past convictions under the Drugs and Cosmetics Act 1940 and Medical Device Rules 2017.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-navy mb-4">Required Documents:</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Copy of valid manufacturing or import license.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Specific list of products for the NCC request.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Legal undertaking confirming no pending legal action.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Requisite application forms and government fees.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <h3 className="text-xl font-bold mb-6">Gain Your Competitive Edge</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  Navigating the application process for the NCC requires meticulous documentation. We handle the process so you can focus on winning tenders.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Accurate document preparation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Drafting of necessary legal undertakings</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Direct liaison with CDSCO/SLA</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Apply for NCC Today
                </Link>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Related Certificates</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/market-standing" className="text-sm text-gold hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Market Standing Certificate
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}



const heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;
