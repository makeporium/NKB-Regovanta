/**
 * GENERATE COMPLETE PAGE-BY-PAGE SEO INVENTORY MARKDOWN FILE
 * Parses all 241 route files in src/routes/
 * Extracts:
 * - Route Path
 * - File Name
 * - Page Title (<title>)
 * - Primary H1 Heading
 * - Meta Keywords
 * - Meta Description
 * - OG Title
 * - Canonical Link
 */
const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');
const outputPath = path.join(__dirname, '../PAGE_SEO_INVENTORY.md');
const BASE_URL = 'https://www.nkbregovanta.com';

const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && !f.startsWith('__'));
console.log(`Found ${files.length} route files.`);

function cleanText(str) {
  if (!str) return '';
  return str
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]+\}/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function extractData(fileName, content) {
  // Convert filename to Route URL
  let routePath = fileName.replace('.tsx', '').replace(/_\./g, '/').replace(/\./g, '/');
  if (routePath === 'index') routePath = '';
  if (routePath.endsWith('/index')) routePath = routePath.replace('/index', '');
  const url = BASE_URL + (routePath ? '/' + routePath : '');

  // Extract Title
  let title = '';
  const titleMatches = [
    content.match(/title:\s*"([^"]+)"/),
    content.match(/title:\s*'([^']+)'/),
    content.match(/title:\s*\n\s*"([^"]+)"/),
    content.match(/title:\s*\n\s*'([^']+)'/)
  ];
  for (const m of titleMatches) {
    if (m && m[1]) {
      title = cleanText(m[1]);
      break;
    }
  }

  // Extract Meta Description
  let description = '';
  const descMatches = [
    content.match(/name:\s*["']description["'],\s*content:\s*"([\s\S]*?)"/),
    content.match(/name:\s*["']description["'],\s*content:\s*'([\s\S]*?)'/),
    content.match(/name:\s*["']description["'],\s*\n\s*content:\s*"([\s\S]*?)"/),
    content.match(/name:\s*["']description["'],\s*\n\s*content:\s*'([\s\S]*?)'/)
  ];
  for (const m of descMatches) {
    if (m && m[1]) {
      description = cleanText(m[1]);
      break;
    }
  }

  // Extract Meta Keywords
  let keywords = '';
  const kwMatches = [
    content.match(/name:\s*["']keywords["'],\s*content:\s*"([\s\S]*?)"/),
    content.match(/name:\s*["']keywords["'],\s*content:\s*'([\s\S]*?)'/),
    content.match(/name:\s*["']keywords["'],\s*\n\s*content:\s*"([\s\S]*?)"/),
    content.match(/name:\s*["']keywords["'],\s*\n\s*content:\s*'([\s\S]*?)'/)
  ];
  for (const m of kwMatches) {
    if (m && m[1]) {
      keywords = cleanText(m[1]);
      break;
    }
  }

  // Extract OG Title
  let ogTitle = '';
  const ogTitleMatches = [
    content.match(/property:\s*["']og:title["'],\s*content:\s*"([\s\S]*?)"/),
    content.match(/property:\s*["']og:title["'],\s*content:\s*'([\s\S]*?)'/)
  ];
  for (const m of ogTitleMatches) {
    if (m && m[1]) {
      ogTitle = cleanText(m[1]);
      break;
    }
  }

  // Extract Canonical
  let canonical = '';
  const canMatches = [
    content.match(/rel:\s*["']canonical["'],\s*href:\s*"([^"]+)"/),
    content.match(/rel:\s*["']canonical["'],\s*href:\s*'([^']+)'/)
  ];
  for (const m of canMatches) {
    if (m && m[1]) {
      canonical = m[1].trim();
      break;
    }
  }

  // Extract H1 Tag
  let h1 = '';
  if (fileName === 'ai-news.tsx' || fileName === 'regulatory-updates.tsx') {
    h1 = 'Global Regulatory Intelligence Feed';
  } else {
    const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (h1Match) {
      h1 = cleanText(h1Match[1]);
    } else {
      // Check if layout route (renders Outlet)
      if (content.includes('<Outlet') || content.includes('<Outlet/>')) {
        h1 = '[Layout Route — renders <Outlet />]';
      } else {
        const ariaHeading = content.match(/role=["']heading["'][^>]*aria-level=\{?1\}?[^>]*>([\s\S]*?)<\/(?:p|div|h1)>/i);
        if (ariaHeading) {
          h1 = cleanText(ariaHeading[1]);
        } else {
          h1 = '[No H1 tag detected in component]';
        }
      }
    }
  }

  return {
    file: fileName,
    routePath,
    url,
    title: title || '[Missing Title]',
    h1: h1 || '[No H1 Content]',
    keywords: keywords || '[No Keywords Defined]',
    description: description || '[No Description Defined]',
    ogTitle: ogTitle || title || '[No OG Title]',
    canonical: canonical || url
  };
}

// Categorize files
function getCategory(file) {
  if (file === 'index.tsx') return 'Home';
  if (['about.tsx', 'contact.tsx', 'privacy-policy.tsx', 'terms.tsx'].includes(file)) return 'Core & Corporate';
  if (file === 'ai-news.tsx' || file === 'regulatory-updates.tsx') return 'AI Regulatory Feeds';
  if (file.startsWith('services.india.')) return 'India CDSCO Regulatory Services';
  if (file.startsWith('services.usa.')) return 'US FDA Regulatory Services';
  if (file.startsWith('services.eu.')) return 'European Union (EU MDR / IVDR)';
  if (file.startsWith('services.uk.')) return 'United Kingdom (MHRA / UKCA)';
  if (file.startsWith('services.mdsap.')) return 'MDSAP Single Audit Program';
  if (file.startsWith('services.australia.')) return 'Australia TGA Market Access';
  if (file.startsWith('services.brazil.')) return 'Brazil ANVISA Market Access';
  if (file.startsWith('services.canada.')) return 'Health Canada Medical Devices';
  if (file.startsWith('services.saudi-arabia.')) return 'Saudi Arabia SFDA Compliance';
  if (file.startsWith('services.uae.')) return 'UAE MOHAP Regulatory Affairs';
  if (file.startsWith('services.new-zealand.')) return 'New Zealand Medsafe WAND';
  if (file.startsWith('services.')) return 'Specialized Regulatory & Quality Services';
  if (file.startsWith('industries.')) return 'Industry Verticals';
  if (file.startsWith('case-studies.')) return 'Case Studies';
  return 'Other Pages';
}

const parsedPages = files.map(f => {
  const content = fs.readFileSync(path.join(routesDir, f), 'utf-8');
  return {
    ...extractData(f, content),
    category: getCategory(f)
  };
});

// Group by category
const categories = [
  'Home',
  'Core & Corporate',
  'AI Regulatory Feeds',
  'India CDSCO Regulatory Services',
  'US FDA Regulatory Services',
  'European Union (EU MDR / IVDR)',
  'United Kingdom (MHRA / UKCA)',
  'MDSAP Single Audit Program',
  'Australia TGA Market Access',
  'Brazil ANVISA Market Access',
  'Health Canada Medical Devices',
  'Saudi Arabia SFDA Compliance',
  'UAE MOHAP Regulatory Affairs',
  'New Zealand Medsafe WAND',
  'Specialized Regulatory & Quality Services',
  'Industry Verticals',
  'Case Studies',
  'Other Pages'
];

let md = `# NKB Regovanta — Complete Page-by-Page SEO Inventory

> **Total Pages Audited:** ${parsedPages.length}  
> **Purpose:** Comprehensive catalog of all on-page SEO assets (**Page Title**, **H1 Heading**, **Meta Keywords**, **Meta Description**, **OpenGraph Title**, and **Canonical URL**) across all active routes.  
> **Instructions for Review:** Review the target keywords, titles, and H1 tags below. If you want to change any specific keyword, title, or description, simply reference the **Route URL** or **File Name** and specify your desired adjustment.

---

## Table of Contents
`;

categories.forEach(cat => {
  const count = parsedPages.filter(p => p.category === cat).length;
  if (count > 0) {
    const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    md += `- [${cat} (${count} pages)](#${slug})\n`;
  }
});

md += `\n---\n\n`;

let pageNumber = 1;

categories.forEach(cat => {
  const items = parsedPages.filter(p => p.category === cat);
  if (items.length === 0) return;

  const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  md += `## ${cat}\n\n`;

  items.forEach(p => {
    md += `### ${pageNumber}. ${p.title.split('|')[0].trim()}\n\n`;
    md += `- **Route URL:** [\`${p.url}\`](${p.url})\n`;
    md += `- **File:** \`src/routes/${p.file}\`\n`;
    md += `- **Page Title (\`<title>\`):** \`${p.title}\`\n`;
    md += `- **H1 Heading:** \`${p.h1}\`\n`;
    md += `- **Meta Keywords:** \`${p.keywords}\`\n`;
    md += `- **Meta Description:** ${p.description}\n`;
    md += `- **OG Title:** \`${p.ogTitle}\`\n`;
    md += `- **Canonical Link:** \`${p.canonical}\`\n\n`;
    md += `---\n\n`;
    pageNumber++;
  });
});

fs.writeFileSync(outputPath, md, 'utf-8');
console.log(`Generated ${outputPath} with ${parsedPages.length} pages.`);
