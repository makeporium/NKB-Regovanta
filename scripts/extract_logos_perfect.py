import os
from PIL import Image, ImageDraw, ImageChops

src_path = r'C:\Users\astro\.gemini\antigravity-ide\brain\ad5f33df-c8de-442a-bb05-b436a6c1236a\.user_uploaded\media_1788033845069.png'
im = Image.open(src_path)

boxes = [
    # Row 1
    ("ipca", (0, 0, 190, 115)),
    ("cipla", (190, 0, 390, 115)),
    ("felix", (390, 0, 560, 115)),
    ("par", (560, 0, 740, 115)),
    ("astrazeneca", (740, 0, 1024, 115)),
    
    # Row 2
    ("acg", (0, 115, 175, 260)),
    ("procon", (175, 115, 360, 260)),
    ("dr-reddys", (360, 115, 530, 260)),
    ("isro", (530, 90, 680, 265)),
    ("novartis", (680, 115, 830, 260)),
    ("unichem", (830, 115, 1024, 260)),
    
    # Row 3
    ("encube", (0, 260, 215, 414)),
    ("knovea", (215, 260, 400, 414)),
    ("symbiotec", (400, 260, 570, 414)),
    ("pfizer", (570, 260, 755, 414)),
    ("iim-indore", (755, 260, 1024, 414)),
]

out_dir = 'src/assets/clients'
os.makedirs(out_dir, exist_ok=True)

debug_im = im.copy().convert('RGB')
draw = ImageDraw.Draw(debug_im)

for name, box in boxes:
    draw.rectangle(box, outline='green', width=2)
    crop = im.crop(box)
    
    # Trim whitespace with padding
    bg = Image.new('RGB', crop.size, (255, 255, 255))
    diff = ImageChops.difference(crop.convert('RGB'), bg)
    bbox = diff.convert('L').point(lambda p: 255 if p > 15 else 0).getbbox()
    if bbox:
        pad = 6
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

debug_im.save('scripts/boxes_debug_perfect.png')
print("All 16 logos extracted cleanly!")
