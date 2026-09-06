/**
 * SEO Audit Analyzer
 * Takes seo_audit_data.json and produces a comprehensive issues report.
 */
const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'seo_audit_data.json'), 'utf-8'));

const issues = {
  critical: [],
  high: [],
  medium: [],
  low: [],
  info: [],
};

// ═══════════════════════════════════════════════════════════════
// 1. DUPLICATE / COMPETING ROUTES
// ═══════════════════════════════════════════════════════════════
const routeMap = {};
for (const page of data) {
  if (page.isLayoutRoute && !page.hasHeadFunction) continue;
  if (!routeMap[page.routeUrl]) routeMap[page.routeUrl] = [];
  routeMap[page.routeUrl].push(page);
}
for (const [url, pages] of Object.entries(routeMap)) {
  if (pages.length > 1) {
    issues.critical.push({
      type: 'DUPLICATE_ROUTE',
      url,
      files: pages.map(p => p.filePath),
      titles: pages.map(p => p.title),
      detail: `${pages.length} files resolve to the same URL "${url}". This causes route conflicts and unpredictable rendering.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 2. LAYOUT ROUTES WITHOUT H1 / WITH USELESS H1
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (page.isLayoutRoute && page.hasHeadFunction && !page.h1) {
    issues.critical.push({
      type: 'LAYOUT_ROUTE_NO_H1',
      url: page.routeUrl,
      file: page.filePath,
      title: page.title,
      detail: `Layout route renders <Outlet /> and defines head metadata but has no H1 heading. Google sees a page with a title but no primary heading.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 3. CANONICAL CONFLICTS
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.canonical) continue;
  const expectedCanonical = `https://www.nkbregovanta.com${page.routeUrl === '/' ? '' : page.routeUrl}`;
  if (page.canonical !== expectedCanonical) {
    // Check if it's pointing to a different page
    const isPointingElsewhere = !page.canonical.endsWith(page.routeUrl) && page.routeUrl !== '/';
    if (isPointingElsewhere) {
      issues.critical.push({
        type: 'CANONICAL_MISMATCH',
        url: page.routeUrl,
        file: page.filePath,
        canonical: page.canonical,
        expected: expectedCanonical,
        detail: `Canonical points to "${page.canonical}" instead of self-referencing. This tells Google this page is a duplicate of another.`,
      });
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// 4. DUPLICATE H1 HEADINGS
// ═══════════════════════════════════════════════════════════════
const h1Map = {};
for (const page of data) {
  if (!page.h1) continue;
  const normalizedH1 = page.h1.toLowerCase().trim();
  if (!h1Map[normalizedH1]) h1Map[normalizedH1] = [];
  h1Map[normalizedH1].push(page);
}
for (const [h1, pages] of Object.entries(h1Map)) {
  if (pages.length > 1) {
    issues.high.push({
      type: 'DUPLICATE_H1',
      h1: pages[0].h1,
      urls: pages.map(p => p.routeUrl),
      files: pages.map(p => p.filePath),
      detail: `${pages.length} pages share the same H1 "${pages[0].h1}". This creates keyword cannibalization.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 5. DUPLICATE TITLES
// ═══════════════════════════════════════════════════════════════
const titleMap = {};
for (const page of data) {
  if (!page.title) continue;
  const normalizedTitle = page.title.toLowerCase().trim();
  if (!titleMap[normalizedTitle]) titleMap[normalizedTitle] = [];
  titleMap[normalizedTitle].push(page);
}
for (const [title, pages] of Object.entries(titleMap)) {
  if (pages.length > 1) {
    issues.high.push({
      type: 'DUPLICATE_TITLE',
      title: pages[0].title,
      urls: pages.map(p => p.routeUrl),
      files: pages.map(p => p.filePath),
      detail: `${pages.length} pages share the same <title> "${pages[0].title}". Google may de-duplicate these in search results.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 6. TITLE LENGTH ISSUES
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.title) continue;
  if (page.title.length > 60) {
    issues.medium.push({
      type: 'TITLE_TOO_LONG',
      url: page.routeUrl,
      file: page.filePath,
      title: page.title,
      length: page.title.length,
      detail: `Title is ${page.title.length} chars (recommended: ≤60). Google will truncate it in search results.`,
    });
  }
  if (page.title.length < 20) {
    issues.medium.push({
      type: 'TITLE_TOO_SHORT',
      url: page.routeUrl,
      file: page.filePath,
      title: page.title,
      length: page.title.length,
      detail: `Title is only ${page.title.length} chars. Too short to be descriptive.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 7. META DESCRIPTION LENGTH
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.metaDescription) continue;
  if (page.metaDescriptionLength > 160) {
    issues.medium.push({
      type: 'META_DESC_TOO_LONG',
      url: page.routeUrl,
      file: page.filePath,
      length: page.metaDescriptionLength,
      detail: `Meta description is ${page.metaDescriptionLength} chars (recommended: ≤160). Google will truncate.`,
    });
  }
  if (page.metaDescriptionLength < 50) {
    issues.low.push({
      type: 'META_DESC_TOO_SHORT',
      url: page.routeUrl,
      file: page.filePath,
      length: page.metaDescriptionLength,
      detail: `Meta description is only ${page.metaDescriptionLength} chars. Too short to be compelling.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 8. META KEYWORDS PRESENT (WASTE)
// ═══════════════════════════════════════════════════════════════
const pagesWithKeywords = data.filter(p => p.hasMetaKeywords);
if (pagesWithKeywords.length > 0) {
  issues.medium.push({
    type: 'META_KEYWORDS_PRESENT',
    count: pagesWithKeywords.length,
    detail: `${pagesWithKeywords.length} pages use <meta name="keywords">. Google has officially stated it does NOT use this tag for ranking since 2009. Remove to declutter code.`,
    sampleFiles: pagesWithKeywords.slice(0, 5).map(p => p.filePath),
  });
}

// ═══════════════════════════════════════════════════════════════
// 9. TITLE vs H1 MISMATCH (search intent misalignment)
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.title || !page.h1) continue;
  const titleWords = new Set(page.title.toLowerCase().replace(/[|—\-&,]/g, ' ').split(/\s+/).filter(w => w.length > 3));
  const h1Words = new Set(page.h1.toLowerCase().replace(/[|—\-&,]/g, ' ').split(/\s+/).filter(w => w.length > 3));
  const overlap = [...titleWords].filter(w => h1Words.has(w));
  const overlapRatio = titleWords.size > 0 ? overlap.length / titleWords.size : 0;
  
  if (overlapRatio < 0.15 && titleWords.size > 3) {
    issues.medium.push({
      type: 'TITLE_H1_MISMATCH',
      url: page.routeUrl,
      file: page.filePath,
      title: page.title,
      h1: page.h1,
      overlapRatio: Math.round(overlapRatio * 100),
      detail: `Title and H1 have only ${Math.round(overlapRatio * 100)}% keyword overlap. This signals conflicting search intent to Google.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 10. MARKETING H1s (not SEO-optimized)
// ═══════════════════════════════════════════════════════════════
const marketingPatterns = [
  /^let['']?s/i,
  /without borders/i,
  /your.*journey/i,
  /global expertise/i,
  /^welcome/i,
  /together/i,
  /unlock/i,
  /empower/i,
  /transform/i,
  /^discover/i,
];
for (const page of data) {
  if (!page.h1) continue;
  for (const pat of marketingPatterns) {
    if (pat.test(page.h1)) {
      issues.medium.push({
        type: 'MARKETING_H1',
        url: page.routeUrl,
        file: page.filePath,
        h1: page.h1,
        detail: `H1 "${page.h1}" is marketing-oriented and doesn't match typical search queries. Users don't search for "${page.h1}".`,
      });
      break;
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// 11. MISSING JSON-LD / STRUCTURED DATA
// ═══════════════════════════════════════════════════════════════
const importantPages = data.filter(p => 
  p.routeUrl === '/' || 
  p.routeUrl === '/about' || 
  p.routeUrl === '/contact' || 
  p.routeUrl === '/services' ||
  (p.routeUrl.startsWith('/services/') && p.routeUrl.split('/').length === 3 && !p.isLayoutRoute)
);
for (const page of importantPages) {
  if (!page.hasJsonLd) {
    issues.medium.push({
      type: 'MISSING_JSON_LD',
      url: page.routeUrl,
      file: page.filePath,
      detail: `Important page "${page.routeUrl}" has no JSON-LD structured data. This limits rich snippet potential.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 12. MISSING CANONICAL
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.canonical && !page.isLayoutRoute) {
    issues.high.push({
      type: 'MISSING_CANONICAL',
      url: page.routeUrl,
      file: page.filePath,
      detail: `Page has no canonical link. Every indexable page should have a self-referencing canonical.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 13. KEYWORD CANNIBALIZATION DETECTION
// ═══════════════════════════════════════════════════════════════
// Group pages by country/service cluster and check for overlapping titles/H1s
const clusters = {};
for (const page of data) {
  const parts = page.routeUrl.split('/').filter(Boolean);
  if (parts[0] === 'services' && parts.length >= 2) {
    const cluster = parts.slice(0, 2).join('/');
    if (!clusters[cluster]) clusters[cluster] = [];
    clusters[cluster].push(page);
  }
}

for (const [cluster, pages] of Object.entries(clusters)) {
  if (pages.length < 2) continue;
  
  // Check for highly similar titles within the cluster
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      if (!pages[i].title || !pages[j].title) continue;
      const t1Words = new Set(pages[i].title.toLowerCase().replace(/[|—\-&,()\[\]]/g, ' ').split(/\s+/).filter(w => w.length > 3 && w !== 'regovanta'));
      const t2Words = new Set(pages[j].title.toLowerCase().replace(/[|—\-&,()\[\]]/g, ' ').split(/\s+/).filter(w => w.length > 3 && w !== 'regovanta'));
      const overlap = [...t1Words].filter(w => t2Words.has(w));
      const similarity = Math.min(t1Words.size, t2Words.size) > 0 ? overlap.length / Math.min(t1Words.size, t2Words.size) : 0;
      
      if (similarity > 0.7 && overlap.length >= 4) {
        issues.high.push({
          type: 'KEYWORD_CANNIBALIZATION',
          cluster,
          url1: pages[i].routeUrl,
          url2: pages[j].routeUrl,
          title1: pages[i].title,
          title2: pages[j].title,
          h1_1: pages[i].h1,
          h1_2: pages[j].h1,
          similarity: Math.round(similarity * 100),
          overlappingTerms: overlap.join(', '),
          detail: `Pages "${pages[i].routeUrl}" and "${pages[j].routeUrl}" have ${Math.round(similarity * 100)}% title similarity within the same service cluster. They compete for the same keywords.`,
        });
      }
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// 14. DUPLICATE META DESCRIPTIONS
// ═══════════════════════════════════════════════════════════════
const descMap = {};
for (const page of data) {
  if (!page.metaDescription) continue;
  const normalized = page.metaDescription.toLowerCase().trim();
  if (!descMap[normalized]) descMap[normalized] = [];
  descMap[normalized].push(page);
}
for (const [desc, pages] of Object.entries(descMap)) {
  if (pages.length > 1) {
    issues.high.push({
      type: 'DUPLICATE_META_DESCRIPTION',
      description: pages[0].metaDescription.substring(0, 80) + '...',
      urls: pages.map(p => p.routeUrl),
      files: pages.map(p => p.filePath),
      detail: `${pages.length} pages share the identical meta description. Each page needs a unique description.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 15. OG URL MISMATCH
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.ogUrl) continue;
  const expectedUrl = `https://www.nkbregovanta.com${page.routeUrl === '/' ? '' : page.routeUrl}`;
  if (page.ogUrl !== expectedUrl) {
    issues.medium.push({
      type: 'OG_URL_MISMATCH',
      url: page.routeUrl,
      file: page.filePath,
      ogUrl: page.ogUrl,
      expected: expectedUrl,
      detail: `og:url "${page.ogUrl}" doesn't match the page URL. Should be "${expectedUrl}".`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 16. MISSING OG IMAGE
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.ogImage && !page.isLayoutRoute) {
    issues.low.push({
      type: 'MISSING_OG_IMAGE',
      url: page.routeUrl,
      file: page.filePath,
      detail: `No og:image set. Social shares will show no preview image.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 17. TITLE KEYWORD STUFFING
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.title) continue;
  const pipeCount = (page.title.match(/\|/g) || []).length;
  const commaCount = (page.title.match(/,/g) || []).length;
  if (pipeCount >= 3 || commaCount >= 4 || page.title.length > 70) {
    issues.medium.push({
      type: 'TITLE_KEYWORD_STUFFING',
      url: page.routeUrl,
      file: page.filePath,
      title: page.title,
      length: page.title.length,
      detail: `Title appears keyword-stuffed (${pipeCount} pipes, ${commaCount} commas, ${page.title.length} chars). Focus on 1 primary keyword + brand.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// 18. PAGES WITHOUT H1
// ═══════════════════════════════════════════════════════════════
for (const page of data) {
  if (!page.h1 && !page.isLayoutRoute) {
    issues.high.push({
      type: 'MISSING_H1',
      url: page.routeUrl,
      file: page.filePath,
      title: page.title,
      detail: `Page has no H1 heading detected. Every indexable page needs exactly one H1.`,
    });
  }
}

// ═══════════════════════════════════════════════════════════════
// OUTPUT
// ═══════════════════════════════════════════════════════════════
const output = { issues, stats: {} };
output.stats.totalPages = data.length;
output.stats.critical = issues.critical.length;
output.stats.high = issues.high.length;
output.stats.medium = issues.medium.length;
output.stats.low = issues.low.length;
output.stats.info = issues.info.length;
output.stats.totalIssues = issues.critical.length + issues.high.length + issues.medium.length + issues.low.length;

const outputPath = path.join(__dirname, '..', 'seo_issues.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf-8');

console.log(`\n═══════════════════════════════════════════════`);
console.log(`  SEO AUDIT RESULTS`);
console.log(`═══════════════════════════════════════════════`);
console.log(`Total Pages Analyzed: ${data.length}`);
console.log(`🔴 Critical Issues:  ${issues.critical.length}`);
console.log(`🟠 High Issues:      ${issues.high.length}`);
console.log(`🟡 Medium Issues:    ${issues.medium.length}`);
console.log(`⚪ Low Issues:       ${issues.low.length}`);
console.log(`Total Issues:        ${output.stats.totalIssues}`);
console.log(`═══════════════════════════════════════════════\n`);

// Print critical issues
if (issues.critical.length > 0) {
  console.log(`\n🔴 CRITICAL ISSUES:`);
  for (const issue of issues.critical) {
    console.log(`  [${issue.type}] ${issue.detail}`);
    if (issue.files) console.log(`    Files: ${issue.files.join(', ')}`);
    if (issue.file) console.log(`    File: ${issue.file}`);
    console.log('');
  }
}

// Print high issues
if (issues.high.length > 0) {
  console.log(`\n🟠 HIGH ISSUES (first 20):`);
  for (const issue of issues.high.slice(0, 20)) {
    console.log(`  [${issue.type}] ${issue.detail}`);
    if (issue.urls) console.log(`    URLs: ${issue.urls.join(', ')}`);
    if (issue.url1) console.log(`    URL1: ${issue.url1}`);
    if (issue.url2) console.log(`    URL2: ${issue.url2}`);
    console.log('');
  }
}
