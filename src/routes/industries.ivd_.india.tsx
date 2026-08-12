import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, FileCheck2, ShieldCheck, Microscope, Database, Stethoscope, AlertTriangle, CheckCircle2 } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-ivd.png";
import cdscoFlowchart from "@/assets/cdsco_ivd_application_flowchart.png";

export const Route = createFileRoute("/industries/ivd_/india")({
    head: () => ({
        meta: [
            { title: "IVD Regulation in India | CDSCO Under MDR 2017 | NKB Regovanta" },
            { name: "description", content: "Expert guidance on India's IVD regulations under the Medical Devices Rules (MDR) 2017, CDSCO pathways, classification, and mandatory clinical performance evaluation." },
        ],
    }),
    component: IVDIndia,
});

const services = [
    {
        icon: <Database className="h-6 w-6 text-accent mb-4" />,
        title: "SUGAM Portal Registration",
        desc: "We manage end-to-end import and manufacturing registrations via the CDSCO SUGAM portal, ensuring smooth dossier submission and tracking.",
    },
    {
        icon: <Microscope className="h-6 w-6 text-accent mb-4" />,
        title: "In-Country Performance Evaluation",
        desc: "We coordinate mandatory local clinical performance evaluations at ICMR/AIIMS-designated laboratories to meet strict CDSCO requirements.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
        title: "Classification & Strategy",
        desc: "We determine the correct risk class for your IVD under Part II of the First Schedule and strategize your licensing pathway (CLA vs SLA).",
    },
    {
        icon: <FileCheck2 className="h-6 w-6 text-accent mb-4" />,
        title: "Dossier Preparation",
        desc: "Comprehensive preparation of Forms MD-14, MD-7, and MD-4, aligning your technical documents with the latest 2025/2026 MDR 2017 guidelines.",
    },
];

