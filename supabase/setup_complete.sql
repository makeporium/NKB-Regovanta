-- =============================================================================
-- NKB REGOVANTA - SUPABASE DATABASE SCHEMA
-- SEO Control Panel & Blog Management System
-- =============================================================================
-- Instructions: 
-- 1. Open your Supabase Project Dashboard: https://supabase.com/dashboard/project/zoihnehiptkfgxshtazi
-- 2. Go to the "SQL Editor" in the left sidebar.
-- 3. Click "New Query", paste all of this content, and click "Run".
-- =============================================================================

-- Enable pgcrypto for UUID generation if not already active
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── 1. Admin Users & Security ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    full_name TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    failed_attempts INTEGER DEFAULT 0,
    locked_until TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.login_activity (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.admin_users(id) ON DELETE SET NULL,
    ip TEXT,
    user_agent TEXT,
    success BOOLEAN NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.password_resets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.admin_users(id) ON DELETE CASCADE,
    token_hash TEXT NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    used BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 2. Global Site Settings ──────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── 3. Pages & On-Page SEO ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL,
    url_path TEXT UNIQUE NOT NULL,
    status TEXT DEFAULT 'published', -- 'published' | 'draft'
    is_in_sitemap BOOLEAN DEFAULT true,
    h1 TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.seo_meta (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    target_url TEXT UNIQUE NOT NULL, -- e.g. '/services/india' or '/blog/how-to-register'
    page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE,
    seo_title TEXT,
    meta_description TEXT,
    focus_keyword TEXT,
    secondary_keywords TEXT[] DEFAULT '{}',
    canonical_type TEXT DEFAULT 'self', -- 'self' | 'custom'
    canonical_url TEXT,
    robots_index TEXT DEFAULT 'index', -- 'index' | 'noindex'
    robots_follow TEXT DEFAULT 'follow', -- 'follow' | 'nofollow'
    og_title TEXT,
    og_description TEXT,
    og_image TEXT,
    twitter_title TEXT,
    twitter_description TEXT,
    twitter_image TEXT,
    h2_suggestions TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.schema_data (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    target_url TEXT UNIQUE NOT NULL,
    schema_type TEXT DEFAULT 'WebPage',
    is_enabled BOOLEAN DEFAULT true,
    custom_json TEXT,
    faq_items JSONB DEFAULT '[]'::jsonb,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ── 4. Blog Engine: Categories, Tags, Authors & Posts ────────────────────────
CREATE TABLE IF NOT EXISTS public.authors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    bio TEXT,
    photo_url TEXT,
    linkedin_url TEXT,
    credentials TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.blog_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    seo_title TEXT,
    meta_description TEXT,
    intro_text TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.blog_tags (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    allow_indexing BOOLEAN DEFAULT false, -- Default false per brief
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content_html TEXT NOT NULL,
    content_raw TEXT,
    excerpt TEXT,
    featured_image TEXT,
    featured_image_alt TEXT,
    featured_image_title TEXT,
    featured_image_caption TEXT,
    author_id UUID REFERENCES public.authors(id) ON DELETE SET NULL,
    category_id UUID REFERENCES public.blog_categories(id) ON DELETE SET NULL,
    status TEXT DEFAULT 'draft', -- 'draft' | 'published' | 'scheduled' | 'trash'
    publish_date_ist TIMESTAMPTZ DEFAULT now(),
    is_in_sitemap BOOLEAN DEFAULT true,
    trashed_at TIMESTAMPTZ,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.blog_post_tags (
    post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
    tag_id UUID REFERENCES public.blog_tags(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, tag_id)
);

CREATE TABLE IF NOT EXISTS public.revisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type TEXT NOT NULL, -- 'page' | 'post'
    entity_id UUID NOT NULL,
    title TEXT,
    content TEXT,
    meta_json JSONB,
    created_by TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 5. SEO Intelligence: Keywords, Images, Links & Redirects ─────────────────
CREATE TABLE IF NOT EXISTS public.keywords (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    keyword TEXT NOT NULL,
    type TEXT DEFAULT 'Primary', -- 'Primary' | 'Secondary'
    target_url TEXT,
    status TEXT DEFAULT 'Active', -- 'Active' | 'Inactive'
    notes TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    url TEXT UNIQUE NOT NULL,
    file_size INTEGER, -- bytes
    width INTEGER,
    height INTEGER,
    format TEXT,
    alt_text TEXT,
    title TEXT,
    caption TEXT,
    description TEXT,
    is_decorative BOOLEAN DEFAULT false,
    warnings_json JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.internal_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_url TEXT NOT NULL,
    anchor_text TEXT NOT NULL,
    target_url TEXT NOT NULL,
    status TEXT DEFAULT 'Live', -- 'Live' | 'Planned'
    last_checked_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.redirects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    old_path TEXT UNIQUE NOT NULL,
    new_path TEXT NOT NULL,
    status_code INTEGER DEFAULT 301, -- 301 | 302
    is_active BOOLEAN DEFAULT true,
    hits INTEGER DEFAULT 0,
    last_hit_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.not_found_log (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    url_path TEXT UNIQUE NOT NULL,
    hits INTEGER DEFAULT 1,
    referrer TEXT,
    first_hit_at TIMESTAMPTZ DEFAULT now(),
    last_hit_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.broken_links (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_url TEXT NOT NULL,
    target_url TEXT NOT NULL,
    anchor_text TEXT,
    http_status INTEGER,
    label TEXT NOT NULL, -- 'Broken', 'Redirected', 'Check manually', 'Timeout'
    is_external BOOLEAN DEFAULT false,
    last_checked_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.robots_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT NOT NULL,
    created_by_name TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- ── 6. Performance Indexes ───────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_pages_url_path ON public.pages(url_path);
CREATE INDEX IF NOT EXISTS idx_seo_meta_target_url ON public.seo_meta(target_url);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_redirects_old_path ON public.redirects(old_path);
CREATE INDEX IF NOT EXISTS idx_keywords_target_url ON public.keywords(target_url);

-- ── 7. Row Level Security (RLS) ──────────────────────────────────────────────
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.login_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.password_resets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_meta ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.schema_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.revisions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keywords ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.internal_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.redirects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.not_found_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.broken_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.robots_versions ENABLE ROW LEVEL SECURITY;

-- Anonymous/Public Read Policies:
DROP POLICY IF EXISTS "Public can view settings" ON public.settings;
CREATE POLICY "Public can view settings" ON public.settings FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view published pages" ON public.pages;
CREATE POLICY "Public can view published pages" ON public.pages FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Public can view seo_meta" ON public.seo_meta;
CREATE POLICY "Public can view seo_meta" ON public.seo_meta FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view schema_data" ON public.schema_data;
CREATE POLICY "Public can view schema_data" ON public.schema_data FOR SELECT USING (is_enabled = true);

DROP POLICY IF EXISTS "Public can view authors" ON public.authors;
CREATE POLICY "Public can view authors" ON public.authors FOR SELECT USING (is_active = true);

DROP POLICY IF EXISTS "Public can view categories" ON public.blog_categories;
CREATE POLICY "Public can view categories" ON public.blog_categories FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view tags" ON public.blog_tags;
CREATE POLICY "Public can view tags" ON public.blog_tags FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can view published blog_posts" ON public.blog_posts;
CREATE POLICY "Public can view published blog_posts" ON public.blog_posts FOR SELECT USING (status = 'published');

DROP POLICY IF EXISTS "Public can view active redirects" ON public.redirects;
CREATE POLICY "Public can view active redirects" ON public.redirects FOR SELECT USING (is_active = true);

-- App Read/Write Policies:
DROP POLICY IF EXISTS "App full access to settings" ON public.settings;
CREATE POLICY "App full access to settings" ON public.settings FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to admin_users" ON public.admin_users;
CREATE POLICY "App full access to admin_users" ON public.admin_users FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to login_activity" ON public.login_activity;
CREATE POLICY "App full access to login_activity" ON public.login_activity FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to password_resets" ON public.password_resets;
CREATE POLICY "App full access to password_resets" ON public.password_resets FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to pages" ON public.pages;
CREATE POLICY "App full access to pages" ON public.pages FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to seo_meta" ON public.seo_meta;
CREATE POLICY "App full access to seo_meta" ON public.seo_meta FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to schema_data" ON public.schema_data;
CREATE POLICY "App full access to schema_data" ON public.schema_data FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to authors" ON public.authors;
CREATE POLICY "App full access to authors" ON public.authors FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to categories" ON public.blog_categories;
CREATE POLICY "App full access to categories" ON public.blog_categories FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to tags" ON public.blog_tags;
CREATE POLICY "App full access to tags" ON public.blog_tags FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to blog_posts" ON public.blog_posts;
CREATE POLICY "App full access to blog_posts" ON public.blog_posts FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to blog_post_tags" ON public.blog_post_tags;
CREATE POLICY "App full access to blog_post_tags" ON public.blog_post_tags FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to revisions" ON public.revisions;
CREATE POLICY "App full access to revisions" ON public.revisions FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to keywords" ON public.keywords;
CREATE POLICY "App full access to keywords" ON public.keywords FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to images" ON public.images;
CREATE POLICY "App full access to images" ON public.images FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to internal_links" ON public.internal_links;
CREATE POLICY "App full access to internal_links" ON public.internal_links FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to redirects" ON public.redirects;
CREATE POLICY "App full access to redirects" ON public.redirects FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to not_found_log" ON public.not_found_log;
CREATE POLICY "App full access to not_found_log" ON public.not_found_log FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to broken_links" ON public.broken_links;
CREATE POLICY "App full access to broken_links" ON public.broken_links FOR ALL USING (true);

DROP POLICY IF EXISTS "App full access to robots_versions" ON public.robots_versions;
CREATE POLICY "App full access to robots_versions" ON public.robots_versions FOR ALL USING (true);

-- ── 8. Initial Baseline Seed Data ────────────────────────────────────────────

-- Default Admin User:
-- Username: admin
-- Email: admin@nkbregovanta.com
-- Initial password: AdminPassword123!
INSERT INTO public.admin_users (email, username, password_hash, salt, full_name, is_active)
VALUES (
    'admin@nkbregovanta.com',
    'admin',
    'a5129ac9aacc4f3cf04e1d816d2ef73e58fa081f99f1fd3af0fa67436239133b98be854a3cc67132438b0451c84a3d73cf89a58aac812df70851ea0213f2bdc0',
    'e6988891d4e41253457ff5c28e9323ef4190c10a196f7c6ec800dbfa02ff3452',
    'NKB Administrator',
    true
)
ON CONFLICT (email) DO NOTHING;

-- Default Settings:
INSERT INTO public.settings (key, value) VALUES
    ('site_name', 'NKB Regovanta'),
    ('site_url', 'https://www.nkbregovanta.com'),
    ('title_suffix', ' | NKB Regovanta'),
    ('timezone', 'Asia/Kolkata'),
    ('image_size_limit_kb', '200'),
    ('session_timeout_minutes', '30'),
    ('ga4_measurement_id', ''),
    ('search_console_tag', ''),
    ('gtm_container_id', ''),
    ('logo_url', '/favicon.png'),
    ('default_share_image', '/og-image.png'),
    ('org_legal_name', 'NKB Regovanta Solutions Pvt. Ltd.'),
    ('org_phone', '+919513699000'),
    ('org_email', 'contact@nkbregovanta.com'),
    ('org_address_street', 'Building No 20, Awadh Kunj, Faridi Nagar, CIMAP'),
    ('org_address_city', 'Lucknow'),
    ('org_address_region', 'Uttar Pradesh'),
    ('org_address_postal', '226015'),
    ('org_address_country', 'IN'),
    ('org_linkedin', 'https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/'),
    ('robots_txt', 'User-agent: *' || E'\n' || 'Allow: /' || E'\n' || 'Sitemap: https://www.nkbregovanta.com/sitemap.xml')
ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;

-- Starting Categories:
INSERT INTO public.blog_categories (name, slug, seo_title, meta_description, intro_text) VALUES
    ('Medical Device Regulatory', 'medical-device-regulatory', 'Medical Device Regulatory Guides | NKB Regovanta', 'In-depth regulatory frameworks and compliance guides for medical devices.', 'Navigate the complex global regulatory landscapes for medical devices with expert guidance from NKB Regovanta.'),
    ('CDSCO', 'cdsco', 'CDSCO Medical Device Regulatory Guides | NKB Regovanta', 'Official CDSCO registration, MD-14, MD-15, and compliance processes in India.', 'Comprehensive guidance on CDSCO regulations, registration, import licenses, and clinical evaluations in India.'),
    ('EU MDR', 'eu-mdr', 'EU MDR 2017/745 Compliance & CE Marking Guides | NKB Regovanta', 'European Medical Device Regulation (EU MDR) technical files, GSPR, CER, and Notified Body requirements.', 'Practical insights into achieving and maintaining CE marking under the European MDR 2017/745 regulation.'),
    ('FDA', 'fda', 'US FDA Medical Device Clearance Guides | NKB Regovanta', 'US FDA 510(k), De Novo, PMA, and QSR/QMSR compliance for medical devices.', 'Step-by-step strategies for US FDA 510(k) submissions, eSTAR filing, and FDA quality system readiness.'),
    ('IVDR', 'ivdr', 'EU IVDR 2017/746 In-Vitro Diagnostics Guides | NKB Regovanta', 'In-Vitro Diagnostic Regulation compliance, performance evaluation, and classification.', 'Regulatory roadmaps for IVD manufacturers transitioning to EU IVDR 2017/746.'),
    ('Cosmetics', 'cosmetics', 'Cosmetics Regulatory Compliance Guides | NKB Regovanta', 'Cosmetics registration, safety assessment, labeling, and MoCRA compliance.', 'Global regulatory advisory for cosmetics manufacturers and importers across India, EU, and USA.'),
    ('Market Access', 'market-access', 'Global MedTech Market Access & Expansion | NKB Regovanta', 'Fast-track international regulatory roadmaps for UK, Canada, Australia, Brazil, and GCC.', 'Strategic regulatory entry pathways for emerging and established MedTech markets worldwide.')
ON CONFLICT (slug) DO NOTHING;

-- Starting Tags:
INSERT INTO public.blog_tags (name, slug, allow_indexing) VALUES
    ('CDSCO', 'cdsco', false),
    ('Medical Devices', 'medical-devices', false),
    ('FDA 510(k)', 'fda-510k', false),
    ('EU MDR', 'eu-mdr', false),
    ('IVDR', 'ivdr', false),
    ('Medical Device Registration', 'medical-device-registration', false)
ON CONFLICT (slug) DO NOTHING;

-- Starting Author:
INSERT INTO public.authors (name, slug, bio, photo_url, linkedin_url, credentials, is_active) VALUES
    ('NKB Regulatory Experts', 'nkb-regulatory-experts', 'Senior Regulatory Affairs & Quality Assurance Specialists at NKB Regovanta Solutions Pvt. Ltd., guiding MedTech manufacturers worldwide across CDSCO, US FDA, EU MDR, and ISO 13485 compliance.', '/favicon.png', 'https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/', 'M.Pharm, RAC (Global Regulatory Affairs Certified)', true)
ON CONFLICT (slug) DO NOTHING;

-- Seed Existing 13 Redirects:
INSERT INTO public.redirects (old_path, new_path, status_code, is_active) VALUES
    ('/ai_news', '/ai-news', 301, true),
    ('/services/regulatory-affairs', '/services/global-medical-device-ivd-regulatory-affairs-consulting', 301, true),
    ('/services/drug-device-combination-products', '/services/drug-device-combination-product-consulting', 301, true),
    ('/services/regulatory-due-diligence', '/services/medical-device-ivd-regulatory-due-diligence', 301, true),
    ('/services/wpc-wireless-medical-devices', '/services/wpc-approval-wireless-medical-devices-india', 301, true),
    ('/services/pc-pndt-certificate', '/services/pc-pndt-registration-consultant-certificate-india', 301, true),
    ('/services/iec-ad-code', '/services/iec-ad-code-registration-india', 301, true),
    ('/services/drug-licenses-for-importers', '/services/drug-licenses-importers-india-form-10-form-41', 301, true),
    ('/services/manufacturing', '/services/pharmaceutical-cleanroom-manufacturing-equipment', 301, true),
    ('/services/iso-13485', '/services/iso-13485-implementation-certification-consulting', 301, true),
    ('/services/technical-documentation', '/services/medical-device-technical-documentation-consulting', 301, true),
    ('/services/market-access', '/services/global-market-access-consulting-medical-devices', 301, true),
    ('/services/audit-compliance', '/services/medical-device-audit-compliance-support', 301, true)
ON CONFLICT (old_path) DO NOTHING;

-- Starting Robots.txt version:
INSERT INTO public.robots_versions (content, created_by_name)
VALUES (
    'User-agent: *' || E'\n' || 'Allow: /' || E'\n' || 'Sitemap: https://www.nkbregovanta.com/sitemap.xml',
    'System Initializer'
);


-- =============================================================================
-- NKB REGOVANTA - PAGES & ARTICLES SEED DATA FOR SUPABASE
-- =============================================================================

-- 1. Seed existing 265 pages
INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('About', 'about', '/about', 'published', true, 'About NKB Regovanta — Global Medical Device Regulatory Consultants')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/about', 'About NKB Regovanta | Medical Device Regulatory Consultants', 'Learn about NKB Regovanta: global medical device regulatory consultants specializing in US FDA, CDSCO, EU MDR/IVDR, and ISO 13485 compliance.', 'self', 'https://www.nkbregovanta.com/about', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Ai-news', 'ai-news', '/ai-news', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/ai-news', 'Live AI Regulatory Intelligence Feed | NKB Regovanta', 'Real-time AI-structured regulatory updates, alerts, and guidance from US FDA, CDSCO India, European Commission (EU MDR/IVDR), and MDSAP.', 'self', 'https://www.nkbregovanta.com/ai-news', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Case-studies > Algorithm-claim', 'algorithm-claim', '/case-studies/algorithm-claim', 'published', true, 'The Algorithm Can Do More. Should the Label?')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/case-studies/algorithm-claim', 'AI Algorithm Label Expansion Case Study | NKB Regovanta', 'Case study: Expanding an AI medical software label through validation, PCCP change protocols, and clinical evidence under FDA and EU MDR frameworks.', 'self', 'https://www.nkbregovanta.com/case-studies/algorithm-claim', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Case-studies > Australia-tga', 'australia-tga', '/case-studies/australia-tga', 'published', true, 'Australia TGA ARTG Inclusion Case Study')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/case-studies/australia-tga', 'Australia TGA ARTG Inclusion Case Study | NKB Regovanta', 'Case study: How NKB Regovanta secured TGA ARTG Inclusion for a Class IIb device by leveraging overseas approvals and targeted conformity assessment.', 'self', 'https://www.nkbregovanta.com/case-studies/australia-tga', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Case-studies > Eu-mdr-remediation', 'eu-mdr-remediation', '/case-studies/eu-mdr-remediation', 'published', true, 'Converting a Legacy Technical File to MDR Without Rebuilding Everything From Zero')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/case-studies/eu-mdr-remediation', 'EU MDR Technical File Remediation | NKB Regovanta', 'Case study: How NKB Regovanta remediated a rejected EU MDR technical dossier, closing GSPR and clinical gaps for successful Notified Body approval.', 'self', 'https://www.nkbregovanta.com/case-studies/eu-mdr-remediation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Case-studies > Fda-biocompatibility', 'fda-biocompatibility', '/case-studies/fda-biocompatibility', 'published', true, 'Using Predicate and Material Equivalence to Avoid Repeating Biocompatibility Testing Without Regulatory Need')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/case-studies/fda-biocompatibility', 'FDA 510(k) Biocompatibility Case Study | NKB Regovanta', 'Case study: How NKB Regovanta resolved an FDA 510(k) biocompatibility deficiency using material equivalence, saving $120,000 and clearing within 45 days.', 'self', 'https://www.nkbregovanta.com/case-studies/fda-biocompatibility', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Case-studies > Fda-simulated-use', 'fda-simulated-use', '/case-studies/fda-simulated-use', 'published', true, 'Avoiding Duplicate Simulated-Use Work by Leveraging an Already Marketed Safety Feature')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/case-studies/fda-simulated-use', 'FDA Simulated-Use Testing Case Study | NKB Regovanta', 'Case study: How NKB Regovanta designed a unified FDA 510(k) simulated-use study covering three equivalence arguments to cut client testing time in half.', 'self', 'https://www.nkbregovanta.com/case-studies/fda-simulated-use', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Case-studies', 'case-studies', '/case-studies', 'published', true, 'Client Case Studies &amp; Success Stories')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/case-studies', 'Client Case Studies & Success Stories | NKB Regovanta', 'Real-world case studies: medical device and IVD manufacturers achieving FDA 510(k) clearance, EU MDR certification, and TGA approval with NKB Regovanta.', 'self', 'https://www.nkbregovanta.com/case-studies', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Case-studies > Test-smarter', 'test-smarter', '/case-studies/test-smarter', 'published', true, 'Medical Device Testing Strategy: Test Smarter, Cover More')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/case-studies/test-smarter', 'Global Device Testing Strategy Case Study | NKB Regovanta', 'Case study: A unified test strategy for FDA 510(k), EU MDR, and TGA ARTG that eliminated duplicate testing and reduced testing budgets by 40%.', 'self', 'https://www.nkbregovanta.com/case-studies/test-smarter', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Contact', 'contact', '/contact', 'published', true, 'Contact NKB Regovanta — Regulatory Consulting Enquiry')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/contact', 'Contact NKB Regovanta | Regulatory Consulting Enquiry', 'Contact NKB Regovanta to book a consultation with our global medical device regulatory specialists for US FDA, CDSCO, EU MDR/IVDR, and ISO 13485.', 'self', 'https://www.nkbregovanta.com/contact', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Homepage', 'home', '/', 'published', true, 'Global Medical Device Regulatory &amp; Market Access Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/', 'Medical Device Regulatory Consultants | NKB Regovanta', 'Leading medical device regulatory consultant. Expert US FDA 510(k), CDSCO licensing, EU MDR/IVDR CE marking, and ISO 13485 QMS compliance worldwide.', 'self', 'https://www.nkbregovanta.com', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Cosmetics', 'cosmetics', '/industries/cosmetics', 'published', true, 'Global Cosmetics Regulatory& Compliance Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/cosmetics', 'Cosmetics Regulatory Consulting | NKB Regovanta', 'Global cosmetics regulatory consulting: CDSCO COS-1/2 registration, US MoCRA facility listing, EU/UK Responsible Person representation, and CPSR support.', 'self', 'https://www.nkbregovanta.com/industries/cosmetics', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Cosmetics > Eu', 'eu', '/industries/cosmetics/eu', 'published', true, 'EU Cosmetic Regulation & Registration Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/cosmetics/eu', 'EU Cosmetic Regulation & Registration | NKB Regovanta', 'EU Cosmetics Regulation (EC) 1223/2009 compliance consulting: CPSR reports, EU Responsible Person, CPNP notification, and European label compliance.', 'self', 'https://www.nkbregovanta.com/industries/cosmetics/eu', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Cosmetics > India > For-importer', 'for-importer', '/industries/cosmetics/india/for-importer', 'published', true, 'Cosmetics Registration for Importers in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/cosmetics/india/for-importer', 'Cosmetics Import Registration India | NKB Regovanta', 'Import cosmetics into India with CDSCO Form COS-1 and COS-2 registration. Expert support for SUGAM portal filings, wholesale licenses, and compliance.', 'self', 'https://www.nkbregovanta.com/industries/cosmetics/india/for-importer', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Cosmetics > India > For-manufacturer', 'for-manufacturer', '/industries/cosmetics/india/for-manufacturer', 'published', true, 'Cosmetic Manufacturing License in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/cosmetics/india/for-manufacturer', 'Cosmetics Manufacturing License in India | NKB Regovanta', 'Obtain CDSCO cosmetic manufacturing licenses (COS-5 & COS-8) in India. Expert guidance for GMP inspections, plant master files, and SLA compliance.', 'self', 'https://www.nkbregovanta.com/industries/cosmetics/india/for-manufacturer', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Cosmetics > India', 'india', '/industries/cosmetics/india', 'published', true, 'Cosmetics Regulatory Compliance in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/cosmetics/india', 'India Cosmetics Regulatory Services | NKB Regovanta', 'CDSCO cosmetics regulatory services in India: COS-1 import registration, COS-8 manufacturing licenses, labelling compliance, and GMP inspection readiness.', 'self', 'https://www.nkbregovanta.com/industries/cosmetics/india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Cosmetics > Uk', 'uk', '/industries/cosmetics/uk', 'published', true, 'Cosmetics Regulatory Services in the UK')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/cosmetics/uk', 'UK Cosmetics Regulatory Services | NKB Regovanta', 'UK Cosmetics Regulation compliance: UK Responsible Person (RP), SCPN notifications, CPSR safety reports, PIF compilation, and post-Brexit labelling.', 'self', 'https://www.nkbregovanta.com/industries/cosmetics/uk', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Cosmetics > Usa', 'usa', '/industries/cosmetics/usa', 'published', true, 'Cosmetics Regulatory Services in the USA')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/cosmetics/usa', 'USA MoCRA Cosmetics Regulatory Services | NKB Regovanta', 'USA MoCRA compliance: FDA cosmetic facility registration, Cosmetic Product Listing (SPL), safety substantiation, and US cosmetic labelling compliance.', 'self', 'https://www.nkbregovanta.com/industries/cosmetics/usa', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries', 'industries', '/industries', 'published', true, 'Healthcare &amp; Life Sciences Regulatory Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries', 'Healthcare & Life Sciences Industries | NKB Regovanta', 'Regulatory consulting across medical devices, IVDs, pharmaceuticals, and cosmetics. Strategic global market access and compliance by NKB Regovanta.', 'self', 'https://www.nkbregovanta.com/industries', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Ivd', 'ivd', '/industries/ivd', 'published', true, 'IVD Regulatory &
              Market Access Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/ivd', 'Global IVD Regulatory Consulting | NKB Regovanta', 'Global IVD regulatory consulting for EU IVDR, CDSCO test licences, FDA 510(k), and Performance Evaluation Reports (PER) for diagnostic kit manufacturers.', 'self', 'https://www.nkbregovanta.com/industries/ivd', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Ivd > Eu', 'eu', '/industries/ivd/eu', 'published', true, 'IVD Regulation in the EU - IVDR 2017/746')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/ivd/eu', 'IVD Regulation in the EU | IVDR 2017/746 | NKB Regovanta', 'A practical guide to EU IVDR 2017/746 covering IVD classification, conformity assessment, performance evaluation, EUDAMED, GSPR, and transition requirements.', 'self', 'https://www.nkbregovanta.com/industries/ivd/eu', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Ivd > India', 'india', '/industries/ivd/india', 'published', true, 'IVD Regulation in India - CDSCO Under MDR 2017')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/ivd/india', 'India CDSCO IVD Regulatory Services | NKB Regovanta', 'India CDSCO IVD consulting: test licences (MD-16/17), import licences (MD-14/15), performance evaluations, and novel IVD approvals under MDR 2017.', 'self', 'https://www.nkbregovanta.com/industries/ivd/india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Ivd > Usa', 'usa', '/industries/ivd/usa', 'published', true, 'IVD Regulation in the USA - US FDA Framework')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/ivd/usa', 'IVD Regulation in the USA | US FDA Framework | NKB Regovanta', 'US FDA IVD regulatory consulting: 510(k) clearance, De Novo classification, CLIA waivers, LDT compliance, and eSTAR submissions from NKB Regovanta.', 'self', 'https://www.nkbregovanta.com/industries/ivd/usa', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Medical-devices', 'medical-devices', '/industries/medical-devices', 'published', true, 'Medical Device Regulatory& Quality Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/medical-devices', 'Medical Device Regulatory Consulting | NKB Regovanta', 'Global medical device regulatory consulting: CDSCO, US FDA, EU MDR, UK MHRA, TGA Australia. End-to-end strategy, registrations, technical files, and QMS.', 'self', 'https://www.nkbregovanta.com/industries/medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Medical-devices > India > For-importer', 'for-importer', '/industries/medical-devices/india/for-importer', 'published', true, 'Medical Device Regulatory Solutions for Importers in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/medical-devices/india/for-importer', 'Medical Device Import Registration India | NKB Regovanta', 'Import medical devices into India with CDSCO MD-14/15 licences. Expert guidance for foreign manufacturers, authorized agents (IAA/AIR), and SUGAM filings.', 'self', 'https://www.nkbregovanta.com/industries/medical-devices/india/for-importer', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Industries > Medical-devices > India > For-manufacturer', 'for-manufacturer', '/industries/medical-devices/india/for-manufacturer', 'published', true, 'Medical Device Manufacturing & Loan Licensing in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/industries/medical-devices/india/for-manufacturer', 'Medical Device Manufacturing India | NKB Regovanta', 'CDSCO medical device manufacturing licenses in India (MD-3/5/7/9). Complete SLA/CLA support, plant inspection readiness, and Class A–D compliance.', 'self', 'https://www.nkbregovanta.com/industries/medical-devices/india/for-manufacturer', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Biological-evaluation-testing-medical-devices-iso-10993', 'biological-evaluation-testing-medical-devices-iso-10993', '/insights/biological-evaluation-testing-medical-devices-iso-10993', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/biological-evaluation-testing-medical-devices-iso-10993', 'ISO 10993 Biocompatibility Testing | NKB Regovanta', 'Plan biological evaluation using finished-device contact, materials, processing, available evidence, and current standards-recognition requirements.', 'self', 'https://www.nkbregovanta.com/insights/biological-evaluation-testing-medical-devices-iso-10993', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Borderline-medical-device-classification-strategy', 'borderline-medical-device-classification-strategy', '/insights/borderline-medical-device-classification-strategy', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/borderline-medical-device-classification-strategy', 'Borderline Medical Device Classification | NKB Regovanta', 'Assess borderline products using intended purpose, mode of action, claims, and jurisdiction-specific reasoning before selecting a device class.', 'self', 'https://www.nkbregovanta.com/insights/borderline-medical-device-classification-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Cdsco-medical-device-manufacturing-license-india', 'cdsco-medical-device-manufacturing-license-india', '/insights/cdsco-medical-device-manufacturing-license-india', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/cdsco-medical-device-manufacturing-license-india', 'CDSCO Device Manufacturing License Guide | NKB Regovanta', 'Plan an Indian medical-device manufacturing application around classification, site scope, product evidence, and consistent licence documentation.', 'self', 'https://www.nkbregovanta.com/insights/cdsco-medical-device-manufacturing-license-india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Cdsco-medical-device-registration-guidelines-india', 'cdsco-medical-device-registration-guidelines-india', '/insights/cdsco-medical-device-registration-guidelines-india', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/cdsco-medical-device-registration-guidelines-india', 'CDSCO Device Registration Guide India | NKB Regovanta', 'Prepare an Indian medical-device registration strategy using product classification, applicant roles, manufacturing or import scope, and current rules.', 'self', 'https://www.nkbregovanta.com/insights/cdsco-medical-device-registration-guidelines-india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Ce-marking-cardiovascular-medical-devices', 'ce-marking-cardiovascular-medical-devices', '/insights/ce-marking-cardiovascular-medical-devices', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/ce-marking-cardiovascular-medical-devices', 'CE Marking for Cardiovascular Devices | NKB Regovanta', 'Plan cardiovascular-device evidence across design performance, patient contact, clinical benefit, and follow-up without assuming one route fits all products.', 'self', 'https://www.nkbregovanta.com/insights/ce-marking-cardiovascular-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Ce-marking-digital-health-technologies', 'ce-marking-digital-health-technologies', '/insights/ce-marking-digital-health-technologies', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/ce-marking-digital-health-technologies', 'CE Marking for Digital Health Under EU MDR | NKB Regovanta', 'Plan EU medical software qualification, classification, clinical evidence, and release controls around a clearly defined intended purpose.', 'self', 'https://www.nkbregovanta.com/insights/ce-marking-digital-health-technologies', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Ce-marking-process-medical-devices-eu-mdr', 'ce-marking-process-medical-devices-eu-mdr', '/insights/ce-marking-process-medical-devices-eu-mdr', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/ce-marking-process-medical-devices-eu-mdr', 'EU MDR CE Marking Step-by-Step Guide | NKB Regovanta', 'Sequence EU MDR qualification, classification, evidence, conformity assessment, declaration, and ongoing obligations in a practical project plan.', 'self', 'https://www.nkbregovanta.com/insights/ce-marking-process-medical-devices-eu-mdr', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Class-iii-medical-device-classification-strategy', 'class-iii-medical-device-classification-strategy', '/insights/class-iii-medical-device-classification-strategy', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/class-iii-medical-device-classification-strategy', 'Class III Medical Device Strategy | NKB Regovanta', 'Investigate FDA classification, product codes, and evidence requirements before assuming that a device needs a 510(k) or a PMA.', 'self', 'https://www.nkbregovanta.com/insights/class-iii-medical-device-classification-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Clinical-evaluation-equivalence-medical-devices', 'clinical-evaluation-equivalence-medical-devices', '/insights/clinical-evaluation-equivalence-medical-devices', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/clinical-evaluation-equivalence-medical-devices', 'EU MDR Clinical Equivalence Guide | NKB Regovanta', 'Evaluate technical, biological, and clinical equivalence, data access, and evidence gaps before relying on another device', 'self', 'https://www.nkbregovanta.com/insights/clinical-evaluation-equivalence-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Core-regulations-medical-device-global-compliance', 'core-regulations-medical-device-global-compliance', '/insights/core-regulations-medical-device-global-compliance', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/core-regulations-medical-device-global-compliance', 'Core Global MedTech Regulations Guide | NKB Regovanta', 'Create a product-specific register linking device rules, software, electrical safety, biological evaluation, and other applicable obligations.', 'self', 'https://www.nkbregovanta.com/insights/core-regulations-medical-device-global-compliance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Dental-scanners-manufacturing-regulatory-standards', 'dental-scanners-manufacturing-regulatory-standards', '/insights/dental-scanners-manufacturing-regulatory-standards', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/dental-scanners-manufacturing-regulatory-standards', 'Intraoral Dental Scanner Regulations | NKB Regovanta', 'Plan dental-scanner evidence for intended use, scan accuracy, software processing, reprocessing, and downstream digital workflows.', 'self', 'https://www.nkbregovanta.com/insights/dental-scanners-manufacturing-regulatory-standards', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Dynamic-risk-management-software-medical-devices', 'dynamic-risk-management-software-medical-devices', '/insights/dynamic-risk-management-software-medical-devices', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/dynamic-risk-management-software-medical-devices', 'Medical Device Software Risk Management | NKB Regovanta', 'Connect software incidents, dependency updates, and clinical feedback to risk assessment, change control, and verified release decisions.', 'self', 'https://www.nkbregovanta.com/insights/dynamic-risk-management-software-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Effective-capa-system-medical-devices', 'effective-capa-system-medical-devices', '/insights/effective-capa-system-medical-devices', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/effective-capa-system-medical-devices', 'ISO 13485 & QMSR CAPA System Guide | NKB Regovanta', 'Build CAPA records around problem definition, investigation, cause-based actions, effectiveness measures, and a justified closure decision.', 'self', 'https://www.nkbregovanta.com/insights/effective-capa-system-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Eu-ai-act-medical-devices', 'eu-ai-act-medical-devices', '/insights/eu-ai-act-medical-devices', 'published', true, 'EU AI Act and Medical Devices: What MedTech Manufacturers Need to Get Right')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/eu-ai-act-medical-devices', 'EU AI Act for Medical Devices Guide | NKB Regovanta', 'A practical regulatory guide for manufacturers developing AI-enabled medical devices and software under the EU AI Act and EU MDR/IVDR.', 'self', 'https://www.nkbregovanta.com/insights/eu-ai-act-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Eu-mdr-2026', 'eu-mdr-2026', '/insights/eu-mdr-2026', 'published', true, 'EU MDR 2026: EUDAMED, Classification & Compliance Priorities')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/eu-mdr-2026', 'EU MDR 2026 EUDAMED & Priorities | NKB Regovanta', 'EU MDR 2026 update covering mandatory EUDAMED modules, UDI/device registration, certificates, market surveillance and practical manufacturer priorities.', 'self', 'https://www.nkbregovanta.com/insights/eu-mdr-2026', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Eu-mdr-compliance-challenges', 'eu-mdr-compliance-challenges', '/insights/eu-mdr-compliance-challenges', 'published', true, 'EU MDR Compliance: Where Medical Device Manufacturers Commonly Get Stuck')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/eu-mdr-compliance-challenges', 'EU MDR Medical Device Compliance Guide | NKB Regovanta', 'A practical regulatory perspective on the critical issues that delay CE marking and EU market entry under Regulation (EU) 2017/745 (MDR).', 'self', 'https://www.nkbregovanta.com/insights/eu-mdr-compliance-challenges', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Fda-510k-program-modernization-safety-standards', 'fda-510k-program-modernization-safety-standards', '/insights/fda-510k-program-modernization-safety-standards', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/fda-510k-program-modernization-safety-standards', 'FDA 510(k) Modernization Guide | NKB Regovanta', 'Understand predicate relevance, final versus draft guidance, and the limited scope of FDA', 'self', 'https://www.nkbregovanta.com/insights/fda-510k-program-modernization-safety-standards', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Fda-inspections-2026', 'fda-inspections-2026', '/insights/fda-inspections-2026', 'published', true, 'FDA Medical Device Inspections in 2026: Preparing for the New QMSR Framework')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/fda-inspections-2026', 'FDA Medical Device Inspections 2026 | NKB Regovanta', 'How to prepare for FDA medical device inspections under the 2026 QMSR-aligned Compliance Program 7382.850, including records, audits, and readiness.', 'self', 'https://www.nkbregovanta.com/insights/fda-inspections-2026', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Fda-q-sub-pre-submission-meeting-guide', 'fda-q-sub-pre-submission-meeting-guide', '/insights/fda-q-sub-pre-submission-meeting-guide', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/fda-q-sub-pre-submission-meeting-guide', 'FDA Q-Submission (Pre-Sub) Guide | NKB Regovanta', 'Prepare a focused FDA Pre-Submission with a defined device, evidence context, proposed approach, and questions tied to development decisions.', 'self', 'https://www.nkbregovanta.com/insights/fda-q-sub-pre-submission-meeting-guide', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Fda-qmsr-2026', 'fda-qmsr-2026', '/insights/fda-qmsr-2026', 'published', true, 'FDA QMSR 2026: What Medical Device Manufacturers Need to Know')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/fda-qmsr-2026', 'FDA QMSR 2026 Compliance Guide | NKB Regovanta', 'A practical overview of FDA QMSR 2026, ISO 13485 alignment, record expectations, and actions manufacturers should take to maintain compliance.', 'self', 'https://www.nkbregovanta.com/insights/fda-qmsr-2026', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Fda-qmsr-compliance-guide', 'fda-qmsr-compliance-guide', '/insights/fda-qmsr-compliance-guide', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/fda-qmsr-compliance-guide', 'FDA QMSR & ISO 13485 Compliance Guide | NKB Regovanta', 'Assess FDA QMSR readiness through connected product records, supplier controls, complaints, and management decisions rather than a document count.', 'self', 'https://www.nkbregovanta.com/insights/fda-qmsr-compliance-guide', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Gspr-compliance-eu-mdr-ivdr', 'gspr-compliance-eu-mdr-ivdr', '/insights/gspr-compliance-eu-mdr-ivdr', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/gspr-compliance-eu-mdr-ivdr', 'GSPR Compliance for EU MDR & IVDR | NKB Regovanta', 'Build a usable GSPR matrix linking applicable requirements to methods, controlled evidence, product configurations, and unresolved gaps.', 'self', 'https://www.nkbregovanta.com/insights/gspr-compliance-eu-mdr-ivdr', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Gspr-foundation-medical-device-development', 'gspr-foundation-medical-device-development', '/insights/gspr-foundation-medical-device-development', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/gspr-foundation-medical-device-development', 'GSPR in Medical Device R&D | NKB Regovanta', 'Use GSPRs during device development to define measurable design inputs, evidence dependencies, and review gates before testing begins.', 'self', 'https://www.nkbregovanta.com/insights/gspr-foundation-medical-device-development', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Human-factors-engineering-medical-device-design', 'human-factors-engineering-medical-device-design', '/insights/human-factors-engineering-medical-device-design', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/human-factors-engineering-medical-device-design', 'Human Factors in Medical Device Design | NKB Regovanta', 'Integrate human factors into early device design through user research, task analysis, formative evaluation, and traceable design decisions.', 'self', 'https://www.nkbregovanta.com/insights/human-factors-engineering-medical-device-design', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Iec-62304-medical-device-software-lifecycle', 'iec-62304-medical-device-software-lifecycle', '/insights/iec-62304-medical-device-software-lifecycle', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/iec-62304-medical-device-software-lifecycle', 'IEC 62304 Software Lifecycle Guide | NKB Regovanta', 'Organise a medical-device software lifecycle around traceable requirements, risk controls, verification, third-party software, and release records.', 'self', 'https://www.nkbregovanta.com/insights/iec-62304-medical-device-software-lifecycle', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights', 'insights', '/insights', 'published', true, 'Global Regulatory Knowledge Hub')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights', 'Global Regulatory Knowledge Hub | NKB Regovanta', 'Expert medical device regulatory insights, compliance guides, and market access intelligence covering US FDA, EU MDR, CDSCO, ISO 13485, and IVDR.', 'self', 'https://www.nkbregovanta.com/insights', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > India-mdr-2026-rule-63', 'india-mdr-2026-rule-63', '/insights/india-mdr-2026-rule-63', 'published', true, 'India Medical Device Rules 2026: EU-Approved Devices Gain Recognition Under Rule 63')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/india-mdr-2026-rule-63', 'India MDR 2026 Rule 63 Amendment Guide | NKB Regovanta', 'What the Indian MDR amendment (G.S.R. 744(E)) means for medical device makers, EU brands, and Indian importers under Rule 63 and Class A QMS.', 'self', 'https://www.nkbregovanta.com/insights/india-mdr-2026-rule-63', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Ivdr-class-d-verification-notified-bodies', 'ivdr-class-d-verification-notified-bodies', '/insights/ivdr-class-d-verification-notified-bodies', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/ivdr-class-d-verification-notified-bodies', 'EU IVDR Class D Verification Guide | NKB Regovanta', 'Prepare Class D IVD verification with clear configurations, performance evidence, batch records, and notified-body or reference-laboratory interfaces.', 'self', 'https://www.nkbregovanta.com/insights/ivdr-class-d-verification-notified-bodies', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Medical-device-documentation-compliance-to-evidence', 'medical-device-documentation-compliance-to-evidence', '/insights/medical-device-documentation-compliance-to-evidence', 'published', true, 'Medical Device Documentation: From Compliance Records to Regulatory Evidence')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/medical-device-documentation-compliance-to-evidence', 'Medical Device Regulatory Evidence | NKB Regovanta', 'Documentation is objective evidence of quality control. Learn how to avoid audit disconnects across design, risk management, validation, and PMS.', 'self', 'https://www.nkbregovanta.com/insights/medical-device-documentation-compliance-to-evidence', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Notified-body-expectations-eu-mdr-technical-documentation', 'notified-body-expectations-eu-mdr-technical-documentation', '/insights/notified-body-expectations-eu-mdr-technical-documentation', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/notified-body-expectations-eu-mdr-technical-documentation', 'EU MDR Technical Documentation Guide | NKB Regovanta', 'Prepare an MDR technical file with consistent scope, claim-to-evidence links, controlled revisions, and traceable responses to review questions.', 'self', 'https://www.nkbregovanta.com/insights/notified-body-expectations-eu-mdr-technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Notified-body-selection-conformity-assessment-guide', 'notified-body-selection-conformity-assessment-guide', '/insights/notified-body-selection-conformity-assessment-guide', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/notified-body-selection-conformity-assessment-guide', 'Notified Body Selection Guide | NKB Regovanta', 'Choose a notified body by confirming designation scope, product fit, assessment requirements, and realistic readiness rather than quoted timing alone.', 'self', 'https://www.nkbregovanta.com/insights/notified-body-selection-conformity-assessment-guide', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Optimal-timing-usfda-510k-submission', 'optimal-timing-usfda-510k-submission', '/insights/optimal-timing-usfda-510k-submission', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/optimal-timing-usfda-510k-submission', 'FDA 510(k) Submission Timing Strategy | NKB Regovanta', 'Assess 510(k) readiness through intended use, predicate strategy, completed evidence, configuration control, and capacity to answer review questions.', 'self', 'https://www.nkbregovanta.com/insights/optimal-timing-usfda-510k-submission', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Overcoming-fda-510k-clearance-barriers', 'overcoming-fda-510k-clearance-barriers', '/insights/overcoming-fda-510k-clearance-barriers', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/overcoming-fda-510k-clearance-barriers', 'FDA 510(k) Clearance Barriers Guide | NKB Regovanta', 'Address 510(k) obstacles by distinguishing pathway, intended-use, performance-evidence, and submission-consistency problems.', 'self', 'https://www.nkbregovanta.com/insights/overcoming-fda-510k-clearance-barriers', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Qms-documentation-iso-13485-compliance', 'qms-documentation-iso-13485-compliance', '/insights/qms-documentation-iso-13485-compliance', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/qms-documentation-iso-13485-compliance', 'Defensible QMS Documentation Guide | NKB Regovanta', 'Organise medical-device QMS documentation around process ownership, controlled records, traceability, and reliable retrieval.', 'self', 'https://www.nkbregovanta.com/insights/qms-documentation-iso-13485-compliance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Regulation-eu-2024-1860-mdr-ivdr-transition', 'regulation-eu-2024-1860-mdr-ivdr-transition', '/insights/regulation-eu-2024-1860-mdr-ivdr-transition', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/regulation-eu-2024-1860-mdr-ivdr-transition', 'EU IVDR Transition Eligibility Guide | NKB Regovanta', 'Assess IVDR legacy-device transition eligibility, application milestones, change restrictions, and evidence before relying on extended dates.', 'self', 'https://www.nkbregovanta.com/insights/regulation-eu-2024-1860-mdr-ivdr-transition', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Regulatory-compliance-strategy-global-medtech', 'regulatory-compliance-strategy-global-medtech', '/insights/regulatory-compliance-strategy-global-medtech', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/regulatory-compliance-strategy-global-medtech', 'Global MedTech Regulatory Strategy Guide | NKB Regovanta', 'Separate reusable product evidence from market-specific classification, representation, and submission needs in a global regulatory plan.', 'self', 'https://www.nkbregovanta.com/insights/regulatory-compliance-strategy-global-medtech', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Remote-patient-monitoring-devices-regulatory-framework', 'remote-patient-monitoring-devices-regulatory-framework', '/insights/remote-patient-monitoring-devices-regulatory-framework', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/remote-patient-monitoring-devices-regulatory-framework', 'Remote Patient Monitoring Regulations | NKB Regovanta', 'Assess remote-monitoring systems through their measurement claims, alerts, data flow, home-use conditions, and clinical responsibilities.', 'self', 'https://www.nkbregovanta.com/insights/remote-patient-monitoring-devices-regulatory-framework', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Samd-classification-submission-usfda', 'samd-classification-submission-usfda', '/insights/samd-classification-submission-usfda', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/samd-classification-submission-usfda', 'US FDA SaMD Classification Guide | NKB Regovanta', 'Define medical software functions, assess FDA regulatory treatment, and connect classification and submission evidence to the intended use.', 'self', 'https://www.nkbregovanta.com/insights/samd-classification-submission-usfda', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Understanding-prrc-eu-mdr-ivdr', 'understanding-prrc-eu-mdr-ivdr', '/insights/understanding-prrc-eu-mdr-ivdr', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/understanding-prrc-eu-mdr-ivdr', 'PRRC Role Under EU MDR & EU IVDR | NKB Regovanta', 'Define a workable PRRC arrangement with appropriate qualifications, access to evidence, escalation routes, and clear manufacturer responsibilities.', 'self', 'https://www.nkbregovanta.com/insights/understanding-prrc-eu-mdr-ivdr', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Insights > Usability-testing-medical-devices-iec-62366', 'usability-testing-medical-devices-iec-62366', '/insights/usability-testing-medical-devices-iec-62366', 'published', true, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/insights/usability-testing-medical-devices-iec-62366', 'IEC 62366 Usability Testing Guide | NKB Regovanta', 'Plan usability evaluations around representative users, critical tasks, realistic conditions, observations, and justified interpretation.', 'self', 'https://www.nkbregovanta.com/insights/usability-testing-medical-devices-iec-62366', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Markets', 'markets', '/markets', 'published', true, 'Global Medical Device Regulatory Markets')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/markets', 'Global Medical Device Regulatory Markets | NKB Regovanta', 'Global medical device regulatory consulting across 15+ markets: US FDA, EU MDR/IVDR, India CDSCO, UK MHRA, Australia TGA, Canada, and APAC.', 'self', 'https://www.nkbregovanta.com/markets', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Regulatory-updates', 'regulatory-updates', '/regulatory-updates', 'published', false, NULL)
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/regulatory-updates', 'Global Regulatory Updates Feed | NKB Regovanta', 'Comprehensive medical device regulatory updates from FDA, CDSCO, EU MDR, and MDSAP. Track safety alerts, guidance publications, and compliance notices.', 'self', 'https://www.nkbregovanta.com/regulatory-updates', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Artg-inclusion', 'artg-inclusion', '/services/australia/artg-inclusion', 'published', true, 'TGA ARTG Inclusion Strategy &amp; Application Preparation')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/artg-inclusion', 'TGA ARTG Inclusion Consultant | NKB Regovanta', 'TGA ARTG inclusion applications for medical devices & IVDs: kind-of-device grouping, GMDN code alignment, TBS submissions, and application audit defense.', 'self', 'https://www.nkbregovanta.com/services/australia/artg-inclusion', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Australian-sponsor', 'australian-sponsor', '/services/australia/australian-sponsor', 'published', true, 'TGA Australian Sponsor Services &amp; Governance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/australian-sponsor', 'TGA Australian Sponsor Services | NKB Regovanta', 'Professional Australian Sponsor representation for medical device and IVD manufacturers: ARTG inclusion holder, TGA liaison, MDIR vigilance, and recalls.', 'self', 'https://www.nkbregovanta.com/services/australia/australian-sponsor', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Change-management', 'change-management', '/services/australia/change-management', 'published', true, 'TGA ARTG Variations &amp; Significant Change Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/change-management', 'TGA ARTG Variations & Changes | NKB Regovanta', 'TGA significant change evaluation, Section 9D variations, kind-of-device impact analysis, and Manufacturer Evidence updates in Australia.', 'self', 'https://www.nkbregovanta.com/services/australia/change-management', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Classification', 'classification', '/services/australia/classification', 'published', true, 'TGA Medical Device &amp; IVD Classification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/classification', 'TGA Medical Device Classification | NKB Regovanta', 'TGA classification for medical devices (Class I-III) & IVDs (Class 1-4): Australian regulations, GMDN determination, and kind-of-device assessment.', 'self', 'https://www.nkbregovanta.com/services/australia/classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Clinical-evidence', 'clinical-evidence', '/services/australia/clinical-evidence', 'published', true, 'TGA Clinical Evidence &amp; Benefit-Risk Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/clinical-evidence', 'TGA Clinical Evidence & CER | NKB Regovanta', 'TGA Clinical Evaluation Reports (CER), equivalence justifications, systematic literature reviews, benefit-risk analysis, and clinical audit readiness.', 'self', 'https://www.nkbregovanta.com/services/australia/clinical-evidence', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Conformity-assessment', 'conformity-assessment', '/services/australia/conformity-assessment', 'published', false, 'TGA Conformity Assessment Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/conformity-assessment', 'TGA Conformity Assessment Support | NKB Regovanta', 'TGA conformity assessment consulting: MDSAP audit pathways, technical documentation preparation, body selection, and Australian market access.', 'self', 'https://www.nkbregovanta.com/services/australia/conformity-assessment', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia', 'australia', '/services/australia', 'published', true, 'Australia TGA ARTG Inclusion &amp; Australian Sponsor Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia', 'Australia TGA ARTG Consultant | NKB Regovanta', 'Expert Australia TGA regulatory consulting: ARTG inclusion, Australian Sponsor representation, Manufacturer Evidence, SaMD, and post-market compliance.', 'self', 'https://www.nkbregovanta.com/services/australia', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Ivd', 'ivd', '/services/australia/ivd', 'published', true, 'TGA IVD Regulatory Strategy &amp; ARTG Inclusion')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/ivd', 'Australia TGA IVD Consultant | NKB Regovanta', 'TGA IVD regulatory strategy: Class 1–4 classification, analytical and clinical performance evidence (PER), and ARTG inclusion for in vitro diagnostics.', 'self', 'https://www.nkbregovanta.com/services/australia/ivd', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Labeling', 'labeling', '/services/australia/labeling', 'published', true, 'Australian Labelling, IFU &amp; AusUDID Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/labeling', 'TGA Labelling & AusUDID Compliance | NKB Regovanta', 'Australian medical device labelling review under Essential Principle 13, Sponsor identification, TGA Advertising Code, and AusUDID database submission.', 'self', 'https://www.nkbregovanta.com/services/australia/labeling', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Manufacturer-evidence', 'manufacturer-evidence', '/services/australia/manufacturer-evidence', 'published', true, 'TGA Manufacturer Evidence &amp; Conformity Assessment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/manufacturer-evidence', 'TGA Manufacturer Evidence Strategy | NKB Regovanta', 'TGA Manufacturer Evidence consulting: overseas evidence (EU MDR/IVDR, FDA, MDSAP), certificate alignment, and Declaration of Conformity review.', 'self', 'https://www.nkbregovanta.com/services/australia/manufacturer-evidence', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Pms', 'pms', '/services/australia/pms', 'published', false, 'TGA Post-Market Surveillance (PMS) Plans')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/pms', 'TGA Post-Market Surveillance Plans | NKB Regovanta', 'TGA post-market surveillance (PMS) plan consulting: complaint trending, ISO 14971 risk updates, and post-market review compliance for Australia.', 'self', 'https://www.nkbregovanta.com/services/australia/pms', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Post-market', 'post-market', '/services/australia/post-market', 'published', true, 'TGA Post-Market Vigilance, MDIR &amp; Recall Management')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/post-market', 'TGA Post-Market Vigilance & MDIR | NKB Regovanta', 'TGA post-market vigilance consulting: Medical Device Incident Reporting (MDIR IRIS), statutory reporting timelines, recalls, and PRAC market actions.', 'self', 'https://www.nkbregovanta.com/services/australia/post-market', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Software', 'software', '/services/australia/software', 'published', true, 'Australia TGA SaMD, AI &amp; Cybersecurity Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/software', 'Australia TGA SaMD & AI Consultant | NKB Regovanta', 'TGA SaMD consulting: exclusions, IEC 62304 lifecycle, cybersecurity risk management, and AI/ML clinical evidence in Australia.', 'self', 'https://www.nkbregovanta.com/services/australia/software', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Sponsor', 'sponsor', '/services/australia/sponsor', 'published', false, 'Independent TGA Sponsor Representation')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/sponsor', 'Independent TGA Sponsor Representation | NKB Regovanta', 'Independent Australian Sponsor representation for device manufacturers: ARTG transfers, distributor management, and TGA regulatory custody in Australia.', 'self', 'https://www.nkbregovanta.com/services/australia/sponsor', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Supply-chain', 'supply-chain', '/services/australia/supply-chain', 'published', true, 'Australia Importer, Distributor &amp; Supply-Chain Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/supply-chain', 'Australia Medical Device Supply Chain | NKB Regovanta', 'Australian device supply-chain compliance: Sponsor and importer agreements, distribution records, traceability, and recall readiness under TGA rules.', 'self', 'https://www.nkbregovanta.com/services/australia/supply-chain', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Technical-documentation', 'technical-documentation', '/services/australia/technical-documentation', 'published', true, 'TGA Technical Documentation &amp; Essential Principles')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/technical-documentation', 'TGA Essential Principles Documentation | NKB Regovanta', 'TGA Essential Principles evidence mapping (Schedule 3), IMDRF Table of Contents dossiers, ISO 14971 risk management, and technical audit readiness.', 'self', 'https://www.nkbregovanta.com/services/australia/technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Testing-strategy', 'testing-strategy', '/services/australia/testing-strategy', 'published', true, 'TGA Testing Strategy &amp; Laboratory Coordination (Australia)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/testing-strategy', 'Australia TGA Testing Strategy | NKB Regovanta', 'Strategic pre-clinical testing protocol design, ISO 17025/NATA lab coordination, biocompatibility, electrical safety EMC, and IVD studies for TGA.', 'self', 'https://www.nkbregovanta.com/services/australia/testing-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Australia > Tga-audit', 'tga-audit', '/services/australia/tga-audit', 'published', true, 'TGA Application Audit Defense &amp; RFI Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/australia/tga-audit', 'TGA Application Audit Defense | NKB Regovanta', 'TGA Level 1 & 2 application audit defense, Section 41JA request responses, mock audits, and clinical justifications for ARTG inclusion in Australia.', 'self', 'https://www.nkbregovanta.com/services/australia/tga-audit', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Anvisa-queries', 'anvisa-queries', '/services/brazil/anvisa-queries', 'published', true, 'ANVISA Exigência &amp; Inspection Response Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/anvisa-queries', 'ANVISA Exigência & Inspection Response | NKB Regovanta', 'ANVISA exigência response formulation, root-cause analysis, BGMP inspection CAPA packages, and technical query resolution for Brazil device submissions.', 'self', 'https://www.nkbregovanta.com/services/brazil/anvisa-queries', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Bgmp', 'bgmp', '/services/brazil/bgmp', 'published', true, 'ANVISA BGMP &amp; CBPF Compliance (RDC 665/2022)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/bgmp', 'ANVISA BGMP & CBPF Compliance | NKB Regovanta', 'ANVISA BGMP / CBPF compliance, RDC 665/2022 gap assessment, ISO 13485 cross-mapping, and ANVISA inspection readiness for Brazil device registrations.', 'self', 'https://www.nkbregovanta.com/services/brazil/bgmp', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Brh', 'brh', '/services/brazil/brh', 'published', true, 'Brazil Registration Holder (BRH) &amp; ANVISA Interface')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/brh', 'Brazil Registration Holder (BRH) Support | NKB Regovanta', 'Brazil Registration Holder (BRH) representation, AFE verification, dossier governance, tecnovigilância reporting, and recall coordination with ANVISA.', 'self', 'https://www.nkbregovanta.com/services/brazil/brh', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Change-management', 'change-management', '/services/brazil/change-management', 'published', true, 'ANVISA Changes, Variations &amp; Revalidação Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/change-management', 'ANVISA Changes & Revalidação (Brazil) | NKB Regovanta', 'ANVISA change categorization (alteração), registration revalidação, site changes, and lifecycle change control for Brazil medical devices.', 'self', 'https://www.nkbregovanta.com/services/brazil/change-management', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Classification', 'classification', '/services/brazil/classification', 'published', true, 'ANVISA Medical Device &amp; IVD Classification (Brazil)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/classification', 'ANVISA Device Classification (Brazil) | NKB Regovanta', 'ANVISA risk classification for medical devices and IVDs (RDC 751/2022 & 830/2023), technical names, and Notificação vs Registro pathways in Brazil.', 'self', 'https://www.nkbregovanta.com/services/brazil/classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil', 'brazil', '/services/brazil', 'published', true, 'ANVISA Brazil Medical Device Registration &amp; BGMP Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil', 'ANVISA Brazil Medical Device Consultant | NKB Regovanta', 'Expert ANVISA Brazil regulatory consulting: Notificação, Registro, BGMP RDC 665/2022, Brazil Registration Holder (BRH), and CBPF certification.', 'self', 'https://www.nkbregovanta.com/services/brazil', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Ivd', 'ivd', '/services/brazil/ivd', 'published', true, 'ANVISA IVD Registration &amp; Performance Evidence (RDC 830/2023)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/ivd', 'ANVISA IVD Registration Services | NKB Regovanta', 'IVD classification (RDC 830/2023), analytical/clinical performance evidence, package inserts, and ANVISA submissions for diagnostic devices in Brazil.', 'self', 'https://www.nkbregovanta.com/services/brazil/ivd', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Labeling', 'labeling', '/services/brazil/labeling', 'published', true, 'ANVISA Portuguese Labeling, UDI &amp; SIUD Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/labeling', 'ANVISA Labeling, UDI & SIUD Compliance | NKB Regovanta', 'ANVISA Portuguese labeling review (RDC 751/2022), IFU compliance, UDI requirements, and SIUD database management for Brazil medical devices and IVDs.', 'self', 'https://www.nkbregovanta.com/services/brazil/labeling', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Notificacao', 'notificacao', '/services/brazil/notificacao', 'published', false, 'ANVISA Notificação Pathway (Brazil)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/notificacao', 'ANVISA Notificação Pathway (Brazil) | NKB Regovanta', 'ANVISA Notificação consulting for Class I/II devices in Brazil — pathway selection, filing strategy, documentation, and BGMP compliance support.', 'self', 'https://www.nkbregovanta.com/services/brazil/notificacao', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Registration', 'registration', '/services/brazil/registration', 'published', true, 'ANVISA Notification &amp; Registration (Cadastro &amp; Registro)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/registration', 'ANVISA Device Registration (Brazil) | NKB Regovanta', 'ANVISA Notificação and Registro submissions via Solicita — dossier compilation, legal manufacturer alignment, and exigência defense for Brazil.', 'self', 'https://www.nkbregovanta.com/services/brazil/registration', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Registro', 'registro', '/services/brazil/registro', 'published', false, 'ANVISA Registro Pathway (Brazil)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/registro', 'ANVISA Registro Pathway (Brazil) | NKB Regovanta', 'ANVISA Registro consulting for Class III & IV medical devices in Brazil — pre-submission strategy, technical dossiers, queries, and lifecycle support.', 'self', 'https://www.nkbregovanta.com/services/brazil/registro', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Software', 'software', '/services/brazil/software', 'published', true, 'ANVISA SaMD, Software, AI &amp; Cybersecurity Regulatory Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/software', 'ANVISA SaMD & Software Regulatory Consulting | NKB Regovanta', 'SaMD regularization under RDC 657/2022 in Brazil — IEC 62304 compliance, cybersecurity, AI/ML clinical evidence, and algorithmic change control.', 'self', 'https://www.nkbregovanta.com/services/brazil/software', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Technical-documentation', 'technical-documentation', '/services/brazil/technical-documentation', 'published', true, 'ANVISA Technical Dossier &amp; Safety/Performance Evidence')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/technical-documentation', 'ANVISA Technical Dossier (Brazil) | NKB Regovanta', 'ANVISA technical dossier compilation and Safety/Performance evidence mapping under RDC 848/2024, ISO 14971 risk management, and dossier defense in Brazil.', 'self', 'https://www.nkbregovanta.com/services/brazil/technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Technovigilance', 'technovigilance', '/services/brazil/technovigilance', 'published', false, 'ANVISA Technovigilance Services (Brazil)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/technovigilance', 'ANVISA Technovigilance (Brazil) | NKB Regovanta', 'ANVISA tecnovigilância consulting: adverse event monitoring, Queixa Técnica (QT), NOTIVISA reporting, and post-market surveillance for medical devices.', 'self', 'https://www.nkbregovanta.com/services/brazil/technovigilance', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Tecnovigilance', 'tecnovigilance', '/services/brazil/tecnovigilance', 'published', true, 'ANVISA Tecnovigilância &amp; Post-Market Surveillance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/tecnovigilance', 'ANVISA Tecnovigilância (Brazil) | NKB Regovanta', 'Brazil tecnovigilância PMS systems, ANVISA adverse event reporting (NOTIVISA), complaint triage, field safety actions, and recalls for medical devices.', 'self', 'https://www.nkbregovanta.com/services/brazil/tecnovigilance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Brazil > Testing-strategy', 'testing-strategy', '/services/brazil/testing-strategy', 'published', true, 'ANVISA Testing Strategy &amp; Laboratory Coordination')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/brazil/testing-strategy', 'ANVISA Testing Strategy (Brazil) | NKB Regovanta', 'Pre-clinical testing strategy for ANVISA registrations — INMETRO safety, biocompatibility, sterilization, and accredited lab coordination for Brazil.', 'self', 'https://www.nkbregovanta.com/services/brazil/testing-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Change-management', 'change-management', '/services/canada/change-management', 'published', true, 'Health Canada MDL Amendments &amp; Significant Changes')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/change-management', 'Health Canada MDL Licence Amendments | NKB Regovanta', 'Health Canada significant change assessment, Medical Device Licence (MDL) amendments, design modifications, and regulatory lifecycle maintenance.', 'self', 'https://www.nkbregovanta.com/services/canada/change-management', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Classification', 'classification', '/services/canada/classification', 'published', true, 'Health Canada Medical Device &amp; IVD Classification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/classification', 'Health Canada Device Classification | NKB Regovanta', 'Health Canada risk classification for medical devices and IVDs under SOR/98-282 Schedule 1. Class I, II, III, and IV licensing determination.', 'self', 'https://www.nkbregovanta.com/services/canada/classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada', 'canada', '/services/canada', 'published', true, 'Health Canada MDL &amp; MDEL Registration Consultant')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada', 'Health Canada Medical Device Consultant | NKB Regovanta', 'Expert Health Canada medical device consulting: MDL device licences (Class II–IV), MDEL establishment licences, MDSAP, and bilingual labelling.', 'self', 'https://www.nkbregovanta.com/services/canada', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Inspection', 'inspection', '/services/canada/inspection', 'published', true, 'Health Canada Inspection Readiness &amp; Defense')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/inspection', 'Health Canada Inspection Defense | NKB Regovanta', 'Health Canada inspection defense: MDEL audit readiness, mock inspection simulations, complaint file audits, recall drills, and CAPA remediation.', 'self', 'https://www.nkbregovanta.com/services/canada/inspection', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Ivd', 'ivd', '/services/canada/ivd', 'published', true, 'Health Canada IVD Registration &amp; Performance Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/ivd', 'Health Canada IVD Regulatory Strategy | NKB Regovanta', 'Health Canada IVD regulatory strategy: Class II-IV MDL licensing, analytical performance studies (LoD, precision), and clinical evaluation.', 'self', 'https://www.nkbregovanta.com/services/canada/ivd', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Labeling', 'labeling', '/services/canada/labeling', 'published', true, 'Health Canada Labelling &amp; Bilingual IFU Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/labeling', 'Health Canada Labelling Compliance | NKB Regovanta', 'Health Canada bilingual labelling compliance under SOR/98-282 Part 21: French/English translation, packaging artwork, IFUs, and electronic labelling.', 'self', 'https://www.nkbregovanta.com/services/canada/labeling', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Liaison', 'liaison', '/services/canada/liaison', 'published', false, 'Health Canada Regulatory Liaison Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/liaison', 'Health Canada Regulatory Liaison | NKB Regovanta', 'Expert Health Canada regulatory liaison services: pre-submission meetings, clarification queries, screening responses, and Special Access Programme (SAP).', 'self', 'https://www.nkbregovanta.com/services/canada/liaison', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Mdel', 'mdel', '/services/canada/mdel', 'published', true, 'Health Canada Medical Device Establishment Licence (MDEL)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/mdel', 'Health Canada MDEL Consulting | NKB Regovanta', 'Health Canada MDEL consulting: Medical Device Establishment Licence application, importer & distributor compliance, complaint systems, and recall SOPs.', 'self', 'https://www.nkbregovanta.com/services/canada/mdel', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Mdl', 'mdl', '/services/canada/mdl', 'published', true, 'Health Canada Medical Device Licence (MDL) Application')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/mdl', 'Health Canada MDL Application | NKB Regovanta', 'Health Canada Medical Device Licence (MDL) for Class II, III & IV devices: IMDRF ToC dossier, REP filing, and screening deficiency response.', 'self', 'https://www.nkbregovanta.com/services/canada/mdl', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Mdsap', 'mdsap', '/services/canada/mdsap', 'published', true, 'MDSAP Canada &amp; ISO 13485 Quality System Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/mdsap', 'MDSAP & ISO 13485 for Health Canada | NKB Regovanta', 'MDSAP QMS readiness and ISO 13485 alignment for Health Canada MDL licences: gap assessment, audit prep, and nonconformity remediation.', 'self', 'https://www.nkbregovanta.com/services/canada/mdsap', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Pms', 'pms', '/services/canada/pms', 'published', true, 'Health Canada Post-Market Surveillance &amp; MPR')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/pms', 'Health Canada Post-Market Surveillance | NKB Regovanta', 'Health Canada post-market surveillance: Mandatory Problem Reporting (MPR), 10/30-day incident timelines, recall management, and CAPA integration.', 'self', 'https://www.nkbregovanta.com/services/canada/pms', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Renewals', 'renewals', '/services/canada/renewals', 'published', false, 'Health Canada MDL &amp; MDEL Annual Renewals')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/renewals', 'Health Canada MDL Annual Renewals | NKB Regovanta', 'Health Canada Medical Device Licence annual renewal filing, MDL and MDEL maintenance, MDSAP equivalence documentation, and compliance monitoring.', 'self', 'https://www.nkbregovanta.com/services/canada/renewals', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Software', 'software', '/services/canada/software', 'published', true, 'Health Canada SaMD &amp; Cybersecurity Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/software', 'Health Canada SaMD & Cybersecurity | NKB Regovanta', 'Health Canada SaMD qualification, IEC 62304 lifecycle documentation, cybersecurity threat modelling, and AI/ML change control plans.', 'self', 'https://www.nkbregovanta.com/services/canada/software', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Supply-chain', 'supply-chain', '/services/canada/supply-chain', 'published', true, 'Canada Medical Device Supply Chain &amp; Importer Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/supply-chain', 'Canada Medical Device Supply Chain | NKB Regovanta', 'Importer MDEL obligations, distribution traceability, quality agreements, and recall procedures across the Canadian medical device supply chain.', 'self', 'https://www.nkbregovanta.com/services/canada/supply-chain', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Technical-documentation', 'technical-documentation', '/services/canada/technical-documentation', 'published', true, 'Health Canada Technical Documentation &amp; Evidence Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/technical-documentation', 'Health Canada IMDRF ToC Technical Dossier | NKB Regovanta', 'Health Canada IMDRF ToC dossier: Essential Principles, biocompatibility, software V&V, and clinical evidence for Class III and IV medical device licences.', 'self', 'https://www.nkbregovanta.com/services/canada/technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Canada > Testing-strategy', 'testing-strategy', '/services/canada/testing-strategy', 'published', true, 'Health Canada Testing Strategy &amp; Laboratory Coordination')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/canada/testing-strategy', 'Health Canada Device Testing Strategy | NKB Regovanta', 'Pre-clinical testing protocol design, worst-case rationale, and ISO 17025 lab coordination for Health Canada MDL submissions.', 'self', 'https://www.nkbregovanta.com/services/canada/testing-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Drug-device-combination-product-consulting', 'drug-device-combination-product-consulting', '/services/drug-device-combination-product-consulting', 'published', true, 'Drug-Device Combination Product Consulting for Global Regulatory Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/drug-device-combination-product-consulting', 'Drug-Device Combination Consulting | NKB Regovanta', 'Drug-device combination consulting: FDA 21 CFR Part 4, QMSR, EU MDR Article 117, Notified Body Opinions (NBOp), ISO 14971 risk management, and DHF.', 'self', 'https://www.nkbregovanta.com/services/drug-device-combination-product-consulting', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Drug-licenses-importers-india-form-10-form-41', 'drug-licenses-importers-india-form-10-form-41', '/services/drug-licenses-importers-india-form-10-form-41', 'published', true, 'Drug Licenses for Importers in India
                
                  Form 10, Form 41 & Wholesale Authorizations')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/drug-licenses-importers-india-form-10-form-41', 'Drug Licenses for Importers in India | NKB Regovanta', 'CDSCO pharmaceutical import licensing in India: Form 41 RC, Form 10/10-A licence, Form 40, Plant Master Files (PMF), Drug Master Files (DMF), and APIs.', 'self', 'https://www.nkbregovanta.com/services/drug-licenses-importers-india-form-10-form-41', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Article-117', 'article-117', '/services/eu/article-117', 'published', true, 'EU MDR Article 117 Drug-Device Combination Products')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/article-117', 'EU MDR Article 117 Consulting | NKB Regovanta', 'EU MDR Article 117 combination products consulting. Notified Body Opinion (NBOp) dossiers, GSPR conformity, and EMA interface with expert consultants.', 'self', 'https://www.nkbregovanta.com/services/eu/article-117', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ce-marking', 'ce-marking', '/services/eu/ce-marking', 'published', true, 'EU CE Marking &amp; Conformity Certification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ce-marking', 'EU CE Marking Certification Consultant | NKB Regovanta', 'End-to-end CE Marking consulting for Medical Devices and IVDs under EU MDR & IVDR. Conformity assessment, Declaration of Conformity, and CE mark audit.', 'self', 'https://www.nkbregovanta.com/services/eu/ce-marking', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ce-registration', 'ce-registration', '/services/eu/ce-registration', 'published', false, 'EU CE Marking Registration &amp; Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ce-registration', 'EU CE Device Registration | NKB Regovanta', 'Expert CE device registration pathway consulting for EU MDR 2017/745 compliance. EUDAMED SRN registration and CE certificate maintenance.', 'self', 'https://www.nkbregovanta.com/services/eu/ce-registration', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Change-assessment', 'change-assessment', '/services/eu/change-assessment', 'published', true, 'EU MDR &amp; IVDR Change Assessment &amp; Lifecycle Control')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/change-assessment', 'EU MDR Change Assessment Consultant | NKB Regovanta', 'Regulatory change assessment under EU MDR & IVDR. Substantial change evaluation, Notified Body notification triggers, and technical documentation updates.', 'self', 'https://www.nkbregovanta.com/services/eu/change-assessment', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Class-d-ivdr', 'class-d-ivdr', '/services/eu/class-d-ivdr', 'published', true, 'EU IVDR Class D Strategy &amp; EURL Verification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/class-d-ivdr', 'EU IVDR Class D Consulting | NKB Regovanta', 'EU IVDR Class D regulatory consulting. EU Reference Laboratory (EURL) verification, Common Specifications (CS), batch release, and Notified Body audit.', 'self', 'https://www.nkbregovanta.com/services/eu/class-d-ivdr', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Classification', 'classification', '/services/eu/classification', 'published', true, 'EU MDR &amp; IVDR Qualification &amp; Classification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/classification', 'EU MDR Classification Consultant | NKB Regovanta', 'Strategic qualification and risk-based classification under EU MDR (Class I, IIa, IIb, III) and EU IVDR (Class A, B, C, D) with regulatory specialists.', 'self', 'https://www.nkbregovanta.com/services/eu/classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Clinical-evaluation', 'clinical-evaluation', '/services/eu/clinical-evaluation', 'published', true, 'EU MDR Clinical Evaluation &amp; CER Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/clinical-evaluation', 'EU MDR Clinical Evaluation CER | NKB Regovanta', 'EU MDR Clinical Evaluation Reports (CER), CEP planning, equivalence assessment, clinical gap analysis, and PMCF strategy with regulatory specialists.', 'self', 'https://www.nkbregovanta.com/services/eu/clinical-evaluation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Deficiency-response', 'deficiency-response', '/services/eu/deficiency-response', 'published', true, 'EU Notified Body Technical Review &amp; Deficiency Response')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/deficiency-response', 'EU Notified Body Deficiency Response | NKB Regovanta', 'Senior regulatory defense against Notified Body nonconformities, technical file deficiencies, CER pushbacks, and audit findings under EU MDR & IVDR.', 'self', 'https://www.nkbregovanta.com/services/eu/deficiency-response', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ear', 'ear', '/services/eu/ear', 'published', true, 'European Authorized Representative (EC REP / EAR) Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ear', 'European Authorized Representative | NKB Regovanta', 'European Authorized Representative (EC REP / EAR) representation in the EU for medical device and IVD manufacturers under MDR & IVDR Article 11.', 'self', 'https://www.nkbregovanta.com/services/eu/ear', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Eudamed', 'eudamed', '/services/eu/eudamed', 'published', true, 'EUDAMED, UDI &amp; Economic Operator Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/eudamed', 'EUDAMED Registration & UDI | NKB Regovanta', 'EUDAMED registration consulting, SRN acquisition, Basic UDI-DI strategy, and economic operator compliance under EU MDR & IVDR.', 'self', 'https://www.nkbregovanta.com/services/eu/eudamed', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu', 'eu', '/services/eu', 'published', true, 'EU MDR &amp; IVDR Regulatory Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu', 'EU MDR & IVDR Regulatory Consultant | NKB Regovanta', 'Expert EU MDR & IVDR regulatory consulting: CE marking, GSPR compliance, technical documentation, CER/PER, and Notified Body submissions.', 'self', 'https://www.nkbregovanta.com/services/eu', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ivdr-analytical-performance', 'ivdr-analytical-performance', '/services/eu/ivdr-analytical-performance', 'published', true, 'EU IVDR Analytical Performance Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ivdr-analytical-performance', 'IVDR Analytical Performance Strategy | NKB Regovanta', 'Define and execute IVDR analytical performance studies: precision, LoD/LoQ, specificity, interference, cross-reactivity, and metrological traceability.', 'self', 'https://www.nkbregovanta.com/services/eu/ivdr-analytical-performance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ivdr-classification', 'ivdr-classification', '/services/eu/ivdr-classification', 'published', true, 'EU IVDR Classification &amp; Conformity Assessment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ivdr-classification', 'EU IVDR Classification Consultant | NKB Regovanta', 'EU IVDR qualification and risk classification consulting across Class A, B, C, and D under Annex VIII Rules 1–7, CDx, and conformity assessment pathways.', 'self', 'https://www.nkbregovanta.com/services/eu/ivdr-classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ivdr-clinical-performance', 'ivdr-clinical-performance', '/services/eu/ivdr-clinical-performance', 'published', true, 'EU IVDR Clinical Performance Studies &amp; Evidence')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ivdr-clinical-performance', 'IVDR Clinical Performance Studies | NKB Regovanta', 'EU IVDR clinical performance study design, diagnostic sensitivity & specificity, clinical protocols, ethics approvals, and PER integration.', 'self', 'https://www.nkbregovanta.com/services/eu/ivdr-clinical-performance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ivdr-performance-evaluation', 'ivdr-performance-evaluation', '/services/eu/ivdr-performance-evaluation', 'published', true, 'EU IVDR Performance Evaluation (PER) Architecture')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ivdr-performance-evaluation', 'IVDR Performance Evaluation PER | NKB Regovanta', 'Authoring and defense of IVDR Performance Evaluation Plans (PEP), Performance Evaluation Reports (PER), Annex XIII evidence architecture, and PMPF.', 'self', 'https://www.nkbregovanta.com/services/eu/ivdr-performance-evaluation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ivdr-pmpf', 'ivdr-pmpf', '/services/eu/ivdr-pmpf', 'published', true, 'EU IVDR PMPF, PMS, PSUR &amp; Vigilance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ivdr-pmpf', 'EU IVDR PMPF & PMS Consulting | NKB Regovanta', 'EU IVDR Post-Market Performance Follow-Up (PMPF) and PMS consulting. PMPF plan and report preparation, gap analysis, PSURs, and vigilance in Europe.', 'self', 'https://www.nkbregovanta.com/services/eu/ivdr-pmpf', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Ivdr', 'ivdr', '/services/eu/ivdr', 'published', true, 'EU IVDR 2017/746Regulatory Consultingfor In Vitro Diagnostics')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/ivdr', 'EU IVDR Regulatory Compliance Consultant | NKB Regovanta', 'Specialized EU IVDR 2017/746 regulatory consulting: Performance Evaluation Reports (PER), analytical studies, Class D EURL, and CE marking certification.', 'self', 'https://www.nkbregovanta.com/services/eu/ivdr', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Labeling', 'labeling', '/services/eu/labeling', 'published', true, 'EU MDR &amp; IVDR Labeling &amp; IFU Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/labeling', 'EU MDR & IVDR Labeling Compliance | NKB Regovanta', 'EU MDR & IVDR labeling compliance: Instructions for Use (IFU), eIFU (EU) 2021/2226, ISO 15223-1 symbols, and 24-language translation governance.', 'self', 'https://www.nkbregovanta.com/services/eu/labeling', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Mdr-ivdr-transition', 'mdr-ivdr-transition', '/services/eu/mdr-ivdr-transition', 'published', true, 'EU MDR &amp; IVDR Legacy Transition Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/mdr-ivdr-transition', 'EU MDR & IVDR Transition Consultant | NKB Regovanta', 'EU MDR Article 120 & IVDR Article 110 transition consulting: gap analysis, technical documentation remediation, and Notified Body recertification.', 'self', 'https://www.nkbregovanta.com/services/eu/mdr-ivdr-transition', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Mdr', 'mdr', '/services/eu/mdr', 'published', true, 'EU MDR 2017/745Regulatory Consultingfor Medical Devices')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/mdr', 'EU MDR Compliance & CE Marking | NKB Regovanta', 'Specialized EU MDR 2017/745 regulatory consulting: Technical Documentation (Annex II/III), GSPR, CER, PMCF, Notified Body defense, and CE marking.', 'self', 'https://www.nkbregovanta.com/services/eu/mdr', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Notified-body', 'notified-body', '/services/eu/notified-body', 'published', true, 'EU Notified Body Strategy &amp; Audit Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/notified-body', 'EU Notified Body Audit Readiness | NKB Regovanta', 'Notified Body selection, application scope, pre-assessment audits, technical file review defense, and nonconformity resolution under EU MDR and IVDR.', 'self', 'https://www.nkbregovanta.com/services/eu/notified-body', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Pms-pmcf', 'pms-pmcf', '/services/eu/pms-pmcf', 'published', true, 'Post-Market Clinical Follow-up (PMCF) Strategy &amp; Execution')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/pms-pmcf', 'Post-Market Clinical Follow-Up PMCF | NKB Regovanta', 'EU MDR Post-Market Clinical Follow-Up (PMCF) consulting: PMCF plans, clinical data gap analysis, registry studies, literature protocols, and PSURs.', 'self', 'https://www.nkbregovanta.com/services/eu/pms-pmcf', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Pms', 'pms', '/services/eu/pms', 'published', false, 'EU Post-Market Surveillance (PMS) &amp; Vigilance Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/pms', 'EU Post-Market Surveillance PMS | NKB Regovanta', 'EU MDR post-market surveillance (PMS) consulting: PMS plans, PSUR reports, vigilance reporting, and CE-marked medical device compliance under EU MDR.', 'self', 'https://www.nkbregovanta.com/services/eu/pms', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Qms', 'qms', '/services/eu/qms', 'published', true, 'EU MDR &amp; IVDR QMS Integration &amp; PRRC')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/qms', 'EU MDR & IVDR QMS Consultant | NKB Regovanta', 'Integrate EU MDR Article 10 & IVDR Article 10 QMS requirements: ISO 13485 alignment, Article 15 PRRC governance, and Notified Body audit readiness.', 'self', 'https://www.nkbregovanta.com/services/eu/qms', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Software', 'software', '/services/eu/software', 'published', true, 'EU MDR Software &amp; SaMD Regulatory Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/software', 'EU SaMD & Cybersecurity Consultant | NKB Regovanta', 'EU MDR Rule 11 & IVDR SaMD regulatory consulting: IEC 62304 lifecycle documentation, MDCG 2019-16 cybersecurity, and clinical software validation.', 'self', 'https://www.nkbregovanta.com/services/eu/software', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Technical-documentation', 'technical-documentation', '/services/eu/technical-documentation', 'published', true, 'EU MDR &amp; IVDR Technical Documentation &amp; GSPR')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/technical-documentation', 'EU MDR Technical Documentation | NKB Regovanta', 'Expert EU MDR & IVDR Annex II and Annex III Technical Documentation compilation, GSPR evidence mapping, and Notified Body audit defense.', 'self', 'https://www.nkbregovanta.com/services/eu/technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Eu > Testing-strategy', 'testing-strategy', '/services/eu/testing-strategy', 'published', true, 'EU MDR Testing Strategy &amp; Laboratory Coordination')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/eu/testing-strategy', 'EU Medical Device Testing Strategy | NKB Regovanta', 'Define regulatory testing strategies, protocol design, worst-case rationales, and lab coordination for EU MDR & IVDR technical documentation.', 'self', 'https://www.nkbregovanta.com/services/eu/testing-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Global-market-access-consulting-medical-devices', 'global-market-access-consulting-medical-devices', '/services/global-market-access-consulting-medical-devices', 'published', true, 'Global Market Access Consulting for Medical Devices')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/global-market-access-consulting-medical-devices', 'Global Market Access Consulting | NKB Regovanta', 'Global market access strategy for medical devices across US FDA, EU MDR, UK MHRA, CDSCO India, and Health Canada. Multi-market pathway consulting.', 'self', 'https://www.nkbregovanta.com/services/global-market-access-consulting-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Global-medical-device-ivd-regulatory-affairs-consulting', 'global-medical-device-ivd-regulatory-affairs-consulting', '/services/global-medical-device-ivd-regulatory-affairs-consulting', 'published', true, 'Global Medical Device &amp; IVD
                                
                                
                                    Regulatory Affairs Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/global-medical-device-ivd-regulatory-affairs-consulting', 'Global Medical Device & IVD Registration | NKB Regovanta', 'Strategic regulatory affairs consulting for medical devices and IVDs: submission strategy, dossier compilation, and global market approvals worldwide.', 'self', 'https://www.nkbregovanta.com/services/global-medical-device-ivd-regulatory-affairs-consulting', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Iec-ad-code-registration-india', 'iec-ad-code-registration-india', '/services/iec-ad-code-registration-india', 'published', true, 'Import Export Code (IEC) &
                
                  AD Code Registration Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/iec-ad-code-registration-india', 'DGFT IEC & ICEGATE AD Code Registration | NKB Regovanta', 'DGFT IEC Code and ICEGATE AD Code customs registration in India. Bank authority letters, port registrations, and fast-track clearance setup.', 'self', 'https://www.nkbregovanta.com/services/iec-ad-code-registration-india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services', 'services', '/services', 'published', true, 'Medical Device Regulatory &amp; Quality Consulting Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services', 'Medical Device Regulatory Services | NKB Regovanta', 'Global regulatory and quality consulting services: US FDA 510(k), CDSCO licensing, EU MDR/IVDR CE marking, ISO 13485 QMS, and market access.', 'self', 'https://www.nkbregovanta.com/services', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Class-a-import', 'class-a-import', '/services/india/class-a-import', 'published', true, 'Class A Import Registration  as per GSR 777(E)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/class-a-import', 'Class A Import Registration (GSR 777(E)) | NKB Regovanta', 'Expert CDSCO consulting for Class A medical device import under GSR 777(E). Fast-track registration for non-sterile and non-measuring devices in India.', 'self', 'https://www.nkbregovanta.com/services/india/class-a-import', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Free-sale', 'free-sale', '/services/india/free-sale', 'published', true, 'Free Sale Certificate  (FSC)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/free-sale', 'CDSCO Free Sale Certificate (FSC) | NKB Regovanta', 'Obtain a CDSCO Free Sale Certificate (FSC) for exporting medical devices and IVDs manufactured in India. Expert regulatory support from NKB Regovanta.', 'self', 'https://www.nkbregovanta.com/services/india/free-sale', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India', 'india', '/services/india', 'published', true, 'CDSCO Medical Device
              
              Registration in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india', 'CDSCO Medical Device Consultant India | NKB Regovanta', 'Premier CDSCO medical device regulatory consultancy in India: import licences (MD-14/15), manufacturing (MD-3/9), and Indian Authorized Agent services.', 'self', 'https://www.nkbregovanta.com/services/india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Investigational-devices', 'investigational-devices', '/services/india/investigational-devices', 'published', true, 'Investigational Devices in Govt. Hospitals  (Forms MD-18, MD-19)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/investigational-devices', 'Investigational Device Import CDSCO | NKB Regovanta', 'Obtain CDSCO import authorization for investigational medical devices (MD-18 & MD-19) in India. End-to-end clinical trial & hospital import support.', 'self', 'https://www.nkbregovanta.com/services/india/investigational-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Ivd-clinical-performance', 'ivd-clinical-performance', '/services/india/ivd-clinical-performance', 'published', true, 'IVD Clinical Performance Evaluations  (Forms MD-24, MD-25)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/ivd-clinical-performance', 'CDSCO IVD Clinical Performance (MD-24/25) | NKB Regovanta', 'CDSCO consulting for IVD Clinical Performance Evaluation under Forms MD-24 & MD-25 in India. Protocol review, ethics liaison, and approval support.', 'self', 'https://www.nkbregovanta.com/services/india/ivd-clinical-performance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Ivd-testing', 'ivd-testing', '/services/india/ivd-testing', 'published', true, 'Test License for IVD Devices  (Forms MD-16, MD-17)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/ivd-testing', 'CDSCO IVD Test License (MD-16/17) | NKB Regovanta', 'Apply for CDSCO Forms MD-16 and MD-17 to import limited quantities of IVD medical devices for non-commercial testing, evaluation, or demonstration.', 'self', 'https://www.nkbregovanta.com/services/india/ivd-testing', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Ivd', 'ivd', '/services/india/ivd', 'published', true, 'In-Vitro Diagnostic Regulatory Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/ivd', 'In-Vitro Diagnostic Regulatory India | NKB Regovanta', 'CDSCO IVD regulatory consulting in India: MD-14/15 import licenses, MD-16/17 test licenses, manufacturing approvals, and performance evaluations.', 'self', 'https://www.nkbregovanta.com/services/india/ivd', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Loan-class-a-b', 'loan-class-a-b', '/services/india/loan-class-a-b', 'published', true, 'Loan Licenses for Class A & B  (Forms MD-4 & MD-6)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/loan-class-a-b', 'Class A & B Loan License India (MD-4/6) | NKB Regovanta', 'Obtain CDSCO MD-4 and MD-6 loan manufacturing licenses for Class A & B medical devices in India. End-to-end SLA application & facility audit support.', 'self', 'https://www.nkbregovanta.com/services/india/loan-class-a-b', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Loan-class-c-d', 'loan-class-c-d', '/services/india/loan-class-c-d', 'published', true, 'Loan Licenses for Class C & D  (Forms MD-8 & MD-10)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/loan-class-c-d', 'CDSCO Class C & D Loan Manufacturing | NKB Regovanta', 'Obtain CDSCO MD-8 & MD-10 loan manufacturing licenses for Class C & D medical devices in India. End-to-end CLA application and facility audit support.', 'self', 'https://www.nkbregovanta.com/services/india/loan-class-c-d', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Market-standing', 'market-standing', '/services/india/market-standing', 'published', true, 'Market Standing Certificate  (MSC)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/market-standing', 'CDSCO Market Standing Certificate (MSC) | NKB Regovanta', 'Obtain a CDSCO Market Standing Certificate (MSC) to verify your device manufacturing track record for Indian tenders and global exports.', 'self', 'https://www.nkbregovanta.com/services/india/market-standing', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Md-42', 'md-42', '/services/india/md-42', 'published', true, 'MD-42 Medical Device  Registration Certificate')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/md-42', 'CDSCO MD-42 Registration Certificate | NKB Regovanta', 'Get your MD-42 certificate to legally sell, stock, wholesale, and distribute medical devices in India under Medical Device Rules (MDR) 2017.', 'self', 'https://www.nkbregovanta.com/services/india/md-42', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Medical-devices', 'medical-devices', '/services/india/medical-devices', 'published', true, 'Medical Device Licensing & Regulatory Approvals in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/medical-devices', 'CDSCO Medical Device Licensing & Approvals | NKB Regovanta', 'Comprehensive CDSCO medical device licensing support in India: MD-14/15 import, MD-3 to MD-9 manufacturing, loan licenses, and Authorized Agent (AIR).', 'self', 'https://www.nkbregovanta.com/services/india/medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Mfg-class-a-b', 'mfg-class-a-b', '/services/india/mfg-class-a-b', 'published', true, 'Class A & B Manufacturing  (Forms MD-3 & MD-5)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/mfg-class-a-b', 'Class A & B Manufacturing License (MD-5) | NKB Regovanta', 'Obtain CDSCO MD-3 and MD-5 manufacturing licenses for Class A & B medical devices in India. State Licensing Authority audit & document support.', 'self', 'https://www.nkbregovanta.com/services/india/mfg-class-a-b', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Mfg-class-a-gsr', 'mfg-class-a-gsr', '/services/india/mfg-class-a-gsr', 'published', true, 'Class A Manufacturing  Registration (GSR 777(E))')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/mfg-class-a-gsr', 'Class A Manufacturing (GSR 777(E)) | NKB Regovanta', 'Class A medical device manufacturing registration under GSR 777(E) in India. Fast online intimation, plant layout review, and SLA compliance support.', 'self', 'https://www.nkbregovanta.com/services/india/mfg-class-a-gsr', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Mfg-class-c-d', 'mfg-class-c-d', '/services/india/mfg-class-c-d', 'published', true, 'Class C & D Manufacturing  (Forms MD-7 & MD-9)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/mfg-class-c-d', 'Class C & D Manufacturing License (MD-9) | NKB Regovanta', 'CDSCO MD-7 & MD-9 manufacturing license consulting for Class C & D medical devices in India. Plant audit readiness, technical files, and CLA support.', 'self', 'https://www.nkbregovanta.com/services/india/mfg-class-c-d', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Neutral-code', 'neutral-code', '/services/india/neutral-code', 'published', true, 'Neutral Code Certificate
                            
                            (Special Code)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/neutral-code', 'CDSCO Neutral Code Certificate | NKB Regovanta', 'Apply for a CDSCO Neutral Code Certificate to export medical devices while preserving OEM confidentiality and custom export branding in India.', 'self', 'https://www.nkbregovanta.com/services/india/neutral-code', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Non-conviction', 'non-conviction', '/services/india/non-conviction', 'published', true, 'Non-Conviction Certificate  (NCC)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/non-conviction', 'CDSCO Non-Conviction Certificate (NCC) | NKB Regovanta', 'Obtain a CDSCO Non-Conviction Certificate (NCC) to verify regulatory compliance for medical device tenders and institutional procurement in India.', 'self', 'https://www.nkbregovanta.com/services/india/non-conviction', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Novel-ivds', 'novel-ivds', '/services/india/novel-ivds', 'published', true, 'Import Authorization for  Novel IVDs (MD-26 & MD-27)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/novel-ivds', 'CDSCO Novel IVD Import Authorization | NKB Regovanta', 'Obtain CDSCO MD-26 & MD-27 import authorization for novel IVD diagnostics in India. Expert Committee liaison, clinical protocol review, and SUGAM support.', 'self', 'https://www.nkbregovanta.com/services/india/novel-ivds', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Personal-use', 'personal-use', '/services/india/personal-use', 'published', true, 'Patient Personal-Use Device Import  (Forms MD-20, MD-21)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/personal-use', 'Patient Device Import India (MD-20/21) | NKB Regovanta', 'CDSCO MD-20/21 support for an individual patient importing a limited-quantity medical device for personal treatment in India, not commercial distribution.', 'self', 'https://www.nkbregovanta.com/services/india/personal-use', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > India > Predicate-devices', 'predicate-devices', '/services/india/predicate-devices', 'published', true, 'Import License for Predicate Medical Devices  (Forms MD-14, MD-15)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/india/predicate-devices', 'Predicate Device Import License (MD-15) | NKB Regovanta', 'CDSCO MD-14 & MD-15 import license consulting for Class A-D predicate medical devices in India. Indian Authorized Agent, SUGAM filing, and dossier support.', 'self', 'https://www.nkbregovanta.com/services/india/predicate-devices', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Iso-13485-implementation-certification-consulting', 'iso-13485-implementation-certification-consulting', '/services/iso-13485-implementation-certification-consulting', 'published', true, 'ISO 13485 Implementation &amp;Certification Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/iso-13485-implementation-certification-consulting', 'ISO 13485 Implementation Consultant | NKB Regovanta', 'Expert ISO 13485:2016 QMS implementation, certification consulting, FDA QMSR alignment, ISO 14971 risk management, and mock audits.', 'self', 'https://www.nkbregovanta.com/services/iso-13485-implementation-certification-consulting', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Audit-documentation', 'audit-documentation', '/services/mdsap/audit-documentation', 'published', true, 'Audit Documentation &amp; Objective Evidence Preparation')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/audit-documentation', 'MDSAP Audit Documentation Preparation | NKB Regovanta', 'Review and strengthen SOPs, records, forms, and objective evidence packages across all 7 MDSAP process areas for a successful Auditing Organization audit.', 'self', 'https://www.nkbregovanta.com/services/mdsap/audit-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Capa-remediation', 'capa-remediation', '/services/mdsap/capa-remediation', 'published', true, 'Nonconformity, CAPA &amp; Remediation Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/capa-remediation', 'MDSAP Nonconformity & CAPA Remediation | NKB Regovanta', 'Root cause analysis, systemic CAPA development, trend prevention, and grade 4 nonconformity remediation packages for MDSAP Auditing Organizations.', 'self', 'https://www.nkbregovanta.com/services/mdsap/capa-remediation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Complaint-vigilance', 'complaint-vigilance', '/services/mdsap/complaint-vigilance', 'published', true, 'Complaint, Vigilance &amp; Post-Market Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/complaint-vigilance', 'MDSAP Complaint Handling & Vigilance | NKB Regovanta', 'MDSAP complaint handling, vigilance reporting across 5 jurisdictions, adverse event analysis, and FSCA advisory notice support for device manufacturers.', 'self', 'https://www.nkbregovanta.com/services/mdsap/complaint-vigilance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Design-controls', 'design-controls', '/services/mdsap/design-controls', 'published', true, 'Design &amp; Development Control Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/design-controls', 'MDSAP Design & Development Control Readiness | NKB Regovanta', 'Audit-ready design controls, user needs, V&V evidence, design transfer, software lifecycles (IEC 62304), and Design History File (DHF) support for MDSAP audits.', 'self', 'https://www.nkbregovanta.com/services/mdsap/design-controls', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Gap-assessment', 'gap-assessment', '/services/mdsap/gap-assessment', 'published', true, 'MDSAP QMS Gap Assessment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/gap-assessment', 'MDSAP QMS Gap Assessment Consulting | NKB Regovanta', 'Gap assessment against ISO 13485:2016 and MDSAP requirements across 7 process areas, with audit exposure modeling and prioritized remediation roadmap.', 'self', 'https://www.nkbregovanta.com/services/mdsap/gap-assessment', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap', 'mdsap', '/services/mdsap', 'published', true, 'MDSAP AUDIT READINESS &amp; CONSULTING')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap', 'MDSAP Audit Readiness & Consulting | NKB Regovanta', 'MDSAP audit readiness & consulting across 5 jurisdictions: US FDA, Health Canada, ANVISA Brazil, TGA Australia, and MHLW/PMDA Japan.', 'self', 'https://www.nkbregovanta.com/services/mdsap', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Jurisdiction-readiness', 'jurisdiction-readiness', '/services/mdsap/jurisdiction-readiness', 'published', true, 'Jurisdiction-Specific Regulatory Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/jurisdiction-readiness', 'MDSAP Country Regulatory Readiness | NKB Regovanta', 'Regulatory overlays for the 5 MDSAP jurisdictions: Australia (TGA), Brazil (ANVISA), Canada (Health Canada), Japan (PMDA), and USA (FDA).', 'self', 'https://www.nkbregovanta.com/services/mdsap/jurisdiction-readiness', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Mock-audits', 'mock-audits', '/services/mdsap/mock-audits', 'published', true, 'Mock MDSAP Audits &amp; Interview Preparation')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/mock-audits', 'Mock MDSAP Audits & Interview Preparation | NKB Regovanta', 'Full-system and targeted mock MDSAP audits, opening/closing meeting simulations, record retrieval drills, and process-owner interview coaching.', 'self', 'https://www.nkbregovanta.com/services/mdsap/mock-audits', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Post-certification', 'post-certification', '/services/mdsap/post-certification', 'published', true, 'Audit Response &amp; Post-Certification Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/post-certification', 'MDSAP Post-Certification Support | NKB Regovanta', 'Audit response packages, finding management, surveillance audit readiness, and continuous MDSAP QMS maintenance across 5 jurisdictions.', 'self', 'https://www.nkbregovanta.com/services/mdsap/post-certification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Process-readiness', 'process-readiness', '/services/mdsap/process-readiness', 'published', true, 'MDSAP Process-Based Audit Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/process-readiness', 'MDSAP Process-Based Audit Readiness | NKB Regovanta', 'Cross-process audit trail simulations, record retrieval drills, and process-owner coaching across all 7 MDSAP process areas for AO audit readiness.', 'self', 'https://www.nkbregovanta.com/services/mdsap/process-readiness', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Production-supplier-validation', 'production-supplier-validation', '/services/mdsap/production-supplier-validation', 'published', true, 'Production, Supplier &amp; Process Validation Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/production-supplier-validation', 'MDSAP Production & Supplier Validation | NKB Regovanta', 'Manufacturing controls, critical supplier governance, process validation evidence (IQ/OQ/PQ), sterilization, and cleanliness audit readiness for MDSAP.', 'self', 'https://www.nkbregovanta.com/services/mdsap/production-supplier-validation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Qms-alignment', 'qms-alignment', '/services/mdsap/qms-alignment', 'published', true, 'ISO 13485 to MDSAP QMS Alignment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/qms-alignment', 'ISO 13485 to MDSAP QMS Alignment | NKB Regovanta', 'Align your ISO 13485 QMS to MDSAP requirements with embedded country-specific decision trees and regulatory triggers — one unified system, five jurisdictions.', 'self', 'https://www.nkbregovanta.com/services/mdsap/qms-alignment', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Mdsap > Strategy-scope', 'strategy-scope', '/services/mdsap/strategy-scope', 'published', true, 'MDSAP Regulatory Strategy &amp; Scope Assessment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/mdsap/strategy-scope', 'MDSAP Regulatory Strategy & Scope Assessment | NKB Regovanta', 'Audit scope definition, legal manufacturer boundary mapping, facility mapping, product categories, and regulatory expectations across the 5 MDSAP jurisdictions.', 'self', 'https://www.nkbregovanta.com/services/mdsap/strategy-scope', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Medical-device-audit-compliance-support', 'medical-device-audit-compliance-support', '/services/medical-device-audit-compliance-support', 'published', true, 'Audit & Compliance Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/medical-device-audit-compliance-support', 'Audit & Compliance Support | NKB Regovanta', 'Medical device audit readiness and compliance consulting: MDSAP, ISO 13485, FDA QMSR, EU MDR Annex IX, authority inspections, and CAPA remediation.', 'self', 'https://www.nkbregovanta.com/services/medical-device-audit-compliance-support', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Medical-device-ivd-regulatory-due-diligence', 'medical-device-ivd-regulatory-due-diligence', '/services/medical-device-ivd-regulatory-due-diligence', 'published', true, 'Regulatory Due Diligence for Medical Devices &amp; IVDs')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/medical-device-ivd-regulatory-due-diligence', 'Medical Device Regulatory Due Diligence | NKB Regovanta', 'Regulatory due diligence for medical device and IVD M&A, private equity, and licensing deals. Risk classification, QMS audits, and valuation impact analysis.', 'self', 'https://www.nkbregovanta.com/services/medical-device-ivd-regulatory-due-diligence', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Medical-device-technical-documentation-consulting', 'medical-device-technical-documentation-consulting', '/services/medical-device-technical-documentation-consulting', 'published', true, 'Medical Device Technical Documentation')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/medical-device-technical-documentation-consulting', 'Medical Device Technical Documentation | NKB Regovanta', 'Medical device technical documentation consulting: EU MDR Annex II/III files, FDA 510(k) dossiers, ISO 13485 records, and global regulatory submissions.', 'self', 'https://www.nkbregovanta.com/services/medical-device-technical-documentation-consulting', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Change-management', 'change-management', '/services/new-zealand/change-management', 'published', true, 'Change, Notification &amp; Lifecycle Support (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/change-management', 'Medsafe WAND Change Management | NKB Regovanta', 'Medical device change management for New Zealand — WAND updates, sponsor variations, engineering revisions, and lifecycle governance under Medsafe.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/change-management', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Classification', 'classification', '/services/new-zealand/classification', 'published', true, 'Regulatory Strategy &amp; Product Classification (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/classification', 'NZ Medical Device Classification | NKB Regovanta', 'Medical device classification under Schedule 2 in New Zealand — Class I to III, AIMD, IVD determination, and GMDN coding strategy for Medsafe WAND.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand', 'new-zealand', '/services/new-zealand', 'published', true, 'New Zealand WAND Notification &amp; Medsafe Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand', 'New Zealand Medsafe Consultant | NKB Regovanta', 'Expert New Zealand Medsafe regulatory consulting: WAND notifications, NZ Sponsor representation, risk classification, and post-market compliance.', 'self', 'https://www.nkbregovanta.com/services/new-zealand', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Ivd', 'ivd', '/services/new-zealand/ivd', 'published', true, 'IVD Regulatory &amp; Performance Evidence Support (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/ivd', 'New Zealand IVD Regulatory Support | NKB Regovanta', 'IVD regulatory compliance, voluntary WAND notification, performance evidence, and Medsafe compliance for in vitro diagnostics in New Zealand.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/ivd', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Labeling', 'labeling', '/services/new-zealand/labeling', 'published', true, 'Labelling, IFU &amp; Advertising Compliance (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/labeling', 'Medical Device Labelling New Zealand | NKB Regovanta', 'Medical device labeling compliance in New Zealand — IFU, packaging artwork, sponsor details, and advertising review under Medsafe guidelines.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/labeling', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Medsafe-queries', 'medsafe-queries', '/services/new-zealand/medsafe-queries', 'published', true, 'Medsafe Queries, Safety Review &amp; Technical Response')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/medsafe-queries', 'Medsafe Inquiries & Technical Response | NKB Regovanta', 'Strategic response formulation for Medsafe inquiries, safety reviews, and audits in New Zealand — root-cause analysis and evidence coordination.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/medsafe-queries', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Post-market', 'post-market', '/services/new-zealand/post-market', 'published', true, 'Post-Market Surveillance, Adverse Events &amp; Recall Support (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/post-market', 'NZ Post-Market & Recall Support | NKB Regovanta', 'Post-market surveillance, incident reporting, and recall management under Medsafe guidelines in New Zealand — 10-day reporting and Recall Code compliance.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/post-market', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Qms-compliance', 'qms-compliance', '/services/new-zealand/qms-compliance', 'published', true, 'QMS &amp; Compliance Readiness (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/qms-compliance', 'NZ QMS & Sponsor Compliance Readiness | NKB Regovanta', 'QMS and compliance readiness for New Zealand Sponsors and importers — ISO 13485 alignment, distribution records, and Medsafe inspection support.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/qms-compliance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Software', 'software', '/services/new-zealand/software', 'published', true, 'SaMD, Software, AI &amp; Cybersecurity (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/software', 'NZ SaMD, AI & Cybersecurity Consulting | NKB Regovanta', 'SaMD and AI/ML regulation in New Zealand — IEC 62304 lifecycles, cybersecurity risk, SBOM, algorithmic validation, and WAND notification support.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/software', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Sponsor', 'sponsor', '/services/new-zealand/sponsor', 'published', true, 'New Zealand Sponsor Services &amp; Regulatory Governance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/sponsor', 'NZ Sponsor Services & Representation | NKB Regovanta', 'NZ Sponsor services for medical device manufacturers — legal representation, Medsafe liaison, distribution records, and recall readiness in New Zealand.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/sponsor', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Supply-chain', 'supply-chain', '/services/new-zealand/supply-chain', 'published', true, 'Importer, Distributor &amp; Supply Chain Compliance (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/supply-chain', 'NZ Importer & Supply Chain Compliance | NKB Regovanta', 'Supply chain governance for NZ medical device importers — multi-importer WAND strategies, distribution traceability records, and recall readiness.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/supply-chain', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Technical-documentation', 'technical-documentation', '/services/new-zealand/technical-documentation', 'published', true, 'Medsafe Technical Documentation &amp; Evidence (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/technical-documentation', 'NZ Technical Documentation & Safety | NKB Regovanta', 'Technical file substantiation and safety evidence for medical devices in New Zealand — ISO 14971 risk, clinical evaluation, and Medsafe audit readiness.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Testing-strategy', 'testing-strategy', '/services/new-zealand/testing-strategy', 'published', true, 'Testing Strategy &amp; Laboratory Coordination (New Zealand)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/testing-strategy', 'NZ Device Testing Strategy & Lab Support | NKB Regovanta', 'Pre-clinical testing strategy for devices and IVDs in New Zealand — ISO 10993 biocompatibility, IEC 60601 electrical safety, and lab coordination.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/testing-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > New-zealand > Wand-notification', 'wand-notification', '/services/new-zealand/wand-notification', 'published', true, 'WAND Notification &amp; Sponsor Readiness (Medsafe)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/new-zealand/wand-notification', 'NZ WAND Notification & Medsafe Database | NKB Regovanta', 'WAND database filing with Medsafe in NZ — 30-day statutory notifications, GMDN descriptors, and product identifier entry for medical devices.', 'self', 'https://www.nkbregovanta.com/services/new-zealand/wand-notification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Pc-pndt-registration-consultant-certificate-india', 'pc-pndt-registration-consultant-certificate-india', '/services/pc-pndt-registration-consultant-certificate-india', 'published', true, 'PC-PNDT Registration Consultant & Certificate
                
                  For Ultrasound & Imaging Medical Devices (Form A & B)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/pc-pndt-registration-consultant-certificate-india', 'Ultrasound & Imaging Importers', 'Leading PC-PNDT registration consultant in India. Statutory Form A filing & Form B certificate grant for ultrasound machines, imaging equipment, importers, OEMs & dealers.', 'self', 'https://www.nkbregovanta.com/services/pc-pndt-registration-consultant-certificate-india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Pharmaceutical-cleanroom-manufacturing-equipment', 'pharmaceutical-cleanroom-manufacturing-equipment', '/services/pharmaceutical-cleanroom-manufacturing-equipment', 'published', true, 'Pharmaceutical &amp; Cleanroom Manufacturing Equipment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/pharmaceutical-cleanroom-manufacturing-equipment', 'Pharmaceutical & Cleanroom Equipment | NKB Regovanta', 'SS 304/316 machinery, cleanroom furniture, blenders, trolleys, lifting devices, and ancillary equipment for pharma and healthcare manufacturing.', 'self', 'https://www.nkbregovanta.com/services/pharmaceutical-cleanroom-manufacturing-equipment', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Authorized-representative', 'authorized-representative', '/services/saudi-arabia/authorized-representative', 'published', true, 'Saudi Authorized Representative (AR) Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/authorized-representative', 'Saudi AR Services & SFDA Compliance | NKB Regovanta', 'Licensed Saudi Authorized Representative (AR) representation for medical device and IVD manufacturers. GHAD portal, vigilance, and SFDA liaison.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/authorized-representative', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Change-management', 'change-management', '/services/saudi-arabia/change-management', 'published', true, 'Changes, Renewal &amp; Lifecycle Support (SFDA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/change-management', 'SFDA Variations & MDMA Renewal Support | NKB Regovanta', 'SFDA change notification and regulatory variation management in Saudi Arabia. MDMA amendments, site additions, renewals, and technical updates.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/change-management', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Classification', 'classification', '/services/saudi-arabia/classification', 'published', true, 'SFDA Regulatory Strategy &amp; Product Classification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/classification', 'SFDA Device & IVD Classification | NKB Regovanta', 'SFDA risk classification for Medical Devices and IVDs in Saudi Arabia. Intended purpose justification, software SaMD rules, and MDMA evidence.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Establishment-licensing', 'establishment-licensing', '/services/saudi-arabia/establishment-licensing', 'published', true, 'Medical Device Establishment Licensing &amp; Local Supply Chain')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/establishment-licensing', 'SFDA Medical Device Establishment Licensing | NKB Regovanta', 'SFDA medical device establishment licensing (MDS-REQ 9): importer, distributor & warehouse licensing, GHAD account setup, and supply-chain QMS compliance.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/establishment-licensing', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia', 'saudi-arabia', '/services/saudi-arabia', 'published', true, 'Saudi Arabia SFDA Medical Device Registration &amp; MDMA')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia', 'Saudi Arabia SFDA Consultant | NKB Regovanta', 'Expert Saudi Arabia SFDA regulatory consulting: MDMA marketing authorization, Saudi Authorized Representative (AR), MDS-REQ 1, and licensing.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Inspection', 'inspection', '/services/saudi-arabia/inspection', 'published', true, 'SFDA Inspection &amp; Quality-System Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/inspection', 'SFDA Inspection & QMS Readiness | NKB Regovanta', 'SFDA inspection and audit preparation: MDS-REQ 10 & ISO 13485 quality system gap assessments, mock inspections, and corrective action response closure.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/inspection', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Ivd', 'ivd', '/services/saudi-arabia/ivd', 'published', true, 'IVD Registration &amp; Performance Evidence (SFDA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/ivd', 'SFDA IVD Registration & Performance | NKB Regovanta', 'SFDA IVD registration and performance evidence in Saudi Arabia. Class A-D classification, analytical studies, Arabic labeling, and GHAD portal submissions.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/ivd', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Labeling', 'labeling', '/services/saudi-arabia/labeling', 'published', true, 'Labeling, IFU, UDI &amp; Advertising Compliance (SFDA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/labeling', 'SFDA Device Labeling & UDI Compliance | NKB Regovanta', 'Saudi FDA medical device & IVD labeling compliance: Arabic and English IFU review, Saudi-DI UDI database submission, and MDS-REQ 8 packaging approval.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/labeling', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Mdma', 'mdma', '/services/saudi-arabia/mdma', 'published', true, 'MDMA Application &amp; Technical File Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/mdma', 'SFDA MDMA Application Strategy | NKB Regovanta', 'SFDA MDMA submissions via GHAD portal under MDS-REQ 1. Technical file compilation, Essential Principles mapping, and deficiency defense in Saudi Arabia.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/mdma', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Post-market', 'post-market', '/services/saudi-arabia/post-market', 'published', true, 'Post-Market Surveillance, Vigilance &amp; Field Safety Actions (SFDA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/post-market', 'SFDA Post-Market Surveillance & Vigilance | NKB Regovanta', 'SFDA post-market surveillance (PMS) and vigilance in Saudi Arabia. Adverse incident reporting, FSCAs, safety notices, and periodic safety updates.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/post-market', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Sfda-queries', 'sfda-queries', '/services/saudi-arabia/sfda-queries', 'published', true, 'SFDA Queries, Deficiency Response &amp; Technical Review Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/sfda-queries', 'SFDA Queries & Deficiency Response | NKB Regovanta', 'SFDA technical query responses, MDMA deficiency letters, and scientific rebuttals in Saudi Arabia. Dossier revisions and time-bound GHAD portal closure.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/sfda-queries', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Software', 'software', '/services/saudi-arabia/software', 'published', true, 'SaMD, Software, AI &amp; Cybersecurity (SFDA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/software', 'SFDA SaMD, AI & Software Consulting | NKB Regovanta', 'SFDA SaMD, AI/ML, and software regulation in Saudi Arabia. IEC 62304 lifecycles, cybersecurity risk management, SBOM, and MDMA authorization.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/software', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Technical-documentation', 'technical-documentation', '/services/saudi-arabia/technical-documentation', 'published', true, 'Technical Documentation &amp; Essential Principles (SFDA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/technical-documentation', 'SFDA Technical Documentation Services | NKB Regovanta', 'Technical documentation compilation for SFDA MDMA under MDS-REQ 1. Essential Principles mapping, ISO 14971 risk files, and clinical evaluation evidence.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Saudi-arabia > Testing-strategy', 'testing-strategy', '/services/saudi-arabia/testing-strategy', 'published', true, 'Testing Strategy &amp; Laboratory Coordination (SFDA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/saudi-arabia/testing-strategy', 'SFDA Device Testing Strategy | NKB Regovanta', 'Pre-clinical testing strategy for SFDA MDMA. IEC 60601 electrical safety, EMC, ISO 10993 biocompatibility, and accredited laboratory coordination.', 'self', 'https://www.nkbregovanta.com/services/saudi-arabia/testing-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Change-management', 'change-management', '/services/uae/change-management', 'published', false, 'Changes, Variations, Renewal &amp; Lifecycle Support (UAE)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/change-management', 'MOHAP Changes & Renewals (UAE) | NKB Regovanta', 'MOHAP variation notifications and medical device renewals in UAE. Design changes, site transfers, renewals, and technical file updates.', 'self', 'https://www.nkbregovanta.com/services/uae/change-management', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Classification', 'classification', '/services/uae/classification', 'published', false, 'UAE MOHAP Regulatory Strategy &amp; Product Classification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/classification', 'MOHAP Device Classification (UAE) | NKB Regovanta', 'MOHAP product classification for medical devices and IVDs in UAE. Class I-IV determination, SaMD qualification, and classification letter applications.', 'self', 'https://www.nkbregovanta.com/services/uae/classification', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Ecas', 'ecas', '/services/uae/ecas', 'published', false, 'ECAS / MOIAT Conformity Assessment (Where Separately Applicable)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/ecas', 'UAE MOIAT ECAS Certification | NKB Regovanta', 'UAE MOIAT ECAS conformity assessment for medical device electrical modules, power units, and wireless systems. Certificate of Conformity (CoC) guidance.', 'self', 'https://www.nkbregovanta.com/services/uae/ecas', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae', 'uae', '/services/uae', 'published', true, 'UAE MOHAP Medical Device Registration &amp; Market Access')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae', 'UAE MOHAP Medical Device Consultant | NKB Regovanta', 'Expert UAE MOHAP medical device consulting: classification, MAH interface, technical file compilation, and post-market vigilance in the Emirates.', 'self', 'https://www.nkbregovanta.com/services/uae', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Ivd', 'ivd', '/services/uae/ivd', 'published', false, 'IVD Registration &amp; Performance Evidence (UAE)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/ivd', 'MOHAP IVD Registration Services (UAE) | NKB Regovanta', 'IVD registration with UAE MOHAP. Analytical and clinical performance evidence, stability studies, calibrator traceability, and dossier submission.', 'self', 'https://www.nkbregovanta.com/services/uae/ivd', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Labeling', 'labeling', '/services/uae/labeling', 'published', false, 'Labeling, IFU, Packaging &amp; Market-Claim Compliance (UAE)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/labeling', 'MOHAP Device Labeling & IFU (UAE) | NKB Regovanta', 'MOHAP medical device and IVD labeling in UAE. Arabic/English IFU review, packaging artwork, UDI compliance, and promotional materials.', 'self', 'https://www.nkbregovanta.com/services/uae/labeling', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Local-applicant', 'local-applicant', '/services/uae/local-applicant', 'published', false, 'UAE Local Applicant, Marketing Authorization Holder &amp; Regulatory Interface')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/local-applicant', 'UAE Local Applicant & MAH Services | NKB Regovanta', 'Licensed UAE medical warehouse and marketing office representation for MOHAP registration. MAH setup, regulatory agreements, and lifecycle governance.', 'self', 'https://www.nkbregovanta.com/services/uae/local-applicant', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Mohap-queries', 'mohap-queries', '/services/uae/mohap-queries', 'published', false, 'MOHAP Queries, Deficiency Response &amp; Technical Review Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/mohap-queries', 'MOHAP Queries & Deficiency Response (UAE) | NKB Regovanta', 'Strategic response formulation for UAE MOHAP technical queries and deficiency letters. Root-cause analysis, dossier revisions, and time-bound closure.', 'self', 'https://www.nkbregovanta.com/services/uae/mohap-queries', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Mohap-registration', 'mohap-registration', '/services/uae/mohap-registration', 'published', false, 'MOHAP Medical Device Registration &amp; Dossier Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/mohap-registration', 'MOHAP Medical Device Registration (UAE) | NKB Regovanta', 'MOHAP medical device and IVD registration in UAE. Dossier compilation, FSC, CE declaration, and technical committee approval support.', 'self', 'https://www.nkbregovanta.com/services/uae/mohap-registration', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Post-market', 'post-market', '/services/uae/post-market', 'published', false, 'Post-Market Monitoring, Vigilance &amp; Field Actions (UAE)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/post-market', 'MOHAP Post-Market & Vigilance (UAE) | NKB Regovanta', 'MOHAP post-market surveillance and vigilance in UAE. Adverse incident reporting, Field Safety Corrective Actions (FSCA), recalls, and safety updates.', 'self', 'https://www.nkbregovanta.com/services/uae/post-market', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Qms-inspection', 'qms-inspection', '/services/uae/qms-inspection', 'published', false, 'QMS, Establishment &amp; Inspection Readiness (UAE)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/qms-inspection', 'MOHAP QMS & Inspection Readiness (UAE) | NKB Regovanta', 'MOHAP establishment inspection and QMS readiness in UAE. ISO 13485 alignment, medical warehouse audits, distribution controls, and CAPA remediation.', 'self', 'https://www.nkbregovanta.com/services/uae/qms-inspection', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Software', 'software', '/services/uae/software', 'published', false, 'SaMD, Software, AI &amp; Cybersecurity (UAE MOHAP)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/software', 'MOHAP SaMD & AI Software (UAE) | NKB Regovanta', 'SaMD and AI/ML medical software regulation in UAE. IEC 62304 lifecycles, cybersecurity risk management, SBOM, and MOHAP registration.', 'self', 'https://www.nkbregovanta.com/services/uae/software', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Supply-chain', 'supply-chain', '/services/uae/supply-chain', 'published', false, 'Medical Warehouse, Local Supply Chain &amp; Commercial Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/supply-chain', 'UAE Medical Warehouse & Supply Chain | NKB Regovanta', 'Licensed UAE medical warehouse setup, importation permits, storage and distribution governance under MOHAP. Batch traceability and commercial readiness.', 'self', 'https://www.nkbregovanta.com/services/uae/supply-chain', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Technical-documentation', 'technical-documentation', '/services/uae/technical-documentation', 'published', false, 'Technical Documentation &amp; Safety / Performance Evidence (UAE MOHAP)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/technical-documentation', 'MOHAP Technical Documentation (UAE) | NKB Regovanta', 'MOHAP medical equipment technical file compilation in UAE. Essential principles, ISO 14971 risk files, clinical evaluation, and pre-clinical evidence.', 'self', 'https://www.nkbregovanta.com/services/uae/technical-documentation', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uae > Testing-strategy', 'testing-strategy', '/services/uae/testing-strategy', 'published', false, 'Testing Strategy &amp; Laboratory Coordination (UAE)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uae/testing-strategy', 'MOHAP Device Testing Strategy (UAE) | NKB Regovanta', 'Pre-clinical testing strategy for UAE MOHAP registration. ISO 10993 biocompatibility, IEC 60601 electrical safety, EMC, and lab coordination.', 'self', 'https://www.nkbregovanta.com/services/uae/testing-strategy', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Audit-readiness', 'audit-readiness', '/services/uk/audit-readiness', 'published', true, 'UK Approved Body &amp; Conformity Assessment Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/audit-readiness', 'UK Approved Body Audit Readiness | NKB Regovanta', 'UK Approved Body audit preparation, mock interviews, ISO 13485 QMS review, technical file pre-assessment, and nonconformity resolution under UK MDR.', 'self', 'https://www.nkbregovanta.com/services/uk/audit-readiness', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Conformity-assurance', 'conformity-assurance', '/services/uk/conformity-assurance', 'published', true, 'CE Recognition &amp; UKCA Market Access Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/conformity-assurance', 'UKCA Marking & CE Recognition Strategy | NKB Regovanta', 'Strategic consulting on CE recognition in Great Britain up to 2030, UKCA marking pathways, UK Approved Body selection, and Northern Ireland strategy.', 'self', 'https://www.nkbregovanta.com/services/uk/conformity-assurance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Dors-registration', 'dors-registration', '/services/uk/dors-registration', 'published', false, 'MHRA DORS Device Registration System')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/dors-registration', 'MHRA DORS Device Registration | NKB Regovanta', 'MHRA DORS device registration consulting: account setup, device listing, UK Responsible Person (UKRP) registration, and Northern Ireland compliance.', 'self', 'https://www.nkbregovanta.com/services/uk/dors-registration', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk', 'uk', '/services/uk', 'published', true, 'UK MHRA Medical Device
                Registration &amp;
                UK Responsible Person (UKRP)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk', 'UK MHRA Registration & UKRP | NKB Regovanta', 'Expert UK MHRA medical device consulting: UK Responsible Person (UKRP), DORS registration, UKCA marking, CE recognition, and Northern Ireland compliance.', 'self', 'https://www.nkbregovanta.com/services/uk', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Labeling', 'labeling', '/services/uk/labeling', 'published', false, 'UKCA Labeling &amp; Artwork Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/labeling', 'UKCA Labeling & UKRP Identification | NKB Regovanta', 'UKCA marking labeling requirements, Instructions for Use (IFU), UK Responsible Person (UKRP) identification on packaging, and symbology compliance.', 'self', 'https://www.nkbregovanta.com/services/uk/labeling', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Mhra-liaison', 'mhra-liaison', '/services/uk/mhra-liaison', 'published', false, 'MHRA Communication Liaison &amp; Regulatory Representation')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/mhra-liaison', 'MHRA Communication Liaison | NKB Regovanta', 'Official communication liaison with the UK Medicines and Healthcare products Regulatory Agency (MHRA) for overseas manufacturers.', 'self', 'https://www.nkbregovanta.com/services/uk/mhra-liaison', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Mhra-registration', 'mhra-registration', '/services/uk/mhra-registration', 'published', true, 'MHRA Medical Device Registration &amp; DORS Readiness')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/mhra-registration', 'MHRA Medical Device Registration | NKB Regovanta', 'UK MHRA medical device and IVD registration consulting via DORS: data quality audits, UKRP linkage, and continuous registration maintenance.', 'self', 'https://www.nkbregovanta.com/services/uk/mhra-registration', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Pms', 'pms', '/services/uk/pms', 'published', true, 'UK Post-Market Surveillance (PMS), PMSR &amp; PSUR')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/pms', 'UK Post-Market Surveillance PMS | NKB Regovanta', 'UK post-market surveillance consulting: GB 2025 PMS requirements, PMSR, PSUR reports, MHRA vigilance reporting, and UKRP incident coordination.', 'self', 'https://www.nkbregovanta.com/services/uk/pms', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Qms', 'qms', '/services/uk/qms', 'published', false, 'QMS Implementation &amp; UK MDR Alignment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/qms', 'UK MDR QMS & ISO 13485 Consulting | NKB Regovanta', 'UK MDR 2002 Quality Management System consulting: ISO 13485:2016 implementation, UKCA technical files, and MHRA QMS compliance in Great Britain.', 'self', 'https://www.nkbregovanta.com/services/uk/qms', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Regulatory-writing', 'regulatory-writing', '/services/uk/regulatory-writing', 'published', false, 'UK Regulatory &amp; Clinical Writing Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/regulatory-writing', 'UK Regulatory Writing & CER | NKB Regovanta', 'Regulatory and medical writing for the UK market: Clinical Evaluation Reports (CER), PMSR, PSUR, risk management files, and clinical protocols.', 'self', 'https://www.nkbregovanta.com/services/uk/regulatory-writing', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Technical-file', 'technical-file', '/services/uk/technical-file', 'published', true, 'UK MDR Technical Documentation &amp; Gap Assessment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/technical-file', 'UK MDR Technical Documentation | NKB Regovanta', 'UK MDR 2002 technical documentation compilation, Essential Requirements mapping, clinical evaluation, and technical gap assessments for UKCA marking.', 'self', 'https://www.nkbregovanta.com/services/uk/technical-file', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Ukrp', 'ukrp', '/services/uk/ukrp', 'published', true, 'UK Responsible Person (UKRP) Services')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/ukrp', 'UK Responsible Person UKRP Services | NKB Regovanta', 'Official UK Responsible Person (UKRP) representation & MHRA registration: DORS portal listing, vigilance management, and UK MDR 2002 compliance.', 'self', 'https://www.nkbregovanta.com/services/uk/ukrp', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Uk > Vigilance', 'vigilance', '/services/uk/vigilance', 'published', true, 'UK Vigilance &amp; Field Safety Corrective Action (FSCA)')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/uk/vigilance', 'UK MHRA Vigilance & FSCA Consulting | NKB Regovanta', 'UK MHRA regulatory vigilance consulting: adverse incident triage, MORE portal reporting, Field Safety Notices (FSN), and FSCA root-cause investigations.', 'self', 'https://www.nkbregovanta.com/services/uk/vigilance', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > 510k', '510k', '/services/usa/510k', 'published', true, 'FDA 510(k) Premarket Notification &amp; Clearance Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/510k', 'FDA 510(k) Clearance Consultant | NKB Regovanta', 'FDA 510(k) clearance consulting for medical devices. Substantial equivalence strategy, predicate selection, eSTAR dossier filing, and FDA response.', 'self', 'https://www.nkbregovanta.com/services/usa/510k', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > 513g', '513g', '/services/usa/513g', 'published', false, 'FDA 513(g) Requests for Information')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/513g', 'FDA 513(g) Information Request | NKB Regovanta', 'Obtain a formal FDA written opinion on device classification and regulatory pathway with our 513(g) Information Request consulting services.', 'self', 'https://www.nkbregovanta.com/services/usa/513g', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Agent-service', 'agent-service', '/services/usa/agent-service', 'published', true, 'US Agent Services for Foreign Establishments')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/agent-service', 'US FDA US Agent Services | NKB Regovanta', 'Official US FDA Agent services for foreign establishments under 21 CFR 807.40. FURLS establishment registration, device listing, and liaison support.', 'self', 'https://www.nkbregovanta.com/services/usa/agent-service', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Classification', 'classification', '/services/usa/classification', 'published', true, 'FDA Medical Device Classification &amp; Pathway Assessment')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/classification', 'FDA Device Classification Assessment | NKB Regovanta', 'Determine your medical device FDA classification, regulation number, product code, 510(k) exemption status, and premarket pathway with expert consultants.', 'self', 'https://www.nkbregovanta.com/services/usa/classification', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > De-novo', 'de-novo', '/services/usa/de-novo', 'published', true, 'US FDA De Novo Classification Pathway')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/de-novo', 'US FDA De Novo Classification | NKB Regovanta', 'Expert consulting for US FDA De Novo classification requests for novel medical devices without predicates. Special controls and eSTAR support.', 'self', 'https://www.nkbregovanta.com/services/usa/de-novo', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Deficiency-response', 'deficiency-response', '/services/usa/deficiency-response', 'published', true, 'FDA Additional Information &amp; Deficiency Response')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/deficiency-response', 'FDA Deficiency Response Consulting | NKB Regovanta', 'Strategic response preparation for FDA 510(k), De Novo, and PMA Additional Information (AI) requests, hold letters, and deficiency queries.', 'self', 'https://www.nkbregovanta.com/services/usa/deficiency-response', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > E-star', 'e-star', '/services/usa/e-star', 'published', true, 'FDA eSTAR Dossier Preparation &amp; Submission')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/e-star', 'FDA eSTAR Dossier Preparation | NKB Regovanta', 'Complete US FDA eSTAR dossier preparation and compilation services. Technical evidence integration and cross-section consistency for 510(k) & De Novo.', 'self', 'https://www.nkbregovanta.com/services/usa/e-star', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Establishment-registration', 'establishment-registration', '/services/usa/establishment-registration', 'published', true, 'FDA Establishment Registration &amp; Device Listing')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/establishment-registration', 'FDA Establishment Registration | NKB Regovanta', 'FDA Establishment Registration and Device Listing via FURLS. Annual renewals, MDUFA fee management, and US Agent coordination with expert consultants.', 'self', 'https://www.nkbregovanta.com/services/usa/establishment-registration', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Global-market-access', 'global-market-access', '/services/usa/global-market-access', 'published', true, 'Global Market Access &amp; Regulatory Harmonization')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/global-market-access', 'Global Market Access Strategy | NKB Regovanta', 'Harmonized global regulatory planning for US FDA, EU MDR, CDSCO, UK MHRA, TGA, and Health Canada. One aligned multi-market evidence plan.', 'self', 'https://www.nkbregovanta.com/services/usa/global-market-access', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa', 'usa', '/services/usa', 'published', true, 'US FDA Medical Device Consultant &amp;510(k) Premarket Notification')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa', 'US FDA Medical Device Consultant | NKB Regovanta', 'Expert US FDA medical device consulting: 510(k) clearances, eSTAR dossiers, De Novo requests, PMA approval, and US Agent representation.', 'self', 'https://www.nkbregovanta.com/services/usa', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Pma', 'pma', '/services/usa/pma', 'published', false, 'US FDA Premarket Approval (PMA) Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/pma', 'US FDA Premarket Approval (PMA) | NKB Regovanta', 'Consulting for US FDA Premarket Approval (PMA) applications for high-risk Class III medical devices. Clinical data, QMSR, and advisory committee support.', 'self', 'https://www.nkbregovanta.com/services/usa/pma', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Post-clearance-lifecycle', 'post-clearance-lifecycle', '/services/usa/post-clearance-lifecycle', 'published', true, 'FDA Post-Clearance &amp; Device Lifecycle Support')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/post-clearance-lifecycle', 'FDA Device Lifecycle Management | NKB Regovanta', 'FDA post-market compliance, device change assessment, Special 510(k) evaluation, UDI / GUDID updates, and lifecycle management with expert consultants.', 'self', 'https://www.nkbregovanta.com/services/usa/post-clearance-lifecycle', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Predicate-strategy', 'predicate-strategy', '/services/usa/predicate-strategy', 'published', true, 'FDA Predicate &amp; Substantial Equivalence Strategy')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/predicate-strategy', 'FDA Predicate Device Strategy | NKB Regovanta', 'Expert FDA predicate device selection and substantial equivalence strategy. Bridge technological differences with robust performance evidence for 510(k).', 'self', 'https://www.nkbregovanta.com/services/usa/predicate-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Q-submission', 'q-submission', '/services/usa/q-submission', 'published', true, 'FDA Q-Submission &amp; Pre-Submission Consulting')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/q-submission', 'FDA Q-Submission (Pre-Sub) Consulting | NKB Regovanta', 'Strategic FDA Q-Submission (Pre-Sub) consulting. Briefing document preparation, targeted questions, meeting support, and actionable feedback roadmaps.', 'self', 'https://www.nkbregovanta.com/services/usa/q-submission', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Qmsr-inspection', 'qmsr-inspection', '/services/usa/qmsr-inspection', 'published', true, 'FDA QMSR &amp; Inspection Preparation')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/qmsr-inspection', 'FDA QMSR & Inspection Preparation | NKB Regovanta', 'FDA QMSR (21 CFR 820 / ISO 13485) compliance, mock FDA inspections, QSIT audits, and FDA 483 remediation consulting with regulatory specialists.', 'self', 'https://www.nkbregovanta.com/services/usa/qmsr-inspection', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Rfd-pre-rfd', 'rfd-pre-rfd', '/services/usa/rfd-pre-rfd', 'published', false, 'FDA RFD &amp; Pre-RFD Designations')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/rfd-pre-rfd', 'FDA RFD & Pre-RFD Designations | NKB Regovanta', 'US FDA RFD & Pre-RFD consulting for combination products and borderlines. Determine lead center jurisdiction and regulatory classification with our experts.', 'self', 'https://www.nkbregovanta.com/services/usa/rfd-pre-rfd', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Testing-strategy', 'testing-strategy', '/services/usa/testing-strategy', 'published', true, 'US FDA Medical Device Testing Strategy &amp; Standards Compliance')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/testing-strategy', 'US FDA Device Testing Strategy | NKB Regovanta', 'Defensible verification & validation testing strategy for US FDA submissions. Biocompatibility, electrical safety, EMC, software, and lab coordination.', 'self', 'https://www.nkbregovanta.com/services/usa/testing-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Usa > Udi-gudid', 'udi-gudid', '/services/usa/udi-gudid', 'published', false, 'FDA UDI &amp; GUDID Compliance Solutions')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/usa/udi-gudid', 'FDA UDI & GUDID Compliance | NKB Regovanta', 'US FDA UDI and GUDID compliance consulting. Unique Device Identifier assignment, labeling compliance, and Global UDI Database submission support.', 'self', 'https://www.nkbregovanta.com/services/usa/udi-gudid', 'noindex', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

INSERT INTO public.pages (name, slug, url_path, status, is_in_sitemap, h1)
VALUES ('Services > Wpc-approval-wireless-medical-devices-india', 'wpc-approval-wireless-medical-devices-india', '/services/wpc-approval-wireless-medical-devices-india', 'published', true, 'WPC Approval & Regulatory Compliance
                
                  For Wireless Medical Devices in India')
ON CONFLICT (url_path) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/services/wpc-approval-wireless-medical-devices-india', 'WPC ETA Wireless Medical Devices India | NKB Regovanta', 'WPC ETA approval, Saral Sanchar import permissions, and DPL licensing for wireless and telemetry medical devices in India. End-to-end WPC compliance.', 'self', 'https://www.nkbregovanta.com/services/wpc-approval-wireless-medical-devices-india', 'index', 'follow')
ON CONFLICT (target_url) DO UPDATE SET seo_title = EXCLUDED.seo_title, meta_description = EXCLUDED.meta_description, robots_index = EXCLUDED.robots_index;

-- 2. Seed 32 existing regulatory articles into blog_posts
INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('ISO 10993 Biological Evaluation: Define the Question Before Ordering Tests', 'biological-evaluation-testing-medical-devices-iso-10993', '<p>Biological evaluation starts with understanding the device that contacts the body, not with selecting a standard test package. Material composition, manufacturing residues, processing, contact conditions, and existing evidence all affect the questions to be answered. A justified plan helps avoid both unnecessary testing and important gaps hidden by a familiar checklist.</p>
<h2>undefined</h2>
<p>Describe direct and indirect contact, relevant tissues or fluids, contact duration, and the supplied configuration. Identify coatings, adhesives, processing aids, and other constituents that may affect the finished product. A material supplier''s certificate can be useful evidence, but it does not automatically describe the biological safety of the finished device after manufacturing and processing.</p>
<p>FDA''s biocompatibility resources describe evaluation within a risk-management context. Use the available information to identify the actual concerns, document existing evidence, and determine what additional evaluation is justified. Keep the rationale connected to the intended use and product configuration.</p>
<h2>undefined</h2>
<p>A standard''s latest edition and its regulatory recognition are separate matters. FDA''s May 2026 recognition entry for ISO 10993-1:2025 records partial recognition and specific exclusions. It also describes a transition for declarations to the earlier recognised edition through July 1, 2029. Check the entry and relevant guidance when planning a US submission.</p>
<p>Record the edition, recognition status, and any limitations relevant to the plan. Avoid updating a standard number in the dossier without assessing whether the evaluation approach needs to change. Conversely, do not assume every existing study becomes unusable when a new edition is published.</p>
<h2>undefined</h2>
<p>Prepare a gap assessment before commissioning work. Identify what existing material information, characterisation, test results, or other evidence can support, and what remains uncertain. Agree the sample configuration and preparation with the evaluation team so that results represent the intended finished device.</p>
<p>After results arrive, assess their relevance and limitations rather than attaching reports without interpretation. Explain how the evidence addresses the identified concerns and what changes would trigger reassessment. Material substitutions, processing changes, and revised contact claims should feed back into that decision.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does a material being described as medical grade establish biocompatibility?</h3>
<p>No. The label alone does not establish suitability for the finished device''s contact conditions and processing history. Use relevant evidence in a product-specific evaluation and explain what it does and does not support.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/biological-evaluation-testing-medical-devices-iso-10993', 'ISO 10993 Biological Evaluation: Define the Question Before Ordering Tests | NKB Regovanta', 'Biological evaluation starts with understanding the device that contacts the body, not with selecting a standard test package. Material composition, manufa', 'self', 'https://www.nkbregovanta.com/blog/biological-evaluation-testing-medical-devices-iso-10993', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Borderline Products: Separate Device Qualification From Risk Classification', 'borderline-medical-device-classification-strategy', '<p>A borderline assessment asks what regulatory framework applies before it asks which device class is appropriate. Teams can lose time by beginning with a classification rule while the product''s status as a device, medicine, IVD, or another category remains unresolved. A clear qualification assessment gives the later evidence and market-access plan a reliable starting point.</p>
<h2>undefined</h2>
<p>Record the intended purpose, composition or technology, mode of action, presentation, and proposed claims. For a combination or multi-function product, explain the contribution of each part. The European Commission publishes guidance on borderline questions, including the distinction between medical devices and medicinal products. Use the current relevant guidance as context for the particular product.</p>
<p>Keep qualification and classification in separate parts of the decision record. A conclusion that a product is a medical device does not determine its risk class. Conversely, a proposed class does not establish that device legislation was the right framework in the first place.</p>
<h2>undefined</h2>
<p>Ask whether the conclusion depends on a narrow claim or a specific mode of action. Review the website, instructions, packaging, demonstrations, and distributor materials for inconsistent statements. A restrained regulatory description cannot reliably coexist with a broader promotional claim that changes the product''s intended purpose.</p>
<p>Record alternative interpretations and the evidence that supports or weakens them. If a critical fact remains uncertain, identify how it will be established and who is responsible. This makes the assessment more useful than a one-line conclusion that provides no basis for revisiting the decision later.</p>
<h2>undefined</h2>
<p>A product''s status in one jurisdiction can inform research but does not settle its treatment elsewhere. Prepare a market-specific assessment, including the relevant definitions, available authority information, and any unresolved questions. Keep the common product description consistent while allowing the legal analysis to differ.</p>
<p>Where a formal clarification route is appropriate, submit a focused product description and a reasoned question. Preserve the response and its assumptions. Reassess when the composition, claimed purpose, mechanism, or configuration changes, especially if the earlier conclusion relied on a characteristic that no longer applies.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does a competitor''s registration settle a borderline assessment?</h3>
<p>No. It may be relevant background, but the competing product''s composition, claims, mechanism, or jurisdictional history can differ. Base the decision on the actual product and retain the reasoning that supports it.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/borderline-medical-device-classification-strategy', 'Borderline Products: Separate Device Qualification From Risk Classification | NKB Regovanta', 'A borderline assessment asks what regulatory framework applies before it asks which device class is appropriate. Teams can lose time by beginning with a cl', 'self', 'https://www.nkbregovanta.com/blog/borderline-medical-device-classification-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('CDSCO Manufacturing Licences: Prepare the Product and Site Evidence Together', 'cdsco-medical-device-manufacturing-license-india', '<p>A manufacturing application can stall even when the individual documents look complete. Common problems arise at their boundaries: the site name differs between records, a product family is described inconsistently, or the claimed manufacturing activity is not reflected in the quality documentation. Preparing the product and site evidence together reduces those avoidable inconsistencies.</p>
<h2>undefined</h2>
<p>India''s Medical Devices Rules, 2017 and subsequent amendments provide the framework. CDSCO describes different manufacturing and loan-licence routes by risk class. For Class C and D devices, its published information identifies MD-7 and MD-8 applications and MD-9 and MD-10 licences. Do not select forms from a generic checklist without first confirming classification and the applicant''s actual activities.</p>
<p>Check whether a specific exemption or amended provision applies, including the provisions for eligible non-sterile, non-measuring Class A devices. Keep the classification rationale and the applicable notification with the project records. Product names alone can be misleading when intended uses differ.</p>
<h2>undefined</h2>
<p>Map the manufacturing activities from receipt of materials to finished-device release. Identify which steps occur at the applicant''s site and which are outsourced, such as sterilisation, specialised testing, or packaging. Align that map with the proposed licence scope, supplier controls, and the records used to demonstrate that the finished product meets its specifications.</p>
<p>Prepare a controlled product list with model identifiers, intended uses, and relevant family relationships. Check that names and addresses agree across authorisations, certificates, labels, and application fields. Where one document covers a wider scope than the application, make the relevant portion clear rather than expecting the reviewer to infer it.</p>
<h2>undefined</h2>
<p>Assign a named owner to each evidence gap and distinguish a document that exists from a process that is operating. For example, a calibration procedure does not establish that the equipment used for release testing is currently controlled. Review records that demonstrate actual implementation of the proposed manufacturing process.</p>
<p>Before submission, run a consistency review across the product description, manufacturing flow, quality evidence, and labelling. After submission, maintain a response log that connects each query to the revised document and its effect on the rest of the application. Do not make an isolated correction that creates a new discrepancy elsewhere.</p>
<h2>Frequently Asked Questions</h2>
<h3>Can a manufacturing-licence checklist be reused for every device?</h3>
<p>It can provide a starting structure, but product class, intended use, site activities, and current amendments affect the application. Tailor the evidence and form selection to the actual product rather than treating a previous dossier as a universal template.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/cdsco-medical-device-manufacturing-license-india', 'CDSCO Manufacturing Licences: Prepare the Product and Site Evidence Together | NKB Regovanta', 'A manufacturing application can stall even when the individual documents look complete. Common problems arise at their boundaries: the site name differs be', 'self', 'https://www.nkbregovanta.com/blog/cdsco-medical-device-manufacturing-license-india', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Medical Device Registration in India: Define the Applicant, Product, and Route', 'cdsco-medical-device-registration-guidelines-india', '<p>The phrase ''CDSCO registration'' can hide several different activities. A manufacturer, importer, or distributor may need a different route and supporting information. Before collecting documents, define the device, its intended use, the business activity, and the legal entity that will hold the relevant responsibility. That definition makes the application plan much more reliable.</p>
<h2>undefined</h2>
<p>India''s Medical Devices Rules, 2017 and subsequent amendments govern the relevant framework. Establish the intended use and risk classification using the applicable provisions and CDSCO information. Product category names should support the assessment, not replace it when the actual use differs.</p>
<p>Check current amendments and specific provisions, including those affecting eligible non-sterile, non-measuring Class A devices. Record the source behind the selected route. Do not assume that a checklist used for a different device or an earlier application remains current.</p>
<h2>undefined</h2>
<p>For an import project, identify the foreign manufacturer, relevant manufacturing locations, Indian applicant arrangements, and proposed products. For domestic manufacture, define the activities and sites covered. CDSCO''s published information identifies the respective application and licence routes; select the one matching the actual activity.</p>
<p>Prepare an entity-and-product table before assembling the dossier. Check names, addresses, authorisations, and model identifiers across documents. Differences in spelling or scope may appear minor to the project team but can make the application difficult to assess.</p>
<h2>undefined</h2>
<p>Map each required item to an owner and a controlled source. Distinguish an available document from one that is current, applicable, and complete for the proposed scope. Review product descriptions, labels, certificates, and supporting technical information together rather than in separate administrative streams.</p>
<p>Plan how changes and ongoing obligations will be handled after the licence or registration. Keep the authorised scope accessible to commercial and operations teams so that new models or changed sites are not added informally. An application project should leave behind a maintainable regulatory record, not just an upload folder.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does an overseas approval automatically permit sale in India?</h3>
<p>Do not assume so. Overseas evidence may be relevant to an applicable route, but Indian requirements and the product''s circumstances still need assessment. Confirm the necessary licence or registration and its scope before commercial supply.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/cdsco-medical-device-registration-guidelines-india', 'Medical Device Registration in India: Define the Applicant, Product, and Route | NKB Regovanta', 'The phrase ''CDSCO registration'' can hide several different activities. A manufacturer, importer, or distributor may need a different route and supporting i', 'self', 'https://www.nkbregovanta.com/blog/cdsco-medical-device-registration-guidelines-india', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Cardiovascular Device CE Marking: Organise Evidence Around the Clinical Claim', 'ce-marking-cardiovascular-medical-devices', '<p>Cardiovascular devices cover very different technologies and clinical roles. A diagnostic accessory, a vascular implant, and an active therapeutic system should not inherit the same development checklist merely because they are used in cardiology. The most useful starting point is the clinical claim: what the device is intended to do, for whom, and under what conditions.</p>
<h2>undefined</h2>
<p>EU MDR classification follows the product''s characteristics and applicable rules, not a single cardiovascular label. Establish the intended purpose, duration and nature of contact, mode of action, and relevant technology. Use those details to determine the conformity-assessment route and the scope of notified-body involvement.</p>
<p>Record combinations and accessories explicitly. If a product is intended to work with a delivery system, external controller, or particular accessories, clarify which configurations are covered. The European Commission''s notified-body information can help identify designation scope, but the actual product and assessment needs still have to be discussed with the selected body.</p>
<h2>undefined</h2>
<p>Create a claim-to-evidence map that distinguishes mechanical or electrical performance, biological safety, clinical outcomes, and information for the user. For each evaluation, identify the configuration, use condition, and acceptance criterion represented by the result. Avoid assuming that a successful laboratory test proves every clinical claim.</p>
<p>Consider interactions between evidence areas. A material or surface change may influence both performance and patient-contact assessment. A modification intended to make deployment easier may affect how the product is used or which training is needed. Review those connections before deciding that only one report needs updating.</p>
<h2>undefined</h2>
<p>Choose follow-up questions that address the remaining uncertainty for the specific product. These may concern longer-term performance, less-represented patient groups, or use in settings not well covered by initial evidence. Define how information will be collected, evaluated, and linked back to the clinical and risk conclusions.</p>
<p>Separate a meaningful follow-up plan from a promise to review complaints. Complaints can reveal important signals, but they may not answer a defined performance question. Identify the data needed, the denominator or exposure information where relevant, and the point at which a signal would trigger further investigation or a change in the product information.</p>
<h2>Frequently Asked Questions</h2>
<h3>Are all cardiovascular devices Class III under the MDR?</h3>
<p>No. Classification depends on the applicable rules and the specific device. Do not assign a class from the clinical specialty alone; document the intended use and characteristics that support the classification rationale.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/ce-marking-cardiovascular-medical-devices', 'Cardiovascular Device CE Marking: Organise Evidence Around the Clinical Claim | NKB Regovanta', 'Cardiovascular devices cover very different technologies and clinical roles. A diagnostic accessory, a vascular implant, and an active therapeutic system s', 'self', 'https://www.nkbregovanta.com/blog/ce-marking-cardiovascular-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('CE Marking for Digital Health: Define the Product Before Planning the Evidence', 'ce-marking-digital-health-technologies', '<p>A digital health product can combine appointment booking, medical measurements, clinical recommendations, and communication in one interface. Treating the entire platform as a single regulatory function can obscure the real questions. A useful CE-marking plan starts by identifying what each function does, who relies on it, and which decisions its output is intended to support.</p>
<h2>undefined</h2>
<p>The European Commission''s software guidance distinguishes qualification from classification. Qualification asks whether a function falls within medical-device or IVD legislation; classification addresses its risk category once that boundary is established. A smartphone interface or a cloud deployment does not answer either question. Document the medical purpose, input data, intended user, and significance of the output before choosing a classification rule.</p>
<p>Prepare a function map that separates medical analysis from storage, messaging, billing, and other supporting features. Show how the modules exchange information. A non-medical module can still affect the medical function through incorrect patient identification, delayed transmission, or corrupted data. Include those interfaces in the product''s safety assessment.</p>
<h2>undefined</h2>
<p>For medical software, technical correctness and clinical usefulness are related but different questions. A calculation may execute exactly as specified while its output is unsuitable for the patient group in the claim. The MDCG software-evaluation guidance provides a framework for considering the relationship between the output and the clinical condition, the software''s technical performance, and its clinical performance.</p>
<p>Build an evidence table with a row for each proposed claim. Record the target population, reference method, evaluation dataset, acceptance criterion, and known limitation. Make exclusions visible: a model evaluated on adult hospital data should not silently acquire a paediatric home-use claim through a marketing edit.</p>
<h2>undefined</h2>
<p>Record the supported operating systems, hardware, cloud services, network assumptions, and software version associated with the evidence. Plan how the product responds to stale inputs, lost connectivity, or an unavailable third-party service. Users should be able to distinguish a current result from an old result that is merely still displayed.</p>
<p>Before each release, compare changes against the approved product description and risk controls. Decide which tests must be repeated, whether clinical evidence remains representative, and whether labelling needs revision. A release note that says only ''performance improvements'' gives the regulatory team too little information to make that assessment.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does every health app need CE marking as a medical device?</h3>
<p>No. The assessment depends on the intended purpose and functions. Document the reasoning for functions outside device legislation as carefully as for those inside it, and reassess when analytical features or claims change.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/ce-marking-digital-health-technologies', 'CE Marking for Digital Health: Define the Product Before Planning the Evidence | NKB Regovanta', 'A digital health product can combine appointment booking, medical measurements, clinical recommendations, and communication in one interface. Treating the ', 'self', 'https://www.nkbregovanta.com/blog/ce-marking-digital-health-technologies', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('The EU MDR CE-Marking Process: Plan the Decisions and Handoffs', 'ce-marking-process-medical-devices-eu-mdr', '<p>CE marking is the outcome of a conformity process, not a standalone application form. A manufacturer needs a clear view of the decisions, evidence, external assessment where applicable, and responsibilities that lead to that outcome. A staged plan makes dependencies visible and reduces the temptation to treat the final label as the whole project.</p>
<h2>undefined</h2>
<p>Establish whether the product falls within the MDR, then document its classification and applicable conformity-assessment route. Identify the legal manufacturer, intended purpose, configurations, and relevant economic-operator arrangements. Notified-body involvement depends on the applicable route and product characteristics.</p>
<p>If a notified body is needed, confirm that its designation covers the relevant work. Do this early enough to understand the application and assessment dependencies, while ensuring the product description is sufficiently developed for a meaningful discussion.</p>
<h2>undefined</h2>
<p>Create a work plan linking the device''s claims and risks to the necessary design, performance, biological, software, usability, and clinical evidence as applicable. Assign owners and identify the configurations needed for each activity. The technical documentation should explain the case for the product rather than simply collect completed reports.</p>
<p>Review the quality-system and manufacturing interfaces alongside the product evidence. Confirm that the supplied product will match the configuration evaluated and that changes can be assessed consistently. A strong design report cannot compensate for an uncontrolled transition into routine production.</p>
<h2>undefined</h2>
<p>Track the required conformity-assessment steps, questions, and decisions. Before finalising the declaration and marking, verify that the applicable prerequisites are satisfied and that the stated scope matches the evidence and assessment outcome. Keep identifiers and product descriptions consistent across the final records.</p>
<p>Plan ongoing activities from the start: feedback collection, post-market assessment, vigilance where applicable, changes, and updates to the technical documentation. The project should hand over a functioning process to the operating organisation. A certificate or declaration stored without clear ownership will not keep the compliance position current.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does every device receive a CE certificate from a notified body?</h3>
<p>No. Notified-body involvement depends on the device and applicable conformity-assessment route. Determine that route first rather than assuming every product follows the same certification process.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/ce-marking-process-medical-devices-eu-mdr', 'The EU MDR CE-Marking Process: Plan the Decisions and Handoffs | NKB Regovanta', 'CE marking is the outcome of a conformity process, not a standalone application form. A manufacturer needs a clear view of the decisions, evidence, externa', 'self', 'https://www.nkbregovanta.com/blog/ce-marking-process-medical-devices-eu-mdr', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('FDA Class III Strategy: Establish the Regulatory Path Before Committing to Studies', 'class-iii-medical-device-classification-strategy', '<p>A device''s commercial description does not establish its FDA classification. Terms such as innovative, implantable, or life-supporting can signal important questions, but the regulatory assessment needs the actual intended use and applicable classification information. Getting that assessment wrong can send a team into studies that do not answer the questions for its eventual submission.</p>
<h2>undefined</h2>
<p>FDA provides classification information organised around device types, regulations, and product codes. Start with the proposed intended use and identify the potentially applicable entries. Record why each candidate does or does not fit, including differences in patient population, clinical use, and technology. A competitor''s pathway is a research lead, not a classification decision for a different product.</p>
<p>Class III devices generally follow the PMA route, subject to the applicable regulatory provisions. Novelty alone does not establish Class III: FDA also has a De Novo pathway for certain novel devices of low to moderate risk. Resolve the classification and pathway questions together rather than equating every device without a convenient predicate with PMA.</p>
<h2>undefined</h2>
<p>Translate the proposed claims into a list of safety and effectiveness questions. Separate what bench testing can establish from what needs clinical evidence or other evaluation. Identify the device configuration, target population, endpoints, follow-up, and comparison strategy relevant to each question.</p>
<p>Build dependencies into the plan. A clinical protocol written before the intended use is stable may become unsuitable when the target population changes. Similarly, changes to the final design can affect whether early testing represents the device to be marketed. Make those dependencies visible to the team approving the budget.</p>
<h2>undefined</h2>
<p>A useful early discussion presents a defined device, a specific uncertainty, and a proposed approach. Prepare the reasoning behind the proposal and identify the decision that depends on the answer. Broad requests for FDA to design the whole development programme make it difficult to obtain focused feedback.</p>
<p>When feedback is obtained, record the assumptions under which it was given and the changes that could make it less applicable. Keep a decision log showing how the study programme and submission strategy developed. This helps prevent an early informal assumption from being repeated later as if it were a settled regulatory conclusion.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does the absence of a predicate automatically mean PMA?</h3>
<p>No. Pathway selection depends on the device and applicable controls. Investigate whether De Novo or another route is relevant rather than inferring Class III solely because a predicate search was unsuccessful.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/class-iii-medical-device-classification-strategy', 'FDA Class III Strategy: Establish the Regulatory Path Before Committing to Studies | NKB Regovanta', 'A device''s commercial description does not establish its FDA classification. Terms such as innovative, implantable, or life-supporting can signal important', 'self', 'https://www.nkbregovanta.com/blog/class-iii-medical-device-classification-strategy', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Clinical Equivalence Under EU MDR: Establish What the Comparison Can Support', 'clinical-evaluation-equivalence-medical-devices', '<p>A familiar competitor product can look like an easy starting point for a clinical evaluation. The difficult question is whether its data actually supports the claims of the device being assessed. A credible equivalence argument explains the relevant similarities, the differences, and the evidence available to evaluate those differences. A visual resemblance or matching catalogue description is not enough.</p>
<h2>undefined</h2>
<p>MDCG 2020-5 addresses technical, biological, and clinical characteristics when demonstrating equivalence under the MDR. The assessment needs to establish that relevant differences do not produce a clinically significant difference in safety or clinical performance. Similar-device information can have other uses in an evaluation, but it should not be presented as equivalent-device evidence without the necessary justification.</p>
<p>Build a comparison using the actual claimed purpose, patient population, contact characteristics, design, and performance. Record the source behind every important statement. If a field cannot be established from reliable information, mark it as unknown rather than assuming that two products share a characteristic.</p>
<h2>undefined</h2>
<p>A published study may describe clinical outcomes without disclosing manufacturing details, material composition, or the exact configuration evaluated. Decide whether the available information is sufficient for the proposed argument. Where additional access arrangements are relevant, resolve them before basing the development schedule on equivalence.</p>
<p>Keep an evidence-gap log that explains the consequence of each unknown. A missing administrative detail may be easy to resolve; an unknown patient-contact material can affect the biological comparison. This prioritisation helps the team decide whether to obtain information, narrow the argument, generate additional evidence, or adopt a different clinical strategy.</p>
<h2>undefined</h2>
<p>Do not allow a weak equivalence argument to become the only route to project completion. Plan how the manufacturer''s own data, relevant literature, clinical investigations where required, and post-market information contribute to the overall evaluation. Equivalence is an evidence route, not a replacement for an evaluation.</p>
<p>Make each conclusion traceable to a claim and identify the remaining uncertainty. A product can have substantial engineering evidence while still lacking support for a particular clinical benefit. Keeping those distinctions visible allows management to change the claim or evidence plan before a reviewer raises the same issue.</p>
<h2>Frequently Asked Questions</h2>
<h3>Can similar-device literature still be useful without equivalence?</h3>
<p>Yes. It may inform the state of the art, known risks, or evaluation design. Clearly distinguish that supporting context from evidence claimed to demonstrate the subject device''s safety or clinical performance through equivalence.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/clinical-evaluation-equivalence-medical-devices', 'Clinical Equivalence Under EU MDR: Establish What the Comparison Can Support | NKB Regovanta', 'A familiar competitor product can look like an easy starting point for a clinical evaluation. The difficult question is whether its data actually supports ', 'self', 'https://www.nkbregovanta.com/blog/clinical-evaluation-equivalence-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Build a Medical Device Requirements Register Across Regulatory Disciplines', 'core-regulations-medical-device-global-compliance', '<p>Medical-device compliance rarely sits within one document or one discipline. A connected product may raise questions about device regulation, software, electrical behaviour, patient contact, information security, and the use environment. A requirements register helps the team determine what applies, who owns it, and which evidence supports the conclusion.</p>
<h2>undefined</h2>
<p>These sources serve different purposes. Applicable legislation establishes obligations; standards can provide methods or specifications; guidance explains an authority''s approach. Do not treat a list of popular standards as a complete statement of legal compliance. Identify the product characteristics and intended markets first.</p>
<p>For each source, record its status, edition or date, scope, and relevance. The EU medical-device framework and FDA''s pathway resources are starting points for market requirements, while discipline-specific sources help define the supporting work. Make any assumptions or exclusions explicit so that the register can be reviewed when the product changes.</p>
<h2>undefined</h2>
<p>Ask practical questions: does the product contact the patient, include software, depend on a network, use electrical energy, require reprocessing, or make a measurement? Each answer can identify an evidence area and a responsible specialist. Avoid assuming that a requirement is irrelevant because a supplier handles the associated component.</p>
<p>Build one row per meaningful obligation or evidence question. Include the source, applicability rationale, owner, supporting document, and status. Where two disciplines interact, identify the handoff. A cybersecurity control that changes login behaviour may also affect a time-sensitive clinical workflow and its usability evaluation.</p>
<h2>undefined</h2>
<p>Use the register when adding a market, changing a claim, replacing a component, or introducing a new manufacturing activity. Record which entries change and which remain supported. This is more useful than periodically replacing the list with a newer template that loses the original reasoning.</p>
<p>At a review gate, prioritise unresolved items that could alter product design or invalidate scheduled testing. Give management a concise view of those dependencies. A register is effective when it changes decisions early enough to matter, not when every row is marked complete just before submission.</p>
<h2>Frequently Asked Questions</h2>
<h3>Is there one universal list of standards for all medical devices?</h3>
<p>No. Applicability depends on the product and market. A broad list can prompt questions, but the manufacturer needs a documented, device-specific rationale for the requirements and methods it selects.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/core-regulations-medical-device-global-compliance', 'Build a Medical Device Requirements Register Across Regulatory Disciplines | NKB Regovanta', 'Medical-device compliance rarely sits within one document or one discipline. A connected product may raise questions about device regulation, software, ele', 'self', 'https://www.nkbregovanta.com/blog/core-regulations-medical-device-global-compliance', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Dental Scanner Development: Validate the Scan-to-Decision Workflow', 'dental-scanners-manufacturing-regulatory-standards', '<p>A dental scanner produces more than a visually attractive model. Its output may inform a restoration, appliance, treatment plan, or another clinical decision. The regulatory and development questions therefore depend on the claimed use of the scan and the workflow that turns it into a result. A demonstration that the device captures an image is only one part of that assessment.</p>
<h2>undefined</h2>
<p>Identify the scanner''s intended purpose and the markets in which it will be supplied. FDA classification research begins with the device type and intended use; the relevant entry should be checked for the actual product. Avoid assigning one pathway to every dental imaging product, since technologies and clinical functions differ.</p>
<p>Document whether the output is used for visual inspection, measurement, restoration design, or another defined activity. State which software and downstream systems are covered by the claim. If interoperability is limited to specified formats or versions, make those limits part of the product definition rather than leaving them to a sales conversation.</p>
<h2>undefined</h2>
<p>Define the dimensions or outcomes that matter for the intended application and select a justified reference method. Consider the range of conditions represented in evaluation: scan area, surface properties, access, operator technique, and the processing steps applied to the acquired data. Acceptance criteria should connect to the claimed use rather than a convenient marketing number.</p>
<p>Distinguish acquisition performance from software processing and export behaviour. A raw dataset can be accurate while later smoothing, stitching, or conversion affects the output. Preserve the software version and settings used for evaluation, and assess whether later changes alter the supported claims.</p>
<h2>undefined</h2>
<p>Where components contact the patient or are reused, define the associated handling, cleaning, and processing instructions and the evidence needed for those claims. Keep the evaluated configuration aligned with the actual tips, sleeves, accessories, and materials supplied. Changes in those parts can affect more than appearance.</p>
<p>Observe representative users performing setup, scanning, identification, and transfer tasks. Look for incorrect patient selection, incomplete coverage, and uncertainty about whether a scan is acceptable. Use those observations to improve the interface and instructions before relying on a final evaluation.</p>
<h2>Frequently Asked Questions</h2>
<h3>Can one scan-accuracy figure establish readiness for every dental application?</h3>
<p>No. The significance of an error depends on the intended application and evaluation method. Define the claim, conditions, reference, and acceptance criteria, and avoid extending a result beyond the workflow that was actually evaluated.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/dental-scanners-manufacturing-regulatory-standards', 'Dental Scanner Development: Validate the Scan-to-Decision Workflow | NKB Regovanta', 'A dental scanner produces more than a visually attractive model. Its output may inform a restoration, appliance, treatment plan, or another clinical decisi', 'self', 'https://www.nkbregovanta.com/blog/dental-scanners-manufacturing-regulatory-standards', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Software Risk Management After Release: Turn New Signals Into Decisions', 'dynamic-risk-management-software-medical-devices', '<p>Software risk management often looks strongest immediately before a submission, when the risk file and test reports are aligned. The harder work begins after release. Operating systems change, users find unexpected workflows, and field data exposes assumptions that were invisible in development. The manufacturer needs a repeatable way to decide which signals change the safety assessment.</p>
<h2>undefined</h2>
<p>ISO 14971 describes a lifecycle approach to medical-device risk management. For a software issue, begin with the sequence that could expose a patient or user to harm. A defect''s technical severity, such as a server crash, does not by itself describe its clinical significance. The same outage can have different consequences in a retrospective reporting tool and an urgent monitoring workflow.</p>
<p>Write the sequence in plain language: triggering condition, incorrect or unavailable output, user response, and possible harm. Include external systems and human actions where they matter. This makes the risk discussion accessible to software engineers, clinicians, quality staff, and support teams without pretending that they use identical terminology.</p>
<h2>undefined</h2>
<p>For every significant incident, identify the software version, device configuration, environment, and affected workflow. Separate a reproducible product defect from an installation problem, unsupported configuration, or misunderstood instruction. The categories may lead to different actions, but each still needs an assessment of the actual safety consequences.</p>
<p>Keep a link between the issue tracker and the relevant risk-control and verification records. Avoid copying the same assessment into several systems where it can diverge. A short controlled decision record can reference the engineering investigation, complaint assessment, and release record while making the overall rationale easy to retrieve.</p>
<h2>undefined</h2>
<p>A software patch should be evaluated against the failure sequence that prompted it. If a change prevents a false alarm by suppressing more events, the team must also examine whether genuine events could be missed. Tests that prove the code changed are not sufficient to establish that the affected clinical workflow is safer.</p>
<p>Define the follow-up measure before closing the issue: recurrence under comparable exposure, performance of the revised control, or evidence from a targeted evaluation. For dependency updates, retain the version change and its impact assessment even when the conclusion is that no safety-related behaviour changed. Consistent negative decisions are part of a useful change history.</p>
<h2>Frequently Asked Questions</h2>
<h3>Must every software ticket trigger a complete risk-file rewrite?</h3>
<p>No. Use a documented assessment proportionate to the issue. The important step is deciding whether hazards, controls, evidence, or the overall risk conclusion are affected, then updating the relevant records when they are.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/dynamic-risk-management-software-medical-devices', 'Software Risk Management After Release: Turn New Signals Into Decisions | NKB Regovanta', 'Software risk management often looks strongest immediately before a submission, when the risk file and test reports are aligned. The harder work begins aft', 'self', 'https://www.nkbregovanta.com/blog/dynamic-risk-management-software-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Medical Device CAPA: Show That the Cause Was Addressed', 'effective-capa-system-medical-devices', '<p>A CAPA system is easy to measure by closed records and harder to judge by recurring problems. Closure is useful only when the investigation supports the action and follow-up shows that the action worked. Start by making the problem precise enough that the team can tell whether it has actually improved.</p>
<h2>undefined</h2>
<p>Describe what failed, where it occurred, how often it was observed, and what evidence establishes the issue. Separate immediate correction or containment from work intended to address the cause. Replacing a damaged unit may help the affected customer without explaining why the damage occurred.</p>
<p>For organisations supplying the US market, place the process within the current QMSR and applicable quality-system requirements. Write records in practical language: what was observed, investigated, concluded, and changed. A form with every box populated can still contain a weak investigation.</p>
<h2>undefined</h2>
<p>Use records, process observations, measurements, and interviews to test possible explanations. Avoid defaulting to ''operator error'' when the instruction, equipment, workload, or acceptance criteria may have contributed. A credible cause should explain why the problem occurred and why existing controls did not prevent or detect it.</p>
<p>Match the action to that explanation. If inconsistent component specifications caused the problem, retraining alone is unlikely to be enough. Consider whether the condition affects other products, sites, or suppliers. Document the basis for the chosen scope rather than expanding or restricting it without reasoning.</p>
<h2>undefined</h2>
<p>Choose the measure and observation period before evaluating success. The measure should address recurrence or control performance under relevant operating conditions. ''Training completed'' verifies implementation of an action, not necessarily its effectiveness.</p>
<p>Check for unintended consequences and document the closure decision. If results are inconclusive, explain what additional information is needed. Management should distinguish overdue administration from an unresolved quality problem and provide resources accordingly. Another reviewer should be able to understand why closure was justified without interviewing the investigator.</p>
<h2>Frequently Asked Questions</h2>
<h3>Is completing the action plan the same as proving effectiveness?</h3>
<p>No. Completion shows that the planned change was implemented. Effectiveness addresses whether it achieved the intended result under relevant conditions. Keep both decisions visible in the record.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/effective-capa-system-medical-devices', 'Medical Device CAPA: Show That the Cause Was Addressed | NKB Regovanta', 'A CAPA system is easy to measure by closed records and harder to judge by recurring problems. Closure is useful only when the investigation supports the ac', 'self', 'https://www.nkbregovanta.com/blog/effective-capa-system-medical-devices', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('510(k) Modernisation: Assess Predicate Relevance and Performance Evidence', 'fda-510k-program-modernization-safety-standards', '<p>Discussion about 510(k) modernisation can be reduced to an unhelpful rule: choose the newest predicate. A stronger strategy examines the legally marketed comparison, intended use, technology, and quality of the available evidence. It also distinguishes a published final policy from a proposal or discussion that has not become a requirement.</p>
<h2>undefined</h2>
<p>FDA''s predicate resources explain how legally marketed devices support the substantial-equivalence comparison. The date of a predicate''s clearance is relevant context, but it should not replace analysis of intended use, technological characteristics, and the information available for comparison.</p>
<p>Prepare a selection rationale that considers the proposed device and its differences. Review relevant public information rather than choosing a predicate only because its name resembles the new product. An older comparison may present evidence limitations; a newer one may still be unsuitable for the proposed intended use.</p>
<h2>undefined</h2>
<p>FDA''s Safety and Performance Based Pathway is an optional approach for certain well-understood device types with FDA-identified performance criteria. It is not a universal replacement for the 510(k) framework. Confirm that the device type, criteria, and intended approach are applicable before building the test programme around it.</p>
<p>Document which criteria apply, the methods used, and how the results will support the submission. Do not substitute a general industry benchmark for an FDA-identified criterion without examining whether that is appropriate to the chosen route.</p>
<h2>undefined</h2>
<p>Maintain a short policy register for the project with document title, issuing authority, date, and final or draft status. When a new publication appears, assess its effect on the actual device and evidence plan. Avoid automatically rewriting the strategy because a headline describes a broad programme change.</p>
<p>Keep the underlying scientific argument coherent as submission tools and guidance evolve. A digital template can improve organisation, but it cannot establish an unsupported claim or resolve an inappropriate comparator. Review the evidence first, then ensure the package follows the current applicable submission instructions.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does modernisation mean every old predicate is automatically invalid?</h3>
<p>Do not infer a blanket rule from programme discussions. Check the applicable FDA requirements and the particular predicate''s status and relevance. The selection needs a device-specific rationale supported by current official information.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/fda-510k-program-modernization-safety-standards', '510(k) Modernisation: Assess Predicate Relevance and Performance Evidence | NKB Regovanta', 'Discussion about 510(k) modernisation can be reduced to an unhelpful rule: choose the newest predicate. A stronger strategy examines the legally marketed c', 'self', 'https://www.nkbregovanta.com/blog/fda-510k-program-modernization-safety-standards', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('FDA Pre-Submissions: Ask Questions That Resolve a Development Decision', 'fda-q-sub-pre-submission-meeting-guide', '<p>A productive Pre-Submission starts with a decision the manufacturer needs to make. The package should give FDA enough context to understand the device, the uncertainty, and the proposed approach. Asking the agency to review a vague concept or design an entire programme makes it harder to obtain feedback that the team can act on.</p>
<h2>undefined</h2>
<p>FDA''s Q-Submission guidance describes mechanisms for obtaining feedback and meetings related to medical-device submissions. A Pre-Submission can help address focused questions before later work or a marketing submission. It should not be treated as a marketing authorisation or a guarantee of the outcome of a future submission.</p>
<p>State the decision that depends on the answer. Examples include whether a proposed evaluation approach addresses a defined concern or how to frame a particular evidence question. Separate those issues from routine administrative questions that may be better handled through another communication route.</p>
<h2>undefined</h2>
<p>Describe the device, intended use, relevant configuration, and development stage. Include enough information to explain why the question matters. Present the manufacturer''s proposed approach and its justification, including important assumptions and alternatives considered.</p>
<p>For a study question, provide a sufficiently developed outline of the objectives, population or samples, methods, endpoints, and analysis as relevant. A question such as ''Is our testing acceptable?'' is difficult to answer if the package does not explain what will be tested or what the results are intended to establish.</p>
<h2>undefined</h2>
<p>Choose participants who understand the device and can explain the proposed evidence. Prioritise the questions and plan how to capture clarifications. Keep the discussion connected to the submitted context rather than introducing a substantially different product without explanation.</p>
<p>Afterwards, record the feedback, the resulting decisions, and the assumptions that remain important. Update the development plan and identify changes that could require reconsideration. Feedback on one configuration or claim should not silently become support for a broader product developed later.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does favourable Pre-Submission feedback guarantee clearance?</h3>
<p>No. The eventual submission is assessed on its content and circumstances. Preserve the context of the feedback and evaluate whether subsequent changes to the device, claims, or evidence affect its relevance.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/fda-q-sub-pre-submission-meeting-guide', 'FDA Pre-Submissions: Ask Questions That Resolve a Development Decision | NKB Regovanta', 'A productive Pre-Submission starts with a decision the manufacturer needs to make. The package should give FDA enough context to understand the device, the', 'self', 'https://www.nkbregovanta.com/blog/fda-q-sub-pre-submission-meeting-guide', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('FDA QMSR Readiness: Follow a Product Record Through the Quality System', 'fda-qmsr-compliance-guide', '<p>A quality manual can describe a convincing system while daily records tell a different story. For a manufacturer reviewing FDA QMSR readiness, a more useful starting point is one released product: follow its requirements, supplier decisions, production history, release evidence, and post-market feedback. The connections reveal whether the system works in practice.</p>
<h2>undefined</h2>
<p>FDA''s Quality Management System Regulation became effective on February 2, 2026. It incorporates ISO 13485:2016 by reference while retaining applicable FDA-specific requirements. An existing ISO certificate is useful context, but it is not a substitute for understanding the manufacturer''s obligations under the FDA framework.</p>
<p>Maintain a concise applicability register showing which requirements apply to the site''s activities and products. Assign an owner to each gap between the actual operating process and the controlled procedure. Avoid rewriting every document simply to change terminology; first identify whether a control, responsibility, or retained record is actually missing.</p>
<h2>undefined</h2>
<p>Choose a representative product and trace a design requirement into its verification result, the released specification, and the manufacturing record. Then select a critical purchased component. Confirm that the approved supplier, purchasing specification, incoming checks, and change notifications tell a consistent story.</p>
<p>Ask the people performing the work to retrieve the evidence using their normal systems. Record the time taken and any reliance on personal folders or informal explanations. A procedure may be adequate while retrieval, approval status, or version control is weak. Those findings call for different corrective actions from a genuinely missing process.</p>
<h2>undefined</h2>
<p>Select a complaint trend and examine how it was assessed, investigated, and communicated to the teams responsible for the product. A trend with no immediate corrective action may still require a documented rationale. Conversely, an action labelled complete should have evidence that it addressed the identified cause and did not introduce a new problem.</p>
<p>Use management review to resolve recurring constraints, such as insufficient investigation capacity or incomplete supplier data. Give each decision an owner, expected result, and review date. The practical objective is a system that notices deteriorating performance and responds consistently, rather than a collection of forms completed shortly before an audit.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does an ISO 13485 certificate eliminate FDA inspection risk?</h3>
<p>No. A certificate does not establish that every applicable FDA obligation is met or that daily implementation is effective. Use the certificate as one input to readiness, alongside product records and current FDA requirements.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/fda-qmsr-compliance-guide', 'FDA QMSR Readiness: Follow a Product Record Through the Quality System | NKB Regovanta', 'A quality manual can describe a convincing system while daily records tell a different story. For a manufacturer reviewing FDA QMSR readiness, a more usefu', 'self', 'https://www.nkbregovanta.com/blog/fda-qmsr-compliance-guide', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('GSPR Compliance: Turn the Checklist Into an Evidence Map', 'gspr-compliance-eu-mdr-ivdr', '<p>A GSPR checklist becomes useful when it explains why a requirement applies and exactly where the supporting evidence can be found. A column filled with ''compliant'' does not provide that explanation. The practical goal is an evidence map that a reviewer can follow from a requirement to the device configuration, evaluation method, and approved result.</p>
<h2>undefined</h2>
<p>The MDR and IVDR set out general safety and performance requirements in their respective Annex I. Their structures overlap, but they are not interchangeable checklists. Establish whether the product is assessed under the MDR or IVDR and identify the device versions, accessories, intended users, and claims covered by the matrix.</p>
<p>For each requirement, record applicability with a product-specific rationale. Avoid describing a requirement as inapplicable merely because a test has not been performed. A software-only product may have no direct patient-contact material, for example, but still needs careful consideration of information, software performance, and use-related risks.</p>
<h2>undefined</h2>
<p>Give each applicable row a compliance method and a precise document reference. Where a standard is used, record the edition and the scope actually applied. Where another method is used, explain the reasoning. A list of standard numbers without results or applicability analysis leaves the reviewer to reconstruct the argument.</p>
<p>Link to a specific report, section, and revision where possible. Distinguish planned work from approved evidence and keep open gaps visible. A matrix should not imply that a test is complete because its protocol has been approved. The same principle applies to a draft evaluation report that still contains unresolved assumptions.</p>
<h2>undefined</h2>
<p>Use the matrix during change assessment, not only at submission. A new indication, material, software function, or manufacturing process can affect several requirements and evidence packages at once. Start with the changed characteristic, identify affected rows, and document which conclusions remain valid.</p>
<p>Review the matrix with engineering, clinical or performance-evaluation, quality, and regulatory owners. Disagreement can be useful: it often exposes a claim that is broader than the evidence or an exclusion that has not been justified. Resolve the decision before circulating a version labelled final.</p>
<h2>Frequently Asked Questions</h2>
<h3>Is citing a standard enough to close a GSPR row?</h3>
<p>Usually the reviewer needs more context: why the method is appropriate, what was evaluated, and where the result supports the requirement. Record the actual evidence and any limitations rather than relying on the standard''s title alone.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/gspr-compliance-eu-mdr-ivdr', 'GSPR Compliance: Turn the Checklist Into an Evidence Map | NKB Regovanta', 'A GSPR checklist becomes useful when it explains why a requirement applies and exactly where the supporting evidence can be found. A column filled with ''co', 'self', 'https://www.nkbregovanta.com/blog/gspr-compliance-eu-mdr-ivdr', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Use GSPRs Early: Convert Regulatory Expectations Into Design Inputs', 'gspr-foundation-medical-device-development', '<p>A late GSPR review often finds a predictable problem: the team has completed substantial testing, but some of it does not support the final claims or configuration. Using the relevant requirements during development helps identify those gaps earlier. The objective is to influence product decisions while they are still affordable to change, not to add another end-stage checklist.</p>
<h2>undefined</h2>
<p>The MDR''s general safety and performance requirements provide an organising framework for safety, performance, and information supplied with a device. At the concept stage, use the relevant requirements to ask what must be true for the proposed product to work acceptably in its intended setting.</p>
<p>Describe the user, environment, contact characteristics, operating conditions, and foreseeable misuse. Turn vague goals into reviewable design inputs. ''Easy to clean'' is difficult to verify; a defined cleaning procedure, surface condition, and measurable acceptance criterion give the team something it can design and evaluate.</p>
<h2>undefined</h2>
<p>Link each important requirement to a planned evaluation and the configuration needed for that evaluation. A packaging study may depend on a final packaging system; a usability evaluation may depend on stable instructions and interface behaviour. If those inputs change later, the relevance of the evidence needs review.</p>
<p>Use the dependency map when approving design changes. Ask which reports, instructions, and risk controls are affected, not only whether the physical modification is small. A minor change in a connector can alter compatibility or use-error risks even when it has little effect on the bill of materials.</p>
<h2>undefined</h2>
<p>A review should end with a decision about readiness, open risks, and the evidence still needed. Distinguish work that can proceed from work that would be wasted if an unresolved assumption changes. Record who accepts each remaining uncertainty and why it is reasonable to proceed.</p>
<p>At the transfer stage, check that the manufacturing and inspection controls can maintain the characteristics evaluated during development. A requirement verified on a carefully selected prototype may need a production control to remain true across routine output. Connecting those two steps makes the GSPR work useful to both product development and operations.</p>
<h2>Frequently Asked Questions</h2>
<h3>Do GSPRs need to become engineering specifications word for word?</h3>
<p>No. Translate applicable expectations into product-specific requirements that can be evaluated. Retain the connection to the regulatory requirement, but write design inputs in language that the development team can implement and verify.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/gspr-foundation-medical-device-development', 'Use GSPRs Early: Convert Regulatory Expectations Into Design Inputs | NKB Regovanta', 'A late GSPR review often finds a predictable problem: the team has completed substantial testing, but some of it does not support the final claims or confi', 'self', 'https://www.nkbregovanta.com/blog/gspr-foundation-medical-device-development', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Human Factors in Device Design: Find Use Problems Before Validation', 'human-factors-engineering-medical-device-design', '<p>Human factors is most valuable while the product can still change. Waiting until a final study to discover confusing controls or unrealistic assumptions creates expensive choices: redesign, restrict the claim, or attempt to justify a difficult result. Integrating observations into development gives the team more useful options.</p>
<h2>undefined</h2>
<p>FDA describes users, environments, and interfaces as central elements of human-factors assessment. Observe how the task fits into the wider clinical or home workflow. Interruptions, lighting, protective equipment, physical access, and competing demands may influence how the product is used.</p>
<p>Interviewing experienced users can identify assumptions worth testing, but observations are also important. People may describe the official sequence while routinely using a different workaround. Record these differences without treating every deviation as a training failure.</p>
<h2>undefined</h2>
<p>For each important task, identify where an error could occur and what could contribute to it. Consider controls, displays, feedback, terminology, packaging, connectors, and instructions together. A confusing display cannot always be corrected reliably by adding a sentence to a manual.</p>
<p>Use simple prototypes or focused evaluations to compare design options. Record what changed and why. The useful output is not just a list of participant comments; it is a traceable decision about how the interface addresses a recognised problem and what later evidence will evaluate the result.</p>
<h2>undefined</h2>
<p>Maintain a link between use-related risks, design responses, and the tasks selected for later assessment. This helps the final evaluation focus on meaningful questions rather than replaying an arbitrary sequence of buttons. Keep the evaluated configuration consistent with the product intended for release.</p>
<p>For an EU device, connect the human-factors work to the relevant safety and performance requirements and the product''s risk assessment. Explain how the interface and supplied information support the intended users and use conditions. The evidence should show the reasoning behind the design, not merely that a study took place.</p>
<h2>Frequently Asked Questions</h2>
<h3>Can good instructions compensate for every interface problem?</h3>
<p>No. Consider whether the design itself can reduce the opportunity for error. Instructions and training are part of the overall approach, but their effectiveness should not be assumed where users may not access or remember them at the relevant moment.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/human-factors-engineering-medical-device-design', 'Human Factors in Device Design: Find Use Problems Before Validation | NKB Regovanta', 'Human factors is most valuable while the product can still change. Waiting until a final study to discover confusing controls or unrealistic assumptions cr', 'self', 'https://www.nkbregovanta.com/blog/human-factors-engineering-medical-device-design', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('IEC 62304 in Practice: Keep Requirements, Risk Controls, and Releases Connected', 'iec-62304-medical-device-software-lifecycle', '<p>A software lifecycle file is most useful when it explains how a released version was produced and why it was considered ready. A large collection of test screenshots cannot answer that question on its own. Teams need a coherent connection between requirements, architecture, risk controls, verification, unresolved issues, and the exact software configuration delivered.</p>
<h2>undefined</h2>
<p>IEC 62304 addresses medical-device software life cycle processes. It should be considered alongside the product''s broader risk management and regulatory obligations. Applying a software lifecycle standard does not, by itself, establish that the finished device is suitable for its clinical purpose or ready for market.</p>
<p>Define the software items, external interfaces, and development responsibilities covered by the plan. Include outsourced work and third-party components. Decide how changes are reviewed, how versions are identified, and which records are needed at each stage. An agile development process can produce controlled evidence, but the relationship between working tickets and formal release decisions must be clear.</p>
<h2>undefined</h2>
<p>Start with requirements that describe observable behaviour, including failure handling and safety-related constraints. Link them to the architecture or implementation elements and evaluations that demonstrate the intended behaviour. For risk controls, make the connection especially clear: the reviewer should be able to see the hazard addressed, the implemented measure, and how it was checked.</p>
<p>Avoid creating links solely to make a matrix appear complete. A broad system test may not establish a detailed safety requirement. Review whether the linked result actually answers the requirement and whether it represents the released configuration. When a test fails, retain the disposition and the evidence supporting any decision to proceed.</p>
<h2>undefined</h2>
<p>Identify the build, configuration, dependencies, and deployment instructions associated with the release. Keep a list of unresolved issues with their assessed impact. A source-control tag is helpful, but it does not necessarily identify the exact binary, model, configuration, or cloud service behaviour used in production.</p>
<p>For an FDA submission, also review the agency''s software-function documentation guidance rather than assuming that a lifecycle file automatically matches submission expectations. Prepare the information a reviewer needs to understand the software''s role and evidence, while keeping the development records detailed enough for maintenance and future changes.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does IEC 62304 compliance replace device validation?</h3>
<p>No. Software lifecycle evidence supports the overall case, but the manufacturer still needs to establish that the finished product meets its intended use and applicable regulatory expectations. Keep those evaluations connected while distinguishing their purposes.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/iec-62304-medical-device-software-lifecycle', 'IEC 62304 in Practice: Keep Requirements, Risk Controls, and Releases Connected | NKB Regovanta', 'A software lifecycle file is most useful when it explains how a released version was produced and why it was considered ready. A large collection of test s', 'self', 'https://www.nkbregovanta.com/blog/iec-62304-medical-device-software-lifecycle', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Class D IVD Verification: Coordinate the Product Evidence and Batch Workflow', 'ivdr-class-d-verification-notified-bodies', '<p>For a Class D IVD, certification planning and routine batch operations cannot be treated as unrelated projects. The manufacturer needs to understand which evidence supports the product and how the applicable verification arrangements affect ongoing supply. Misalignment between the technical team, quality unit, notified body, and laboratory can create avoidable uncertainty close to release.</p>
<h2>undefined</h2>
<p>The European Commission describes EU reference laboratories for designated categories of high-risk IVDs. Their role and availability depend on the relevant scope. The MDCG guidance library also includes guidance on verification of manufactured Class D IVDs by notified bodies. Confirm the applicable arrangements for the actual device rather than assuming every Class D product follows an identical workflow.</p>
<p>Identify the device category, configuration, intended purpose, and performance claims when discussing the project with the notified body. Ask how the relevant laboratory interfaces, samples, documentation, and communications will be managed. Retain the agreed responsibilities in a form that production and quality staff can use.</p>
<h2>undefined</h2>
<p>Define the reagent, calibrator, control material, instrument, and software combinations covered by the evidence. State which variations are permitted and how changes are assessed. A performance report is difficult to interpret if the evaluated combination cannot be related to the commercial configuration.</p>
<p>Prepare a clear evidence index that distinguishes development studies, performance-evaluation conclusions, manufacturing controls, and batch-specific information. Assign owners for resolving discrepancies between them. If a manufacturing acceptance criterion changes, assess whether the performance claims and verification arrangements remain supported rather than treating the revision as a purely internal quality decision.</p>
<h2>undefined</h2>
<p>Map when the required batch information or samples become available and which decisions depend on them. Include preparation, review, shipment where relevant, feedback, and escalation for unexpected findings. Avoid promising a fixed supply timeline until these dependencies have been understood for the product.</p>
<p>Keep change control connected to the external assessment arrangement. Reagent sourcing, control materials, calculation software, and manufacturing changes can affect the relevance of prior information. A documented communication decision helps ensure that the correct parties are consulted before implementation where required.</p>
<h2>Frequently Asked Questions</h2>
<h3>Can the manufacturer choose any laboratory for Class D verification?</h3>
<p>The applicable role is not interchangeable with ordinary commercial testing. Confirm the requirements and any designated reference-laboratory scope with the notified body and current Commission information before arranging samples or relying on a proposed workflow.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/ivdr-class-d-verification-notified-bodies', 'Class D IVD Verification: Coordinate the Product Evidence and Batch Workflow | NKB Regovanta', 'For a Class D IVD, certification planning and routine batch operations cannot be treated as unrelated projects. The manufacturer needs to understand which ', 'self', 'https://www.nkbregovanta.com/blog/ivdr-class-d-verification-notified-bodies', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('EU MDR Technical Documentation: Make the Evidence Trail Clear', 'notified-body-expectations-eu-mdr-technical-documentation', '<p>A technical file can contain the right reports and still be difficult to assess. The reader may be unable to connect the device description, risk conclusions, testing, clinical evidence, and instructions. Preparing for notified-body review means making those connections explicit and resolving contradictions before the file leaves the manufacturer.</p>
<h2>undefined</h2>
<p>MDR Annexes II and III provide the framework for technical documentation and post-market surveillance documentation. Start with the exact configurations covered. Identify models, accessories, relevant software versions, intended users, and claims. A reviewer should not have to infer the product scope from a collection of test reports.</p>
<p>Use a controlled index with current revisions and a clear status for unfinished work. If one file covers a family, explain the relationship between variants and the reasoning for representative evaluations. Make exclusions visible so that evidence for one configuration is not accidentally presented as covering another.</p>
<h2>undefined</h2>
<p>Select a significant performance claim and trace it into requirements, evaluation methods, results, risk conclusions, and labelling. Check that the acceptance criteria answer the claim and that the report identifies the relevant configuration. Repeat the exercise for a key safety concern and a user-facing limitation.</p>
<p>Resolve discrepancies before adding more documents. If the clinical evaluation describes one population and the instructions describe a broader one, another report may not fix the inconsistency. The team needs a decision about the claim or the missing evidence. A short, explicit rationale is more useful than a large appendix of loosely related material.</p>
<h2>undefined</h2>
<p>Maintain a response table stating the question, proposed answer, supporting evidence, and exact revisions made. Distinguish clarification of existing information from a change to the product or evidence package. The latter may affect several parts of the file and needs coordinated review.</p>
<p>Before resubmission, verify that every referenced document is included and that previous references still resolve. Explain how the concern was addressed. A response that merely says ''updated as requested'' forces the reviewer to search for both the reasoning and the changed content.</p>
<h2>Frequently Asked Questions</h2>
<h3>Will one technical-file template satisfy every notified body?</h3>
<p>A template can organise information, but product-specific evidence and applicable requirements determine adequacy. Confirm submission-format expectations with the body while ensuring that the substantive argument remains complete and internally consistent.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/notified-body-expectations-eu-mdr-technical-documentation', 'EU MDR Technical Documentation: Make the Evidence Trail Clear | NKB Regovanta', 'A technical file can contain the right reports and still be difficult to assess. The reader may be unable to connect the device description, risk conclusio', 'self', 'https://www.nkbregovanta.com/blog/notified-body-expectations-eu-mdr-technical-documentation', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Selecting a Notified Body: Match Designation, Scope, and Project Readiness', 'notified-body-selection-conformity-assessment-guide', '<p>The most useful notified-body comparison begins with whether a body can assess the product and proposed scope. Price and availability matter, but they cannot compensate for a mismatch in designation or an incomplete application. Prepare a clear product brief before approaching bodies so that the responses can be compared meaningfully.</p>
<h2>undefined</h2>
<p>The European Commission publishes information on notified bodies and their designation through the relevant official system. Confirm the applicable regulation and scope for the intended product and conformity-assessment activities. An organisation''s ability to assess one device category does not establish coverage for another.</p>
<p>Retain the verification and discuss the actual product configuration. Software, special technologies, combinations, or particular assessment activities may need clarification. Use the legal manufacturer''s proposed scope rather than a broad marketing description when asking whether the body can undertake the work.</p>
<h2>undefined</h2>
<p>Give each body the same controlled brief: intended purpose, classification rationale, product families, manufacturing locations, relevant suppliers, and evidence status. Explain significant unfinished work rather than presenting a draft file as complete. This helps avoid comparing a preliminary estimate with an offer based on a very different scope.</p>
<p>Ask about application content, document format, languages, assessment stages, communications, and the handling of questions or changes. Record assumptions behind timing and cost estimates. A quoted review window may depend on a complete submission, available specialists, and timely responses from the manufacturer.</p>
<h2>undefined</h2>
<p>Assign an internal coordinator and technical owners who can respond consistently. Maintain a controlled submission baseline and an issue tracker for questions, evidence, and revisions. Good coordination reduces confusion without changing the manufacturer''s responsibility for the product and evidence.</p>
<p>Before committing, review the agreement''s scope and operational implications with the appropriate business and legal owners. Plan continuity for changes in product scope, sites, or the relationship itself. The selection decision should leave the company with a workable assessment process, not merely a preferred name on a spreadsheet.</p>
<h2>Frequently Asked Questions</h2>
<h3>Should the fastest quoted review time determine the choice?</h3>
<p>It is one factor, but first confirm scope and the conditions behind the estimate. A realistic schedule also depends on the manufacturer''s readiness and response capacity. Compare offers using the same product information and assumptions.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/notified-body-selection-conformity-assessment-guide', 'Selecting a Notified Body: Match Designation, Scope, and Project Readiness | NKB Regovanta', 'The most useful notified-body comparison begins with whether a body can assess the product and proposed scope. Price and availability matter, but they cann', 'self', 'https://www.nkbregovanta.com/blog/notified-body-selection-conformity-assessment-guide', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('When to Submit a 510(k): Use Readiness Gates Instead of a Calendar Target', 'optimal-timing-usfda-510k-submission', '<p>The best submission date is not necessarily the earliest date on which a dossier can be uploaded. A 510(k) is more likely to be coherent when the claim, device configuration, comparison, and supporting evidence are stable. A readiness review helps distinguish a genuinely complete package from one that depends on assumptions still being resolved.</p>
<h2>undefined</h2>
<p>Confirm the intended use, relevant device classification, and predicate strategy. FDA''s 510(k) resources explain the substantial-equivalence framework; use that framework to identify the differences the submission must address. The commercial launch plan should reflect the claim actually supported by the evidence.</p>
<p>If a major pathway or study-design uncertainty remains, decide whether a focused regulatory interaction is appropriate before proceeding. Do not label an unresolved strategic question as a formatting task simply to keep the submission date unchanged.</p>
<h2>undefined</h2>
<p>For each important report, verify that the tested configuration represents the submitted device and that acceptance criteria support the relevant claim. Identify deviations, unresolved results, and subsequent design changes. A report''s completion date is not enough to establish that it remains applicable.</p>
<p>Use a readiness table that separates completed evidence, justified exclusions, and open gaps. Identify dependencies such as final software, labelling, or manufacturing configuration. If a planned update changes the evidence basis soon after submission, evaluate whether it is more efficient to resolve it before filing.</p>
<h2>undefined</h2>
<p>Reserve access to the engineers, clinical specialists, laboratory contacts, and document owners who may be needed to answer questions. Ensure that source records and analysis files are retrievable. A submission can be administratively complete while the team lacks the capacity to support it.</p>
<p>Set an internal response workflow with ownership, review, and cross-document consistency checks. Keep a controlled baseline of exactly what was submitted. Later answers should explain changes relative to that baseline rather than relying on an evolving folder in which the original version has disappeared.</p>
<h2>Frequently Asked Questions</h2>
<h3>Should a team wait until every future enhancement is complete?</h3>
<p>No. Define a stable version and claim that the current evidence supports. Future enhancements can be managed separately through change control. The key is avoiding a submission whose own configuration or evidence remains unsettled.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/optimal-timing-usfda-510k-submission', 'When to Submit a 510(k): Use Readiness Gates Instead of a Calendar Target | NKB Regovanta', 'The best submission date is not necessarily the earliest date on which a dossier can be uploaded. A 510(k) is more likely to be coherent when the claim, de', 'self', 'https://www.nkbregovanta.com/blog/optimal-timing-usfda-510k-submission', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('FDA 510(k) Problems: Diagnose the Evidence Gap Before Responding', 'overcoming-fda-510k-clearance-barriers', '<p>When a 510(k) encounters difficulty, first identify the type of problem. A missing attachment, an unclear comparison, and an unsupported intended use need different responses. Treating every question as a request for more wording can consume time while leaving the underlying scientific or regulatory issue unresolved.</p>
<h2>undefined</h2>
<p>FDA''s 510(k) framework centres on substantial equivalence to a legally marketed predicate. Intended use and technological characteristics are important parts of that assessment. If the proposed use differs materially or the technology raises different safety or effectiveness questions, adding a comparison table alone may not resolve the pathway issue.</p>
<p>Prepare a short argument identifying the predicate, relevant similarities and differences, and the evidence addressing each difference. Distinguish facts established by public information from assumptions about the predicate. If a critical comparison depends on unavailable information, make the limitation explicit and decide how to address it.</p>
<h2>undefined</h2>
<p>For each review question, state what the reviewer needs to determine. Is the issue the test method, sample representativeness, acceptance criterion, or interpretation of a result? Organise the response around that decision instead of repeating the original section at greater length.</p>
<p>Decide whether existing evidence is sufficient, requires clarification, or must be supplemented. If new testing is proposed, confirm that the protocol addresses the concern before committing resources. Connect the result to the marketed configuration and the claim it supports; a new report can still miss the question if its scope is wrong.</p>
<h2>undefined</h2>
<p>Use a response matrix linking every answer to the affected files and revisions. Review related sections for consequences of the change. A revised intended-use statement may affect labelling, the device description, comparison, and interpretation of performance results.</p>
<p>Assign an independent consistency review before sending the response. Check model identifiers, units, software versions, and report references. Keep a separate list of unresolved assumptions so that a polished response does not present an open issue as settled. The aim is an evidence-based answer, not simply a larger submission.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does every FDA question require a new study?</h3>
<p>No. Some questions can be resolved with existing evidence and a clearer explanation. Others expose a genuine gap. Make that distinction before deciding whether clarification, additional analysis, testing, or a changed claim is appropriate.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/overcoming-fda-510k-clearance-barriers', 'FDA 510(k) Problems: Diagnose the Evidence Gap Before Responding | NKB Regovanta', 'When a 510(k) encounters difficulty, first identify the type of problem. A missing attachment, an unclear comparison, and an unsupported intended use need ', 'self', 'https://www.nkbregovanta.com/blog/overcoming-fda-510k-clearance-barriers', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('ISO 13485 Documentation: Build a System People Can Use and Auditors Can Trace', 'qms-documentation-iso-13485-compliance', '<p>The size of a quality-management document library tells you little about its effectiveness. A useful library helps staff perform a task correctly and lets a reviewer reconstruct what happened. When documentation becomes difficult to navigate, teams often create unofficial spreadsheets and instructions, leaving a gap between the described system and the one actually used.</p>
<h2>undefined</h2>
<p>A procedure explains how a process is intended to operate; a completed record shows what happened on a particular occasion. Keep that distinction visible in the document structure. For example, a supplier-evaluation procedure is different from the evidence supporting approval of a specific supplier and from a subsequent performance review.</p>
<p>For US-market manufacturers, FDA''s QMSR incorporates ISO 13485:2016 and includes additional FDA requirements. Use the applicable framework to define the required controls, then build a usable company-specific structure around them. Avoid treating a downloaded template package as proof that those controls are implemented.</p>
<h2>undefined</h2>
<p>Group documents by the decisions employees need to make: approving a supplier, changing a design, releasing a batch, investigating a complaint, or closing a corrective action. Give each process an owner who understands both the written instruction and the system used to retain its records.</p>
<p>Use identifiers and links that remain stable when files are revised. A manufacturing record should identify the specification version that applied at the time, not simply point to whatever drawing is current today. When records are held in several tools, document the relationships and access controls so evidence does not depend on one employee''s memory.</p>
<h2>undefined</h2>
<p>Choose a recently released device and ask a colleague outside the project to retrieve the approved requirements, relevant verification, release evidence, and any associated change. Note missing links, ambiguous statuses, and duplicate versions. This exercise often identifies practical weaknesses that a document-count checklist will miss.</p>
<p>When changing a procedure, identify the forms, training, software settings, and ongoing work affected by the change. Releasing a new instruction without updating the form can create contradictory expectations. Define how old records remain accessible and how work already in progress will be handled. A change is complete when the operating process can follow it consistently.</p>
<h2>Frequently Asked Questions</h2>
<h3>Should every team use the same document template?</h3>
<p>Use common identifiers, approval controls, and essential fields where they help. The detailed format can vary with the process. A laboratory report and a supplier review need different content, even though both require clear ownership and revision status.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/qms-documentation-iso-13485-compliance', 'ISO 13485 Documentation: Build a System People Can Use and Auditors Can Trace | NKB Regovanta', 'The size of a quality-management document library tells you little about its effectiveness. A useful library helps staff perform a task correctly and lets ', 'self', 'https://www.nkbregovanta.com/blog/qms-documentation-iso-13485-compliance', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('IVDR Transition Planning: Check Eligibility Before Relying on the Deadline', 'regulation-eu-2024-1860-mdr-ivdr-transition', '<p>An extended transition date is not a blanket permission to continue supplying every IVD. Eligibility depends on the device''s regulatory history and fulfilment of conditions. A useful transition plan therefore starts with a device-by-device assessment and supporting records, rather than a single deadline copied into the commercial forecast.</p>
<h2>undefined</h2>
<p>Regulation (EU) 2024/1860 extended certain IVDR transition arrangements subject to conditions. The Commission identifies earlier milestones for the quality system, notified-body application, and written agreement. Its guidance lists application dates of 26 May 2025 for Class D, 26 May 2026 for Class C, and 26 May 2027 for Class B and Class A sterile devices.</p>
<p>At this article''s September 2026 update, the Class C application milestone has already passed. A later transition end date should not be read as extending that application milestone. Verify eligibility and the applicable agreement requirements using the current provisions and the product''s actual records.</p>
<h2>undefined</h2>
<p>Identify the relevant declaration or certificate history, the IVDR classification, and the evidence that the transition conditions were met. Separate products that qualify from new devices or other products outside the relevant arrangement. Where devices are grouped, explain why the same conclusion applies to each member.</p>
<p>Keep the supporting correspondence and agreements together with the assessment. A project tracker saying ''application complete'' is less useful than a clear reference to what was submitted, when, and for which scope. Resolve discrepancies between commercial product names and the identifiers in the formal records.</p>
<h2>undefined</h2>
<p>A transition assessment should be revisited when design or intended-purpose changes are proposed. Maintain a decision process that considers the conditions applicable to legacy devices before implementing changes. A commercial improvement can have regulatory consequences even when the product remains in the same broad category.</p>
<p>Use the eligibility assessment in supply planning. Identify dependencies such as remaining conformity-assessment work, evidence gaps, and external review. Give management a view of what is confirmed, what is conditional, and what requires action. Do not present the most distant possible date as a guaranteed launch or supply commitment.</p>
<h2>Frequently Asked Questions</h2>
<h3>Do the extended periods cover every IVD?</h3>
<p>No. They concern qualifying devices and depend on conditions. New products and other devices outside the relevant provisions cannot rely on an extension simply because they belong to the same risk class as an eligible legacy device.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/regulation-eu-2024-1860-mdr-ivdr-transition', 'IVDR Transition Planning: Check Eligibility Before Relying on the Deadline | NKB Regovanta', 'An extended transition date is not a blanket permission to continue supplying every IVD. Eligibility depends on the device''s regulatory history and fulfilm', 'self', 'https://www.nkbregovanta.com/blog/regulation-eu-2024-1860-mdr-ivdr-transition', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Global MedTech Strategy: Sequence Markets Around Reusable Evidence', 'regulatory-compliance-strategy-global-medtech', '<p>A global launch plan should do more than list countries and estimated filing dates. Its value comes from showing which decisions and evidence are shared, which obligations differ, and where an early market choice affects later work. This allows investment in evidence that supports the commercial plan without assuming one authorisation opens every market.</p>
<h2>undefined</h2>
<p>Use one controlled description of the device, intended use, configurations, and manufacturing arrangements. Record proposed variations by market rather than allowing teams to develop incompatible descriptions. A different indication or accessory can change the evidence needed even when the brand name stays the same.</p>
<p>Identify evidence packages that may support several markets: design performance, biological evaluation where relevant, software, usability, quality controls, and clinical or performance evaluation. For each, record the configuration and claims represented so that later reuse is an informed decision.</p>
<h2>undefined</h2>
<p>Assess classification, pathway, local representation, registration, labelling, and post-market obligations separately for each market. FDA''s pathway resources, the EU frameworks, and CDSCO''s rules illustrate why these decisions cannot be assumed to match. Record the source and date behind each important requirement.</p>
<p>Mark which differences require new evidence and which require adaptation of existing information. A translation task, a different administrative applicant, and an additional clinical claim are not equivalent schedule items. Grouping them under ''localisation'' can hide the real cost and lead time.</p>
<h2>undefined</h2>
<p>Compare market priority with evidence readiness, operational capacity, and unresolved questions. An early filing is not always the best use of resources if a planned design change will invalidate its supporting configuration. A focused initial claim may provide a manageable first step if the commercial team understands its limits.</p>
<p>Maintain a decision log for changes in market sequence, product scope, and evidence strategy. Review the plan after significant authority feedback or a major product change. The result should support current business decisions, rather than remain fixed while its assumptions disappear.</p>
<h2>Frequently Asked Questions</h2>
<h3>Can an existing approval be reused as the complete submission elsewhere?</h3>
<p>Do not assume so. It may support a particular route or provide useful evidence, but the receiving jurisdiction''s requirements still apply. Check the specific provisions and approved scope before planning reuse.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/regulatory-compliance-strategy-global-medtech', 'Global MedTech Strategy: Sequence Markets Around Reusable Evidence | NKB Regovanta', 'A global launch plan should do more than list countries and estimated filing dates. Its value comes from showing which decisions and evidence are shared, w', 'self', 'https://www.nkbregovanta.com/blog/regulatory-compliance-strategy-global-medtech', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Remote Patient Monitoring: Define the Clinical Workflow Before the Device Boundary', 'remote-patient-monitoring-devices-regulatory-framework', '<p>Remote monitoring is a workflow, not one regulatory category. A system may include a sensor, mobile app, communications service, analytical software, and a clinician dashboard. Its safety depends on how those parts work together and on what users believe will happen when a measurement changes. Start by defining that end-to-end use case.</p>
<h2>undefined</h2>
<p>FDA''s digital-health resources distinguish different software functions and their regulatory treatment. A function that only communicates data raises different questions from one that interprets it or recommends action. Assess each function using its intended purpose and the significance of its output, then consider the interfaces within the overall system.</p>
<p>Write down whether the system supports routine review, detects specified events, or is intended to prompt time-sensitive action. Identify who is expected to respond and under what conditions. Do not let a marketing phrase such as ''continuous monitoring'' imply a clinical response capability that the service does not provide.</p>
<h2>undefined</h2>
<p>Map the path from measurement to display: acquisition, patient association, transmission, storage, processing, and presentation. Identify where information can become delayed, duplicated, incomplete, or associated with the wrong person. Define how the system communicates those states to the user.</p>
<p>Design evaluations around the actual use environment. Home users may face unreliable connectivity, limited technical support, and interruptions that differ from a controlled clinic. Check recovery after loss of power or network service and whether old information can be mistaken for a current reading. A successful sensor-accuracy test does not cover all those system behaviours.</p>
<h2>undefined</h2>
<p>Clarify setup, training, maintenance, escalation, and support responsibilities. A device manufacturer, healthcare service, and communications provider may each own different parts of the workflow. The documentation should show how an issue moves between them without assuming that someone else is monitoring every failure.</p>
<p>For connected devices, consider cybersecurity alongside safety and performance. Assess how authentication, updates, and loss of availability affect the clinical function. The relevant FDA cybersecurity guidance is an important input where applicable, but the practical assessment should remain tied to the particular product and its dependencies.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does remote transmission alone make an app a high-risk medical device?</h3>
<p>No. Assessment depends on the functions and intended use. Examine whether the app merely transfers information or also analyses it, controls a device, or supports a particular clinical decision, and document the resulting rationale.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/remote-patient-monitoring-devices-regulatory-framework', 'Remote Patient Monitoring: Define the Clinical Workflow Before the Device Boundary | NKB Regovanta', 'Remote monitoring is a workflow, not one regulatory category. A system may include a sensor, mobile app, communications service, analytical software, and a', 'self', 'https://www.nkbregovanta.com/blog/remote-patient-monitoring-devices-regulatory-framework', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('FDA SaMD Planning: Assess the Software Function Before Selecting a Submission', 'samd-classification-submission-usfda', '<p>Software can provide several functions within the same application, and those functions may not receive identical regulatory treatment. Before selecting a submission route, define what the software does, what information it uses, who relies on the output, and what medical decision it is intended to support. The label ''SaMD'' is a starting description, not a pathway decision.</p>
<h2>undefined</h2>
<p>FDA''s software resources distinguish device software functions, functions outside the device definition, and areas where particular policies apply. Analyse the actual function rather than classifying by whether the product runs on a phone, browser, or cloud service.</p>
<p>Separate medical analysis from communication, storage, administration, and other features. Document the interfaces and any effect supporting functions could have on the medical output. If the application changes from presenting information to interpreting it or recommending action, revisit the assessment.</p>
<h2>undefined</h2>
<p>Research applicable classification information and relevant legally marketed devices. Consider the intended use and technological characteristics, not merely a similar user interface. FDA''s submission resources describe 510(k), De Novo, PMA, and other routes; determine which is appropriate to the product rather than assuming all medical software uses 510(k).</p>
<p>Record unresolved questions that affect the development plan. If a comparator or proposed claim is uncertain, identify how the team will resolve it before relying on that assumption to design its evaluation or commercial schedule.</p>
<h2>undefined</h2>
<p>FDA''s software-function guidance describes recommended premarket documentation. Organise the relevant requirements, architecture, risks, verification, configuration, and unresolved-issue information so that the software''s role can be understood. Keep the submitted version identifiable.</p>
<p>Technical testing should be connected to the intended clinical function. A programme that produces a mathematically correct output may still need evidence that the output is appropriate for the claimed population and use. Define the datasets, reference methods, limitations, and acceptance criteria needed for that particular claim.</p>
<h2>Frequently Asked Questions</h2>
<h3>Is all software used by a hospital a medical device?</h3>
<p>No. The assessment depends on the function and intended purpose. Administrative software and medical analytical functions can raise different questions even when they are sold within the same platform.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/samd-classification-submission-usfda', 'FDA SaMD Planning: Assess the Software Function Before Selecting a Submission | NKB Regovanta', 'Software can provide several functions within the same application, and those functions may not receive identical regulatory treatment. Before selecting a ', 'self', 'https://www.nkbregovanta.com/blog/samd-classification-submission-usfda', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Appointing a PRRC: Make the Responsibility Work Beyond the Contract', 'understanding-prrc-eu-mdr-ivdr', '<p>Naming a person responsible for regulatory compliance is only the beginning of a workable PRRC arrangement. The person needs access to the records and decisions that sit behind the role. Manufacturers should therefore design the appointment around how conformity, documentation, and post-market decisions are actually made, rather than treating the role as a signature purchased at the end of a project.</p>
<h2>undefined</h2>
<p>Article 15 of the MDR and IVDR establishes the PRRC role. The MDCG guidance explains the relevant qualification routes and organisational expectations, including the provisions for micro and small enterprises. Determine which arrangement applies to the business and retain evidence that the named person satisfies the applicable criteria.</p>
<p>Start with a written role description and an organisational chart. Identify the legal manufacturer, product scope, and relevant locations. If an external arrangement is used where permitted, specify availability, access, and continuity. A service contract that promises a named contact but says nothing about response or evidence access leaves important operational questions unanswered.</p>
<h2>undefined</h2>
<p>Map the role to the company''s existing workflows. Consider release checks, technical-documentation updates, declarations of conformity, post-market activities, and reportability decisions. Clarify which records the PRRC receives routinely, which require involvement before a decision, and which events trigger immediate escalation.</p>
<p>Keep operational ownership clear. Design engineers remain responsible for their work, production teams for their records, and management for providing resources. The PRRC arrangement should make oversight possible without implying that a single person personally performs every compliance activity. Document who can stop an inappropriate release and how disagreements are resolved.</p>
<h2>undefined</h2>
<p>A workable appointment anticipates leave, departure, product expansion, and organisational changes. Keep a handover package with the current portfolio, open regulatory commitments, significant investigations, and access instructions. A successor should not have to reconstruct the company''s compliance position from email threads.</p>
<p>Review the arrangement when a new device family, acquisition, or market strategy changes the workload. Use a small set of practical measures: overdue decisions, missing information, time to escalate significant concerns, and unresolved resource constraints. These measures help management determine whether the role is sufficiently supported rather than merely present on paper.</p>
<h2>Frequently Asked Questions</h2>
<h3>Does appointing a PRRC transfer the manufacturer''s obligations?</h3>
<p>No. The appointment supports the manufacturer''s compliance arrangements. It should clarify oversight and accountability while preserving the responsibilities of the legal manufacturer and the teams performing the work.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/understanding-prrc-eu-mdr-ivdr', 'Appointing a PRRC: Make the Responsibility Work Beyond the Contract | NKB Regovanta', 'Naming a person responsible for regulatory compliance is only the beginning of a workable PRRC arrangement. The person needs access to the records and deci', 'self', 'https://www.nkbregovanta.com/blog/understanding-prrc-eu-mdr-ivdr', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

INSERT INTO public.blog_posts (title, slug, content_html, status, publish_date_ist, is_in_sitemap)
VALUES ('Medical Device Usability Testing: Design a Study That Answers the Safety Question', 'usability-testing-medical-devices-iec-62366', '<p>A usability study should reveal whether intended users can perform the important tasks safely under realistic conditions. It is not simply a demonstration that participants like the interface. The study becomes more informative when its tasks, user groups, and observations are connected to the product''s use-related risks and intended environment.</p>
<h2>undefined</h2>
<p>FDA''s human-factors resources emphasise intended users, uses, and use environments. Identify the tasks whose failure could have important safety consequences and explain why they belong in the evaluation. Different groups may have different experience, capabilities, or training, so a convenient participant sample may not represent the intended population.</p>
<p>Describe the relevant environmental conditions, equipment, accessories, and information available to the user. If training is part of the intended product workflow, define how the evaluation will represent it. Avoid giving participants extra assistance that would not exist in actual use.</p>
<h2>undefined</h2>
<p>Exploratory sessions can identify confusing labels, awkward sequences, or assumptions about user knowledge while changes are still practical. Record the observation, the suspected contributing factor, the design response, and what later work will check. Do not treat an early session with colleagues as a substitute for a representative final evaluation.</p>
<p>Before the final study, stabilise the interface, instructions, and configuration being assessed. If these change afterwards, evaluate whether the findings still apply. The protocol should describe the intended tasks and observation methods clearly enough that the study is repeatable without scripting participants into success.</p>
<h2>undefined</h2>
<p>Record use errors, close calls, difficulties, and relevant participant explanations. Look for patterns that reveal a problem even if the task was eventually completed. A participant who succeeds only after a long, uncertain sequence may expose an important issue in a time-sensitive workflow.</p>
<p>Analyse the findings against the associated risks and controls. Explain the conclusion and any remaining action. Do not use a high overall completion percentage to conceal a serious failure on one important task. FDA''s submission guidance should also be consulted for the information appropriate to the product and submission.</p>
<h2>Frequently Asked Questions</h2>
<h3>Is user satisfaction enough to establish safe usability?</h3>
<p>No. Satisfaction can be useful feedback, but safety-focused evaluation asks whether users perform relevant tasks correctly and what errors or difficulties occur. Keep preference measures separate from the evidence supporting use-related safety.</p>', 'published', now(), true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO public.seo_meta (target_url, seo_title, meta_description, canonical_type, canonical_url, robots_index, robots_follow)
VALUES ('/blog/usability-testing-medical-devices-iec-62366', 'Medical Device Usability Testing: Design a Study That Answers the Safety Question | NKB Regovanta', 'A usability study should reveal whether intended users can perform the important tasks safely under realistic conditions. It is not simply a demonstration ', 'self', 'https://www.nkbregovanta.com/blog/usability-testing-medical-devices-iec-62366', 'index', 'follow')
ON CONFLICT (target_url) DO NOTHING;

-- 3. Seed Target Keywords
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('medical device consultant', 'Primary', '/', 'Active', 'Main service homepage focus keyword');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('medical device consultancy', 'Primary', '/', 'Active', 'Industry service category search term');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('USFDA', 'Primary', '/services/usa', 'Active', 'US FDA regulatory landing page');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('510 k', 'Primary', '/services/usa/510k', 'Active', 'Spaced 510 k consultant intent');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('510(k) clearance', 'Secondary', '/services/usa/510k', 'Active', 'Exact FDA 510(k) pathway');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('CDSCO medical device registration', 'Primary', '/services/india', 'Active', 'Core India market access pathway');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('CDSCO manufacturing license', 'Primary', '/services/india/medical-devices', 'Active', 'MD-3, MD-5, MD-7, MD-9 licensing in India');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('EU MDR CE marking', 'Primary', '/services/eu/mdr', 'Active', 'EU MDR 2017/745 technical files and Notified Body approval');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('ISO 13485 implementation', 'Primary', '/services/iso-13485-implementation-certification-consulting', 'Active', 'Quality management system certification');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('MDSAP audit readiness', 'Primary', '/services/mdsap', 'Active', 'Medical Device Single Audit Program global compliance');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('IVDR performance evaluation', 'Primary', '/services/eu/ivdr', 'Active', 'In-Vitro Diagnostic Regulation compliance in Europe');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('medical device technical documentation', 'Primary', '/services/medical-device-technical-documentation-consulting', 'Active', 'Annex II/III and STED dossier consulting');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('medical device authorized representative India', 'Primary', '/services/india', 'Active', 'Authorized Indian Agent / AR representation');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('UK Responsible Person UKRP', 'Primary', '/services/uk/ukrp', 'Active', 'UK MHRA medical device representation post-Brexit');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('Health Canada MDEL MDL', 'Primary', '/services/canada', 'Active', 'Medical Device Establishment and Device Licensing in Canada');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('TGA conformity assessment Australia', 'Primary', '/services/australia', 'Active', 'Australian TGA inclusion and sponsor service');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('ANVISA Brazil medical device registration', 'Primary', '/services/brazil', 'Active', 'BGMP and ANVISA registro regulatory compliance');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('SFDA Saudi Arabia medical device approval', 'Primary', '/services/saudi-arabia', 'Active', 'MDMA license and AR service in KSA');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('UAE MoHAP medical device registration', 'Primary', '/services/uae', 'Active', 'Ministry of Health compliance in Emirates');
INSERT INTO public.keywords (keyword, type, target_url, status, notes)
VALUES ('cosmetics import registration India', 'Primary', '/industries/cosmetics/india/for-importer', 'Active', 'Form COS-2 cosmetics import compliance in India');
