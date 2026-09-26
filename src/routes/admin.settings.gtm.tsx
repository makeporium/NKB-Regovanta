import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { settingsService } from "@/lib/services/settingsService";
import { toast } from "sonner";
import { Tags, Save, AlertTriangle, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admin/settings/gtm")({
  component: GTMSettingsPage,
});

function GTMSettingsPage() {
  const [gtmId, setGtmId] = useState("");
  const [ga4Id, setGa4Id] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await settingsService.getAll();
      setGtmId(data.gtm_container_id || "");
      setGa4Id(data.ga4_measurement_id || "");
      setLoading(false);
    }
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await settingsService.updateMany({ gtm_container_id: gtmId.trim() });
    setSaving(false);

    if (res.success) {
      toast.success("Google Tag Manager settings saved!");
    } else {
      toast.error(res.error || "Failed to save settings.");
    }
  };

  const hasBoth = Boolean(gtmId.trim() && ga4Id.trim());

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        <span>Loading GTM configuration...</span>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-6 pb-16">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Google Tag Manager (GTM)</h1>
        <p className="mt-1 text-xs text-slate-500">
          Deploy marketing tags, conversion trackers, and event listeners via your GTM Container.
        </p>
      </div>

      {hasBoth && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 text-xs flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-900">Warning: GA4 Measurement ID is Also Configured</p>
            <p>
              If your GTM container already fires Google Analytics 4 tags, having a GA4 Measurement ID in Settings &gt; Analytics will duplicate every visitor hit.
            </p>
            <p className="text-amber-700">
              Ensure GA4 is only configured in one place (either directly or via GTM).
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs space-y-6">
        <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
          <Tags className="h-5 w-5 text-[#0b3a96]" />
          <h2 className="text-base font-bold text-slate-900">GTM Container Configuration</h2>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700">Container ID</label>
          <div className="mt-1.5 max-w-md">
            <input
              type="text"
              value={gtmId}
              onChange={(e) => setGtmId(e.target.value)}
              placeholder="GTM-XXXXXXX"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-mono text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
            />
          </div>
          <p className="mt-1 text-xs text-slate-500">
            Starts with <span className="font-mono text-slate-700 font-semibold">GTM-</span>. Automatically injects the container script in the <code className="font-mono text-slate-600">&lt;head&gt;</code> and the required <code className="font-mono text-slate-600">&lt;noscript&gt;</code> fallback right after <code className="font-mono text-slate-600">&lt;body&gt;</code>.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            <CheckCircle2 className="h-4 w-4 text-[#0b3a96]" />
            <span>Automated Script Output</span>
          </div>
          <p>
            When filled, your GTM container code is injected automatically without modifying any React or HTML source files.
          </p>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-[#0b3a96] px-6 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving..." : "Save GTM Settings"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
