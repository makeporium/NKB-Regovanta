const fs = require('fs');
const path = require('path');
const { articleHash } = require('./check_articles.cjs');

const projectRoot = path.resolve(__dirname, '..');

const mapping = [
  { id: "01", name: "digital_health_tablet.jpg", slug: "eu-ai-act-medical-devices" },
  { id: "02", name: "medical_audit_consult.jpg", slug: "eu-mdr-compliance-challenges" },
  { id: "03", name: "clinical_research_facility.jpg", slug: "india-mdr-2026-rule-63" },
  { id: "04", name: "regulatory_dossier_review.jpg", slug: "medical-device-documentation-compliance-to-evidence" },
  { id: "05", name: "software_medical_screen.jpg", slug: "ce-marking-digital-health-technologies" },
  { id: "06", name: "quality_assurance_meeting.jpg", slug: "fda-qmsr-compliance-guide" },
  { id: "07", name: "risk_assessment_analytics.jpg", slug: "dynamic-risk-management-software-medical-devices" },
  { id: "08", name: "regulatory_compliance_officer.jpg", slug: "understanding-prrc-eu-mdr-ivdr" },
  { id: "09", name: "iso_audit_binder_prep.jpg", slug: "qms-documentation-iso-13485-compliance" },
  { id: "10", name: "clinical_evaluation_doctor.jpg", slug: "clinical-evaluation-equivalence-medical-devices" },
  { id: "11", name: "biomedical_engineering_bench.jpg", slug: "gspr-compliance-eu-mdr-ivdr" },
  { id: "12", name: "pharma_cleanroom_line.jpg", slug: "cdsco-medical-device-manufacturing-license-india" },
  { id: "13", name: "cardiovascular_surgical_implant.jpg", slug: "class-iii-medical-device-classification-strategy" },
  { id: "14", name: "medtech_cad_design.jpg", slug: "gspr-foundation-medical-device-development" },
  { id: "15", name: "cardiac_monitor_ecg.jpg", slug: "ce-marking-cardiovascular-medical-devices" },
  { id: "16", name: "software_code_validation.jpg", slug: "iec-62304-medical-device-software-lifecycle" },
  { id: "17", name: "connected_patient_care.jpg", slug: "remote-patient-monitoring-devices-regulatory-framework" },
  { id: "18", name: "laboratory_test_tubes_pipette.jpg", slug: "ivdr-class-d-verification-notified-bodies" },
  { id: "19", name: "digital_dental_clinic.jpg", slug: "dental-scanners-manufacturing-regulatory-standards" },
  { id: "20", name: "pharmaceutical_vials_capsules.jpg", slug: "borderline-medical-device-classification-strategy" },
  { id: "21", name: "audit_checklist_calculator.jpg", slug: "notified-body-expectations-eu-mdr-technical-documentation" },
  { id: "22", name: "us_regulatory_headquarters.jpg", slug: "overcoming-fda-510k-clearance-barriers" },
  { id: "23", name: "capa_investigation_team.jpg", slug: "effective-capa-system-medical-devices" },
  { id: "24", name: "global_map_logistics.jpg", slug: "regulatory-compliance-strategy-global-medtech" },
  { id: "25", name: "laptop_regulatory_search.jpg", slug: "regulation-eu-2024-1860-mdr-ivdr-transition" },
  { id: "26", name: "petri_dish_biocompatibility.jpg", slug: "biological-evaluation-testing-medical-devices-iso-10993" },
  { id: "27", name: "legal_compliance_gavel.jpg", slug: "core-regulations-medical-device-global-compliance" },
  { id: "28", name: "project_milestone_calendar.jpg", slug: "optimal-timing-usfda-510k-submission" },
  { id: "29", name: "usability_observation_lab.jpg", slug: "usability-testing-medical-devices-iec-62366" },
  { id: "30", name: "digital_security_compliance.jpg", slug: "fda-510k-program-modernization-safety-standards" },
  { id: "31", name: "medical_ergonomics_device.jpg", slug: "human-factors-engineering-medical-device-design" },
  { id: "32", name: "sterile_blister_packaging.jpg", slug: "cdsco-medical-device-registration-guidelines-india" },
  { id: "33", name: "biochemical_laboratory_flask.jpg", slug: "ce-marking-process-medical-devices-eu-mdr" },
  { id: "34", name: "samd_mobile_telehealth.jpg", slug: "samd-classification-submission-usfda" },
  { id: "35", name: "executive_meeting_handshake.jpg", slug: "fda-q-sub-pre-submission-meeting-guide" },
  { id: "36", name: "accreditation_certificate_audit.jpg", slug: "notified-body-selection-conformity-assessment-guide" },
  { id: "37", name: "fda_laboratory_validation.jpg", slug: "fda-qmsr-2026" },
  { id: "38", name: "database_analytics_eudamed.jpg", slug: "eu-mdr-2026" },
  { id: "39", name: "inspection_clean_facility.jpg", slug: "fda-inspections-2026" }
];

