/**
 * COMPREHENSIVE SEO BATCH PATCHER
 * Patches all route files with missing: og:title, og:description, og:url, og:image,
 * og:type, twitter:card, twitter:title, twitter:description, twitter:image, keywords
 * Also adds head() to layout files and expands short descriptions.
 */
const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const BASE_URL = 'https://www.nkbregovanta.com';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

const results = { patched: [], skipped: [], errors: [] };

// Custom descriptions for pages with missing or short descriptions
const CUSTOM_DESCRIPTIONS = {
  'services.india.class-a-import.tsx': 'Expert CDSCO consulting for Class A medical device import registration under GSR 777(E). Simplified online intimation for non-sterile, non-measuring, low-risk devices. Fast-track document preparation, SLA portal submission, and SUGAM support from NKB Regovanta.',
  'services.india.predicate-devices.tsx': 'End-to-end CDSCO consulting for MD-14 import licence applications and MD-15 grant for Class A, B, C & D predicate medical devices. IAA/AIR appointment, SUGAM portal submission, dossier preparation, and deficiency response. NKB Regovanta India.',
  'services.india.index.tsx': 'Leading CDSCO medical device regulatory consulting firm in India. Import licences (MD-14/15), manufacturing licences (MD-3 to MD-9), loan licences (MD-4/6/8/10), test licences (MD-12/13/16/17), Indian Authorized Agent (IAA), and SUGAM portal support.',
  'services.india.investigational-devices.tsx': 'CDSCO import authorization for investigational medical devices under Forms MD-18 and MD-19. End-to-end support for CROs, sponsors, and manufacturers seeking clinical investigation approvals in India. Protocol review, ethics committee liaison, and SUGAM submission.',
  'services.india.ivd-clinical-performance.tsx': 'Expert consulting for CDSCO Forms MD-24 and MD-25 — clinical performance evaluation permissions for IVD kits and reagents in India. Protocol review, ethics committee coordination, and SUGAM portal application support from NKB Regovanta.',
  'services.india.ivd-testing.tsx': 'CDSCO test licence consulting for Forms MD-16 and MD-17 — for IVD diagnostic device evaluation and testing in India. Full documentation, laboratory coordination, and SLA/CLA submission support. Expert IVD regulatory consultants at NKB Regovanta.',
  'services.india.loan-class-a-b.tsx': 'Obtain CDSCO MD-4 and MD-6 loan manufacturing licences for Class A and B medical devices in India. Operate in a licensed manufacturing facility without owning a plant. Detailed document checklist and SLA application guidance from NKB Regovanta.',
  'services.india.loan-class-c-d.tsx': 'CDSCO MD-8 and MD-10 loan manufacturing licences for high-risk Class C and D medical devices in India. Expert consulting for contract manufacturers and marketing companies seeking to utilize licensed facilities without owning a plant.',
  'services.india.market-standing.tsx': 'Obtain a Market Standing Certificate (MSC) from CDSCO confirming 2+ years of continuous legal sales in India. Essential for government tender bids, overseas registrations, and institutional procurement. Fast-track MSC application support from NKB Regovanta.',
  'services.india.md-42.tsx': 'Full support for CDSCO Form MD-42 registration certificate — required for wholesale distribution of medical devices in India. State-level SLA application, documentation preparation, and inspection readiness for distributors and stockists.',
  'services.india.mfg-class-a-b.tsx': 'Expert guidance for obtaining CDSCO MD-3 and MD-5 manufacturing licences for Class A and B medical devices in India. Full plant master file preparation, State Licensing Authority (SLA) audit readiness, documentation, and SUGAM portal submission.',
  'services.india.mfg-class-a-gsr.tsx': 'Manufacturing registration under GSR 777(E) for Class A low-risk medical devices in India. Simplified online SLA intimation process. Complete guidance on documentation, plant layout compliance, and production records from NKB Regovanta.',
  'services.india.mfg-class-c-d.tsx': 'Comprehensive CDSCO consulting for Forms MD-7 and MD-9 manufacturing licences for high-risk Class C and D medical devices in India. Plant audit preparation, technical documentation, and Central Licensing Authority (CLA) submission. Typical timeline: 6–12 months.',
  'services.india.neutral-code.tsx': 'Obtain a Neutral Code or Special Code Certificate from CDSCO India for export packaging and third-country labelling compliance. Required for OEM exporters under SCOMET and contract manufacturing agreements. Expert consulting from NKB Regovanta.',
  'services.india.non-conviction.tsx': 'Obtain a Non-Conviction Certificate (NCC) from CDSCO or State Licensing Authority confirming no prior criminal or regulatory convictions. Required for government tenders, licence renewals, and overseas regulatory submissions. NKB Regovanta India.',
  'services.india.novel-ivds.tsx': 'CDSCO import authorization under Forms MD-26 and MD-27 for novel and breakthrough IVD diagnostics not yet notified under MDR 2017. End-to-end Expert Committee support and SUGAM application for new in vitro diagnostic technologies.',
  'services.india.personal-use.tsx': 'CDSCO Forms MD-20 and MD-21 for importing specialized medical devices for compassionate personal use or patient-specific treatment in India. Fast-track documentation support, patient declaration, and emergency import application from NKB Regovanta.',
  'services.india.free-sale.tsx': 'Free Sale Certificate (FSC) and Certificate to Foreign Government for medical devices in India. CDSCO application support, export certificate documentation, and state licensing authority coordination. Required for overseas market registration.',
  'services.india.ivd.tsx': 'CDSCO regulatory consulting for in vitro diagnostic (IVD) devices in India. Import licences (MD-14/15), test licences (MD-16/17), clinical performance evaluation (MD-24/25), novel IVD approvals (MD-26/27), and SUGAM portal support from NKB Regovanta.',
  'services.india.predicate-devices.tsx': 'End-to-end CDSCO consulting for MD-14 import licence and MD-15 licence for Class A–D predicate medical devices in India. Predicate strategy, IAA appointment, SUGAM portal submission, dossier preparation, and deficiency response.',
  'case-studies.algorithm-claim.tsx': 'How NKB Regovanta helped expand a cleared AI diagnostic device label through post-market algorithm validation aligned with FDA AI/ML action plan and predetermined change control protocol. A real regulatory strategy case study.',
  'case-studies.australia-tga.tsx': 'NKB Regovanta assisted a foreign manufacturer in obtaining TGA ARTG Inclusion for a Class IIb device within timeline. A step-by-step breakdown of Australian Sponsor appointment, conformity assessment strategy, and ARTG submission.',
  'case-studies.eu-mdr-remediation.tsx': 'How NKB Regovanta remediated a failing EU MDR technical documentation dossier rejected by a Notified Body — including GSPR gap closure, clinical evaluation restructuring, and fast-track resubmission. Real regulatory outcome case study.',
  'case-studies.fda-biocompatibility.tsx': 'How NKB Regovanta resolved a critical FDA 510(k) biocompatibility deficiency using literature equivalence — avoiding $120,000 in redundant testing and achieving clearance in 45 days. A strategic US FDA case study.',
  'case-studies.fda-simulated-use.tsx': 'NKB Regovanta designed a single FDA 510(k) test protocol covering three substantial equivalence arguments with one shared simulated-use usability study — saving client time and budget across multiple device classes.',
  'case-studies.test-smarter.tsx': 'How NKB Regovanta designed a multi-purpose test strategy for FDA 510(k), EU MDR, and TGA ARTG simultaneously — eliminating duplicate testing across three major regulatory pathways and reducing total testing budget by 40%.',
  'industries.cosmetics.tsx': 'Complete cosmetics regulatory consulting: CDSCO COS-1/COS-2 import registration, COS-5/COS-8 manufacturing licence, MoCRA FDA cosmetic facility registration, EU Cosmetics Responsible Person (EU RP), CPNP notification, and UK SCPN compliance.',
  'industries.cosmetics_.eu.tsx': 'EU Cosmetics Regulation (EC) No 1223/2009 compliance consulting. Cosmetic Product Safety Report (CPSR), EU Responsible Person, CPNP notification, prohibited substance review, and label compliance for European markets from NKB Regovanta.',
  'industries.cosmetics_.india.for-importer.tsx': 'Import cosmetics into India with CDSCO registration Forms COS-1 and COS-2. Expert documentation for wholesale drug licence, cosmetic safety data, and SUGAM portal submission for foreign cosmetic brands entering the Indian market.',
  'industries.cosmetics_.india.for-manufacturer.tsx': 'Obtain CDSCO cosmetic manufacturing licence (Forms COS-5 and COS-8) in India. Complete guidance for GMP inspection preparation, plant master file, SLA/CLA application, and annual manufacturing compliance from NKB Regovanta.',
  'industries.cosmetics_.india.index.tsx': 'India cosmetics regulatory services: CDSCO import registration (COS-1, COS-2), manufacturing licence (COS-5, COS-8), labelling compliance under Drugs & Cosmetics Act, and GMP inspection preparation for domestic and imported cosmetics.',
  'industries.cosmetics_.uk.tsx': 'UK Cosmetics Regulation (UK SCPN) compliance consulting. UK Responsible Person appointment, Safety Assessment, Cosmetic Notification Form, and post-Brexit labelling compliance for cosmetics sold in Great Britain and Northern Ireland.',
  'industries.cosmetics_.usa.tsx': 'USA MoCRA cosmetics compliance: FDA cosmetic facility registration, Cosmetic Product Listing (SPL format), safety substantiation documentation, and labelling compliance for cosmetics and personal care products sold in the United States.',
  'industries.ivd.tsx': 'Comprehensive IVD regulatory consulting for EU IVDR 2017/746, CDSCO MD-16/17 test licences, US FDA IVD 510(k), and Performance Evaluation Reports (PER). Expert guidance for diagnostic kit manufacturers seeking global market access.',
  'industries.ivd_.eu.tsx': 'EU IVDR 2017/746 regulatory consulting for in vitro diagnostic manufacturers. Performance Evaluation (PEP/PER), Notified Body coordination, EUDAMED registration, and Common Specifications compliance from NKB Regovanta.',
  'industries.ivd_.india.tsx': 'India IVD regulatory consulting under MDR 2017. CDSCO test licences (MD-16/17), import licences for IVD kits (MD-14/15), clinical performance evaluation (MD-24/25), and novel IVD approvals (MD-26/27) from NKB Regovanta.',
  'industries.ivd_.usa.tsx': 'US FDA IVD regulatory consulting. FDA 510(k) clearance, De Novo classification, PMA for Class III IVDs, EUA submissions, laboratory developed test (LDT) policy guidance, and eSTAR dossier preparation from NKB Regovanta.',
  'industries.medical-devices.tsx': 'Medical device regulatory consultant for India (CDSCO), US FDA (510k/PMA/De Novo), EU (MDR/IVDR/CE), UK (MHRA/UKCA), TGA Australia, and global market access. End-to-end regulatory strategy, registration, and QMS consulting.',
  'industries.medical-devices_.india.for-importer.tsx': 'Import medical devices into India with CDSCO MD-14/15 import licences. Expert guidance for foreign manufacturers, authorized agents (IAA/AIR), predicate strategy, SUGAM portal, and Class A–D device import licences from NKB Regovanta.',
  'industries.medical-devices_.india.for-manufacturer.tsx': 'Manufacture medical devices in India with CDSCO MD-3/5/7/9 manufacturing licences. Complete SLA/CLA application support, plant inspection preparation, technical file, and Class A–D device manufacturing compliance from NKB Regovanta.',
  'services.market-access.tsx': 'Comprehensive global market access strategy for medical devices across US FDA, EU MDR/IVDR, UK MHRA, TGA Australia, CDSCO India, Health Canada, and SFDA Saudi Arabia. Multi-regulatory pathway planning and market entry consulting from NKB Regovanta.',
  'services.audit-compliance.tsx': 'Complete audit readiness and compliance consulting for medical device manufacturers. MDSAP, ISO 13485, FDA QSR/QMSR, EU MDR Annex IX, and country-specific authority inspections. Pre-audit gap assessments and CAPA remediation support.',
  'services.technical-documentation.tsx': 'Expert technical documentation consulting for medical devices globally. EU MDR Annex II/III technical files, FDA 510(k) submissions, TGA ARTG documentation, ISO 13485 QMS records, and complete dossier preparation across all regulatory pathways.',
  'services.regulatory-affairs.tsx': 'Strategic regulatory affairs consulting for medical devices, IVDs, and cosmetics. Regulatory pathway selection, submission strategy, dossier compilation, and lifecycle management across US FDA, EU, UK, India, Australia, Canada, UAE, and Saudi Arabia.',
  'services.eu.ce-registration.tsx': 'Expert CE device registration pathway consulting for EU MDR 2017/745 compliance. Complete documentation strategy, Notified Body selection, EUDAMED SRN registration, and CE certificate maintenance for medical device manufacturers entering the European market.',
  'services.eu.pms.tsx': 'EU MDR post-market surveillance (PMS) consulting including PMCF planning, Periodic Safety Update Reports (PSUR), Post-Market Clinical Follow-Up (PMCF), PMS plan and report preparation for CE-marked medical devices under EU MDR 2017/745.',
  'services.australia.conformity-assessment.tsx': 'TGA conformity assessment consulting for medical device ARTG inclusion in Australia. MDSAP-recognized audit pathway, Annex II/III technical documentation preparation, conformity assessment body selection, and regulatory submission strategy for Australian market entry.',
  'services.australia.pms.tsx': 'TGA post-market surveillance consulting for ARTG-included medical devices in Australia. PMS plan preparation, adverse event reporting, mandatory incident reporting (MIR), post-market review strategy, and TGA compliance maintenance from NKB Regovanta.',
  'services.australia.sponsor.tsx': 'Australian Sponsor services for foreign medical device manufacturers seeking TGA ARTG inclusion. Legal sponsor appointment, device lifecycle compliance, post-market obligations, label compliance, and adverse event reporting on behalf of overseas manufacturers.',
  'services.brazil.notificacao.tsx': 'ANVISA Notificação (product notification) consulting for Class I and II medical devices in Brazil. Complete ANVISA regulatory pathway selection, Notificação filing strategy, documentation preparation, and RBPFAB/BPF compliance guidance from NKB Regovanta.',
  'services.brazil.registro.tsx': 'ANVISA Registro (product registration) consulting for Class III and IV medical devices in Brazil. Pre-submission strategy, technical dossier (DOSSIER TÉCNICO) preparation, ANVISA query response, and full registration lifecycle support from NKB Regovanta.',
  'services.brazil.technovigilance.tsx': 'ANVISA technovigilance consulting for medical device adverse event monitoring and post-market surveillance in Brazil. Queixa Técnica (QT) management, NOTIVISA reporting, MDSAP alignment, and technovigilance system implementation from NKB Regovanta.',
  'services.canada.liaison.tsx': 'Health Canada Medical Device regulatory liaison consulting. Pre-submission meeting requests, clarification queries, regulatory correspondence, Health Canada engagement strategy, and SAP (Special Access Program) support from NKB Regovanta Canada specialists.',
  'services.canada.renewals.tsx': 'Health Canada Medical Device Licence (MDL) renewal consulting. Annual renewal filing, Class II–IV device licence maintenance, establishment licence renewal, MDSAP audit equivalence documentation, and regulatory compliance from NKB Regovanta.',
  'services.usa.513g.tsx': 'FDA 513(g) Request for Information consulting — get a formal written opinion from FDA on the regulatory classification and submission pathway for your medical device before investing in a full 510(k) or De Novo submission. Expert 513(g) preparation.',
  'services.usa.rfd-pre-rfd.tsx': 'FDA Requests for Designation (RFD) and Pre-RFD consulting for combination products, drug-device combinations, and products with uncertain primary mode of action. FDA Office of Combination Products (OCP) engagement and combination product pathway strategy.',
  'services.usa.udi-gudid.tsx': 'US FDA UDI (Unique Device Identification) and GUDID (Global UDI Database) compliance consulting. Device Identifier (DI) assignment, GUDID data submission, labelling compliance, and UDI system implementation for all FDA-regulated medical device classes.',
  'services.mdsap.gap-assessment.tsx': 'MDSAP gap assessment consulting to identify QMS non-conformities before your official audit. Systematic evaluation against ISO 13485:2016, FDA 21 CFR Part 820/QMSR, Health Canada MDR, ANVISA RDC 665/2022, and TGA requirements. Actionable remediation roadmap.',
  'services.eu.pms-pmcf.tsx': 'EU MDR Post-Market Clinical Follow-Up (PMCF) consulting. PMCF plan and report preparation per MEDDEV 2.12/2, clinical data gap analysis, registry study design, literature surveillance protocol, and PSUR compilation for EU MDR-compliant devices.',
  'services.eu.ivdr-pmpf.tsx': 'EU IVDR Post-Market Performance Follow-Up (PMPF) consulting. PMPF plan and report preparation, performance data gap analysis, proficiency testing program design, and IVD surveillance strategy for IVDR-compliant in vitro diagnostic devices in Europe.',
  'services.uk.dors-registration.tsx': 'MHRA DORS (Device Online Registration System) portal registration consulting for UK medical devices. Step-by-step DORS account setup, device listing, UK Responsible Person registration, Northern Ireland compliance strategy, and UKCA marking guidance.',
  'services.uk.qms.tsx': 'UK MDR 2002 Quality Management System consulting including ISO 13485:2016 implementation, UK Conformity Assessed (UKCA) technical file preparation, MHRA registration, and QMS compliance for medical devices marketed in Great Britain and Northern Ireland.',
  'services.regulatory-due-diligence.tsx': 'Regulatory due diligence consulting for medical device M&A transactions, licensing deals, and partnership agreements. Portfolio assessment, compliance gap analysis, regulatory risk scoring, and acquisition target evaluation across US FDA, EU, UK, India, and global markets.',
  'markets.index.tsx': 'NKB Regovanta provides expert medical device regulatory consulting across 15+ global markets including USA (FDA), European Union (MDR/IVDR), UK (MHRA), India (CDSCO), Australia (TGA), Canada, Brazil (ANVISA), UAE, Saudi Arabia (SFDA), and New Zealand (Medsafe).',
  'industries.index.tsx': 'NKB Regovanta serves medical device, IVD, pharmaceutical, and cosmetics industries with comprehensive regulatory consulting globally. Expert guidance for manufacturers, importers, sponsors, and distributors seeking market authorization across multiple jurisdictions.',
  'services.index.tsx': 'Comprehensive medical device regulatory services: US FDA 510(k)/PMA/De Novo, EU MDR/IVDR CE marking, India CDSCO licensing, UK MHRA/UKCA, TGA Australia ARTG, ISO 13485, MDSAP, technical documentation, clinical evaluation, and global market access.',
  'services.iso-13485.tsx': 'ISO 13485:2016 implementation and consulting for medical device quality management systems. Gap assessment, QMS documentation, internal audit support, MDSAP alignment, and certification readiness for manufacturers seeking global regulatory compliance.',
  'services.mdsap.index.tsx': 'MDSAP audit readiness and consulting for medical device manufacturers. One audit covering US FDA, Health Canada, ANVISA Brazil, MHLW/PMDA Japan, and TGA Australia. Comprehensive MDSAP readiness, gap assessment, mock audits, and CAPA remediation from NKB.',
  'services.manufacturing.tsx': 'Medical device contract manufacturing regulatory consulting. GMP compliance, manufacturing site assessment, supplier qualification, process validation, design controls, and regulatory submissions for manufacturers seeking multi-market medical device production.',
};

