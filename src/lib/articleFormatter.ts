/**
 * NKB Regovanta - Article HTML Formatter & Sanitizer
 * 
 * Cleans messy content pasted from Google Docs, Microsoft Word, and foreign WYSIWYG editors.
 * Enforces authentic NKB Regovanta typography and layout integrity:
 * 1. Strips harmful whitespace overrides (white-space: pre / pre-wrap / nowrap) that break grid layouts.
 * 2. Strips foreign font families, font sizes, line heights, text colors, margins, and padding.
 * 3. Converts body <h1> tags to <h2> to maintain strict single-H1 SEO hierarchy.
 * 4. Strips empty or redundant spans and empty paragraphs.
 * 5. Cleans and beautifies tables: removes hardcoded pixel widths, converts first row bold <td> to <thead><tr><th>.
 * 6. Wraps tables in responsive horizontal scroll containers so they never blow out grid columns.
 */

export interface AutoFormatResult {
  cleaned: string;
  changesCount: number;
}

export function autoFormatArticleHtml(rawHtml: string): AutoFormatResult {
  if (!rawHtml) return { cleaned: "", changesCount: 0 };
  let changesCount = 0;

  let cleaned = rawHtml;

  // 1. Strip comments, doctypes, head, style, script, meta, and foreign attributes
  cleaned = cleaned
    .replace(/<!--[\s\S]*?-->/g, () => { changesCount++; return ""; })
    .replace(/<!doctype[^>]*>/gi, () => { changesCount++; return ""; })
    .replace(/<head[\s\S]*?<\/head>/gi, () => { changesCount++; return ""; })
    .replace(/<style[\s\S]*?<\/style>/gi, () => { changesCount++; return ""; })
    .replace(/<script[\s\S]*?<\/script>/gi, () => { changesCount++; return ""; })
    .replace(/<meta[^>]*>/gi, () => { changesCount++; return ""; })
    .replace(/<link[^>]*>/gi, () => { changesCount++; return ""; })
    .replace(/<h[1-6][^>]*>\s*(?:undefined|&nbsp;|\s)*<\/h[1-6]>/gi, () => { changesCount++; return ""; })
    .replace(/\s*dir=["'](?:ltr|rtl)["']/gi, () => { changesCount++; return ""; });

  // 2. Extract main/body if whole HTML document was pasted
  const mainMatch = cleaned.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch && mainMatch[1]) {
    cleaned = mainMatch[1];
    changesCount++;
  } else {
    const bodyMatch = cleaned.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch && bodyMatch[1]) {
      cleaned = bodyMatch[1];
      changesCount++;
    }
  }

  cleaned = cleaned.replace(/<\/?(?:html|body|main)[^>]*>/gi, "").trim();

  // 3. Convert body <h1> to <h2> to protect page-level canonical single-H1 hierarchy
  cleaned = cleaned.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/gi, (match, attrs, content) => {
    changesCount++;
    return `<h2${attrs}>${content}</h2>`;
  });

  // 4. Strip harmful inline styles (Google Docs / Microsoft Word / rich text junk)
  cleaned = cleaned.replace(/style=(["'])([\s\S]*?)\1/gi, (match, quote, styleStr) => {
    // Preserve intentional Tailwind / custom component styles if class-based, but clean destructive inline CSS
    let cleanStyles = styleStr
      // CRITICAL: Strip ALL white-space overrides (pre, pre-wrap, nowrap, pre-line)
      .replace(/white-space\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      // Strip font overrides
      .replace(/font-family\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/font-size\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/font-weight\s*:\s*(?:400|normal|inherit|initial);?/gi, () => { changesCount++; return ""; })
      .replace(/font-variant\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/line-height\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/letter-spacing\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      // Strip all text color and background overrides from Word / Docs
      .replace(/color\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/background-color\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/background\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      // Strip margin & padding overrides (Docs puts padding-inline-start: 48px on lists)
      .replace(/margin(?:-(?:top|bottom|left|right))?\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/padding(?:-(?:top|bottom|left|right|inline-start|inline-end))?\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      // Strip text-decoration overrides (Docs puts text-decoration: none, text-decoration-skip-ink: none)
      .replace(/text-decoration(?:-skip-ink)?\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/-webkit-text-decoration-skip\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/vertical-align\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .replace(/list-style-type\s*:[^;]+;?/gi, () => { changesCount++; return ""; })
      .trim();

    cleanStyles = cleanStyles.replace(/^;+|;+$/g, "").trim();
    if (!cleanStyles) {
      changesCount++;
      return "";
    }
    return `style=${quote}${cleanStyles}${quote}`;
  });

  // 5. Clean table formatting: strip fixed colgroup pixel widths, legacy attributes, and inline styles
  cleaned = cleaned.replace(/<colgroup[\s\S]*?<\/colgroup>/gi, () => {
    changesCount++;
    return "";
  });

  cleaned = cleaned.replace(/<(table|thead|tbody|tr|th|td)([^>]*)>/gi, (match, tag, attrs) => {
    const cleanedAttrs = attrs
      .replace(/\s*style=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; })
      .replace(/\s*width=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; })
      .replace(/\s*height=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; })
      .replace(/\s*bgcolor=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; })
      .replace(/\s*color=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; })
      .replace(/\s*cellspacing=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; })
      .replace(/\s*cellpadding=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; })
      .replace(/\s*border=(["'])[\s\S]*?\1/gi, () => { changesCount++; return ""; });
    return `<${tag}${cleanedAttrs}>`;
  });

  // Convert first row <td> with bold headers into semantic <thead><tr><th>
  cleaned = cleaned.replace(
    /<table([^>]*)>\s*(?:<tbody>)?\s*<tr>((?:\s*<td>\s*(?:<p[^>]*>)?\s*<strong>[\s\S]*?<\/strong>\s*(?:<\/p[^>]*>)?\s*<\/td>\s*)+)<\/tr>/gi,
    (match, tableAttrs, rowContent) => {
      changesCount++;
      const thContent = rowContent.replace(
        /<td([^>]*)>\s*(?:<p[^>]*>)?\s*(?:<strong>)?([\s\S]*?)(?:<\/strong>)?\s*(?:<\/p[^>]*>)?\s*<\/td>/gi,
        '<th$1>$2</th>'
      );
      return `<table${tableAttrs}><thead><tr>${thContent}</tr></thead><tbody>`;
    }
  );

  // Unwrap paragraphs and spans inside table headers <th> to prevent dark text or sizing issues
  cleaned = cleaned.replace(/<th([^>]*)>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/th>/gi, (m, attrs, content) => {
    changesCount++;
    return `<th${attrs}>${content}</th>`;
  });
  cleaned = cleaned.replace(/<th([^>]*)>\s*<span[^>]*>([\s\S]*?)<\/span>\s*<\/th>/gi, (m, attrs, content) => {
    changesCount++;
    return `<th${attrs}>${content}</th>`;
  });

  // Wrap tables in responsive horizontal scroll container if not already wrapped
  cleaned = cleaned.replace(/(?:<div[^>]*class=["'][^"']*overflow-x-auto[^"']*["'][^>]*>\s*)?<table([^>]*)>([\s\S]*?)<\/table>(?:\s*<\/div>)?/gi, (match, tableAttrs, tableInner) => {
    changesCount++;
    return `<div class="table-wrapper my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs"><table${tableAttrs}>${tableInner}</table></div>`;
  });

  // 6. Strip Google Docs wrappers & convert bold spans to semantic <strong>
  cleaned = cleaned.replace(/<span\s+id=["']docs-internal-guid-[^"']*["']>([\s\S]*?)<\/span>/gi, (m, c) => {
    changesCount++;
    return c;
  });
  cleaned = cleaned.replace(/<span\s+style=["'][^"']*font-weight:\s*(?:700|bold)[^"']*["']>([\s\S]*?)<\/span>/gi, (m, c) => {
    changesCount++;
    return `<strong>${c}</strong>`;
  });

  // Strip empty/useless spans repeatedly (up to 5 passes for nested spans)
  for (let i = 0; i < 5; i++) {
    const prev = cleaned;
    cleaned = cleaned.replace(/<span(?:\s+style=["']\s*["'])?\s*>([\s\S]*?)<\/span>/gi, (m, c) => {
      changesCount++;
      return c;
    });
    if (cleaned === prev) break;
  }

  // 7. Strip empty paragraphs and redundant breaks
  cleaned = cleaned.replace(/<p[^>]*>\s*(?:&nbsp;|\s)*<\/p>/gi, () => {
    changesCount++;
    return "";
  });
  cleaned = cleaned.replace(/(?:<br\s*\/?>\s*){3,}/gi, () => {
    changesCount++;
    return "<br><br>";
  });

  return { cleaned: cleaned.trim(), changesCount };
}

/**
 * Convenience wrapper returning just the cleaned HTML string.
 */
export function cleanArticleHtml(rawHtml: string): string {
  if (!rawHtml) return "";
  return autoFormatArticleHtml(rawHtml).cleaned;
}

/**
 * Alias for RichBlogEditor compatibility.
 */
export function sanitizeArticleContent(rawHtml: string): string {
  return cleanArticleHtml(rawHtml);
}
