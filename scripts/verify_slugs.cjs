const fs = require('fs');
const path = require('path');
const targets = [
  '/services/regulatory-affairs',
  '/services/drug-device-combination-products',
  '/services/regulatory-due-diligence',
  '/services/wpc-wireless-medical-devices',
  '/services/pc-pndt-certificate',
  '/services/iec-ad-code',
  '/services/drug-licenses-for-importers',
  '/services/manufacturing',
  '/services/iso-13485',
  '/services/technical-documentation',
  '/services/market-access',
  '/services/audit-compliance'
];

function walk(dir) {
  let res = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      res = res.concat(walk(full));
    } else if (item.isFile() && !full.endsWith('routeTree.gen.ts') && !full.endsWith('server.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = targets.filter(t => {
        const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped + '(["\'`#?]|$)');
        return regex.test(content);
      });
      if (matches.length > 0) {
        res.push({ file: path.relative(path.resolve(__dirname, '..'), full), matches });
      }
    }
  }
  return res;
}

const found = walk(path.resolve(__dirname, '../src'));
console.log('Unquoted exact matches in src:', JSON.stringify(found, null, 2));
