import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uae")({
    head: () => ({
        meta: [
            { title: "UAE MOHAP Medical Device Registration | NKB Regovanta" },
            { name: "description", content: "Navigate the UAE MOHAP medical device registration process. Expert support for rapid market entry and Local Representative services." },
        ],
    }),
    component: UAEMarket,
});

const tabs = ["Overview & Regulatory Landscape", "Medical Device Classification", "Registration Process", "Post-Market & Lifecycle"];

const classificationData = [
    { classLabel: "Class I", risk: "Low Risk", notes: "Standard evaluation framework." },
    { classLabel: "Class II (a & b)", risk: "Medium Risk", notes: "Requires detailed technical dossier and reference country approval." },
    { classLabel: "Class III & IV", risk: "High Risk", notes: "Stringent evaluation; expedited if CE/FDA approved." },
];

function UAEMarket() {
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
                        <span className="text-navy">UAE</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/ae.png" srcSet="https://flagcdn.com/w160/ae.png 2x" width="48" alt="UAE" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">United Arab Emirates</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        UAE MOHAP Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        The Ministry of Health and Prevention (MOHAP) regulates medical device imports and distribution in the United Arab Emirates. Leveraging reference country approvals, MOHAP offers highly efficient registration pathways. NKB Regovanta provides dedicated Local Representative services to streamline your Middle Eastern market entry.
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
                        <h2 className="text-xl font-bold text-navy mb-6">UAE MOHAP Overview</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            Medical devices cannot be cleared by UAE customs or placed on the market without explicit MOHAP approval. The UAE regulatory system heavily favors devices that have already secured approvals in Tier 1 reference countries (e.g., FDA clearance, CE Marking), often resulting in fast-tracked reviews.
                        </p>
                        <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60 flex gap-4">
                            <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-[13.5px] font-bold text-amber-900 mb-1">Local Representative Mandatory</h3>
                                <p className="text-[13px] text-amber-800 leading-relaxed">
                                    Foreign manufacturers MUST appoint a licensed UAE Local Representative (or authorized distributor) to submit the registration via the MOHAP e-services portal. The local entity serves as the regulatory liaison.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Medical Device Classification" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">MOHAP Classification Framework</h2>
                        <div className="overflow-x-auto rounded-lg border border-border">
                            <table className="w-full text-sm">
                                <thead className="bg-navy text-white">
                                    <tr>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Class</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Risk Level</th>
                                        <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Regulatory Note</th>
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
                        <h2 className="text-xl font-bold text-navy mb-3">MOHAP Submission Process</h2>
                        <LinearFlow steps={[
                            { title: "Classification" },
                            { title: "Appointing Local Representative" },
                            { title: "Manufacturing Site Registration" },
                            { title: "Technical File Compilation" },
                            { title: "Application Submission" },
                            { title: "Device Registration" },
                            { title: "Review And Approval" }
                        ]} />
                    </div>
                )}

                {activeTab === "Post-Market & Lifecycle" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">Post-Market Surveillance</h2>
                        <p className="text-[13.5px] text-navy/70 leading-relaxed">
                            Medical device registrations in the UAE are generally valid for 5 years. Prior to expiration, NKB Regovanta assists the local representative in submitting renewal applications, managing adverse event reporting, and processing variations to the registered dossier.
                        </p>
                    </div>
                )}
            </div>
            <CTABand title="Ready to launch in the UAE?" description="Speak to our MOHAP Regulatory Experts" />
        </>
    );
}
