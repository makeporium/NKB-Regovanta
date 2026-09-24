const fs = require('fs');

const BASE = 'https://www.nkbregovanta.com';
const pages = require('../seo_audit_data.json').filter((p) => !p.isLayoutRoute && !p.routeUrl.startsWith('/admin'));

const stop = new Set([
  'a','an','and','as','at','by','for','from','in','into','of','on','or','per','the','to','under','with',
  'nkb','regovanta','services','service','support','consulting','consultant','solutions','strategy','guide',
  'global','complete','essential','expert','readiness','regulatory','compliance'
]);
const weakLeaf = new Set([
  'about','contact','services','markets','industries','insights','software','classification','labeling','ivd','pms',
  'qms','registration','renewals','inspection','liaison','post-market','change-management','testing-strategy',
  'technical-documentation','supply-chain','free-sale','personal-use','market-standing','medical-devices'
]);
const keepShort = new Set(['about','contact','services','markets','industries','insights','case-studies','ai-news','regulatory-updates']);

function slugify(value) {
  return String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/(\d)\s*\(\s*e\s*\)/gi, '$1e')
    .replace(/\|.*$/g, '')
    .replace(/\([^)]*NKB[^)]*\)/gi, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function terms(value) {
  return slugify(value).split('-').filter((t) => t && !stop.has(t) && t.length > 1).map((t) => {
    if (t === 'regulations') return 'regulation';
    if (t.endsWith('ies') && t.length > 5) return t.slice(0, -3) + 'y';
    if (t.endsWith('s') && !t.endsWith('ss') && t.length > 4) return t.slice(0, -1);
    return t;
  });
}

function titleFor(p) {
  return (p.title || p.h1 || '').replace(/\s*\|\s*NKB Regovanta.*$/i, '').trim();
}

function unique(items) { return [...new Set(items)]; }

function suggestedLeaf(p) {
  const segs = p.routeUrl.split('/').filter(Boolean);
  const parentTerms = new Set(segs.slice(0, -1).flatMap(terms));
  let ts = slugify(titleFor(p)).split('-').filter(Boolean);
  const contextDrop = new Set(parentTerms);
  const context = segs.slice(0, -1).join('/');
  if (context.includes('/australia')) ['australia','australian'].forEach((t) => contextDrop.add(t));
  if (context.includes('/canada')) ['canada','health'].forEach((t) => contextDrop.add(t));
  if (context.includes('/brazil')) ['brazil'].forEach((t) => contextDrop.add(t));
  if (context.includes('/india')) ['india','indian'].forEach((t) => contextDrop.add(t));
  if (context.includes('/new-zealand')) ['new','zealand','nz'].forEach((t) => contextDrop.add(t));
  if (context.includes('/saudi-arabia')) ['saudi','arabia'].forEach((t) => contextDrop.add(t));
  if (context.includes('/uae')) ['uae'].forEach((t) => contextDrop.add(t));
  if (context.includes('/uk')) ['uk'].forEach((t) => contextDrop.add(t));
  if (context.includes('/usa')) ['usa','us'].forEach((t) => contextDrop.add(t));
  ts = ts.filter((t) => !contextDrop.has(t));
  const removable = new Set(['consulting','consultant','services','service','support','solutions','strategy','guide']);
  ts = ts.filter((t) => !removable.has(t));
  return unique(ts).slice(0, 10).join('-');
}

function evaluate(p) {
  const path = p.routeUrl === '/' ? '' : p.routeUrl.replace(/\/$/, '');
  const segs = path.split('/').filter(Boolean);
  const leaf = segs.at(-1) || '';
  const targetTerms = unique(terms(titleFor(p)));
  const urlTerms = new Set(terms(path));
  const matched = targetTerms.filter((t) => urlTerms.has(t));
  const coverage = targetTerms.length ? matched.length / targetTerms.length : 1;
  const missing = targetTerms.filter((t) => !urlTerms.has(t));
  const isHub = segs.length <= 1 || keepShort.has(leaf);
  const weak = weakLeaf.has(leaf);
  const leafTopicTerms = terms(leaf);
  const isCountryHub = /^\/services\/[^/]+$/.test(path);
  const isIndustryHub = /^\/industries\/[^/]+(?:\/(?:eu|uk|usa|india))?$/.test(path);
  let decision = 'KEEP';
  let priority = 'None';
  let reason = 'URL is descriptive and aligned with the page topic.';

  if (isCountryHub || isIndustryHub || (leafTopicTerms.length >= 4 && coverage >= 0.25)) {
    decision = 'KEEP';
    priority = 'None';
    reason = 'The full hierarchical URL is already concise, specific, and clear; repeating the complete title would add redundancy.';
  } else if (!isHub && (coverage < 0.5 || (weak && missing.length >= 2))) {
    decision = 'CHANGE';
    priority = p.hasNoindex ? 'Low' : 'High';
    reason = weak
      ? `Leaf slug “${leaf}” is generic; it omits important topic terms: ${missing.slice(0, 5).join(', ')}.`
      : `URL omits important page-topic terms: ${missing.slice(0, 5).join(', ')}.`;
  } else if (!isHub && coverage < 0.72 && missing.length) {
    decision = 'OPTIONAL';
    priority = p.hasNoindex ? 'Low' : 'Medium';
    reason = `URL is understandable but could better reflect: ${missing.slice(0, 4).join(', ')}.`;
  }

  let proposed = '';
  if (decision !== 'KEEP') {
    const parent = segs.slice(0, -1).join('/');
    proposed = '/' + [parent, suggestedLeaf(p)].filter(Boolean).join('/');
    if (proposed === p.routeUrl) {
      decision = 'KEEP'; priority = 'None'; proposed = '';
      reason = 'URL is descriptive and aligned with the page topic.';
    }
  }

  return {
    decision, priority,
    indexability: p.hasNoindex ? 'NOINDEX' : 'INDEXABLE',
    currentUrl: p.routeUrl,
    pageTitle: titleFor(p),
    h1: p.h1 || '',
    coverage: Math.round(coverage * 100) + '%',
    proposedUrl: proposed,
    reason,
    filePath: p.filePath
  };
}

