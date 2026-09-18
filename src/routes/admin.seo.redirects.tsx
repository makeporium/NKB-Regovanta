import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  ArrowRightLeft,
  Plus,
  Download,
  Upload,
  Search,
  CheckCircle2,
  AlertTriangle,
  Edit2,
  Trash2,
  X,
  Power,
  Clock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/admin/seo/redirects")({
  component: RedirectsManagerPage,
});

interface RedirectRule {
  id: string;
  old_path: string;
  new_path: string;
  status_code: 301 | 302;
  is_active: boolean;
  hits: number;
  last_hit_at?: string | null;
  created_at?: string;
}

function RedirectsManagerPage() {
  const [redirects, setRedirects] = useState<RedirectRule[]>([]);
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Add / Edit Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editId, setEditId] = useState<string | null>(null);
  const [formOldPath, setFormOldPath] = useState("");
  const [formNewPath, setFormNewPath] = useState("");
  const [formStatusCode, setFormStatusCode] = useState<301 | 302>(301);
  const [formIsActive, setFormIsActive] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Chains and loop warnings
  const [chainWarning, setChainWarning] = useState<string | null>(null);

  useEffect(() => {
    loadData();
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get("from");
    if (fromUrl) {
      setModalMode("add");
      setEditId(null);
      setFormOldPath(fromUrl);
      setFormNewPath("");
      setFormStatusCode(301);
      setFormIsActive(true);
      setChainWarning(null);
      setIsModalOpen(true);
    }
  }, []);

  const loadData = async () => {
    setLoading(true);
    const { data: redirRows } = await supabase
      .from("redirects")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: pageRows } = await supabase.from("pages").select("url_path");
    setPages((pageRows || []).map((p) => p.url_path));
    setRedirects(redirRows || []);
    setLoading(false);
  };

  const normalizePath = (p: string) => {
    let clean = p.trim();
    try {
      if (clean.startsWith("http://") || clean.startsWith("https://")) {
        clean = new URL(clean).pathname;
      }
    } catch {}
    if (!clean.startsWith("/")) clean = "/" + clean;
    return clean.replace(/\/$/, "") || "/";
  };

  const handleOpenAdd = () => {
    setModalMode("add");
    setEditId(null);
    setFormOldPath("");
    setFormNewPath("");
    setFormStatusCode(301);
    setFormIsActive(true);
    setChainWarning(null);
    setIsModalOpen(true);
  };

  const handleOpenEdit = (rule: RedirectRule) => {
    setModalMode("edit");
    setEditId(rule.id);
    setFormOldPath(rule.old_path);
    setFormNewPath(rule.new_path);
    setFormStatusCode(rule.status_code);
    setFormIsActive(rule.is_active);
    setChainWarning(null);
    setIsModalOpen(true);
  };

  const handleToggleActive = async (rule: RedirectRule) => {
    const nextVal = !rule.is_active;
    const { error } = await supabase
      .from("redirects")
      .update({ is_active: nextVal })
      .eq("id", rule.id);

    if (error) {
      toast.error(error.message);
    } else {
      setRedirects((prev) =>
        prev.map((r) => (r.id === rule.id ? { ...r, is_active: nextVal } : r))
      );
      toast.success(`Redirect ${nextVal ? "activated" : "paused"}.`);
    }
  };

  const handleDelete = async (rule: RedirectRule) => {
    if (!confirm(`Delete redirect rule from "${rule.old_path}" to "${rule.new_path}"?`)) return;
    const { error } = await supabase.from("redirects").delete().eq("id", rule.id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Redirect deleted.");
      loadData();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const oldPath = normalizePath(formOldPath);
    const newPath = normalizePath(formNewPath);

    // Safety checks per brief:
    // 1. Self redirect check
    if (oldPath === newPath) {
      toast.error("Validation Error: A URL cannot redirect to itself.");
      setSubmitting(false);
      return;
    }

    // 2. Loop check (A -> B, then B -> A)
    const reverseLoop = redirects.find(
      (r) => r.old_path === newPath && r.new_path === oldPath && r.id !== editId
    );
    if (reverseLoop) {
      toast.error(
        `Validation Error: Redirect loop detected! "${newPath}" already redirects back to "${oldPath}".`
      );
      setSubmitting(false);
      return;
    }

    // 3. Chain check (A -> B, and B -> C)
    const downstream = redirects.find((r) => r.old_path === newPath && r.id !== editId);
    if (downstream && !chainWarning) {
      setChainWarning(
        `Chain detected: "${newPath}" redirects to "${downstream.new_path}". Would you like to point "${oldPath}" straight to "${downstream.new_path}"?`
      );
      setSubmitting(false);
      return;
    }

    // 4. Live page warning
    if (pages.includes(oldPath)) {
      toast.warning(`Note: "${oldPath}" matches a currently published live page. This redirect will override it.`);
    }

    if (modalMode === "add") {
      const { error } = await supabase.from("redirects").insert({
        old_path: oldPath,
        new_path: newPath,
        status_code: formStatusCode,
        is_active: formIsActive,
      });

      if (error) {
        toast.error("Failed to create redirect: " + error.message);
      } else {
        toast.success(`301 redirect created from "${oldPath}" to "${newPath}".`);
        setIsModalOpen(false);
        loadData();
      }
    } else if (modalMode === "edit" && editId) {
      const { error } = await supabase
        .from("redirects")
        .update({
          old_path: oldPath,
          new_path: newPath,
          status_code: formStatusCode,
          is_active: formIsActive,
        })
        .eq("id", editId);

      if (error) {
        toast.error("Failed to update redirect: " + error.message);
      } else {
        toast.success("Redirect rule updated.");
        setIsModalOpen(false);
        loadData();
      }
    }

    setSubmitting(false);
  };

  const handleExportCsv = () => {
    const header = "old_path,new_path,status_code,is_active,hits,last_hit_at";
    const rows = redirects.map(
      (r) =>
        `"${r.old_path}","${r.new_path}",${r.status_code},${r.is_active},${r.hits || 0},"${r.last_hit_at || ""}"`
    );
    const csvData = [header, ...rows].join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `nkb_redirects_${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Exported redirects to CSV!");
  };

  const filteredRedirects = useMemo(() => {
    return redirects.filter((r) => {
      const matchSearch =
        r.old_path.toLowerCase().includes(search.toLowerCase()) ||
        r.new_path.toLowerCase().includes(search.toLowerCase());
      const matchStatus =
        statusFilter === "all" ||
        (statusFilter === "active" && r.is_active) ||
        (statusFilter === "inactive" && !r.is_active) ||
        (statusFilter === "301" && r.status_code === 301) ||
        (statusFilter === "302" && r.status_code === 302);
      return matchSearch && matchStatus;
    });
  }, [redirects, search, statusFilter]);

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">SEO</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Redirects</span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">HTTP Redirects (301 & 302)</h1>
            <p className="mt-0.5 text-xs text-slate-500">
              Manage permanent and temporary HTTP server-side redirects with automated hit tracking.
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
              onClick={handleOpenAdd}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#082a6d] transition"
            >
              <Plus className="h-4 w-4" />
              <span>Add Redirect</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs sm:grid-cols-4">
        <div className="relative sm:col-span-3">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by source path or destination target..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          />
        </div>

        <div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          >
            <option value="all">All Redirect Rules</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
            <option value="301">301 Permanent Only</option>
            <option value="302">302 Temporary Only</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[760px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-5 py-3">Old URL Path</th>
                <th className="px-5 py-3">Destination Target</th>
                <th className="px-5 py-3">HTTP Type</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-center">Hits</th>
                <th className="px-5 py-3">Last Triggered</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-slate-500">
                    Loading redirects...
                  </td>
                </tr>
              ) : filteredRedirects.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-5 py-8 text-center text-slate-500">
                    No redirect rules configured.
                  </td>
                </tr>
              ) : (
                filteredRedirects.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50 transition">
                    <td className="px-5 py-3.5 font-mono text-slate-800">{r.old_path}</td>
                    <td className="px-5 py-3.5 font-mono text-[#0b3a96]">
                      <div className="flex items-center gap-1.5">
                        <ArrowRight className="h-3 w-3 text-slate-400" />
                        <span>{r.new_path}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                          r.status_code === 301
                            ? "bg-blue-50 text-[#0b3a96] border border-blue-200"
                            : "bg-purple-50 text-purple-700 border border-purple-200"
                        }`}
                      >
                        {r.status_code} {r.status_code === 301 ? "Permanent" : "Temporary"}
                      </span>
                    </td>
                    <td className="px-5 py-3.5">
                      <button
                        onClick={() => handleToggleActive(r)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium transition ${
                          r.is_active
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                            : "bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200"
                        }`}
                      >
                        <Power className="h-3 w-3" />
                        <span>{r.is_active ? "Active" : "Paused"}</span>
                      </button>
                    </td>
                    <td className="px-5 py-3.5 text-center font-mono font-semibold text-slate-700">
                      {r.hits || 0}
                    </td>
                    <td className="px-5 py-3.5 text-slate-500">
                      {r.last_hit_at ? (
                        new Date(r.last_hit_at).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })
                      ) : (
                        <span className="text-slate-400">Never</span>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => handleOpenEdit(r)}
                          className="rounded p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                          title="Edit"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(r)}
                          className="rounded p-1.5 text-rose-600 hover:bg-rose-50"
                          title="Delete"
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
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-semibold text-slate-900">
                {modalMode === "add" ? "Create Redirect Rule" : "Edit Redirect Rule"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {chainWarning && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900 space-y-2">
                <p className="font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0" />
                  <span>Redirect Chain Warning</span>
                </p>
                <p className="text-[11px] leading-relaxed">{chainWarning}</p>
                <div className="flex justify-end gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setChainWarning(null);
                      setSubmitting(false);
                    }}
                    className="rounded bg-amber-600 px-2.5 py-1 text-[10px] font-semibold text-white hover:bg-amber-700"
                  >
                    Save As-Is
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700">Old URL Path</label>
                <input
                  type="text"
                  required
                  value={formOldPath}
                  onChange={(e) => setFormOldPath(e.target.value)}
                  placeholder="/old-service-page"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none font-mono"
                />
                <p className="mt-1 text-[11px] text-slate-500">
                  Store path without domain. Trailing slashes are normalized automatically.
                </p>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">New Target Destination</label>
                <input
                  type="text"
                  required
                  value={formNewPath}
                  onChange={(e) => setFormNewPath(e.target.value)}
                  placeholder="/services/new-service-page"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none font-mono"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700">Redirect Type</label>
                  <select
                    value={formStatusCode}
                    onChange={(e) => setFormStatusCode(Number(e.target.value) as 301 | 302)}
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                  >
                    <option value={301}>301 (Permanent, Recommended)</option>
                    <option value={302}>302 (Temporary)</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-700 py-2">
                    <input
                      type="checkbox"
                      checked={formIsActive}
                      onChange={(e) => setFormIsActive(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-[#0b3a96] focus:ring-blue-500"
                    />
                    <span>Rule is Active</span>
                  </label>
                </div>
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
                  className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-[#082a6d] disabled:opacity-50 transition"
                >
                  {submitting ? "Saving..." : "Save Redirect Rule"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
