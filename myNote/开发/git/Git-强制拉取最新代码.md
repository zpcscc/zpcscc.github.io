---
title: Git-强制拉取最新代码
sidebar: auto
date: 2020-08-20
categories:
  - 开发
tags:
  - git
---



## Git 强制拉取最新代码

前言：

有时在本地改动代码时，各种修改，最后自己也忘记修改了哪些，产生了脏代码。

此时想要舍弃本地代码，强制拉取远程最新的代码覆盖本地，重新开发。

```javascript
git fetch --all
```

```javascript
git reset --hard origin/master    //这里的master表示你想要强制拉取的远程分支
```

