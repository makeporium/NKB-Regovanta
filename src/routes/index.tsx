import { useState, useRef, useEffect } from "react";
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
    ChevronLeft,
    ChevronRight,
    Search,
    SlidersHorizontal,
    Factory,
    Truck,
    Headphones,
    Building2,
    Sparkles,
    Quote,
    Star,
    CheckCircle2,
    MessageSquareQuote,
} from "lucide-react";
import heroImage from "@/assets/hero-global.png";
import imgPharmaEquipment from "@/assets/mfg-pharma-equipment.jpg";
import imgCleanroomSolutions from "@/assets/mfg-cleanroom-solutions.jpg";
import imgHealthcareProducts from "@/assets/mfg-healthcare-products.jpg";
import imgComplianceSupport from "@/assets/mfg-compliance-support.png";

// Client Logos
import logoIpca from "@/assets/clients/ipca.png";
import logoCipla from "@/assets/clients/cipla.png";
import logoFelix from "@/assets/clients/felix.png";
import logoPar from "@/assets/clients/par.png";
import logoAstrazeneca from "@/assets/clients/astrazeneca.png";
import logoAcg from "@/assets/clients/acg.png";
import logoProcon from "@/assets/clients/procon.png";
import logoDrReddys from "@/assets/clients/dr-reddys.png";
import logoIsro from "@/assets/clients/isro.png";
import logoNovartis from "@/assets/clients/novartis.png";
import logoUnichem from "@/assets/clients/unichem.png";
import logoEncube from "@/assets/clients/encube.png";
import logoKnovea from "@/assets/clients/knovea.png";
import logoSymbiotec from "@/assets/clients/symbiotec.png";
import logoPfizer from "@/assets/clients/pfizer.png";
import logoIimIndore from "@/assets/clients/iim-indore.png";
import logoRoche from "@/assets/clients/roche.png";
import logoAbbott from "@/assets/clients/abbott.png";
import logoKusum from "@/assets/clients/kusum.png";
import logoTcs from "@/assets/clients/tcs.png";
import logoGenpact from "@/assets/clients/genpact.svg";
import logoWipro from "@/assets/clients/wipro.svg";

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Medical Device Consultant & Consultancy | USFDA, 510(k), CDSCO | NKB Regovanta" },
            {
                name: "description",
                content:
                    "NKB Regovanta is a leading global medical device consultant and regulatory consultancy. Expert USFDA 510(k) / 510 k clearance, CDSCO licensing (MD-14/15, MD-3 to MD-9), EU MDR/IVDR CE marking, and ISO 13485 QMS compliance.",
            },
            {
                name: "keywords",
                content:
                    "medical device consultant, medical device consultancy, USFDA, USFDA consultant, USFDA medical device, 510 k, 510 k consultant, 510k submission consultant, FDA 510(k) clearance medical devices, medical device regulatory consultant, CDSCO Medical Device Import Licence, MD-14 application, MD-15 import licence, Class A GSR 777(E) registration, Indian Authorized Agent AIR IAA, eSTAR FDA dossier, EU MDR 2017/745 regulatory consultant, CE Marking Europe, ISO 13485 implementation consultant, MDSAP audit readiness, NKB Regovanta",
            },
            { property: "og:title", content: "Medical Device Consultant & Regulatory Consultancy | USFDA, 510(k), CDSCO | NKB Regovanta" },
            {
                property: "og:description",
                content:
                    "Leading global medical device consultant & regulatory consultancy. Comprehensive USFDA 510(k) / 510 k, CDSCO licensing, and EU MDR/IVDR market access.",
            },
            { property: "og:url", content: "https://www.nkbregovanta.com" },
            { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "Medical Device Consultant & Consultancy | USFDA, 510(k), CDSCO | NKB Regovanta" },
            { name: "twitter:description", content: "NKB Regovanta — Leading global medical device consultant & regulatory consultancy. Expert USFDA 510(k) / 510 k clearance, CDSCO licensing, and EU MDR/IVDR compliance." },
            { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
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

const manufacturingSolutions = [
    {
        title: "Pharmaceutical Equipment",
        image: imgPharmaEquipment,
        items: [
            "De-dusters, Tray Dryers",
            "Octagonal, V-Type Blenders",
            "Mass Mixers, Pass Boxes",
            "Powder Filling Machines",
            "Material Handling Solutions",
        ],
    },
    {
        title: "Cleanroom & Facility Solutions",
        image: imgCleanroomSolutions,
        items: [
            "SS Tables, Workstations",
            "Trolleys, Lockers, Containers",
            "Wash Basins, Wall Guards",
            "Cross-over Benches",
            "Electrical Panels, Ladders",
        ],
    },
    {
        title: "Healthcare & Surgical Products",
        image: imgHealthcareProducts,
        items: [
            "Sterile Masks, Surgical Aprons",
            "Bouffant Caps, Shoe Covers",
            "Sterile Hand Gloves",
            "Other Healthcare Consumables",
        ],
    },
    {
        title: "Technical & Compliance Support",
        image: imgComplianceSupport,
        items: [
            "Technical Documentation",
            "Product Specifications",
            "Quality & Compliance Support",
            "Customer-specific Solutions",
        ],
    },
];

const endToEndApproach = [
    {
        step: "1",
        title: "1. UNDERSTAND",
        description: "We understand your technical, operational and commercial requirements.",
        icon: Search,
    },
    {
        step: "2",
        title: "2. DEFINE",
        description: "We define the right solution, specifications and execution plan.",
        icon: SlidersHorizontal,
    },
    {
        step: "3",
        title: "3. ENGINEER & MANUFACTURE",
        description: "We engineer and manufacture through established capabilities.",
        icon: Factory,
    },
    {
        step: "4",
        title: "4. QUALITY & DOCUMENTATION",
        description: "We ensure quality, testing, documentation and compliance.",
        icon: ClipboardCheck,
    },
    {
        step: "5",
        title: "5. DELIVER",
        description: "We coordinate logistics and ensure on-time delivery.",
        icon: Truck,
    },
    {
        step: "6",
        title: "6. SUPPORT",
        description: "We provide ongoing support for your business needs.",
        icon: Headphones,
    },
];

const clientPartners = [
    { name: "Roche", subtitle: "F. Hoffmann-La Roche AG", badge: "Diagnostics & Pharma", logo: logoRoche },
    { name: "Abbott", subtitle: "Abbott Laboratories", badge: "Medical Devices & IVDs", logo: logoAbbott },
    { name: "Ipca", subtitle: "Ipca Laboratories Ltd.", badge: "Pharmaceuticals", logo: logoIpca },
    { name: "Cipla", subtitle: "Cipla Global Healthcare", badge: "Pharmaceuticals", logo: logoCipla },
    { name: "Felix", subtitle: "Felix Generics Pvt Ltd", badge: "Generics", logo: logoFelix },
    { name: "PAR", subtitle: "PAR Pharmaceutical", badge: "Global Pharma", logo: logoPar },
    { name: "AstraZeneca", subtitle: "AstraZeneca International", badge: "Biopharma", logo: logoAstrazeneca },
    { name: "ACG", subtitle: "ACG Worldwide", badge: "Machinery & Capsules", logo: logoAcg },
    { name: "PV PROCON VENTURES", subtitle: "Procon Ventures", badge: "Engineering", logo: logoProcon },
    { name: "Dr.Reddy's", subtitle: "Dr. Reddy's Laboratories", badge: "Pharmaceuticals", logo: logoDrReddys },
    { name: "इसरो isro", subtitle: "Indian Space Research Organisation", badge: "Aerospace & Tech", logo: logoIsro },
    { name: "NOVARTIS", subtitle: "Novartis Healthcare", badge: "Global Healthcare", logo: logoNovartis },
    { name: "UNICHEM LABORATORIES LTD.", subtitle: "Unichem Laboratories", badge: "Formulations", logo: logoUnichem },
    { name: "Encube", subtitle: "Encube Ethicals", badge: "Topicals & Pharma", logo: logoEncube },
    { name: "Knovea", subtitle: "Knovea Pharmaceuticals", badge: "Healthcare", logo: logoKnovea },
    { name: "SYMBIOTEC PHARMALAB (P) LIMITED", subtitle: "Symbiotec Pharmalab", badge: "Steroid APIs", logo: logoSymbiotec },
    { name: "Pfizer", subtitle: "Pfizer Pharmaceuticals", badge: "Global Pharma", logo: logoPfizer },
    { name: "भा. प्र. सं. इन्दौर IIM INDORE", subtitle: "सिद्धिर्मूलं प्रबन्धनम्", badge: "Institutions", logo: logoIimIndore },
    { name: "Kusum Healthcare", subtitle: "Kusum Healthcare Pvt. Ltd.", badge: "Pharmaceuticals", logo: logoKusum },
];

const supportedCountries = [
    { name: "India", code: "in", auth: "CDSCO", to: "/services/india" },
    { name: "USA", code: "us", auth: "FDA", to: "/services/usa" },
    { name: "EU", code: "eu", auth: "CE MDR/IVDR", to: "/services/eu" },
    { name: "UK", code: "gb", auth: "MHRA", to: "/services/uk" },
    { name: "Canada", code: "ca", auth: "Health Canada", to: "/services/canada" },
    { name: "Australia", code: "au", auth: "TGA", to: "/services/australia" },
    { name: "Brazil", code: "br", auth: "ANVISA", to: "/services/brazil" },
    { name: "Saudi Arabia", code: "sa", auth: "SFDA", to: "/services/saudi-arabia" },
    { name: "UAE", code: "ae", auth: "MOHAP", to: "/services/uae" },
    { name: "New Zealand", code: "nz", auth: "Medsafe", to: "/services/new-zealand" },
];

const clientTestimonials = [
    {
        id: "kusum",
        name: "N. CHANDRA SHEKHAR",
        title: "Executive Vice President",
        company: "Kusum Healthcare Pvt Ltd",
        sector: "Global Pharmaceuticals",
        location: "India & International Markets",
        initials: "CS",
        logo: logoKusum,
        quote:
            "What stands out about NKB Regovanta is their structured and solution-oriented approach to regulatory challenges. They bring clarity to complex requirements, maintain strong attention to compliance detail, and work with a high level of ownership and responsiveness throughout the engagement.",
        keyStrengths: ["Structured Approach", "Solution-Oriented", "High Ownership & Detail"],
        tag: "Pharmaceutical Regulatory Strategy",
    },
    {
        id: "vitacon",
        name: "Rolandas Ragaisis",
        title: "Managing Director",
        company: "UAB Vitacon LT",
        sector: "Ultrasound & Medical Devices",
        location: "Lithuania, European Union",
        countryCode: "lt",
        initials: "RR",
        quote:
            "NKB Regovanta has demonstrated strong regulatory and quality expertise, combined with a highly practical and responsive working style. Their structured approach to gap assessment, documentation, compliance readiness and regulatory strategy has helped us manage complex requirements with greater clarity and confidence.",
        keyStrengths: ["Regulatory & Quality Expertise", "Gap Assessment & QMS", "Practical & Responsive"],
        tag: "Medical Devices & EU MDR",
    },
    {
        id: "tcs",
        name: "Prashant Singh",
        title: "Lead Consultant",
        company: "TCS",
        sector: "Life Sciences & Digital Health",
        location: "India & Global",
        initials: "PS",
        logo: logoTcs,
        quote:
            "NKB Regovanta has a good understanding of the regulatory requirements applicable to medical devices and IVD products. I have appreciated their practical approach, attention to detail, and the way they keep the process clear and well coordinated. They are a dependable team for regulatory and compliance support.",
        keyStrengths: ["Medical Device & IVD", "Process Clarity", "Dependable Support"],
        tag: "Medical Devices & IVD Compliance",
    },
    {
        id: "genpact",
        name: "Mohd Farrukh Khan",
        title: "Senior Manager",
        company: "Genpact",
        sector: "Healthcare & Life Sciences Regulatory",
        location: "Global Operations",
        initials: "FK",
        logo: logoGenpact,
        quote:
            "My experience with NKB Regovanta has been positive, particularly in the area of EU IVDR requirements. Their team has been responsive and clear in explaining the regulatory expectations and documentation requirements. They bring a practical approach to IVDR projects and are easy to work with.",
        keyStrengths: ["EU IVDR Requirements", "Clear Documentation", "Practical & Responsive"],
        tag: "EU IVDR Compliance",
    },
    {
        id: "wipro",
        name: "Parag Giri",
        title: "Senior Project Manager",
        company: "Wipro",
        sector: "Medical Device Engineering",
        location: "India & Global",
        initials: "PG",
        logo: logoWipro,
        quote:
            "I worked with NKB Regovanta in connection with regulatory consultancy support for medical device projects. The team was approachable and willing to work through the details with the project team. Their inputs were useful in understanding the regulatory aspects and planning the next steps.",
        keyStrengths: ["Approachable Team", "Actionable Guidance", "Strategic Project Planning"],
        tag: "Medical Device Strategy",
    },
];

function Index() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const updateScrollState = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

        const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 320;
        const gap = typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 24;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        setActiveIndex(Math.min(Math.max(newIndex, 0), clientTestimonials.length - 1));
    };

    const scrollToIndex = (index: number) => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 320;
        const gap = typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 24;
        scrollRef.current.scrollTo({
            left: index * (cardWidth + gap),
            behavior: "smooth",
        });
        setActiveIndex(index);
    };

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 320;
        const gap = typeof window !== "undefined" && window.innerWidth < 640 ? 16 : 24;
        const offset = cardWidth + gap;
        scrollRef.current.scrollBy({
            left: direction === "left" ? -offset : offset,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            if (!scrollRef.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            if (scrollLeft >= scrollWidth - clientWidth - 25) {
                scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                scroll("right");
            }
        }, 5500);
        return () => clearInterval(timer);
    }, [isHovered]);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfessionalService",
                        "name": "NKB Regovanta — Medical Device Consultant & Regulatory Consultancy",
                        "alternateName": ["NKB Regovanta Solutions", "NKB Medical Device Consultancy"],
                        "url": "https://www.nkbregovanta.com",
                        "logo": "https://www.nkbregovanta.com/og-image.png",
                        "image": "https://www.nkbregovanta.com/og-image.png",
                        "description": "Premier global medical device consultant and regulatory consultancy specializing in USFDA 510(k) / 510 k clearance, CDSCO licensing, EU MDR/IVDR, and ISO 13485 quality systems.",
                        "serviceType": [
                            "Medical Device Consultant",
                            "Medical Device Consultancy",
                            "USFDA 510(k) Clearance",
                            "510 k Premarket Notification",
                            "CDSCO Medical Device Licensing",
                            "EU MDR CE Marking",
                            "ISO 13485 QMS Implementation"
                        ],
                        "areaServed": ["India", "United States", "European Union", "United Kingdom", "Global"],
                        "knowsAbout": [
                            "Medical Device Consultant",
                            "Medical Device Consultancy",
                            "USFDA",
                            "USFDA 510 k",
                            "510 k Premarket Notification",
                            "CDSCO Medical Device Rules 2017",
                            "EU MDR 2017/745",
                            "ISO 13485:2016"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "IN"
                        }
                    })
                }}
            />
            {/* ── HERO ── */}
            <section className="bg-gradient-to-r from-white via-blue-50/60 to-blue-200/80 overflow-hidden pb-2 lg:pb-2 pt-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-0">

                        {/* Left column — content, restoring top padding since it was fine */}
                        <div className="max-w-xl pt-6 lg:pt-10">
                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/70 mb-3">
                                Regulatory. Quality. Manufacturing. Market Access.
                            </p>

                            <h1 className="font-display font-extrabold leading-[1.05] text-navy" style={{ fontSize: 'clamp(26px, 3.2vw, 42px)' }}>
                                Medical Device Consultant &amp; Regulatory Consultancy
                            </h1>
                            <p className="mt-2 text-[17px] sm:text-[18px] font-semibold text-blue-700 leading-snug">
                                Global USFDA 510(k), CDSCO India &amp; EU MDR/IVDR Market Access
                            </p>

                            <p className="mt-4 text-[14px] sm:text-[14.5px] font-medium text-navy/80 leading-relaxed">
                                NKB Regovanta is a premier global <strong>medical device consultant</strong> and regulatory affairs <strong>consultancy</strong>. We provide end-to-end regulatory strategy, testing coordination, technical documentation, and market access for Medical Devices, IVDs, Pharmaceuticals, and Cosmetics across India (CDSCO), the United States (USFDA 510 k / 510k), and international markets.
                            </p>
                            <p className="mt-3 text-[13px] leading-relaxed text-navy/65 font-medium">
                                As a trusted medical device consultancy, our senior consultants support manufacturers with USFDA 510(k) clearances, eSTAR submissions, CDSCO manufacturing &amp; import licensing (MD-14/15, MD-3 to MD-9), EU MDR/IVDR CE marking, and ISO 13485 QMS certification.
                            </p>

                            {/* Regulatory Authorities Strip */}
                            <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 items-center">
                                {["CDSCO India", "USFDA (510 k / 510k)", "US FDA De Novo & PMA", "EU MDR", "EU IVDR", "UK MHRA", "Health Canada", "TGA", "ANVISA", "SFDA", "MOHAP"].map((auth, i, arr) => (
                                    <span key={auth} className="flex items-center gap-x-2">
                                        <span className="text-[10.5px] font-bold text-navy/70 hover:text-[#0b3a96] transition-colors">{auth}</span>
                                        {i < arr.length - 1 && <span className="text-navy/25 text-[10px]">|</span>}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2.5 sm:gap-3 items-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-navy px-4.5 py-2.5 text-[12.5px] font-semibold text-white hover:bg-navy-deep transition-all shadow-2xs hover:shadow-xs rounded-[2px]"
                                >
                                    Discuss Your Regulatory Pathway <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 border border-navy/60 bg-white px-4.5 py-2.5 text-[12.5px] font-semibold text-navy hover:bg-slate-50 transition-all shadow-2xs rounded-[2px]"
                                >
                                    Explore Our Services <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    to="/services/manufacturing"
                                    className="inline-flex items-center gap-2 bg-[#1b7941] hover:bg-[#156334] text-white px-4.5 py-2.5 text-[12.5px] font-semibold transition-all shadow-2xs hover:shadow-xs rounded-[2px]"
                                >
                                    Manufacturing Solutions <ArrowRight className="h-3.5 w-3.5" />
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

            {/* ── COUNTRIES WE SUPPORT (CLEAN INTEGRATED ROUNDED CARDS) ── */}
            <section className="bg-gradient-to-b from-[#eef4ff] via-white to-slate-50 border-y border-gray-200/80 py-7 sm:py-8 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5 pb-3 border-b border-gray-200/70">
                        <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0b3a96]/10 text-[#0b3a96] text-[11px] font-extrabold uppercase tracking-wider border border-[#0b3a96]/20">
                                <Globe2 className="h-3.5 w-3.5" />
                                Countries We Support
                            </span>
                            <span className="hidden sm:inline text-navy/20">|</span>
                            <span className="hidden sm:inline text-xs font-semibold text-navy/70">
                                Medical Device, IVD, Pharma &amp; Cosmetics Regulatory Approvals
                            </span>
                        </div>

                        <Link
                            to="/markets"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0b3a96] hover:text-[#082b70] transition-colors self-start sm:self-auto group"
                        >
                            <span>View All Supported Markets</span>
                            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* 10 Countries in clean rounded circle cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5 sm:gap-3.5">
                        {supportedCountries.map((c) => (
                            <Link
                                key={c.code}
                                to={c.to}
                                className="group flex flex-col items-center justify-center p-3 rounded-2xl bg-white hover:bg-blue-50/40 border border-gray-200 hover:border-[#0b3a96]/40 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center"
                            >
                                {/* Clean Circular Flag with shadow */}
                                <div className="w-12 h-12 rounded-full p-0.5 bg-white shadow-xs border border-gray-200 group-hover:border-[#0b3a96]/50 group-hover:scale-105 transition-all mb-2 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={`https://flagcdn.com/w80/${c.code}.png`}
                                        srcSet={`https://flagcdn.com/w160/${c.code}.png 2x`}
                                        alt={`${c.name} Flag`}
                                        className="w-full h-full object-cover rounded-full"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Country Name */}
                                <span className="text-[12px] font-extrabold text-navy group-hover:text-[#0b3a96] leading-tight transition-colors">
                                    {c.name}
                                </span>
                                {/* Regulatory Authority */}
                                <span className="mt-0.5 text-[9.5px] font-semibold text-navy/50 group-hover:text-[#0b3a96]/70 transition-colors leading-tight">
                                    {c.auth}
                                </span>
                            </Link>
                        ))}
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
                            <p className="text-[26px] font-bold leading-none mb-2">151+</p>
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
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight max-w-4xl mx-auto leading-tight">
                            End-to-End Regulatory, Quality, Manufacturing &amp; Market Access Support
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Integrated compliance, quality management, manufacturing solutions, and commercial market-entry across global healthcare verticals.
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

            {/* ── PRODUCT & MANUFACTURING SOLUTIONS ── */}
            <section className="py-6 sm:py-10 bg-surface/30 border-b border-border/40">
                <div className="mx-auto max-w-[1540px] px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-3xl border border-gray-200/90 p-5 sm:p-8 lg:p-10 shadow-xs">
                        
                        {/* Header with Title + CTA Button */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-gray-100">
                            <div className="max-w-3xl">
                                <p className="text-[11.5px] font-bold uppercase tracking-[0.25em] text-[#1b7941] mb-2">
                                    OUR INTEGRATED CAPABILITY
                                </p>
                                <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-navy tracking-tight leading-tight">
                                    Integrated Manufacturing &amp; Facility Solutions
                                </h2>
                                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-gray-800 leading-relaxed font-medium">
                                    Integrated equipment, manufacturing, cleanroom and compliance solutions for pharmaceutical, medical-device and healthcare organizations.
                                </p>
                            </div>
                            <div>
                                <Link
                                    to="/services/manufacturing"
                                    className="inline-flex items-center gap-2 bg-[#1b7941] hover:bg-[#156334] text-white font-bold text-xs sm:text-[13.5px] px-6 py-3 rounded-md shadow-sm transition-all hover:shadow-md shrink-0 group whitespace-nowrap"
                                >
                                    Explore Manufacturing Solutions
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* 4 Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
                            {manufacturingSolutions.map((sol) => (
                                <div
                                    key={sol.title}
                                    className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                                >
                                    <div className="h-44 sm:h-48 w-full overflow-hidden bg-slate-100 relative">
                                        <img
                                            src={sol.image}
                                            alt={sol.title}
                                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-[14.5px] sm:text-[15.5px] font-extrabold text-navy leading-snug tracking-tight mb-3.5 uppercase">
                                                {sol.title}
                                            </h3>
                                            <ul className="space-y-2.5">
                                                {sol.items.map((item) => (
                                                    <li key={item} className="flex items-start gap-2 text-[13px] sm:text-[13.5px] text-gray-800 font-medium leading-relaxed">
                                                        <span className="text-[#0b3a96] font-black text-sm leading-none mt-0.5 shrink-0">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* OUR END-TO-END APPROACH */}
                        <div className="pt-6 sm:pt-7 border-t border-gray-100">
                            <div className="text-center mb-6 sm:mb-8">
                                <p className="text-[11.5px] sm:text-[12px] font-extrabold uppercase tracking-[0.25em] text-navy">
                                    OUR END-TO-END APPROACH
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 relative items-start">
                                {endToEndApproach.map((step, idx) => (
                                    <div key={step.step} className="flex flex-col items-start relative group">
                                        <div className="flex items-start gap-2.5 w-full mb-2.5">
                                            <div className="w-10 h-10 rounded-full bg-[#1b7941] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:bg-[#156334] transition-colors mt-0.5">
                                                <step.icon className="h-4.5 w-4.5 stroke-[2]" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-[12.5px] font-extrabold text-navy uppercase tracking-tight leading-snug">
                                                    {step.title}
                                                </h4>
                                            </div>
                                            {idx < 5 && (
                                                <ChevronRight className="hidden lg:block h-4 w-4 text-gray-400 shrink-0 mt-1" />
                                            )}
                                        </div>
                                        <p className="text-[12.5px] text-gray-700 font-medium leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── OUR CLIENTS & PARTNERS ── */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-[#0b3a96]/10 text-[#0b3a96] border border-[#0b3a96]/20 mb-3 shadow-2xs">
                            <Sparkles className="h-3.5 w-3.5 text-[#0b3a96]" />
                            Our Clients &amp; Partners
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight mt-1">
                            Trusted by Leading Organizations
                        </h2>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                            Powering global regulatory approvals, CDSCO &amp; US FDA licensing, quality systems (ISO 13485 / MDSAP),
                            and precision manufacturing solutions for premier institutions worldwide.
                        </p>
                    </div>

                    {/* Client Cards Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                        {clientPartners.map((client) => (
                            <div
                                key={client.name}
                                className="bg-surface/50 hover:bg-white rounded-2xl border border-gray-200/80 p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-2xs hover:shadow-lg hover:border-[#0b3a96]/40 hover:-translate-y-0.5 transition-all duration-300 group"
                            >
                                <div className="h-20 w-full rounded-xl bg-white border border-gray-100/90 shadow-2xs flex items-center justify-center p-3 mb-4 group-hover:shadow-xs group-hover:scale-[1.03] transition-all duration-300">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-h-14 max-w-[90%] object-contain"
                                    />
                                </div>
                                <h3 className="text-[14.5px] sm:text-[15px] font-extrabold text-navy leading-tight group-hover:text-[#0b3a96] transition-colors">
                                    {client.name}
                                </h3>
                                <p className="text-[11px] sm:text-[11.5px] text-gray-500 font-medium mt-1 leading-snug">
                                    {client.subtitle}
                                </p>
                                <span className="mt-2.5 text-[9.5px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700">
                                    {client.badge}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Trusted By Tagline */}
                    <div className="mt-10 sm:mt-12 text-center">
                        <div className="inline-flex items-center gap-2.5 text-sm sm:text-base font-extrabold text-[#0b3a96] bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 px-8 py-3 rounded-full border border-gray-200 shadow-2xs">
                            <Sparkles className="h-4 w-4 text-[#dca85b] shrink-0" />
                            <span>Growing alongside leaders in healthcare, diagnostics and life sciences.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CLIENT TESTIMONIALS & ENDORSEMENTS ── */}
            <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-[#f5f8fd] to-white border-b border-gray-200 relative overflow-hidden">
                {/* Background Ambient Glow Orbs */}
                <div className="absolute top-12 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
                <div className="absolute bottom-12 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-0" />
                <Quote className="absolute top-10 right-10 h-72 w-72 text-blue-900/[0.02] pointer-events-none -rotate-12 select-none" />

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Section Header with Navigation Controls */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-amber-500/10 text-amber-900 border border-amber-500/20 mb-3 shadow-2xs">
                                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                                Client Testimonials &amp; Endorsements
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight mt-1">
                                What Industry Leaders Say About Us
                            </h2>
                            <p className="mt-2.5 text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                                Direct feedback from pharmaceutical executives, enterprise life-science leaders, and medical device innovators who trust NKB Regovanta for regulatory clearance, QMS readiness, and market access.
                            </p>
                        </div>

                        {/* Navigation Arrows & Counter */}
                        <div className="flex items-center gap-3 self-start md:self-end shrink-0">
                            <span className="text-[11px] font-bold text-gray-400 sm:hidden">
                                Swipe →
                            </span>
                            <span className="text-xs font-black text-gray-500 bg-white border border-gray-200/90 px-3.5 py-2 rounded-xl shadow-2xs select-none">
                                <span className="text-[#0b3a96] font-extrabold">{activeIndex + 1}</span> of {clientTestimonials.length}
                            </span>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => scroll("left")}
                                    disabled={!canScrollLeft}
                                    aria-label="Previous Testimonials"
                                    className="w-11 h-11 rounded-2xl border border-gray-200 bg-white text-navy flex items-center justify-center shadow-2xs hover:bg-[#0b3a96] hover:text-white hover:border-[#0b3a96] disabled:opacity-35 disabled:pointer-events-none transition-all duration-300 active:scale-95 cursor-pointer"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    disabled={!canScrollRight}
                                    aria-label="Next Testimonials"
                                    className="w-11 h-11 rounded-2xl border border-gray-200 bg-white text-navy flex items-center justify-center shadow-2xs hover:bg-[#0b3a96] hover:text-white hover:border-[#0b3a96] disabled:opacity-35 disabled:pointer-events-none transition-all duration-300 active:scale-95 cursor-pointer"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Left/Right Scrollable Track with Edge Masks */}
                    <div className="relative">
                        {/* Gradient Edge Fade Overlays */}
                        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent hidden xl:block" />
                        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-20 bg-gradient-to-l from-slate-50 via-slate-50/60 to-transparent hidden xl:block" />

                        {/* Scrollable Track */}
                        <div
                            ref={scrollRef}
                            onScroll={updateScrollState}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 px-1 scrollbar-none [-webkit-overflow-scrolling:touch] touch-pan-x overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                        >
                            {clientTestimonials.map((t) => (
                                <div
                                    key={t.id}
                                    className="w-[84vw] sm:w-[480px] lg:w-[540px] shrink-0 snap-start relative bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-8 shadow-xs hover:shadow-2xl hover:border-[#0b3a96]/40 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group overflow-hidden"
                                >
                                    {/* Top Gradient Accent Line */}
                                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0b3a96] via-blue-500 to-[#dca85b]" />

                                    {/* Background Watermark Quote */}
                                    <Quote className="absolute -bottom-4 -right-4 h-36 w-36 text-blue-50/80 group-hover:text-blue-100/70 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 pointer-events-none -z-0 select-none" />

                                    <div className="relative z-10">
                                        {/* Rating & Category Tag */}
                                        <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-2xs transition-transform duration-300 group-hover:scale-110"
                                                        style={{ transitionDelay: `${i * 50}ms` }}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-[10px] sm:text-[10.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#0b3a96] border border-blue-100/90 shadow-2xs">
                                                {t.tag}
                                            </span>
                                        </div>

                                        {/* Quote Icon & Verified Badge */}
                                        <div className="flex items-center justify-between gap-3 mb-5">
                                            <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0b3a96] group-hover:scale-110 group-hover:bg-[#0b3a96] group-hover:text-white transition-all duration-300 shadow-2xs">
                                                <Quote className="h-5 w-5 fill-current" />
                                            </div>
                                            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full shadow-2xs">
                                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                                                Verified Executive Endorsement
                                            </span>
                                        </div>

                                        {/* Main Quote Text */}
                                        <blockquote className="text-[15px] sm:text-[16px] text-navy/90 font-normal leading-relaxed italic mb-6 relative z-10 font-serif">
                                            &ldquo;{t.quote}&rdquo;
                                        </blockquote>

                                        {/* Key Highlights Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-gray-100">
                                            {t.keyStrengths.map((str) => (
                                                <span
                                                    key={str}
                                                    className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-slate-50 text-navy border border-gray-200/80 group-hover:border-[#0b3a96]/30 group-hover:bg-blue-50/50 transition-colors"
                                                >
                                                    ✓ {str}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Author Profile Info — Full Width */}
                                    <div className="relative z-10 pt-5 border-t border-gray-100/90 flex items-center gap-4 mt-auto">
                                        {t.logo ? (
                                            <div className="h-14 w-14 rounded-2xl bg-white border border-gray-200 shadow-2xs p-2 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-blue-200 transition-all duration-300">
                                                <img
                                                    src={t.logo}
                                                    alt={t.company}
                                                    className="max-h-10 max-w-full object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-[#0b3a96] to-navy text-white font-black flex items-center justify-center text-sm shadow-2xs shrink-0 border border-blue-400/30 group-hover:scale-105 transition-all duration-300">
                                                {t.initials}
                                            </div>
                                        )}
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center gap-2">
                                                <h4 className="text-base sm:text-lg font-black text-navy group-hover:text-[#0b3a96] transition-colors leading-tight">
                                                    {t.name}
                                                </h4>
                                                {t.countryCode && (
                                                    <img
                                                        src={`https://flagcdn.com/w40/${t.countryCode}.png`}
                                                        alt="Lithuania / EU"
                                                        title="Lithuania (EU)"
                                                        className="w-4 h-3 object-cover rounded-xs border border-gray-200 inline-block shadow-2xs"
                                                    />
                                                )}
                                            </div>
                                            <p className="text-xs sm:text-[13.5px] font-bold text-gray-700 mt-1 leading-snug">
                                                {t.title ? `${t.title}, ` : ""}{t.company}
                                            </p>
                                            <span className="text-[11px] font-semibold text-[#0b3a96] block mt-0.5">
                                                {t.sector} · {t.location}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Animated Gradient Underline Bar */}
                                    <div className="w-0 group-hover:w-full transition-all duration-700 h-0.5 bg-gradient-to-r from-[#0b3a96] via-blue-500 to-[#dca85b] mt-5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interactive Pagination Indicators */}
                    <div className="flex items-center justify-center gap-2.5 mt-8">
                        {clientTestimonials.map((t, idx) => (
                            <button
                                key={t.id}
                                onClick={() => scrollToIndex(idx)}
                                aria-label={`Go to testimonial from ${t.name}`}
                                className={`transition-all duration-500 rounded-full cursor-pointer ${
                                    activeIndex === idx
                                        ? "w-9 h-2.5 bg-gradient-to-r from-[#0b3a96] to-blue-500 shadow-2xs"
                                        : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>

                    {/* Bottom Trust Action Strip */}
                    <div className="mt-12 sm:mt-16 rounded-3xl bg-gradient-to-br from-navy via-[#0d2857] to-navy-deep text-white p-7 sm:p-9 shadow-xl relative overflow-hidden border border-blue-900/50">
                        {/* Decorative glow */}
                        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#dca85b]/10 rounded-full blur-2xl pointer-events-none" />
                        <div className="absolute -left-10 -top-10 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
                            <div className="text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 text-[#dca85b] text-xs font-black uppercase tracking-wider mb-2">
                                    <ShieldCheck className="h-4 w-4 text-[#dca85b]" />
                                    <span>Experience Since 2018 · 151+ Projects Completed</span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                                    Ready to Experience the Same High Standard of Regulatory Support?
                                </h3>
                                <p className="text-xs sm:text-sm text-white/75 mt-1.5 max-w-2xl leading-relaxed">
                                    Whether you need CDSCO registration in India, US FDA 510(k) clearances, EU MDR/IVDR compliance, or integrated cleanroom manufacturing solutions, our specialists ensure structured, responsive execution.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-[#dca85b] hover:bg-[#c9954a] text-navy px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all duration-300 group"
                                >
                                    <span>Schedule a Consultation</span>
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/case-studies"
                                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300"
                                >
                                    <span>View Case Studies</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}