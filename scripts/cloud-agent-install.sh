#!/usr/bin/env bash
set -euo pipefail

# Cloud Agent install: lockfile-pinned npm deps, pstack models, Chrome + chrome-devtools-mcp.
# Idempotent. Safe to rerun on cached or partially prepared VMs.
# No Postgres, Prisma, Docker, or yt-dlp.

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

npm_ci_or_install() {
  local dir="$1"
  local label="$2"

  if [ -f "${dir}/package-lock.json" ]; then
    echo "==> npm ci (${label})"
    npm ci --prefix "$dir"
  else
    echo "==> npm install (${label})"
    npm install --prefix "$dir"
  fi
}

npm_ci_or_install . "git root"
npm_ci_or_install portfolio "portfolio/"

echo "==> Installing pstack model mapping"
bash "$REPO_ROOT/scripts/install-pstack-models.sh"

ensure_google_chrome() {
  if command -v google-chrome >/dev/null 2>&1 || command -v google-chrome-stable >/dev/null 2>&1; then
    echo "==> Google Chrome already installed"
    return 0
  fi

  if ! command -v sudo >/dev/null 2>&1 || ! command -v apt-get >/dev/null 2>&1; then
    echo "==> Google Chrome is missing and cannot be installed here (need sudo + apt-get)"
    return 0
  fi

  echo "==> Installing Google Chrome"
  local deb="/tmp/google-chrome-stable_current_amd64.deb"
  if ! curl -fsSL -o "$deb" https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb; then
    echo "==> Chrome download failed; continuing without it"
    return 0
  fi
  if ! sudo apt-get install -y "$deb"; then
    echo "==> Chrome apt install failed; continuing without it"
    return 0
  fi
}

ensure_google_chrome

echo "==> Pre-caching chrome-devtools-mcp for Lighthouse and performance audits"
npx -y chrome-devtools-mcp@latest --version
