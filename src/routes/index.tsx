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
    Pill,
    Users,
    Layers,
} from "lucide-react";
import heroImage from "@/assets/hero-global.png";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "NKB Regovanta | Medical Device & IVD Regulatory Consultant India" },
            {
                name: "description",
                content:
                    "NKB Regovanta Solutions — Expert CDSCO, US FDA, EU MDR/IVDR, ISO 13485 and global market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics. India-based regulatory consultants serving 15+ countries.",
            },
        ],
    links: [
        { rel: "canonical", href: "https://www.nkbregovanta.com" },
    ],
    }),
    component: Index,
});

const expertise = [
    {
        title: "Medical Devices & IVDs",
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
        title: "Pharmaceuticals & Drugs",
        icon: Pill,
        items: [
            "CDSCO Drug Import Licensing",
            "Registration Certificate (Form 41)",
            "Import Licence (Form 10 / 10-A)",
            "Foreign Manufacturer Registration",
            "Indian Authorized Agent (AIR)",
            "Wholesale & Distribution Licensing",
            "Post-Approval Variations & Lifecycle",
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
                            <p className="text-[26px] font-bold leading-none mb-2">4</p>
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
            <section className="py-16 lg:py-24 bg-surface/50 border-t border-b border-border/40">
                <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-8">

                    <div className="text-center mb-12">
                        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-accent mb-3">OUR EXPERTISE</p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                            End-to-End Regulatory, Quality &amp; Market Access Support
                        </h2>
                        <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto">
                            Integrated compliance, quality management, and commercial market-entry across four global healthcare verticals.
                        </p>
                        <div className="mx-auto mt-4 h-1 w-16 bg-accent rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
                        {expertise.map((e) => (
                            <div
                                key={e.title}
                                className="bg-white rounded-2xl border border-gray-200/80 p-6 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-100">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                                            <e.icon className="h-5 w-5" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-[14px] font-extrabold text-navy leading-snug">{e.title}</h3>
                                    </div>

                                    <ul className="space-y-2.5">
                                        {e.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-xs text-gray-600 group-hover:text-gray-900 transition-colors leading-relaxed">
                                                <span className="text-[#0b3a96] font-bold text-xs leading-none mt-1 shrink-0">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                                    <Link
                                        to="/services"
                                        className="text-xs font-bold text-[#0b3a96] group-hover:text-[#082b70] inline-flex items-center gap-1 transition-colors"
                                    >
                                        Learn More <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-14 text-center">
                        <Link
                            to="/services"
                            className="inline-flex items-center gap-2 bg-navy px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-navy-deep transition-all shadow-md hover:shadow-lg rounded-full"
                        >
                            Explore Complete Services Directory <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}