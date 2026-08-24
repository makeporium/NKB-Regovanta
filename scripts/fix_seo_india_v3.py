"""
Nuclear fix: rewrite the entire head block for all 18 India service files.
Strategy: find the head block, strip it completely, rewrite correctly.
"""

import re
from pathlib import Path

ROUTES_DIR = Path('src/routes')
BASE_URL = 'https://www.nkbregovanta.com'

def filename_to_url(filename: str) -> str:
    route = filename.replace('.tsx', '')
    if route.endswith('.index'):
        route = route[:-6]
    route = route.replace('_.', '.')
    route = route.rstrip('_')
    return f"{BASE_URL}/{route.replace('.', '/')}"

# Map of filename -> (title, description) pairs to preserve
FILE_META = {
    'services.india.class-a-import.tsx': (
        "Class A Import Registration (GSR 777(E)) | NKB Regovanta",
        "Simplified CDSCO registration for low-risk, Class A (non-sterile & non-measuring) medical devices in India."
    ),
    'services.india.free-sale.tsx': (
        "Free Sale Certificate (FSC) | NKB Regovanta",
        "Apply for a CDSCO Free Sale Certificate to seamlessly export your medical devices to international markets."
    ),
    'services.india.index.tsx': (
        "CDSCO Medical Device Import & Manufacturing Licence India | NKB Regovanta",
        "Expert CDSCO consultancy services for medical device import license, manufacturing license, and regulatory approvals in India."
    ),
    'services.india.investigational-devices.tsx': (
        "Import Authorization for Investigational Devices | NKB Regovanta",
        "Learn about the MD-18 and MD-19 forms for importing investigational medical devices for compassionate use in Indian government hospitals."
    ),
    'services.india.ivd-clinical-performance.tsx': (
        "IVD Clinical Performance Evaluation | MD-24 & MD-25",
        "Learn how to obtain CDSCO permissions (MD-24, MD-25) to conduct Clinical Performance Evaluations for new IVD medical devices in India."
    ),
    'services.india.ivd-testing.tsx': (
        "Test License for IVD Devices | MD-16 & MD-17",
        "Apply for CDSCO Forms MD-16 and MD-17 to import limited quantities of IVD medical devices for non-commercial testing, evaluation, or demonstration."
    ),
    'services.india.loan-class-a-b.tsx': (
        "Loan Licenses for Class A & B Devices | MD-4 & MD-6",
        "Learn how to obtain SLA MD-6 loan licenses to manufacture Class A and B medical devices in existing licensed facilities in India."
    ),
    'services.india.loan-class-c-d.tsx': (
        "Loan Licenses for Class C & D Devices | MD-8 & MD-10",
        "Learn how to obtain CDSCO MD-10 loan licenses to manufacture Class C and D high-risk medical devices in existing licensed facilities in India."
    ),
    'services.india.market-standing.tsx': (
        "Market Standing Certificate (MSC) | NKB Regovanta",
        "Obtain a CDSCO Market Standing Certificate to prove your medical device company's established presence for tenders and exports."
    ),
    'services.india.md-42.tsx': (
        "MD-42 Certificate (Medical Device Registration) | NKB Regovanta",
        "Get your MD-42 Medical Device Registration Certificate to legally sell, stock, and distribute medical devices in India."
    ),
    'services.india.mfg-class-a-b.tsx': (
        "Manufacturing License for Class A & B Devices | MD-3 & MD-5",
        "Expert assistance for acquiring CDSCO MD-5 manufacturing licenses for low-to-moderate risk Class A and B medical devices in India."
    ),
    'services.india.mfg-class-a-gsr.tsx': (
        "Manufacturing Registration for Class A Medical Devices | GSR 777(E)",
        "Fast-track CDSCO manufacturing registration for non-sterile and non-measuring Class A medical devices under GSR 777(E) in India."
    ),
    'services.india.mfg-class-c-d.tsx': (
        "Manufacturing License for Class C & D Devices | MD-7 & MD-9",
        "Expert guidance for obtaining CDSCO MD-9 manufacturing licenses for high-risk Class C and D medical devices in India."
    ),
    'services.india.neutral-code.tsx': (
        "Neutral Code Certificate (Special Code) | NKB Regovanta",
        "Apply for a CDSCO Neutral Code to export medical devices compliantly while maintaining manufacturing identity confidentiality."
    ),
    'services.india.non-conviction.tsx': (
        "Non-Conviction Certificate (NCC) | NKB Regovanta",
        "Obtain a Non-Conviction Certificate from CDSCO to prove regulatory compliance for medical device tenders and procurement in India."
    ),
    'services.india.novel-ivds.tsx': (
        "Import Authorization for Novel IVDs | MD-26 & MD-27",
        "Secure CDSCO permissions (MD-26 and MD-27) to import or manufacture new In Vitro Diagnostic (IVD) medical devices in India."
    ),
    'services.india.personal-use.tsx': (
        "Personal Use Import License | MD-20 & MD-21",
        "Navigate Forms MD-20 and MD-21 for importing specialized medical devices for personal use and treatment in India."
    ),
    'services.india.predicate-devices.tsx': (
        "Import License for Predicate Medical Devices | MD-14 & MD-15",
        "Get your MD-15 CDSCO import license for Class A, B, C, or D predicate medical devices in India."
    ),
}

