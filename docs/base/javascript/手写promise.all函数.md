---
title: 手写call函数
---

## 在 promise 上写 all 方法

```javascript
// 将函数写在Promise上，这样所有的函数都会有myAll方法；
Promise.myAll = function () {
  let res;
  let rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  // 设置p的状态
  const result = [];
  // 记录promise的数量
  let count = 0;
  // 记录完成的数量
  let fulFilledCount = 0;
  for (const prom of proms) {
    const i = count;
    count++;
    Promise.resolve(prom).then(
      ((data) => {
        // 将成功的数据汇总到 result
        result[i] = data;
        // 判断是不是全部完成
        fulFulledCount++;
        if (fulFulledCount === count) {
          res(result);
        }
      },
      rej),
    );
  }
  if (count === 0) res(result);
  return p;
};
```

## 使用

```javascript
Promise.all([1, 2, 3]).then((item) => {
  console.log(item);
});
```
