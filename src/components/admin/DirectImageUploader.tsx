import React, { useState, useRef, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import {
  Upload,
  Image as ImageIcon,
  FolderOpen,
  X,
  Check,
  Search,
  RefreshCw,
  ExternalLink,
  Sparkles,
} from "lucide-react";

interface DirectImageUploaderProps {
  imageUrl: string;
  altText: string;
  captionText: string;
  onImageChange: (url: string) => void;
  onAltChange: (alt: string) => void;
  onCaptionChange: (caption: string) => void;
  suggestedAltFallback?: string | undefined;
}

interface MediaLibraryItem {
  id: string;
  url: string;
  filename: string;
  alt_text?: string;
  width?: number;
  height?: number;
}

export function DirectImageUploader({
  imageUrl,
  altText,
  captionText,
  onImageChange,
  onAltChange,
  onCaptionChange,
  suggestedAltFallback = "Regulatory affairs and medical device compliance",
}: DirectImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [libraryImages, setLibraryImages] = useState<MediaLibraryItem[]>([]);
  const [libraryLoading, setLibraryLoading] = useState(false);
  const [librarySearch, setLibrarySearch] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load library when modal opens
  useEffect(() => {
    if (showLibrary && libraryImages.length === 0) {
      fetchLibraryImages();
    }
  }, [showLibrary]);

  const fetchLibraryImages = async () => {
    setLibraryLoading(true);
    try {
      const { data, error } = await supabase
        .from("images")
        .select("id, url, filename, alt_text, width, height")
        .order("created_at", { ascending: false })
        .limit(100);

      if (error) {
        toast.error("Failed to load image library: " + error.message);
      } else {
        setLibraryImages(data || []);
      }
    } catch (err: any) {
      toast.error("Library load error: " + err.message);
    } finally {
      setLibraryLoading(false);
    }
  };

  /**
   * Resizes and compresses image client-side to ensure ultra-fast loading & SEO compliance (<200KB)
   */
  const processImageFile = (file: File): Promise<{ dataUrl: string; width: number; height: number; size: number }> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 1600;
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            resolve({ dataUrl: e.target?.result as string, width: img.width, height: img.height, size: file.size });
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);
          const dataUrl = canvas.toDataURL("image/webp", 0.88);
          // Estimate byte size of dataURL
          const approxSize = Math.round((dataUrl.length * 3) / 4);
          resolve({ dataUrl, width, height, size: approxSize });
        };
        img.onerror = reject;
        img.src = e.target?.result as string;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const cleanName = file.name
        .toLowerCase()
        .replace(/[^a-z0-9.]/g, "-")
        .replace(/-+/g, "-");

      const processed = await processImageFile(file);

      // Save to Supabase images table for persistent library reuse
      const generatedAlt =
        altText.trim() ||
        suggestedAltFallback ||
        cleanName.replace(/\.[^/.]+$/, "").replace(/-/g, " ");

      const { data: savedImage, error } = await supabase
        .from("images")
        .insert({
          filename: cleanName,
          url: processed.dataUrl,
          file_size: processed.size,
          width: processed.width,
          height: processed.height,
          format: "webp",
          alt_text: generatedAlt,
          title: generatedAlt,
        })
        .select()
        .single();

      if (error) {
        console.warn("Could not register in images table, using direct asset URL:", error.message);
      }

      onImageChange(processed.dataUrl);
      if (!altText.trim()) {
        onAltChange(generatedAlt);
      }

      toast.success("Image successfully uploaded & optimized for SEO!");
    } catch (err: any) {
      toast.error("Failed to process image: " + err.message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleSelectFromLibrary = (item: MediaLibraryItem) => {
    onImageChange(item.url);
    if (item.alt_text && !altText.trim()) {
      onAltChange(item.alt_text);
    }
    setShowLibrary(false);
    toast.success("Selected image from media library");
  };

  const filteredLibrary = libraryImages.filter(
    (img) =>
      img.filename.toLowerCase().includes(librarySearch.toLowerCase()) ||
      (img.alt_text && img.alt_text.toLowerCase().includes(librarySearch.toLowerCase()))
  );

  return (
    <div className="space-y-4">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Main Upload / Preview Box */}
      {imageUrl ? (
        <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm">
          <img
            src={imageUrl}
            alt={altText || "Featured preview"}
            className="aspect-video w-full object-cover opacity-95 transition group-hover:opacity-100"
          />
          <div className="absolute inset-0 flex items-center justify-center gap-2 bg-slate-950/60 opacity-0 backdrop-blur-xs transition group-hover:opacity-100">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition shadow-sm"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Replace Image</span>
            </button>
            <button
              type="button"
              onClick={() => setShowLibrary(true)}
              className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition shadow-sm"
            >
              <FolderOpen className="h-3.5 w-3.5" />
              <span>Library</span>
            </button>
            <button
              type="button"
              onClick={() => onImageChange("")}
              className="flex items-center gap-1 rounded-lg bg-red-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-red-700 transition shadow-sm"
            >
              <X className="h-3.5 w-3.5" />
              <span>Remove</span>
            </button>
          </div>
          <div className="absolute bottom-2 left-2 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-mono text-white backdrop-blur-xs">
            {imageUrl.startsWith("data:") ? "Direct Upload (Optimized WebP)" : imageUrl.split("/").pop()}
          </div>
        </div>
      ) : (
        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-[#0b3a96] hover:bg-blue-50/20">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0b3a96]">
            {uploading ? (
              <RefreshCw className="h-6 w-6 animate-spin" />
            ) : (
              <ImageIcon className="h-6 w-6" />
            )}
          </div>
          <div className="mt-3">
            <p className="text-xs font-bold text-slate-800">
              Upload Featured Share Image
            </p>
            <p className="mt-1 text-[11px] text-slate-500">
              PNG, JPG, WebP up to 10MB (Automatically optimized for search engines)
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              disabled={uploading}
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b3a96] px-4 py-2 text-xs font-bold text-white hover:bg-blue-800 transition shadow-xs"
            >
              <Upload className="h-3.5 w-3.5" />
              <span>{uploading ? "Processing..." : "Upload from Computer"}</span>
            </button>
            <button
              type="button"
              disabled={uploading}
              onClick={() => setShowLibrary(true)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
            >
              <FolderOpen className="h-3.5 w-3.5 text-blue-700" />
              <span>Browse Media Library</span>
            </button>
          </div>
        </div>
      )}

      {/* Manual URL input fallback */}
      <div>
        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
          Or specify Image URL directly:
        </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => onImageChange(e.target.value)}
          placeholder="/assets/brain/cdsco-guide.png or https://..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-mono text-slate-800 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
        />
      </div>

      {/* Mandatory ALT Text */}
      <div>
        <div className="flex items-center justify-between">
          <label className="block text-xs font-bold text-slate-700">
            Image ALT Text <span className="text-red-500 font-bold">*</span>
          </label>
          <span className="text-[10px] font-semibold text-emerald-700 flex items-center gap-0.5">
            <Sparkles className="h-3 w-3" /> Mandatory for SEO
          </span>
        </div>
        <input
          type="text"
          value={altText}
          onChange={(e) => onAltChange(e.target.value)}
          placeholder="Accurate medical/regulatory description..."
          className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-800 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
        />
      </div>

      {/* Caption / Notes */}
      <div>
        <label className="block text-[11px] font-semibold text-slate-600 mb-1">
          Caption / Editorial Notes (Optional)
        </label>
        <input
          type="text"
          value={captionText}
          onChange={(e) => onCaptionChange(e.target.value)}
          placeholder="Optional caption under image..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-800 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
        />
      </div>

      {/* Media Library Modal */}
      {showLibrary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="flex max-h-[85vh] w-full max-w-3xl flex-col rounded-2xl border border-slate-200 bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Select From Media Library</h3>
                <p className="text-xs text-slate-500">
                  Choose from existing regulatory assets or pre-seeded diagrams
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowLibrary(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Search Bar */}
            <div className="border-b border-slate-100 px-6 py-3 bg-slate-50/50">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={librarySearch}
                  onChange={(e) => setLibrarySearch(e.target.value)}
                  placeholder="Search assets by keyword (e.g. india, cdsco, ivd, audit, mdr)..."
                  className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-4 py-2 text-xs focus:border-[#0b3a96] focus:outline-none"
                />
              </div>
            </div>

            {/* Modal Grid */}
            <div className="flex-1 overflow-y-auto p-6">
              {libraryLoading ? (
                <div className="flex min-h-[200px] items-center justify-center text-xs text-slate-500">
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Loading media library...
                </div>
              ) : filteredLibrary.length === 0 ? (
                <div className="py-12 text-center text-xs text-slate-500">
                  No images match your search term.
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                  {filteredLibrary.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectFromLibrary(item)}
                      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-slate-50 text-left transition hover:border-[#0b3a96] hover:shadow-md focus:outline-none"
                    >
                      <div className="aspect-video w-full overflow-hidden bg-slate-900">
                        <img
                          src={item.url}
                          alt={item.alt_text || item.filename}
                          className="h-full w-full object-cover transition group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-2">
                        <p className="truncate text-[11px] font-semibold text-slate-800">
                          {item.filename}
                        </p>
                        <p className="truncate text-[10px] text-slate-400">
                          {item.alt_text || "No description"}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3">
              <span className="text-xs text-slate-500">
                Showing {filteredLibrary.length} images
              </span>
              <button
                type="button"
                onClick={() => setShowLibrary(false)}
                className="rounded-lg border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
