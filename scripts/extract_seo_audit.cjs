/**
 * SEO Audit Extractor
 * Scans every .tsx route file, extracts all SEO-relevant metadata,
 * and outputs a structured JSON for analysis.
 */
const fs = require('fs');
const path = require('path');

const ROUTES_DIR = path.join(__dirname, '..', 'src', 'routes');

function extractSEO(filePath, content) {
  const fileName = path.basename(filePath);
  const result = {
    file: fileName,
    filePath: `src/routes/${fileName}`,
    fileSize: content.length,
  };

  // Determine route URL from filename
  // e.g., services.usa.510k.tsx -> /services/usa/510k
  // index.tsx -> /
  // services.usa.index.tsx -> /services/usa
  let routePart = fileName.replace(/\.tsx$/, '');
  if (routePart === 'index') {
    result.routeUrl = '/';
  } else {
    routePart = routePart.replace(/\.index$/, '');
    routePart = routePart.replace(/_\./g, '.').replace(/_$/g, '');
    result.routeUrl = '/' + routePart.replace(/\./g, '/').replace(/\/+/g, '/');
  }

  // Check if this is a layout route (has <Outlet />)
  result.isLayoutRoute = content.includes('<Outlet') || content.includes('Outlet />');
  result.hasHeadFunction = /head\s*[:=]\s*\(\s*\)\s*=>/.test(content) || /head\s*\(\s*\)/.test(content);

  // Extract title
  const titleMatch = content.match(/\{\s*title:\s*["'`]([^"'`]+)["'`]\s*\}/);
  if (titleMatch) {
    result.title = titleMatch[1];
  } else {
    // Try alternative patterns
    const altTitleMatch = content.match(/meta:\s*\[\s*\{\s*title:\s*["'`]([^"'`]+)["'`]/);
    if (altTitleMatch) result.title = altTitleMatch[1];
  }

  // Extract meta description
  const descMatch = content.match(/name:\s*["']description["']\s*,\s*content:\s*\n?\s*["'`]([^"'`]+)["'`]/);
  if (descMatch) {
    result.metaDescription = descMatch[1];
    result.metaDescriptionLength = descMatch[1].length;
  }

  // Extract meta keywords
  const keywordsMatch = content.match(/name:\s*["']keywords["']\s*,\s*content:\s*\n?\s*["'`]([^"'`]+)["'`]/);
  if (keywordsMatch) {
    result.metaKeywords = keywordsMatch[1];
    result.hasMetaKeywords = true;
  } else {
    result.hasMetaKeywords = false;
  }

  // Extract OG title
  const ogTitleMatch = content.match(/property:\s*["']og:title["']\s*,\s*content:\s*["'`]([^"'`]+)["'`]/);
  if (ogTitleMatch) result.ogTitle = ogTitleMatch[1];

  // Extract OG description
  const ogDescMatch = content.match(/property:\s*["']og:description["']\s*,\s*content:\s*\n?\s*["'`]([^"'`]+)["'`]/);
  if (ogDescMatch) result.ogDescription = ogDescMatch[1];

  // Extract OG image
  const ogImgMatch = content.match(/property:\s*["']og:image["']\s*,\s*content:\s*["'`]([^"'`]+)["'`]/);
  if (ogImgMatch) result.ogImage = ogImgMatch[1];

  // Extract OG url
  const ogUrlMatch = content.match(/property:\s*["']og:url["']\s*,\s*content:\s*["'`]([^"'`]+)["'`]/);
  if (ogUrlMatch) result.ogUrl = ogUrlMatch[1];

  // Extract canonical
  const canonicalMatch = content.match(/rel:\s*["']canonical["']\s*,\s*href:\s*["'`]([^"'`]+)["'`]/);
  if (canonicalMatch) result.canonical = canonicalMatch[1];

  // Extract twitter card
  const twitterCardMatch = content.match(/name:\s*["']twitter:card["']\s*,\s*content:\s*["'`]([^"'`]+)["'`]/);
  if (twitterCardMatch) result.twitterCard = twitterCardMatch[1];

  // Extract H1
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  if (h1Match) {
    result.h1 = h1Match[1]
      .replace(/<[^>]+>/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/\{[^}]+\}/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  } else if (content.includes('<RegulatoryDashboard')) {
    const dashTitleMatch = content.match(/<RegulatoryDashboard[^>]*title=["']([^"']+)["']/);
    result.h1 = dashTitleMatch ? dashTitleMatch[1] : 'Global Regulatory Intelligence Feed';
  }

  // Extract H2s
  const h2Matches = content.matchAll(/<h2[^>]*>([^<]+(?:<[^/][^>]*>[^<]*<\/[^>]+>)*[^<]*)<\/h2>/g);
  result.h2s = [];
  for (const m of h2Matches) {
    const cleaned = m[1].replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\{[^}]+\}/g, '').trim();
    if (cleaned && !result.h2s.includes(cleaned)) {
      result.h2s.push(cleaned);
    }
  }

  // Check for structured data / JSON-LD
  result.hasJsonLd = content.includes('application/ld+json');

  // Check for schema type
  if (result.hasJsonLd) {
    const schemaTypeMatch = content.match(/"@type"\s*:\s*"([^"]+)"/);
    if (schemaTypeMatch) result.schemaType = schemaTypeMatch[1];
  }

  // Check for breadcrumbs
  result.hasBreadcrumbs = content.includes('BreadcrumbList') || content.includes('breadcrumb');

  // Check for noindex
  result.hasNoindex = content.includes('noindex');

  // Check for internal links to services
  const linkMatches = content.matchAll(/to=["']([^"']+)["']/g);
  result.internalLinks = [];
  for (const m of linkMatches) {
    if (m[1].startsWith('/') && !result.internalLinks.includes(m[1])) {
      result.internalLinks.push(m[1]);
    }
  }
  result.internalLinkCount = result.internalLinks.length;

  // Check image alt texts
  const imgAltMatches = content.matchAll(/alt=["']([^"']+)["']/g);
  result.imageAlts = [];
  for (const m of imgAltMatches) {
    result.imageAlts.push(m[1]);
  }

  return result;
}

// Main
const files = fs.readdirSync(ROUTES_DIR).filter(f => f.endsWith('.tsx') && f !== '__root.tsx');
const results = [];

for (const file of files) {
  const filePath = path.join(ROUTES_DIR, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  results.push(extractSEO(filePath, content));
}

// Sort by route URL
results.sort((a, b) => a.routeUrl.localeCompare(b.routeUrl));

// Output
const outputPath = path.join(__dirname, '..', 'seo_audit_data.json');
fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf-8');
console.log(`Extracted SEO data from ${results.length} files.`);
console.log(`Output: ${outputPath}`);

// Quick stats
const withTitle = results.filter(r => r.title);
const withDesc = results.filter(r => r.metaDescription);
const withKeywords = results.filter(r => r.hasMetaKeywords);
const withH1 = results.filter(r => r.h1);
const withCanonical = results.filter(r => r.canonical);
const withJsonLd = results.filter(r => r.hasJsonLd);
const layoutRoutes = results.filter(r => r.isLayoutRoute && !r.h1);
const noHead = results.filter(r => !r.hasHeadFunction);

console.log(`\n--- Quick Stats ---`);
console.log(`Total files: ${results.length}`);
console.log(`With title: ${withTitle.length}`);
console.log(`With meta description: ${withDesc.length}`);
console.log(`With meta keywords: ${withKeywords.length}`);
console.log(`With H1: ${withH1.length}`);
console.log(`With canonical: ${withCanonical.length}`);
console.log(`With JSON-LD: ${withJsonLd.length}`);
console.log(`Layout routes (no H1): ${layoutRoutes.length}`);
console.log(`No head function: ${noHead.length}`);
