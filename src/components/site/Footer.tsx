import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Layers, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

type SubDirectoryItem = {
  label: string;
  to: string;
  groups?: {
    groupTitle: string;
    subItems: { label: string; to: string }[];
  }[];
  subItems?: { label: string; to: string }[];
};

type ServiceItem = {
  title: string;
  to: string;
  items: SubDirectoryItem[];
};

const serviceDirectory: ServiceItem[] = [
  {
    title: "Regulatory Affairs",
    to: "/services/regulatory-affairs",
    items: [
      {
        label: "US FDA",
        to: "/services/usa",
        subItems: [
          { label: "US FDA Regulatory & Market Access", to: "/services/usa" },
          { label: "510(k) – Premarket Notification", to: "/services/usa/510k" },
          { label: "De Novo Classification", to: "/services/usa/de-novo" },
          { label: "PMA – Premarket Approval", to: "/services/usa/pma" },
          { label: "FDA Q-Submission / Pre-Submission", to: "/services/usa/q-submission" },
          { label: "FDA Regulatory Strategy & Pathway Assessment", to: "/services/usa" },
          { label: "Medical Device Classification", to: "/services/usa/513g" },
          { label: "US FDA Agent Services", to: "/services/usa/agent-service" },
          { label: "FDA Registration & Device Listing", to: "/services/usa/establishment-registration" },
          { label: "eSTAR Submission Support", to: "/services/usa/e-star" },
          { label: "Post-Approval Compliance", to: "/services/usa" },
          { label: "Device Lifecycle Management", to: "/services/usa" },
          { label: "Post-Market Regulatory Support", to: "/services/usa" },
        ],
      },
      { label: "Global Regulatory Strategy & Pathways", to: "/services/regulatory-affairs" },
      {
        label: "India Regulatory & Market Access Services (CDSCO)",
        to: "/services/india",
        groups: [
          {
            groupTitle: "A. Importer / Foreign Manufacturer Services",
            subItems: [
              { label: "CDSCO Medical Device Import Licence – MD-14 / MD-15", to: "/services/india/class-a-import" },
              { label: "Class A Registration – GSR 777(E), where applicable", to: "/services/india/mfg-class-a-gsr" },
              { label: "Investigational Device Import Licence – MD-18 / MD-19", to: "/services/india/investigational-devices" },
              { label: "Clinical Evaluation Import Permission – MD-24 / MD-25", to: "/services/india/investigational-devices" },
              { label: "Novel Medical Device / IVD Import Permission – MD-26 / MD-27", to: "/services/india/mfg-class-c-d" },
              { label: "IVD Testing & Evaluation Import Licence – MD-16 / MD-17", to: "/services/india/ivd" },
              { label: "Personal Use Import Permission – MD-20 / MD-21", to: "/services/india" },
              { label: "Indian Authorized Agent / Regulatory Representative", to: "/industries/medical-devices/india/for-importer" },
              { label: "SUGAM Portal Registration & Application Support", to: "/services/india" },
              { label: "CDSCO Product Classification & Regulatory Strategy", to: "/services/india" },
              { label: "CDSCO Submission & Query Response Support", to: "/services/india" },
              { label: "Post-Approval & Lifecycle Regulatory Support", to: "/services/india" },
            ],
          },
          {
            groupTitle: "B. Indian Manufacturer Services",
            subItems: [
              { label: "Class A & B Manufacturing Licence – MD-3 / MD-5", to: "/services/india/mfg-class-a-b" },
              { label: "Class C & D Manufacturing Licence – MD-7 / MD-9", to: "/services/india/mfg-class-c-d" },
              { label: "Class A Registration – GSR 777(E)", to: "/services/india/mfg-class-a-gsr" },
              { label: "Loan Licence – Class A & B – MD-4 / MD-6", to: "/services/india/manufacturing-licenses" },
              { label: "Loan Licence – Class C & D – MD-8 / MD-10", to: "/services/india/manufacturing-licenses" },
              { label: "Manufacturing Facility Regulatory Readiness", to: "/services/india/manufacturing-licenses" },
              { label: "CDSCO Manufacturing Licence Support", to: "/services/india/manufacturing-licenses" },
              { label: "SUGAM Portal Registration & Application Support", to: "/services/india" },
              { label: "Manufacturing Compliance & Post-Approval Support", to: "/services/india" },
            ],
          },
          {
            groupTitle: "C. Distribution & Commercial Licences",
            subItems: [
              { label: "Medical Device Wholesale Licence / Wholesale Drug Licence, as applicable", to: "/services/drug-licenses-for-importers" },
              { label: "Wholesale Drug Licence – Form 20B / 21B, where applicable", to: "/services/drug-licenses-for-importers" },
              { label: "State-level distribution / sale licence support", to: "/services/drug-licenses-for-importers" },
              { label: "Licensing and compliance support for distributors and importers", to: "/services/drug-licenses-for-importers" },
            ],
          },
          {
            groupTitle: "D. Other Indian Regulatory Approvals & Compliance",
            subItems: [
              { label: "PCPNDT Registration & Compliance", to: "/services/pc-pndt-certificate" },
              { label: "WPC / Wireless Planning & Coordination Approvals", to: "/services/wpc-wireless-medical-devices" },
              { label: "EPR Registration & Compliance", to: "/services/india" },
              { label: "E-Waste EPR", to: "/services/india" },
              { label: "Battery Waste EPR", to: "/services/india" },
              { label: "Plastic Waste EPR, where applicable", to: "/services/india" },
              { label: "Free Sale Certificate (FSC)", to: "/services/india/free-sale" },
              { label: "Market Standing Certificate (MSC)", to: "/services/india/market-standing" },
              { label: "Non-Conviction Certificate (NCC)", to: "/services/india/non-conviction" },
              { label: "MD-42 Certificate", to: "/services/india/md-42" },
              { label: "Neutral / Special Code Certificate", to: "/services/india/neutral-code" },
              { label: "Other applicable state/product-specific registrations", to: "/services/india" },
            ],
          },
        ],
      },
      {
        label: "EU MDR / IVDR Regulatory & Market Access",
        to: "/services/eu",
        groups: [
          {
            groupTitle: "Medical Devices – EU MDR",
            subItems: [
              { label: "EU MDR 2017/745 Regulatory Strategy", to: "/services/eu" },
              { label: "Medical Device Classification", to: "/services/eu" },
              { label: "CE Marking Support", to: "/services/eu" },
              { label: "Conformity Assessment Strategy", to: "/services/eu" },
              { label: "Notified Body Selection & Coordination", to: "/services/eu" },
              { label: "Technical Documentation / Technical File", to: "/services/technical-documentation" },
              { label: "GSPR Compliance", to: "/services/eu" },
              { label: "Clinical Evaluation & Clinical Evaluation Report (CER)", to: "/services/technical-documentation" },
              { label: "Clinical Investigation Strategy", to: "/services/eu" },
              { label: "Risk Management – ISO 14971", to: "/services/iso-13485" },
              { label: "PMS – Post-Market Surveillance", to: "/services/technical-documentation" },
              { label: "PMCF – Post-Market Clinical Follow-up", to: "/services/technical-documentation" },
              { label: "PSUR – Periodic Safety Update Report", to: "/services/technical-documentation" },
              { label: "Vigilance & Incident Reporting", to: "/services/eu" },
              { label: "EUDAMED Registration & Support", to: "/services/eu" },
              { label: "Legacy Device / MDD-AIMDD to MDR Transition Support", to: "/services/eu" },
              { label: "Post-Approval / Lifecycle Regulatory Support", to: "/services/eu" },
            ],
          },
          {
            groupTitle: "In Vitro Diagnostics – EU IVDR",
            subItems: [
              { label: "IVDR 2017/746 Regulatory Strategy", to: "/industries/ivd/eu" },
              { label: "IVD Classification", to: "/industries/ivd/eu" },
              { label: "CE Marking", to: "/industries/ivd/eu" },
              { label: "Conformity Assessment Strategy", to: "/industries/ivd/eu" },
              { label: "Notified Body / EU Reference Laboratory Strategy, where applicable", to: "/industries/ivd/eu" },
              { label: "Technical Documentation", to: "/services/technical-documentation" },
              { label: "Performance Evaluation", to: "/industries/ivd/eu" },
              { label: "Performance Evaluation Report", to: "/services/technical-documentation" },
              { label: "Scientific Validity", to: "/industries/ivd/eu" },
              { label: "Analytical Performance", to: "/industries/ivd/eu" },
              { label: "Clinical Performance", to: "/industries/ivd/eu" },
              { label: "PMS / PMPF", to: "/services/technical-documentation" },
              { label: "PSUR, where applicable", to: "/services/technical-documentation" },
              { label: "Vigilance & Reporting", to: "/industries/ivd/eu" },
              { label: "EUDAMED Registration", to: "/industries/ivd/eu" },
              { label: "IVDD to IVDR Transition Support", to: "/industries/ivd/eu" },
              { label: "Post-Market / Lifecycle Compliance", to: "/industries/ivd/eu" },
            ],
          },
        ],
      },
      {
        label: "European Authorised Representative (EAR)",
        to: "/services/eu",
        subItems: [
          { label: "European Authorised Representative (EAR) Services", to: "/services/eu" },
          { label: "Regulatory Representation in the EU", to: "/services/eu" },
          { label: "Competent Authority Communication", to: "/services/eu" },
          { label: "EUDAMED Support", to: "/services/eu" },
          { label: "Vigilance / Incident Communication", to: "/services/eu" },
          { label: "Regulatory Compliance & Lifecycle Support", to: "/services/eu" },
        ],
      },
      {
        label: "Global Quality & Compliance",
        to: "/services/iso-13485",
        subItems: [
          { label: "ISO 13485 Implementation & Readiness", to: "/services/iso-13485" },
          { label: "QMS Gap Assessment", to: "/services/iso-13485" },
          { label: "MDSAP Readiness & Audit Support", to: "/services/mdsap" },
          { label: "Internal Audit", to: "/services/iso-13485" },
          { label: "Supplier Quality & Supplier Audits", to: "/services/iso-13485" },
          { label: "CAPA Management", to: "/services/iso-13485" },
          { label: "Risk Management", to: "/services/iso-13485" },
          { label: "Quality System Development", to: "/services/iso-13485" },
          { label: "Audit Readiness", to: "/services/iso-13485" },
          { label: "Notified Body / Certification Body Audit Preparation", to: "/services/iso-13485" },
          { label: "Regulatory Inspection Readiness", to: "/services/iso-13485" },
          { label: "Post-Market Quality & Compliance", to: "/services/iso-13485" },
        ],
      },
      {
        label: "United Kingdom",
        to: "/services/uk",
        groups: [
          {
            groupTitle: "Medical Devices",
            subItems: [
              { label: "UK MDR 2002 Regulatory Strategy & Compliance", to: "/services/uk" },
              { label: "UK Medical Device Classification", to: "/services/uk" },
              { label: "UKCA Regulatory Strategy", to: "/services/uk" },
              { label: "CE Mark Recognition / Transitional Arrangements Assessment", to: "/services/uk" },
              { label: "UK Approved Body Strategy & Coordination", to: "/services/uk" },
              { label: "UK Responsible Person (UKRP) Services", to: "/services/uk/ukrp" },
              { label: "MHRA Registration", to: "/services/uk/ukrp" },
              { label: "Technical Documentation Review", to: "/services/technical-documentation" },
              { label: "Clinical Evaluation / Clinical Evidence Strategy", to: "/services/uk" },
              { label: "Post-Market Surveillance (PMS)", to: "/services/uk/ukrp" },
              { label: "Vigilance & Incident Reporting", to: "/services/uk/ukrp" },
              { label: "Regulatory Representation in the UK", to: "/services/uk/ukrp" },
              { label: "Post-Approval & Lifecycle Regulatory Support", to: "/services/uk" },
            ],
          },
          {
            groupTitle: "IVDs",
            subItems: [
              { label: "UK IVD Regulatory Strategy", to: "/services/uk" },
              { label: "UK MDR 2002 Compliance for IVDs", to: "/services/uk" },
              { label: "IVD Classification & Regulatory Pathway Assessment", to: "/services/uk" },
              { label: "UKCA / CE Regulatory Strategy", to: "/services/uk" },
              { label: "UK Approved Body Coordination, where applicable", to: "/services/uk" },
              { label: "UK Responsible Person (UKRP)", to: "/services/uk/ukrp" },
              { label: "MHRA IVD Registration", to: "/services/uk/ukrp" },
              { label: "IVD Technical Documentation Review", to: "/services/technical-documentation" },
              { label: "Performance Evaluation Strategy", to: "/services/uk" },
              { label: "Analytical & Clinical Performance Assessment", to: "/services/uk" },
              { label: "Post-Market Surveillance", to: "/services/uk/ukrp" },
              { label: "Vigilance & Incident Reporting", to: "/services/uk/ukrp" },
              { label: "Regulatory Representation", to: "/services/uk/ukrp" },
              { label: "Post-Approval & Lifecycle Support", to: "/services/uk" },
            ],
          },
          {
            groupTitle: "Cosmetics",
            subItems: [
              { label: "UK Cosmetic Regulatory Strategy", to: "/industries/cosmetics" },
              { label: "UK Cosmetic Product Compliance", to: "/industries/cosmetics" },
              { label: "UK Responsible Person (UKRP)", to: "/industries/cosmetics" },
              { label: "SCPN Notification", to: "/industries/cosmetics" },
              { label: "Cosmetic Product Information File (PIF) Review", to: "/industries/cosmetics" },
              { label: "Cosmetic Safety Assessment Coordination", to: "/industries/cosmetics" },
              { label: "Cosmetic Product Labelling & Claims Review", to: "/industries/cosmetics" },
              { label: "UK Market Entry Support", to: "/industries/cosmetics" },
              { label: "Post-Market Compliance & Regulatory Support", to: "/industries/cosmetics" },
            ],
          },
        ],
      },
      {
        label: "Australia",
        to: "/services/australia",
        groups: [
          {
            groupTitle: "Medical Devices",
            subItems: [
              { label: "TGA Regulatory Strategy", to: "/services/australia" },
              { label: "Medical Device Classification", to: "/services/australia" },
              { label: "Australian Regulatory Pathway Assessment", to: "/services/australia" },
              { label: "ARTG Inclusion", to: "/services/australia" },
              { label: "TGA Application & Submission Support", to: "/services/australia" },
              { label: "Australian Sponsor Services", to: "/services/australia" },
              { label: "Technical Documentation Review", to: "/services/technical-documentation" },
              { label: "Conformity Assessment Strategy", to: "/services/australia" },
              { label: "Clinical Evidence / Evaluation Strategy", to: "/services/australia" },
              { label: "Post-Market Surveillance", to: "/services/australia" },
              { label: "Vigilance & Incident Reporting", to: "/services/australia" },
              { label: "Regulatory Representation in Australia", to: "/services/australia" },
              { label: "Post-Approval & Lifecycle Regulatory Support", to: "/services/australia" },
            ],
          },
          {
            groupTitle: "IVDs",
            subItems: [
              { label: "TGA IVD Regulatory Strategy", to: "/services/australia" },
              { label: "IVD Classification", to: "/services/australia" },
              { label: "Regulatory Pathway Assessment", to: "/services/australia" },
              { label: "ARTG Inclusion for IVDs", to: "/services/australia" },
              { label: "TGA Submission Support", to: "/services/australia" },
              { label: "Australian Sponsor Services", to: "/services/australia" },
              { label: "IVD Technical Documentation Review", to: "/services/technical-documentation" },
              { label: "Performance Evaluation Strategy", to: "/services/australia" },
              { label: "Analytical & Clinical Performance Evidence", to: "/services/australia" },
              { label: "Post-Market Surveillance", to: "/services/australia" },
              { label: "Vigilance & Incident Reporting", to: "/services/australia" },
              { label: "Regulatory Representation", to: "/services/australia" },
              { label: "Post-Approval & Lifecycle Support", to: "/services/australia" },
            ],
          },
        ],
      },
      {
        label: "Canada",
        to: "/services/canada",
        groups: [
          {
            groupTitle: "Medical Devices",
            subItems: [
              { label: "Health Canada Regulatory Strategy", to: "/services/canada" },
              { label: "Medical Device Classification", to: "/services/canada" },
              { label: "Medical Device Licence (MDL)", to: "/services/canada" },
              { label: "Medical Device Establishment Licence (MDEL)", to: "/services/canada" },
              { label: "Regulatory Submission Support", to: "/services/canada" },
              { label: "Technical Documentation Review", to: "/services/technical-documentation" },
              { label: "Canadian Regulatory Representation", to: "/services/canada" },
              { label: "Quality & Compliance Support", to: "/services/canada" },
              { label: "Post-Market Surveillance", to: "/services/canada" },
              { label: "Incident / Problem Reporting Support", to: "/services/canada" },
              { label: "Licence Amendment & Lifecycle Support", to: "/services/canada" },
            ],
          },
          {
            groupTitle: "IVDs",
            subItems: [
              { label: "Health Canada IVD Regulatory Strategy", to: "/services/canada" },
              { label: "IVD Classification", to: "/services/canada" },
              { label: "Medical Device Licence (MDL) Support", to: "/services/canada" },
              { label: "MDEL Support, where applicable", to: "/services/canada" },
              { label: "IVD Technical Documentation Review", to: "/services/technical-documentation" },
              { label: "Performance Evidence Strategy", to: "/services/canada" },
              { label: "Regulatory Submission Support", to: "/services/canada" },
              { label: "Canadian Regulatory Representation", to: "/services/canada" },
              { label: "Post-Market Surveillance", to: "/services/canada" },
              { label: "Incident Reporting", to: "/services/canada" },
              { label: "Licence Maintenance & Lifecycle Support", to: "/services/canada" },
            ],
          },
        ],
      },
      { label: "Authorized Representative (AIR / EAR / UKRP)", to: "/services/regulatory-affairs" },
    ],
  },
  {
    title: "Drug Licenses for Importers",
    to: "/services/drug-licenses-for-importers",
    items: [
      { label: "Registration Certificate (Form 41 / Form 40)", to: "/services/drug-licenses-for-importers" },
      { label: "Drug Import License (Form 10 / Form 10-A)", to: "/services/drug-licenses-for-importers" },
      { label: "Form 11 Test License for Import & R&D", to: "/services/drug-licenses-for-importers" },
      { label: "Wholesale Drug License (Form 20B/21B)", to: "/services/drug-licenses-for-importers" },
      { label: "Authorized Indian Agent (AIR / Form 9)", to: "/services/drug-licenses-for-importers" },
      { label: "Rule 37 Bulk Repackaging Approvals", to: "/services/drug-licenses-for-importers" },
      { label: "Post-Approval Variations & Shelf-Life", to: "/services/drug-licenses-for-importers" },
    ],
  },
  {
    title: "WPC Wireless Device Approval",
    to: "/services/wpc-wireless-medical-devices",
    items: [
      { label: "Equipment Type Approval (ETA)", to: "/services/wpc-wireless-medical-devices" },
      { label: "WPC Import License (RLO Permit)", to: "/services/wpc-wireless-medical-devices" },
      { label: "Dealer Possession License (DPL / NDPL)", to: "/services/wpc-wireless-medical-devices" },
      { label: "Experimental & Demo Licenses", to: "/services/wpc-wireless-medical-devices" },
      { label: "Saral Sanchar Portal Technical Filing", to: "/services/wpc-wireless-medical-devices" },
      { label: "RF Test Report & Spectrum Compliance", to: "/services/wpc-wireless-medical-devices" },
    ],
  },
  {
    title: "PC-PNDT Certificate",
    to: "/services/pc-pndt-certificate",
    items: [
      { label: "Form A Statutory Application Filing", to: "/services/pc-pndt-certificate" },
      { label: "Form B Registration Certificate Grant", to: "/services/pc-pndt-certificate" },
      { label: "Ultrasound & Imaging Machine Registration", to: "/services/pc-pndt-certificate" },
      { label: "Importer, OEM & Dealer Verification", to: "/services/pc-pndt-certificate" },
      { label: "Buyback & Maintenance Unit Licensure", to: "/services/pc-pndt-certificate" },
      { label: "Statutory 2-Year Record Retention Setup", to: "/services/pc-pndt-certificate" },
    ],
  },
  {
    title: "IEC & AD Code Registration",
    to: "/services/iec-ad-code",
    items: [
      { label: "New Import Export Code (IEC) from DGFT", to: "/services/iec-ad-code" },
      { label: "IEC Application Prep & Modifications", to: "/services/iec-ad-code" },
      { label: "Bank Authority & Exporter Documentation", to: "/services/iec-ad-code" },
      { label: "Port-Wise AD Code ICEGATE Registration", to: "/services/iec-ad-code" },
      { label: "Customs EDI Profile & Port Linking", to: "/services/iec-ad-code" },
      { label: "AD Code Amendment & Query Resolution", to: "/services/iec-ad-code" },
    ],
  },
  {
    title: "Quality Systems / ISO 13485",
    to: "/services/iso-13485",
    items: [
      { label: "ISO 13485:2016 QMS Implementation", to: "/services/iso-13485" },
      { label: "Risk Management Systems (ISO 14971)", to: "/services/iso-13485" },
      { label: "Design History Files (DHF) & DMR", to: "/services/iso-13485" },
      { label: "Internal Quality Audits & Gap Analysis", to: "/services/iso-13485" },
      { label: "CAPA & Supplier Quality Controls", to: "/services/iso-13485" },
      { label: "Notified Body Audit Preparation", to: "/services/iso-13485" },
    ],
  },
  {
    title: "MDSAP",
    to: "/services/mdsap",
    items: [
      { label: "5-Country Audit Harmonization Strategy", to: "/services/mdsap" },
      { label: "FDA, Health Canada, TGA, ANVISA & MHLW", to: "/services/mdsap" },
      { label: "MDSAP Quality Manual & SOP Alignment", to: "/services/mdsap" },
      { label: "Mock MDSAP Audits & Audit Defense", to: "/services/mdsap" },
      { label: "Non-Conformity Grading & Remediation", to: "/services/mdsap" },
    ],
  },
  {
    title: "Technical Documentation",
    to: "/services/technical-documentation",
    items: [
      { label: "EU MDR (2017/745) Technical Files", to: "/services/technical-documentation" },
      { label: "Clinical Evaluation Reports (CER / CEP)", to: "/services/technical-documentation" },
      { label: "Post-Market Surveillance (PMS / PMCF)", to: "/services/technical-documentation" },
      { label: "Summary of Safety & Performance (SSCP)", to: "/services/technical-documentation" },
      { label: "US FDA eSTAR Dossier Preparation", to: "/services/technical-documentation" },
      { label: "STED Dossiers for Global Regulators", to: "/services/technical-documentation" },
    ],
  },
  {
    title: "Market Access",
    to: "/services/market-access",
    items: [
      { label: "India CDSCO Market Entry & Distribution", to: "/services/india" },
      { label: "US FDA 510(k) Clearance & Agent", to: "/services/usa" },
      { label: "European Union CE Mark Certification", to: "/services/eu" },
      { label: "UK, Australia, Canada & Latin America", to: "/markets" },
      { label: "Free Sale (FSC) & Market Standing (MSC)", to: "/services/india/free-sale" },
      { label: "Neutral Code & Export Compliance", to: "/services/india/neutral-code" },
    ],
  },
  {
    title: "Audit & Compliance Support",
    to: "/services/audit-compliance",
    items: [
      { label: "Mock Regulatory & Pre-Inspection Audits", to: "/services/audit-compliance" },
      { label: "FDA 483 & Warning Letter Remediation", to: "/services/audit-compliance" },
      { label: "Notified Body Non-Conformity Resolution", to: "/services/audit-compliance" },
      { label: "Biocompatibility & Testing (ISO 10993)", to: "/services/audit-compliance" },
      { label: "Post-Market Vigilance & Recall Support", to: "/services/audit-compliance" },
    ],
  },
];

