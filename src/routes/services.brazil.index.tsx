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
import brazilHeroImg from "@/assets/brazil-hero-rio.png";
import brazilMapGraphic from "@/assets/brazil-map-graphic.png";

export const Route = createFileRoute("/services/brazil/")({
  head: () => ({
    meta: [
      {
        title:
          "ANVISA Brazil Medical Device Registration & BGMP Consultant | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "ANVISA regulatory consulting for Medical Devices, IVDs and SaMD in Brazil. Notificação, Registro, BGMP RDC 665/2022, CBPF certification, Brazil Registration Holder (BRH), UDI SIUD, and Tecnovigilância.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.nkbregovanta.com/services/brazil" }],
  }),
  component: BrazilHubPage,
});

/* ─────────────────────────────────────────────────────────────
   DATA DEFINITIONS MATCHING MOCKUP & COMPREHENSIVE TEXT
───────────────────────────────────────────────────────────── */

const heroChecklist = [
  "ANVISA Regulatory Strategy & Classification",
  "Testing Strategy & ANVISA-Recognized Labs",
  "Product Registration (Cadastro) & Notificação",
  "IVD Registration & Performance Evidence",
  "BGMP Compliance & ANVISA Inspections",
  "Post-Market, Vigilance & Tecnovigilância",
  "Technical Documentation & RDC Compliance",
  "End-to-End Market Access Support",
];

const trustBarItems = [
  {
    icon: Target,
    title: "Deep ANVISA Regulatory Expertise",
    desc: "Experienced team with successful ANVISA approvals",
  },
  {
    icon: FileCheck2,
    title: "High Approval Success Rate",
    desc: "Proven strategies for faster market access",
  },
  {
    icon: Users,
    title: "BGMP Specialists You Can Rely On",
    desc: "End-to-end BGMP implementation & certification support",
  },
  {
    icon: FlaskConical,
    title: "Strong Lab Network in Brazil",
    desc: "Access to ANVISA-recognized testing laboratories",
  },
  {
    icon: Shield,
    title: "End-to-End Support",
    desc: "From strategy to registration, compliance & post-market",
  },
];

const services12 = [
  {
    num: "1",
    id: "sec-1",
    to: "/services/brazil/classification",
    icon: Target,
    title: "1. ANVISA Regulatory\nStrategy & Classification",
    bullets: [
      "Determine correct risk class (Classes I, II, III, IV)",
      "GMDN term validation & technical name",
      "Regulatory pathway assessment (Cadastro or Notificação)",
      "Gap assessment against RDC 751/2022 & RDC 665/2022",
    ],
  },
  {
    num: "2",
    id: "sec-2",
    to: "/services/brazil/registration",
    icon: FileText,
    title: "2. Product Registration\n(Cadastro) & Notificação",
    bullets: [
      "Dossier preparation & submission via Solicita",
      "Cadastro (for Classes II, III, IV) & Notificação (Class I)",
      "Response to exigências (ANVISA queries)",
      "Follow-up until final deferimento (approval)",
    ],
  },
  {
    num: "3",
    id: "sec-3",
    to: "/services/brazil/bgmp",
    icon: ShieldCheck,
    title: "3. BGMP Compliance\n& Certification",
    bullets: [
      "BGMP implementation (RDC 665/2022)",
      "Internal audits & gap assessments",
      "Documentation & SOP development",
      "Pre-inspection readiness & ANVISA inspection support",
    ],
  },
  {
    num: "4",
    id: "sec-4",
    to: "/services/brazil/technical-documentation",
    icon: BookOpen,
    title: "4. Technical Documentation\n& Brazilian Compliance",
    bullets: [
      "Technical file preparation as per RDC 751/2022 & 848/2024",
      "Essential Principles checklist mapping",
      "Risk Management (ISO 14971)",
      "Usability, IFU, labeling & package compliance",
    ],
  },
  {
    num: "5",
    id: "sec-5",
    to: "/services/brazil/testing-strategy",
    icon: FlaskConical,
    title: "5. Testing Strategy &\nLaboratory Coordination",
    bullets: [
      "Define testing plan based on risk & intended use",
      "Coordination with ANVISA-recognized labs in Brazil",
      "STED, MET, EMC, Biocompatibility, Sterilization, Packaging",
      "Test report review & compliance assessment",
    ],
  },
  {
    num: "6",
    id: "sec-6",
    to: "/services/brazil/anvisa-queries",
    icon: Search,
    title: "6. ANVISA Application\nAudit & Support",
    bullets: [
      "Application dossier review before submission",
      "Mock audit & gap remediation",
      "Response strategy for ANVISA technical exigências",
      "Dossier optimization for faster approval",
    ],
  },
  {
    num: "7",
    id: "sec-7",
    to: "/services/brazil/ivd",
    icon: Syringe,
    title: "7. IVD Registration &\nPerformance Evidence",
    bullets: [
      "IVD classification (Classes I to IV under RDC 830/2023)",
      "Analytical performance studies",
      "Clinical performance evaluation",
      "Performance report as per RDC 830/2023",
    ],
  },
  {
    num: "8",
    id: "sec-8",
    to: "/services/brazil/software",
    icon: Monitor,
    title: "8. SaMD / Software /\nAI & Cybersecurity",
    bullets: [
      "Software classification (RDC 657/2022)",
      "IEC 62304 & ISO 14971 compliance",
      "Cybersecurity risk management",
      "AI/ML algorithm validation & transparency",
    ],
  },
  {
    num: "9",
    id: "sec-9",
    to: "/services/brazil/labeling",
    icon: Languages,
    title: "9. Labelling, IFU &\nAdvertising Compliance",
    bullets: [
      "Portuguese labelling as per RDC 751/2022",
      "IFU in Portuguese & e-labelling",
      "Symbols & UDI requirements (RDC 591/2021 & SIUD)",
      "Advertising & promotional material review",
    ],
  },
  {
    num: "10",
    id: "sec-10",
    to: "/services/brazil/tecnovigilance",
    icon: RefreshCw,
    title: "10. Post-Market Surveillance,\nVigilance & Tecnovigilância",
    bullets: [
      "TECNOVIGILÂNCIA system registration & reporting",
      "Incident reporting (Formulário de Tecnovigilância)",
      "Trend analysis & CAPA",
      "Recall, field safety corrective actions (FSCA)",
    ],
  },
  {
    num: "11",
    id: "sec-11",
    to: "/services/brazil/change-management",
    icon: Layers,
    title: "11. Change Management\n& Variations",
    bullets: [
      "Assess impact of changes on registration",
      "Prepare & submit change notifications",
      "Update technical file, labelling & IFU",
      "Lifecycle management support & revalidation",
    ],
  },
  {
    num: "12",
    id: "sec-12",
    to: "/services/brazil/brh",
    icon: Building2,
    title: "12. Importer & Legal\nRepresentative Services",
    bullets: [
      "Appointing Importer in Brazil (BRH)",
      "Local legal representative coordination",
      "ANVISA product registration ownership support",
      "Supply chain compliance & AFE alignment",
    ],
  },
];

const processSteps = [
  { step: "1", title: "Strategy & Qualification", desc: "Confirm product status, intended purpose, classification and Brazilian route." },
  { step: "2", title: "Documentation Prep", desc: "Compile technical file, Essential Principles mapping, and Portuguese translations." },
  { step: "3", title: "Testing & Evidence", desc: "Review safety/performance evidence, BGMP needs, and laboratory gaps." },
  { step: "4", title: "Dossier & Submission", desc: "Compile notification/registration content and submit via Solicita." },
  { step: "5", title: "ANVISA Review", desc: "Manage technical questions, exigências, and preliminary queries." },
  { step: "6", title: "Response & Approval", desc: "Formulate rigorous technical responses leading to deferimento." },
  { step: "7", title: "BGMP Certification", desc: "Manage CBPF certification and inspection readiness where applicable." },
  { step: "8", title: "Post-Market & PMS", desc: "Maintain labeling, SIUD UDI, tecnovigilância, and change control." },
];

const faqs = [
  {
    q: "Which medical devices require ANVISA notification or registration?",
    a: "Under RDC 751/2022, Class I and II medical devices generally follow notification, while Class III and IV devices require registration. IVDs follow RDC 830/2023 and also use risk-based notification/registration pathways.",
  },
  {
    q: "Does a foreign manufacturer need a Brazilian company?",
    a: "A foreign manufacturer needs a legally established Brazilian entity with the appropriate regulatory authorization (AFE) to hold the ANVISA notification or registration and act as the local regulatory interface (Brazil Registration Holder).",
  },
  {
    q: "Is ISO 13485 enough for BGMP?",
    a: "No. ISO 13485 is highly relevant, but Brazilian GMP requirements are set out in RDC 665/2022. For Class III and IV manufacturing sites, CBPF certification requirements under RDC 687/2022 must also be assessed.",
  },
  {
    q: "Do Class I and II devices still need a technical dossier?",
    a: "Yes. The notification pathway does not eliminate technical-documentation obligations. The supporting technical information must be maintained and available to the health authority, and ANVISA can perform subsequent compliance audits.",
  },
  {
    q: "Can existing EU or FDA testing be used for Brazil?",
    a: "Often yes, if the evidence applies to the same device, intended use, configuration and claims and satisfies Brazilian requirements. We assess the evidence gap before recommending new testing.",
  },
  {
    q: "What is different for IVDs in Brazil?",
    a: "IVDs are regulated under RDC 830/2023. The submission must connect the intended use and risk class with analytical and clinical performance evidence, labeling and post-market requirements.",
  },
  {
    q: "Does Brazil regulate SaMD separately?",
    a: "Yes. RDC 657/2022 addresses regularization of Software as a Medical Device. Regulatory status, classification, software evidence, cybersecurity and lifecycle changes must be evaluated.",
  },
  {
    q: "What is SIUD?",
    a: "SIUD is ANVISA's Unique Device Identification database. It became operational in 2026 under IN 426/2026, and manufacturers/holders should establish controls so UDI data remain consistent with the regulated product.",
  },
  {
    q: "How should ANVISA technical questions (exigências) be handled?",
    a: "The best response identifies the regulatory concern behind the question, determines the evidence gap and answers with a structured technical justification supported by revised documentation or new evidence only where necessary.",
  },
  {
    q: "Does NKB coordinate testing laboratories?",
    a: "Yes. We can help define the regulatory testing strategy, coordinate with established laboratories, review protocols and assess final reports for suitability in the Brazilian dossier.",
  },
];

function BrazilHubPage() {
  return (
    <div className="bg-white min-h-screen text-slate-800">
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO SECTION (Matching Picture Mockup with Rio Graphic)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white pt-8 pb-12 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-semibold mb-4">
            <Link to="/" className="hover:text-navy transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <Link to="/services" className="hover:text-navy transition-colors">Services</Link>
            <ChevronRight className="h-3 w-3 text-gray-400" />
            <span className="text-navy font-bold">Brazil</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <h1 className="font-display text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#051833] tracking-tight leading-[1.12] mb-2">
                ANVISA Brazil Medical Device Registration &amp; BGMP Services
              </h1>
              <p className="text-[14.5px] sm:text-[16px] font-bold text-[#0b7261] mb-3">
                Your Partner for Compliance, Registration and Sustainable Market Access in Brazil
              </p>
              <p className="text-[12.5px] sm:text-[13px] text-gray-600 font-medium leading-relaxed mb-6 max-w-2xl">
                End-to-end regulatory, technical and compliance support for Medical Devices, IVDs, Software and Accessories to achieve ANVISA registration, BGMP certification and long-term compliance in Brazil.
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
                  Discuss Your Brazil Strategy <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="#sec-1"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-gray-300 text-navy text-[12.5px] font-bold px-5 py-2.5 rounded-md transition-all"
                >
                  Our Brazil Services <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Right Rio Graphic with Flag and ANVISA Booklet */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[430px] rounded-2xl overflow-hidden shadow-md border border-gray-200/80">
                <img
                  src={brazilHeroImg}
                  alt="ANVISA Brazil Medical Device Registration Rio de Janeiro"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. TRUST STATS BAR (5 Items with Circular Icons - Matching Picture)
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
          3. OUR BRAZIL REGULATORY SERVICES (12 Cards Grid - Matching Picture)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-navy tracking-tight">
              Our Brazil Regulatory Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {services12.map((card) => (
              <div
                key={card.num}
                className="flex flex-col justify-between p-3.5 rounded-xl border border-gray-200/90 bg-white hover:shadow-md hover:border-teal-300 transition-all duration-200 shadow-2xs group"
              >
                <div>
                  <div className="w-7 h-7 rounded-full border border-gray-300 bg-slate-50 flex items-center justify-center mb-2.5 text-navy shadow-2xs">
                    <card.icon className="h-3.5 w-3.5 text-navy/80" strokeWidth={2} />
                  </div>
                  <h3 className="text-[11px] font-extrabold text-navy leading-snug whitespace-pre-line mb-2">
                    {card.title}
                  </h3>
                  <ul className="space-y-1 text-[10px] text-gray-600 font-medium leading-tight">
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
                    className="inline-flex items-center gap-1 text-[10.5px] font-bold text-[#0b7261] hover:text-[#095c4e] group-hover:translate-x-0.5 transition-transform"
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
          4. PROCESS FLOW & REGISTRATION PATHWAYS (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-slate-50 border-t border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Top: 8-Step Process */}
          <div>
            <h3 className="text-center text-lg sm:text-xl font-extrabold text-navy mb-6">
              Our End-to-End Brazil Regulatory Process
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {processSteps.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-gray-200 text-center shadow-2xs">
                  <div className="w-7 h-7 mx-auto rounded-full bg-navy text-[#f5c754] flex items-center justify-center text-xs font-bold mb-2">
                    {step.step}
                  </div>
                  <h4 className="text-[11px] font-extrabold text-navy mb-1">{step.title}</h4>
                  <p className="text-[9.5px] text-gray-500 leading-tight">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom: Pathways Table (4 columns) */}
          <div>
            <h3 className="text-center text-lg sm:text-xl font-extrabold text-navy mb-6">
              ANVISA Registration Pathways by Risk Class
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  Class I
                </span>
                <p className="text-xs font-bold text-navy mb-1">(Low Risk)</p>
                <p className="text-[11px] font-extrabold text-navy mb-2">Notificação (Simplified)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• No pre-market technical review of full dossier</li>
                  <li>• Technical evidence maintained &amp; available</li>
                  <li>• Exempt from pre-market audit</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  Class II
                </span>
                <p className="text-xs font-bold text-navy mb-1">(Moderate Risk)</p>
                <p className="text-[11px] font-extrabold text-navy mb-2">Cadastro (Full Review)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• Notification / Cadastro pathway</li>
                  <li>• Dossier maintenance &amp; post-market oversight</li>
                  <li>• May be subject to pre-market audit</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  Class III
                </span>
                <p className="text-xs font-bold text-navy mb-1">(High Risk)</p>
                <p className="text-[11px] font-extrabold text-navy mb-2">Cadastro (Full Review + Audit Likely)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• ANVISA technical review of dossier</li>
                  <li>• BGMP / CBPF applies to manufacturing sites</li>
                  <li>• Subject to pre-market audit (on-site)</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-extrabold text-[#0b7261] uppercase tracking-wider block mb-1">
                  Class IV
                </span>
                <p className="text-xs font-bold text-navy mb-1">(Highest Risk)</p>
                <p className="text-[11px] font-extrabold text-navy mb-2">Cadastro (Full Review + Audit Mandatory)</p>
                <ul className="text-[10.5px] text-gray-600 space-y-1">
                  <li>• Highest scrutiny on technical file &amp; clinical data</li>
                  <li>• BGMP / CBPF mandatory for manufacturing sites</li>
                  <li>• Subject to pre-market audit (on-site)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. 5-COLUMN INFO BAR (Matching Picture Mockup)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-8 bg-white border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* 1. About ANVISA */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">About ANVISA</h4>
              <p className="text-[10px] text-gray-600 leading-snug mb-2">
                ANVISA (Agência Nacional de Vigilância Sanitária) is the Brazilian Health Regulatory Authority responsible for regulating medical devices, IVDs and related products to ensure safety, efficacy and quality.
              </p>
              <a
                href="https://www.gov.br/anvisa/pt-br"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0b7261] hover:underline"
              >
                gov.br/anvisa <ExternalLink className="h-2.5 w-2.5" />
              </a>
            </div>

            {/* 2. BGMP Legal Framework */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">BGMP Legal Framework</h4>
              <ul className="text-[10px] text-gray-600 space-y-1">
                <li>• RDC 665/2022 - Medical Device GMP</li>
                <li>• RDC 751/2022 - Medical Device Framework</li>
                <li>• RDC 687/2022 - CBPF Certification</li>
                <li>• RDC 848/2024 - Safety &amp; Performance</li>
                <li>• RDC 830/2023 - IVD Framework</li>
              </ul>
            </div>

            {/* 3. Post-Market Obligations */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">Post-Market Obligations</h4>
              <ul className="text-[10px] text-gray-600 space-y-1">
                <li>• Maintain TECNOVIGILÂNCIA system</li>
                <li>• Serious incidents: Immediate reporting</li>
                <li>• Other incidents: Up to 10 working days</li>
                <li>• Annual reports &amp; trend analysis</li>
                <li>• Recall &amp; FSCA execution support</li>
              </ul>
            </div>

            {/* 4. Key Timelines */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-2">Key Timelines (Indicative)</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#0b7261] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    10
                  </div>
                  <p className="text-[9.5px] text-gray-600 leading-tight">
                    <strong>Respond to Exigências:</strong> Up to 10-30 working days
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#051833] text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    60
                  </div>
                  <p className="text-[9.5px] text-gray-600 leading-tight">
                    <strong>ANVISA Review:</strong> Up to 60-90 working days
                  </p>
                </div>
              </div>
            </div>

            {/* 5. ANVISA Audits */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200">
              <h4 className="text-[11px] font-extrabold text-navy mb-1.5">ANVISA Audits</h4>
              <p className="text-[10px] text-gray-600 leading-snug">
                For Classes III &amp; IV, ANVISA conducts pre-market audits. BGMP audit is required for Class III &amp; IV and for foreign manufacturers without BGMP/MDSAP certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. WHY CHOOSE NKB (Dark Navy Box) + READY TO BRING (Map Card)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Why Choose NKB Regovanta for Brazil? */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-[#051833] text-white shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-white mb-4">
                  Why Choose NKB Regovanta for Brazil?
                </h3>
                <div className="space-y-2.5">
                  {[
                    "Deep and current knowledge of ANVISA regulations & processes",
                    "Proven track record of successful ANVISA approvals & BGMP certifications",
                    "Strong network of ANVISA-recognized labs & local partners in Brazil",
                    "Practical, risk-based and business-focused approach",
                    "End-to-end support from strategy to post-market compliance",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/90">
                      <CheckCircle2 className="h-4 w-4 text-[#0b7261] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Ready to Bring Your Device to Brazil? (Green CTA card with Map) */}
            <div className="lg:col-span-6 p-6 rounded-2xl bg-slate-50 border border-gray-200 shadow-md flex items-center justify-between overflow-hidden relative">
              <div className="max-w-xs z-10">
                <h3 className="text-lg font-extrabold text-navy mb-2">
                  Ready to Bring Your Device to Brazil?
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Partner with our Brazil regulatory experts to achieve ANVISA registration, BGMP certification and sustainable market access.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shadow-xs"
                >
                  Talk to Our Brazil Experts <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Map Graphic */}
              <div className="w-36 sm:w-44 shrink-0 opacity-90">
                <img
                  src={brazilMapGraphic}
                  alt="Brazil Map"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* 4 Bottom Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100 text-center">
            <div className="flex flex-col items-center">
              <UserCheck className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">Regulatory Experts</p>
              <p className="text-[9.5px] text-gray-500">20+ Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">Trusted by Medical Device</p>
              <p className="text-[9.5px] text-gray-500">IVD &amp; SaaS Companies</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">High Quality. On Time.</p>
              <p className="text-[9.5px] text-gray-500">Every Time.</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-5 w-5 text-[#0b7261] mb-1.5" />
              <p className="text-[11px] font-extrabold text-navy">Committed to Your</p>
              <p className="text-[9.5px] text-gray-500">Success in Brazil</p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. DEEP-DIVE REGULATORY MODULES (Full Text Sections 1 to 12)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-slate-50/70 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Comprehensive ANVISA Regulatory &amp; BGMP Compliance
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Explore our in-depth methodologies, strategic frameworks, and regulatory decision pathways for the Brazilian market.
            </p>
          </div>

          {/* Section 1: Classification */}
          <div id="sec-1" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 01
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              1. ANVISA Regulatory Strategy &amp; Product Classification
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Correct classification is the foundation of the Brazilian submission. Under RDC 751/2022, medical devices are classified from Class I to IV according to risk. The classification determines whether the product follows notification or registration, the level of evidence expected, BGMP implications and the way changes will be controlled after market entry.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">When This Is Needed</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• A new device or IVD is being introduced in Brazil</li>
                  <li>• The intended use or claims differ from an existing global registration</li>
                  <li>• The manufacturer is uncertain whether the product is a medical device, accessory, SaMD or IVD</li>
                  <li>• A product family needs to be grouped appropriately for Brazilian regularization</li>
                  <li>• An existing classification may be affected by a design, software or intended-use change</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Product qualification and regulatory status assessment</li>
                  <li>• Intended purpose, indications and claims review</li>
                  <li>• Class I-IV classification under RDC 751/2022</li>
                  <li>• IVD classification under RDC 830/2023</li>
                  <li>• Accessory and system/family considerations</li>
                  <li>• Brazilian technical-name and grouping strategy</li>
                  <li>• Notification versus registration pathway assessment</li>
                  <li>• Initial BGMP/CBPF applicability assessment</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">What We Challenge Before Submission:</p>
                <p className="text-xs text-navy/80 font-medium">
                  Does the intended use support the proposed risk class, and does the Brazilian technical name align with the device actually being marketed?
                </p>
              </div>
              <Link
                to="/services/brazil/classification"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Define Your ANVISA Regulatory Pathway →
              </Link>
            </div>
          </div>

          {/* Section 2: Notification & Registration */}
          <div id="sec-2" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 02
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              2. ANVISA Notification &amp; Registration
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              ANVISA uses different pre-market routes according to risk. Class I and II devices generally follow notification, while Class III and IV devices require registration and technical review. The submission must be consistent across the application form, legal manufacturer, Brazilian holder, intended use, models, technical name, classification, labeling and supporting evidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">When This Is Needed</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Launching a Class I-IV medical device in Brazil</li>
                  <li>• Transferring or restructuring a product portfolio under a Brazilian registration holder</li>
                  <li>• Adding models, configurations or family members</li>
                  <li>• Moving from an older Brazilian authorization structure to the current regulatory framework</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Notification strategy for Class I and II devices</li>
                  <li>• Registration strategy for Class III and IV devices</li>
                  <li>• Application and petition planning in Solicita</li>
                  <li>• Technical dossier compilation (RDC 751/2022)</li>
                  <li>• Legal manufacturer and Brazilian holder data alignment</li>
                  <li>• Declarations and authorization documentation</li>
                  <li>• Labeling/IFU package review &amp; translation strategy</li>
                  <li>• ANVISA technical query and exigência response support</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">What We Challenge Before Submission:</p>
                <p className="text-xs text-navy/80 font-medium">
                  Is the selected petition code correct, and do the model list and commercial configurations match the technical dossier?
                </p>
              </div>
              <Link
                to="/services/brazil/registration"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Prepare Your ANVISA Submission →
              </Link>
            </div>
          </div>

          {/* Section 3: Brazil Registration Holder */}
          <div id="sec-3" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 03
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              3. Brazil Registration Holder &amp; Local Regulatory Interface
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Foreign manufacturers require a legally established Brazilian entity to hold the ANVISA notification or registration and interface with the Agency. The local holder is more than an address: it is central to submissions, changes, importation coordination, post-market reporting, field actions and access to the technical documentation that supports the product.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Brazilian holder readiness assessment</li>
                  <li>• Manufacturer-holder quality and regulatory interface</li>
                  <li>• Authorization documentation and power-of-attorney coordination</li>
                  <li>• AFE and activity-scope alignment checks</li>
                  <li>• Technical documentation access expectations</li>
                  <li>• Complaint and adverse-event escalation process</li>
                  <li>• Field-action and recall communication pathway</li>
                  <li>• Change-notification governance &amp; import support</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">What We Challenge Before Submission</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Who owns the master regulatory data and approved Brazilian labeling?</li>
                  <li>• How quickly must the manufacturer notify the holder of design, supplier, site or software changes?</li>
                  <li>• Can the holder access investigation and safety information when ANVISA requests it?</li>
                  <li>• Are complaint, vigilance and field-action responsibilities contractually clear?</li>
                  <li>• Does the holder identity match the labeling and ANVISA records?</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">Senior Regulatory Question:</p>
                <p className="text-xs text-navy/80 font-medium">
                  Can the holder access the information and decisions needed to meet ANVISA obligations throughout the complete product lifecycle?
                </p>
              </div>
              <Link
                to="/services/brazil/brh"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Discuss Brazil Registration Holder Support →
              </Link>
            </div>
          </div>

          {/* Section 4: BGMP / CBPF */}
          <div id="sec-4" className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 text-[#0b7261] text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              Module 04
            </div>
            <h3 className="text-xl font-extrabold text-navy mb-3">
              4. BGMP / CBPF Compliance &amp; ANVISA Inspection Readiness
            </h3>
            <p className="text-xs sm:text-[13px] text-gray-700 font-medium leading-relaxed mb-6">
              Brazilian Good Manufacturing Practice expectations for medical devices and IVDs are consolidated in RDC 665/2022. For manufacturers of Class III and IV devices, ANVISA CBPF certification is governed by RDC 687/2022 and related administrative requirements. The regulatory issue is not simply whether the manufacturer holds ISO 13485 certification; ANVISA expects evidence that the applicable Brazilian GMP requirements are effectively implemented.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">Our Support Includes</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• RDC 665/2022 gap assessment</li>
                  <li>• ISO 13485-to-Brazil GMP mapping</li>
                  <li>• Design control and design history review</li>
                  <li>• Risk-management integration &amp; supplier controls</li>
                  <li>• CAPA, complaint and nonconformity systems</li>
                  <li>• Process validation and special-process controls</li>
                  <li>• Mock inspection and evidence-room preparation</li>
                  <li>• MDSAP certificate/audit scope leverage for ANVISA</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                <h4 className="text-xs font-bold text-navy mb-3 uppercase tracking-wider">What We Challenge Before Submission</h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  <li>• Can the company demonstrate implementation through records, not only SOPs?</li>
                  <li>• Are design changes linked to risk management and verification/validation?</li>
                  <li>• Are supplier controls commensurate with component/process risk?</li>
                  <li>• Are complaints feeding CAPA and risk evaluation?</li>
                  <li>• Can manufacturing sites explain outsourced processes and critical suppliers consistently?</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-navy">MDSAP Consideration:</p>
                <p className="text-xs text-navy/80 font-medium">
                  Where MDSAP evidence is relevant to ANVISA certification strategy, we assess how the available audit/certificate scope can be leveraged and whether any Brazil-specific gaps remain.
                </p>
              </div>
              <Link
                to="/services/brazil/bgmp"
                className="inline-flex items-center gap-1.5 bg-[#0b7261] hover:bg-[#095c4e] text-white text-xs font-bold px-4 py-2 rounded-md transition-all shrink-0 shadow-2xs"
              >
                Prepare for BGMP / CBPF Review →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FREQUENTLY ASKED QUESTIONS (10 Comprehensive FAQs)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight mb-3">
              Frequently Asked Questions (ANVISA &amp; Brazil)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Key questions manufacturers ask when registering medical devices, IVDs and SaMD in Brazil.
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
        title="Your Regulatory Partner for Brazil Market Access"
        description="Whether you are classifying a new device, appointing a Brazilian registration holder, preparing an ANVISA notification or registration, closing BGMP gaps, coordinating testing, responding to an ANVISA question or managing post-market changes, NKB Regovanta supports the complete Brazilian regulatory lifecycle."
      />
    </div>
  );
}
