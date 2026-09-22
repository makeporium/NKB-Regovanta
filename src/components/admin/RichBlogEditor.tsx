import React, { useRef, useState, useEffect, useMemo } from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Table,
  Link as LinkIcon,
  Image as ImageIcon,
  Minus,
  Code,
  Eye,
  CheckSquare,
  HelpCircle,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Link2,
  Search,
  X,
  ExternalLink,
  Check,
  Unlink,
  Wand2,
  FileText,
  Layers,
  Globe,
  BookOpen,
  Filter,
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

interface RichBlogEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export interface InternalLinkOption {
  title: string;
  url: string;
  category: "Services" | "Markets" | "Industries" | "Core Pages" | "Guides";
  keywords: string[];
}

export const STATIC_INTERNAL_LINKS: InternalLinkOption[] = [
  // Services - India
  {
    title: "CDSCO Medical Device Import License (MD-14/15)",
    url: "/services/cdsco-medical-device-import-license-md14",
    category: "Services",
    keywords: [
      "free sale certificate",
      "fsc",
      "md-14",
      "md 14",
      "md-15",
      "md 15",
      "import license",
      "import licence",
      "importing medical devices",
    ],
  },
  {
    title: "CDSCO Manufacturing Licences (MD-3, MD-5, MD-7, MD-8)",
    url: "/services/cdsco-medical-device-manufacturing-license-md3-md5",
    category: "Services",
    keywords: [
      "manufacturing licence",
      "manufacturing license",
      "md-3",
      "md 3",
      "md-5",
      "md 5",
      "md-7",
      "md-8",
      "loan licence",
      "plant master file",
    ],
  },
  {
    title: "CDSCO Medical Device Registration in India",
    url: "/services/cdsco-medical-device-registration",
    category: "Services",
    keywords: [
      "cdsco registration",
      "central drugs standard control organisation",
      "cdsco",
      "authorized indian representative",
      "air",
      "sugam portal",
      "register a medical device in india",
    ],
  },
  {
    title: "Drug Licenses for Importers (Form 10 & Form 41)",
    url: "/services/drug-licenses-importers-india-form-10-form-41",
    category: "Services",
    keywords: ["form 10", "form 41", "drug import licence", "drug import license", "drug registration certificate"],
  },
  {
    title: "Medical Device Technical Documentation & Dossiers",
    url: "/services/medical-device-technical-documentation-consulting",
    category: "Services",
    keywords: ["device master file", "dmf", "technical documentation", "technical file", "dossier", "design history file"],
  },
  {
    title: "WPC ETA Approval for Wireless Medical Devices",
    url: "/services/wpc-approval-wireless-medical-devices-india",
    category: "Services",
    keywords: ["wpc approval", "wpc", "eta", "wireless medical devices", "bluetooth medical device"],
  },
  {
    title: "PC-PNDT Registration Consultant India",
    url: "/services/pc-pndt-registration-consultant-certificate-india",
    category: "Services",
    keywords: ["pc-pndt", "pndt", "ultrasound registration", "imaging device license"],
  },
  {
    title: "IEC & AD Code Registration in India",
    url: "/services/iec-ad-code-registration-india",
    category: "Services",
    keywords: ["iec", "ad code", "import export code", "authorised dealer code", "customs port registration"],
  },

  // Services - Global & Quality
  {
    title: "US FDA 510(k) Clearance Services",
    url: "/services/usa/510k",
    category: "Services",
    keywords: ["fda 510(k)", "510(k)", "510k", "fda clearance", "substantial equivalence", "predicate device"],
  },
  {
    title: "US FDA QMSR Inspection Readiness",
    url: "/services/usa/qmsr-inspection",
    category: "Services",
    keywords: ["qmsr", "fda qmsr", "quality management system regulation", "21 cfr part 820"],
  },
  {
    title: "US FDA Q-Submission & Pre-Sub Consulting",
    url: "/services/usa/q-submission",
    category: "Services",
    keywords: ["q-submission", "pre-submission", "q-sub", "fda meeting"],
  },
  {
    title: "EU MDR (Regulation EU 2017/745) & CE Marking",
    url: "/services/eu/mdr",
    category: "Services",
    keywords: ["eu mdr", "mdr 2017/745", "ce marking", "ce mark", "notified body", "european medical device regulation"],
  },
  {
    title: "EU IVDR (Regulation EU 2017/746) Consulting",
    url: "/services/eu/ivdr",
    category: "Services",
    keywords: ["ivdr", "eu ivdr", "2017/746", "class d ivd", "in vitro diagnostic regulation"],
  },
  {
    title: "ISO 13485 QMS Implementation & Certification",
    url: "/services/iso-13485-implementation-certification-consulting",
    category: "Services",
    keywords: ["iso 13485", "qms", "quality management system", "quality manual", "internal audit", "iso 13485:2016"],
  },
  {
    title: "MDSAP Certification Consulting",
    url: "/services/mdsap",
    category: "Services",
    keywords: ["mdsap", "medical device single audit program"],
  },
  {
    title: "Clinical Evaluation Reports (CER) & Clinical Evidence",
    url: "/services/clinical-evaluation-report-cer",
    category: "Services",
    keywords: ["clinical evaluation report", "cer", "clinical evidence", "pmcf", "post-market clinical follow-up"],
  },

  // Markets
  {
    title: "India Regulatory Market Access & CDSCO Gateway",
    url: "/markets/india",
    category: "Markets",
    keywords: ["india market", "indian regulations", "cdsco india", "india compliance"],
  },
  {
    title: "United States FDA Market Access",
    url: "/markets/united-states",
    category: "Markets",
    keywords: ["us market", "usa market", "us fda", "fda compliance"],
  },
  {
    title: "European Union MDR/IVDR Market Access",
    url: "/markets/europe",
    category: "Markets",
    keywords: ["european union", "eu market", "europe market", "eea market"],
  },
  {
    title: "United Kingdom MHRA Regulatory Compliance",
    url: "/markets/uk",
    category: "Markets",
    keywords: ["uk market", "mhra", "ukca", "united kingdom"],
  },
  {
    title: "Australia TGA Medical Device Inclusion",
    url: "/markets/australia",
    category: "Markets",
    keywords: ["australia", "tga", "artg", "australian sponsor"],
  },
  {
    title: "Saudi Arabia SFDA Medical Device Registration",
    url: "/markets/saudi-arabia",
    category: "Markets",
    keywords: ["saudi arabia", "sfda", "mdma", "saudi regulatory"],
  },

  // Industries
  {
    title: "Medical Devices Regulatory Consulting",
    url: "/industries/medical-devices",
    category: "Industries",
    keywords: ["medical devices", "implants", "surgical instruments", "hospital equipment"],
  },
  {
    title: "In Vitro Diagnostics (IVD) Consulting",
    url: "/industries/ivd",
    category: "Industries",
    keywords: ["ivd", "in vitro diagnostics", "reagents", "diagnostic assays", "test kits"],
  },
  {
    title: "Digital Health & Software as a Medical Device (SaMD)",
    url: "/industries/digital-health-samd",
    category: "Industries",
    keywords: ["samd", "digital health", "medical software", "ai medical device", "software as a medical device"],
  },
  {
    title: "Pharmaceuticals & Active Ingredients (APIs)",
    url: "/industries/pharma",
    category: "Industries",
    keywords: ["pharmaceuticals", "pharma", "drugs", "active pharmaceutical ingredients"],
  },
  {
    title: "Cosmetics & Personal Care Regulatory",
    url: "/industries/cosmetics",
    category: "Industries",
    keywords: ["cosmetics", "cosmetic registration", "personal care compliance"],
  },

  // Core Pages
  {
    title: "Global Regulatory Insights & Guides",
    url: "/insights",
    category: "Core Pages",
    keywords: ["insights", "regulatory insights", "blog", "articles", "guidance library"],
  },
  {
    title: "Case Studies & Regulatory Approvals",
    url: "/case-studies",
    category: "Core Pages",
    keywords: ["case studies", "client successes", "regulatory approvals", "remediation"],
  },
  {
    title: "About NKB Regovanta Solutions",
    url: "/about",
    category: "Core Pages",
    keywords: ["about us", "nkb regovanta", "regulatory advisors", "our leadership"],
  },
  {
    title: "Book a Consultation / Regulatory Assessment",
    url: "/contact",
    category: "Core Pages",
    keywords: ["contact", "book consultation", "consultation", "regulatory enquiry", "contact us"],
  },
];

