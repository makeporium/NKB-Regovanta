"""
Final targeted fix for 18 broken India pages.
The issue: the links block was merged into the meta array closing.
Pattern: '...content: "..." },  }),\n});'
Should be: '...content: "..." },\n    ],\n    links: [...],\n  }),\n});'
"""

import re
from pathlib import Path

ROUTES_DIR = Path('src/routes')
BASE_URL = 'https://www.nkbregovanta.com'

def filename_to_url(filename: str) -> str:
    route = filename.replace('.tsx', '')
    if route == 'index':
        return BASE_URL
    if route.endswith('.index'):
        route = route[:-6]
    route = route.replace('_.', '.')
    route = route.rstrip('_')
    return f"{BASE_URL}/{route.replace('.', '/')}"

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

fixed = 0
for filename in BROKEN_FILES:
    filepath = ROUTES_DIR / filename
    content = filepath.read_text(encoding='utf-8')
    canonical_url = filename_to_url(filename)
    
    # The broken pattern from the debug output:
    # Case 1 (2-space indent): '...content: "..." },  }),\n});'
    # Case 2 (4-space indent): '...content: "..." },    }),\n});'
    
    # Use regex to find: "...content: "...", },  [whitespace]}),\n});"
    # and replace with properly structured head block
    
    # Regex: match the last meta item + mangled closing
    pattern = re.compile(
        r'([ \t]+\{ name: "description", content: "[^"]*" \},)([ \t]+\}\),\n\}\);)',
        re.MULTILINE
    )
    
    match = pattern.search(content)
    if match:
        # Get the indentation of the description line
        desc_line = match.group(1)
        base_indent = len(desc_line) - len(desc_line.lstrip())
        indent = ' ' * base_indent
        # The closing indent is usually 2 levels up
        head_indent = ' ' * (base_indent - 2) if base_indent >= 2 else ''
        route_indent = ' ' * (base_indent - 4) if base_indent >= 4 else ''
        
        replacement = (
            f'{desc_line}\n'
            f'{indent}],\n'
            f'{head_indent}links: [\n'
            f'{indent}{{ rel: "canonical", href: "{canonical_url}" }},\n'
            f'{head_indent}],\n'
            f'{head_indent}}},\n'
            f'{route_indent}}});'
        )
        
        new_content = content[:match.start()] + replacement + content[match.end():]
        filepath.write_text(new_content, encoding='utf-8')
        fixed += 1
        print(f"FIXED: {filename}")
    else:
        # Try another pattern for the neutral-code file (4-space inner indent)
        pattern2 = re.compile(
            r'([ \t]+\{ name: "description", content: "[^"]*" \},)([ \t]+\}\),\n\}\);)',
            re.DOTALL
        )
        # Fallback: just look for the broken ending  
        if '},  }),\n});' in content or '},    }),\n});' in content:
            print(f"PATTERN NOT MATCHED (variant): {filename}")
            snippet_match = re.search(r'content: "[^"]*" \},([ \t]+)\}\)', content)
            if snippet_match:
                print(f"  Found variant: {repr(snippet_match.group(0)[:60])}")
        else:
            print(f"UNKNOWN PATTERN: {filename}")
            head_pos = content.find('head: () =>')
            if head_pos != -1:
                print(f"  Context: {repr(content[head_pos:head_pos+250])}")

print(f"\nFixed: {fixed}/{len(BROKEN_FILES)}")
