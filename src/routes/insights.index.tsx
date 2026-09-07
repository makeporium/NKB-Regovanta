import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { CTABand } from "@/components/site/Bits";
import { useState } from "react";

// Curated realistic editorial and corporate medical device assets
const imgMedLab = "/assets/brain/medtech_reg_lab.jpg";
const imgCleanroom = "/assets/brain/cleanroom_manufacturing.jpg";
const imgAuditOffice = "/assets/brain/qms_inspection_office.jpg";
const imgIndiaMDR = "/assets/brain/india_cdsco_market_1786307143373.png";
const imgTechnicalDoc = "/assets/brain/technical_documentation_hero_1786399660256.png";
import imgHospitalFurniture from "@/assets/products/hospital-furniture/Screenshot 2026-08-30 005642.png";
import imgAncillaries from "@/assets/products/Ancillaries/Screenshot 2026-08-30 005214.png";
import imgLiquidVials from "@/assets/products/Liquid/Screenshot 2026-08-30 005423.png";
import imgTrolley from "@/assets/products/trolly-division2.png";
const imgEUMDR = "/assets/brain/eu_mdr_market_1786306179767.png";
const imgFDA = "/assets/brain/usa_fda_market_1786305218141.png";
const imgUK = "/assets/brain/uk_mhra_market_1786306400067.png";
const imgCanada = "/assets/brain/canada_hc_market_1786306624815.png";
const imgAustralia = "/assets/brain/australia_tga_market_1786307152962.png";
const imgBrazil = "/assets/brain/brazil_anvisa_market_1786307160850.png";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Global Regulatory Knowledge Hub | NKB Regovanta" },
      {
        name: "description",
        content:
          "Expert medical device regulatory insights, compliance guides, and market access intelligence covering US FDA, EU MDR, CDSCO, ISO 13485, and IVDR.",
      },
      { property: "og:title", content: "Global Regulatory Knowledge Hub | NKB Regovanta" },
      {
        property: "og:description",
        content: "Expert medical device regulatory insights, compliance guides, and market access intelligence covering US FDA, EU MDR, CDSCO, ISO 13485, and IVDR.",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.nkbregovanta.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Global Regulatory Knowledge Hub | NKB Regovanta" },
      { name: "twitter:description", content: "Expert medical device regulatory insights, compliance guides, and market access intelligence covering US FDA, EU MDR, CDSCO, ISO 13485, and IVDR." },
      { name: "twitter:image", content: "https://www.nkbregovanta.com/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/insights" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Global Regulatory Knowledge Hub",
          url: "https://www.nkbregovanta.com/insights",
          description: "Expert medical device regulatory insights, compliance guides, and market access intelligence covering US FDA, EU MDR, CDSCO, ISO 13485, and IVDR.",
          publisher: {
            "@type": "Organization",
            name: "NKB Regovanta",
            url: "https://www.nkbregovanta.com"
          }
        })
      }
    ],
  }),
  component: Insights,
});

