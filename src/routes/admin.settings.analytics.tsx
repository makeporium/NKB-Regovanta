import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { settingsService, type SiteSettings } from "@/lib/services/settingsService";
import { toast } from "sonner";
import { BarChart3, Save, AlertTriangle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admin/settings/analytics")({
  component: AnalyticsSettingsPage,
});

function AnalyticsSettingsPage() {
  const [ga4Id, setGa4Id] = useState("");
  const [gtmId, setGtmId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await settingsService.getAll();
      setGa4Id(data.ga4_measurement_id || "");
      setGtmId(data.gtm_container_id || "");
      setLoading(false);
    }
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await settingsService.updateMany({ ga4_measurement_id: ga4Id.trim() });
    setSaving(false);

    if (res.success) {
      toast.success("Google Analytics settings saved!");
    } else {
      toast.error(res.error || "Failed to save settings.");
    }
  };

  const hasBoth = Boolean(ga4Id.trim() && gtmId.trim());

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        <span>Loading analytics configuration...</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6 pb-16">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Google Analytics (GA4)</h1>
        <p className="mt-1 text-xs text-slate-500">
          Manage your Google Analytics 4 Measurement ID for tracking website traffic and conversions.
        </p>
      </div>

      {hasBoth && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 text-xs flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-900">Warning: Potential Double Tracking Detected</p>
            <p>
              Both Google Analytics (GA4) and Google Tag Manager (GTM) have been configured. If you are already loading GA4 tags through your GTM container, entering a GA4 Measurement ID here will cause every visitor hit and pageview to be counted twice!
            </p>
            <p className="text-amber-700">
              Leave this field empty if GA4 is deployed inside Google Tag Manager.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
          <BarChart3 className="h-5 w-5 text-[#0b3a96]" />
          <h2 className="text-base font-bold text-slate-900">GA4 Measurement Property</h2>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700">GA4 Measurement ID</label>
          <div className="mt-1.5 max-w-md">
            <input
              type="text"
              value={ga4Id}
              onChange={(e) => setGa4Id(e.target.value)}
              placeholder="G-XXXXXXXXXX"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Starts with <span className="font-mono text-slate-700 font-semibold">G-</span>. Injects Google Tag tracking script automatically on all live pages.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-[#0b3a96]" />
            <span>Implementation Note</span>
          </div>
          <p>
            When saved, your GA4 tag is served directly in the head of your public website pages with async loading to maintain 100% Core Web Vitals speed scores.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-[#0b3a96] px-6 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving..." : "Save Analytics Settings"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