// Custom keywords for key pages
const CUSTOM_KEYWORDS = {
  'services.india.predicate-devices.tsx': 'MD-14 application India, MD-15 import licence, CDSCO predicate device strategy, Indian Authorized Agent IAA, SUGAM portal application, medical device import consultant India, Class B C D import licence',
  'services.india.class-a-import.tsx': 'Class A medical device import India, GSR 777(E) registration, non-sterile non-measuring device CDSCO, CDSCO online intimation Class A, Form 27D, low risk medical device India',
  'services.india.mfg-class-a-b.tsx': 'MD-3 manufacturing licence India, MD-5 SLA manufacturing licence, Class A B medical device manufacturing, State Licensing Authority medical device India, SLA application consultant',
  'services.india.mfg-class-c-d.tsx': 'MD-7 manufacturing licence CDSCO, MD-9 Class D manufacturing India, Central Licensing Authority medical device, high risk medical device manufacturing India, Class C manufacturing licence CDSCO, implant manufacturing licence India',
  'services.india.loan-class-a-b.tsx': 'MD-4 loan licence CDSCO, MD-6 loan manufacturing India, Class A B loan licence, contract manufacturing medical device India, loan licence consultant CDSCO',
  'services.india.loan-class-c-d.tsx': 'loan manufacturing licence Class C D, MD-8 application CDSCO, MD-10 loan licence high risk devices, contract manufacturing medical device India, CLA loan licence CDSCO',
  'services.india.investigational-devices.tsx': 'MD-18 investigational device import, MD-19 clinical trial device India, CDSCO clinical investigation permission, clinical trial medical device CDSCO',
  'services.india.ivd-clinical-performance.tsx': 'MD-24 IVD clinical performance CDSCO, MD-25 clinical performance evaluation, IVD diagnostic kit India regulatory, clinical performance study CDSCO',
  'services.india.ivd-testing.tsx': 'MD-16 test licence IVD India, MD-17 test licence CDSCO, IVD testing laboratory India, diagnostic device test licence, SLA test licence application',
  'services.india.free-sale.tsx': 'Free Sale Certificate CDSCO India, Certificate to Foreign Government medical devices, FSC application India, CDSCO export certificate medical device',
  'services.india.market-standing.tsx': 'Market Standing Certificate CDSCO, MSC medical devices India, 2 years market standing, tender certificate medical device, CDSCO good standing',
  'services.india.md-42.tsx': 'MD-42 certificate medical device, CDSCO MD-42 registration, medical device registration certificate MD-42, MDR 2017 distribution licence India, wholesale distribution medical devices',
  'services.india.neutral-code.tsx': 'Neutral Code certificate CDSCO, Special Code medical devices India, OEM export packaging certificate, SCOMET medical devices',
  'services.india.non-conviction.tsx': 'Non-Conviction Certificate CDSCO, NCC medical devices India, SLA non conviction, good standing certificate regulatory',
  'services.india.novel-ivds.tsx': 'novel IVD India approval, MD-26 application CDSCO, MD-27 novel in vitro diagnostic, breakthrough diagnostic CDSCO India',
  'services.india.personal-use.tsx': 'personal use import medical device India, MD-20 MD-21 application, patient device import CDSCO, compassionate use medical device India',
  'services.india.index.tsx': 'CDSCO medical device consultant India, medical device import licence India, MD-14 MD-15 import licence, CDSCO manufacturing licence, Indian Authorized Agent IAA',
  'services.usa.510k.tsx': 'FDA 510k consultant, 510k submission India, eSTAR FDA submission, substantial equivalence predicate, FDA clearance consultant, medical device FDA consultant',
  'services.eu.mdr.tsx': 'EU MDR consultant, CE marking medical devices, EU MDR 2017/745, clinical evaluation EU, Notified Body EU, technical documentation MDR',
  'services.iso-13485.tsx': 'ISO 13485 consultant, ISO 13485 implementation, QMS medical devices, ISO 13485 certification India, quality management system medical devices',
  'services.mdsap.index.tsx': 'MDSAP audit consultant, Medical Device Single Audit Program, MDSAP readiness, ISO 13485 MDSAP, FDA Health Canada ANVISA audit',
  'industries.cosmetics.tsx': 'cosmetics regulatory consultant India, CDSCO cosmetic registration, MoCRA FDA cosmetics, EU Cosmetics Responsible Person, cosmetic import licence India',
  'industries.ivd.tsx': 'IVD regulatory consultant, EU IVDR consultant, CDSCO IVD India, FDA IVD 510k, in vitro diagnostic regulation global',
  'industries.medical-devices.tsx': 'medical device regulatory consultant, CDSCO medical device India, FDA medical device consultant, EU MDR consultant, TGA medical device Australia',
  'about.tsx': 'NKB Regovanta team, regulatory affairs consultant team, medical device regulatory experts India, regulatory consulting firm India',
  'contact.tsx': 'NKB Regovanta contact, regulatory consultant India, medical device regulatory consultation, CDSCO consultant contact',
  'markets.index.tsx': 'medical device global market access, regulatory markets USA EU India UK Australia Canada Brazil UAE, NKB Regovanta markets',
  'services.market-access.tsx': 'global market access medical devices, multi-market regulatory strategy, international medical device registration, FDA EU India TGA market access',
  'services.audit-compliance.tsx': 'medical device audit compliance, MDSAP audit readiness, ISO 13485 audit, FDA inspection preparation, EU MDR Notified Body audit',
  'services.technical-documentation.tsx': 'technical documentation medical devices, EU MDR technical file, FDA 510k documentation, TGA ARTG technical documentation, medical device dossier',
  'services.regulatory-affairs.tsx': 'regulatory affairs medical devices, regulatory strategy consultant, global regulatory submissions, medical device regulatory consulting',
  'services.mdsap.gap-assessment.tsx': 'MDSAP gap assessment, QMS gap analysis medical devices, MDSAP readiness assessment, ISO 13485 gap assessment, regulatory compliance gap analysis',
};

