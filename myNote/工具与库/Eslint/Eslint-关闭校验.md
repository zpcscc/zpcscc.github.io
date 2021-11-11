---
title: Eslint-关闭校验
sidebar: auto
date: 2021-11-11
categories:
  - 开发
tags:
  - eslint
---

## 1、关闭整个文件校验

```typescript
/* eslint-disable */
```

## 2、关闭当前行校验

```typescript
some code // eslint-disable-line
```

## 3、关闭下一行校验

```typescript
// eslint-disable-next-line
some code
```

## 4、关闭段落校验

```typescript
/* eslint-disable */
some code
some code
/* eslint-enable */
```

