import os
from PIL import Image

# Let's inspect hospital-furniture images and packing-division images
print("Checking hospital-furniture...")
hosp_dir = 'src/assets/products/hospital-furniture'
for f in sorted(os.listdir(hosp_dir)):
    im = Image.open(os.path.join(hosp_dir, f))
    print(f"  {f}: size={im.size}")

print("Checking packing-division...")
for f in ['packing-division1.png', 'packing-division2.png', 'packing-division3.png', 'packing-division4.png',
         'Pharmaceutical Machinery1.png', 'Pharmaceutical Machinery2.png', 'tray-dryer.png', 'passbox.png']:
    p = os.path.join('src/assets/products', f)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"  {f}: size={im.size}")
