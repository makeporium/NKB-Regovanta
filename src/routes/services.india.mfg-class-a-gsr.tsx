import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ClipboardList, ShieldCheck, Zap } from "lucide-react";

export const Route = createFileRoute("/services/india/mfg-class-a-gsr")({
  component: MfgClassAGsrPage,
  head: () => ({
    meta: [
      { title: "Manufacturing Registration for Class A Medical Devices | GSR 777(E)" },
      { name: "description", content: "Fast-track CDSCO manufacturing registration for non-sterile and non-measuring Class A medical devices under GSR 777(E) in India." },
    ],
  }),
});

function MfgClassAGsrPage() {
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
              CDSCO Registration
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Class A Manufacturing <br/> Registration (GSR 777(E))
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Experience a streamlined compliance and rapid registration process for low-risk, non-sterile, and non-measuring medical devices in India.
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
                  <Zap className="h-7 w-7 text-blue-600" />
                  Streamlined Compliance for Low-Risk Devices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While the CDSCO mandates registration for all medical devices in India, it has implemented a significantly simplified pathway under GSR 777(E) for specific low-risk products.
                </p>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-navy mb-4">Qualifying Device Characteristics:</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-bold text-navy mb-1 text-sm">Low Risk</h4>
                      <p className="text-xs text-gray-600">Minimal potential for harm.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-bold text-navy mb-1 text-sm">Non-Sterile</h4>
                      <p className="text-xs text-gray-600">No contact with sterile environments.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-bold text-navy mb-1 text-sm">Non-Measuring</h4>
                      <p className="text-xs text-gray-600">Does not quantify physiological parameters.</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-100">
                    <p className="text-sm text-gray-700 font-medium">Examples:</p>
                    <p className="text-sm text-gray-600">Tongue depressors, bandages, non-electric thermometers, non-sterile surgical drapes, and examination gloves.</p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  Key Requirements for Registration
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Indian manufacturers (and importers) must utilize the CDSCO MD Online Portal. Upon successful submission of accurate information, a registration number is generated almost immediately within the system.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Quality Management System (QMS)</h4>
                      <p className="text-sm text-gray-700 mt-1">A valid ISO 13485 certificate, accredited by NABCB or IAF, is a mandatory prerequisite.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Device & Company Details</h4>
                      <p className="text-sm text-gray-700 mt-1">Comprehensive information regarding the manufacturer/importer, device intended use, classification, and materials of construction.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Undertakings</h4>
                      <p className="text-sm text-gray-700 mt-1">Formal declarations confirming strict compliance with safety, performance standards, and the Medical Device Rules, 2017.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-6">Minimize Risk of Rejection</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Despite the simplified "instant" registration process, any inaccurate documentation or misclassification can lead to immediate rejection or compliance issues later.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Verify correct Class A classification</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Ensure ISO 13485 certificate validity (NABCB/IAF)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Flawless CDSCO MD Online submission</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Get Expert Assistance
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


