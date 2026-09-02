import { createFileRoute, Link } from "@tanstack/react-router";
import {
    ArrowRight,
    CheckCircle2,
    ChevronRight,
    FileText,
    Shield,
    Globe2,
    ClipboardList,
    Search,
    Target,
    FlaskConical,
    Send,
    MessageSquare,
    Wrench,
    TrendingUp,
    CalendarDays,
    CheckCircle,
    Users,
    Layers,
    Network,
    BadgeCheck,
    LayoutList,
} from "lucide-react";

/* ── Route ── */

export const Route = createFileRoute("/services/usa/")({
    head: () => ({
        meta: [
            { title: "US FDA 510(k) Consultant, eSTAR Dossier, De Novo, PMA & US Agent | NKB Regovanta" },
            {
                name: "description",
                content: "US FDA 510k submission consultant & medical device regulatory services. End-to-end guidance for FDA 510(k) clearance, eSTAR FDA dossier compilation, FDA De Novo classification, PMA Premarket Approval, US FDA US Agent services for foreign facilities, FDA Establishment Registration & Device Listing (FURLS), FDA Official Correspondent, 513(g) Information Request, and Q-Submission / Pre-Sub.",
            },
            {
                name: "keywords",
                content: "US FDA 510k submission consultant, FDA 510(k) clearance medical devices, eSTAR FDA dossier compilation, FDA De Novo classification, PMA Premarket Approval FDA, US FDA US Agent services for foreign facilities, FDA Establishment Registration and Device Listing (FURLS), FDA Official Correspondent, 513(g) Information Request, FDA Q-Submission / Pre-Sub, MoCRA compliance support, NKB Regovanta",
            },
            { property: "og:title", content: "US FDA 510(k) Clearance & US Agent Consulting | NKB Regovanta" },
            { property: "og:description", content: "Complete FDA regulatory strategy, eSTAR dossier compilation, 510(k) clearance, US Agent representation, and FURLS registration." },
            { property: "og:url", content: "https://www.nkbregovanta.com/services/usa" },
        ],
        links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/usa" }],
    }),
    component: USAMarket,
});

/* ── Static Data ── */

const quickStats = [
    { label: "510(k) Clearance", desc: "No routine expiration; ongoing compliance and change assessment apply." },
    { label: "Establishment Registration", desc: "Annual renewal required." },
    { label: "QMS Requirement", desc: "FDA QMSR – 21 CFR Part 820, incorporating ISO 13485:2016" },
];

const regulatoryServices = [
    { icon: LayoutList, label: "Medical Device\nClassification\nUSA", to: "/services/usa/classification" },
    { icon: FileText, label: "510(k)\nPremarket\nNotification", to: "/services/usa/510k" },
    { icon: Search, label: "Special 510(k) &\nChange\nAssessment", to: "/services/usa/post-clearance-lifecycle" },
    { icon: Layers, label: "De Novo\nClassification", to: "/services/usa/de-novo" },
    { icon: Shield, label: "PMA\nSupport", to: "/services/usa/pma" },
    { icon: ClipboardList, label: "eSTAR Dossier\nPreparation", to: "/services/usa/e-star" },
    { icon: MessageSquare, label: "Q-Submission /\nPre-Submission", to: "/services/usa/q-submission" },
    { icon: Globe2, label: "US Agent\nServices", to: "/services/usa/agent-service" },
    { icon: BadgeCheck, label: "Registration\n& Listing", to: "/services/usa/establishment-registration" },
];

const submissionSteps = [
    { num: "01", label: "Assess", desc: "Evaluate device, intended use, classification, applicable pathway & documentation gaps" },
    { num: "02", label: "Strategize", desc: "Predicate strategy, testing strategy & regulatory roadmap" },
    { num: "03", label: "Test", desc: "Test planning & laboratory coordination" },
    { num: "04", label: "Prepare", desc: "eSTAR dossier & supporting technical documentation" },
    { num: "05", label: "Submit", desc: "FDA submission through CDRH Portal" },
    { num: "06", label: "Respond", desc: "Address FDA questions, deficiencies & additional information requests" },
    { num: "07", label: "Maintain", desc: "Post-clearance support, change assessment & lifecycle management" },
];

