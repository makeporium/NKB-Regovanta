import numpy as np
from PIL import Image

im = Image.open(r'C:\Users\astro\.gemini\antigravity-ide\brain\ad5f33df-c8de-442a-bb05-b436a6c1236a\.user_uploaded\media_1788033845069.png').convert('L')
arr = np.array(im)

def find_white_cols(y1, y2, x_start, x_end):
    region = arr[y1:y2, x_start:x_end]
    min_vals = region.min(axis=0)
    white_indices = np.where(min_vals >= 250)[0] + x_start
    return white_indices

print("Row 1 separators:")
for x_range in [(160, 220), (370, 420), (540, 590), (720, 770)]:
    w = find_white_cols(0, 115, x_range[0], x_range[1])
    print(f"  Range {x_range}: white cols {w[0]}..{w[-1]}")

print("\nRow 2 separators:")
for x_range in [(150, 200), (350, 400), (520, 560), (670, 720), (810, 850)]:
    w = find_white_cols(115, 260, x_range[0], x_range[1])
    print(f"  Range {x_range}: white cols {w[0]}..{w[-1]}")

print("\nRow 3 separators:")
for x_range in [(190, 240), (380, 430), (550, 600), (740, 790)]:
    w = find_white_cols(260, 414, x_range[0], x_range[1])
    print(f"  Range {x_range}: white cols {w[0]}..{w[-1]}")
