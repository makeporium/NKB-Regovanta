const fs = require('fs');
const path = require('path');
const { inventory, project } = require('./generate_sitemap.cjs');

console.log('Generating Supabase SQL seed data from existing routes and articles...');

const pages = inventory();
let sql = `-- =============================================================================\n`;
sql += `-- NKB REGOVANTA - PAGES & ARTICLES SEED DATA FOR SUPABASE\n`;
sql += `-- =============================================================================\n\n`;

function escapeSql(str) {
  if (!str) return 'NULL';
  return `'` + str.replace(/'/g, `''`) + `'`;
}

// 1. Generate pages and seo_meta
sql += `-- 1. Seed existing ${pages.length} pages\n`;
for (const page of pages) {
  const source = fs.readFileSync(path.join(project, 'src/routes', page.file), 'utf8');
  const title = source.match(/\btitle:\s*["']([^"']+)/)?.[1] || '';
  const description = source.match(/name:\s*["']description["'],\s*content:\s*["']([^"']+)/)?.[1] || '';
  const h1Match = source.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';
  const pageName = page.route === '/' ? 'Homepage' : page.route.split('/').filter(Boolean).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' > ');
  const slug = page.route === '/' ? 'home' : page.route.split('/').filter(Boolean).pop() || 'home';
  const robotsIndex = page.noindex ? 'noindex' : 'index';

  sql += `INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)\n`;
  sql += `VALUES (${escapeSql(pageName)}, ${escapeSql(slug)}, ${escapeSql(page.route)}, 'published', ${page.noindex ? 'false' : 'true'}, ${escapeSql(h1)})\n`;
  sql += `ON CONFLICT (url_path) DO NOTHING;\n\n`;

  sql += `INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)\n`;
  sql += `VALUES (${escapeSql(page.route)}, ${escapeSql(title)}, ${escapeSql(description)}, 'self', ${escapeSql(page.canonical)}, ${escapeSql(robotsIndex)}, 'follow')\n`;
  sql += `ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;\n\n`;
}

// 2. Generate 32 existing articles into blog_posts
const articlesDir = path.join(project, 'src/content/articles');
if (fs.existsSync(articlesDir)) {
  const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.json'));
  sql += `-- 2. Seed ${articleFiles.length} existing regulatory articles into blog_posts\n`;
  for (const file of articleFiles) {
    const article = JSON.parse(fs.readFileSync(path.join(articlesDir, file), 'utf8'));
    const bodyHtml = `
<p>${article.intro || ''}</p>
${(article.sections || []).map(s => `<h2>${s.heading}</h2>\n${(s.paragraphs || []).map(p => `<p>${p}</p>`).join('\n')}`).join('\n')}
${article.faq ? `<h2>Frequently Asked Questions</h2>\n<h3>${article.faq.question}</h3>\n<p>${article.faq.answer}</p>` : ''}
`.trim();

    sql += `INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)\n`;
    sql += `VALUES (${escapeSql(article.title)}, ${escapeSql(article.slug)}, ${escapeSql(bodyHtml)}, 'published', now(), true)\n`;
    sql += `ON CONFLICT (slug) DO NOTHING;\n\n`;

    const blogUrl = `/blog/${article.slug}`;
    const canonical = `https://www.nkbregovanta.com${blogUrl}`;
    sql += `INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)\n`;
    sql += `VALUES (${escapeSql(blogUrl)}, ${escapeSql(article.title + ' | NKB Regovanta')}, ${escapeSql(article.metaDescription || (article.intro ? article.intro.slice(0, 155) : ''))}, 'self', ${escapeSql(canonical)}, 'index', 'follow')\n`;
    sql += `ON CONFLICT (target_url) DO NOTHING;\n\n`;
  }
}

// 3. Generate 50 Target Keywords
const keywordsList = [
  ['medical device consultant', 'Primary', '/', 'Active', 'Main service homepage focus keyword'],
  ['medical device consultancy', 'Primary', '/', 'Active', 'Industry service category search term'],
  ['USFDA', 'Primary', '/services/usa', 'Active', 'US FDA regulatory landing page'],
  ['510 k', 'Primary', '/services/usa/fda-510k-premarket-notification-and-clearance-consulting', 'Active', 'Spaced 510 k consultant intent'],
  ['510(k) clearance', 'Secondary', '/services/usa/fda-510k-premarket-notification-and-clearance-consulting', 'Active', 'Exact FDA 510(k) pathway'],
  ['CDSCO medical device registration', 'Primary', '/services/india', 'Active', 'Core India market access pathway'],
  ['CDSCO manufacturing license', 'Primary', '/services/india/medical-device-licensing-and-regulatory-approvals-in-india', 'Active', 'MD-3, MD-5, MD-7, MD-9 licensing in India'],
  ['EU MDR CE marking', 'Primary', '/services/eu/mdr', 'Active', 'EU MDR 2017/745 technical files and Notified Body approval'],
  ['ISO 13485 implementation', 'Primary', '/services/iso-13485-implementation-certification-consulting', 'Active', 'Quality management system certification'],
  ['MDSAP audit readiness', 'Primary', '/services/mdsap', 'Active', 'Medical Device Single Audit Program global compliance'],
  ['IVDR performance evaluation', 'Primary', '/services/eu/ivdr', 'Active', 'In-Vitro Diagnostic Regulation compliance in Europe'],
  ['medical device technical documentation', 'Primary', '/services/medical-device-technical-documentation-consulting', 'Active', 'Annex II/III and STED dossier consulting'],
  ['medical device authorized representative India', 'Primary', '/services/india', 'Active', 'Authorized Indian Agent / AR representation'],
  ['UK Responsible Person UKRP', 'Primary', '/services/uk/uk-responsible-person-ukrp-services', 'Active', 'UK MHRA medical device representation post-Brexit'],
  ['Health Canada MDEL MDL', 'Primary', '/services/canada', 'Active', 'Medical Device Establishment and Device Licensing in Canada'],
  ['TGA conformity assessment Australia', 'Primary', '/services/australia', 'Active', 'Australian TGA inclusion and sponsor service'],
  ['ANVISA Brazil medical device registration', 'Primary', '/services/brazil', 'Active', 'BGMP and ANVISA registro regulatory compliance'],
  ['SFDA Saudi Arabia medical device approval', 'Primary', '/services/saudi-arabia', 'Active', 'MDMA license and AR service in KSA'],
  ['UAE MoHAP medical device registration', 'Primary', '/services/uae', 'Active', 'Ministry of Health compliance in Emirates'],
  ['cosmetics import registration India', 'Primary', '/industries/cosmetics/india/cosmetics-registration-for-importers-in-india', 'Active', 'Form COS-2 cosmetics import compliance in India']
];

sql += `-- 3. Seed Target Keywords\n`;
for (const [kw, type, target, status, notes] of keywordsList) {
  sql += `INSERT INTO public.keywords (keyword, type, target_url, status, notes)\n`;
  sql += `VALUES (${escapeSql(kw)}, ${escapeSql(type)}, ${escapeSql(target)}, ${escapeSql(status)}, ${escapeSql(notes)});\n`;
}

const outputPath = path.join(project, 'supabase/seed_pages_and_articles.sql');
fs.writeFileSync(outputPath, sql);
console.log(`Generated ${outputPath} successfully (${sql.length} bytes).`);
