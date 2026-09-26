import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Eye } from 'lucide-react';
import sourceCatalog from '@/content/article-sources.json';

type Article = {
  slug: string; title: string; description: string; intro: string;
  sections: { title: string; paragraphs: string[]; sourceKeys?: string[] }[];
  example: string; checklist: string[]; faq: { question: string; answer: string };
  service: string; image: string; imageWidth: number; imageHeight: number;
  published: string; updated: string; sourceKeys: string[]; category: string;
};

const sources = sourceCatalog as Record<string, { label: string; url: string }>;

// Tracks articles whose admin-edited version is actively loading
export function OriginalArticle({ article }: { article: Article }) {
  const [dbContent, setDbContent] = useState<{
    title: string;
    content_html: string;
    excerpt?: string;
    featured_image?: string;
    featured_image_alt?: string;
    updated_at?: string;
    status?: string;
  } | null>(null);
  const [checked, setChecked] = useState(false);
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    const isDraftPreview =
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).get('preview') === '1' ||
        new URLSearchParams(window.location.search).get('preview') === 'true');

    setIsPreview(isDraftPreview);

    let query = supabase
      .from('blog_posts')
      .select('title, content_html, excerpt, featured_image, featured_image_alt, updated_at, status')
      .eq('slug', article.slug);

    if (!isDraftPreview) {
      query = query.eq('status', 'published');
    }

    query.maybeSingle().then(({ data }) => {
      // Only use DB version if it has meaningful content_html
      if (data && data.content_html && data.content_html.trim().length > 50) {
        setDbContent(data);
      }
      setChecked(true);
    });
  }, [article.slug]);

  // While DB check is in flight, show a minimal spinner to avoid flash
  if (!checked) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  // ----------------------------------------------------------------
  // BRANCH A: Supabase has an updated version — render it
  // ----------------------------------------------------------------
  if (dbContent) {
    const canonicalUrl = `https://www.nkbregovanta.com/insights/${article.slug}`;
    const wordCount = dbContent.content_html.replace(/<[^>]+>/g, '').split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));
    const formattedDate = dbContent.updated_at
      ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(dbContent.updated_at))
      : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(article.updated));

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: dbContent.title,
          description: dbContent.excerpt || article.description,
          mainEntityOfPage: canonicalUrl,
          url: canonicalUrl,
          image: dbContent.featured_image
            ? `https://www.nkbregovanta.com${dbContent.featured_image}`
            : `https://www.nkbregovanta.com${article.image}`,
          datePublished: article.published,
          dateModified: dbContent.updated_at || article.updated,
          author: { '@type': 'Organization', name: 'NKB Regovanta', url: 'https://www.nkbregovanta.com' },
          publisher: { '@type': 'Organization', name: 'NKB Regovanta', url: 'https://www.nkbregovanta.com' },
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nkbregovanta.com/' },
            { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.nkbregovanta.com/insights' },
            { '@type': 'ListItem', position: 3, name: dbContent.title, item: canonicalUrl },
          ],
        },
      ],
    };

    return (
      <article className="min-h-screen bg-white py-12 lg:py-20 text-slate-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />

        {/* Draft Preview Bar */}
        {isPreview && dbContent.status !== 'published' && (
          <div className="sticky top-0 z-50 mb-8 flex items-center justify-between bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md">
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>PREVIEW MODE: This article is currently saved as a <strong>{dbContent.status?.toUpperCase() || 'DRAFT'}</strong> in the database.</span>
            </div>
            <Link
              to="/admin/blog/posts"
              className="rounded bg-slate-900 px-2.5 py-1 text-[11px] text-white hover:bg-slate-800 transition"
            >
              Back to Admin
            </Link>
          </div>
        )}

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-medium text-slate-500">
            <Link to="/" className="hover:text-blue-700 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/insights" className="hover:text-blue-700 transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-slate-700">{article.category}</span>
          </nav>

          <p className="mb-4 text-xs font-bold uppercase tracking-wider text-blue-700">{article.category}</p>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {dbContent.title}
          </h1>

          {dbContent.excerpt && (
            <p className="mt-5 text-xl leading-relaxed text-slate-600">{dbContent.excerpt}</p>
          )}

          <p className="mt-4 text-sm text-slate-500">
            By NKB Regovanta &middot; Updated{' '}
            <time dateTime={dbContent.updated_at || article.updated}>{formattedDate}</time>
            {' \u00b7 '}{readTime} min read
          </p>

          {/* Featured Image */}
          {(dbContent.featured_image || article.image) && (
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src={dbContent.featured_image || article.image}
                alt={dbContent.featured_image_alt || dbContent.title}
                className="aspect-video w-full object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Rich text body from admin editor */}
          <div
            className="prose prose-slate lg:prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800 prose-img:rounded-xl prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-slate-200 my-10"
            dangerouslySetInnerHTML={{ __html: dbContent.content_html }}
          />

          {/* Consulting CTA */}
          <aside className="my-14 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-950 p-8 text-white shadow-xl">
            <h2 className="text-2xl font-bold tracking-tight">Need Expert Regulatory Strategy for This Device?</h2>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
              Our medical device and IVD regulatory consultants support pre-market submissions, clinical evaluation,
              technical documentation dossiers, and regulatory audits worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Discuss Your Project With NKB Regovanta
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                Browse All Guides
              </Link>
            </div>
          </aside>
        </div>
      </article>
    );
  }

  // ----------------------------------------------------------------
  // BRANCH B: No DB record — render original static JSON content
  // ----------------------------------------------------------------
  const url = `https://www.nkbregovanta.com/insights/${article.slug}`;
  const date = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(article.updated));
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        mainEntityOfPage: url,
        url,
        image: `https://www.nkbregovanta.com${article.image}`,
        datePublished: article.published,
        dateModified: article.updated,
        author: { '@type': 'Organization', name: 'NKB Regovanta', url: 'https://www.nkbregovanta.com' },
        publisher: { '@type': 'Organization', name: 'NKB Regovanta', url: 'https://www.nkbregovanta.com' },
        citation: article.sourceKeys.map(key => sources[key]!.url),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nkbregovanta.com/' },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.nkbregovanta.com/insights' },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      },
    ],
  };

  return (
    <article className="bg-white py-16 lg:py-24 text-navy">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link to="/">Home</Link> / <Link to="/insights">Insights</Link>
        </nav>
        <p className="mb-4 text-sm font-semibold tracking-wide">{article.category}</p>
        <h1 className="text-3xl font-bold leading-tight md:text-5xl">{article.title}</h1>
        <p className="my-6 text-lg leading-relaxed text-gray-600">{article.description}</p>
        <p className="mb-8 text-sm text-gray-600">
          By NKB Regovanta &middot; Updated <time dateTime={article.updated}>{date}</time>
        </p>
        <img
          src={article.image}
          alt={article.title}
          width={article.imageWidth}
          height={article.imageHeight}
          className="mb-10 aspect-video w-full rounded-2xl object-cover"
        />
        <p className="mb-8 text-lg leading-relaxed">{article.intro}</p>
        {article.sections.map((section, index) => (
          <section key={section.title} aria-labelledby={`section-${index}`} className="mb-10">
            <h2 id={`section-${index}`} className="mb-4 text-2xl font-bold">{section.title}</h2>
            {section.paragraphs.map(paragraph => (
              <p key={paragraph} className="mb-4 leading-8 text-gray-700">{paragraph}</p>
            ))}
            {section.sourceKeys?.length ? (
              <p className="text-sm leading-6">
                References:{' '}
                {section.sourceKeys.map((key, i) => (
                  <span key={key}>
                    {i ? '; ' : ''}
                    <a className="underline" href={sources[key]!.url}>{sources[key]!.label}</a>
                  </span>
                ))}
              </p>
            ) : null}
          </section>
        ))}
        <section className="mb-10 rounded-xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold">Illustrative example</h2>
          <p className="leading-8">{article.example}</p>
        </section>
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">Preparation checklist</h2>
          <ul className="list-disc space-y-3 pl-6">
            {article.checklist.map(item => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-bold">{article.faq.question}</h2>
          <p className="leading-8">{article.faq.answer}</p>
        </section>
        <section className="mb-10 border-t pt-8">
          <h2 className="mb-4 text-2xl font-bold">Official sources</h2>
          <ul className="list-disc space-y-3 pl-6">
            {article.sourceKeys.map(key => (
              <li key={key}><a className="underline" href={sources[key]!.url}>{sources[key]!.label}</a></li>
            ))}
          </ul>
        </section>
        <aside className="rounded-xl bg-slate-50 p-6">
          <h2 className="mb-4 text-2xl font-bold">Plan your next step</h2>
          <p className="mb-4">
            <Link className="underline" to={article.service}>Explore related consulting support</Link>
          </p>
          <Link className="font-semibold underline" to="/contact">
            Discuss your project with NKB Regovanta
          </Link>
        </aside>
      </div>
    </article>
  );
}
