const https = require('https');
const fs = require('fs');

https.get('https://operonstrategist.com/ce-marking-of-digital-health-technologies/', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    fs.writeFileSync('sample_page.html', data);
    console.log('Saved sample_page.html, size:', data.length);
  });
});
