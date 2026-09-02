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
import uaeHeroImg from "@/assets/uae-hero-dubai.png";

export const Route = createFileRoute("/services/uae/")({
  head: () => ({
    meta: [
      {
        title:
          "UAE MOHAP Medical Device Registration & Market Access Consultant | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "UAE Ministry of Health and Prevention (MOHAP) medical device and IVD registration consulting. Product classification, licensed medical warehouse / MAH interface, technical file compilation, MOIAT ECAS screening, and post-market vigilance.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/uae" }],
  }),
  component: UAEHubPage,
});

/* ─────────────────────────────────────────────────────────────
   DATA DEFINITIONS MATCHING MOCKUP & COMPREHENSIVE TEXT
───────────────────────────────────────────────────────────── */

const heroChecklist = [
  "MOHAP Regulatory Strategy & Classification",
  "Testing Strategy & Laboratory Coordination",
  "MOHAP Medical Device Registration & Dossier",
  "IVD Registration & Performance Evidence",
  "UAE Local Applicant & MAH Coordination",
  "Post-Market Monitoring, Vigilance & Field Actions",
  "Medical Warehouse & Establishment Readiness",
  "End-to-End UAE Market Access Support",
];

const trustBarItems = [
  {
    icon: Target,
    title: "End-to-End Support",
    desc: "From classification to registration & post-market vigilance",
  },
  {
    icon: FileCheck2,
    title: "MOHAP Portal Expertise",
    desc: "Specialized in MOHAP electronic services & dossier filings",
  },
  {
    icon: UserCheck,
    title: "Local Presence in UAE",
    desc: "Licensed medical warehouse & marketing office interface",
  },
  {
    icon: TrendingUp,
    title: "Structured Market Access",
    desc: "Proven submission pathways for seamless market entry",
  },
  {
    icon: Award,
    title: "Compliance You Can Trust",
    desc: "Strict adherence to UAE federal health regulations",
  },
];

const quickNavItems = [
  { title: "Regulatory Strategy", to: "/services/uae/classification", icon: Target },
  { title: "MOHAP Dossier Submission", to: "/services/uae/mohap-registration", icon: FileText },
  { title: "Local MAH & AR Services", to: "/services/uae/local-applicant", icon: Users },
  { title: "Technical Documentation", to: "/services/uae/technical-documentation", icon: BookOpen },
  { title: "Testing & Laboratory", to: "/services/uae/testing-strategy", icon: FlaskConical },
  { title: "Post-Market Compliance", to: "/services/uae/post-market", icon: ShieldCheck },
  { title: "Change & Lifecycle", to: "/services/uae/change-management", icon: RefreshCw },
  { title: "MOIAT / ECAS Assessment", to: "/services/uae/ecas", icon: Award },
];

const services13 = [
  {
    num: "1",
    id: "sec-1",
    to: "/services/uae/classification",
    icon: Target,
    title: "1. Regulatory Strategy\n& Classification",
    bullets: [
      "Product classification (Class I, II, III, IV) based on risk",
      "Identification of applicable guidance and technical requirements",
      "Regulatory roadmap with timelines and deliverables",
      "Gap assessment & MOHAP classification letter application",
    ],
  },
  {
    num: "2",
    id: "sec-2",
    to: "/services/uae/mohap-registration",
    icon: FileText,
    title: "2. MOHAP Registration\n& Dossier Strategy",
    bullets: [
      "MOHAP account setup & product profile creation",
      "Online application data entry & administrative filing",
      "Dossier compilation, free-sale certificate & CE review",
      "Technical committee tracking, queries & approval",
    ],
  },
  {
    num: "3",
    id: "sec-3",
    to: "/services/uae/local-applicant",
    icon: Users,
    title: "3. Local Applicant (MAH)\n& Representation",
    bullets: [
      "Licensed medical warehouse / marketing office interface",
      "Submission, follow-up & tracking with MOHAP",
      "Receipt of official communications & technical queries",
      "Liaison during technical review, renewals & transfers",
    ],
  },
  {
    num: "4",
    id: "sec-4",
    to: "/services/uae/technical-documentation",
    icon: BookOpen,
    title: "4. Technical Documentation\n& Review",
    bullets: [
      "Device description, intended use & specifications",
      "Design & manufacturing information review",
      "Risk management (ISO 14971) & Essential Principles",
      "Clinical evaluation, labeling & PMS summary",
    ],
  },
  {
    num: "5",
    id: "sec-5",
    to: "/services/uae/testing-strategy",
    icon: FlaskConical,
    title: "5. Testing Strategy &\nLaboratory Coordination",
    bullets: [
      "Test plan based on risk & device classification",
      "Electrical safety, EMC, performance & reliability",
      "Biocompatibility & sterilization validation review",
      "MOHAP sample & Certificate of Analysis readiness",
    ],
  },
  {
    num: "6",
    id: "sec-6",
    to: "/services/uae/ivd",
    icon: Syringe,
    title: "6. IVD Registration &\nPerformance Evidence",
    bullets: [
      "IVD classification (Class I, II, III, IV) by risk rules",
      "Analytical & clinical performance evidence review",
      "Stability, calibrator traceability & shelf-life studies",
      "Bilingual English/Arabic labeling & IFU review",
    ],
  },
  {
    num: "7",
    id: "sec-7",
    to: "/services/uae/software",
    icon: Monitor,
    title: "7. SaMD / Software /\nAI & Cybersecurity",
    bullets: [
      "SaMD classification & MOHAP submission strategy",
      "Software life cycle documentation (IEC 62304)",
      "Cybersecurity risk management & data protection",
      "AI/ML algorithmic transparency & clinical validation",
    ],
  },
  {
    num: "8",
    id: "sec-8",
    to: "/services/uae/labeling",
    icon: Languages,
    title: "8. Labeling, IFU, UDI &\nAdvertising Compliance",
    bullets: [
      "Arabic & English labeling / IFU preparation",
      "UDI registration & database submission readiness",
      "Packaging compliance & symbol standardisation",
      "Advertising & promotional material review",
    ],
  },
  {
    num: "9",
    id: "sec-9",
    to: "/services/uae/post-market",
    icon: ShieldCheck,
    title: "9. Post-Market Surveillance,\nVigilance & FSCA",
    bullets: [
      "PMS plan development & complaint triage",
      "Adverse event reporting to MOHAP pharmacovigilance",
      "Field Safety Corrective Actions (FSCA) & recall support",
      "Trend analysis & annual PMS reporting",
    ],
  },
  {
    num: "10",
    id: "sec-10",
    to: "/services/uae/qms-inspection",
    icon: Search,
    title: "10. Inspection & QMS\nReadiness",
    bullets: [
      "Pre-audit gap assessment & mock inspections",
      "QMS readiness (ISO 13485 / GHTF guidelines)",
      "Internal audit & medical warehouse review support",
      "Supplier & CAPA audit readiness & close-out",
    ],
  },
  {
    num: "11",
    id: "sec-11",
    to: "/services/uae/change-management",
    icon: RefreshCw,
    title: "11. Change, Variation &\nRenewal Support",
    bullets: [
      "Change classification & regulatory impact assessment",
      "Variation submission in MOHAP electronic system",
      "Product registration & license renewal planning",
      "Technical file update & lifecycle maintenance",
    ],
  },
  {
    num: "12",
    id: "sec-12",
    to: "/services/uae/mohap-queries",
    icon: AlertTriangle,
    title: "12. Queries, Deficiency\nResponse & Review Support",
    bullets: [
      "Handling MOHAP inquiries & deficiency requests",
      "Technical rebuttal & evidence drafting",
      "Technical review committee liaison support",
      "Document re-submission & time-bound closure",
    ],
  },
  {
    num: "13",
    id: "sec-13",
    to: "/services/uae/supply-chain",
    icon: Building2,
    title: "13. Medical Warehouse &\nLocal Supply Chain",
    bullets: [
      "Licensed medical warehouse & marketing office review",
      "Local site registration & MOHAP operating scope",
      "Storage, distribution & traceability governance",
      "Commercial launch readiness & handover",
    ],
  },
];

const processSteps = [
  { step: "1", title: "Strategy & Classification", desc: "Confirm product status, intended purpose, classification and UAE market route." },
  { step: "2", title: "Local Applicant Setup", desc: "Establish licensed medical warehouse / MAH and manufacturing site registration." },
  { step: "3", title: "Dossier Prep & Submission", desc: "Compile technical file, certificates, FSC, and submit via MOHAP portal." },
  { step: "4", title: "MOHAP Review & Queries", desc: "Respond to technical committee questions, sample requests, and evidence gaps." },
  { step: "5", title: "Approval & Registration", desc: "Receive official MOHAP Medical Equipment Registration Certificate." },
  { step: "6", title: "Post-Market & Lifecycle", desc: "Maintain vigilance, PMS, variations, renewals, and supply-chain controls." },
];

const faqs = [
  {
    q: "Is ECAS the system used to register medical devices with MOHAP?",
    a: "No. MOHAP medical-equipment registration is a separate federal health-regulatory service. ECAS is a MOIAT conformity-assessment scheme for products subject to UAE technical regulations. ECAS may be separately relevant to some products or electrical components, but it is not the MOHAP medical-device registration portal.",
  },
  {
    q: "Do medical devices need a MOHAP classification before registration?",
    a: "MOHAP offers a formal product-classification service that determines whether a product requires MOHAP registration and identifies the applicable classification/category. It is particularly useful where regulatory status, claims, accessories or borderline characteristics need formal clarification.",
  },
  {
    q: "Who can submit a medical-equipment registration application in the UAE?",
    a: "MOHAP requires the Marketing Authorization Holder company and manufacturing site to be registered before product registration, and the applicant for medical-equipment registration must be an appropriately licensed medical warehouse or marketing office in the UAE.",
  },
  {
    q: "What evidence is typically important for UAE medical-device registration?",
    a: "The file includes manufacturer and factory registration information, free-sale or registration evidence from the country of origin, CE Declaration of Conformity or marketing authorization, product catalogue/model details, bilingual labels and brochures, technical/test evidence, and safety/efficacy data for higher-risk devices.",
  },
  {
    q: "Can existing CE or FDA evidence be used for UAE registration?",
    a: "Yes. Existing international certification and technical evidence are highly valuable and MOHAP documentation specifically references evidence such as CE (EU MDR/IVDR), US FDA 510(k), and PMA depending on classification. The evidence must cover the exact device, manufacturer, and models submitted.",
  },
  {
    q: "Can MOHAP request samples or laboratory analysis?",
    a: "Yes. MOHAP service documentation indicates that physical product samples, Certificate of Analysis (CoA), and laboratory analysis may be requested depending on the medical equipment type and risk class.",
  },
  {
    q: "Can NKB Regovanta coordinate laboratory testing for the UAE?",
    a: "Yes. We define the regulatory testing gap, coordinate with established accredited laboratories where testing is required, review protocols, and ensure the resulting reports support the UAE technical dossier.",
  },
  {
    q: "How should software or AI-based devices (SaMD) be approached in the UAE?",
    a: "Start with the intended medical purpose and claims, then determine whether the software is itself a medical device or part of hardware equipment. The file must connect software requirements, risk management (ISO 14971), verification (IEC 62304), cybersecurity, and clinical evidence to the registered function.",
  },
  {
    q: "What happens when a device changes after UAE registration?",
    a: "The change should be assessed before implementation. Design, software, manufacturing, supplier, labeling, intended-purpose and certificate changes may require technical file updates, variation submissions, or registration amendments with MOHAP.",
  },
  {
    q: "Does registration end the compliance obligation?",
    a: "No. Registered devices remain subject to post-marketing monitoring, customer complaint triage, adverse incident reporting to MOHAP, maintenance of local establishment licenses, and 5-year registration renewals.",
  },
];

function UAEHubPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Matching Picture Mockup with Dubai Graphic)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-8 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mb-4">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-navy font-bold">United Arab Emirates</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#051833] tracking-tight leading-[1.12] mb-2">
                UAE MOHAP Medical Device Registration &amp; Market Access
              </h1>
              <p className="text-[14.5px] sm:text-[16px] font-bold text-[#0b7261] mb-3">
                Your Partner for Successful Market Access in UAE
              </p>
              <p className="text-[12.5px] sm:text-[13px] text-gray-600 font-medium leading-relaxed mb-6 max-w-2xl">
                We help medical device, IVD and software manufacturers achieve MOHAP registration and market access with the right strategy, robust documentation and regulatory expertise for a faster and smoother entry in the UAE.
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
                  Discuss Your UAE Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#sec-1"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-gray-300 text-navy text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all"
                >
                  Our UAE Services <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Dubai Graphic with Flag, MOHAP Emblem, and Laptop */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-md border border-gray-200/80">
                <img
                  src={uaeHeroImg}
                  alt="MOHAP Medical Device Registration UAE Dubai"
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
          3. UAE REGULATORY ARCHITECTURE CALLOUT BOX (MOHAP vs MOIAT / ECAS)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-slate-50 border-b border-gray-200/80">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <h3 className="text-center text-sm sm:text-base font-extrabold text-navy tracking-wide uppercase mb-5">
              UAE Regulatory Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left: MOHAP MEDICAL DEVICE ROUTE */}
              <div className="p-5 rounded-xl border-2 border-[#0b7261]/80 bg-teal-50/30">
                <h4 className="text-xs sm:text-[13px] font-extrabold text-[#0b7261] uppercase tracking-wider mb-3">
                  MOHAP Medical Device Route
                </h4>
                <ul className="space-y-2 text-xs text-navy/85 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0b7261] shrink-0 mt-1.5" />
                    <span>Product classification letter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0b7261] shrink-0 mt-1.5" />
                    <span>Medical equipment registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0b7261] shrink-0 mt-1.5" />
                    <span>Licensed medical warehouse / marketing office</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0b7261] shrink-0 mt-1.5" />
                    <span>Technical, safety &amp; efficacy evidence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0b7261] shrink-0 mt-1.5" />
                    <span>Post-market monitoring</span>
                  </li>
                </ul>
              </div>

              {/* Right: MOIAT / ECAS - WHERE APPLICABLE */}
              <div className="p-5 rounded-xl border-2 border-amber-500/80 bg-amber-50/30">
                <h4 className="text-xs sm:text-[13px] font-extrabold text-amber-700 uppercase tracking-wider mb-3">
                  MOIAT / ECAS - Where Applicable
                </h4>
                <ul className="space-y-2 text-xs text-navy/85 font-medium">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Separate UAE conformity-assessment program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Applies to products subject to MOIAT technical regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Not the MOHAP medical-device registration portal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Assess applicability by product and component</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>Can require accredited test evidence</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-[11px] text-gray-500 italic mt-4">
              MOHAP registration and MOIAT/ECAS are separate regulatory systems; ECAS should be assessed only where separately applicable.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. CORE UAE MOHAP & ECAS REGULATORY SERVICES (Quick Navigation Bar)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200/80 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h3 className="text-xs font-extrabold text-navy uppercase tracking-wider">
              Our Core UAE MOHAP &amp; Regulatory Services
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 text-center">
            {quickNavItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="p-2.5 rounded-xl bg-slate-50 border border-gray-200/90 hover:border-teal-400 hover:shadow-2xs transition-all flex flex-col items-center justify-center group"
              >
                <item.icon className="h-4 w-4 text-[#0b7261] mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-navy leading-tight">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. 13 SERVICE CARDS GRID (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-navy tracking-tight">
              Complete UAE MOHAP Regulatory Services Suite
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
          6. PROCESS FLOW (6 Steps - Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-slate-50 border-t border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">
          <h3 className="text-center text-lg sm:text-xl font-extrabold text-navy mb-6">
            Our End-to-End MOHAP Registration Process
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
          7. WHY CHOOSE NKB (Dark Navy Card) + READY TO ENTER (Green Card)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Why Choose NKB Regovanta for UAE? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#051833] text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-4">
                  Why Choose NKB Regovanta for UAE?
                </h3>
                <div className="space-y-2.5">
                  {[
                    "Deep expertise in MOHAP regulations & classification",
                    "Clear distinction between MOHAP and MOIAT/ECAS requirements",
                    "Strong local presence through licensed UAE partners",
                    "Proven track record for MD, IVD, SaMD & AI devices",
                    "End-to-end regulatory & post-market compliance support",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Ready to Enter the UAE Market? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-gradient-to-br from-emerald-800 to-[#0b7261] text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Ready to Enter the UAE Market?
                </h3>
                <p className="text-xs text-white/90 mb-5 leading-relaxed">
                  Partner with NKB Regovanta for seamless MOHAP registration, local applicant coordination, and market success.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-navy text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-xs"
                >
                  Contact Our UAE Experts Today! <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. DEEP-DIVE REGULATORY MODULES (Full Text Sections 1 to 13)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-slate-50/70 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Comprehensive UAE MOHAP Regulatory &amp; Market Access
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Explore our in-depth methodologies, strategic frameworks, and regulatory decision pathways for the United Arab Emirates.
            </p>
          </div>

          {/* Section 1: Classification */}
          <div id="sec-1" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 01
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              1. Regulatory Strategy &amp; Product Classification
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Classification Should Establish the Entire UAE Regulatory Route. The UAE pathway should begin with product qualification, intended purpose and the regulatory status of the product — not with a registration form. MOHAP's classification service can determine whether a product requires MOHAP registration and provides a formal classification outcome based on the information submitted.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Classification Elements</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Product qualification and regulatory-status assessment</li>
                  <li>• Intended purpose, indication, claims and user-population review</li>
                  <li>• Class I, II, III and IV classification assessment for medical equipment</li>
                  <li>• Assessment of accessories, kits, systems and model families</li>
                  <li>• Software / SaMD regulatory-status assessment</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Scope</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Review of country-of-origin and reference-country regulatory status</li>
                  <li>• Product catalogue, labels, leaflet and product-information readiness</li>
                  <li>• Assessment of whether MOHAP registration is required</li>
                  <li>• Assessment of whether another UAE authority may be relevant</li>
                  <li>• Regulatory roadmap from classification through market entry</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Classification Principle:</p>
                <p className="text-xs text-navy/80 font-medium">
                  We do not treat classification as a label. We use it to determine evidence depth, registration route, local applicant requirements, technical documentation, testing, labeling and post-market obligations.
                </p>
              </div>
              <Link
                to="/services/uae/classification"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Define Your UAE Regulatory Pathway →
              </Link>
            </div>
          </div>

          {/* Section 2: Registration */}
          <div id="sec-2" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 02
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              2. MOHAP Medical Device Registration &amp; Dossier Strategy
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Registration Must Be Built Around a Consistent Regulatory Evidence Package. MOHAP registration enables medical equipment to be imported and traded in the UAE when the applicable conditions are met. A strong application depends on consistency between the local applicant, manufacturing site, product family, intended purpose, classification, country-of-origin evidence, conformity documentation, technical evidence and labeling.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Dossier Compilation</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Registration-readiness and route assessment</li>
                  <li>• Application-form and administrative-data preparation</li>
                  <li>• Manufacturer and manufacturing-site information review</li>
                  <li>• Valid free-sale / registration certificate strategy</li>
                  <li>• Country-of-origin and reference-market evidence review</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Submission &amp; Defense</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• CE Declaration of Conformity and QMS certificate review</li>
                  <li>• Product description, models, sizes, accessories and catalogue preparation</li>
                  <li>• Safety and efficacy evidence strategy for higher-risk devices</li>
                  <li>• Sample / certificate-of-analysis readiness where requested</li>
                  <li>• MOHAP technical query and resubmission support</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Data Consistency Rule:</p>
                <p className="text-xs text-navy/80 font-medium">
                  We cross-check every major data point before submission: manufacturer name, product name, model list, intended purpose, classification, certificate scope, labels and technical evidence.
                </p>
              </div>
              <Link
                to="/services/uae/mohap-registration"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Prepare Your MOHAP Registration →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. FREQUENTLY ASKED QUESTIONS (10 Comprehensive FAQs)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Frequently Asked Questions (MOHAP &amp; UAE)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Key questions manufacturers ask when registering medical devices, IVDs and SaMD in the United Arab Emirates.
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
          10. CLOSING PARTNER CTA
      ══════════════════════════════════════════════════════════════════ */}
      <CTABand
        title="Your Regulatory Partner for UAE Market Access"
        description="Whether you are determining whether MOHAP registration is required, classifying a new device, preparing a medical-equipment registration file, coordinating testing, entering through a licensed UAE applicant, responding to MOHAP questions or maintaining an existing portfolio, NKB Regovanta supports the complete UAE regulatory lifecycle."
      />
    </div>
  );
}
