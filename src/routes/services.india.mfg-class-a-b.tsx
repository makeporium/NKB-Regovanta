import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Factory, ClipboardList, ShieldCheck, FileText } from "lucide-react";

export const Route = createFileRoute("/services/india/mfg-class-a-b")({
  component: MfgClassABPage,
  head: () => ({
    meta: [
      { title: "Manufacturing License for Class A & B Devices | MD-3 & MD-5" },
      { name: "description", content: "Expert assistance for acquiring CDSCO MD-5 manufacturing licenses for low-to-moderate risk Class A and B medical devices in India." },
    ],
  }),
});

function MfgClassABPage() {
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
              Class A & B Manufacturing <br/> (Forms MD-3 & MD-5)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Obtain the essential MD-5 manufacturing license from the State Licensing Authority (SLA) for low-to-moderate risk medical devices.
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
                  <ShieldCheck className="h-7 w-7 text-blue-600" />
                  Low & Low-Moderate Risk Devices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Companies established in India intending to manufacture and sell Class A or Class B medical devices (including IVDs) require a manufacturing license from the State Licensing Authority (SLA) under CDSCO's jurisdiction.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Class A: Low Risk</h3>
                    <p className="text-sm text-gray-600 mb-4">Devices with minimal potential for harm.</p>
                    <ul className="space-y-2">
                      {["Bandages", "Tongue depressors", "Surgical drapes"].map((item, i) => (
                        <li key={i} className="flex gap-2 text-sm text-gray-700 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Class B: Low-Moderate Risk</h3>
                    <p className="text-sm text-gray-600 mb-4">Devices requiring standard regulatory controls.</p>
                    <ul className="space-y-2">
                      {["Stethoscopes", "Syringes", "Standard surgical instruments"].map((item, i) => (
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
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  The Licensing Process (MD-3 to MD-5)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Form MD-3 is the application submitted electronically, and Form MD-5 is the resulting manufacturing license issued by the SLA upon successful review.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Online Application (Form MD-3)", desc: "Submit details about the company, facility, responsible personnel, and the proposed medical devices via the CDSCO portal." },
                    { title: "Documentation Submission", desc: "Upload facility layouts, design dossiers, labeling information, and QMS documentation. ISO 13485 certification is highly recommended to demonstrate QMS compliance." },
                    { title: "SLA Inspection", desc: "The State Licensing Authority may conduct an on-site inspection of the manufacturing facility to verify adherence to the Medical Device Rules, 2017." },
                    { title: "MD-5 Grant & Validity", desc: "Upon approval, the MD-5 license is granted. It is permanently valid, provided the mandatory license retention fees are paid every 5 years." },
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
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-6">Simplify Your Application</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  While Class A & B devices carry lower risk, the regulatory documentation must still be flawless. Our team ensures your MD-3 application is complete and accurate.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Technical dossier preparation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>QMS (ISO 13485) implementation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>SLA communication & audit support</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Get Regulatory Support
                </Link>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-navy mb-4 text-sm uppercase tracking-wide">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/mfg-class-a-gsr" className="text-sm text-blue-600 hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        GSR 777(E) Registration
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/india/loan-class-a-b" className="text-sm text-blue-600 hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Loan License for Class A & B
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


