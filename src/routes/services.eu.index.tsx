import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";
import { ReactNode } from "react";

const inlineLinkCls = "inline-flex items-center font-bold text-blue-600 hover:text-blue-800 transition-colors underline decoration-blue-300/50 hover:decoration-blue-600 underline-offset-4 duration-300";

export const Route = createFileRoute("/services/eu/")({
    head: () => ({
        meta: [
            { title: "EU MDR 2017/745 & EU IVDR 2017/746 Consultant | CE Marking & EC REP | NKB Regovanta" },
            {
                name: "description",
                content: "Expert EU MDR 2017/745 regulatory consultant & EU IVDR 2017/746 compliance. Technical Documentation File (TDF) compilation, General Safety and Performance Requirements (GSPR) checklist, Clinical Evaluation Report (CER) MEDDEV 2.7/1 Rev 4, Performance Evaluation Report (PER), European Authorized Representative (EC REP), EUDAMED registration, and Post-Market Surveillance (PMS) / PSUR.",
            },
            {
                name: "keywords",
                content: "EU MDR 2017/745 regulatory consultant, CE Marking medical devices Europe, EU IVDR 2017/746 consultant, Technical Documentation File (TDF) compilation MDR, General Safety and Performance Requirements (GSPR) checklist, Clinical Evaluation Report (CER) MEDDEV 2.7/1 Rev 4, Performance Evaluation Report (PER) IVDR, European Authorized Representative (EC REP), EUDAMED registration and UDI compliance, Post-Market Surveillance (PMS) / PSUR EU MDR, Notified Body audit support EU, NKB Regovanta",
            },
            { property: "og:title", content: "EU MDR 2017/745 & CE Marking Consulting | NKB Regovanta" },
            {
                property: "og:description",
                content: "Comprehensive CE Marking, MDR/IVDR technical documentation, Clinical Evaluation Reports (CER), and EC REP representation in Europe.",
            },
            { property: "og:url", content: "https://www.nkbregovanta.com/services/eu" },
        ],
        links: [
            { rel: "canonical", href: "https://www.nkbregovanta.com/services/eu" },
        ],
    }),
    component: EUMarket,
});

const tabs = [
    "Overview & Compliance Landscape",
    "Step-by-Step EU Process",
    "NKB REGOVANTA EU Key Offerings",
    "EU Authorized Representative (EAR)"
];

const keyOfferings: { title: ReactNode, desc: ReactNode }[] = [
    { title: <Link to="/services/eu/mdr-ivdr-transition" className={inlineLinkCls}>Regulatory Strategy & MDR/IVDR Transition</Link>, desc: "We design comprehensive, end-to-end regulatory roadmaps specifically adapted for the EU MDR and EU IVDR frameworks. Our guidance ensures a seamless transition from legacy Directive regimes while achieving full alignment with the latest European requirements." },
    { title: <Link to="/services/eu/technical-documentation" className={inlineLinkCls}>Technical Documentation & Conformity Assessment</Link>, desc: "Our specialists facilitate the complete lifecycle of your Technical Files and Design Dossiers—from initial development and rigorous review to final submission. We also guide Notified Body interactions, oversee CE-Marking procedures, and support device safety and performance testing validations." },
    { title: <Link to="/services/eu/clinical-evaluation" className={inlineLinkCls}>Clinical & Performance Evaluation</Link>, desc: "NKB Regovanta delivers expert preparation for critical clinical documentation, including Clinical Evaluation Reports (CERs), Performance Evaluation Reports (PERs), PMCF/PMPF plans, PSURs, and biological evaluation data. We ensure absolute technical precision and regulatory fidelity across all device classifications." },
    { title: <Link to="/services/eu/eudamed" className={inlineLinkCls}>UDI & EUDAMED Registration Support</Link>, desc: "We meticulously verify that your Unique Device Identification (UDI) systems are fully compliant and provide hands-on assistance with the complex registration processes within the European database on medical devices (EUDAMED), alongside ongoing lifecycle management." },
    { title: <Link to="/services/eu/ear" className={inlineLinkCls}>European Authorized Representative (EAR) & Local Representation</Link>, desc: "For medical device manufacturers headquartered outside the EU, EEA, or Turkey, we serve as your legally mandated European Authorized Representative (EAR), delivering robust local compliance oversight and support across all EU member states." },
    { title: <Link to="/services/eu/pms" className={inlineLinkCls}>Post-Market Surveillance (PMS)</Link>, desc: "We assist in establishing, implementing, and maintaining resilient PMS infrastructures. This includes drafting Post-Market Surveillance Plans (PMSP) and Reports (PMSR), managing vigilance reporting, Field Safety Corrective Actions (FSCAs), and ensuring sustainable market access through continuous CE-mark retention." },
    { title: <Link to="/services/eu/ce-registration" className={inlineLinkCls}>CE Device Registration Pathway</Link>, desc: "NKB Regovanta oversees the entire EU CE-marking registration journey. We support conformity assessments, compile impeccable submissions, strategically engage with Notified Bodies, and drive timely approvals across all medical device and in vitro diagnostic categories." },
    { title: <Link to="/services/eu/qms" className={inlineLinkCls}>QMS Implementation Support</Link>, desc: "We provide comprehensive support for the deployment and ongoing maintenance of ISO 13485-compliant Quality Management Systems. Our approach ensures strict alignment with EU MDR/IVDR Quality and Safety mandates and fully anticipates Notified Body audit expectations." },
    { title: <Link to="/services/eu/labeling" className={inlineLinkCls}>Labeling & Artwork Compliance</Link>, desc: "Our regulatory team meticulously reviews your labeling, Instructions for Use (IFUs), product packaging, and symbology to guarantee full compliance with MDR/IVDR standards and the complex multilingual requirements spanning all 27 EU member states." }
];

