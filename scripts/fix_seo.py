"""
NKB Regovanta - Comprehensive SEO Fix Script
Fixes:
1. Adds canonical link tags to all route files that have head()
2. Adds head() with title/description/canonical to services.india.medical-devices.tsx
3. Improves meta titles on key hub pages
4. Adds og:url to root
5. Regenerates sitemap with correct URLs
"""

import os
import re
from pathlib import Path

ROUTES_DIR = Path('src/routes')
BASE_URL = 'https://www.nkbregovanta.com'

def filename_to_url(filename: str) -> str:
    """Convert TanStack Router filename to canonical URL."""
    route = filename.replace('.tsx', '')
    
    # index.tsx = homepage
    if route == 'index':
        return BASE_URL
    
    # Remove .index suffix (e.g. services.india.index -> services.india)
    if route.endswith('.index'):
        route = route[:-6]
    
    # Remove layout route underscore (e.g. cosmetics_ -> cosmetics)
    route = route.replace('_.', '.')
    route = route.rstrip('_')
    
    # Convert dots to slashes for URL path
    url_path = route.replace('.', '/')
    return f"{BASE_URL}/{url_path}"


def add_canonical_to_head(content: str, canonical_url: str) -> str:
    """Add canonical link to the head() function in route file content."""
    
    # Skip if canonical already exists
    if 'canonical' in content:
        return content
    
    # Find head: () => ({ block
    head_match = re.search(r'(head:\s*\(\)\s*=>\s*\(\{)', content)
    if not head_match:
        return content
    
    head_start = head_match.start()
    
    # Find component: or notFoundComponent: or errorComponent: that comes AFTER the head block
    component_match = re.search(r'\n\s+(component|notFoundComponent|errorComponent|shellComponent):', 
                                 content[head_start:])
    if not component_match:
        return content
    
    # The head block is from head_start to head_start + component_match.start()
    head_end = head_start + component_match.start()
    head_block = content[head_start:head_end]
    
    # Find the closing }), in the head block
    # This is the last }), before the component:
    closing_match = list(re.finditer(r'\n(\s+)\}\),', head_block))
    if not closing_match:
        return content
    
    last_closing = closing_match[-1]
    indent = last_closing.group(1)
    
    # Build the links insertion
    links_text = (
        f'\n{indent}links: [\n'
        f'{indent}    {{ rel: "canonical", href: "{canonical_url}" }},\n'
        f'{indent}],\n{indent}'
    )
    
    # Find position of the }), in head_block and replace
    closing_pos = head_start + last_closing.start()
    # We want to insert before the \n + indent + }),
    # last_closing.start() points to the \n before indent + }),
    insert_pos = closing_pos + len(f'\n{indent}')
    
    # Find the end of meta array and insert links before })
    # The pattern is: meta: [...],\n    })
    # We insert links: [...],\n after meta: [...],
    
    # Alternative: find "    }),\n" and insert before it
    meta_end_pattern = f',\n{indent}}})'
    meta_end_pos = head_block.rfind(f',\n{indent}}})')
    if meta_end_pos == -1:
        return content
    
    # Insert after the comma (after meta array closes)
    actual_pos = head_start + meta_end_pos + 1  # after the comma
    
    links_insertion = (
        f'\n{indent}links: [\n'
        f'{indent}    {{ rel: "canonical", href: "{canonical_url}" }},\n'
        f'{indent}],'
    )
    
    new_content = content[:actual_pos] + links_insertion + content[actual_pos:]
    return new_content


def improve_meta_title(content: str, old_title: str, new_title: str) -> str:
    """Replace a specific meta title."""
    return content.replace(
        f'{{ title: "{old_title}" }}',
        f'{{ title: "{new_title}" }}'
    )


def improve_meta_description(content: str, old_desc: str, new_desc: str) -> str:
    """Replace a specific meta description."""
    return content.replace(old_desc, new_desc)


# ─────────────────────────────────────────────────────────────────────────────
# 1. CANONICAL TAGS — Add to all route files with head()
# ─────────────────────────────────────────────────────────────────────────────

