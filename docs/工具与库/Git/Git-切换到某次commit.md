---
title: Git-切换到某次commit
sidebar: auto
date: 2020-11-04
categories:
  - 开发
tags:
  - git
---

## Git 切换到某次 commit

### 查看 commit 提交记录，找到想要切换到的 commit 的 hash 值

```javascript
git log
```

```javascript
git reset --hard 分支对应的hash值    //这里是舍弃本地未commit的代码，切换commit，记得将本地修改的代码commit一下
```
