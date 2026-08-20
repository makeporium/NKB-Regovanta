import { createFileRoute, Link } from "@tanstack/react-router";
import {
    Globe2,
    ArrowRight,
    CalendarDays,
    CheckCircle,
    Network,
    ClipboardCheck,
    ShieldCheck,
    TrendingUp,
    FlaskConical,
    Users,
    Layers,
} from "lucide-react";
import heroImage from "@/assets/hero-global.png";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "NKB Regovanta — Regulatory, Quality & Global Market Access" },
            {
                name: "description",
                content:
                    "Regulatory, quality and market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics. From first idea to global market access.",
            },
        ],
    }),
    component: Index,
});

const expertise = [
    {
        title: "Regulatory Affairs",
        icon: ClipboardCheck,
        items: [
            "Regulatory Strategy",
            "Product Classification",
            "Registration & Licensing",
            "Technical Documentation",
            "US FDA 510(k)",
            "EU MDR / IVDR",
            "CDSCO, TGA, UAE, APAC Registrations",
        ],
    },
    {
        title: "Quality Systems",
        icon: ShieldCheck,
        items: [
            "ISO 13485 Implementation",
            "MDSAP Support",
            "QMS Development",
            "Internal Audits",
            "CAPA Management",
            "Supplier Quality",
            "Certification & Audit Readiness",
        ],
    },
    {
        title: "Product & Market Access",
        icon: TrendingUp,
        items: [
            "Design Controls",
            "ISO 14971 Risk Management",
            "Clinical & Performance Documentation",
            "Testing Strategy",
            "Market Entry Strategy",
            "Post-Market Compliance",
            "Vigilance & Reporting",
        ],
    },
    {
        title: "Cosmetics",
        icon: FlaskConical,
        items: [
            "Regulatory Assessment",
            "Product Compliance",
            "Registration / Notification",
            "Labeling & Claims Review",
            "Documentation Support",
            "Market Entry Strategy",
        ],
    },
];

