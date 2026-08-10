import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ClipboardList, PackageSearch, Activity } from "lucide-react";

export const Route = createFileRoute("/services/india/ivd-testing")({
  component: IVDTestingPage,
  head: () => ({
    meta: [
      { title: "Test License for IVD Devices | MD-16 & MD-17" },
      { name: "description", content: "Apply for CDSCO Forms MD-16 and MD-17 to import limited quantities of IVD medical devices for non-commercial testing, evaluation, or demonstration." },
    ],
  }),
});

function IVDTestingPage() {
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
              CDSCO Test License
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Test License for IVD Devices <br/> (Forms MD-16, MD-17)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Legally import limited quantities of IVD medical devices for essential pre-market activities, including clinical investigations, evaluations, and training.
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
                  <Activity className="h-7 w-7 text-blue-600" />
                  What Are Forms MD-16 & MD-17?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Before commercial launch, manufacturers and importers often require limited quantities of an IVD device for non-commercial purposes. The CDSCO strictly regulates this through the "Test License" pathway, ensuring critical pre-market activities are conducted compliantly.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-16: Application</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Submitted to the Central Licensing Authority, detailing the specific IVD, the exact quantity requested, and the precise non-commercial purpose (e.g., performance evaluation).
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-17: License</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The official Test License, typically valid for three years. Devices imported under MD-17 are strictly prohibited from commercial sale or distribution.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  Strategic Value of the Test License
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Enabling Essential R&D</h4>
                      <p className="text-sm text-gray-700 mt-1">Crucial for novel IVDs requiring clinical investigations and performance evaluations tailored to the Indian population.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Supporting Training & Demonstration</h4>
                      <p className="text-sm text-gray-700 mt-1">Permits the import of devices specifically to train healthcare professionals on proper use, facilitating successful market adoption.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Strategic Market Entry</h4>
                      <p className="text-sm text-gray-700 mt-1">Lays the compliant groundwork for full commercialization by enabling preliminary integration and testing within local systems.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-navy mb-6">The Application Process</h3>
                  <div className="space-y-6">
                    {[
                      { title: "Justification of Quantity", desc: "A rigorous rationale for the exact quantity requested, including a breakdown (e.g., test vs. retention)." },
                      { title: "Test Protocol Submission", desc: "For clinical investigations, an approved PEP or test protocol must be provided." },
                      { title: "Non-Commercial Undertaking", desc: "A binding declaration stating devices will not be sold or distributed commercially." },
                      { title: "CDSCO Sugam Registration", desc: "Complete online submission via the Sugam portal, including fee payment (USD 100 per distinct device)." },
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
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <h3 className="text-xl font-bold mb-6">Streamline Your MD-17 License</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  Obtaining a test license requires precise adherence to regulatory guidelines regarding quantity justifications and test protocols.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Strategic justification of import quantities</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Meticulous MD-16 dossier preparation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Sugam portal navigation & submission</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Contact Our Experts
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


