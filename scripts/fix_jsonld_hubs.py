"""
Fix 6: Add page-specific JSON-LD structured data to 5 hub pages.
Strategy: Inject a <Helmet>-style inline <script> into the component's JSX return.
For TanStack Router, we add a <script type="application/ld+json"> directly in JSX.
"""

import re
from pathlib import Path

BASE_URL = "https://www.nkbregovanta.com"

HUB_SCHEMAS = {
    "services.india.index.tsx": {
        "url": f"{BASE_URL}/services/india",
        "name": "CDSCO Medical Device & IVD Regulatory Services India",
        "description": "Expert CDSCO medical device import and manufacturing licence consulting in India. MD-14, MD-15, GSR 777(E), Class A-D device registration, IVD licensing, and post-market compliance.",
        "breadcrumb": [("Home", BASE_URL), ("Services", f"{BASE_URL}/services"), ("India CDSCO", f"{BASE_URL}/services/india")],
        "service_name": "CDSCO Medical Device Regulatory Consulting India",
    },
    "services.usa.index.tsx": {
        "url": f"{BASE_URL}/services/usa",
        "name": "US FDA Medical Device Regulatory Services",
        "description": "FDA 510(k), De Novo, PMA, Q-Submission, and US Agent services for medical device companies seeking US market access. India-based FDA consultants serving global manufacturers.",
        "breadcrumb": [("Home", BASE_URL), ("Services", f"{BASE_URL}/services"), ("USA FDA", f"{BASE_URL}/services/usa")],
        "service_name": "US FDA 510(k) Regulatory Consulting",
    },
    "services.eu.index.tsx": {
        "url": f"{BASE_URL}/services/eu",
        "name": "EU MDR IVDR CE Marking Regulatory Services",
        "description": "CE marking under EU MDR 2017/745 and EU IVDR 2017/746. European Authorized Representative (EAR), EUDAMED registration, clinical evaluation, and PMS support.",
        "breadcrumb": [("Home", BASE_URL), ("Services", f"{BASE_URL}/services"), ("EU MDR IVDR", f"{BASE_URL}/services/eu")],
        "service_name": "EU MDR IVDR CE Marking Consulting",
    },
    "services.uk.index.tsx": {
        "url": f"{BASE_URL}/services/uk",
        "name": "UK MHRA Medical Device Registration & UKRP Services",
        "description": "MHRA device registration via DORS, UK Responsible Person (UKRP), UKCA technical file compilation, PMS and vigilance support for UK medical device market access.",
        "breadcrumb": [("Home", BASE_URL), ("Services", f"{BASE_URL}/services"), ("UK MHRA", f"{BASE_URL}/services/uk")],
        "service_name": "MHRA Medical Device Registration Consulting",
    },
    "services.australia.index.tsx": {
        "url": f"{BASE_URL}/services/australia",
        "name": "Australia TGA ARTG Medical Device Registration",
        "description": "TGA ARTG inclusion, Australian Sponsor services, conformity assessment, and PMS support for medical device companies entering the Australian market.",
        "breadcrumb": [("Home", BASE_URL), ("Services", f"{BASE_URL}/services"), ("Australia TGA", f"{BASE_URL}/services/australia")],
        "service_name": "TGA ARTG Medical Device Registration Consulting",
    },
}

def make_schema(info: dict) -> str:
    breadcrumb_items = ",".join([
        f'{{"@type":"ListItem","position":{i+1},"name":"{name}","item":"{url}"}}'
        for i, (name, url) in enumerate(info["breadcrumb"])
    ])
    schema = (
        '['
        f'{{"@context":"https://schema.org","@type":"Service",'
        f'"name":"{info["service_name"]}",'
        f'"url":"{info["url"]}",'
        f'"description":"{info["description"]}",'
        f'"provider":{{"@type":"ProfessionalService","name":"NKB Regovanta Solutions Pvt. Ltd.","url":"https://www.nkbregovanta.com"}}}},'
        f'{{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{breadcrumb_items}]}}'
        ']'
    )
    return schema

ROUTES_DIR = Path("src/routes")
fixed = 0

for filename, info in HUB_SCHEMAS.items():
    filepath = ROUTES_DIR / filename
    if not filepath.exists():
        print(f"NOT FOUND: {filename}")
        continue

    content = filepath.read_text(encoding="utf-8")

    # Skip if already has JSON-LD
    if "application/ld+json" in content:
        print(f"SKIP (already has JSON-LD): {filename}")
        continue

    schema_json = make_schema(info)

    # We inject a <script> tag as the very first element inside the component's return (
    # Find the component function's return ( and inject right after
    # Pattern: find "return (\n    <" and prepend the script tag
    inject_snippet = (
        f'\n      <script\n'
        f'        type="application/ld+json"\n'
        f'        dangerouslySetInnerHTML={{{{ __html: `{schema_json}` }}}}\n'
        f'      />'
    )

    # Find the main return statement's opening fragment/div
    # We look for "return (" followed by whitespace and "<" 
    pattern = r'(  return \(\s*\n)(\s*<)'
    match = re.search(pattern, content)

    if match:
        # Insert the <script> right after "return (\n" and before the first <
        insert_pos = match.start(2)
        new_content = (
            content[:match.start(1)]
            + "  return (\n"
            + "    <>\n"
            + inject_snippet + "\n"
            + "      " + content[match.start(2):]
        )
        # We also need to close the fragment — find the last ); of the return
        # Actually this approach breaks JSX. Let's use a simpler fragment wrapper.
        # Reset and use a different strategy: wrap the whole return in <>...</>
        # and prepend the script before the existing content.

        # Simpler: find "return (\n    <SomeThing" and add <><script.../><SomeThing...></> 
        # But this needs us to also find the closing to add </>
        # Even simpler: just add the script as a sibling inside an existing wrapper if there is one.

        # BEST approach: Find the outermost JSX element tag after return ( 
        # and prepend a script before it, wrapping both in a fragment
        content_after = content[match.start(2):]

        # Find the last ");" that closes the return statement by tracking depth
        # For now, let's use the fragment approach:
        # Before: return (\n    <div ...>...</div>\n  );
        # After:  return (\n    <>\n      <script.../>\n      <div ...>...</div>\n    </>\n  );

        # Find where the return closes: last "  );" in the function
        # We look for the component function and its closing
        func_pattern = r'(function\s+\w+[^{]*\{)(.*?)(^  return\s*\()(.*?)(^\s*\);\s*^})'
        func_match = re.search(func_pattern, content, re.DOTALL | re.MULTILINE)

        if func_match:
            return_body = func_match.group(4)
            # Wrap in fragment
            new_return_body = (
                f"\n    <>\n"
                f"      <script\n"
                f'        type="application/ld+json"\n'
                f'        dangerouslySetInnerHTML={{{{ __html: `{schema_json}` }}}}\n'
                f"      />\n"
                f"      {return_body.strip()}\n"
                f"    </>"
            )
            new_content = (
                content[:func_match.start(3)]
                + "  return ("
                + new_return_body
                + "\n  );\n}"
                + content[func_match.end(5):]
            )
            filepath.write_text(new_content, encoding="utf-8")
            fixed += 1
            print(f"FIXED (JSON-LD): {filename}")
        else:
            print(f"FUNC PATTERN NOT MATCHED: {filename}")
    else:
        print(f"RETURN PATTERN NOT MATCHED: {filename}")

print(f"\nFixed: {fixed}/{len(HUB_SCHEMAS)}")
