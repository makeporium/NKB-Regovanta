import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  KeyRound,
  Plus,
  Download,
  Upload,
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Edit2,
  Trash2,
  X,
  FileSpreadsheet,
} from "lucide-react";

export const Route = createFileRoute("/admin/seo/keywords")({
  component: KeywordsManagerPage,
});

interface KeywordItem {
  id: string;
  keyword: string;
  type: "Primary" | "Secondary";
  target_url: string;
  status: "Active" | "Inactive";
  notes?: string;
  created_at?: string;
  // Dynamic checks computed against live page
  in_title?: boolean;
  in_h1?: boolean;
  in_url?: boolean;
}

function KeywordsManagerPage() {
  const [keywords, setKeywords] = useState<KeywordItem[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  // Add / Edit Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editId, setEditId] = useState<string | null>(null);
  const [formKeyword, setFormKeyword] = useState("");
  const [formType, setFormType] = useState<"Primary" | "Secondary">("Primary");
  const [formTargetUrl, setFormTargetUrl] = useState("/");
  const [formStatus, setFormStatus] = useState<"Active" | "Inactive">("Active");
  const [formNotes, setFormNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // CSV Import Modal
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [csvContent, setCsvContent] = useState("");
  const [importPreview, setImportPreview] = useState<any[]>([]);
  const [importErrors, setImportErrors] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);

    const { data: kwRows } = await supabase.from("keywords").select("*").order("created_at", { ascending: false });
    const { data: pageRows } = await supabase.from("pages").select("url_path, name, h1");
    const { data: metaRows } = await supabase.from("seo_meta").select("target_url, seo_title");

    setPages(pageRows || []);

    const metaMap = new Map();
    for (const m of metaRows || []) metaMap.set(m.target_url, m.seo_title || "");

    const pageMap = new Map();
    for (const p of pageRows || []) pageMap.set(p.url_path, p);

    // Compute in_title, in_h1, in_url checks
    const enriched: KeywordItem[] = (kwRows || []).map((k) => {
      const kw = k.keyword.toLowerCase().trim();
      const target = k.target_url;
      const title = (metaMap.get(target) || "").toLowerCase();
      const page = pageMap.get(target);
      const h1 = (page?.h1 || "").toLowerCase();
      const slug = (target.split("/").pop() || "").toLowerCase();

      // Words filter
      const words = kw.split(/\s+/).filter((w: string) => !["in", "for", "the", "of", "and"].includes(w));
      const inTitle = title.includes(kw) || words.every((w: string) => title.includes(w));
      const inH1 = h1.includes(kw) || words.every((w: string) => h1.includes(w));
      const inUrl = slug.includes(kw.replace(/\s+/g, "-")) || words.some((w: string) => slug.includes(w));

      return {
        ...k,
        in_title: inTitle,
        in_h1: inH1,
        in_url: inUrl,
      };
    });

    setKeywords(enriched);
    setLoading(false);
  };

  const handleOpenAdd = () => {
    setModalMode("add");
    setEditId(null);
    setFormKeyword("");
    setFormType("Primary");
    setFormTargetUrl(pages[0]?.url_path || "/");
    setFormStatus("Active");
    setFormNotes("");
    setIsModalOpen(true);
  };

  const handleOpenEdit = (item: KeywordItem) => {
    setModalMode("edit");
    setEditId(item.id);
    setFormKeyword(item.keyword);
    setFormType(item.type);
    setFormTargetUrl(item.target_url);
    setFormStatus(item.status);
    setFormNotes(item.notes || "");
    setIsModalOpen(true);
  };

  const handleDelete = async (item: KeywordItem) => {
    if (!confirm(`Delete target keyword "${item.keyword}"?`)) return;
    const { error } = await supabase.from("keywords").delete().eq("id", item.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Keyword deleted.");
      loadData();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const cleanKw = formKeyword.trim();
    if (formType === "Primary") {
      const existingPrimary = keywords.find(
        (k) =>
          k.keyword.toLowerCase() === cleanKw.toLowerCase() &&
          k.type === "Primary" &&
          k.target_url !== formTargetUrl &&
          k.id !== editId
      );
      if (existingPrimary) {
        toast.warning(
          `Notice: "${cleanKw}" is already set as Primary on "${existingPrimary.target_url}". Competing on multiple URLs may cannibalize rankings.`
        );
      }
    }

    if (modalMode === "add") {
      const { error } = await supabase.from("keywords").insert({
        keyword: cleanKw,
        type: formType,
        target_url: formTargetUrl,
        status: formStatus,
        notes: formNotes,
      });

      if (error) toast.error(error.message);
      else {
        toast.success(`Keyword "${cleanKw}" saved.`);
        setIsModalOpen(false);
        loadData();
      }
    } else if (modalMode === "edit" && editId) {
      const { error } = await supabase
        .from("keywords")
        .update({
          keyword: cleanKw,
          type: formType,
          target_url: formTargetUrl,
          status: formStatus,
          notes: formNotes,
        })
        .eq("id", editId);

      if (error) toast.error(error.message);
      else {
        toast.success("Keyword updated.");
        setIsModalOpen(false);
        loadData();
      }
    }

    setSubmitting(false);
  };

  // CSV Export
  const handleExportCsv = () => {
    const header = "keyword,type,target_url,status,notes";
    const rows = keywords.map(
      (k) =>
        `"${k.keyword.replace(/"/g, '""')}","${k.type}","${k.target_url}","${k.status}","${(k.notes || "").replace(/"/g, '""')}"`
    );
    const csvData = [header, ...rows].join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `nkb_target_keywords_${new Date().toISOString().split("T")[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    toast.success("Keywords exported to CSV!");
  };

  // CSV Import Parse
  const handleCsvTextChange = (text: string) => {
    setCsvContent(text);
    const lines = text.trim().split("\n");
    if (lines.length <= 1) {
      setImportPreview([]);
      setImportErrors([]);
      return;
    }

    const parsed: any[] = [];
    const errors: string[] = [];
    const seenKeywords = new Set(keywords.map((k) => k.keyword.toLowerCase().trim()));

    // Skip header line
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i]?.trim();
      if (!line) continue;
      const parts = line.split(",").map((p) => p.replace(/^["']|["']$/g, "").trim());
      const [kw, type, target, status, notes] = parts;

      if (!kw) {
        errors.push(`Row ${i + 1}: Missing keyword`);
        continue;
      }
      if (seenKeywords.has(kw.toLowerCase())) {
        errors.push(`Row ${i + 1}: Duplicate "${kw}" (will be skipped)`);
        continue;
      }

      parsed.push({
        keyword: kw,
        type: type === "Secondary" ? "Secondary" : "Primary",
        target_url: target || "/",
        status: status === "Inactive" ? "Inactive" : "Active",
        notes: notes || "",
      });
      seenKeywords.add(kw.toLowerCase());
    }

    setImportPreview(parsed);
    setImportErrors(errors);
  };

  const handleExecuteImport = async () => {
    if (importPreview.length === 0) return;
    setSubmitting(true);
    const { error } = await supabase.from("keywords").insert(importPreview);
    setSubmitting(false);

    if (error) {
      toast.error("Import failed: " + error.message);
    } else {
      toast.success(`Successfully imported ${importPreview.length} keywords!`);
      setIsImportModalOpen(false);
      setCsvContent("");
      setImportPreview([]);
      loadData();
    }
  };

  const filteredKeywords = useMemo(() => {
    return keywords.filter((k) => {
      const matchSearch =
        k.keyword.toLowerCase().includes(search.toLowerCase()) ||
        k.target_url.toLowerCase().includes(search.toLowerCase());
      const matchType = typeFilter === "all" || k.type === typeFilter;
      const matchStatus = statusFilter === "all" || k.status === statusFilter;
      return matchSearch && matchType && matchStatus;
    });
  }, [keywords, search, typeFilter, statusFilter]);

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">SEO</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Keywords</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Keywords Inventory</h1>
            <p className="mt-0.5 text-xs text-slate-500">
              Map target search queries to pages and verify presence across Titles, H1 headings, and URLs.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleExportCsv}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CSV</span>
            </button>
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
            >
              <Upload className="h-3.5 w-3.5" />
              <span>Import CSV</span>
            </button>
            <button
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#082a6d] transition"
            >
              <Plus className="h-4 w-4" />
              <span>Add Keyword</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs sm:grid-cols-4">
        <div className="relative sm:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search keywords or URLs..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          />
        </div>

        <div>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          >
            <option value="all">All Types (Primary & Secondary)</option>
            <option value="Primary">Primary Keywords</option>
            <option value="Secondary">Secondary Keywords</option>
          </select>
        </div>

        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[760px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-5 py-3">Target Keyword</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Target Page URL</th>
                <th className="px-5 py-3 text-center">In Title?</th>
                <th className="px-5 py-3 text-center">In H1?</th>
                <th className="px-5 py-3 text-center">In URL?</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-500">
                    Loading target keywords...
                  </td>
                </tr>
              ) : filteredKeywords.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-5 py-8 text-center text-slate-500">
                    No keywords found.
                  </td>
                </tr>
              ) : (
                filteredKeywords.map((k) => (
                  <tr key={k.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3.5 font-medium text-slate-900">
                      <div>{k.keyword}</div>
                      {k.notes && <div className="text-[11px] text-slate-500 italic mt-0.5">{k.notes}</div>}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          k.type === "Primary"
                            ? "bg-blue-50 text-[#0b3a96] border border-blue-200"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {k.type}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 font-mono text-[#0b3a96] max-w-xs truncate">{k.target_url}</td>
                    <td className="px-5 py-3.5 text-center">
                      {k.in_title ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 inline" />
                      ) : (
                        <XCircle className="h-4 w-4 text-slate-300 inline" />
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {k.in_h1 ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 inline" />
                      ) : (
                        <XCircle className="h-4 w-4 text-slate-300 inline" />
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {k.in_url ? (
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 inline" />
                      ) : (
                        <XCircle className="h-4 w-4 text-slate-300 inline" />
                      )}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                          k.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {k.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleOpenEdit(k)}
                          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(k)}
                          className="rounded p-1.5 text-rose-600 hover:bg-rose-50"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Add / Edit Modal ────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-semibold text-slate-900">
                {modalMode === "add" ? "Add Target Keyword" : "Edit Target Keyword"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700">Keyword Phrase</label>
                <input
                  type="text"
                  required
                  value={formKeyword}
                  onChange={(e) => setFormKeyword(e.target.value)}
                  placeholder="e.g. CDSCO medical device registration"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700">Keyword Type</label>
                  <select
                    value={formType}
                    onChange={(e) => setFormType(e.target.value as any)}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                  >
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700">Status</label>
                  <select
                    value={formStatus}
                    onChange={(e) => setFormStatus(e.target.value as any)}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">Target Page URL</label>
                <input
                  type="text"
                  required
                  value={formTargetUrl}
                  onChange={(e) => setFormTargetUrl(e.target.value)}
                  placeholder="/services/india"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">Notes / Search Intent</label>
                <textarea
                  rows={2}
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="Why this URL was chosen, search intent..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white hover:bg-[#082a6d] disabled:opacity-50 transition"
                >
                  {submitting ? "Saving..." : "Save Keyword"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── CSV Import Modal ────────────────────────────────────────────── */}
      {isImportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs overflow-y-auto">
          <div className="my-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-base font-bold text-slate-900">
                <FileSpreadsheet className="h-5 w-5 text-[#0b3a96]" />
                <span>Import Keywords from CSV</span>
              </div>
              <button
                onClick={() => setIsImportModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Paste your CSV data below. Header columns must be in this exact order:
              <br />
              <code className="text-[#0b3a96] font-mono">keyword,type,target_url,status,notes</code>
            </p>

            <textarea
              rows={6}
              value={csvContent}
              onChange={(e) => handleCsvTextChange(e.target.value)}
              placeholder={`keyword,type,target_url,status,notes\nMedical device regulatory consultant in India,Primary,/services/india,Active,Main service page`}
              className="w-full rounded-xl border border-slate-300 bg-white p-3 font-mono text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
            />

            {importErrors.length > 0 && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <span>Import Warnings / Skipped Rows:</span>
                </div>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] pl-2 text-amber-800">
                  {importErrors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            {importPreview.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Preview ({importPreview.length} valid rows ready to import):</span>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 max-h-48 overflow-y-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 uppercase font-semibold">
                      <tr>
                        <th className="px-3 py-2">Keyword</th>
                        <th className="px-3 py-2">Type</th>
                        <th className="px-3 py-2">Target</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {importPreview.slice(0, 10).map((row, idx) => (
                        <tr key={idx}>
                          <td className="px-3 py-1.5 text-slate-900 font-medium">{row.keyword}</td>
                          <td className="px-3 py-1.5 text-slate-600">{row.type}</td>
                          <td className="px-3 py-1.5 font-mono text-[#0b3a96]">{row.target_url}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsImportModalOpen(false)}
                className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={submitting || importPreview.length === 0}
                onClick={handleExecuteImport}
                className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-[#082a6d] disabled:opacity-50 transition"
              >
                {submitting ? "Importing..." : `Import ${importPreview.length} Keywords`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
