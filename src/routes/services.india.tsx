import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/india")({
    head: () => ({
        meta: [
            { title: "India CDSCO Medical Device Registration | NKB Regovanta" },
            { name: "description", content: "Navigate the India CDSCO medical device registration process. Expert support for MDR 2017 compliance, SUGAM portal, and Authorized Indian Agent services." },
        ],
    }),
    component: IndiaMarket,
});

const tabs = ["Overview & Regulatory Landscape", "Medical Device Classification", "Registration Process", "Post-Market & Lifecycle"];

const classificationData = [
    { classLabel: "Class A", risk: "Low Risk", example: "Surgical dressings, thermometers" },
    { classLabel: "Class B", risk: "Low-Moderate Risk", example: "Hypodermic needles, suction equipment" },
    { classLabel: "Class C", risk: "Moderate-High Risk", example: "Lung ventilators, bone fixation plates" },
    { classLabel: "Class D", risk: "High Risk", example: "Heart valves, implantable pacemakers" },
];

function IndiaMarket() {
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
                        <span className="text-navy">India</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/in.png" srcSet="https://flagcdn.com/w160/in.png 2x" width="48" alt="India" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">India</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        India CDSCO Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        India is rapidly evolving into a major global medical device market. Governed by the Medical Devices Rules, 2017, the Central Drugs Standard Control Organisation (CDSCO) mandates rigorous quality and safety checks. NKB Regovanta expertly guides global manufacturers through the CDSCO landscape, SUGAM portal submissions, and local representation requirements.
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
                        <h2 className="text-xl font-bold text-navy mb-6">India Medical Device Registration Overview</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            In India, medical devices are regulated under the Drugs and Cosmetics Act, 1940, and the Medical Devices Rules, 2017. The CDSCO serves as the Central Licensing Authority for higher-risk devices, while State Licensing Authorities handle lower-risk categories.
                        </p>
                        <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60 flex gap-4">
                            <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-[13.5px] font-bold text-amber-900 mb-1">Authorized Indian Agent Required</h3>
                                <p className="text-[13px] text-amber-800 leading-relaxed">
                                    Foreign manufacturers MUST appoint an Authorized Indian Agent (AIA) holding a valid wholesale license (Form 20B/21B or 42) to legally import and market medical devices in India. NKB Regovanta provides comprehensive AIA services.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Medical Device Classification" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">CDSCO Risk-Based Classification</h2>
                        <div className="overflow-x-auto rounded-lg border border-border">
                            <table className="w-full text-sm">
                                <thead className="bg-navy text-white">
                                    <tr>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Class</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Risk Level</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Examples</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {classificationData.map((row, i) => (
                                        <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                                            <td className="px-5 py-3 font-bold text-navy">{row.classLabel}</td>
                                            <td className="px-5 py-3 text-navy/70">{row.risk}</td>
                                            <td className="px-5 py-3 text-navy/70">{row.example}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                
                {activeTab === "Registration Process" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">SUGAM Portal Registration</h2>
                        <LinearFlow steps={[
                            { title: "Determine Device Classification", desc: "Identify if the device falls under Class A, B, C, or D based on CDSCO rules." },
                            { title: "Appoint Authorized Indian Agent", desc: "Mandatory for foreign manufacturers to appoint a licensed local representative." },
                            { title: "Prepare Regulatory Dossier", desc: "Compile technical documents, clinical data, and quality certificates." },
                            { title: "Submit via SUGAM Portal", desc: "Upload dossier and pay required regulatory fees." },
                            { title: "CDSCO Review & Clarifications", desc: "Respond to technical queries from the Central Licensing Authority." },
                            { title: "Import License Approval", desc: "Grant of MD-15 Import License allowing commercialization." }
                        ]} />
                    </div>
                )}

                {activeTab === "Post-Market & Lifecycle" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">Lifecycle & Vigilance</h2>
                        <p className="text-[13.5px] text-navy/70 leading-relaxed">
                            Under the Medical Devices Rules, 2017, manufacturers and their Authorized Agents must adhere strictly to post-market surveillance. NKB Regovanta manages Materiovigilance Programme of India (MvPI) reporting, license retention fee payments (due every 5 years), and post-approval change notifications via the SUGAM portal.
                        </p>
                    </div>
                )}
            </div>
            <CTABand title="Ready to launch in India?" description="Speak to our CDSCO Regulatory Experts" />
        </>
    );
}
