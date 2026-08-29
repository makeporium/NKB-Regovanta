import os
import re

with open('src/routes/services.manufacturing.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's inspect sections and their product arrays
sec_blocks = text.split('id: "')
for block in sec_blocks[1:]:
    sec_id = block.split('"')[0]
    title_m = re.search(r'title:\s*"([^"]+)"', block)
    sec_title = title_m.group(1) if title_m else sec_id
    
    prod_names = re.findall(r'name:\s*"([^"]+)"', block)
    # filter out client names or non-products
    print(f"\n=== SECTION: {sec_id} ({sec_title}) - {len(prod_names)} products ===")
    for p in prod_names:
        img_m = re.search(rf'name:\s*"{re.escape(p)}".*?image:\s*([^\n,]+)', block, re.DOTALL)
        img_val = img_m.group(1) if img_m else "N/A"
        print(f"  - {p} -> {img_val}")
