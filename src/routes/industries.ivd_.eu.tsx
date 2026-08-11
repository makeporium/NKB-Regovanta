import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, FileCheck2, ShieldCheck, Database, Calendar, Users, FlaskConical } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-ivd.png";
import eudamedFlowchart from "@/assets/eudamed_registration_workflow.png";

export const Route = createFileRoute("/industries/ivd_/eu")({
  head: () => ({
    meta: [
      { title: "IVD Regulation in the EU | IVDR 2017/746 | NKB Regovanta" },
      { name: "description", content: "Navigate the EU's In Vitro Diagnostic Medical Devices Regulation (IVDR). Expert support for Notified Body conformity, EUDAMED registration, and clinical evidence." },
    ],
  }),
  component: IVDEu,
});

const services = [
  {
    icon: <Users className="h-6 w-6 text-accent mb-4" />,
    title: "Notified Body Representation",
    desc: "We support you through the rigorous conformity assessments required by EU Notified Bodies for Class B, C, and D devices.",
  },
  {
    icon: <Database className="h-6 w-6 text-accent mb-4" />,
    title: "EUDAMED Registration",
    desc: "Ensure seamless market access by registering your Actor details and UDI/Device information in EUDAMED before the May 2026 deadline.",
  },
  {
    icon: <FlaskConical className="h-6 w-6 text-accent mb-4" />,
    title: "Clinical Evidence & PMPF",
    desc: "Develop robust analytical and clinical performance reports, and establish proactive Post-Market Performance Follow-up (PMPF) plans.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
    title: "Technical Documentation",
    desc: "Compile comprehensive technical files ensuring strict alignment with the General Safety and Performance Requirements (GSPRs) of Annex I.",
  },
];

