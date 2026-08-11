import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, ChevronRight, AlertCircle, FileText, Globe2, ShieldCheck, Activity } from "lucide-react";
import { LinearFlow } from "@/components/site/ProcessFlow";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/uae")({
    head: () => ({
        meta: [
            { title: "UAE MOHAP Medical Device Registration | NKB Regovanta" },
            { name: "description", content: "Expert support for UAE MOHAP medical device registration, Dubai Customs requirements, and dedicated Local Representative services for seamless market access." },
        ],
    }),
    component: UAEMarket,
});

const tabs = ["Overview & Regulatory Landscape", "Device Classification", "Registration Process", "Post-Market & Lifecycle"];

const classificationData = [
    { classLabel: "Class I", risk: "Low Risk", notes: "Standard evaluation framework; simplified application process but still requires full Local Representative oversight." },
    { classLabel: "Class IIa & IIb", risk: "Medium Risk", notes: "Requires detailed technical dossier (CSDT or similar) and reference country approval for expedited clearance." },
    { classLabel: "Class III & IV", risk: "High Risk", notes: "Stringent clinical and technical evaluation. Accelerated pathways exist if devices hold tier-1 reference approvals (e.g., US FDA, CE Mark)." },
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
                        The Ministry of Health and Prevention (MOHAP) strictly regulates the importation and commercial distribution of all medical devices in the United Arab Emirates. Leveraging established reference country approvals, MOHAP offers a structured yet efficient regulatory pathway. NKB Regovanta provides dedicated, licensed Local Representative services to streamline your Middle Eastern market entry.
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
                        <h2 className="text-xl font-bold text-navy mb-6">MOHAP Regulatory Environment</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                                    In the UAE, no medical device can be cleared by customs or legally placed on the market without an active registration certificate issued by the Ministry of Health and Prevention (MOHAP). The UAE represents a critical hub for the MENA region, demanding strict adherence to international quality and safety standards.
                                </p>
                                <p className="text-[13.5px] text-navy/80 leading-relaxed">
                                    The UAE regulatory framework strategically utilizes reliance pathways. Devices that have already secured approvals in Tier 1 reference countries—such as the United States (FDA), European Union (CE Marking), Canada (Health Canada), or Australia (TGA)—benefit from significantly streamlined review timelines compared to novel devices undergoing first-in-world registration.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm border border-border p-6">
                                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                                    <Globe2 className="h-5 w-5 text-accent" />
                                    Dubai Customs & Emirate-Level Rules
                                </h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    Beyond federal MOHAP approval, manufacturers must also navigate Emirate-specific regulations, particularly Dubai Customs. Consignments must perfectly match the approved MOHAP certificate. Importers must hold a valid medical store license issued by the relevant local health authority (e.g., DHA in Dubai, DOH in Abu Dhabi) to physically receive the goods.
                                </p>
                            </div>
                        </div>

                        <div className="p-6 rounded-lg border border-amber-200 bg-amber-50/60 flex flex-col sm:flex-row gap-5">
                            <AlertCircle className="h-8 w-8 text-amber-700 shrink-0 mt-0.5" />
                            <div>
                                <h3 className="text-[14.5px] font-bold text-amber-900 mb-2">Mandatory Local Representative</h3>
                                <p className="text-[13.5px] text-amber-800 leading-relaxed mb-3">
                                    Foreign manufacturers are strictly prohibited from directly submitting registrations to MOHAP. You MUST appoint a licensed UAE Local Representative (or an authorized distributor who acts as your representative).
                                </p>
                                <ul className="space-y-2 mt-3">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                                        <span className="text-[13px] text-amber-800">The Local Representative holds the registration certificate on your behalf.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                                        <span className="text-[13px] text-amber-800">They are the sole legal liaison with MOHAP through the e-services portal.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle2 className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                                        <span className="text-[13px] text-amber-800">They manage all post-market surveillance and vigilance reporting.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Device Classification" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-3">MOHAP Classification Framework</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6 max-w-3xl">
                            MOHAP aligns its classification rules closely with the European Union (EU MDR) framework, determining risk based on the device's intended use, degree of invasiveness, and the duration it remains in contact with the patient. Correct classification is the critical first step in determining the required technical dossier complexity.
                        </p>
                        <div className="overflow-x-auto rounded-lg border border-border shadow-sm">
                            <table className="w-full text-sm">
                                <thead className="bg-navy text-white">
                                    <tr>
                                        <th className="px-5 py-4 text-left text-[11px] font-semibold tracking-wider uppercase">Class</th>
                                        <th className="px-5 py-4 text-left text-[11px] font-semibold tracking-wider uppercase">Risk Level</th>
                                        <th className="px-5 py-4 text-left text-[11px] font-semibold tracking-wider uppercase">Regulatory Note</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border bg-white">
                                    {classificationData.map((row, i) => (
                                        <tr key={i} className="hover:bg-blue-50/40 transition-colors">
                                            <td className="px-5 py-4 font-bold text-navy whitespace-nowrap">{row.classLabel}</td>
                                            <td className="px-5 py-4 text-navy/80 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-blue-100 text-blue-800">
                                                    {row.risk}
                                                </span>
                                            </td>
                                            <td className="px-5 py-4 text-navy/70 leading-relaxed">{row.notes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                
                {activeTab === "Registration Process" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                            <div>
                                <h2 className="text-xl font-bold text-navy mb-2">MOHAP Submission Process</h2>
                                <p className="text-[13.5px] text-navy/70 max-w-2xl">
                                    Our end-to-end regulatory support ensures every step of the MOHAP registration process is executed with precision, avoiding costly delays and RFI (Request for Information) cycles.
                                </p>
                            </div>
                        </div>
                        
                        <div className="bg-slate-50 border border-border rounded-xl p-8 mb-8">
                            <LinearFlow steps={[
                                { title: "Strategic Classification & Gap Analysis" },
                                { title: "Appoint NKB as Independent Local Representative" },
                                { title: "Legalization of Documents (Power of Attorney, FSC)" },
                                { title: "Dossier Compilation (CSDT format)" },
                                { title: "Submission via MOHAP e-Services" },
                                { title: "MOHAP Committee Review & Query Resolution" },
                                { title: "Issuance of Registration Certificate" }
                            ]} />
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                                <FileText className="h-6 w-6 text-accent mb-4" />
                                <h3 className="font-bold text-navy mb-2">Document Legalization</h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    A critical and often time-consuming step in the UAE process is document legalization. Key documents such as the Letter of Authorization (LoA) and the Free Sale Certificate (FSC) must be notarized in the country of origin, authenticated by the UAE Embassy in that country, and finally legalized by the Ministry of Foreign Affairs (MOFA) in the UAE.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                                <ShieldCheck className="h-6 w-6 text-accent mb-4" />
                                <h3 className="font-bold text-navy mb-2">Independent Representation</h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    Appointing an independent regulatory firm like NKB Regovanta as your Local Representative, rather than a commercial distributor, allows you to maintain full control over your registration. You can appoint multiple distributors without being locked into a single commercial entity holding your license.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Post-Market & Lifecycle" && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <h2 className="text-xl font-bold text-navy mb-4">Post-Market Surveillance & Maintenance</h2>
                        <p className="text-[13.5px] text-navy/80 leading-relaxed mb-6">
                            Securing the MOHAP registration is only the beginning. Medical device registrations in the UAE are generally valid for a period of 5 years. Active lifecycle management is critical to maintaining continuous market access and regulatory compliance.
                        </p>
                        
                        <div className="grid sm:grid-cols-3 gap-6 mt-6">
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <Activity className="h-6 w-6 text-blue-600 mb-3" />
                                <h3 className="font-bold text-navy mb-2">Vigilance & Adverse Events</h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    The Local Representative is mandated to report any adverse events, Field Safety Corrective Actions (FSCA), or recalls to MOHAP within strict statutory timelines to ensure patient safety.
                                </p>
                            </div>
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <FileText className="h-6 w-6 text-blue-600 mb-3" />
                                <h3 className="font-bold text-navy mb-2">License Renewals</h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    Renewal applications must be initiated well in advance of the 5-year expiration date. The renewal process requires an updated Free Sale Certificate and re-validation of the technical file.
                                </p>
                            </div>
                            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                <Globe2 className="h-6 w-6 text-blue-600 mb-3" />
                                <h3 className="font-bold text-navy mb-2">Variation Management</h3>
                                <p className="text-[13px] text-navy/70 leading-relaxed">
                                    Any significant changes to the device design, intended use, manufacturing facility, or labeling must be formally submitted to MOHAP as a variation application prior to implementation.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <CTABand title="Ready to launch in the UAE?" description="Speak to our MOHAP Regulatory Experts" />
        </>
    );
}
