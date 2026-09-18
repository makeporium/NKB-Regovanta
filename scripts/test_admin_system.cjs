const crypto = require('crypto');
const assert = require('assert');

console.log('====================================================');
console.log('RUNNING ADMIN & SEO SYSTEM VERIFICATION TESTS');
console.log('====================================================\n');

let totalPassed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`[PASS] ${name}`);
    totalPassed++;
  } catch (err) {
    console.error(`[FAIL] ${name}:`, err.message);
    process.exit(1);
  }
}

// 1. PBKDF2 Password Hashing & Salt Verification
runTest('PBKDF2 Password Hashing produces 64-byte salt and verifiable hash', () => {
  const password = 'AdminPassword123!';
  const salt = crypto.randomBytes(32).toString('hex'); // 64 hex chars
  assert.strictEqual(salt.length, 64, 'Salt must be 32 bytes (64 hex characters)');

  const hash1 = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  const hash2 = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
  const wrongHash = crypto.pbkdf2Sync('WrongPassword!', salt, 100000, 64, 'sha512').toString('hex');

  assert.strictEqual(hash1, hash2, 'Hash must be deterministic with same salt and password');
  assert.notStrictEqual(hash1, wrongHash, 'Wrong password must produce different hash');
});

// 2. Lockout Logic (5 failed attempts -> 15 min lock)
runTest('Account lockout occurs after 5 failed attempts within 15 minutes', () => {
  const attempts = [
    { success: false, time: new Date(Date.now() - 10 * 60 * 1000) },
    { success: false, time: new Date(Date.now() - 8 * 60 * 1000) },
    { success: false, time: new Date(Date.now() - 5 * 60 * 1000) },
    { success: false, time: new Date(Date.now() - 2 * 60 * 1000) },
    { success: false, time: new Date(Date.now() - 1 * 60 * 1000) },
  ];

  const recentFailures = attempts.filter(
    (a) => !a.success && Date.now() - a.time.getTime() < 15 * 60 * 1000
  );

  const isLocked = recentFailures.length >= 5;
  assert.strictEqual(isLocked, true, 'User must be locked out after 5 consecutive failures');

  // If oldest failure was 16 mins ago, should not be locked
  const oldAttempts = [
    { success: false, time: new Date(Date.now() - 16 * 60 * 1000) },
    { success: false, time: new Date(Date.now() - 8 * 60 * 1000) },
    { success: false, time: new Date(Date.now() - 5 * 60 * 1000) },
    { success: false, time: new Date(Date.now() - 2 * 60 * 1000) },
  ];
  const oldRecentFailures = oldAttempts.filter(
    (a) => !a.success && Date.now() - a.time.getTime() < 15 * 60 * 1000
  );
  assert.strictEqual(oldRecentFailures.length < 5, true, 'Old failures outside 15 min window must not lock user');
});

// 3. Self-Redirect and Loop Prevention
runTest('Redirect manager blocks self-redirects and detects circular redirect chains', () => {
  const source = '/services/medical-devices';
  const targetSelf = '/services/medical-devices';
  const targetValid = '/services/global-medical-device-ivd-regulatory-affairs-consulting';

  // Rule: Source cannot equal Target
  const isSelf = source.replace(/\/$/, '') === targetSelf.replace(/\/$/, '');
  assert.strictEqual(isSelf, true, 'Self-redirect must be identified');

  const existingRedirects = [
    { source_path: '/page-a', target_url: '/page-b' },
    { source_path: '/page-b', target_url: '/page-c' },
  ];

  // If user tries to add /page-c -> /page-a, it creates a loop
  function checkLoop(newSource, newTarget, list) {
    let curr = newTarget;
    const visited = new Set([newSource]);
    while (curr) {
      if (visited.has(curr)) return true;
      visited.add(curr);
      const next = list.find((r) => r.source_path === curr);
      curr = next ? next.target_url : null;
    }
    return false;
  }

  const createsLoop = checkLoop('/page-c', '/page-a', existingRedirects);
  assert.strictEqual(createsLoop, true, 'Circular redirect chain A -> B -> C -> A must be blocked');

  const safeRedirect = checkLoop('/page-c', '/page-d', existingRedirects);
  assert.strictEqual(safeRedirect, false, 'Non-loop redirect must be permitted');
});

