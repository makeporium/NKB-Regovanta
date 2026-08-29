import os
import re

# Read current services.manufacturing.tsx
with open('src/routes/services.manufacturing.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Map of section -> list of image filenames
mappings = {
    "machinery": [
        "de-duster.png",
        "tray-dryer.png",
        "passbox.png"
    ],
    "blenders": [
        "blender1.png",
        "blender2.png",
        "blender3.png",
        "blender4.png"
    ],
    "conveyor-belts": [
        "conveyor-belt1.png",
        "conveyor-belt2.png",
        "conveyor-belt3.png"
    ],
    "change-room": [
        f"change-room{i}.png" for i in range(1, 13)
    ],
    "clean-room": [
        f"clean-room{i}.png" for i in range(1, 13)
    ],
    "trolley-division": [
        f"trolly-division{i}.png" for i in range(1, 13)
    ],
    "lifting-devices": [
        f"lifting-devices{i}.png" for i in range(1, 7)
    ],
    "ancillaries": sorted(os.listdir('src/assets/products/Ancillaries')),
    "storage-containers": sorted(os.listdir('src/assets/products/Liquid')),
    "canteen": sorted(os.listdir('src/assets/products/canteen-furniture'))
}

# Verify all files exist
print("VERIFYING ASSET EXISTENCE:")
all_good = True
for sec, files in mappings.items():
    print(f"\nSection: {sec} ({len(files)} files)")
    for f in files:
        if sec == "ancillaries":
            full_rel = f"Ancillaries/{f}"
        elif sec == "storage-containers":
            full_rel = f"Liquid/{f}"
        elif sec == "canteen":
            full_rel = f"canteen-furniture/{f}"
        else:
            full_rel = f
        
        path = os.path.join('src/assets/products', full_rel)
        exists = os.path.exists(path)
        if not exists:
            print(f"  MISSING: {path}")
            all_good = False
        else:
            print(f"  OK: {full_rel}")

print(f"\nALL ASSETS EXIST: {all_good}")
