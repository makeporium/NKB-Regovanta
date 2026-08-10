import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, FileText, Download, Factory } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";
import { ReactNode } from "react";

const inlineLinkCls = "inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-300/50 hover:decoration-blue-600 underline-offset-4 duration-300";

export const Route = createFileRoute("/services/usa/")({
    head: () => ({
        meta: [
            { title: "US FDA Medical Device Registration | NKB Regovanta" },
            {
                name: "description",
                content: "Navigate the US FDA medical device registration process. Explore pathways, classification, agent requirements, and post-approval obligations for the US market.",
            },
        ],
    }),
    component: USAMarket,
});

const tabs = [
    "Overview",
    "Medical Device Classification USA",
    "Non-CDRH Medical Device Registrations",
    "Post Approval Compliance Requirements for Medical Devices",
    "Process flow",
    "Post Approval Device Life Cycle Management"
];

const classificationData: { classLabel: string, risk: string, pathway: ReactNode }[] = [
    { classLabel: "Class I", risk: "Low Risk", pathway: "510(k) Exempt" },
    { classLabel: "Class II", risk: "Moderate Risk (with predicate)", pathway: <Link to="/services/usa/510k" className={inlineLinkCls}>Premarket Notification / 510(k)</Link> },
    { classLabel: "Class II", risk: "Moderate Risk (no predicate)", pathway: <Link to="/services/usa/de-novo" className={inlineLinkCls}>De-Novo Classification Request</Link> },
    { classLabel: "Class III", risk: "High Risk", pathway: <Link to="/services/usa/pma" className={inlineLinkCls}>Premarket Approval (PMA)</Link> },
];

const summaryData: { risk: string, cls: string, audit: string, predicate: string, pathway: ReactNode, agent: string, timeline: string }[] = [
    { risk: "Low Risk", cls: "I", audit: "No", predicate: "N/A", pathway: "Exempt", agent: "Yes", timeline: "~1 Month" },
    { risk: "Medium Risk", cls: "II", audit: "Yes (post-approval)", predicate: "Yes", pathway: <Link to="/services/usa/510k" className={inlineLinkCls}>510(k) PMN</Link>, agent: "Yes", timeline: "9-12 Months" },
    { risk: "Medium Risk", cls: "II", audit: "Yes (post-approval)", predicate: "No", pathway: <Link to="/services/usa/de-novo" className={inlineLinkCls}>De-Novo</Link>, agent: "Yes", timeline: "18-30 Months" },
    { risk: "High Risk", cls: "III", audit: "Yes (pre-approval)", predicate: "N/A", pathway: <Link to="/services/usa/pma" className={inlineLinkCls}>PMA</Link>, agent: "Yes", timeline: "18-30 Months" },
];

const regulatoryDetails: { label: string, value: ReactNode }[] = [
    { label: "Regulatory Authority", value: "Food and Drug Administration (FDA)" },
    { label: "Governing Regulation", value: "Title 21 Code of Federal Regulations (21 CFR) Parts 800-1299" },
    { label: "Registration Pathway", value: <span className="inline-flex gap-1 flex-wrap"><Link to="/services/usa/510k" className={inlineLinkCls}>Premarket Notification (510k)</Link>, <Link to="/services/usa/pma" className={inlineLinkCls}>Premarket Approval (PMA)</Link>, or <Link to="/services/usa/de-novo" className={inlineLinkCls}>De-Novo Classification</Link></span> },
    { label: "Authorized Representative", value: <Link to="/services/usa/agent-service" className={inlineLinkCls}>U.S. FDA Agent</Link> },
    { label: "QMS Requirement", value: "Quality System Regulation (QSR) - 21 CFR Part 820" },
    { label: "Technical Assessment Body", value: "Centre for Devices and Radiological Health (CDRH)" },
    { label: "License Validity", value: "Unlimited" },
    { label: "Labeling Requirements", value: "21 CFR Part 801" },
    { label: "Submission Format", value: <Link to="/services/usa/e-star" className={inlineLinkCls}>eSTAR</Link> },
    { label: "Language", value: "English" },
];

