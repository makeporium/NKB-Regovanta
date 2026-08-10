import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";
import { ReactNode } from "react";

const inlineLinkCls = "inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-300/50 hover:decoration-blue-600 underline-offset-4 duration-300";

export const Route = createFileRoute("/services/uk/")({
    head: () => ({
        meta: [
            { title: "UK MHRA Medical Device Registration | NKB Regovanta" },
            {
                name: "description",
                content: "Navigate the UK MHRA medical device registration process. Expert support for UKCA marking, DORS submissions, and UK Responsible Person (UKRP) services.",
            },
        ],
    }),
    component: UKMarket,
});

const tabs = [
    "Overview & Compliance Landscape",
    "Step-by-Step UK Process",
    "NKB REGOVANTA UK Key Offerings",
    "UK Responsible Person (UKRP)"
];

const keyOfferings: { title: ReactNode, desc: ReactNode }[] = [
    { title: <Link to="/services/uk/mhra-registration" className={inlineLinkCls}>MHRA Device Registration</Link>, desc: "We oversee your entire registration lifecycle via the DORS platform, delivering precision-engineered submissions that secure timely MHRA approvals across all medical device classifications." },
    { title: <Link to="/services/uk/ukrp" className={inlineLinkCls}>UK Responsible Person (UKRP)</Link>, desc: "Serving as your mandated UKRP, we act as your legal representative to the MHRA, expertly managing all regulatory communications and upholding continuous vigilance monitoring." },
    { title: <Link to="/services/uk/technical-file" className={inlineLinkCls}>Technical File & Dossier Compilation</Link>, desc: "Our regulatory team expertly constructs and reviews Technical Files to align seamlessly with UK regulations and UKCA marking standards, ensuring total readiness for regulatory audits and submissions." },
    { title: <Link to="/services/uk/qms" className={inlineLinkCls}>QMS Implementation Support</Link>, desc: "We guide the development, integration, and maintenance of ISO 13485-certified Quality Management Systems, specifically adapted to satisfy UK MDR prerequisites and MHRA compliance expectations." },
    { title: <Link to="/services/uk/regulatory-writing" className={inlineLinkCls}>Advanced Regulatory Writing</Link>, desc: "NKB Regovanta delivers specialized medical writing services, including Clinical Evaluation Reports (CERs), Post-Market Surveillance (PMS) plans, PSURs, and comprehensive risk management files, guaranteeing technical accuracy." },
    { title: <Link to="/services/uk/labeling" className={inlineLinkCls}>Labeling & Artwork Compliance</Link>, desc: "We meticulously audit your Instructions for Use (IFUs), product labeling, and packaging design to verify strict alignment with UKCA symbology, formatting, and language requirements." },
    { title: <Link to="/services/uk/pms" className={inlineLinkCls}>Post-Market Surveillance (PMS)</Link>, desc: "We facilitate all ongoing PMS obligations, seamlessly handling adverse event reporting, vigilance coordination, and implementing MHRA regulatory updates to safeguard your ongoing market authorization." }
];

const ukrpOfferings: { title: ReactNode, desc: ReactNode }[] = [
    { title: <Link to="/services/uk/dors-registration" className={inlineLinkCls}>Device Registration via DORS</Link>, desc: "We drive the end-to-end MHRA registration process through the Device Online Registration System (DORS), confirming that every product in your portfolio is accurately cataloged, verified, and legally permitted for UK commercialization." },
    { title: <Link to="/services/uk/conformity-assurance" className={inlineLinkCls}>Documentation & Conformity Assurance</Link>, desc: "Our experts meticulously curate and retain your Declarations of Conformity, technical files, and product certificates, ensuring this critical documentation is instantly available for MHRA review upon formal request." },
    { title: <Link to="/services/uk/mhra-liaison" className={inlineLinkCls}>MHRA Communication Liaison</Link>, desc: "We serve as the definitive frontline for all MHRA communications, delivering prompt, technically precise responses to agency inquiries, clarification requests, and post-market compliance reviews on your behalf." },
    { title: <Link to="/services/uk/vigilance" className={inlineLinkCls}>Vigilance & Incident Coordination</Link>, desc: "As your UKRP, we act as the central liaison for all safety-related occurrences. We efficiently coordinate with the manufacturer, healthcare providers, and the MHRA to manage adverse event reporting and execute Field Safety Corrective Actions." },
    { title: <Link to="/services/uk/audit-readiness" className={inlineLinkCls}>Inspection & Audit Readiness</Link>, desc: "We proactively organize and maintain all regulatory records and official correspondence. In the event of an MHRA audit, we ensure your technical dossiers, labeling records, and post-market data are fully prepped and immediately accessible." }
];

