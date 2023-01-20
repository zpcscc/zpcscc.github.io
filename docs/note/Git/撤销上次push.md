---
title: 撤销上次push
sidebar: auto
date: 2021-04-19
categories:
  - 开发
tags:
  - git
---

## Git 撤销上次push


```javascript
// 1、回退版本
git reset --hard HEAD^  // 回退到上个版本
// 或
git reset --hard commit_id  // 退到/进到 指定commit_id

// 2、将本地退回的更改提交到远程
git push origin HEAD --force
```

