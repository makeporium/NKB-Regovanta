import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { settingsService } from "@/lib/services/settingsService";
import { toast } from "sonner";
import { Search, Save, CheckCircle2, HelpCircle } from "lucide-react";

export const Route = createFileRoute("/admin/settings/search-console")({
  component: SearchConsoleSettingsPage,
});

function SearchConsoleSettingsPage() {
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await settingsService.getAll();
      setTagInput(data.search_console_tag || "");
      setLoading(false);
    }
    load();
  }, []);

  // Helper to extract clean verification content code if full HTML tag is pasted
  const parseVerificationCode = (raw: string): string => {
    const trimmed = raw.trim();
    if (!trimmed) return "";
    const match = trimmed.match(/content=["']([^"']+)["']/i);
    if (match && match[1]) {
      return match[1];
    }
    return trimmed.replace(/^<meta[^>]*>/i, "").replace(/[<>]/g, "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const cleanCode = parseVerificationCode(tagInput);
    const res = await settingsService.updateMany({ search_console_tag: cleanCode });
    setSaving(false);

    if (res.success) {
      setTagInput(cleanCode);
      toast.success("Google Search Console verification tag saved!");
    } else {
      toast.error(res.error || "Failed to save settings.");
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        <span>Loading Search Console configuration...</span>
      </div>
    );
  }

  const cleanPreviewCode = parseVerificationCode(tagInput);

  return (
    <div className="max-w-4xl space-y-6 pb-16">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Google Search Console</h1>
        <p className="mt-1 text-xs text-slate-500">
          Verify domain ownership with Google Search Console via HTML verification meta tag.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
          <Search className="h-5 w-5 text-[#0b3a96]" />
          <h2 className="text-base font-bold text-slate-900">HTML Verification Tag</h2>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700">
            Verification Code or Full Meta Tag
          </label>
          <div className="mt-1.5">
            <textarea
              rows={3}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder='<meta name="google-site-verification" content="abcdef123456" /> or simply abcdef123456'
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none leading-relaxed transition"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            You can paste either the full <code className="text-slate-700 font-semibold font-mono">&lt;meta&gt;</code> tag from Google Search Console or just the code. The system automatically normalizes it into exactly one clean tag.
          </p>
        </div>

        {cleanPreviewCode && (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0b3a96]">
              <CheckCircle2 className="h-4 w-4" />
              <span>Parsed Head Tag Output:</span>
            </div>
            <pre className="overflow-x-auto rounded bg-slate-900 p-3 text-xs text-emerald-400 font-mono">
              {`<meta name="google-site-verification" content="${cleanPreviewCode}" />`}
            </pre>
          </div>
        )}

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-1.5 text-slate-800 font-semibold">
            <HelpCircle className="h-4 w-4 text-[#0b3a96]" />
            <span>How to get this code from Search Console:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-1">
            <li>Open Google Search Console and select your property (<span className="text-slate-800 font-semibold">https://www.nkbregovanta.com</span>).</li>
            <li>Go to <span className="text-slate-800 font-semibold">Settings &gt; Ownership verification</span>.</li>
            <li>Choose the <span className="text-slate-800 font-semibold">HTML tag</span> verification method.</li>
            <li>Copy the tag and paste it into the box above, then click Save.</li>
          </ol>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-[#0b3a96] px-6 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving..." : "Save Verification Tag"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
