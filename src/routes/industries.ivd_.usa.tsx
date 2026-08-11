import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, FileCheck2, ShieldCheck, Microscope, Database, Network, Scale } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-ivd.png";
import fdaIvdFlowchart from "@/assets/fda_ivd_regulatory_pathway_flowchart.png";

export const Route = createFileRoute("/industries/ivd_/usa")({
  head: () => ({
    meta: [
      { title: "IVD Regulation in the USA | US FDA Framework | NKB Regovanta" },
      { name: "description", content: "Expert assistance with US FDA regulations for IVD devices, including 510(k), De Novo, PMA submissions, and CLIA waivers for Point-of-Care testing." },
    ],
  }),
  component: IVDUsa,
});

const services = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
    title: "510(k) & Pre-Submission",
    desc: "We expertly map substantial equivalence to predicates and manage the Q-Submission process to align expectations with the FDA prior to formal review.",
  },
  {
    icon: <Microscope className="h-6 w-6 text-accent mb-4" />,
    title: "CLIA Waiver Strategy",
    desc: "For Point-of-Care diagnostics, we design and execute the specialized analytical and usability studies required to secure CLIA waiver status.",
  },
  {
    icon: <Scale className="h-6 w-6 text-accent mb-4" />,
    title: "LDT Compliance",
    desc: "Navigate the FDA's finalized phase-in oversight for Laboratory Developed Tests (LDTs) with our targeted quality and submission transition plans.",
  },
  {
    icon: <FileCheck2 className="h-6 w-6 text-accent mb-4" />,
    title: "QMSR Alignment",
    desc: "We help transition your current 21 CFR Part 820 quality system to strictly align with the upcoming ISO 13485-based QMSR requirements.",
  },
];

