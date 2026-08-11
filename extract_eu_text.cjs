const fs = require('fs');
const path = require('path');

const filePath = 'C:\\Users\\astro\\.gemini\\antigravity-ide\\brain\\824d3244-b01e-4505-a26c-5a6cd125c95a\\.system_generated\\steps\\2826\\content.md';
const content = fs.readFileSync(filePath, 'utf8');

const matches = content.match(/<h[1-3][^>]*>.*?<\/h[1-3]>|<p[^>]*>.*?<\/p>|<li[^>]*>.*?<\/li>/gi);
let output = '';

if (matches) {
  matches.forEach(m => {
    const clean = m.replace(/<[^>]+>/g, '').trim();
    if (clean && !clean.includes('function') && !clean.includes('{') && clean.length > 20) {
      output += clean + '\n\n';
    }
  });
}

const outPath = path.join('C:\\Users\\astro\\.gemini\\antigravity-ide\\brain\\824d3244-b01e-4505-a26c-5a6cd125c95a\\scratch', 'extracted_eu.txt');
fs.writeFileSync(outPath, output);
console.log('Saved to', outPath);