function UKMarket() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <>
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">UK</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/gb.png" srcSet="https://flagcdn.com/w160/gb.png 2x" width="48" alt="United Kingdom" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">United Kingdom</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        UK MHRA Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        NKB Regovanta streamlines the entire UK MHRA medical device registration journey. We expertly verify your technical documentation and manage the submission process through the MHRA’s Device Online Registration System (DORS). Acting as your mandated UK Responsible Person (UKRP), we interface directly with the MHRA, handling registrations and vigilance obligations to guarantee continuous post-market compliance.
                    </p>
                </div>
            </section>

            <div className="sticky top-0 z-30 bg-white border-b border-border shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-0 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button key={tab} id={`tab-${tab.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap px-5 py-4 text-[12.5px] font-semibold border-b-2 transition-colors ${activeTab === tab ? "border-navy text-navy" : "border-transparent text-navy/50 hover:text-navy"}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                {activeTab === "Overview & Compliance Landscape" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-6">Ensuring Seamless Compliance for UK Medical Device Regulations</h2>
                            <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                                Foreign device manufacturers must adhere strictly to the UK Medical Devices Regulations 2002 (and subsequent amendments). It is a legal prerequisite that all medical devices and in vitro diagnostics (IVDs) be registered with the Medicines and Healthcare products Regulatory Agency (MHRA) prior to commercialization in the UK market.
                            </p>
                            <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                                For manufacturers based outside the UK, appointing a local UK Responsible Person (UKRP) is mandatory. The MHRA enforces rigorous standards regarding technical documentation, product labeling, and post-market vigilance to safeguard patient health and ensure robust product traceability.
                            </p>
                            <div className="p-6 rounded-lg bg-blue-50/50 border border-blue-100 mb-8">
                                <h3 className="text-[14px] font-bold text-navy mb-3">Navigating Post-Brexit Complexity</h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    Understanding the latest regulatory shifts—including the nuances of UKCA marking, expanded clinical data expectations, and heightened post-market surveillance—can be daunting. Organizations frequently encounter roadblocks related to misaligned device classifications, incomplete Technical Files, and the intricacies of the Device Online Registration System (DORS). Constant updates to MHRA guidance further challenge strategic planning and resource management.
                                </p>
                            </div>
                            <h3 className="text-base font-bold text-navy mb-4">How NKB Regovanta Accelerates Market Access:</h3>
                            <ul className="grid gap-3 md:grid-cols-2">
                                {[
                                    "End-to-end management of DORS submissions",
                                    "Dedicated UK Responsible Person (UKRP) representation",
                                    "Comprehensive technical documentation validation",
                                    "Strategic bridging for CE-to-UKCA transition",
                                    "Proactive alignment with evolving MHRA policies"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2.5 items-start">
                                        <CheckCircle2 className="h-4 w-4 text-navy mt-0.5 shrink-0" />
                                        <span className="text-[13px] font-semibold text-navy/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === "Step-by-Step UK Process" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Step-by-Step UK Medical Device Registration Process</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed mb-6">
                                Successfully launching a medical device in the UK requires moving through a sequence of critical regulatory milestones. Typical MHRA processing times range from 2 to 6 weeks, heavily dependent on the device’s risk classification and the maturity of your existing technical documentation.
                            </p>
                            
                            <LinearFlow steps={[
                            { title: "Determine MHRA Classification", desc: "Identify UK device classification." },
                            { title: "Appoint UK Responsible Person", desc: "Required for manufacturers outside the UK." },
                            { title: "UKCA Marking Readiness", desc: "Ensure technical documentation meets UK MDR 2002 requirements." },
                            { title: "Compile Technical File", desc: "Prepare Declaration of Conformity and supporting evidence." },
                            { title: "Submit via DORS", desc: "Register device through MHRA's Device Online Registration System." },
                            { title: "Registration Confirmation", desc: "Receive MHRA confirmation letter allowing market entry." }
                        ]} />
                        </div>
                    </div>
                )}

                {activeTab === "NKB REGOVANTA UK Key Offerings" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">NKB REGOVANTA Medical Device UK Key Offerings</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                From initial dossier compilation to post-market surveillance, our dedicated UK regulatory team provides comprehensive support tailored to MHRA expectations.
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {keyOfferings.map((item) => (
                                <div key={item.title} className="p-6 rounded-lg bg-blue-50/50 border border-blue-100 flex flex-col h-full">
                                    <h3 className="text-[13.5px] font-bold text-navy mb-3">{item.title}</h3>
                                    <p className="text-[12.5px] text-navy/70 leading-relaxed flex-grow">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "UK Responsible Person (UKRP)" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">UK Responsible Person (UKRP) Service Offerings</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                Operating as your official UKRP, NKB Regovanta ensures absolute alignment with the UK Medical Devices Regulations 2002. We serve as your in-country legal representative, exclusively managing all regulatory interfacing with the MHRA.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {ukrpOfferings.map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-lg border border-border bg-white shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</div>
                                    <div>
                                        <h3 className="font-bold text-navy text-[14px] mb-2">{item.title}</h3>
                                        <p className="text-[13px] text-navy/70 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <CTABand title="Ready to enter the UK market?" description="Speak to our UK Regulatory Experts" />
        </>
    );
}

