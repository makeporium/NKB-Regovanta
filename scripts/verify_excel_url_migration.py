"""Read-only reconciliation of H1-derived URLs against the Excel rename rows."""

import json
import re
import subprocess

import apply_h1_url_migration as migration


mapping = migration.load_mapping()
errors = []
exact_matches = 0
route_pattern = re.compile(r'(createFileRoute\(["\'])([^"\']+)(["\']\))')
direct_map = {item["original_route"]: item["h1_route"] for item in mapping}
direct_pattern = re.compile("|".join(re.escape(route) for route in sorted(direct_map, key=len, reverse=True)))

workbook = migration.openpyxl.load_workbook(migration.WORKBOOK, read_only=True, data_only=True)
sheet = workbook["URL Map"]
rows = sheet.iter_rows(values_only=True)
headers = next(rows)
original_files = {
    row["CurrentURL"]: row["CurrentFile"].replace("\\", "/")
    for row in (dict(zip(headers, values)) for values in rows)
    if row.get("Action") == "RENAME"
}

for item in mapping:
    original_file = original_files[item["original_route"]]
    original = subprocess.check_output(
        ["git", "show", f"HEAD:{original_file}"], cwd=migration.PROJECT
    ).decode("utf-8")
    expected = direct_pattern.sub(lambda match: direct_map[match.group(0)], original)
    match = route_pattern.search(expected)
    if not match:
        errors.append(f"missing route declaration: {item['h1_file']}")
        continue
    literal = match.group(2)
    if literal.replace("_", "") == item["original_route"]:
        new_literal = literal.rsplit("/", 1)[0] + "/" + item["h1_route"].rsplit("/", 1)[-1]
        expected = expected[:match.start(2)] + new_literal + expected[match.end(2):]
    actual_path = migration.PROJECT / item["h1_file"]
    if not actual_path.is_file():
        errors.append(f"missing H1 route file: {item['h1_file']}")
        continue
    actual = actual_path.read_text(encoding="utf-8")
    if actual == expected:
        exact_matches += 1
    else:
        errors.append(f"content mismatch: {item['h1_file']}")
    actual_route = route_pattern.search(actual).group(2).replace("_", "")
    if actual_route != item["h1_route"]:
        errors.append(f"route ID mismatch: {item['h1_file']}")
    canonical = f"https://www.nkbregovanta.com{item['h1_route']}"
    if canonical not in actual:
        errors.append(f"canonical missing: {item['h1_file']}")

status_bytes = subprocess.check_output(
    ["git", "status", "--porcelain=v1", "-uall", "-z"], cwd=migration.PROJECT
)
status = [item for item in status_bytes.decode("utf-8").split("\0") if item]
deleted = {item[3:].replace("\\", "/") for item in status if item[:2] == " D"}
untracked_routes = {
    item[3:].replace("\\", "/")
    for item in status
    if item[:2] == "??" and item[3:].replace("\\", "/").startswith("src/routes/")
}
expected_old = set(original_files.values())
expected_new = {item["h1_file"] for item in mapping}
if deleted != expected_old:
    errors.append("deleted route set differs from Excel CurrentFile set")
if untracked_routes != expected_new:
    errors.append("replacement route set differs from H1-derived file set")

vercel = json.loads((migration.PROJECT / "vercel.json").read_text(encoding="utf-8"))
redirects = {item["source"]: item["destination"] for item in vercel["redirects"]}
for item in mapping:
    if redirects.get(item["original_route"]) != item["h1_route"]:
        errors.append(f"redirect mismatch: {item['original_route']}")
chains = [(source, target) for source, target in redirects.items() if target in redirects]
if chains:
    errors.append(f"redirect chains: {chains}")

head_route_count = subprocess.check_output(
    ["git", "ls-tree", "-r", "--name-only", "HEAD", "src/routes"],
    cwd=migration.PROJECT,
    text=True,
).count(".tsx\n")
working_route_count = len(list((migration.PROJECT / "src/routes").glob("*.tsx")))
if head_route_count != working_route_count:
    errors.append(f"route file count changed: HEAD={head_route_count}, working={working_route_count}")

print(json.dumps({
    "excelRenameRows": len(mapping),
    "deletedOriginalRoutes": len(deleted),
    "h1ReplacementRoutes": len(untracked_routes),
    "exactContentMatches": exact_matches,
    "routeFilesBefore": head_route_count,
    "routeFilesAfter": working_route_count,
    "redirectsTotal": len(redirects),
    "redirectChains": len(chains),
    "errors": errors,
}, indent=2))
raise SystemExit(1 if errors else 0)
