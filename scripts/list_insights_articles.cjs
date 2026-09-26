const fs = require('fs');
const path = require('path');
const content = fs.readFileSync(path.join(__dirname, '../src/routes/insights.index.tsx'), 'utf8');

// Match each article object inside allArticles
const regex = /{\s*id:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*desc:\s*"([^"]+)",\s*img:\s*"([^"]+)",\s*route:\s*"([^"]+)"/g;
let match;
const articles = [];
while ((match = regex.exec(content)) !== null) {
  articles.push({
    id: match[1],
    category: match[2],
    title: match[3],
    desc: match[4],
    currentImg: match[5],
    route: match[6],
    slug: match[6].replace('/insights/', '')
  });
}

console.log('Total articles:', articles.length);
fs.writeFileSync(path.join(__dirname, 'insights_articles.json'), JSON.stringify(articles, null, 2));
