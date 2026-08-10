import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FlaskConical, ClipboardList, PackageSearch, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/services/india/novel-ivds")({
  component: NovelIVDsPage,
  head: () => ({
    meta: [
      { title: "Import Authorization for Novel IVDs | MD-26 & MD-27" },
      { name: "description", content: "Secure CDSCO permissions (MD-26 and MD-27) to import or manufacture new In Vitro Diagnostic (IVD) medical devices in India." },
    ],
  }),
});

function NovelIVDsPage() {
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
              CDSCO Approvals
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Import Authorization for <br/> Novel IVDs (MD-26 & MD-27)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Navigate the complex regulatory pathway for introducing new, innovative In Vitro Diagnostic (IVD) devices to the Indian healthcare market.
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
                  <FlaskConical className="h-7 w-7 text-blue-600" />
                  What is a "New" IVD Device?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bringing a novel In Vitro Diagnostic (IVD) medical device to India requires precise regulatory approval. Under the Medical Devices Rules, 2017, a "new IVD medical device" generally refers to a diagnostic product that has not been previously approved in India, or an existing device that has undergone significant modifications.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-26</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The detailed application submitted to the Central Licensing Authority (CLA). It requires comprehensive data proving the device's safety, quality, and performance—particularly crucial when no "predicate device" exists.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-27</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The official license granted by the Drug Controller General of India upon successful review of MD-26. It legally permits the import or manufacture of the new IVD in India.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  The Detailed MD-26 Submission Process
                </h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Introducing a novel IVD device demands a highly structured and data-rich application via the CDSCO's Sugam portal. Key steps include:
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "Classification & Scope", desc: "Accurately classify the new IVD to determine the specific regulatory pathway. Clearly define its intended use to avoid any ambiguity." },
                    { title: "Technical Documentation (Device Master File)", desc: "Prepare a comprehensive dossier detailing design and development records, manufacturing processes, QC procedures, and complete product specifications." },
                    { title: "Performance Data", desc: "Submit robust analytical performance data (sensitivity, specificity, accuracy, precision) and clinical performance evaluation data proving real-world effectiveness." },
                    { title: "Risk Management", desc: "Develop an ISO 14971-compliant risk management plan and report, outlining robust mitigation strategies." },
                    { title: "QMS Documentation", desc: "Provide evidence of a rigorous Quality Management System, such as ISO 13485 certification." },
                    { title: "CDSCO Expert Review", desc: "The CLA and subject matter experts thoroughly review the dossier, potentially requesting clarifications or facility audits." },
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
                <h3 className="text-xl font-bold mb-6">Why Partner With Us?</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  Obtaining approvals for novel IVDs is notoriously complex. Our specialized team increases your chances of a successful, timely approval.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Strategic pre-submission pathway planning</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Expert technical dossier compilation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Optimization of analytical & clinical data presentation</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Direct CDSCO liaison & query management</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Consult Our IVD Experts
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}


