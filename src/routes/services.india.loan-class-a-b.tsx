import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Factory, ClipboardList, ShieldCheck, FileText } from "lucide-react";

export const Route = createFileRoute("/services/india/loan-class-a-b")({
  component: LoanClassABPage,
  head: () => ({
    meta: [
      { title: "Loan Licenses for Class A & B Devices | MD-4 & MD-6" },
      { name: "description", content: "Learn how to obtain SLA MD-6 loan licenses to manufacture Class A and B medical devices in existing licensed facilities in India." },
    ],
  }),
});

function LoanClassABPage() {
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
              Loan Licenses for Class A & B <br/> (Forms MD-4 & MD-6)
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Launch your low-to-moderate risk medical devices efficiently by utilizing existing State Licensing Authority (SLA) approved manufacturing facilities.
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
                  What Are Forms MD-4 & MD-6?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  For startups or companies aiming to manufacture Class A or Class B medical devices without investing in their own manufacturing unit, a Loan License is the ideal pathway. It permits you to contract an existing, licensed manufacturer to produce your devices.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-4: Application</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The official application form submitted electronically via the CDSCO portal, requesting a loan license for low-to-moderate risk devices.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h3 className="font-bold text-navy mb-3 text-lg">Form MD-6: License</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      The final Loan License issued by the State Licensing Authority (SLA), granting legal authorization to manufacture at the loaned facility.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <Factory className="h-7 w-7 text-blue-600" />
                  Strategic Advantages of MD-6
                </h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Rapid Time to Market</h4>
                      <p className="text-sm text-gray-700 mt-1">Bypass the lengthy facility construction and QMS setup phases by leveraging an existing compliant facility.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Capital Efficiency</h4>
                      <p className="text-sm text-gray-700 mt-1">Eliminates the significant initial capital expenditure (CAPEX) required to establish a new manufacturing unit.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-blue-50/50 border border-blue-100 items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Agile Scalability</h4>
                      <p className="text-sm text-gray-700 mt-1">Easily adjust production volumes based on market demand by contracting with a loan facility that has available capacity.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-navy mb-6">The MD-4 Application Workflow</h3>
                <div className="space-y-6">
                  {[
                    { title: "Documentation Compilation", desc: "Gather agreements between loanee and licensor, QMS certificates, valid CDSCO Test Licenses, Plant Master Files, and Device Master Files." },
                    { title: "Online Submission", desc: "Submit MD-4 and pay the requisite government base and device-specific fees via the CDSCO portal." },
                    { title: "Notified Body Audit", desc: "The SLA appoints an approved Notified Body to audit the actual manufacturing premises." },
                    { title: "SLA Scrutiny & Approval", desc: "Following a review of the dossier and the audit report, the SLA issues the MD-6 loan license." },
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
                <h3 className="text-xl font-bold text-navy mb-6">Streamline Your MD-4 Application</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  While Class A & B devices are lower risk, the legal and documentation requirements between the loanee and licensor must be flawlessly executed.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Preparation of robust legal agreements</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>MDR 2017 compliant Plant & Device Master Files</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Seamless SLA communication</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Consult Our Experts
                </Link>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-navy mb-4 text-sm uppercase tracking-wide">Related Services</h4>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/services/india/mfg-class-a-b" className="text-sm text-blue-600 hover:underline flex items-start gap-2">
                        <FileText className="h-4 w-4 shrink-0 mt-0.5" />
                        Standard Mfg License (Class A & B)
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


