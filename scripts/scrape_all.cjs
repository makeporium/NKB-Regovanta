const https = require('https');
const fs = require('fs');
const path = require('path');

const articles = [
  { slug: "ce-marking-digital-health-technologies", url: "https://operonstrategist.com/ce-marking-of-digital-health-technologies/" },
  { slug: "fda-qmsr-compliance-guide", url: "https://operonstrategist.com/qmsr-compliance/" },
  { slug: "dynamic-risk-management-software-medical-devices", url: "https://operonstrategist.com/dynamic-risk-management-for-software-enabled-medical-devices/" },
  { slug: "understanding-prrc-eu-mdr-ivdr", url: "https://operonstrategist.com/understanding-the-prrc-under-eu-mdr-and-ivdr/" },
  { slug: "qms-documentation-iso-13485-compliance", url: "https://operonstrategist.com/qms-documentation-to-meet-iso-13485/" },
  { slug: "clinical-evaluation-equivalence-medical-devices", url: "https://operonstrategist.com/medical-device-equivalence/" },
  { slug: "gspr-compliance-eu-mdr-ivdr", url: "https://operonstrategist.com/gspr-requirements-for-eu-mdr-and-ivdr/" },
  { slug: "cdsco-medical-device-manufacturing-license-india", url: "https://operonstrategist.com/cdsco-manufacturing-license-for-medical-devices-in-india/" },
  { slug: "class-iii-medical-device-classification-strategy", url: "https://operonstrategist.com/classifying-a-class-iii-medical-device/" },
  { slug: "gspr-foundation-medical-device-development", url: "https://operonstrategist.com/why-should-you-consider-gspr-as-a-foundation-for-your-medical-device-project/" },
  { slug: "ce-marking-cardiovascular-medical-devices", url: "https://operonstrategist.com/ce-marking-for-cardiovascular-medical-devices/" },
  { slug: "iec-62304-medical-device-software-lifecycle", url: "https://operonstrategist.com/iec-62304-path-to-medical-device-software-compliance/" },
  { slug: "remote-patient-monitoring-devices-regulatory-framework", url: "https://operonstrategist.com/remote-patient-monitoring-devices/" },
  { slug: "ivdr-class-d-verification-notified-bodies", url: "https://operonstrategist.com/ivdr-verification-of-class-d-ivds/" },
  { slug: "dental-scanners-manufacturing-regulatory-standards", url: "https://operonstrategist.com/dental-scanners-manufacturing/" },
  { slug: "borderline-medical-device-classification-strategy", url: "https://operonstrategist.com/borderline-device-classification/" },
  { slug: "notified-body-expectations-eu-mdr-technical-documentation", url: "https://operonstrategist.com/what-notified-bodies-look-for-in-eu-mdr-technical-documentation/" },
  { slug: "overcoming-fda-510k-clearance-barriers", url: "https://operonstrategist.com/overcome-fda-510k-clearance-barriers/" },
  { slug: "effective-capa-system-medical-devices", url: "https://operonstrategist.com/the-5-key-elements-of-an-effective-capa-system/" },
  { slug: "regulatory-compliance-strategy-global-medtech", url: "https://operonstrategist.com/regulatory-compliance-strategy/" },
  { slug: "regulation-eu-2024-1860-mdr-ivdr-transition", url: "https://operonstrategist.com/regulation-eu-2024-1860/" },
  { slug: "biological-evaluation-testing-medical-devices-iso-10993", url: "https://operonstrategist.com/biological-testing-methods-of-medical-devices/" },
  { slug: "core-regulations-medical-device-global-compliance", url: "https://operonstrategist.com/6-regulations-medical-device-compliance/" },
  { slug: "optimal-timing-usfda-510k-submission", url: "https://operonstrategist.com/right-time-to-submit-a-usfda-510k/" },
  { slug: "usability-testing-medical-devices-iec-62366", url: "https://operonstrategist.com/usability-testing-to-medical-devices/" },
  { slug: "fda-510k-program-modernization-safety-standards", url: "https://operonstrategist.com/fda-is-modernizing-its-510k-program/" },
  { slug: "human-factors-engineering-medical-device-design", url: "https://operonstrategist.com/human-factors-engineering/" },
  { slug: "cdsco-medical-device-registration-guidelines-india", url: "https://operonstrategist.com/cdsco-medical-device-registration-in-india/" },
  { slug: "ce-marking-process-medical-devices-eu-mdr", url: "https://operonstrategist.com/ce-marking-process-for-medical-devices/" },
  { slug: "samd-classification-submission-usfda", url: "https://operonstrategist.com/samd-classification-and-submission-as-per-usfda/" },
  { slug: "fda-q-sub-pre-submission-meeting-guide", url: "https://operonstrategist.com/fda-pre-submission-all-you-need-to-know/" },
  { slug: "notified-body-selection-conformity-assessment-guide", url: "https://operonstrategist.com/selection-of-notified-body-and-their-process/" }
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchHtml(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function cleanContent(html) {
  const match = html.match(/class="[^"]*elementor-widget-theme-post-content[^"]*"[\s\S]*?(?:<\/article>|<footer)/i);
  if (!match) return "";
  let content = match[0];
  content = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    // Remove forms, author boxes, social share
    .replace(/<form[\s\S]*?<\/form>/gi, '')
    .replace(/Please enable JavaScript in your browser to complete this form[\s\S]*?Submit/gi, '')
    .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '\n\n## $1\n\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '\n* $1')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n\n$1\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\n\s*\n\s*\n+/g, '\n\n');

  // Re-brand Operon / Operon Strategist to NKB Regovanta
  content = content.replace(/Operon\s+Strategist/gi, 'NKB Regovanta');
  content = content.replace(/Operon/gi, 'NKB Regovanta');

  return content.trim();
}

async function scrapeAll() {
  const outDir = path.join(__dirname, '../scraped_blogs');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const results = [];

  for (let i = 0; i < articles.length; i++) {
    const item = articles[i];
    console.log(`[${i+1}/${articles.length}] Fetching ${item.slug}...`);
    try {
      const html = await fetchHtml(item.url);
      const titleMatch = html.match(/<title>([^<]*)<\/title>/);
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const rawTitle = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : (titleMatch ? titleMatch[1].split('|')[0].trim() : item.slug);
      const cleanedText = cleanContent(html);
      
      fs.writeFileSync(path.join(outDir, `${item.slug}.txt`), cleanedText, 'utf8');
      console.log(`-> Saved ${item.slug}.txt (len: ${cleanedText.length}, title: "${rawTitle}")`);
      results.push({
        slug: item.slug,
        rawTitle: rawTitle,
        length: cleanedText.length,
        url: item.url
      });
    } catch (err) {
      console.error(`Error on ${item.slug}:`, err.message);
    }
  }

  fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log('Finished scraping all 32 articles!');
}

scrapeAll();
