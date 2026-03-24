---
title: Ajax Error 处理
slug: ajax-error-handling
authors: [zpcscc]
tags: [ajax, error-handling]
---

## Error信息处理

<!-- truncate -->
通过catch捕获到的报错信息

```typescript
getApiData().then().catch((err)=>{
  // 基础报错信息
  console.log(err.message)
  // err的response对象。里面包含了接口的大部分信息
  console.log(err.response)
})
```

