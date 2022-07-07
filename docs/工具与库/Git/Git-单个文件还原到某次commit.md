---
title: Git-单个文件还原到某次commit
sidebar: auto
date: 2022-02-16
categories:
  - 开发
tags:
  - git
---

## Git 单个文件还原到某次commit

```typescript
// 找到对应的记录后。切换到对应的commit恢复代码（path为基于当前终端所在的路径）
git checkout <commit id> <path/to/your/file>
```