SKIP_FILES = {'__root.tsx', 'about copy.tsx'}

updated_canonical = []
skipped_canonical = []
failed_canonical = []

print("=" * 70)
print("STEP 1: Adding canonical tags to all route files...")
print("=" * 70)

for filepath in sorted(ROUTES_DIR.glob('*.tsx')):
    filename = filepath.name
    
    if filename in SKIP_FILES:
        continue
    
    content = filepath.read_text(encoding='utf-8')
    
    # Skip files with no head() function
    if 'head: () =>' not in content:
        skipped_canonical.append(filename)
        continue
    
    # Skip if already has canonical
    if 'canonical' in content:
        skipped_canonical.append(f"{filename} (already has canonical)")
        continue
    
    canonical_url = filename_to_url(filename)
    new_content = add_canonical_to_head(content, canonical_url)
    
    if new_content != content:
        filepath.write_text(new_content, encoding='utf-8')
        updated_canonical.append(f"{filename} → {canonical_url}")
        print(f"  ✅ {filename}")
    else:
        failed_canonical.append(filename)
        print(f"  ⚠️  Could not add canonical: {filename}")

print(f"\n  Updated: {len(updated_canonical)}, Skipped: {len(skipped_canonical)}, Failed: {len(failed_canonical)}")


# ─────────────────────────────────────────────────────────────────────────────
# 2. ADD HEAD() to services.india.medical-devices.tsx (the BIG missing one)
# ─────────────────────────────────────────────────────────────────────────────

print("\n" + "=" * 70)
print("STEP 2: Adding head() to services.india.medical-devices.tsx...")
print("=" * 70)

md_file = ROUTES_DIR / 'services.india.medical-devices.tsx'
md_content = md_file.read_text(encoding='utf-8')

if 'head: () =>' not in md_content:
    head_block = '''head: () => ({
        meta: [
            { title: "CDSCO Medical Device Import & Manufacturing Licence India | NKB Regovanta" },
            {
                name: "description",
                content: "Expert CDSCO medical device regulatory consulting in India. Import Licence (MD-14/MD-15), Manufacturing Licence (MD-3 to MD-9), Class A-D, Indian Authorized Agent, SUGAM portal support and post-market compliance.",
            },
        ],
        links: [
            { rel: "canonical", href: "https://www.nkbregovanta.com/services/india/medical-devices" },
        ],
    }),
    '''
    # Find the component: line and insert head() before it
    new_md = md_content.replace(
        'component: MedicalDevicesIndiaPage,',
        head_block + 'component: MedicalDevicesIndiaPage,'
    )
    if new_md != md_content:
        md_file.write_text(new_md, encoding='utf-8')
        print("  ✅ Added head() to services.india.medical-devices.tsx")
    else:
        print("  ⚠️  Could not insert head() into services.india.medical-devices.tsx")
else:
    print("  ℹ️  services.india.medical-devices.tsx already has head()")


# ─────────────────────────────────────────────────────────────────────────────
# 3. IMPROVE META TITLES on key hub pages
# ─────────────────────────────────────────────────────────────────────────────

print("\n" + "=" * 70)
print("STEP 3: Improving meta titles & descriptions on key pages...")
print("=" * 70)

