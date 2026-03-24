---
title: 手写bind函数
---

## 在原型链上写 bind 方法

```javascript
// 将函数写在原型链上，这样所有的函数都会有myBind方法；
Function.prototype.myBind = function (ctx) {
  let fn = this;
  return function () {
    return fn.apply(ctx, arguments);
  };
};
```

## 使用

```javascript
function fn(a,b){
    console.log(this.a,b);
}
let newFn = fn.myBind({});
newFn(2,3); // {} 2,3
```