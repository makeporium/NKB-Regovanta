const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(dir).filter(f => f.startsWith('services.india.') && f.endsWith('.tsx') && f !== 'services.india.index.tsx' && f !== 'services.india.neutral-code.tsx');

const heroTemplate = (titleHtml, descText, titlePlain) => `      {/* HERO SECTION */}
      <section className="bg-[#f7f9fc]">
        {/* Desktop: text overlaid on the artwork, sized in container units so it scales with it */}
        <div className="@container relative hidden md:block">
          <img src={heroImg} alt="${titlePlain}" className="block w-full" />

          <div className="absolute inset-y-0 left-0 flex w-[48cqw] flex-col justify-center pl-[6.6cqw]">
            <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-[1cqw] font-semibold text-[0.9cqw]">
              <ArrowLeft className="mr-[0.4cqw] h-[1cqw] w-[1cqw]" />
              Back to India CDSCO Services
            </Link>
            <h1 className="font-display text-[2.8cqw] font-bold leading-[1.2] text-[#0f2340]">
              ${titleHtml}
            </h1>
            <div className="mt-[1.8cqw] flex items-center gap-[0.4cqw]">
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#ff6b1a]" />
              <span className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#c9d3e0]" />
              <span className="h-[0.2cqw] w-[3.5cqw] rounded-full bg-[#0f9d3a]" />
            </div>
            <p className="mt-[1.8cqw] max-w-[34cqw] text-[1.15cqw] leading-[1.7] text-[#465569]">
              ${descText}
            </p>
            <Link
              to="/contact"
              className="mt-[2.2cqw] inline-flex w-fit items-center gap-[1.2cqw] rounded-[0.45cqw] bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-[1.9cqw] py-[0.95cqw] text-[1.05cqw] font-bold text-white shadow-lg shadow-[#0a3d96]/20 transition-opacity hover:opacity-90"
            >
              Consult Our CDSCO Experts
              <ArrowRight className="h-[1.3cqw] w-[1.3cqw]" />
            </Link>
          </div>

          {heroBadges.map(({ icon: Icon, lines, x, y, side }) => (
            <div
              key={lines.join(" ")}
              className="absolute flex h-[5cqw] w-[5cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(15,35,64,0.10)] ring-1 ring-[#e4ecf7]"
              style={{ left: \`\${x}%\`, top: \`\${y}%\` }}
            >
              <Icon className="h-[2.5cqw] w-[2.5cqw] text-[#12306f]" strokeWidth={1.6} />
              <p
                className={
                  side === "right"
                    ? "absolute left-full top-1/2 ml-[0.9cqw] -translate-y-1/2 whitespace-nowrap text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                    : "absolute left-1/2 top-full mt-[0.7cqw] -translate-x-1/2 whitespace-nowrap text-center text-[0.85cqw] font-bold leading-[1.35] text-[#12306f]"
                }
              >
                {lines[0]}
                <br />
                {lines[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden px-4 pt-12 pb-8 sm:px-6">
          <Link to="/services/india" className="inline-flex items-center text-[#465569] hover:text-[#0b3a96] transition-colors mb-4 font-semibold text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to India CDSCO Services
          </Link>
          <h1 className="font-display text-3xl font-bold leading-tight text-[#0f2340] sm:text-4xl">
            ${titleHtml}
          </h1>
          <div className="mt-5 flex items-center gap-1.5">
            <span className="h-[3px] w-12 rounded-full bg-[#ff6b1a]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#c9d3e0]" />
            <span className="h-[3px] w-12 rounded-full bg-[#0f9d3a]" />
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#465569]">
            ${descText}
          </p>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#0a3d96] to-[#1055b5] px-6 py-3.5 text-sm font-bold text-white"
          >
            Consult Our CDSCO Experts
            <ArrowRight className="h-4 w-4" />
          </Link>
          <img src={heroImg} alt="${titlePlain}" className="mt-8 w-full" />
        </div>
      </section>`;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract old hero section
  const oldHeroRegex = /\{\/\* HERO SECTION \*\/\}\s*<section className="bg-navy py-16 lg:py-24 relative overflow-hidden">[\s\S]*?<\/section>/;
  const match = content.match(oldHeroRegex);

  if (!match) {
    console.log(`Skipping ${file} - no matching hero section found.`);
    continue;
  }

  const oldHero = match[0];

  // Extract title and desc
  let titleMatch = oldHero.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let descMatch = oldHero.match(/<p[^>]*>([\s\S]*?)<\/p>/);

  if (!titleMatch || !descMatch) {
    console.log(`Skipping ${file} - title or desc not found.`);
    continue;
  }

  let titleHtml = titleMatch[1].trim();
  let descText = descMatch[1].trim();

  // Color the first word or phrase of title in blue for aesthetics
  // Split on <br/> or space to get the first chunk
  // Simple heuristic: wrap the first word in <span className="text-[#0b3a96]">
  if (!titleHtml.includes('<span')) {
    const firstSpaceIndex = titleHtml.indexOf(' ');
    if (firstSpaceIndex !== -1) {
      const firstWord = titleHtml.substring(0, firstSpaceIndex);
      const rest = titleHtml.substring(firstSpaceIndex);
      titleHtml = `<span className="text-[#0b3a96]">${firstWord}</span>${rest}`;
    }
  }

  let titlePlain = titleHtml.replace(/<[^>]+>/g, '').trim();

  const newHero = heroTemplate(titleHtml, descText, titlePlain);
  content = content.replace(oldHeroRegex, newHero);

  // Update imports
  if (!content.includes('import heroImg')) {
    content = content.replace('import {', 'import heroImg from "@/assets/cdsco-india-hero.png";\nimport {');
  }

  const badgesCode = `\nconst heroBadges = [
  { icon: ShieldCheck, lines: ["Regulatory", "Approvals"], x: 56.4, y: 22.8, side: "bottom" },
  { icon: FileCheck2, lines: ["MDR 2017", "Compliance"], x: 81.5, y: 7.5, side: "right" },
  { icon: ClipboardCheck, lines: ["CDSCO", "Licenses"], x: 52.9, y: 59.6, side: "bottom" },
  { icon: Globe, lines: ["Global Standards", "Local Access"], x: 90.2, y: 42.6, side: "bottom" },
] as const;\n`;

  if (!content.includes('const heroBadges')) {
    const lastImportIndex = content.lastIndexOf('import ');
    const endOfLastImport = content.indexOf('\\n', lastImportIndex);
    // simpler way: insert after the last import line
    const lines = content.split('\\n');
    let lastImportLine = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) lastImportLine = i;
    }
    lines.splice(lastImportLine + 1, 0, badgesCode);
    content = lines.join('\\n');
  }

  // Add missing icons to lucide-react import
  const requiredIcons = ['ArrowRight', 'ShieldCheck', 'FileCheck2', 'ClipboardCheck', 'Globe'];
  const lucideMatch = content.match(/import\s+{([^}]+)}\s+from\s+["']lucide-react["']/);
  if (lucideMatch) {
    let existingIcons = lucideMatch[1].split(',').map(s => s.trim());
    let missingIcons = requiredIcons.filter(icon => !existingIcons.includes(icon));
    if (missingIcons.length > 0) {
      let newImportStr = `import { ${[...existingIcons, ...missingIcons].join(', ')} } from "lucide-react"`;
      content = content.replace(lucideMatch[0], newImportStr);
    }
  } else {
    // If no lucide import exists (highly unlikely), just add it
    content = `import { ${requiredIcons.join(', ')} } from "lucide-react";\n` + content;
  }

  // Remove the old world map image if we added it (though usually it's a CSS bg url in these files)

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
}
