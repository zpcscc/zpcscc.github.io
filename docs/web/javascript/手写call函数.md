---
title: 手写call函数
---

## 在原型链上写 call 方法

```javascript
// 将函数写在原型链上，这样所有的函数都会有myCall方法；
Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx == null || ctx === undefined ? globalThis : Object(ctx);
  let key = Symbol('temp');
  Object.defineProperty(ctx, key, {
    enumerable: false,
    value: this,
  });
  let result = ctx[key](...args);
  delete ctx[key];
  return result;
};
```

## 使用

```javascript
function method(a, b) {
  console.log(this.a, b);
  return a + b;
}
method.myCall({}, 2, 3); // {} 2, 3
```
