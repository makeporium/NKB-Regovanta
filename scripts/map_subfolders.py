import os

anc_files = sorted(os.listdir('src/assets/products/Ancillaries'))
liq_files = sorted(os.listdir('src/assets/products/Liquid'))
can_files = sorted(os.listdir('src/assets/products/canteen-furniture'))
hosp_files = sorted(os.listdir('src/assets/products/hospital-furniture'))

print(f"Ancillaries: {len(anc_files)}")
for i, f in enumerate(anc_files):
    print(f"  {i+1}. Ancillaries/{f}")

print(f"\nLiquid: {len(liq_files)}")
for i, f in enumerate(liq_files):
    print(f"  {i+1}. Liquid/{f}")

print(f"\nCanteen: {len(can_files)}")
for i, f in enumerate(can_files):
    print(f"  {i+1}. canteen-furniture/{f}")

print(f"\nHospital: {len(hosp_files)}")
for i, f in enumerate(hosp_files):
    print(f"  {i+1}. hospital-furniture/{f}")