function IVDEu() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white overflow-hidden pb-4 pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
          <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
            <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/industries/ivd" className="hover:text-navy transition-colors">IVD</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">European Union</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">European Regulatory Framework</p>
          <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            IVD Regulation in the EU — IVDR 2017/746
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            The European Union overhauled its diagnostic framework with the introduction of the In Vitro Diagnostic Medical Devices Regulation (IVDR) 2017/746. Fully replacing the outdated IVDD, this regulation introduces significantly stricter clinical evidence requirements, mandates extensive Notified Body involvement, and relies heavily on the EUDAMED database.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-surface/30 border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-border/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">The IVDR Classification Paradigm Shift</h2>
            <div className="prose prose-blue max-w-none text-navy/80 space-y-6">
              <p className="text-[15px] leading-relaxed">
                Under the previous IVD Directive (IVDD), nearly 80% of diagnostic devices could be self-certified by the manufacturer. The implementation of IVDR has fundamentally reversed this statistic. Today, approximately 80% of all IVDs require conformity assessment by an independent <strong>Notified Body</strong> before they can be placed on the European market.
              </p>
              
              <div className="bg-surface/50 p-6 rounded-md my-8 border border-border">
                <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2"><FileCheck2 className="w-5 h-5 text-accent"/> EU IVDR Classification Matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                    <thead>
                      <tr className="border-b-2 border-navy/20">
                        <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Class</th>
                        <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Risk Level</th>
                        <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Examples</th>
                        <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Assessment Pathway</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr className="hover:bg-white transition-colors">
                        <td className="py-3 px-3 font-semibold text-navy/90">Class A</td>
                        <td className="py-3 px-3 text-navy/70">Lowest risk</td>
                        <td className="py-3 px-3 text-navy/70">Lab equipment, general reagents</td>
                        <td className="py-3 px-3 text-navy/70">Self-declaration (unless sterile)</td>
                      </tr>
                      <tr className="hover:bg-white transition-colors bg-white/20">
                        <td className="py-3 px-3 font-semibold text-navy/90">Class B</td>
                        <td className="py-3 px-3 text-navy/70">Moderate risk</td>
                        <td className="py-3 px-3 text-navy/70">Urine analysis, general serology tests</td>
                        <td className="py-3 px-3 text-navy/70">Notified Body mandatory</td>
                      </tr>
                      <tr className="hover:bg-white transition-colors">
                        <td className="py-3 px-3 font-semibold text-navy/90">Class C</td>
                        <td className="py-3 px-3 text-navy/70">High individual risk</td>
                        <td className="py-3 px-3 text-navy/70">Cancer screening, companion diagnostics</td>
                        <td className="py-3 px-3 text-navy/70">Notified Body + EURL</td>
                      </tr>
                      <tr className="hover:bg-white transition-colors bg-white/20">
                        <td className="py-3 px-3 font-semibold text-navy/90">Class D</td>
                        <td className="py-3 px-3 text-navy/70">High public health risk</td>
                        <td className="py-3 px-3 text-navy/70">HIV, HBV, blood screening products</td>
                        <td className="py-3 px-3 text-navy/70">Notified Body + EURL + Common Specs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">Core IVDR Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-surface p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-navy text-lg mb-2">Rigorous Performance Evaluation</h3>
                  <p className="text-[14px] text-navy/80 leading-relaxed">Mandatory for all devices under IVDR. You must compile analytical performance data, clinical performance data, and establish scientific validity. Unlike India, existing clinical data can be utilized if it is scientifically robust, minimizing the need for new trials.</p>
                </div>
                <div className="bg-surface p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-navy text-lg mb-2">GSPRs and Technical Files</h3>
                  <p className="text-[14px] text-navy/80 leading-relaxed">Manufacturers must prove strict conformity to the General Safety and Performance Requirements (GSPRs) found in Annex I. This requires a comprehensive technical file containing design details, risk management, and labeling plans.</p>
                </div>
                <div className="bg-surface p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-navy text-lg mb-2">Designated PRRC</h3>
                  <p className="text-[14px] text-navy/80 leading-relaxed">It is legally required to appoint a Person Responsible for Regulatory Compliance (PRRC) who possesses specific technical and regulatory qualifications to oversee continuous compliance.</p>
                </div>
                <div className="bg-surface p-6 rounded-lg border border-border">
                  <h3 className="font-bold text-navy text-lg mb-2">PMPF and UDI Systems</h3>
                  <p className="text-[14px] text-navy/80 leading-relaxed">Post-Market Performance Follow-up (PMPF) ensures proactive device monitoring post-launch. Furthermore, all devices must be assigned a Unique Device Identifier (UDI) and be registered within EUDAMED.</p>
                </div>
              </div>
              
              {/* EUDAMED workflow */}
              <div className="w-full rounded-lg shadow-sm border border-border flex items-center justify-center my-10 overflow-hidden bg-white p-2">
                <img src={eudamedFlowchart} alt="EUDAMED Registration Workflow" className="w-full h-auto object-contain rounded-md" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-accent" /> EUDAMED Transition Timelines
              </h2>
              <p className="text-[15px] leading-relaxed mb-6">
                The most critical development for 2025–2026 is the mandatory rollout of EUDAMED. As per Commission Decision (EU) 2025/2371, four core EUDAMED modules are fully functional and will transition from voluntary to mandatory status on <strong>28 May 2026</strong>. Any obligation linked to Actor Registration, UDI/Device Registration, Notified Bodies & Certificates, or Market Surveillance must be fulfilled exclusively within EUDAMED.
              </p>
              
              <ul className="space-y-4 pl-4 border-l-2 border-accent/30 ml-2">
                <li className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent"></div>
                  <strong className="text-navy text-[15px]">28 May 2026:</strong> 
                  <span className="text-[14.5px] text-navy/80 ml-2">Mandatory use of the first four EUDAMED modules goes live. If you export to the EU, your Authorised Representative must be registered in the Actor module prior to this date.</span>
                </li>
                <li className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent"></div>
                  <strong className="text-navy text-[15px]">28 November 2026:</strong> 
                  <span className="text-[14.5px] text-navy/80 ml-2">Final deadline to register legacy devices (those placed on the market before May 2026 but continuing to be sold).</span>
                </li>
                <li className="relative pl-6">
                  <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent"></div>
                  <strong className="text-navy text-[15px]">28 May 2027:</strong> 
                  <span className="text-[14.5px] text-navy/80 ml-2">Notified Bodies must complete the upload of all legacy IVDR certificate information.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-navy">Our IVDR Compliance Solutions</h2>
             <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
               From navigating Notified Body backlogs to ensuring your EUDAMED data is perfectly structured ahead of impending deadlines, our experts streamline your European market access.
             </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, idx) => (
              <div key={idx} className="p-8 rounded-md bg-surface/50 border border-border hover:bg-surface transition-colors">
                {s.icon}
                <h3 className="font-bold text-navy text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-navy/70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Navigate IVDR conformity with confidence" btnText="Contact Our EU Experts" />
    </>
  );
}
