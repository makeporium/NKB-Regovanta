import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Factory, ClipboardList, ShieldCheck, FileText, ArrowRight, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/mfg-class-a-b")({
  component: MfgClassABPage,
  head: () => ({
    meta: [
      { title: "Manufacturing License for Class A & B Devices | MD-3 & MD-5" },
      { name: "description", content: "Expert assistance for acquiring CDSCO MD-5 manufacturing licenses for low-to-moderate risk Class A and B medical devices in India." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/mfg-class-a-b" },
    ],
  }),
});

function MfgClassABPage() {
  return (
    <div className="bg-white">
            {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Class A & B Manufacturing  (Forms MD-3 & MD-5)" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Class</span> A & B Manufacturing <br/> (Forms MD-3 & MD-5)
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Obtain the essential MD-5 manufacturing license from the State Licensing Authority (SLA) for low-to-moderate risk medical devices.
            </p>
            <Link
              to="/contact"
              className="mt-[2.2cqw] inline-flex w-fit items-center gap-[1.2cqw] rounded-[0.45cqw] bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-[1.9cqw] py-[0.95cqw] text-[1.05cqw] font-bold text-white shadow-lg shadow-[#0a3d96]/20 transition-opacity hover:opacity-90"
            >
              Consult Our CDSCO Experts
              <ArrowRight className="h-[1.3cqw] w-[1.3cqw]" />
            </Link>
          </div>

          {heroBadges.map(({ icon: Icon, lines, x, y, side }) => (
            <div
              key={lines.join(" ")}
              className="absolute flex h-[5cqw] w-[5cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,35,64,0.10)] ring-1 ring-[#e4ecf7]"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <Icon className="h-[2.5cqw] w-[2.5cqw] text-[#12306f]" strokeWidth={1.6} />
              <p
                className={
                  side === "right"
                    ? "absolute left-full top-1/2 ml-[0.9cqw] -translate-y-1/2 whitespace-nowrap text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                    : "absolute left-1/2 top-full mt-[0.7cqw] -translate-x-1/2 whitespace-nowrap text-center text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                }
              >
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden px-4 pt-12 pb-8 sm:px-6">
          <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-4 font-semibold text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to India CDSCO Services
          </Link>
          <h1 className="font-display text-3xl font-bold leading-tight text-[#0f2340] sm:text-4xl">
            <span className="text-[#0b3a96]">Class</span> A & B Manufacturing <br/> (Forms MD-3 & MD-5)
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Obtain the essential MD-5 manufacturing license from the State Licensing Authority (SLA) for low-to-moderate risk medical devices.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Class A & B Manufacturing  (Forms MD-3 & MD-5)" className="mt-8 w-full" />
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



const heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;
