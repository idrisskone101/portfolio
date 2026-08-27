#!/usr/bin/env bash
set -euo pipefail

# Cloud Agent start: cheap sanity check. No database, no Prisma.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

if ! command -v node >/dev/null 2>&1; then
  echo "node is missing" >&2
  exit 1
fi

if [ ! -f portfolio/package.json ]; then
  echo "portfolio/package.json is missing" >&2
  exit 1
fi

echo "==> node $(node --version)"
echo "==> portfolio package present: $(node -p "require('./portfolio/package.json').name")"
