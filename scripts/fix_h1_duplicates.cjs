/**
 * FIX DUPLICATE H1 TAGS ON INDIA PAGES
 * The India pages have a responsive hero pattern with two <h1> tags:
 * - Desktop: hidden md:block container with <h1>
 * - Mobile: md:hidden container with another <h1>
 * 
 * Fix: Change the mobile <h1> to <p> with aria-hidden="true" and same styles.
 * This preserves visual design while eliminating the duplicate H1.
 */
const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '../src/routes');

// All India pages known to have duplicate H1
const INDIA_FILES = fs.readdirSync(routesDir).filter(f => 
  f.startsWith('services.india.') && f.endsWith('.tsx') && !f.startsWith('__')
);

let fixed = 0;
let notNeeded = 0;
let errors = 0;

for (const file of INDIA_FILES) {
  const fp = path.join(routesDir, file);
  let content = fs.readFileSync(fp, 'utf8');
  
  // Count H1 tags
  const h1Count = (content.match(/<h1[\s>]/g) || []).length;
  
  if (h1Count < 2) {
    notNeeded++;
    continue;
  }
  
  // Find the mobile section (md:hidden) and its h1
  // Pattern: the mobile div has "md:hidden" class
  // We need to find the h1 inside the md:hidden section and change it
  
  // Strategy: find the mobile section between "md:hidden" and the next closing section
  // Then within that find the first <h1 and change it to <p role="heading" aria-level="1" aria-hidden="true"
  
  // Split into sections: everything up to the md:hidden block, the block itself, and after
  const mobileIdx = content.indexOf('md:hidden');
  if (mobileIdx === -1) {
    console.log('NO md:hidden:', file);
    notNeeded++;
    continue;
  }
  
  // Find the first <h1 after md:hidden
  const h1AfterMobile = content.indexOf('<h1 ', mobileIdx);
  if (h1AfterMobile === -1) {
    console.log('NO h1 after md:hidden:', file);
    notNeeded++;
    continue;
  }
  
  // Find the closing </h1> after that
  const h1CloseAfterMobile = content.indexOf('</h1>', h1AfterMobile);
  if (h1CloseAfterMobile === -1) {
    console.log('NO </h1> close:', file);
    errors++;
    continue;
  }
  
  // Verify that this h1 comes after the FIRST h1 (the desktop one)
  const firstH1 = content.indexOf('<h1 ');
  if (firstH1 === h1AfterMobile) {
    // The first h1 IS the mobile one — find the second h1
    const secondH1 = content.indexOf('<h1 ', firstH1 + 1);
    if (secondH1 === -1) {
      notNeeded++;
      continue;
    }
    // Second h1 is the duplicate — change it
    const h2Close = content.indexOf('</h1>', secondH1);
    const h1Tag = content.substring(secondH1, secondH1 + 4); // "<h1 "
    const h1Content = content.substring(secondH1, h2Close + 5);
    
    // Replace <h1 ...> with <p ... role="heading" aria-level="1" aria-hidden="true">
    const replacement = h1Content
      .replace('<h1 ', '<p ')
      .replace('</h1>', '</p>');
    
    content = content.substring(0, secondH1) + replacement + content.substring(h2Close + 5);
  } else {
    // The mobile h1 is after the first h1 — this is the duplicate
    const h1Tag = content.substring(h1AfterMobile, h1AfterMobile + 4); // "<h1 "
    const h1FullContent = content.substring(h1AfterMobile, h1CloseAfterMobile + 5);
    
    // Replace the closing tag and opening tag
    const replacement = h1FullContent
      .replace('<h1 ', '<p ')
      .replace('</h1>', '</p>');
    
    content = content.substring(0, h1AfterMobile) + replacement + content.substring(h1CloseAfterMobile + 5);
  }
  
  // Verify fix
  const newH1Count = (content.match(/<h1[\s>]/g) || []).length;
  if (newH1Count >= h1Count) {
    console.log('FIX FAILED:', file, '(still has', newH1Count, 'h1s)');
    errors++;
    continue;
  }
  
  fs.writeFileSync(fp, content, 'utf8');
  console.log('FIXED H1 duplicate:', file, `(${h1Count} -> ${newH1Count} h1 tags)`);
  fixed++;
}

console.log(`\nDuplicate H1 Fix: Fixed ${fixed}, Not needed ${notNeeded}, Errors ${errors}`);
