const fs = require('fs');
const html = fs.readFileSync('sample_page.html', 'utf8');
const match = html.match(/class="[^"]*elementor-widget-theme-post-content[^"]*"[\s\S]*?(?:<\/article>|<footer)/i);
if (match) {
  let content = match[0];
  content = content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '\n\n## $1\n\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '\n* $1')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n\n$1\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/\n\s*\n\s*\n+/g, '\n\n');
  console.log('Cleaned length:', content.length);
  fs.writeFileSync('sample_extracted.txt', content);
  console.log('Written to sample_extracted.txt');
} else {
  console.log('No match for elementor-widget-theme-post-content');
}
