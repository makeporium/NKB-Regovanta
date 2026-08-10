import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ShieldCheck, ClipboardList } from "lucide-react";

export const Route = createFileRoute("/services/india/class-a-import")({
  component: ClassAImportPage,
  head: () => ({
    meta: [
      { title: "Class A Import Registration (GSR 777(E)) | NKB Regovanta" },
      { name: "description", content: "Simplified CDSCO registration for low-risk, Class A (non-sterile & non-measuring) medical devices in India." },
    ],
  }),
});

function ClassAImportPage() {
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
              Class A Import Registration <br/> as per GSR 777(E)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Navigate the simplified CDSCO registration process for low-risk, non-sterile, and non-measuring medical devices entering the Indian market.
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
                  What Are Class A Devices?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Central Drugs Standard Control Organisation (CDSCO) classifies medical devices based on risk. Class A devices represent the lowest risk category and are subject to a significantly streamlined registration process. To qualify for this simplified pathway, a device must be:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { title: "Low Risk", desc: "Minimal potential for injury or adverse effects." },
                    { title: "Non-Sterile", desc: "Does not contact sterile body tissues or require sterilization." },
                    { title: "Non-Measuring", desc: "Does not take quantitative physiological measurements." }
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                      <h4 className="font-bold text-navy mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-navy mb-4">Examples of Eligible Devices:</h3>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Tongue depressors", "Non-sterile bandages", "Non-electric thermometers", "Non-sterile surgical drapes", "Examination gloves", "Bedpans", "Crutches", "Stethoscopes", "Cotton balls"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  Registration Requirements
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Since October 2022, registration through the CDSCO's official MD Online portal has been legally mandatory for all Class A (non-sterile, non-measuring) devices. However, a major advantage for these low-risk products is the <strong>Self-Registration</strong> provision, which greatly accelerates market entry.
                </p>
                
                <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-lg font-bold text-navy mb-4">Who is Eligible to Register?</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-700">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Domestic Manufacturers</h4>
                        <p className="text-sm text-gray-600 mt-1">Any Indian company that manufactures these specific Class A devices locally.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <span className="font-bold text-blue-700">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-navy">Importers</h4>
                        <p className="text-sm text-gray-600 mt-1">Indian entities importing these devices from overseas. Importers are required to secure a Free Sale Certificate (FSC) from the country of origin.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-6">Need Assistance?</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Even with self-registration, navigating the CDSCO portal and ensuring all documentation is accurate can be challenging. Our regulatory experts are here to streamline your market entry.
                </p>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Contact Our Experts
                </Link>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-navy mb-4 text-sm uppercase tracking-wide">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/mfg-class-a-gsr" className="text-sm text-blue-600 hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Manufacturing Registration (GSR 777(E))
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/india/md-42" className="text-sm text-blue-600 hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        MD-42 Certificate
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


