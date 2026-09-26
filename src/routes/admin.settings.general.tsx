import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { settingsService, type SiteSettings } from "@/lib/services/settingsService";
import { toast } from "sonner";
import { Save, Building2, Globe, Shield, Clock, Image, Layers } from "lucide-react";

export const Route = createFileRoute("/admin/settings/general")({
  component: GeneralSettingsPage,
});

function GeneralSettingsPage() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await settingsService.getAll();
      setSettings(data);
      setLoading(false);
    }
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    const res = await settingsService.updateMany(settings);
    setSaving(false);

    if (res.success) {
      toast.success("General settings saved successfully!");
    } else {
      toast.error(res.error || "Failed to save settings.");
    }
  };

  const updateField = (key: keyof SiteSettings, value: string) => {
    setSettings((prev) => (prev ? { ...prev, [key]: value } : null));
  };

  if (loading || !settings) {
    return (
      <div className="flex h-64 items-center justify-center text-slate-400">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
          <span>Loading site settings...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-16">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">General Settings</h1>
        <p className="mt-1 text-xs text-slate-500">
          Configure site identity, default SEO title suffixes, schema organization credentials, and image thresholds.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ── 1. Website & Brand Identity ──────────────────────────────── */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
            <Globe className="h-5 w-5 text-[#0b3a96]" />
            <h2 className="text-base font-bold text-slate-900">Website & Brand Identity</h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700">Website Name</label>
              <input
                type="text"
                required
                value={settings.site_name}
                onChange={(e) => updateField("site_name", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
              <p className="mt-1 text-[11px] text-slate-500">Public brand name used across schemas and titles.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Site Canonical URL</label>
              <input
                type="url"
                required
                value={settings.site_url}
                onChange={(e) => updateField("site_url", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
              <p className="mt-1 text-[11px] text-slate-500">Primary domain (must include https and www).</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Global Title Suffix</label>
              <input
                type="text"
                value={settings.title_suffix}
                onChange={(e) => updateField("title_suffix", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
                placeholder=" | NKB Regovanta"
              />
              <p className="mt-1 text-[11px] text-slate-500">Appended to page titles if switched on in the SEO editor.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Default Timezone</label>
              <input
                type="text"
                disabled
                value={settings.timezone}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-500 cursor-not-allowed"
              />
              <p className="mt-1 text-[11px] text-slate-500">Locked to Indian Standard Time (Asia/Kolkata) per ground rules.</p>
            </div>
          </div>
        </div>

        {/* ── 2. Media & Thresholds ────────────────────────────────────── */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
            <Image className="h-5 w-5 text-[#0b3a96]" />
            <h2 className="text-base font-bold text-slate-900">Media & Performance Limits</h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className="block text-xs font-semibold text-slate-700">Image Size Warning Threshold (KB)</label>
              <input
                type="number"
                min="50"
                max="5000"
                value={settings.image_size_limit_kb}
                onChange={(e) => updateField("image_size_limit_kb", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
              <p className="mt-1 text-[11px] text-slate-500">Images above this size flag an SEO warning (default 200 KB).</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Admin Inactivity Timeout (Minutes)</label>
              <input
                type="number"
                min="5"
                max="240"
                value={settings.session_timeout_minutes}
                onChange={(e) => updateField("session_timeout_minutes", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
              <p className="mt-1 text-[11px] text-slate-500">Auto logout after inactivity (default 30 minutes).</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Logo Path</label>
              <input
                type="text"
                value={settings.logo_url}
                onChange={(e) => updateField("logo_url", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
              <p className="mt-1 text-[11px] text-slate-500">Used in Organization JSON-LD Schema.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Default Open Graph Share Image</label>
              <input
                type="text"
                value={settings.default_share_image}
                onChange={(e) => updateField("default_share_image", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
              <p className="mt-1 text-[11px] text-slate-500">Fallback preview image for social sharing (1200 x 630 px).</p>
            </div>
          </div>
        </div>

        {/* ── 3. Organization Structured Data Details ──────────────────── */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs">
          <div className="flex items-center gap-2.5 border-b border-slate-200 pb-4">
            <Building2 className="h-5 w-5 text-[#0b3a96]" />
            <h2 className="text-base font-bold text-slate-900">Organization Structured Data (Schema.org)</h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700">Legal Business Name</label>
              <input
                type="text"
                value={settings.org_legal_name}
                onChange={(e) => updateField("org_legal_name", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Official Phone</label>
              <input
                type="text"
                value={settings.org_phone}
                onChange={(e) => updateField("org_phone", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Official Contact Email</label>
              <input
                type="email"
                value={settings.org_email}
                onChange={(e) => updateField("org_email", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-slate-700">Street Address</label>
              <input
                type="text"
                value={settings.org_address_street}
                onChange={(e) => updateField("org_address_street", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">City</label>
              <input
                type="text"
                value={settings.org_address_city}
                onChange={(e) => updateField("org_address_city", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">State / Region</label>
              <input
                type="text"
                value={settings.org_address_region}
                onChange={(e) => updateField("org_address_region", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">Postal Code</label>
              <input
                type="text"
                value={settings.org_address_postal}
                onChange={(e) => updateField("org_address_postal", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700">LinkedIn Profile URL</label>
              <input
                type="url"
                value={settings.org_linkedin}
                onChange={(e) => updateField("org_linkedin", e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-900 focus:bg-white focus:border-[#0b3a96] focus:outline-none transition"
              />
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-[#0b3a96] px-6 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-blue-800 disabled:opacity-50 transition"
          >
            <Save className="h-4 w-4" />
            <span>{saving ? "Saving Changes..." : "Save General Settings"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}