function IVDUsa() {
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
            <span className="text-navy">USA</span>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">US Regulatory Framework</p>
          <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
            IVD Regulation in the USA — US FDA Framework
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
            In the United States, In-Vitro Diagnostic devices are regulated by the FDA's Center for Devices and Radiological Health (CDRH) under the FD&C Act. The US framework relies heavily on a tiered, risk-based classification system determining the correct premarket pathway—from 510(k) notifications to rigorous PMAs.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-surface/30 border-t border-border mt-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-lg border border-border/50 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">FDA Classification & Key Pathways</h2>
            <div className="prose prose-blue max-w-none text-navy/80 space-y-6">
              <p className="text-[15px] leading-relaxed">
                The FDA categorizes IVDs into three distinct classes (Class I, II, and III) under 21 CFR Parts 800–899. This classification directly dictates the level of regulatory control and the corresponding submission pathway required to legally market the diagnostic device.
              </p>
              
              <div className="grid lg:grid-cols-3 gap-6 my-8">
                {/* 510k */}
                <div className="bg-surface/50 border border-border rounded-lg p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-2 h-full bg-accent"></div>
                  <h3 className="font-bold text-navy text-lg mb-2">510(k) Clearance</h3>
                  <p className="text-[13px] font-semibold text-navy/60 uppercase tracking-widest mb-4">Class I / II</p>
                  <p className="text-[14px] leading-relaxed text-navy/80 mb-4">The dominant pathway for Class II IVDs. Approval hinges on proving "substantial equivalence" to a legally marketed predicate device. Manufacturers must submit comprehensive analytical data (sensitivity, specificity, interference) and, if analytical data is insufficient, clinical performance studies.</p>
                  <p className="text-[13px] font-medium text-navy/70"><span className="text-navy font-bold">Timeline:</span> Target 90 days (Realistically 3–6 months with AI requests)</p>
                </div>

                {/* De Novo */}
                <div className="bg-surface/50 border border-border rounded-lg p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
                  <h3 className="font-bold text-navy text-lg mb-2">De Novo Request</h3>
                  <p className="text-[13px] font-semibold text-navy/60 uppercase tracking-widest mb-4">Novel Class I / II</p>
                  <p className="text-[14px] leading-relaxed text-navy/80 mb-4">Utilized for low-to-moderate risk novel diagnostics that lack a viable predicate device. The FDA independently evaluates the device, establishes necessary special controls, and creates a new classification regulation for future predicates.</p>
                  <p className="text-[13px] font-medium text-navy/70"><span className="text-navy font-bold">Timeline:</span> Typically 12+ months</p>
                </div>

                {/* PMA */}
                <div className="bg-surface/50 border border-border rounded-lg p-6 hover:shadow-md transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-2 h-full bg-indigo-600"></div>
                  <h3 className="font-bold text-navy text-lg mb-2">PMA (Premarket Approval)</h3>
                  <p className="text-[13px] font-semibold text-navy/60 uppercase tracking-widest mb-4">Class III</p>
                  <p className="text-[14px] leading-relaxed text-navy/80 mb-4">Reserved for high-risk diagnostics (e.g., companion diagnostics, blood screening, HIV tests). This is the most stringent pathway, requiring indisputable scientific evidence of both safety and effectiveness drawn from extensive clinical trials.</p>
                  <p className="text-[13px] font-medium text-navy/70"><span className="text-navy font-bold">Timeline:</span> 18–36 months</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-md text-[14.5px] text-blue-900 my-8 shadow-sm">
                <strong className="font-bold block mb-2 text-lg">The Importance of CLIA Waivers for POC Testing</strong>
                <p className="mb-2">If your Point-of-Care (POC) IVD is intended for use outside of a highly regulated, traditional laboratory—such as in pharmacies, physician offices, or for at-home use—securing a <strong>CLIA (Clinical Laboratory Improvement Amendments) waiver</strong> is an absolute commercial necessity.</p>
                <p>Without this waiver, your diagnostic test is legally restricted to certified laboratories, drastically limiting market adoption. Securing a waiver requires specialized analytical studies proving the test is foolproof and poses minimal risk of harm from erroneous results in non-laboratory settings.</p>
              </div>
              
              {/* FDA Pathway Diagram */}
              <div className="w-full rounded-lg shadow-sm border border-border flex items-center justify-center my-10 overflow-hidden bg-white p-2">
                <img src={fdaIvdFlowchart} alt="US FDA IVD Regulatory Pathway Flowchart" className="w-full h-auto object-contain rounded-md" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">Key FDA Regulatory Shifts (2025–2026)</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">Laboratory Developed Tests (LDT) Final Rule</h3>
                    <p className="text-[14.5px] text-navy/80 leading-relaxed">Finalized in 2024, the FDA is aggressively phasing in requirements for laboratories that develop and utilize their own in-house diagnostic tests. This historic shift dramatically expands FDA oversight over hospital and reference lab diagnostics.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <Database className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">AI/ML-Based IVD Guidance (PCCP)</h3>
                    <p className="text-[14.5px] text-navy/80 leading-relaxed">As diagnostics increasingly rely on Artificial Intelligence and Machine Learning, the FDA is refining its Predetermined Change Control Plan (PCCP) framework. This allows manufacturers to pre-specify planned algorithm modifications, bypassing the need for continuous new regulatory submissions.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <FileCheck2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg mb-1">QMSR Alignment (2026 Deadline)</h3>
                    <p className="text-[14.5px] text-navy/80 leading-relaxed">The FDA’s updated Quality Management System Regulation (21 CFR Part 820) will take full effect in 2026. All medical device and IVD manufacturers must align their existing quality systems with the international <strong>ISO 13485:2016</strong> standard.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
             <h2 className="text-3xl font-bold text-navy">Our US FDA Compliance Solutions</h2>
             <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
               From meticulously drafting 510(k) submissions to executing complex CLIA waiver usability studies, we secure your diagnostic product’s position in the US market.
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

      <CTABand title="Accelerate your FDA clearance timeline" btnText="Contact Our FDA Experts" />
    </>
  );
}
