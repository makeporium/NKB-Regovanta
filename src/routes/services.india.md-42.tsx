import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ClipboardList, ShieldAlert, Store } from "lucide-react";

export const Route = createFileRoute("/services/india/md-42")({
  component: MD42Page,
  head: () => ({
    meta: [
      { title: "MD-42 Certificate (Medical Device Registration) | NKB Regovanta" },
      { name: "description", content: "Get your MD-42 Medical Device Registration Certificate to legally sell, stock, and distribute medical devices in India." },
    ],
  }),
});

function MD42Page() {
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
              Sales & Distribution
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              MD-42 Medical Device <br/> Registration Certificate
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Secure the fundamental legal authorization to sell, stock, exhibit, and distribute medical devices and IVDs across the Indian market.
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
                  <Store className="h-7 w-7 text-blue-600" />
                  What is the MD-42 License?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For any business—whether a retailer, wholesaler, or stockist—involved in the sale, stocking, exhibition, or distribution of medical devices (including in-vitro diagnostics) in India, the <strong>MD-42 license</strong> is a mandatory legal requirement. Officially known as the Medical Device Registration Certificate, it ensures full compliance with the Medical Devices Rules, 2017.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-navy mb-3 text-lg">Key Aspects:</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span><strong>Issuing Authority:</strong> Granted by the State Licensing Authority (SLA), often the State FDA, in the respective state or union territory.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span><strong>Application Form:</strong> Businesses apply using Form MD-41.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span><strong>Validity:</strong> The certificate is valid for a period of five years and requires periodic retention fee payments.</span>
                    </li>
                    <li className="flex gap-3 text-sm text-gray-700 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                      <span><strong>Broad Scope:</strong> Covers a comprehensive range of devices, from simple healthcare products to advanced diagnostics.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ShieldAlert className="h-7 w-7 text-blue-600" />
                  Why is it Crucial for Your Business?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Mandatory Requirement</h4>
                      <p className="text-sm text-gray-700 mt-1">Without this license, engaging in any form of medical device sales, stocking, or distribution in India is strictly illegal.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Legal Authorization</h4>
                      <p className="text-sm text-gray-700 mt-1">It formally grants your business the essential legal right to operate within the medical device supply chain.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Regulatory Compliance</h4>
                      <p className="text-sm text-gray-700 mt-1">Holding an MD-42 demonstrates to partners, manufacturers, and authorities your strict adherence to the Medical Devices Rules, 2017.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <h3 className="text-xl font-bold mb-6">Expert MD-42 Assistance</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  Navigating state-level FDA requirements can be intricate. Our expert consultants streamline your MD-41 application to ensure timely issuance of your MD-42 license.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Flawless Form MD-41 preparation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Comprehensive document compilation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Active SLA liaison & follow-up</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Get Your License
                </Link>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/non-conviction" className="text-sm text-gold hover:underline flex items-start gap-2">
                        <ClipboardList className="h-4 w-4 shrink-0 mt-0.5" />
                        Non-Conviction Certificate
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


