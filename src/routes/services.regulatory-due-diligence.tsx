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
  Scale,
  TrendingUp,
  FileSearch,
  BadgeAlert,
  BarChart3,
  Landmark,
  FileSpreadsheet,
} from "lucide-react";
import { CTABand } from "@/components/site/Bits";

export const Route = createFileRoute("/services/regulatory-due-diligence")({
  head: () => ({
    meta: [
      {
        title:
          "Regulatory Due Diligence for Medical Devices & IVDs | M&A and Investment Audits | NKB Regovanta",
      },
      {
        name: "description",
        content:
          "Decision-grade Regulatory Due Diligence for Medical Device and IVD mergers, acquisitions, private equity investments, and licensing deals. Risk classification, QMS maturity, FDA 483 audits, MDR/IVDR readiness, and valuation impact analysis.",
      },
      {
        name: "keywords",
        content:
          "Regulatory due diligence medical devices, IVD due diligence, medical device M&A regulatory audit, private equity medical device compliance, FDA 483 audit due diligence, EU MDR due diligence, ISO 13485 compliance audit, medical technology valuation risk",
      },
      {
        property: "og:title",
        content:
          "Regulatory Due Diligence for Medical Devices & IVDs | NKB Regovanta",
      },
      {
        property: "og:description",
        content:
          "Uncover hidden regulatory risks, approval dependencies, and compliance liabilities before you acquire, invest, or partner. Decision-grade intelligence from NKB Regovanta.",
      },
      {
        property: "og:url",
        content: "https://www.nkbregovanta.com/services/regulatory-due-diligence",
      },
      {
        property: "og:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "Regulatory Due Diligence for Medical Devices & IVDs | NKB Regovanta",
      },
      {
        name: "twitter:description",
        content:
          "Uncover hidden regulatory risks, approval dependencies, and compliance liabilities before you acquire, invest, or partner. Decision-grade intelligence from NKB Regovanta.",
      },
      {
        name: "twitter:image",
        content: "https://www.nkbregovanta.com/og-image.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://www.nkbregovanta.com/services/regulatory-due-diligence",
      },
    ],
  }),
  component: RegulatoryDueDiligencePage,
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

function RegulatoryDueDiligencePage() {
  const [openAccordion, setOpenAccordion] = useState<string>("reg-pathway");

  const toggleAccordion = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? "" : id));
  };

  const portfolioModules: PortfolioModule[] = [
    {
      id: "reg-pathway",
      title: "Regulatory Pathway & Approval Status Assessment",
      cards: [
        {
          icon: Target,
          title: "Classification & Scope Validation",
          description:
            "Independent verification of medical device and IVD risk classifications, intended clinical use boundaries, and regulatory qualification across global target markets.",
        },
        {
          icon: FileCheck2,
          title: "Approval Route & Dossier Verification",
          description:
            "Rigorous audit of active and planned regulatory approvals (FDA 510(k)/PMA, EU MDR/IVDR CE Marks, UKCA, CDSCO, SFDA, TGA) against commercial marketed claims.",
        },
        {
          icon: Activity,
          title: "Submission Status & Commitments",
          description:
            "Audit of active health authority submissions, open review questions, deficiency letters, annual regulatory filings, and mandated post-approval clinical commitments.",
        },
        {
          icon: Clock,
          title: "Approval Dependencies & Timelines",
          description:
            "Identification of regulatory bottlenecks, pending transition deadlines (EU MDR/IVDR extensions), and clearance timelines impacting deal closing schedules and valuation.",
        },
      ],
    },
    {
      id: "compliance-doc",
      title: "Compliance & Technical Documentation Review",
      cards: [
        {
          icon: FileText,
          title: "Dossier & DHF Completeness Audit",
          description:
            "Technical file, STED dossier, and Design History File (DHF) completeness assessment against current international regulatory and engineering standards.",
        },
        {
          icon: ShieldCheck,
          title: "QMS & ISO 13485 Compliance",
          description:
            "Evaluation of Quality Management System maturity, MDSAP compliance, FDA 21 CFR Part 820 (QMSR) alignment, and notified body certification validity.",
        },
        {
          icon: AlertTriangle,
          title: "Labeling, IFU & Promotional Claims",
          description:
            "Scrutiny of commercial packaging artwork, Instructions for Use (IFU), user manuals, digital marketing, and off-label marketing liability exposure.",
        },
        {
          icon: RefreshCw,
          title: "Post-Market Vigilance Obligations",
          description:
            "Review of complaint handling files, medical device reporting (MDR) histories, global vigilance adverse incident trends, and recall execution capability.",
        },
      ],
    },
    {
      id: "mfg-quality",
      title: "Manufacturing & Quality System Due Diligence",
      cards: [
        {
          icon: Building2,
          title: "Manufacturing Site Authorizations",
          description:
            "Audit of establishment registrations, drug/device manufacturing licenses, cleanroom environmental monitoring data, and foreign facility permits.",
        },
        {
          icon: Layers,
          title: "QMS Scope vs. Supplier Controls",
          description:
            "Assessment of quality management coverage across internal facilities, contract manufacturers (CMOs), and critical tier-1 raw material and sterilization suppliers.",
        },
        {
          icon: Search,
          title: "Inspection Readiness (FDA / NB / CDSCO)",
          description:
            "Evaluation of facility inspection readiness against FDA QSIT / QMSR methods, Notified Body unannounced audit requirements, and state drug controller standards.",
        },
        {
          icon: BadgeAlert,
          title: "Audit Observations & CAPA Remediation",
          description:
            "Critical appraisal of historical FDA Form 483s, warning letters, Notified Body major nonconformities, and verification of closed corrective action (CAPA) efficacy.",
        },
      ],
    },
    {
      id: "predicate-benchmark",
      title: "Predicate, Benchmark & Regulatory Precedent Analysis",
      cards: [
        {
          icon: Scale,
          title: "Comparable Device Benchmarking",
          description:
            "Identification and side-by-side technological benchmarking of approved predicate devices, clinical endpoints, and competitor regulatory positioning.",
        },
        {
          icon: FileSearch,
          title: "Substantial Equivalence & Precedents",
          description:
            "Review of historical 510(k) summaries, De Novo reclassifications, and PMA precedents to validate scientific defensibility of planned submission pathways.",
        },
        {
          icon: TrendingUp,
          title: "Competitive Regulatory Positioning",
          description:
            "Mapping regulatory barriers to entry, patent-regulatory exclusivity intersections, breakthrough device designations, and fast-track opportunities.",
        },
        {
          icon: Sparkles,
          title: "Approval Learnings & Recall Precedents",
          description:
            "Extraction of regulatory intelligence from competitor MAUDE adverse event reports, recall histories, and FDA Advisory Committee panel proceedings.",
        },
      ],
    },
    {
      id: "clinical-evidence",
      title: "Clinical, Usability & Performance Evidence Assessment",
      cards: [
        {
          icon: Microscope,
          title: "Clinical & Performance Data Appraisal",
          description:
            "Critical review of Clinical Evaluation Reports (CER), Performance Evaluation Reports (PER), bench testing datasets, animal studies, and real-world evidence (RWE).",
        },
        {
          icon: Award,
          title: "MDR / FDA Evidence Alignment",
          description:
            "Benchmarking clinical data packages against stringent EU MDR Level of Clinical Evidence requirements, FDA eSTAR expectations, and PMDA standards.",
        },
        {
          icon: AlertTriangle,
          title: "Evidence Gap & Study Liability Analysis",
          description:
            "Identification of clinical evidence gaps, statistical power deficiencies, unvalidated clinical claims, and missing biocompatibility / sterilization validation.",
        },
        {
          icon: FileSpreadsheet,
          title: "PMCF & Post-Market Study Obligations",
          description:
            "Quantification of mandated Post-Market Clinical Follow-up (PMCF) studies, clinical registries, post-approval safety studies, and associated ongoing cost burdens.",
        },
      ],
    },
    {
      id: "risk-liability",
      title: "Regulatory Risk, Liability & Post-Transaction Remediation",
      cards: [
        {
          icon: BadgeAlert,
          title: "Risk Stratification (Critical, Major, Minor)",
          description:
            "Categorization of discovered regulatory and compliance liabilities into Critical (deal-breaker), Major (price adjustment/escrow), and Manageable risks.",
        },
        {
          icon: Scale,
          title: "Enforcement Exposure & Warning Letters",
          description:
            "Assessment of open FDA warning letters, import alerts (DWPE), CE certificate suspensions, product seizures, or civil money penalty exposures.",
        },
        {
          icon: BarChart3,
          title: "Financial Impact & Valuation Adjustment",
          description:
            "Translating regulatory remediation expenditures, delayed market access milestones, and compliance penalties into quantitative valuation and EBITDA adjustments.",
        },
        {
          icon: Zap,
          title: "Pre-Close & 100-Day Action Roadmaps",
          description:
            "Formulating clear pre-close warranty protections, indemnity clauses, escrow holdbacks, and structured 100-day post-acquisition remediation roadmaps.",
        },
      ],
    },
  ];

  const whatSetsUsApart = [
    {
      icon: ShieldCheck,
      title: "Cross-Market Global Regulatory Mastery",
      text: "Direct subject-matter expertise spanning US FDA, EU MDR/IVDR, UK MHRA, India CDSCO, Saudi Arabia SFDA, Australia TGA, and Health Canada.",
    },
    {
      icon: Target,
      title: "Comprehensive Device & IVD Coverage",
      text: "Evaluation capabilities spanning software (SaMD/AI), electro-medical devices, active implants, sterile disposables, IVD reagents, and drug-device combination products.",
    },
    {
      icon: BarChart3,
      title: "M&A, Private Equity & Strategic Deal Experience",
      text: "Extensive track record supporting private equity funds, venture capital firms, investment banks, corporate development teams, and strategic buyers.",
    },
    {
      icon: Award,
      title: "Decision-Grade, Business-Actionable Intelligence",
      text: "We translate complex regulatory non-compliances into tangible deal terms, purchase price adjustments, escrow holdbacks, and practical remediation timelines.",
    },
  ];

  const nkbAdvantage = [
    {
      title: "Independent, Execution-Neutral Assessments",
      desc: "Completely objective regulatory audits free from internal corporate bias, providing investors and acquirers with unvarnished compliance realities.",
    },
    {
      title: "Translation of Regulatory Exposure into Valuation Impact",
      desc: "Quantifying the financial cost, engineering effort, and commercial delay required to remediate technical dossiers, QMS gaps, or inspection findings.",
    },
    {
      title: "Market-Wise, Approval-Focused Visibility",
      desc: "Detailed mapping of target company product lines across global jurisdictions to identify true market readiness versus aspirational regulatory projections.",
    },
    {
      title: "Practical Pre-Close & Post-Transaction Roadmaps",
      desc: "Delivering actionable closing conditions, reps & warranties input, escrow structuring recommendations, and 100-day post-close compliance execution plans.",
    },
  ];

  const relatedServices = [
    { label: "Design History File (DHF) Audit", to: "/services/technical-documentation" },
    { label: "CE Marking & EU MDR Compliance", to: "/services/eu" },
    { label: "UKCA Marking & UKRP Support", to: "/services/uk" },
    { label: "US FDA 510(k), PMA & Agent Services", to: "/services/usa" },
    { label: "Drug-Device Combination Products", to: "/services/drug-device-combination-products" },
    { label: "CDSCO India Regulatory Licensing", to: "/services/india" },
    { label: "ISO 13485 & MDSAP Quality Systems", to: "/services/iso-13485" },
    { label: "Audit & Regulatory Inspection Readiness", to: "/services/audit-compliance" },
  ];

  const faqs = [
    {
      q: "When is regulatory due diligence needed for medical device and IVD companies?",
      a: "Regulatory due diligence is essential during mergers and acquisitions (M&A), private equity buyouts, venture capital investments, corporate licensing agreements, distributor evaluations, and joint venture partnerships. It is conducted during the confirmatory due diligence phase before deal closing to uncover hidden non-compliances, misclassified devices, vulnerable approvals, unresolved FDA 483 observations, or looming EU MDR/IVDR transition liabilities that could impact valuation or disrupt commercial operations.",
    },
    {
      q: "What does NKB Regovanta's regulatory due diligence report cover?",
      a: "Our due diligence deliverables provide comprehensive, decision-grade intelligence: (1) Product classification and intended use validation; (2) Global approval verification and dossier completeness audits; (3) Quality Management System (ISO 13485 / FDA QMSR) maturity; (4) Manufacturing site permits, facility inspection history, and CAPA logs; (5) Predicate device defensibility and regulatory precedent benchmarking; (6) Clinical evaluation (CER/PER) and evidence gap analysis; (7) Stratified regulatory risk classification (Critical, Major, Manageable); and (8) Quantitative valuation impact modeling with structured pre-close and post-close remediation action plans.",
    },
    {
      q: "How does regulatory due diligence impact deal valuation and transaction terms?",
      a: "Regulatory due diligence translates technical non-compliances into commercial and financial terms. For example, if a target company's flagship product requires remediation from legacy MDD to EU MDR, has unsupported clinical claims, or faces an imminent FDA inspection with open CAPAs, our report quantifies the required remediation budget, delayed market entry timelines, and revenue risk. Dealmakers use this intelligence to negotiate purchase price reductions, structure specific indemnity clauses, require special escrow holdbacks, or adjust closing conditions.",
    },
    {
      q: "Does NKB Regovanta support post-transaction regulatory integration and remediation?",
      a: "Yes. In addition to pre-transaction risk identification, NKB Regovanta authors detailed 100-day post-acquisition regulatory execution plans. Our team can directly execute remediation projects, including updating Design History Files (DHF), authoring EU MDR/IVDR technical documentation, closing open CAPAs, remediating FDA 483 observations, transferring regulatory licenses, and establishing harmonized global quality systems.",
    },
    {
      q: "What are common 'red flags' uncovered during medical device regulatory due diligence?",
      a: "Frequent critical findings include: products marketed outside cleared intended uses (off-label marketing exposure); outdated or unvalidated clinical evaluation reports lacking clinical data; critical supplier/contract manufacturer changes made without required regulatory filings; open FDA warning letters or unverified CAPAs; uncompleted EU MDR/IVDR transition requirements putting CE certificates at risk; unvalidated sterilization or software lifecycles; and inadequate post-market vigilance tracking.",
    },
    {
      q: "How do you evaluate Software as a Medical Device (SaMD) and AI-driven products?",
      a: "For digital health, SaMD, and AI/ML medical devices, our due diligence audits evaluate compliance with IEC 62304 software lifecycles, cybersecurity risk management (threat models, SBOM, vulnerability tracking), FDA cybersecurity premarket guidance, algorithm training dataset provenance, validation against clinical ground truth, and change control mechanisms for adaptive machine learning models.",
    },
    {
      q: "How fast can NKB Regovanta deliver a comprehensive regulatory due diligence audit?",
      a: "Recognizing the fast-paced nature of M&A and investment transactions, NKB Regovanta offers expedited due diligence timelines. Preliminary red-flag assessments and high-level findings are typically delivered within 5 to 7 business days following data room access, with the full, comprehensive written due diligence report and management briefing completed within 2 to 3 weeks.",
    },
    {
      q: "Can NKB Regovanta perform sell-side regulatory vendor due diligence (VDD)?",
      a: "Yes. For founders, corporate spin-offs, and private equity sponsors preparing a medical device asset for sale or capital raising, we perform Vendor Due Diligence (VDD). We audit the asset's regulatory files, identify compliance vulnerabilities in advance, assist in remediating documentation gaps, and author an independent, credible regulatory fact book that builds buyer confidence and prevents deal renegotiations during bidding.",
    },
    {
      q: "Which global markets and regulatory frameworks are covered in your assessments?",
      a: "Our due diligence team covers all major global regulatory jurisdictions: United States (FDA - 510(k), De Novo, PMA, 21 CFR Part 820/QMSR, 21 CFR Part 4), European Union (EU MDR 2017/745, EU IVDR 2017/746, Article 117), United Kingdom (MHRA, UKCA), India (CDSCO - Medical Device Rules 2017), Saudi Arabia (SFDA), Australia (TGA), Canada (Health Canada), Brazil (ANVISA), and Japan (PMDA).",
    },
    {
      q: "How does NKB Regovanta ensure strict confidentiality during due diligence engagements?",
      a: "We operate under strict non-disclosure agreements (NDAs) and clean-team protocols. Our senior partners handle all virtual data room (VDR) reviews through secure, encrypted systems, ensuring sensitive target company intellectual property, trade secrets, submission files, and transactional details are fully safeguarded.",
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
            <span className="text-navy">Regulatory Due Diligence</span>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services Overview
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#0b3a96]/10 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0b3a96]/20">
              NKB REGOVANTA | STRATEGIC M&amp;A &amp; TRANSACTION ADVISORY
            </div>
            <h1 className="font-display font-extrabold text-navy leading-[1.08] mb-4 text-3xl sm:text-4xl lg:text-[44px]">
              Regulatory Due Diligence for Medical Devices &amp; IVDs
            </h1>
            <p className="text-[16px] leading-relaxed text-navy/80 font-medium mb-8 max-w-3xl">
              NKB Regovanta delivers structured, decision-grade Regulatory Due Diligence services that provide clear visibility into regulatory status, compliance maturity, approval dependencies, and hidden liabilities for medical technology investments and M&amp;A transactions. Our assessments go beyond surface checklists, offering actionable intelligence that supports confident investment decisions, deal structuring, valuation adjustments, and post-transaction integration planning.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#0b3a96] hover:bg-[#082b70] text-white text-[13px] font-semibold px-6 py-3.5 rounded-md transition-all shadow-sm"
              >
                Request a Due Diligence Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-navy text-[13px] font-semibold px-6 py-3.5 rounded-md border border-gray-300 transition-all shadow-xs"
              >
                Explore Audit Scope <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS & TRANSACTION FOCUS */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">M&amp;A / PE Deals</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Pre-Acquisition Risk Audits</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">FDA &amp; EU MDR</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Global Dossier Verification</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">Valuation Modeling</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Remediation Cost Translation</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#0b3a96]">100-Day Roadmap</p>
              <p className="text-xs text-navy/70 font-semibold mt-1">Post-Close Compliance Plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ACCORDION PORTFOLIO (MATCHING BRANDED MOCKUP LAYOUT) */}
      <section id="portfolio" className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Comprehensive Audit Framework
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              Regulatory Due Diligence for Medical Devices Service Portfolio
            </h2>
            <p className="text-sm text-navy/75 font-medium mt-3">
              Click on each audit module below to explore our detailed technical verification, risk analysis, and transaction-grade deliverables.
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
              Transaction Rigor
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              What Sets NKB Regovanta Apart in Due Diligence
            </h2>
            <p className="text-sm text-navy/75 font-medium mt-3">
              Global exposure, structured thinking, and execution-ready expertise for high-stakes healthcare transactions.
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
                Actionable Due Diligence Reports for Investors, Acquirers &amp; Strategic Buyers
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                In medical device transactions, undiscovered regulatory gaps can lead to severe post-closing disruptions, mandatory product recalls, unexpected Notified Body audit suspensions, or multi-million-dollar remediation costs. Each NKB Regovanta due diligence engagement provides an exhaustive written report containing risk stratification, market-wise clearance verification, approval dependencies, financial valuation impact assessments, and clear pre-close conditions and 100-day post-close remediation execution plans.
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
              Identify Hidden Liabilities Before You Invest, Acquire, or Partner
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
              Global regulatory strategy, technical documentation, and quality audit capabilities
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

      {/* 7. FREQUENTLY ASKED QUESTIONS (10 IN-DEPTH FAQS) */}
      <section className="py-16 bg-slate-50/70 border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
              Expert Regulatory Intelligence
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3">
              Frequently Asked Questions: Regulatory Due Diligence
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
        title="Planning a Medical Device or IVD Acquisition or Investment?"
        description="Connect with NKB Regovanta's senior regulatory due diligence partners to evaluate target compliance, uncover hidden risks, and protect deal value."
      />
    </>
  );
}
