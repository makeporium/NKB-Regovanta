"""Replace workbook-proposed slugs with slugs derived from each page H1."""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import unicodedata
from pathlib import Path

import openpyxl


PROJECT = Path(__file__).resolve().parents[1]
WORKBOOK = Path(r"C:\Users\astro\Desktop\AYUSH ALL\Client Projects\OTHER WORK\NKB_Regovanta_URL_Slug_Map.xlsx")
TEXT_EXTENSIONS = {".ts", ".tsx", ".js", ".jsx", ".cjs", ".mjs", ".json", ".xml", ".txt", ".md", ".csv"}
SKIP_NAMES = {"routeTree.gen.ts", "apply_excel_url_slug_map.py", "apply_h1_url_migration.py", "verify_excel_url_migration.py"}


def slugify_h1(value: str) -> str:
    value = unicodedata.normalize("NFD", value)
    value = "".join(char for char in value if unicodedata.category(char) != "Mn")
    value = re.sub(r"(\d)\s*\(\s*([a-z])\s*\)", r"\1\2", value, flags=re.I)
    value = value.replace("&", " and ")
    value = re.sub(r"[^A-Za-z0-9]+", "-", value).strip("-").lower()
    return re.sub(r"-+", "-", value)


def load_mapping() -> list[dict[str, str]]:
    workbook = openpyxl.load_workbook(WORKBOOK, read_only=True, data_only=True)
    sheet = workbook["URL Map"]
    rows = sheet.iter_rows(values_only=True)
    headers = next(rows)
    result = []
    for values in rows:
        row = dict(zip(headers, values))
        if row.get("Action") != "RENAME":
            continue
        if not row.get("H1"):
            raise ValueError(f"Missing H1 for {row.get('CurrentURL')}")
        parent = row["CurrentURL"].rsplit("/", 1)[0]
        h1_slug = slugify_h1(row["H1"])
        h1_route = f"{parent}/{h1_slug}"
        current_file = Path(row["NewFile"])
        filename_prefix = current_file.name.rsplit(".", 2)[0].rsplit(".", 1)[0]
        # Preserve every TanStack filename segment before the leaf.
        file_parent = current_file.name.rsplit(".", 1)[0].rsplit(".", 1)[0]
        # The source file always ends in .tsx; replace only its final route segment.
        stem = current_file.name[:-4]
        prefix = stem.rsplit(".", 1)[0]
        h1_file = str(current_file.with_name(f"{prefix}.{h1_slug}.tsx")).replace("\\", "/")
        result.append({
            "original_route": row["CurrentURL"],
            "current_route": row["FinalURL"],
            "h1_route": h1_route,
            "current_file": row["NewFile"].replace("\\", "/"),
            "h1_file": h1_file,
            "h1": row["H1"],
            "indexability": row["Indexability"],
        })
    return result


def write_text(path: Path, text: str) -> None:
    with open(path, "w", encoding="utf-8", newline="") as handle:
        handle.write(text)


def simultaneous_replace(text: str, mapping: list[dict[str, str]]) -> tuple[str, int]:
    replacements = {item["current_route"]: item["h1_route"] for item in mapping}
    pattern = re.compile("|".join(re.escape(route) for route in sorted(replacements, key=len, reverse=True)))
    count = 0
    def substitute(match: re.Match[str]) -> str:
        nonlocal count
        count += 1
        return replacements[match.group(0)]
    return pattern.sub(substitute, text), count


def validate(mapping: list[dict[str, str]]) -> None:
    errors = []
    for key in ("original_route", "current_route", "h1_route", "current_file", "h1_file"):
        values = [item[key] for item in mapping]
        duplicates = sorted({value for value in values if values.count(value) > 1})
        if duplicates:
            errors.append(f"Duplicate {key}: {duplicates}")
    for item in mapping:
        current_file = PROJECT / item["current_file"]
        target_file = PROJECT / item["h1_file"]
        if not current_file.is_file():
            errors.append(f"Missing current file: {item['current_file']}")
        if target_file.exists() and target_file != current_file:
            errors.append(f"H1 file already exists: {item['h1_file']}")
        if len(item["h1_route"]) > 200:
            errors.append(f"H1 route exceeds 200 characters: {item['h1_route']}")
    if errors:
        raise SystemExit("Validation failed:\n- " + "\n- ".join(errors))


