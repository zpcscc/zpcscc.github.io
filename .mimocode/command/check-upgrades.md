---
description: Check all project dependencies for available upgrades and identify peer dependency conflicts. Outputs a summary table with current vs latest versions and any blockers.
---

# Dependency Upgrade Check

Analyze `package.json` dependencies and report upgrade availability.

## Instructions

1. Read `package.json` to get the full dependency list.
2. For each dependency, run `npm info <pkg>@latest version` and `npm info <pkg>@<target_major> peerDependencies` to check:
   - Current installed version vs latest available
   - Whether it's a major version bump
   - Peer dependency constraints that may block upgrading
3. Group results into:
   - **Safe patch/minor upgrades** (no breaking changes expected)
   - **Major upgrades available** (need API migration)
   - **Blocked by peer deps** (cannot upgrade due to dependency conflicts)
4. Known version locks for this project:
   - `eslint` locked to 9.x (`eslint-plugin-jsx-a11y` and `eslint-plugin-react` don't support 10)
   - `typescript` locked to 5.x (`typescript-eslint` requires `<6.1.0`)
   - `@babel/*` locked to 7.x (Docusaurus 3 internal dependency)
   - `@docusaurus/*` locked to 3.x (major ecosystem dependency)
5. Output a markdown summary table.

## Output format

```
## Dependency Upgrade Report

### Safe upgrades (patch/minor)
| Package | Current | Latest | Notes |
|---------|---------|--------|-------|
| ... | ... | ... | ... |

### Major upgrades available
| Package | Current | Latest | Breaking changes | Blocker |
|---------|---------|--------|-----------------|---------|
| ... | ... | ... | ... | ... |

### Blocked
| Package | Current | Want | Blocked by |
|---------|---------|------|------------|
| ... | ... | ... | ... |
```
