---
title: 找到reset后丢失的代码
---

## Git 找到reset后丢失的代码

```typescript
git reflog // 通过此命令，查找到本地之前的commit记录
```

```typescript
// 找到对应的记录后。切换到对应的commit恢复代码
git reset  {commit Id}
```