fixed = 0
for filename, (title, description) in FILE_META.items():
    filepath = ROUTES_DIR / filename
    if not filepath.exists():
        print(f"NOT FOUND: {filename}")
        continue
    
    content = filepath.read_text(encoding='utf-8')
    canonical_url = filename_to_url(filename)
    
    # Remove ALL existing head block (any variant, broken or not)
    # Pattern: head: () => ({ ... anything ... }),  followed by \n});
    # We match from 'head:' up to and including the line with '});'
    
    # First, remove the old broken head block entirely
    # The head block is always: "  head: () => ({...}),\n" or inside the route definition
    # The route definition ends with "});" 
    
    # Strategy: find 'head: () =>' and remove everything up to and including the matching '),'
    head_start = content.find('  head: () =>')
    if head_start == -1:
        head_start = content.find('    head: () =>')
    
    if head_start == -1:
        print(f"NO HEAD FOUND: {filename}")
        continue
    
    # Find the end of the head block: look for '}),\n' after head_start
    # It's the first '}),\n' that follows the head block
    # Since head is: head: () => ({ ... }),
    # The closing is: '  }),\n' at the route level
    
    # Find the component: line - the head block ends just before it
    component_match = re.search(r'\n  component:', content[head_start:])
    
    if component_match:
        # Head block ends just before component:
        head_end = head_start + component_match.start()
        # Build clean replacement
        # Escape single quotes in description for TSX
        desc_escaped = description.replace("'", "\\'")
        title_escaped = title.replace("&", "&")
        
        clean_head = (
            f'  head: () => ({{\n'
            f'    meta: [\n'
            f'      {{ title: "{title_escaped}" }},\n'
            f'      {{ name: "description", content: "{desc_escaped}" }},\n'
            f'    ],\n'
            f'    links: [\n'
            f'      {{ rel: "canonical", href: "{canonical_url}" }},\n'
            f'    ],\n'
            f'  }}),'
        )
        
        new_content = content[:head_start] + clean_head + content[head_end:]
        filepath.write_text(new_content, encoding='utf-8')
        fixed += 1
        print(f"FIXED: {filename}")
    else:
        # Head is at end of route definition before });
        # Find '});\n' after head block
        route_end_match = re.search(r'\}\);\n', content[head_start:])
        if route_end_match:
            head_end = head_start + route_end_match.start()
            desc_escaped = description.replace("'", "\\'")
            
            clean_head = (
                f'  head: () => ({{\n'
                f'    meta: [\n'
                f'      {{ title: "{title}" }},\n'
                f'      {{ name: "description", content: "{desc_escaped}" }},\n'
                f'    ],\n'
                f'    links: [\n'
                f'      {{ rel: "canonical", href: "{canonical_url}" }},\n'
                f'    ],\n'
                f'  }}),'
            )
            new_content = content[:head_start] + clean_head + content[head_end:]
            filepath.write_text(new_content, encoding='utf-8')
            fixed += 1
            print(f"FIXED (end): {filename}")
        else:
            print(f"CANNOT FIX: {filename}")

print(f"\nFixed: {fixed}/{len(FILE_META)}")
