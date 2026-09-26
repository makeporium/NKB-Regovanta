const fs = require('fs');
const path = require('path');

const unsplashImages = [
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

// Update individual route files
const routesDir = path.join(__dirname, '../src/routes');
let updatedRoutes = 0;

unsplashImages.forEach(item => {
  const routePath = path.join(routesDir, `insights.${item.slug}.tsx`);
  if (fs.existsSync(routePath)) {
    let content = fs.readFileSync(routePath, 'utf8');
    content = content.replace(/const imgArticle = "[^"]*";/, `const imgArticle = "/assets/insights/${item.name}";`);
    fs.writeFileSync(routePath, content, 'utf8');
    updatedRoutes++;
  }
});

console.log(`Updated ${updatedRoutes} individual route files with unique Unsplash photos.`);

// Update insights.index.tsx
const indexPath = path.join(routesDir, 'insights.index.tsx');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Replace all image references in allArticles
unsplashImages.forEach(item => {
  const idRegex = new RegExp(`id:\\s*"${item.id}"[\\s\\S]*?img:\\s*[^,]+,`, 'm');
  indexContent = indexContent.replace(idRegex, (match) => {
    return match.replace(/img:\s*[^,]+,/, `img: "/assets/insights/${item.name}",`);
  });
});

fs.writeFileSync(indexPath, indexContent, 'utf8');
console.log('Updated insights.index.tsx with all 39 unique authentic photos!');