function IVDIndia() {
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
                        <span className="text-navy">India</span>
                    </div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-navy mb-2">Indian Regulatory Framework</p>
                    <h1 className="font-display font-extrabold leading-tight text-navy max-w-4xl" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
                        IVD Regulation in India - CDSCO Under MDR 2017
                    </h1>
                    <p className="mt-4 text-[15px] leading-relaxed text-navy/70 font-medium max-w-3xl">
                        In-Vitro Diagnostic (IVD) devices in India are stringently governed by the Medical Devices Rules (MDR) 2017. As the regulatory landscape matures, the Central Drugs Standard Control Organization (CDSCO) has implemented rigorous classification parameters and mandatory local performance evaluations for higher-risk devices, making expert guidance essential for successful market entry.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 bg-surface/30 border-t border-border mt-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-8 md:p-12 rounded-lg border border-border/50 shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Authority, Framework, and Classification</h2>
                        <div className="prose prose-blue max-w-none text-navy/80 space-y-6">
                            <p className="text-[15px] leading-relaxed">
                                The Indian IVD market is regulated by the <strong>CDSCO</strong> under the oversight of the Drugs Controller General of India (DCGI), acting as the Central Licensing Authority (CLA). The CLA maintains jurisdiction over the import of all IVD classes, the manufacturing of high-risk (Class C and D) devices, and the approval of novel IVDs. Conversely, State Licensing Authorities (SLAs) handle manufacturing licenses for lower-risk (Class A and B) devices.
                            </p>

                            <div className="bg-surface/50 p-6 rounded-md my-8 border border-border">
                                <h3 className="text-lg font-bold text-navy mb-4 flex items-center gap-2"><Stethoscope className="w-5 h-5 text-accent" /> India IVD Risk-Based Classification</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                                        <thead>
                                            <tr className="border-b-2 border-navy/20">
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Class</th>
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Risk Level</th>
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Examples</th>
                                                <th className="py-3 px-3 font-bold text-navy uppercase tracking-wider">Authority</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            <tr className="hover:bg-white transition-colors">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class A</td>
                                                <td className="py-3 px-3 text-navy/70">Low — general lab use</td>
                                                <td className="py-3 px-3 text-navy/70">General chemistry reagents, non-diagnostic lab instruments</td>
                                                <td className="py-3 px-3 text-navy/70">SLA</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors bg-white/20">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class B</td>
                                                <td className="py-3 px-3 text-navy/70">Low-Moderate</td>
                                                <td className="py-3 px-3 text-navy/70">Pregnancy tests, blood glucose meters</td>
                                                <td className="py-3 px-3 text-navy/70">SLA</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class C</td>
                                                <td className="py-3 px-3 text-navy/70">Moderate-High</td>
                                                <td className="py-3 px-3 text-navy/70">Cancer screening, genetic disease testing, HCV kits</td>
                                                <td className="py-3 px-3 text-navy/70">CLA (CDSCO)</td>
                                            </tr>
                                            <tr className="hover:bg-white transition-colors bg-white/20">
                                                <td className="py-3 px-3 font-semibold text-navy/90">Class D</td>
                                                <td className="py-3 px-3 text-navy/70">High public health risk</td>
                                                <td className="py-3 px-3 text-navy/70">HIV diagnostics, blood group serology</td>
                                                <td className="py-3 px-3 text-navy/70">CLA (CDSCO)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md text-[14.5px] text-amber-900 my-6 shadow-sm flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="font-bold block mb-1">Critical 2025 Classification Update</strong>
                                    Following an October 2025 CDSCO directive, SLAs are strictly prohibited from issuing licenses for unclassified IVDs. The CLA must explicitly classify a device before any SLA licensing can proceed. Before initiating an application, you must verify your IVD's status using the new Risk Classification Module on the CDSCO SUGAM portal.
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">The India-Specific Requirement: In-Country Performance Evaluation</h2>
                            <p className="text-[15px] leading-relaxed">
                                India's regulatory framework features a unique and pivotal requirement: <strong>mandatory in-country clinical performance evaluation for new Class B, C, and D IVD devices</strong>. Unlike many markets that rely on mutual recognition, India strictly requires local performance data, even if your device holds CE marking under the IVDR or FDA 510(k) clearance.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-surface p-6 rounded-lg border border-border relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                                    <h3 className="font-bold text-navy text-lg mb-3 relative z-10">Evaluation Criteria</h3>
                                    <ul className="space-y-2 relative z-10">
                                        <li className="flex gap-2 text-sm text-navy/80"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Testing must be conducted at CDSCO-authorised and ICMR-designated labs.</li>
                                        <li className="flex gap-2 text-sm text-navy/80"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Sensitivity, specificity, and accuracy are assessed against strict CDSCO acceptance thresholds.</li>
                                        <li className="flex gap-2 text-sm text-navy/80"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Minimum sample requirements are strictly enforced according to ICMR protocols.</li>
                                    </ul>
                                </div>
                                <div className="bg-surface p-6 rounded-lg border border-border relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                                    <h3 className="font-bold text-navy text-lg mb-3 relative z-10">Standardized Thresholds</h3>
                                    <p className="text-sm text-navy/80 mb-3 relative z-10">Examples of ICMR-CDSCO minimum acceptance criteria:</p>
                                    <ul className="space-y-2 relative z-10">
                                        <li className="flex gap-2 text-sm text-navy/80 justify-between border-b border-border/50 pb-1"><span><strong>ELISA</strong></span> <span>Sens: ≥90% | Spec: ≥95%</span></li>
                                        <li className="flex gap-2 text-sm text-navy/80 justify-between border-b border-border/50 pb-1"><span><strong>Rapid Test (RDT)</strong></span> <span>Sens: ≥80% | Spec: ≥90%</span></li>
                                        <li className="flex gap-2 text-sm text-navy/80 justify-between pb-1"><span><strong>PCR Assay</strong></span> <span>Sens: ≥95% | Spec: ≥98%</span></li>
                                    </ul>
                                </div>
                            </div>

                            {/* CDSCO IVD Application Flowchart */}
                            <div className="w-full rounded-lg shadow-sm border border-border flex items-center justify-center my-10 overflow-hidden bg-white p-2">
                                <img src={cdscoFlowchart} alt="CDSCO IVD Application Flowchart" className="w-full h-auto object-contain rounded-md" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">Key 2025–2026 Regulatory Updates</h2>
                            <ul className="space-y-4">
                                <li className="bg-surface/30 p-5 rounded-md border border-border/50">
                                    <strong className="text-navy block mb-1">CDSCO Authorised Laboratories List (Jan 2026)</strong>
                                    <span className="text-[14.5px] text-navy/80 block">An updated nationwide list of authorised laboratories for IVD evaluation was published, mapping critical disease categories (HIV, TB, SARS-CoV-2, dengue, etc.) to specific government and ICMR/AIIMS facilities. Use of these exact labs is now mandatory.</span>
                                </li>
                                <li className="bg-surface/30 p-5 rounded-md border border-border/50">
                                    <strong className="text-navy block mb-1">ICMR-CDSCO IVD Innovators Handbook</strong>
                                    <span className="text-[14.5px] text-navy/80 block">MedTech Mitra released a stage-wise roadmap covering proof of principle, clinical performance evaluation, QMS implementation, and MDR 2017 form checklists.</span>
                                </li>
                                <li className="bg-surface/30 p-5 rounded-md border border-border/50">
                                    <strong className="text-navy block mb-1">Draft Guidance for IVD Import (Jan 2026)</strong>
                                    <span className="text-[14.5px] text-navy/80 block">A new guidance document was released covering application pathways, timelines, and common non-compliances seen in IVD import applications.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-white border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-navy">Our CDSCO Compliance Solutions</h2>
                        <p className="mt-4 text-[15px] text-navy/70 leading-relaxed">
                            We navigate the intricacies of the Medical Devices Rules 2017 and coordinate local performance evaluations to guarantee your IVD product is market-ready in India.
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

            <CTABand title="Secure CDSCO approval for your IVD products" btnText="Contact Our India Experts" />
        </>
    );
}
