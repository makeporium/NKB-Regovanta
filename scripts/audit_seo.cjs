const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const sitemapUrls = new Set();
const sitemapMatches = sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g);
for (const match of sitemapMatches) {
  sitemapUrls.add(match[1].trim());
}

const files = fs.readdirSync(routesDir);
const report = {
  totalRouteFiles: 0,
  routesWithHead: 0,
  routesWithoutHead: 0,
  routesWithCanonical: 0,
  routesWithoutCanonical: 0,
  canonicalPointingToRoot: [],
  missingFromSitemap: [],
  routesWithDuplicateTitles: {},
  routesMissingH1: [],
  routesWithMultipleH1: [],
  titles: {},
  routesList: []
};

for (const file of files) {
  if (!file.endsWith('.tsx') || file.startsWith('__')) continue;
  report.totalRouteFiles++;

  const content = fs.readFileSync(path.join(routesDir, file), 'utf8');
  
  // Calculate expected URL
  let routePath = file.replace('.tsx', '').replace(/_\./g, '/').replace(/\./g, '/');
  if (routePath === 'index') routePath = '';
  if (routePath.endsWith('/index')) routePath = routePath.replace('/index', '');
  const pageUrl = 'https://www.nkbregovanta.com' + (routePath ? '/' + routePath : '');

  // Check sitemap
  if (!sitemapUrls.has(pageUrl) && !sitemapUrls.has(pageUrl + '/')) {
    report.missingFromSitemap.push({ file, pageUrl });
  }

  // Check head
  const hasHead = content.includes('head: () =>') || content.includes('head:');
  if (hasHead) {
    report.routesWithHead++;
  } else {
    report.routesWithoutHead++;
  }

  // Check canonical
  const canonicalMatch = content.match(/rel:\s*["']canonical["'],\s*href:\s*["']([^"']+)["']/);
  if (canonicalMatch) {
    report.routesWithCanonical++;
    const href = canonicalMatch[1];
    if ((href === 'https://www.nkbregovanta.com' || href === 'https://www.nkbregovanta.com/') && routePath !== '') {
      report.canonicalPointingToRoot.push({ file, pageUrl, canonical: href });
    }
  } else {
    report.routesWithoutCanonical++;
  }

  // Check title
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) {
    const title = titleMatch[1];
    if (!report.titles[title]) report.titles[title] = [];
    report.titles[title].push(file);
  }

  // Check H1 count in JSX
  const h1Matches = content.match(/<h1[\s>]/g) || [];
  if (h1Matches.length === 0) {
    report.routesMissingH1.push(file);
  } else if (h1Matches.length > 1) {
    report.routesWithMultipleH1.push({ file, count: h1Matches.length });
  }

  report.routesList.push({ file, pageUrl, hasHead, hasCanonical: !!canonicalMatch });
}

console.log('--- SUMMARY ---');
console.log('Total Route Files:', report.totalRouteFiles);
console.log('Routes with head():', report.routesWithHead);
console.log('Routes without head():', report.routesWithoutHead);
console.log('Routes with canonical:', report.routesWithCanonical);
console.log('Routes without canonical:', report.routesWithoutCanonical);
console.log('Canonical pointing to root (excluding homepage):', report.canonicalPointingToRoot.length);
console.log('Missing from sitemap.xml:', report.missingFromSitemap.length);
console.log('Routes missing H1:', report.routesMissingH1.length);
console.log('Routes with multiple H1:', report.routesWithMultipleH1.length);

const duplicateTitles = Object.entries(report.titles).filter(([k, v]) => v.length > 1);
console.log('Duplicate Titles count:', duplicateTitles.length);
if (duplicateTitles.length > 0) {
  console.log('Top duplicate titles:', duplicateTitles.slice(0, 5));
}