const serviceCards = [
    {
        icon: LayoutList,
        title: "Product Classification &\nRegulatory Pathway Assessment",
        desc: "Before testing begins or a dossier is drafted, we establish the device's regulatory identity: classification, regulation number, product code, applicable controls, exemption status and likely premarket pathway. This early assessment prevents costly work from being built around the wrong FDA route.",
        to: "/services/usa/classification",
    },
    {
        icon: FileText,
        title: "510(k) Premarket\nNotification Support",
        desc: "We structure the 510(k) around the substantial equivalence decision FDA must make. Classification, predicate eligibility, technological differences, evidence requirements and labeling are aligned before the eSTAR submission is built.",
        to: "/services/usa/510k",
    },
    {
        icon: Target,
        title: "Predicate & Substantial\nEquivalence Strategy",
        desc: "We evaluate whether a proposed predicate can withstand FDA's substantial equivalence analysis, then trace every meaningful technological difference into the evidence needed to support it.",
        to: "/services/usa/predicate-strategy",
    },
    {
        icon: FlaskConical,
        title: "Testing Strategy &\nLaboratory Coordination",
        desc: "We design the testing plan backward from the FDA decision the evidence must support — challenging configuration, worst-case rationale, standards, acceptance criteria and whether the resulting data will actually answer the regulatory question.",
        to: "/services/usa/testing-strategy",
    },
    {
        icon: ClipboardList,
        title: "eSTAR Dossier\nPreparation",
        desc: "We treat eSTAR as the container for the regulatory argument — not as the strategy itself. The dossier is built only after pathway, predicate and evidence requirements are clear, then checked for cross-section consistency.",
        to: "/services/usa/e-star",
    },
    {
        icon: MessageSquare,
        title: "FDA Q-Submission\n& Pre-Submission",
        desc: "We determine which uncertainties are worth taking to FDA, frame focused questions and provide enough technical context for FDA feedback to be actionable before major testing or submission decisions are locked.",
        to: "/services/usa/q-submission",
    },
    {
        icon: Layers,
        title: "De Novo & PMA\nSupport",
        desc: "For novel or higher-risk devices, we build the regulatory strategy around the evidence FDA will need to reach a classification or approval decision, integrating risk, controls, non-clinical evidence, clinical evidence and FDA interaction.",
        to: "/services/usa/de-novo",
    },
    {
        icon: Send,
        title: "FDA Additional Information\n& Deficiency Response",
        desc: "We deconstruct each FDA question to identify the underlying regulatory concern, trace it back through the submission and determine whether the real issue is evidence, study design, predicate logic, labeling, consistency or presentation.",
        to: "/services/usa/deficiency-response",
    },
    {
        icon: Shield,
        title: "QMSR & FDA Inspection\nPreparation",
        desc: "We test whether the quality system can produce objective evidence when an FDA investigator follows a real transaction through the organization — not merely whether the required SOPs exist.",
        to: "/services/usa/qmsr-inspection",
    },
    {
        icon: Globe2,
        title: "US Agent Services",
        desc: "We provide US Agent representation as part of a broader regulatory interface — supporting FDA communication, registration coordination and escalation when the foreign manufacturer needs a reliable US regulatory contact.",
        to: "/services/usa/agent-service",
    },
    {
        icon: BadgeCheck,
        title: "FDA Establishment Registration\n& Device Listing",
        desc: "We support initial registration, device listing and annual maintenance while checking that the administrative registration activity remains aligned with the device's actual regulatory status and market authorization pathway.",
        to: "/services/usa/establishment-registration",
    },
    {
        icon: Wrench,
        title: "Post-Clearance & Device\nLifecycle Support",
        desc: "We assess the regulatory impact of device changes before implementation — focusing on whether the modification affects intended use, technological characteristics, safety, effectiveness, performance or the basis of the original clearance.",
        to: "/services/usa/post-clearance-lifecycle",
    },
    {
        icon: TrendingUp,
        title: "Planning for Global\nMarket Access",
        desc: "We plan regulatory evidence across target markets so common testing and technical documentation can be leveraged where scientifically and regulatorily appropriate, while market-specific gaps are identified early.",
        to: "/services/usa/global-market-access",
    },
];

const whyChoose = [
    "Boutique regulatory consulting with senior level, hands-on support",
    "Strategy before submission – not just dossier preparation",
    "Medical Device & IVD expertise across all risk classes",
    "End-to-end FDA support from strategy to clearance and beyond",
    "Testing coordination with trusted laboratory network",
    "Global perspective to support multi-market regulatory strategies",
];

