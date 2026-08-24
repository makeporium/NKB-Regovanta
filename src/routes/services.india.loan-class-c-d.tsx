import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Factory, ClipboardList, ShieldAlert, FileText, ArrowRight, ShieldCheck, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/loan-class-c-d")({
  component: LoanClassCDPage,
  head: () => ({
    meta: [
      { title: "Loan Licenses for Class C & D Devices | MD-8 & MD-10" },
      { name: "description", content: "Learn how to obtain CDSCO MD-10 loan licenses to manufacture Class C and D high-risk medical devices in existing licensed facilities in India." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/loan-class-c-d" },
    ],
  }),
});

function LoanClassCDPage() {
  return (
    <div className="bg-white">
            {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Loan Licenses for Class C & D  (Forms MD-8 & MD-10)" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Loan</span> Licenses for Class C & D <br/> (Forms MD-8 & MD-10)
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Scale your production of high-risk medical devices efficiently by utilizing existing, fully-compliant licensed manufacturing facilities in India.
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
            <span className="text-[#0b3a96]">Loan</span> Licenses for Class C & D <br/> (Forms MD-8 & MD-10)
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Scale your production of high-risk medical devices efficiently by utilizing existing, fully-compliant licensed manufacturing facilities in India.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Loan Licenses for Class C & D  (Forms MD-8 & MD-10)" className="mt-8 w-full" />
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



const heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;
