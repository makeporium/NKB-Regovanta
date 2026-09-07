// Retired: scraped text is not an approved source for published articles.
throw new Error("Scraped article publishing is disabled. Write original, source-checked articles in src/routes instead.");
const fs = require('fs');
const path = require('path');

const metaList = JSON.parse(fs.readFileSync(path.join(__dirname, '../scraped_blogs/curated_metadata.json'), 'utf8'));

const routesDir = path.join(__dirname, '../src/routes');

// Helper to convert text blocks into clean React JSX paragraphs, lists, and headings
function textToJsx(text) {
  const lines = text.split('\n');
  const elements = [];
  let currentList = [];
  let inCode = false;

  function flushList() {
    if (currentList.length > 0) {
      elements.push(
        `<ul className="my-6 space-y-2 list-disc list-inside text-navy/80 bg-slate-50/60 p-5 rounded-xl border border-slate-200/60">\n` +
        currentList.map(item => `  <li className="leading-relaxed"><span className="text-navy font-medium">${escapeJsx(item)}</span></li>`).join('\n') +
        `\n</ul>`
      );
      currentList = [];
    }
  }

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    // Filter out unwanted artifacts or external links text
    if (line.includes('Please enable JavaScript') || line.includes('Related Reading:') || line.includes('Read More »') || line.startsWith('Photo by') || line.startsWith('Source:')) {
      continue;
    }

    if (line.startsWith('* ') || line.startsWith('- ')) {
      currentList.push(line.replace(/^[\*\-]\s+/, ''));
      continue;
    } else {
      flushList();
    }

    if (line.startsWith('### ') || line.startsWith('## ') || line.startsWith('# ')) {
      const headingText = line.replace(/^#+\s+/, '').trim();
      elements.push(
        `<h2 className="text-2xl sm:text-3xl font-bold text-navy mt-12 mb-6 tracking-tight">${escapeJsx(headingText)}</h2>`
      );
    } else {
      // Normal paragraph
      elements.push(
        `<p className="text-base sm:text-lg leading-relaxed text-navy/80 my-5">${escapeJsx(line)}</p>`
      );
    }
  }
  flushList();

  return elements.join('\n\n');
}

function escapeJsx(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

for (const meta of metaList) {
  const filePath = path.join(__dirname, `../scraped_blogs/${meta.slug}.txt`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Missing text file for ${meta.slug}`);
    continue;
  }
  const rawText = fs.readFileSync(filePath, 'utf8');
  const jsxContent = textToJsx(rawText);

  const routeFileName = `insights.${meta.slug}.tsx`;
  const routeFilePath = path.join(routesDir, routeFileName);

  const code = `import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { CTABand } from "@/components/site/Bits";

const imgArticle = "${meta.img}";

export const Route = createFileRoute("/insights/${meta.slug}")({
  head: () => ({
    meta: [
      { title: "${meta.title.replace(/"/g, '\\"')} | NKB Regovanta" },
      {
        name: "description",
        content: "${meta.subtitle.replace(/"/g, '\\"')}",
      },
      {
        name: "keywords",
        content: "${meta.title.toLowerCase()}, medical device regulations, NKB Regovanta, regulatory consulting, medtech compliance",
      },
      { property: "og:title", content: "${meta.title.replace(/"/g, '\\"')} | NKB Regovanta" },
      {
        property: "og:description",
        content: "${meta.subtitle.replace(/"/g, '\\"')}",
      },
      { property: "og:url", content: "https://www.nkbregovanta.com/insights/${meta.slug}" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://www.nkbregovanta.com${meta.img}" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "${meta.title.replace(/"/g, '\\"')}" },
      { name: "twitter:description", content: "${meta.subtitle.replace(/"/g, '\\"')}" },
      { name: "twitter:image", content: "https://www.nkbregovanta.com${meta.img}" },
    ],
    links: [
      { rel: "canonical", href: "https://www.nkbregovanta.com/insights/${meta.slug}" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "${meta.title.replace(/"/g, '\\"')}",
            "description": "${meta.subtitle.replace(/"/g, '\\"')}",
            "image": "https://www.nkbregovanta.com${meta.img}",
            "author": {
              "@type": "Organization",
              "name": "NKB Regovanta Solutions Pvt. Ltd.",
              "url": "https://www.nkbregovanta.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "NKB Regovanta Solutions Pvt. Ltd.",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.nkbregovanta.com/favicon.png"
              }
            },
            "datePublished": "${meta.date}",
            "mainEntityOfPage": "https://www.nkbregovanta.com/insights/${meta.slug}"
          })
        }}
      />

      <article className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <Link to="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/70 hover:text-navy transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Insights
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#0b3a96] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              ${meta.category}
            </span>
            <span className="text-navy/30 text-sm">•</span>
            <span className="text-sm font-medium text-navy/60">${meta.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-6">
            ${meta.title}
          </h1>

          <p className="text-lg sm:text-xl text-blue-900/80 font-medium leading-relaxed mb-10 pb-6 border-b border-gray-100">
            ${meta.subtitle}
          </p>

          <img
            src={imgArticle}
            alt="${meta.title.replace(/"/g, '&quot;')}"
            className="w-full h-[380px] sm:h-[420px] object-cover rounded-xl mb-12 shadow-md border border-gray-100"
          />

          <div className="prose prose-lg max-w-none text-navy/80 space-y-6 leading-relaxed">
${jsxContent}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-br from-blue-50/60 to-slate-50 border border-blue-100 rounded-2xl">
            <h3 className="text-2xl font-bold text-navy mb-4">How NKB Regovanta Can Support Your Programme</h3>
            <p className="text-navy/80 leading-relaxed mb-6">
              Our multidisciplinary team of regulatory affairs strategists, former auditors, and quality system engineers partners with medical technology innovators worldwide. We bridge complex regulatory standards with practical, commercial market-access pathways.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Global Regulatory Strategy &amp; Submissions</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Technical Documentation &amp; GSPR Files</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <FileText className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">ISO 13485 &amp; FDA QMSR Implementation</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-100/60">
                <Globe2 className="h-5 w-5 text-accent shrink-0" />
                <span className="text-sm font-semibold text-navy">Market Authorization &amp; Authorized Representation</span>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTABand
        title="Ready to navigate your medical device regulatory pathway?"
        description="Speak directly with NKB Regovanta's senior regulatory consultants for clear, practical guidance."
        action="Schedule a Consultation"
      />
    </>
  );
}
`;

  fs.writeFileSync(routeFilePath, code, 'utf8');
  console.log(`Generated route: ${routeFileName}`);
}

console.log('All 32 blog routes generated successfully!');
