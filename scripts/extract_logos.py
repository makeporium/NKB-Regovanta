import os
import numpy as np
from PIL import Image, ImageChops

out_dir = 'src/assets/clients'
os.makedirs(out_dir, exist_ok=True)

src_path = r'C:\Users\astro\.gemini\antigravity-ide\brain\ad5f33df-c8de-442a-bb05-b436a6c1236a\.user_uploaded\media_1788033845069.png'
im = Image.open(src_path).convert('RGBA')
W, H = im.size

# The image has 3 distinct horizontal rows:
# Row 1: y ≈ 0 to 110 (5 logos)
# Row 2: y ≈ 115 to 260 (6 logos)
# Row 3: y ≈ 265 to 414 (5 logos)

# Let's define the row slices and approximate column ranges, then auto-trim whitespace!

row1_boxes = [
    ("ipca", (10, 15, 195, 105)),
    ("cipla", (200, 15, 395, 105)),
    ("felix", (400, 15, 575, 105)),
    ("par", (580, 15, 755, 105)),
    ("astrazeneca", (760, 15, 960, 105)),
]

row2_boxes = [
    ("acg", (10, 120, 175, 230)),
    ("procon", (180, 120, 370, 230)),
    ("dr-reddys", (375, 120, 535, 230)),
    ("isro", (540, 115, 680, 250)),
    ("novartis", (685, 120, 835, 230)),
    ("unichem", (840, 120, 965, 230)),
]

row3_boxes = [
    ("encube", (10, 275, 220, 395)),
    ("knovea", (225, 275, 410, 395)),
    ("symbiotec", (415, 275, 580, 405)),
    ("pfizer", (585, 275, 765, 395)),
    ("iim-indore", (770, 275, 985, 405)),
]

all_boxes = row1_boxes + row2_boxes + row3_boxes

def trim(im_crop, padding=10):
    bg = Image.new(im_crop.mode, im_crop.size, (255, 255, 255, 255))
    diff = ImageChops.difference(im_crop, bg)
    # convert diff to grayscale
    diff_gray = diff.convert('L')
    # threshold
    bbox = diff_gray.point(lambda p: 255 if p > 15 else 0).getbbox()
    if bbox:
        x1 = max(0, bbox[0] - padding)
        y1 = max(0, bbox[1] - padding)
        x2 = min(im_crop.width, bbox[2] + padding)
        y2 = min(im_crop.height, bbox[3] + padding)
        return im_crop.crop((x1, y1, x2, y2))
    return im_crop

print("Extracting 16 client logos...")
for name, box in all_boxes:
    crop = im.crop(box)
    trimmed = trim(crop, padding=8)
    out_file = os.path.join(out_dir, f"{name}.png")
    trimmed.save(out_file, "PNG")
    print(f"Saved {out_file}: {trimmed.size}")

print("All logos extracted!")
