/**
 * ADD FAQPage JSON-LD SCHEMA to top 10 money pages
 * Injects FAQ structured data into the component JSX
 */
const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');

const FAQ_DATA = {
  'services.india.predicate-devices.tsx': {
    faqs: [
      { q: "What is the difference between Form MD-14 and Form MD-15?", a: "Form MD-14 is the application submitted on CDSCO's SUGAM portal to apply for an import licence. Form MD-15 is the actual import licence document granted by CDSCO after the application is approved." },
      { q: "Who can apply for a CDSCO MD-14 import licence in India?", a: "Only an Indian entity (Indian Authorized Agent/AIA or Authorized Indian Representative/AIR) holding a valid wholesale drug licence and appointed via notarized Power of Attorney can file the MD-14 on behalf of the foreign manufacturer." },
      { q: "How long does CDSCO MD-15 import licence approval take?", a: "For Class A devices: 15–60 days. For Class B, C, D devices with predicates: 3–6 months. For novel devices requiring Expert Committee evaluation: 9–18 months." },
      { q: "Can a foreign company directly apply for an MD-14 licence?", a: "No. CDSCO regulations require all import licence applications to be filed by an Indian entity — either an Indian Authorized Agent (IAA) or Authorized Indian Representative (AIR) appointed by the foreign manufacturer." },
      { q: "What documents are required for CDSCO medical device import registration?", a: "Key documents include: SUGAM portal application, device technical specifications, performance testing reports, ISO 13485 / manufacturing site certificate, CE or FDA clearance (if applicable), predicate device details, and a notarized Power of Attorney for the Indian agent." },
    ]
  },
  'services.india.medical-devices.tsx': {
    faqs: [
      { q: "What is the difference between CDSCO import licence and manufacturing licence?", a: "An import licence (MD-14/15) is required for foreign medical devices brought into India. A manufacturing licence (MD-3 to MD-9) is required for devices manufactured within India. Both are issued by CDSCO/State Licensing Authorities under MDR 2017." },
      { q: "What is the role of an Indian Authorized Agent (IAA) for medical devices?", a: "The IAA acts as the local regulatory representative for a foreign manufacturer in India. They are responsible for SUGAM portal submissions, responding to CDSCO queries, label compliance, and post-market adverse event reporting on behalf of the overseas manufacturer." },
      { q: "Is ISO 13485 mandatory for CDSCO medical device registration in India?", a: "Yes. For Class B, C, and D medical devices, the foreign manufacturer must hold a valid ISO 13485:2016 certificate from an accredited certification body. Class A non-sterile, non-measuring devices under GSR 777(E) have a simplified registration process." },
      { q: "What is SUGAM portal and how is it used for CDSCO registration?", a: "SUGAM is CDSCO's online regulatory management portal (sugam.gov.in) where all medical device import and manufacturing licence applications are filed. All forms (MD-14, MD-15, MD-3 to MD-9, etc.) are submitted digitally through SUGAM." },
    ]
  },
  'services.usa.510k.tsx': {
    faqs: [
      { q: "What is a substantial equivalence predicate in an FDA 510(k) submission?", a: "A predicate device is a legally marketed device to which the new device is compared for 510(k) clearance. It must share the same intended use and have the same or comparable technological characteristics as the new device." },
      { q: "Is eSTAR mandatory for all FDA 510(k) submissions?", a: "Yes. As of October 1, 2023, FDA requires all 510(k) submissions to be filed using the eSTAR (electronic Submission Template and Resource) standardized PDF format. Paper 510(k) submissions are no longer accepted." },
      { q: "How long does FDA 510(k) clearance take in 2026?", a: "Under MDUFA V, FDA's performance goal is to issue a decision within 90 days for 90% of 510(k)s. In practice, most routine submissions achieve clearance in 3–6 months, including any Additional Information (AI) request cycles." },
      { q: "What is the difference between FDA 510(k) clearance and FDA PMA approval?", a: "510(k) clearance is for Class II devices that demonstrate substantial equivalence to a predicate. PMA (Premarket Approval) is required for Class III devices and requires independent clinical evidence of safety and effectiveness — a much more rigorous process." },
      { q: "What types of devices require a 510(k) submission?", a: "Class II medical devices typically require a 510(k) unless they are 510(k)-exempt. Class I devices are usually exempt. Class III devices require PMA unless a De Novo has been granted. Some devices may qualify for the De Novo pathway to create a new device category." },
    ]
  },
  'services.eu.mdr.tsx': {
    faqs: [
      { q: "What is the difference between EU MDR and the old EU MDD?", a: "EU MDR 2017/745 replaced EU MDD 93/42/EEC with significantly more stringent requirements including mandatory clinical evidence, PMCF studies, EUDAMED registration, UDI labelling, QMS certification, and enhanced Notified Body scrutiny for high-risk devices." },
      { q: "What clinical evidence is required for EU MDR CE marking?", a: "EU MDR requires a Clinical Evaluation Report (CER) following MEDDEV 2.7/1 Rev 4 or MDCG guidance demonstrating clinical safety and performance. Class IIb and III devices often require direct clinical investigation data rather than literature equivalence alone." },
      { q: "When must all legacy MDD-marked devices comply with EU MDR?", a: "Under EU Regulation 2023/607, Class III and implantable Class IIb devices must comply by 31 December 2027. Other Class IIb, IIa, and Is/Im/Ir devices have a deadline of 31 December 2028, subject to meeting specific eligibility conditions." },
      { q: "Do I need EUDAMED registration for CE marking?", a: "Yes. EU MDR requires manufacturers to register in EUDAMED and obtain a Single Registration Number (SRN) before applying for CE certification. EUDAMED registration is mandatory for Notified Body submission and ongoing market surveillance reporting." },
      { q: "What is the General Safety and Performance Requirements (GSPR) in EU MDR?", a: "GSPR (Annex I of EU MDR) lists all safety and performance requirements a device must meet to obtain CE marking. Manufacturers must create a GSPR checklist demonstrating compliance with each applicable requirement, with supporting evidence." },
    ]
  },
  'services.eu.ivdr.tsx': {
    faqs: [
      { q: "What is EU IVDR and who does it affect?", a: "EU IVDR 2017/746 is the In Vitro Diagnostic Regulation that applies to all in vitro diagnostic medical devices sold in Europe, replacing EU IVDD 98/79/EC. It significantly expands the scope of devices requiring Notified Body review — from ~20% to ~80% of IVDs." },
      { q: "What is a Performance Evaluation Report (PER) under EU IVDR?", a: "A PER is the EU IVDR equivalent of the Clinical Evaluation Report for medical devices. It documents the analytical performance (accuracy, precision, sensitivity, specificity) and clinical performance (diagnostic sensitivity, specificity, predictive values) of an IVD." },
      { q: "Are there IVDR transition deadlines for legacy IVDD devices?", a: "Yes. Class D IVDR devices had a deadline of 26 May 2025. Class C devices: 26 May 2026. Class B and Class A sterile devices: 26 May 2027. Legacy IVDD certificates remain valid only if specific eligibility conditions (MDCG 2022-18) are met." },
    ]
  },
  'services.iso-13485.tsx': {
    faqs: [
      { q: "What is ISO 13485:2016 and who needs it?", a: "ISO 13485:2016 is the international quality management system standard for organizations involved in the design, development, production, storage, distribution, and servicing of medical devices. Most major regulatory bodies (FDA, EU MDR, CDSCO, TGA, Health Canada) require or accept ISO 13485 certification." },
      { q: "Is ISO 13485 certification mandatory for FDA 510(k) submissions?", a: "ISO 13485 is not directly mandatory for 510(k) submissions, but it helps demonstrate QMS compliance. Foreign manufacturers must register their facility with FDA (FURLS) and comply with 21 CFR Part 820 (QMSR), which is now harmonized with ISO 13485:2016." },
      { q: "How long does ISO 13485 certification take?", a: "The timeline depends on your QMS maturity. From initial gap assessment to receiving the certificate typically takes 6–18 months. This includes QMS documentation, implementation, internal audit, management review, and the certification audit (Stage 1 + Stage 2) by an accredited CB." },
    ]
  },
  'services.mdsap.index.tsx': {
    faqs: [
      { q: "What is MDSAP and which countries participate?", a: "MDSAP (Medical Device Single Audit Program) is a program that allows one audit to satisfy the regulatory requirements of five jurisdictions: US FDA (21 CFR Part 820/QMSR), Health Canada (CMDR), ANVISA Brazil (RDC 665), MHLW/PMDA Japan, and TGA Australia (MDSAP). Japan and Brazil mandate MDSAP; it is accepted but not required in the US, Canada, and Australia." },
      { q: "Is MDSAP mandatory for medical device companies?", a: "MDSAP is mandatory for Japan (required for PMDA registration) and Brazil (required for ANVISA registration). In Canada, Health Canada accepts MDSAP as an alternative to domestic QMS inspections. In the US and Australia, MDSAP is accepted but not required." },
      { q: "What is an MDSAP gap assessment?", a: "An MDSAP gap assessment is a pre-audit evaluation of your QMS against all five MDSAP jurisdictional requirements. It identifies non-conformities before the official audit, allowing time for CAPA remediation to achieve a clean first-time audit result." },
      { q: "How long does it take to prepare for an MDSAP audit?", a: "For companies with a mature ISO 13485 QMS, MDSAP readiness typically takes 3–9 months. Companies starting from scratch may need 12–18 months. Key activities include gap assessment, CAPA remediation, process documentation, and at least one successful internal audit cycle." },
    ]
  },
};