function Index() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-2 lg:pb-2 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-0">

                        {/* Left column — content, restoring top padding since it was fine */}
                        <div className="max-w-xl pt-6 lg:pt-10">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70 mb-3">
                                Regulatory. Quality. Market Access.
                            </p>

                            <h1 className="font-display font-extrabold leading-[1.05] text-navy">
                                <span className="block whitespace-nowrap" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                                    FROM FIRST IDEA TO
                                </span>
                                <span className="block whitespace-nowrap text-blue-700" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                                    GLOBAL MARKET ACCESS
                                </span>
                            </h1>

                            <p className="mt-4 text-[16px] font-semibold text-navy leading-snug">
                                Regulatory, Quality &amp; Market Access Solutions for Medical Devices,<br />IVDs, Cosmetics &amp; Pharmaceuticals.
                            </p>
                            <p className="mt-3 text-[13.5px] leading-relaxed text-navy/70 font-medium">
                                We help startups and manufacturers navigate regulatory pathways,
                                build compliant quality systems and bring innovative products to
                                international markets.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-[12.5px] font-semibold text-white hover:bg-navy-deep transition-colors rounded-[2px]"
                                >
                                    Discuss Your Regulatory Pathway <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 border border-navy/60 bg-white px-5 py-2.5 text-[12.5px] font-semibold text-navy hover:bg-slate-50 transition-colors rounded-[2px]"
                                >
                                    Explore Our Services <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </div>

                        {/* Right column — image, pushed downwards with top margin */}
                        <div className="flex justify-center lg:justify-end mt-2 lg:mt-8">
                            <img
                                src={heroImage}
                                alt="Global regulatory compliance for medical devices"
                                className="w-full max-w-[580px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── structured grid layout */}
            <section className="bg-navy text-white">
                <div className="mx-auto max-w-[1400px] px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
                        {/* Experience Since */}
                        <div className="flex flex-col items-center text-center p-6 xl:p-8">
                            <CalendarDays className="h-8 w-8 stroke-[1.5] text-blue-300 mb-4" />
                            <p className="text-[26px] font-bold leading-none mb-2">2018</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-1">Experience Since</p>
                            <p className="text-[12px] opacity-80 leading-snug">Regulatory &amp; Quality<br/>Experience</p>
                        </div>
                        {/* Projects Completed */}
                        <div className="flex flex-col items-center text-center p-6 xl:p-8">
                            <CheckCircle className="h-8 w-8 stroke-[1.5] text-blue-300 mb-4" />
                            <p className="text-[26px] font-bold leading-none mb-2">51+</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-1">Completed</p>
                            <p className="text-[12px] opacity-80 leading-snug">Regulatory &amp; Quality<br/>Projects</p>
                        </div>
                        {/* Clients Supported */}
                        <div className="flex flex-col items-center text-center p-6 xl:p-8">
                            <Users className="h-8 w-8 stroke-[1.5] text-blue-300 mb-4" />
                            <p className="text-[26px] font-bold leading-none mb-2">21+</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-1">Supported</p>
                            <p className="text-[12px] opacity-80 leading-snug">Global<br/>Clients</p>
                        </div>
                        {/* Countries Supported */}
                        <div className="flex flex-col items-center text-center p-6 xl:p-8">
                            <Globe2 className="h-8 w-8 stroke-[1.5] text-blue-300 mb-4" />
                            <p className="text-[26px] font-bold leading-none mb-2">15+</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-1">Supported</p>
                            <p className="text-[12px] opacity-80 leading-snug">International<br/>Countries</p>
                        </div>
                        {/* Core Industries */}
                        <div className="flex flex-col items-center text-center p-6 xl:p-8">
                            <Layers className="h-8 w-8 stroke-[1.5] text-blue-300 mb-4" />
                            <p className="text-[26px] font-bold leading-none mb-2">3</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-1">Focus Areas</p>
                            <p className="text-[12px] opacity-80 leading-snug">Core<br/>Industries</p>
                        </div>
                        {/* India Based · Globally Connected */}
                        <div className="flex flex-col items-center text-center p-6 xl:p-8">
                            <Network className="h-8 w-8 stroke-[1.5] text-blue-300 mb-4" />
                            <p className="text-[26px] font-bold leading-none mb-2">Global</p>
                            <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-1">India Based</p>
                            <p className="text-[12px] opacity-80 leading-snug">Connected Network<br/>of Experts</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR EXPERTISE ── */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="text-center mb-12">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy mb-3">OUR EXPERTISE</p>
                        <h2 className="text-[28px] font-bold text-navy tracking-tight">
                            End-to-End Regulatory, Quality &amp; Market Access Support
                        </h2>
                        <div className="mx-auto mt-3 h-px w-2/3 max-w-md bg-border/70" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {expertise.map((e) => (
                            <div
                                key={e.title}
                                className="flex gap-4 p-5 border border-border/60 hover:shadow-md transition-shadow bg-white rounded-[3px]"
                            >
                                {/* Icon */}
                                <div className="shrink-0 mt-1">
                                    <div className="bg-blue-50 p-2.5 rounded-full border border-navy/15">
                                        <e.icon className="h-8 w-8 text-navy-deep" strokeWidth={2} />
                                    </div>
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-[15px] font-bold text-navy-deep mb-3 leading-tight">{e.title}</h3>
                                    <ul className="space-y-1.5">
                                        {e.items.map((item) => (
                                            <li key={item} className="flex items-start gap-1.5 text-[12.5px] text-navy-deep/85 font-medium leading-snug">
                                                <span className="mt-px font-black text-navy-deep text-[14px] leading-none">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-navy px-8 py-3 text-[13px] font-semibold text-white hover:bg-navy-deep transition-colors rounded-[3px]"
                        >
                            View All Services <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}