import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Globe2, FileText, Send, ArrowRight, ShieldCheck, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/free-sale")({
  component: FreeSalePage,
  head: () => ({
    meta: [
      { title: "Free Sale Certificate (FSC) | NKB Regovanta" },
      { name: "description", content: "Apply for a CDSCO Free Sale Certificate to seamlessly export your medical devices to international markets." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/free-sale" },
    ],
  }),
});

function FreeSalePage() {
  return (
    <div className="bg-white">
            {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Free Sale Certificate  (FSC)" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Free</span> Sale Certificate <br/> (FSC)
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Unlock global markets and expedite your international export processes with a CDSCO-issued Certificate for Export.
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
            <span className="text-[#0b3a96]">Free</span> Sale Certificate <br/> (FSC)
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Unlock global markets and expedite your international export processes with a CDSCO-issued Certificate for Export.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Free Sale Certificate  (FSC)" className="mt-8 w-full" />
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
                  <Globe2 className="h-7 w-7 text-blue-600" />
                  What is a Free Sale Certificate?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  A Free Sale Certificate (FSC), also widely known as a Certificate for Export, is a critical regulatory document for Indian medical device companies looking to expand internationally. It serves as official verification from the Central Drugs Standard Control Organization (CDSCO) that your medical device can be freely sold and distributed without restriction within India, and is therefore safe for export.
                </p>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-navy mb-2">Who Needs an FSC?</h3>
                  <p className="text-sm text-gray-700">
                    Any manufacturer based in India holding a valid, current manufacturing license can apply to the CDSCO for an FSC for their approved devices. This certificate is often a mandatory prerequisite demanded by regulatory authorities in the importing countries.
                  </p>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <Send className="h-7 w-7 text-blue-600" />
                  Why Obtain a Free Sale Certificate?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Simplified Export Logistics</h4>
                      <p className="text-sm text-gray-700 mt-1">An FSC actively removes regulatory hurdles at customs, ensuring smooth and compliant exportation of your medical devices to international partners.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Enhanced Global Credibility</h4>
                      <p className="text-sm text-gray-700 mt-1">Possessing an FSC immediately demonstrates your strict compliance with Indian quality regulations, boosting your brand’s reputation in the eyes of foreign buyers and regulators.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Faster Time to Market</h4>
                      <p className="text-sm text-gray-700 mt-1">By fulfilling a primary requirement of foreign regulatory bodies upfront, you can seize global commercial opportunities much faster.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-6">The CDSCO Online Process</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The CDSCO has streamlined the FSC application process via their MD Online Registration portal. However, meticulous document preparation remains critical.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h4 className="font-bold text-navy mb-4">Required Documents:</h4>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Copy of your valid manufacturing license.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Comprehensive list of specific products for export.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Formal Cover Letter on company letterhead.</span>
                    </li>
                    <li className="flex gap-2 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0"></div>
                      <span>Notarized Undertaking (on Rs. 100 stamp paper) guaranteeing no market complaints.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <FileText className="h-10 w-10 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-6">Fast-Track Your Global Exports</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  While the process is online, navigating CDSCO requirements and correctly formatting the legal undertakings can be challenging. We ensure zero delays.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Expert drafting of required undertakings</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Seamless CDSCO MD Online submission</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Expedited follow-up for faster turnaround</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Apply for FSC Today
                </Link>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Related Export Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/neutral-code" className="text-sm text-gold hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Neutral Code Certificate
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
