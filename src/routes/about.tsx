import React, { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
    Globe2,
    CheckCircle2,
    ShieldCheck,
    Users,
    Settings,
    ArrowRight,
    FlaskConical,
    HeartPulse,
    TrendingUp,
    Target,
    Award,
    Lightbulb,
    X,
} from "lucide-react";
import imgUsha from "@/assets/usha.png";
import imgSaurav from "@/assets/saurav.png";
import imgDaniel from "@/assets/daniel.png";
import imgSatish from "@/assets/satish.png";
import imgRitu from "@/assets/ritu.png";
import imgHero from "@/assets/Global Healthcare Expertise in Action.png";
import imgIndiaGlobe from "@/assets/Futuristic Globe Cityscape at Dawn.png";
import imgEarthCta from "@/assets/Earth’s Night Lights at Sunrise From Space.png";
import imgGoldNetwork from "@/assets/Global Network Map with Golden Connections.png";
import imgIvd from "@/assets/Taking Liquid Out of Test Tubes.png";
import imgCosmetics from "@/assets/Elegant Neutral Skincare Still Life.png";
import imgMedical from "@/assets/industry-medical.png";
import imgGlobeBadge from "@/assets/Glossy Blue Globe UI Icon.png";
import imgShieldBadge from "@/assets/Blue Security Shield UI Card.png";
import imgMicroscopeBadge from "@/assets/Microscope Icon on Floating Blue Panel.png";
import imgDocBadge from "@/assets/Document Inspection Icon Banner.png";
import imgPuzzleBadge from "@/assets/Puzzle Piece in Blue Badge.png";
import imgGrowthBadge from "@/assets/Riseing Growth Bar Graph Blue.png";
import imgTechCare from "@/assets/Tech Growth Meets Compassionate Care.png";

export const Route = createFileRoute("/about")({
    head: () => ({
        meta: [
            { title: "About Us | NKB Regovanta" },
            {
                name: "description",
                content: "Learn about NKB Regovanta's global expertise, strategic execution, and commitment to advancing healthcare innovation without borders.",
            },
        ],
    }),
    component: About,
});

const experts = [
    {
        name: "Usha S.",
        title: "Chief Executive Officer",
        tags: ["Executive Leadership", "Strategic Direction", "Operations"],
        img: imgUsha,
        bio: "Usha S. founded NKB Regovanta with a clear belief: regulatory complexity should never stand in the way of responsible innovation reaching the people who need it.\n\nDriven by a vision to bridge regulatory expertise, scientific rigor, quality, and global market access, she built NKB Regovanta to support both emerging innovators and established manufacturers navigating increasingly complex healthcare and regulated-product environments.\n\nUnder her leadership, NKB Regovanta is evolving into a trusted partner across Medical Devices, IVDs, and Cosmetics, connecting Indian innovation with global markets and global expertise with India.\n\nHer vision extends beyond compliance and commercial success—to help create an ecosystem where safer, higher-quality, and meaningful innovations can reach society responsibly.\n\nHer vision is simple: Build trust. Enable innovation. Create impact.",
    },
    {
        name: "Saurav Gupta",
        title: "Chief Operating Officer",
        tags: ["Executive Leadership", "Operations", "Process Management"],
        img: imgSaurav,
        bio: "Saurav Gupta plays a key role in translating NKB Regovanta's vision into scalable, high-performing operations. He drives operational excellence across teams, processes, and service delivery, ensuring that the organization grows with consistency, agility, and a strong commitment to quality.\n\nWith a focus on building efficient systems, strengthening collaboration, and enabling sustainable growth, Saurav helps create the operational foundation required to serve clients across India and global markets.\n\nHis focus is simple: Build efficiently. Execute with excellence. Grow with purpose.",
    },
    {
        name: "Daniel M.",
        title: "Business Development & Market Access",
        tags: ["Business Development", "Market Access", "Client Relations"],
        img: imgDaniel,
        bio: "Daniel M. leads Business Development and Market Access at NKB Regovanta. He is instrumental in identifying new growth opportunities, building strategic partnerships, and expanding the company's market footprint across regulatory and healthcare sectors. Daniel brings extensive experience in client engagement, commercial strategy, and market analysis, ensuring that NKB Regovanta continues to reach and serve clients effectively on a global scale.",
    },
    {
        name: "Satish M.",
        title: "Manager, Human Resources",
        tags: ["Human Resources", "Talent Management", "Organizational Development"],
        img: imgSatish,
        bio: "Satish M. serves as the Manager of Human Resources at NKB Regovanta Solutions, overseeing talent acquisition, employee engagement, and HR operations. He plays a key role in building a strong organizational culture, managing workforce planning, and supporting the professional development of team members. His dedication to creating an inclusive and high-performing work environment is integral to the company's continued growth and employee satisfaction.",
    },
    {
        name: "Ritu Dixit",
        title: "Quality Assurance and Regulatory Affairs",
        tags: ["Quality Assurance", "Regulatory Affairs", "Compliance"],
        img: imgRitu,
        bio: "Ritu Dixit brings extensive global experience in Quality Assurance and Regulatory Affairs, with a strong understanding of international healthcare regulations and quality standards. She provides strategic oversight of quality systems, regulatory compliance, and operational excellence, helping ensure that NKB Regovanta's solutions meet rigorous global expectations.\n\nHer expertise, regulatory insight, and commitment to continuous improvement strengthen our ability to deliver consistent, compliant, and globally aligned solutions to clients across markets.\n\nGlobal Perspective. Regulatory Expertise. Quality Without Compromise.",
    },
];

