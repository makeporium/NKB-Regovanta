const fs = require('fs');
const path = require('path');
const routesDir = path.join(__dirname, '../src/routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__'));

// Build complete per-page analysis
const results = [];

for (const file of files) {
  const fp = path.join(routesDir, file);
  const content = fs.readFileSync(fp, 'utf8');

  const hasHead = content.includes('head:');
  const hasKw = content.includes('"keywords"') || content.includes("'keywords'");
  const hasOgTitle = content.includes('og:title');
  const hasOgDesc = content.includes('og:description');
  const hasOgUrl = content.includes('og:url');
  const hasTwitterTitle = content.includes('twitter:title');
  const hasBreadcrumb = content.includes('BreadcrumbList');
  const hasSchema = content.includes('ld+json');
  const hasFAQ = content.includes('FAQPage');
  const canonical = content.match(/rel: "canonical", href: "([^"]+)"/) 
    ? content.match(/rel: "canonical", href: "([^"]+)"/)[1] 
    : (content.match(/rel: 'canonical', href: '([^']+)'/) ? content.match(/rel: 'canonical', href: '([^']+)'/)[1] : 'MISSING');
  const h1Count = (content.match(/<h1[\s>]/g) || []).length;

  // Extract title
  const titleMatch = content.match(/\{ title: "([^"]+)" \}/) || content.match(/\{ title: '([^']+)' \}/);
  const title = titleMatch ? titleMatch[1] : 'MISSING';
  
  // description length estimate
  const descMatch = content.match(/name: "description",\s*\n\s*content:\s*"([^"]+)"/) 
    || content.match(/name: 'description',\s*\n\s*content:\s*'([^']+)'/)
    || content.match(/name: "description", content: "([^"]+)"/)
    || content.match(/name: 'description', content: '([^']+)'/);
  const descLen = descMatch ? descMatch[1].length : 0;

  const issues = [];
  if (!hasHead) issues.push('NO_HEAD');
  if (canonical === 'MISSING') issues.push('NO_CANONICAL');
  if (descLen === 0) issues.push('NO_DESCRIPTION');
  if (descLen > 0 && descLen < 120) issues.push('SHORT_DESCRIPTION');
  if (title.length > 70) issues.push('TITLE_TOO_LONG');
  if (title === 'MISSING') issues.push('NO_TITLE');
  if (h1Count > 1) issues.push('DUPLICATE_H1');
  if (h1Count === 0) issues.push('NO_H1');
  if (!hasKw) issues.push('NO_KEYWORDS');
  if (!hasOgTitle) issues.push('NO_OG_TITLE');
  if (!hasTwitterTitle) issues.push('NO_TWITTER_TITLE');
  if (!hasBreadcrumb) issues.push('NO_BREADCRUMB');
  if (!hasSchema) issues.push('NO_SCHEMA');
  if (!hasFAQ) issues.push('NO_FAQ_SCHEMA');

  results.push({ file, title, titleLen: title.length, descLen, canonical, h1Count, hasKw, hasOgTitle, hasTwitterTitle, hasBreadcrumb, hasSchema, hasFAQ, issues });
}

// Save to file
const output = results.map(r => ({
  file: r.file,
  title: r.title.substring(0, 80),
  titleLen: r.titleLen,
  descLen: r.descLen,
  canonical: r.canonical,
  h1Count: r.h1Count,
  hasKw: r.hasKw,
  hasOgTitle: r.hasOgTitle,
  hasTwitter: r.hasTwitterTitle,
  hasBreadcrumb: r.hasBreadcrumb,
  hasSchema: r.hasSchema,
  hasFAQ: r.hasFAQ,
  issueCount: r.issues.length,
  issues: r.issues.join(' | ')
}));

fs.writeFileSync(path.join(__dirname, 'full_seo_report.json'), JSON.stringify(output, null, 2));

// Summary
const criticalPages = results.filter(r => r.issues.includes('NO_HEAD') || r.issues.includes('NO_CANONICAL'));
const missingDesc = results.filter(r => r.issues.includes('NO_DESCRIPTION'));
const shortDesc = results.filter(r => r.issues.includes('SHORT_DESCRIPTION'));
const noKw = results.filter(r => r.issues.includes('NO_KEYWORDS') && !r.issues.includes('NO_HEAD'));
const noOg = results.filter(r => r.issues.includes('NO_OG_TITLE') && !r.issues.includes('NO_HEAD'));
const noTwitter = results.filter(r => r.issues.includes('NO_TWITTER_TITLE') && !r.issues.includes('NO_HEAD'));
const noBreadcrumb = results.filter(r => r.issues.includes('NO_BREADCRUMB'));
const noSchema = results.filter(r => r.issues.includes('NO_SCHEMA'));
const dupH1 = results.filter(r => r.issues.includes('DUPLICATE_H1'));
const noH1 = results.filter(r => r.issues.includes('NO_H1'));

console.log('=== COMPLETE SEO AUDIT SUMMARY ===');
console.log('\nTotal pages:', results.length);
console.log('\n[CRITICAL] Missing head() or canonical:', criticalPages.length, 'pages');
console.log('[CRITICAL] Missing meta description:', missingDesc.length, 'pages');
console.log('[ERROR] Short description (<120 chars):', shortDesc.length, 'pages');
console.log('[ERROR] Duplicate H1 tags:', dupH1.length, 'pages');
console.log('[ERROR] No H1 tag:', noH1.length, 'pages');
console.log('[WARNING] Missing keywords meta:', noKw.length, 'pages');
console.log('[WARNING] Missing og:title:', noOg.length, 'pages');
console.log('[WARNING] Missing twitter:title:', noTwitter.length, 'pages');
console.log('[WARNING] Missing BreadcrumbList schema:', noBreadcrumb.length, 'pages');
console.log('[WARNING] No structured data (JSON-LD) at all:', noSchema.length, 'pages');
console.log('[INFO] Zero pages have FAQPage schema:', results.filter(r => !r.hasFAQ).length, 'pages');

console.log('\n\n--- PAGES MISSING META DESCRIPTION ---');
missingDesc.forEach(r => console.log('  ' + r.file + ' -> Title: ' + r.title));

console.log('\n--- PAGES WITH SHORT DESCRIPTION ---');
shortDesc.forEach(r => console.log('  ' + r.file + ' (len=' + r.descLen + ') -> ' + r.title));

console.log('\n--- PAGES MISSING OG:TITLE (excluding no-head layouts) ---');
noOg.forEach(r => console.log('  ' + r.file));

console.log('\n--- PAGES MISSING KEYWORDS META (excluding no-head layouts) ---');
noKw.slice(0, 40).forEach(r => console.log('  ' + r.file));
console.log('... and', Math.max(0, noKw.length - 40), 'more');

console.log('\nFull JSON report saved to scripts/full_seo_report.json');
