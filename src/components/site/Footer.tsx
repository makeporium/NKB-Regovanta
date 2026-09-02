import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Layers, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo";

type SubItem = {
  label: string;
  to: string;
};

type OtherService = {
  title: string;
  to: string;
  items: SubItem[];
};

const otherServices: OtherService[] = [
  {
    title: "Manufacturing Solutions",
    to: "/services/manufacturing",
    items: [
      { label: "Pharmaceutical & cGMP Machinery", to: "/services/manufacturing" },
      { label: "Cleanroom SS Furniture & Passboxes", to: "/services/manufacturing" },
      { label: "Material Handling & Storage Trolleys", to: "/services/manufacturing" },
      { label: "Liquid Processing & Fluid Transfer", to: "/services/manufacturing" },
      { label: "Equipment Catalog & Ancillaries", to: "/services/manufacturing" },
    ],
  },
  {
    title: "PC-PNDT Certificate",
    to: "/services/pc-pndt-certificate",
    items: [
      { label: "Form A Statutory Application Filing", to: "/services/pc-pndt-certificate" },
      { label: "Form B Registration Certificate Grant", to: "/services/pc-pndt-certificate" },
      { label: "Ultrasound & Imaging Machine Registration", to: "/services/pc-pndt-certificate" },
      { label: "OEM, Dealer & Importer Verification Support", to: "/services/pc-pndt-certificate" },
      { label: "Statutory 2-Year Record Retention Setup", to: "/services/pc-pndt-certificate" },
    ],
  },
  {
    title: "IEC & AD Code Registration",
    to: "/services/iec-ad-code",
    items: [
      { label: "New Import Export Code (IEC) from DGFT", to: "/services/iec-ad-code" },
      { label: "IEC Application Preparation & Modifications", to: "/services/iec-ad-code" },
      { label: "Bank Authority & Exporter Documentation", to: "/services/iec-ad-code" },
      { label: "Port-Wise AD Code ICEGATE Registration", to: "/services/iec-ad-code" },
      { label: "Customs EDI Profile & Port Registration", to: "/services/iec-ad-code" },
      { label: "AD Code Amendment & Query Resolution", to: "/services/iec-ad-code" },
    ],
  },
  {
    title: "Global Quality & Compliance",
    to: "/services/iso-13485",
    items: [
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
    title: "Market Access",
    to: "/services/market-access",
    items: [
      { label: "India CDSCO Market Entry & Distribution", to: "/services/india" },
      { label: "US FDA 510(k) Clearance & Agent Services", to: "/services/usa" },
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
      { label: "Biocompatibility & Testing Strategy (ISO 10993)", to: "/services/audit-compliance" },
      { label: "Post-Market Vigilance & Recall Coordination", to: "/services/audit-compliance" },
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
      { label: "Medical Device & IVD Regulatory Services", to: "/services/regulatory-affairs" },
      { label: "Drug-Device Combination Product Consulting", to: "/services/drug-device-combination-products" },
      { label: "Regulatory Due Diligence for Medical Devices & IVDs", to: "/services/regulatory-due-diligence" },
      { label: "Pharmaceutical & Drug Regulatory Services", to: "/services/drug-licenses-for-importers" },
      { label: "Cosmetics Regulatory & Global Market Access", to: "/industries/cosmetics" },
      { label: "Manufacturing & Equipment Solutions", to: "/services/manufacturing" },
      { label: "Global Quality & Compliance", to: "/services/iso-13485" },
      { label: "PC-PNDT Certificate", to: "/services/pc-pndt-certificate" },
      { label: "IEC & AD Code Registration", to: "/services/iec-ad-code" },
      { label: "Market Access & Audit Compliance", to: "/services/audit-compliance" },
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
      { label: "Pharmaceuticals", to: "/services/drug-licenses-for-importers" },
      { label: "Cosmetics", to: "/industries/cosmetics" },
      { label: "Manufacturing", to: "/services/manufacturing" },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      {/* MASTER SERVICES DIRECTORY */}
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
                  Comprehensive regulatory affairs, pharmaceutical licensing, cosmetic compliance, and technical dossiers.
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

          {/* 1. MASTER REGULATORY AFFAIRS SECTION */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200 mb-8">
              <Link
                to="/services/regulatory-affairs"
                className="text-xl sm:text-2xl font-extrabold text-[#0f2340] hover:text-[#0b3a96] transition-colors"
              >
                Medical Device & IVD Regulatory Services
              </Link>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 w-fit">
                Global Regulatory Submissions & Approvals
              </span>
            </div>

            <div className="space-y-10">
              {/* US FDA Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#0b3a96] text-white text-xs font-bold">
                    US FDA
                  </span>
                  <Link to="/services/usa" className="text-sm font-bold text-[#0f2340] hover:text-[#0b3a96]">
                    US FDA Regulatory & Market Access
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 pt-2">
                  {[
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
                  ].map((sub, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* India CDSCO Section with Side-by-Side A, B, C, D Subheadings */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#0b3a96] text-white text-xs font-bold">
                    India CDSCO
                  </span>
                  <Link to="/services/india" className="text-sm font-bold text-[#0f2340] hover:text-[#0b3a96]">
                    India Regulatory & Market Access Services (CDSCO)
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start pt-2">
                  {/* Part A */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-1.5 border-b border-blue-100">
                      A. Importer / Foreign Manufacturer Services
                    </div>
                    <ul className="space-y-2">
                      {[
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
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Part B */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-1.5 border-b border-blue-100">
                      B. Indian Manufacturer Services
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "Class A & B Manufacturing Licence – MD-3 / MD-5", to: "/services/india/mfg-class-a-b" },
                        { label: "Class C & D Manufacturing Licence – MD-7 / MD-9", to: "/services/india/mfg-class-c-d" },
                        { label: "Class A Registration – GSR 777(E)", to: "/services/india/mfg-class-a-gsr" },
                        { label: "Loan Licence – Class A & B – MD-4 / MD-6", to: "/services/india/manufacturing-licenses" },
                        { label: "Loan Licence – Class C & D – MD-8 / MD-10", to: "/services/india/manufacturing-licenses" },
                        { label: "Manufacturing Facility Regulatory Readiness", to: "/services/india/manufacturing-licenses" },
                        { label: "CDSCO Manufacturing Licence Support", to: "/services/india/manufacturing-licenses" },
                        { label: "SUGAM Portal Registration & Application Support", to: "/services/india" },
                        { label: "Manufacturing Compliance & Post-Approval Support", to: "/services/india" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Part C */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-1.5 border-b border-blue-100">
                      C. Distribution & Commercial Licences
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "Medical Device Wholesale Licence / Wholesale Drug Licence", to: "/services/drug-licenses-for-importers" },
                        { label: "Wholesale Drug Licence – Form 20B / 21B", to: "/services/drug-licenses-for-importers" },
                        { label: "State-level distribution / sale licence support", to: "/services/drug-licenses-for-importers" },
                        { label: "Licensing and compliance support for distributors & importers", to: "/services/drug-licenses-for-importers" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Part D */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-1.5 border-b border-blue-100">
                      D. Other Indian Regulatory Approvals & Compliance
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "PCPNDT Registration & Compliance", to: "/services/pc-pndt-certificate" },
                        { label: "WPC / Wireless Planning & Coordination Approvals", to: "/services/wpc-wireless-medical-devices" },
                        { label: "EPR Registration & Compliance (E-Waste / Battery / Plastic)", to: "/services/india" },
                        { label: "Free Sale Certificate (FSC)", to: "/services/india/free-sale" },
                        { label: "Market Standing Certificate (MSC)", to: "/services/india/market-standing" },
                        { label: "Non-Conviction Certificate (NCC)", to: "/services/india/non-conviction" },
                        { label: "MD-42 Certificate", to: "/services/india/md-42" },
                        { label: "Neutral / Special Code Certificate", to: "/services/india/neutral-code" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* EU MDR / IVDR & EAR Section */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#0b3a96] text-white text-xs font-bold">
                    European Union
                  </span>
                  <Link to="/services/eu" className="text-sm font-bold text-[#0f2340] hover:text-[#0b3a96]">
                    EU MDR / IVDR Regulatory & Market Access & EAR Services
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start pt-2">
                  {/* Medical Devices MDR */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-1.5 border-b border-blue-100">
                      Medical Devices – EU MDR 2017/745
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "EU MDR 2017/745 Regulatory Strategy", to: "/services/eu" },
                        { label: "Medical Device Classification & CE Marking", to: "/services/eu" },
                        { label: "Conformity Assessment Strategy", to: "/services/eu" },
                        { label: "Notified Body Selection & Coordination", to: "/services/eu" },
                        { label: "Technical Documentation / Technical File", to: "/services/technical-documentation" },
                        { label: "GSPR Compliance & Risk Management (ISO 14971)", to: "/services/eu" },
                        { label: "Clinical Evaluation Reports (CER) & CEP", to: "/services/technical-documentation" },
                        { label: "PMS, PMCF & PSUR Reporting", to: "/services/technical-documentation" },
                        { label: "Vigilance, Incident Reporting & EUDAMED", to: "/services/eu" },
                        { label: "MDD-AIMDD to MDR Transition Support", to: "/services/eu" },
                        { label: "Post-Approval / Lifecycle Regulatory Support", to: "/services/eu" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* IVD IVDR */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-1.5 border-b border-blue-100">
                      In Vitro Diagnostics – EU IVDR 2017/746
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "IVDR 2017/746 Regulatory Strategy", to: "/industries/ivd/eu" },
                        { label: "IVD Classification & CE Marking", to: "/industries/ivd/eu" },
                        { label: "Conformity Assessment & Notified Body Strategy", to: "/industries/ivd/eu" },
                        { label: "Technical Documentation Compilation", to: "/services/technical-documentation" },
                        { label: "Performance Evaluation Reports (PER)", to: "/services/technical-documentation" },
                        { label: "Scientific Validity, Analytical & Clinical Performance", to: "/industries/ivd/eu" },
                        { label: "PMS / PMPF Plans & PSUR Reporting", to: "/services/technical-documentation" },
                        { label: "IVDD to IVDR Transition & EUDAMED Support", to: "/industries/ivd/eu" },
                        { label: "Post-Market / Lifecycle Compliance", to: "/industries/ivd/eu" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* EAR */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-1.5 border-b border-blue-100">
                      European Authorised Representative (EAR)
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "European Authorised Representative (EAR) Services", to: "/services/eu" },
                        { label: "Regulatory Representation in the EU", to: "/services/eu" },
                        { label: "Competent Authority Communication", to: "/services/eu" },
                        { label: "EUDAMED Support & Mandate Setup", to: "/services/eu" },
                        { label: "Vigilance / Incident Communication", to: "/services/eu" },
                        { label: "Regulatory Compliance & Lifecycle Support", to: "/services/eu" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* UK, Australia & Canada Section */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                  {/* UK */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#0b3a96] text-white text-[11px] font-bold">
                        UK
                      </span>
                      <Link to="/services/uk" className="text-xs font-bold text-[#0f2340] hover:text-[#0b3a96] uppercase tracking-wide">
                        United Kingdom (UKCA & MHRA)
                      </Link>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "UK MDR 2002 Regulatory Strategy & Compliance", to: "/services/uk" },
                        { label: "UK Medical Device & IVD Classification", to: "/services/uk" },
                        { label: "UK Responsible Person (UKRP) Services", to: "/services/uk/ukrp" },
                        { label: "MHRA Device & IVD Registration", to: "/services/uk/ukrp" },
                        { label: "UKCA & CE Mark Recognition Strategy", to: "/services/uk" },
                        { label: "Post-Market Surveillance (PMS) & Vigilance", to: "/services/uk/ukrp" },
                        { label: "UK Cosmetic Compliance & SCPN Notification", to: "/industries/cosmetics" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Australia */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#0b3a96] text-white text-[11px] font-bold">
                        AUS
                      </span>
                      <Link to="/services/australia" className="text-xs font-bold text-[#0f2340] hover:text-[#0b3a96] uppercase tracking-wide">
                        Australia (TGA)
                      </Link>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "TGA Medical Device & IVD Strategy", to: "/services/australia" },
                        { label: "ARTG Inclusion Submissions Support", to: "/services/australia" },
                        { label: "Official Australian Sponsor Services", to: "/services/australia" },
                        { label: "Technical Documentation & Clinical Evaluation", to: "/services/technical-documentation" },
                        { label: "TGA Post-Market Surveillance & Vigilance", to: "/services/australia" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Canada */}
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded bg-[#0b3a96] text-white text-[11px] font-bold">
                        CAN
                      </span>
                      <Link to="/services/canada" className="text-xs font-bold text-[#0f2340] hover:text-[#0b3a96] uppercase tracking-wide">
                        Canada (Health Canada)
                      </Link>
                    </div>
                    <ul className="space-y-2">
                      {[
                        { label: "Health Canada Regulatory Strategy & Classification", to: "/services/canada" },
                        { label: "Medical Device Licence (MDL) Applications", to: "/services/canada" },
                        { label: "Medical Device Establishment Licence (MDEL)", to: "/services/canada" },
                        { label: "Canadian Regulatory Representation & Support", to: "/services/canada" },
                        { label: "Incident & Mandatory Problem Reporting", to: "/services/canada" },
                      ].map((sub, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                          <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                          <Link to={sub.to} className="leading-snug">
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. MASTER PHARMACEUTICAL & DRUG REGULATORY SERVICES SECTION */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200 mb-8">
              <Link
                to="/services/drug-licenses-for-importers"
                className="text-xl sm:text-2xl font-extrabold text-[#0f2340] hover:text-[#0b3a96] transition-colors"
              >
                Pharmaceutical & Drug Regulatory Services
              </Link>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 w-fit">
                CDSCO Drug Licensing, Registration & Post-Approval
              </span>
            </div>

            {/* 6 Subheadings Side-by-Side in a 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* 1. Drug Import Licensing & Registration – India */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3a96]" />
                  <span>1. Drug Import Licensing & Registration – India</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Drug Import Licence & Registration", to: "/services/drug-licenses-for-importers" },
                    { label: "Registration Certificate – Form 41", to: "/services/drug-licenses-for-importers" },
                    { label: "Import Licence – Form 10 / 10-A", to: "/services/drug-licenses-for-importers" },
                    { label: "Form 40 Application Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Form 8 / 8-A Application Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Test Licence – Form 11", to: "/services/drug-licenses-for-importers" },
                    { label: "Import of Trial / Testing Quantities", to: "/services/drug-licenses-for-importers" },
                    { label: "New Drug / New Chemical Entity (NCE) Regulatory Support", to: "/services/drug-licenses-for-importers" },
                    { label: "API Import Registration & Licensing", to: "/services/drug-licenses-for-importers" },
                    { label: "Fixed Dose Combination (FDC) Regulatory Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Phytopharmaceutical Regulatory Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Biologics & Biosimilars", to: "/services/drug-licenses-for-importers" },
                    { label: "Vaccines", to: "/services/drug-licenses-for-importers" },
                    { label: "Recombinant Therapeutic Products", to: "/services/drug-licenses-for-importers" },
                    { label: "Blood Products", to: "/services/drug-licenses-for-importers" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. Foreign Manufacturer & Product Registration */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3a96]" />
                  <span>2. Foreign Manufacturer & Product Registration</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Overseas Manufacturing Site Registration", to: "/services/drug-licenses-for-importers" },
                    { label: "Foreign Manufacturer Registration", to: "/services/drug-licenses-for-importers" },
                    { label: "Product Registration", to: "/services/drug-licenses-for-importers" },
                    { label: "Plant Master File (PMF)", to: "/services/drug-licenses-for-importers" },
                    { label: "Drug Master File (DMF) / Open Part Support", to: "/services/drug-licenses-for-importers" },
                    { label: "GMP Documentation Review", to: "/services/drug-licenses-for-importers" },
                    { label: "COPP Documentation & Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Manufacturing Site Change / Variation Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Manufacturer Transfer Support", to: "/services/drug-licenses-for-importers" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Indian Authorized Agent & Market Entry */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3a96]" />
                  <span>3. Indian Authorized Agent & Market Entry</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Authorized Indian Agent (AIR) Services", to: "/services/drug-licenses-for-importers" },
                    { label: "Regulatory Representation in India", to: "/services/drug-licenses-for-importers" },
                    { label: "CDSCO Liaison & Regulatory Authority Interaction", to: "/services/drug-licenses-for-importers" },
                    { label: "SUGAM Portal Support", to: "/services/drug-licenses-for-importers" },
                    { label: "India Market Entry Strategy", to: "/services/drug-licenses-for-importers" },
                    { label: "Importer / Distributor Regulatory Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Regulatory Query & Deficiency Response", to: "/services/drug-licenses-for-importers" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Wholesale & Distribution Licensing */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3a96]" />
                  <span>4. Wholesale & Distribution Licensing</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Wholesale Drug Licence", to: "/services/drug-licenses-for-importers" },
                    { label: "Form 20B / 21B", to: "/services/drug-licenses-for-importers" },
                    { label: "State FDA Licensing Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Distributor / Stockist Licensing", to: "/services/drug-licenses-for-importers" },
                    { label: "Storage & Warehousing Compliance", to: "/services/drug-licenses-for-importers" },
                    { label: "Distribution Regulatory Compliance", to: "/services/drug-licenses-for-importers" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Clinical, Testing & R&D Regulatory Support */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3a96]" />
                  <span>5. Clinical, Testing & R&D Regulatory Support</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Test Licence – Form 11", to: "/services/drug-licenses-for-importers" },
                    { label: "Import of Trial Quantities", to: "/services/drug-licenses-for-importers" },
                    { label: "Clinical Batch / Sample Import Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Laboratory Testing / Analysis Regulatory Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Clinical Trial / R&D Regulatory Support, where applicable", to: "/services/drug-licenses-for-importers" },
                    { label: "BA/BE Regulatory Support", to: "/services/drug-licenses-for-importers" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Post-Approval & Lifecycle Management */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0b3a96]" />
                  <span>6. Post-Approval & Lifecycle Management</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Post-Approval Changes", to: "/services/drug-licenses-for-importers" },
                    { label: "Site Variations", to: "/services/drug-licenses-for-importers" },
                    { label: "Product Variations", to: "/services/drug-licenses-for-importers" },
                    { label: "Shelf-Life Extension", to: "/services/drug-licenses-for-importers" },
                    { label: "Stability Filing Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Manufacturer Transfer", to: "/services/drug-licenses-for-importers" },
                    { label: "Rule 37 / Bulk Repackaging Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Renewal / Retention Support", to: "/services/drug-licenses-for-importers" },
                    { label: "Regulatory Query & Compliance Support", to: "/services/drug-licenses-for-importers" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. MASTER COSMETICS REGULATORY & GLOBAL MARKET ACCESS SECTION */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xs mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-200 mb-8">
              <Link
                to="/industries/cosmetics"
                className="text-xl sm:text-2xl font-extrabold text-[#0f2340] hover:text-[#0b3a96] transition-colors flex items-center gap-2"
              >
                Cosmetics Regulatory & Global Market Access
              </Link>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-md border border-blue-100 w-fit">
                MoCRA, EU RP, CPSR, PIF, CPNP, SCPN & CDSCO
              </span>
            </div>

            {/* 6 Country Columns Side-by-Side in a 3-Column Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
              {/* 1. India – Cosmetics */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="text-base">🇮🇳</span>
                  <span>India – Cosmetics (CDSCO)</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "CDSCO / Central Licensing Authority Regulatory Strategy", to: "/industries/cosmetics" },
                    { label: "Cosmetics Rules, 2020 Compliance", to: "/industries/cosmetics" },
                    { label: "Cosmetic Product Classification", to: "/industries/cosmetics" },
                    { label: "Import Registration Certificate – COS-1 / COS-2", to: "/industries/cosmetics" },
                    { label: "Manufacturing Licence – COS-5 / COS-8, as applicable", to: "/industries/cosmetics" },
                    { label: "Import & Manufacturing Regulatory Support", to: "/industries/cosmetics" },
                    { label: "Product / Ingredient Compliance Assessment", to: "/industries/cosmetics" },
                    { label: "Cosmetic Product Information / Technical Documentation Review", to: "/industries/cosmetics" },
                    { label: "Safety & Ingredient Documentation Review", to: "/industries/cosmetics" },
                    { label: "Labelling & Claims Review", to: "/industries/cosmetics" },
                    { label: "SUGAM Portal Support", to: "/industries/cosmetics" },
                    { label: "Regulatory Query Response Support", to: "/industries/cosmetics" },
                    { label: "Post-Approval / Lifecycle Compliance", to: "/industries/cosmetics" },
                    { label: "Regulatory Representation & Market Entry Support", to: "/industries/cosmetics" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2. USA – Cosmetics (MoCRA) */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="text-base">🇺🇸</span>
                  <span>USA – Cosmetics (MoCRA)</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "FDA Cosmetic Regulatory Support", to: "/industries/cosmetics" },
                    { label: "US Cosmetic Regulatory Strategy", to: "/industries/cosmetics" },
                    { label: "MoCRA Compliance Support (Key Framework)", to: "/industries/cosmetics" },
                    { label: "FDA Facility Registration", to: "/industries/cosmetics" },
                    { label: "Cosmetic Product Listing", to: "/industries/cosmetics" },
                    { label: "Responsible Person Regulatory Support", to: "/industries/cosmetics" },
                    { label: "Product & Ingredient Compliance Assessment", to: "/industries/cosmetics" },
                    { label: "Safety Substantiation Documentation Review", to: "/industries/cosmetics" },
                    { label: "Cosmetic Labelling & Claims Review", to: "/industries/cosmetics" },
                    { label: "Adverse Event Reporting Support", to: "/industries/cosmetics" },
                    { label: "MoCRA Record-Keeping & Compliance Support", to: "/industries/cosmetics" },
                    { label: "Regulatory Gap Assessment", to: "/industries/cosmetics" },
                    { label: "US Market Entry Support", to: "/industries/cosmetics" },
                    { label: "Post-Market Compliance", to: "/industries/cosmetics" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. European Union – Cosmetics */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="text-base">🇪🇺</span>
                  <span>European Union – Cosmetics</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "EU Cosmetic Regulatory & Market Access", to: "/industries/cosmetics" },
                    { label: "EU Cosmetics Regulation (EC) No. 1223/2009 Compliance", to: "/industries/cosmetics" },
                    { label: "Cosmetic Product Classification", to: "/industries/cosmetics" },
                    { label: "EU Responsible Person (EU RP) Services", to: "/industries/cosmetics" },
                    { label: "Cosmetic Product Safety Report (CPSR) Support", to: "/industries/cosmetics" },
                    { label: "Product Information File (PIF) Review", to: "/industries/cosmetics" },
                    { label: "CPNP Notification Management", to: "/industries/cosmetics" },
                    { label: "Cosmetic Ingredient Compliance Assessment", to: "/industries/cosmetics" },
                    { label: "Safety Assessment Coordination", to: "/industries/cosmetics" },
                    { label: "Labelling & Claims Review", to: "/industries/cosmetics" },
                    { label: "Claims Substantiation Support", to: "/industries/cosmetics" },
                    { label: "GMP / ISO 22716 Readiness", to: "/industries/cosmetics" },
                    { label: "Post-Market Surveillance / Cosmetovigilance Support", to: "/industries/cosmetics" },
                    { label: "Regulatory Representation & EU Market Entry", to: "/industries/cosmetics" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. United Kingdom – Cosmetics */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="text-base">🇬🇧</span>
                  <span>United Kingdom – Cosmetics</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "UK Cosmetic Regulatory & Market Access", to: "/industries/cosmetics" },
                    { label: "UK Cosmetic Regulatory Strategy", to: "/industries/cosmetics" },
                    { label: "UK Cosmetics Regulation Compliance", to: "/industries/cosmetics" },
                    { label: "UK Responsible Person (UK RP) Mandate", to: "/industries/cosmetics" },
                    { label: "SCPN Notification Support", to: "/industries/cosmetics" },
                    { label: "Product Information File (PIF) Review", to: "/industries/cosmetics" },
                    { label: "Cosmetic Product Safety Assessment / CPSR Support", to: "/industries/cosmetics" },
                    { label: "Ingredient Compliance Assessment", to: "/industries/cosmetics" },
                    { label: "Labelling & Claims Review", to: "/industries/cosmetics" },
                    { label: "Claims Substantiation", to: "/industries/cosmetics" },
                    { label: "GMP / ISO 22716 Support", to: "/industries/cosmetics" },
                    { label: "Post-Market Compliance & Safety Reporting", to: "/industries/cosmetics" },
                    { label: "UK Market Entry Support & Representation", to: "/industries/cosmetics" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Australia – Cosmetics */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="text-base">🇦🇺</span>
                  <span>Australia – Cosmetics (AICIS)</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Australia Cosmetic Regulatory & Market Access", to: "/industries/cosmetics" },
                    { label: "Australian Cosmetic Regulatory Strategy", to: "/industries/cosmetics" },
                    { label: "Product Classification", to: "/industries/cosmetics" },
                    { label: "AICIS Regulatory Assessment", to: "/industries/cosmetics" },
                    { label: "AICIS Registration / Notification Support", to: "/industries/cosmetics" },
                    { label: "Ingredient / Chemical Compliance Assessment", to: "/industries/cosmetics" },
                    { label: "Product & Ingredient Review", to: "/industries/cosmetics" },
                    { label: "Labelling & Claims Review", to: "/industries/cosmetics" },
                    { label: "Australian Market Entry Support", to: "/industries/cosmetics" },
                    { label: "Regulatory Compliance Assessment", to: "/industries/cosmetics" },
                    { label: "Post-Market Compliance Support", to: "/industries/cosmetics" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6. Canada – Cosmetics */}
              <div className="space-y-3 bg-gray-50/60 p-4 sm:p-5 rounded-2xl border border-gray-200/80">
                <div className="text-xs font-bold text-[#0b3a96] uppercase tracking-wide pb-2 border-b border-blue-100 flex items-center gap-1.5">
                  <span className="text-base">🇨🇦</span>
                  <span>Canada – Cosmetics (Health Canada)</span>
                </div>
                <ul className="space-y-2 pl-1">
                  {[
                    { label: "Canada Cosmetic Regulatory & Market Access", to: "/industries/cosmetics" },
                    { label: "Health Canada Cosmetic Regulatory Strategy", to: "/industries/cosmetics" },
                    { label: "Cosmetic Product Compliance", to: "/industries/cosmetics" },
                    { label: "Cosmetic Notification Form (CNF)", to: "/industries/cosmetics" },
                    { label: "Ingredient / Formulation Compliance Assessment", to: "/industries/cosmetics" },
                    { label: "Cosmetic Ingredient Hotlist Review", to: "/industries/cosmetics" },
                    { label: "Product Labelling & Claims Review", to: "/industries/cosmetics" },
                    { label: "Safety & Supporting Documentation Review", to: "/industries/cosmetics" },
                    { label: "Canadian Market Entry Support", to: "/industries/cosmetics" },
                    { label: "Regulatory Compliance Support", to: "/industries/cosmetics" },
                    { label: "Post-Market Compliance", to: "/industries/cosmetics" },
                  ].map((sub, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                      <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                      <Link to={sub.to} className="leading-snug">
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 4. OTHER SERVICES DIRECTORY GRID (SIDE-BY-SIDE CARDS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 items-start">
            {otherServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-gray-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <Link
                    to={service.to}
                    className="block text-base font-extrabold text-[#0f2340] hover:text-[#0b3a96] transition-colors pb-3 border-b border-gray-200"
                  >
                    {service.title}
                  </Link>
                  <ul className="mt-4 space-y-2 pl-1">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-xs text-gray-600 hover:text-[#0b3a96] transition-colors">
                        <span className="text-[#0b3a96] text-xs leading-none mt-1">•</span>
                        <Link to={item.to} className="leading-snug">
                          {item.label}
                        </Link>
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
                From First Idea to Global Market Access. Regulatory, quality, manufacturing & market access
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
                <a href="tel:+918800662283" className="flex items-center gap-3 text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors">
                  <Phone className="h-4 w-4 shrink-0" />
                  +91 8800662283
                </a>
                <div className="flex items-start gap-3 text-sm text-navy-foreground/70">
                  <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    Block-B, High Street, Plot No 8, Sector 129,
                    <br />
                    Noida, Uttar Pradesh, 201304, India
                  </span>
                </div>
              </div>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-navy-foreground/50">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-sm text-navy-foreground/70 hover:text-navy-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-navy-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-navy-foreground/50">
            <p>&copy; {new Date().getFullYear()} NKB Regovanta Solutions Private Limited. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
              <Link to="/about" className="hover:text-navy-foreground">Privacy Policy</Link>
              <Link to="/about" className="hover:text-navy-foreground">Terms of Service</Link>
              <Link to="/contact" className="hover:text-navy-foreground">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}