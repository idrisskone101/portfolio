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

This repo is a Next.js 14 app. The app lives in the portfolio folder. No database and no Prisma.
Workspace pstack mapping is .cursor/rules/pstack-models.mdc, same as PostForge.
Chrome DevTools MCP in .cursor/mcp.json is for the local IDE. Cloud Agents load MCP from the dashboard.
