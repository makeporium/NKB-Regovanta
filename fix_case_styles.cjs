const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.startsWith('case-studies.') && f !== 'case-studies.index.tsx' && f !== 'case-studies.tsx');

let updated = 0;
files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  let changed = false;
  
  // Reduce margin (padding) between header and the back button
  if (content.includes('className="bg-white py-16 lg:py-24"')) {
    content = content.replace('className="bg-white py-16 lg:py-24"', 'className="bg-white pt-8 pb-16 lg:pt-12 lg:pb-24"');
    changed = true;
  }
  
  // Decrease picture size
  const oldImgClass = 'className="w-full max-w-4xl mx-auto block h-[400px] object-cover rounded-md mb-12 shadow-sm"';
  const newImgClass = 'className="w-full max-w-3xl mx-auto block h-[300px] object-cover rounded-md mb-12 shadow-sm"';
  if (content.includes(oldImgClass)) {
    content = content.replace(oldImgClass, newImgClass);
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
    updated++;
  }
});
console.log(`Total updated: ${updated}`);
