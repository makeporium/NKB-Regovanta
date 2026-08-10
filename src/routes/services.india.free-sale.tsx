import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Globe2, FileText, Send } from "lucide-react";

export const Route = createFileRoute("/services/india/free-sale")({
  component: FreeSalePage,
  head: () => ({
    meta: [
      { title: "Free Sale Certificate (FSC) | NKB Regovanta" },
      { name: "description", content: "Apply for a CDSCO Free Sale Certificate to seamlessly export your medical devices to international markets." },
    ],
  }),
});

function FreeSalePage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('@/assets/world-map.png')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/services/india" className="inline-flex items-center text-gold hover:text-white transition-colors mb-8 font-medium text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to India CDSCO Services
          </Link>
          <div className="max-w-3xl">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">
              Export Certification
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Free Sale Certificate <br/> (FSC)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Unlock global markets and expedite your international export processes with a CDSCO-issued Certificate for Export.
            </p>
          </div>
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