const rows = pages.map(evaluate);
const counts = rows.reduce((a, r) => { a[r.decision] = (a[r.decision] || 0) + 1; return a; }, {});
const priorityCounts = rows.reduce((a, r) => { a[r.priority] = (a[r.priority] || 0) + 1; return a; }, {});

function csvCell(v) { return `"${String(v ?? '').replace(/"/g, '""')}"`; }
const fields = ['decision','priority','indexability','currentUrl','pageTitle','h1','coverage','proposedUrl','reason','filePath'];
const csv = [fields.map(csvCell).join(','), ...rows.map((r) => fields.map((f) => csvCell(r[f])).join(','))].join('\r\n') + '\r\n';
fs.writeFileSync('URL_SEO_AUDIT_ALL_PAGES.csv', csv);

function table(list) {
  if (!list.length) return '_None._';
  return [
    '| Current URL | Page title | Proposed URL | Why |',
    '|---|---|---|---|',
    ...list.map((r) => `| \`${r.currentUrl}\` | ${r.pageTitle.replace(/\|/g, '\\|')} | ${r.proposedUrl ? `\`${r.proposedUrl}\`` : '—'} | ${r.reason.replace(/\|/g, '\\|')} |`)
  ].join('\n');
}

const high = rows.filter((r) => r.decision === 'CHANGE' && r.priority === 'High');
const optional = rows.filter((r) => r.decision === 'OPTIONAL' && r.priority !== 'Low');
const keep = rows.filter((r) => r.decision === 'KEEP');
const low = rows.filter((r) => r.priority === 'Low');
const md = `# NKB Regovanta URL–Title SEO Alignment Audit\n\n` +
`**Audit date:** 24 September 2026  \n` +
`**Scope:** ${rows.length} public, non-admin, non-layout routes in the current code inventory  \n` +
`**Source fields checked:** current route, HTML title, primary H1, canonical/indexability metadata  \n\n` +
`## Executive summary\n\n` +
`- **${counts.CHANGE || 0} URLs should change** because the current slug is materially less descriptive than the page topic.\n` +
`- **${counts.OPTIONAL || 0} URLs are optional improvements**: understandable today, but missing useful topic wording.\n` +
`- **${counts.KEEP || 0} URLs should remain unchanged.**\n` +
`- Priority split: **${priorityCounts.High || 0} high**, **${priorityCounts.Medium || 0} medium**, **${priorityCounts.Low || 0} low/noindex**.\n\n` +
`## Important SEO interpretation\n\n` +
`A URL does not need to reproduce the full H1 word-for-word. It should be short, readable, stable, and contain enough words to identify the page topic. A URL change is recommended only where the current path is ambiguous or omits the core service/regulation. Every implemented change must ship with a permanent 301 redirect, updated canonical, sitemap, breadcrumbs, navigation, internal links, and structured data. Do not change all URLs in one deployment without a redirect map and validation.\n\n` +
`## High-priority changes (indexable pages)\n\n${table(high)}\n\n` +
`## Medium-priority optional improvements (indexable pages)\n\n${table(optional)}\n\n` +
`## Low-priority changes (noindex/supporting pages)\n\nThese should normally wait until the indexation/content strategy is settled; changing a noindex URL produces little direct SEO benefit.\n\n${table(low)}\n\n` +
`## URLs that are already correct\n\n${table(keep)}\n\n` +
`## Implementation sequence after approval\n\n` +
`1. Approve or revise the proposed target slug in the CSV.\n` +
`2. Freeze the final old-to-new mapping and check for duplicate targets.\n` +
`3. Add one-hop 301 redirects before or with route changes.\n` +
`4. Update routes, canonicals, sitemap, breadcrumbs, navigation, internal links, schema and any campaign links.\n` +
`5. Crawl staging for 200 targets, zero redirect chains, zero broken internal links and self-referencing canonicals.\n` +
`6. Deploy in controlled batches, submit the sitemap in Search Console and monitor indexing/clicks.\n\n` +
`The full row-by-row audit—including H1, title, alignment percentage, decision, priority, proposed URL, reason and source file—is in **URL_SEO_AUDIT_ALL_PAGES.csv**.\n`;
fs.writeFileSync('URL_SEO_AUDIT_REPORT.md', md);

console.log(JSON.stringify({total: rows.length, decisions: counts, priorities: priorityCounts, highPriorityChanges: high.length}, null, 2));
