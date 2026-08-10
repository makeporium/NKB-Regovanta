import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ClipboardList, Hospital, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/services/india/investigational-devices")({
  component: InvestigationalDevicesPage,
  head: () => ({
    meta: [
      { title: "Import Authorization for Investigational Devices | NKB Regovanta" },
      { name: "description", content: "Learn about the MD-18 and MD-19 forms for importing investigational medical devices for compassionate use in Indian government hospitals." },
    ],
  }),
});

function InvestigationalDevicesPage() {
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
              Investigational Devices in Govt. Hospitals <br/> (Forms MD-18, MD-19)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Navigate the specialized regulatory pathway allowing government hospitals to import unapproved, cutting-edge medical devices for compassionate patient use.
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
                  <Hospital className="h-7 w-7 text-blue-600" />
                  What Are Forms MD-18 & MD-19?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Government hospitals and statutory medical institutions in India often require access to advanced, investigational medical technologies that are not yet commercially approved in the country. The Medical Devices Rules, 2017 establishes a vital regulatory mechanism for this exact scenario, often referred to as "compassionate use."
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-18: The Application</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Submitted to the CDSCO by the medical institution, this form formally requests permission to import a limited, specific quantity of an unapproved device. It requires strong clinical justification for treating life-threatening conditions or serious permanent disabilities where no local alternatives exist.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-19: The License</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      This is the official import license granted by the CDSCO. It authorizes the institution to import the designated investigational device exclusively for the identified patient or patients. Commercial sale or distribution of devices imported under MD-19 is strictly prohibited.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ShieldAlert className="h-7 w-7 text-blue-600" />
                  Eligibility & Key Regulations
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Exclusive Eligibility</h4>
                      <p className="text-sm text-gray-700 mt-1">Only Government hospitals or statutory medical institutions operating in India are eligible to apply through this specific pathway.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Clinical Justification</h4>
                      <p className="text-sm text-gray-700 mt-1">The application must be filed by a Medical Officer and accompanied by a detailed prescription and comprehensive documentation demonstrating a critical, unmet patient need.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Strict Usage Controls</h4>
                      <p className="text-sm text-gray-700 mt-1">The imported devices are restricted solely for treating the specified patient(s). Mandatory, detailed records must be kept regarding the import date, quantity, manufacturer, and patient details.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-navy rounded-2xl p-8 border border-gray-100 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <ClipboardList className="h-32 w-32" />
                </div>
                <h3 className="text-xl font-bold mb-4 relative z-10">Clinical Investigation Permissions (Forms MD-22 & MD-23)</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 relative z-10 max-w-xl">
                  For manufacturers and CROs aiming to introduce innovative devices to the market, conducting full clinical investigations is often required. Forms MD-22 (Application) and MD-23 (Permission) strictly govern these studies. The application requires extensive data, including ethics committee approvals and pre-clinical test reports, all processed via the CDSCO SUGAM portal.
                </p>
                <Link to="/services/india" className="inline-flex items-center text-gold font-bold text-sm hover:text-white transition-colors relative z-10">
                  Explore Clinical Investigation Support
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-6">Expert Support for Hospitals</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Navigating the stringent requirements for importing investigational devices under compassionate use can be overwhelming. Let our regulatory team handle the compliance so your medical professionals can focus entirely on patient care.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Meticulous MD-18 compilation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Clinical justification refinement</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Direct CDSCO liaison & follow-up</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Contact Our Team
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


