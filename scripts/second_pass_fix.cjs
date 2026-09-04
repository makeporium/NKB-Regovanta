/**
 * SECOND PASS FIXER - handles the 32 files that the bulk script couldn't patch
 * These files have component: before head: and use "    ]," for meta close with 4-space indent
 */
const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const BASE_URL = 'https://www.nkbregovanta.com';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

// The error files from the bulk script
const ERROR_FILES = [
  'about.tsx',
  'contact.tsx',
  'index.tsx',
  'industries.cosmetics.tsx',
  'services.drug-licenses-for-importers.tsx',
  'services.iec-ad-code.tsx',
  'services.index.tsx',
  'services.india.free-sale.tsx',
  'services.india.index.tsx',
  'services.india.ivd-clinical-performance.tsx',
  'services.india.ivd-testing.tsx',
  'services.india.ivd.tsx',
  'services.india.loan-class-a-b.tsx',
  'services.india.loan-class-c-d.tsx',
  'services.india.market-standing.tsx',
  'services.india.md-42.tsx',
  'services.india.medical-devices.tsx',
  'services.india.mfg-class-a-b.tsx',
  'services.india.mfg-class-a-gsr.tsx',
  'services.india.mfg-class-c-d.tsx',
  'services.india.neutral-code.tsx',
  'services.india.non-conviction.tsx',
  'services.india.novel-ivds.tsx',
  'services.india.personal-use.tsx',
  'services.india.predicate-devices.tsx',
  'services.iso-13485.tsx',
  'services.manufacturing.tsx',
  'services.pc-pndt-certificate.tsx',
  'services.uk.ukrp.tsx',
  'services.usa.513g.tsx',
  'services.usa.agent-service.tsx',
  'services.wpc-wireless-medical-devices.tsx',
];

