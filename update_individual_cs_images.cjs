const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');

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
    content = content.replace(/import caseHero from "@\/assets\/case\.png";/g, `const caseHero = "${img}";`);
    fs.writeFileSync(fp, content);
  }
}
console.log("Updated case study files");
