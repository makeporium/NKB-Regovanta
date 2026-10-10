import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo, useRef } from "react";
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
  Monitor,
  Tablet,
  Smartphone,
  Trash2,
  MoveUp,
  MoveDown,
  Sparkles,
  HelpCircle,
  Image as ImageIcon,
  RotateCcw,
  Wand2,
  Maximize2,
  Minimize2,
} from "lucide-react";
import {
  pageContentService,
  type PageVisualContent,
  type PageSectionItem,
  type PageFaqItem,
} from "@/lib/services/pageContentService";
import { DynamicPageRenderer } from "@/components/site/DynamicPageRenderer";

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
  h1?: string | undefined;
  created_at?: string | undefined;
  updated_at?: string | undefined;
  // Attached SEO Meta
  seo_title?: string | undefined;
  meta_description?: string | undefined;
  focus_keyword?: string | undefined;
  secondary_keywords?: string[] | undefined;
  canonical_type?: "self" | "custom" | undefined;
  canonical_url?: string | undefined;
  robots_index?: "index" | "noindex" | undefined;
  robots_follow?: "follow" | "nofollow" | undefined;
  og_title?: string | undefined;
  og_description?: string | undefined;
  og_image?: string | undefined;
  twitter_title?: string | undefined;
  twitter_description?: string | undefined;
  twitter_image?: string | undefined;
  h2_suggestions?: string | undefined;
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

