import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  FileText,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Edit2,
  X,
  Save,
  Globe,
  Share2,
  Code2,
  ExternalLink,
  Plus,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Copy,
  Check,
  Eye,
  Layers,
  Type,
  MousePointerClick,
  RefreshCw,
  BookOpen,
  Clock,
  Hash,
} from "lucide-react";

export const Route = createFileRoute("/admin/seo/pages")({
  component: PagesSeoManagerPage,
});

interface PageRecord {
  id: string;
  name: string;
  slug: string;
  url_path: string;
  status: "published" | "draft";
  is_in_sitemap: boolean;
  h1?: string;
  created_at?: string;
  updated_at?: string;
  // Attached SEO Meta
  seo_title?: string;
  meta_description?: string;
  focus_keyword?: string;
  secondary_keywords?: string[];
  canonical_type?: "self" | "custom";
  canonical_url?: string;
  robots_index?: "index" | "noindex";
  robots_follow?: "follow" | "nofollow";
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  h2_suggestions?: string;
}

interface ParsedHeading {
  level: "h1" | "h2" | "h3";
  text: string;
}

interface ParsedCTA {
  text: string;
  href: string;
}

interface PageContentData {
  htmlSource: string;
  h1: string;
  headings: ParsedHeading[];
  paragraphs: string[];
  ctas: ParsedCTA[];
  wordCount: number;
  readingTime: number;
  loading: boolean;
  error: string | null;
}

function computePageStatus(page: PageRecord): "Good" | "Warning" | "Missing" {
  if (!page.seo_title || !page.meta_description) return "Missing";
  const titleLen = page.seo_title.length;
  const descLen = page.meta_description.length;
  if (titleLen < 30 || titleLen > 60 || descLen < 70 || descLen > 160) return "Warning";
  if (!page.focus_keyword) return "Warning";
  return "Good";
}