const homeStats = [
    { icon: CalendarDays, value: "2018", label: "Experience Since", sub: "Regulatory & Quality\nExperience" },
    { icon: CheckCircle, value: "51+", label: "Completed", sub: "Regulatory & Quality\nProjects" },
    { icon: Users, value: "21+", label: "Supported", sub: "Global\nClients" },
    { icon: Globe2, value: "15+", label: "Supported", sub: "International\nCountries" },
    { icon: Layers, value: "4", label: "Focus Areas", sub: "Core\nIndustries" },
    { icon: Network, value: "Global", label: "India Based", sub: "Connected Network\nof Experts" },
];

/* ── Component ── */

function USAMarket() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{ "@context": "https://schema.org", "@type": "Service", "name": "US FDA 510(k) Regulatory Consulting", "url": "https://www.nkbregovanta.com/services/usa", "description": "FDA 510(k), De Novo, PMA, Q-Submission, and US Agent services for medical device companies seeking US market access.", "provider": { "@type": "ProfessionalService", "name": "NKB Regovanta Solutions Pvt. Ltd.", "url": "https://www.nkbregovanta.com" } }, { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nkbregovanta.com" }, { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.nkbregovanta.com/services" }, { "@type": "ListItem", "position": 3, "name": "USA FDA", "item": "https://www.nkbregovanta.com/services/usa" }] }]) }} />

            {/* ── HERO ── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-slate-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10">
                    <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
                        <Link to="/" className="hover:text-navy transition-colors">Home</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#e02020]">United States</span>
                        <span className="text-navy/40 mx-1">|</span>
                        <span className="text-navy/70">US FDA Regulatory &amp; Market Access</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                        <div className="max-w-xl">
                            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4" style={{ fontSize: "clamp(26px, 3.5vw, 42px)" }}>
                                US FDA 510(k), De Novo,<br />PMA &amp; Regulatory Consulting<br />for Medical Devices and IVDs
                            </h1>
                            <p className="text-[14px] leading-relaxed text-navy/70 font-medium mb-7 max-w-lg">
                                From regulatory strategy and predicate analysis to testing, eSTAR dossier preparation, FDA submission and deficiency response – we provide end-to-end support to help you achieve US market authorization.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <Link to="/contact" className="inline-flex items-center gap-2 bg-navy text-white text-[12.5px] font-semibold px-5 py-2.5 rounded-sm hover:bg-navy/90 transition-all shadow-sm">
                                    <Send className="h-3.5 w-3.5" /> Discuss Your FDA Submission
                                </Link>
                                <Link to="/contact" className="inline-flex items-center gap-2 border border-navy/50 text-navy text-[12.5px] font-semibold px-5 py-2.5 rounded-sm hover:bg-blue-50 transition-all">
                                    Request Regulatory Assessment
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-5 text-[11.5px] font-semibold text-navy/70">
                                <div className="flex items-center gap-2"><Users className="h-4 w-4 text-navy/50" /><span>Boutique<br />Regulatory Consulting</span></div>
                                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-navy/50" /><span>Medical Devices<br />&amp; IVD Expertise</span></div>
                                <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-navy/50" /><span>Global Perspective,<br />Local Understanding</span></div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 lg:pt-4">
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 h-44 flex items-end">
                                <img src="https://flagcdn.com/w1280/us.png" alt="United States Flag" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                                <div className="relative z-10 p-5">
                                    <p className="text-white font-extrabold text-lg leading-tight">US FDA Regulatory &amp; Market Access</p>
                                    <p className="text-white/70 text-xs font-medium">CDRH · 21 CFR · eSTAR · FURLS</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                {quickStats.map((s) => (
                                    <div key={s.label} className="bg-white rounded-xl border border-gray-200/80 p-4 shadow-xs">
                                        <p className="text-[12px] font-extrabold text-navy leading-snug mb-1">{s.label}</p>
                                        <p className="text-[11px] text-navy/60 leading-snug">{s.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OUR US FDA REGULATORY SERVICES ── */}
            <section className="py-14 bg-white border-t border-border/40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-xl sm:text-2xl font-extrabold text-navy mb-10">Our US FDA Regulatory Services</h2>
                    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-4 sm:gap-6">
                        {regulatoryServices.map((svc) => (
                            <Link
                                key={svc.label}
                                to={svc.to}
                                className="flex flex-col items-center text-center gap-2.5 group"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-navy group-hover:border-navy transition-all duration-200 shadow-xs">
                                    <svc.icon className="h-6 w-6 text-navy group-hover:text-white transition-colors" strokeWidth={1.75} />
                                </div>
                                <p className="text-[10.5px] font-bold text-navy/80 leading-snug whitespace-pre-line group-hover:text-navy transition-colors">
                                    {svc.label}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SUBMISSION APPROACH ── */}
            <section className="py-14 bg-slate-50 border-t border-border/40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-xl sm:text-2xl font-extrabold text-navy mb-10">Our US FDA Submission Approach</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                        {submissionSteps.map((step, idx) => (
                            <div key={step.num} className="flex flex-col items-center text-center gap-2 relative">
                                {idx < submissionSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-5 left-[calc(100%-8px)] w-4 z-10">
                                        <ArrowRight className="h-3.5 w-3.5 text-navy/30" />
                                    </div>
                                )}
                                <div className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-[11px] font-extrabold shadow-sm">{step.num}</div>
                                <p className="text-[12px] font-extrabold text-navy">{step.label}</p>
                                <p className="text-[10.5px] text-navy/60 leading-snug">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SERVICE CARDS GRID ── */}
            <section className="py-14 bg-white border-t border-border/40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                            Comprehensive Expertise
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mt-3">
                            Specialized US FDA Regulatory Solutions
                        </h2>
                        <p className="text-sm text-navy/70 mt-2 font-medium">
                            End-to-end support across every phase of device classification, testing, clearance, and post-market compliance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {serviceCards.map((card) => (
                            <div key={card.title} className="flex flex-col p-5 rounded-2xl border border-gray-200/80 bg-white hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="flex items-start gap-3 mb-3.5">
                                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:border-navy transition-all duration-300 shadow-2xs">
                                        <card.icon className="h-5 w-5 text-[#0b3a96] group-hover:text-white transition-colors" strokeWidth={1.75} />
                                    </div>
                                    <h3 className="text-[13px] font-extrabold text-navy leading-snug whitespace-pre-line pt-0.5 group-hover:text-[#0b3a96] transition-colors">
                                        {card.title}
                                    </h3>
                                </div>
                                <p className="text-[12px] text-navy/70 leading-relaxed flex-1 mb-4 font-medium">
                                    {card.desc}
                                </p>
                                <Link to={card.to} className="inline-flex items-center gap-1.5 text-[12px] font-extrabold text-[#0b3a96] hover:text-[#082b70] pt-2 border-t border-gray-100 group/link">
                                    Learn more <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHY CHOOSE + CTA ── */}
            <section className="py-14 bg-slate-50 border-t border-border/40">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-navy mb-6">Why Manufacturers Choose<br />NKB Regovanta</h2>
                            <ul className="space-y-3.5">
                                {whyChoose.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-4.5 w-4.5 text-[#0b3a96] mt-0.5 shrink-0" strokeWidth={2.5} />
                                        <span className="text-[13.5px] text-navy/80 font-medium leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-navy rounded-2xl p-8 text-white shadow-lg">
                            <h3 className="text-xl font-extrabold mb-3">Ready to Enter the US Market?</h3>
                            <p className="text-[13.5px] text-white/80 leading-relaxed mb-7">Let our US FDA regulatory experts guide you through the right pathway with confidence.</p>
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-navy text-[13px] font-bold px-6 py-3 rounded-sm hover:bg-blue-50 transition-all shadow-sm">
                                Talk to a Regulatory Expert <ArrowRight className="h-4 w-4" />
                            </Link>
                            <div className="mt-5 pt-5 border-t border-white/20 text-[12px] text-white/60 space-y-1">
                                <p>Email: <a href="mailto:info@nkbregovanta.com" className="text-white/80 hover:text-white transition-colors">info@nkbregovanta.com</a></p>
                                <p>Phone: <a href="tel:+911141005051" className="text-white/80 hover:text-white transition-colors">+91 11 4100 5051</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS BAR ── */}
            <section className="bg-navy text-white">
                <div className="mx-auto max-w-[1400px] px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
                        {homeStats.map((stat) => (
                            <div key={stat.value} className="flex flex-col items-center text-center p-6 xl:p-8">
                                <stat.icon className="h-8 w-8 stroke-[1.5] text-blue-300 mb-4" />
                                <p className="text-[26px] font-bold leading-none mb-2">{stat.value}</p>
                                <p className="text-[10px] uppercase tracking-widest text-white/60 font-semibold mb-1">{stat.label}</p>
                                <p className="text-[12px] opacity-80 leading-snug whitespace-pre-line">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
