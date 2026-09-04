import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Factory,
  FileCheck2,
  FileText,
  FlaskConical,
  Globe2,
  HelpCircle,
  Layers,
  Monitor,
  Package,
  RefreshCw,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Target,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  Activity,
  AlertTriangle,
  Scale,
  Languages,
  Clock,
  Landmark,
  Network,
  ShieldAlert,
  Handshake,
  Check,
  FileCode,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import saudiHeroImg from "@/assets/saudi-hero-riyadh.png";

export const Route = createFileRoute("/services/saudi-arabia/")({
  head: () => ({
    meta: [
      {
        title:
          "Saudi Arabia SFDA Medical Device Registration & MDMA Consultant | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "SFDA Medical Device Marketing Authorization (MDMA) consulting in Saudi Arabia. Classification (Class A-D), Saudi Authorized Representative (AR), MDS-REQ 1 technical files, establishment licensing, and post-market vigilance.",
      },
      { name: "keywords", content: "Saudi Arabia SFDA Medical Device Registration & MDMA Consultant, services saudi arabia, NKB Regovanta, regulatory consultant, medical device" },
      { property: "og:title", content: "Saudi Arabia SFDA Medical Device Registration & MDMA Consultant | NKB Regovanta" },
      { property: "og:description", content: "SFDA Medical Device Marketing Authorization (MDMA) consulting in Saudi Arabia. Classification (Class A-D), Saudi Authorized Representative (AR), MDS-REQ 1 technical files, establishment licensing, and post-market vigi..." },
      { property: "og:url", content: "https://www.nkbregovanta.com/services/saudi-arabia" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Saudi Arabia SFDA Medical Device Registration & MDMA Consultant | NKB Regovanta" },
      { name: "twitter:description", content: "SFDA Medical Device Marketing Authorization (MDMA) consulting in Saudi Arabia. Classification (Class A-D), Saudi Authorized Representative (AR), MDS-REQ 1 technical files, establishment licensing, and post-market vigi..." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/saudi-arabia" }],
  }),
  component: SaudiArabiaHubPage,
});

/* ─────────────────────────────────────────────────────────────
   DATA DEFINITIONS MATCHING MOCKUP & COMPREHENSIVE TEXT
───────────────────────────────────────────────────────────── */

const heroChecklist = [
  "SFDA Regulatory Strategy & Classification",
  "Testing Strategy & SFDA-Recognized Labs",
  "MDMA Application & Technical File (GHAD)",
  "IVD Registration & Performance Evidence",
  "Saudi Authorized Representative (AR) Services",
  "Post-Market Surveillance, Vigilance & FSCA",
  "Establishment Licensing (MDS-REQ 9)",
  "End-to-End Saudi Market Access Support",
];

const trustBarItems = [
  {
    icon: Target,
    title: "SFDA Regulatory Expertise",
    desc: "Experienced team with deep knowledge of Saudi regulations",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Support",
    desc: "From qualification to MDMA approval & post-market vigilance",
  },
  {
    icon: UserCheck,
    title: "Local AR Representation",
    desc: "Licensed Authorized Representative in the Kingdom",
  },
  {
    icon: TrendingUp,
    title: "Faster Approvals & Entry",
    desc: "Proven submission strategies for accelerated MDMA issuance",
  },
  {
    icon: Award,
    title: "Compliance You Can Trust",
    desc: "Strict adherence to MDS-REQ 1 & Medical Devices Law",
  },
];

const quickNavItems = [
  { title: "Regulatory Strategy & Classification", to: "/services/saudi-arabia/classification", icon: Target },
  { title: "MDMA Application & Technical File", to: "/services/saudi-arabia/mdma", icon: FileText },
  { title: "Authorized Representative Services", to: "/services/saudi-arabia/authorized-representative", icon: Users },
  { title: "Establishment Licensing", to: "/services/saudi-arabia/establishment-licensing", icon: Building2 },
  { title: "Technical Documentation", to: "/services/saudi-arabia/technical-documentation", icon: BookOpen },
  { title: "Testing & Laboratory Support", to: "/services/saudi-arabia/testing-strategy", icon: FlaskConical },
  { title: "Post-Market Compliance", to: "/services/saudi-arabia/post-market", icon: ShieldCheck },
  { title: "Change, Variation & Renewals", to: "/services/saudi-arabia/change-management", icon: RefreshCw },
];

const services13 = [
  {
    num: "1",
    id: "sec-1",
    to: "/services/saudi-arabia/classification",
    icon: Target,
    title: "1. SFDA Regulatory Strategy\n& Product Classification",
    bullets: [
      "Product classification (Class A, B, C, D) based on risk rules",
      "Identification of applicable guidance & technical requirements",
      "Regulatory roadmap with timelines and deliverables",
      "Gap assessment & compliance strategy under MDS-REQ 1",
    ],
  },
  {
    num: "2",
    id: "sec-2",
    to: "/services/saudi-arabia/mdma",
    icon: FileText,
    title: "2. MDMA Application\n& Technical File Strategy",
    bullets: [
      "Application form & administrative data in GHAD",
      "Device description & intended use alignment",
      "Risk management file (ISO 14971) & Essential Principles",
      "QMS certificate (ISO 13485) & Free Sale Certificate (FSC)",
    ],
  },
  {
    num: "3",
    id: "sec-3",
    to: "/services/saudi-arabia/authorized-representative",
    icon: Users,
    title: "3. Saudi Authorized\nRepresentative Services",
    bullets: [
      "Legal representation & official SFDA correspondence",
      "Submission, follow-up & tracking in GHAD portal",
      "Receipt of official communications & technical queries",
      "Liaison during technical review, audits & renewals",
    ],
  },
  {
    num: "4",
    id: "sec-4",
    to: "/services/saudi-arabia/establishment-licensing",
    icon: Building2,
    title: "4. Medical Device Establishment\nLicensing & Local Supply Chain",
    bullets: [
      "Establishment license (Manufacturer / Importer / Distributor)",
      "Local site registration & approval under MDS-REQ 9",
      "QMS site compliance & warehouse storage review",
      "Local supply chain traceability & compliance",
    ],
  },
  {
    num: "5",
    id: "sec-5",
    to: "/services/saudi-arabia/technical-documentation",
    icon: BookOpen,
    title: "5. Technical Documentation\n& Essential Principles",
    bullets: [
      "Device description, intended purpose & specifications",
      "Design & manufacturing process information",
      "Essential Principles checklist & verification evidence",
      "Biocompatibility, sterilization, electrical safety & EMC",
    ],
  },
  {
    num: "6",
    id: "sec-6",
    to: "/services/saudi-arabia/testing-strategy",
    icon: FlaskConical,
    title: "6. Testing Strategy &\nLaboratory Coordination",
    bullets: [
      "Test plan based on risk, standards & device type",
      "Coordination with SFDA-recognized accredited labs",
      "Electrical safety, EMC, performance & reliability",
      "Biocompatibility & sterilization validation review",
    ],
  },
  {
    num: "7",
    id: "sec-7",
    to: "/services/saudi-arabia/ivd",
    icon: Syringe,
    title: "7. IVD Registration &\nPerformance Evidence",
    bullets: [
      "IVD classification (Class A, B, C, D) by risk rules",
      "Analytical performance studies (LoD, specificity, precision)",
      "Clinical performance evaluation & comparator data",
      "Arabic labeling & Instructions for Use (IFU)",
    ],
  },
  {
    num: "8",
    id: "sec-8",
    to: "/services/saudi-arabia/software",
    icon: Monitor,
    title: "8. SaMD / Software /\nAI & Cybersecurity",
    bullets: [
      "SaMD classification & GHAD submission strategy",
      "Software life cycle documentation (IEC 62304)",
      "Cybersecurity & data protection risk management",
      "AI/ML model transparency & clinical validation",
    ],
  },
  {
    num: "9",
    id: "sec-9",
    to: "/services/saudi-arabia/labeling",
    icon: Languages,
    title: "9. Labeling, IFU, UDI &\nAdvertising Compliance",
    bullets: [
      "Arabic labeling & IFU translation preparation",
      "Saudi-DI UDI assignment & database submission",
      "Packaging compliance & symbol standardisation",
      "Advertising & promotion compliance (MDS-REQ 8)",
    ],
  },
  {
    num: "10",
    id: "sec-10",
    to: "/services/saudi-arabia/post-market",
    icon: ShieldCheck,
    title: "10. Post-Market Surveillance,\nVigilance & FSCA",
    bullets: [
      "PMS plan development & customer feedback tracking",
      "Adverse event reporting to SFDA vigilance portal",
      "Field Safety Corrective Actions (FSCA) & Recall support",
      "Trend analysis & Annual PMS report preparation",
    ],
  },
  {
    num: "11",
    id: "sec-11",
    to: "/services/saudi-arabia/inspection",
    icon: Search,
    title: "11. SFDA Inspection &\nQMS Readiness",
    bullets: [
      "Pre-audit gap assessment & mock inspections",
      "QMS readiness (MDS-REQ 10 / ISO 13485)",
      "Internal audit & management review support",
      "Supplier & CAPA audit readiness & close-out",
    ],
  },
  {
    num: "12",
    id: "sec-12",
    to: "/services/saudi-arabia/change-management",
    icon: RefreshCw,
    title: "12. Changes, Variations,\nRenewal & Lifecycle Support",
    bullets: [
      "Change classification & regulatory impact assessment",
      "Variation submission via GHAD portal",
      "MDMA registration & establishment license renewal",
      "Technical file updates & lifecycle maintenance",
    ],
  },
  {
    num: "13",
    id: "sec-13",
    to: "/services/saudi-arabia/sfda-queries",
    icon: AlertTriangle,
    title: "13. SFDA Queries, Deficiency\nResponse & Technical Review",
    bullets: [
      "Handling SFDA inquiries & deficiency letters",
      "Deficiency response & technical rebuttal drafting",
      "Technical review meetings & liaison support",
      "Document re-submission & time-bound closure",
    ],
  },
];

const processSteps = [
  { step: "1", title: "Strategy & Classification", desc: "Confirm product status, intended purpose, classification and Saudi market-access route." },
  { step: "2", title: "Dossier Preparation", desc: "Compile technical file, Essential Principles mapping, QMS and Arabic translations." },
  { step: "3", title: "Submission to SFDA", desc: "Submit MDMA application via unified GHAD electronic portal through Saudi AR." },
  { step: "4", title: "SFDA Review & Queries", desc: "Respond to technical questions, deficiency letters and inspection observations." },
  { step: "5", title: "Approval (MDMA)", desc: "Receive official Medical Devices Marketing Authorization certificate from SFDA." },
  { step: "6", title: "Post-Market Compliance", desc: "Maintain vigilance, Saudi-DI UDI, FSCA, renewals, and lifecycle change control." },
];

const faqs = [
  {
    q: "What is MDMA in Saudi Arabia?",
    a: "MDMA is the Saudi Food and Drug Authority marketing authorization for medical devices that are permitted to be placed on the Saudi market. The route is supported by device classification, technical documentation, safety and performance evidence and the applicable local regulatory structure.",
  },
  {
    q: "How are medical devices classified in Saudi Arabia?",
    a: "SFDA uses a risk-based Class A, B, C and D framework. The manufacturer is responsible for determining the applicable class and rule, considering intended purpose, risk, duration, invasiveness and other device characteristics.",
  },
  {
    q: "How are IVDs classified in Saudi Arabia?",
    a: "IVD medical devices are classified as Class A, B, C or D based on individual and public-health risk. The intended purpose, analyte or marker, clinical context and target population are central to the classification.",
  },
  {
    q: "Does an overseas manufacturer need a Saudi Authorized Representative?",
    a: "A manufacturer established outside Saudi Arabia must operate through the applicable Saudi Authorized Representative framework. The AR is a Saudi-based legal person authorized to represent the manufacturer with respect to the Medical Devices Law and its Implementing Regulation.",
  },
  {
    q: "Is an Authorized Representative the same as an importer?",
    a: "No. The Authorized Representative is the manufacturer's legal regulatory representative in the Kingdom, while importers and distributors perform supply-chain activities and have their own establishment and compliance obligations under MDS-REQ 9.",
  },
  {
    q: "What is included in the MDMA technical file?",
    a: "The technical file can include device description, intended purpose, classification rationale, essential-principles evidence, risk management, verification and validation, clinical or performance evidence, QMS information, labeling and other product-specific evidence required by MDS-REQ 1.",
  },
  {
    q: "Can NKB Regovanta coordinate testing laboratories?",
    a: "Yes. Where external testing is required, we can help define the regulatory testing strategy, coordinate with established laboratories, review study protocols and assess resulting reports for use in the Saudi regulatory dossier.",
  },
  {
    q: "Can an existing EU or FDA dossier be reused for Saudi Arabia?",
    a: "Existing international evidence may often be leveraged, but it should be mapped against SFDA requirements, the Saudi classification, intended purpose, essential principles, local labeling and current technical-file expectations.",
  },
  {
    q: "Does SFDA regulate post-market safety after MDMA approval?",
    a: "Yes. SFDA monitors devices throughout the lifecycle. Manufacturers and local regulatory stakeholders must maintain systems for complaints, incidents, adverse-event assessment, field safety corrective actions and other post-market obligations.",
  },
  {
    q: "Can changes after approval affect the MDMA?",
    a: "Yes. Changes to intended purpose, design, software, manufacturing, suppliers, sterilization, labeling, performance evidence or local representation may affect the technical file or regulatory record and should be assessed before implementation.",
  },
  {
    q: "Does SFDA inspect medical-device establishments?",
    a: "Yes. SFDA has requirements for establishment licensing, inspections and quality-management systems (MDS-REQ 10). The inspection scope depends on the establishment activity and applicable regulatory requirements.",
  },
  {
    q: "Are medical-device advertisements regulated in Saudi Arabia?",
    a: "Yes. Medical-device advertising and awareness/charitable campaigns are subject to SFDA controls (MDS-REQ 8), and promotional claims should remain consistent with the authorized intended purpose and supporting evidence.",
  },
];

function SaudiArabiaHubPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Matching Picture Mockup with Riyadh Graphic)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-8 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mb-4">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-navy font-bold">Saudi Arabia</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#051833] tracking-tight leading-[1.12] mb-2">
                Saudi Arabia SFDA Medical Device Registration &amp; MDMA
              </h1>
              <p className="text-[14.5px] sm:text-[16px] font-bold text-[#0b7261] mb-3">
                Your Partner for Successful Market Access in Saudi Arabia
              </p>
              <p className="text-[12.5px] sm:text-[13px] text-gray-600 font-medium leading-relaxed mb-6 max-w-2xl">
                We help medical device, IVD and software manufacturers achieve SFDA registration, MDMA approval and long-term compliance in Saudi Arabia through expert strategy, robust documentation and end-to-end regulatory support.
              </p>

              {/* 8 Checkmarks (2 columns of 4) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                {heroChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11.5px] sm:text-[12px] text-gray-700 font-medium">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0b7261] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* 2 Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all shadow-xs"
                >
                  Discuss Your Saudi Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#sec-1"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-gray-300 text-navy text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all"
                >
                  Our Saudi Services <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Riyadh Graphic with Flag and SFDA Shield */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-md border border-gray-200/80">
                <img
                  src={saudiHeroImg}
                  alt="SFDA Medical Device Registration Saudi Arabia Riyadh"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. TRUST STATS BAR (5 Circular Badges - Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200/80 py-4 shadow-2xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustBarItems.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-full border border-gray-300 bg-slate-50 flex items-center justify-center shrink-0 text-navy mt-0.5 shadow-2xs">
                  <item.icon className="h-3.5 w-3.5 text-navy/80" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-navy leading-tight">{item.title}</p>
                  <p className="text-[9.5px] text-gray-500 leading-tight mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. CORE SFDA & MDMA REGULATORY SERVICES (Quick Navigation Bar)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 border-b border-gray-200/80 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h3 className="text-xs font-extrabold text-navy uppercase tracking-wider">
              Our Core SFDA &amp; MDMA Regulatory Services
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 text-center">
            {quickNavItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="p-2.5 rounded-xl bg-white border border-gray-200/90 hover:border-teal-400 hover:shadow-2xs transition-all flex flex-col items-center justify-center group"
              >
                <item.icon className="h-4 w-4 text-[#0b7261] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-navy leading-tight">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. 13 SERVICE CARDS GRID (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-navy tracking-tight">
              Complete SFDA Regulatory Services Suite
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {services13.map((card) => (
              <div
                key={card.num}
                className="flex flex-col justify-between p-4 rounded-xl border border-gray-200/90 bg-white hover:shadow-md hover:border-teal-300 transition-all duration-200 shadow-2xs group"
              >
                <div>
                  <div className="w-8 h-8 rounded-full border border-gray-300 bg-slate-50 flex items-center justify-center mb-2.5 text-navy shadow-2xs">
                    <card.icon className="h-4 w-4 text-[#0b7261]" strokeWidth={2} />
                  </div>
                  <h3 className="text-xs font-extrabold text-navy leading-snug whitespace-pre-line mb-2.5">
                    {card.title}
                  </h3>
                  <ul className="space-y-1 text-[10.5px] text-gray-600 font-medium leading-tight mb-3">
                    {card.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-1">
                        <span className="text-gray-400 font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-gray-100">
                  <Link
                    to={card.to}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0b7261] hover:text-[#095c4e] group-hover:translate-x-0.5 transition-transform"
                  >
                    Learn more <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. PROCESS FLOW (6 Steps - Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-slate-50 border-t border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-center text-lg sm:text-xl font-extrabold text-navy mb-6">
            Our End-to-End SFDA Regulatory Process
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-gray-200 text-center shadow-2xs flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-xs font-bold mb-2.5">
                  {step.step}
                </div>
                <h4 className="text-[11.5px] font-extrabold text-navy mb-1">{step.title}</h4>
                <p className="text-[10px] text-gray-500 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. WHY CHOOSE NKB (Dark Navy Card) + READY TO ENTER (Green Card)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Why Choose NKB Regovanta for Saudi Arabia? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#051833] text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-4">
                  Why Choose NKB Regovanta for Saudi Arabia?
                </h3>
                <div className="space-y-2.5">
                  {[
                    "Deep expertise in SFDA regulations & MDMA pathway",
                    "Strong local presence through our Authorized Representative",
                    "Proven track record for MD, IVD, SaMD & AI devices",
                    "End-to-end regulatory & compliance support",
                    "Practical, risk-based & business-focused approach",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Ready to Enter the Saudi Market? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-800 to-[#0b7261] text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Ready to Enter the Saudi Market?
                </h3>
                <p className="text-xs text-white/90 mb-5 leading-relaxed">
                  Partner with NKB Regovanta for seamless SFDA registration, compliance and market success.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-navy text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-xs"
                >
                  Contact Our Saudi Experts Today! <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. DEEP-DIVE REGULATORY MODULES (Full Text Sections 1 to 13)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-slate-50/70 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Comprehensive SFDA Regulatory &amp; MDMA Access
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Explore our in-depth methodologies, strategic frameworks, and regulatory decision pathways for the Kingdom of Saudi Arabia.
            </p>
          </div>

          {/* Section 1: Classification */}
          <div id="sec-1" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 01
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              1. SFDA Regulatory Strategy &amp; Product Classification
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Saudi Arabia uses a risk-based classification framework for medical devices. Devices other than IVDs are classified as Class A, B, C or D, with additional distinctions for certain Class A sterile, measuring and reusable surgical instruments. IVDs are also classified from Class A through Class D based on individual and public-health risk.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Classification Drivers</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Product qualification and regulatory-status assessment</li>
                  <li>• Intended purpose, indication and claims review</li>
                  <li>• Class A, B, C and D classification assessment for medical devices</li>
                  <li>• IVD Class A-D classification assessment</li>
                  <li>• Accessory, system and combination considerations</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Scope</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Software and SaMD classification strategy</li>
                  <li>• Classification-rule justification</li>
                  <li>• Regulatory evidence roadmap from classification through MDMA</li>
                  <li>• Assessment of whether a change in intended purpose or technology affects classification</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Regulatory Principle:</p>
                <p className="text-xs text-navy/80 font-medium">
                  We do not stop at assigning a class. We trace the classification into the technical documentation, level of evidence, QMS expectations, local regulatory structure and post-market controls that must follow.
                </p>
              </div>
              <Link
                to="/services/saudi-arabia/classification"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Define Your SFDA Regulatory Pathway →
              </Link>
            </div>
          </div>

          {/* Section 2: MDMA Application */}
          <div id="sec-2" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 02
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              2. MDMA Application &amp; Technical File Strategy
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              The Medical Devices Marketing Authorization is the principal SFDA market-authorization route for medical devices intended to be supplied in Saudi Arabia. The application is supported by a technical file demonstrating conformity with SFDA requirements and the essential principles of safety and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">MDMA Preparation</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• MDMA route assessment and application readiness</li>
                  <li>• Technical-file assessment strategy under MDS-REQ 1</li>
                  <li>• Device family / grouping assessment</li>
                  <li>• Manufacturer and Authorized Representative data alignment</li>
                  <li>• Declaration of conformity and QMS evidence review</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Submission &amp; Follow-up</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Essential Principles evidence mapping</li>
                  <li>• Risk-management and clinical evidence review</li>
                  <li>• Labeling and Arabic IFU alignment</li>
                  <li>• Response to SFDA technical questions and requests for additional information</li>
                  <li>• Authorization-record review following approval</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">MDMA Strategy Principle:</p>
                <p className="text-xs text-navy/80 font-medium">
                  We do not begin with the submission portal. We begin with the regulatory basis that makes the MDMA application defensible.
                </p>
              </div>
              <Link
                to="/services/saudi-arabia/mdma"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Prepare Your MDMA Submission →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FREQUENTLY ASKED QUESTIONS (12 Comprehensive FAQs)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Frequently Asked Questions (SFDA &amp; Saudi Arabia)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Key questions manufacturers ask when registering medical devices, IVDs and SaMD in the Kingdom of Saudi Arabia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-gray-200/90 shadow-2xs flex flex-col justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-navy mb-2 flex items-start gap-2">
                    <HelpCircle className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs text-gray-600 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. CLOSING PARTNER CTA
      ══════════════════════════════════════════════════════════════════ */}
      <CTABand
        title="Your Regulatory Partner for Saudi Market Access"
        description="Whether you are classifying a new device, appointing a Saudi Authorized Representative, preparing an MDMA technical file, coordinating testing, responding to SFDA questions or maintaining post-market compliance, NKB Regovanta supports the regulatory lifecycle from strategy through ongoing market maintenance."
      />
    </div>
  );
}
