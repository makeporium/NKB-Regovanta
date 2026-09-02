import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight, User, Globe2, Handshake } from "lucide-react";
import imgReg from "@/assets/regu.png";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/regulatory-affairs")({
    head: () => ({
        meta: [
            { title: "Global Medical Device & IVD Regulatory Registration | NKB Regovanta" },
            {
                name: "description",
                content:
                    "From early regulatory strategy to market authorization and post-market support, we help you move forward with a clear, compliant plan.",
            },
        ],
    links: [
        { rel: "canonical", href: "https://www.nkbregovanta.com/services/regulatory-affairs" },
    ],
    }),
    component: RegulatoryAffairs,
});

const bullets = [
    "Regulatory Strategy",
    "Submission & Dossier Support",
    "Product Registrations",
    "Variation & Maintenance",
    "Regulatory Intelligence",
    "Country Specific Expertise",
    "Global Market Access",
];

const markets = [
    { code: "in", name: "India", route: "/services/india" },
    { code: "us", name: "USA", route: "/services/usa" },
    { code: "eu", name: "EU", route: "/services/eu" },
    { code: "gb", name: "UK", route: "/services/uk" },
    { code: "ca", name: "Canada", route: "/services/canada" },
    { code: "au", name: "Australia", route: "/services/australia" },
    { code: "br", name: "Brazil", route: "/services/brazil" },
    { code: "sa", name: "Saudi Arabia", route: "/services/saudi-arabia" },
    { code: "ae", name: "UAE", route: "/services/uae" },
    { code: "nz", name: "New Zealand", route: "/services/new-zealand" },
];

function RegulatoryAffairs() {
    return (
        <>
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-12 lg:pb-16 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-0 h-full">
                        <div className="max-w-xl pt-6 lg:pt-10 flex flex-col h-full">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70 mb-3">Global Medical Device &amp; IVD Regulatory Registration</p>
                            <h1 className="font-display font-extrabold leading-[1.05] text-navy">
                                <span className="block" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                                    Navigate the Regulatory
                                </span>
                                <span className="block" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                                    Pathway with Confidence
                                </span>
                            </h1>
                            <p className="mt-4 text-[13.5px] leading-relaxed text-navy/70 font-medium">
                                End-to-end regulatory strategy, submission support and licensing solutions for global market access.
                            </p>
                            <ul className="mt-8 space-y-3.5">
                                {bullets.map((b) => (
                                    <li key={b} className="flex gap-2.5 text-[13.5px] font-bold text-navy-deep">
                                        <CheckCircle2 className="h-5 w-5 text-white fill-navy-deep shrink-0" />
                                        {b}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-auto pt-10">
                                <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-accent transition-colors">
                                    Explore Our Services <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                        </div>


                        {/* Right column — image and markets */}
                        <div className="flex flex-col lg:items-end mt-2 lg:mt-8 -mr-4 sm:-mr-6 lg:-mr-8">
                            <img src={imgReg} alt="Regulatory Strategy and Compliance" className="w-full max-w-[460px] object-contain" />

                            {/* Markets We Support - placed on the right side under the image */}
                            <div className="w-full w-full lg:w-[120%] lg:-ml-[20%] mt-8 pt-6 border-t border-navy/20">
                                <h3 className="text-sm font-bold text-navy mb-6">Markets We Support</h3>
                                <div className="flex flex-wrap gap-3 lg:gap-5">
                                    {markets.map(m => (
                                        <Link key={m.name} to={m.route} className="flex flex-col items-center gap-2 transition-transform duration-300 hover:-translate-y-1.5 group">
                                            <img
                                                src={`https://flagcdn.com/w40/${m.code}.png`}
                                                srcSet={`https://flagcdn.com/w80/${m.code}.png 2x`}
                                                width="32"
                                                alt={m.name}
                                                className="rounded-[2px] shadow-sm border border-black/10 group-hover:shadow-md transition-shadow"
                                            />
                                            <span className="text-[11px] font-bold text-navy group-hover:text-blue-700 transition-colors">{m.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-navy text-navy-foreground py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-8 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <User className="h-8 w-8 text-white opacity-80" />
                            <div>
                                <div className="text-xl font-extrabold text-white">8+</div>
                                <div className="text-xs text-navy-foreground/70">Years of Regulatory<br />Excellence</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <Globe2 className="h-8 w-8 text-white opacity-80" />
                            <div>
                                <div className="text-sm font-bold text-white">Global Reach</div>
                                <div className="text-xs text-navy-foreground/70">Local Expertise</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <Handshake className="h-8 w-8 text-white opacity-80" />
                            <div>
                                <div className="text-sm font-bold text-white">Trusted by</div>
                                <div className="text-xs text-navy-foreground/70">Global Innovators</div>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <Link to="/contact" className="inline-flex items-center justify-center rounded-sm bg-white text-navy font-semibold px-6 py-3 text-sm transition-colors hover:bg-white/90">
                                Send an Enquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <CTABand title="Need help with your regulatory pathway?" description="Discuss Your Project" />
        </>
    );
}
