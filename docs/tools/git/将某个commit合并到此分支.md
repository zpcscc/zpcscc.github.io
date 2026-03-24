---
title: 将某个commit合并到此分支
---

## Git 将其他分支的某个 commit 提交合并到当前分支

### 查看 commit 提交记录，找到想要切换到的 commit 的 hash 值

```javascript
git cherry-pick '某次提交的commit对应的hash值'
```