def iter_text_files():
    for root_name in ("src", "public", "scripts", "supabase"):
        root = PROJECT / root_name
        for path in root.rglob("*"):
            if path.is_file() and path.suffix.lower() in TEXT_EXTENSIONS and path.name not in SKIP_NAMES:
                yield path
    for name in ("vite.config.ts", ".noindex-review-evidence.json"):
        path = PROJECT / name
        if path.is_file():
            yield path


def apply(mapping: list[dict[str, str]]) -> None:
    for item in mapping:
        old_path = PROJECT / item["current_file"]
        new_path = PROJECT / item["h1_file"]
        os.replace(old_path, new_path)

    changed_files = 0
    replacements = 0
    for path in iter_text_files():
        original = path.read_text(encoding="utf-8")
        updated, count = simultaneous_replace(original, mapping)
        if updated != original:
            write_text(path, updated)
            changed_files += 1
            replacements += count

    # Update route IDs that contain TanStack pathless underscore segments.
    route_pattern = re.compile(r'(createFileRoute\(["\'])([^"\']+)(["\']\))')
    for item in mapping:
        path = PROJECT / item["h1_file"]
        text = path.read_text(encoding="utf-8")
        match = route_pattern.search(text)
        if not match:
            raise RuntimeError(f"Missing createFileRoute: {item['h1_file']}")
        literal = match.group(2)
        if literal.replace("_", "") != item["h1_route"]:
            current_normalized = literal.replace("_", "")
            if current_normalized != item["current_route"]:
                raise RuntimeError(f"Unexpected route ID in {item['h1_file']}: {literal}")
            new_literal = literal.rsplit("/", 1)[0] + "/" + item["h1_route"].rsplit("/", 1)[-1]
            text = text[:match.start(2)] + new_literal + text[match.end(2):]
            write_text(path, text)

    # File references in the indexing decision manifest must follow the renames.
    review_path = PROJECT / "src/content/indexing-review.json"
    review = json.loads(review_path.read_text(encoding="utf-8"))
    file_map = {Path(item["current_file"]).name: Path(item["h1_file"]).name for item in mapping}
    for decision in review:
        if decision.get("file") in file_map:
            decision["file"] = file_map[decision["file"]]
    write_text(review_path, json.dumps(review, indent=2, ensure_ascii=False) + "\n")

    evidence_path = PROJECT / ".noindex-review-evidence.json"
    evidence = evidence_path.read_text(encoding="utf-8")
    for old_name, new_name in file_map.items():
        evidence = evidence.replace(old_name, new_name)
    write_text(evidence_path, evidence)

    # Original public URLs now redirect directly to H1-derived URLs. Existing
    # historical destinations are also flattened when they target a renamed URL.
    vercel_path = PROJECT / "vercel.json"
    vercel = json.loads(vercel_path.read_text(encoding="utf-8"))
    original_to_h1 = {item["original_route"]: item["h1_route"] for item in mapping}
    current_to_h1 = {item["current_route"]: item["h1_route"] for item in mapping}
    redirects = vercel.setdefault("redirects", [])
    for redirect in redirects:
        if redirect.get("source") in original_to_h1:
            redirect["destination"] = original_to_h1[redirect["source"]]
        elif redirect.get("destination") in current_to_h1:
            redirect["destination"] = current_to_h1[redirect["destination"]]
    write_text(vercel_path, json.dumps(vercel, indent=2, ensure_ascii=False) + "\n")

    # Internal article links changed, so refresh integrity hashes.
    replacements_path = PROJECT / "src/content/article-replacements.json"
    article_replacements = json.loads(replacements_path.read_text(encoding="utf-8"))
    for record in article_replacements:
        article = PROJECT / "src/content/articles" / f"{record['slug']}.json"
        normalized = article.read_text(encoding="utf-8").replace("\r\n", "\n")
        record["contentSha256"] = hashlib.sha256(normalized.encode("utf-8")).hexdigest()
    write_text(replacements_path, json.dumps(article_replacements, indent=2, ensure_ascii=False) + "\n")

    print(f"Renamed {len(mapping)} routes to H1-derived filenames.")
    print(f"Updated {replacements} URL references across {changed_files} files.")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    mapping = load_mapping()
    validate(mapping)
    longest = max(mapping, key=lambda item: len(item["h1_route"]))
    print(f"Validated {len(mapping)} H1-derived routes; longest is {len(longest['h1_route'])} characters.")
    print("Example:", next(item["h1_route"] for item in mapping if item["original_route"] == "/services/usa/510k"))
    if args.apply:
        apply(mapping)
    else:
        print("Dry run only. Use --apply to write changes.")


if __name__ == "__main__":
    main()
