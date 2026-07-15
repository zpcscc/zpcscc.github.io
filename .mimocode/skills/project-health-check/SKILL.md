---
name: project-health-check
description: Run the standard project health verification cycle (TypeScript → ESLint → Build), fix errors iteratively until all pass. Use after code changes, before commits, or when debugging build failures.
---

# Project Health Check

Run the standard verification cycle for this Docusaurus 3 + UnoCSS + TypeScript project. Iterate fix→verify until all three checks pass cleanly.

## Steps

### 1. TypeScript type check
```bash
npx tsc --noEmit 2>&1 | grep -v "node_modules"
```
- If errors exist, fix them first (types > lint > build)
- For targeted checks on a subdirectory: `npx tsc --noEmit 2>&1 | grep -v "node_modules" | grep "<dir>"`
- Avoid `any` — use proper types from context. If truly needed, add `// eslint-disable-line` with a reason.

### 2. ESLint
```bash
npx eslint src/ --ext .ts,.tsx 2>&1
```
- For targeted checks: `npx eslint src/<dir>/ --ext .ts,.tsx 2>&1`
- Auto-fix safe issues: `npx eslint src/ --ext .ts,.tsx --fix 2>&1`
- `thirdparty/` directory code is editable (not a locked vendor dir) — fix its errors too
- Known pattern: `!= null` is safer than `!== null` for narrowing both null and undefined. Use `!= null // eslint-disable-line eqeqeq` when ESLint complains.

### 3. Build
```bash
pnpm build 2>&1 | tail -10
```
- If build fails with "Couldn't find any doc with id" — check `docs*/` for missing/misnamed `.mdx` files and `config/sidebars*.ts` for stale entries
- If build fails with broken links — check `docusaurus.config.ts` `onBrokenLinks` and fix stale internal references

### 4. Iterate
Repeat steps 1→3 until all pass. Fix order: TypeScript errors first, then ESLint, then build.

## Known gotchas
- Port 3000 conflict: stop existing dev server before starting a new one
- `src/components/Button` wraps antd Button, does not support ref forwarding
- `eslint.config.mjs` uses ESM `import` syntax (`.eslintignore` is not supported in ESLint 9 flat config)
- Dependency version locks: eslint 9.x, typescript 5.x, @babel/* 7.x (upgrading requires checking peer dependency chains)
