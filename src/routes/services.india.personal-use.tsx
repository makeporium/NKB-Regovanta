import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, HeartPulse, UserCircle, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/india/personal-use")({
  component: PersonalUsePage,
  head: () => ({
    meta: [
      { title: "Personal Use Import License | MD-20 & MD-21" },
      { name: "description", content: "Navigate Forms MD-20 and MD-21 for importing specialized medical devices for personal use and treatment in India." },
    ],
  }),
});

function PersonalUsePage() {
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
              Patient Care & Access
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Personal Use Import License <br/> (Forms MD-20, MD-21)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              A dedicated regulatory pathway ensuring Indian patients can legally import essential, specialized medical devices tailored to their unique health needs.
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
                  <HeartPulse className="h-7 w-7 text-blue-600" />
                  What Are Forms MD-20 & MD-21?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When individuals in India require specific medical devices for their personal treatment that are not commercially available or approved locally, the CDSCO provides a vital regulatory provision. This ensures patients are not denied access to life-improving or life-saving specialized technologies.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-20: Application</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Submitted by the individual or their representative, requesting permission to import a limited quantity of a specific device. A valid prescription and detailed medical justification from a registered Indian medical practitioner are mandatory.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-21: License</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The official CDSCO license granting legal authorization to import the device exclusively for personal use. Commercial sale, distribution, or transfer to other parties is strictly prohibited.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-blue-600" />
                  Why is This Pathway Vital?
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Ensured Access</h4>
                      <p className="text-sm text-gray-700 mt-1">Provides a critical avenue to obtain niche or advanced medical technologies not widely manufactured or sold in India.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Addressing Unique Needs</h4>
                      <p className="text-sm text-gray-700 mt-1">Facilitates customized care for patients facing rare or complex conditions where local alternatives are insufficient.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Regulatory Safety Net</h4>
                      <p className="text-sm text-gray-700 mt-1">Maintains proper regulatory oversight to verify the device's necessity and safety profile, preventing misuse while prioritizing patient health.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-navy mb-4">Eligibility</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Any individual residing in India who requires a specific medical device for personal treatment is eligible. However, the application <strong>must be comprehensively substantiated</strong> by a valid prescription and a detailed medical justification provided by a qualified and registered medical practitioner in India.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <UserCircle className="h-10 w-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-navy mb-6">Compassionate Support for Patients</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Navigating CDSCO portals and regulatory requirements can be overwhelming for patients and families focused on healthcare. Our consultants offer compassionate, expert support to handle the administrative burden.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Expert dossier preparation (MD-20)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Sugam portal navigation assistance</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Clear communication with CDSCO</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Get Assistance Today
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


