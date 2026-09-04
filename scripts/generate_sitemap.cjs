const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

// Layout routes that do not have their own page content (they only render Outlet)
const layoutRoutes = new Set([
  'case-studies.tsx',
  'services.australia.tsx',
  'services.brazil.tsx',
  'services.canada.tsx',
  'services.eu.tsx',
  'services.india.tsx',
  'services.mdsap.tsx',
  'services.new-zealand.tsx',
  'services.saudi-arabia.tsx',
  'services.uae.tsx',
  'services.uk.tsx',
  'services.usa.tsx'
]);

const files = fs.readdirSync(routesDir);
const urls = [];
const today = new Date().toISOString().split('T')[0];

for (const file of files) {
  if (!file.endsWith('.tsx') || file.startsWith('__') || layoutRoutes.has(file)) continue;

  // Convert file name to URL path
  let routePath = file.replace('.tsx', '').replace(/_\./g, '/').replace(/\./g, '/');
  if (routePath === 'index') routePath = '';
  if (routePath.endsWith('/index')) routePath = routePath.replace('/index', '');

  const loc = 'https://www.nkbregovanta.com' + (routePath ? '/' + routePath : '');

  // Determine priority and changefreq based on business value
  let priority = '0.75';
  let changefreq = 'weekly';

  if (routePath === '') {
    priority = '1.0';
    changefreq = 'daily';
  } else if (
    routePath === 'services/india/medical-devices' ||
    routePath === 'services/india/predicate-devices' ||
    routePath === 'services/india/ivd' ||
    routePath === 'services/usa/510k' ||
    routePath === 'services/usa/e-star' ||
    routePath === 'services/usa/agent-service' ||
    routePath === 'services/eu/mdr' ||
    routePath === 'services/eu/ivdr' ||
    routePath === 'services/iso-13485' ||
    routePath === 'services/mdsap'
  ) {
    priority = '0.9';
    changefreq = 'weekly';
  } else if (
    routePath.startsWith('services/india') ||
    routePath.startsWith('services/usa') ||
    routePath.startsWith('services/eu') ||
    routePath.startsWith('services/uk') ||
    routePath.startsWith('services/mdsap')
  ) {
    priority = '0.85';
    changefreq = 'weekly';
  } else if (routePath === 'ai-news' || routePath === 'regulatory-updates') {
    priority = '0.8';
    changefreq = 'daily';
  } else if (routePath === 'contact' || routePath === 'about') {
    priority = '0.7';
    changefreq = 'monthly';
  }

  urls.push({ loc, priority, changefreq });
}

// Sort alphabetically by loc
urls.sort((a, b) => a.loc.localeCompare(b.loc));

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;

for (const u of urls) {
  xml += `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>\n`;
}

xml += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
