const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const {project,inventory}=require('./generate_sitemap.cjs');
// Git checkouts use different line endings on Windows and Linux. Normalize only
// those bytes; actual article changes must still invalidate editorial approval.
function articleHash(bytes) {
 return crypto.createHash('sha256').update(bytes.toString('utf8').replace(/\r\n/g, '\n')).digest('hex');
}
function checkArticles(pages=inventory()) {
 const failures=[];
 const read=p=>JSON.parse(fs.readFileSync(path.join(project,p),'utf8'));
 const manifest=read('scraped_blogs/manifest.json');
 const replacements=read('src/content/article-replacements.json');
 const sources=read('src/content/article-sources.json');
 const oldText=fs.readdirSync(path.join(project,'scraped_blogs')).filter(f=>f.endsWith('.txt')).map(f=>fs.readFileSync(path.join(project,'scraped_blogs',f),'utf8').toLowerCase().match(/[a-z0-9]+/g)?.join(' ')||'').join('\n');
 for(const original of manifest) {
  try {
   const replacement=replacements.find(r=>r.slug===original.slug);
   const file=path.join(project,'src/content/articles',original.slug+'.json');
   const bytes=fs.readFileSync(file); const a=JSON.parse(bytes);
   if(!replacement || replacement.status!=='original-source-checked' || replacement.contentSha256!==articleHash(bytes)) throw Error('missing or changed editorial replacement');
   const page=pages.find(p=>p.route==='/insights/'+a.slug);
   if(!page || page.noindex===replacement.indexable) throw Error('indexing decision mismatch');
   const route=fs.readFileSync(path.join(project,'src/routes',page.file),'utf8');
   if(!route.includes('@/content/articles/'+a.slug+'.json') || !route.includes('<OriginalArticle article={article}')) throw Error('route does not render replacement');
   if(!pages.some(p=>p.route===a.service)) throw Error('invalid service link');
   if(!a.intro || a.sections.length<3 || !a.faq.answer || a.checklist.length<3) throw Error('incomplete article');
   if(!a.sourceKeys.length) throw Error('missing sources');
   for(const key of [...a.sourceKeys,...a.sections.flatMap(s=>s.sourceKeys||[])]) if(!sources[key]?.label || new URL(sources[key].url).protocol!=='https:') throw Error('invalid source '+key);
   const paragraphs=[a.intro,...a.sections.flatMap(s=>s.paragraphs),a.example,...a.checklist,a.faq.answer];
   for(const paragraph of paragraphs) {
    const words=paragraph.toLowerCase().match(/[a-z0-9]+/g)||[];
    for(let i=0;i<=words.length-20;i++) if(oldText.includes(words.slice(i,i+20).join(' '))) throw Error('20-word overlap with archived copied text');
   }
  } catch(e) {failures.push(original.slug+': '+e.message);}
 }
 if(replacements.length!==manifest.length || new Set(replacements.map(r=>r.slug)).size!==manifest.length) failures.push('Replacement coverage mismatch');
 return failures;
}
module.exports={checkArticles,articleHash};
if(require.main===module){const failures=checkArticles();if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}else console.log('All 32 article replacements verified; no 20-word matches against archived copies.');}
