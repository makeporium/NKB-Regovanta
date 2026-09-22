const cheerio = require('cheerio');

async function test(url) {
  const res = await fetch(url);
  const html = await res.text();
  const c = cheerio.load(html);
  
  console.log('====================================================');
  console.log('URL:', url);
  console.log('HTTP Status:', res.status);
  console.log('Meta Title:', c('title').text());
  console.log('Meta Description:', c('meta[name="description"]').attr('content'));
  console.log('Canonical:', c('link[rel="canonical"]').attr('href'));
  console.log('Keywords Meta:', c('meta[name="keywords"]').attr('content'));
  
  const articleTags = [];
  c('meta[property="article:tag"]').each((i, el) => {
    articleTags.push(c(el).attr('content'));
  });
  console.log('Article OpenGraph Tags (' + articleTags.length + '):', articleTags.join(', '));

  const uiTags = [];
  c('.rounded-lg:contains("#"), span:contains("#")').each((i, el) => {
    const text = c(el).text().trim();
    if (text.startsWith('#')) uiTags.push(text);
  });
  console.log('Rendered UI Tag Badges (' + uiTags.length + '):', uiTags.join(', '));
  
  console.log('H1 Title:', c('h1').text().trim().replace(/\s+/g, ' '));
  console.log('First H2:', c('h2').first().text().trim().replace(/\s+/g, ' '));
  console.log('Total H2 count:', c('h2').length);
  console.log('Total H3 count:', c('h3').length);
  console.log('Total Tables count:', c('table').length);
}

(async () => {
  await test('http://localhost:8080/insights/how-to-register-medical-device-in-india');
  await test('http://localhost:8080/insights/cdsco-consultant-medical-devices-india');
  await test('http://localhost:8080/insights/medical-device-regulatory-consultant-india');
})();