/**
 * Escapes regex special characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Sanitizes pasted or raw HTML by stripping global wrappers, doctypes,
 * head tags, and global style blocks that could contaminate site layout.
 */
export function sanitizeArticleContent(rawHtml: string): string {
  if (!rawHtml) return "";

  let cleaned = rawHtml
    .replace(/<!doctype[^>]*>/gi, "")
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "");

  const mainMatch = cleaned.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch && mainMatch[1]) {
    cleaned = mainMatch[1];
  } else {
    const bodyMatch = cleaned.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch && bodyMatch[1]) cleaned = bodyMatch[1];
  }

  cleaned = cleaned.replace(/<\/?(?:html|body|main)[^>]*>/gi, "").trim();
  return cleaned;
}

/**
 * Replaces the first unlinked occurrence of keyword in HTML with a proper <a> element,
 * using DOMParser and TreeWalker to avoid replacing attributes or nested links.
 */
function linkKeywordInHtml(
  html: string,
  keyword: string,
  url: string,
  targetBlank: boolean = false
): { updatedHtml: string; linked: boolean } {
  if (typeof window === "undefined" || !html) return { updatedHtml: html, linked: false };

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const container = doc.body.firstElementChild;
  if (!container) return { updatedHtml: html, linked: false };

  const walker = doc.createTreeWalker(container, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      let parent = node.parentElement;
      while (parent && parent !== container) {
        if (parent.tagName.toLowerCase() === "a") {
          return NodeFilter.FILTER_REJECT;
        }
        parent = parent.parentElement;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let linked = false;
  const regex = new RegExp(`\\b(${escapeRegex(keyword)})\\b`, "i");

  let currentNode = walker.nextNode();
  while (currentNode) {
    const text = currentNode.nodeValue || "";
    const match = regex.exec(text);
    if (match) {
      const matchIndex = match.index;
      const matchText = match[0];

      const beforeText = text.substring(0, matchIndex);
      const afterText = text.substring(matchIndex + matchText.length);

      const parent = currentNode.parentNode;
      if (parent) {
        const anchor = doc.createElement("a");
        anchor.href = url;
        anchor.textContent = matchText;
        if (targetBlank) {
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
        }

        if (beforeText) {
          parent.insertBefore(doc.createTextNode(beforeText), currentNode);
        }
        parent.insertBefore(anchor, currentNode);
        if (afterText) {
          parent.insertBefore(doc.createTextNode(afterText), currentNode);
        }
        parent.removeChild(currentNode);

        linked = true;
        break;
      }
    }
    currentNode = walker.nextNode();
  }

  return {
    updatedHtml: container.innerHTML,
    linked,
  };
}

/**
 * Checks keyword occurrences and linked status in HTML
 */
function checkKeywordStatus(
  html: string,
  keyword: string
): { totalCount: number; linkedCount: number; unlinkedCount: number } {
  if (typeof window === "undefined" || !html) return { totalCount: 0, linkedCount: 0, unlinkedCount: 0 };

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${html}</div>`, "text/html");
  const container = doc.body.firstElementChild;
  if (!container) return { totalCount: 0, linkedCount: 0, unlinkedCount: 0 };

  const regex = new RegExp(`\\b(${escapeRegex(keyword)})\\b`, "gi");

  let linkedCount = 0;
  let unlinkedCount = 0;

  const walker = doc.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
  let node = walker.nextNode();
  while (node) {
    const text = node.nodeValue || "";
    const matches = text.match(regex);
    if (matches && matches.length > 0) {
      let isInsideLink = false;
      let parent = node.parentElement;
      while (parent && parent !== container) {
        if (parent.tagName.toLowerCase() === "a") {
          isInsideLink = true;
          break;
        }
        parent = parent.parentElement;
      }
      if (isInsideLink) {
        linkedCount += matches.length;
      } else {
        unlinkedCount += matches.length;
      }
    }
    node = walker.nextNode();
  }

  return {
    totalCount: linkedCount + unlinkedCount,
    linkedCount,
    unlinkedCount,
  };
}

export function RichBlogEditor({ value, onChange, placeholder }: RichBlogEditorProps) {
  const [mode, setMode] = useState<"visual" | "html">("visual");
  const editorRef = useRef<HTMLDivElement>(null);
  const isUpdatingFromProp = useRef(false);

  // Link Modal States
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkTargetBlank, setLinkTargetBlank] = useState(false);
  const [linkCategoryFilter, setLinkCategoryFilter] = useState<string>("All");
  const [linkSearchQuery, setLinkSearchQuery] = useState("");
  const savedRangeRef = useRef<Range | null>(null);
  const existingAnchorRef = useRef<HTMLAnchorElement | null>(null);

  // Dynamic Published Guides
  const [dynamicGuides, setDynamicGuides] = useState<InternalLinkOption[]>([]);

  // Smart Internal Link Assistant Modal
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Image Modal States (replaces window.prompt)
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageCaption, setImageCaption] = useState("");

  // Sync internal editor content with prop when prop changes externally
  useEffect(() => {
    if (editorRef.current && mode === "visual") {
      if (editorRef.current.innerHTML !== value) {
        isUpdatingFromProp.current = true;
        editorRef.current.innerHTML = value || "";
        isUpdatingFromProp.current = false;
      }
    }
  }, [value, mode]);

  // Load published blog posts for internal links
  useEffect(() => {
    async function loadPublishedGuides() {
      try {
        const { data } = await supabase
          .from("blog_posts")
          .select("title, slug")
          .eq("status", "published")
          .limit(100);

        if (data && data.length > 0) {
          const formatted: InternalLinkOption[] = data.map((post) => ({
            title: post.title,
            url: `/insights/${post.slug}`,
            category: "Guides",
            keywords: post.title.toLowerCase().split(/\s+/).filter((w: string) => w.length > 3),
          }));
          setDynamicGuides(formatted);
        }
      } catch {
        // Fallback silently if offline
      }
    }

    loadPublishedGuides();
  }, []);

  const handleVisualInput = () => {
    if (isUpdatingFromProp.current || !editorRef.current) return;
    const currentHtml = editorRef.current.innerHTML;
    onChange(currentHtml);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const clipboardData = e.clipboardData;
    const pastedHtml = clipboardData.getData("text/html");
    const pastedText = clipboardData.getData("text/plain");

    if (pastedHtml) {
      const sanitized = sanitizeArticleContent(pastedHtml);
      document.execCommand("insertHTML", false, sanitized);
    } else if (pastedText) {
      const formatted = pastedText
        .split(/\n\s*\n/)
        .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`)
        .join("");
      document.execCommand("insertHTML", false, formatted);
    }

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const exec = (command: string, val: string | undefined = undefined) => {
    if (mode === "html") return;
    editorRef.current?.focus();
    document.execCommand(command, false, val);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertHeading = (level: "h2" | "h3" | "p") => {
    if (mode === "html") return;
    exec("formatBlock", `<${level}>`);
  };

  // Keyboard shortcut Ctrl+K
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      handleOpenLinkModal();
    }
  };

  // ── Open Link Modal & Save Range ──────────────────────────────────────────
  const handleOpenLinkModal = () => {
    if (mode === "html") return;

    const selection = window.getSelection();
    let currentRange: Range | null = null;

    if (selection && selection.rangeCount > 0) {
      currentRange = selection.getRangeAt(0);
      savedRangeRef.current = currentRange.cloneRange();
    }

    // Check if selection is inside an anchor
    let foundAnchor: HTMLAnchorElement | null = null;
    if (currentRange) {
      let node: Node | null = currentRange.commonAncestorContainer;
      while (node && node !== editorRef.current) {
        if (node.nodeName === "A") {
          foundAnchor = node as HTMLAnchorElement;
          break;
        }
        node = node.parentNode;
      }
    }

    existingAnchorRef.current = foundAnchor;

    if (foundAnchor) {
      setLinkUrl(foundAnchor.getAttribute("href") || "");
      setLinkText(foundAnchor.textContent || "");
      setLinkTargetBlank(foundAnchor.target === "_blank");
    } else if (currentRange && !currentRange.collapsed) {
      setLinkText(currentRange.toString().trim());
      setLinkUrl("");
      setLinkTargetBlank(false);
    } else {
      setLinkText("");
      setLinkUrl("");
      setLinkTargetBlank(false);
    }

    setLinkSearchQuery("");
    setLinkCategoryFilter("All");
    setIsLinkModalOpen(true);
  };

  // ── Apply Link ────────────────────────────────────────────────────────────
  const handleApplyLink = (urlOverride?: string) => {
    const finalUrl = (urlOverride || linkUrl).trim();
    if (!finalUrl) {
      toast.error("Please enter or select a destination URL.");
      return;
    }

    editorRef.current?.focus();

    const selection = window.getSelection();
    selection?.removeAllRanges();
    if (savedRangeRef.current) {
      selection?.addRange(savedRangeRef.current);
    }

    if (existingAnchorRef.current) {
      // Update existing anchor
      existingAnchorRef.current.href = finalUrl;
      if (linkText) {
        existingAnchorRef.current.textContent = linkText;
      }
      if (linkTargetBlank) {
        existingAnchorRef.current.target = "_blank";
        existingAnchorRef.current.rel = "noopener noreferrer";
      } else {
        existingAnchorRef.current.removeAttribute("target");
        existingAnchorRef.current.removeAttribute("rel");
      }
    } else if (savedRangeRef.current && !savedRangeRef.current.collapsed) {
      // Wrap selected text in anchor
      const displayText = linkText || savedRangeRef.current.toString();
      const anchor = document.createElement("a");
      anchor.href = finalUrl;
      anchor.textContent = displayText;
      if (linkTargetBlank) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      savedRangeRef.current.deleteContents();
      savedRangeRef.current.insertNode(anchor);
    } else {
      // Collapsed cursor or no text highlighted
      const anchor = document.createElement("a");
      anchor.href = finalUrl;
      anchor.textContent = linkText || finalUrl;
      if (linkTargetBlank) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      if (savedRangeRef.current) {
        savedRangeRef.current.insertNode(anchor);
      } else {
        editorRef.current?.appendChild(anchor);
      }
    }

    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }

    setIsLinkModalOpen(false);
    toast.success("Link applied successfully!");
  };

  // ── Remove Link ───────────────────────────────────────────────────────────
  const handleRemoveLink = () => {
    if (existingAnchorRef.current) {
      const parent = existingAnchorRef.current.parentNode;
      while (existingAnchorRef.current.firstChild) {
        parent?.insertBefore(existingAnchorRef.current.firstChild, existingAnchorRef.current);
      }
      parent?.removeChild(existingAnchorRef.current);
      if (editorRef.current) {
        onChange(editorRef.current.innerHTML);
      }
      setIsLinkModalOpen(false);
      toast.success("Link removed.");
    } else {
      exec("unlink");
      setIsLinkModalOpen(false);
    }
  };

  // ── All Internal Links for Search ─────────────────────────────────────────
  const allInternalLinks = useMemo(() => {
    return [...STATIC_INTERNAL_LINKS, ...dynamicGuides];
  }, [dynamicGuides]);

  const filteredInternalLinks = useMemo(() => {
    let list = allInternalLinks;
    if (linkCategoryFilter !== "All") {
      list = list.filter((l) => l.category === linkCategoryFilter);
    }
    if (linkSearchQuery.trim()) {
      const query = linkSearchQuery.toLowerCase();
      list = list.filter(
        (l) =>
          l.title.toLowerCase().includes(query) ||
          l.url.toLowerCase().includes(query) ||
          l.keywords.some((k) => k.toLowerCase().includes(query))
      );
    }
    return list;
  }, [allInternalLinks, linkCategoryFilter, linkSearchQuery]);

  // ── Smart Internal Link Opportunities ─────────────────────────────────────
  const internalLinkOpportunities = useMemo(() => {
    const content = value || "";
    if (!content.trim()) return [];

    const results: Array<{
      option: InternalLinkOption;
      keyword: string;
      totalCount: number;
      linkedCount: number;
      unlinkedCount: number;
    }> = [];

    // Scan high-value keywords across options
    for (const option of STATIC_INTERNAL_LINKS) {
      for (const keyword of option.keywords) {
        if (keyword.length < 3) continue;
        const status = checkKeywordStatus(content, keyword);
        if (status.totalCount > 0) {
          results.push({
            option,
            keyword,
            totalCount: status.totalCount,
            linkedCount: status.linkedCount,
            unlinkedCount: status.unlinkedCount,
          });
        }
      }
    }

    // Sort: unlinked opportunities first
    return results.sort((a, b) => b.unlinkedCount - a.unlinkedCount);
  }, [value]);

  const unlinkedOpportunitiesCount = useMemo(() => {
    return internalLinkOpportunities.filter((o) => o.unlinkedCount > 0).length;
  }, [internalLinkOpportunities]);

  const handleLinkKeyword = (keyword: string, url: string) => {
    const { updatedHtml, linked } = linkKeywordInHtml(value, keyword, url, false);
    if (linked) {
      onChange(updatedHtml);
      toast.success(`Linked "${keyword}" to ${url}!`);
    } else {
      toast.info(`No unlinked occurrence of "${keyword}" found.`);
    }
  };

  const handleLinkAllKeywords = () => {
    let current = value;
    let count = 0;
    for (const opp of internalLinkOpportunities) {
      if (opp.unlinkedCount > 0) {
        const { updatedHtml, linked } = linkKeywordInHtml(current, opp.keyword, opp.option.url, false);
        if (linked) {
          current = updatedHtml;
          count++;
        }
      }
    }

    if (count > 0) {
      onChange(current);
      toast.success(`Successfully added ${count} internal links across the article!`);
    } else {
      toast.info("All detected keywords are already linked.");
    }
  };

  // ── Insert Image Modal ────────────────────────────────────────────────────
  const handleOpenImageModal = () => {
    setImageUrl("");
    setImageAlt("Medical device regulatory compliance diagram");
    setImageCaption("");
    setIsImageModalOpen(true);
  };

  const handleApplyImage = () => {
    if (!imageUrl.trim()) {
      toast.error("Please provide an image URL.");
      return;
    }
    const cleanAlt = imageAlt.trim() || "Regulatory illustration";
    const captionHtml = imageCaption.trim()
      ? `<figcaption class="text-xs text-slate-500 text-center mt-2.5 italic">${imageCaption.trim()}</figcaption>`
      : "";
    const imgHtml = `<figure class="my-8"><img src="${imageUrl.trim()}" alt="${cleanAlt}" class="rounded-xl border border-slate-200 shadow-sm w-full object-cover" />${captionHtml}</figure><p></p>`;
    exec("insertHTML", imgHtml);
    setIsImageModalOpen(false);
    toast.success("Image inserted into article!");
  };

  // ── Elements & Callouts ───────────────────────────────────────────────────
  const insertCallout = (type: "info" | "warning") => {
    const calloutHtml =
      type === "info"
        ? `<div class="bg-blue-50/80 border-l-4 border-[#0b3a96] p-5 rounded-r-xl my-6"><p class="text-sm font-semibold text-[#0b3a96] mb-1">Key Regulatory Takeaway</p><p class="text-sm text-slate-700 m-0">Write the critical compliance point or notified body expectation here.</p></div><p></p>`
        : `<div class="bg-amber-50/80 border-l-4 border-amber-500 p-5 rounded-r-xl my-6"><p class="text-sm font-semibold text-amber-900 mb-1">Compliance Warning</p><p class="text-sm text-amber-950 m-0">Highlight common audit deficiencies, non-conformities, or regulatory timelines here.</p></div><p></p>`;
    exec("insertHTML", calloutHtml);
  };

  const insertTable = () => {
    const tableHtml = `
      <div class="overflow-x-auto my-6">
        <table class="w-full text-left border-collapse border border-slate-200 text-sm">
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 font-bold">
              <th class="border border-slate-200 p-3">Device Parameter</th>
              <th class="border border-slate-200 p-3">Regulatory Requirement</th>
              <th class="border border-slate-200 p-3">Review Authority / Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-200 p-3 font-semibold">Classification</td>
              <td class="border border-slate-200 p-3">Class A / B / C / D Risk Rules</td>
              <td class="border border-slate-200 p-3">CDSCO / State Licensing Authority</td>
            </tr>
            <tr>
              <td class="border border-slate-200 p-3 font-semibold">Quality System</td>
              <td class="border border-slate-200 p-3">ISO 13485:2016 / Schedule M-III</td>
              <td class="border border-slate-200 p-3">Notified Body Audit / Inspection</td>
            </tr>
            <tr>
              <td class="border border-slate-200 p-3 font-semibold">Technical Dossier</td>
              <td class="border border-slate-200 p-3">Device Master File (DMF) & Plant Master File (PMF)</td>
              <td class="border border-slate-200 p-3">Subject Expert Committee (SEC)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p></p>
    `;
    exec("insertHTML", tableHtml);
  };

  const insertChecklist = () => {
    const checkHtml = `
      <div class="my-6 rounded-xl border border-slate-200 bg-slate-50/50 p-5">
        <p class="text-sm font-bold text-slate-900 mb-3">Pre-Submission Regulatory Checklist</p>
        <ul class="space-y-2 text-sm text-slate-700 list-none p-0 m-0">
          <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Free Sale Certificate (FSC) verified with apostille / embassy attestation</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> ISO 13485:2016 certificate covering the applied manufacturing scope</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Device Master File (DMF) structured per IMDRF ToC format</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Plant Master File (PMF) including site layout and cleanroom validations</li>
          <li class="flex items-center gap-2"><span class="text-emerald-600 font-bold">✓</span> Indian Authorised Agent (AIR) Power of Attorney executed</li>
        </ul>
      </div>
      <p></p>
    `;
    exec("insertHTML", checkHtml);
  };

  const insertFaqBlock = () => {
    const faqHtml = `
      <div class="my-8 rounded-xl border border-blue-200 bg-blue-50/40 p-6">
        <h2 class="text-2xl font-bold text-[#0a192f] mb-4">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div class="rounded-lg bg-white p-4 border border-slate-200 shadow-2xs">
            <h3 class="text-base font-bold text-slate-900 m-0">What is the typical CDSCO review timeline for Class C and D devices?</h3>
            <p class="text-sm text-slate-700 mt-2 m-0">Under Medical Devices Rules 2017, higher-risk Class C and D devices take between six to nine months from SUGAM portal filing to grant of MD-15 import licence, inclusive of SEC review and query resolution.</p>
          </div>
          <div class="rounded-lg bg-white p-4 border border-slate-200 shadow-2xs">
            <h3 class="text-base font-bold text-slate-900 m-0">Can a foreign manufacturer hold an Indian MD-14 import license directly?</h3>
            <p class="text-sm text-slate-700 mt-2 m-0">No. Under Indian law, only an Indian entity holding a valid wholesale drug or medical device license (Form MD-42 or 20-B/21-B) can act as the Authorized Indian Representative (AIR) and legal license holder.</p>
          </div>
        </div>
      </div>
      <p></p>
    `;
    exec("insertHTML", faqHtml);
  };

  // Word & Reading statistics
  const strippedText = (value || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = strippedText ? strippedText.split(" ").length : 0;
  const readTimeMin = Math.max(1, Math.round(wordCount / 200));

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden relative">
      {/* Editor Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50/90 px-3 py-2">
        <div className="flex flex-wrap items-center gap-1">
          {/* Headings */}
          <button
            type="button"
            onClick={() => insertHeading("h2")}
            title="Heading 2 (H2)"
            className="flex items-center gap-1 rounded px-2 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            <Heading2 className="h-4 w-4" />
            <span>H2</span>
          </button>
          <button
            type="button"
            onClick={() => insertHeading("h3")}
            title="Heading 3 (H3)"
            className="flex items-center gap-1 rounded px-2 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200 transition"
          >
            <Heading3 className="h-4 w-4" />
            <span>H3</span>
          </button>
          <button
            type="button"
            onClick={() => insertHeading("p")}
            title="Normal Paragraph"
            className="rounded px-2 py-1 text-xs font-semibold text-slate-600 hover:bg-slate-200 transition"
          >
            P
          </button>

          <span className="mx-1 h-4 w-px bg-slate-300" />

          {/* Inline styles */}
          <button
            type="button"
            onClick={() => exec("bold")}
            title="Bold (Ctrl+B)"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <Bold className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => exec("italic")}
            title="Italic (Ctrl+I)"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <Italic className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => exec("underline")}
            title="Underline (Ctrl+U)"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <Underline className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => exec("strikeThrough")}
            title="Strikethrough"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <Strikethrough className="h-4 w-4" />
          </button>

          <span className="mx-1 h-4 w-px bg-slate-300" />

          {/* Lists */}
          <button
            type="button"
            onClick={() => exec("insertUnorderedList")}
            title="Bullet List"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <List className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => exec("insertOrderedList")}
            title="Numbered List"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <ListOrdered className="h-4 w-4" />
          </button>

          <span className="mx-1 h-4 w-px bg-slate-300" />

          {/* Link Controls */}
          <button
            type="button"
            onClick={handleOpenLinkModal}
            title="Insert or Edit Hyperlink (Ctrl+K)"
            className="flex items-center gap-1 rounded bg-blue-50 border border-blue-200 px-2 py-1 text-xs font-semibold text-[#0b3a96] hover:bg-blue-100 transition shadow-2xs"
          >
            <LinkIcon className="h-3.5 w-3.5" />
            <span>Link</span>
          </button>

          {/* Smart Internal Link Assistant Button */}
          <button
            type="button"
            onClick={() => setIsAssistantOpen(true)}
            title="Smart Internal Link Assistant: Scan & link regulatory keywords in content"
            className="flex items-center gap-1.5 rounded bg-emerald-50 border border-emerald-200 px-2 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100 transition shadow-2xs"
          >
            <Link2 className="h-3.5 w-3.5 text-emerald-700" />
            <span>Internal Links</span>
            {unlinkedOpportunitiesCount > 0 && (
              <span className="ml-1 rounded-full bg-emerald-600 px-1.5 py-0.2 text-[10px] font-bold text-white leading-none">
                {unlinkedOpportunitiesCount}
              </span>
            )}
          </button>

          <span className="mx-1 h-4 w-px bg-slate-300" />

          {/* Elements */}
          <button
            type="button"
            onClick={handleOpenImageModal}
            title="Insert Inline Image with SEO Alt Text"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <ImageIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={insertTable}
            title="Insert Regulatory Comparison Table"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <Table className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => insertCallout("info")}
            title="Insert Key Regulatory Takeaway Callout"
            className="flex items-center gap-1 rounded px-2 py-1 text-[11px] font-semibold text-[#0b3a96] bg-blue-50 border border-blue-200 hover:bg-blue-100 transition"
          >
            <Quote className="h-3.5 w-3.5" />
            <span>Callout</span>
          </button>
          <button
            type="button"
            onClick={insertChecklist}
            title="Insert Preparation Checklist"
            className="flex items-center gap-1 rounded px-2 py-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition"
          >
            <CheckSquare className="h-3.5 w-3.5" />
            <span>Checklist</span>
          </button>
          <button
            type="button"
            onClick={insertFaqBlock}
            title="Insert FAQ Q&A Section (Generates FAQ Schema)"
            className="flex items-center gap-1 rounded px-2 py-1 text-[11px] font-semibold text-purple-800 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition"
          >
            <HelpCircle className="h-3.5 w-3.5" />
            <span>FAQ Section</span>
          </button>
          <button
            type="button"
            onClick={() => exec("insertHorizontalRule")}
            title="Horizontal Divider"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-2xs">
            <button
              type="button"
              onClick={() => setMode("visual")}
              className={`flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold transition ${
                mode === "visual"
                  ? "bg-[#0b3a96] text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              <span>Visual Editor</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("html")}
              className={`flex items-center gap-1 rounded px-2.5 py-1 text-xs font-semibold transition ${
                mode === "html"
                  ? "bg-[#0b3a96] text-white shadow-2xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code className="h-3.5 w-3.5" />
              <span>HTML Source</span>
            </button>
          </div>
        </div>
      </div>

      {/* Editor Body */}
      {mode === "visual" ? (
        <div
          ref={editorRef}
          contentEditable
          onInput={handleVisualInput}
          onPaste={handlePaste}
          onKeyDown={handleKeyDown}
          data-placeholder={placeholder || "Start writing your regulatory guidance or paste formatted content directly..."}
          className="rich-editor-content min-h-[460px] p-6 text-slate-900 focus:outline-none max-w-none leading-relaxed"
        />
      ) : (
        <div className="p-2">
          <textarea
            rows={22}
            value={value}
            onChange={(e) => onChange(sanitizeArticleContent(e.target.value))}
            placeholder="Edit raw sanitized HTML code..."
            className="w-full rounded-lg border border-slate-200 bg-slate-900 p-4 font-mono text-xs text-emerald-400 focus:outline-none leading-relaxed transition"
          />
        </div>
      )}

      {/* Editor Bottom Status Bar */}
      <div className="flex flex-wrap items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500">
        <div className="flex items-center gap-4">
          <span>
            Words: <strong className="text-slate-800 font-semibold">{wordCount}</strong>
          </span>
          <span>
            Reading time: <strong className="text-slate-800 font-semibold">{readTimeMin} min</strong>
          </span>
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            Automatic CSS & Hyperlink Protection Active
          </span>
        </div>
        <div className="text-[11px] text-slate-400 flex items-center gap-2">
          <span>Press <strong>Ctrl+K</strong> to link selected text</span>
          <span>&middot;</span>
          <span>Paste from Word or Google Docs with formatting</span>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. Interactive Link Insertion Modal (No window.prompt!)
      ───────────────────────────────────────────────────────────── */}
      {isLinkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs">
          <div
            className="w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-2 text-[#0b3a96]">
                  <LinkIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {existingAnchorRef.current ? "Edit Hyperlink" : "Insert Hyperlink"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Connect internal pages, services, or regulatory guides for SEO authority.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsLinkModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Text to Display (Anchor Text)
                </label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="e.g. Free Sale Certificate, CDSCO Import License..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Destination URL
                </label>
                <input
                  type="text"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="e.g. /services/cdsco-medical-device-import-license-md14 or https://..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-slate-700 select-none">
                  <input
                    type="checkbox"
                    checked={linkTargetBlank}
                    onChange={(e) => setLinkTargetBlank(e.target.checked)}
                    className="rounded border-slate-300 text-[#0b3a96] focus:ring-[#0b3a96]"
                  />
                  <span>Open link in new browser tab (<code className="text-[11px] text-slate-500">_blank</code>)</span>
                </label>
              </div>

              {/* Internal Pages Browser */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-3 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5 text-[#0b3a96]" />
                    Select from NKB Regovanta Pages
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {filteredInternalLinks.length} matching pages
                  </span>
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-1">
                  {(["All", "Services", "Markets", "Industries", "Core Pages", "Guides"] as const).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setLinkCategoryFilter(cat)}
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold transition ${
                        linkCategoryFilter === cat
                          ? "bg-[#0b3a96] text-white"
                          : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Search Box */}
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={linkSearchQuery}
                    onChange={(e) => setLinkSearchQuery(e.target.value)}
                    placeholder="Search pages, services, or regulatory topics (e.g. CDSCO, MD-14, FDA, ISO)..."
                    className="w-full rounded-lg border border-slate-200 bg-white pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:border-[#0b3a96] focus:outline-none"
                  />
                </div>

                {/* Filtered Pages List */}
                <div className="max-h-48 overflow-y-auto rounded-lg border border-slate-200 bg-white divide-y divide-slate-100">
                  {filteredInternalLinks.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-400">
                      No internal pages match your query. You can type any URL in the box above.
                    </div>
                  ) : (
                    filteredInternalLinks.map((item, idx) => {
                      const isSelected = linkUrl === item.url;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setLinkUrl(item.url);
                            if (!linkText.trim()) {
                              setLinkText(item.title);
                            }
                          }}
                          className={`w-full flex items-center justify-between p-2.5 text-left text-xs transition ${
                            isSelected
                              ? "bg-blue-50/80 text-[#0b3a96] font-semibold"
                              : "hover:bg-slate-50 text-slate-700"
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <div className="flex items-center gap-1.5">
                              <span
                                className={`text-[10px] font-bold uppercase tracking-wider rounded px-1.5 py-0.2 ${
                                  item.category === "Services"
                                    ? "bg-blue-100 text-blue-800"
                                    : item.category === "Markets"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : item.category === "Industries"
                                    ? "bg-purple-100 text-purple-800"
                                    : item.category === "Guides"
                                    ? "bg-amber-100 text-amber-900"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {item.category}
                              </span>
                              <span className="truncate font-medium">{item.title}</span>
                            </div>
                            <span className="block truncate text-[11px] text-slate-400 font-mono mt-0.5">
                              {item.url}
                            </span>
                          </div>
                          {isSelected && <Check className="h-4 w-4 text-[#0b3a96] shrink-0" />}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
              <div>
                {existingAnchorRef.current && (
                  <button
                    type="button"
                    onClick={handleRemoveLink}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100 transition"
                  >
                    <Unlink className="h-3.5 w-3.5" />
                    <span>Remove Link</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsLinkModalOpen(false)}
                  className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyLink()}
                  disabled={!linkUrl.trim()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b3a96] px-4 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>{existingAnchorRef.current ? "Update Link" : "Insert Link"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          2. Smart Internal Link Assistant Modal (Auto-detection)
      ───────────────────────────────────────────────────────────── */}
      {isAssistantOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs">
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-800">
                  <Wand2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Smart Internal Link Assistant
                  </h3>
                  <p className="text-xs text-slate-500">
                    Automatically scans article text for regulatory terms and suggests high-authority internal links.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsAssistantOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Opportunities Status Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-200">
              <div className="text-xs text-slate-600">
                Found{" "}
                <strong className="text-slate-900 font-semibold">
                  {internalLinkOpportunities.length} regulatory terms
                </strong>{" "}
                in content &middot;{" "}
                <span className="text-emerald-700 font-bold">
                  {unlinkedOpportunitiesCount} available to link
                </span>
              </div>
              {unlinkedOpportunitiesCount > 0 && (
                <button
                  type="button"
                  onClick={handleLinkAllKeywords}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-3 py-1.5 text-xs font-semibold text-white shadow-2xs hover:bg-emerald-800 transition"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Link All Detected Keywords</span>
                </button>
              )}
            </div>

            {/* Detected Opportunities Table */}
            <div className="max-h-80 overflow-y-auto rounded-xl border border-slate-200 divide-y divide-slate-100">
              {internalLinkOpportunities.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-400">
                  No predefined regulatory keywords (e.g. CDSCO, MD-14, 510(k), Free Sale Certificate) detected in the current text yet. Write or paste more content and reopen the assistant.
                </div>
              ) : (
                internalLinkOpportunities.map((opp, idx) => {
                  const isLinked = opp.unlinkedCount === 0;
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 text-xs hover:bg-slate-50/80 transition"
                    >
                      <div className="min-w-0 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200 font-mono text-[11px]">
                            {opp.keyword}
                          </span>
                          <span className="text-slate-400">→</span>
                          <span className="font-semibold text-[#0b3a96] truncate">
                            {opp.option.title}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500">
                          <span className="font-mono text-slate-400">{opp.option.url}</span>
                          <span>•</span>
                          <span>
                            {opp.totalCount} in text ({opp.linkedCount} linked, {opp.unlinkedCount} unlinked)
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0">
                        {isLinked ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                            <Check className="h-3 w-3" />
                            Already Linked
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => handleLinkKeyword(opp.keyword, opp.option.url)}
                            className="inline-flex items-center gap-1 rounded bg-[#0b3a96] px-2.5 py-1 text-xs font-semibold text-white hover:bg-blue-800 transition"
                          >
                            <LinkIcon className="h-3 w-3" />
                            <span>Link This</span>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setIsAssistantOpen(false)}
                className="rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Close Assistant
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          3. Inline Image Insertion Modal (replaces window.prompt)
      ───────────────────────────────────────────────────────────── */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs">
          <div
            className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-blue-50 p-2 text-[#0b3a96]">
                  <ImageIcon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Insert Inline Image</h3>
                  <p className="text-xs text-slate-500">
                    Add diagram, flowchart, or regulatory visual inside article body.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Image URL (Mandatory)
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="e.g. /assets/brain/... or https://..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Image ALT Text (Critical for Google Image SEO)
                </label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Descriptive explanation for search engines and accessibility"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Caption (Optional)
                </label>
                <input
                  type="text"
                  value={imageCaption}
                  onChange={(e) => setImageCaption(e.target.value)}
                  placeholder="Visible caption below the image..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-slate-100 pt-3">
              <button
                type="button"
                onClick={() => setIsImageModalOpen(false)}
                className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApplyImage}
                disabled={!imageUrl.trim()}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b3a96] px-4 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
              >
                <Check className="h-3.5 w-3.5" />
                <span>Insert Image</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
