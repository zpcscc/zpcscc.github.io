---
title: Git-终端查看提交记录
sidebar: auto
date: 2020-09-10
categories:
  - 开发
tags:
  - git
---

#### Git 终端查看 git 提交记录

```javascript
git log		// git 默认提供的查看提交记录命令
```

#### Git优雅的查看提交记录，并展示分支合并路径图

```javascript
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

```javascript
git lg   // 查看git合并变化
```
