"""Compatibility entry point; the Node implementation is the single source of truth."""
from pathlib import Path
import subprocess
import sys

if __name__ == "__main__":
    script = Path(__file__).with_suffix(".cjs")
    sys.exit(subprocess.call(["node", str(script), *sys.argv[1:]]))
