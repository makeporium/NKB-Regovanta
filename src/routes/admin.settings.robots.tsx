import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { settingsService, DEFAULT_SETTINGS } from "@/lib/services/settingsService";
import { authService } from "@/lib/auth/authService";
import { toast } from "sonner";
import { Bot, Save, RotateCcw, AlertTriangle, History, CheckCircle2, ShieldAlert } from "lucide-react";

export const Route = createFileRoute("/admin/settings/robots")({
  component: RobotsSettingsPage,
});

function RobotsSettingsPage() {
  const [content, setContent] = useState("");
  const [history, setHistory] = useState<Array<{ id: string; content: string; created_by_name: string; created_at: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showDangerModal, setShowDangerModal] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const settings = await settingsService.getAll();
    setContent(settings.robots_txt || DEFAULT_SETTINGS.robots_txt);
    const hist = await settingsService.getRobotsHistory();
    setHistory(hist);
    setLoading(false);
  };

  const containsDisallowAll = (text: string) => {
    // Checks for User-agent: * followed by Disallow: /
    const normalized = text.replace(/\r\n/g, "\n");
    return /User-agent:\s*\*\s*\n(?:[^\n]*\n)*?Disallow:\s*\/\s*$/im.test(normalized) ||
      (text.includes("User-agent: *") && text.includes("Disallow: /"));
  };

  const handleSaveClick = () => {
    if (containsDisallowAll(content)) {
      setShowDangerModal(true);
      return;
    }
    executeSave();
  };

  const executeSave = async () => {
    setSaving(true);
    const user = authService.getCurrentSession()?.user;
    const adminName = user?.full_name || user?.username || "Administrator";

    const res = await settingsService.saveRobotsTxt(content, adminName);
    setSaving(false);
    setShowDangerModal(false);

    if (res.success) {
      toast.success("Robots.txt updated successfully!");
      loadData();
    } else {
      toast.error(res.error || "Failed to update robots.txt.");
    }
  };

  const handleResetDefault = () => {
    if (confirm("Reset robots.txt content to the standard default configuration?")) {
      setContent(DEFAULT_SETTINGS.robots_txt);
      toast.info("Reset to default content. Click Save to apply.");
    }
  };

  const handleRestoreVersion = (versionContent: string, date: string) => {
    if (confirm(`Restore robots.txt from backup version (${new Date(date).toLocaleString("en-IN")})?`)) {
      setContent(versionContent);
      toast.info("Version restored to editor. Click Save to apply.");
    }
  };

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        <span>Loading robots.txt configuration...</span>
      </div>
    );
  }

  const isDangerous = containsDisallowAll(content);

  return (
    <div className="space-y-6 pb-16">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Robots.txt Editor</h1>
        <p className="mt-1 text-xs text-slate-500">
          Direct search crawler access and control indexing instructions for Googlebot, Bingbot, and AI bots.
        </p>
      </div>

      {isDangerous && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800 flex items-start gap-3">
          <ShieldAlert className="h-5 w-5 shrink-0 text-rose-600 mt-0.5" />
          <div>
            <p className="font-semibold text-rose-900">CRITICAL WARNING: Entire Site Block Detected</p>
            <p className="mt-0.5">
              Your robots.txt currently specifies <code className="bg-rose-100 px-1 py-0.5 rounded font-mono font-semibold">Disallow: /</code> under <code className="bg-rose-100 px-1 py-0.5 rounded font-mono font-semibold">User-agent: *</code>. This blocks search engines from crawling the entire website.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Editor (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Bot className="h-4 w-4 text-[#0b3a96]" />
                <span>Live File: https://www.nkbregovanta.com/robots.txt</span>
              </div>
              <button
                type="button"
                onClick={handleResetDefault}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset to default</span>
              </button>
            </div>

            <div>
              <textarea
                rows={12}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-900 p-4 font-mono text-xs text-emerald-400 focus:outline-none focus:ring-1 focus:ring-blue-500 leading-relaxed"
                placeholder="User-agent: *&#10;Allow: /"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-slate-500">
                Served with 200 status and <code className="font-mono text-slate-700 font-semibold">text/plain</code> header.
              </span>
              <button
                type="button"
                onClick={handleSaveClick}
                disabled={saving}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0b3a96] px-6 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
              >
                <Save className="h-4 w-4" />
                <span>{saving ? "Saving..." : "Save Robots.txt"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Version History (1 Col) */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3 text-xs font-bold text-slate-900">
              <History className="h-4 w-4 text-[#0b3a96]" />
              <span>Version History (Last 5)</span>
            </div>

            {history.length === 0 ? (
              <p className="text-xs text-slate-500">No previous versions saved yet.</p>
            ) : (
              <div className="space-y-3">
                {history.map((v, idx) => (
                  <div
                    key={v.id}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-800">
                        {idx === 0 ? "Current Version" : `Version ${history.length - idx}`}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRestoreVersion(v.content, v.created_at)}
                        className="text-[11px] font-semibold text-[#0b3a96] hover:underline transition"
                      >
                        Restore
                      </button>
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Edited by <span className="text-slate-700 font-medium">{v.created_by_name}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {new Date(v.created_at).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Danger Modal for Disallow: / ─────────────────────────────────── */}
      {showDangerModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl border border-rose-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center gap-3 text-rose-600">
              <AlertTriangle className="h-6 w-6 shrink-0" />
              <h3 className="text-base font-bold text-slate-900">De-indexing Confirmation Required</h3>
            </div>
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              This file contains <strong className="text-rose-600 font-mono">Disallow: /</strong> under <strong className="text-rose-600 font-mono">User-agent: *</strong>.
            </p>
            <p className="mt-2 text-xs text-rose-600 font-medium">
              This will instruct search engine crawlers to block the entire website from Google. Are you completely sure you want to proceed?
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowDangerModal(false)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
              >
                Cancel & Review
              </button>
              <button
                onClick={executeSave}
                className="rounded-lg bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-700 transition shadow-xs"
              >
                Yes, Block Crawlers
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
