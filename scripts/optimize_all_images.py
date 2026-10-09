import os
import shutil
from PIL import Image

TARGET_DIRS = [
    os.path.join(os.getcwd(), "src", "assets"),
    os.path.join(os.getcwd(), "public", "assets"),
    os.path.join(os.getcwd(), "public"),
]

SKIP_FILENAMES = {
    "favicon.ico", "favicon.png", "favicon-16x16.png",
    "favicon-32x32.png", "favicon-48x48.png", "apple-touch-icon.png",
    "icon-192.png", "icon-512.png"
}

total_original_bytes = 0
total_optimized_bytes = 0
files_optimized = 0
errors = []

MAX_DIM = 1920

def get_scaled_dims(w, h, max_dim=MAX_DIM):
    if w <= max_dim and h <= max_dim:
        return w, h
    if w > h:
        new_w = max_dim
        new_h = int(h * (max_dim / w))
    else:
        new_h = max_dim
        new_w = int(w * (max_dim / h))
    return new_w, new_h

for target_dir in TARGET_DIRS:
    if not os.path.exists(target_dir):
        continue
    for root, _, files in os.walk(target_dir):
        # Don't recurse into subdirectories when inspecting public root
        if target_dir.endswith("public") and root != target_dir:
            continue
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext not in [".png", ".jpg", ".jpeg", ".webp"]:
                continue
            if file in SKIP_FILENAMES:
                continue

            fp = os.path.join(root, file)
            original_size = os.path.getsize(fp)
            total_original_bytes += original_size

            # Skip tiny files (< 25 KB)
            if original_size < 25 * 1024 and not file.endswith(".optimized.webp"):
                total_optimized_bytes += original_size
                continue

            temp_out = fp + ".tmp"

            try:
                with Image.open(fp) as im:
                    orig_format = im.format
                    orig_mode = im.mode
                    w, h = im.size
                    new_w, new_h = get_scaled_dims(w, h)
                    need_resize = (new_w != w or new_h != h)

                    if ext == ".webp":
                        working = im.resize((new_w, new_h), Image.Resampling.LANCZOS) if need_resize else im
                        # Save WebP with high-quality lossy compression
                        working.save(temp_out, "WEBP", quality=80, method=6)

                    elif ext in [".jpg", ".jpeg"]:
                        working = im.resize((new_w, new_h), Image.Resampling.LANCZOS) if need_resize else im
                        if working.mode != "RGB":
                            working = working.convert("RGB")
                        working.save(temp_out, "JPEG", quality=82, optimize=True, progressive=True)

                    elif ext == ".png":
                        working = im.resize((new_w, new_h), Image.Resampling.LANCZOS) if need_resize else im
                        if working.mode == "RGBA":
                            q = working.quantize(colors=256, method=Image.Quantize.FASTOCTREE)
                            q.save(temp_out, "PNG", optimize=True)
                        elif working.mode == "RGB":
                            q = working.quantize(colors=256, method=Image.Quantize.MEDIANCUT)
                            q.save(temp_out, "PNG", optimize=True)
                        elif working.mode in ["P", "L"]:
                            working.save(temp_out, "PNG", optimize=True)
                        else:
                            working.save(temp_out, "PNG", optimize=True)

                if os.path.exists(temp_out):
                    new_size = os.path.getsize(temp_out)
                    if new_size < original_size:
                        # Validated smaller size
                        shutil.move(temp_out, fp)
                        total_optimized_bytes += new_size
                        files_optimized += 1
                        diff_kb = (original_size - new_size) / 1024
                        print(f"Optimized: {file} ({original_size/1024:.1f} KB -> {new_size/1024:.1f} KB, saved {diff_kb:.1f} KB)")
                    else:
                        os.remove(temp_out)
                        total_optimized_bytes += original_size
                else:
                    total_optimized_bytes += original_size

            except Exception as e:
                if os.path.exists(temp_out):
                    os.remove(temp_out)
                errors.append((file, str(e)))
                total_optimized_bytes += original_size

saved_mb = (total_original_bytes - total_optimized_bytes) / (1024 * 1024)
orig_mb = total_original_bytes / (1024 * 1024)
opt_mb = total_optimized_bytes / (1024 * 1024)

print("=" * 60)
print(f"Optimization Complete!")
print(f"Files compressed: {files_optimized}")
print(f"Original total size: {orig_mb:.2f} MB")
print(f"Optimized total size: {opt_mb:.2f} MB")
print(f"TOTAL BANDWIDTH SAVED: {saved_mb:.2f} MB ({(saved_mb/orig_mb)*100:.1f}% reduction)")
if errors:
    print(f"Errors encountered ({len(errors)}):")
    for fn, err in errors[:5]:
        print(f"  {fn}: {err}")
print("=" * 60)
