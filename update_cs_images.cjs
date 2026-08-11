const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');

// Update Market Access Hero
const marketAccessFile = path.join(dir, 'services.market-access.tsx');
let marketContent = fs.readFileSync(marketAccessFile, 'utf8');
// replace any existing hero img import/assignment
if (marketContent.includes('import heroImg from "@/assets/world-map.png";')) {
  marketContent = marketContent.replace('import heroImg from "@/assets/world-map.png";', 'const heroImg = "/assets/brain/services_market_access_hero_1786440859191.png";');
} else if (marketContent.match(/import\s+imgPlaceholder\s+from/)) {
  marketContent = marketContent.replace(/import\s+imgPlaceholder\s+from.*/, 'const imgPlaceholder = "/assets/brain/services_market_access_hero_1786440859191.png";');
} else {
    // maybe it doesn't have it, fallback
    marketContent = marketContent.replace(/import { createFileRoute }/, 'const heroImg = "/assets/brain/services_market_access_hero_1786440859191.png";\nimport { createFileRoute }');
    marketContent = marketContent.replace(/bg-\[url\('\@\/assets\/world-map\.png'\)\]/, 'bg-[url(\\'/assets/brain/services_market_access_hero_1786440859191.png\\')]');
}
fs.writeFileSync(marketAccessFile, marketContent);


// Update Case Studies Index
const csIndexFile = path.join(dir, 'case-studies.index.tsx');
let csIndexContent = fs.readFileSync(csIndexFile, 'utf8');

// Replace old imports
csIndexContent = csIndexContent.replace(/import imgPlaceholder from "@/assets\/regulatory-pathway.jpg";/, 'const imgTestSmarter = "/assets/brain/cs_test_smarter_1786441137220.png";\nconst imgAlgorithm = "/assets/brain/cs_algorithm_claim_1786441224937.png";\nconst imgEU = "/assets/brain/cs_eu_mdr_remediation_1786441191745.png";');
csIndexContent = csIndexContent.replace(/import imgPlaceholder2 from "@/assets\/iso-cleanroom.jpg";/, 'const imgSimulatedUse = "/assets/brain/cs_fda_simulated_use_1786441155542.png";\nconst imgAustralia = "/assets/brain/cs_australia_tga_1786441211612.png";');
csIndexContent = csIndexContent.replace(/import imgPlaceholder3 from "@/assets\/iso.png";/, 'const imgBiocompatibility = "/assets/brain/cs_fda_biocompatibility_1786441176273.png";');

// Update references in the array
csIndexContent = csIndexContent.replace(/img: imgPlaceholder,(?=\s*route: "\/case-studies\/test-smarter")/g, 'img: imgTestSmarter,');
csIndexContent = csIndexContent.replace(/img: imgPlaceholder2,(?=\s*route: "\/case-studies\/fda-simulated-use")/g, 'img: imgSimulatedUse,');
csIndexContent = csIndexContent.replace(/img: imgPlaceholder3,(?=\s*route: "\/case-studies\/fda-biocompatibility")/g, 'img: imgBiocompatibility,');
csIndexContent = csIndexContent.replace(/img: imgPlaceholder,(?=\s*route: "\/case-studies\/eu-mdr-remediation")/g, 'img: imgEU,');
csIndexContent = csIndexContent.replace(/img: imgPlaceholder2,(?=\s*route: "\/case-studies\/australia-tga")/g, 'img: imgAustralia,');
csIndexContent = csIndexContent.replace(/img: imgPlaceholder,(?=\s*route: "\/case-studies\/algorithm-claim")/g, 'img: imgAlgorithm,');

fs.writeFileSync(csIndexFile, csIndexContent);

// Update individual Case Study files
const mapping = {
  'case-studies.test-smarter.tsx': '/assets/brain/cs_test_smarter_1786441137220.png',
  'case-studies.fda-simulated-use.tsx': '/assets/brain/cs_fda_simulated_use_1786441155542.png',
  'case-studies.fda-biocompatibility.tsx': '/assets/brain/cs_fda_biocompatibility_1786441176273.png',
  'case-studies.eu-mdr-remediation.tsx': '/assets/brain/cs_eu_mdr_remediation_1786441191745.png',
  'case-studies.australia-tga.tsx': '/assets/brain/cs_australia_tga_1786441211612.png',
  'case-studies.algorithm-claim.tsx': '/assets/brain/cs_algorithm_claim_1786441224937.png'
};

for (const [file, img] of Object.entries(mapping)) {
  const fp = path.join(dir, file);
  if (fs.existsSync(fp)) {
    let content = fs.readFileSync(fp, 'utf8');
    content = content.replace(/import caseHero from "@\/assets\/case\.png";/g, \`const caseHero = "\${img}";\`);
    fs.writeFileSync(fp, content);
  }
}
