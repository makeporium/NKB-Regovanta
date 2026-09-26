"""
Fix the 18 India service pages where canonical was inserted
INSIDE the meta array (missing the closing ],)
"""

import re
from pathlib import Path

ROUTES_DIR = Path('src/routes')
BASE_URL = 'https://www.nkbregovanta.com'

BROKEN_FILES = [
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

fixed = 0
for filename in BROKEN_FILES:
    filepath = ROUTES_DIR / filename
    content = filepath.read_text(encoding='utf-8')
    canonical_url = filename_to_url(filename)
    
    # The broken pattern looks like:
    #   meta: [
    #     { title: "..." },
    #     { name: "description", content: "..." },
    #     links: [             <-- WRONG: inserted here
    #     { rel: "canonical", href: "..." },
    #   ],
    #   }),
    # });
    
    # Fix: remove the broken insertion and do it correctly
    # Step 1: remove the broken lines (links block inside meta)
    broken_pattern = re.compile(
        r'(\s+links:\s*\[\s*\n\s*\{\s*rel:\s*"canonical",\s*href:\s*"[^"]+"\s*\},\s*\n\s*\],\s*\n)',
        re.MULTILINE
    )
    
    # First, remove the broken insertion
    cleaned = broken_pattern.sub('', content)
    
    # Now find the correct insertion point: after meta array closes, before head closes
    # Pattern: <spaces>],\n<spaces>}),\n
    # We want: <spaces>],\n<spaces>links: [...],\n<spaces>}),\n
    
    # Find the structure:
    #   },   <- last item in meta array
    # ],    <- close meta array
    # }),   <- close head block
    
    # Use a pattern specific to these files (2-space indent)
    # The head block in these files:
    # head: () => ({
    #   meta: [
    #     ...
    #   ],
    # }),
    
    correct_replacement = (
        f'],\n'
        f'    links: [\n'
        f'      {{ rel: "canonical", href: "{canonical_url}" }},\n'
        f'    ],\n'
        f'  }},\n'
        f'}});'
    )
    
    # Find and replace the closing of the head block
    # Pattern: "  ],\n  }),\n});"
    old_ending = '  ],\n  }),\n});'
    new_ending = (
        f'  ],\n'
        f'  links: [\n'
        f'    {{ rel: "canonical", href: "{canonical_url}" }},\n'
        f'  ],\n'
        f'  }}),\n'
        f'}});'
    )
    
    if old_ending in cleaned:
        fixed_content = cleaned.replace(old_ending, new_ending, 1)
        filepath.write_text(fixed_content, encoding='utf-8')
        fixed += 1
        print(f"FIXED: {filename}")
    else:
        # Try to find the actual pattern 
        head_match = re.search(r'head:\s*\(\)\s*=>\s*\(\{', cleaned)
        if head_match:
            snippet = cleaned[head_match.start():head_match.start()+300]
            print(f"STILL BROKEN: {filename}")
            print(f"  Snippet: {repr(snippet)}")
        else:
            print(f"NO HEAD: {filename}")

print(f"\nFixed: {fixed}/{len(BROKEN_FILES)}")
