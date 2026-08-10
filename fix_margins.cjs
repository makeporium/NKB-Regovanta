const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.startsWith('case-studies.') && f !== 'case-studies.index.tsx' && f !== 'case-studies.tsx');

let updated = 0;
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('max-w-3xl')) {
    content = content.replace('max-w-3xl', 'max-w-7xl');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
    updated++;
  }
});
console.log(`Total updated: ${updated}`);
