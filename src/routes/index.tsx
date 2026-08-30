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
    ChevronRight,
    Search,
    SlidersHorizontal,
    Factory,
    Truck,
    Headphones,
    Building2,
    Sparkles,
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

export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "NKB Regovanta — Medical Device, IVD, CDSCO, US FDA 510(k) & EU MDR Regulatory Consultants" },
            {
                name: "description",
                content:
                    "NKB Regovanta is a premier global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing (MD-14/15, MD-3 to MD-9, Form 41/10), US FDA 510(k), EU MDR/IVDR, and Cosmetics compliance consulting firm.",
            },
            {
                name: "keywords",
                content:
                    "CDSCO Medical Device Import Licence, MD-14 application, MD-15 import licence, Class A GSR 777(E) registration, Investigational Device Import MD-18 MD-19, Class A & B manufacturing licence MD-3 MD-5, Class C & D manufacturing licence MD-7 MD-9, Loan manufacturing licence MD-4 MD-6, Indian Authorized Agent AIR IAA, Medical device regulatory consultant India, Drug Import Licence India, Form 41 CDSCO, Form 10 import licence, Plant Master File PMF, Drug Master File DMF, PC-PNDT Certificate registration, WPC ETA approval medical devices, IEC Code DGFT, AD Code ICEGATE, Free Sale Certificate FSC CDSCO, US FDA 510k submission consultant, FDA 510(k) clearance medical devices, eSTAR FDA dossier, De Novo classification, PMA Premarket Approval, US FDA US Agent services, MoCRA compliance support, EU MDR 2017/745 regulatory consultant, CE Marking medical devices Europe, EU IVDR 2017/746, EC REP European Authorized Representative, UK MHRA medical device registration, UK Responsible Person UKRP, UKCA marking, Australia TGA ARTG inclusion, Health Canada MDL MDEL, ANVISA Brazil, Saudi Arabia SFDA, UAE MOHAP, ISO 13485 implementation consultant, MDSAP audit readiness, FDA QMSR compliance, ISO 14971 Risk Management, CDSCO cosmetic import registration COS-1 COS-2, EU Cosmetic Responsible Person EU RP, NKB Regovanta, NKB Regovanta Solutions",
            },
            { property: "og:title", content: "NKB Regovanta — Medical Device, IVD, CDSCO, US FDA 510(k) & EU MDR Consultants" },
            {
                property: "og:description",
                content:
                    "Premier global regulatory affairs, quality systems (ISO 13485 / MDSAP), CDSCO licensing, US FDA 510(k), EU MDR/IVDR, Pharma & Cosmetics consulting.",
            },
            { property: "og:url", content: "https://www.nkbregovanta.com" },
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
                                Regulatory. Quality. Manufacturing. Market Access.
                            </p>

                            <h1 className="font-display font-extrabold leading-[1.05] text-navy">
                                <span className="block whitespace-nowrap" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                                    FROM FIRST IDEA TO
                                </span>
                                <span className="block whitespace-nowrap text-blue-700" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                                    GLOBAL MARKET ACCESS
                                </span>
                            </h1>

                            <p className="mt-4 text-[15.5px] sm:text-[16px] font-semibold text-navy leading-normal">
                                Regulatory, Quality, Manufacturing &amp; Market Access Solutions for Medical Devices, IVDs, Cosmetics &amp; Pharmaceuticals.
                            </p>
                            <p className="mt-3 text-[13.5px] leading-relaxed text-navy/70 font-medium">
                                We help startups and manufacturers navigate regulatory pathways,
                                build compliant quality systems, source GMP equipment, and bring innovative products to
                                international markets.
                            </p>

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
                                    OUR PRODUCTS (MANUFACTURING)
                                </h2>
                                <p className="mt-2 text-[14.5px] sm:text-[15.5px] text-gray-800 leading-relaxed font-medium">
                                    Integrated product, equipment and manufacturing solutions for pharmaceutical, healthcare and life-sciences organizations.
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

                    {/* Connecting More Customers Tagline */}
                    <div className="mt-10 sm:mt-12 text-center">
                        <div className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-[#0b3a96] bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 px-8 py-3 rounded-full border border-gray-200 shadow-2xs italic">
                            <Sparkles className="h-4 w-4 text-[#0b3a96]" />
                            <span>Connecting More Customers.....</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}