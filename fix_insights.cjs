const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = ['insights.eu-mdr-2026.tsx', 'insights.fda-inspections-2026.tsx', 'insights.fda-qmsr-2026.tsx'];

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace('mx-auto max-w-3xl px-4 sm:px-6 lg:px-8', 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8');
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
