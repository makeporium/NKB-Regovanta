const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\astro\\.gemini\\antigravity-ide\\brain\\824d3244-b01e-4505-a26c-5a6cd125c95a\\.system_generated\\steps\\2727\\content.md', 'utf8');

// The file has raw HTML, we can extract it using regex
const textMatches = content.match(/<h[1-3][^>]*>(.*?)<\/h[1-3]>/gi);
console.log("Headers found:");
if (textMatches) {
  textMatches.forEach(m => console.log(m.replace(/<[^>]+>/g, '').trim()));
}

const linkMatches = content.match(/<a[^>]+href="([^"]+)"[^>]*>(.*?)<\/a>/gi);
console.log("\nLinks found (with 'read' or 'more' or 'cosmetic'):");
if (linkMatches) {
  linkMatches.forEach(m => {
    const text = m.replace(/<[^>]+>/g, '').trim();
    if (text.toLowerCase().includes('read') || text.toLowerCase().includes('more') || m.includes('cosmetic')) {
        const hrefMatch = m.match(/href="([^"]+)"/);
        const href = hrefMatch ? hrefMatch[1] : '';
        if (href.includes('cliniexperts.com')) {
           console.log(`[${text}] => ${href}`);
        }
    }
  });
}