const allArticles = [
  {
    id: "01",
    category: "AI & DIGITAL HEALTH",
    title: "EU AI Act and Medical Devices: What MedTech Manufacturers Need to Get Right",
    desc: "A practical regulatory perspective for manufacturers developing AI-enabled medical devices and medical software for the European market.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/eu-ai-act-medical-devices",
  },
  {
    id: "02",
    category: "EU MDR STRATEGY",
    title: "EU MDR Compliance: Where Medical Device Manufacturers Commonly Get Stuck",
    desc: "A practical regulatory perspective on the issues that can delay CE marking and EU market entry under Regulation (EU) 2017/745.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/eu-mdr-compliance-challenges",
  },
  {
    id: "03",
    category: "CDSCO INDIA UPDATE",
    title: "India Medical Device Rules 2026: EU-Approved Devices Gain Recognition Under Rule 63",
    desc: "What the latest MDR amendment (G.S.R. 744(E)) means for medical device manufacturers, EU companies and Indian importers.",
    img: "/assets/brain/india_cdsco_market_1786307143373.png",
    route: "/insights/india-mdr-2026-rule-63",
  },
  {
    id: "04",
    category: "AUDIT & TECHNICAL EVIDENCE",
    title: "Medical Device Documentation: From Compliance Records to Regulatory Evidence",
    desc: "Why auditors look for lifecycle traceability and how to turn static technical files into defensible regulatory evidence during inspections.",
    img: "/assets/brain/technical_documentation_hero_1786399660256.png",
    route: "/insights/medical-device-documentation-compliance-to-evidence",
  },
  {
    id: "05",
    category: "DIGITAL HEALTH & SAMD",
    title: "CE Marking for Digital Health: Define the Product Before Planning the Evidence",
    desc: "Plan EU medical software qualification, classification, clinical evidence, and release controls around a clearly defined intended purpose.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/ce-marking-digital-health-technologies",
  },
  {
    id: "06",
    category: "US FDA QUALITY SYSTEMS",
    title: "FDA QMSR Readiness: Follow a Product Record Through the Quality System",
    desc: "Assess FDA QMSR readiness through connected product records, supplier controls, complaints, and management decisions rather than a document count.",
    img: "/assets/brain/insight_fda_qmsr_1786440932587.png",
    route: "/insights/fda-qmsr-compliance-guide",
  },
  {
    id: "07",
    category: "RISK MANAGEMENT & SAMD",
    title: "Software Risk Management After Release: Turn New Signals Into Decisions",
    desc: "Connect software incidents, dependency updates, and clinical feedback to risk assessment, change control, and verified release decisions.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/dynamic-risk-management-software-medical-devices",
  },
  {
    id: "08",
    category: "EU REGULATORY COMPLIANCE",
    title: "Appointing a PRRC: Make the Responsibility Work Beyond the Contract",
    desc: "Define a workable PRRC arrangement with appropriate qualifications, access to evidence, escalation routes, and clear manufacturer responsibilities.",
    img: "/assets/brain/eu_compliance_1786396542227.png",
    route: "/insights/understanding-prrc-eu-mdr-ivdr",
  },
  {
    id: "09",
    category: "QUALITY MANAGEMENT",
    title: "ISO 13485 Documentation: Build a System People Can Use and Auditors Can Trace",
    desc: "Organise medical-device QMS documentation around process ownership, controlled records, traceability, and reliable retrieval.",
    img: "/assets/brain/qms_inspection_office.jpg",
    route: "/insights/qms-documentation-iso-13485-compliance",
  },
  {
    id: "10",
    category: "CLINICAL EVALUATION",
    title: "Clinical Equivalence Under EU MDR: Establish What the Comparison Can Support",
    desc: "Evaluate technical, biological, and clinical equivalence, data access, and evidence gaps before relying on another device's clinical data.",
    img: "/assets/brain/cs_eu_mdr_remediation_1786441191745.png",
    route: "/insights/clinical-evaluation-equivalence-medical-devices",
  },
  {
    id: "11",
    category: "EU TECHNICAL FILES",
    title: "GSPR Compliance: Turn the Checklist Into an Evidence Map",
    desc: "Build a usable GSPR matrix linking applicable requirements to methods, controlled evidence, product configurations, and unresolved gaps.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/gspr-compliance-eu-mdr-ivdr",
  },
  {
    id: "12",
    category: "CDSCO INDIA REGULATIONS",
    title: "CDSCO Manufacturing Licences: Prepare the Product and Site Evidence Together",
    desc: "Plan an Indian medical-device manufacturing application around classification, site scope, product evidence, and consistent licence documentation.",
    img: "/assets/brain/india_cdsco_market_1786307143373.png",
    route: "/insights/cdsco-medical-device-manufacturing-license-india",
  },
  {
    id: "13",
    category: "FDA & GLOBAL CLASSIFICATION",
    title: "FDA Class III Strategy: Establish the Regulatory Path Before Committing to Studies",
    desc: "Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA.",
    img: "/assets/brain/industry_medical_devices_1786310566137.png",
    route: "/insights/class-iii-medical-device-classification-strategy",
  },
  {
    id: "14",
    category: "REGULATORY BY DESIGN",
    title: "Use GSPRs Early: Convert Regulatory Expectations Into Design Inputs",
    desc: "Use GSPRs during device development to define measurable design inputs, evidence dependencies, and review gates before testing begins.",
    img: "/assets/brain/eu_compliance_1786396542227.png",
    route: "/insights/gspr-foundation-medical-device-development",
  },
  {
    id: "15",
    category: "CARDIOVASCULAR MEDTECH",
    title: "Cardiovascular Device CE Marking: Organise Evidence Around the Clinical Claim",
    desc: "Plan cardiovascular-device evidence across design performance, patient contact, clinical benefit, and follow-up without assuming one route fits all products.",
    img: "/assets/brain/medtech_reg_lab.jpg",
    route: "/insights/ce-marking-cardiovascular-medical-devices",
  },
  {
    id: "16",
    category: "SOFTWARE COMPLIANCE",
    title: "IEC 62304 in Practice: Keep Requirements, Risk Controls, and Releases Connected",
    desc: "Organise a medical-device software lifecycle around traceable requirements, risk controls, verification, third-party software, and release records.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/iec-62304-medical-device-software-lifecycle",
  },
  {
    id: "17",
    category: "CONNECTED HEALTH",
    title: "Remote Patient Monitoring: Define the Clinical Workflow Before the Device Boundary",
    desc: "Assess remote-monitoring systems through their measurement claims, alerts, data flow, home-use conditions, and clinical responsibilities.",
    img: "/assets/brain/medtech_reg_lab.jpg",
    route: "/insights/remote-patient-monitoring-devices-regulatory-framework",
  },
  {
    id: "18",
    category: "EU IVDR & DIAGNOSTICS",
    title: "Class D IVD Verification: Coordinate the Product Evidence and Batch Workflow",
    desc: "Prepare Class D IVD verification with clear configurations, performance evidence, batch records, and notified-body or reference-laboratory interfaces.",
    img: "/assets/brain/industry_ivd_1786310578306.png",
    route: "/insights/ivdr-class-d-verification-notified-bodies",
  },
  {
    id: "19",
    category: "MEDTECH MANUFACTURING",
    title: "Dental Scanner Development: Validate the Scan-to-Decision Workflow",
    desc: "Plan dental-scanner evidence for intended use, scan accuracy, software processing, reprocessing, and downstream digital workflows.",
    img: "/assets/brain/cleanroom_manufacturing.jpg",
    route: "/insights/dental-scanners-manufacturing-regulatory-standards",
  },
  {
    id: "20",
    category: "REGULATORY BORDERLINES",
    title: "Borderline Products: Separate Device Qualification From Risk Classification",
    desc: "Assess borderline products using intended purpose, mode of action, claims, and jurisdiction-specific reasoning before selecting a device class.",
    img: "/assets/brain/industry_cosmetics_1786310589050.png",
    route: "/insights/borderline-medical-device-classification-strategy",
  },
  {
    id: "21",
    category: "TECHNICAL FILES",
    title: "EU MDR Technical Documentation: Make the Evidence Trail Clear",
    desc: "Prepare an MDR technical file with consistent scope, claim-to-evidence links, controlled revisions, and traceable responses to review questions.",
    img: "/assets/brain/cs_eu_mdr_remediation_1786441191745.png",
    route: "/insights/notified-body-expectations-eu-mdr-technical-documentation",
  },
  {
    id: "22",
    category: "US FDA 510(K)",
    title: "FDA 510(k) Problems: Diagnose the Evidence Gap Before Responding",
    desc: "Address 510(k) obstacles by distinguishing pathway, intended-use, performance-evidence, and submission-consistency problems.",
    img: "/assets/brain/usa_fda_market_1786305218141.png",
    route: "/insights/overcoming-fda-510k-clearance-barriers",
  },
  {
    id: "23",
    category: "QUALITY SYSTEMS",
    title: "Medical Device CAPA: Show That the Cause Was Addressed",
    desc: "Build CAPA records around problem definition, investigation, cause-based actions, effectiveness measures, and a justified closure decision.",
    img: "/assets/brain/qms_inspection_office.jpg",
    route: "/insights/effective-capa-system-medical-devices",
  },
  {
    id: "24",
    category: "GLOBAL MARKET ACCESS",
    title: "Global MedTech Strategy: Sequence Markets Around Reusable Evidence",
    desc: "Separate reusable product evidence from market-specific classification, representation, and submission needs in a global regulatory plan.",
    img: "/assets/brain/media__1786282925761.optimized.webp",
    route: "/insights/regulatory-compliance-strategy-global-medtech",
  },
  {
    id: "25",
    category: "EU REGULATORY UPDATES",
    title: "IVDR Transition Planning: Check Eligibility Before Relying on the Deadline",
    desc: "Assess IVDR legacy-device transition eligibility, application milestones, change restrictions, and evidence before relying on extended dates.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/regulation-eu-2024-1860-mdr-ivdr-transition",
  },
  {
    id: "26",
    category: "BIOCOMPATIBILITY & TESTING",
    title: "ISO 10993 Biological Evaluation: Define the Question Before Ordering Tests",
    desc: "Plan biological evaluation using finished-device contact, materials, processing, available evidence, and current standards-recognition requirements.",
    img: "/assets/brain/cs_fda_biocompatibility_1786441176273.png",
    route: "/insights/biological-evaluation-testing-medical-devices-iso-10993",
  },
  {
    id: "27",
    category: "INTERNATIONAL COMPLIANCE",
    title: "Build a Medical Device Requirements Register Across Regulatory Disciplines",
    desc: "Create a product-specific register linking device rules, software, electrical safety, biological evaluation, and other applicable obligations.",
    img: "/assets/brain/media__1786282925761.optimized.webp",
    route: "/insights/core-regulations-medical-device-global-compliance",
  },
  {
    id: "28",
    category: "US FDA 510(K)",
    title: "When to Submit a 510(k): Use Readiness Gates Instead of a Calendar Target",
    desc: "Assess 510(k) readiness through intended use, predicate strategy, completed evidence, configuration control, and capacity to answer review questions.",
    img: "/assets/brain/usa_fda_regulatory_1786305043898.png",
    route: "/insights/optimal-timing-usfda-510k-submission",
  },
  {
    id: "29",
    category: "HUMAN FACTORS & USABILITY",
    title: "Medical Device Usability Testing: Design a Study That Answers the Safety Question",
    desc: "Plan usability evaluations around representative users, critical tasks, realistic conditions, observations, and justified interpretation.",
    img: "/assets/brain/cs_fda_simulated_use_1786441155542.png",
    route: "/insights/usability-testing-medical-devices-iec-62366",
  },
  {
    id: "30",
    category: "FDA REGULATORY POLICY",
    title: "510(k) Modernisation: Assess Predicate Relevance and Performance Evidence",
    desc: "Understand predicate relevance, final versus draft guidance, and the limited scope of FDA's Safety and Performance Based Pathway.",
    img: "/assets/brain/usa_fda_market_1786305218141.png",
    route: "/insights/fda-510k-program-modernization-safety-standards",
  },
  {
    id: "31",
    category: "HUMAN FACTORS",
    title: "Human Factors in Device Design: Find Use Problems Before Validation",
    desc: "Integrate human factors into early device design through user research, task analysis, formative evaluation, and traceable design decisions.",
    img: "/assets/brain/cs_fda_simulated_use_1786441155542.png",
    route: "/insights/human-factors-engineering-medical-device-design",
  },
  {
    id: "32",
    category: "CDSCO INDIA REGULATIONS",
    title: "Medical Device Registration in India: Define the Applicant, Product, and Route",
    desc: "Prepare an Indian medical-device registration strategy using product classification, applicant roles, manufacturing or import scope, and current rules.",
    img: "/assets/brain/india_cdsco_market_1786307143373.png",
    route: "/insights/cdsco-medical-device-registration-guidelines-india",
  },
  {
    id: "33",
    category: "EU CE MARKING",
    title: "The EU MDR CE-Marking Process: Plan the Decisions and Handoffs",
    desc: "Sequence EU MDR qualification, classification, evidence, conformity assessment, declaration, and ongoing obligations in a practical project plan.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/ce-marking-process-medical-devices-eu-mdr",
  },
  {
    id: "34",
    category: "SAMD & DIGITAL HEALTH",
    title: "FDA SaMD Planning: Assess the Software Function Before Selecting a Submission",
    desc: "Define medical software functions, assess FDA regulatory treatment, and connect classification and submission evidence to the intended use.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/samd-classification-submission-usfda",
  },
  {
    id: "35",
    category: "US FDA STRATEGY",
    title: "FDA Pre-Submissions: Ask Questions That Resolve a Development Decision",
    desc: "Prepare a focused FDA Pre-Submission with a defined device, evidence context, proposed approach, and questions tied to development decisions.",
    img: "/assets/brain/usa_fda_regulatory_1786305043898.png",
    route: "/insights/fda-q-sub-pre-submission-meeting-guide",
  },
  {
    id: "36",
    category: "EU NOTIFIED BODIES",
    title: "Selecting a Notified Body: Match Designation, Scope, and Project Readiness",
    desc: "Choose a notified body by confirming designation scope, product fit, assessment requirements, and realistic readiness rather than quoted timing alone.",
    img: "/assets/brain/eu_compliance_1786396542227.png",
    route: "/insights/notified-body-selection-conformity-assessment-guide",
  },
  {
    id: "37",
    category: "REGULATORY NEWS",
    title: "FDA QMSR 2026: What Medical Device Manufacturers Need to Know",
    desc: "QMSR is now effective. Understand the key changes, ISO 13485 alignment, record expectations and practical actions manufacturers should take for ongoing FDA compliance.",
    img: "/assets/brain/insight_fda_qmsr_1786440932587.png",
    route: "/insights/fda-qmsr-2026",
  },
  {
    id: "38",
    category: "EU MDR UPDATE",
    title: "EU MDR 2026: EUDAMED, Classification & Compliance Priorities",
    desc: "EUDAMED’s first four modules are now mandatory. Review the registration, UDI/device, certificate and market-surveillance implications manufacturers should address now.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/eu-mdr-2026",
  },
  {
    id: "39",
    category: "BEST PRACTICES",
    title: "FDA Medical Device Inspections in 2026: Preparing for the New QMSR Framework",
    desc: "FDA has moved away from QSIT to the QMSR-aligned inspection process. Learn what investigators may review and how to strengthen inspection readiness.",
    img: "/assets/brain/insight_fda_inspections_1786440998246.png",
    route: "/insights/fda-inspections-2026",
  },
];