const nonCDRHItems = [
    {
        agency: "CDC / NIOSH",
        desc: "Certain borderline products — such as surgical respirators — are regulated not by the FDA's CDRH but by the Centers for Disease Control and Prevention (CDC) in collaboration with the National Institute for Occupational Safety and Health (NIOSH). These agencies govern products primarily intended to protect workers from occupational health hazards rather than to treat or diagnose medical conditions."
    },
    {
        agency: "Environmental Protection Agency (EPA)",
        desc: "Healthcare-grade disinfectants and antimicrobial sterilization agents that would be considered medical devices in many other countries are instead registered and regulated by the U.S. Environmental Protection Agency (EPA). Their primary classification is based on the active chemical composition and intended biocidal use rather than a device function."
    },
    {
        agency: "CBER — Centre for Biologics Evaluation and Research",
        desc: "Products at the intersection of devices and biological materials — commonly referred to as combination products — may be subject to CBER review rather than CDRH. This includes certain in vitro diagnostic systems involving biological reagents and therapies that combine a physical device with a biological component as the primary mechanism of action."
    },
    {
        agency: "CDER — Centre for Drug Evaluation and Research",
        desc: "Where a product's primary mechanism of action is pharmacological — even when it incorporates a device component — jurisdiction typically falls under CDER rather than CDRH. Drug-device combination products are reviewed based on their predominant mode of action, and manufacturers are advised to seek a formal product jurisdiction determination early in development to avoid costly reclassification later."
    },
];

const postApprovalItems: { title: ReactNode, desc: ReactNode }[] = [
    {
        title: <Link to="/services/usa/establishment-registration" className={inlineLinkCls}>Establishment Registration & Device Listing</Link>,
        desc: "Every device manufacturing establishment — irrespective of the device's risk class — must be registered in the FDA's Unified Registration and Listing System (FURLS) database. In addition, each approved device must be listed in this system before marketing activities can commence in the United States. Certain product categories, such as radiation-emitting devices, may be subject to supplementary requirements — including obtaining an accession number — before the product can be legally imported into the country."
    },
    {
        title: <Link to="/services/usa/udi-gudid" className={inlineLinkCls}>Unique Device Identification (UDI) Compliance</Link>,
        desc: "Under FDA's Unique Device Identification system, all device classes are required to carry a UDI — a standardized numeric or alphanumeric code that enables consistent and reliable identification of devices throughout the supply chain. UDI compliance applies to labeling, packaging, and the Global Unique Device Identification Database (GUDID). Meeting UDI requirements is mandatory before a device can be legally placed on the U.S. market, regardless of risk classification."
    },
    {
        title: "Annual Establishment Fee Payments",
        desc: "To maintain an active establishment registration and retain the legal right to continue distributing devices in the U.S., manufacturers are required to pay annual establishment fees to the FDA under the Medical Device User Fee Amendments (MDUFA) framework. The FDA provides a tiered fee reduction structure for entities that hold a valid Small Business Determination (SBD) certificate, recognizing the different financial burden on smaller organizations relative to large multinational corporations."
    },
    {
        title: "Quality Management System Audits",
        desc: "For any device that is not explicitly GMP-exempt, the FDA reserves the right to conduct unannounced inspections of the manufacturing facility at any point following approval. These inspections assess the establishment's compliance with Quality Systems Regulation (QSR) requirements as outlined in 21 CFR Part 820, covering areas such as design controls, corrective and preventive actions (CAPA), complaint handling, and production records. A finding of non-compliance can result in warning letters, import alerts, or product recalls."
    },
];

const lifecycleItems: { title: ReactNode, desc: ReactNode }[] = [
    {
        title: "Post-Approval Change Management",
        desc: <span>Modifications to an approved medical device — whether they relate to design, materials, manufacturing processes, software, indications for use, or labeling — must be carefully evaluated against FDA change control requirements. Depending on the nature and significance of the change, a new <Link to="/services/usa/510k" className={inlineLinkCls}>510(k)</Link>, PMA supplement, or a simple records update may be required. NKB Regovanta helps manufacturers assess, document, and file changes efficiently to minimize disruption to ongoing commercialization.</span>
    },
    {
        title: "License & Registration Renewal",
        desc: "Maintaining uninterrupted market access in the U.S. requires consistent attention to annual MDUFA fee deadlines and establishment registration renewals. Lapses in payment or registration can lead to import alerts and halt distribution. Our team monitors all relevant deadlines and ensures timely submissions so manufacturers can focus on product development and sales without administrative risk."
    },
    {
        title: "FDA Correspondence & Liaison",
        desc: "Direct communication with the U.S. FDA — whether in response to deficiency letters, inspection observations, or voluntary reporting obligations — requires careful, well-documented responses that demonstrate regulatory compliance. NKB Regovanta acts as the interface between the manufacturer and the Agency, managing correspondence, preparing responses to FDA queries, and coordinating all logistical and regulatory requirements during facility inspections."
    },
];

