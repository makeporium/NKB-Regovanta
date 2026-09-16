const fs = require('fs');
const path = require('path');
const { articleHash } = require('./check_articles.cjs');

const projectRoot = path.resolve(__dirname, '..');

const mapping = [
  {
    oldFile: 'services.regulatory-affairs.tsx',
    newFile: 'services.global-medical-device-ivd-regulatory-affairs-consulting.tsx',
    oldRoute: '/services/regulatory-affairs',
    newRoute: '/services/global-medical-device-ivd-regulatory-affairs-consulting',
  },
  {
    oldFile: 'services.drug-device-combination-products.tsx',
    newFile: 'services.drug-device-combination-product-consulting.tsx',
    oldRoute: '/services/drug-device-combination-products',
    newRoute: '/services/drug-device-combination-product-consulting',
  },
  {
    oldFile: 'services.regulatory-due-diligence.tsx',
    newFile: 'services.medical-device-ivd-regulatory-due-diligence.tsx',
    oldRoute: '/services/regulatory-due-diligence',
    newRoute: '/services/medical-device-ivd-regulatory-due-diligence',
  },
  {
    oldFile: 'services.wpc-wireless-medical-devices.tsx',
    newFile: 'services.wpc-approval-wireless-medical-devices-india.tsx',
    oldRoute: '/services/wpc-wireless-medical-devices',
    newRoute: '/services/wpc-approval-wireless-medical-devices-india',
  },
  {
    oldFile: 'services.pc-pndt-certificate.tsx',
    newFile: 'services.pc-pndt-registration-consultant-certificate-india.tsx',
    oldRoute: '/services/pc-pndt-certificate',
    newRoute: '/services/pc-pndt-registration-consultant-certificate-india',
  },
  {
    oldFile: 'services.iec-ad-code.tsx',
    newFile: 'services.iec-ad-code-registration-india.tsx',
    oldRoute: '/services/iec-ad-code',
    newRoute: '/services/iec-ad-code-registration-india',
  },
  {
    oldFile: 'services.drug-licenses-for-importers.tsx',
    newFile: 'services.drug-licenses-importers-india-form-10-form-41.tsx',
    oldRoute: '/services/drug-licenses-for-importers',
    newRoute: '/services/drug-licenses-importers-india-form-10-form-41',
  },
  {
    oldFile: 'services.manufacturing.tsx',
    newFile: 'services.pharmaceutical-cleanroom-manufacturing-equipment.tsx',
    oldRoute: '/services/manufacturing',
    newRoute: '/services/pharmaceutical-cleanroom-manufacturing-equipment',
  },
  {
    oldFile: 'services.iso-13485.tsx',
    newFile: 'services.iso-13485-implementation-certification-consulting.tsx',
    oldRoute: '/services/iso-13485',
    newRoute: '/services/iso-13485-implementation-certification-consulting',
  },
  {
    oldFile: 'services.technical-documentation.tsx',
    newFile: 'services.medical-device-technical-documentation-consulting.tsx',
    oldRoute: '/services/technical-documentation',
    newRoute: '/services/medical-device-technical-documentation-consulting',
  },
  {
    oldFile: 'services.market-access.tsx',
    newFile: 'services.global-market-access-consulting-medical-devices.tsx',
    oldRoute: '/services/market-access',
    newRoute: '/services/global-market-access-consulting-medical-devices',
  },
  {
    oldFile: 'services.audit-compliance.tsx',
    newFile: 'services.medical-device-audit-compliance-support.tsx',
    oldRoute: '/services/audit-compliance',
    newRoute: '/services/medical-device-audit-compliance-support',
  },
];

console.log('--- Step 1: Renaming and updating the 12 route files ---');
for (const item of mapping) {
  const oldPath = path.join(projectRoot, 'src/routes', item.oldFile);
  const newPath = path.join(projectRoot, 'src/routes', item.newFile);

  if (!fs.existsSync(oldPath)) {
    console.warn(`Old file not found (might already be renamed): ${oldPath}`);
    continue;
  }

  let content = fs.readFileSync(oldPath, 'utf8');

  // Replace all route occurrences
  for (const m of mapping) {
    content = content.replaceAll(m.oldRoute, m.newRoute);
  }

  fs.writeFileSync(newPath, content, 'utf8');
  fs.unlinkSync(oldPath);
  console.log(`Renamed: ${item.oldFile} -> ${item.newFile}`);
}

console.log('--- Step 2: Updating internal links across source files ---');
const filesToUpdate = [
  'src/components/site/Header.tsx',
  'src/components/site/Footer.tsx',
  'src/routes/services.index.tsx',
  'src/routes/services.india.index.tsx',
  'src/routes/services.india.medical-devices.tsx',
  'src/routes/about.tsx',
  'src/routes/index.tsx',
  'src/routes/industries.index.tsx',
];