function Insights() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = ["ALL", "US FDA", "EU MDR & IVDR", "CDSCO INDIA", "AI & SAMD", "QUALITY & AUDIT"];

  const filteredArticles = allArticles.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.desc.toLowerCase().includes(search.toLowerCase()) ||
      art.category.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "US FDA") return art.category.includes("FDA") || art.category.includes("510(K)");
    if (selectedCategory === "EU MDR & IVDR") return art.category.includes("EU") || art.category.includes("MDR") || art.category.includes("IVDR");
    if (selectedCategory === "CDSCO INDIA") return art.category.includes("CDSCO") || art.category.includes("INDIA");
    if (selectedCategory === "AI & SAMD") return art.category.includes("AI") || art.category.includes("SAMD") || art.category.includes("SOFTWARE") || art.category.includes("CONNECTED");
    if (selectedCategory === "QUALITY & AUDIT") return art.category.includes("QUALITY") || art.category.includes("AUDIT") || art.category.includes("CAPA") || art.category.includes("DOCUMENTATION");
    return true;
  });

  return (
    <>
      <section className="bg-surface pt-6 pb-16 lg:pt-10 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
           <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0b3a96] text-xs font-bold uppercase tracking-wider mb-4">
             <Sparkles className="h-3.5 w-3.5" /> MedTech Intelligence &amp; Regulatory Insights
           </div>
           <h1 className="text-3xl font-extrabold text-navy sm:text-5xl lg:text-6xl leading-tight">
             Global Regulatory Knowledge Hub
           </h1>
           <p className="mt-5 text-lg sm:text-xl text-muted-foreground leading-relaxed">
             Authoritative perspectives, in-depth technical analysis, and actionable compliance intelligence spanning US FDA, EU MDR, CDSCO India, and International Medical Device Standards.
           </p>

           {/* Filter & Search Bar */}
           <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
             <input
               type="text"
               placeholder="Search articles by regulation, device type, or topic..."
               value={search}
               onChange={(e) => setSearch(e.target.value)}
               className="w-full px-5 py-3 rounded-lg border border-gray-200 bg-white text-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent text-sm shadow-sm"
             />
           </div>

           {/* Category Pills with High Contrast & Clear Active State */}
           <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
             {categories.map((cat) => {
               const isActive = selectedCategory === cat;
               return (
                 <button
                   key={cat}
                   onClick={() => setSelectedCategory(cat)}
                   className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all shadow-sm ${
                     isActive
                       ? "bg-[#0b3a96] text-white border-2 border-[#0b3a96] shadow-md scale-105"
                       : "bg-white text-slate-800 border-2 border-slate-300 hover:border-[#0b3a96] hover:text-[#0b3a96] hover:bg-slate-50"
                   }`}
                 >
                   {cat}
                 </button>
               );
             })}
           </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
            <p className="text-sm font-bold text-navy/70 uppercase tracking-wider">
              Showing {filteredArticles.length} Regulatory Publications
            </p>
            <span className="text-xs text-navy/50 font-medium">Updated September 2026</span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <div key={article.id} className="card-elevated overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-xl border border-border/50 group">
                <Link to={article.route} className="block overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-navy/90 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-sm shadow-sm z-10">
                    {article.category}
                  </div>
                  <img
                    src={article.img}
                    alt={article.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>
                <div className="p-7 flex flex-col flex-1">
                  <Link to={article.route}>
                    <h2 className="text-lg font-bold text-navy leading-snug group-hover:text-accent transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-navy/70 flex-1 line-clamp-3">
                    {article.desc}
                  </p>
                  <Link to={article.route} className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#0b3a96] hover:text-accent transition-colors uppercase tracking-wide">
                    Read Full Guide <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title="Need expert guidance on your medical device regulatory strategy?"
        description="Connect with NKB Regovanta's senior specialists for US FDA, EU MDR, CDSCO, and international compliance assurance."
        action="Contact Our Regulatory Team"
      />
    </>
  );
}
