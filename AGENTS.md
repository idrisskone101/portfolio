# Portfolio agent instructions

## Skill precedence

- User-scope skills take priority over project-scope skills whenever names or directives conflict.
- Do not install a project-scope copy of a skill that already exists at user scope.

## Modes

- Primary mode is /kode-mode (.cursor/skills/kode/kode-mode/SKILL.md). It sits on /poteto-mode from the pstack plugin.
- Multi-step work starts with poteto-mode: todolist, matched playbook, principles named in the reply.
- One cloud-agent owner per PR. Say /kode-mode in the launch prompt.
- Do not call it code mode.

## Taste skills

Pinned in skills-lock.json from Leonxlnx/taste-skill. Same lock as PostForge.
design-taste-frontend lives at user scope. Use that copy.
full-output-enforcement is project-scope here.

## Required adversarial review

Every user-visible UI change must end with an independent Adversarial Review sub-agent. The reviewer must not be the agent that authored the implementation.
Run the review against an optimized production build, not only the development server.
Fix every P0/P1 finding and rerun the reviewer before calling UI work done.

## Cursor Cloud

This repo is a Next.js 14 app (npm). The app lives in `portfolio/`. There is no database and no Prisma. Do not add either.

Cloud Agent boot uses `.cursor/environment.json`:

- Install: `bash scripts/cloud-agent-install.sh` (`npm ci` at the git root and in `portfolio/` when lockfiles exist, else `npm install`; then `scripts/install-pstack-models.sh`; then Google Chrome if missing and a pre-cache of `chrome-devtools-mcp`).
- Start: `bash scripts/cloud-agent-start.sh` (checks `node` and `portfolio/package.json`, then exits 0). No Postgres. No Prisma.

Root helpers: `npm run kode:setup` (same as install) and `npm run kode:check` (lint + production build in `portfolio/`).

### Lint / build / run

- App lint: `npm --prefix portfolio run lint`
- App build: `npm --prefix portfolio run build`
- Dev server: `npm --prefix portfolio run dev` (http://localhost:3000)
- Production: `npm --prefix portfolio run build` then `npm --prefix portfolio run start`

### pstack models

- The workspace file `.cursor/rules/pstack-models.mdc` is the source of truth. It maps roles to `composer-2.5` or `inherit-parent`, same lock as PostForge.
- Cloud agents inject that workspace rule. pstack skills still read `~/.cursor/rules/pstack-models.mdc`. If that home copy is missing, run `bash scripts/install-pstack-models.sh` (also run from `kode:setup`, Cloud Agent install, and the `sessionStart` hook) before spawning pstack delegates.
- If a skill looks only at the home path and the file is still missing, treat `.cursor/rules/pstack-models.mdc` as that file.

### Chrome DevTools MCP

- Chrome DevTools MCP is **not** loaded from `.cursor/mcp.json` on Cloud Agents. That file is for the local IDE only. Cloud Agents read MCP servers from the [Cloud Agents dashboard](https://cursor.com/agents) (personal) or [Dashboard → Integrations & MCP](https://cursor.com/dashboard/integrations) (team).
- Add a **stdio** server named `chrome-devtools` in the dashboard with this config:

```json
{
  "mcpServers": {
    "chrome-devtools": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "chrome-devtools-mcp@latest",
        "--headless=true",
        "--isolated=true",
        "--chrome-arg=--no-sandbox",
        "--chrome-arg=--disable-setuid-sandbox",
        "--chrome-arg=--disable-dev-shm-usage"
      ]
    }
  }
}
```

- After saving, start or reopen a Cloud Agent run and enable **chrome-devtools** in the MCP dropdown for that run.
- Google Chrome is usually preinstalled on the Cloud image. `scripts/cloud-agent-install.sh` installs it when missing and pre-caches `chrome-devtools-mcp@latest` via `npx`.
- Key tools for site-wide performance work: `lighthouse_audit`, `performance_start_trace`, `performance_stop_trace`, and `performance_analyze_insight`.
- Example prompts once enabled: "Run a Lighthouse audit on http://localhost:3000" (with `npm --prefix portfolio run build && npm --prefix portfolio run start` running).
