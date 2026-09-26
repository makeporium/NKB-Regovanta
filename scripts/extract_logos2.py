import os
from PIL import Image, ImageDraw

src_path = r'C:\Users\astro\.gemini\antigravity-ide\brain\ad5f33df-c8de-442a-bb05-b436a6c1236a\.user_uploaded\media_1788033845069.png'
im = Image.open(src_path)
W, H = im.size

# Let's draw rectangles on the image to inspect their placement
debug_im = im.copy().convert('RGB')
draw = ImageDraw.Draw(debug_im)

# Exact, generous boxes that cover each logo fully without overlap:
# Row 1 (y: 0 to 120):
# 1. Ipca: x: 0 to 195
# 2. Cipla: x: 195 to 395
# 3. Felix: x: 395 to 570
# 4. PAR: x: 570 to 750
# 5. AstraZeneca: x: 750 to 1024

# Row 2 (y: 110 to 265):
# 6. ACG: x: 0 to 180
# 7. Procon: x: 180 to 370
# 8. Dr.Reddy's: x: 370 to 535
# 9. ISRO: x: 535 to 695
# 10. Novartis: x: 695 to 830
# 11. Unichem: x: 830 to 1024

# Row 3 (y: 260 to 414):
# 12. Encube: x: 0 to 220
# 13. Knovea: x: 220 to 410
# 14. Symbiotec: x: 410 to 580
# 15. Pfizer: x: 580 to 770
# 16. IIM Indore: x: 770 to 1024

boxes = [
    ("ipca", (0, 0, 195, 115)),
    ("cipla", (195, 0, 395, 115)),
    ("felix", (395, 0, 570, 115)),
    ("par", (570, 0, 750, 115)),
    ("astrazeneca", (750, 0, 1024, 115)),
    
    ("acg", (0, 110, 180, 265)),
    ("procon", (180, 110, 370, 265)),
    ("dr-reddys", (370, 110, 535, 265)),
    ("isro", (535, 100, 695, 265)),
    ("novartis", (695, 110, 830, 265)),
    ("unichem", (830, 110, 1024, 265)),
    
    ("encube", (0, 260, 220, 414)),
    ("knovea", (220, 260, 410, 414)),
    ("symbiotec", (410, 260, 580, 414)),
    ("pfizer", (580, 260, 770, 414)),
    ("iim-indore", (770, 260, 1024, 414)),
]

out_dir = 'src/assets/clients'
os.makedirs(out_dir, exist_ok=True)

for name, box in boxes:
    draw.rectangle(box, outline='red', width=2)
    crop = im.crop(box)
    
    # Auto trim whitespace with 8px margin
    from PIL import ImageChops
    bg = Image.new('RGB', crop.size, (255, 255, 255))
    diff = ImageChops.difference(crop.convert('RGB'), bg)
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
    print(f"Saved {out_file}: {trimmed.size}")

debug_im.save('scripts/boxes_debug.png')
print("Saved scripts/boxes_debug.png")