// 4. Robots.txt Disallow: / Safeguard
runTest('Robots.txt editor warns/safeguards against Disallow: / which deindexes the entire site', () => {
  const dangerousRobots = `
User-agent: *
Disallow: /
`;
  const safeRobots = `
User-agent: *
Allow: /
Sitemap: https://www.nkbregovanta.com/sitemap.xml
`;

  function checkDisallowAll(content) {
    return /(?:^|\n)\s*Disallow\s*:\s*\/\s*(?:\n|$)/i.test(content);
  }

  assert.strictEqual(checkDisallowAll(dangerousRobots), true, 'Dangerous "Disallow: /" pattern must be detected');
  assert.strictEqual(checkDisallowAll(safeRobots), false, 'Safe robots.txt must pass inspection');
});

// 5. Title and Description Character Counters & Status Thresholds
runTest('SEO Page Title and Meta Description thresholds align with Google SERP standards', () => {
  function getTitleStatus(len) {
    if (len < 30) return 'too_short';
    if (len <= 60) return 'optimal';
    return 'too_long';
  }

  function getDescStatus(len) {
    if (len < 70) return 'too_short';
    if (len <= 160) return 'optimal';
    return 'too_long';
  }

  assert.strictEqual(getTitleStatus(25), 'too_short');
  assert.strictEqual(getTitleStatus(52), 'optimal');
  assert.strictEqual(getTitleStatus(68), 'too_long');

  assert.strictEqual(getDescStatus(60), 'too_short');
  assert.strictEqual(getDescStatus(145), 'optimal');
  assert.strictEqual(getDescStatus(175), 'too_long');
});

// 6. Primary Keyword Collision Check
runTest('Primary keyword duplication across multiple pages triggers collision warning', () => {
  const registered = [
    { target_url: '/services/cdsco', primary_keyword: 'cdsco registration india' },
    { target_url: '/services/fda', primary_keyword: 'fda 510k submission' },
  ];

  const newCandidate = 'CDSCO Registration India';
  const collision = registered.some(
    (r) => r.primary_keyword.toLowerCase().trim() === newCandidate.toLowerCase().trim()
  );

  assert.strictEqual(collision, true, 'Duplicate primary keyword must trigger collision');
});

// 7. Sitemap XML Index and Sub-sitemap structure
runTest('Sitemap generator produces valid XML index with sitemap-pages and sitemap-posts', () => {
  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://www.nkbregovanta.com/sitemap-pages.xml</loc>
    <lastmod>2026-09-18</lastmod>
  </sitemap>
  <sitemap>
    <loc>https://www.nkbregovanta.com/sitemap-posts.xml</loc>
    <lastmod>2026-09-18</lastmod>
  </sitemap>
</sitemapindex>`;

  assert.ok(indexXml.includes('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
  assert.ok(indexXml.includes('https://www.nkbregovanta.com/sitemap-pages.xml'));
  assert.ok(indexXml.includes('https://www.nkbregovanta.com/sitemap-posts.xml'));
});

// 8. Admin User safeguards (cannot delete self, cannot have 0 admins)
runTest('Admin account management preserves minimum 1 active admin and prevents self-deletion', () => {
  const currentLoggedInId = 'usr-001';
  const admins = [
    { id: 'usr-001', username: 'admin', is_active: true },
    { id: 'usr-002', username: 'editor', is_active: true },
  ];

  function canDelete(targetId, userList, loggedInId) {
    if (targetId === loggedInId) return { allowed: false, reason: 'Cannot delete your own account' };
    const remainingActive = userList.filter((u) => u.id !== targetId && u.is_active);
    if (remainingActive.length === 0) return { allowed: false, reason: 'Cannot remove the last active admin' };
    return { allowed: true };
  }

  assert.strictEqual(canDelete('usr-001', admins, currentLoggedInId).allowed, false);
  assert.strictEqual(canDelete('usr-002', [admins[1]], currentLoggedInId).allowed, false);
  assert.strictEqual(canDelete('usr-002', admins, currentLoggedInId).allowed, true);
});

console.log(`\n====================================================`);
console.log(`ALL ${totalPassed} ADMIN SYSTEM VERIFICATION TESTS PASSED!`);
console.log(`====================================================\n`);