function decodeHtmlEntities(str: string): string {
  if (!str) return "";
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function computePageStatus(page: PageRecord): "Good" | "Warning" | "Missing" {
  if (!page.seo_title || !page.meta_description) return "Missing";
  const titleLen = page.seo_title.length;
  const descLen = page.meta_description.length;
  if (titleLen < 30 || titleLen > 60 || descLen < 70 || descLen > 160) return "Warning";
  if (!page.focus_keyword) return "Warning";
  return "Good";
}

interface SectionTemplateItem {
  id: string;
  name: string;
  category: "cta" | "features" | "stats" | "faq" | "content" | "process" | "testimonial";
  badge: string;
  description: string;
  html: string;
}

const SECTION_TEMPLATES: SectionTemplateItem[] = [
  {
    id: "cta_gradient",
    name: "High-Impact CTA Banner",
    category: "cta",
    badge: "Conversion",
    description: "Navy gradient banner with headline, description, and dual consultation action buttons.",
    html: `<section class="my-12 rounded-3xl bg-gradient-to-br from-[#0b2545] via-[#0b3a96] to-[#041c32] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden border border-blue-400/20">
  <div class="relative z-10 max-w-3xl mx-auto text-center space-y-4">
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-blue-500/20 text-blue-200 border border-blue-400/30">
      ⚡ Accelerate Compliance
    </span>
    <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
      Ready to Expedite Your Medical Device Clearances?
    </h2>
    <p class="text-sm md:text-base text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
      Speak with our senior regulatory specialists to formulate an end-to-end pathway for CDSCO, US FDA 510(k), and EU MDR.
    </p>
    <div class="pt-2 flex flex-wrap items-center justify-center gap-3">
      <a href="/contact" class="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#0b2545] shadow-lg hover:bg-blue-50 transition">
        <span>Schedule Free Consultation</span>
        <span>&rarr;</span>
      </a>
      <a href="/contact" class="inline-flex items-center gap-2 rounded-xl bg-blue-700/60 hover:bg-blue-700 px-5 py-3 text-sm font-semibold text-white border border-blue-400/30 transition">
        <span>Request Technical Proposal</span>
      </a>
    </div>
  </div>
</section>`,
  },
  {
    id: "features_3col",
    name: "3-Column Capabilities Grid",
    category: "features",
    badge: "Grid",
    description: "Modern white cards with number badges, titles, and regulatory descriptions.",
    html: `<section class="my-12 space-y-8">
  <div class="text-center max-w-2xl mx-auto space-y-2">
    <span class="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Core Capabilities</span>
    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Comprehensive Regulatory & Quality Solutions</h2>
    <p class="text-sm text-slate-600">Tailored advisory, technical file compilation, and certified quality management systems.</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3">
      <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">01</div>
      <h3 class="text-base font-bold text-slate-900">Regulatory Submissions</h3>
      <p class="text-xs text-slate-600 leading-relaxed">End-to-end dossier preparation for US FDA 510(k), PMA, De Novo, and CDSCO Form MD-14/15 licenses.</p>
    </div>
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3">
      <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">02</div>
      <h3 class="text-base font-bold text-slate-900">QMS Implementation</h3>
      <p class="text-xs text-slate-600 leading-relaxed">ISO 13485:2016 and FDA 21 CFR Part 820 compliant Quality Management Systems design and mock audits.</p>
    </div>
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition space-y-3">
      <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">03</div>
      <h3 class="text-base font-bold text-slate-900">Clinical Evaluation (CER)</h3>
      <p class="text-xs text-slate-600 leading-relaxed">MEDDEV 2.7/1 Rev 4 and EU MDR Article 61 compliant literature reviews, PMCF plans, and clinical data synthesis.</p>
    </div>
  </div>
</section>`,
  },
  {
    id: "stats_metrics",
    name: "4-Column Impact Metrics",
    category: "stats",
    badge: "Track Record",
    description: "High-contrast metric strip highlighting clearance numbers, pass rate, and global footprint.",
    html: `<section class="my-12 rounded-3xl bg-slate-900 text-white p-8 md:p-10 shadow-xl border border-slate-800">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
    <div class="p-3 space-y-1">
      <div class="text-3xl md:text-4xl font-black text-blue-400">500+</div>
      <div class="text-xs font-bold text-white uppercase tracking-wider">Submissions Cleared</div>
      <p class="text-[11px] text-slate-400">Across 35+ global jurisdictions</p>
    </div>
    <div class="p-3 space-y-1">
      <div class="text-3xl md:text-4xl font-black text-emerald-400">99.4%</div>
      <div class="text-xs font-bold text-white uppercase tracking-wider">First-Pass Rate</div>
      <p class="text-[11px] text-slate-400">Minimal authority deficiency notices</p>
    </div>
    <div class="p-3 space-y-1">
      <div class="text-3xl md:text-4xl font-black text-indigo-400">40+</div>
      <div class="text-xs font-bold text-white uppercase tracking-wider">Global Markets</div>
      <p class="text-[11px] text-slate-400">USA, EU, India, ASEAN & LATAM</p>
    </div>
    <div class="p-3 space-y-1">
      <div class="text-3xl md:text-4xl font-black text-amber-400">15+ Yrs</div>
      <div class="text-xs font-bold text-white uppercase tracking-wider">Expert Experience</div>
      <p class="text-[11px] text-slate-400">Ex-regulators and certified auditors</p>
    </div>
  </div>
</section>`,
  },
  {
    id: "faq_accordion",
    name: "Frequently Asked Questions",
    category: "faq",
    badge: "Q&A",
    description: "Structured cards answering common questions on regulatory timelines and licenses.",
    html: `<section class="my-12 space-y-6">
  <div class="text-center max-w-xl mx-auto space-y-2">
    <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Got Questions?</span>
    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
  </div>
  <div class="max-w-3xl mx-auto space-y-3">
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
      <h3 class="text-sm font-bold text-slate-900">What are the primary turnaround times for CDSCO import registration?</h3>
      <p class="text-xs text-slate-600 leading-relaxed">Typical processing for Class A & B devices spans 4-8 weeks, while Class C & D devices subject to Subject Expert Committee (SEC) review require approximately 3-6 months.</p>
    </div>
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
      <h3 class="text-sm font-bold text-slate-900">How do we determine if our software qualifies as SaMD under US FDA regulations?</h3>
      <p class="text-xs text-slate-600 leading-relaxed">Software as a Medical Device (SaMD) categorization is governed by IMDRF risk frameworks and FDA guidance based on clinical significance and target state conditions.</p>
    </div>
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
      <h3 class="text-sm font-bold text-slate-900">Can NKB Regovanta act as our Indian Authorized Agent (IAA)?</h3>
      <p class="text-xs text-slate-600 leading-relaxed">Yes, we provide registered in-country regulatory representation, holding regulatory licenses on behalf of overseas manufacturers under strict commercial confidentiality.</p>
    </div>
  </div>
</section>`,
  },
  {
    id: "two_col_checklist",
    name: "2-Column Overview & Checklist",
    category: "content",
    badge: "Split Layout",
    description: "Left column with regulatory overview and checkmarks; right column with callout box.",
    html: `<section class="my-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
  <div class="lg:col-span-7 space-y-4">
    <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">Strategic Compliance</span>
    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">Navigating Complex Global Medical Regulations Seamlessly</h2>
    <p class="text-xs md:text-sm text-slate-600 leading-relaxed">Medical device and in-vitro diagnostic compliance requires coordinated synchronization of biocompatibility testing, software validation, and technical documentation.</p>
    <div class="space-y-2.5 pt-2">
      <div class="flex items-start gap-2.5">
        <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
        <span class="text-xs font-semibold text-slate-800">ISO 13485:2016 Certified Quality Management Systems</span>
      </div>
      <div class="flex items-start gap-2.5">
        <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
        <span class="text-xs font-semibold text-slate-800">Full CDSCO SUGAM & MD-Online Submission Management</span>
      </div>
      <div class="flex items-start gap-2.5">
        <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
        <span class="text-xs font-semibold text-slate-800">Post-Market Surveillance (PMS) and Periodic Safety Update Reports</span>
      </div>
    </div>
  </div>
  <div class="lg:col-span-5">
    <div class="rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 p-6 shadow-sm space-y-4">
      <div class="space-y-1">
        <span class="text-[11px] font-bold uppercase text-blue-700 tracking-wider">Fast-Track Assessment</span>
        <h3 class="text-lg font-bold text-slate-900">Regulatory Gap Audit</h3>
        <p class="text-xs text-slate-600 leading-relaxed">Identify documentation deficits before formal authority submission to prevent costly deficiency letters.</p>
      </div>
      <div class="pt-2">
        <a href="/contact" class="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0b3a96] hover:bg-blue-700 text-white px-4 py-2.5 text-xs font-bold transition shadow-xs">
          <span>Request Gap Audit</span>
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: "process_roadmap",
    name: "4-Stage Regulatory Approval Roadmap",
    category: "process",
    badge: "Process",
    description: "Numbered pipeline cards illustrating the step-by-step regulatory clearance journey.",
    html: `<section class="my-12 space-y-8">
  <div class="text-center max-w-xl mx-auto space-y-2">
    <span class="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Our Methodology</span>
    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">4-Stage Regulatory Approval Roadmap</h2>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
      <div class="text-2xl font-black text-blue-600">01</div>
      <h3 class="text-sm font-bold text-slate-900">Device Classification</h3>
      <p class="text-xs text-slate-600 leading-relaxed">Determining exact device class, predicate devices, and regulatory path.</p>
    </div>
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
      <div class="text-2xl font-black text-indigo-600">02</div>
      <h3 class="text-sm font-bold text-slate-900">Gap & Testing Review</h3>
      <p class="text-xs text-slate-600 leading-relaxed">Auditing testing reports, biocompatibility, electrical safety, and risk files.</p>
    </div>
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
      <div class="text-2xl font-black text-emerald-600">03</div>
      <h3 class="text-sm font-bold text-slate-900">Dossier Compilation</h3>
      <p class="text-xs text-slate-600 leading-relaxed">Authoring full STED, eCopy, or SUGAM application with clinical evaluations.</p>
    </div>
    <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs space-y-2">
      <div class="text-2xl font-black text-amber-600">04</div>
      <h3 class="text-sm font-bold text-slate-900">Authority Clearance</h3>
      <p class="text-xs text-slate-600 leading-relaxed">Managing query responses and obtaining formal license certificate.</p>
    </div>
  </div>
</section>`,
  },
  {
    id: "testimonial_quote",
    name: "Executive Testimonial Card",
    category: "testimonial",
    badge: "Social Proof",
    description: "High-credibility quotation card with executive endorsement and company badge.",
    html: `<section class="my-12 rounded-2xl border border-slate-200 bg-slate-50/70 p-8 shadow-xs">
  <div class="max-w-2xl mx-auto text-center space-y-4">
    <div class="text-3xl text-blue-600">“</div>
    <blockquote class="text-sm md:text-base font-medium text-slate-800 italic leading-relaxed">
      NKB Regovanta navigated our complex Class IIb multi-parameter monitor submission through CDSCO in record time with zero deficiency rounds. Their technical precision is unmatched.
    </blockquote>
    <div class="pt-2">
      <div class="font-bold text-xs text-slate-900">Dr. Rajesh Varma</div>
      <div class="text-[11px] text-slate-500">VP of Quality & Regulatory Affairs, MedTech Global</div>
    </div>
  </div>
</section>`,
  },
  {
    id: "content_article",
    name: "Structured Article Section",
    category: "content",
    badge: "Typography",
    description: "Centered editorial block with H2, lead paragraph, and supporting regulatory body text.",
    html: `<section class="my-12 max-w-3xl mx-auto space-y-4">
  <h2 class="text-2xl font-extrabold text-slate-900">Understanding Global Market Access Requirements</h2>
  <p class="text-sm text-slate-700 leading-relaxed font-medium">
    International market expansion necessitates strict adherence to destination health authority regulations. Entering multiple jurisdictions simultaneously requires harmonized technical files that satisfy differing global standards.
  </p>
  <p class="text-xs text-slate-600 leading-relaxed">
    Our regulatory strategists synthesize regional nuances into single-source technical documentation, eliminating redundant testing and accelerating commercialization timelines.
  </p>
</section>`,
  },
];

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
  const [activeTab, setActiveTab] = useState<
    "visual" | "code" | "preview" | "seo" | "content" | "basic" | "social" | "schema"
  >("visual");
  const [saving, setSaving] = useState(false);
  const [appendSuffix, setAppendSuffix] = useState(true);
  const [isAddSectionModalOpen, setIsAddSectionModalOpen] = useState(false);
  const [sectionCategoryFilter, setSectionCategoryFilter] = useState<string>("all");

  // Dynamic Visual Page Content & Preview State
  const [visualContent, setVisualContent] = useState<PageVisualContent>({
    hero: {
      badge: "NKB Regovanta Global",
      h1: "",
      lead: "",
      primaryCtaText: "Contact Us",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Explore Services",
      secondaryCtaLink: "/services",
      image: "",
    },
    sections: [],
    faqs: [],
    ctaBanner: {
      enabled: true,
      heading: "Ready to Accelerate Global Compliance?",
      description: "Partner with NKB Regovanta for seamless regulatory approvals and quality excellence.",
      buttonText: "Schedule Consultation",
      buttonLink: "/contact",
    },
    customHtml: "",
  });
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [previewMode, setPreviewMode] = useState<"website" | "code" | "blocks">("website");

  // Interactive Full Code & HTML Editor State
  const [editableHtml, setEditableHtml] = useState<string>("");
  const [codeSearchQuery, setCodeSearchQuery] = useState("");
  const [codeReplaceQuery, setCodeReplaceQuery] = useState("");
  const [quickH1Input, setQuickH1Input] = useState("");
  const [isModalMaximized, setIsModalMaximized] = useState(false);
  const [previewHeight, setPreviewHeight] = useState<number>(800);
  const [codeScope, setCodeScope] = useState<"clean_body" | "full_document">("clean_body");
  const [cleanBodyHtml, setCleanBodyHtml] = useState<string>("");
  const [hasCustomOverride, setHasCustomOverride] = useState(false);
  const [hasContentEdits, setHasContentEdits] = useState(false);
  const codeTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const visualEditorRef = useRef<HTMLDivElement | null>(null);
  const previewIframeRef = useRef<HTMLIFrameElement | null>(null);

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
  const fetchSequenceRef = useRef<number>(0);
  const originalRouteDefaultsRef = useRef<{
    h1: string;
    title: string;
    description: string;
    canonical: string;
  }>({ h1: "", title: "", description: "", canonical: "" });

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

  const formatHtmlString = (html: string): string => {
    if (!html) return "";
    let formatted = "";
    let indent = 0;
    const tokens = html.replace(/>\s*</g, "><").match(/(<!--[\s\S]*?-->|<[^>]+>|[^<]+)/g) || [];

    for (const rawToken of tokens) {
      const token = rawToken.trim();
      if (!token) continue;

      if (token.startsWith("<!--")) {
        formatted += "\n" + "  ".repeat(indent) + token;
        continue;
      }

      const isTag = token.startsWith("<") && token.endsWith(">");
      if (isTag) {
        const isClosing = token.startsWith("</");
        const isSelfClosing =
          token.endsWith("/>") ||
          /^<(meta|link|img|br|hr|input|source|area|base|col|embed|param|track|wbr)/i.test(token);

        if (isClosing) {
          indent = Math.max(0, indent - 1);
          formatted += "\n" + "  ".repeat(indent) + token;
        } else if (isSelfClosing) {
          formatted += "\n" + "  ".repeat(indent) + token;
        } else {
          formatted += "\n" + "  ".repeat(indent) + token;
          indent++;
        }
      } else {
        formatted += "\n" + "  ".repeat(indent) + token;
      }
    }

    return formatted.trim();
  };

  const generateCleanPageTemplate = (page: PageRecord | null, customH1?: string): string => {
    const pageName = page?.name || "Page";
    const pageUrl = page?.url_path || "/";
    const finalH1 = customH1 || page?.h1 || page?.name || "Global Regulatory Compliance & Consulting";
    const finalDesc = page?.meta_description || "Specialized regulatory affairs, quality management systems (ISO 13485 / MDSAP), CDSCO licensing, and US FDA / EU MDR market clearance.";

    return `<!-- ==========================================================
     PAGE CONTENT & H1 TEMPLATE: ${pageName} (${pageUrl})
     Edit headings, copy, and layout sections below.
     Changes persist live to database & search engines.
     ========================================================== -->

<section class="hero-section py-14 px-6 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-8 md:p-12 mb-10 shadow-xl text-center">
  <div class="max-w-4xl mx-auto space-y-6">
    <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/20">
      NKB Regovanta Global Regulatory Advisory
    </span>

    <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
      ${finalH1}
    </h1>

    <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
      ${finalDesc}
    </p>

    <div class="pt-4 flex flex-wrap items-center justify-center gap-4">
      <a href="/contact" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg transition">
        Schedule Consultation &rarr;
      </a>
      <a href="/services" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition">
        Explore Services
      </a>
    </div>
  </div>
</section>

<!-- SECTION 1: Strategic Overview -->
<section class="overview-section max-w-5xl mx-auto py-8 px-4 space-y-6">
  <div class="border-b border-slate-200 pb-4">
    <h2 class="text-2xl sm:text-3xl font-bold text-slate-900">
      Comprehensive Regulatory Strategy &amp; Approvals
    </h2>
    <p class="mt-2 text-slate-600 leading-relaxed text-base">
      We deliver end-to-end regulatory submissions, technical documentation dossiers, and health authority representation across CDSCO India, US FDA, EU MDR/IVDR, and global markets.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
    <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900">Global Dossiers &amp; Filings</h3>
      <p class="text-sm text-slate-600 mt-2 leading-relaxed">
        Full technical file compilation, clinical evaluations, biocompatibility reviews, and Notified Body liaison.
      </p>
    </div>
    <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
      <h3 class="text-lg font-bold text-slate-900">Authorized Representation</h3>
      <p class="text-sm text-slate-600 mt-2 leading-relaxed">
        Indian Authorized Agent (MD-14/15), US FDA Agent, and UK Responsible Person (UKRP) legal market representation.
      </p>
    </div>
  </div>
</section>`;
  };

  const compileVisualContentToHtml = (content: PageVisualContent): string => {
    const parts: string[] = [];

    // 1. Hero Banner
    if (content.hero?.h1 || content.hero?.lead || content.hero?.badge) {
      const badge = content.hero.badge
        ? `\n    <div class="inline-flex items-center gap-1.5 rounded-full bg-blue-100/80 px-3.5 py-1 text-xs font-bold text-[#0b3a96] border border-blue-200">\n      <span>${content.hero.badge}</span>\n    </div>`
        : "";
      const h1 = content.hero.h1
        ? `\n    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">${content.hero.h1}</h1>`
        : "";
      const lead = content.hero.lead
        ? `\n    <p class="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">${content.hero.lead}</p>`
        : "";
      const primaryCta = content.hero.primaryCtaText
        ? `\n      <a href="${content.hero.primaryCtaLink || "/contact"}" class="inline-flex items-center gap-2 rounded-xl bg-[#0b3a96] px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-blue-700 transition">${content.hero.primaryCtaText} &rarr;</a>`
        : "";
      const secondaryCta = content.hero.secondaryCtaText
        ? `\n      <a href="${content.hero.secondaryCtaLink || "/services"}" class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50 transition">${content.hero.secondaryCtaText}</a>`
        : "";
      const ctas = (primaryCta || secondaryCta)
        ? `\n    <div class="flex flex-wrap items-center gap-3 pt-2">${primaryCta}${secondaryCta}\n    </div>`
        : "";
      const img = content.hero.image
        ? `\n    <div class="mt-8 rounded-2xl overflow-hidden border border-slate-200 shadow-xl max-w-2xl"><img src="${content.hero.image}" alt="${content.hero.h1 || "Banner"}" class="w-full h-auto object-cover" /></div>`
        : "";

      parts.push(`<section class="py-16 sm:py-24 bg-gradient-to-b from-blue-50/60 via-indigo-50/30 to-white border-b border-slate-100">\n  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6">${badge}${h1}${lead}${ctas}${img}\n  </div>\n</section>`);
    }

    // 2. Sections
    (content.sections || []).forEach((sec) => {
      if (sec.customHtml) {
        parts.push(sec.customHtml);
      } else if (sec.type === "two_col") {
        parts.push(`<section class="py-16 border-b border-slate-100">\n  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">\n    <div class="space-y-4">\n      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${sec.heading || ""}</h2>\n      <div class="text-slate-600 text-sm leading-relaxed">${sec.bodyHtml || ""}</div>\n    </div>\n    ${sec.image ? `<div class="rounded-2xl overflow-hidden border border-slate-200 shadow-lg"><img src="${sec.image}" alt="${sec.heading || ""}" class="w-full h-auto object-cover" /></div>` : ""}\n  </div>\n</section>`);
      } else if (sec.type === "features") {
        const bullets = (sec.bullets || []).map((b) => `\n      <div class="p-5 rounded-xl border border-slate-200 bg-white shadow-sm space-y-2"><h3 class="text-sm font-bold text-slate-900">${b}</h3></div>`).join("");
        parts.push(`<section class="py-16 border-b border-slate-100">\n  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">\n    <div><h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${sec.heading || ""}</h2>${sec.subheading ? `<p class="mt-2 text-slate-600 text-sm">${sec.subheading}</p>` : ""}</div>\n    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">${bullets}\n    </div>\n  </div>\n</section>`);
      } else if (sec.type === "stats") {
        const statsList = (sec.stats || []).map((s) => `\n      <div class="p-4 rounded-xl border border-slate-200 bg-slate-50 text-center"><div class="text-2xl font-black text-[#0b3a96]">${s.value}</div><div class="text-xs font-semibold text-slate-600 mt-1">${s.label}</div></div>`).join("");
        parts.push(`<section class="py-16 border-b border-slate-100">\n  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-center">\n    <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${sec.heading || ""}</h2>\n    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">${statsList}\n    </div>\n  </div>\n</section>`);
      } else {
        parts.push(`<section class="py-12 border-b border-slate-100">\n  <div class="mx-auto max-w-4xl px-4 space-y-4">\n    <h2 class="text-2xl font-extrabold text-slate-900">${sec.heading || ""}</h2>\n    <p class="text-slate-600 text-sm leading-relaxed">${sec.bodyHtml || sec.subheading || ""}</p>\n  </div>\n</section>`);
      }
    });

    // 3. CTA Banner
    if (content.ctaBanner?.enabled !== false && content.ctaBanner?.heading) {
      parts.push(`<section class="py-16 bg-[#0b3a96] text-white text-center">\n  <div class="mx-auto max-w-4xl px-4 space-y-4">\n    <h2 class="text-2xl sm:text-3xl font-bold">${content.ctaBanner.heading}</h2>\n    <p class="text-blue-100 text-sm max-w-xl mx-auto">${content.ctaBanner.description || ""}</p>\n    <div class="pt-2"><a href="${content.ctaBanner.buttonLink || "/contact"}" class="inline-flex items-center px-6 py-3 rounded-xl bg-white text-[#0b3a96] font-bold text-sm shadow hover:bg-blue-50 transition">${content.ctaBanner.buttonText || "Schedule Consultation"} &rarr;</a></div>\n  </div>\n</section>`);
    }

    return formatHtmlString(parts.join("\n\n"));
  };

  const parseRealPageToVisualContent = (
    doc: Document,
    page: PageRecord | null
  ): PageVisualContent => {
    try {
      const cloneDoc = doc.cloneNode(true) as Document;
      const mainEl =
        cloneDoc.querySelector("main") ||
        cloneDoc.querySelector("article") ||
        cloneDoc.body;

      if (!mainEl) {
        return {
          hero: {
            badge: "NKB Regovanta Global",
            h1: page?.h1 || page?.name || "",
            lead: page?.meta_description || "",
            primaryCtaText: "Contact Us",
            primaryCtaLink: "/contact",
            secondaryCtaText: "Explore Services",
            secondaryCtaLink: "/services",
            image: "",
          },
          sections: [],
          faqs: [],
          ctaBanner: {
            enabled: true,
            heading: "Ready to Accelerate Global Compliance?",
            description: "Partner with NKB Regovanta for seamless regulatory approvals and quality excellence.",
            buttonText: "Schedule Consultation",
            buttonLink: "/contact",
          },
        };
      }

      // Strip only scripts, noscript, iframes and router runtime attributes
      mainEl.querySelectorAll("script, noscript, iframe").forEach((el) => el.remove());
      mainEl.querySelectorAll("*").forEach((el) => {
        Array.from(el.attributes).forEach((attr) => {
          if (
            attr.name.startsWith("data-tsd-") ||
            attr.name.startsWith("data-state") ||
            attr.name === "data-rac" ||
            attr.name === "data-slot"
          ) {
            el.removeAttribute(attr.name);
          }
        });
      });

      // 1. Detected H1
      const detectedH1 =
        mainEl.querySelector("h1")?.textContent?.trim() ||
        doc.querySelector("h1")?.textContent?.trim() ||
        page?.h1 ||
        page?.name ||
        "";

      // 2. Hero banner details from first section or header
      const sections = Array.from(mainEl.querySelectorAll("section"));
      const firstSec = sections[0] || mainEl;

      const heroBadge =
        firstSec.querySelector("span.uppercase, p.uppercase, div.uppercase, [class*='rounded-full']")?.textContent?.trim() ||
        "Global Regulatory Advisory";

      const heroP =
        firstSec.querySelector("h1 ~ p, p")?.textContent?.trim() ||
        page?.meta_description ||
        "";

      const heroLinks = Array.from(firstSec.querySelectorAll("a, button"));
      const heroPrimary = heroLinks[0]
        ? {
            text: heroLinks[0].textContent?.trim() || "Contact Us",
            link: heroLinks[0].getAttribute("href") || "/contact",
          }
        : { text: "Contact Us", link: "/contact" };

      const heroSecondary = heroLinks[1]
        ? {
            text: heroLinks[1].textContent?.trim() || "Explore Services",
            link: heroLinks[1].getAttribute("href") || "/services",
          }
        : { text: "Explore Services", link: "/services" };

      const heroImg = firstSec.querySelector("img")?.getAttribute("src") || "";

      // 3. Parse Sections into Layout Blocks
      const parsedSections: PageSectionItem[] = [];

      sections.forEach((sec, sIdx) => {
        // Skip hero section if it's the first section containing the H1
        if (detectedH1 && sec.textContent?.includes(detectedH1) && sIdx === 0) {
          return;
        }

        const secId = `sec_${Date.now()}_${sIdx + 1}`;
        const secHeading = sec.querySelector("h2")?.textContent?.trim() || "";
        const secSub = sec.querySelector("h2 ~ p, p")?.textContent?.trim() || "";
        const secBadge = sec.querySelector("span.uppercase, p.uppercase, div.uppercase")?.textContent?.trim() || "";
        const rawSecHtml = formatHtmlString(sec.outerHTML.trim());

        // Check if section contains real extracted stats
        const statCandidateCols = Array.from(sec.querySelectorAll("div.flex-col, div.items-center, div.text-center"));
        const extractedStats: Array<{ value: string; label: string }> = [];

        statCandidateCols.forEach((col) => {
          const valEl = col.querySelector("p.font-bold, p.text-2xl, p.text-3xl, [class*='text-[2'], p.font-extrabold");
          if (valEl) {
            const valText = valEl.textContent?.trim() || "";
            if (valText && valText.length < 15 && (/\d+/i.test(valText) || /global/i.test(valText))) {
              const labelEls = Array.from(col.querySelectorAll("p:not(.font-bold), span"))
                .map((l) => l.textContent?.trim() || "")
                .filter((l) => l && l !== valText);
              const labelText = labelEls.join(" · ");
              if (!extractedStats.some((s) => s.value === valText)) {
                extractedStats.push({ value: valText, label: labelText || "Metric" });
              }
            }
          }
        });

        if (extractedStats.length >= 2) {
          if (!parsedSections.some((p) => p.type === "stats" && p.heading === secHeading)) {
            parsedSections.push({
              id: secId,
              type: "stats",
              heading: secHeading || "Key Track Record & Metrics",
              badge: secBadge || "Key Metrics",
              stats: extractedStats,
              customHtml: rawSecHtml,
            });
          }
          return;
        }

        // Check if features / capabilities grid with multiple h3 cards
        const h3Els = Array.from(sec.querySelectorAll("h3"));
        if (h3Els.length >= 2) {
          const bullets = h3Els.map((h) => h.textContent?.trim() || "").filter(Boolean).slice(0, 10);
          parsedSections.push({
            id: secId,
            type: "features",
            badge: secBadge || "Capabilities",
            heading: secHeading || "Core Solutions & Services",
            subheading: secSub || "",
            bullets,
            customHtml: rawSecHtml,
          });
          return;
        }

        // Check if two-column split with image
        const secImg = sec.querySelector("img")?.getAttribute("src");
        if (secImg && secHeading) {
          parsedSections.push({
            id: secId,
            type: "two_col",
            badge: secBadge || "Overview",
            heading: secHeading,
            bodyHtml: secSub || sec.querySelector("p")?.textContent?.trim() || "",
            image: secImg,
            imagePosition: "right",
            customHtml: rawSecHtml,
          });
          return;
        }

        // Standard content or custom layout block
        parsedSections.push({
          id: secId,
          type: secHeading ? "content" : "custom_html",
          badge: secBadge,
          heading: secHeading || `Section #${sIdx + 1}`,
          subheading: secSub,
          bodyHtml: sec.querySelector("p")?.textContent?.trim() || "",
          customHtml: rawSecHtml,
        });
      });

      // 4. Extract FAQs if present
      const faqItems: PageFaqItem[] = [];
      doc.querySelectorAll("details, [data-radix-collection-item], .faq-item, .accordion-item").forEach((el) => {
        const q = el.querySelector("summary, button, h3, h4, [class*='trigger']")?.textContent?.trim();
        const a = el.querySelector("p, [class*='content'], div")?.textContent?.trim();
        if (q && a && q.length < 150) {
          faqItems.push({ q, a });
        }
      });

      // 5. Bottom CTA Banner from last section
      const lastSec = sections[sections.length - 1];
      const lastHeading = lastSec?.querySelector("h2, h3")?.textContent?.trim();
      const lastBtn = lastSec?.querySelector("a, button");

      return {
        hero: {
          badge: heroBadge,
          h1: detectedH1,
          lead: heroP,
          primaryCtaText: heroPrimary.text,
          primaryCtaLink: heroPrimary.link,
          secondaryCtaText: heroSecondary.text,
          secondaryCtaLink: heroSecondary.link,
          image: heroImg,
        },
        sections: parsedSections,
        faqs: faqItems,
        ctaBanner: {
          enabled: true,
          heading: lastHeading || "Ready to Accelerate Global Compliance?",
          description: "Partner with NKB Regovanta for seamless regulatory approvals and quality excellence.",
          buttonText: lastBtn?.textContent?.trim() || "Schedule Consultation",
          buttonLink: lastBtn?.getAttribute("href") || "/contact",
        },
      };
    } catch (err) {
      console.warn("Failed to parse real page to visual content:", err);
      return {
        hero: {
          badge: "NKB Regovanta Global",
          h1: page?.h1 || page?.name || "",
          lead: page?.meta_description || "",
          primaryCtaText: "Contact Us",
          primaryCtaLink: "/contact",
          secondaryCtaText: "Explore Services",
          secondaryCtaLink: "/services",
          image: "",
        },
        sections: [],
        faqs: [],
        ctaBanner: {
          enabled: true,
          heading: "Ready to Accelerate Global Compliance?",
          description: "Partner with NKB Regovanta for seamless regulatory approvals.",
          buttonText: "Schedule Consultation",
          buttonLink: "/contact",
        },
      };
    }
  };

  const extractCleanBodyHtml = (
    doc: Document,
    page: PageRecord | null,
    detectedH1: string
  ): string => {
    try {
      const cloneDoc = doc.cloneNode(true) as Document;
      const mainEl =
        cloneDoc.querySelector("main") ||
        cloneDoc.querySelector("article") ||
        cloneDoc.body;

      if (!mainEl) {
        return generateCleanPageTemplate(page, detectedH1);
      }

      // Strip only scripts, noscript, and iframes — PRESERVE all SVGs, symbols, icons, and styles!
      mainEl
        .querySelectorAll("script, noscript, iframe")
        .forEach((el) => el.remove());

      // Strip internal TanStack / router attributes
      mainEl.querySelectorAll("*").forEach((el) => {
        Array.from(el.attributes).forEach((attr) => {
          if (
            attr.name.startsWith("data-tsd-") ||
            attr.name.startsWith("data-state") ||
            attr.name === "data-rac" ||
            attr.name === "data-slot"
          ) {
            el.removeAttribute(attr.name);
          }
        });
      });

      const inner = mainEl.innerHTML.trim();
      if (!inner || inner.length < 80) {
        return generateCleanPageTemplate(page, detectedH1);
      }

      const formatted = formatHtmlString(inner);
      return formatted.length > 50 ? formatted : generateCleanPageTemplate(page, detectedH1);
    } catch {
      return generateCleanPageTemplate(page, detectedH1);
    }
  };

  const extractH1FromCode = (code: string): string => {
    if (!code) return "";
    const match = code.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    if (!match || !match[1]) return "";
    return match[1].replace(/<[^>]+>/g, "").trim();
  };

  const handleCodeChange = (newCode: string) => {
    setHasContentEdits(true);
    setEditableHtml(newCode);
    const foundH1 = extractH1FromCode(newCode);
    if (foundH1) {
      setQuickH1Input(foundH1);
      setEditingPage((prev) => (prev ? { ...prev, h1: foundH1 } : null));
      setVisualContent((prev) => ({
        ...prev,
        hero: {
          ...prev.hero,
          h1: foundH1,
        },
        fullHtmlOverride: newCode,
      }));
    } else {
      setVisualContent((prev) => ({
        ...prev,
        fullHtmlOverride: newCode,
      }));
    }
  };

  const applyH1ToCode = (newH1: string) => {
    const trimmed = newH1.trim();
    if (!trimmed) return;
    let target = editableHtml || cleanBodyHtml || pageContent.htmlSource;
    if (!target) {
      target = generateCleanPageTemplate(editingPage, trimmed);
    } else if (/<h1[^>]*>[\s\S]*?<\/h1>/i.test(target)) {
      target = target.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/i, `<h1$1>${trimmed}</h1>`);
    } else {
      const bodyMatch = target.match(/<body[^>]*>/i);
      if (bodyMatch && bodyMatch.index !== undefined) {
        const insertIdx = bodyMatch.index + bodyMatch[0].length;
        target = target.slice(0, insertIdx) + `\n  <h1>${trimmed}</h1>` + target.slice(insertIdx);
      } else {
        target = `<h1>${trimmed}</h1>\n` + target;
      }
    }
    handleCodeChange(target);
    if (visualEditorRef.current) {
      const h1El = visualEditorRef.current.querySelector("h1");
      if (h1El) {
        h1El.textContent = trimmed;
      } else {
        visualEditorRef.current.innerHTML = target;
      }
    }
    toast.success(`H1 updated in code & visual page: "${trimmed}"`);
  };

  const handleCodeKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const textarea = e.currentTarget;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const val = textarea.value;
      const updated = val.substring(0, start) + "  " + val.substring(end);
      handleCodeChange(updated);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 2;
      }, 0);
    }
  };

  const insertCodeSnippet = (snippet: string) => {
    const textarea = codeTextareaRef.current;
    if (!textarea) {
      handleCodeChange((editableHtml || cleanBodyHtml || "") + "\n" + snippet);
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const current = editableHtml || cleanBodyHtml || "";
    const updated = current.substring(0, start) + snippet + current.substring(end);
    handleCodeChange(updated);
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + snippet.length, start + snippet.length);
    }, 50);
    toast.success("Snippet inserted into code!");
  };

  const handleInsertSection = (template: SectionTemplateItem) => {
    if (activeTab === "code" && codeTextareaRef.current) {
      insertCodeSnippet("\n" + template.html + "\n");
      setIsAddSectionModalOpen(false);
      return;
    }

    const currentDom = visualEditorRef.current?.innerHTML || editableHtml || "";
    const updatedHtml = currentDom ? `${currentDom}\n\n${template.html}` : template.html;

    if (visualEditorRef.current) {
      visualEditorRef.current.innerHTML = updatedHtml;
      setTimeout(() => {
        visualEditorRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 120);
    }

    handleCodeChange(updatedHtml);
    setIsAddSectionModalOpen(false);
    toast.success(`"${template.name}" added to page! Click any text in it to edit directly.`);
  };

  const formatHtmlCode = () => {
    const target = editableHtml || cleanBodyHtml;
    if (!target) return;
    try {
      const formatted = formatHtmlString(target);
      handleCodeChange(formatted);
      toast.success("HTML code formatted!");
    } catch {
      toast.error("Could not format HTML");
    }
  };

  const handleReplaceAllInCode = () => {
    if (!codeSearchQuery) return;
    const target = editableHtml || cleanBodyHtml || pageContent.htmlSource;
    try {
      const escaped = codeSearchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const regex = new RegExp(escaped, "gi");
      const matches = target.match(regex);
      if (!matches || matches.length === 0) {
        toast.error(`"${codeSearchQuery}" not found in code`);
        return;
      }
      const updated = target.replace(regex, codeReplaceQuery);
      handleCodeChange(updated);
      toast.success(`Replaced ${matches.length} occurrence(s) in code!`);
    } catch {
      toast.error("Replace failed");
    }
  };

  const handleScopeChange = (newScope: "clean_body" | "full_document") => {
    setCodeScope(newScope);
    if (newScope === "clean_body") {
      const target =
        cleanBodyHtml ||
        generateCleanPageTemplate(editingPage, quickH1Input || editingPage?.h1 || "");
      handleCodeChange(target);
      toast.info("Switched to Clean Semantic Content HTML");
    } else {
      if (pageContent.htmlSource) {
        handleCodeChange(pageContent.htmlSource);
        toast.info("Switched to Raw Full Document HTML");
      } else {
        toast.info("Raw server HTML is still loading...");
      }
    }
  };

  const smartPopulateSections = () => {
    const newSections: PageSectionItem[] = [];

    const h2s = pageContent.headings.filter((h) => h.level === "h2");
    if (h2s.length > 0) {
      newSections.push({
        id: "sec_" + Date.now() + "_1",
        type: "two_col",
        badge: "Strategic Overview",
        heading: h2s[0]?.text || "Comprehensive Compliance Services",
        bodyHtml:
          pageContent.paragraphs[0] ||
          "We guide medical technology and life sciences innovators through every phase of global regulatory approval and quality compliance.",
        image: "/assets/brain/medtech_reg_lab.jpg",
        imageAlt: "Regulatory Operations",
        imagePosition: "right",
      });
    }

    newSections.push({
      id: "sec_" + Date.now() + "_2",
      type: "features",
      badge: "Core Capabilities",
      heading: h2s[1]?.text || "Global Market Access Solutions",
      subheading:
        pageContent.paragraphs[1] ||
        "Comprehensive technical documentation, Notified Body liaison, and health authority registrations worldwide.",
      bullets: [
        "CDSCO Manufacturing, Import (MD-14/15) & Wholesale Licenses",
        "US FDA 510(k), De Novo, Q-Submissions & Establishment Registration",
        "EU MDR & IVDR CE Technical Documentation Remediation",
        "ISO 13485 & MDSAP Quality Management System Audits",
      ],
    });

    newSections.push({
      id: "sec_" + Date.now() + "_3",
      type: "stats",
      heading: "Proven Track Record Worldwide",
      stats: [
        { value: "150+", label: "Global Clearance Submissions" },
        { value: "99.4%", label: "First-Pass Acceptance Rate" },
        { value: "35+", label: "Target Jurisdictions" },
        { value: "12+ Yrs", label: "Average Regulatory Experience" },
      ],
    });

    const autoVisual = pageContent.htmlSource
      ? parseRealPageToVisualContent(new DOMParser().parseFromString(pageContent.htmlSource, "text/html"), editingPage)
      : null;

    if (autoVisual && autoVisual.sections && autoVisual.sections.length > 0) {
      const parsedSections = autoVisual.sections;
      const parsedHero = autoVisual.hero;
      const parsedFaqs = autoVisual.faqs;
      const parsedCta = autoVisual.ctaBanner;
      setVisualContent((prev) => ({
        ...prev,
        hero: {
          ...prev.hero,
          ...parsedHero,
        },
        sections: parsedSections,
        faqs: parsedFaqs && parsedFaqs.length > 0 ? parsedFaqs : (prev.faqs || []),
        ctaBanner: parsedCta || prev.ctaBanner,
      }));
      setHasContentEdits(true);
      toast.success(`Auto-populated ${parsedSections.length} sections from live page!`);
    } else {
      toast.info("No layout sections found to auto-populate.");
    }
  };

  const handleResetSeoToDefaults = () => {
    const defaults = originalRouteDefaultsRef.current;
    if (!defaults || (!defaults.title && !defaults.description && !defaults.h1)) {
      toast.info("Original code template defaults not detected yet.");
      return;
    }
    setEditingPage((prev) =>
      prev
        ? {
            ...prev,
            seo_title: defaults.title || prev.seo_title,
            meta_description: defaults.description || prev.meta_description,
            h1: defaults.h1 || prev.h1,
            canonical_url: defaults.canonical || prev.canonical_url,
          }
        : null
    );
    if (defaults.h1) setQuickH1Input(defaults.h1);
    toast.success("Restored SEO Title, Meta Description & H1 from original React route code!");
  };

  const handleRevertToOriginal = async () => {
    if (!editingPage) return;
    const ok = window.confirm(
      `Revert "${editingPage.name}" to the original code-backed React component? This will completely clear custom block/code overrides and restore default React templates and route SEO defaults.`
    );
    if (!ok) return;

    try {
      // 1. Delete dynamic content override from database, localStorage, and broadcast to live site
      await pageContentService.deleteContent(editingPage.url_path);

      // 2. Fetch fresh defaults from code-backed component
      const defaults = originalRouteDefaultsRef.current;
      const originalH1 = defaults?.h1 || "";
      const originalTitle = defaults?.title || "";
      const originalDesc = defaults?.description || "";
      const originalCanonical = defaults?.canonical || "";

      // 3. Reset database record for page H1
      await supabase
        .from("pages")
        .update({
          h1: originalH1 || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", editingPage.id);

      // 4. Reset or delete seo_meta row in database so route code <head> / defaults take effect
      if (originalTitle || originalDesc) {
        await supabase.from("seo_meta").upsert(
          {
            target_url: editingPage.url_path,
            page_id: editingPage.id,
            seo_title: originalTitle,
            meta_description: originalDesc,
            canonical_url: originalCanonical || `https://www.nkbregovanta.com${editingPage.url_path}`,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "target_url" }
        );
      } else {
        await supabase.from("seo_meta").delete().eq("target_url", editingPage.url_path);
      }

      // 5. Broadcast SEO change to live site immediately
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("nkb_seo_changed"));
      }

      // 6. Update local state
      setHasCustomOverride(false);
      setHasContentEdits(false);
      setQuickH1Input(originalH1);
      setEditingPage((prev) =>
        prev
          ? {
              ...prev,
              h1: originalH1,
              seo_title: originalTitle || prev.seo_title,
              meta_description: originalDesc || prev.meta_description,
              canonical_url: originalCanonical || prev.canonical_url,
            }
          : null
      );

      // 7. Update pages table list state
      setPages((prev) =>
        prev.map((p) =>
          p.id === editingPage.id
            ? {
                ...p,
                h1: originalH1,
                seo_title: originalTitle || p.seo_title,
                meta_description: originalDesc || p.meta_description,
                canonical_url: originalCanonical || p.canonical_url,
              }
            : p
        )
      );

      toast.success("Successfully reverted to original React template & restored SEO defaults!");
      await fetchPageData(editingPage.url_path, editingPage, null);
    } catch (err: any) {
      toast.error("Revert notice: " + (err.message || "Failed to revert"));
    }
  };

  const handleTabSwitch = (newTab: typeof activeTab) => {
    if (activeTab === "visual" && visualEditorRef.current) {
      // Capture live DOM content edited in visual canvas
      const currentDom = visualEditorRef.current.innerHTML;
      if (currentDom && currentDom.trim().length > 50) {
        setEditableHtml(currentDom);
        const foundH1 = extractH1FromCode(currentDom);
        if (foundH1) setQuickH1Input(foundH1);
      }
    } else if (newTab === "visual" && activeTab === "code") {
      const foundH1 = extractH1FromCode(editableHtml);
      if (foundH1) setQuickH1Input(foundH1);
      if (visualEditorRef.current && editableHtml) {
        visualEditorRef.current.innerHTML = editableHtml;
      }
    }
    setActiveTab(newTab);
  };

  useEffect(() => {
    if (visualEditorRef.current && activeTab === "visual") {
      const targetHtml = editableHtml || cleanBodyHtml || pageContent.htmlSource;
      if (targetHtml && targetHtml.length > 50 && (!visualEditorRef.current.innerHTML || visualEditorRef.current.innerHTML.trim().length < 50)) {
        visualEditorRef.current.innerHTML = targetHtml;
      }
    }
  }, [activeTab, editableHtml, cleanBodyHtml, pageContent.htmlSource]);

  const fetchPageData = async (
    urlPath: string,
    targetPage?: PageRecord | null,
    existingContent?: PageVisualContent | null
  ) => {
    const currentSeq = ++fetchSequenceRef.current;
    setPageContent((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const res = await fetch(urlPath);
      if (currentSeq !== fetchSequenceRef.current) return;
      const html = await res.text();
      if (currentSeq !== fetchSequenceRef.current) return;

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
      const detectedH1 = decodeHtmlEntities(doc.querySelector("h1")?.textContent?.trim() || "");
      const detectedTitle = decodeHtmlEntities(doc.querySelector("title")?.textContent?.trim() || "");
      const detectedDesc = decodeHtmlEntities(doc.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() || "");
      const detectedCanonical = doc.querySelector('link[rel="canonical"]')?.getAttribute("href")?.trim() || "";

      originalRouteDefaultsRef.current = {
        h1: detectedH1,
        title: detectedTitle,
        description: detectedDesc,
        canonical: detectedCanonical,
      };

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

      const effectivePage = targetPage || editingPage;

      // Extract real clean page HTML preserving all SVGs, icons, and styles!
      const cleanHtml = extractCleanBodyHtml(doc, effectivePage, detectedH1);
      setCleanBodyHtml(cleanHtml);

      // Check whether existing custom override exists
      const existing = existingContent !== undefined
        ? existingContent
        : (effectivePage ? await pageContentService.getContent(effectivePage.url_path) : null);

      const hasOverride = !!(existing && (existing.sections?.length || existing.fullHtmlOverride));
      setHasCustomOverride(hasOverride);

      if (!hasOverride) {
        setEditableHtml(cleanHtml);
        const autoVisual = parseRealPageToVisualContent(doc, effectivePage);
        setVisualContent(autoVisual);
        setQuickH1Input(autoVisual.hero?.h1 || detectedH1 || effectivePage?.h1 || "");
      } else {
        if (existing?.fullHtmlOverride) {
          setEditableHtml(existing.fullHtmlOverride);
        } else {
          setEditableHtml(cleanHtml);
        }
        if (existing?.sections?.length) {
          setVisualContent(existing);
        }
        setQuickH1Input(existing?.hero?.h1 || detectedH1 || effectivePage?.h1 || "");
      }
    } catch (err: any) {
      if (currentSeq !== fetchSequenceRef.current) return;
      setPageContent((prev) => ({
        ...prev,
        loading: false,
        error: err.message || "Failed to load live page content",
      }));
    }
  };

  const openEditor = async (page: PageRecord) => {
    setEditingPage({ ...page });
    setOldSlug(page.slug);
    setActiveTab("visual");
    setPreviewMode("website");
    setHasContentEdits(false);

    // Fetch existing dynamic content for this URL
    const existing = await pageContentService.getContent(page.url_path);
    const hasOverride = !!(existing && (existing.sections?.length || existing.fullHtmlOverride));
    setHasCustomOverride(hasOverride);

    if (hasOverride && existing) {
      setVisualContent(existing);
      const code = existing.fullHtmlOverride || existing.customHtml || "";
      setEditableHtml(code);
      setCleanBodyHtml(code);
      setQuickH1Input(existing.hero?.h1 || page.h1 || extractH1FromCode(code) || "");
    } else {
      setQuickH1Input(page.h1 || "");
    }

    // Single graceful page inspection fetch
    await fetchPageData(page.url_path, page, existing);
  };

  const updateHero = (field: keyof NonNullable<PageVisualContent["hero"]>, val: string) => {
    setHasContentEdits(true);
    setVisualContent((prev) => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: val,
      },
    }));
    if (field === "h1") {
      setEditingPage((prev) => (prev ? { ...prev, h1: val } : null));
    }
  };

  const addSection = (type: PageSectionItem["type"]) => {
    setHasContentEdits(true);
    const newId = "sec_" + Date.now();
    let newSec: PageSectionItem;
    if (type === "two_col") {
      newSec = {
        id: newId,
        type: "two_col",
        badge: "Strategic Advisory",
        heading: "Expert Medical & Regulatory Consulting",
        bodyHtml: "We provide end-to-end consulting for medical devices, pharmaceuticals, and diagnostics. Our global experts ensure rapid approvals across CDSCO, FDA, and EU MDR.",
        image: "/assets/brain/medtech_reg_lab.jpg",
        imageAlt: "Consulting Operations",
        imagePosition: "right",
      };
    } else if (type === "features") {
      newSec = {
        id: newId,
        type: "features",
        badge: "Our Capabilities",
        heading: "Comprehensive Regulatory Solutions",
        subheading: "Everything you need to bring your healthcare innovation to market efficiently and securely.",
        bullets: [
          "End-to-End CDSCO Licensing & Manufacturing Audits",
          "US FDA 510(k), De Novo & Premarket Approvals",
          "EU MDR & IVDR Technical Documentation & Notified Body Liaison",
          "ISO 13485 & MDSAP Quality Management System Certification",
        ],
      };
    } else if (type === "stats") {
      newSec = {
        id: newId,
        type: "stats",
        heading: "Proven Track Record Worldwide",
        stats: [
          { value: "150+", label: "Successful Global Submissions" },
          { value: "99.4%", label: "First-Pass Clearance Rate" },
          { value: "35+", label: "Target Countries Covered" },
          { value: "12+ Yrs", label: "Average Regulatory Experience" },
        ],
      };
    } else if (type === "custom_html") {
      newSec = {
        id: newId,
        type: "custom_html",
        heading: "Custom Content Block",
        customHtml: "<div class=\"p-6 rounded-2xl bg-slate-900 text-white text-center\"><h3 class=\"text-xl font-bold\">Custom Content Block</h3><p class=\"mt-2 text-slate-300 text-sm\">Add any custom layout, embed form, or widget here.</p></div>",
      };
    } else {
      newSec = {
        id: newId,
        type: "content",
        badge: "Overview",
        heading: "Detailed Overview & Strategic Value",
        subheading: "Key information regarding regulatory frameworks and compliance timelines.",
        bodyHtml: "Medical device and pharmaceutical compliance requires proactive gap assessments, rigorous risk management under ISO 14971, and synchronized regulatory submissions.",
        bullets: [
          "Accelerated timelines through structured pre-submission meetings",
          "Complete technical documentation dossiers and clinical evaluations",
          "Post-market surveillance and vigilance management",
        ],
      };
    }

    setVisualContent((prev) => ({
      ...prev,
      sections: [...(prev.sections || []), newSec],
    }));
  };

  const updateSection = (index: number, updated: Partial<PageSectionItem>) => {
    setHasContentEdits(true);
    setVisualContent((prev) => {
      const copy = [...(prev.sections || [])];
      if (!copy[index]) return prev;
      copy[index] = { ...copy[index], ...updated } as PageSectionItem;
      return { ...prev, sections: copy };
    });
  };

  const removeSection = (index: number) => {
    setHasContentEdits(true);
    setVisualContent((prev) => {
      const copy = [...(prev.sections || [])];
      copy.splice(index, 1);
      return { ...prev, sections: copy };
    });
  };

  const moveSection = (index: number, direction: "up" | "down") => {
    setHasContentEdits(true);
    setVisualContent((prev) => {
      const copy = [...(prev.sections || [])];
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= copy.length) return prev;
      const cur = copy[index];
      const target = copy[targetIndex];
      if (!cur || !target) return prev;
      copy[index] = target;
      copy[targetIndex] = cur;
      return { ...prev, sections: copy };
    });
  };

  const addFaq = () => {
    setHasContentEdits(true);
    setVisualContent((prev) => ({
      ...prev,
      faqs: [
        ...(prev.faqs || []),
        {
          q: "What is the timeline for regulatory clearance?",
          a: "Clearance timelines vary by classification and jurisdiction. CDSCO typically requires 3-6 months, US FDA 510(k) takes 90-120 days, and EU MDR depends on Notified Body capacity.",
        },
      ],
    }));
  };

  const updateFaq = (index: number, field: "q" | "a", val: string) => {
    setHasContentEdits(true);
    setVisualContent((prev) => {
      const copy = [...(prev.faqs || [])];
      const item = copy[index];
      if (!item) return prev;
      copy[index] = { ...item, [field]: val };
      return { ...prev, faqs: copy };
    });
  };

  const removeFaq = (index: number) => {
    setHasContentEdits(true);
    setVisualContent((prev) => {
      const copy = [...(prev.faqs || [])];
      copy.splice(index, 1);
      return { ...prev, faqs: copy };
    });
  };

  useEffect(() => {
    if (pages.length === 0) return;
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
    const filterParam = params.get("filter");
    const editParam = params.get("edit");

    if (searchParam) {
      setSearch(searchParam);
    }
    if (filterParam) {
      if (filterParam === "missing-h1" || filterParam === "missing_h1") {
        setStatusFilter("missing_h1");
      } else if (filterParam === "missing-canonical" || filterParam === "missing_canonical") {
        setStatusFilter("missing_canonical");
      } else if (filterParam === "missing-title" || filterParam === "missing-desc" || filterParam === "missing") {
        setStatusFilter("missing");
      } else if (["good", "warning"].includes(filterParam)) {
        setStatusFilter(filterParam);
      }
    }
    if (editParam) {
      const match = pages.find((p) => p.url_path === editParam || p.slug === editParam || p.id === editParam);
      if (match) {
        openEditor(match);
      }
    }
  }, [pages]);

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
      const effectiveH1 = decodeHtmlEntities(
        quickH1Input.trim() ||
        extractH1FromCode(editableHtml) ||
        visualContent.hero?.h1?.trim() ||
        editingPage.h1 ||
        ""
      ) || null;

      // 2. Update page record
      const { error: pageErr } = await supabase
        .from("pages")
        .update({
          name: editingPage.name,
          slug: editingPage.slug,
          status: editingPage.status,
          h1: effectiveH1,
          updated_at: new Date().toISOString(),
        })
        .eq("id", editingPage.id);

      if (pageErr) throw pageErr;

      // 3. Format SEO title with suffix if toggled
      let finalTitle = decodeHtmlEntities(editingPage.seo_title || "");
      if (appendSuffix && finalTitle && !finalTitle.includes("NKB Regovanta")) {
        finalTitle = `${finalTitle} | NKB Regovanta`;
      }
      const finalDesc = decodeHtmlEntities(editingPage.meta_description || "");

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

      // 5. Persist visual page content to database and sync Google FAQ Schema ONLY if custom layout override is enabled and content was edited
      // 5. Persist live HTML page content to database if user made edits or custom override is active
      const latestHtml = visualEditorRef.current?.innerHTML || editableHtml;
      const shouldSaveContent = (hasContentEdits || hasCustomOverride) && Boolean(latestHtml && latestHtml.trim().length > 50);

      if (shouldSaveContent) {
        const contentRes = await pageContentService.saveContent(editingPage.url_path, {
          hero: {
            ...visualContent.hero,
            h1: effectiveH1 || "",
          },
          contentMode: "code",
          fullHtmlOverride: latestHtml,
          customHtml: latestHtml,
          updated_at: new Date().toISOString(),
        });

        if (!contentRes.success) {
          toast.warning("SEO saved, but dynamic content update had a notice: " + contentRes.error);
        } else {
          setHasCustomOverride(true);
          setHasContentEdits(false);
          setEditableHtml(latestHtml);
        }
      }

      // 6. Create 301 redirect if requested
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

      // Notify live site of SEO update
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("nkb_seo_changed"));
      }

      toast.success("Page content and SEO metadata saved live to database!");
      setEditingPage(null);
      setShowRedirectPrompt(false);
      loadPages();
    } catch (err: any) {
      toast.error("Failed to save: " + err.message);
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
      if (statusFilter === "missing_h1" && (Boolean(page.h1?.trim()) || page.status !== "published")) return false;
      if (statusFilter === "missing_canonical" && (Boolean(page.canonical_url?.trim()) || page.status !== "published" || !page.is_in_sitemap)) return false;

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

  const codeLinesCount = useMemo(() => {
    const text = editableHtml || pageContent.htmlSource;
    if (!text) return 1;
    return text.split("\n").length;
  }, [editableHtml, pageContent.htmlSource]);

  const codeLinesNumbers = useMemo(() => {
    const count = codeLinesCount;
    return Array.from({ length: Math.min(count, 3000) }, (_, i) => i + 1);
  }, [codeLinesCount]);

  const detectedCodeH1 = useMemo(() => {
    return extractH1FromCode(editableHtml || pageContent.htmlSource);
  }, [editableHtml, pageContent.htmlSource]);

  const previewHtmlDoc = useMemo(() => {
    const code = editableHtml || pageContent.htmlSource;
    if (!code) {
      return "<!DOCTYPE html><html><body style='font-family:sans-serif;padding:40px;text-align:center;color:#64748b;'><h3>No Code Available</h3><p>Enter HTML code in the Code Editor tab to preview it here.</p></body></html>";
    }
    if (code.includes("<html") || code.includes("<!DOCTYPE")) {
      return code;
    }
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${editingPage?.name || "Page Preview"}</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; }
    h1 { font-size: 2.25rem; font-weight: 800; line-height: 1.2; color: #0f172a; margin-bottom: 1rem; }
    h2 { font-size: 1.75rem; font-weight: 700; color: #1e293b; margin-top: 2rem; margin-bottom: 0.75rem; }
    h3 { font-size: 1.35rem; font-weight: 600; color: #334155; margin-top: 1.5rem; margin-bottom: 0.5rem; }
    p { font-size: 1rem; line-height: 1.7; color: #475569; margin-bottom: 1rem; }
  </style>
</head>
<body class="bg-white text-slate-800 p-6 md:p-12 max-w-5xl mx-auto">
  ${code}
</body>
</html>`;
  }, [editableHtml, pageContent.htmlSource, editingPage?.name]);

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
            <option value="missing_h1">Issue: Missing H1 Heading</option>
            <option value="missing_canonical">Issue: Missing Canonical</option>
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
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs transition-all ${
            isModalMaximized ? "p-0" : "p-2 sm:p-4"
          }`}
        >
          <div
            className={`relative flex flex-col border border-slate-200 bg-white shadow-2xl transition-all duration-200 overflow-hidden ${
              isModalMaximized
                ? "w-screen h-screen rounded-none"
                : "w-full max-w-[96vw] xl:max-w-7xl h-[94vh] rounded-2xl"
            }`}
          >
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 px-6 py-3.5 bg-slate-50 shrink-0 gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-blue-700 font-mono">
                  <span>{editingPage.url_path}</span>
                  <a
                    href={editingPage.url_path}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-900 inline-flex items-center gap-1"
                    title="Open live URL in new tab"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  {hasCustomOverride ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-bold text-amber-800 border border-amber-300">
                      <Sparkles className="h-3 w-3 text-amber-600" />
                      <span>Custom Override Active</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800 border border-emerald-200">
                      <Check className="h-3 w-3 text-emerald-600" />
                      <span>Original React Route (Pre-Populated)</span>
                    </span>
                  )}
                  {hasContentEdits && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800 border border-blue-200">
                      Unsaved Edits
                    </span>
                  )}
                </div>
                <h2 className="text-base font-bold text-slate-900 mt-0.5">
                  Editing Page &amp; SEO: {editingPage.name}
                </h2>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {hasCustomOverride && (
                  <button
                    type="button"
                    onClick={handleRevertToOriginal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 shadow-2xs transition"
                    title="Remove custom block/code override and restore original code-backed React route"
                  >
                    <RotateCcw className="h-3.5 w-3.5 text-rose-600" />
                    <span>Revert to Original React Page</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsModalMaximized((prev) => !prev)}
                  className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition"
                  title={isModalMaximized ? "Restore Modal Size" : "Maximize Fullscreen"}
                >
                  {isModalMaximized ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setEditingPage(null)}
                  className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition"
                  title="Close Modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Noindex Alert Banner */}
            {editingPage.robots_index === "noindex" && (
              <div className="bg-rose-50 border-b border-rose-200 px-6 py-2.5 text-xs text-rose-800 flex items-center gap-2 font-medium shrink-0">
                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                <span>This page is currently set to NOINDEX and will be excluded from search engines and XML sitemaps.</span>
              </div>
            )}

            {/* Main Tabs & Content */}
            <div className="p-6 space-y-5 flex-1 min-h-0 overflow-y-auto">
              {/* Tabs Bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
                {(
                  [
                    { id: "visual", label: "Visual Page Builder", icon: Sparkles },
                    { id: "code", label: "Full Code & H1 Editor", icon: Code2 },
                    { id: "preview", label: "Full Live Preview", icon: Monitor },
                    { id: "seo", label: "SEO Meta", icon: Globe },
                    { id: "content", label: "DOM Inspector", icon: FileText },
                    { id: "social", label: "Social Cards", icon: Share2 },
                    { id: "schema", label: "Schema", icon: Layers },
                    { id: "basic", label: "Page Info", icon: ShieldCheck },
                  ] as const
                ).map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabSwitch(tab.id)}
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

              {/* ── Tab: Live Full Preview ───────────────────────── */}
              {activeTab === "preview" && (
                <div className="space-y-4">
                  {/* Preview Toolbar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-100 p-3 rounded-xl border border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-2xs">
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Live Preview (Exact Website Styles, Fonts &amp; SVGs)</span>
                      </div>
                    </div>

                    {/* Viewport Devices, Height Presets & Actions */}
                    <div className="flex flex-wrap items-center gap-2">
                      {/* Height Presets */}
                      <div className="inline-flex rounded-lg bg-white p-1 border border-slate-200 shadow-2xs items-center gap-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase px-1">Height:</span>
                        {[650, 800, 1000].map((h) => (
                          <button
                            key={h}
                            type="button"
                            onClick={() => setPreviewHeight(h)}
                            className={`rounded px-2 py-0.5 text-xs font-bold transition ${
                              previewHeight === h
                                ? "bg-blue-100 text-blue-800 font-extrabold"
                                : "text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {h}px
                          </button>
                        ))}
                      </div>

                      <div className="inline-flex rounded-lg bg-white p-1 border border-slate-200 shadow-2xs">
                        <button
                          type="button"
                          onClick={() => setPreviewDevice("desktop")}
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                            previewDevice === "desktop"
                              ? "bg-slate-800 text-white shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                          title="Desktop View"
                        >
                          <Monitor className="h-3.5 w-3.5" />
                          <span>Desktop</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewDevice("tablet")}
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                            previewDevice === "tablet"
                              ? "bg-slate-800 text-white shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                          title="Tablet (768px)"
                        >
                          <Tablet className="h-3.5 w-3.5" />
                          <span>Tablet</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPreviewDevice("mobile")}
                          className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                            previewDevice === "mobile"
                              ? "bg-slate-800 text-white shadow-2xs"
                              : "text-slate-600 hover:text-slate-900"
                          }`}
                          title="Mobile (375px)"
                        >
                          <Smartphone className="h-3.5 w-3.5" />
                          <span>Mobile</span>
                        </button>
                      </div>

                      <a
                        href={editingPage.url_path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-blue-700 hover:bg-blue-50 transition shadow-2xs"
                        title="Open in new window"
                      >
                        <span>Open Live URL</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>

                  {/* Live Canvas Mockup */}
                  <div
                    className="rounded-2xl border border-slate-300 bg-slate-200/90 p-3 sm:p-5 overflow-x-auto flex justify-center transition-all"
                    style={{ minHeight: `${previewHeight + 60}px` }}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 border border-slate-300 flex flex-col ${
                        previewDevice === "desktop"
                          ? "w-full"
                          : previewDevice === "tablet"
                          ? "w-[768px] max-w-full"
                          : "w-[375px] max-w-full"
                      }`}
                    >
                      {/* Browser Mockup Top Bar */}
                      <div className="bg-slate-100 border-b border-slate-200 px-4 py-2 flex items-center justify-between gap-2 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <div className="bg-white rounded-md px-3 py-0.5 text-[11px] font-mono text-slate-600 border border-slate-200 truncate max-w-md flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">https://</span>
                          <span>nkbregovanta.com{editingPage.url_path}</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                          Accurate Site Preview
                        </div>
                      </div>

                      {/* Main Preview Screen */}
                      <div
                        className="w-full bg-white overflow-y-auto relative flex flex-col"
                        style={{ height: `${previewHeight}px`, minHeight: `${previewHeight}px` }}
                      >
                        {/* Realistic Site Header Mockup */}
                        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-3 flex items-center justify-between shrink-0 shadow-2xs">
                          <div className="flex items-center gap-2.5">
                            <span className="font-extrabold text-base text-[#0b3a96] tracking-tight">NKB Regovanta&reg;</span>
                            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{editingPage.url_path}</span>
                          </div>
                          <div className="flex items-center gap-5 text-xs font-semibold text-slate-600">
                            <span className="hover:text-blue-700 transition cursor-pointer">Services</span>
                            <span className="hover:text-blue-700 transition cursor-pointer">Industries</span>
                            <span className="hover:text-blue-700 transition cursor-pointer">Insights</span>
                            <span className="hover:text-blue-700 transition cursor-pointer">Contact</span>
                            <span className="rounded-xl bg-[#0b3a96] text-white px-3.5 py-1.5 text-xs font-bold shadow-xs hover:bg-blue-700 transition cursor-pointer">Get in Touch &rarr;</span>
                          </div>
                        </header>

                        {/* Page Content Rendered with True Styles & SVGs */}
                        <div className="flex-1">
                          <DynamicPageRenderer
                            content={{
                              ...visualContent,
                              contentMode: visualContent.contentMode || "visual",
                              fullHtmlOverride: visualContent.fullHtmlOverride || editableHtml,
                            }}
                            isPreview={true}
                          />
                        </div>

                        {/* Realistic Site Footer Mockup */}
                        <footer className="bg-[#0b2545] text-slate-400 py-10 px-6 text-xs text-center border-t border-slate-800 space-y-3 shrink-0">
                          <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300 font-medium">
                            <span>ISO 13485 Compliance</span>
                            <span>&middot;</span>
                            <span>US FDA 510(k)</span>
                            <span>&middot;</span>
                            <span>CDSCO MD-14/15</span>
                            <span>&middot;</span>
                            <span>EU MDR / IVDR</span>
                          </div>
                          <p className="text-white font-bold text-sm">NKB Regovanta Solutions Pvt. Ltd.</p>
                          <p className="text-[11px] text-slate-400">&copy; {new Date().getFullYear()} NKB Regovanta. Regulatory. Quality. Manufacturing. Market Access.</p>
                        </footer>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <form id="seo-page-form" onSubmit={handleSavePage} className="space-y-5">
                {/* ── Tab: Live In-Place Visual Page Editor ──────────── */}
                {activeTab === "visual" && (
                  <div className="space-y-4">
                    {/* Floating Visual Action Toolbar */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 bg-slate-900 text-white p-3.5 rounded-2xl shadow-md border border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/30 text-blue-300 text-xs font-bold border border-blue-500/30">
                          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                          <span>Live In-Place Visual Editor</span>
                        </div>
                        <span className="hidden sm:inline-block text-xs text-slate-300 font-medium">
                          Click any text on the page below to edit directly.
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {/* Rich Text Format Helpers */}
                        <div className="inline-flex rounded-lg bg-slate-800 p-1 border border-slate-700 shadow-2xs items-center gap-0.5">
                          <button
                            type="button"
                            onClick={() => document.execCommand("bold")}
                            className="rounded px-2.5 py-1 text-slate-300 hover:bg-slate-700 hover:text-white transition font-bold text-xs"
                            title="Bold Selection (Ctrl+B)"
                          >
                            B
                          </button>
                          <button
                            type="button"
                            onClick={() => document.execCommand("italic")}
                            className="rounded px-2.5 py-1 text-slate-300 hover:bg-slate-700 hover:text-white transition italic text-xs"
                            title="Italic Selection (Ctrl+I)"
                          >
                            I
                          </button>
                          <button
                            type="button"
                            onClick={() => document.execCommand("underline")}
                            className="rounded px-2.5 py-1 text-slate-300 hover:bg-slate-700 hover:text-white transition underline text-xs"
                            title="Underline Selection (Ctrl+U)"
                          >
                            U
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              const url = prompt("Enter hyperlink URL (e.g. /contact or https://...):");
                              if (url) document.execCommand("createLink", false, url);
                            }}
                            className="rounded px-2 py-1 text-slate-300 hover:bg-slate-700 hover:text-white transition text-xs"
                            title="Insert Link"
                          >
                            🔗
                          </button>
                          <button
                            type="button"
                            onClick={() => document.execCommand("removeFormat")}
                            className="rounded px-2 py-1 text-slate-400 hover:bg-slate-700 hover:text-rose-400 transition text-[11px]"
                            title="Clear Formatting"
                          >
                            ✕
                          </button>
                        </div>

                        {/* Viewport Devices */}
                        <div className="inline-flex rounded-lg bg-slate-800 p-1 border border-slate-700 shadow-2xs">
                          <button
                            type="button"
                            onClick={() => setPreviewDevice("desktop")}
                            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                              previewDevice === "desktop" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                            }`}
                          >
                            <Monitor className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Desktop</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setPreviewDevice("tablet")}
                            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                              previewDevice === "tablet" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                            }`}
                          >
                            <Tablet className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Tablet</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setPreviewDevice("mobile")}
                            className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                              previewDevice === "mobile" ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"
                            }`}
                          >
                            <Smartphone className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Mobile</span>
                          </button>
                        </div>

                        {/* ＋ Add Section Button */}
                        <button
                          type="button"
                          onClick={() => setIsAddSectionModalOpen(true)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition"
                          title="Add a new pre-designed section to this page"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Add Section</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleTabSwitch("code")}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition"
                          title="Switch to Code Editor to edit HTML source directly"
                        >
                          <Code2 className="h-3.5 w-3.5 text-indigo-400" />
                          <span>Edit Code</span>
                        </button>

                        {hasCustomOverride && (
                          <button
                            type="button"
                            onClick={handleRevertToOriginal}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900 text-rose-300 text-xs font-bold border border-rose-800/60 transition"
                            title="Restore original code-backed template"
                          >
                            <RotateCcw className="h-3 w-3 text-rose-400" />
                            <span>Revert</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Quick H1 Headline Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-black text-blue-800 uppercase tracking-wider">
                          PAGE H1
                        </span>
                        <label className="text-xs font-bold text-slate-800">Primary Headline:</label>
                      </div>
                      <input
                        type="text"
                        value={quickH1Input}
                        onChange={(e) => {
                          setQuickH1Input(e.target.value);
                          applyH1ToCode(e.target.value);
                        }}
                        placeholder="Primary H1 headline for this page..."
                        className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-900 focus:bg-white focus:border-blue-500 focus:outline-none"
                      />
                      {hasContentEdits && (
                        <span className="shrink-0 text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 animate-pulse">
                          Unsaved Live Edits
                        </span>
                      )}
                    </div>

                    {/* The Authentic Browser Mockup Frame */}
                    <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xl">
                      {/* Browser Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-slate-200 select-none">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                          </div>
                          <span className="text-[11px] font-mono text-slate-500 pl-2">
                            http://localhost:8080{editingPage.url_path}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            <Sparkles className="h-3 w-3 text-emerald-600" />
                            Click-to-Edit Active
                          </span>
                        </div>
                      </div>

                      {/* The Responsive Canvas */}
                      <div className="bg-slate-100 p-2 sm:p-4 overflow-x-auto min-h-[600px] max-h-[850px] overflow-y-auto">
                        <div
                          className={`bg-white transition-all duration-300 shadow-md rounded-xl overflow-hidden mx-auto ${
                            previewDevice === "desktop"
                              ? "w-full"
                              : previewDevice === "tablet"
                              ? "w-[768px]"
                              : "w-[390px]"
                          }`}
                        >
                          {/* Authentic Site Header Mockup */}
                          <header className="border-b border-slate-100 bg-white px-6 py-4 flex items-center justify-between select-none">
                            <div className="flex items-center gap-3">
                              <span className="text-base font-black tracking-tight text-[#0b2545]">
                                NKB Regovanta<span className="text-blue-600">&reg;</span>
                              </span>
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
                                Regulatory Affairs &middot; Quality &middot; Compliance
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="rounded-xl bg-[#0b3a96] text-white px-3 py-1.5 text-xs font-bold shadow-xs">
                                Get in Touch &rarr;
                              </span>
                            </div>
                          </header>

                          {/* Real Live In-Place Editable Content */}
                          <div
                            ref={visualEditorRef}
                            contentEditable={true}
                            suppressContentEditableWarning={true}
                            onInput={(e) => {
                              const html = e.currentTarget.innerHTML;
                              setEditableHtml(html);
                              setHasContentEdits(true);
                              const foundH1 = extractH1FromCode(html);
                              if (foundH1) {
                                setQuickH1Input(foundH1);
                                setEditingPage((prev) => (prev ? { ...prev, h1: foundH1 } : null));
                              }
                            }}
                            className="w-full min-h-[500px] outline-none focus:outline-none p-4 sm:p-6 text-slate-800 antialiased selection:bg-blue-100 selection:text-blue-900 [&_*:hover]:ring-1 [&_*:hover]:ring-blue-400/40 [&_*:hover]:ring-offset-1"
                          />

                          {/* In-Canvas Add Section Drop Zone */}
                          <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 text-center select-none">
                            <button
                              type="button"
                              onClick={() => setIsAddSectionModalOpen(true)}
                              className="w-full max-w-xl mx-auto py-3.5 px-5 rounded-2xl border-2 border-dashed border-blue-300 hover:border-blue-600 bg-blue-50/50 hover:bg-blue-50 transition flex flex-col sm:flex-row items-center justify-center gap-3 text-blue-700 hover:text-blue-900 group shadow-2xs cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-full bg-blue-100 group-hover:bg-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                                <Plus className="h-4 w-4" />
                              </div>
                              <div className="text-left">
                                <div className="text-xs font-extrabold flex items-center gap-1.5">
                                  <span>＋ Add a New Section to this Page</span>
                                  <span className="text-[10px] bg-blue-200/80 text-blue-800 font-bold px-1.5 py-0.5 rounded">Templates</span>
                                </div>
                                <div className="text-[11px] text-slate-500 font-normal">
                                  Insert CTA Banners, 3-Column Features, Stats Counters, FAQs, Split Grids, or Process Roadmaps
                                </div>
                              </div>
                            </button>
                          </div>

                          {/* Authentic Site Footer Mockup */}
                          <footer className="bg-[#0b2545] text-slate-400 py-10 px-6 text-xs text-center border-t border-slate-800 space-y-3 select-none">
                            <div className="flex flex-wrap justify-center items-center gap-6 text-slate-300 font-medium">
                              <span>ISO 13485 Compliance</span>
                              <span>&middot;</span>
                              <span>US FDA 510(k)</span>
                              <span>&middot;</span>
                              <span>CDSCO MD-14/15</span>
                              <span>&middot;</span>
                              <span>EU MDR / IVDR</span>
                            </div>
                            <p className="text-slate-500">
                              &copy; {new Date().getFullYear()} NKB Regovanta. All rights reserved. Global Regulatory Affairs &amp; Healthcare Compliance Consulting.
                            </p>
                          </footer>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ── Tab: SEO ─────────────────────────────────────────── */}
                {activeTab === "seo" && (
                  <div className="space-y-5">
                    {/* SEO Quick Reset & Tools Bar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-blue-50/70 p-3.5 rounded-xl border border-blue-200/80">
                      <div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-[#0b3a96]" />
                          <span className="text-xs font-bold text-slate-900">SEO Meta Directives &amp; Search Appearance</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 mb-0">
                          Configure search engine &lt;title&gt;, meta description, canonicals and robots indexing for this page.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={handleResetSeoToDefaults}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-[#0b3a96] hover:bg-blue-100 border border-blue-300 shadow-2xs transition shrink-0"
                        title="Restore original <title>, meta description and <h1> from code-backed React component"
                      >
                        <RotateCcw className="h-3.5 w-3.5 text-[#0b3a96]" />
                        <span>↺ Reset to Code Defaults</span>
                      </button>
                    </div>

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
                        disabled
                        value={editingPage.slug}
                        className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-100 px-3.5 py-2 text-xs font-mono text-slate-500 cursor-not-allowed"
                      />
                      <p className="mt-1 text-[11px] text-slate-500">
                        This is a code-backed route. Change its route file and redirect configuration, then deploy through GitHub.
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
                        <option value="published">Published (eligible for sitemap)</option>
                        <option value="draft">Draft (excluded from managed sitemap; deployed route remains accessible)</option>
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

                    {/* Visual Page Builder Callout */}
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 flex items-start justify-between gap-3 text-xs text-emerald-950">
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-emerald-900 font-bold">Full Visual Page Builder is Active:</strong>
                          <p className="mt-0.5 text-emerald-800 leading-relaxed">
                            You have full visual control to design and customize the Hero, content sections, 2-column blocks, stats counters, interactive FAQs, and CTA banners. Switch to the <strong>Visual Page Builder</strong> tab to edit all sections visually.
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab("visual")}
                        className="shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-800 transition shadow-2xs"
                      >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Open Builder</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* ── Tab: Full Page Code & H1 Editor ─────────────────── */}
                {activeTab === "code" && (
                  <div className="space-y-4">
                    {/* 1. Direct H1 Tag Control & Sync Card */}
                    <div className="rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50/90 via-indigo-50/50 to-white p-4 space-y-3 shadow-2xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="rounded bg-[#0b3a96] px-2.5 py-0.5 text-[10px] font-black text-white uppercase tracking-wider">
                            Primary &lt;h1&gt; Tag
                          </span>
                          <h4 className="text-xs font-bold text-slate-900">
                            Direct H1 Headline Control &amp; Code Sync
                          </h4>
                        </div>
                        {detectedCodeH1 ? (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full border border-emerald-200 truncate max-w-sm">
                            <Check className="h-3 w-3 text-emerald-600 shrink-0" />
                            <span className="truncate">&lt;h1&gt; in Code: &ldquo;{detectedCodeH1}&rdquo;</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-0.5 rounded-full border border-amber-200">
                            <AlertTriangle className="h-3 w-3 text-amber-600 shrink-0" />
                            <span>No &lt;h1&gt; tag in code &mdash; click Apply to insert</span>
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                        <div className="relative flex-1">
                          <input
                            type="text"
                            value={quickH1Input}
                            onChange={(e) => setQuickH1Input(e.target.value)}
                            placeholder="Enter primary H1 headline to inject into HTML code and database..."
                            className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:border-[#0b3a96] focus:ring-1 focus:ring-[#0b3a96] focus:outline-none shadow-2xs transition"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => applyH1ToCode(quickH1Input)}
                          className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition shadow-2xs shrink-0"
                          title="Inject or update the <H1> tag in the HTML code below"
                        >
                          <Wand2 className="h-3.5 w-3.5" />
                          <span>Apply H1 to Code</span>
                        </button>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        Editing the H1 here updates the <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-[#0b3a96] font-bold">&lt;h1&gt;...&lt;/h1&gt;</code> element in your full page code, updates the <code className="bg-white px-1.5 py-0.5 rounded border border-blue-200 font-mono text-[#0b3a96] font-bold">pages.h1</code> database column, and synchronizes with SEO tags on save.
                      </p>
                    </div>

                    {/* 2. HTML Code Scope Selector */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 bg-gradient-to-r from-blue-50/90 via-indigo-50/70 to-white p-3 rounded-xl border border-blue-200">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-slate-800">HTML Code Scope:</span>
                        <div className="inline-flex rounded-lg bg-white p-1 border border-slate-200 shadow-2xs">
                          <button
                            type="button"
                            onClick={() => handleScopeChange("clean_body")}
                            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold transition ${
                              codeScope === "clean_body"
                                ? "bg-[#0b3a96] text-white shadow-2xs"
                                : "text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            <Sparkles className="h-3.5 w-3.5" />
                            <span>✨ Clean Semantic Page HTML (Recommended)</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleScopeChange("full_document")}
                            className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-bold transition ${
                              codeScope === "full_document"
                                ? "bg-slate-800 text-white shadow-2xs"
                                : "text-slate-600 hover:text-slate-900"
                            }`}
                          >
                            <Code2 className="h-3.5 w-3.5" />
                            <span>🌐 Raw Full SSR Document ({((pageContent.htmlSource?.length || 0) / 1024).toFixed(0)} KB)</span>
                          </button>
                        </div>
                      </div>
                      <div className="text-[11px] text-slate-600">
                        {codeScope === "clean_body"
                          ? "Clean HTML contains pure <h1>, <section>, and layout copy without bundle scripts."
                          : "Raw SSR mode displays complete server payload with GTM & script tags."}
                      </div>
                    </div>

                    {/* 3. Code Snippets & Quick Inserters Toolbar */}
                    <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-100 p-2.5 rounded-xl border border-slate-200">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-700 mr-1">Insert Snippet:</span>
                        <button
                          type="button"
                          onClick={() => setIsAddSectionModalOpen(true)}
                          className="px-2.5 py-1 rounded bg-[#0b3a96] hover:bg-blue-700 text-[11px] font-bold text-white transition flex items-center gap-1 shadow-2xs mr-1"
                          title="Open section templates library to insert pre-built HTML section"
                        >
                          <Plus className="h-3 w-3" />
                          <span>＋ Section Templates...</span>
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertCodeSnippet(
                              `\n<h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">${quickH1Input || "Primary Page Headline"}</h1>\n`
                            )
                          }
                          className="px-2 py-1 rounded bg-white hover:bg-blue-50 text-[11px] font-semibold text-slate-700 hover:text-blue-700 border border-slate-200 transition"
                        >
                          + &lt;h1&gt;
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertCodeSnippet(
                              `\n<h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategic Compliance & Advisory</h2>\n`
                            )
                          }
                          className="px-2 py-1 rounded bg-white hover:bg-blue-50 text-[11px] font-semibold text-slate-700 hover:text-blue-700 border border-slate-200 transition"
                        >
                          + &lt;h2&gt;
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertCodeSnippet(
                              `\n<section class="py-12 px-6 bg-slate-50 rounded-2xl border border-slate-200 my-8">\n  <h2 class="text-2xl font-bold text-slate-900">Custom Section Title</h2>\n  <p class="mt-3 text-slate-600 leading-relaxed">Comprehensive regulatory strategy for medical devices and pharmaceuticals across global markets.</p>\n</section>\n`
                            )
                          }
                          className="px-2 py-1 rounded bg-white hover:bg-blue-50 text-[11px] font-semibold text-slate-700 hover:text-blue-700 border border-slate-200 transition"
                        >
                          + &lt;section&gt;
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertCodeSnippet(
                              `\n<p class="text-slate-700 leading-relaxed text-base my-4">Our specialized team ensures seamless submissions to CDSCO, US FDA, and EU Notified Bodies.</p>\n`
                            )
                          }
                          className="px-2 py-1 rounded bg-white hover:bg-blue-50 text-[11px] font-semibold text-slate-700 hover:text-blue-700 border border-slate-200 transition"
                        >
                          + &lt;p&gt;
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertCodeSnippet(
                              `\n<a href="/contact" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition shadow-md">\n  Schedule Consultation &rarr;\n</a>\n`
                            )
                          }
                          className="px-2 py-1 rounded bg-white hover:bg-blue-50 text-[11px] font-semibold text-slate-700 hover:text-blue-700 border border-slate-200 transition"
                        >
                          + &lt;button/CTA&gt;
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            insertCodeSnippet(
                              `\n<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">\n  <div class="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">\n    <h3 class="text-lg font-bold text-slate-900">Feature One</h3>\n    <p class="text-sm text-slate-600 mt-2">Description of capabilities...</p>\n  </div>\n  <div class="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">\n    <h3 class="text-lg font-bold text-slate-900">Feature Two</h3>\n    <p class="text-sm text-slate-600 mt-2">Description of capabilities...</p>\n  </div>\n</div>\n`
                            )
                          }
                          className="px-2 py-1 rounded bg-white hover:bg-blue-50 text-[11px] font-semibold text-slate-700 hover:text-blue-700 border border-slate-200 transition"
                        >
                          + 2-Col Grid
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {hasCustomOverride && (
                          <button
                            type="button"
                            onClick={handleRevertToOriginal}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-rose-50 hover:bg-rose-100 text-[11px] font-bold text-rose-700 border border-rose-200 transition shadow-2xs"
                            title="Remove custom code override and restore original code-backed React route"
                          >
                            <RotateCcw className="h-3 w-3 text-rose-600" />
                            <span>↺ Revert to Original</span>
                          </button>
                        )}
                        <button
                          type="button"
                          onClick={formatHtmlCode}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-slate-50 text-[11px] font-semibold text-slate-700 border border-slate-200 transition shadow-2xs"
                          title="Auto-format and indent HTML code"
                        >
                          <Sparkles className="h-3 w-3 text-amber-500" />
                          <span>Format Code</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (codeScope === "clean_body") {
                              const clean = cleanBodyHtml || generateCleanPageTemplate(editingPage, quickH1Input || editingPage?.h1 || "");
                              handleCodeChange(clean);
                              toast.info("Reset code to clean semantic template!");
                            } else if (pageContent.htmlSource) {
                              handleCodeChange(pageContent.htmlSource);
                              toast.info("Reset code to raw server source!");
                            } else {
                              fetchPageData(editingPage.url_path);
                            }
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-slate-50 text-[11px] font-semibold text-slate-700 border border-slate-200 transition shadow-2xs"
                          title="Reset code"
                        >
                          <RotateCcw className="h-3 w-3 text-slate-500" />
                          <span>Reset</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const code = editableHtml || pageContent.htmlSource;
                            if (!code) return;
                            navigator.clipboard.writeText(code);
                            setCopiedCode(true);
                            toast.success("Code copied to clipboard!");
                            setTimeout(() => setCopiedCode(false), 2000);
                          }}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white hover:bg-slate-50 text-[11px] font-semibold text-slate-700 border border-slate-200 transition shadow-2xs"
                        >
                          {copiedCode ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                          <span>{copiedCode ? "Copied" : "Copy"}</span>
                        </button>
                      </div>
                    </div>

                    {/* 4. Search & Replace Toolbar */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <div className="sm:col-span-5 relative">
                        <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Find in code..."
                          value={codeSearchQuery}
                          onChange={(e) => setCodeSearchQuery(e.target.value)}
                          className="w-full rounded-md border border-slate-200 bg-white pl-8 pr-2.5 py-1 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="sm:col-span-5 relative">
                        <input
                          type="text"
                          placeholder="Replace with..."
                          value={codeReplaceQuery}
                          onChange={(e) => setCodeReplaceQuery(e.target.value)}
                          className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <button
                          type="button"
                          onClick={handleReplaceAllInCode}
                          disabled={!codeSearchQuery}
                          className="w-full rounded-md bg-slate-800 hover:bg-slate-900 disabled:opacity-50 text-white text-xs font-semibold py-1 transition"
                        >
                          Replace All
                        </button>
                      </div>
                    </div>

                    {/* 5. Full Monospace Code Editor Area */}
                    <div className="rounded-xl border border-slate-800 bg-[#0a0f1d] text-slate-100 shadow-2xl overflow-hidden flex flex-col">
                      {/* Editor Title Bar */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0f172a] border-b border-slate-800 text-[11px] font-mono">
                        <div className="flex items-center gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-500 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-500 inline-block" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 inline-block" />
                          <span className="ml-2 font-semibold text-slate-300">
                            {editingPage.url_path} &mdash; {codeScope === "clean_body" ? "Clean Semantic HTML" : "Raw SSR Document"}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-[10px] text-slate-400">
                          <span>{codeLinesCount} Lines</span>
                          <span>{((editableHtml || pageContent.htmlSource || "").length / 1024).toFixed(1)} KB</span>
                          <span className="text-emerald-400 font-semibold uppercase tracking-wider">● Interactive</span>
                        </div>
                      </div>

                      {/* Code Area with Line Numbers Gutter */}
                      <div className="relative flex min-h-[520px] max-h-[640px] bg-[#0a0f1d]">
                        {/* Line Numbers Gutter */}
                        <div
                          aria-hidden="true"
                          className="select-none py-3 px-3 text-right font-mono text-xs text-slate-600 bg-[#090d19] border-r border-slate-800/80 overflow-hidden leading-relaxed shrink-0 w-12 sm:w-14"
                        >
                          {codeLinesNumbers.slice(0, 1000).map((n) => (
                            <div key={n}>{n}</div>
                          ))}
                        </div>

                        {/* Editable Textarea */}
                        <textarea
                          ref={codeTextareaRef}
                          value={editableHtml || pageContent.htmlSource || ""}
                          onChange={(e) => handleCodeChange(e.target.value)}
                          onKeyDown={handleCodeKeyDown}
                          placeholder="<!-- Paste or edit the full page HTML markup, custom sections, and <h1> tag here... -->"
                          spellCheck={false}
                          wrap="off"
                          className="flex-1 w-full bg-transparent p-3 font-mono text-xs text-emerald-300 leading-relaxed focus:outline-none resize-none overflow-auto selection:bg-blue-600/40"
                        />
                      </div>

                      {/* Editor Bottom Bar */}
                      <div className="px-4 py-2 bg-[#090d19] border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 font-bold">&lt;/&gt; HTML5</span>
                          <span>UTF-8</span>
                          <span>Tab: 2 spaces</span>
                        </div>
                        <div className="text-slate-400 text-[11px]">
                          Tip: Use <strong>Tab</strong> to indent, or click <strong>Live Full Preview</strong> tab to see changes rendered.
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 flex items-start justify-between gap-3 text-xs text-slate-600">
                      <div>
                        <strong className="text-slate-900 font-bold">Full Code &amp; H1 Power:</strong>
                        <p className="mt-0.5 leading-relaxed">
                          Edits made in this code editor override the template for this URL and persist directly to Supabase settings (<code className="font-mono text-blue-700 font-bold">fullHtmlOverride</code>) and update the <code className="font-mono text-blue-700 font-bold">pages.h1</code> database column upon clicking <strong>Save Changes</strong>.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab("preview")}
                        className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-800 shadow-2xs transition"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Preview Now</span>
                      </button>
                    </div>
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

      {/* ── Section Library Modal ─────────────────────────────────────── */}
      {isAddSectionModalOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-xs">
          <div className="w-full max-w-4xl max-h-[90vh] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-900 text-white px-6 py-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-600/40 border border-blue-400/30 flex items-center justify-center text-blue-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white">
                    Section Library &mdash; Add a New Section
                  </h3>
                  <p className="text-[11px] text-slate-300">
                    Pick any pre-designed section to insert. Once added, simply click any text on the page to customize it.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAddSectionModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-6 py-2.5 overflow-x-auto shrink-0">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1 shrink-0">
                Category:
              </span>
              {[
                { id: "all", label: "All Sections" },
                { id: "cta", label: "CTA & Conversion" },
                { id: "features", label: "Features & Services" },
                { id: "stats", label: "Impact Metrics" },
                { id: "faq", label: "FAQ & Accordion" },
                { id: "content", label: "2-Col & Overview" },
                { id: "process", label: "Roadmap & Steps" },
                { id: "testimonial", label: "Testimonials" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSectionCategoryFilter(cat.id)}
                  className={`rounded-lg px-3 py-1 text-xs font-bold whitespace-nowrap transition ${
                    sectionCategoryFilter === cat.id
                      ? "bg-[#0b3a96] text-white shadow-2xs"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Template Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 overflow-y-auto flex-1 bg-slate-100/60">
              {SECTION_TEMPLATES.filter(
                (t) => sectionCategoryFilter === "all" || t.category === sectionCategoryFilter
              ).map((tmpl) => (
                <div
                  key={tmpl.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between gap-3 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {tmpl.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        &lt;section&gt;
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition">
                      {tmpl.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tmpl.description}
                    </p>

                    {/* Visual Preview Sandbox */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 max-h-40 overflow-hidden relative select-none pointer-events-none opacity-85">
                      <div
                        className="text-[11px] transform scale-[0.8] origin-top-left w-[125%]"
                        dangerouslySetInnerHTML={{ __html: tmpl.html }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] text-slate-400">
                      Tailwind + Responsive
                    </span>
                    <button
                      type="button"
                      onClick={() => handleInsertSection(tmpl)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#0b3a96] hover:bg-blue-700 text-white text-xs font-bold transition shadow-2xs"
                    >
                      <Plus className="h-3.5 w-3.5" />
                      <span>Insert Section</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3 shrink-0">
              <span className="text-xs text-slate-500">
                💡 <strong>Tip:</strong> After inserting, click any text on the page to customize it. You can also edit raw code in the <strong>Edit Code</strong> tab.
              </span>
              <button
                type="button"
                onClick={() => setIsAddSectionModalOpen(false)}
                className="rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
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
