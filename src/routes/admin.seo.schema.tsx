import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Code2, Search, ExternalLink, Save, CheckCircle2, AlertTriangle, X, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/seo/schema")({
  component: SchemaManagerPage,
});

interface SchemaRecord {
  id: string;
  target_url: string;
  schema_type: string;
  is_enabled: boolean;
  custom_json?: string;
  faq_items?: Array<{ question: string; answer: string }>;
}

function SchemaManagerPage() {
  const [schemas, setSchemas] = useState<SchemaRecord[]>([]);
  const [pages, setPages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Edit Modal State
  const [editing, setEditing] = useState<SchemaRecord | null>(null);
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data: pageRows } = await supabase.from("pages").select("url_path, name");
    const { data: schemaRows } = await supabase.from("schema_data").select("*");

    setPages(pageRows || []);

    const schemaMap = new Map();
    for (const s of schemaRows || []) schemaMap.set(s.target_url, s);

    const merged: SchemaRecord[] = (pageRows || []).map((p) => {
      const s = schemaMap.get(p.url_path) || {};
      return {
        id: s.id || p.url_path,
        target_url: p.url_path,
        schema_type: s.schema_type || "WebPage",
        is_enabled: s.is_enabled ?? true,
        custom_json: s.custom_json || "",
        faq_items: s.faq_items || [],
      };
    });

    setSchemas(merged);
    setLoading(false);
  };

  const handleOpenEdit = (record: SchemaRecord) => {
    setEditing({ ...record });
    setJsonError(null);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;

    // Validate JSON syntax if custom JSON is present
    if (editing.custom_json?.trim()) {
      try {
        let clean = editing.custom_json.trim();
        if (clean.startsWith("<script")) {
          clean = clean.replace(/<script[^>]*>|<\/script>/gi, "");
        }
        JSON.parse(clean);
        setJsonError(null);
      } catch (err: any) {
        setJsonError(`JSON Syntax Error: ${err.message}`);
        toast.error(`Invalid JSON: ${err.message}`);
        return;
      }
    }

    setSaving(true);
    const { error } = await supabase.from("schema_data").upsert(
      {
        target_url: editing.target_url,
        schema_type: editing.schema_type,
        is_enabled: editing.is_enabled,
        custom_json: editing.custom_json,
        faq_items: editing.faq_items,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "target_url" }
    );

    setSaving(false);
    if (error) {
      toast.error("Failed to save schema: " + error.message);
    } else {
      toast.success("Structured data schema saved!");
      setEditing(null);
      loadData();
    }
  };

  const addFaqPair = () => {
    if (!editing) return;
    const items = [...(editing.faq_items || []), { question: "", answer: "" }];
    setEditing({ ...editing, faq_items: items });
  };

  const removeFaqPair = (index: number) => {
    if (!editing) return;
    const items = (editing.faq_items || []).filter((_, idx) => idx !== index);
    setEditing({ ...editing, faq_items: items });
  };

  const updateFaq = (index: number, key: "question" | "answer", val: string) => {
    if (!editing) return;
    const items = [...(editing.faq_items || [])];
    const current = items[index] || { question: "", answer: "" };
    items[index] = { ...current, [key]: val };
    setEditing({ ...editing, faq_items: items });
  };

  const filtered = schemas.filter(
    (s) =>
      s.target_url.toLowerCase().includes(search.toLowerCase()) ||
      s.schema_type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">SEO</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Schema Markup</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Schema Markup (JSON-LD)</h1>
            <p className="mt-0.5 text-xs text-slate-500">
              Define rich snippets for Google search results (Organization, ProfessionalService, FAQPage, Article).
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="https://validator.schema.org/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
            >
              <span>Schema Validator</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>
            <a
              href="https://search.google.com/test/rich-results"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition"
            >
              <span>Google Rich Results</span>
              <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by URL path or schema type..."
          className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none shadow-xs"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[700px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-5 py-3">Page URL Path</th>
                <th className="px-5 py-3">Primary Schema Type</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Mode</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                    Loading schema records...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-slate-500">
                    No records matching search.
                  </td>
                </tr>
              ) : (
                filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3.5 font-mono font-medium text-slate-900">{s.target_url}</td>
                    <td className="px-5 py-3.5">
                      <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-[#0b3a96] border border-blue-200">
                        {s.schema_type}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      {s.is_enabled ? (
                        <span className="text-emerald-700 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                          Active
                        </span>
                      ) : (
                        <span className="text-slate-400 font-medium">Disabled</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-slate-500">
                      {s.custom_json ? (
                        <span className="text-purple-700 font-mono text-[11px] font-semibold">Custom JSON-LD</span>
                      ) : (
                        <span>Automated</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                        onClick={() => handleOpenEdit(s)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-[#0b3a96] hover:text-white hover:border-[#0b3a96] transition"
                      >
                        <Code2 className="h-3.5 w-3.5" />
                        <span>Configure</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs overflow-y-auto">
          <div className="my-8 w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-base font-bold text-slate-900">Schema Configuration</h3>
                <p className="text-xs text-slate-500 font-mono">{editing.target_url}</p>
              </div>
              <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-slate-700">
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700">Schema Type</label>
                  <select
                    value={editing.schema_type}
                    onChange={(e) => setEditing({ ...editing, schema_type: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                  >
                    <option value="WebPage">WebPage</option>
                    <option value="Service">ProfessionalService / Service</option>
                    <option value="Organization">Organization</option>
                    <option value="FAQPage">FAQPage</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 py-2">
                    <input
                      type="checkbox"
                      checked={editing.is_enabled}
                      onChange={(e) => setEditing({ ...editing, is_enabled: e.target.checked })}
                      className="h-4 w-4 rounded border-slate-300 text-[#0b3a96] focus:ring-blue-500"
                    />
                    <span>Enable Structured Data Output</span>
                  </label>
                </div>
              </div>

              {/* FAQ Repeating Field if FAQPage */}
              {editing.schema_type === "FAQPage" && (
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-800">
                      FAQ Question & Answer Pairs
                    </span>
                    <button
                      type="button"
                      onClick={addFaqPair}
                      className="inline-flex items-center gap-1 rounded bg-[#0b3a96] px-2.5 py-1 text-[11px] font-medium text-white hover:bg-[#082a6d]"
                    >
                      <Plus className="h-3 w-3" />
                      <span>Add Q&A</span>
                    </button>
                  </div>

                  {(editing.faq_items || []).map((faq, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-200 bg-white p-3 space-y-2 relative shadow-xs"
                    >
                      <button
                        type="button"
                        onClick={() => removeFaqPair(idx)}
                        className="absolute top-2 right-2 text-slate-400 hover:text-rose-600"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                      <div>
                        <input
                          type="text"
                          value={faq.question}
                          onChange={(e) => updateFaq(idx, "question", e.target.value)}
                          placeholder={`Question ${idx + 1}...`}
                          className="w-full rounded border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800"
                        />
                      </div>
                      <div>
                        <textarea
                          rows={2}
                          value={faq.answer}
                          onChange={(e) => updateFaq(idx, "answer", e.target.value)}
                          placeholder="Answer content (must actually appear on the page)..."
                          className="w-full rounded border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-800"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Custom JSON-LD */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium text-slate-700">
                    Custom JSON-LD (Advanced Override)
                  </label>
                  {jsonError && <span className="text-[11px] text-rose-600 font-medium">{jsonError}</span>}
                </div>
                <textarea
                  rows={5}
                  value={editing.custom_json || ""}
                  onChange={(e) => setEditing({ ...editing, custom_json: e.target.value })}
                  placeholder='{"@context": "https://schema.org", ...}'
                  className={`mt-1.5 w-full rounded-lg border bg-white p-3 font-mono text-xs text-emerald-800 focus:outline-none ${
                    jsonError ? "border-rose-500" : "border-slate-300 focus:border-[#0b3a96]"
                  }`}
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Accepts JSON with or without &lt;script&gt; tags. Syntax is verified automatically.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditing(null)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-[#082a6d] disabled:opacity-50 transition"
                >
                  {saving ? "Saving..." : "Save Schema"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
