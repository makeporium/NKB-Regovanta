import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Eye, Clock, Calendar, ArrowLeft } from 'lucide-react';

interface DynamicArticleProps {
  slug: string;
  defaultCategory?: string;
  defaultImage?: string;
  children: React.ReactNode;
}

interface DBContent {
  title: string;
  content_html: string;
  excerpt?: string;
  featured_image?: string;
  featured_image_alt?: string;
  updated_at?: string;
  status?: string;
  category_name?: string;
}

export function DynamicOrStaticArticle({
  slug,
  defaultCategory = 'REGULATORY INSIGHT',
  defaultImage = '/assets/insights/digital_health_tablet.jpg',
  children,
}: DynamicArticleProps) {
  const [dbContent, setDbContent] = useState<DBContent | null>(null);
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
      .select('title, content_html, excerpt, featured_image, featured_image_alt, updated_at, status, blog_categories(name)')
      .eq('slug', slug);

    if (!isDraftPreview) {
      query = query.eq('status', 'published');
    }

    query.maybeSingle().then(({ data }) => {
      if (data && data.content_html && data.content_html.trim().length > 50) {
        setDbContent({
          title: data.title,
          content_html: data.content_html,
          excerpt: data.excerpt,
          featured_image: data.featured_image,
          featured_image_alt: data.featured_image_alt,
          updated_at: data.updated_at,
          status: data.status,
          category_name: (data as any).blog_categories?.name,
        });
      }
      setChecked(true);
    });
  }, [slug]);

  if (!checked) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-slate-50">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      </div>
    );
  }

  // If Supabase has published or previewed content, render live dynamic article
  if (dbContent) {
    const canonicalUrl = `https://www.nkbregovanta.com/insights/${slug}`;
    const wordCount = dbContent.content_html.replace(/<[^>]+>/g, '').split(/\s+/).length;
    const readTime = Math.max(1, Math.round(wordCount / 200));
    const formattedDate = dbContent.updated_at
      ? new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(dbContent.updated_at))
      : new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date());

    const activeCategory = dbContent.category_name || defaultCategory;
    const heroImage = dbContent.featured_image || defaultImage;

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BlogPosting',
          headline: dbContent.title,
          description: dbContent.excerpt || '',
          mainEntityOfPage: canonicalUrl,
          url: canonicalUrl,
          image: heroImage.startsWith('http') ? heroImage : `https://www.nkbregovanta.com${heroImage}`,
          dateModified: dbContent.updated_at,
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
              <span>PREVIEW MODE: This article is currently saved as a <strong>{dbContent.status?.toUpperCase()}</strong> in the database.</span>
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
            <span className="text-slate-700 truncate max-w-[260px]">{activeCategory}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0b3a96]">
              {activeCategory}
            </span>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {dbContent.title}
          </h1>

          {dbContent.excerpt && (
            <p className="mt-5 text-xl leading-relaxed text-slate-600 font-medium">{dbContent.excerpt}</p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 border-b border-slate-100 pb-6">
            <span>By NKB Regovanta</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-slate-400" />
              Updated <time dateTime={dbContent.updated_at}>{formattedDate}</time>
            </span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              {readTime} min read
            </span>
          </div>

          {/* Featured Image */}
          {heroImage && (
            <div className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src={heroImage}
                alt={dbContent.featured_image_alt || dbContent.title}
                className="aspect-video w-full object-cover"
                loading="eager"
              />
            </div>
          )}

          {/* Rich text body from admin editor */}
          <div
            className="prose prose-slate lg:prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 prose-a:text-[#0b3a96] prose-a:underline hover:prose-a:text-blue-700 prose-img:rounded-xl prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-slate-200 my-10 space-y-6 leading-relaxed"
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

  // Otherwise render original static children
  return <>{children}</>;
}
