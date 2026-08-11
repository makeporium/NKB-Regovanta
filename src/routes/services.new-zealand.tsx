import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/new-zealand")({
    head: () => ({
        meta: [
            { title: "New Zealand Medical Device Registration & Medsafe WAND | NKB Regovanta" },
            { name: "description", content: "Expert support for New Zealand Medsafe medical device registration, WAND database notification, and Local Sponsor services." },
        ],
    }),
    component: NewZealandMarket,
});

const tabs = ["Overview & Regulatory Landscape", "Device Classification", "Registration Process", "Post-Market & Lifecycle"];

const classificationData = [
    { classLabel: "Class I", risk: "Low Risk", notes: "Self-declaration; must be notified on WAND." },
    { classLabel: "Class IIa & IIb", risk: "Low-Moderate to Moderate-High Risk", notes: "Requires reference country approval (e.g., CE Mark, TGA) prior to WAND notification." },
    { classLabel: "Class III & AIMD", risk: "High Risk", notes: "Highest scrutiny; mandatory reference country conformity assessment before WAND listing." },
];

function NewZealandMarket() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <>
            <section className="bg-gradient-to-r from-white via-indigo-50/60 to-indigo-100/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">New Zealand</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/nz.png" srcSet="https://flagcdn.com/w160/nz.png 2x" width="48" alt="New Zealand" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">New Zealand</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        Medsafe WAND Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        The Medicines and Medical Devices Safety Authority (Medsafe) regulates the medical device market in New Zealand. Unlike pre-market approval systems, New Zealand utilizes a post-market notification system called WAND. Foreign manufacturers must appoint a local New Zealand Sponsor to complete this notification and maintain compliance.
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
                        <h2 className="text-xl font-bold text-navy mb-6">Medsafe Regulatory Framework</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-4">
                            New Zealand operates a unique regulatory framework. Rather than requiring extensive pre-market review by Medsafe, the system mandates that all medical devices must be notified to the <strong>Web Assisted Notification of Devices (WAND)</strong> database within 30 days of the device being placed on the New Zealand market.
                        </p>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            This streamlined approach heavily relies on the manufacturer already holding robust regulatory approvals from recognized jurisdictions (such as CE Marking from Europe or TGA approval from Australia). The responsibility of ensuring the device meets all safety and performance standards falls squarely on the New Zealand Sponsor.
                        </p>
                        <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60 flex gap-4">
                            <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-[13.5px] font-bold text-amber-900 mb-1">New Zealand Sponsor Requirement</h3>
                                <p className="text-[13px] text-amber-800 leading-relaxed">
                                    Foreign manufacturers MUST appoint a local New Zealand Sponsor. The Sponsor must be a resident or a registered company in New Zealand. They are legally responsible for entering device details into the WAND database, holding technical documentation, and managing post-market surveillance and adverse event reporting.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Device Classification" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">Medsafe Risk-Based Classification</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                            New Zealand's device classification rules closely align with those of the European Union (EU MDR) and the Australian TGA, utilizing a risk-based approach. The classification determines the level of conformity assessment evidence the Sponsor must hold on file.
                        </p>
                        <div className="overflow-x-auto rounded-lg border border-border">
                            <table className="w-full text-sm">
                                <thead className="bg-navy text-white">
                                    <tr>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Class</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Risk Level</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Regulatory Requirement</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border">
                                    {classificationData.map((row, i) => (
                                        <tr key={i} className="hover:bg-indigo-50/40 transition-colors">
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
                        <h2 className="text-xl font-bold text-navy mb-3">WAND Notification Process</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            NKB Regovanta provides comprehensive New Zealand Sponsor services and manages the entire WAND notification process to ensure rapid and compliant market access.
                        </p>
                        <LinearFlow steps={[
                            { title: "Device Classification" },
                            { title: "Appoint New Zealand Sponsor" },
                            { title: "Compile Conformity Evidence (e.g., CE Certificate)" },
                            { title: "Create WAND Database Account (Sponsor)" },
                            { title: "Submit Device Notification to WAND" },
                            { title: "Device Legally on NZ Market" }
                        ]} />
                    </div>
                )}

                {activeTab === "Post-Market & Lifecycle" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">Maintaining Medsafe Compliance</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-4">
                            WAND notifications do not expire; however, the New Zealand Sponsor must maintain the accuracy of the listing and actively manage post-market responsibilities.
                        </p>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-[13.5px] text-navy/80"><strong>Technical File Maintenance:</strong> The Sponsor must hold or have immediate access to the Declaration of Conformity and full technical documentation to provide to Medsafe upon request.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-[13.5px] text-navy/80"><strong>Vigilance & Reporting:</strong> Adverse events and product recalls occurring in New Zealand or globally must be promptly reported to Medsafe by the Sponsor.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-[13.5px] text-navy/80"><strong>WAND Updates:</strong> Any significant changes to the device, manufacturer details, or GMDN codes require the Sponsor to update the WAND database listing.</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <CTABand title="Ready to launch in New Zealand?" description="Speak to our Medsafe Regulatory Experts" />
        </>
    );
}
