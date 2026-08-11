const fs = require('fs');
const path = require('path');

const files = [
  { name: 'Main', path: 'C:\\Users\\astro\\.gemini\\antigravity-ide\\brain\\824d3244-b01e-4505-a26c-5a6cd125c95a\\.system_generated\\steps\\2727\\content.md' },
  { name: 'Importer', path: 'C:\\Users\\astro\\.gemini\\antigravity-ide\\brain\\824d3244-b01e-4505-a26c-5a6cd125c95a\\.system_generated\\steps\\2755\\content.md' },
  { name: 'Manufacturer', path: 'C:\\Users\\astro\\.gemini\\antigravity-ide\\brain\\824d3244-b01e-4505-a26c-5a6cd125c95a\\.system_generated\\steps\\2756\\content.md' }
];

let output = '';

for (const file of files) {
  const content = fs.readFileSync(file.path, 'utf8');
  
  // Extract all <p>, <h1>, <h2>, <h3> tags
  const matches = content.match(/<h[1-3][^>]*>.*?<\/h[1-3]>|<p[^>]*>.*?<\/p>|<li[^>]*>.*?<\/li>/gi);
  
  output += `\n\n=== ${file.name} ===\n\n`;
  
  if (matches) {
    matches.forEach(m => {
      const clean = m.replace(/<[^>]+>/g, '').trim();
      if (clean && !clean.includes('function') && !clean.includes('{') && clean.length > 20) {
        output += clean + '\n\n';
      }
    });
  }
}

const outPath = path.join('C:\\Users\\astro\\.gemini\\antigravity-ide\\brain\\824d3244-b01e-4505-a26c-5a6cd125c95a\\scratch', 'extracted_cosmetics.txt');
fs.writeFileSync(outPath, output);
console.log('Saved to', outPath);