title_improvements = {
    'index.tsx': {
        'old_title': 'NKB Regovanta — Regulatory, Quality & Global Market Access',
        'new_title': 'Medical Device & IVD Regulatory Consultant India | NKB Regovanta',
        'old_desc': 'Regulatory, quality and market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics. From first idea to global market access.',
        'new_desc': 'Expert CDSCO, US FDA, EU MDR/IVDR, ISO 13485 and global market access consulting for Medical Devices, IVDs, Pharmaceuticals and Cosmetics. India-based regulatory consultants serving global markets.',
    },
    'services.india.index.tsx': {
        'old_title': 'CDSCO Medical Device Registration India | NKB Regovanta',
        'new_title': 'CDSCO Medical Device Import & Manufacturing Licence India | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'services.drug-licenses-for-importers.tsx': {
        'old_title': 'Drug Licenses for Importers in India (Form 10, Form 41) | NKB Regovanta',
        'new_title': 'Drug Import Licence Registration CDSCO India | Form 41, Form 10 | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'services.usa.index.tsx': {
        'old_title': 'US FDA Medical Device Registration | NKB Regovanta',
        'new_title': 'FDA 510(k) Consultant & US Agent Services India | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'services.eu.index.tsx': {
        'old_title': 'EU MDR/IVDR Medical Device Registration | NKB Regovanta',
        'new_title': 'CE Marking EU MDR IVDR Consultant | European Authorized Representative | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'services.iso-13485.tsx': {
        'old_title': 'ISO 13485 QMS | NKB Regovanta',
        'new_title': 'ISO 13485 QMS Implementation Consultant India | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'services.mdsap.tsx': {
        'old_title': 'MDSAP Preparation & Support | NKB Regovanta',
        'new_title': 'MDSAP Readiness & Audit Consultant India | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'services.uk.index.tsx': {
        'old_title': 'UK MHRA Medical Device Registration | NKB Regovanta',
        'new_title': 'MHRA Medical Device Registration & UK Responsible Person | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'services.australia.index.tsx': {
        'old_title': 'Australia TGA Medical Device Registration | NKB Regovanta',
        'new_title': 'TGA ARTG Inclusion & Australian Sponsor Services | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'markets.index.tsx': {
        'old_title': 'Global Markets | NKB Regovanta',
        'new_title': 'Global Medical Device Regulatory Markets | CDSCO FDA CE TGA MHRA | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'industries.medical-devices.tsx': {
        'old_title': 'Medical Device Regulatory & Quality Support | NKB Regovanta',
        'new_title': 'Medical Device Regulatory Consultant India | CDSCO FDA CE Marking | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'industries.ivd.tsx': {
        'old_title': 'IVD Regulatory & Market Access Support | NKB Regovanta',
        'new_title': 'IVD Regulatory Consultant | EU IVDR CDSCO FDA | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'industries.cosmetics.tsx': {
        'old_title': 'Global Cosmetics Regulatory & Compliance Support | NKB Regovanta',
        'new_title': 'Cosmetic Regulatory Consultant India | CDSCO MoCRA EU Cosmetics | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'industries.index.tsx': {
        'old_title': 'Industries We Serve | NKB Regovanta',
        'new_title': 'Medical Devices, IVDs, Pharmaceuticals & Cosmetics Regulatory | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
    'about.tsx': {
        'old_title': 'About Us | NKB Regovanta',
        'new_title': 'About NKB Regovanta | Medical Device Regulatory Consulting Company India',
        'old_desc': None,
        'new_desc': None,
    },
    'contact.tsx': {
        'old_title': 'Contact Us | NKB Regovanta',
        'new_title': 'Contact NKB Regovanta | Medical Device & IVD Regulatory Consultant India',
        'old_desc': None,
        'new_desc': None,
    },
    'services.canada.index.tsx': {
        'old_title': 'Health Canada Medical Device Registration | NKB Regovanta',
        'new_title': 'Health Canada MDL MDEL Consultant | MDSAP Canada | NKB Regovanta',
        'old_desc': None,
        'new_desc': None,
    },
}

for filename, changes in title_improvements.items():
    filepath = ROUTES_DIR / filename
    if not filepath.exists():
        print(f"  ⚠️  File not found: {filename}")
        continue
    
    content = filepath.read_text(encoding='utf-8')
    original = content
    
    if changes.get('old_title') and changes.get('new_title'):
        content = content.replace(
            f'{{ title: "{changes["old_title"]}" }}',
            f'{{ title: "{changes["new_title"]}" }}'
        )
    
    if changes.get('old_desc') and changes.get('new_desc'):
        content = content.replace(changes['old_desc'], changes['new_desc'])
    
    if content != original:
        filepath.write_text(content, encoding='utf-8')
        print(f"  ✅ {filename} — title updated")
    else:
        print(f"  ⚠️  Could not update title in: {filename}")


# ─────────────────────────────────────────────────────────────────────────────
# 4. FIX ROOT __root.tsx — Add og:url, remove @Lovable twitter:site if present
# ─────────────────────────────────────────────────────────────────────────────

print("\n" + "=" * 70)
print("STEP 4: Fixing __root.tsx (og:url, twitter:site)...")
print("=" * 70)

root_file = ROUTES_DIR / '__root.tsx'
root_content = root_file.read_text(encoding='utf-8')

# Remove @Lovable twitter:site if still present
if '@Lovable' in root_content:
    root_content = root_content.replace(
        '{ name: "twitter:site", content: "@Lovable" },',
        '{ name: "twitter:site", content: "@NKBRegovanta" },'
    )
    print("  ✅ Removed @Lovable twitter:site tag")
else:
    print("  ℹ️  No @Lovable tag found (already clean)")

# Add og:url if missing
if 'og:url' not in root_content:
    root_content = root_content.replace(
        '{ property: "og:type", content: "website" },',
        '{ property: "og:type", content: "website" },\n      { property: "og:url", content: "https://www.nkbregovanta.com" },'
    )
    print("  ✅ Added og:url meta tag")
else:
    print("  ℹ️  og:url already present")

root_file.write_text(root_content, encoding='utf-8')


# ─────────────────────────────────────────────────────────────────────────────
# 5. REGENERATE SITEMAP with correct route URLs
# ─────────────────────────────────────────────────────────────────────────────

print("\n" + "=" * 70)
print("STEP 5: Regenerating sitemap.xml with correct route URLs...")
print("=" * 70)

from datetime import datetime

urls = set()
skip_for_sitemap = {'__root.tsx', 'about copy.tsx'}

# Layout/passthrough files that don't have their own content page
# (tiny files that are just <Outlet/> wrappers)
layout_only_files = {
    'services.tsx', 'services.india.tsx', 'services.eu.tsx',
    'services.usa.tsx', 'services.uk.tsx', 'services.australia.tsx',
    'services.brazil.tsx', 'services.canada.tsx', 'case-studies.tsx',
    'industries.tsx'
}

for filepath in ROUTES_DIR.glob('*.tsx'):
    filename = filepath.name
    
    if filename in skip_for_sitemap:
        continue
    
    if filename in layout_only_files:
        continue
    
    url = filename_to_url(filename)
    urls.add(url)

sorted_urls = sorted(list(urls))
today = datetime.now().strftime('%Y-%m-%d')

def get_priority(url):
    if url == BASE_URL:
        return '1.0'
    if any(x in url for x in ['/services/india/', '/services/usa', '/services/eu', '/services/india']):
        return '0.9'
    if '/services/' in url:
        return '0.85'
    if '/industries/' in url or '/markets' in url:
        return '0.8'
    if '/case-studies' in url or '/insights' in url:
        return '0.75'
    return '0.7'

xml_lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'
    + ' xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"'
    + ' xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9'
    + ' http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
]

for u in sorted_urls:
    xml_lines.append('  <url>')
    xml_lines.append(f'    <loc>{u}</loc>')
    xml_lines.append(f'    <lastmod>{today}</lastmod>')
    xml_lines.append('    <changefreq>weekly</changefreq>')
    xml_lines.append(f'    <priority>{get_priority(u)}</priority>')
    xml_lines.append('  </url>')

xml_lines.append('</urlset>')

sitemap_path = Path('public/sitemap.xml')
sitemap_path.write_text('\n'.join(xml_lines), encoding='utf-8')
print(f"  ✅ Generated sitemap.xml with {len(sorted_urls)} URLs")

# Print summary
print("\n" + "=" * 70)
print("COMPLETE! Summary:")
print(f"  - Canonical tags added: {len(updated_canonical)} files")
print(f"  - Canonical tags skipped: {len(skipped_canonical)} files")
print(f"  - Canonical tags failed: {len(failed_canonical)} files")
if failed_canonical:
    print(f"    Failed: {', '.join(failed_canonical)}")
print(f"  - Sitemap URLs: {len(sorted_urls)}")
print("=" * 70)
