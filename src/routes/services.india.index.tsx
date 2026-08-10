import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, FileText, Factory, ArrowRight, ShieldCheck, Download, Search } from "lucide-react";

export const Route = createFileRoute("/services/india/")({
  component: IndiaCDSCOPage,
  head: () => ({
    meta: [
      { title: "CDSCO Medical Device Registration India | NKB Regovanta" },
      { name: "description", content: "Expert CDSCO consultancy services for medical device import license, manufacturing license, and regulatory approvals in India." },
    ],
  }),
});

function IndiaCDSCOPage() {
  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="bg-navy py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('@/assets/world-map.png')] bg-cover bg-center mix-blend-screen pointer-events-none"></div>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">
              India Regulatory Services
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              CDSCO Medical Device <br /> Registration in India
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
              Expert CDSCO consultancy services for medical device import licenses, manufacturing licenses, MDR 2017 compliance, and seamless regulatory approvals in India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold text-navy bg-gold hover:bg-white transition-colors rounded-lg">
                Consult Our CDSCO Experts
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-navy leading-tight">
                CDSCO Simplified: <br/> Your Entry to the Indian Market
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The <strong>Central Drugs Standard Control Organization (CDSCO)</strong> stands as the vigilant gatekeeper of India's booming medical device market. Governed by the stringent Drugs and Cosmetics Act, 1940, and the Medical Devices Rules, 2017, CDSCO’s mandate is clear: ensure every medical device entering or manufactured in India meets the highest global benchmarks for safety, quality, and efficacy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For global and domestic innovators, navigating CDSCO’s intricate regulations—from precise device classification and exhaustive documentation to mastering the <strong>CDSCO Sugam portal</strong> and adapting to evolving guidelines—can be the most significant barrier to market entry and growth.
              </p>
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 mt-8">
                <h3 className="font-bold text-navy mb-3">Redefining the Journey</h3>
                <p className="text-sm text-gray-700">
                  We don’t just guide you through compliance; we fast-track your success. Our deep-seated expertise and strategic insights cut through complexity, transforming regulatory hurdles into streamlined pathways. With NKB Regovanta, your devices achieve rapid, confident, and enduring market access.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-navy rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover border border-gray-100 bg-navy/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('@/assets/world-map.png')] bg-cover bg-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* SUGAM PORTAL SECTION */}
      <section className="py-16 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('@/assets/world-map.png')] bg-cover bg-center pointer-events-none"></div>
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">CDSCO MDONLINE SUGAM Registration</h2>
          <p className="text-lg text-white/80 leading-relaxed">
            In India’s evolving medical device sector, the <strong>CDSCOMDONLINE Portal</strong> stands as the indispensable online platform for all regulatory interactions. This intuitive system is designed to simplify and accelerate your licensing journey, enabling efficient application submissions, real-time status tracking, and secure approval acquisition. Our team expertly navigates this portal on your behalf.
          </p>
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES MENU */}
      <section className="py-20 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Our CDSCO Services</h2>
            <p className="text-lg text-gray-600">
              Select a service below to explore specific requirements, processes, and how our expert consultants can facilitate your regulatory approvals.
            </p>
          </div>

          <div className="space-y-16">
            
            {/* Import Registrations */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Download className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Import Registrations</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Class A Import Registration as per GSR 777(E)", link: "/services/india/class-a-import" },
                  { name: "Import License for Predicate Medical Devices (Forms MD-14, MD-15)", link: "/services/india/predicate-devices" },
                  { name: "Import Authorization for Investigational Devices (Forms MD-18, MD-19)", link: "/services/india/investigational-devices" },
                  { name: "Import Authorization for Novel Medical Devices IVDs (Forms MD-26, MD-27)", link: "/services/india/novel-ivds" },
                  { name: "Import Permission for IVD Clinical Performance Evaluations (Forms MD-24, MD-25)", link: "/services/india/ivd-clinical-performance" },
                  { name: "Import License for IVD Devices for Testing & Evaluation (Forms MD-16, MD-17)", link: "/services/india/ivd-testing" },
                  { name: "Personal Use Medical Device Import License (Forms MD-20, MD-21)", link: "/services/india/personal-use" },
                ].map((item, idx) => (
                  <Link key={idx} to={item.link} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 flex flex-col justify-between h-full">
                    <h4 className="font-bold text-navy group-hover:text-blue-600 transition-colors mb-4 text-sm leading-relaxed">{item.name}</h4>
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">Read More <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Manufacturing Registrations */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <Factory className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy">Manufacturing Registrations</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Manufacturing Licenses for Class C & D Medical Devices (Forms MD-7, MD-9)", link: "/services/india/mfg-class-c-d" },
                  { name: "Manufacturing Licenses for Class A & B Medical Devices (Forms MD-3, MD-5)", link: "/services/india/mfg-class-a-b" },
                  { name: "Manufacturing Registration for Class A Medical Devices as per GSR 777(E)", link: "/services/india/mfg-class-a-gsr" },
                  { name: "Loan Licenses for Manufacturing Class C & D Medical Devices (Forms MD-8, MD-10)", link: "/services/india/loan-class-c-d" },
                  { name: "Loan Licenses for Manufacturing Class A & B Medical Devices (Forms MD-4, MD-6)", link: "/services/india/loan-class-a-b" },
                ].map((item, idx) => (
                  <Link key={idx} to={item.link} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 flex flex-col justify-between h-full">
                    <h4 className="font-bold text-navy group-hover:text-blue-600 transition-colors mb-4 text-sm leading-relaxed">{item.name}</h4>
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">Read More <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* CDSCO Certificates */}
            <div>
              <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy">CDSCO Certificates</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "MD-42 Certificate (Medical Device Registration)", link: "/services/india/md-42" },
                  { name: "Non-Conviction Certificate (NCC)", link: "/services/india/non-conviction" },
                  { name: "Market Standing Certificate (MSC)", link: "/services/india/market-standing" },
                  { name: "Neutral Code Certificate (Special Code)", link: "/services/india/neutral-code" },
                  { name: "Free Sale Certificate (FSC)", link: "/services/india/free-sale" },
                ].map((item, idx) => (
                  <Link key={idx} to={item.link} className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 flex flex-col justify-between h-full">
                    <h4 className="font-bold text-navy group-hover:text-blue-600 transition-colors mb-4 text-sm leading-relaxed">{item.name}</h4>
                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">Read More <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}


