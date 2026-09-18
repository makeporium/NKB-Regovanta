import { supabase } from "@/lib/supabase";

export interface SiteSettings {
  site_name: string;
  site_url: string;
  title_suffix: string;
  timezone: string;
  image_size_limit_kb: string;
  session_timeout_minutes: string;
  ga4_measurement_id: string;
  search_console_tag: string;
  gtm_container_id: string;
  logo_url: string;
  default_share_image: string;
  org_legal_name: string;
  org_phone: string;
  org_email: string;
  org_address_street: string;
  org_address_city: string;
  org_address_region: string;
  org_address_postal: string;
  org_address_country: string;
  org_linkedin: string;
  robots_txt: string;
}

export const DEFAULT_SETTINGS: SiteSettings = {
  site_name: "NKB Regovanta",
  site_url: "https://www.nkbregovanta.com",
  title_suffix: " | NKB Regovanta",
  timezone: "Asia/Kolkata",
  image_size_limit_kb: "200",
  session_timeout_minutes: "30",
  ga4_measurement_id: "",
  search_console_tag: "",
  gtm_container_id: "",
  logo_url: "/favicon.png",
  default_share_image: "/og-image.png",
  org_legal_name: "NKB Regovanta Solutions Pvt. Ltd.",
  org_phone: "+919513699000",
  org_email: "contact@nkbregovanta.com",
  org_address_street: "Building No 20, Awadh Kunj, Faridi Nagar, CIMAP",
  org_address_city: "Lucknow",
  org_address_region: "Uttar Pradesh",
  org_address_postal: "226015",
  org_address_country: "IN",
  org_linkedin: "https://www.linkedin.com/company/nkb-regovanta-solutions-private-limited/",
  robots_txt: "User-agent: *\nAllow: /\nSitemap: https://www.nkbregovanta.com/sitemap.xml",
};

export const settingsService = {
  async getAll(): Promise<SiteSettings> {
    try {
      const { data, error } = await supabase.from("settings").select("key, value");
      if (error || !data) {
        console.warn("Using default settings fallback:", error?.message);
        return { ...DEFAULT_SETTINGS };
      }
      const settingsMap: Record<string, string> = {};
      for (const row of data) {
        settingsMap[row.key] = row.value;
      }
      return { ...DEFAULT_SETTINGS, ...settingsMap };
    } catch {
      return { ...DEFAULT_SETTINGS };
    }
  },

  async updateMany(updates: Partial<SiteSettings>): Promise<{ success: boolean; error?: string }> {
    try {
      const rows = Object.entries(updates).map(([key, value]) => ({
        key,
        value: String(value ?? ""),
        updated_at: new Date().toISOString(),
      }));

      const { error } = await supabase.from("settings").upsert(rows, { onConflict: "key" });
      if (error) return { success: false, error: error.message };
      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message || "Failed to update settings" };
    }
  },

  async saveRobotsTxt(
    content: string,
    adminName: string
  ): Promise<{ success: boolean; error?: string }> {
    try {
      // 1. Update settings table
      await this.updateMany({ robots_txt: content });

      // 2. Save version history
      await supabase.from("robots_versions").insert({
        content,
        created_by_name: adminName,
        created_at: new Date().toISOString(),
      });

      return { success: true };
    } catch (e: any) {
      return { success: false, error: e.message };
    }
  },

  async getRobotsHistory(): Promise<Array<{ id: string; content: string; created_by_name: string; created_at: string }>> {
    try {
      const { data, error } = await supabase
        .from("robots_versions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(5);

      if (error || !data) return [];
      return data;
    } catch {
      return [];
    }
  },
};
