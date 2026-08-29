import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";
import { SplitFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";
import { ReactNode } from "react";

const inlineLinkCls = "inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-300/50 hover:decoration-blue-600 underline-offset-4 duration-300";

export const Route = createFileRoute("/services/canada/")({
    head: () => ({
        meta: [
            { title: "Health Canada MDL MDEL Consultant | MDSAP Canada | NKB Regovanta" },
            {
                name: "description",
                content: "Expert Health Canada regulatory consultant support for Health Canada Medical Device Licence (MDL), Medical Device Establishment Licence (MDEL) Canada, and MDSAP QMS compliance for Class I-IV devices.",
            },
            {
                name: "keywords",
                content: "Health Canada Medical Device Licence (MDL), Medical Device Establishment Licence (MDEL) Canada, Health Canada regulatory consultant, MDSAP Canada, Class II III IV MDL Canada, NKB Regovanta",
            },
            { property: "og:title", content: "Health Canada MDL & MDEL Regulatory Consulting | NKB Regovanta" },
            {
                property: "og:description",
                content: "End-to-end Health Canada device licensing, MDEL establishment licenses, Class II-IV MDL applications, and MDSAP audit readiness.",
            },
            { property: "og:url", content: "https://www.nkbregovanta.com/services/canada" },
        ],
        links: [
            { rel: "canonical", href: "https://www.nkbregovanta.com/services/canada" },
        ],
    }),
    component: CanadaMarket,
});

const tabs = [
    "Overview & Regulatory Landscape",
    "Medical Device Classification",
    "Registration Pathways (MDEL & MDL)",
    "Step-by-Step Canada Process",
    "Lifecycle Management"
];

const regulatoryDetails = [
    { label: "Regulatory Authority", value: "Health Canada (Therapeutic Products Directorate, Medical Devices Bureau)" },
    { label: "Governing Regulation", value: "Medical Devices Regulations (SOR/98-282)" },
    { label: "QMS Requirement", value: "ISO 13485:2016 via Medical Device Single Audit Program (MDSAP)" },
    { label: "Technical Assessment", value: "Health Canada" },
    { label: "License Validity", value: "Unlimited (Subject to annual renewal)" },
    { label: "Labeling Requirements", value: "Part 21 of MDR (SOR/98-282)" },
    { label: "Submission Format", value: "Paper / Electronic format guidelines" },
    { label: "Supported Languages", value: "English & French" },
];

const classificationData = [
    { classLabel: "Class I", risk: "Low Risk" },
    { classLabel: "Class II", risk: "Low-Moderate Risk" },
    { classLabel: "Class III", risk: "High-Moderate Risk" },
    { classLabel: "Class IV", risk: "High Risk" },
];

const summaryData: { risk: string, cls: string, qms: string, pathway: ReactNode, docs: string, timeline: string }[] = [
    { risk: "Low", cls: "I", qms: "N/A", pathway: <Link to="/services/canada/mdel" className={inlineLinkCls}>MDEL</Link>, docs: "MDEL application, QMS procedures", timeline: "N/A" },
    { risk: "Low-Mod", cls: "II", qms: "MDSAP Certificate", pathway: <Link to="/services/canada/mdl" className={inlineLinkCls}>MDL</Link>, docs: "MDL application, Fee form, Labeling, DoC, MDSAP cert", timeline: "15 Days" },
    { risk: "High-Mod", cls: "III", qms: "MDSAP Certificate", pathway: <Link to="/services/canada/mdl" className={inlineLinkCls}>MDL</Link>, docs: "MDL application, DoC, ISO 13485 (MDSAP), Labeling, IMDRF Tech File", timeline: "60 Days" },
    { risk: "High", cls: "IV", qms: "MDSAP Certificate", pathway: <Link to="/services/canada/mdl" className={inlineLinkCls}>MDL</Link>, docs: "MDL application, DoC, ISO 13485 (MDSAP), Labeling, IMDRF Tech File", timeline: "75 Days" },
];

const lifecycleItems: { title: ReactNode, desc: ReactNode }[] = [
    { title: <Link to="/services/canada/change-management" className={inlineLinkCls}>Post-Approval Change Management</Link>, desc: "We expertly manage modifications to existing approvals, navigating the regulatory requirements for adding new variants, introducing accessories, or updating indications for use without disrupting your market access." },
    { title: <Link to="/services/canada/renewals" className={inlineLinkCls}>License Maintenance & Renewals</Link>, desc: "Maintaining compliance requires strict adherence to Health Canada’s administrative timelines. We ensure the timely payment of all registration fees and manage the annual license renewal process on your behalf." },
    { title: <Link to="/services/canada/liaison" className={inlineLinkCls}>Health Canada Liaison Support</Link>, desc: "NKB Regovanta acts as the vital communication bridge between your organization and Health Canada, responding to regulatory queries, clarification requests, and ensuring continuous alignment with agency expectations." }
];

function CanadaMarket() {
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
                        <span className="text-navy">Canada</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/ca.png" srcSet="https://flagcdn.com/w160/ca.png 2x" width="48" alt="Canada" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">Canada</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        Health Canada Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        Canada is recognized globally for possessing one of the most robust and stringent medical device regulatory frameworks. Governed by the Medical Devices Regulations (SOR/98-282), Health Canada rigorously evaluates the safety, clinical effectiveness, and overarching quality of all devices prior to market authorization. NKB Regovanta partners with manufacturers worldwide to navigate these rigorous guidelines and secure swift, compliant market entry.
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
                {activeTab === "Overview & Regulatory Landscape" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-6">Health Canada Medical Device Registration Overview</h2>
                            <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                                In Canada, the regulatory oversight of medical devices falls under the jurisdiction of Health Canada, specifically the Therapeutic Products Directorate within the Health Products and Food Branch. The Medical Devices Bureau executes the direct assessment of devices to ensure they meet stringent national standards for safety and efficacy before any product can be legally authorized for domestic sale.
                            </p>
                            
                            <div className="grid gap-4 md:grid-cols-2 mb-8">
                                {regulatoryDetails.map((d) => (
                                    <div key={d.label} className="flex gap-3 p-4 rounded-md bg-blue-50/50 border border-blue-100">
                                        <CheckCircle2 className="h-4 w-4 text-navy mt-0.5 shrink-0" />
                                        <div>
                                            <p className="text-[11px] uppercase tracking-wider font-bold text-navy/60">{d.label}</p>
                                            <p className="text-[13px] font-semibold text-navy mt-0.5">{d.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60 flex gap-4">
                                <AlertCircle className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                                <div>
                                    <h3 className="text-[13.5px] font-bold text-amber-900 mb-1">In-Country Representation</h3>
                                    <p className="text-[13px] text-amber-800 leading-relaxed">
                                        Unlike the EU or UK, <strong>Canada does not mandate the appointment of an Authorized Representative</strong> for foreign manufacturers. However, the importer or distributor managing the device within Canada must strictly adhere to Health Canada's Good Distribution Practices (GDP) and hold the appropriate licensing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Medical Device Classification" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Health Canada Medical Device Classification</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed mb-4">
                                The Canadian classification framework draws conceptual inspiration from the European Union’s Directive 93/42/EEC. While many underlying rules and terminological interpretations share similarities with the EU, <strong>it is critical to recognize that classifications do not automatically translate on a 1:1 basis.</strong> A device categorized as a specific class in Europe may be assigned a completely different class under Canadian regulations.
                            </p>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed mb-8">
                                Health Canada determines device classification based on evaluating four primary risk indicators: the degree of invasiveness, the duration of patient contact, the specific body system affected by the device, and whether its effects are localized or systemic.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-sm font-bold text-navy mb-3">Risk Tiers</h3>
                                    <div className="overflow-x-auto rounded-lg border border-border">
                                        <table className="w-full text-sm">
                                            <thead className="bg-navy text-white">
                                                <tr>
                                                    <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Device Class</th>
                                                    <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Risk Level</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border">
                                                {classificationData.map((row, i) => (
                                                    <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                                                        <td className="px-5 py-3 font-bold text-navy">{row.classLabel}</td>
                                                        <td className="px-5 py-3 text-navy/70">{row.risk}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-base font-bold text-navy mb-4">Comprehensive Regulatory Requirements Summary</h3>
                            <div className="overflow-x-auto rounded-lg border border-border">
                                <table className="w-full text-xs">
                                    <thead className="bg-navy text-white">
                                        <tr>{["Risk Level","Class","QMS Requirement","Pathway","Mandatory Documentation","Target Timeline"].map(h => (<th key={h} className="px-4 py-3 text-left font-semibold tracking-wider">{h}</th>))}</tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {summaryData.map((r, i) => (
                                            <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                                                <td className="px-4 py-4 text-navy/70 font-medium">{r.risk}</td>
                                                <td className="px-4 py-4 font-bold text-navy">{r.cls}</td>
                                                <td className="px-4 py-4 text-navy/70">{r.qms}</td>
                                                <td className="px-4 py-4 font-semibold text-navy">{r.pathway}</td>
                                                <td className="px-4 py-4 text-navy/70 whitespace-pre-wrap leading-relaxed">{r.docs.replace(/, /g, '\n')}</td>
                                                <td className="px-4 py-4 font-semibold text-navy">{r.timeline}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Registration Pathways (MDEL & MDL)" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Medical Device Registration-Canada</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed mb-8">
                                Health Canada mandates two distinct registration pathways depending strictly on the risk classification assigned to your medical device. NKB Regovanta provides expert guidance across both frameworks to guarantee a frictionless approval process.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-lg bg-blue-50/50 border border-blue-100">
                                <h3 className="text-[15px] font-bold text-navy mb-3">Medical Device Establishment License (MDEL)</h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed mb-4">
                                    This pathway is exclusively reserved for <strong>Class I (Low Risk)</strong> devices. Instead of licensing the individual product, Health Canada licenses the establishment importing or distributing the device.
                                </p>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    To secure an MDEL, applicants must draft and implement mandatory internal procedures—including complaint handling, recall protocols, and distribution records—and submit the application alongside the required Health Canada fees.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg bg-navy border border-navy text-white">
                                <h3 className="text-[15px] font-bold text-white mb-3">Medical Device License (MDL)</h3>
                                <p className="text-[13px] text-white/80 leading-relaxed mb-4">
                                    This stringent pathway applies to all <strong>Class II, III, and IV</strong> medical devices. Under the MDL framework, the specific device itself undergoes regulatory scrutiny and licensing before it can be sold.
                                </p>
                                <p className="text-[13px] text-white/80 leading-relaxed">
                                    MDL applications demand extensive documentation. Requirements scale with the device's risk class and typically include Declarations of Conformity, IMDRF-formatted technical dossiers, compliant labeling, and critically, a valid ISO 13485 certificate issued under the Medical Device Single Audit Program (MDSAP).
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Step-by-Step Canada Process" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-6">Process flow</h2>
                            <SplitFlow 
                            title="Device Classification"
                            leftTitle="Class I"
                            leftSteps={["Establish QMS procedures", "MDEL Application"]}
                            rightTitle="Class II, III, IV"
                            rightSteps={["MDSAP Certification", "MDL Application"]}
                            bottomSteps={["Evaluation", "Approval"]}
                        />
                        </div>
                    </div>
                )}

                {activeTab === "Lifecycle Management" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Post Approval Device Life Cycle Management</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                Securing your MDEL or MDL is merely the first regulatory milestone. NKB Regovanta provides unwavering end-to-end support for foreign manufacturers, guaranteeing your devices remain fully compliant throughout their commercial lifespan in the Canadian market.
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {lifecycleItems.map((item) => (
                                <div key={item.title} className="p-6 rounded-lg bg-blue-50/50 border border-blue-100 flex flex-col h-full">
                                    <h3 className="text-[13.5px] font-bold text-navy mb-3">{item.title}</h3>
                                    <p className="text-[12.5px] text-navy/70 leading-relaxed flex-grow">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <CTABand title="Ready to enter the Canadian market?" description="Speak to our Health Canada Experts" />
        </>
    );
}