// Head() blocks for the 12 layout files that are missing head() entirely
const LAYOUT_HEADS = {
  'services.australia.tsx': { canonical: '/services/australia', title: 'Australia TGA ARTG Consultant | Medical Device Registration', desc: 'TGA regulatory consulting for ARTG inclusion, Australian Sponsor services, conformity assessment, post-market surveillance, and full medical device lifecycle management in Australia.' },
  'services.brazil.tsx': { canonical: '/services/brazil', title: 'ANVISA Brazil Medical Device Regulatory Consultant | NKB', desc: 'ANVISA regulatory consulting for medical device Notificação and Registro in Brazil. Complete ANVISA submission support, BPF compliance, and post-market technovigilance services.' },
  'services.canada.tsx': { canonical: '/services/canada', title: 'Health Canada Medical Device Licence Consultant | NKB Regovanta', desc: 'Health Canada medical device regulatory consulting. MDL Class II–IV licences, MDEL establishment licensing, MDSAP audit support, and Canadian regulatory strategy from NKB Regovanta.' },
  'services.eu.tsx': { canonical: '/services/eu', title: 'EU MDR & IVDR Regulatory Consultant | CE Marking | NKB Regovanta', desc: 'Expert EU MDR 2017/745 and EU IVDR 2017/746 regulatory consulting. CE marking, technical documentation, clinical evaluation, Notified Body strategy, EUDAMED, and PMS compliance.' },
  'services.india.tsx': { canonical: '/services/india', title: 'CDSCO Medical Device Consultant India | NKB Regovanta', desc: 'India\'s expert CDSCO medical device regulatory consulting firm. Import licences (MD-14/15), manufacturing licences (MD-3 to MD-9), loan licences, and SUGAM portal support.' },
  'services.mdsap.tsx': { canonical: '/services/mdsap', title: 'MDSAP Audit Readiness & Consulting | NKB Regovanta', desc: 'MDSAP audit readiness consulting covering US FDA, Health Canada, ANVISA Brazil, MHLW Japan, and TGA Australia. Gap assessment, mock audits, and CAPA remediation.' },
  'services.new-zealand.tsx': { canonical: '/services/new-zealand', title: 'Medsafe New Zealand Medical Device Regulatory Consultant | NKB', desc: 'Medsafe medical device regulatory consulting for New Zealand WAND notification, classification, labelling, post-market surveillance, and ARTG-linked pathways from NKB Regovanta.' },
  'services.saudi-arabia.tsx': { canonical: '/services/saudi-arabia', title: 'SFDA Saudi Arabia Medical Device Regulatory Consultant | NKB', desc: 'SFDA Saudi Arabia medical device regulatory consulting. SFDA MDMA registration, establishment licensing, Authorized Representative, and post-market compliance from NKB Regovanta.' },
  'services.uae.tsx': { canonical: '/services/uae', title: 'MoHAP UAE Medical Device Regulatory Consultant | NKB Regovanta', desc: 'MoHAP UAE medical device regulatory consulting. MOHAP registration, eCAS system, local applicant services, QMS inspection, and post-market surveillance in the UAE.' },
  'services.uk.tsx': { canonical: '/services/uk', title: 'MHRA UK Medical Device Regulatory Consultant | UKRP | NKB', desc: 'MHRA UK medical device regulatory consulting. UKCA marking, DORS registration, UK Responsible Person (UKRP), MHRA liaison, and post-market vigilance services from NKB Regovanta.' },
  'services.usa.tsx': { canonical: '/services/usa', title: 'US FDA Medical Device Regulatory Consultant | 510(k) | NKB Regovanta', desc: 'US FDA medical device regulatory consulting. FDA 510(k) clearance, De Novo classification, PMA, eSTAR submissions, US Agent services, and establishment registration from NKB Regovanta.' },
  'case-studies.tsx': { canonical: '/case-studies', title: 'Medical Device Regulatory Case Studies | NKB Regovanta', desc: 'Real-world medical device regulatory case studies from NKB Regovanta. FDA 510(k) deficiency resolutions, EU MDR technical documentation remediation, TGA ARTG inclusions, and multi-market test strategy wins.' },
};

