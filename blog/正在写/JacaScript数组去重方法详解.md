

# JavaScript数组去重的方法总结

set集合没有提供下标方式的访问，因此只能使用**for-o**f来遍历。没有索引，没有长度。

```javascript
// 下面展示了一种极为精巧的数组去重的方法
let arr = [1,2,3,4,4,3,2,4,1,5,6]
let mySet = new Set(arr);
let newArr = [];
for(let i of mySet){
    newArr.push(i);
}
console.log(newArr);
```

