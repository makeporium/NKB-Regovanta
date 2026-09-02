import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  Stethoscope,
  FlaskConical,
  Pill,
  Syringe,
  Layers,
  Settings,
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
  Award,
  Clock,
  ExternalLink,
  Target,
  AlertTriangle,
  FileText,
  Activity,
  Microscope,
  Cpu,
  Package,
  Truck,
  Building2,
  RefreshCw,
  Search,
  Zap,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/drug-device-combination-products")({
  head: () => ({
    meta: [
      {
        title:
          "Drug-Device Combination Product Consulting for Global Regulatory Compliance | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "End-to-end regulatory consulting for Drug-Device Combination Products. FDA 21 CFR Part 4, 21 CFR Part 820/QMSR, EU MDR Article 117, Notified Body Opinion (NBOp), DHF, ISO 14971, and usability engineering.",
      },
      {
        name: "keywords",
        content:
          "Drug-device combination product, combination product regulatory consulting, FDA 21 CFR Part 4, EU MDR Article 117, Notified Body Opinion NBOp, prefilled syringe regulatory, autoinjector DHF, drug-eluting stent, PMOA, ISO 14971 combination products, IEC 62366 usability, GSPR checklist",
      },
      {
        property: "og:title",
        content:
          "Drug-Device Combination Product Consulting | FDA, EU MDR & Article 117 | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Comprehensive regulatory strategy, design controls, risk management, and submission-ready technical documentation for drug-device combination products worldwide.",
      },
      {
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/drug-device-combination-products",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/drug-device-combination-products",
      },
    ],
  }),
  component: DrugDeviceCombinationPage,
});

interface AccordionCard {
  icon: any;
  title: string;
  description: string;
}

interface PortfolioModule {
  id: string;
  title: string;
  cards: AccordionCard[];
}

