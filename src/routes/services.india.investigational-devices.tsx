import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, ClipboardList, Hospital, ShieldAlert, ArrowRight, ShieldCheck, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/investigational-devices")({
  component: InvestigationalDevicesPage,
  head: () => ({
    meta: [
      { title: "Import Authorization for Investigational Devices | NKB Regovanta" },
      { name: "description", content: "CDSCO import authorization for investigational medical devices under Forms MD-18 and MD-19. End-to-end support for CROs, sponsors, and manufacturers seeking clinical investigation approvals in India. Protocol review, ethics committee liaison, and SUGAM submission." },
      { name: "keywords", content: "MD-18 investigational device import, MD-19 clinical trial device India, CDSCO clinical investigation permission, clinical trial medical device CDSCO" },
      { property: "og:title", content: "Import Authorization for Investigational Devices | NKB Regovanta" },
      { property: "og:description", content: "CDSCO import authorization for investigational medical devices under Forms MD-18 and MD-19. End-to-end support for CROs, sponsors, and manufacturers seeking clinical investigation approvals in India. Protocol review, ..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/india/investigational-devices" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Import Authorization for Investigational Devices | NKB Regovanta" },
      { name: "twitter:description", content: "CDSCO import authorization for investigational medical devices under Forms MD-18 and MD-19. End-to-end support for CROs, sponsors, and manufacturers seeking clinical investigation approvals in India. Protocol review, ..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/investigational-devices" },
    ],
  }),
});

function InvestigationalDevicesPage() {
  return (
    <div className="bg-white">
            {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Investigational Devices in Govt. Hospitals  (Forms MD-18, MD-19)" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Investigational</span> Devices in Govt. Hospitals <br/> (Forms MD-18, MD-19)
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Navigate the specialized regulatory pathway allowing government hospitals to import unapproved, cutting-edge medical devices for compassionate patient use.
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
          <p className="font-display text-3xl font-bold leading-tight text-[#0f2340] sm:text-4xl">
            <span className="text-[#0b3a96]">Investigational</span> Devices in Govt. Hospitals <br/> (Forms MD-18, MD-19)
          </p>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Navigate the specialized regulatory pathway allowing government hospitals to import unapproved, cutting-edge medical devices for compassionate patient use.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Investigational Devices in Govt. Hospitals  (Forms MD-18, MD-19)" className="mt-8 w-full" />
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



const heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;