const CUSTOM_DESCRIPTIONS = {
  'services.india.predicate-devices.tsx': 'End-to-end CDSCO consulting for MD-14 import licence applications and MD-15 import licence grant for Class A, B, C & D predicate medical devices. IAA/AIR appointment, SUGAM portal submission, dossier preparation, and deficiency response. NKB Regovanta India.',
  'services.india.free-sale.tsx': 'Free Sale Certificate (FSC) and Certificate to Foreign Government for medical devices in India. CDSCO application support, export certificate documentation, and state licensing authority coordination. Required for overseas market registration from NKB Regovanta.',
  'services.india.index.tsx': 'India leading CDSCO medical device regulatory consulting firm. Import licences (MD-14/15), manufacturing licences (MD-3 to MD-9), loan licences, test licences, Indian Authorized Agent (IAA) services, and full SUGAM portal support from NKB Regovanta.',
  'services.india.ivd-clinical-performance.tsx': 'Expert consulting for CDSCO Forms MD-24 and MD-25 — clinical performance evaluation permissions for IVD kits and reagents in India. Protocol review, ethics committee coordination, and SUGAM portal application support from NKB Regovanta.',
  'services.india.ivd-testing.tsx': 'CDSCO test licence consulting for Forms MD-16 and MD-17 for IVD diagnostic device evaluation and testing in India. Full documentation, laboratory coordination, and SLA/CLA submission support from NKB Regovanta expert IVD regulatory consultants.',
  'services.india.ivd.tsx': 'CDSCO regulatory consulting for in vitro diagnostic (IVD) devices in India. Import licences (MD-14/15), test licences (MD-16/17), clinical performance evaluation (MD-24/25), novel IVD approvals (MD-26/27), and SUGAM portal support from NKB Regovanta.',
  'services.india.loan-class-a-b.tsx': 'Obtain CDSCO MD-4 and MD-6 loan manufacturing licences for Class A and B medical devices in India. Operate in a licensed manufacturing facility without owning a plant. Complete document checklist and SLA application guidance from NKB Regovanta.',
  'services.india.loan-class-c-d.tsx': 'CDSCO MD-8 and MD-10 loan manufacturing licences for high-risk Class C and D medical devices in India. Expert consulting for contract manufacturers seeking to utilize licensed facilities without owning a plant from NKB Regovanta.',
  'services.india.market-standing.tsx': 'Obtain a Market Standing Certificate (MSC) from CDSCO confirming 2+ years of continuous legal medical device sales in India. Essential for government tender bids, overseas registrations, and institutional procurement. Fast-track MSC from NKB Regovanta.',
  'services.india.md-42.tsx': 'Full support for CDSCO Form MD-42 registration certificate required for wholesale distribution of medical devices in India. State-level SLA application, complete documentation preparation, and inspection readiness for distributors from NKB Regovanta.',
  'services.india.medical-devices.tsx': 'Expert CDSCO medical device regulatory consulting in India. Import Licences (MD-14/MD-15), Class A GSR 777(E) registration, Manufacturing Licences (MD-3/5/7/9), Loan Licences (MD-4/6/8/10), Investigational Devices (MD-18/19), Indian Authorized Agent (IAA/AIR), and SUGAM portal support.',
  'services.india.mfg-class-a-b.tsx': 'Expert guidance for obtaining CDSCO MD-3 and MD-5 manufacturing licences for Class A and B medical devices in India. Full plant master file preparation, State Licensing Authority (SLA) audit readiness, documentation, and SUGAM portal submission from NKB Regovanta.',
  'services.india.mfg-class-a-gsr.tsx': 'Manufacturing registration under GSR 777(E) for Class A low-risk medical devices in India. Simplified online SLA intimation process. Complete guidance on documentation, plant layout compliance, and production records from NKB Regovanta regulatory experts.',
  'services.india.mfg-class-c-d.tsx': 'Comprehensive CDSCO consulting for Forms MD-7 and MD-9 manufacturing licences for high-risk Class C and D medical devices in India. Plant audit preparation, technical documentation, and Central Licensing Authority (CLA) submission. Typical approval timeline: 6-12 months.',
  'services.india.neutral-code.tsx': 'Obtain a Neutral Code or Special Code Certificate from CDSCO India for export packaging and third-country labelling compliance. Required for OEM exporters under SCOMET and contract manufacturing agreements. Expert consulting from NKB Regovanta.',
  'services.india.non-conviction.tsx': 'Obtain a Non-Conviction Certificate (NCC) from CDSCO or State Licensing Authority confirming no prior criminal or regulatory convictions. Required for government tenders, licence renewals, and overseas regulatory submissions from NKB Regovanta.',
  'services.india.novel-ivds.tsx': 'CDSCO import authorization under Forms MD-26 and MD-27 for novel and breakthrough IVD diagnostics not yet notified under MDR 2017. End-to-end Expert Committee support and SUGAM application for new diagnostic technologies from NKB Regovanta.',
  'services.india.personal-use.tsx': 'CDSCO Forms MD-20 and MD-21 for importing specialized medical devices for compassionate personal use or patient-specific treatment in India. Fast-track documentation, patient declaration, and emergency import application support from NKB Regovanta.',
  'services.iso-13485.tsx': 'ISO 13485:2016 quality management system consulting for medical device manufacturers. Gap assessment, QMS documentation, internal audit support, MDSAP alignment, and certification readiness across US FDA, EU MDR, TGA, CDSCO, and global regulatory requirements.',
  'services.manufacturing.tsx': 'Medical device contract manufacturing regulatory consulting. GMP compliance, manufacturing site assessment, supplier qualification, process validation, design controls, and regulatory submissions for manufacturers seeking multi-market medical device production compliance.',
  'services.drug-licenses-for-importers.tsx': 'Drug licence consulting for medical device importers in India. Wholesale drug licence (Form 20B), retail drug licence, CDSCO import authorization, and regulatory compliance for companies importing both drugs and medical devices into the Indian market.',
  'services.iec-ad-code.tsx': 'IEC (Importer Exporter Code) and AD Code registration consulting for medical device import and export from India. End-to-end DGFT IEC application, AD Code bank registration, customs documentation, and DGFT compliance for medical device traders.',
  'services.pc-pndt-certificate.tsx': 'PC-PNDT (Pre-Conception and Pre-Natal Diagnostic Techniques) certificate consulting for ultrasound equipment dealers, importers, and manufacturers in India. PNDT Form A/B registration, state health authority approval, and ongoing compliance support from NKB Regovanta.',
  'services.wpc-wireless-medical-devices.tsx': 'WPC ETA (Wireless Planning & Coordination Wing Equipment Type Approval) consulting for wireless-enabled medical devices in India. ETA application for Bluetooth, Wi-Fi, and RF-enabled medical devices, DoT compliance, and CDSCO cross-registration from NKB Regovanta.',
  'services.uk.ukrp.tsx': 'UK Responsible Person (UKRP) services for foreign medical device manufacturers selling in Great Britain. UKRP appointment, MHRA DORS registration, device listing, label compliance, post-market vigilance, and Northern Ireland Protocol compliance from NKB Regovanta.',
  'services.usa.513g.tsx': 'FDA 513(g) Request for Information consulting — get a formal written opinion from FDA on the regulatory classification and submission pathway for your medical device. Expert 513(g) preparation, response strategy, and FDA feedback interpretation.',
  'services.usa.agent-service.tsx': 'US FDA Agent services for foreign medical device facilities. Official FDA Correspondent, US Agent appointment, FDA 510(k) correspondence, establishment registration (FURLS), and FDA regulatory liaison for non-US medical device manufacturers from NKB Regovanta.',
  'industries.cosmetics.tsx': 'Complete cosmetics regulatory consulting: CDSCO COS-1/COS-2 import registration, COS-5/COS-8 manufacturing licence, MoCRA FDA cosmetic facility registration, EU Cosmetics Responsible Person (EU RP), CPNP notification, and UK SCPN services from NKB Regovanta.',
  'index.tsx': 'NKB Regovanta — Premier global medical device regulatory affairs consulting firm. Expert services for US FDA 510(k), EU MDR/IVDR CE marking, India CDSCO licensing, UK MHRA/UKCA, TGA Australia ARTG, ISO 13485, MDSAP, and 15+ global market access pathways.',
  'about.tsx': 'NKB Regovanta is a premier global medical device regulatory affairs consultancy. Our senior team has deep expertise across US FDA, EU MDR/IVDR, India CDSCO, UK MHRA, TGA Australia, MDSAP, and ISO 13485 quality systems for 50+ device categories.',
  'contact.tsx': 'Contact NKB Regovanta for expert medical device regulatory consulting. Get a free initial consultation for FDA 510(k), EU MDR, CDSCO India, MDSAP, TGA Australia, UK MHRA, or any global market access challenge. Response within 24 hours guaranteed.',
  'services.index.tsx': 'Comprehensive medical device regulatory services: US FDA 510(k)/De Novo/PMA, EU MDR/IVDR CE marking, India CDSCO import/manufacturing licences, UK MHRA/UKCA, TGA Australia ARTG, ISO 13485, MDSAP, and clinical evaluation across 15+ global markets.',
};

