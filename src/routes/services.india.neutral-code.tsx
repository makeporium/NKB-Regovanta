import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Globe2, ShieldCheck, Tag } from "lucide-react";

export const Route = createFileRoute("/services/india/neutral-code")({
  component: NeutralCodePage,
  head: () => ({
    meta: [
      { title: "Neutral Code Certificate (Special Code) | NKB Regovanta" },
      { name: "description", content: "Apply for a CDSCO Neutral Code to export medical devices compliantly while maintaining manufacturing identity confidentiality." },
    ],
  }),
});

function NeutralCodePage() {
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
              Neutral Code Certificate <br/> (Special Code)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Maintain confidentiality and seamlessly navigate diverse international labeling requirements with a CDSCO-issued Neutral Code for your exports.
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
                  <Tag className="h-7 w-7 text-blue-600" />
                  What is a Neutral Code?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For medical device and pharmaceutical manufacturers aiming for international markets, a Neutral Code (also known as a Special Code) is a strategic identifier. Issued by India’s CDSCO, this confidential code replaces your company’s explicit name and address directly on the product label.
                </p>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-navy mb-3 text-lg">This is particularly valuable when:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span>The importing country or buyer dictates specific labeling regulations that conflict with your standard domestic labeling practices.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span>You strategically wish to maintain the confidentiality of your manufacturing identity from end-users or competitors in foreign markets.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <Globe2 className="h-7 w-7 text-blue-600" />
                  Why is it Crucial for Your Export Strategy?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Ensures Confidentiality</h4>
                      <p className="text-sm text-gray-700 mt-1">Allows you to maintain complete discretion regarding your manufacturing identity on exported products, protecting your intellectual property and market position.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Facilitates Export Compliance</h4>
                      <p className="text-sm text-gray-700 mt-1">Enables you to seamlessly meet diverse and stringent international labeling requirements without constantly altering your primary manufacturing documentation.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Expands Market Access</h4>
                      <p className="text-sm text-gray-700 mt-1">Equips you to cater to a wider range of international buyers and contract manufacturing clients who demand specific, unbranded, or custom-branded labeling.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-4">Eligibility & The Application Process</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  In India, the CDSCO is the sole regulatory authority responsible for approving and issuing Neutral Codes. To be eligible, manufacturers typically must possess a <strong>valid manufacturing license</strong> and established <strong>product permissions</strong> for the devices intended for export.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The application process has been streamlined by the CDSCO through their online portal. It requires the submission of precise documentation verifying your manufacturing credentials and the specific intent for the exported devices.
                </p>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <ShieldCheck className="h-10 w-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-navy mb-6">Unlock International Markets</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Navigating the nuances of export regulations and specialized codes can be complex. We ensure your export strategy is legally robust and confidential.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Eligibility & documentation assessment</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>CDSCO online portal management</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Direct liaison for timely issuance</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Get Your Neutral Code
                </Link>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-navy mb-4 text-sm uppercase tracking-wide">Related Certificates</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/free-sale" className="text-sm text-blue-600 hover:underline flex items-start gap-2">
                        <Globe2 className="h-4 w-4 shrink-0 mt-0.5" />
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


