import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, FileCheck2, ShieldCheck, Database, Calendar, Users, FlaskConical, ChevronDown, ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-ivd.png";
import eudamedFlowchart from "@/assets/eudamed_registration_workflow.png";

export const Route = createFileRoute("/industries/ivd_/eu")({
    head: () => ({
        meta: [
            { title: "IVD Regulation in the EU | IVDR 2017/746 | NKB Regovanta" },
            { name: "description", content: "EU IVDR 2017/746 regulatory consulting for in vitro diagnostic manufacturers. Performance Evaluation (PEP/PER), Notified Body coordination, EUDAMED registration, and Common Specifications compliance from NKB Regovanta." },
          { name: "keywords", content: "IVD Regulation in the EU, IVDR 2017/746, industries ivd eu, NKB Regovanta, regulatory consultant, medical device" },
          { property: "og:title", content: "IVD Regulation in the EU | IVDR 2017/746 | NKB Regovanta" },
          { property: "og:description", content: "EU IVDR 2017/746 regulatory consulting for in vitro diagnostic manufacturers. Performance Evaluation (PEP/PER), Notified Body coordination, EUDAMED registration, and Common Specifications compliance from NKB Regovanta." },
          { property: "og:url", content: "https://www.nkbregovanta.com/industries/ivd/eu" },
          { property: "og:type", content: "website" },
          { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "IVD Regulation in the EU | IVDR 2017/746 | NKB Regovanta" },
          { name: "twitter:description", content: "EU IVDR 2017/746 regulatory consulting for in vitro diagnostic manufacturers. Performance Evaluation (PEP/PER), Notified Body coordination, EUDAMED registration, and Common Specifications compliance from NKB Regovanta." },
          { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
        ],
    links: [
        { rel: "canonical", href: "https://www.nkbregovanta.com/industries/ivd/eu" },
    ],
    }),
    component: IVDEu,
});

const services = [
    {
        icon: <Users className="h-6 w-6 text-accent mb-4" />,
        title: "Notified Body Representation",
        desc: "We support you through the rigorous conformity assessments required by EU Notified Bodies for Class B, C, and D devices.",
    },
    {
        icon: <Database className="h-6 w-6 text-accent mb-4" />,
        title: "EUDAMED Registration",
        desc: "Ensure seamless market access by registering your Actor details and UDI/Device information in EUDAMED before the May 2026 deadline.",
    },
    {
        icon: <FlaskConical className="h-6 w-6 text-accent mb-4" />,
        title: "Clinical Evidence & PMPF",
        desc: "Develop robust analytical and clinical performance reports, and establish proactive Post-Market Performance Follow-up (PMPF) plans.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
        title: "Technical Documentation",
        desc: "Compile comprehensive technical files ensuring strict alignment with the General Safety and Performance Requirements (GSPRs) of Annex I.",
    },
];

function IVDEu() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-white overflow-hidden pb-4 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
                    <div className="flex items-center gap-2 text-[11px] text-navy/60 font-semibold mb-4">
                        <Link to="/industries" className="hover:text-navy transition-colors">Industries</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/industries/ivd" className="hover:text-navy transition-colors">IVD</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-navy">European Union</span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">European Regulatory Framework</p>
                    <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                        IVD Regulation in the EU - IVDR 2017/746
                    </h1>
                    <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
                        The European Union overhauled its diagnostic framework with the introduction of the In Vitro Diagnostic Medical Devices Regulation (IVDR) 2017/746. Fully replacing the outdated IVDD, this regulation introduces significantly stricter clinical evidence requirements, mandates extensive Notified Body involvement, and relies heavily on the EUDAMED database.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-surface/30 border-t border-border mt-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-lg border border-border/50 shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">The IVDR Classification Paradigm Shift</h2>
                        <div className="prose prose-blue max-w-none text-navy/80 space-y-6">
                            <p className="text-[15px] leading-relaxed">
                                Under the previous IVD Directive (IVDD), nearly 80% of diagnostic devices could be self-certified by the manufacturer. The implementation of IVDR has fundamentally reversed this statistic. Today, approximately 80% of all IVDs require conformity assessment by an independent <strong>Notified Body</strong> before they can be placed on the European market.
                            </p>

                            <div className="bg-surface/50 p-6 rounded-md my-8 border border-border">
                                <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2"><FileCheck2 className="w-5 h-5 text-accent" /> EU IVDR Classification Matrix</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                                        <thead>
                                            <tr className="border-b-2 border-navy/20">
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Class</th>
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Risk Level</th>
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Examples</th>
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Assessment Pathway</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            <tr className="hover:bg-white transition-colors">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class A</td>
                                                <td className="py-3 px-3 text-navy/70">Lowest risk</td>
                                                <td className="py-3 px-3 text-navy/70">Lab equipment, general reagents</td>
                                                <td className="py-3 px-3 text-navy/70">Self-declaration (unless sterile)</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors bg-white/20">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class B</td>
                                                <td className="py-3 px-3 text-navy/70">Moderate risk</td>
                                                <td className="py-3 px-3 text-navy/70">Urine analysis, general serology tests</td>
                                                <td className="py-3 px-3 text-navy/70">Notified Body mandatory</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class C</td>
                                                <td className="py-3 px-3 text-navy/70">High individual risk</td>
                                                <td className="py-3 px-3 text-navy/70">Cancer screening, companion diagnostics</td>
                                                <td className="py-3 px-3 text-navy/70">Notified Body + EURL</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors bg-white/20">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class D</td>
                                                <td className="py-3 px-3 text-navy/70">High public health risk</td>
                                                <td className="py-3 px-3 text-navy/70">HIV, HBV, blood screening products</td>
                                                <td className="py-3 px-3 text-navy/70">Notified Body + EURL + Common Specs</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">Core IVDR Requirements</h2>
                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-surface p-6 rounded-lg border border-border">
                                    <h3 className="font-bold text-navy text-lg mb-2">Rigorous Performance Evaluation</h3>
                                    <p className="text-[14px] text-navy/80 leading-relaxed">Mandatory for all devices under IVDR. You must compile analytical performance data, clinical performance data, and establish scientific validity. Unlike India, existing clinical data can be utilized if it is scientifically robust, minimizing the need for new trials.</p>
                                </div>
                                <div className="bg-surface p-6 rounded-lg border border-border">
                                    <h3 className="font-bold text-navy text-lg mb-2">GSPRs and Technical Files</h3>
                                    <p className="text-[14px] text-navy/80 leading-relaxed">Manufacturers must prove strict conformity to the General Safety and Performance Requirements (GSPRs) found in Annex I. This requires a comprehensive technical file containing design details, risk management, and labeling plans.</p>
                                </div>
                                <div className="bg-surface p-6 rounded-lg border border-border">
                                    <h3 className="font-bold text-navy text-lg mb-2">Designated PRRC</h3>
                                    <p className="text-[14px] text-navy/80 leading-relaxed">It is legally required to appoint a Person Responsible for Regulatory Compliance (PRRC) who possesses specific technical and regulatory qualifications to oversee continuous compliance.</p>
                                </div>
                                <div className="bg-surface p-6 rounded-lg border border-border">
                                    <h3 className="font-bold text-navy text-lg mb-2">PMPF and UDI Systems</h3>
                                    <p className="text-[14px] text-navy/80 leading-relaxed">Post-Market Performance Follow-up (PMPF) ensures proactive device monitoring post-launch. Furthermore, all devices must be assigned a Unique Device Identifier (UDI) and be registered within EUDAMED.</p>
                                </div>
                            </div>

                            {/* EUDAMED workflow */}
                            <div className="w-full rounded-lg shadow-sm border border-border flex items-center justify-center my-10 overflow-hidden bg-white p-2">
                                <img src={eudamedFlowchart} alt="EUDAMED Registration Workflow" className="w-full h-auto object-contain rounded-md" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4 flex items-center gap-3">
                                <Calendar className="w-8 h-8 text-accent" /> EUDAMED Transition Timelines
                            </h2>
                            <p className="text-[15px] leading-relaxed mb-6">
                                The most critical development for 2025–2026 is the mandatory rollout of EUDAMED. As per Commission Decision (EU) 2025/2371, four core EUDAMED modules are fully functional and will transition from voluntary to mandatory status on <strong>28 May 2026</strong>. Any obligation linked to Actor Registration, UDI/Device Registration, Notified Bodies & Certificates, or Market Surveillance must be fulfilled exclusively within EUDAMED.
                            </p>

                            <ul className="space-y-4 pl-4 border-l-2 border-accent/30 ml-2">
                                <li className="relative pl-6">
                                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent"></div>
                                    <strong className="text-navy text-[15px]">28 May 2026:</strong>
                                    <span className="text-[14.5px] text-navy/80 ml-2">Mandatory use of the first four EUDAMED modules goes live. If you export to the EU, your Authorised Representative must be registered in the Actor module prior to this date.</span>
                                </li>
                                <li className="relative pl-6">
                                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent"></div>
                                    <strong className="text-navy text-[15px]">28 November 2026:</strong>
                                    <span className="text-[14.5px] text-navy/80 ml-2">Final deadline to register legacy devices (those placed on the market before May 2026 but continuing to be sold).</span>
                                </li>
                                <li className="relative pl-6">
                                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-accent"></div>
                                    <strong className="text-navy text-[15px]">28 May 2027:</strong>
                                    <span className="text-[14.5px] text-navy/80 ml-2">Notified Bodies must complete the upload of all legacy IVDR certificate information.</span>
                                </li>
                            </ul>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-12 mb-4">Key Legislative Amendments</h2>
                            <p className="text-[15px] leading-relaxed mb-6">
                                Four additional regulations have been enacted with the primary purpose of providing adequate time and resources to ensure continued availability of devices on the EU market:
                            </p>
                            
                            <div className="overflow-x-auto mb-10">
                                <table className="w-full text-left border-collapse text-sm bg-white rounded-md border border-border">
                                    <thead>
                                        <tr className="border-b-2 border-navy/20 bg-surface/50">
                                            <th className="py-3 px-4 font-bold text-navy uppercase tracking-wider w-1/4">Regulation</th>
                                            <th className="py-3 px-4 font-bold text-navy uppercase tracking-wider">Key Provisions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        <tr>
                                            <td className="py-4 px-4 font-semibold text-navy align-top">(EU) 2022/112</td>
                                            <td className="py-4 px-4 text-navy/80">
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>First extension of transitional provisions for legacy devices</li>
                                                    <li>Introduction of staggered transition periods based on device classification</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 font-semibold text-navy align-top">(EU) 2023/503</td>
                                            <td className="py-4 px-4 text-navy/80">
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>Extension of the frequency of reassessment of notified bodies</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 font-semibold text-navy align-top">(EU) 2023/607</td>
                                            <td className="py-4 px-4 text-navy/80">
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>Removal of the sell-off period for devices placed on the market during the transition period</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-4 font-semibold text-navy align-top">(EU) 2024/1860</td>
                                            <td className="py-4 px-4 text-navy/80">
                                                <ul className="list-disc pl-5 space-y-1">
                                                    <li>Second extension of transitional provisions</li>
                                                    <li>Addition of timelines for implementation of an IVDR-compliant quality system</li>
                                                    <li>Addition of timelines for application to and completion of a signed agreement with a notified body</li>
                                                    <li>Phased roll-out of the European Database on Medical Devices (EUDAMED)</li>
                                                    <li>Introduction of an obligation to notify an anticipated discontinuation of supply of devices</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">IVDR Transition Timeline</h2>
                            <p className="text-[15px] leading-relaxed mb-4">
                                Only “legacy” devices meeting the following conditions can benefit from the IVDR transition timelines:
                            </p>
                            <ul className="list-disc pl-5 text-[15px] text-navy/80 space-y-2 mb-6">
                                <li><strong>a)</strong> those devices continue to comply with Directive 98/79/EC;</li>
                                <li><strong>b)</strong> there are no significant changes in the design and intended purpose;</li>
                                <li><strong>c)</strong> the devices do not present an unacceptable risk to the health or safety of patients, users or other persons, or to other aspects of the protection of public health;</li>
                            </ul>
                            <p className="text-[15px] leading-relaxed mb-6">
                                The transition period depends on the classification of the device and whether it was CE-marked under the IVDD by self-declaration or by certification with a Notified Body. The following timelines apply:
                            </p>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                                <div className="bg-surface/50 p-5 rounded-lg border border-border">
                                    <h4 className="font-bold text-navy mb-3 pb-2 border-b border-navy/10">Devices with an IVDD certificate</h4>
                                    <ul className="text-[13px] text-navy/80 space-y-2">
                                        <li><strong>26 May 2025</strong> – Implement IVDR-compliant quality system</li>
                                        <li><strong>26 May 2025</strong> – Apply to a notified body</li>
                                        <li><strong>26 September 2025</strong> – Conclude a written agreement with a notified body</li>
                                        <li><strong className="text-navy">31 December 2027</strong> – End of transition period</li>
                                    </ul>
                                </div>
                                <div className="bg-surface/50 p-5 rounded-lg border border-border">
                                    <h4 className="font-bold text-navy mb-3 pb-2 border-b border-navy/10">Class D devices</h4>
                                    <ul className="text-[13px] text-navy/80 space-y-2">
                                        <li><strong>26 May 2025</strong> – Implement IVDR-compliant quality system</li>
                                        <li><strong>26 May 2025</strong> – Apply to a notified body</li>
                                        <li><strong>26 September 2025</strong> – Conclude a written agreement with a notified body</li>
                                        <li><strong className="text-navy">31 December 2027</strong> – End of transition period</li>
                                    </ul>
                                </div>
                                <div className="bg-surface/50 p-5 rounded-lg border border-border">
                                    <h4 className="font-bold text-navy mb-3 pb-2 border-b border-navy/10">Class C devices</h4>
                                    <ul className="text-[13px] text-navy/80 space-y-2">
                                        <li><strong>26 May 2025</strong> – Implement IVDR-compliant quality system</li>
                                        <li><strong>26 May 2026</strong> – Apply to a notified body</li>
                                        <li><strong>26 September 2026</strong> – Conclude a written agreement with a notified body</li>
                                        <li><strong className="text-navy">31 December 2028</strong> – End of transition period</li>
                                    </ul>
                                </div>
                                <div className="bg-surface/50 p-5 rounded-lg border border-border">
                                    <h4 className="font-bold text-navy mb-3 pb-2 border-b border-navy/10">Class B devices</h4>
                                    <ul className="text-[13px] text-navy/80 space-y-2">
                                        <li><strong>26 May 2025</strong> – Implement IVDR-compliant quality system</li>
                                        <li><strong>26 May 2027</strong> – Apply to a notified body</li>
                                        <li><strong>26 September 2027</strong> – Conclude a written agreement with a notified body</li>
                                        <li><strong className="text-navy">31 December 2029</strong> – End of transition period</li>
                                    </ul>
                                </div>
                                <div className="bg-surface/50 p-5 rounded-lg border border-border">
                                    <h4 className="font-bold text-navy mb-3 pb-2 border-b border-navy/10">Class A sterile devices</h4>
                                    <ul className="text-[13px] text-navy/80 space-y-2">
                                        <li><strong>26 May 2025</strong> – Implement IVDR-compliant quality system</li>
                                        <li><strong>26 May 2027</strong> – Apply to a notified body</li>
                                        <li><strong>26 September 2027</strong> – Conclude a written agreement with a notified body</li>
                                        <li><strong className="text-navy">31 December 2029</strong> – End of transition period</li>
                                    </ul>
                                </div>
                                <div className="bg-surface/50 p-5 rounded-lg border border-border">
                                    <h4 className="font-bold text-navy mb-3 pb-2 border-b border-navy/10">Class A (non-sterile) devices</h4>
                                    <p className="text-[13px] text-navy/80 leading-relaxed">
                                        Transition period does not apply – full compliance required as of <strong>26 May 2022</strong>.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">Preparing for Certification</h2>
                            <div className="bg-navy/5 p-6 rounded-lg border border-navy/10 mb-8">
                                <p className="text-[14px] text-navy/80 leading-relaxed mb-4">To ensure a smooth certification process, manufacturers should prioritize the following steps before applying to a Notified Body:</p>
                                <ul className="list-disc pl-5 text-[14px] text-navy/80 space-y-2">
                                    <li>Ensure your quality management system complies strictly with IVDR Article 10(8).</li>
                                    <li>Prepare robust technical documentation in accordance with IVDR Annexes II and III.</li>
                                    <li>Assess whether existing data (from IVDD or non-EU markets) is adequate to demonstrate compliance, and generate new data to address any gaps.</li>
                                    <li>Engage in structured dialogue early to clarify procedural aspects before formal submission.</li>
                                </ul>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-6">Further IVDR Details & Procedures</h2>
              
                            <details className="group border border-border rounded-lg bg-white mb-4 overflow-hidden">
                                <summary className="font-bold text-navy text-lg p-5 cursor-pointer flex justify-between items-center list-none hover:bg-surface/50 transition-colors">
                                Structured dialogue
                                <span className="transition group-open:rotate-180">
                                    <ChevronDown className="w-5 h-5 text-accent" />
                                </span>
                                </summary>
                                <div className="p-5 border-t border-border text-[15px] text-navy/80 leading-relaxed bg-surface/30">
                                <p className="mb-4">
                                    The complex development process for most types of medical devices, combined with the need to address new regulatory requirements and obtain Notified Body approval, is likely to make the transition a complicated and time-consuming process for most device manufacturers. Further, previously approved devices are not exempt from the new regulation's requirements and will need to be re-evaluated and re-approved.
                                </p>
                                <p className="mb-4">
                                    The purpose of a structured dialogue prior to lodging a formal IVDR application is to clarify the timing, procedural, and regulatory aspects of the application process and forms, and the submission documents. These structured dialogues are an opportunity to meet with the Notified Body before the application for a conformity assessment and are independent of the assessment.
                                </p>
                                <p className="mb-4 font-semibold text-navy">Possible topics for structured dialogue include:</p>
                                <ul className="list-disc pl-5 space-y-2 mb-4">
                                    <li><strong>Application & Onboarding:</strong> Onboarding process, application forms & review process, sites & suppliers, and device classification & code assignment.</li>
                                    <li><strong>Topics of manufacturer:</strong> Testing & certification regulations, framework agreements, handling of device changes, and transferring to a Notified Body.</li>
                                    <li><strong>Conformity Assessment Procedure:</strong> Project planning, time limits, special procedures (e.g. consultation), submission requirements, costs & fees, and harmonised standards.</li>
                                </ul>
                                </div>
                            </details>

                            <details className="group border border-border rounded-lg bg-white mb-4 overflow-hidden">
                                <summary className="font-bold text-navy text-lg p-5 cursor-pointer flex justify-between items-center list-none hover:bg-surface/50 transition-colors">
                                IVDR application procedure
                                <span className="transition group-open:rotate-180">
                                    <ChevronDown className="w-5 h-5 text-accent" />
                                </span>
                                </summary>
                                <div className="p-5 border-t border-border text-[15px] text-navy/80 leading-relaxed bg-surface/30">
                                <p className="mb-4">
                                    Based on the product classification, the manufacturer must apply for an applicable conformity assessment procedure.
                                </p>
                                <p className="mb-4">
                                    Please note: Not all Notified Bodies provide conformity assessment services according to IVDR Annex X. At lodging of an application of IVDR Annex XI for class C and D devices, the manufacturer needs to provide a copy of the EU type-examination certificates issued by the notified body designated for conformity assessment activities related to the types of devices concerned.
                                </p>
                                <p>
                                    English and/or German are the generally acceptable languages for the submission of documentation and any related correspondence to major Notified Bodies.
                                </p>
                                </div>
                            </details>

                            <details className="group border border-border rounded-lg bg-white mb-4 overflow-hidden">
                                <summary className="font-bold text-navy text-lg p-5 cursor-pointer flex justify-between items-center list-none hover:bg-surface/50 transition-colors">
                                Certification costs
                                <span className="transition group-open:rotate-180">
                                    <ChevronDown className="w-5 h-5 text-accent" />
                                </span>
                                </summary>
                                <div className="p-5 border-t border-border text-[15px] text-navy/80 leading-relaxed bg-surface/30">
                                <p className="mb-4">
                                    The certification costs are based on hourly rates. They consider factors such as the size of the company, number of sites, and number and complexity of devices. Major Notified Bodies typically base their fee structure mainly on effort-related criteria to enable a precise and individual cost calculation.
                                </p>
                                <p className="mb-4">Standard benchmark fees for conformity assessment activities (as referenced by leading Notified Bodies) are typically:</p>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-sm bg-white rounded-md border border-border">
                                    <tbody className="divide-y divide-border">
                                        <tr>
                                        <td className="py-3 px-4 font-semibold text-navy/90">Audit and QM System Assessment Services</td>
                                        <td className="py-3 px-4 text-navy/70">~ 350 € per hour</td>
                                        </tr>
                                        <tr>
                                        <td className="py-3 px-4 font-semibold text-navy/90">Technical Documentation Assessment Service</td>
                                        <td className="py-3 px-4 text-navy/70">~ 465 € per hour</td>
                                        </tr>
                                        <tr>
                                        <td className="py-3 px-4 font-semibold text-navy/90">Application Management Fee</td>
                                        <td className="py-3 px-4 text-navy/70">~ 2,800 € per case</td>
                                        </tr>
                                        <tr>
                                        <td className="py-3 px-4 font-semibold text-navy/90">Initial Assessment of Vigilance Information</td>
                                        <td className="py-3 px-4 text-navy/70">~ 420 € (cases 1-200)</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-sm text-navy/60 italic">
                                    *Depending on the location of the manufacturer and possibility to include local experts or auditors in the conformity assessment procedure, actual prices may vary, and fees may be invoiced in local currency.
                                </p>
                                </div>
                            </details>

                            <details className="group border border-border rounded-lg bg-white mb-8 overflow-hidden">
                                <summary className="font-bold text-navy text-lg p-5 cursor-pointer flex justify-between items-center list-none hover:bg-surface/50 transition-colors">
                                IVDR resources
                                <span className="transition group-open:rotate-180">
                                    <ChevronDown className="w-5 h-5 text-accent" />
                                </span>
                                </summary>
                                <div className="p-5 border-t border-border text-[15px] text-navy/80 leading-relaxed bg-surface/30">
                                <p className="mb-4">
                                    Ensure a smooth process of complying with the IVDR with key checklists and guidance resources:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li><strong>Audit Checklists:</strong> Prepare using the IVDR QM System Requirements and IVDR Technical Documentation Submission Requirements checklists.</li>
                                    <li><strong>IVDR Sampling:</strong> Understand how Notified Bodies implement the requirements of sampling for Class B and Class C devices under the IVDR.</li>
                                    <li><strong>Legacy Products under IVDR:</strong> Information on how products that are already on the market under the old In Vitro Diagnostic Directive (IVDD) can transition to IVDR.</li>
                                    <li><strong>IVDR Companion Diagnostics (CDx):</strong> Guidance on successfully completing IVDR certification for CDx devices.</li>
                                    <li><strong>IVDR Class D:</strong> Information on the provisions for special scrutiny of high-risk Class D devices.</li>
                                    <li><strong>IVDR Classification:</strong> Information on medical device classification under the IVDR (EU) 2017/746.</li>
                                </ul>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-navy">Our IVDR Compliance Solutions</h2>
                        <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
                            From navigating Notified Body backlogs to ensuring your EUDAMED data is perfectly structured ahead of impending deadlines, our experts streamline your European market access.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((s, idx) => (
                            <div key={idx} className="p-8 rounded-md bg-surface/50 border border-border hover:bg-surface transition-colors">
                                {s.icon}
                                <h3 className="font-bold text-navy text-lg mb-3">{s.title}</h3>
                                <p className="text-sm text-navy/70 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Link to Main EU Regulatory Services Hub */}
            <section className="py-12 bg-slate-50 border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="h-2 w-2 rounded-full bg-[#0b3a96]" />
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0b3a96]">For More Details</span>
                            </div>
                            <h3 className="text-xl font-bold text-navy">Looking for Full European Union CE-MDR &amp; IVDR Services?</h3>
                            <p className="text-sm text-navy/70 mt-1.5 max-w-2xl leading-relaxed">
                                Access our comprehensive European regulatory portal covering EU Authorized Representative (EC-REP), Notified Body technical file compilation, EUDAMED registration, IVDR gap assessments, and post-market performance follow-up (PMPF).
                            </p>
                        </div>
                        <Link
                            to="/services/eu/ivdr"
                            className="shrink-0 inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-navy text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-all shadow-xs hover:shadow-md group"
                        >
                            <span>Explore EU IVDR Services</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <CTABand title="Navigate IVDR conformity with confidence" btnText="Contact Our EU Experts" />
        </>
    );
}
