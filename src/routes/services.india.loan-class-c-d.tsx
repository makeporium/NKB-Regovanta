import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Factory, ClipboardList, ShieldAlert, FileText } from "lucide-react";

export const Route = createFileRoute("/services/india/loan-class-c-d")({
  component: LoanClassCDPage,
  head: () => ({
    meta: [
      { title: "Loan Licenses for Class C & D Devices | MD-8 & MD-10" },
      { name: "description", content: "Learn how to obtain CDSCO MD-10 loan licenses to manufacture Class C and D high-risk medical devices in existing licensed facilities in India." },
    ],
  }),
});

function LoanClassCDPage() {
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
              Loan Licensing
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Loan Licenses for Class C & D <br/> (Forms MD-8 & MD-10)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Scale your production of high-risk medical devices efficiently by utilizing existing, fully-compliant licensed manufacturing facilities in India.
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
                  What Are Forms MD-8 & MD-10?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For start-ups or companies lacking their own specialized manufacturing infrastructure, producing high-risk (Class D) or moderate-high risk (Class C) devices presents a massive capital barrier. A Loan License allows you to utilize an existing manufacturer's facility to produce your devices.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-8: Application</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Submitted electronically to the Central Licensing Authority (CLA), this form details your request to manufacture Class C or D devices at a loan facility.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-10: License</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The official Loan License granted by the CLA. It authorizes the legal manufacturing of your high-risk devices at the approved loaned premises.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <Factory className="h-7 w-7 text-blue-600" />
                  Strategic Advantages of MD-10
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Drastically Reduced Costs</h4>
                      <p className="text-sm text-gray-700 mt-1">Avoids the massive capital expenditure (CAPEX) required to construct a new, stringent Class C/D compliant manufacturing unit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Faster Time to Market</h4>
                      <p className="text-sm text-gray-700 mt-1">By leveraging a facility that already meets complex regulatory demands, you bypass facility construction and initial compliance hurdles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Unmatched Scalability & Flexibility</h4>
                      <p className="text-sm text-gray-700 mt-1">Easily adjust production volumes based on market demand, or contract facilities for temporary production boosts without long-term overhead.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-6">The MD-8 Application Workflow</h3>
                <div className="space-y-6">
                  {[
                    { title: "Documentation Compilation", desc: "Gather agreements between loanee and licensor, QMS certificates, valid CDSCO Test Licenses, Plant Master Files, and Device Master Files." },
                    { title: "Online Submission", desc: "Submit MD-8 and pay the requisite government base and device-specific fees." },
                    { title: "Notified Body Audit", desc: "The CLA appoints an approved Notified Body to rigorously audit the actual manufacturing premises." },
                    { title: "CLA Scrutiny & Approval", desc: "Following a rigorous review of the dossier and the Notified Body's audit report, the CLA issues the MD-10 license." },
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
                <h3 className="text-xl font-bold mb-6">Streamline Your MD-8 Application</h3>
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  The scrutiny for Class C and D loan licenses is intense. Missing documentation or poorly drafted loanee-licensor agreements can cause months of delays.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Preparation of robust legal agreements</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>MDR 2017 compliant Plant & Device Master Files</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/90 items-start">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                    <span>Notified Body audit preparation</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 rounded-lg text-sm font-bold text-navy bg-gold hover:bg-white transition-colors">
                  Consult Our Experts
                </Link>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/mfg-class-c-d" className="text-sm text-gold hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Standard Mfg License (Class C & D)
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