function DrugDeviceCombinationPage() {
  const [openAccordion, setOpenAccordion] = useState<string>("design-doc");

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? "" : id));
  };

  const portfolioModules: PortfolioModule[] = [
    {
      id: "reg-strategy",
      title: "Regulatory Strategy & Product Classification",
      cards: [
        {
          icon: Target,
          title: "Combination Product Qualification",
          description:
            "Determine drug-device combination product classification, cross-jurisdictional borderline status, and regulatory applicability under global health authorities.",
        },
        {
          icon: Layers,
          title: "Regulatory Pathway Mapping",
          description:
            "Identify applicable submission pathways under FDA 21 CFR Part 4, 21 CFR Part 820 / QMSR, EU MDR 2017/745, ISO 13485, ISO 14971, and ICH guidelines.",
        },
        {
          icon: FlaskConical,
          title: "Primary Mode of Action (PMOA)",
          description:
            "Assess Primary Mode of Action (PMOA), determine lead center jurisdiction (CDER, CDRH, or CBER), and formulate FDA 513(g) or Request for Designation (RFD) filings.",
        },
        {
          icon: Award,
          title: "Global Market Access Roadmap",
          description:
            "Develop market-specific regulatory strategy roadmaps tailored for US FDA (NDA/BLA/IND/510k), EU (Article 117), UK MHRA, CDSCO India, and Asian health authorities.",
        },
      ],
    },
    {
      id: "design-doc",
      title: "Design & Development Documentation",
      cards: [
        {
          icon: Stethoscope,
          title: "Design Planning & User Needs",
          description:
            "Design planning, clinical stakeholder user needs, design inputs & outputs documentation tailored for drug-delivery device interfaces.",
        },
        {
          icon: FileCheck2,
          title: "Design Transfer & DHF / DMR",
          description:
            "Design transfer, change control, Structured Design History File (DHF) & Device Master Record (DMR) documentation support.",
        },
        {
          icon: Search,
          title: "Design Verification & Validation",
          description:
            "Design verification, analytical & clinical validation & design review documentation support across delivery tolerances and container closure integrity.",
        },
        {
          icon: FileText,
          title: "Technical File & Specifications",
          description:
            "Technical File, Design Dossier & Product Specifications File preparation for global compliance across pharmaceutical and medical device standards.",
        },
      ],
    },
    {
      id: "risk-quality",
      title: "Risk Management & Quality Systems",
      cards: [
        {
          icon: AlertTriangle,
          title: "ISO 14971 Risk Management File",
          description:
            "ISO 14971-compliant Risk Management File, hazard identification, interface failure risk analysis, and overall benefit-risk evaluation.",
        },
        {
          icon: Activity,
          title: "Failure Mode Analysis (FMEA / FTA)",
          description:
            "Use-related risk analysis (URRA), design FMEA (dFMEA), process FMEA (pFMEA), and Fault Tree Analysis (FTA) across drug-device interactions.",
        },
        {
          icon: ShieldCheck,
          title: "Risk Controls & Residual Risk",
          description:
            "Benefit-risk evaluation, risk control verification, residual risk justification, and post-production risk surveillance review.",
        },
        {
          icon: Cpu,
          title: "IEC 62366-1 Usability Engineering",
          description:
            "IEC 62366-1 usability engineering, human factors engineering (HFE) protocols, formative evaluations, and summative human factors studies.",
        },
      ],
    },
    {
      id: "gspr-compliance",
      title: "GSPR & Essential Requirements Compliance",
      cards: [
        {
          icon: FileCheck2,
          title: "EU MDR Annex I GSPR Checklist",
          description:
            "EU MDR Annex I General Safety & Performance Requirements (GSPR) checklist preparation with comprehensive evidence cross-referencing.",
        },
        {
          icon: Layers,
          title: "Standards & Testing Evidence Mapping",
          description:
            "Mapping of applicable international standards (ISO, IEC, ASTM, EN, Pharmacopoeia), testing evidence & compliance documentation.",
        },
        {
          icon: RefreshCw,
          title: "Legacy MDD to MDR Remediation",
          description:
            "Essential Requirements Checklist support for legacy MDD combination products transitioning to EU MDR conformity.",
        },
        {
          icon: ShieldCheck,
          title: "GSPR Technical Review",
          description:
            "GSPR compliance review and audit readiness aligned with EU MDR technical documentation and Notified Body review expectations.",
        },
      ],
    },
    {
      id: "tech-validation",
      title: "Technical Documentation & Validation Support",
      cards: [
        {
          icon: Pill,
          title: "Formulation & Product Specifications",
          description:
            "Product description, intended clinical use, drug formulation compatibility, extractables/leachables (E&L), and device specification documentation.",
        },
        {
          icon: Microscope,
          title: "Clinical & Performance Testing",
          description:
            "Clinical evaluation reports (CER), delivery dose accuracy testing, device software lifecycle documentation (IEC 62304), and cyber controls.",
        },
        {
          icon: Package,
          title: "Biocompatibility & Sterility Validation",
          description:
            "ISO 10993 biocompatibility evidence, terminal/aseptic sterilization validation, sterile packaging integrity, and real-time/accelerated shelf-life aging studies.",
        },
        {
          icon: Truck,
          title: "Labeling, IFU & Post-Market Support",
          description:
            "Labeling, Instructions for Use (IFU), CAPA systems, customer complaint handling, and Post-Market Surveillance (PMS / PMCF) documentation support.",
        },
      ],
    },
    {
      id: "art-117",
      title: "Article 117 of EU MDR 2017/745 & Notified Body Opinion (NBOp) Support",
      cards: [
        {
          icon: FileText,
          title: "Article 117 Applicability Assessment",
          description:
            "Article 117 of EU MDR 2017/745 amends Directive 2001/83/EC applicability assessment for medicinal products incorporating integral device components.",
        },
        {
          icon: Award,
          title: "NBOp Technical Dossier Compilation",
          description:
            "Technical documentation, GSPR evidence matrix, ISO 14971 risk management, and usability evidence compilation for Notified Body review.",
        },
        {
          icon: Building2,
          title: "Notified Body Coordination & Liaison",
          description:
            "Coordination with designated EU Notified Bodies (NB), application structuring, scheduling, and deficiency response support.",
        },
        {
          icon: CheckCircle2,
          title: "Deficiency Resolution & Final Opinion",
          description:
            "Support for NB review of design, clinical evidence, IFU, sterility, and packaging validation documentation to secure the final Notified Body Opinion.",
        },
      ],
    },
  ];

  const whatSetsUsApart = [
    {
      icon: ShieldCheck,
      title: "Extensive Experience Across Drug, Device & Combination Regulations",
      text: "Deep expertise spanning FDA 21 CFR Part 4, 21 CFR Part 820 / QMSR, ISO 13485, EU MDR 2017/745 Article 117, and international ICH guidelines.",
    },
    {
      icon: Target,
      title: "Integrated Drug & Device Quality Management Systems",
      text: "Bridging the gap between cGMP pharmaceutical manufacturing (21 CFR Part 210/211) and medical device design controls (21 CFR Part 820 / ISO 13485).",
    },
    {
      icon: Zap,
      title: "Global Consulting Support from Concept to Submission",
      text: "End-to-end strategic advisory covering PMOA determination, DHF structuring, human factors engineering, testing coordination, and dossier assembly.",
    },
    {
      icon: Award,
      title: "Proven Capability in Risk Management, DHF & Audit Readiness",
      text: "Robust ISO 14971 risk management, CAPA implementation, Notified Body Opinion (NBOp) defense, and global health authority query resolution.",
    },
  ];

  const nkbAdvantage = [
    {
      title: "End-to-End Regulatory Consulting",
      desc: "Holistic regulatory lifecycle management from early qualification and classification through design controls, testing, and dossier authorization.",
    },
    {
      title: "Dual Compliance Integration",
      desc: "Synchronizing pharmaceutical safety, stability, and efficacy with medical device hardware reliability, software validation, and usability.",
    },
    {
      title: "Design Control & DHF Mastery",
      desc: "Comprehensive Design History File (DHF), Device Master Record (DMR), and design transfer documentation built for rigorous audit inspection.",
    },
    {
      title: "Audit-Ready Dossiers & Submissions",
      desc: "Submission-ready technical documentation formatted for US FDA eSTAR / IND / NDA / BLA, EU Article 117 NBOp, UK MHRA, and CDSCO licensing.",
    },
  ];

  const relatedServices = [
    { label: "Design History File (DHF)", to: "/services/technical-documentation" },
    { label: "CE Marking & EU MDR Compliance", to: "/services/eu" },
    { label: "UKCA Marking & UKRP Support", to: "/services/uk" },
    { label: "US FDA 510(k), PMA & Agent Services", to: "/services/usa" },
    { label: "Saudi Arabia SFDA Registration", to: "/services/saudi-arabia" },
    { label: "CDSCO India Medical Device & Drug Licensing", to: "/services/india" },
    { label: "ISO 13485 & MDSAP Quality Systems", to: "/services/iso-13485" },
    { label: "Global Medical Device Classification", to: "/services/regulatory-affairs" },
  ];

  const faqs = [
    {
      q: "What is a drug-device combination product?",
      a: "A drug-device combination product is a therapeutic health product composed of two or more regulated components—such as a drug and a medical device, a biologic and a device, or a drug and a biologic—that are physically combined as a single entity, co-packaged together, or cross-labeled for combined use. Common examples include prefilled syringes, auto-injectors, insulin delivery pens, drug-eluting cardiovascular stents, transdermal therapeutic patches, metered-dose inhalers (MDIs), and wound dressings infused with antimicrobial agents.",
    },
    {
      q: "How are combination products regulated by the US FDA?",
      a: "In the United States, the FDA regulates combination products under 21 CFR Part 3 and 21 CFR Part 4 based on the product's Primary Mode of Action (PMOA). The Office of Combination Products (OCP) assigns the lead review jurisdiction to the appropriate center—CDER (Center for Drug Evaluation and Research) for drug PMOA, CDRH (Center for Devices and Radiological Health) for device PMOA, or CBER (Center for Biologics Evaluation and Research) for biologic PMOA. Even when CDER leads the review of an NDA/BLA, the device constituent must demonstrate compliance with applicable 21 CFR Part 820 design controls.",
    },
    {
      q: "What is Article 117 under EU MDR 2017/745?",
      a: "Article 117 of the EU Medical Device Regulation (EU MDR 2017/745) amended Directive 2001/83/EC regarding medicinal products. For single integral drug-device combination products governed as medicinal products (such as prefilled syringes, prefilled pens, or dry-powder inhalers intended for administration of a specific medicine), the marketing authorization application (MAA) to the EMA or national competent authority must include a Notified Body Opinion (NBOp) confirming that the device component complies with the relevant General Safety and Performance Requirements (GSPRs) of Annex I of the EU MDR.",
    },
    {
      q: "How is the Primary Mode of Action (PMOA) determined?",
      a: "The Primary Mode of Action (PMOA) is the single mode of action expected to make the greatest contribution to the overall intended therapeutic effect of the combination product. If the therapeutic effect is primarily achieved by pharmacological, immunological, or metabolic means, the product is regulated as a drug/biologic. If the primary effect is achieved by mechanical, physical, or structural means, the product is regulated as a medical device. Manufacturers can file a Request for Designation (RFD) or Pre-RFD with the FDA to obtain a binding jurisdictional assignment.",
    },
    {
      q: "What documentation is required for a drug-device combination product?",
      a: "Documentation requirements span both pharmaceutical and medical device domains: product classification and PMOA justification; Design History File (DHF) including user needs, design inputs, design verification and validation (V&V), design reviews, and design transfer; ISO 14971 Risk Management File (URRA, dFMEA, pFMEA); usability engineering files (IEC 62366-1); container-closure integrity and compatibility studies (extractables/leachables); ISO 10993 biocompatibility; sterilization validation; packaging and shelf-life stability; clinical evaluation and delivery accuracy evidence; and regulatory submission dossiers.",
    },
    {
      q: "Which quality and risk standards apply (ISO 13485, ISO 14971, IEC 62366)?",
      a: "Manufacturers must implement dual quality and risk frameworks: ISO 13485 / FDA 21 CFR Part 820 (QMSR) for medical device design controls, ISO 14971 for comprehensive risk management, IEC 62366-1 for usability and human factors engineering, ISO 10993 for biological evaluation, and relevant cGMP standards (FDA 21 CFR Part 210/211, EU GMP, WHO GMP) for pharmaceutical manufacturing.",
    },
    {
      q: "What is the role of a Notified Body Opinion (NBOp)?",
      a: "A Notified Body Opinion (NBOp) is a formal assessment issued by a designated EU MDR Notified Body confirming that the device constituent of an integral medicinal product satisfies all applicable Annex I GSPRs. The pharmaceutical marketing authorization holder must submit this NBOp document as part of the Marketing Authorization Dossier (Module 3) to the European Medicines Agency (EMA) or national competent authorities before marketing authorization can be granted.",
    },
    {
      q: "How long does combination product approval take?",
      a: "Combination product approval timelines depend on the regulatory jurisdiction, product complexity, PMOA classification, and submission pathway. In the US, an NDA/BLA review typically takes 10 to 12 months following IND phases, while a 510(k) pathway for a device-led combination product takes approximately 3 to 6 months. In the EU, obtaining a Notified Body Opinion (NBOp) generally takes 3 to 6 months, followed by the standard 210-day MAA review by the EMA or national authorities.",
    },
    {
      q: "Which global regulatory authorities govern drug-device combination products?",
      a: "Key regulatory authorities include the US Food and Drug Administration (FDA - CDER/CDRH/CBER/OCP), the European Medicines Agency (EMA) and EU Notified Bodies, the UK Medicines and Healthcare products Regulatory Agency (MHRA), Health Canada, Australia's Therapeutic Goods Administration (TGA), Japan's PMDA, Saudi Arabia's SFDA, and India's Central Drugs Standard Control Organization (CDSCO).",
    },
    {
      q: "How does NKB Regovanta support drug-device combination product documentation?",
      a: "NKB Regovanta provides end-to-end regulatory consulting for combination products: regulatory pathway strategy, PMOA determination, Design History File (DHF) authoring, ISO 14971 risk management, human factors usability studies (IEC 62366), EU MDR Annex I GSPR checklists, Notified Body Opinion (NBOp) dossier compilation, technical file gap assessments, and post-market surveillance systems. Our consultants ensure audit readiness and accelerate global market approvals.",
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-slate-100 pt-10 pb-12 border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy/55 font-semibold mb-5">
            <Link to="/" className="hover:text-navy transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-navy transition-colors">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-navy">Drug-Device Combination Products</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services Overview
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              NKB REGOVANTA | DRUG-DEVICE COMBINATION PRODUCTS CONSULTING
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[44px]">
              Drug-Device Combination Product Consulting for Global Regulatory Compliance
            </h1>
            <p className="text-[16px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              NKB Regovanta provides specialized consulting for drug-device combination products, supporting pharmaceutical and medical device manufacturers in defining global regulatory pathways, preparing compliant design and development documentation, managing lifecycle product risks, and compiling submission-ready technical files. Our integrated approach aligns both drug and medical device regulatory requirements, reducing uncertainty and accelerating market access across the US FDA, EU MDR Article 117, UK MHRA, CDSCO India, and global markets.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Discuss Your Combination Product Project <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy text-[13px] font-semibold px-6 py-3.5 rounded-md border border-gray-300 transition-all shadow-xs"
              >
                Explore Service Portfolio <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS & HIGHLIGHTS */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">FDA 21 CFR 4</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Combination Product cGMP</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">EU MDR Art 117</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Notified Body Opinion (NBOp)</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">ISO 14971</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Integrated Risk Management</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">IEC 62366-1</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Human Factors &amp; Usability</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ACCORDION PORTFOLIO (MATCHING USER MOCKUP EXACTLY) */}
      <section id="portfolio" className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Comprehensive Service Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              Drug-Device Combination Products Documentation Service Portfolio
            </h2>
            <p className="text-sm text-navy/75 font-medium mt-3">
              Click on each service module below to explore our detailed documentation, verification protocols, and regulatory deliverables.
            </p>
          </div>

          <div className="space-y-4 max-w-6xl mx-auto">
            {portfolioModules.map((module) => {
              const isOpen = openAccordion === module.id;
              return (
                <div
                  key={module.id}
                  className="rounded-2xl overflow-hidden transition-all duration-300 shadow-xs"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleAccordion(module.id)}
                    className={`w-full flex items-center justify-between px-6 py-4.5 text-left font-bold text-[16px] sm:text-[18px] transition-colors ${
                      isOpen
                        ? "bg-[#1e3a8a] text-white"
                        : "bg-white text-[#1e3a8a] hover:bg-blue-50/60 border border-gray-200"
                    }`}
                  >
                    <span>{module.title}</span>
                    <span
                      className={`h-7 w-7 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform ${
                        isOpen ? "bg-white/20 text-white" : "bg-blue-100 text-[#1e3a8a]"
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  {/* Accordion Expanded Content (Navy Card with Red Accent & 4 Sub-Columns) */}
                  {isOpen && (
                    <div className="bg-[#1e3a8a] text-white p-6 sm:p-8 border-b-4 border-red-600 animate-in fade-in duration-300">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/20">
                        {module.cards.map((card, idx) => {
                          const IconComp = card.icon;
                          return (
                            <div
                              key={idx}
                              className={`flex flex-col pt-5 lg:pt-0 ${
                                idx !== 0 ? "lg:pl-6" : ""
                              }`}
                            >
                              <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-4 text-white shrink-0">
                                <IconComp className="h-6 w-6 stroke-[1.75]" />
                              </div>
                              <h3 className="text-sm font-extrabold text-white mb-2 leading-snug">
                                {card.title}
                              </h3>
                              <p className="text-xs text-white/85 font-medium leading-relaxed">
                                {card.description}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHAT SETS US APART */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Execution Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              What Sets Us Apart in Combination Product Consulting
            </h2>
            <p className="text-sm text-navy/75 font-medium mt-3">
              Global exposure, structured thinking, and execution-ready regulatory and technical expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatSetsUsApart.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-50 border border-gray-200/90 shadow-2xs hover:border-[#0b3a96]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#0b3a96] flex items-center justify-center mb-4">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <h3 className="text-[15px] font-extrabold text-navy mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-navy/75 font-medium leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Narrative Box */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-950 text-white shadow-lg">
            <div className="max-w-4xl">
              <h3 className="text-xl font-bold mb-3">
                Integrated Strategy Across Drug and Device Regulatory Domains
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Navigating the convergence of pharmaceutical and medical device regulations requires specialized, cross-functional mastery. At NKB Regovanta, we assist combination product developers in formulating defensible regulatory strategies, establishing ISO 13485 / 21 CFR Part 820 design controls, executing ISO 14971 hazard analyses, generating IEC 62366-1 usability data, and compiling compliant dossiers for FDA IND/NDA/BLA submissions and EU MDR Article 117 Notified Body Opinions. This structured rigor minimizes deficiency cycles, safeguards compliance, and expedites worldwide commercialization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NKB REGOVANTA ADVANTAGE */}
      <section className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              The NKB Regovanta Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              Strategic Value Across Every Stage of Product Development
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nkbAdvantage.map((adv, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-gray-200 shadow-2xs flex items-start gap-4"
              >
                <div className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 text-[#0b7261] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-navy mb-1.5">{adv.title}</h3>
                  <p className="text-xs text-navy/75 font-medium leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RELATED SERVICES GRID */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-extrabold text-navy">
              Explore Related Regulatory Services
            </h2>
            <p className="text-xs text-navy/70 font-medium mt-1">
              Cross-market regulatory and technical documentation capabilities
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {relatedServices.map((srv, idx) => (
              <Link
                key={idx}
                to={srv.to}
                className="p-4 rounded-2xl bg-slate-50 border border-gray-200/90 hover:border-[#0b3a96] hover:bg-blue-50/50 transition-all flex items-center justify-between group"
              >
                <span className="text-xs font-bold text-navy group-hover:text-[#0b3a96] transition-colors leading-tight">
                  {srv.label}
                </span>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-[#0b3a96] group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (10 INTERACTIVE FAQS) */}
      <section className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Expert Regulatory Answers
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              Frequently Asked Questions: Drug-Device Combination Products
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs hover:border-[#0b3a96]/40 transition-colors"
              >
                <h3 className="text-[15px] sm:text-base font-extrabold text-navy mb-2 flex items-start gap-2.5">
                  <HelpCircle className="h-5 w-5 text-[#0b3a96] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-[13px] text-navy/75 font-medium leading-relaxed pl-7.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA BAND */}
      <CTABand
        title="Planning a Drug-Device Combination Product Regulatory Submission?"
        description="Connect with our senior combination product regulatory strategists to structure your PMOA classification, DHF design controls, risk files, and EU MDR Article 117 Notified Body Opinion."
      />
    </>
  );
}
