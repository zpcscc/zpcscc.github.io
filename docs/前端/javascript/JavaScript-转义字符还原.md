---
title: JavaScript-转义字符还原
sidebar: auto
date: 2022-07-07
categories:
  - 前端
tags:
  - JavaScript

---

## 转义字符还原

	使用原生方法，将被转义的html数据还原成string

```typescript
const htmlToString = (htmlString:string) => {
    let divDom = document.createElement('div');
    divDom.innerHTML = htmlString;
    return divDom.innerText || divDom.textContent;
}
```

