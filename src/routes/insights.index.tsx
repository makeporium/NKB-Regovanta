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
const imgHospitalFurniture = "/src/assets/products/hospital-furniture/Screenshot 2026-08-30 005642.png";
const imgAncillaries = "/src/assets/products/Ancillaries/Screenshot 2026-08-30 005214.png";
const imgLiquidVials = "/src/assets/products/Liquid/Screenshot 2026-08-30 005423.png";
const imgTrolley = "/src/assets/products/trolly-division2.png";
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
    title: "Navigating CE Marking for Digital Health Technologies Under EU MDR 2017/745",
    desc: "A comprehensive regulatory pathway for software as a medical device (SaMD), AI diagnostics, and mobile health apps in the European Union.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/ce-marking-digital-health-technologies",
  },
  {
    id: "06",
    category: "US FDA QUALITY SYSTEMS",
    title: "Mastering FDA QMSR Compliance: Strategic Alignment with ISO 13485:2016",
    desc: "Key expectations, inspection priorities, and practical quality system transitions for medical device manufacturers under 21 CFR Part 820.",
    img: "/assets/brain/insight_fda_qmsr_1786440932587.png",
    route: "/insights/fda-qmsr-compliance-guide",
  },
  {
    id: "07",
    category: "RISK MANAGEMENT & SAMD",
    title: "Dynamic Risk Management Frameworks for Software-Enabled Medical Devices",
    desc: "Integrating ISO 14971, IEC 62304, and post-market anomaly tracking into an evolving software risk governance system.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/dynamic-risk-management-software-medical-devices",
  },
  {
    id: "08",
    category: "EU REGULATORY COMPLIANCE",
    title: "Demystifying the Role of PRRC Under EU MDR and EU IVDR (Article 15)",
    desc: "Legal responsibilities, qualification standards, outsourcing limits, and liability considerations for Person Responsible for Regulatory Compliance.",
    img: "/assets/brain/eu_compliance_1786396542227.png",
    route: "/insights/understanding-prrc-eu-mdr-ivdr",
  },
  {
    id: "09",
    category: "QUALITY MANAGEMENT",
    title: "Structuring Defensible QMS Documentation for Seamless ISO 13485:2016 Certification",
    desc: "Best practices for building compliant standard operating procedures, design history files, device master records, and CAPA logs.",
    img: "/assets/brain/qms_inspection_office.jpg",
    route: "/insights/qms-documentation-iso-13485-compliance",
  },
  {
    id: "10",
    category: "CLINICAL EVALUATION",
    title: "Establishing Clinical Equivalence Under EU MDR: Methodologies and Pitfalls",
    desc: "Demonstrating technical, biological, and clinical equivalence under MDCG guidelines to justify reliance on predicate clinical data.",
    img: "/assets/brain/cs_eu_mdr_remediation_1786441191745.png",
    route: "/insights/clinical-evaluation-equivalence-medical-devices",
  },
  {
    id: "11",
    category: "EU TECHNICAL FILES",
    title: "Achieving GSPR Compliance: Navigating Annex I of EU MDR and IVDR",
    desc: "Practical guidance for establishing objective regulatory evidence, state-of-the-art standards alignment, and checklist traceability.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/gspr-compliance-eu-mdr-ivdr",
  },
  {
    id: "12",
    category: "CDSCO INDIA REGULATIONS",
    title: "Securing CDSCO Medical Device Manufacturing Licenses in India: Form MD-5 to MD-9",
    desc: "Step-by-step guidance on SUGAM portal submissions, state vs central licensing, plant audits, and MDR 2017 conformity.",
    img: "/assets/brain/india_cdsco_market_1786307143373.png",
    route: "/insights/cdsco-medical-device-manufacturing-license-india",
  },
  {
    id: "13",
    category: "FDA & GLOBAL CLASSIFICATION",
    title: "Strategic Classification and Pathway Selection for Class III Medical Devices",
    desc: "Navigating high-risk device regulatory requirements, premarket approval (PMA) thresholds, and clinical dossier substantiation.",
    img: "/assets/brain/industry_medical_devices_1786310566137.png",
    route: "/insights/class-iii-medical-device-classification-strategy",
  },
  {
    id: "14",
    category: "REGULATORY BY DESIGN",
    title: "Why GSPR Should Be the Architectural Foundation of Your Medical Device R&D",
    desc: "Embedding European General Safety and Performance Requirements early into product conceptualization to prevent costly redesigns.",
    img: "/assets/brain/eu_compliance_1786396542227.png",
    route: "/insights/gspr-foundation-medical-device-development",
  },
  {
    id: "15",
    category: "CARDIOVASCULAR MEDTECH",
    title: "CE Marking Roadmap for Cardiovascular Medical Devices Under EU MDR",
    desc: "Specialized clinical evaluation, biocompatibility, hemocompatibility, and Notified Body expectations for cardiovascular implants.",
    img: "/assets/brain/medtech_reg_lab.jpg",
    route: "/insights/ce-marking-cardiovascular-medical-devices",
  },
  {
    id: "16",
    category: "SOFTWARE COMPLIANCE",
    title: "Implementing IEC 62304: Medical Device Software Lifecycle Processes Explained",
    desc: "Software safety classification (Class A, B, C), verification & validation, change management, and architectural documentation.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/iec-62304-medical-device-software-lifecycle",
  },
  {
    id: "17",
    category: "CONNECTED HEALTH",
    title: "Regulatory Strategies for Remote Patient Monitoring (RPM) Systems",
    desc: "Navigating FDA 510(k), HIPAA, cybersecurity, and EU MDR compliance for connected diagnostic sensors and telehealth platforms.",
    img: "/assets/brain/medtech_reg_lab.jpg",
    route: "/insights/remote-patient-monitoring-devices-regulatory-framework",
  },
  {
    id: "18",
    category: "EU IVDR & DIAGNOSTICS",
    title: "EU IVDR Class D Verification: Overcoming Reference Laboratories and Notified Body Hurdles",
    desc: "The rigorous regulatory verification route for high-risk infectious disease and blood group diagnostics under Regulation (EU) 2017/746.",
    img: "/assets/brain/industry_ivd_1786310578306.png",
    route: "/insights/ivdr-class-d-verification-notified-bodies",
  },
  {
    id: "19",
    category: "MEDTECH MANUFACTURING",
    title: "Manufacturing and Global Compliance Requirements for Intraoral Dental Scanners",
    desc: "Optical safety, IEC 60601-1 electrical validation, CAD/CAM software integration, and worldwide licensing pathways.",
    img: "/assets/brain/cleanroom_manufacturing.jpg",
    route: "/insights/dental-scanners-manufacturing-regulatory-standards",
  },
  {
    id: "20",
    category: "REGULATORY BORDERLINES",
    title: "Navigating Borderline Products: Medical Device vs Drug vs Cosmetic vs Biocide",
    desc: "How to interpret the EU Borderline Manual and FDA Pre-RFD mechanisms to prevent regulatory misclassification and project delays.",
    img: "/assets/brain/industry_cosmetics_1786310589050.png",
    route: "/insights/borderline-medical-device-classification-strategy",
  },
  {
    id: "21",
    category: "TECHNICAL FILES",
    title: "What Notified Bodies Look For in EU MDR Technical Documentation (Annex II & III)",
    desc: "Audit checklists, common non-conformities, and how to construct robust, traceable evidence files that pass first-round review.",
    img: "/assets/brain/cs_eu_mdr_remediation_1786441191745.png",
    route: "/insights/notified-body-expectations-eu-mdr-technical-documentation",
  },
  {
    id: "22",
    category: "US FDA 510(K)",
    title: "Overcoming Critical FDA 510(k) Clearance Barriers: Proven Solutions to RTA and AI Holds",
    desc: "Strategies to resolve Refusal to Accept notices, Additional Information letters, and substantial equivalence challenges with CDRH.",
    img: "/assets/brain/usa_fda_market_1786305218141.png",
    route: "/insights/overcoming-fda-510k-clearance-barriers",
  },
  {
    id: "23",
    category: "QUALITY SYSTEMS",
    title: "Designing a Defensible CAPA System for ISO 13485 and FDA QMSR Audits",
    desc: "The 5 pillars of effective root cause analysis, corrective action verification, statistical trending, and audit resistance.",
    img: "/assets/brain/qms_inspection_office.jpg",
    route: "/insights/effective-capa-system-medical-devices",
  },
  {
    id: "24",
    category: "GLOBAL MARKET ACCESS",
    title: "Building an Integrated Global Regulatory Strategy for Medical Technologies",
    desc: "Harmonizing testing dossiers, clinical registries, and submission timing across the US, EU, India, UK, and Asia-Pacific markets.",
    img: "/assets/brain/media__1786282925761.png",
    route: "/insights/regulatory-compliance-strategy-global-medtech",
  },
  {
    id: "25",
    category: "EU REGULATORY UPDATES",
    title: "Regulation (EU) 2024/1860: Transitional Extensions and EUDAMED Rollout Priorities",
    desc: "Strategic implications of extended legacy device deadlines, mandatory supply interruption notifications, and IVD timeline relief.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/regulation-eu-2024-1860-mdr-ivdr-transition",
  },
  {
    id: "26",
    category: "BIOCOMPATIBILITY & TESTING",
    title: "Biological Evaluation and Biocompatibility Testing Under ISO 10993-1:2018",
    desc: "Chemical characterization, toxicological risk assessment, and non-animal testing strategies to satisfy FDA and EU MDR requirements.",
    img: "/assets/brain/cs_fda_biocompatibility_1786441176273.png",
    route: "/insights/biological-evaluation-testing-medical-devices-iso-10993",
  },
  {
    id: "27",
    category: "INTERNATIONAL COMPLIANCE",
    title: "Beyond MDR and FDA: Core Global Regulations Shaping Modern MedTech Compliance",
    desc: "Essential requirements spanning ISO 14971, IEC 60601-1, IEC 62366-1, ISO 10993, RoHS/REACH, and cybersecurity standards.",
    img: "/assets/brain/media__1786282925761.png",
    route: "/insights/core-regulations-medical-device-global-compliance",
  },
  {
    id: "28",
    category: "US FDA 510(K)",
    title: "Determining the Optimal Timing for Your US FDA 510(k) Premarket Notification",
    desc: "Design freeze milestones, testing lead times, predicate stability, and the cost-benefit analysis of early vs mature submission timing.",
    img: "/assets/brain/usa_fda_regulatory_1786305043898.png",
    route: "/insights/optimal-timing-usfda-510k-submission",
  },
  {
    id: "29",
    category: "HUMAN FACTORS & USABILITY",
    title: "Usability Testing and Human Factors Engineering for Medical Devices: IEC 62366-1",
    desc: "Conducting formative and summative usability evaluations to eliminate use errors and meet FDA and European design standards.",
    img: "/assets/brain/cs_fda_simulated_use_1786441155542.png",
    route: "/insights/usability-testing-medical-devices-iec-62366",
  },
  {
    id: "30",
    category: "FDA REGULATORY POLICY",
    title: "FDA 510(k) Modernization: Predicate Age Policies and Contemporary Safety Benchmarks",
    desc: "How CDRH is driving manufacturers away from outdated predicate devices toward contemporary safety and performance standards.",
    img: "/assets/brain/usa_fda_market_1786305218141.png",
    route: "/insights/fda-510k-program-modernization-safety-standards",
  },
  {
    id: "31",
    category: "HUMAN FACTORS",
    title: "Human Factors Engineering Under EU MDR: Essential User-Centric Design Principles",
    desc: "Fulfilling Annex I GSPR 5 user-interface mandates through structured usability engineering files and risk mitigation.",
    img: "/assets/brain/cs_fda_simulated_use_1786441155542.png",
    route: "/insights/human-factors-engineering-medical-device-design",
  },
  {
    id: "32",
    category: "CDSCO INDIA REGULATIONS",
    title: "Complete Guide to CDSCO Medical Device Registration and Import Licensing in India",
    desc: "Classification rules, Form MD-14 import licensing, SUGAM digital submissions, Authorized Agent responsibilities, and timeline forecasts.",
    img: "/assets/brain/india_cdsco_market_1786307143373.png",
    route: "/insights/cdsco-medical-device-registration-guidelines-india",
  },
  {
    id: "33",
    category: "EU CE MARKING",
    title: "The Step-by-Step CE Marking Process for Medical Devices Under EU MDR 2017/745",
    desc: "From intended purpose definition to Notified Body certification and Declaration of Conformity: an actionable implementation roadmap.",
    img: "/assets/brain/eu_mdr_market_1786306179767.png",
    route: "/insights/ce-marking-process-medical-devices-eu-mdr",
  },
  {
    id: "34",
    category: "SAMD & DIGITAL HEALTH",
    title: "SaMD Classification and Submission Strategies Under US FDA Guidance",
    desc: "IMDRF risk categorizations, cybersecurity controls, clinical validation, and premarket submission frameworks for medical software.",
    img: "/assets/brain/cs_algorithm_claim_1786441224937.png",
    route: "/insights/samd-classification-submission-usfda",
  },
  {
    id: "35",
    category: "US FDA STRATEGY",
    title: "Maximizing the Value of FDA Q-Submission (Pre-Sub) Meetings: Strategy and Protocol",
    desc: "Drafting targeted questions, preparing submission packages, and engaging CDRH reviewers to derisk complex medical device applications.",
    img: "/assets/brain/usa_fda_regulatory_1786305043898.png",
    route: "/insights/fda-q-sub-pre-submission-meeting-guide",
  },
  {
    id: "36",
    category: "EU NOTIFIED BODIES",
    title: "Selecting the Right Notified Body for EU MDR & IVDR Conformity Assessment",
    desc: "Evaluating NANDO designated scopes, audit capacity, review timelines, fee structures, and building long-term partnership success.",
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