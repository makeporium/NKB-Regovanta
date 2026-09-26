import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  Image as ImageIcon,
  Search,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  Edit2,
  X,
  Save,
  Sparkles,
  ExternalLink,
  Upload,
} from "lucide-react";

export const Route = createFileRoute("/admin/seo/images")({
  component: ImagesSeoManagerPage,
});

interface ImageRecord {
  id: string;
  filename: string;
  url: string;
  file_size?: number; // bytes
  width?: number;
  height?: number;
  format?: string;
  alt_text?: string;
  title?: string;
  caption?: string;
  description?: string;
  is_decorative?: boolean;
  warnings_json?: string[];
  created_at?: string;
}

function computeImageWarnings(img: ImageRecord): string[] {
  const warnings: string[] = [];

  // Missing ALT
  if (!img.alt_text?.trim() && !img.is_decorative) {
    warnings.push("Missing ALT text description");
  }

  // Oversized > 200 KB
  if (img.file_size && img.file_size > 200 * 1024) {
    warnings.push(`File size ${(img.file_size / 1024).toFixed(0)} KB exceeds 200 KB limit`);
  }

  // Missing dimensions
  if (!img.width || !img.height) {
    warnings.push("Missing width/height attributes (Causes Layout Shift / CLS)");
  }

  // Poor filename check
  const fn = img.filename.toLowerCase();
  if (
    /img[_-]?\d+/i.test(fn) ||
    /image\d+/i.test(fn) ||
    /screenshot/i.test(fn) ||
    /\s/.test(img.filename) ||
    /[A-Z]/.test(img.filename)
  ) {
    warnings.push("Poor filename: contains spaces, capitals, or generic prefix (e.g. IMG_...)");
  }

  // Format suggestion
  if (fn.endsWith(".png") || fn.endsWith(".jpg") || fn.endsWith(".jpeg")) {
    warnings.push("Format suggestion: Consider WebP for reduced payload");
  }

  return warnings;
}

