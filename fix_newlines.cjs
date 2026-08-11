const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.startsWith('services.india.') && f.endsWith('.tsx') && f !== 'services.india.index.tsx' && f !== 'services.india.neutral-code.tsx');

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix literal \n
  content = content.replace(/\\n\nconst heroBadges/g, '\nconst heroBadges');
  content = content.replace(/\\n\r?\nconst heroBadges/g, '\nconst heroBadges');
  content = content.replace(/\\nconst heroBadges/g, '\nconst heroBadges');
  
  // also check if there is a rogue \n
  content = content.replace(/^\\n$/gm, '');

  fs.writeFileSync(filePath, content);
  console.log(`Cleaned ${file}`);
}
