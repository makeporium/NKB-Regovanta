const data = require('../seo_issues.json');
const auditData = require('../seo_audit_data.json');

// Title too long - worst offenders
const longTitles = data.issues.medium.filter(x => x.type === 'TITLE_TOO_LONG').sort((a,b) => b.length - a.length);
console.log('=== LONGEST TITLES (top 20) ===\n');
for (const i of longTitles.slice(0, 20)) {
  console.log(i.length + ' chars | ' + i.url + ' | ' + i.title);
}

// Duplicate H1s
console.log('\n=== DUPLICATE H1 ISSUES ===\n');
for (const i of data.issues.high.filter(x => x.type === 'DUPLICATE_H1')) {
  console.log('H1: "' + i.h1 + '"');
  console.log('  Pages:', i.urls.join(', '));
  console.log('');
}

// Missing JSON-LD
console.log('\n=== MISSING JSON-LD ON IMPORTANT PAGES ===\n');
for (const i of data.issues.medium.filter(x => x.type === 'MISSING_JSON_LD')) {
  console.log(i.url + ' | ' + i.file);
}

// Pages with NKB repeated in title
const nkbRepeated = auditData.filter(p => {
  if (!p.title) return false;
  const count = (p.title.match(/NKB/gi) || []).length;
  return count >= 2;
});
console.log('\n=== BRAND NAME REPEATED IN TITLE (' + nkbRepeated.length + ' pages) ===\n');
for (const p of nkbRepeated.slice(0, 20)) {
  console.log(p.routeUrl + ' | ' + p.title);
}

// Duplicate Titles
console.log('\n=== DUPLICATE TITLES ===\n');
for (const i of data.issues.high.filter(x => x.type === 'DUPLICATE_TITLE')) {
  console.log('Title: "' + i.title + '"');
  console.log('  URLs:', i.urls.join(', '));
  console.log('');
}

// Pages with the most internal links (top link hubs)
const topLinkers = [...auditData].sort((a,b) => b.internalLinkCount - a.internalLinkCount).slice(0, 10);
console.log('\n=== TOP INTERNAL LINK HUBS ===\n');
for (const p of topLinkers) {
  console.log(p.internalLinkCount + ' links | ' + p.routeUrl);
}

// Pages with zero internal links
const noLinks = auditData.filter(p => p.internalLinkCount === 0 && !p.isLayoutRoute);
console.log('\n=== PAGES WITH NO INTERNAL LINKS (' + noLinks.length + ') ===\n');
for (const p of noLinks.slice(0, 15)) {
  console.log(p.routeUrl + ' | ' + p.filePath);
}
