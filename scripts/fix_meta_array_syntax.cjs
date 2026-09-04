/**
 * REPAIR BROKEN META ARRAY SYNTAX IN 30 FILES
 * Moves orphaned objects between '], and 'links:' inside the meta array.
 */
const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');

const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__'));
let fixedCount = 0;

for (const file of files) {
  const fp = path.join(routesDir, file);
  let content = fs.readFileSync(fp, 'utf-8');

  // Match:
  // (meta:\s*\[[\s\S]*?)(\r?\n[ \t]*\],)([ \t]*\r?\n[\s\S]*?)(\r?\n[ \t]*links:\s*\[)
  const brokenPattern = /(meta:\s*\[[\s\S]*?)(\r?\n[ \t]*\],)([ \t]*\r?\n[\s\S]*?)(\r?\n[ \t]*links:\s*\[)/;
  const match = content.match(brokenPattern);

  if (match) {
    const orphaned = match[3].trim();
    if (orphaned.length > 0) {
      const fixedMeta = match[1] + '\n' + orphaned + match[2] + match[4];
      content = content.replace(match[0], fixedMeta);
      fs.writeFileSync(fp, content, 'utf-8');
      console.log('Repaired:', file);
      fixedCount++;
    }
  }
}

console.log(`\nTotal repaired: ${fixedCount}`);
