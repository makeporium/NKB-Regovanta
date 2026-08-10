import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";
import { ReactNode } from "react";

const inlineLinkCls = "inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-300/50 hover:decoration-blue-600 underline-offset-4 duration-300";

export const Route = createFileRoute("/services/brazil/")({
    head: () => ({
        meta: [
            { title: "Brazil ANVISA Medical Device Registration | NKB Regovanta" },
            { name: "description", content: "Navigate the Brazil ANVISA medical device registration process. Expert support for BRH representation, BGMP compliance, and RDC 751/2022 guidelines." },
        ],
    }),
    component: BrazilMarket,
});

const tabs = ["Overview & Regulatory Landscape", "Medical Device Classification", "Registration Process", "Post-Market & Lifecycle"];

const classificationData = [
    { classLabel: "Class I", risk: "Low Risk", notes: "Subject to Notificação (Notification) pathway." },
    { classLabel: "Class II", risk: "Medium Risk", notes: "Subject to Notificação (Notification) pathway." },
    { classLabel: "Class III", risk: "High Risk", notes: "Subject to Registro (Registration) pathway. BGMP mandatory." },
    { classLabel: "Class IV", risk: "Maximum Risk", notes: "Subject to Registro (Registration) pathway. BGMP mandatory." },
];

function BrazilMarket() {
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
                        <span className="text-navy">Brazil</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/br.png" srcSet="https://flagcdn.com/w160/br.png 2x" width="48" alt="Brazil" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">Brazil</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        Brazil ANVISA Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        The National Health Surveillance Agency (ANVISA) imposes some of the most complex regulatory requirements in South America. Through resolution RDC 751/2022, ANVISA strictly regulates device entry. NKB Regovanta provides dedicated Brazilian Registration Holder (BRH) services and BGMP audit support to ensure successful market entry.
                    </p>
                </div>
            </section>
            
            <div className="sticky top-0 z-30 bg-white border-b border-border shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-0 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)} className={`whitespace-nowrap px-5 py-4 text-[12.5px] font-semibold border-b-2 transition-colors ${activeTab === tab ? "border-navy text-navy" : "border-transparent text-navy/50 hover:text-navy"}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                {activeTab === "Overview & Regulatory Landscape" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-6">Brazil ANVISA Overview</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            Brazil’s medical device regulations underwent a major modernization with RDC 751/2022, bringing ANVISA’s framework closer to the EU MDR. Depending on the device class, manufacturers must secure <Link to="/services/brazil/bgmp" className={inlineLinkCls}>Brazilian Good Manufacturing Practice (BGMP)</Link> certification and submit technical dossiers via the <Link to="/services/brazil/notificacao" className={inlineLinkCls}>Notificação</Link> or <Link to="/services/brazil/registro" className={inlineLinkCls}>Registro</Link> pathways.
                        </p>
                        <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60 flex gap-4">
                            <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-[13.5px] font-bold text-amber-900 mb-1">Brazilian Registration Holder (BRH) Mandatory</h3>
                                <p className="text-[13px] text-amber-800 leading-relaxed">
                                    All foreign manufacturers must appoint a local, legally established entity acting as the <Link to="/services/brazil/brh" className={inlineLinkCls}>Brazilian Registration Holder (BRH)</Link>. The BRH controls the device registration and interfaces directly with ANVISA. NKB Regovanta provides secure, independent BRH hosting.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Medical Device Classification" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">ANVISA Classification (RDC 751/2022)</h2>
                        <div className="overflow-x-auto rounded-lg border border-border">
                            <table className="w-full text-sm">
                                <thead className="bg-navy text-white">
                                    <tr>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Class</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Risk Level</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Pathway & BGMP Note</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {classificationData.map((row, i) => (
                                        <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                                            <td className="px-5 py-3 font-bold text-navy">{row.classLabel}</td>
                                            <td className="px-5 py-3 text-navy/70">{row.risk}</td>
                                            <td className="px-5 py-3 text-navy/70">{row.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                
                {activeTab === "Registration Process" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">ANVISA Submission Process</h2>
                        <LinearFlow steps={[
                            { title: "ANVISA Classification", desc: "Identify risk class (I, II, III, IV) per RDC 751/2022." },
                            { title: <Link to="/services/brazil/brh" className={inlineLinkCls}>Appoint BRH</Link>, desc: "Appoint a Brazilian Registration Holder." },
                            { title: <Link to="/services/brazil/bgmp" className={inlineLinkCls}>BGMP Certification</Link>, desc: "Mandatory for Class III and IV devices." },
                            { title: "Dossier Preparation", desc: "Compile technical file translated into Brazilian Portuguese." },
                            { title: "ANVISA Submission", desc: "Submit via Notificação (Class I/II) or Registro (Class III/IV)." },
                            { title: "Approval & Publication", desc: "Registration published in the Diário Oficial da União (DOU)." }
                        ]} />
                    </div>
                )}

                {activeTab === "Post-Market & Lifecycle" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">Technovigilance</h2>
                        <p className="text-[13.5px] text-navy/70 leading-relaxed">
                            The BRH is legally responsible for post-market surveillance (<Link to="/services/brazil/technovigilance" className={inlineLinkCls}>Technovigilance</Link>) in Brazil. This includes managing field safety corrective actions (FSCA), adverse event reporting through Notivisa, and managing registration renewals (Registros are valid for 10 years). NKB Regovanta seamlessly oversees these obligations.
                        </p>
                    </div>
                )}
            </div>
            <CTABand title="Ready to launch in Brazil?" description="Speak to our ANVISA Regulatory Experts" />
        </>
    );
}