const columns: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Insights / Blog", to: "/insights" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Regulatory Affairs", to: "/services/regulatory-affairs" },
      { label: "Drug Licenses for Importers", to: "/services/drug-licenses-for-importers" },
      { label: "WPC Wireless Device Approval", to: "/services/wpc-wireless-medical-devices" },
      { label: "PC-PNDT Certificate", to: "/services/pc-pndt-certificate" },
      { label: "IEC & AD Code Registration", to: "/services/iec-ad-code" },
      { label: "Quality Systems / ISO 13485", to: "/services/iso-13485" },
      { label: "MDSAP", to: "/services/mdsap" },
      { label: "Technical Documentation", to: "/services/technical-documentation" },
      { label: "Market Access", to: "/services/market-access" },
      { label: "Audit & Compliance Support", to: "/services/audit-compliance" },
    ],
  },
  {
    title: "Markets",
    links: [
      { label: "India", to: "/services/india" },
      { label: "United States", to: "/services/usa" },
      { label: "European Union", to: "/services/eu" },
      { label: "United Kingdom", to: "/services/uk" },
      { label: "Canada", to: "/services/canada" },
      { label: "Australia", to: "/services/australia" },
      { label: "Other Global Markets", to: "/markets" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Medical Devices", to: "/industries/medical-devices" },
      { label: "In Vitro Diagnostics", to: "/industries/ivd" },
      { label: "Cosmetics", to: "/industries/cosmetics" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      {/* SERVICES BREAKDOWN DIRECTORY WITH EXACT SERVICES HEADINGS */}
      <section className="bg-[#f8fafc] text-[#0f2340] border-t border-b border-gray-200 py-14 lg:py-16">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0b3a96] text-white flex items-center justify-center shadow-md">
                <Layers className="h-5 w-5 text-[#F5C754]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f2340]">
                  Services Directory & Compliance Scope
                </h2>
                <p className="text-xs text-gray-500">
                  Comprehensive regulatory, technical documentation, and quality management offerings.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0b3a96] hover:bg-[#082b70] text-white font-bold text-xs shadow-sm transition-colors shrink-0"
            >
              Contact Regulatory Team
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Wide Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 items-start">
            {serviceDirectory.map((service, idx) => (
              <div
                key={idx}
                className="space-y-4 bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <Link
                    to={service.to}
                    className="block text-base font-extrabold text-[#0f2340] hover:text-[#0b3a96] transition-colors pb-3 border-b border-gray-200"
                  >
                    {service.title}
                  </Link>
                  <ul className="mt-4 space-y-3">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="space-y-2">
                        {item.groups && item.groups.length > 0 ? (
                          <div className="space-y-3 pt-1">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50/90 border border-blue-200/70 text-[#0b3a96] text-xs font-bold">
                              <Link to={item.to} className="hover:underline">
                                {item.label}
                              </Link>
                            </div>
                            <div className="space-y-4 pl-1">
                              {item.groups.map((group, gIdx) => (
                                <div key={gIdx} className="space-y-1.5">
                                  <div className="text-[11px] font-bold text-[#0f2340] tracking-wide bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                                    {group.groupTitle}
                                  </div>
                                  <ul className="pl-2.5 space-y-2 border-l-2 border-blue-200/80 ml-1.5">
                                    {group.subItems.map((sub, subIdx) => (
                                      <li key={subIdx} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                                        <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                                        <Link to={sub.to} className="leading-snug">
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : item.subItems && item.subItems.length > 0 ? (
                          <div className="space-y-2 pt-1">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50/90 border border-blue-200/70 text-[#0b3a96] text-xs font-bold">
                              <Link to={item.to} className="hover:underline">
                                {item.label}
                              </Link>
                            </div>
                            <ul className="pl-2.5 space-y-2 border-l-2 border-blue-200/80 ml-1.5">
                              {item.subItems.map((sub, subIdx) => (
                                <li key={subIdx} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                                  <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                                  <Link to={sub.to} className="leading-snug">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="flex items-start gap-2 text-xs text-gray-700 font-medium hover:text-[#0b3a96] transition-colors">
                            <span className="text-[#0b3a96] text-sm leading-none mt-0.5">•</span>
                            <Link to={item.to} className="leading-snug">
                              {item.label}
                            </Link>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE BRANDING & LINKS FOOTER */}
      <div className="bg-navy-deep text-navy-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
            <div className="lg:col-span-2">
              <Logo light />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
                From First Idea to Global Market Access. Regulatory, quality & market access
                solutions for Medical Devices, IVDs, Pharmaceuticals and Cosmetics.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/?viewAsMember=true" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-foreground/10 hover:bg-navy-foreground/20 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-foreground/10">
                  <Twitter className="h-4 w-4" />
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-navy-foreground/10">
                  <Youtube className="h-4 w-4" />
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <a href="mailto:contact@nkbregovanta.com" className="flex items-center gap-3 text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">
                  <Mail className="h-4 w-4 shrink-0" />
                  contact@nkbregovanta.com
                </a>
                <div className="flex items-center gap-3 text-sm text-navy-foreground/70">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a href="tel:+918400039062" className="hover:text-navy-foreground transition-colors">+91 84000 39062</a>
                </div>
                <div className="flex items-start gap-3 text-sm text-navy-foreground/70">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>
                    Building No 20, Awadh Kunj, Faridi Nagar, CIMAP,<br />
                    Lucknow, Uttar Pradesh, India, 226015
                  </span>
                </div>
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-navy-foreground/60">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© NKB Regovanta. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/" className="hover:text-navy-foreground">Privacy Policy</Link>
              <Link to="/" className="hover:text-navy-foreground">Terms of Use</Link>
              <Link to="/" className="hover:text-navy-foreground">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}