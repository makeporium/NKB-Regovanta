import React, { useRef, useState, useEffect } from "react";
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
} from "lucide-react";

interface RichBlogEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
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

  // Extract main or body inner content if present
  const mainMatch = cleaned.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch && mainMatch[1]) {
    cleaned = mainMatch[1];
  } else {
    const bodyMatch = cleaned.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch && bodyMatch[1]) cleaned = bodyMatch[1];
  }

  // Remove trailing or leading html/body/main tags
  cleaned = cleaned.replace(/<\/?(?:html|body|main)[^>]*>/gi, "").trim();

  return cleaned;
}

export function RichBlogEditor({ value, onChange, placeholder }: RichBlogEditorProps) {
  const [mode, setMode] = useState<"visual" | "html">("visual");
  const editorRef = useRef<HTMLDivElement>(null);
  const isUpdatingFromProp = useRef(false);

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
      // Split paragraphs by newlines
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

  const exec = (command: string, value: string | undefined = undefined) => {
    if (mode === "html") return;
    editorRef.current?.focus();
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const insertHeading = (level: "h2" | "h3" | "p") => {
    if (mode === "html") return;
    exec("formatBlock", `<${level}>`);
  };

  const insertLink = () => {
    const url = window.prompt("Enter destination URL (e.g. https://www.nkbregovanta.com/...):");
    if (!url) return;
    exec("createLink", url);
  };

  const insertImage = () => {
    const url = window.prompt("Enter Image URL (e.g. /assets/brain/... or https://...):");
    if (!url) return;
    const alt = window.prompt("Enter Image Alt Description (Mandatory for SEO):", "Regulatory compliance diagram");
    const imgHtml = `<figure class="my-8"><img src="${url}" alt="${alt || ""}" class="rounded-xl border border-slate-200 shadow-sm w-full object-cover" /><figcaption class="text-xs text-slate-500 text-center mt-2">${alt || ""}</figcaption></figure><p></p>`;
    exec("insertHTML", imgHtml);
  };

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
          </tbody>
        </table>
      </div>
      <p></p>
    `;
    exec("insertHTML", tableHtml);
  };

  const insertChecklist = () => {
    const checklistHtml = `
      <div class="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
        <p class="font-bold text-slate-900 text-sm mb-3">Pre-Submission Preparation Checklist:</p>
        <ul class="list-disc pl-5 space-y-2 text-sm text-slate-700">
          <li>Device Master File (DMF) structured per ASEAN CSDT or STED format.</li>
          <li>Plant Master File (PMF) validated for manufacturing site compliance.</li>
          <li>Free Sale Certificate (FSC) authenticated by competent health authority.</li>
          <li>Labels, IFU, and packaging mock-ups conforming to medical device rules.</li>
        </ul>
      </div>
      <p></p>
    `;
    exec("insertHTML", checklistHtml);
  };

  const insertFaqBlock = () => {
    const faqHtml = `
      <div class="faq-section my-8 border-t border-slate-200 pt-6">
        <h2 class="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div class="faq-item bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h3 class="text-base font-bold text-slate-900 mb-2">What is the typical timeline for CDSCO medical device registration?</h3>
            <p class="text-sm text-slate-700 m-0">Timelines vary by classification: Class A devices take approximately 1–2 months, Class B devices 3–5 months, and Class C/D devices 6–9 months depending on Notified Body inspection and Subject Expert Committee (SEC) review.</p>
          </div>
          <div class="faq-item bg-slate-50 border border-slate-200 rounded-lg p-4">
            <h3 class="text-base font-bold text-slate-900 mb-2">Is an Indian Authorized Agent (IAA) mandatory for foreign manufacturers?</h3>
            <p class="text-sm text-slate-700 m-0">Yes, foreign manufacturers without a registered legal entity in India must appoint an Indian Authorized Agent holding a valid wholesale drug/device licence to submit registration applications on the SUGAM portal.</p>
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
    <div className="rounded-xl border border-slate-200 bg-white shadow-xs overflow-hidden">
      {/* Editor Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50/80 px-3 py-2">
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

          {/* Elements */}
          <button
            type="button"
            onClick={insertLink}
            title="Insert Link"
            className="rounded p-1 text-slate-700 hover:bg-slate-200 transition"
          >
            <LinkIcon className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={insertImage}
            title="Insert Inline Image"
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
          data-placeholder={placeholder || "Start writing your regulatory guidance or paste formatted content directly..."}
          className="rich-editor-content min-h-[460px] p-6 text-slate-900 focus:outline-none prose prose-slate lg:prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-[#0b3a96] prose-a:underline hover:prose-a:text-blue-800 prose-img:rounded-xl prose-table:border prose-table:border-slate-200 prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-t prose-td:border-slate-200"
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
          <span>Words: <strong className="text-slate-800 font-semibold">{wordCount}</strong></span>
          <span>Reading time: <strong className="text-slate-800 font-semibold">{readTimeMin} min</strong></span>
          <span className="flex items-center gap-1 text-emerald-700 font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            Automatic CSS Bleed Protection Active
          </span>
        </div>
        <div className="text-[11px] text-slate-400">
          Visual WYSIWYG mode active &middot; Paste from Word or Docs with formatting intact
        </div>
      </div>
    </div>
  );
}
