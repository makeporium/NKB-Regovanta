import os
from PIL import Image

# Let's check the images in root
root_files = [f for f in os.listdir('src/assets/products') if os.path.isfile(os.path.join('src/assets/products', f))]
print("=== ROOT FILES ===")
for f in sorted(root_files):
    im = Image.open(os.path.join('src/assets/products', f))
    print(f"{f}: size={im.size}")

# Let's inspect subfolders
for folder in ['Ancillaries', 'Liquid', 'canteen-furniture', 'hospital-furniture']:
    p = os.path.join('src/assets/products', folder)
    if os.path.exists(p):
        files = sorted(os.listdir(p))
        print(f"\n=== SUBFOLDER: {folder} ({len(files)} files) ===")
        for f in files:
            im = Image.open(os.path.join(p, f))
            print(f"  {f}: size={im.size}")