const CUSTOM_KEYWORDS = {
  'services.india.predicate-devices.tsx': 'MD-14 application India, MD-15 import licence, CDSCO predicate device, Indian Authorized Agent IAA, SUGAM portal, medical device import consultant India, Class B C D import licence',
  'services.india.index.tsx': 'CDSCO medical device consultant India, medical device import licence India, MD-14 MD-15 import licence, CDSCO manufacturing licence, Indian Authorized Agent IAA',
  'services.india.ivd.tsx': 'IVD registration India, in vitro diagnostic kit CDSCO, IVD test licence MD-16 MD-17, diagnostic reagent import India, CDSCO IVD consultant',
  'services.india.free-sale.tsx': 'Free Sale Certificate CDSCO India, Certificate to Foreign Government medical devices, FSC application India, CDSCO export certificate medical device',
  'services.india.market-standing.tsx': 'Market Standing Certificate CDSCO, MSC medical devices India, 2 years market standing, tender certificate medical device India',
  'services.india.md-42.tsx': 'MD-42 certificate medical device, CDSCO MD-42 registration, wholesale distribution licence medical devices India, MDR 2017 distribution',
  'services.india.mfg-class-a-b.tsx': 'MD-3 manufacturing licence India, MD-5 SLA manufacturing, Class A B medical device manufacturing India, State Licensing Authority SLA consultant',
  'services.india.mfg-class-c-d.tsx': 'MD-7 manufacturing licence CDSCO, MD-9 Class D manufacturing India, Central Licensing Authority CLA, high risk medical device manufacturing India',
  'services.india.loan-class-a-b.tsx': 'MD-4 loan licence CDSCO, MD-6 loan manufacturing India, Class A B loan licence medical device, contract manufacturing India',
  'services.india.loan-class-c-d.tsx': 'loan manufacturing licence Class C D, MD-8 application CDSCO, MD-10 loan licence high risk, contract manufacturing India regulatory',
  'services.india.investigational-devices.tsx': 'MD-18 investigational device import India, MD-19 clinical trial medical device, CDSCO clinical investigation permission',
  'services.india.ivd-clinical-performance.tsx': 'MD-24 IVD clinical performance CDSCO, MD-25 evaluation, IVD diagnostic kit India regulatory, clinical performance study CDSCO',
  'services.india.ivd-testing.tsx': 'MD-16 test licence IVD India, MD-17 test licence CDSCO, IVD testing laboratory India, diagnostic device test licence',
  'services.india.neutral-code.tsx': 'Neutral Code certificate CDSCO, Special Code medical devices India, OEM export packaging certificate, SCOMET medical devices',
  'services.india.non-conviction.tsx': 'Non-Conviction Certificate CDSCO, NCC medical devices India, SLA non conviction certificate, good standing regulatory India',
  'services.india.novel-ivds.tsx': 'novel IVD India approval, MD-26 application CDSCO, MD-27 novel in vitro diagnostic, breakthrough diagnostic CDSCO',
  'services.india.personal-use.tsx': 'personal use import medical device India, MD-20 MD-21 application, patient device import CDSCO, compassionate use medical device',
  'services.iso-13485.tsx': 'ISO 13485 consultant, ISO 13485 implementation India, QMS medical devices, ISO 13485 certification, quality management system medical device',
  'services.wpc-wireless-medical-devices.tsx': 'WPC ETA India medical devices, wireless medical device approval India, Bluetooth medical device ETA, Wi-Fi medical device type approval, DoT ETA application',
  'services.pc-pndt-certificate.tsx': 'PC-PNDT certificate India, PNDT registration ultrasound India, Form A Form B PNDT, PNDT Act compliance medical device India',
  'services.uk.ukrp.tsx': 'UK Responsible Person UKRP, MHRA DORS registration UK, UKCA marking medical devices, UK MDR 2002 compliance, Northern Ireland medical device',
  'services.usa.agent-service.tsx': 'US FDA Agent service, FDA Official Correspondent, US Agent foreign manufacturer, FURLS establishment registration, FDA 510k correspondence',
  'services.usa.513g.tsx': 'FDA 513g request information, medical device classification FDA, FDA pathway advice, 513g regulatory consultation',
  'industries.cosmetics.tsx': 'cosmetics regulatory consultant India, CDSCO cosmetic registration, MoCRA FDA cosmetics, EU Cosmetics Responsible Person, cosmetic import licence India',
  'index.tsx': 'medical device regulatory consultant India, CDSCO consultant, FDA 510k consultant, EU MDR consultant, regulatory affairs medical devices, NKB Regovanta',
  'about.tsx': 'NKB Regovanta, regulatory affairs consultant India, medical device regulatory experts, global regulatory consulting firm',
  'contact.tsx': 'NKB Regovanta contact, regulatory consultant India, medical device regulatory consultation, CDSCO consultant enquiry',
  'services.index.tsx': 'medical device regulatory services, CDSCO services India, FDA regulatory services, EU MDR CE marking services, global regulatory consulting',
};

