const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.startsWith('case-studies.') && f !== 'case-studies.index.tsx' && f !== 'case-studies.tsx');

const oldClass = 'className="w-full h-[400px] object-cover rounded-md mb-12 shadow-sm"';
const newClass = 'className="w-full max-w-4xl mx-auto block h-[400px] object-cover rounded-md mb-12 shadow-sm"';

let updated = 0;
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(oldClass)) {
    content = content.replace(oldClass, newClass);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
    updated++;
  }
});
console.log(`Total updated: ${updated}`);