console.log('--- Step 1: Update src/routes/insights.index.tsx ---');
const indexPath = path.join(projectRoot, 'src/routes/insights.index.tsx');
let indexContent = fs.readFileSync(indexPath, 'utf8');

for (const item of mapping) {
  // Matches { id: "01", ... img: "...", ... }
  const idRegex = new RegExp(`(id:\\s*"${item.id}"[\\s\\S]*?img:\\s*")[^"]+(")`, 'm');
  if (idRegex.test(indexContent)) {
    indexContent = indexContent.replace(idRegex, `$1/assets/insights/${item.name}$2`);
    console.log(`Updated post [${item.id}] -> /assets/insights/${item.name}`);
  } else {
    console.warn(`Could not find id "${item.id}" in insights.index.tsx`);
  }
}
fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Successfully wrote src/routes/insights.index.tsx');

console.log('--- Step 2: Update individual route files meta tags ---');
const routesDir = path.join(projectRoot, 'src/routes');
for (const item of mapping) {
  const routeFile = path.join(routesDir, `insights.${item.slug}.tsx`);
  if (fs.existsSync(routeFile)) {
    let routeContent = fs.readFileSync(routeFile, 'utf8');
    // Replace og:image and twitter:image
    routeContent = routeContent.replace(/\{ property: "og:image", content: "[^"]*" \}/g, `{ property: "og:image", content: "https://www.nkbregovanta.com/assets/insights/${item.name}" }`);
    routeContent = routeContent.replace(/\{ name: "twitter:image", content: "[^"]*" \}/g, `{ name: "twitter:image", content: "https://www.nkbregovanta.com/assets/insights/${item.name}" }`);
    fs.writeFileSync(routeFile, routeContent, 'utf8');
    console.log(`Updated meta images in insights.${item.slug}.tsx`);
  }
}

console.log('--- Step 3: Update articles in src/content/articles and recalculate hashes ---');
const articlesDir = path.join(projectRoot, 'src/content/articles');
const replacementsPath = path.join(projectRoot, 'src/content/article-replacements.json');
const replacements = JSON.parse(fs.readFileSync(replacementsPath, 'utf8'));

let updatedArticles = 0;
for (const item of mapping) {
  const artFile = path.join(articlesDir, `${item.slug}.json`);
  if (fs.existsSync(artFile)) {
    let artContent = fs.readFileSync(artFile, 'utf8');
    const oldImageMatch = artContent.match(/"image":\s*"([^"]+)"/);
    if (oldImageMatch) {
      artContent = artContent.replace(/"image":\s*"[^"]+"/, `"image": "/assets/insights/${item.name}"`);
      fs.writeFileSync(artFile, artContent, 'utf8');

      // Recalculate hash
      const newHash = articleHash(Buffer.from(artContent));
      const repEntry = replacements.find(r => r.slug === item.slug);
      if (repEntry) {
        repEntry.contentSha256 = newHash;
        updatedArticles++;
        console.log(`Updated article JSON & hash for: ${item.slug}`);
      }
    }
  }
}

fs.writeFileSync(replacementsPath, JSON.stringify(replacements, null, 2) + '\n', 'utf8');
console.log(`Updated ${updatedArticles} article JSON files and wrote article-replacements.json`);

console.log('--- Completed insight images update! ---');
