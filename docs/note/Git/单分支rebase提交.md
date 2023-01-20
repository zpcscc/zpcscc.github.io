---
title: 单分支rebase提交
sidebar: auto
date: 2020-12-24
categories:
  - 开发
tags:
  - git
---

## Git 单分支rebase提交

### 通过rebase合并提交代码，使提交记录保持一条直线，解决代码难以追踪修改人的问题

```javascript
git add .
```

```javascript
git commit -m "提交信息"
```

### 方法一、

```javascript
git fetch --all    // 拉取线上所有最新代码
```

```javascript
git rebase origin/dev  // 通过rebase将本地更改与线上dev分支更改合并
```

### 方法二、

```javascript
git pull --rebase
```

```javascript
git push  // 提交代码
```