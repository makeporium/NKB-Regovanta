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
import nzHeroImg from "@/assets/nz-hero-auckland.png";

export const Route = createFileRoute("/services/new-zealand/")({
  head: () => ({
    meta: [
      {
        title:
          "New Zealand WAND Notification & Medsafe Compliance Consultant | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "New Zealand Medsafe regulatory compliance and WAND notification services for Medical Devices, IVDs and SaMD. NZ Sponsor representation, Schedule 2 risk classification, technical file defense, and post-market vigilance.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/new-zealand" }],
  }),
  component: NZHubPage,
});

/* ─────────────────────────────────────────────────────────────
   DATA DEFINITIONS MATCHING MOCKUP & COMPREHENSIVE TEXT
───────────────────────────────────────────────────────────── */

const heroChecklist = [
  "New Zealand Regulatory Strategy & Classification",
  "Testing Strategy & Laboratory Coordination",
  "WAND Notification & Sponsor Readiness",
  "IVD Regulatory & Performance Evidence",
  "New Zealand Sponsor Services",
  "Post-Market Surveillance, Vigilance & Recalls",
  "Local Supply Chain & Importer Compliance",
  "End-to-End Market Access Support",
];

const trustBarItems = [
  {
    icon: Target,
    title: "End-to-End Support",
    desc: "From qualification to WAND & post-market vigilance",
  },
  {
    icon: FileCheck2,
    title: "WAND Notification Experts",
    desc: "Specialized in Medsafe database records & GMDN descriptors",
  },
  {
    icon: UserCheck,
    title: "NZ Sponsor Support",
    desc: "Legally responsible in-country representation & oversight",
  },
  {
    icon: TrendingUp,
    title: "Faster Market Entry",
    desc: "Streamlined 5-10 day notification turnaround",
  },
  {
    icon: Award,
    title: "Compliance You Can Trust",
    desc: "Strict adherence to Medicines Act & 2003 Regulations",
  },
];

const quickNavItems = [
  { title: "Regulatory Strategy", to: "/services/new-zealand/classification", icon: Target },
  { title: "WAND Notification", to: "/services/new-zealand/wand-notification", icon: FileText },
  { title: "NZ Sponsor Services", to: "/services/new-zealand/sponsor", icon: Users },
  { title: "Technical Documentation", to: "/services/new-zealand/technical-documentation", icon: BookOpen },
  { title: "Testing & Laboratory", to: "/services/new-zealand/testing-strategy", icon: FlaskConical },
  { title: "Post-Market Compliance", to: "/services/new-zealand/post-market", icon: ShieldCheck },
  { title: "Change & Lifecycle", to: "/services/new-zealand/change-management", icon: RefreshCw },
  { title: "Supply Chain & Importer", to: "/services/new-zealand/supply-chain", icon: Building2 },
];

const services13 = [
  {
    num: "1",
    id: "sec-1",
    to: "/services/new-zealand/classification",
    icon: Target,
    title: "1. Regulatory Strategy\n& Product Classification",
    bullets: [
      "Define the right pathway for your device in New Zealand",
      "Product classification as per Schedule 2 risk framework",
      "Class I, Is, Im, IIa, IIb, III & AIMD assessment",
      "GMDN code selection & WAND grouping strategy",
    ],
  },
  {
    num: "2",
    id: "sec-2",
    to: "/services/new-zealand/wand-notification",
    icon: FileText,
    title: "2. WAND Notification\n& Sponsor Readiness",
    bullets: [
      "End-to-end WAND notification submission support",
      "Prepare and review notification details & GMDN descriptors",
      "Manufacturer and sponsor data alignment & verification",
      "Post-notification updates & 30-day statutory filings",
    ],
  },
  {
    num: "3",
    id: "sec-3",
    to: "/services/new-zealand/sponsor",
    icon: Users,
    title: "3. New Zealand\nSponsor Services",
    bullets: [
      "Act as or coordinate your local Sponsor in NZ",
      "Legal sponsor responsibilities & Medsafe liaison",
      "Distribution records, complaint intake & recall readiness",
      "Renewal & lifecycle maintenance governance",
    ],
  },
  {
    num: "4",
    id: "sec-4",
    to: "/services/new-zealand/technical-documentation",
    icon: BookOpen,
    title: "4. Technical Documentation\n& Review",
    bullets: [
      "Device description, intended use & specifications",
      "Risk management (ISO 14971) & verification evidence",
      "Essential safety/performance substantiation file",
      "Clinical evaluation, labeling & PMS plan summary",
    ],
  },
  {
    num: "5",
    id: "sec-5",
    to: "/services/new-zealand/testing-strategy",
    icon: FlaskConical,
    title: "5. Testing Strategy &\nLaboratory Coordination",
    bullets: [
      "Test plan based on risk & device classification",
      "Coordination with accredited/recognized laboratories",
      "Electrical safety, EMC, performance & biocompatibility",
      "Test report review & evidence gap closure",
    ],
  },
  {
    num: "6",
    id: "sec-6",
    to: "/services/new-zealand/ivd",
    icon: Syringe,
    title: "6. IVD Regulatory &\nPerformance Evidence",
    bullets: [
      "IVD regulatory status & voluntary WAND strategy",
      "Analytical & clinical performance evidence review",
      "Stability, calibrator traceability & shelf-life studies",
      "Labeling & IFU compliance for New Zealand",
    ],
  },
  {
    num: "7",
    id: "sec-7",
    to: "/services/new-zealand/software",
    icon: Monitor,
    title: "7. SaMD / Software /\nAI & Cybersecurity",
    bullets: [
      "SaMD classification & WAND notification strategy",
      "Software life cycle documentation (IEC 62304)",
      "Cybersecurity risk management & data protection",
      "AI/ML algorithmic transparency & clinical validation",
    ],
  },
  {
    num: "8",
    id: "sec-8",
    to: "/services/new-zealand/labeling",
    icon: Languages,
    title: "8. Labeling, IFU &\nAdvertising Compliance",
    bullets: [
      "Labeling & IFU review as per NZ requirements",
      "Manufacturer and sponsor identification on packaging",
      "Packaging compliance & standard symbol verification",
      "Advertising & promotion compliance (Medsafe rules)",
    ],
  },
  {
    num: "9",
    id: "sec-9",
    to: "/services/new-zealand/post-market",
    icon: ShieldCheck,
    title: "9. Post-Market Surveillance,\nVigilance & Recalls",
    bullets: [
      "PMS plan development & complaint triage",
      "Adverse event reporting to Medsafe (10-day rule)",
      "Field Safety Corrective Actions (FSCA) & recall execution",
      "Trend analysis & annual PMS reporting",
    ],
  },
  {
    num: "10",
    id: "sec-10",
    to: "/services/new-zealand/qms-compliance",
    icon: Search,
    title: "10. QMS & Compliance\nReadiness",
    bullets: [
      "Quality system gap assessment (ISO 13485)",
      "Technical documentation & record retention controls",
      "Internal audit & management review support",
      "Distribution records & Medsafe audit readiness",
    ],
  },
  {
    num: "11",
    id: "sec-11",
    to: "/services/new-zealand/change-management",
    icon: RefreshCw,
    title: "11. Change, Variation &\nLifecycle Support",
    bullets: [
      "Change classification & regulatory impact assessment",
      "WAND notification update & correction submission",
      "Technical file update & sponsor record maintenance",
      "End-to-end lifecycle governance",
    ],
  },
  {
    num: "12",
    id: "sec-12",
    to: "/services/new-zealand/medsafe-queries",
    icon: AlertTriangle,
    title: "12. Medsafe Queries,\nDeficiency & Response",
    bullets: [
      "Handling Medsafe inquiries & safety review requests",
      "Deficiency response & scientific rebuttal drafting",
      "Technical review meetings & liaison support",
      "Document re-submission & time-bound closure",
    ],
  },
  {
    num: "13",
    id: "sec-13",
    to: "/services/new-zealand/supply-chain",
    icon: Building2,
    title: "13. Importer, Distributor\n& Supply Chain",
    bullets: [
      "Importer requirements & multi-importer WAND mapping",
      "Distribution & storage traceability controls",
      "Complaint escalation pathways & recall readiness",
      "Local supply chain compliance & Medsafe audit support",
    ],
  },
];

const processSteps = [
  { step: "1", title: "Strategy & Qualification", desc: "Confirm device status, intended purpose, NZ risk class and WAND applicability." },
  { step: "2", title: "Information Collection", desc: "Gather GMDN, manufacturer details, intended purpose, and technical evidence." },
  { step: "3", title: "WAND Submission", desc: "Submit prescribed electronic notification to Medsafe within statutory 30-day window." },
  { step: "4", title: "Medsafe Review", desc: "Respond to database validation questions, data alignments, or Medsafe queries." },
  { step: "5", title: "Notification Confirmation", desc: "Obtain confirmed WAND listing record and establish sponsor distribution controls." },
  { step: "6", title: "Post-Market Compliance", desc: "Manage adverse events, 10-day reporting, recalls, WAND updates, and ongoing compliance." },
];

const faqs = [
  {
    q: "Does WAND notification mean Medsafe has approved my medical device?",
    a: "No. WAND is a notification database. Notification does not indicate approval or endorsement by Medsafe. The sponsor remains responsible for meeting the applicable legal requirements and for the safety of the device supplied.",
  },
  {
    q: "Who can be the New Zealand Sponsor?",
    a: "The sponsor is a New Zealand entity that imports, exports, manufactures, or arranges manufacture of the device for supply as defined in the Medicines (Database of Medical Devices) Regulations 2003.",
  },
  {
    q: "When must a device be notified to WAND?",
    a: "For devices subject to mandatory notification, the sponsor is required to notify the device within 30 calendar days of becoming the sponsor. Medsafe guidance interprets this period for imports as commencing when the device first arrives in New Zealand.",
  },
  {
    q: "Are IVDs required to be notified to WAND?",
    a: "No. IVDs are currently exempt from mandatory WAND notification, although voluntary notification is available. They remain subject to other requirements of the Medicines Act and associated Regulations.",
  },
  {
    q: "What are the New Zealand device risk classes?",
    a: "The WAND framework includes Class I, Class I sterile and/or measuring, Class IIa, Class IIb, Class III and AIMD. IVD is available as an optional WAND classification for voluntary notification.",
  },
  {
    q: "Can I use my EU or Australian classification directly in New Zealand?",
    a: "Not automatically. New Zealand uses its own Schedule 2 classification rules. Differences can exist between New Zealand and overseas classification systems, so the local class should be independently assessed.",
  },
  {
    q: "Do multiple New Zealand importers need separate WAND notifications?",
    a: "Potentially yes. Medsafe states that WAND notification is specific to the sponsor-device combination, so multiple importers of the same device can each have notification obligations.",
  },
  {
    q: "What information is needed for WAND?",
    a: "The WAND data set includes sponsor and manufacturer details, risk classification, GMDN information and additional device information required by the Regulations, with product identifiers for specified higher-risk categories.",
  },
  {
    q: "Can NKB Regovanta coordinate testing laboratories for New Zealand?",
    a: "Yes. We can help define the regulatory testing strategy, coordinate with established laboratories and assess protocols and reports against the intended purpose, risk controls and evidence needs of the New Zealand product.",
  },
  {
    q: "What happens if WAND information changes?",
    a: "The sponsor must keep notified information accurate. Medsafe guidance states that information that becomes inaccurate or incorrect should be corrected within the applicable regulatory timeframe.",
  },
  {
    q: "What are the sponsor's post-market responsibilities?",
    a: "Sponsors should maintain distribution records, complaint and investigation controls, report relevant adverse events, and be capable of conducting recall or corrective actions in consultation with Medsafe.",
  },
  {
    q: "How quickly should serious medical-device incidents be reported?",
    a: "Medsafe recommends that death and serious-injury events be reported as soon as possible and within 10 calendar days, with a final report after the investigation is completed.",
  },
  {
    q: "Does a WAND notification require a full technical dossier submission?",
    a: "WAND itself is not a technical-dossier approval process. However, the sponsor should have access to sufficient technical and safety evidence to substantiate the device and respond to Medsafe safety or compliance questions.",
  },
  {
    q: "Can software be notified to WAND?",
    a: "Software that meets the New Zealand definition of a medical device should be assessed for classification and WAND applicability in the same regulatory framework as other medical devices.",
  },
  {
    q: "Can NKB support recalls or field corrective actions in New Zealand?",
    a: "Yes. We can support risk assessment, sponsor-manufacturer coordination, Medsafe communication, customer identification, corrective-action documentation and lifecycle updates in line with the New Zealand Medicines and Medical Devices Recall Code.",
  },
];

function NZHubPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Matching Picture Mockup with Auckland Graphic)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-8 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mb-4">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-navy font-bold">New Zealand</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#051833] tracking-tight leading-[1.12] mb-2">
                New Zealand WAND Notification &amp; Medsafe Compliance
              </h1>
              <p className="text-[14.5px] sm:text-[16px] font-bold text-[#0b7261] mb-3">
                Your Partner for Successful Market Access in New Zealand
              </p>
              <p className="text-[12.5px] sm:text-[13px] text-gray-600 font-medium leading-relaxed mb-6 max-w-2xl">
                We help medical device, IVD and software manufacturers achieve WAND notification and Medsafe compliance with the right strategy, documentation and regulatory expertise for a faster and smoother market entry in New Zealand.
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
                  Discuss Your NZ Regulatory Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#sec-1"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-gray-300 text-navy text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all"
                >
                  Our NZ Services <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Auckland Graphic with NZ Flag, Medsafe Shield, and Laptop */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden shadow-md border border-gray-200/80">
                <img
                  src={nzHeroImg}
                  alt="New Zealand Medsafe WAND Notification Auckland"
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
          3. DUAL BANNER: WAND NOTIFICATION + IVD EXEMPTION CALLOUT
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-6 bg-slate-50 border-b border-gray-200/80">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-gradient-to-r from-[#051833] via-[#092c5a] to-[#051833] p-1 text-white shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-xl bg-navy/95 items-center">
              {/* Left Side: WAND NOTIFICATION */}
              <div className="flex items-start gap-3.5 pr-0 md:pr-4 border-b md:border-b-0 md:border-r border-white/15 pb-4 md:pb-0">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-[#f5c754]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mb-1">
                    WAND Notification (Medical Devices &amp; SaMD)
                  </h3>
                  <p className="text-[11.5px] text-white/85 leading-snug">
                    Mandatory database notification for most medical devices and Software as Medical Devices (SaMD) supplied in New Zealand.
                  </p>
                  <p className="text-[10.5px] font-bold text-[#f5c754] mt-1">
                    Not an approval – a legal requirement for supply in NZ.
                  </p>
                </div>
              </div>

              {/* Right Side: IVD EXEMPTION */}
              <div className="flex items-start gap-3.5 pl-0 md:pl-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-300">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider mb-1">
                    IVDs Exempt from WAND Notification
                  </h3>
                  <p className="text-[11.5px] text-white/85 leading-snug">
                    IVDs are currently exempt from mandatory WAND notification, however other obligations (sponsor, labeling, evidence, post-market) continue to apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. CORE NEW ZEALAND REGULATORY SERVICES (Quick Navigation Bar)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-200/80 py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h3 className="text-xs font-extrabold text-navy uppercase tracking-wider">
              Our Core New Zealand Regulatory Services
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
              Complete New Zealand Regulatory Services Suite
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
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-extrabold text-navy">
              Our End-to-End WAND Notification Process
            </h3>
            <p className="text-[11px] text-gray-500 italic mt-1">
              Typical timeline: 5–10 working days (subject to completeness of information)
            </p>
          </div>
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
          7. WHY CHOOSE NKB (White Box) + READY TO ENTER (Green/Navy Card)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Why Choose NKB Regovanta for New Zealand? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-white border border-gray-200/90 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-navy mb-4">
                  Why Choose NKB Regovanta for New Zealand?
                </h3>
                <div className="space-y-2.5">
                  {[
                    "Deep expertise in NZ regulatory pathway & Medsafe requirements",
                    "Strong local presence through our Sponsor network",
                    "Proven track record for MD, IVD, SaMD & AI devices",
                    "End-to-end regulatory & compliance support",
                    "Practical, risk-based & business-focused approach",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-navy/90 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Ready to Enter the New Zealand Market? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#051833] text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Ready to Enter the New Zealand Market?
                </h3>
                <p className="text-xs text-white/90 mb-5 leading-relaxed">
                  Partner with NKB Regovanta for seamless WAND notification, Medsafe compliance and market access.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-xs"
                >
                  Contact Our NZ Experts Today! <ArrowRight className="h-3.5 w-3.5" />
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
              Comprehensive New Zealand Medsafe Regulatory Framework
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Explore our in-depth methodologies, strategic frameworks, and regulatory decision pathways for New Zealand.
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
              Classification Drives the New Zealand Sponsor and WAND Strategy. New Zealand uses a GHTF-based medical-device classification framework with Class I, Class I sterile/measuring, Class IIa, Class IIb, Class III and AIMD categories. Classification is determined using the rules in Schedule 2 and must be assigned by the New Zealand Sponsor when notifying a device to WAND.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Classification Elements</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Product qualification and regulatory-status assessment</li>
                  <li>• Intended purpose and clinical claims review</li>
                  <li>• Schedule 2 risk-class determination</li>
                  <li>• Class I, Is/Im, IIa, IIb, III and AIMD assessment</li>
                  <li>• Accessory, procedure pack and system considerations</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Scope</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• SaMD / software regulatory-status and classification assessment</li>
                  <li>• GMDN code and descriptor selection strategy</li>
                  <li>• Assessment of WAND notification vs statutory exemption</li>
                  <li>• Regulatory roadmap from sponsor appointment through post-market</li>
                  <li>• Cross-market equivalence review (EU MDR, TGA, US FDA)</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Classification Approach:</p>
                <p className="text-xs text-navy/80 font-medium">
                  We do not simply map a foreign-market class into New Zealand. We apply the New Zealand rules and then trace that classification into the WAND data set, grouping strategy, sponsor declaration, technical-evidence expectations and post-market controls.
                </p>
              </div>
              <Link
                to="/services/new-zealand/classification"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Define Your NZ Regulatory Pathway →
              </Link>
            </div>
          </div>

          {/* Section 2: WAND Notification */}
          <div id="sec-2" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 02
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              2. WAND Notification &amp; Sponsor Readiness
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              WAND Notification Is a Legal Notification — Not a Product Approval. For most medical devices, the New Zealand Sponsor must notify prescribed information to the Web Assisted Notification of Devices (WAND) database within 30 calendar days of becoming the sponsor. The sponsor is also responsible for ensuring that notified information remains accurate and is corrected when it changes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">WAND Submission Data</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• WAND sponsor account setup and readiness</li>
                  <li>• Manufacturer detail verification and validation</li>
                  <li>• Risk-class and GMDN code review</li>
                  <li>• Product identifier review for higher-risk devices</li>
                  <li>• Grouping assessment for eligible device models</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Lifecycle Database Controls</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Notification submission &amp; confirmation verification</li>
                  <li>• Review of WAND record post-notification</li>
                  <li>• Correction and update support when device details change</li>
                  <li>• Sponsor-detail and administrator change filings</li>
                  <li>• Multi-importer notification synchronization</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">WAND Quality Rule:</p>
                <p className="text-xs text-navy/80 font-medium">
                  We quality-check the regulatory basis behind each WAND field. The objective is not just to complete the database entry, but to ensure the sponsor can stand behind the classification, GMDN, manufacturer details, intended purpose and device information declared in WAND.
                </p>
              </div>
              <Link
                to="/services/new-zealand/wand-notification"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Prepare Your WAND Notification →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. FREQUENTLY ASKED QUESTIONS (15 Comprehensive FAQs)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Frequently Asked Questions (Medsafe &amp; New Zealand)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Key questions manufacturers ask when registering medical devices, IVDs and SaMD in New Zealand.
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
        title="Your Regulatory Partner for New Zealand Market Access"
        description="Whether you are appointing your first New Zealand Sponsor, determining WAND applicability, notifying a medical device, assessing an IVD exemption, reviewing technical evidence, planning laboratory testing, preparing for Medsafe questions or strengthening post-market controls, NKB Regovanta supports the complete New Zealand regulatory lifecycle."
      />
    </div>
  );
}
