import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Globe2, ShieldCheck, Tag, FileCheck2, ClipboardCheck, Globe } from "lucide-react";
import heroImg from "@/assets/cdsco-india-hero.png";

const heroBadges = [
    { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
    { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
    { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
    { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;

export const Route = createFileRoute("/services/india/neutral-code")({
    component: NeutralCodePage,
    head: () => ({
    meta: [
      { title: "Neutral / Special Code Certificate CDSCO India | NKB Regovanta" },
      { name: "description", content: "Apply for a Neutral / Special Code certificate from CDSCO to export medical devices compliantly while maintaining OEM confidentiality and merchant exporter branding." },
      { name: "keywords", content: "Neutral / Special Code certificate, CDSCO Neutral Code, Special code certificate India, OEM confidential export license CDSCO, NKB Regovanta" },
      { property: "og:title", content: "Neutral / Special Code Certificate CDSCO | NKB Regovanta" },
      { property: "og:description", content: "CDSCO Neutral Code and Special Code certificate allocation services for merchant exporters and medical device OEMs." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/india/neutral-code" },
{ property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Neutral / Special Code Certificate CDSCO India | NKB Regovanta" },
      { name: "twitter:description", content: "Obtain a Neutral Code or Special Code Certificate from CDSCO India for export packaging and third-country labelling compliance. Required for OEM exporters under SCOMET and contract manufacturing agreements. Expert con..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/neutral-code" },
    ],
  }),
});

function NeutralCodePage() {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="bg-[#f7f9fc]">
                {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
                <div className="@container relative hidden md:block">
                    <img src={heroImg} alt="Neutral Code Certificate in India" className="block w-full" />

                    <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
                        <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
                            <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
                            Back to India CDSCO Services
                        </Link>
                        <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
                            <span className="text-[#0b3a96]">Neutral Code</span> Certificate
                            <br />
                            (Special Code)
                        </h1>
                        <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
                            <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
                            <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
                            <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
                        </div>
                        <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
                            Maintain confidentiality and seamlessly navigate diverse international labeling requirements with a CDSCO-issued Neutral Code for your exports.
                        </p>
                        <Link
                            to="/contact"
                            className="mt-[2.2cqw] inline-flex w-fit items-center gap-[1.2cqw] rounded-[0.45cqw] bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-[1.9cqw] py-[0.95cqw] text-[1.05cqw] font-bold text-white shadow-lg shadow-[#0a3d96]/20 transition-opacity hover:opacity-90"
                        >
                            Consult Our CDSCO Experts
                            <ArrowRight className="h-[1.3cqw] w-[1.3cqw]" />
                        </Link>
                    </div>

                    {heroBadges.map(({ icon: Icon, lines, x, y, side }) => (
                        <div
                            key={lines.join(" ")}
                            className="absolute flex h-[5cqw] w-[5cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,35,64,0.10)] ring-1 ring-[#e4ecf7]"
                            style={{ left: `${x}%`, top: `${y}%` }}
                        >
                            <Icon className="h-[2.5cqw] w-[2.5cqw] text-[#12306f]" strokeWidth={1.6} />
                            <p
                                className={
                                    side === "right"
                                        ? "absolute left-full top-1/2 ml-[0.9cqw] -translate-y-1/2 whitespace-nowrap text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                                        : "absolute left-1/2 top-full mt-[0.7cqw] -translate-x-1/2 whitespace-nowrap text-center text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                                }
                            >
                                {lines[0]}
                                <br />
                                {lines[1]}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile: stacked */}
                <div className="md:hidden px-4 pt-12 pb-8 sm:px-6">
                    <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-4 font-semibold text-sm">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to India CDSCO Services
                    </Link>
                    <p className="font-display text-3xl font-bold leading-tight text-[#0f2340] sm:text-4xl">
                        <span className="text-[#0b3a96]">Neutral Code</span> Certificate (Special Code)
                    </p>
                    <div className="mt-5 flex items-center gap-1.5">
                        <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
                        <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
                    </div>
                    <p className="mt-5 text-base leading-relaxed text-[#465569]">
                        Maintain confidentiality and seamlessly navigate diverse international labeling requirements with a CDSCO-issued Neutral Code for your exports.
                    </p>
                    <Link
                        to="/contact"
                        className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
                    >
                        Consult Our CDSCO Experts
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                    <img src={heroImg} alt="Neutral Code Certificate in India" className="mt-8 w-full" />
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="py-16 lg:py-24">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* Left Content Column */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                                    <Tag className="h-7 w-7 text-blue-600" />
                                    What is a Neutral Code?
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    For medical device and pharmaceutical manufacturers aiming for international markets, a Neutral Code (also known as a Special Code) is a strategic identifier. Issued by India’s CDSCO, this confidential code replaces your company’s explicit name and address directly on the product label.
                                </p>
                                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="font-bold text-navy mb-3 text-lg">This is particularly valuable when:</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 text-sm text-gray-700 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                                            <span>The importing country or buyer dictates specific labeling regulations that conflict with your standard domestic labeling practices.</span>
                                        </li>
                                        <li className="flex gap-3 text-sm text-gray-700 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0"></div>
                                            <span>You strategically wish to maintain the confidentiality of your manufacturing identity from end-users or competitors in foreign markets.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <hr className="border-gray-100" />

                            <div>
                                <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-3">
                                    <Globe2 className="h-7 w-7 text-blue-600" />
                                    Why is it Crucial for Your Export Strategy?
                                </h2>

                                <div className="space-y-4">
                                    <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                                        <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-navy">Ensures Confidentiality</h4>
                                            <p className="text-sm text-gray-700 mt-1">Allows you to maintain complete discretion regarding your manufacturing identity on exported products, protecting your intellectual property and market position.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                                        <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-navy">Facilitates Export Compliance</h4>
                                            <p className="text-sm text-gray-700 mt-1">Enables you to seamlessly meet diverse and stringent international labeling requirements without constantly altering your primary manufacturing documentation.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100 items-start">
                                        <CheckCircle2 className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-navy">Expands Market Access</h4>
                                            <p className="text-sm text-gray-700 mt-1">Equips you to cater to a wider range of international buyers and contract manufacturing clients who demand specific, unbranded, or custom-branded labeling.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-navy mb-4">Eligibility & The Application Process</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    In India, the CDSCO is the sole regulatory authority responsible for approving and issuing Neutral Codes. To be eligible, manufacturers typically must possess a <strong>valid manufacturing license</strong> and established <strong>product permissions</strong> for the devices intended for export.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    The application process has been streamlined by the CDSCO through their online portal. It requires the submission of precise documentation verifying your manufacturing credentials and the specific intent for the exported devices.
                                </p>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 sticky top-24">
                                <ShieldCheck className="h-10 w-10 text-blue-600 mb-6" />
                                <h3 className="text-xl font-bold text-navy mb-6">Unlock International Markets</h3>
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                    Navigating the nuances of export regulations and specialized codes can be complex. We ensure your export strategy is legally robust and confidential.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex gap-3 text-sm text-gray-700">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        <span>Eligibility & documentation assessment</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-gray-700">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        <span>CDSCO online portal management</span>
                                    </li>
                                    <li className="flex gap-3 text-sm text-gray-700">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        <span>Direct liaison for timely issuance</span>
                                    </li>
                                </ul>
                                <Link to="/contact" className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-sm font-medium text-navy bg-gold hover:bg-gold/90 transition-colors">
                                    Get Your Neutral Code
                                </Link>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <h4 className="font-bold text-navy mb-4 text-sm uppercase tracking-wide">Related Certificates</h4>
                                    <ul className="space-y-3">
                                        <li>
                                            <Link to="/services/india/free-sale" className="text-sm text-blue-600 hover:underline flex items-start gap-2">
                                                <Globe2 className="h-4 w-4 shrink-0 mt-0.5" />
                                                Free Sale Certificate (FSC)
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}