function USAMarket() {
    const [activeTab, setActiveTab] = useState("Overview");

    return (
        <>
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">USA</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/us.png" srcSet="https://flagcdn.com/w160/us.png 2x" width="48" alt="United States" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">United States of America</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        US FDA Medical Device Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        The United States is among the world most stringently regulated markets for medical devices. With a regulatory framework dating back to 1976 and continuously refined since, the FDA Centre for Devices and Radiological Health (CDRH) governs the entire product lifecycle from development strategy through post-market compliance.
                    </p>
                </div>
            </section>

            <div className="sticky top-0 z-30 bg-white border-b border-border shadow-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-0 overflow-x-auto">
                        {tabs.map((tab) => (
                            <button key={tab} id={`tab-${tab.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setActiveTab(tab)}
                                className={`whitespace-nowrap px-5 py-4 text-[12.5px] font-semibold border-b-2 transition-colors ${activeTab === tab ? "border-navy text-navy" : "border-transparent text-navy/50 hover:text-navy"}`}>
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">

                {activeTab === "Overview" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-6">US FDA Medical Device Registration Overview</h2>
                            <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                                The United States of America represents one of the most prominent, stringently regulated medical device markets globally, featuring highly structured registration pathways and compliance prerequisites. The foundational medical device regulations in the U.S. were established in 1976 and have undergone significant evolution over the decades. Oversight and regulation are managed by the Centre for Devices and Radiological Health (CDRH), a specialized branch operating under the broader Food and Drug Administration (FDA). NKB Regovanta has partnered with numerous device manufacturers worldwide, successfully guiding them through the complexities of the US FDA medical device registration lifecycle.
                            </p>
                            <div className="grid gap-4 md:grid-cols-2">
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
                        </div>
                        <div className="space-y-6 text-[13.5px] text-navy/80 leading-relaxed">
                            <div>
                                <h3 className="text-base font-bold text-navy mb-2"><Link to="/services/usa/agent-service" className={inlineLinkCls}>U.S. FDA Agent Requirement</Link></h3>
                                <p>Foreign device manufacturers that do not maintain an established place of business within the United States are legally required to designate a U.S. FDA Agent prior to initiating any registration or import activities. This agent — whether an individual or an organization — must be physically located within the United States and is responsible for serving as the FDA's primary point of contact with the manufacturer. The scope of the agent's responsibilities is formally defined under applicable CFR regulations and includes receiving regulatory correspondence, facilitating inspections, and supporting submission activities on the manufacturer's behalf.</p>
                                <p className="mt-3">The U.S. Agent plays a critical role throughout both the registration and post-market phases, and selecting an experienced agent with deep knowledge of FDA processes is strongly recommended for manufacturers new to the U.S. market.</p>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-navy mb-2"><Link to="/services/usa/q-submission" className={inlineLinkCls}>Interactive Pre-Submission Meetings with the FDA</Link></h3>
                                <p>The FDA has established a structured Q-Submission (Q-Sub) program that allows device manufacturers to engage directly with CDRH reviewers at multiple stages of the product development and registration journey. These interactions — which include Pre-Submissions (formerly known as Pre-IDE meetings), Informational Meetings, and Study Risk Determinations — are designed to help manufacturers better understand regulatory expectations before committing to a specific development or submission pathway.</p>
                                <p className="mt-3">Engaging with the FDA through the Q-Sub process before initiating development activities or filing a formal registration application can provide clarity on classification, acceptable testing standards, clinical data expectations, and likely review timelines. This proactive approach has been shown to meaningfully reduce both the total cost and duration of the device commercialization process in the U.S.</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Medical Device Classification USA" && (
                    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Medical Device Classification USA</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed mb-8">
                                The FDA categorizes Medical Devices into three distinct, risk-based classifications: Class I, Class II, and Class III. Within this framework, Class I encompasses devices presenting the lowest potential risk to patients, whereas Class III is reserved for devices associated with the highest risk levels. The specific registration prerequisites and appropriate regulatory pathways are directly dictated by the device's assigned class.
                            </p>
                            <div className="overflow-x-auto rounded-lg border border-border">
                                <table className="w-full text-sm">
                                    <thead className="bg-navy text-white">
                                        <tr>
                                            <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Device Class</th>
                                            <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Risk Level</th>
                                            <th className="px-5 py-3 text-left text-[11px] font-semibold tracking-wider">Registration Pathway</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {classificationData.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                                                <td className="px-5 py-3 font-bold text-navy">{row.classLabel}</td>
                                                <td className="px-5 py-3 text-navy/70">{row.risk}</td>
                                                <td className="px-5 py-3 font-semibold text-navy">{row.pathway}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="space-y-5 text-[13.5px] text-navy/80 leading-relaxed">
                            <div>
                                <h3 className="font-bold text-navy mb-2">Class I — Low Risk Devices</h3>
                                <p>The majority of Class I devices are exempt from both GMP (Good Manufacturing Practice) requirements and 510(k) submission obligations, meaning they can generally be introduced to the U.S. market without prior FDA approval. However, manufacturers of even GMP-exempt devices are still bound by a set of baseline obligations: they must register their establishment with the FDA, list all marketed devices in the appropriate FDA database, comply with Unique Device Identification (UDI) labeling requirements, and maintain post-market surveillance records. These requirements apply regardless of whether a premarket submission is needed.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-navy mb-2">Class II — Medium Risk Devices</h3>
                                <p>Class II devices carry a moderate level of risk and are subject to more stringent regulatory controls than Class I. Manufacturers of Class II devices that can identify a legally marketed predicate device — one that is substantially equivalent in intended use and technological characteristics — may pursue the Premarket Notification (510(k)) pathway, also referred to as 510(k) registration. This is the most widely adopted route for U.S. market entry across the industry. The subject device must demonstrate Substantial Equivalence (SE) to the identified predicate through performance testing, design comparisons, and in some cases clinical data.</p>
                                <p className="mt-2">For Class II devices where no suitable predicate exists, manufacturers may petition the FDA for reclassification through the De-Novo process. A successful De-Novo application results in the device being assigned a new device type and product code, and it may itself serve as a predicate for future 510(k) submissions by others.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-navy mb-2">Class III — High Risk Devices</h3>
                                <p>Class III encompasses the highest-risk device categories — typically those that sustain or support human life, are implanted in the body, or present a significant risk of illness or injury if they fail. Manufacturers of Class III devices must submit a Premarket Approval (PMA) application to the FDA, which requires comprehensive clinical evidence demonstrating the device's safety and effectiveness. The FDA review process for a PMA is far more intensive than for a 510(k) and typically includes a detailed review of clinical study data, manufacturing information, and labeling.</p>
                                <p className="mt-2">As a component of the PMA review, the FDA will conduct a pre-approval Quality Management System (QMS) inspection of the device manufacturer's facility to verify that production processes meet required quality standards. Approval of a PMA does not exempt the manufacturer from ongoing post-market commitments, which may include post-approval studies and mandatory reporting obligations.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-navy mb-4">Registration Summary</h3>
                            <div className="overflow-x-auto rounded-lg border border-border">
                                <table className="w-full text-xs">
                                    <thead className="bg-navy text-white">
                                        <tr>{["Risk","Class","QMS Audit","Predicate","Pathway","U.S. Agent","Timeline"].map(h => (<th key={h} className="px-4 py-3 text-left font-semibold tracking-wider">{h}</th>))}</tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {summaryData.map((r, i) => (
                                            <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                                                <td className="px-4 py-3 text-navy/70">{r.risk}</td>
                                                <td className="px-4 py-3 font-bold text-navy">{r.cls}</td>
                                                <td className="px-4 py-3 text-navy/70">{r.audit}</td>
                                                <td className="px-4 py-3 text-navy/70">{r.predicate}</td>
                                                <td className="px-4 py-3 font-semibold text-navy">{r.pathway}</td>
                                                <td className="px-4 py-3 text-navy/70">{r.agent}</td>
                                                <td className="px-4 py-3 font-semibold text-navy">{r.timeline}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Non-CDRH Medical Device Registrations" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Non-CDRH Medical Device Registrations</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                Depending on their specific indications for use, certain borderline products that might be classified strictly as medical devices in other jurisdictions — such as surgical respirators, specific disinfectants, or complex combination products — may require the involvement of alternative federal agencies. These can include the Centers for Disease Control and Prevention (CDC), the National Institute for Occupational Safety and Health (NIOSH), the Environmental Protection Agency (EPA), the Centre for Biologics Evaluation and Research (CBER), or the Centre for Drug Evaluation and Research (CDER).
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-2">
                            {nonCDRHItems.map((item) => (
                                <div key={item.agency} className="p-5 rounded-lg bg-blue-50/50 border border-blue-100">
                                    <h3 className="text-[13px] font-bold text-navy mb-2">{item.agency}</h3>
                                    <p className="text-[12.5px] text-navy/70 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-5 rounded-lg border border-amber-200 bg-amber-50/60">
                            <p className="text-[13px] font-semibold text-amber-900 mb-1">Important Note</p>
                            <p className="text-[12.5px] text-amber-800 leading-relaxed">Correctly determining the regulatory jurisdiction for borderline and combination products is one of the most consequential early decisions in the U.S. market-entry process. A misclassification can result in submission under the wrong authority, leading to significant delays, additional clinical data requirements, or full resubmission. NKB Regovanta provides product classification assessments and formal jurisdiction determination support to help manufacturers start the process correctly.</p>
                        </div>
                    </div>
                )}

                {activeTab === "Post Approval Compliance Requirements for Medical Devices" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Post Approval Compliance Requirements for Medical Devices</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                Securing initial market authorization is only the first step. Every device manufacturer is obligated to strictly adhere to the following post-approval compliance requirements to maintain their standing in the U.S. market:
                            </p>
                        </div>
                        <div className="space-y-5">
                            {postApprovalItems.map((item, i) => (
                                <div key={i} className="flex gap-4 p-5 rounded-lg border border-border">
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-navy text-white flex items-center justify-center text-xs font-bold mt-0.5">{i + 1}</div>
                                    <div>
                                        <h3 className="font-bold text-navy text-[13.5px] mb-1">{item.title}</h3>
                                        <p className="text-[13px] text-navy/70 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === "Process flow" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-6">Process flow</h2>
                            <LinearFlow steps={[{title: "Classification of Device"},{title: "Identification of QSR Requirements"},{title: "Predicate Device Identification"},{title: "Gap Analysis of Source Documents"},{title: "Compilation of Technical File"},{title: "Creation And Validation of E-Copies"},{title: "Submission of Application"},{title: "US FDA Approval"},{title: "Appointment of US Agent"},{title: "Establishment Registration and Device Listing"},{title: "Post-Approval Activities and Compliance"}]} />
                        </div>
                    </div>
                )}

                {activeTab === "Post Approval Device Life Cycle Management" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Post Approval Device Life Cycle Management</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                NKB Regovanta provides comprehensive, end-to-end medical device lifecycle management support for foreign manufacturers, which encompasses critical post-approval activities such as:
                            </p>
                        </div>
                        <div className="grid gap-5 md:grid-cols-3">
                            {lifecycleItems.map((item) => (
                                <div key={item.title} className="p-6 rounded-lg bg-blue-50/50 border border-blue-100">
                                    <h3 className="font-bold text-navy text-[13.5px] mb-2">{item.title}</h3>
                                    <p className="text-[12.5px] text-navy/70 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="p-6 rounded-lg bg-navy text-white">
                            <h3 className="font-bold text-white text-base mb-3">Dedicated U.S. Regulatory Support</h3>
                            <p className="text-[13.5px] leading-relaxed opacity-90">NKB Regovanta maintains a dedicated team of regulatory professionals with hands-on experience in U.S. device submissions, quality system compliance, and direct FDA engagement. Our experts actively track all FDA guidance updates, draft guidance documents, and Federal Register notices — ensuring that our clients are always informed about changes that affect their product's compliance status and commercial standing in the U.S. market.</p>
                            <p className="text-[13.5px] leading-relaxed opacity-90 mt-3">Whether you are managing a single device approval or a complex portfolio of products across multiple FDA classifications, our team provides structured, reliable support at every step of the post-approval lifecycle — so you can remain focused on innovation while we handle regulatory continuity.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 mt-5 bg-white text-navy text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-white/90 transition-colors">
                                Talk to Our US Regulatory Team <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <CTABand title="Ready to enter the US market?" description="Book a Consultation" />
        </>
    );
}
