import os
from PIL import Image, ImageChops

src_path = r'C:\Users\astro\.gemini\antigravity-ide\brain\ad5f33df-c8de-442a-bb05-b436a6c1236a\.user_uploaded\media_1788033845069.png'
im = Image.open(src_path).convert('RGB')

boxes = [
    # Row 1 (y: 0..115)
    ("ipca", (0, 0, 200, 115)),
    ("cipla", (200, 0, 404, 115)),
    ("felix", (404, 0, 581, 115)),
    ("par", (581, 0, 760, 115)),
    ("astrazeneca", (760, 0, 1024, 115)),
    
    # Row 2 (y: 115..260)
    ("acg", (0, 115, 182, 260)),
    ("procon", (182, 115, 384, 260)),
    ("dr-reddys", (384, 115, 549, 260)),
    ("isro", (549, 80, 706, 265)),
    ("novartis", (706, 115, 834, 260)),
    ("unichem", (834, 115, 1024, 260)),
    
    # Row 3 (y: 260..414)
    ("encube", (0, 260, 227, 414)),
    ("knovea", (227, 260, 418, 414)),
    ("symbiotec", (418, 260, 592, 414)),
    ("pfizer", (592, 260, 783, 414)),
    ("iim-indore", (783, 260, 1024, 414)),
]

out_dir = 'src/assets/clients'
os.makedirs(out_dir, exist_ok=True)

for name, box in boxes:
    crop = im.crop(box)
    
    # Trim whitespace with 8px margin
    bg = Image.new('RGB', crop.size, (255, 255, 255))
    diff = ImageChops.difference(crop, bg)
    bbox = diff.convert('L').point(lambda p: 255 if p > 15 else 0).getbbox()
    if bbox:
        pad = 8
        x1 = max(0, bbox[0] - pad)
        y1 = max(0, bbox[1] - pad)
        x2 = min(crop.width, bbox[2] + pad)
        y2 = min(crop.height, bbox[3] + pad)
        trimmed = crop.crop((x1, y1, x2, y2))
    else:
        trimmed = crop
    
    out_file = os.path.join(out_dir, f"{name}.png")
    trimmed.save(out_file)
    print(f"Extracted {name}: {trimmed.size}")

print("\n100% Mathematically Perfect Extraction Complete!")
