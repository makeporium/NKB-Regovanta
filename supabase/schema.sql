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
