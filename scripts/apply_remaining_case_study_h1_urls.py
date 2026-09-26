"""Apply H1-derived URLs to case-study detail pages marked KEEP in the workbook."""

import json
import os
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MAPPING = [
    {
        "old_route": "/case-studies/fda-biocompatibility",
        "new_route": "/case-studies/using-predicate-and-material-equivalence-to-avoid-repeating-biocompatibility-testing-without-regulatory-need",
        "old_file": "src/routes/case-studies.fda-biocompatibility.tsx",
        "new_file": "src/routes/case-studies.using-predicate-and-material-equivalence-to-avoid-repeating-biocompatibility-testing-without-regulatory-need.tsx",
    },
    {
        "old_route": "/case-studies/fda-simulated-use",
        "new_route": "/case-studies/avoiding-duplicate-simulated-use-work-by-leveraging-an-already-marketed-safety-feature",
        "old_file": "src/routes/case-studies.fda-simulated-use.tsx",
        "new_file": "src/routes/case-studies.avoiding-duplicate-simulated-use-work-by-leveraging-an-already-marketed-safety-feature.tsx",
    },
]

for item in MAPPING:
    source = ROOT / item["old_file"]
    target = ROOT / item["new_file"]
    if not source.is_file():
        raise SystemExit(f"Missing source: {source}")
    if target.exists():
        raise SystemExit(f"Target already exists: {target}")

for item in MAPPING:
    os.replace(ROOT / item["old_file"], ROOT / item["new_file"])

replacements = {item["old_route"]: item["new_route"] for item in MAPPING}
pattern = re.compile("|".join(re.escape(route) for route in replacements))
file_replacements = {
    Path(item["old_file"]).name: Path(item["new_file"]).name for item in MAPPING
}
for folder in ("src", "public", "scripts", "supabase"):
    for path in (ROOT / folder).rglob("*"):
        if not path.is_file() or path.suffix.lower() not in {".ts", ".tsx", ".js", ".cjs", ".mjs", ".json", ".xml", ".md", ".csv", ".txt"}:
            continue
        if path.name in {"routeTree.gen.ts", Path(__file__).name}:
            continue
        text = path.read_text(encoding="utf-8")
        updated = pattern.sub(lambda match: replacements[match.group(0)], text)
        for old_name, new_name in file_replacements.items():
            updated = updated.replace(old_name, new_name)
        if updated != text:
            path.write_text(updated, encoding="utf-8", newline="")

vercel_path = ROOT / "vercel.json"
vercel = json.loads(vercel_path.read_text(encoding="utf-8"))
by_source = {item["source"]: item for item in vercel["redirects"]}
for item in MAPPING:
    by_source[item["old_route"]] = {
        "source": item["old_route"],
        "destination": item["new_route"],
        "permanent": True,
    }
vercel["redirects"] = list(by_source.values())
vercel_path.write_text(json.dumps(vercel, indent=2) + "\n", encoding="utf-8")

print("Updated the two remaining case-study detail URLs from their H1 headings.")
