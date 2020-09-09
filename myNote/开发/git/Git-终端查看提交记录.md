---
title: Git-终端查看提交记录
sidebar: auto
date: 2020-08-21
categories:
  - 开发
tags:
  - git
---



## Git 终端查看git提交记录及分支变化

前言：

有时在本地改动代码时，各种修改，最后自己也忘记修改了哪些，产生了脏代码。

此时想要舍弃本地代码，强制拉取远程最新的代码覆盖本地，重新开发。

```javascript
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

```javascript
git lg   // 查看git合并变化
```