function About() {
    const [selectedExpert, setSelectedExpert] = useState<typeof experts[0] | null>(null);
    return (
        <div className="bg-white">
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[600px] bg-navy flex items-center pt-16 pb-12 overflow-hidden">
                <img
                    src={imgHero}
                    alt="Global healthcare expertise across regulatory, quality and market access"
                    className="absolute inset-0 h-full w-full object-cover object-right opacity-90 pointer-events-none"
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-navy via-navy/85 to-navy/10"></div>

                <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12 w-full">
                    <div className="max-w-3xl">
                        <p className="text-[#dca85b] font-bold tracking-widest text-sm mb-4 uppercase">
                            About NKB Regovanta
                        </p>
                        <h1 className="text-white text-4xl sm:text-5xl lg:text-[44px] font-extrabold leading-[1.15] mb-6">
                            GLOBAL EXPERTISE.<br />
                            STRATEGIC EXECUTION.<br />
                            <span className="sm:whitespace-nowrap">HEALTHCARE <span className="text-cyan-400">WITHOUT BORDERS.</span></span>
                        </h1>
                        <p className="text-white/80 text-[16px] leading-relaxed mb-8 max-w-2xl">
                            A global regulatory, quality and market access partner helping organizations navigate complexity and advance healthcare innovation.
                        </p>
                        
                        <div className="flex flex-wrap items-center gap-6 text-white text-[13px] font-bold mb-10">
                            <div className="flex items-center gap-2">
                                <Globe2 className="h-5 w-5 text-cyan-400" />
                                <span>Global Perspective</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FlaskConical className="h-5 w-5 text-cyan-400" />
                                <span>Scientific Rigor</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Settings className="h-5 w-5 text-cyan-400" />
                                <span>Practical Execution</span>
                            </div>
                        </div>

                        <button className="bg-[#dca85b] text-navy font-bold py-3.5 px-8 rounded-sm hover:bg-[#dca85b]/90 transition-colors uppercase tracking-wide text-sm flex items-center gap-2">
                            Talk To Our Experts <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. FROM INDIA. TO THE WORLD. */}
            <section className="relative bg-surface border-b border-border overflow-hidden">
                {/* Mobile banner image — fades into the panel below instead of a hard edge */}
                <div className="sm:hidden h-56 w-full overflow-hidden">
                    <img
                        src={imgIndiaGlobe}
                        alt="From India to the world"
                        className="h-full w-full object-cover"
                        style={{
                            objectPosition: "0% center",
                            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
                        }}
                    />
                </div>

                {/* Desktop full-bleed image — right edge fades into the panel, no hard seam */}
                <img
                    src={imgIndiaGlobe}
                    alt="From India to the world"
                    className="hidden sm:block absolute inset-y-0 left-0 h-full w-[46%] lg:w-[44%] object-cover"
                    style={{
                        objectPosition: "0% center",
                        maskImage: "linear-gradient(to right, black 60%, transparent 96%)",
                        WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 96%)",
                    }}
                />

                <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
                    <div className="grid sm:grid-cols-12 gap-8 lg:gap-10 items-center">

                        {/* Spacer clearing the bled image on desktop */}
                        <div className="hidden sm:block sm:col-span-4 lg:col-span-5" aria-hidden="true"></div>

                        {/* Content */}
                        <div className="sm:col-span-5 lg:col-span-4">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight mb-2">
                                FROM INDIA. TO THE WORLD.
                            </h2>
                            <p className="text-[#dca85b] font-bold text-lg mb-6">
                                Built on experience. Driven by purpose.
                            </p>
                            <div className="space-y-4 text-[14px] leading-relaxed text-navy/80 mb-6">
                                <p>Our journey began in 2018 and in 2026, NKB Regovanta was formally established to bring deep regulatory, scientific and quality expertise together under one global vision.</p>
                                <p>Today, we support Medical Devices, IVDs and Cosmetics across India and international markets.</p>
                            </div>
                            <h3 className="text-xl font-extrabold text-[#dca85b] leading-tight">
                                India is our foundation.<br />
                                The world is our horizon.
                            </h3>
                        </div>

                        {/* Vertical Timeline */}
                        <div className="sm:col-span-3 flex justify-start sm:justify-end">
                            <div className="bg-blue-50/50 border border-border rounded-lg px-6 py-5 w-full sm:w-auto">
                                <div className="relative pl-8 border-l-2 border-border/60 py-1">
                                    <div className="mb-8 relative">
                                        <div className="absolute w-6 h-6 bg-white border-2 border-border rounded-full -left-[37px] top-0 flex items-center justify-center text-[10px] text-navy"><Globe2 className="w-3 h-3"/></div>
                                        <h4 className="font-extrabold text-navy text-sm">2018</h4>
                                        <p className="text-xs text-navy/70 leading-tight mt-1">Experience begins</p>
                                    </div>
                                    <div className="mb-8 relative">
                                        <div className="absolute w-6 h-6 bg-white border-2 border-border rounded-full -left-[37px] top-0 flex items-center justify-center text-[10px] text-navy"><Globe2 className="w-3 h-3"/></div>
                                        <h4 className="font-extrabold text-navy text-sm">2019–2025</h4>
                                        <p className="text-xs text-navy/70 leading-tight mt-1">Expanding expertise</p>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute w-6 h-6 bg-[#dca85b] rounded-full -left-[37px] top-0 flex items-center justify-center shadow-sm">
                                            <CheckCircle2 className="w-4 h-4 text-white" />
                                        </div>
                                        <h4 className="font-extrabold text-navy text-sm">2026</h4>
                                        <p className="text-xs text-navy/70 leading-tight mt-1">NKB Regovanta</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. FROM LOCAL EXPERTISE TO GLOBAL MARKET ACCESS */}
            <section className="py-10 lg:py-14 bg-slate-50 relative overflow-hidden border-b border-border">
                {/* Golden Network Map */}
                <div className="absolute right-0 top-0 bottom-0 w-full lg:w-2/3 pointer-events-none">
                    <img
                        src={imgGoldNetwork}
                        alt="Global market access network from India"
                        className="h-full w-full object-cover object-right opacity-60 lg:opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/40 to-transparent lg:via-slate-50/10"></div>
                </div>

                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-extrabold text-navy leading-tight mb-4 uppercase">
                            FROM LOCAL EXPERTISE<br />TO GLOBAL MARKET ACCESS
                        </h2>
                        <h3 className="text-[16px] font-bold text-navy mb-4">
                            Healthcare innovation is global.<br />
                            Regulatory pathways are not.
                        </h3>
                        <p className="text-[14px] leading-relaxed text-navy/80 mb-8 max-w-md">
                            We help organizations build clear, compliant and market-ready strategies across major and emerging markets.
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-bold text-navy border border-border">
                                <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-4 h-auto" /> USA
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-bold text-navy border border-border">
                                <img src="https://flagcdn.com/w20/eu.png" alt="EU" className="w-4 h-auto" /> EU
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-bold text-navy border border-border">
                                <img src="https://flagcdn.com/w20/gb.png" alt="UK" className="w-4 h-auto" /> UK
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-bold text-navy border border-border">
                                <img src="https://flagcdn.com/w20/ca.png" alt="Canada" className="w-4 h-auto" /> CANADA
                            </span>
                            <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-xs font-bold text-navy border border-border">
                                <Globe2 className="w-3 h-3 text-navy/50" /> APAC
                            </span>
                        </div>
                    </div>
                </div>
            </section>            {/* 4. ONE PARTNER. THREE INDUSTRIES. */}
            <section className="py-10 lg:py-14 bg-white border-b border-border">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
                    <h2 className="text-3xl font-extrabold text-navy text-center uppercase mb-10">
                        ONE PARTNER. THREE INDUSTRIES.
                    </h2>

                    <div className="grid grid-cols-3 gap-5 mb-10">

                        {/* MEDICAL DEVICES */}
                        <div className="bg-slate-50 rounded-lg border border-border overflow-hidden flex flex-col shadow-sm">
                            <div className="w-full h-40 border-b border-border overflow-hidden">
                                <img src={imgMedical} alt="Medical Devices" className="h-full w-full object-cover" />
                            </div>
                            <div className="px-5 py-4 flex items-start gap-3 flex-1">
                                <div className="h-9 w-9 rounded-full border border-navy/20 flex items-center justify-center shrink-0 bg-white mt-1">
                                    <HeartPulse className="h-4 w-4 text-navy" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-navy text-sm mb-1">MEDICAL DEVICES</h3>
                                    <p className="text-[12px] text-navy leading-relaxed mb-3">
                                        Regulatory, quality, scientific and market-access support across the product lifecycle.
                                    </p>
                                    <a href="/industries/medical-devices" className="inline-flex items-center gap-1 text-[12px] font-bold text-navy hover:text-[#dca85b] transition-colors">
                                        Explore <ArrowRight className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* IVDs */}
                        <div className="bg-slate-50 rounded-lg border border-border overflow-hidden flex flex-col shadow-sm">
                            <div className="w-full h-40 border-b border-border overflow-hidden">
                                <img src={imgIvd} alt="IVDs" className="h-full w-full object-cover" />
                            </div>
                            <div className="px-5 py-4 flex items-start gap-3 flex-1">
                                <div className="h-9 w-9 rounded-full border border-navy/20 flex items-center justify-center shrink-0 bg-white mt-1">
                                    <FlaskConical className="h-4 w-4 text-navy" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-navy text-sm mb-1">IVDs</h3>
                                    <p className="text-[12px] text-navy leading-relaxed mb-3">
                                        Regulatory strategy, performance evidence, quality and market readiness for diagnostic technologies.
                                    </p>
                                    <a href="/industries/ivd" className="inline-flex items-center gap-1 text-[12px] font-bold text-navy hover:text-[#dca85b] transition-colors">
                                        Explore <ArrowRight className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* COSMETICS */}
                        <div className="bg-slate-50 rounded-lg border border-border overflow-hidden flex flex-col shadow-sm">
                            <div className="w-full h-40 border-b border-border overflow-hidden">
                                <img src={imgCosmetics} alt="Cosmetics" className="h-full w-full object-cover" />
                            </div>
                            <div className="px-5 py-4 flex items-start gap-3 flex-1">
                                <div className="h-9 w-9 rounded-full border border-[#dca85b]/30 flex items-center justify-center shrink-0 bg-white mt-1">
                                    <ShieldCheck className="h-4 w-4 text-[#dca85b]" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-navy text-sm mb-1">COSMETICS</h3>
                                    <p className="text-[12px] text-navy leading-relaxed mb-3">
                                        Product safety, regulatory compliance, quality and market requirements.
                                    </p>
                                    <a href="/industries/cosmetics" className="inline-flex items-center gap-1 text-[12px] font-bold text-navy hover:text-[#dca85b] transition-colors">
                                        Explore <ArrowRight className="h-3 w-3" />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <p className="text-center text-navy font-bold text-[15px]">
                        Different products. Different pathways. One commitment to safety, quality and integrity.
                    </p>
                </div>
            </section>

            {/* 5. REGULATORY & SCIENTIFIC EXPERTISE */}
            <section className="py-10 lg:py-14 bg-white border-b border-border">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-navy text-center uppercase mb-12">
                        REGULATORY & SCIENTIFIC EXPERTISE
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        {/* bgSize/bgPos are measured crops (pixel bounding box of each orb icon
                            in its source PNG), not eyeballed — keeps every badge centered the same way */}
                        {[
                            { img: imgGlobeBadge, bgSize: "349px 175px", bgPos: "-45px -34px", title: "REGULATORY &\nMARKET ACCESS", desc: "Regulatory strategy, classification, submissions and market-entry pathways." },
                            { img: imgShieldBadge, bgSize: "367px 184px", bgPos: "-40px -37px", title: "QUALITY &\nCOMPLIANCE", desc: "QMS strategy, ISO 13485, MDSAP, audits and lifecycle compliance." },
                            { img: imgMicroscopeBadge, bgSize: "350px 175px", bgPos: "-39px -34px", title: "CLINICAL &\nSCIENTIFIC", desc: "Clinical, preclinical, biological safety and evidence strategy." },
                            { img: imgDocBadge, bgSize: "337px 168px", bgPos: "-35px -33px", title: "TECHNICAL &\nSTRATEGIC", desc: "Technical documentation, risk management and product-development strategy." },
                        ].map((card) => (
                            <div key={card.title} className="bg-gradient-to-br from-blue-50/70 to-white rounded-xl border border-border shadow-sm p-5 flex items-center gap-4">
                                <div
                                    className="h-20 w-20 rounded-full shrink-0 shadow-sm"
                                    style={{
                                        backgroundImage: `url(${card.img})`,
                                        backgroundSize: card.bgSize,
                                        backgroundPosition: card.bgPos,
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />
                                <div>
                                    <h3 className="font-extrabold text-navy text-[12px] leading-tight mb-1.5 uppercase whitespace-pre-line">{card.title}</h3>
                                    <p className="text-[11px] text-navy/70 leading-relaxed">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Banner */}
                    <div className="flex flex-col md:flex-row items-center justify-between border border-border py-4 gap-4 bg-white shadow-sm px-4 rounded-lg">
                        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-[11px] font-extrabold text-navy uppercase tracking-wider">
                            <span>ISO 13485</span>
                            <span className="text-border">|</span>
                            <span>MDSAP</span>
                            <span className="text-border">|</span>
                            <span>FDA</span>
                            <span className="text-border">|</span>
                            <span>EU MDR</span>
                            <span className="text-border">|</span>
                            <span>EU IVDR</span>
                            <span className="text-border">|</span>
                            <span>SaMD</span>
                            <span className="text-border">|</span>
                            <span>GLOBAL MARKET ACCESS</span>
                        </div>
                        <button className="bg-navy text-white text-[11px] font-bold uppercase tracking-wider py-2.5 px-6 rounded-md hover:bg-navy/90 transition-colors flex items-center gap-2 whitespace-nowrap">
                            EXPLORE OUR EXPERTISE <ArrowRight className="h-3 w-3" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 6. WHY NKB REGOVANTA */}
            <section className="py-10 lg:py-14 bg-white border-b border-border">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-navy uppercase leading-tight mb-10">
                        WHY NKB REGOVANTA
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <div className="border-2 border-border rounded-lg p-6 flex items-start gap-5 hover:border-navy/20 transition-colors">
                            <div className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                                <img src={imgPuzzleBadge} alt="" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-extrabold text-navy text-[13px] uppercase mb-2">INTEGRATED THINKING</h3>
                                <p className="text-[12px] text-navy leading-relaxed">Regulatory, quality, scientific and clinical expertise connected across the product lifecycle.</p>
                            </div>
                        </div>
                        
                        <div className="border-2 border-border rounded-lg p-6 flex items-start gap-5 hover:border-navy/20 transition-colors">
                            <Globe2 className="h-10 w-10 text-navy shrink-0" strokeWidth={1.5} />
                            <div>
                                <h3 className="font-extrabold text-navy text-[13px] uppercase mb-2">GLOBAL PERSPECTIVE</h3>
                                <p className="text-[12px] text-navy leading-relaxed">International understanding with market-specific insights for cross-border market access.</p>
                            </div>
                        </div>

                        <div className="border-2 border-border rounded-lg p-6 flex items-start gap-5 hover:border-navy/20 transition-colors">
                            <div className="h-12 w-12 rounded-full overflow-hidden shrink-0">
                                <img src={imgGrowthBadge} alt="" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-extrabold text-navy text-[13px] uppercase mb-2">PRACTICAL EXECUTION</h3>
                                <p className="text-[12px] text-navy leading-relaxed">Complex requirements, clear strategies and measurable progress.</p>
                            </div>
                        </div>
                    </div>

                    <p className="text-center text-navy font-extrabold text-[16px]">
                        Beyond compliance. Built for market access.
                    </p>
                </div>
            </section>

            {/* 7. BUILT FOR INNOVATORS / BEYOND COMPLIANCE */}
            <section className="py-10 lg:py-14 bg-navy relative overflow-hidden">
                {/* Split background: rocket growth (left) / mother & child care (right) */}
                <img
                    src={imgTechCare}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover hidden md:block"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent md:hidden"></div>

                <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

                        {/* Left */}
                        <div>
                            <h2 className="text-3xl font-extrabold text-white uppercase leading-tight mb-4">
                                BUILT FOR INNOVATORS.
                            </h2>
                            <p className="text-[15px] text-white/90 leading-relaxed mb-6 max-w-sm">
                                From early-stage startups to established manufacturers, we adapt to your complexity, maturity and ambitions.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 text-white text-[12px] font-bold mb-8">
                                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 text-[#dca85b]" /> Startups</span>
                                <span className="text-white/30">|</span>
                                <span>Scale-ups</span>
                                <span className="text-white/30">|</span>
                                <span>Established Manufacturers</span>
                            </div>

                            <button className="bg-[#dca85b] text-navy font-bold py-2.5 px-6 rounded-sm hover:bg-[#dca85b]/90 transition-colors uppercase tracking-wide text-xs flex items-center gap-2">
                                LEARN MORE <ArrowRight className="h-3 w-3" />
                            </button>
                        </div>

                        {/* Right */}
                        <div className="md:pl-12 bg-white/90 md:bg-transparent rounded-lg p-5 md:p-0 -mt-4 md:mt-0">
                            <h2 className="text-2xl font-extrabold text-navy md:text-navy uppercase leading-tight mb-4">
                                BEYOND COMPLIANCE.
                            </h2>
                            <div className="space-y-2 text-[14px] leading-relaxed text-navy/80 mb-6">
                                <p>A medical device can improve a patient's life.</p>
                                <p>An IVD can contribute to a diagnosis.</p>
                                <p>A cosmetic product can enhance everyday wellbeing.</p>
                                <p className="pt-2">Behind every product is a person.</p>
                            </div>
                            <p className="text-[14px] leading-relaxed text-navy">
                                That is why <span className="font-extrabold">compliance is not the destination.</span><br/>
                                <span className="font-extrabold">It is the foundation for trust.</span>
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* 9. THE JOURNEY CONTINUES */}
            <section className="bg-white py-10 lg:py-14 border-b border-border">
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-extrabold text-navy uppercase leading-tight mb-16 text-center sm:text-left">
                        THE JOURNEY CONTINUES
                    </h2>
                    
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute top-6 left-12 right-12 h-[1px] bg-border z-0 hidden sm:block"></div>
                        
                        <div className="grid sm:grid-cols-4 gap-8 relative z-10 text-center">
                            
                            {/* Step 1 */}
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 rounded-full border border-navy/20 bg-white mb-4 flex items-center justify-center relative shadow-sm">
                                    <div className="absolute inset-y-0 -right-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <div className="absolute inset-y-0 -left-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <TrendingUp className="h-5 w-5 text-navy" />
                                </div>
                                <h3 className="font-bold text-navy text-[13px] mb-1">2018</h3>
                                <p className="text-[11px] font-bold text-navy mb-2 uppercase tracking-wide">FOUNDATION</p>
                                <p className="text-[11px] text-navy/70 leading-relaxed max-w-[150px]">Experience begins.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 rounded-full border border-navy/20 bg-white mb-4 flex items-center justify-center relative shadow-sm">
                                    <div className="absolute inset-y-0 -right-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <div className="absolute inset-y-0 -left-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <Users className="h-5 w-5 text-navy" />
                                </div>
                                <h3 className="font-bold text-navy text-[13px] mb-1">2019–2025</h3>
                                <p className="text-[11px] font-bold text-navy mb-2 uppercase tracking-wide">EXPANDING EXPERTISE</p>
                                <p className="text-[11px] text-navy/70 leading-relaxed max-w-[150px]">Regulatory. Quality. Clinical. Scientific. Global market access.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 rounded-full border border-navy/20 bg-white mb-4 flex items-center justify-center relative shadow-sm">
                                    <div className="absolute inset-y-0 -right-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <div className="absolute inset-y-0 -left-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <ShieldCheck className="h-5 w-5 text-navy" />
                                </div>
                                <h3 className="font-bold text-navy text-[13px] mb-1">2026</h3>
                                <p className="text-[11px] font-bold text-navy mb-2 uppercase tracking-wide">NKB REGOVANTA</p>
                                <p className="text-[11px] text-navy/70 leading-relaxed max-w-[150px]">One organization.<br/>One vision.<br/>One global perspective.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center">
                                <div className="h-12 w-12 rounded-full border border-navy bg-navy mb-4 flex items-center justify-center relative shadow-sm">
                                    <div className="absolute inset-y-0 -right-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <div className="absolute inset-y-0 -left-8 w-1/2 bg-white -z-10 hidden sm:block"></div>
                                    <Globe2 className="h-5 w-5 text-white" />
                                </div>
                                <h3 className="font-bold text-navy text-[13px] mb-1">FUTURE</h3>
                                <p className="text-[11px] font-bold text-navy mb-2 uppercase tracking-wide">FROM INDIA. FOR THE WORLD.</p>
                                <p className="text-[11px] text-navy/70 leading-relaxed max-w-[150px]">Global growth.<br/>Responsible innovation.<br/>Meaningful impact.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="bg-white py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Leadership</p>
                        <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl leading-tight">
                            Meet Our Key Leaders
                        </h2>
                        <p className="mt-4 text-[15px] text-navy/70 max-w-xl mx-auto">
                            Experienced professionals committed to advancing regulatory excellence and healthcare innovation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {experts.map((expert, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group h-full">
                                <div className="p-6 flex gap-4 items-start border-b border-border/50">
                                    <div className="w-20 h-20 rounded-full bg-surface shrink-0 overflow-hidden flex items-center justify-center border border-border shadow-sm">
                                        {expert.img ? (
                                            <img src={expert.img} alt={expert.name} className="w-full h-full object-cover object-[center_top]" onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden') }} />
                                        ) : null}
                                        <div className={`text-navy font-bold text-xl ${expert.img ? 'hidden' : ''}`}>{expert.name.charAt(0)}</div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-navy group-hover:text-accent transition-colors">{expert.name}</h3>
                                        <p className="text-sm text-navy/70 font-medium mb-3">{expert.title}</p>
                                        <button
                                            onClick={() => setSelectedExpert(expert)}
                                            className="text-[11px] font-bold text-accent uppercase tracking-wider hover:text-navy transition-colors inline-flex items-center gap-1"
                                        >
                                            View Bio <span className="text-lg leading-none">&rarr;</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 bg-surface/50 flex-grow">
                                    <div className="flex flex-wrap gap-2">
                                        {expert.tags.map(tag => (
                                            <span key={tag} className="px-2 py-1 bg-white border border-border text-[10px] font-bold uppercase tracking-wide text-navy/60 rounded-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bio Modal */}
            {selectedExpert && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/70 backdrop-blur-sm"
                    onClick={() => setSelectedExpert(null)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Modal Header — navy gradient band */}
                        <div className="relative bg-gradient-to-br from-navy to-navy/80 px-8 pt-8 pb-6">
                            <button
                                onClick={() => setSelectedExpert(null)}
                                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex gap-5 items-center">
                                {/* Photo */}
                                <div className="w-20 h-20 rounded-full shrink-0 overflow-hidden flex items-center justify-center border-2 border-[#dca85b] shadow-lg bg-navy/50">
                                    {selectedExpert.img ? (
                                        <img
                                            src={selectedExpert.img}
                                            alt={selectedExpert.name}
                                            className="w-full h-full object-cover object-[center_top]"
                                            onError={(e) => {
                                                e.currentTarget.style.display = 'none';
                                                (e.currentTarget.nextElementSibling as HTMLElement)?.classList.remove('hidden');
                                            }}
                                        />
                                    ) : null}
                                    <div className={`text-white font-bold text-2xl ${selectedExpert.img ? 'hidden' : ''}`}>
                                        {selectedExpert.name.charAt(0)}
                                    </div>
                                </div>

                                {/* Name & Title */}
                                <div>
                                    <h2 className="text-xl font-extrabold text-white leading-tight">
                                        {selectedExpert.name}
                                    </h2>
                                    <p className="text-[12px] font-bold text-[#dca85b] uppercase tracking-widest mt-1">
                                        {selectedExpert.title}
                                    </p>
                                    {/* Tag chips */}
                                    <div className="flex flex-wrap gap-1.5 mt-3">
                                        {selectedExpert.tags.map(tag => (
                                            <span key={tag} className="px-2 py-0.5 bg-white/10 border border-white/20 text-[9px] font-bold uppercase tracking-wide text-white/70 rounded-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Gold accent divider */}
                            <div className="mt-6 h-px bg-gradient-to-r from-[#dca85b] via-[#dca85b]/40 to-transparent" />
                        </div>

                        {/* Modal Body — scrollable */}
                        <div className="overflow-y-auto px-8 py-6 flex-1">
                            <div className="space-y-4">
                                {selectedExpert.bio.split('\n\n').map((para, idx) => (
                                    <p key={idx} className={`text-[14px] leading-relaxed ${
                                        idx === selectedExpert.bio.split('\n\n').length - 1
                                            ? 'font-semibold text-navy italic'
                                            : 'text-navy/80'
                                    }`}>
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-8 py-4 border-t border-border bg-surface/50 flex justify-end">
                            <button
                                onClick={() => setSelectedExpert(null)}
                                className="text-[11px] font-bold text-navy/50 hover:text-navy uppercase tracking-wider transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 10. FOOTER CTA */}
            <section className="bg-navy py-12 relative overflow-hidden">
                <img
                    src={imgEarthCta}
                    alt=""
                    className="absolute right-0 top-0 bottom-0 h-full w-2/3 object-cover object-right opacity-40 pointer-events-none"
                    style={{
                        maskImage: "linear-gradient(to left, black 30%, transparent 90%)",
                        WebkitMaskImage: "linear-gradient(to left, black 30%, transparent 90%)",
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40 z-0 pointer-events-none"></div>
                
                <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-2xl font-extrabold text-white uppercase leading-tight mb-2">
                        READY TO NAVIGATE YOUR NEXT MARKET?
                    </h2>
                    <p className="text-[14px] text-white/90 mb-6">
                        Regulatory complexity shouldn't slow responsible innovation.<br/>
                        <span className="text-cyan-400 font-bold">Let's build the pathway together.</span>
                    </p>
                    <button className="bg-[#dca85b] text-navy font-bold py-2.5 px-6 rounded-sm hover:bg-[#dca85b]/90 transition-colors uppercase tracking-wide text-xs flex items-center gap-2 inline-flex">
                        TALK TO OUR EXPERTS <ArrowRight className="h-3 w-3" />
                    </button>
                </div>
            </section>
        </div>
    );
}