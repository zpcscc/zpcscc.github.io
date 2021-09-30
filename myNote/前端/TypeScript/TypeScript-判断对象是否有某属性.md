---
title: TypeScript-判断对象是否有某属性
sidebar: auto
date: 2021-08-18
categories:
  - 前端
tags:
  - TypeScript
---

# 前言

在 TypeScript 中使用变量查找属性是，经常会报错，提示没有对应的索引。此时可以用到此方法。判断对象中是否有某属性

## TypeScript

```typescript
// 用于判断当前对象里是否有某个属性
export const isValidKey = (
  key: string | number | symbol,
  object: AnyObject
): key is keyof typeof object => {
  return key in object;
};

// 使用，在查找对象某属性前调用
isValidKey(key, object) && object[key];
```
