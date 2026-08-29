import re

# Read current file
with open('src/routes/services.manufacturing.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

# 1. Update productImages glob and getProductImage
old_helper = """// Dynamically load all 92 extracted product images
const productImages = import.meta.glob<{ default: string }>("@/assets/products/*.png", { eager: true });

function getProductImage(fileName: string): string {
  const key = `/src/assets/products/${fileName}`;
  return productImages[key]?.default || imgPharmaEquipment;
}"""

new_helper = """// Dynamically load all product images (from root and subdirectories)
const productImages = import.meta.glob<{ default: string }>("@/assets/products/**/*.{png,jpg,jpeg}", { eager: true });

function getProductImage(relPath: string): string {
  const normalized = relPath.startsWith("/") ? relPath.slice(1) : relPath;
  const key = `/src/assets/products/${normalized}`;
  if (productImages[key]?.default) {
    return productImages[key].default;
  }
  const baseName = normalized.split("/").pop();
  for (const [k, v] of Object.entries(productImages)) {
    if (k.endsWith(`/${baseName}`)) {
      return v.default;
    }
  }
  return imgPharmaEquipment;
}"""

if old_helper in text:
    text = text.replace(old_helper, new_helper)
else:
    print("WARNING: old_helper not matched exactly, replacing with regex")
    text = re.sub(r'// Dynamically load all 92 extracted product images[\s\S]*?return productImages\[key\]\?\.default \|\| imgPharmaEquipment;\s*}', new_helper, text)

# Update image calls for all sections:
# Section 1: Machinery
text = text.replace('getProductImage("pass-box.png")', 'getProductImage("passbox.png")')

# Section 2: Blenders
text = text.replace('getProductImage("octagonal-blender.png")', 'getProductImage("blender1.png")')
text = text.replace('getProductImage("mass-mixer.png")', 'getProductImage("blender2.png")')
text = text.replace('getProductImage("v-type-blenders.png")', 'getProductImage("blender3.png")')
text = text.replace('getProductImage("powder-filling-machine.png")', 'getProductImage("blender4.png")')

# Section 3: Conveyor Belts
text = text.replace('getProductImage("flatbed-conveyor.png")', 'getProductImage("conveyor-belt1.png")')
text = text.replace('getProductImage("elevated-s-shape-conveyor.png")', 'getProductImage("conveyor-belt2.png")')
text = text.replace('getProductImage("full-ss-mesh-conveyor.png")', 'getProductImage("conveyor-belt3.png")')

# Section 4: Change Room Accessories (12 items)
cr_old_new = [
    ("dia-punch-cabinet.png", "change-room1.png"),
    ("punch-crates-die-tray.png", "change-room2.png"),
    ("personal-locker.png", "change-room3.png"),
    ("apron-locker-shoe-rack.png", "change-room4.png"),
    ("16-shoe-lockers.png", "change-room5.png"),
    ("18-drawers-horizontal-storage.png", "change-room6.png"),
    ("lockers.png", "change-room7.png"),
    ("15-locker-shoe-rack.png", "change-room8.png"),
    ("garment-cabinet.png", "change-room9.png"),
    ("curvature-cross-over-bench.png", "change-room10.png"),
    ("cross-over-bench-shoe-rack.png", "change-room11.png"),
    ("ipa-stand-cr.png", "change-room12.png"),
]
for o, n in cr_old_new:
    text = text.replace(f'getProductImage("{o}")', f'getProductImage("{n}")')

# Section 5: Clean Room Furniture (12 items)
crf_old_new = [
    ("pallet.png", "clean-room1.png"),
    ("office-table.png", "clean-room2.png"),
    ("cabinet.png", "clean-room3.png"),
    ("visitor-apron-cabinet.png", "clean-room4.png"),
    ("sink-table.png", "clean-room5.png"),
    ("table.png", "clean-room6.png"),
    ("computer-table.png", "clean-room7.png"),
    ("ladder-2-steps.png", "clean-room8.png"),
    ("revolving-stool.png", "clean-room9.png"),
    ("packing-chair.png", "clean-room10.png"),
    ("fix-stool.png", "clean-room11.png"),
    ("shorting-table.png", "clean-room12.png"),
]
for o, n in crf_old_new:
    text = text.replace(f'getProductImage("{o}")', f'getProductImage("{n}")')

# Section 6: Trolley Division (12 items)
tr_old_new = [
    ("cabinet-trolley.png", "trolly-division1.png"),
    ("shipper-trolley.png", "trolly-division2.png"),
    ("weight-box-trolley.png", "trolly-division3.png"),
    ("platform-trolley.png", "trolly-division4.png"),
    ("cleaning-trolley.png", "trolly-division5.png"),
    ("cage-trolley.png", "trolly-division6.png"),
    ("sifter-sieves-trolley.png", "trolly-division7.png"),
    ("mopping-trolley.png", "trolly-division8.png"),
    ("ladder-with-railing.png", "trolly-division9.png"),
    ("used-apron-trolley.png", "trolly-division10.png"),
    ("container-with-trolley.png", "trolly-division11.png"),
    ("linen-trolley.png", "trolly-division12.png"),
]
for o, n in tr_old_new:
    text = text.replace(f'getProductImage("{o}")', f'getProductImage("{n}")')

# Section 7: Lifting Devices (6 items)
ld_old_new = [
    ("ss-pallet-truck.png", "lifting-devices1.png"),
    ("pallet-truck.png", "lifting-devices2.png"),
    ("ms-pallet-truck.png", "lifting-devices3.png"),
    ("3-wheeler-drum-trolley.png", "lifting-devices4.png"),
    ("3-wheeler-dum-trolley.png", "lifting-devices5.png"),
    ("high-lift-platform.png", "lifting-devices6.png"),
]
for o, n in ld_old_new:
    text = text.replace(f'getProductImage("{o}")', f'getProductImage("{n}")')

# Section 8: Ancillaries & Accessories (23 items)
anc_old_new = [
    ("sterile-drain-trap.png", "Ancillaries/Screenshot 2026-08-30 005214.png"),
    ("sterile-drain-trap-side.png", "Ancillaries/Screenshot 2026-08-30 005216.png"),
    ("tool-box.png", "Ancillaries/Screenshot 2026-08-30 005219.png"),
    ("dustbin-paddle.png", "Ancillaries/Screenshot 2026-08-30 005222.png"),
    ("sop-stands.png", "Ancillaries/Screenshot 2026-08-30 005225.png"),
    ("tablet-counters.png", "Ancillaries/Screenshot 2026-08-30 005228.png"),
    ("rack.png", "Ancillaries/Screenshot 2026-08-30 005232.png"),
    ("tilting-dustbin.png", "Ancillaries/Screenshot 2026-08-30 005235.png"),
    ("liquid-sampler.png", "Ancillaries/Screenshot 2026-08-30 005238.png"),
    ("open-scoop.png", "Ancillaries/Screenshot 2026-08-30 005241.png"),
    ("micro-exposure-stand.png", "Ancillaries/Screenshot 2026-08-30 005244.png"),
    ("jug.png", "Ancillaries/Screenshot 2026-08-30 005247.png"),
    ("cylinder-scoop.png", "Ancillaries/Screenshot 2026-08-30 005250.png"),
    ("petri-dish-stand.png", "Ancillaries/Screenshot 2026-08-30 005254.png"),
    ("ipa-stand-anc.png", "Ancillaries/Screenshot 2026-08-30 005257.png"),
    ("ss-oil-can.png", "Ancillaries/Screenshot 2026-08-30 005300.png"),
    ("soap-dispenser.png", "Ancillaries/Screenshot 2026-08-30 005304.png"),
    ("powder-sampler.png", "Ancillaries/Screenshot 2026-08-30 005307.png"),
    ("spatula.png", "Ancillaries/Screenshot 2026-08-30 005311.png"),
    ("spoons.png", "Ancillaries/Screenshot 2026-08-30 005317.png"),
    ("trays.png", "Ancillaries/Screenshot 2026-08-30 005321.png"),
    ("vial-boxes.png", "Ancillaries/Screenshot 2026-08-30 005325.png"),
    ("line-mangers.png", "Ancillaries/Screenshot 2026-08-30 005330.png"),
]
for o, n in anc_old_new:
    text = text.replace(f'getProductImage("{o}")', f'getProductImage("{n}")')

# Section 9: Liquid / Powder Storage Container (9 items)
liq_old_new = [
    ("filling-vessel.png", "Liquid/Screenshot 2026-08-30 005423.png"),
    ("pressure-vessel.png", "Liquid/Screenshot 2026-08-30 005426.png"),
    ("liquid-storage-drums.png", "Liquid/Screenshot 2026-08-30 005428.png"),
    ("storage-tank.png", "Liquid/Screenshot 2026-08-30 005431.png"),
    ("square-container.png", "Liquid/Screenshot 2026-08-30 005434.png"),
    ("square-bin-with-trolley.png", "Liquid/Screenshot 2026-08-30 005437.png"),
    ("bucket.png", "Liquid/Screenshot 2026-08-30 005441.png"),
    ("container.png", "Liquid/Screenshot 2026-08-30 005444.png"),
    ("funnel.png", "Liquid/Screenshot 2026-08-30 005447.png"),
]
for o, n in liq_old_new:
    text = text.replace(f'getProductImage("{o}")', f'getProductImage("{n}")')

# Section 10: Canteen Furniture (8 items)
can_old_new = [
    ("three-burner-gas-range.png", "canteen-furniture/Screenshot 2026-08-30 005812.png"),
    ("bulk-fryer.png", "canteen-furniture/Screenshot 2026-08-30 005816.png"),
    ("hot-plate.png", "canteen-furniture/Screenshot 2026-08-30 005819.png"),
    ("single-burner.png", "canteen-furniture/Screenshot 2026-08-30 005821.png"),
    ("vertical-refrigerator.png", "canteen-furniture/Screenshot 2026-08-30 005824.png"),
    ("canteen-table.png", "canteen-furniture/Screenshot 2026-08-30 005827.png"),
    ("clean-dish-rack.png", "canteen-furniture/Screenshot 2026-08-30 005830.png"),
    ("three-sink-unit.png", "canteen-furniture/Screenshot 2026-08-30 005833.png"),
]
for o, n in can_old_new:
    text = text.replace(f'getProductImage("{o}")', f'getProductImage("{n}")')

# Remove `const customers = [...]`
text = re.sub(r'// ── Our Customers Data ──[\s\S]*?const customers = \[[\s\S]*?\];\n', '', text)

# Remove `{/* ── OUR CURRENT CUSTOMERS ARE ── */} ... </section>`
text = re.sub(r'\{\s*/\*\s*── OUR CURRENT CUSTOMERS ARE ──\s*\*/\s*\}[\s\S]*?\{/\*\s*── BOTTOM CTA BAND ──\s*\*/\s*\}', '{/* ── BOTTOM CTA BAND ── */}', text)

with open('src/routes/services.manufacturing.tsx', 'w', encoding='utf-8') as f:
    f.write(text)

print("Updated services.manufacturing.tsx successfully!")