// ─── STEP 1: Fix layout files with no head() ─────────────────────────────────
console.log('\n=== STEP 1: Fixing layout files missing head() ===\n');

for (const [file, data] of Object.entries(LAYOUT_HEADS)) {
  const fp = path.join(routesDir, file);
  if (!fs.existsSync(fp)) {
    console.log('SKIP (not found):', file);
    continue;
  }
  
  let content = fs.readFileSync(fp, 'utf8');
  
  if (content.includes('head:')) {
    console.log('SKIP (has head):', file);
    continue;
  }
  
  const ogTitle = data.title.length > 95 ? data.title.substring(0, 92) + '...' : data.title;
  
  const headBlock = `  head: () => ({
    meta: [
      { title: "${data.title} | NKB Regovanta" },
      { name: "description", content: "${data.desc}" },
      { property: "og:title", content: "${ogTitle}" },
      { property: "og:description", content: "${data.desc}" },
      { property: "og:url", content: "${BASE_URL}${data.canonical}" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "${OG_IMAGE}" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "${ogTitle}" },
      { name: "twitter:description", content: "${data.desc}" },
      { name: "twitter:image", content: "${OG_IMAGE}" },
    ],
    links: [{ rel: "canonical", href: "${BASE_URL}${data.canonical}" }],
  }),\n`;
  
  // Insert head() before component:
  const newContent = content.replace(/^(export const Route = createFileRoute\([^)]+\)\(\{)$/m, `$1\n${headBlock}`);
  
  if (newContent !== content) {
    fs.writeFileSync(fp, newContent, 'utf8');
    console.log('PATCHED layout:', file);
    results.patched.push(file);
  } else {
    // Try alternate approach - insert before component:
    const altContent = content.replace(/(\n  component:)/, `\n${headBlock}  component:`);
    if (altContent !== content) {
      fs.writeFileSync(fp, altContent, 'utf8');
      console.log('PATCHED layout (alt):', file);
      results.patched.push(file);
    } else {
      console.log('ERROR: could not patch layout:', file);
      results.errors.push(file + ' (layout patch failed)');
    }
  }
}

// ─── STEP 2: Bulk patch for all route files ────────────────────────────────
console.log('\n=== STEP 2: Bulk-patching meta tags on all route files ===\n');

const files = fs.readdirSync(routesDir)
  .filter(f => f.endsWith('.tsx') && !f.startsWith('__'))
  .sort();

for (const file of files) {
  const fp = path.join(routesDir, file);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Skip files without head()
  if (!content.includes('head:')) {
    results.skipped.push(file + ' (no head - layout)');
    continue;
  }
  
  // Skip tiny layout files (<400 bytes that still have head from step 1)
  if (content.length < 400) {
    results.skipped.push(file + ' (too small)');
    continue;
  }
  
  // Extract canonical URL
  let canonicalUrl = '';
  const canonMatch = content.match(/rel: ["']canonical["'], href: ["']([^"']+)["']/);
  if (canonMatch) canonicalUrl = canonMatch[1];
  
  if (!canonicalUrl) {
    results.skipped.push(file + ' (no canonical)');
    continue;
  }
  
  // Check what's already present
  const hasOgTitle = content.includes('"og:title"') || content.includes("'og:title'") || content.includes('"og:title"');
  const hasTwitter = content.includes('"twitter:title"') || content.includes("'twitter:title'");
  const hasKeywords = (content.includes('"keywords"') || content.includes("'keywords'")) && content.includes('name:');
  const hasOgImage = content.includes('"og:image"') || content.includes("'og:image'");
  
  let needsWork = !hasOgTitle || !hasTwitter || !hasKeywords || !hasOgImage;
  
  // Check for custom description (even if description exists, we may want to replace short ones)
  const customDesc = CUSTOM_DESCRIPTIONS[file];
  const customKw = CUSTOM_KEYWORDS[file];
  
  // If already complete and no custom overrides, skip
  if (!needsWork && !customDesc && !customKw) {
    results.skipped.push(file + ' (complete)');
    continue;
  }
  
  // Extract current title
  let title = '';
  const titlePatterns = [
    /\{ title: "([^"]+)" \}/,
    /\{ title: '([^']+)' \}/,
    /title:\s*\n\s*"([^"]+)"/,
    /title:\s*\n\s*'([^']+)'/,
    /title:\s*\n\s*\n?\s*"([^"]+)"/,
  ];
  for (const p of titlePatterns) {
    const m = content.match(p);
    if (m) { title = m[1]; break; }
  }
  
  if (!title) {
    results.errors.push(file + ': no title found');
    continue;
  }
  
  const ogTitle = title.length > 95 ? title.substring(0, 92) + '...' : title;
  
  // Extract current description  
  let desc = '';
  const descPatterns = [
    /name: "description",\s*\n\s*content:\s*"([\s\S]*?)",/,
    /name: "description", content: "([^"]+)"/,
    /name: 'description',\s*\n\s*content:\s*'([\s\S]*?)',/,
    /name: 'description', content: '([^']+)'/,
    /name: "description",\s*\n\s*content:\s*\n?\s*"([^"]+)"/,
  ];
  for (const p of descPatterns) {
    const m = content.match(p);
    if (m) { desc = m[1].replace(/\s+/g, ' ').trim(); break; }
  }
  
  // Override with custom description if provided
  if (customDesc) desc = customDesc;
  
  if (!desc) desc = ogTitle; // fallback
  
  const socialDesc = desc.length > 220 ? desc.substring(0, 217) + '...' : desc;
  
  // Generate keywords
  let keywords = '';
  if (customKw) {
    keywords = customKw;
  } else if (!hasKeywords) {
    const cleanTitle = title.replace(/ \| NKB Regovanta/i, '').replace(/ \| /g, ', ');
    const urlPath = canonicalUrl.replace(BASE_URL, '');
    const urlTerms = urlPath.split('/').filter(Boolean).join(' ').replace(/-/g, ' ');
    keywords = `${cleanTitle}, ${urlTerms}, NKB Regovanta, regulatory consultant, medical device`;
  }
  
  // Build meta entries to inject
  const newMeta = [];
  
  if (!hasKeywords || customKw) {
    if (keywords) {
      newMeta.push(`      { name: "keywords", content: ${JSON.stringify(keywords)} },`);
    }
  }
  
  if (!hasOgTitle) {
    newMeta.push(`      { property: "og:title", content: ${JSON.stringify(ogTitle)} },`);
    newMeta.push(`      { property: "og:description", content: ${JSON.stringify(socialDesc)} },`);
    newMeta.push(`      { property: "og:url", content: ${JSON.stringify(canonicalUrl)} },`);
    newMeta.push(`      { property: "og:type", content: "website" },`);
  }
  
  if (!hasOgImage) {
    newMeta.push(`      { property: "og:image", content: ${JSON.stringify(OG_IMAGE)} },`);
  }
  
  if (!hasTwitter) {
    newMeta.push(`      { name: "twitter:card", content: "summary_large_image" },`);
    newMeta.push(`      { name: "twitter:title", content: ${JSON.stringify(ogTitle)} },`);
    newMeta.push(`      { name: "twitter:description", content: ${JSON.stringify(socialDesc)} },`);
    newMeta.push(`      { name: "twitter:image", content: ${JSON.stringify(OG_IMAGE)} },`);
  }
  
  // Also update the custom description in the actual description meta if provided
  let updatedContent = content;
  
  if (customDesc && desc !== (content.match(/name: "description", content: "([^"]+)"/) || [])[1]) {
    // Replace existing short description with better one
    const descReplace1 = updatedContent.match(/name: "description",\s*\n\s*content:\s*"([\s\S]*?)",/);
    const descReplace2 = updatedContent.match(/name: "description", content: "([^"]+)"/);
    if (descReplace1) {
      updatedContent = updatedContent.replace(
        /name: "description",\s*\n\s*content:\s*"[\s\S]*?",/,
        `name: "description", content: ${JSON.stringify(customDesc)},`
      );
    } else if (descReplace2) {
      updatedContent = updatedContent.replace(
        /name: "description", content: "([^"]+)"/,
        `name: "description", content: ${JSON.stringify(customDesc)}`
      );
    }
  }
  
  if (newMeta.length === 0) {
    if (updatedContent !== content) {
      fs.writeFileSync(fp, updatedContent, 'utf8');
      results.patched.push(file + ' (desc updated)');
      console.log('UPDATED desc:', file);
    } else {
      results.skipped.push(file + ' (nothing new)');
    }
    continue;
  }
  
  // Find insertion point in the head() block
  // Pattern: find 'head:' then find the meta array close before 'links:'
  const headIdx = updatedContent.indexOf('head:');
  if (headIdx === -1) {
    results.errors.push(file + ': no head found');
    continue;
  }
  
  const headPortion = updatedContent.substring(headIdx);
  
  // Find the closing of the meta array — pattern: "],\n    links:"
  const closeRegex = /(\n([ \t]+)\],\n[ \t]+links:)/;
  const closeMatch = closeRegex.exec(headPortion);
  
  if (!closeMatch) {
    // Try single-line meta: [...],\n  links:
    const altRegex = /(\n([ \t]+)\]\s*,\n[ \t]+links:)/;
    const altMatch = altRegex.exec(headPortion);
    if (!altMatch) {
      results.errors.push(file + ': cannot find meta array close');
      continue;
    }
  }
  
  const match = closeRegex.exec(headPortion) || /(\n([ \t]+)\]\s*,\n[ \t]+links:)/.exec(headPortion);
  if (!match) {
    results.errors.push(file + ': no insertion point');
    continue;
  }
  
  const matchIdx = match.index;
  const matchLen = match[0].length;
  const closeIndent = match[2] || '    ';
  
  // Reformat entries with correct indentation
  const formattedEntries = newMeta.map(e => {
    return closeIndent + '  ' + e.trim();
  }).join('\n');
  
  const newHeadPortion = 
    headPortion.substring(0, matchIdx) +
    '\n' + formattedEntries +
    headPortion.substring(matchIdx);
    
  updatedContent = updatedContent.substring(0, headIdx) + newHeadPortion;
  
  if (updatedContent === content) {
    results.errors.push(file + ': replacement had no effect');
    continue;
  }
  
  fs.writeFileSync(fp, updatedContent, 'utf8');
  results.patched.push(file);
  console.log('PATCHED:', file);
}

// ─── REPORT ────────────────────────────────────────────────────────────────
console.log('\n\n=== BATCH PATCH COMPLETE ===');
console.log(`Patched: ${results.patched.length} files`);
console.log(`Skipped: ${results.skipped.length} files`);
console.log(`Errors:  ${results.errors.length} files`);

if (results.errors.length) {
  console.log('\n--- ERRORS ---');
  results.errors.forEach(e => console.log('  ' + e));
}

// Save full report
const report = {
  timestamp: new Date().toISOString(),
  patched: results.patched,
  skipped: results.skipped,
  errors: results.errors,
};
fs.writeFileSync(path.join(__dirname, 'bulk_patch_report.json'), JSON.stringify(report, null, 2));
console.log('\nFull report saved to scripts/bulk_patch_report.json');
