const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__'));

let results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(routesDir, file), 'utf8');
  
  const titleMatch = content.match(/\{ title: (?:"([^"]+)"|'([^']+)') \}/);
  const title = titleMatch ? (titleMatch[1] || titleMatch[2] || 'MISSING') : 'MISSING';
  const titleLen = title.length;

  // description
  let descLen = 0;
  let descMissing = true;
  const descBlock = content.match(/name:\s*["']description["'],\s*\n\s*content:\s*["']([\s\S]*?)["'],/);
  if (descBlock) {
    descLen = descBlock[1].length;
    descMissing = false;
  }

  // keywords
  let kwMissing = true;
  if (content.includes(`name: "keywords"`) || content.includes(`name: 'keywords'`)) {
    kwMissing = false;
  }

  // canonical
  let canonical = 'MISSING';
  const canMatch = content.match(/rel: ["']canonical["'],\s*href: ["']([^"']+)["']/);
  if (canMatch) canonical = canMatch[1];

  const hasHead = content.includes('head:');
  const h1Count = (content.match(/<h1[\s>]/g) || []).length;
  const hasSchema = content.includes('application/ld+json');
  const hasFAQ = content.includes('FAQPage');
  const hasOgTitle = content.includes('og:title');
  const hasOgDesc = content.includes('og:description');
  const hasTwitter = content.includes('twitter:title');
  const hasBreadcrumb = content.includes('BreadcrumbList');

  results.push({
    file,
    hasHead,
    title,
    titleLen,
    descLen,
    descMissing,
    kwMissing,
    canonical,
    h1Count,
    hasSchema,
    hasFAQ,
    hasOgTitle,
    hasOgDesc,
    hasTwitter,
    hasBreadcrumb
  });
}

// Generate a text report
console.log('=== COMPLETE PER-PAGE SEO AUDIT ===\n');

const noHead = results.filter(r => !r.hasHead);
console.log(`\n--- MISSING head() ENTIRELY (${noHead.length} pages) ---`);
noHead.forEach(r => console.log('  CRITICAL: ' + r.file));

const missingCanonical = results.filter(r => r.canonical === 'MISSING');
console.log(`\n--- MISSING CANONICAL TAG (${missingCanonical.length} pages) ---`);
missingCanonical.forEach(r => console.log('  CRITICAL: ' + r.file));

const missingDesc = results.filter(r => r.descMissing && r.hasHead);
console.log(`\n--- MISSING META DESCRIPTION (${missingDesc.length} pages) ---`);
missingDesc.forEach(r => console.log('  ERROR: ' + r.file));

const shortDesc = results.filter(r => !r.descMissing && r.descLen < 120);
console.log(`\n--- META DESCRIPTION TOO SHORT <120 chars (${shortDesc.length} pages) ---`);
shortDesc.forEach(r => console.log('  WARNING: ' + r.file + ' (len=' + r.descLen + ')'));

const longTitle = results.filter(r => r.titleLen > 70 && r.title !== 'MISSING');
console.log(`\n--- TITLE TOO LONG >70 chars (${longTitle.length} pages) ---`);
longTitle.forEach(r => console.log('  WARNING: ' + r.file + ' (len=' + r.titleLen + '): ' + r.title));

const missingKw = results.filter(r => r.kwMissing && r.hasHead);
console.log(`\n--- MISSING KEYWORDS (${missingKw.length} pages) ---`);
missingKw.forEach(r => console.log('  NOTE: ' + r.file));

const multiH1 = results.filter(r => r.h1Count > 1);
console.log(`\n--- MULTIPLE H1 TAGS (${multiH1.length} pages) ---`);
multiH1.forEach(r => console.log('  ERROR: ' + r.file + ' (' + r.h1Count + ' H1s)'));

const zeroH1 = results.filter(r => r.h1Count === 0);
console.log(`\n--- NO H1 TAG AT ALL (${zeroH1.length} pages) ---`);
zeroH1.forEach(r => console.log('  ERROR: ' + r.file));

const noSchema = results.filter(r => !r.hasSchema);
console.log(`\n--- NO STRUCTURED DATA (JSON-LD) (${noSchema.length} pages) ---`);
noSchema.forEach(r => console.log('  WARNING: ' + r.file));

const noFAQ = results.filter(r => !r.hasFAQ);
console.log(`\n--- NO FAQPage SCHEMA (${noFAQ.length} pages) ---`);
console.log('  Total: ' + noFAQ.length + ' pages — ALL pages are missing FAQPage schema');

const noOg = results.filter(r => !r.hasOgTitle && r.hasHead);
console.log(`\n--- MISSING og:title (${noOg.length} pages) ---`);
noOg.forEach(r => console.log('  WARNING: ' + r.file));

const noTwitter = results.filter(r => !r.hasTwitter && r.hasHead);
console.log(`\n--- MISSING twitter:title (${noTwitter.length} pages) ---`);
noTwitter.forEach(r => console.log('  WARNING: ' + r.file));

const noBreadcrumb = results.filter(r => !r.hasBreadcrumb);
console.log(`\n--- MISSING BreadcrumbList Schema (${noBreadcrumb.length} pages) ---`);
console.log('  Total: ' + noBreadcrumb.length + ' pages');

// Also show a scoring table for all pages - generate a full audit CSV
let csv = 'file,title_len,desc_len,has_canonical,h1_count,has_schema,has_faq,has_og,has_breadcrumb,issue_score\n';
for (const r of results) {
  let score = 0;
  if (!r.hasHead) score += 10;
  if (r.canonical === 'MISSING') score += 8;
  if (r.descMissing) score += 6;
  if (r.descLen > 0 && r.descLen < 120) score += 3;
  if (r.titleLen > 70) score += 2;
  if (r.h1Count !== 1) score += 5;
  if (!r.hasSchema) score += 4;
  if (!r.hasFAQ) score += 3;
  if (!r.hasOgTitle) score += 2;
  if (!r.hasBreadcrumb) score += 2;
  
  csv += `"${r.file}",${r.titleLen},${r.descLen},${r.canonical !== 'MISSING' ? 1 : 0},${r.h1Count},${r.hasSchema ? 1 : 0},${r.hasFAQ ? 1 : 0},${r.hasOgTitle ? 1 : 0},${r.hasBreadcrumb ? 1 : 0},${score}\n`;
}
fs.writeFileSync(path.join(__dirname, 'seo_audit_full.csv'), csv);
console.log('\n\nFull CSV audit saved to scripts/seo_audit_full.csv');
console.log('Total pages audited: ' + results.length);
