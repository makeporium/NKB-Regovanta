import { Link } from '@tanstack/react-router';
import sourceCatalog from '@/content/article-sources.json';

type Article = {
  slug: string; title: string; description: string; intro: string;
  sections: { title: string; paragraphs: string[]; sourceKeys?: string[] }[];
  example: string; checklist: string[]; faq: { question: string; answer: string };
  service: string; image: string; imageWidth: number; imageHeight: number;
  published: string; updated: string; sourceKeys: string[]; category: string;
};
const sources = sourceCatalog as Record<string, { label: string; url: string }>;
export function OriginalArticle({ article }: { article: Article }) {
  const url = `https://www.nkbregovanta.com/insights/${article.slug}`;
  const date = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(article.updated));
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'BlogPosting', headline: article.title, description: article.description,
      mainEntityOfPage: url, url, image: `https://www.nkbregovanta.com${article.image}`,
      datePublished: article.published, dateModified: article.updated,
      author: { '@type': 'Organization', name: 'NKB Regovanta', url: 'https://www.nkbregovanta.com' },
      publisher: { '@type': 'Organization', name: 'NKB Regovanta', url: 'https://www.nkbregovanta.com' },
      citation: article.sourceKeys.map(key => sources[key]!.url) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nkbregovanta.com/' },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.nkbregovanta.com/insights' },
      { '@type': 'ListItem', position: 3, name: article.title, item: url }
    ] }
  ] };
  return <article className="bg-white py-16 lg:py-24 text-navy">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm"><Link to="/">Home</Link> / <Link to="/insights">Insights</Link></nav>
      <p className="mb-4 text-sm font-semibold tracking-wide">{article.category}</p>
      <h1 className="text-3xl font-bold leading-tight md:text-5xl">{article.title}</h1>
      <p className="my-6 text-lg leading-relaxed text-gray-600">{article.description}</p>
      <p className="mb-8 text-sm text-gray-600">By NKB Regovanta · Updated <time dateTime={article.updated}>{date}</time></p>
      <img src={article.image} alt={article.title} width={article.imageWidth} height={article.imageHeight} className="mb-10 aspect-video w-full rounded-2xl object-cover" />
      <p className="mb-8 text-lg leading-relaxed">{article.intro}</p>
      {article.sections.map((section, index) => <section key={section.title} aria-labelledby={`section-${index}`} className="mb-10">
        <h2 id={`section-${index}`} className="mb-4 text-2xl font-bold">{section.title}</h2>
        {section.paragraphs.map(paragraph => <p key={paragraph} className="mb-4 leading-8 text-gray-700">{paragraph}</p>)}
        {section.sourceKeys?.length ? <p className="text-sm leading-6">References: {section.sourceKeys.map((key, i) => <span key={key}>{i ? '; ' : ''}<a className="underline" href={sources[key]!.url}>{sources[key]!.label}</a></span>)}</p> : null}
      </section>)}
      <section className="mb-10 rounded-xl bg-slate-50 p-6"><h2 className="mb-4 text-2xl font-bold">Illustrative example</h2><p className="leading-8">{article.example}</p></section>
      <section className="mb-10"><h2 className="mb-4 text-2xl font-bold">Preparation checklist</h2><ul className="list-disc space-y-3 pl-6">{article.checklist.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className="mb-10"><h2 className="mb-4 text-2xl font-bold">{article.faq.question}</h2><p className="leading-8">{article.faq.answer}</p></section>
      <section className="mb-10 border-t pt-8"><h2 className="mb-4 text-2xl font-bold">Official sources</h2><ul className="list-disc space-y-3 pl-6">{article.sourceKeys.map(key => <li key={key}><a className="underline" href={sources[key]!.url}>{sources[key]!.label}</a></li>)}</ul></section>
      <aside className="rounded-xl bg-slate-50 p-6"><h2 className="mb-4 text-2xl font-bold">Plan your next step</h2><p className="mb-4"><Link className="underline" to={article.service}>Explore related consulting support</Link></p><Link className="font-semibold underline" to="/contact">Discuss your project with NKB Regovanta</Link></aside>
    </div>
  </article>;
}

