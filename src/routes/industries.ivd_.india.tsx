import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, FileCheck2, ShieldCheck, Microscope, Database, Stethoscope, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import imgHero from "@/assets/industry-ivd.png";
import cdscoFlowchart from "@/assets/cdsco_ivd_application_flowchart.optimized.webp";

export const Route = createFileRoute("/industries/ivd_/india")({
    head: () => ({
        meta: [
      { name: "robots", content: "index, follow, max-image-preview:large" },
            { title: "India CDSCO IVD Regulatory Services | NKB Regovanta" },
            { name: "description", content: "India CDSCO IVD consulting: test licences (MD-16/17), import licences (MD-14/15), performance evaluations, and novel IVD approvals under MDR 2017." },
            { property: "og:title", content: "India CDSCO IVD Regulatory Services | NKB Regovanta" },
            { property: "og:description", content: "India CDSCO IVD consulting: test licences (MD-16/17), import licences (MD-14/15), performance evaluations, and novel IVD approvals under MDR 2017." },
            { property: "og:url", content: "https://www.nkbregovanta.com/industries/ivd/india" },
            { property: "og:type", content: "website" },
            { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "India CDSCO IVD Regulatory Services | NKB Regovanta" },
            { name: "twitter:description", content: "India CDSCO IVD consulting: test licences (MD-16/17), import licences (MD-14/15), performance evaluations, and novel IVD approvals under MDR 2017." },
            { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
        ],
        links: [
            { rel: "canonical", href: "https://www.nkbregovanta.com/industries/ivd/india" },
        ],
        scripts: [
            {
                type: "application/ld+json",
                children: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "India CDSCO IVD Regulatory Services",
                    "provider": {
                        "@type": "Organization",
                        "name": "NKB Regovanta",
                        "url": "https://www.nkbregovanta.com"
                    },
                    "description": "India CDSCO IVD consulting: test licences (MD-16/17), import licences (MD-14/15), performance evaluations, and novel IVD approvals under MDR 2017.",
                    "serviceType": "In Vitro Diagnostics Regulatory Affairs"
                })
            }
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
        desc: "We assess whether performance evaluation, testing permission, or other product-specific evidence is required for your CDSCO pathway.",
    },
    {
        icon: <ShieldCheck className="h-6 w-6 text-accent mb-4" />,
        title: "Classification & Strategy",
        desc: "We determine the correct risk class for your IVD under Part II of the First Schedule and strategize your licensing pathway (CLA vs SLA).",
    },
    {
        icon: <FileCheck2 className="h-6 w-6 text-accent mb-4" />,
        title: "Dossier Preparation",
        desc: "Comprehensive preparation of the applicable licensing dossier, forms, and supporting technical documentation under MDR 2017.",
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
                        In-vitro diagnostic (IVD) devices in India are regulated under the Medical Devices Rules, 2017. The appropriate pathway depends on the device classification, intended purpose, whether it is new in India, and whether the activity is import, manufacture, testing, or clinical performance evaluation. A product-specific regulatory assessment should establish the applicable evidence and licensing route before filing.
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
                                    <strong className="font-bold block mb-1">Start with classification and applicable rules</strong>
                                    Classification and the applicable licensing authority should be confirmed against the Medical Devices Rules, 2017 and current CDSCO guidance. A device-specific assessment is especially important where the intended purpose, technology, or market status creates uncertainty.
                                </div>
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">Clinical Performance Evaluation: Assess Applicability Before Filing</h2>
                            <p className="text-[15px] leading-relaxed">
                                Clinical performance evaluation and test-licence requirements are not interchangeable with ordinary import or manufacturing licensing. For an IVD that is new in India or otherwise requires additional evidence, the required study design, permissions, laboratories, and documentation must be confirmed from the current CDSCO route and the device facts. Existing CE or FDA documentation can inform a dossier, but does not by itself determine the Indian pathway.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 my-8">
                                <div className="bg-surface p-6 rounded-lg border border-border relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                                    <h3 className="font-bold text-navy text-lg mb-3 relative z-10">Assessment questions</h3>
                                    <ul className="space-y-2 relative z-10">
                                        <li className="flex gap-2 text-sm text-navy/80"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Is the device classified and is its intended purpose clearly defined?</li>
                                        <li className="flex gap-2 text-sm text-navy/80"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> Is the product new in India or subject to an additional permission route?</li>
                                        <li className="flex gap-2 text-sm text-navy/80"><CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" /> What evidence, permissions, and test arrangements are applicable to this product?</li>
                                    </ul>
                                </div>
                                <div className="bg-surface p-6 rounded-lg border border-border relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
                                    <h3 className="font-bold text-navy text-lg mb-3 relative z-10">Evidence planning</h3>
                                    <p className="text-sm text-navy/80 mb-3 relative z-10">The evidence plan should be documented before samples are imported or studies begin:</p>
                                    <ul className="space-y-2 relative z-10">
                                        <li className="flex gap-2 text-sm text-navy/80 border-b border-border/50 pb-1"><span><strong>Performance claim</strong></span><span>Define the intended use, analyte, user, and setting.</span></li>
                                        <li className="flex gap-2 text-sm text-navy/80 border-b border-border/50 pb-1"><span><strong>Supporting data</strong></span><span>Map analytical and clinical evidence to the applicable pathway.</span></li>
                                        <li className="flex gap-2 text-sm text-navy/80"><span><strong>Submission route</strong></span><span>Confirm the form, authority, and permissions before submission.</span></li>
                                    </ul>
                                </div>
                            </div>

                            {/* CDSCO IVD Application Flowchart */}
                            <div className="w-full rounded-lg shadow-sm border border-border flex items-center justify-center my-10 overflow-hidden bg-white p-2">
                                <img width={2720} height={2800} src={cdscoFlowchart} alt="CDSCO IVD Application Flowchart" className="w-full h-auto object-contain rounded-md" />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-navy mt-10 mb-4">Official references for India IVD pathways</h2>
                            <ul className="space-y-4">
                                <li className="bg-surface/30 p-5 rounded-md border border-border/50">
                                    <strong className="text-navy block mb-1">Medical Devices Rules, 2017</strong>
                                    <span className="text-[14.5px] text-navy/80 block">Use the rules and current notifications as the primary reference for classification, licensing, testing, and clinical-investigation obligations.</span>
                                </li>
                                <li className="bg-surface/30 p-5 rounded-md border border-border/50">
                                    <strong className="text-navy block mb-1">CDSCO IVD FAQ and import guidance</strong>
                                    <span className="text-[14.5px] text-navy/80 block">CDSCO publications explain forms such as MD-14 and MD-15 and distinguish import, test-licence, and new-device considerations.</span>
                                </li>
                                <li className="bg-surface/30 p-5 rounded-md border border-border/50">
                                    <strong className="text-navy block mb-1">Confirm current requirements before acting</strong>
                                    <span className="text-[14.5px] text-navy/80 block">CDSCO guidance and forms can change. Validate the current route with the regulator’s latest publication before relying on a timeline or document checklist.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-navy/75">
                    <h2 className="text-2xl font-bold text-navy mb-4">Primary regulatory sources</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><a className="underline" href="https://cdsco.gov.in/opencms/resources/UploadCDSCOWeb/2018/UploadImmunization/FAQ_IVD_MDR_2018.pdf">CDSCO: FAQ on IVDs under the Medical Devices Rules, 2017</a></li>
                        <li><a className="underline" href="https://cdsco.gov.in/opencms/export/sites/CDSCO_WEB/Pdf-documents/Draft-Guidance-document-for-Import-of-In-vitro-diagnostic-Medical-device-for-stakeholders-comment.pdf">CDSCO: Guidance for IVD import</a></li>
                    </ul>
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

            {/* Link to Main India Regulatory Services Hub */}
            <section className="py-12 bg-slate-50 border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="h-2 w-2 rounded-full bg-[#0b3a96]" />
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[#0b3a96]">For More Details</span>
                            </div>
                            <h3 className="text-xl font-bold text-navy">Looking for Full India CDSCO Regulatory &amp; Licensing Services?</h3>
                            <p className="text-sm text-navy/70 mt-1.5 max-w-2xl leading-relaxed">
                                Access our comprehensive India regulatory portal covering CDSCO manufacturing licenses (MD-3 to MD-10), import licenses (MD-14/MD-15), test licenses (MD-16/MD-17), clinical investigations, and neutral code registrations.
                            </p>
                        </div>
                        <Link
                            to="/services/india/ivd"
                            className="shrink-0 inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-navy text-white text-sm font-semibold px-6 py-3.5 rounded-lg transition-all shadow-xs hover:shadow-md group"
                        >
                            <span>Explore India IVD Regulatory Services</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <CTABand title="Secure CDSCO approval for your IVD products" action="Contact Our India Experts" />
        </>
    );
}