const earOfferings: { title: ReactNode, desc: ReactNode }[] = [
    { title: "Device Registration with EU Authorities", desc: <span>As your appointed <Link to="/services/eu/ear" className={inlineLinkCls}>European Authorized Representative (EAR)</Link>, NKB Regovanta fulfills all MDR/IVDR local representation mandates for non-EU manufacturers. Operating from our European base, we facilitate direct device registration activities with relevant Competent Authorities and maintain all statutorily required regulatory records to secure your legal placement on the Union market.</span> },
    { title: "Documentation & Conformity Assurance", desc: "Our regulatory compliance experts conduct rigorous verifications of your Declaration of Conformity (DoC), CE Certificates, and Technical Files. We ensure these critical documents remain complete, continuously updated, and strictly compliant with MDR/IVDR standards, guaranteeing total readiness for conformity assessments." },
    { title: "Responding to Competent Authority Queries", desc: "NKB Regovanta assumes the responsibility for all direct communications and formal clarification requests initiated by EU Competent Authorities or Notified Bodies. We provide prompt, technically accurate responses on your behalf, mitigating the risk of approval delays or post-market regulatory complications." },
    { title: "Vigilance & Incident Communication", desc: "In our capacity as your EAR, we serve as the primary conduit for all safety-related regulatory communications. When required, we expertly coordinate incident notifications, Field Safety Corrective Actions (FSCA), and comprehensive vigilance reporting, ensuring seamless alignment between the manufacturer, healthcare professionals, and regulatory authorities." },
    { title: "Inspection & Audit Readiness", desc: "We proactively maintain all necessary documentation, official correspondence, and mandatory records required for authority audits and inspections. Our team guarantees that your Technical Documentation, labeling records, and post-market data are immediately accessible and fully compliant with all MDR/IVDR expectations." }
];

