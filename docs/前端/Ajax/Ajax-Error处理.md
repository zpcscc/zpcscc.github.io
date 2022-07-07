---
title: Ajax-Error处理
sidebar: auto
date: 2021-10-19
categories:
  - 前端
tags:
  - Ajax
---

## Error信息处理

通过catch捕获到的报错信息

```typescript
getApiData().then().catch((err)=>{
  // 基础报错信息
  console.log(err.message)
  // err的response对象。里面包含了接口的大部分信息
  console.log(err.response)
})
```