function PagesSeoManagerPage() {
  const [pages, setPages] = useState<PageRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [indexFilter, setIndexFilter] = useState<string>("all");

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(25);

  // Active Editor Modal State
  const [editingPage, setEditingPage] = useState<PageRecord | null>(null);
  const [activeTab, setActiveTab] = useState<"seo" | "content" | "code" | "basic" | "social" | "schema">("seo");
  const [saving, setSaving] = useState(false);
  const [appendSuffix, setAppendSuffix] = useState(true);

  // Live Page Content & Code Inspector State
  const [pageContent, setPageContent] = useState<PageContentData>({
    htmlSource: "",
    h1: "",
    headings: [],
    paragraphs: [],
    ctas: [],
    wordCount: 0,
    readingTime: 0,
    loading: false,
    error: null,
  });
  const [copiedCode, setCopiedCode] = useState(false);
  const [codeSearchQuery, setCodeSearchQuery] = useState("");
  const [iframeKey, setIframeKey] = useState(0);

  // 301 Prompt Modal State
  const [oldSlug, setOldSlug] = useState("");
  const [showRedirectPrompt, setShowRedirectPrompt] = useState(false);
  const [createRedirectOnSave, setCreateRedirectOnSave] = useState(true);

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    setLoading(true);
    const { data: pageRows } = await supabase
      .from("pages")
      .select("*")
      .order("url_path", { ascending: true });

    const { data: metaRows } = await supabase.from("seo_meta").select("*");

    const metaMap = new Map();
    for (const m of metaRows || []) {
      metaMap.set(m.target_url, m);
    }

    const merged: PageRecord[] = (pageRows || []).map((p) => {
      const meta = metaMap.get(p.url_path) || {};
      return {
        ...p,
        seo_title: meta.seo_title || "",
        meta_description: meta.meta_description || "",
        focus_keyword: meta.focus_keyword || "",
        secondary_keywords: meta.secondary_keywords || [],
        canonical_type: meta.canonical_type || "self",
        canonical_url: meta.canonical_url || `https://www.nkbregovanta.com${p.url_path === "/" ? "" : p.url_path}`,
        robots_index: meta.robots_index || (p.is_in_sitemap ? "index" : "noindex"),
        robots_follow: meta.robots_follow || "follow",
        og_title: meta.og_title || "",
        og_description: meta.og_description || "",
        og_image: meta.og_image || "",
        twitter_title: meta.twitter_title || "",
        twitter_description: meta.twitter_description || "",
        twitter_image: meta.twitter_image || "",
        h2_suggestions: meta.h2_suggestions || "",
      };
    });

    setPages(merged);
    setLoading(false);
  };

  const fetchPageData = async (urlPath: string) => {
    setPageContent((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const res = await fetch(urlPath);
      const html = await res.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const headings: ParsedHeading[] = [];
      doc.querySelectorAll("h1, h2, h3").forEach((el) => {
        const text = el.textContent?.trim();
        if (text) {
          headings.push({
            level: el.tagName.toLowerCase() as "h1" | "h2" | "h3",
            text,
          });
        }
      });

      const paragraphs: string[] = [];
      doc.querySelectorAll("p").forEach((el) => {
        const text = el.textContent?.trim();
        if (text && text.length > 20 && !paragraphs.includes(text)) {
          paragraphs.push(text);
        }
      });

      const ctas: ParsedCTA[] = [];
      doc.querySelectorAll("a, button").forEach((el) => {
        const text = el.textContent?.trim();
        const href = el.getAttribute("href") || "";
        if (text && text.length < 50 && !["#", "javascript:void(0)"].includes(href)) {
          if (!ctas.some((c) => c.text === text && c.href === href)) {
            ctas.push({ text, href });
          }
        }
      });

      const textContent = doc.body.textContent || "";
      const words = textContent.split(/\s+/).filter(Boolean).length;
      const readingTime = Math.max(1, Math.ceil(words / 200));
      const detectedH1 = doc.querySelector("h1")?.textContent?.trim() || "";

      setPageContent({
        htmlSource: html,
        h1: detectedH1,
        headings,
        paragraphs,
        ctas: ctas.slice(0, 20),
        wordCount: words,
        readingTime,
        loading: false,
        error: null,
      });
    } catch (err: any) {
      setPageContent((prev) => ({
        ...prev,
        loading: false,
        error: err.message || "Failed to load live page content",
      }));
    }
  };

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement>) => {
    try {
      const iframe = e.currentTarget;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (!doc || !doc.body) return;

      setTimeout(() => {
        try {
          const fullHtml = "<!DOCTYPE html>\n" + (doc.documentElement ? doc.documentElement.outerHTML : "");
          const headings: ParsedHeading[] = [];
          doc.querySelectorAll("h1, h2, h3").forEach((el) => {
            const text = el.textContent?.trim();
            if (text && text.length > 1) {
              headings.push({
                level: el.tagName.toLowerCase() as "h1" | "h2" | "h3",
                text,
              });
            }
          });

          const paragraphs: string[] = [];
          doc.querySelectorAll("main p, section p, article p, p").forEach((el) => {
            const text = el.textContent?.trim();
            if (text && text.length > 25 && !paragraphs.includes(text)) {
              paragraphs.push(text);
            }
          });

          const ctas: ParsedCTA[] = [];
          doc.querySelectorAll("main a, main button, header a, footer a").forEach((el) => {
            const text = el.textContent?.trim();
            const href = el.getAttribute("href") || "";
            if (text && text.length > 1 && text.length < 50 && !["#", "javascript:void(0)"].includes(href)) {
              if (!ctas.some((c) => c.text === text && c.href === href)) {
                ctas.push({ text, href });
              }
            }
          });

          const bodyText = doc.body.innerText || doc.body.textContent || "";
          const words = bodyText.split(/\s+/).filter(Boolean).length;
          const readingTime = Math.max(1, Math.ceil(words / 200));
          const detectedH1 = doc.querySelector("h1")?.textContent?.trim() || "";

          setPageContent({
            htmlSource: fullHtml,
            h1: detectedH1,
            headings,
            paragraphs: paragraphs.slice(0, 30),
            ctas: ctas.slice(0, 20),
            wordCount: words,
            readingTime,
            loading: false,
            error: null,
          });

          if (detectedH1 && editingPage && !editingPage.h1) {
            setEditingPage((prev) => (prev ? { ...prev, h1: detectedH1 } : null));
          }
        } catch (err) {
          console.warn("Could not parse hydrated DOM from iframe:", err);
        }
      }, 400);
    } catch (err) {
      console.warn("Iframe access restriction or error:", err);
    }
  };

  useEffect(() => {
    if (editingPage?.url_path) {
      fetchPageData(editingPage.url_path);
      setIframeKey((k) => k + 1);
    }
  }, [editingPage?.url_path]);

  const openEditor = (page: PageRecord) => {
    setEditingPage({ ...page });
    setOldSlug(page.slug);
    setActiveTab("seo");
  };

  const handleSavePage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPage) return;

    setSaving(true);

    // 1. Check if slug changed on a published page
    const slugChanged = oldSlug !== editingPage.slug && oldSlug !== "";
    if (slugChanged && editingPage.status === "published" && !showRedirectPrompt) {
      setShowRedirectPrompt(true);
      setSaving(false);
      return;
    }

    try {
      // 2. Update page record
      const { error: pageErr } = await supabase
        .from("pages")
        .update({
          name: editingPage.name,
          slug: editingPage.slug,
          status: editingPage.status,
          h1: editingPage.h1 || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", editingPage.id);

      if (pageErr) throw pageErr;

      // 3. Format SEO title with suffix if toggled
      let finalTitle = editingPage.seo_title || "";
      if (appendSuffix && finalTitle && !finalTitle.includes("NKB Regovanta")) {
        finalTitle = `${finalTitle} | NKB Regovanta`;
      }

      // 4. Upsert SEO Meta row
      const { error: metaErr } = await supabase.from("seo_meta").upsert(
        {
          target_url: editingPage.url_path,
          page_id: editingPage.id,
          seo_title: finalTitle,
          meta_description: editingPage.meta_description,
          focus_keyword: editingPage.focus_keyword,
          secondary_keywords: editingPage.secondary_keywords,
          canonical_type: editingPage.canonical_type,
          canonical_url: editingPage.canonical_url,
          robots_index: editingPage.robots_index,
          robots_follow: editingPage.robots_follow,
          og_title: editingPage.og_title || finalTitle,
          og_description: editingPage.og_description || editingPage.meta_description,
          og_image: editingPage.og_image || "/og-image.png",
          twitter_title: editingPage.twitter_title || finalTitle,
          twitter_description: editingPage.twitter_description || editingPage.meta_description,
          twitter_image: editingPage.twitter_image || "/og-image.png",
          h2_suggestions: editingPage.h2_suggestions,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "target_url" }
      );

      if (metaErr) throw metaErr;

      // 5. Create 301 redirect if requested
      if (slugChanged && createRedirectOnSave) {
        const oldUrl = editingPage.url_path;
        const newUrl = editingPage.url_path.replace(new RegExp(`/${oldSlug}$`), `/${editingPage.slug}`);
        await supabase.from("redirects").insert({
          old_path: oldUrl,
          new_path: newUrl,
          status_code: 301,
          is_active: true,
        });
        toast.success(`301 Redirect created: ${oldUrl} -> ${newUrl}`);
      }

      toast.success("Page SEO metadata saved successfully!");
      setEditingPage(null);
      setShowRedirectPrompt(false);
      loadPages();
    } catch (err: any) {
      toast.error("Failed to save SEO: " + err.message);
    } finally {
      setSaving(false);
    }
  };

  // Filtered pages
  const filteredPages = useMemo(() => {
    return pages.filter((page) => {
      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        page.name.toLowerCase().includes(q) ||
        page.url_path.toLowerCase().includes(q) ||
        (page.seo_title || "").toLowerCase().includes(q) ||
        (page.focus_keyword || "").toLowerCase().includes(q);

      if (!matchesSearch) return false;

      const status = computePageStatus(page);
      if (statusFilter === "good" && status !== "Good") return false;
      if (statusFilter === "warning" && status !== "Warning") return false;
      if (statusFilter === "missing" && status !== "Missing") return false;

      if (indexFilter === "index" && page.robots_index === "noindex") return false;
      if (indexFilter === "noindex" && page.robots_index !== "noindex") return false;

      return true;
    });
  }, [pages, search, statusFilter, indexFilter]);

  // Pagination calculation
  const totalPages = pageSize === 0 ? 1 : Math.ceil(filteredPages.length / pageSize) || 1;
  const paginatedPages = useMemo(() => {
    if (pageSize === 0) return filteredPages;
    const start = (currentPage - 1) * pageSize;
    return filteredPages.slice(start, start + pageSize);
  }, [filteredPages, currentPage, pageSize]);

  // Overall counts
  const goodCount = useMemo(() => pages.filter((p) => computePageStatus(p) === "Good").length, [pages]);
  const warningCount = useMemo(() => pages.filter((p) => computePageStatus(p) !== "Good").length, [pages]);

  // Dynamic character counters
  const titleLen = editingPage?.seo_title?.length || 0;
  const descLen = editingPage?.meta_description?.length || 0;

  const getCounterBadge = (type: "title" | "desc", len: number) => {
    if (type === "title") {
      if (len === 0) return <span className="text-rose-600 font-bold">0 / 60 (Empty)</span>;
      if (len >= 30 && len <= 60) return <span className="text-emerald-700 font-bold">{len} / 60 chars (Optimal)</span>;
      if (len < 30) return <span className="text-amber-600 font-bold">{len} / 60 chars (Too short)</span>;
      return <span className="text-rose-600 font-bold">{len} / 60 chars (May get truncated)</span>;
    } else {
      if (len === 0) return <span className="text-rose-600 font-bold">0 / 160 (Empty)</span>;
      if (len >= 70 && len <= 160) return <span className="text-emerald-700 font-bold">{len} / 160 chars (Optimal)</span>;
      if (len < 70) return <span className="text-amber-600 font-bold">{len} / 160 chars (Too short)</span>;
      return <span className="text-amber-600 font-bold">{len} / 160 chars (May get truncated)</span>;
    }
  };

  const codeLines = useMemo(() => {
    if (!pageContent.htmlSource) return [];
    const lines = pageContent.htmlSource.split("\n");
    if (!codeSearchQuery.trim()) {
      return lines.slice(0, 1200).map((line, idx) => ({ num: idx + 1, content: line }));
    }
    const q = codeSearchQuery.toLowerCase();
    return lines
      .map((line, idx) => ({ num: idx + 1, content: line }))
      .filter((item) => item.content.toLowerCase().includes(q))
      .slice(0, 600);
  }, [pageContent.htmlSource, codeSearchQuery]);

  return (
    <div className="space-y-6 pb-16 text-slate-800">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
        <Link to="/admin" className="hover:text-slate-600 transition">Admin</Link>
        <span>&gt;</span>
        <span className="text-slate-500">SEO</span>
        <span>&gt;</span>
        <span className="text-slate-800 font-semibold">Pages</span>
      </div>

      {/* Header & Stats Banner */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Pages SEO Editor
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-500">
            Audit and optimize titles, descriptions, canonicals, and structured data across all {pages.length} pages.
          </p>
        </div>

        {/* Quick Stats Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
            <span>Total Pages:</span>
            <strong className="text-slate-900">{pages.length}</strong>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 shadow-xs">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
            <span>{goodCount} Healthy</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800 shadow-xs">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
            <span>{warningCount} Warnings</span>
          </div>
        </div>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
        <div className="relative flex-1 min-w-[240px] w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search by page name, URL path, focus keyword..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:border-blue-500 focus:outline-none transition"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 focus:bg-white focus:border-blue-500 focus:outline-none transition"
          >
            <option value="all">All Statuses ({pages.length})</option>
            <option value="good">Status: Good ({goodCount})</option>
            <option value="warning">Status: Warning</option>
            <option value="missing">Status: Missing Title/Desc</option>
          </select>

          {/* Robots filter */}
          <select
            value={indexFilter}
            onChange={(e) => {
              setIndexFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 focus:bg-white focus:border-blue-500 focus:outline-none transition"
          >
            <option value="all">All Robots Directives</option>
            <option value="index">Index (Allowed)</option>
            <option value="noindex">Noindex (Blocked)</option>
          </select>

          {/* Page size filter */}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 focus:bg-white focus:border-blue-500 focus:outline-none transition"
          >
            <option value="15">15 / page</option>
            <option value="25">25 / page</option>
            <option value="50">50 / page</option>
            <option value="100">100 / page</option>
            <option value="0">All ({filteredPages.length})</option>
          </select>
        </div>
      </div>

      {/* FULL RESPONSIVE TABLE WITH HORIZONTAL SCROLL CONTAINER */}
      <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[960px]">
            <thead className="border-b border-slate-200 bg-slate-50 text-[11px] font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-3.5 w-64">Page URL & Name</th>
                <th className="px-5 py-3.5 min-w-[200px]">SEO Title</th>
                <th className="px-5 py-3.5 min-w-[240px]">Meta Description</th>
                <th className="px-5 py-3.5 w-24 text-center">Index</th>
                <th className="px-5 py-3.5 w-28 text-center">Status</th>
                <th className="px-5 py-3.5 text-right w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-slate-400">
                    Loading site pages &amp; SEO metadata from Supabase...
                  </td>
                </tr>
              ) : paginatedPages.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-slate-400">
                    No pages matching the selected filters.
                  </td>
                </tr>
              ) : (
                paginatedPages.map((page) => {
                  const status = computePageStatus(page);
                  return (
                    <tr key={page.id} className="hover:bg-slate-50/80 transition">
                      {/* Page URL & Name */}
                      <td className="px-5 py-3.5">
                        <div className="font-bold text-slate-900 leading-snug">{page.name}</div>
                        <div className="font-mono text-[11px] text-slate-500 truncate max-w-[220px]" title={page.url_path}>
                          {page.url_path}
                        </div>
                      </td>

                      {/* SEO Title */}
                      <td className="px-5 py-3.5">
                        {page.seo_title ? (
                          <div>
                            <div className="text-slate-800 font-medium line-clamp-1" title={page.seo_title}>
                              {page.seo_title}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              {page.seo_title.length} characters
                            </div>
                          </div>
                        ) : (
                          <span className="text-rose-600 font-semibold italic text-[11px]">Not set</span>
                        )}
                      </td>

                      {/* Meta Description */}
                      <td className="px-5 py-3.5">
                        {page.meta_description ? (
                          <div>
                            <div className="text-slate-600 line-clamp-2 leading-relaxed" title={page.meta_description}>
                              {page.meta_description}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">
                              {page.meta_description.length} characters
                            </div>
                          </div>
                        ) : (
                          <span className="text-rose-600 font-semibold italic text-[11px]">Not set</span>
                        )}
                      </td>

                      {/* Index / Noindex */}
                      <td className="px-5 py-3.5 text-center whitespace-nowrap">
                        {page.robots_index === "index" ? (
                          <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                            Index
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-md bg-rose-50 px-2 py-0.5 text-[11px] font-bold text-rose-700 border border-rose-200">
                            Noindex
                          </span>
                        )}
                      </td>

                      {/* SEO Status */}
                      <td className="px-5 py-3.5 text-center whitespace-nowrap">
                        {status === "Good" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>Good</span>
                          </span>
                        )}
                        {status === "Warning" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 border border-amber-200">
                            <AlertTriangle className="h-3 w-3" />
                            <span>Warning</span>
                          </span>
                        )}
                        {status === "Missing" && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 px-2.5 py-0.5 text-[11px] font-bold text-rose-700 border border-rose-200">
                            <AlertCircle className="h-3 w-3" />
                            <span>Missing</span>
                          </span>
                        )}
                      </td>

                      {/* Action */}
                      <td className="px-5 py-3.5 text-right whitespace-nowrap">
                        <button
                          onClick={() => openEditor(page)}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-[#0b3a96] hover:text-white transition shadow-2xs"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                          <span>Edit SEO</span>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Toolbar */}
        {filteredPages.length > 0 && pageSize > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 border-t border-slate-200 bg-slate-50 text-xs text-slate-600">
            <div>
              Showing <strong className="text-slate-800 font-semibold">{(currentPage - 1) * pageSize + 1}</strong> to{" "}
              <strong className="text-slate-800 font-semibold">{Math.min(currentPage * pageSize, filteredPages.length)}</strong> of{" "}
              <strong className="text-slate-800 font-semibold">{filteredPages.length}</strong> pages
            </div>

            <div className="flex items-center gap-1 self-center">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded px-2.5 py-1 text-slate-600 border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 transition"
              >
                &lt; Prev
              </button>

              {/* Page numbers */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pNum = i + 1;
                return (
                  <button
                    key={pNum}
                    onClick={() => setCurrentPage(pNum)}
                    className={`rounded px-2.5 py-1 font-semibold transition ${
                      currentPage === pNum
                        ? "bg-[#0b3a96] text-white"
                        : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {pNum}
                  </button>
                );
              })}

              {totalPages > 5 && (
                <>
                  <span className="px-1 text-slate-400">...</span>
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`rounded px-2.5 py-1 font-semibold transition ${
                      currentPage === totalPages
                        ? "bg-[#0b3a96] text-white"
                        : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {totalPages}
                  </button>
                </>
              )}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="rounded px-2.5 py-1 text-slate-600 border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 transition"
              >
                Next &gt;
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── SEO Editor Modal ────────────────────────────────────────────── */}
      {editingPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs overflow-y-auto">
          <div className="relative my-8 w-full max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 bg-slate-50">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-700 font-mono">
                  <span>{editingPage.url_path}</span>
                  <a
                    href={editingPage.url_path}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-900"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <h2 className="text-base font-bold text-slate-900 mt-0.5">Editing SEO: {editingPage.name}</h2>
              </div>
              <button
                onClick={() => setEditingPage(null)}
                className="rounded p-1 text-slate-400 hover:bg-slate-200 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Noindex Alert Banner */}
            {editingPage.robots_index === "noindex" && (
              <div className="bg-rose-50 border-b border-rose-200 px-6 py-2.5 text-xs text-rose-800 flex items-center gap-2 font-medium">
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                <span>This page is currently set to NOINDEX and will be excluded from search engines and XML sitemaps.</span>
              </div>
            )}

            {/* Main Tabs & Content */}
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              {/* Tabs Bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
                {(
                  [
                    { id: "seo", label: "SEO Meta", icon: Globe },
                    { id: "content", label: "Page Content", icon: FileText },
                    { id: "code", label: "Page Code (HTML)", icon: Code2 },
                    { id: "basic", label: "Page Info", icon: ShieldCheck },
                    { id: "social", label: "Social Cards", icon: Share2 },
                    { id: "schema", label: "Schema", icon: Layers },
                  ] as const
                ).map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold whitespace-nowrap transition ${
                        activeTab === tab.id
                          ? "bg-[#0b3a96] text-white shadow-xs"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              <form id="seo-page-form" onSubmit={handleSavePage} className="space-y-5">
                {/* ── Tab: SEO ─────────────────────────────────────────── */}
                {activeTab === "seo" && (
                  <div className="space-y-5">
                    {/* SEO Title */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-slate-800">
                          SEO Title (&lt;title&gt;)
                        </label>
                        <div className="text-xs">{getCounterBadge("title", titleLen)}</div>
                      </div>
                      <input
                        type="text"
                        required
                        value={editingPage.seo_title}
                        onChange={(e) =>
                          setEditingPage({ ...editingPage, seo_title: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                        placeholder="Compelling headline for Google search results..."
                      />
                      <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Recommended: 30 to 60 characters.</span>
                        <label className="flex items-center gap-1.5 cursor-pointer text-slate-600 font-medium">
                          <input
                            type="checkbox"
                            checked={appendSuffix}
                            onChange={(e) => setAppendSuffix(e.target.checked)}
                            className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span>Append " | NKB Regovanta"</span>
                        </label>
                      </div>
                    </div>

                    {/* Meta Description */}
                    <div>
                      <div className="flex items-center justify-between">
                        <label className="block text-xs font-bold text-slate-800">
                          Meta Description
                        </label>
                        <div className="text-xs">{getCounterBadge("desc", descLen)}</div>
                      </div>
                      <textarea
                        rows={3}
                        required
                        value={editingPage.meta_description}
                        onChange={(e) =>
                          setEditingPage({ ...editingPage, meta_description: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none leading-relaxed"
                        placeholder="Summarize the value and content of this page for search engine users..."
                      />
                      <p className="mt-1 text-[11px] text-slate-500">
                        Recommended: 70 to 160 characters.
                      </p>
                    </div>

                    {/* Google Search Live Preview */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Google Search Result Preview
                      </div>
                      <div className="space-y-1 bg-white p-3.5 rounded-lg border border-slate-200 shadow-2xs">
                        <div className="text-xs text-slate-500 font-mono truncate">
                          https://www.nkbregovanta.com{editingPage.url_path}
                        </div>
                        <div className="text-base font-semibold text-[#1a0dab] hover:underline cursor-pointer truncate max-w-[600px]">
                          {editingPage.seo_title || "Untitled Page"}
                          {appendSuffix && !editingPage.seo_title?.includes("NKB Regovanta")
                            ? " | NKB Regovanta"
                            : ""}
                        </div>
                        <div className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {editingPage.meta_description || "No description provided."}
                        </div>
                      </div>
                    </div>

                    {/* Keywords & H1 */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-800">Focus Keyword</label>
                        <input
                          type="text"
                          value={editingPage.focus_keyword}
                          onChange={(e) =>
                            setEditingPage({ ...editingPage, focus_keyword: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                          placeholder="e.g. CDSCO medical device registration"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800">Primary H1 Tag</label>
                        <input
                          type="text"
                          value={editingPage.h1 || ""}
                          onChange={(e) =>
                            setEditingPage({ ...editingPage, h1: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                          placeholder="Main page heading"
                        />
                      </div>
                    </div>

                    {/* Robots Directives & Canonicals */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-3 border-t border-slate-200">
                      <div>
                        <label className="block text-xs font-bold text-slate-800">Robots Indexing</label>
                        <select
                          value={editingPage.robots_index}
                          onChange={(e) =>
                            setEditingPage({
                              ...editingPage,
                              robots_index: e.target.value as "index" | "noindex",
                            })
                          }
                          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-none"
                        >
                          <option value="index">Index (Allow search crawlers)</option>
                          <option value="noindex">Noindex (Hide from search)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-800">Canonical Type</label>
                        <select
                          value={editingPage.canonical_type}
                          onChange={(e) =>
                            setEditingPage({
                              ...editingPage,
                              canonical_type: e.target.value as "self" | "custom",
                            })
                          }
                          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-none"
                        >
                          <option value="self">Self Canonical (Default)</option>
                          <option value="custom">Custom Canonical URL</option>
                        </select>
                      </div>
                    </div>

                    {editingPage.canonical_type === "custom" && (
                      <div>
                        <label className="block text-xs font-bold text-slate-800">Custom Canonical Target</label>
                        <input
                          type="url"
                          value={editingPage.canonical_url}
                          onChange={(e) =>
                            setEditingPage({ ...editingPage, canonical_url: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-none font-mono"
                          placeholder="https://www.nkbregovanta.com/..."
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* ── Tab: Basic ───────────────────────────────────────── */}
                {activeTab === "basic" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800">Page Internal Name</label>
                      <input
                        type="text"
                        required
                        value={editingPage.name}
                        onChange={(e) =>
                          setEditingPage({ ...editingPage, name: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800">URL Slug</label>
                      <input
                        type="text"
                        required
                        value={editingPage.slug}
                        onChange={(e) =>
                          setEditingPage({
                            ...editingPage,
                            slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
                          })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                      <p className="mt-1 text-[11px] text-slate-500">
                        Lowercase letters, numbers, and hyphens only.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800">Full URL Path</label>
                      <input
                        type="text"
                        disabled
                        value={editingPage.url_path}
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-mono text-slate-500 cursor-not-allowed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800">Page Status</label>
                      <select
                        value={editingPage.status}
                        onChange={(e) =>
                          setEditingPage({
                            ...editingPage,
                            status: e.target.value as "published" | "draft",
                          })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-800 focus:bg-white focus:border-blue-500 focus:outline-none"
                      >
                        <option value="published">Published (Live to visitors)</option>
                        <option value="draft">Draft (Hidden from visitors &amp; sitemap)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* ── Tab: Social ──────────────────────────────────────── */}
                {activeTab === "social" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800">
                        Open Graph Title (Facebook / LinkedIn)
                      </label>
                      <input
                        type="text"
                        value={editingPage.og_title}
                        onChange={(e) =>
                          setEditingPage({ ...editingPage, og_title: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                        placeholder="Leave blank to use SEO Title"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800">
                        Open Graph Description
                      </label>
                      <textarea
                        rows={2}
                        value={editingPage.og_description}
                        onChange={(e) =>
                          setEditingPage({ ...editingPage, og_description: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                        placeholder="Leave blank to use Meta Description"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800">
                        Share Image URL (1200x630px recommended)
                      </label>
                      <input
                        type="text"
                        value={editingPage.og_image}
                        onChange={(e) =>
                          setEditingPage({ ...editingPage, og_image: e.target.value })
                        }
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none font-mono"
                        placeholder="/assets/brain/medtech_reg_lab.jpg"
                      />
                    </div>
                  </div>
                )}

                {/* ── Tab: Schema ──────────────────────────────────────── */}
                {activeTab === "schema" && (
                  <div className="space-y-4">
                    <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-xs text-blue-900 leading-relaxed">
                      To manage detailed Schema.org JSON-LD structured data (MedicalWebPage, FAQPage, Organization) for this URL, use the dedicated <Link to="/admin/seo/schema" className="font-bold underline text-blue-800">Schema Markup Manager</Link>.
                    </div>
                  </div>
                )}

                {/* ── Tab: Page Content (Non-Core SEO) ────────────────── */}
                {activeTab === "content" && (
                  <div className="space-y-6">
                    {/* Content Metrics Strip */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center gap-3">
                        <div className="rounded-lg bg-blue-100 p-2 text-blue-700">
                          <BookOpen className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Word Count</div>
                          <div className="text-sm font-extrabold text-slate-800">
                            {pageContent.loading ? "..." : pageContent.wordCount.toLocaleString()} words
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center gap-3">
                        <div className="rounded-lg bg-indigo-100 p-2 text-indigo-700">
                          <Clock className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Reading Time</div>
                          <div className="text-sm font-extrabold text-slate-800">
                            ~{pageContent.readingTime} min read
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center gap-3">
                        <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
                          <Type className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Headings</div>
                          <div className="text-sm font-extrabold text-slate-800">
                            {pageContent.headings.length} headings
                          </div>
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 flex items-center gap-3">
                        <div className="rounded-lg bg-amber-100 p-2 text-amber-700">
                          <Layers className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Text Paragraphs</div>
                          <div className="text-sm font-extrabold text-slate-800">
                            {pageContent.paragraphs.length} blocks
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Hero & Primary H1 Heading (Editable) */}
                    <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 space-y-3 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-[#0b3a96] px-2 py-0.5 text-[10px] font-black text-white uppercase tracking-wider">
                            Hero Title (H1)
                          </span>
                          <label className="text-xs font-bold text-slate-900">
                            Primary On-Page Headline
                          </label>
                        </div>
                        {editingPage.focus_keyword && (
                          <span className="text-[11px] text-slate-600">
                            Target Keyword:{" "}
                            <strong className="text-blue-800 font-semibold bg-white px-1.5 py-0.5 rounded border border-blue-200">
                              {editingPage.focus_keyword}
                            </strong>
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={editingPage.h1 || ""}
                        onChange={(e) =>
                          setEditingPage({ ...editingPage, h1: e.target.value })
                        }
                        placeholder="e.g. CDSCO Medical Device Registration & Regulatory Consulting in India"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-bold text-slate-900 focus:border-[#0b3a96] focus:ring-1 focus:ring-[#0b3a96] focus:outline-none shadow-2xs transition"
                      />
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-slate-500">
                        <span>
                          The top-level H1 tag communicates the central topic of this page to both visitors and search engines.
                        </span>
                        {editingPage.focus_keyword && (
                          <span
                            className={
                              (editingPage.h1 || "").toLowerCase().includes(editingPage.focus_keyword.toLowerCase())
                                ? "text-emerald-700 font-semibold flex items-center gap-1"
                                : "text-amber-700 font-semibold flex items-center gap-1"
                            }
                          >
                            {(editingPage.h1 || "").toLowerCase().includes(editingPage.focus_keyword.toLowerCase()) ? (
                              <>
                                <Check className="h-3 w-3" /> Focus keyword detected in H1
                              </>
                            ) : (
                              <>
                                <AlertTriangle className="h-3 w-3" /> Keyword not found in H1
                              </>
                            )}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Section 2: Headings Outline (H2 / H3) */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <Type className="h-4 w-4 text-[#0b3a96]" />
                          <span>Content Hierarchy &amp; Section Outlines ({pageContent.headings.length})</span>
                        </h3>
                        <span className="text-[11px] text-slate-500">Live rendered headings</span>
                      </div>

                      {pageContent.headings.length === 0 ? (
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center text-xs text-slate-500">
                          {pageContent.loading ? "Analyzing page outline..." : "No additional headings detected on this page."}
                        </div>
                      ) : (
                        <div className="rounded-xl border border-slate-200 bg-white divide-y divide-slate-100 overflow-hidden max-h-[260px] overflow-y-auto shadow-2xs">
                          {pageContent.headings.map((h, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 hover:bg-slate-50 transition">
                              <span
                                className={`rounded px-2 py-0.5 text-[10px] font-black uppercase shrink-0 font-mono ${
                                  h.level === "h1"
                                    ? "bg-blue-100 text-blue-800"
                                    : h.level === "h2"
                                    ? "bg-indigo-100 text-indigo-800"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {h.level}
                              </span>
                              <span className="text-xs font-medium text-slate-800 leading-snug">
                                {h.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Section 3: Body Content Paragraphs */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <FileText className="h-4 w-4 text-[#0b3a96]" />
                          <span>Page Text Blocks &amp; Body Copy ({pageContent.paragraphs.length})</span>
                        </h3>
                        <span className="text-[11px] text-slate-500">Extracted paragraph content</span>
                      </div>

                      {pageContent.paragraphs.length === 0 ? (
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center text-xs text-slate-500">
                          {pageContent.loading ? "Extracting body copy..." : "No body text paragraphs found."}
                        </div>
                      ) : (
                        <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                          {pageContent.paragraphs.map((pText, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl border border-slate-200 bg-slate-50/80 p-3.5 text-xs text-slate-700 leading-relaxed hover:bg-white hover:border-slate-300 transition"
                            >
                              <div className="text-[10px] font-bold text-slate-400 mb-1">
                                Paragraph #{idx + 1}
                              </div>
                              <p>{pText}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Section 4: Calls-to-Action & Buttons */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                          <MousePointerClick className="h-4 w-4 text-[#0b3a96]" />
                          <span>Interactive CTAs &amp; Buttons ({pageContent.ctas.length})</span>
                        </h3>
                        <span className="text-[11px] text-slate-500">Conversion triggers</span>
                      </div>

                      {pageContent.ctas.length === 0 ? (
                        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center text-xs text-slate-500">
                          No CTAs detected on this page.
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[200px] overflow-y-auto">
                          {pageContent.ctas.map((cta, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-2.5 text-xs shadow-2xs"
                            >
                              <span className="font-semibold text-slate-900 truncate max-w-[200px]" title={cta.text}>
                                {cta.text}
                              </span>
                              <span
                                className="font-mono text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded truncate max-w-[140px] border border-blue-100"
                                title={cta.href}
                              >
                                {cta.href || "Action"}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Notice for Future CMS Editing */}
                    <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 flex items-start gap-3 text-xs text-blue-950">
                      <AlertCircle className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-blue-900 font-bold">Visual Content Editing:</strong>
                        <p className="mt-0.5 text-blue-800 leading-relaxed">
                          You can currently inspect all live content blocks and edit the <strong>Primary H1 Tag</strong> above. When you click <strong>Save Changes</strong> below, your new H1 is immediately saved to the database. Section-by-section visual WYSIWYG editing will be enabled in a future release.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Tab: Page Code (HTML) ────────────────────────────── */}
                {activeTab === "code" && (
                  <div className="space-y-4">
                    {/* Code Inspector Header Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="h-3.5 w-3.5" /> 200 OK
                        </span>
                        <span className="font-mono text-xs text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 truncate max-w-[260px]">
                          https://www.nkbregovanta.com{editingPage.url_path}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-slate-700 border border-slate-200">
                          {(pageContent.htmlSource.length / 1024).toFixed(1)} KB
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white text-slate-700 border border-slate-200">
                          {pageContent.htmlSource ? pageContent.htmlSource.split("\n").length : 0} lines
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => fetchPageData(editingPage.url_path)}
                          title="Reload Source Code"
                          className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition shadow-2xs"
                        >
                          <RefreshCw className={`h-4 w-4 ${pageContent.loading ? "animate-spin" : ""}`} />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            if (!pageContent.htmlSource) return;
                            navigator.clipboard.writeText(pageContent.htmlSource);
                            setCopiedCode(true);
                            toast.success("Page HTML source code copied to clipboard!");
                            setTimeout(() => setCopiedCode(false), 2500);
                          }}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b3a96] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition shadow-2xs"
                        >
                          {copiedCode ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                          <span>{copiedCode ? "Copied!" : "Copy Full Code"}</span>
                        </button>
                      </div>
                    </div>

                    {/* Search / Filter Code Lines */}
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search code (e.g. meta, canonical, h1, og:title, schema)..."
                        value={codeSearchQuery}
                        onChange={(e) => setCodeSearchQuery(e.target.value)}
                        className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-[#0b3a96] focus:outline-none shadow-2xs"
                      />
                      {codeSearchQuery && (
                        <button
                          type="button"
                          onClick={() => setCodeSearchQuery("")}
                          className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-600"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      )}
                    </div>

                    {/* Developer Terminal Code Display */}
                    <div className="rounded-xl border border-slate-800 bg-[#0f172a] text-slate-200 shadow-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
                          <span className="ml-2 font-semibold text-slate-300">
                            Rendered HTML Source: {editingPage.url_path}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                          Live Read-Only Viewer
                        </span>
                      </div>

                      <div className="max-h-[460px] overflow-auto p-3 font-mono text-xs leading-relaxed">
                        {pageContent.loading && !pageContent.htmlSource ? (
                          <div className="text-center py-16 text-slate-400 flex flex-col items-center gap-2">
                            <RefreshCw className="h-6 w-6 animate-spin text-blue-400" />
                            <span>Fetching live HTML source code...</span>
                          </div>
                        ) : codeLines.length === 0 ? (
                          <div className="text-center py-12 text-slate-400">
                            No code lines match the filter query "{codeSearchQuery}".
                          </div>
                        ) : (
                          codeLines.map((item) => (
                            <div
                              key={item.num}
                              className="flex hover:bg-slate-800/70 px-1 py-0.5 rounded transition font-mono"
                            >
                              <span className="w-12 shrink-0 select-none text-right pr-4 text-slate-600 text-[11px]">
                                {item.num}
                              </span>
                              <span className="text-slate-300 overflow-x-auto whitespace-pre font-mono text-xs">
                                {item.content || " "}
                              </span>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      <strong>Read-Only Code Inspector:</strong> Displays the complete HTML markup returned by the server and rendered for this route, including header tags, robots directives, OpenGraph meta, and inline structured data.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4">
              <button
                type="button"
                onClick={() => setEditingPage(null)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                form="seo-page-form"
                disabled={saving}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-blue-700 disabled:opacity-50 shadow-xs transition"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? "Saving Changes..." : "Save Changes"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hidden iframe to hydrate client route and extract dynamic React DOM */}
      {editingPage && (
        <iframe
          key={iframeKey}
          src={editingPage.url_path}
          title="page-inspector-frame"
          onLoad={handleIframeLoad}
          className="sr-only pointer-events-none absolute -left-[9999px] -top-[9999px] h-0 w-0 border-0 opacity-0"
          tabIndex={-1}
          aria-hidden="true"
        />
      )}

      {/* ── 301 Prompt Modal on Slug Change ─────────────────────────────── */}
      {showRedirectPrompt && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-amber-600">
              <AlertTriangle className="h-6 w-6" />
              <h3 className="text-base font-bold text-slate-900">Create Automatic 301 Redirect?</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              You changed the URL slug of a published page from <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-rose-600">/{oldSlug}</code> to <code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-emerald-600">/{editingPage?.slug}</code>.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Would you like to automatically create a permanent 301 redirect to preserve your Google rankings and prevent broken links for incoming visitors?
            </p>
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="create301"
                checked={createRedirectOnSave}
                onChange={(e) => setCreateRedirectOnSave(e.target.checked)}
                className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="create301" className="text-xs font-semibold text-slate-800 cursor-pointer">
                Yes, create 301 redirect rule
              </label>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowRedirectPrompt(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
              >
                Back to Edit
              </button>
              <button
                type="button"
                onClick={handleSavePage}
                className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-blue-700 shadow-xs"
              >
                Confirm &amp; Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
