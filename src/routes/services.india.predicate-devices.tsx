import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ClipboardList, PackageSearch, Activity } from "lucide-react";

export const Route = createFileRoute("/services/india/predicate-devices")({
  component: PredicateDevicesPage,
  head: () => ({
    meta: [
      { title: "Import License for Predicate Medical Devices | MD-14 & MD-15" },
      { name: "description", content: "Get your MD-15 CDSCO import license for Class A, B, C, or D predicate medical devices in India." },
    ],
  }),
});

function PredicateDevicesPage() {
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
              CDSCO Import License
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Import License for Predicate Medical Devices <br/> (Forms MD-14, MD-15)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Secure the mandatory MD-15 import license to legally distribute and sell your medical devices across the Indian healthcare market.
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
                  What is an MD-15 License?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The MD-15 license is the official import license granted by the Central Drugs Standard Control Organization (CDSCO). It authorizes the importation of medical devices—spanning Classes A, B, C, and D—into India, enabling their legal commercialization and distribution.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  To obtain this license, applicants must submit Form MD-14. The CDSCO has actively worked to simplify the importation system, creating a more streamlined pathway for compliant medical devices of all risk classes to enter the market.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-6">Who Needs It?</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Indian Importers
                    </h4>
                    <p className="text-sm text-gray-600">Companies based in India whose core operation is importing medical devices require this license.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      Authorized Indian Agents
                    </h4>
                    <p className="text-sm text-gray-600">Foreign manufacturers must appoint a local Authorized Agent to act as their liaison with CDSCO and hold the MD-15 license on their behalf.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  The MD-14 Application Process
                </h2>
                <div className="space-y-6">
                  {[
                    { title: "Application via Form MD-14", desc: "The Authorized Agent submits the online MD-14 application on the CDSCO portal, detailing the device's generic name, intended use, risk class, and materials." },
                    { title: "Document Upload", desc: "A comprehensive Device Master File is required, including product specifications, biocompatibility data, clinical evidence, QMS certificates, and Free Sale Certificates (FSC)." },
                    { title: "Fee Payment", desc: "Payment of the requisite government fees as stipulated in the Second Schedule of the Medical Device Rules, 2017." },
                    { title: "CDSCO Review & Approval", desc: "The licensing authority rigorously reviews the technical dossier. Upon satisfaction, they issue the MD-15 import license." },
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-700">{i + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">{step.title}</h4>
                        <p className="text-gray-600 mt-1">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-800 font-medium">
                    <strong>Validity Note:</strong> The MD-15 license remains valid for 5 years from its date of issue, provided the mandatory retention fees are paid periodically to maintain its active status.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 sticky top-24 text-white">
                <h3 className="text-xl font-bold mb-6">How We Can Help</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>In-depth gap analysis of your Device Master File</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Seamless preparation and submission of Form MD-14</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Active liaison with CDSCO to expedite the review process</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Acting as your Authorized Indian Agent</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Consult an Expert
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


