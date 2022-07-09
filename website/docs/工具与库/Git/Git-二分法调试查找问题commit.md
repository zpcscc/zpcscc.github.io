---
title: Git-二分法调试查找问题commit
sidebar: auto
date: 2021-12-23
categories:
  - 开发
tags:
  - git
---
## Git-二分法调试查找问题commit

`git bisect` 命令用来查找哪一次代码提交引入了错误

## 前言：

使用场景：当项目出现某个问题。但不知道是哪次commit导致此问题的出现。可以使用此命令 `git bisect`

### 一、原理

原理为，将所有提交的commit记录一分为二。确定错误在前半部分还是后半部分。不断重复缩小范围，直到找到错误的某个commit；

### 二、使用步骤

#### 1、确定查找范围

```javascript
// 查看所有commit提交记录，确定查找范围。
git log
```

#### 2、启动 `git bisect` 命令

```javascript
git bisect start ${最近的commit} ${最远的commit}
```

#### 3、开始排查

启动命令后，项目会切换到刚刚启动范围最中间的一次commit。

此时可以运行项目，查看问题是否存在

若当前commit没有问题则标记good

```javascript
git bisect good
```

此命令表示当前commit正常。

标记完成后，项目会自动跳转到后半范围的中点commit

直到某次commit中，出现了问题。此时标记bad

```javascript
git bisect bad
```

此命令表示当前commit出现了问题。

标记完成后，项目会自动跳转到前半范围的中点commit

通过此二分法，不断缩小范围。之后不断重复此过程。

直到某次标记后，git给出如下提示

```javascript
${某次commit} is the first bad commit
```

这是我们就找到了问题第一次出现的某个commit。记录下本次commit。

查看commit内容，确认问题原因。

#### 4、退出 `git bisect`命令

```javascript
git bisect reset
```

退出命令后。项目会回到最开始启动命令前所在的位置。

此时就可以愉快的修复bug了。
