const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

const SUPABASE_URL = "https://zoihnehiptkfgxshtazi.supabase.co";
const SUPABASE_KEY = "sb_publishable__z_p_rRZhkKbuZ0O8tHRsg_ijkdLGoP";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function cleanLabel(filename) {
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/_\d{10,}/g, "")
    .replace(/[_-]+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function computeWarnings(filename, sizeBytes) {
  const warnings = [];
  if (sizeBytes > 200 * 1024) {
    warnings.push(`File size ${(sizeBytes / 1024).toFixed(0)} KB exceeds 200 KB limit`);
  }
  const lower = filename.toLowerCase();
  if (/media__\d+/i.test(lower) || /screenshot/i.test(lower)) {
    warnings.push("Poor filename: generic prefix or raw timestamp");
  }
  if (lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg")) {
    warnings.push("Format suggestion: Consider WebP for reduced payload");
  }
  return warnings;
}

async function scanDirectory(dir, urlPrefix) {
  const items = [];
  if (!fs.existsSync(dir)) return items;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg", ".webp", ".svg"].includes(ext)) {
        const fullPath = path.join(dir, entry.name);
        const stats = fs.statSync(fullPath);
        const url = `${urlPrefix}/${entry.name}`;
        const format = ext.replace(".", "");
        const label = cleanLabel(entry.name);
        const warnings = computeWarnings(entry.name, stats.size);

        // Intentionally leave generic timestamp/media files without ALT text
        // so SEO issue tracker accurately identifies images needing optimization
        const isGeneric = /media__\d+/i.test(entry.name);
        const altText = isGeneric ? "" : `${label} - NKB Regovanta MedTech Regulatory`;

        items.push({
          filename: entry.name,
          url: url,
          file_size: stats.size,
          width: 1200,
          height: 800,
          format: format,
          alt_text: altText,
          title: label,
          caption: `Regulatory asset for ${label}`,
          description: `Medical device and regulatory compliance image asset for ${label}`,
          is_decorative: false,
          warnings_json: warnings,
        });
      }
    }
  }
  return items;
}

async function run() {
  console.log("--- Starting Image Scanner & Seeder ---");

  const rootPublic = path.resolve(__dirname, "../public");
  const brainDir = path.resolve(rootPublic, "assets/brain");
  const insightsDir = path.resolve(rootPublic, "assets/insights");

  const brainImages = await scanDirectory(brainDir, "/assets/brain");
  const insightImages = await scanDirectory(insightsDir, "/assets/insights");

  // Root public images
  const rootImages = [];
  const rootEntries = fs.readdirSync(rootPublic, { withFileTypes: true });
  for (const entry of rootEntries) {
    if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if ([".png", ".jpg", ".jpeg", ".webp"].includes(ext) && !entry.name.includes("favicon")) {
        const fullPath = path.join(rootPublic, entry.name);
        const stats = fs.statSync(fullPath);
        const label = cleanLabel(entry.name);
        rootImages.push({
          filename: entry.name,
          url: `/${entry.name}`,
          file_size: stats.size,
          width: 1200,
          height: 630,
          format: ext.replace(".", ""),
          alt_text: `NKB Regovanta - ${label}`,
          title: label,
          caption: "Global Regulatory Solutions",
          description: "NKB Regovanta brand asset",
          is_decorative: false,
          warnings_json: computeWarnings(entry.name, stats.size),
        });
      }
    }
  }

  const allImages = [...brainImages, ...insightImages, ...rootImages];
  console.log(`Scanned ${allImages.length} real images from disk.`);

  // Upsert in batches of 25
  const batchSize = 25;
  let inserted = 0;

  for (let i = 0; i < allImages.length; i += batchSize) {
    const batch = allImages.slice(i, i + batchSize);
    const { error } = await supabase
      .from("images")
      .upsert(batch, { onConflict: "url" });

    if (error) {
      console.error(`Batch ${i / batchSize + 1} error:`, error.message);
    } else {
      inserted += batch.length;
      console.log(`Saved batch ${i / batchSize + 1} (${inserted}/${allImages.length} images)`);
    }
  }

  console.log(`--- Finished Seeding ${inserted} Images into Supabase! ---`);
}

run();
