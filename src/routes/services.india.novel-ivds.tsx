import heroImg from "@/assets/cdsco-india-hero.png";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FlaskConical, ClipboardList, PackageSearch, ShieldCheck, ArrowRight, FileCheck2, ClipboardCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services/india/novel-ivds")({
  component: NovelIVDsPage,
  head: () => ({
    meta: [
{ title: "Import Authorization for Novel IVDs India | MD-26 & MD-27 | NKB Regovanta" },
      { name: "description", content: "Secure CDSCO permissions (MD-26 and MD-27) to import or manufacture new In Vitro Diagnostic (IVD) medical devices in India." },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/novel-ivds" },
    ],
  }),
});

function NovelIVDsPage() {
  return (
    <div className="bg-white">
            {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="Import Authorization for  Novel IVDs (MD-26 & MD-27)" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              <span className="text-[#0b3a96]">Import</span> Authorization for <br/> Novel IVDs (MD-26 & MD-27)
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              Navigate the complex regulatory pathway for introducing new, innovative In Vitro Diagnostic (IVD) devices to the Indian healthcare market.
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
            <span className="text-[#0b3a96]">Import</span> Authorization for <br/> Novel IVDs (MD-26 & MD-27)
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            Navigate the complex regulatory pathway for introducing new, innovative In Vitro Diagnostic (IVD) devices to the Indian healthcare market.
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="Import Authorization for  Novel IVDs (MD-26 & MD-27)" className="mt-8 w-full" />
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
                    { title: "Classification & Scope | NKB Regovanta", desc: "Accurately classify the new IVD to determine the specific regulatory pathway. Clearly define its intended use to avoid any ambiguity." },
                    { title: "Technical Documentation (Device Master File) | NKB Regovanta", desc: "Prepare a comprehensive dossier detailing design and development records, manufacturing processes, QC procedures, and complete product specifications." },
                    { title: "Performance Data | NKB Regovanta", desc: "Submit robust analytical performance data (sensitivity, specificity, accuracy, precision) and clinical performance evaluation data proving real-world effectiveness." },
                    { title: "Risk Management | NKB Regovanta", desc: "Develop an ISO 14971-compliant risk management plan and report, outlining robust mitigation strategies." },
                    { title: "QMS Documentation | NKB Regovanta", desc: "Provide evidence of a rigorous Quality Management System, such as ISO 13485 certification." },
                    { title: "CDSCO Expert Review | NKB Regovanta", desc: "The CLA and subject matter experts thoroughly review the dossier, potentially requesting clarifications or facility audits." },
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



const heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;
