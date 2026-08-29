import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";
import { ReactNode } from "react";

const inlineLinkCls = "inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-300/50 hover:decoration-blue-600 underline-offset-4 duration-300";

export const Route = createFileRoute("/services/australia/")({
    head: () => ({
        meta: [
            { title: "Australia TGA ARTG Inclusion & Australian Sponsor Services | NKB Regovanta" },
            { name: "description", content: "Navigate the Australia TGA medical device registration process. Expert Australia TGA medical device consultant support for Australia TGA ARTG inclusion, Australian Sponsor services (TGA Sponsor), and post-market vigilance." },
            { name: "keywords", content: "Australia TGA ARTG inclusion, Australia TGA medical device consultant, Australian Sponsor services (TGA Sponsor), TGA conformity assessment, MDSAP Australia TGA, NKB Regovanta" },
            { property: "og:title", content: "Australia TGA ARTG Inclusion & Sponsor Services | NKB Regovanta" },
            { property: "og:description", content: "Complete Australia TGA regulatory strategy, ARTG inclusion dossiers, and in-country TGA Sponsor services." },
            { property: "og:url", content: "https://www.nkbregovanta.com/services/australia" },
        ],
        links: [
            { rel: "canonical", href: "https://www.nkbregovanta.com/services/australia" },
        ],
    }),
    component: AustraliaMarket,
});

const tabs = ["Overview & Regulatory Landscape", "Medical Device Classification", "Registration Process", "Post-Market & Lifecycle"];

const classificationData = [
    { classLabel: "Class I", risk: "Low Risk", notes: "Often auto-included in ARTG." },
    { classLabel: "Class IIa", risk: "Low-Moderate Risk", notes: "Requires conformity assessment evidence." },
    { classLabel: "Class IIb", risk: "Moderate-High Risk", notes: "Requires higher level conformity assessment." },
    { classLabel: "Class III / AIMD", risk: "High Risk", notes: "Mandatory TGA conformity assessment or recognized equivalent (CE/FDA)." },
];

function AustraliaMarket() {
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
                        <span className="text-navy">Australia</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/au.png" srcSet="https://flagcdn.com/w160/au.png 2x" width="48" alt="Australia" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">Australia</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        Australia TGA Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        The Therapeutic Goods Administration (TGA) oversees all medical device regulations in Australia. Devices must be included in the Australian Register of Therapeutic Goods (ARTG) before commercialization. NKB Regovanta provides comprehensive regulatory strategies, conformity assessment support, and acts as your mandated Australian Sponsor.
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
                        <h2 className="text-xl font-bold text-navy mb-6">Australia TGA Overview</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            Medical devices in Australia are regulated under the Therapeutic Goods Act 1989. The TGA utilizes a framework that aligns closely with the EU MDR, and frequently leverages international approvals (like CE Marking or MDSAP) to expedite the ARTG inclusion process.
                        </p>
                        <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60 flex gap-4">
                            <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-[13.5px] font-bold text-amber-900 mb-1">Australian Sponsor Requirement</h3>
                                <p className="text-[13px] text-amber-800 leading-relaxed">
                                    Foreign manufacturers MUST appoint an <Link to="/services/australia/sponsor" className={inlineLinkCls}>Australian Sponsor</Link> located within Australia. The Sponsor holds the ARTG inclusion and assumes strict legal liability for the device's compliance. NKB Regovanta provides reliable Sponsor services.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Medical Device Classification" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">TGA Classification Framework</h2>
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
                        <h2 className="text-xl font-bold text-navy mb-3">ARTG Inclusion Process</h2>
                        <LinearFlow steps={[
                            { title: "TGA Classification", desc: "Determine device class (I, IIa, IIb, III, AIMD)." },
                            { title: <Link to="/services/australia/sponsor" className={inlineLinkCls}>Appoint Australian Sponsor</Link>, desc: "Mandatory local representative who assumes legal liability." },
                            { title: <Link to="/services/australia/conformity-assessment" className={inlineLinkCls}>Conformity Assessment</Link>, desc: "Leverage existing CE/FDA approvals or undergo TGA assessment." },
                            { title: "Compile Technical Documentation", desc: "Ensure documentation aligns with Essential Principles." },
                            { title: <Link to="/services/australia/artg-inclusion" className={inlineLinkCls}>Submit ARTG Inclusion Application</Link>, desc: "Lodge application via TGA Business Services (TBS) portal." },
                            { title: "ARTG Certificate Issued", desc: "Device is included in the Australian Register of Therapeutic Goods." }
                        ]} />
                    </div>
                )}

                {activeTab === "Post-Market & Lifecycle" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">Post-Market Surveillance (PMS)</h2>
                        <p className="text-[13.5px] text-navy/70 leading-relaxed">
                            Once included in the ARTG, devices are subject to TGA's robust <Link to="/services/australia/pms" className={inlineLinkCls}>post-market monitoring</Link>. Sponsors must maintain vigilant adverse event reporting frameworks (IRIS) and ensure annual ARTG charges are paid to prevent cancellation. NKB Regovanta seamlessly manages all PMS and maintenance obligations.
                        </p>
                    </div>
                )}
            </div>
            <CTABand title="Ready to launch in Australia?" description="Speak to our TGA Regulatory Experts" />
        </>
    );
}