let added = 0;
let skipped = 0;
let errors = 0;

for (const [file, data] of Object.entries(FAQ_DATA)) {
  const fp = path.join(routesDir, file);
  if (!fs.existsSync(fp)) {
    console.log('NOT FOUND:', file);
    errors++;
    continue;
  }
  
  let content = fs.readFileSync(fp, 'utf8');
  
  // Skip if already has FAQ schema
  if (content.includes('FAQPage')) {
    console.log('SKIP (has FAQPage):', file);
    skipped++;
    continue;
  }
  
  // Build FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };
  
  const schemaScript = `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(faqSchema, null, 6).split('\n').join('\n        ')}) }}
      />`;
  
  // Find the component function's return statement - look for "return (" inside the page component
  // Strategy: find the LAST "return (" in the file which is the page component return
  const returnMatches = [...content.matchAll(/return \(\n/g)];
  if (returnMatches.length === 0) {
    // Try return (
    const returnMatches2 = [...content.matchAll(/return \(\r?\n/g)];
    if (returnMatches2.length === 0) {
      console.log('NO return found:', file);
      errors++;
      continue;
    }
  }
  
  // Use the last return ( which is the page component
  let allReturns = [...content.matchAll(/return \(\r?\n/g)];
  if (allReturns.length === 0) {
    console.log('NO return found:', file);
    errors++;
    continue;
  }
  
  const lastReturn = allReturns[allReturns.length - 1];
  const returnIdx = lastReturn.index + lastReturn[0].length;
  
  // The first element after return ( is the wrapper div or fragment
  // We need to wrap with <> ... </> if not already a fragment, or just insert before the first element
  
  // Find the first < after return (
  const firstElIdx = content.indexOf('<', returnIdx);
  if (firstElIdx === -1) { console.log('NO element after return:', file); errors++; continue; }
  
  // Get indentation
  const lineStart = content.lastIndexOf('\n', firstElIdx) + 1;
  const indent = content.substring(lineStart, firstElIdx).match(/^([ \t]*)/)?.[1] || '    ';
  
  // Check if the first element is already a fragment <>
  const firstElContent = content.substring(firstElIdx, firstElIdx + 10);
  
  if (firstElContent.startsWith('<>') || firstElContent.startsWith('<React.Fragment')) {
    // Already a fragment — insert after the fragment opening
    const afterFragmentIdx = content.indexOf('>', firstElIdx) + 1;
    const newContent = content.substring(0, afterFragmentIdx) + '\n' + indent + '  <script\n' + indent + '    type="application/ld+json"\n' + indent + '    dangerouslySetInnerHTML={{ __html: JSON.stringify(' + JSON.stringify(faqSchema) + ') }}\n' + indent + '  />' + content.substring(afterFragmentIdx);
    content = newContent;
  } else {
    // Need to wrap existing content with fragment and add schema
    // Insert just before the first element
    const schemaLine = indent + '<script\n' + indent + '  type="application/ld+json"\n' + indent + '  dangerouslySetInnerHTML={{ __html: JSON.stringify(' + JSON.stringify(faqSchema) + ') }}\n' + indent + '/>\n';
    
    // Find end of component: the last ); or ) that closes the return
    // Simple approach: just find the closing ); at file end
    // Actually let's wrap: change "return (\n    <div" to "return (\n    <>\n      <script.../>\n      <div"
    // and find the matching closing div to add </> after it
    
    // Simpler: just inject the script before the first element. Even without fragment wrapping,
    // two sibling elements at root need a fragment. Let's wrap.
    
    // Find the last ) in file that closes the return
    // Strategy: find the component function end — look for last line with just "  )" or ");"
    const componentEnd = content.lastIndexOf('\n  );\n') !== -1 
      ? content.lastIndexOf('\n  );\n')
      : content.lastIndexOf('\n  )\n');
    
    if (componentEnd === -1) { console.log('NO component end:', file); errors++; continue; }
    
    // The region to wrap is from returnIdx to componentEnd
    // But this is complex to do safely without breaking JSX
    // Simpler approach: just insert the script as the LAST CHILD of the root div
    
    // Find the root div that wraps everything — it's the first <div after return (
    // And find its matching close tag
    const rootDivStart = content.indexOf('<div', firstElIdx);
    if (rootDivStart === -1) { console.log('NO root div:', file); errors++; continue; }
    
    // Just insert script BEFORE the closing of the main wrapper div
    // Find "</section>" or </div> near end and add before last one
    // Better: add it right before the last </div>\n  ); pattern
    
    const lastDivClose = content.lastIndexOf('</div>');
    if (lastDivClose === -1) { console.log('NO closing div:', file); errors++; continue; }
    
    // Get indentation at this last closing div
    const lastDivLineStart = content.lastIndexOf('\n', lastDivClose) + 1;
    const lastDivIndent = content.substring(lastDivLineStart, lastDivClose).match(/^([ \t]*)/)?.[1] || '  ';
    
    const schemaInsert = '\n' + lastDivIndent + '<script\n' + lastDivIndent + '  type="application/ld+json"\n' + lastDivIndent + '  dangerouslySetInnerHTML={{ __html: JSON.stringify(' + JSON.stringify(faqSchema) + ') }}\n' + lastDivIndent + '/>';
    
    content = content.substring(0, lastDivClose) + schemaInsert + '\n' + content.substring(lastDivClose);
  }
  
  if (!content.includes('FAQPage')) {
    console.log('INSERT FAILED:', file);
    errors++;
    continue;
  }
  
  fs.writeFileSync(fp, content, 'utf8');
  console.log('ADDED FAQ schema:', file);
  added++;
}

console.log(`\nFAQ Schema: Added ${added}, Skipped ${skipped}, Errors ${errors}`);
