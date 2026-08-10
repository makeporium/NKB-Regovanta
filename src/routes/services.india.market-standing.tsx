import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, TrendingUp, Building2, Globe2, FileText } from "lucide-react";

export const Route = createFileRoute("/services/india/market-standing")({
  component: MarketStandingPage,
  head: () => ({
    meta: [
      { title: "Market Standing Certificate (MSC) | NKB Regovanta" },
      { name: "description", content: "Obtain a CDSCO Market Standing Certificate to prove your medical device company's established presence for tenders and exports." },
    ],
  }),
});

function MarketStandingPage() {
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
              Business & Export Certification
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Market Standing Certificate <br/> (MSC)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Validate your company's established market presence, robust track record, and regulatory compliance to unlock tenders and global exports.
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
                  <Building2 className="h-7 w-7 text-blue-600" />
                  What is the Market Standing Certificate?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In the competitive landscape of medical devices, a Market Standing Certificate (MSC) is a powerful testament to your company’s established presence. Issued by the CDSCO, it serves as an official confirmation of your proven track record.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-navy mb-3 text-lg">The MSC specifically certifies that you:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span>Hold a valid and current manufacturing license.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span>Are actively involved in the robust production and sale of your licensed products.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span>Maintain a reputable presence without any pending adverse reports or product recalls.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                  Why is the MSC Essential for Growth?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-navy mb-3">Tender Pre-Qualification</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Many public and private sector tenders rigorously mandate an MSC as a fundamental pre-qualification criterion to ensure they partner with established entities.
                    </p>
                  </div>
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-navy mb-3">Facilitates Global Exports</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      For companies looking to expand internationally, an MSC is a vital document demonstrating domestic compliance and building immediate credibility in foreign markets.
                    </p>
                  </div>
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-navy mb-3">Financial Credibility</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Financial institutions and banks frequently request an MSC as part of their due diligence processes when assessing creditworthiness for loans and investments.
                    </p>
                  </div>
                  <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-navy mb-3">Established Presence</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      It clearly showcases your company's stability and active engagement in the market, solidifying your position against newer or less compliant competitors.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-6">Key Requirements & Validity</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To secure an MSC, companies typically must prove active manufacturing and sales for a specified period (commonly 3 years) and hold a valid manufacturing license.
                </p>
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>Validity:</strong> The MSC is generally valid for one year from its date of issue, or until the expiration of your manufacturing license, whichever occurs first. It must be renewed actively to maintain compliance for ongoing tenders.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <Globe2 className="h-10 w-10 text-gold mb-6" />
                <h3 className="text-xl font-bold mb-6">Streamline Your MSC Application</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  Compiling the specific proof of active manufacturing and navigating the CDSCO requirements can be tedious. Let our experts handle it.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Eligibility assessment & criteria matching</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Meticulous compilation of sales proofs</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>CDSCO online application management</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Apply for MSC Today
                </Link>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Related Certificates</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/non-conviction" className="text-sm text-gold hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Non-Conviction Certificate
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/india/free-sale" className="text-sm text-gold hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Free Sale Certificate (FSC)
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


