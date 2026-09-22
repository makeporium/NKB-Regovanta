const cheerio = require('cheerio');

async function test(url) {
  const res = await fetch(url);
  const html = await res.text();
  const c = cheerio.load(html);
  
  console.log('----------------------------------------------------');
  console.log('URL:', url);
  console.log('HTTP Status:', res.status);
  console.log('Meta Title:', c('title').text());
  console.log('Canonical:', c('link[rel="canonical"]').attr('href'));
  console.log('Meta Description:', c('meta[name="description"]').attr('content'));
  console.log('H1:', c('h1').text().trim().replace(/\s+/g, ' '));
  console.log('Tables Count:', c('table').length);
  console.log('H2 Headings Count:', c('h2').length);
  console.log('H3 Headings Count:', c('h3').length);
  
  const schemas = [];
  c('script[type="application/ld+json"]').each((i, el) => {
    try {
      const parsed = JSON.parse(c(el).html());
      schemas.push(parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'Custom'));
    } catch (e) {
      schemas.push('Invalid JSON');
    }
  });
  console.log('JSON-LD Schemas:', schemas);
}

(async () => {
  await test('http://localhost:8080/insights/how-to-register-medical-device-in-india');
  await test('http://localhost:8080/insights/cdsco-consultant-medical-devices-india');
  await test('http://localhost:8080/insights/medical-device-regulatory-consultant-india');
})();
