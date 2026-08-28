import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ClipboardList, ShieldCheck, Zap, ArrowRight, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/mfg-class-a-gsr")({
  component: MfgClassAGsrPage,
  head: () => ({
    meta: [
{ title: "Manufacturing Registration Class A Medical Devices India | GSR 777(E) | NKB Regovanta" },
      { name: "description", content: "Fast-track CDSCO manufacturing registration for non-sterile and non-measuring Class A medical devices under GSR 777(E) in India." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/mfg-class-a-gsr" },
    ],
  }),
});

function MfgClassAGsrPage() {
  return (
    <div className="bg-white">
            {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Class A Manufacturing  Registration (GSR 777(E))" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Class</span> A Manufacturing <br/> Registration (GSR 777(E))
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Experience a streamlined compliance and rapid registration process for low-risk, non-sterile, and non-measuring medical devices in India.
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
            <span className="text-[#0b3a96]">Class</span> A Manufacturing <br/> Registration (GSR 777(E))
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Experience a streamlined compliance and rapid registration process for low-risk, non-sterile, and non-measuring medical devices in India.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Class A Manufacturing  Registration (GSR 777(E))" className="mt-8 w-full" />
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
                  <Zap className="h-7 w-7 text-blue-600" />
                  Streamlined Compliance for Low-Risk Devices
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While the CDSCO mandates registration for all medical devices in India, it has implemented a significantly simplified pathway under GSR 777(E) for specific low-risk products.
                </p>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-navy mb-4">Qualifying Device Characteristics:</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-bold text-navy mb-1 text-sm">Low Risk</h4>
                      <p className="text-xs text-gray-600">Minimal potential for harm.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-bold text-navy mb-1 text-sm">Non-Sterile</h4>
                      <p className="text-xs text-gray-600">No contact with sterile environments.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <h4 className="font-bold text-navy mb-1 text-sm">Non-Measuring</h4>
                      <p className="text-xs text-gray-600">Does not quantify physiological parameters.</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-100">
                    <p className="text-sm text-gray-700 font-medium">Examples:</p>
                    <p className="text-sm text-gray-600">Tongue depressors, bandages, non-electric thermometers, non-sterile surgical drapes, and examination gloves.</p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-100" />

              <div>
                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                  <ClipboardList className="h-7 w-7 text-blue-600" />
                  Key Requirements for Registration
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Indian manufacturers (and importers) must utilize the CDSCO MD Online Portal. Upon successful submission of accurate information, a registration number is generated almost immediately within the system.
                </p>
                
                <div className="space-y-4">
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Quality Management System (QMS)</h4>
                      <p className="text-sm text-gray-700 mt-1">A valid ISO 13485 certificate, accredited by NABCB or IAF, is a mandatory prerequisite.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Device & Company Details</h4>
                      <p className="text-sm text-gray-700 mt-1">Comprehensive information regarding the manufacturer/importer, device intended use, classification, and materials of construction.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                    <ShieldCheck className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-navy">Undertakings</h4>
                      <p className="text-sm text-gray-700 mt-1">Formal declarations confirming strict compliance with safety, performance standards, and the Medical Device Rules, 2017.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-6">Minimize Risk of Rejection</h3>
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Despite the simplified "instant" registration process, any inaccurate documentation or misclassification can lead to immediate rejection or compliance issues later.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Verify correct Class A classification</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Ensure ISO 13485 certificate validity (NABCB/IAF)</span>
                  </li>
                  <li className="flex gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                    <span>Flawless CDSCO MD Online submission</span>
                  </li>
                </ul>
                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                  Get Expert Assistance
                </Link>
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