for (const relFile of filesToUpdate) {
  const fullPath = path.join(projectRoot, relFile);
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  let changed = false;
  for (const m of mapping) {
    if (content.includes(m.oldRoute)) {
      content = content.replaceAll(m.oldRoute, m.newRoute);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated routes in ${relFile}`);
  }
}

console.log('--- Step 3: Updating indexing-review.json ---');
const indexingReviewPath = path.join(projectRoot, 'src/content/indexing-review.json');
if (fs.existsSync(indexingReviewPath)) {
  let content = fs.readFileSync(indexingReviewPath, 'utf8');
  for (const item of mapping) {
    content = content.replaceAll(item.oldFile, item.newFile);
    content = content.replaceAll(item.oldRoute, item.newRoute);
  }
  fs.writeFileSync(indexingReviewPath, content, 'utf8');
  console.log('Updated indexing-review.json');
}

console.log('--- Step 4: Updating articles and article-replacements.json ---');
const articlesDir = path.join(projectRoot, 'src/content/articles');
const replacementsPath = path.join(projectRoot, 'src/content/article-replacements.json');
const replacements = JSON.parse(fs.readFileSync(replacementsPath, 'utf8'));

const articleFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.json'));
let updatedArticlesCount = 0;

for (const artFile of articleFiles) {
  const artPath = path.join(articlesDir, artFile);
  let artContent = fs.readFileSync(artPath, 'utf8');
  let artChanged = false;

  for (const m of mapping) {
    if (artContent.includes(m.oldRoute)) {
      artContent = artContent.replaceAll(m.oldRoute, m.newRoute);
      artChanged = true;
    }
  }

  if (artChanged) {
    fs.writeFileSync(artPath, artContent, 'utf8');
    updatedArticlesCount++;

    const slug = artFile.replace(/\.json$/, '');
    const newHash = articleHash(Buffer.from(artContent));
    const repEntry = replacements.find(r => r.slug === slug);
    if (repEntry) {
      repEntry.contentSha256 = newHash;
      console.log(`Updated article ${artFile} & updated hash in article-replacements.json`);
    } else {
      console.warn(`No replacement entry found for ${slug}`);
    }
  }
}
fs.writeFileSync(replacementsPath, JSON.stringify(replacements, null, 2) + '\n', 'utf8');
console.log(`Updated ${updatedArticlesCount} articles and wrote article-replacements.json`);

console.log('--- Step 5: Updating redirects in vercel.json ---');
const vercelPath = path.join(projectRoot, 'vercel.json');
if (fs.existsSync(vercelPath)) {
  const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
  if (!vercel.redirects) vercel.redirects = [];

  for (const item of mapping) {
    const existingIndex = vercel.redirects.findIndex(r => r.source === item.oldRoute);
    const redirectObj = {
      source: item.oldRoute,
      destination: item.newRoute,
      permanent: true,
    };
    if (existingIndex >= 0) {
      vercel.redirects[existingIndex] = redirectObj;
    } else {
      vercel.redirects.push(redirectObj);
    }
  }

  fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + '\n', 'utf8');
  console.log('Updated redirects in vercel.json');
}

console.log('--- Step 6: Updating redirects in src/server.ts ---');
const serverPath = path.join(projectRoot, 'src/server.ts');
if (fs.existsSync(serverPath)) {
  let serverContent = fs.readFileSync(serverPath, 'utf8');
  
  const redirectsObjectString = JSON.stringify(
    Object.fromEntries(mapping.map(m => [m.oldRoute, m.newRoute])),
    null,
    2
  );

  if (!serverContent.includes('const REDIRECTS')) {
    const redirectCode = `\nconst REDIRECTS: Record<string, string> = ${redirectsObjectString};\n`;
    serverContent = redirectCode + serverContent;
    
    // Inject redirection logic at the beginning of fetch()
    serverContent = serverContent.replace(
      'async fetch(request: Request, env: unknown, ctx: unknown) {',
      `async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    const cleanPath = url.pathname.replace(/\\/$/, "") || "/";
    const redirectTarget = REDIRECTS[cleanPath];
    if (redirectTarget) {
      return Response.redirect(new URL(redirectTarget + url.search, request.url), 301);
    }`
    );
    fs.writeFileSync(serverPath, serverContent, 'utf8');
    console.log('Added 301 redirect map to src/server.ts');
  } else {
    console.log('src/server.ts already has REDIRECTS');
  }
}

console.log('--- Migration Script Complete ---');