function ImagesSeoManagerPage() {
  const [images, setImages] = useState<ImageRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [warningFilter, setWarningFilter] = useState("all");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  // Edit Modal State
  const [editingImage, setEditingImage] = useState<ImageRecord | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("images").select("*").order("created_at", { ascending: false });
    if (error) {
      toast.error("Failed to load images: " + error.message);
    } else {
      setImages(data || []);
    }
    setLoading(false);
  };

  const handleOpenEdit = (img: ImageRecord) => {
    setEditingImage({ ...img });
  };

  const handleSaveImage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingImage) return;

    setSubmitting(true);
    const warnings = computeImageWarnings(editingImage);

    const { error } = await supabase
      .from("images")
      .update({
        alt_text: editingImage.is_decorative ? "" : editingImage.alt_text,
        is_decorative: editingImage.is_decorative,
        title: editingImage.title,
        caption: editingImage.caption,
        description: editingImage.description,
        warnings_json: warnings,
      })
      .eq("id", editingImage.id);

    setSubmitting(false);

    if (error) {
      toast.error("Failed to save image metadata: " + error.message);
    } else {
      toast.success("Image metadata updated!");
      setEditingImage(null);
      loadImages();
    }
  };

  const filteredImages = useMemo(() => {
    return images.filter((img) => {
      const matchSearch =
        img.filename.toLowerCase().includes(search.toLowerCase()) ||
        img.url.toLowerCase().includes(search.toLowerCase()) ||
        (img.alt_text || "").toLowerCase().includes(search.toLowerCase());

      const warnings = computeImageWarnings(img);
      const matchFilter =
        warningFilter === "all" ||
        (warningFilter === "needs_fix" && warnings.length > 0) ||
        (warningFilter === "good" && warnings.length === 0);

      return matchSearch && matchFilter;
    });
  }, [images, search, warningFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredImages.length / (pageSize || 25)));
  const paginatedImages = useMemo(() => {
    if (pageSize <= 0) return filteredImages;
    const start = (currentPage - 1) * pageSize;
    return filteredImages.slice(start, start + pageSize);
  }, [filteredImages, currentPage, pageSize]);

  return (
    <div className="space-y-6 pb-16">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-1">
          <Link to="/admin" className="hover:text-slate-900 transition">Admin</Link>
          <span>&rsaquo;</span>
          <span className="text-slate-500">SEO</span>
          <span>&rsaquo;</span>
          <span className="text-[#0b3a96] font-semibold">Images</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Image SEO & Assets</h1>
          <p className="mt-0.5 text-xs text-slate-500">
            Track ALT tags, monitor layout shift dimensions, and optimize asset weights under 200 KB.
          </p>
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
            placeholder="Search by filename, URL, or ALT text..."
            className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          />
        </div>

        <div>
          <select
            value={warningFilter}
            onChange={(e) => setWarningFilter(e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
          >
            <option value="all">All Images</option>
            <option value="needs_fix">Needs Fix / Has Warnings</option>
            <option value="good">Status: Good (Optimized)</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[760px]">
            <thead className="border-b border-slate-200 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-5 py-3">Image Asset</th>
                <th className="px-5 py-3">Size & Dimensions</th>
                <th className="px-5 py-3">Format</th>
                <th className="px-5 py-3">ALT Text</th>
                <th className="px-5 py-3">SEO Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-500">
                    Loading image assets...
                  </td>
                </tr>
              ) : filteredImages.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-8 text-center text-slate-500">
                    No images found.
                  </td>
                </tr>
              ) : (
                paginatedImages.map((img) => {
                  const warnings = computeImageWarnings(img);
                  const isGood = warnings.length === 0;

                  return (
                    <tr key={img.id} className="hover:bg-slate-50 transition">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 flex items-center justify-center">
                            {img.url ? (
                              <img
                                src={img.url}
                                alt={img.alt_text || ""}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                  (e.target as any).style.display = "none";
                                }}
                              />
                            ) : (
                              <ImageIcon className="h-5 w-5 text-slate-400" />
                            )}
                          </div>
                          <div className="max-w-xs truncate">
                            <div className="font-medium text-slate-900 truncate" title={img.filename}>
                              {img.filename}
                            </div>
                            <div className="font-mono text-[11px] text-slate-400 truncate">{img.url}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <div className="text-slate-700 font-medium">
                          {img.file_size ? `${(img.file_size / 1024).toFixed(0)} KB` : "Unknown"}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {img.width && img.height ? `${img.width} × ${img.height} px` : "Missing dims"}
                        </div>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="uppercase text-slate-600 font-mono text-[11px]">
                          {img.format || img.filename.split(".").pop() || "PNG"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 max-w-xs truncate">
                        {img.is_decorative ? (
                          <span className="text-slate-400 italic">Decorative (alt="")</span>
                        ) : img.alt_text ? (
                          <span className="text-slate-700" title={img.alt_text}>
                            {img.alt_text}
                          </span>
                        ) : (
                          <span className="text-rose-600 font-semibold italic">Missing ALT</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5">
                        {isGood ? (
                          <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            <span>Good</span>
                          </span>
                        ) : (
                          <div className="space-y-0.5">
                            <span className="inline-flex items-center gap-1 font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                              <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                              <span>Needs Fix ({warnings.length})</span>
                            </span>
                            <p className="text-[10px] text-slate-500 max-w-xs truncate" title={warnings.join("; ")}>
                              {warnings[0]}
                            </p>
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <button
                          onClick={() => handleOpenEdit(img)}
                          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-[#0b3a96] hover:text-white hover:border-[#0b3a96] transition"
                        >
                          <Edit2 className="h-3.5 w-3.5" />
                          <span>Edit</span>
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
        {filteredImages.length > 0 && pageSize > 0 && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-3.5 border-t border-slate-200 bg-slate-50 text-xs text-slate-600">
            <div>
              Showing <strong className="text-slate-800 font-semibold">{(currentPage - 1) * pageSize + 1}</strong> to{" "}
              <strong className="text-slate-800 font-semibold">{Math.min(currentPage * pageSize, filteredImages.length)}</strong> of{" "}
              <strong className="text-slate-800 font-semibold">{filteredImages.length}</strong> image assets
            </div>

            <div className="flex items-center gap-1 self-center">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded px-2.5 py-1 text-slate-600 border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 transition"
              >
                &lt; Prev
              </button>

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

      {/* ── Edit Modal ──────────────────────────────────────────────────── */}
      {editingImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-semibold text-slate-900">Image SEO Metadata</h3>
              <button
                onClick={() => setEditingImage(null)}
                className="rounded p-1 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSaveImage} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500">Image Filename (Locked)</label>
                <input
                  type="text"
                  disabled
                  value={editingImage.filename}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-mono text-slate-600 cursor-not-allowed"
                />
                <p className="mt-1 text-[11px] text-slate-400">
                  Renaming files directly after upload can break page URLs. Filename is locked per brief.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium text-slate-700">ALT Text</label>
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs text-slate-600">
                    <input
                      type="checkbox"
                      checked={editingImage.is_decorative}
                      onChange={(e) =>
                        setEditingImage({ ...editingImage, is_decorative: e.target.checked })
                      }
                      className="rounded border-slate-300 text-[#0b3a96] focus:ring-blue-500"
                    />
                    <span>Decorative image (alt="")</span>
                  </label>
                </div>
                <input
                  type="text"
                  disabled={editingImage.is_decorative}
                  value={editingImage.is_decorative ? "" : editingImage.alt_text || ""}
                  onChange={(e) => setEditingImage({ ...editingImage, alt_text: e.target.value })}
                  placeholder="Accurate description of image content for screen readers & Google..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none disabled:opacity-40"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700">Image Title (Optional)</label>
                  <input
                    type="text"
                    value={editingImage.title || ""}
                    onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })}
                    placeholder="Tooltip text"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-700">Caption</label>
                  <input
                    type="text"
                    value={editingImage.caption || ""}
                    onChange={(e) => setEditingImage({ ...editingImage, caption: e.target.value })}
                    placeholder="Visible below image"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700">Admin Description / Notes</label>
                <textarea
                  rows={2}
                  value={editingImage.description || ""}
                  onChange={(e) =>
                    setEditingImage({ ...editingImage, description: e.target.value })
                  }
                  placeholder="Internal notes regarding copyright, usage, or source..."
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-800 focus:border-[#0b3a96] focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditingImage(null)}
                  className="rounded-lg border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-[#0b3a96] px-5 py-2 text-xs font-semibold text-white hover:bg-[#082a6d] disabled:opacity-50 transition"
                >
                  {submitting ? "Saving..." : "Save Image SEO"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
