import os
import re

# Let's check files in src/assets/products
all_files = []
for root, dirs, files in os.walk('src/assets/products'):
    for f in files:
        rel = os.path.relpath(os.path.join(root, f), 'src/assets/products')
        all_files.append(rel.replace('\\', '/'))

print(f"Total files in src/assets/products: {len(all_files)}")
print(sorted(all_files))
