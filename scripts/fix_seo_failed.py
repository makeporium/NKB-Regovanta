"""
Fix canonical tags for the 18 'services.india.*' files that have
component: BEFORE head: (opposite order from other files)
"""

import re
from pathlib import Path

ROUTES_DIR = Path('src/routes')
BASE_URL = 'https://www.nkbregovanta.com'

FAILED_FILES = [
    'services.india.class-a-import.tsx',
    'services.india.free-sale.tsx',
    'services.india.index.tsx',
    'services.india.investigational-devices.tsx',
    'services.india.ivd-clinical-performance.tsx',
    'services.india.ivd-testing.tsx',
    'services.india.loan-class-a-b.tsx',
    'services.india.loan-class-c-d.tsx',
    'services.india.market-standing.tsx',
    'services.india.md-42.tsx',
    'services.india.mfg-class-a-b.tsx',
    'services.india.mfg-class-a-gsr.tsx',
    'services.india.mfg-class-c-d.tsx',
    'services.india.neutral-code.tsx',
    'services.india.non-conviction.tsx',
    'services.india.novel-ivds.tsx',
    'services.india.personal-use.tsx',
    'services.india.predicate-devices.tsx',
]

def filename_to_url(filename: str) -> str:
    route = filename.replace('.tsx', '')
    if route == 'index':
        return BASE_URL
    if route.endswith('.index'):
        route = route[:-6]
    route = route.replace('_.', '.')
    route = route.rstrip('_')
    url_path = route.replace('.', '/')
    return f"{BASE_URL}/{url_path}"

updated = 0
failed = 0

for filename in FAILED_FILES:
    filepath = ROUTES_DIR / filename
    if not filepath.exists():
        print(f"NOT FOUND: {filename}")
        continue
    
    content = filepath.read_text(encoding='utf-8')
    
    if 'canonical' in content:
        print(f"SKIP (already has canonical): {filename}")
        continue
    
    canonical_url = filename_to_url(filename)
    
    # Pattern for these files: head: () => ({ meta: [...], }),  (closes with }),)
    # but the }); closes the route definition, not }),
    # The head block ends with:
    #   ],
    # }),
    # });
    
    # Find "],\n  })," which is the closing of meta array + head block
    # These files use 2-space indentation typically
    
    patterns_to_try = [
        # Pattern with 4-space indent
        ('    ],\n    }),\n});', '    links: [\n        { rel: "canonical", href: "' + canonical_url + '" },\n    ],\n    }),\n});'),
        # Pattern with 2-space indent  
        ('  ],\n  }),\n});', '  links: [\n    { rel: "canonical", href: "' + canonical_url + '" },\n  ],\n  }),\n});'),
        # Pattern with 4-space after 6-space meta
        ('    ],\n  }),\n});', '    links: [\n        { rel: "canonical", href: "' + canonical_url + '" },\n    ],\n  }),\n});'),
    ]
    
    new_content = content
    replaced = False
    for old, new in patterns_to_try:
        if old in content:
            new_content = content.replace(old, new, 1)
            replaced = True
            break
    
    if not replaced:
        # Try a more flexible regex approach
        # Find the head block end: ],\n<spaces>}),\n and possibly });
        match = re.search(r'(    \],\n)(  \}\),)\n(\}\);)', content)
        if match:
            insert = f'    links: [\n        {{ rel: "canonical", href: "{canonical_url}" }},\n    ],\n'
            new_content = content[:match.start(2)] + insert + content[match.start(2):]
            replaced = True
        
        if not replaced:
            match = re.search(r'(\s+\],\n)(\s+\}\),\n)', content)
            if match:
                indent = len(match.group(2)) - len(match.group(2).lstrip()) 
                indent_str = ' ' * indent
                links = f'{indent_str}links: [\n{indent_str}    {{ rel: "canonical", href: "{canonical_url}" }},\n{indent_str}],\n'
                insert_pos = match.start(2)
                new_content = content[:insert_pos] + links + content[insert_pos:]
                replaced = True
    
    if replaced and new_content != content:
        filepath.write_text(new_content, encoding='utf-8')
        updated += 1
        print(f"OK: {filename} -> {canonical_url}")
    else:
        failed += 1
        # Debug: show relevant section
        head_pos = content.find('head: () =>')
        if head_pos != -1:
            snippet = content[head_pos:head_pos+200]
            print(f"FAIL: {filename}")
            print(f"  Snippet: {repr(snippet[:100])}")

print(f"\nDone. Updated: {updated}, Failed: {failed}")
