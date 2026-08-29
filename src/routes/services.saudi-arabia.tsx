import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/saudi-arabia")({
    head: () => ({
        meta: [
            { title: "Saudi Arabia SFDA Medical Device Registration & MDMA | NKB Regovanta" },
            { name: "description", content: "Comprehensive support for Saudi Arabia SFDA medical device marketing authorization (MDMA), SFDA Authorized Representative Saudi Arabia (AR) services, GHAD portal registration SFDA, and SFDA MDNR listing Class A." },
            { name: "keywords", content: "Saudi Arabia SFDA medical device marketing authorization (MDMA), SFDA Authorized Representative Saudi Arabia (AR), GHAD portal registration SFDA, SFDA MDNR listing Class A, Saudi FDA medical device consultant, NKB Regovanta" },
            { property: "og:title", content: "Saudi Arabia SFDA Medical Device Registration | NKB Regovanta" },
            { property: "og:description", content: "Full SFDA MDMA approval support, GHAD system submission, and in-kingdom Authorized Representative services." },
            { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia" },
        ],
        links: [
            { rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia" },
        ],
    }),
    component: SaudiArabiaMarket,
});

const tabs = ["Overview & Regulatory Landscape", "Device Classification", "Registration Process", "Post-Market & Lifecycle"];

const classificationData = [
    { classLabel: "Class A", risk: "Low Risk", notes: "Requires Medical Device National Registry (MDNR) listing and basic technical file." },
    { classLabel: "Class B", risk: "Low-Moderate Risk", notes: "Requires full Medical Device Marketing Authorization (MDMA) via GHAD." },
    { classLabel: "Class C", risk: "Moderate-High Risk", notes: "Requires MDMA; rigorous evaluation of clinical evidence and quality systems." },
    { classLabel: "Class D", risk: "High Risk", notes: "Requires MDMA; highest level of scrutiny, strict clinical evaluation requirements." },
];

function SaudiArabiaMarket() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    return (
        <>
            <section className="bg-gradient-to-r from-white via-green-50/60 to-green-100/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">Saudi Arabia</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/sa.png" srcSet="https://flagcdn.com/w160/sa.png 2x" width="48" alt="Saudi Arabia" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">Kingdom of Saudi Arabia</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        SFDA Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        The Saudi Food and Drug Authority (SFDA) oversees the rigorous medical device registration landscape in the Kingdom of Saudi Arabia. With the transition to the unified GHAD system, foreign manufacturers require a licensed Authorized Representative (AR) to secure Medical Device Marketing Authorization (MDMA) and ensure compliant market entry.
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
                        <h2 className="text-xl font-bold text-navy mb-6">SFDA Regulatory Framework</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-4">
                            Saudi Arabia represents the largest medical device market in the Middle East. The SFDA's Medical Devices Interim Regulation mandates strict compliance for all diagnostic and therapeutic devices. The recent introduction of the <strong>GHAD (Unified Electronic System)</strong> has streamlined submissions, consolidating previous systems like MDMA and ARIS into a single portal.
                        </p>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            While the SFDA previously relied heavily on reference country approvals (such as US FDA, CE Mark, or Health Canada), the current regulatory trajectory requires independent, rigorous review of technical files, Quality Management Systems (QMS), and clinical evidence directly by SFDA reviewers.
                        </p>
                        <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60 flex gap-4">
                            <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-[13.5px] font-bold text-amber-900 mb-1">Authorized Representative (AR) Requirement</h3>
                                <p className="text-[13px] text-amber-800 leading-relaxed">
                                    Foreign manufacturers without a direct commercial presence in Saudi Arabia MUST appoint an SFDA-licensed Authorized Representative. The AR acts as the legal liaison between the manufacturer and the SFDA, holding responsibility for the MDMA license, incident reporting, and post-market surveillance.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Device Classification" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">SFDA Risk-Based Classification</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                            The SFDA classification system closely mirrors the European Medical Device Regulation (EU MDR 2017/745) and IVDR, categorizing devices into four distinct risk classes based on intended use, invasiveness, and duration of contact.
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
                                        <tr key={i} className="hover:bg-green-50/40 transition-colors">
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
                        <h2 className="text-xl font-bold text-navy mb-3">GHAD Submission & MDMA Process</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                            NKB Regovanta manages the entire lifecycle of your SFDA submission, ensuring your technical documentation aligns perfectly with SFDA guidance before submission via the GHAD portal.
                        </p>
                        <LinearFlow steps={[
                            { title: "Classification & Strategy" },
                            { title: "Appoint SFDA Authorized Representative" },
                            { title: "AR License Approval (via GHAD)" },
                            { title: "Technical File Preparation (TCS/CSDT format)" },
                            { title: "MDMA Application Submission" },
                            { title: "SFDA Review & Queries (RFI)" },
                            { title: "MDMA Certificate Issuance" }
                        ]} />
                    </div>
                )}

                {activeTab === "Post-Market & Lifecycle" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">Maintaining SFDA Compliance</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-4">
                            An MDMA certificate is typically valid for 3 years (or tied to the expiration of the reference country certificate, e.g., CE Mark). Manufacturers must proactively manage their compliance lifecycle.
                        </p>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-[13.5px] text-navy/80"><strong>License Renewals:</strong> Renewal applications must be submitted via GHAD at least 60 days prior to the MDMA expiration to avoid market disruption.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-[13.5px] text-navy/80"><strong>Vigilance & Reporting:</strong> The Authorized Representative must report adverse events and Field Safety Corrective Actions (FSCA) through the National Center for Medical Devices Reporting (NCMDR).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                                <span className="text-[13.5px] text-navy/80"><strong>Change Management:</strong> Significant changes to design, intended use, or manufacturing sites require a formal MDMA variation submission.</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <CTABand title="Ready to launch in Saudi Arabia?" description="Speak to our SFDA Regulatory Experts" />
        </>
    );
}
