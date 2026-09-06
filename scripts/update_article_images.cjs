const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.startsWith('insights.') && f !== 'insights.index.tsx');

const imageMap = {
  'medtech_reg_lab.jpg': [
    'ce-marking-digital-health-technologies',
    'dynamic-risk-management-software-medical-devices',
    'ce-marking-cardiovascular-medical-devices',
    'iec-62304-medical-device-software-lifecycle',
    'biological-evaluation-testing-medical-devices-iso-10993',
    'usability-testing-medical-devices-iec-62366',
    'samd-classification-submission-usfda',
    'eu-ai-act-medical-devices'
  ],
  'cleanroom_manufacturing.jpg': [
    'cdsco-medical-device-manufacturing-license-india',
    'dental-scanners-manufacturing-regulatory-standards',
    'fda-inspections-2026'
  ],
  'qms_inspection_office.jpg': [
    'medical-device-documentation-compliance-to-evidence',
    'understanding-prrc-eu-mdr-ivdr',
    'notified-body-expectations-eu-mdr-technical-documentation',
    'effective-capa-system-medical-devices',
    'notified-body-selection-conformity-assessment-guide',
    'fda-qmsr-2026'
  ]
};

let updatedCount = 0;
files.forEach(file => {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let matched = false;

  for (const [img, slugs] of Object.entries(imageMap)) {
    for (const slug of slugs) {
      if (file.includes(slug)) {
        content = content.replace(/const imgArticle = "[^"]*";/, `const imgArticle = "/assets/brain/${img}";`);
        matched = true;
        break;
      }
    }
    if (matched) break;
  }

  if (matched) {
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
  }
});

console.log('Updated individual blog routes with realistic photography:', updatedCount);