function EUMarket() {
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{"@context":"https://schema.org","@type":"Service","name":"EU MDR IVDR CE Marking Consulting","url":"https://www.nkbregovanta.com/services/eu","description":"CE marking under EU MDR 2017/745 and EU IVDR 2017/746. European Authorized Representative (EAR), EUDAMED registration, clinical evaluation, and PMS support.","provider":{"@type":"ProfessionalService","name":"NKB Regovanta Solutions Pvt. Ltd.","url":"https://www.nkbregovanta.com"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.nkbregovanta.com"},{"@type":"ListItem","position":2,"name":"Services","item":"https://www.nkbregovanta.com/services"},{"@type":"ListItem","position":3,"name":"EU MDR IVDR","item":"https://www.nkbregovanta.com/services/eu"}]}]) }} />
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-12 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services/regulatory-affairs" className="hover:text-navy transition-colors">Regulatory Affairs</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">EU</span>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <img src="https://flagcdn.com/w80/eu.png" srcSet="https://flagcdn.com/w160/eu.png 2x" width="48" alt="European Union" className="rounded-[3px] shadow-sm border border-black/10" />
                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70">European Union</p>
                    </div>
                    <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}>
                        EU MDR / IVDR Compliance & Registration
                    </h1>
                    <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium max-w-2xl">
                        NKB Regovanta simplifies compliance with stringent EU medical device requirements under the Medical Devices Regulation (EU 2017/745) and In Vitro Diagnostic Regulation (EU 2017/746). We expertly guide manufacturers through Notified Body conformity assessments, CE technical documentation, EUDAMED registration, and the seamless transition from legacy directives to the new regulatory landscape.
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
                            <h2 className="text-xl font-bold text-navy mb-6">Compliance for Medical Device Registration & Regulation Landscape in EU</h2>
                            <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                                The European Union stands as one of the most rigorously regulated, yet commercially vital, medical device markets globally. Encompassing 27 member states, alongside 3 EEA nations and Turkey, the Union market operates under a strictly harmonized regulatory ecosystem. This framework, defined by the EU MDR (2017/745) for medical devices and the EU IVDR (2017/746) for in vitro diagnostics, mandates uniform safety and performance benchmarks across all product categories.
                            </p>
                            <p className="text-[13.5px] text-navy/80 leading-relaxed mb-8">
                                To legally introduce a device into the Union market, manufacturers are required to secure CE marking. This certification serves as a formal declaration of compliance with applicable regulations, contingent upon the device’s specific risk classification and the appropriate conformity assessment route. Non-compliance carries severe repercussions, potentially resulting in product recalls, customs seizures, suspension of existing certifications, or a total loss of market access privileges.
                            </p>
                            
                            <h3 className="text-base font-bold text-navy mb-4">Under the current EU Regulatory regime:</h3>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="flex gap-3 p-5 rounded-lg bg-blue-50/50 border border-blue-100">
                                    <CheckCircle2 className="h-5 w-5 text-navy mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-navy/80 leading-relaxed"><strong>CE marking is strictly mandatory</strong> for all medical devices and IVDs prior to commercialization within the region.</p>
                                </div>
                                <div className="flex gap-3 p-5 rounded-lg bg-blue-50/50 border border-blue-100">
                                    <CheckCircle2 className="h-5 w-5 text-navy mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-navy/80 leading-relaxed"><strong>EUDAMED device registration</strong> is actively being implemented in phased rollouts, with multiple modules already designated for mandatory use.</p>
                                </div>
                                <div className="flex gap-3 p-5 rounded-lg bg-blue-50/50 border border-blue-100">
                                    <CheckCircle2 className="h-5 w-5 text-navy mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-navy/80 leading-relaxed"><strong>European Authorised Representative (EAR)</strong> appointment is legally obligatory for any manufacturing entity located outside the EU/EEA/Turkey jurisdictions.</p>
                                </div>
                                <div className="flex gap-3 p-5 rounded-lg bg-blue-50/50 border border-blue-100">
                                    <CheckCircle2 className="h-5 w-5 text-navy mt-0.5 shrink-0" />
                                    <p className="text-[13px] text-navy/80 leading-relaxed"><strong>Stringent MDR/IVDR classification rules</strong> necessitate highly robust technical documentation, definitive clinical or performance evidence, and active, continuous lifecycle monitoring.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Step-by-Step EU Process" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">Step-by-Step EU Compliance Process</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed mb-6">
                                Successfully securing market access for a medical device or IVD within the EU involves navigating a series of well-defined regulatory stages. The typical processing time spans from 3 to 12 months, contingent upon the device's classification level and the current state of documentation readiness.
                            </p>
                            
                            <LinearFlow steps={[
                            { title: "Product classification as per EUMDR & EU IVDR" },
                            { title: "Technical file compilation as per Annex II & III of EUMDR & EUIVDR" },
                            { title: "Draft EU DoC" },
                            { title: "Identify NANDO registered EU NB for class Im, Ir, IIa, IIb & III" },
                            { title: "Guidance through CE certification" },
                            { title: "Affix CE to your device" },
                            { title: "Support in registering your device on EUDAMED" },
                            { title: "Maintain compliance with Post market activities" }
                        ]} />
                        </div>
                    </div>
                )}

                {activeTab === "NKB REGOVANTA EU Key Offerings" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">NKB REGOVANTA Medical Device EU Key Offerings</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                Our comprehensive suite of regulatory services is designed to guide manufacturers from initial strategy through to post-market compliance, ensuring seamless entry and sustained presence in the European Union market.
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

                {activeTab === "EU Authorized Representative (EAR)" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div>
                            <h2 className="text-xl font-bold text-navy mb-3">EU Authorized Representative (EAR) Service Offerings</h2>
                            <p className="text-[13.5px] text-navy/70 leading-relaxed">
                                For manufacturers outside the EU, having a reliable European Authorized Representative is not just a legal requirement—it is a critical component of your regional market access strategy and ongoing compliance security.
                            </p>
                        </div>
                        <div className="space-y-5">
                            {earOfferings.map((item, i) => (
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

            <CTABand title="Ready to secure EU CE Marking?" description="Speak to our European Experts" />
        </>
    );
}