let patched = 0;
let errors = 0;

for (const file of ERROR_FILES) {
  const fp = path.join(routesDir, file);
  if (!fs.existsSync(fp)) {
    console.log('SKIP (not found):', file);
    continue;
  }
  
  let content = fs.readFileSync(fp, 'utf8');
  
  // Check what's already present
  const hasOgTitle = content.includes('"og:title"') || content.includes("'og:title'");
  const hasTwitter = content.includes('"twitter:title"') || content.includes("'twitter:title'");
  const hasKeywords = (content.includes('"keywords"') || content.includes("'keywords'")) && content.includes('name:');
  const hasOgImage = content.includes('"og:image"') || content.includes("'og:image'");
  
  if (hasOgTitle && hasTwitter && hasKeywords && hasOgImage) {
    console.log('SKIP (complete):', file);
    continue;
  }
  
  // Extract canonical
  let canonicalUrl = '';
  const canonMatch = content.match(/rel: ["']canonical["'], href: ["']([^"']+)["']/);
  if (canonMatch) canonicalUrl = canonMatch[1];
  if (!canonicalUrl) { console.log('NO CANONICAL:', file); errors++; continue; }
  
  // Extract title
  let title = '';
  const titlePatterns = [
    /\{ title: "([^"]+)" \}/,
    /\{ title: '([^']+)' \}/,
    /title:\s*\n\s*"([^"]+)"/,
    /title:\s*\n\s*'([^']+)'/,
    /title:\s*\n?\s*\n?\s*"([^"]+)"/,
    /\btitle:\s+"([^"]+)"/,
  ];
  for (const p of titlePatterns) {
    const m = content.match(p);
    if (m) { title = m[1]; break; }
  }
  if (!title) { console.log('NO TITLE:', file); errors++; continue; }
  
  const ogTitle = title.length > 95 ? title.substring(0, 92) + '...' : title;
  
  // Get description
  let desc = '';
  const descPatterns = [
    /name: "description",\s*\n\s*content:\s*"([\s\S]*?)",/,
    /name: "description", content: "([^"]+)"/,
    /name: 'description',\s*content:\s*'([^']+)'/,
  ];
  for (const p of descPatterns) {
    const m = content.match(p);
    if (m) { desc = m[1].replace(/\s+/g, ' ').trim(); break; }
  }
  if (CUSTOM_DESCRIPTIONS[file]) desc = CUSTOM_DESCRIPTIONS[file];
  if (!desc) desc = ogTitle;
  
  const socialDesc = desc.length > 220 ? desc.substring(0, 217) + '...' : desc;
  
  // Keywords
  let keywords = '';
  if (CUSTOM_KEYWORDS[file]) {
    keywords = CUSTOM_KEYWORDS[file];
  } else {
    const cleanTitle = title.replace(/ \| NKB Regovanta/i, '').replace(/ \| /g, ', ');
    const urlPath = canonicalUrl.replace(BASE_URL, '');
    const urlTerms = urlPath.split('/').filter(Boolean).join(' ').replace(/-/g, ' ');
    keywords = `${cleanTitle}, ${urlTerms}, NKB Regovanta, regulatory consultant, medical device`;
  }
  
  // Build the injection block
  const metaToAdd = [];
  if (!hasKeywords) metaToAdd.push(`      { name: "keywords", content: ${JSON.stringify(keywords)} },`);
  if (!hasOgTitle) {
    metaToAdd.push(`      { property: "og:title", content: ${JSON.stringify(ogTitle)} },`);
    metaToAdd.push(`      { property: "og:description", content: ${JSON.stringify(socialDesc)} },`);
    metaToAdd.push(`      { property: "og:url", content: ${JSON.stringify(canonicalUrl)} },`);
    metaToAdd.push(`      { property: "og:type", content: "website" },`);
  }
  if (!hasOgImage) metaToAdd.push(`      { property: "og:image", content: ${JSON.stringify(OG_IMAGE)} },`);
  if (!hasTwitter) {
    metaToAdd.push(`      { name: "twitter:card", content: "summary_large_image" },`);
    metaToAdd.push(`      { name: "twitter:title", content: ${JSON.stringify(ogTitle)} },`);
    metaToAdd.push(`      { name: "twitter:description", content: ${JSON.stringify(socialDesc)} },`);
    metaToAdd.push(`      { name: "twitter:image", content: ${JSON.stringify(OG_IMAGE)} },`);
  }
  
  if (metaToAdd.length === 0) {
    console.log('SKIP (nothing):', file);
    continue;
  }
  
  const insertion = metaToAdd.join('\n') + '\n';
  
  // Strategy: find the `links: [` within the head block and insert before it
  // Pattern: find 'head:' first, then find 'links: [' after that
  const headIdx = content.indexOf('head:');
  if (headIdx === -1) { console.log('NO HEAD:', file); errors++; continue; }
  
  const headPortion = content.substring(headIdx);
  
  // Find links: right after the meta array
  // In these files, the structure is: meta: [...],\n    links: [...]
  // So we look for the first 'links:' in the head section
  const linksIdx = headPortion.search(/\n[ \t]+links:/);
  if (linksIdx === -1) { console.log('NO LINKS FOUND:', file); errors++; continue; }
  
  // Insert before `\n    links:`
  const newHeadPortion = headPortion.substring(0, linksIdx) + '\n' + insertion + headPortion.substring(linksIdx);
  let updatedContent = content.substring(0, headIdx) + newHeadPortion;
  
  // Also update description if custom
  if (CUSTOM_DESCRIPTIONS[file]) {
    for (const p of descPatterns) {
      const m = updatedContent.match(p);
      if (m && m[1].length < 130) { // Only replace if it's a short/bad description
        updatedContent = updatedContent.replace(p, `name: "description", content: ${JSON.stringify(CUSTOM_DESCRIPTIONS[file])}`);
        break;
      }
    }
  }
  
  if (updatedContent === content) {
    console.log('NO CHANGE:', file);
    errors++;
    continue;
  }
  
  fs.writeFileSync(fp, updatedContent, 'utf8');
  console.log('PATCHED:', file);
  patched++;
}

console.log(`\nSecond pass: Patched ${patched}, Errors ${errors}`);
