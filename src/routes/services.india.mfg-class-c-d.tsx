import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Factory, ClipboardList, ShieldAlert, FileText } from "lucide-react";

export const Route = createFileRoute("/services/india/mfg-class-c-d")({
  component: MfgClassCDPage,
  head: () => ({
    meta: [
      { title: "Manufacturing License for Class C & D Devices | MD-7 & MD-9" },
      { name: "description", content: "Expert guidance for obtaining CDSCO MD-9 manufacturing licenses for high-risk Class C and D medical devices in India." },
    ],
  }),
});

function MfgClassCDPage() {
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
              Manufacturing License
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Class C & D Manufacturing <br/> (Forms MD-7 & MD-9)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Navigate stringent CDSCO regulations to secure your MD-9 license for manufacturing high-risk and moderate-risk medical devices in India.
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
                  <ShieldAlert className="h-7 w-7 text-blue-600" />
                  High & Moderate Risk Devices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Companies established in India intending to manufacture and distribute high-risk or moderate-high risk medical devices must obtain a manufacturing license from the Central Licensing Authority (CLA).
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Class C: Moderate-High Risk</h3>
                    <p className="text-sm text-gray-600 mb-4">Requires strict regulatory controls compared to lower classes.</p>
                    <ul className="space-y-2">
                      {["Blood Bags", "Catheters", "Disposable Perfusion Sets", "Ablation Devices"].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Class D: High Risk</h3>
                    <p className="text-sm text-gray-600 mb-4">Subject to the most stringent regulations to ensure patient safety.</p>
                    <ul className="space-y-2">
                      {["Aneurysm clips", "Heart Valves", "Cortical electrodes", "Cervical spine immobilization"].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <Factory className="h-7 w-7 text-blue-600" />
                  The MD-7 to MD-9 Process
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Form MD-7 is the application submitted electronically via the CDSCO portal. Upon successful review, the CLA grants Form MD-9, the official manufacturing license.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Application via MD-7", desc: "Electronic submission to the Central Licensing Authority." },
                    { title: "Rigorous Documentation", desc: "Submit Plant & Device Master Files (MDR 2017 format), robust QMS documentation, valid Quality Certificates, Test Licenses, and IVD performance evaluation reports if applicable." },
                    { title: "CDSCO Audit & Inspection", desc: "The CLA will review the dossier and conduct a thorough physical inspection of the manufacturing site to verify Fifth Schedule QMS compliance." },
                    { title: "MD-9 Issuance", desc: "The license is granted indefinitely, contingent on the payment of retention fees every 5 years to avoid suspension." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-700">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">{step.title}</h4>
                        <p className="text-gray-600 mt-1 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <h3 className="text-xl font-bold mb-6">Expert Regulatory Guidance</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  Due to the critical risk associated with Class C & D devices, CDSCO scrutiny is intense. We ensure your facility and dossiers are perfectly compliant.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Site readiness & mock audits for licensing</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>MDR 2017 compliant Device/Site Master Files</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>ISO 13485 QMS implementation support</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Consult an Expert
                </Link>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/loan-class-c-d" className="text-sm text-gold hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Loan License for Class C & D
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


