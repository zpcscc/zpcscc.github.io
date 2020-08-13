---
title: JavaScript-数组方法详解
date: 2019-11-22
categories:
  - 前端
tags:
  - JavaScript
---

**JavaScript**中数组的方法种类众多，在 ES3-ES7 不同版本时期都有新方法；并且数组的方法还有原型方法和从 object 继承的方法，这里我们只介绍数组在每个版本中原型上的方法，本文举例介绍了从 ES3 到 ES7 几乎所有的数组方法。

## 一、各版本数组方法一览表

| 数组方法名    | 对应版本 | 功能                                                                                                    | 原数组是否改变 |
| ------------- | -------- | :------------------------------------------------------------------------------------------------------ | :------------: |
| pop()         | ES3-     | 删除最后一位，并返回删除的数据                                                                          |       是       |
| push()        | ES3-     | 在最后一位新增一或多个数据，返回长度                                                                    |       是       |
| shift()       | ES3-     | 删除第一位，并返回删除的数据                                                                            |       是       |
| unshift()     | ES3-     | 在第一位新增一或多个数据，返回长度                                                                      |       是       |
| reverse()     | ES3-     | 反转数组，返回结果                                                                                      |       是       |
| sort()        | ES3-     | 排序（字符规则），返回结果                                                                              |       是       |
| splice()      | ES3-     | 删除指定位置，并替换，返回删除的数据                                                                    |       是       |
| copyWithin()  | ES6-     | 指定位置的成员复制到其他位置                                                                            |       是       |
| fill()        | ES6-     | 使用给定的值，填充到数组中，类似于替换                                                                  |       是       |
| concat()      | ES3-     | 合并数组，并返回合并之后的数据                                                                          |       否       |
| join()        | ES3-     | 使用分隔符，将数组转为字符串并返回                                                                      |       否       |
| slice()       | ES3-     | 截取指定位置的数组，并返回                                                                              |       否       |
| toString()    | ES3-     | 直接转为字符串，并返回                                                                                  |       否       |
| valueOf()     | ES5-     | 返回数组对象的原始值                                                                                    |       否       |
| indexOf()     | ES5-     | 查询并返回数据的索引                                                                                    |       否       |
| lastIndexOf() | ES5-     | 反向查询并返回数据的索引                                                                                |       否       |
| forEach()     | ES5-     | 参数为回调函数，会遍历数组所有的项，回调函数接受三个参数，分别为 value，index，self；forEach 没有返回值 |       否       |
| map()         | ES5-     | 同 forEach，同时回调函数返回数据，组成新数组由 map 返回                                                 |       否       |
| filter()      | ES5-     | 同 forEach，同时回调函数返回布尔值，为 true 的数据组成新数组由 filter 返回                              |       否       |
| every()       | ES5-     | 同 forEach，同时回调函数返回布尔值，全部为 true，由 every 返回 true                                     |       否       |
| some()        | ES5-     | 同 forEach，同时回调函数返回布尔值，只要有一个为 true，由 some 返回 true                                |       否       |
| reduce()      | ES5-     | 归并，同 forEach，迭代数组的所有项，并构建一个最终值，由 reduce 返回                                    |       否       |
| reduceRight() | ES5-     | 反向归并，同 forEach，迭代数组的所有项，并构建一个最终值，由 reduceRight 返回                           |       否       |
| from()        | ES6-     | 将类数组对象和可遍历对象转化为数组                                                                      |       否       |
| of()          | ES6-     | 将一组值转化为数组                                                                                      |       否       |
| find()        | ES6-     | 在数组内部, 找到第一个符合条件的数组成员，返回值                                                        |       否       |
| findIndex()   | ES6-     | 在数组内部, 找到第一个符合条件的数组成员，返回索引                                                      |       否       |
| includes()    | ES7-     | 表示某个数组是否包含给定的值，与字符串的 includes()方法类似                                             |       否       |

---

## 二、方法详解

在讲解数组方法前，我们先简单将数组方法按上方表格内容分为下面两大类

**（1）使用后会改变原数组**

**（2）使用后不会改变原数组**

## 使用后原数组改变，失去原数组，得到改变后的新数组

### 1.pop()

**功能**：方法用于删除并返回数组的最后一个元素。

**参数**：无

```javascript
var arr = [1, 2, 3];
console.log(arr.pop()); //3---删除并返回3
console.log(arr); //[1,2]---原数组改变
```

### 2.push()

**功能**：向数组的末尾添加一个或更多元素，并返回数组新的长度。

**参数**：push(newData1, newData2, ......)

```javascript
var arr = [1, 2, 3];
console.log(arr.push("a")); //4---返回数组现在的长度
console.log(arr); //[1,2,3,"a"]---原数组改变
console.log(arr.push("hello", "world")); //6---一次可添加多个数组，返回新的数组长度
console.log(arr); //[1,2,3,"a","hello",world]---原数组改变
```

### 3.shift()

**功能**：方法用于删除并返回数组的第一个元素。

**参数**：无

```javascript
var arr = [1, 2, 3];
console.log(arr.shift()); //1---返回被删除的元素
console.log(arr); //[2,3]---原数组改变
console.log(arr.shift()); //2---返回被删除的元素
console.log(arr); //[3]---原数组改变
```

### 4.unshift()

**功能**：向数组的开头添加一个或更多元素，并返回新的长度。

**参数**：unshift(newData1, newData2, ......)

```javascript
var arr = [1, 2, 3];
console.log(arr.unshift("world")); //4---返回当前的数组长度
console.log(arr); //["world",1,2,3]---原数组改变
console.log(arr.unshift("a", "b", "hello")); //7---返回当前的数组长度，可一次性添加多个元素
console.log(arr); //["a","b","hello","world",1,2,3]---原数组改变
```

### 5.reverse()

**功能**：颠倒数组中元素的顺序，并返回更改后的数组

**参数**：无

```javascript
var arr = [1, 2, 3];
console.log(arr.reverse()); //[3,2,1]---返回颠倒后的数组
console.log(arr); //[3,2,1]---原数组改变
```

### 6.sort()

**功能**：对数组中的元素进行排序，默认是升序，返回新数组

**参数**：无

```javascript
var arr = [6, 1, 5, 2, 3, 4];
console.log(arr.sort()); //[1, 2, 3, 4, 5, 6]---返回排序后的新数组，默认升序排列
console.log(arr); //[1, 2, 3, 4, 5, 6]---原数组改变
```

**注意**：但是在排序前，会先调用数组的**toString**方法，将每个元素都转成字符之后，再进行排序，此时会按照字符串的排序，逐位比较，进行排序。

```javascript
var arr = [6, 1024, 52, 256, 369];
console.log(arr.sort()); //[1024, 256, 369, 52, 6]---按照第一个字符的大小排序，多位数值的排序会出错
console.log(arr); //[1024, 256, 369, 52, 6]---原数组改变
```

**解决方法**：通过回调函数实现

**参数**：sort(callback)

如果需要按照数值排序，需要传参。sort(callback)，callback 为回调函数，该函数应该具有两个参数，比较这两个参数，然后返回一个用于说明这两个值的相对

顺序的数字（a-b）。其返回值如下：
若 a 小于 b，返回一个小于 0 的值。
若 a 等于 b，则返回 0。
若 a 大于 b，则返回一个大于 0 的值。

##### 1)从小到大排序

```javascript
var arr = [6, 1024, 52, 256, 369];
console.log(arr.sort(fn)); //[6, 52, 256, 369, 1024]---排序正常升序
console.log(arr); //[6, 52, 256, 369, 1024]---原数组改变
function fn(a, b) {
  return a - b;
}
```

##### 2)从大到小排序

```javascript
var arr = [6, 1024, 52, 256, 369];
console.log(arr.sort(fn)); //[1024, 369, 256, 52, 6]---排序正常降序
console.log(arr); //[1024, 369, 256, 52, 6]---原数组改变
function fn(a, b) {
  return b - a;
}
```

### 7.splice()

**功能**：向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素。

**参数**：splice(start,num,data1,data2,...); 所有参数全部可选；分为多种情况

**start**：整数，规定添加/删除项目位置的索引，使用负数可从数组结尾处规定删除的位置

**num**：整数，规定要删除元素的数量，若为 0 则不会删除

**data1，data2，data3.....**:可选，规定需要添加的元素

#### （1）不传参时：无操作

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice()); //[]---不传参，不操作，没有没删除替换的元素，返回空数组
console.log(arr); //["Tom","Jack","Lucy","Lily","May"]---无操作，原数组未变，返回原数组
```

#### （2）只传入 start：表示从索引为 start 的数据开始删除，直到数组结束

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(2)); //["Lucy", "Lily", "May"]--从索引为2开始删除，直到结束，返回被删除的数组
console.log(arr); //["Tom", "Jack"]---原数组改变，返回改变后的数组
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(0)); //["Tom","Jack","Lucy","Lily","May"]--从索引为0开始删除，直到结束
console.log(arr); //[]---原数组数据被全部删除，返回空数组
```

#### （3）传入 start 和 num：表示从索引为 start 的数据开始删除，删除 num 个

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(1, 3)); //["Jack", "Lucy", "Lily",]---从索引为2开始删除，删除3个元素
console.log(arr); //["Tom", "May"]---原数组改变，按顺序返回剩下的元素
```

#### （4）传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置

##### 1）删除的数据，等于，添加的数据，数量相同。相当于把某几个数据替换了

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(2, 2, "a", "b")); //["Lucy", "Lily"]--从索引为2开始删除2个，再把"a""b"插入删除的空隙
console.log(arr); //["Tom", "Jack", "a", "b", "May"]---原数组改变，相当于被替换了
```

##### 2）删除的数据，多于，添加的数据。多的空位由后面的数据向前移补上

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(2, 2, "a")); //["Lucy", "Lily"]--从索引为2开始删除2个，再把"a"插入删除的空隙，多的空隙，后面数据补上来。
console.log(arr); //["Tom", "Jack", "a", "May"]---原数组改变
```

##### 3)删除的数据，少于，添加的数据。多的数据挤进去，后面的元素都相应后退。

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(2, 1, "a", "b")); //["Lucy"]--从索引为2开始删除2个，再把"a""b"插入删除的空隙
console.log(arr); //["Tom", "Jack", "a", "b", "Lily", "May"]---原数组改变
```

#### （5）传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.splice(2, 0, "a", "b")); //[]
console.log(arr); //["Tom", "Jack", "a", "b", "Lucy", "Lily", "May"]---原数组改变
```

### 8.ES6 新增：copyWithin()

**功能**：在当前数组内部，将指定位置的成员复制到其他位置顶替掉原来位置的元素，并返回新数组

**参数**：copyWithin(target,start=0,end=this.length)

**target**：从该索引位置开始替换元素，如果为负值，则表示从右往左

**start**：从该索引位置开始读取元素（包括该索引对应的元素）。默认为 0，如果为负值，则表示从右往左

**end**：到该索引位置前停止读取元素（不包括该索引对应的元素）。默认等于数组长度，使用负数可从数组结尾处规定位置开始

**Tip**：数组的长度前后不会改变

```javascript
var arr=["Tom","Jack","Lucy","Lily","May"，"Alice","Ben","Rouse","Peter"]
console.log(arr.copyWithin(1,3,6));
//["Tom", "Lily", "May", "Alice", "May", "Alice", "Ben", "Rouse", "Peter"]
//从索引为1的元素开始被替换,从索引为3的元素开始读取要替换的 索引为6的元素前面停止替换
//简单来说就是将索引为3,4,5位置的元素复制到索引为1,2,3的位置上.后面的元素不变。

var arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, -2, -1));//负数表示从右到左数索引。-2相当于索引2的位置，-1相当索引为3的位置
//[4, 2, 3, 4, 5]
//表示将索引为-2的元素复制到索引为0的位置上
```

### 9.ES6 新增：fill()

**功能**：使用给定的值，填充到数组中，类似于替换

**参数**：fill(data,start,end)

**data**：要填充数组的值

**start**：填充开始的位置，默认值是 0

**end**：填充结束的位置，默认值是 this.length(数组长度)

```javascript
var arr = ["a", "b", "c"];
console.log(arr.fill(7)); //[7, 7, 7]---start和end都为0，默认填充所有元素
console.log(arr); //[7, 7, 7]---原数组改变
var arr = ["a", "b", "c", "d", "e", "f"];
console.log(arr.fill(7, 1, 4)); //["a", 7, 7, 7, "e", "f"]---将索引1到4的元素填充为7
console.log(arr); //["a", 7, 7, 7, "e", "f"]---原数组改变
```

## 第二类、使用后原数组不变，返回新数组后，仍然可以得到原数组

### 1.concat()

**功能**：用于将两个或多个数组连接到一起

**参数**：concat(data1,data2,...);

**data**：为数组时，将 data 合并到原数组；data 为具体数据时直接添加到原数组尾部；省略时创建原数组的副本

```javascript
var arr1 = [1, 2, 3];
var arr2 = arr1.concat();
console.log(arr1); //[1,2,3]---原数组
console.log(arr2); //[1,2,3]---原数组的副本;看起来和原数组一样，但他们是两个东西，不相等。
console.log(arr1 === arr2); //false---数组也是对象的一种，所有对象都不相等，除非是对象本身等于自己
console.log(arr1.concat("hello", "world")); //[1,2,3,"hello","world"]---将字符拼接到数组后
console.log(arr1.concat(["a", "b"], [[3, 4], { name: "admin" }])); //[1,2,3,"a","b",[3,4],{"name":"admin"}]
var arr3 = [4, 5, 6];
console.log(arr1.concat(arr3)); //[1, 2, 3, 4, 5, 6]---将两个数组拼接
console.log(arr1); //[1,2,3]---原数组未改变
```

### 2.join()

**功能**：根据指定分隔符将数组中的所有元素放入一个字符串，并返回这个字符串

**参数**：join(str);

**str**：默认为","号，以传入的字符作为分隔符

```javascript
var arr = [1, 2, 3];
console.log(arr.join()); //1,2,3---将数组每个元素用","连接成字符串并返回
console.log(arr.join("-")); //1-2-3---将数组每个元素用"-"连接成字符串并返回
console.log(arr); //[1,2,3]---原数组未改变

//当数组里的元素也是数组或对象时
var a = [["OBKoro1", "23"], "test"];
console.log(a.join("*")); //OBKoro1,23*test---数组内的还是用","连接（join只对一维数组连接，多维数组时，里面的数组不连接，只是转成字符串），数组外的用"*"连接
var b = [{ name: "OBKoro1", age: "23" }, "test"];
console.log(b.join("*")); //[object Object]*test---数组内是对象时。会出问题，先转成数组，对象内容显示"Object",再连接。不能显示具体值
// 对象转字符串推荐JSON.stringify(obj);
```

### 3.slice()

**功能**：可从已有的数组中返回选定的元素。

**参数**：slice(start, end)

**start**：为必填，表示从第几位索引开始。若为负数，则表示从后往前计算索引

**end**：为可填，表示到第几位结束(不包含 end 位)，省略表示到最后一位；若为负数，则表示从后往前计算索引

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
console.log(arr.slice(1, 3)); //["Jack","Lucy"]---返回索引为1,2的元素组成的数组
console.log(arr.slice(1)); //["Jack","Lucy","Lily","May"]---返回索引为1,2,3,4的元素组成的数组
console.log(arr.slice(-4, -1)); //["Jack","Lucy","Lily"]
console.log(arr.slice(-2)); //["Lily","May"]
console.log(arr.slice(1, -2)); //["Jack","Lucy"]
console.log(arr); //["Tom","Jack","Lucy","Lily","May"]---原数组未改变
```

### 4.toString()

**功能**：转换成字符串，类似于没有参数的 join()。该方法会在数据发生隐式类型转换时被自动调用，如果手动调用，就是直接转为字符串。

**参数**：无

```javascript
var arr = [1, 2, 3];
var a = [{ name: "OBKoro1", age: "23" }, "test"];
console.log(arr.toString()); //1,2,3---转为字符
console.log(a.toString()); //[object Object],test--对象没办法直接转
console.log(arr); //[1,2,3]---原数组未改变
```

### 5.valueOf()

**功能**：返回数组的原始值（一般情况下其实就是数组自身），一般由 js 在后台调用，并不显式的出现在代码中

**参数**：无

```javascript
var arr = [1, 2, 3];
console.log(arr.valueOf()); //[1,2,3]---返回的是数组本身
console.log(arr); //[1,2,3]---原数组未变
//为了证明返回的是数组自身
console.log(arr.valueOf() == arr); //true
```

### 6.indexOf()

**功能**：根据指定的数据，从左向右，查询某元素在数组中出现的位置，如果不存在指定的元素，返回-1。该方法是查询方法，不会对数组产生改变。

**参数**：indexOf(value, start);

**value**：必填，要查询的数据；

**start**：选填，表示开始查询的位置，当 start 为负数时，从数组的尾部向前数；如果查询不到 value 的存在，则方法返回-1

```javascript
var arr = ["h", "e", "l", "l", "o"];
console.log(arr.indexOf("l")); //2---字母"l"在数组中的索引，返回第一个索引
console.log(arr.indexOf("l", 3)); //3
console.log(arr.indexOf("l", 4)); //-1---从索引为4的位置开始查询，未找到返回-1
console.log(arr.indexOf("l", -1)); //-1
console.log(arr.indexOf("l", -3)); //2
console.log(arr); // ["h","e","l","l","o"]---原数组未改变
```

### 7.lastIndexOf()

**功能：**根据指定的数据，从右向左，查询在数组中出现的位置，如果不存在指定的数据，返回-1。该方法是查询方法，不会对数组产生改变。

**参数：**lastIndexOf(value, start);

**value**：必填，要查询的数据；

**start**：选填，表示开始查询的位置，当 start 为负数时，从数组的头部向尾部数；如果查询不到 value 的存在，则方法返回-1

```javascript
var arr = ["h", "e", "l", "l", "o"];
console.log(arr.lastIndexOf("l")); //3
console.log(arr.lastIndexOf("l", 3)); //3
console.log(arr.lastIndexOf("l", 1)); //-1
console.log(arr.lastIndexOf("l", -3)); //2
console.log(arr.lastIndexOf("l", -4)); //-1
console.log(arr); // ["h","e","l","l","o"]---原数组未改变
```

### 8.forEach()

**功能**：用来遍历数组，该方法没有返回值。forEach 接收的回调函数会根据数组的每一项执行，该回调函数默认有三个参数，分别为：遍历到的数组的数据，对应的索引，数组自身。

**参数**：forEach(callback);callback 默认有三个参数，分别为 value，index，self。

**value**：遍历到的数组元素

**index**：元素对应的索引

**self**：数组自身

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
var a = arr.forEach(function(value, index, self) {
  console.log(index + "--" + value + "--" + self);
});
// 打印结果为：---第一列为遍历到的数组元素，第二列为对应的索引，第三列为数组自身
// 0--Tom--Tom,Jack,Lucy,Lily,May
// 1--Jack--Tom,Jack,Lucy,Lily,May
// 2--Lucy--Tom,Jack,Lucy,Lily,May
// 3--Lily--Tom,Jack,Lucy,Lily,May
// 4--May--Tom,Jack,Lucy,Lily,May
console.log(arr); //["Tom","Jack","Lucy","Lily","May"]---原数组未改变
console.log(a); //undefined---forEach没有返回值
//该方法为遍历方法，不会修改原数组
```

### 9.map()

**功能**：1.同 forEach 功能；2.map 的回调函数会将执行结果返回，最后 map 将所有回调函数的返回值组成新数组返回。

**参数**：map()接收一个回调函数作为参数，这个回调函数需要有返回值；map(callback);callback 默认有三个参数，分别为 value，index，self。

**value**：遍历到的数组元素

**index**：元素对应的索引

**self**：数组自身

#### （1）功能 1：同 forEach

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
var a = arr.map(function(value, index, self) {
  console.log(index + "--" + value + "--" + self);
});
// 打印结果为：---第一列为遍历到的数组元素，第二列为对应的索引，第三列为数组自身
// 0--Tom--Tom,Jack,Lucy,Lily,May
// 1--Jack--Tom,Jack,Lucy,Lily,May
// 2--Lucy--Tom,Jack,Lucy,Lily,May
// 3--Lily--Tom,Jack,Lucy,Lily,May
// 4--May--Tom,Jack,Lucy,Lily,May
```

#### （2）功能 2：每次回调函数的返回值被 map 组成新数组返回

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
var a = arr.map(function(value, index, self) {
  return "hi:" + value;
});
console.log(a); //["hi:Tom", "hi:Jack", "hi:Lucy", "hi:Lily", "hi:May"]
//可通过此方法批量修改数组，返回新数组。
console.log(arr); //["Tom", "Jack", "Lucy", "Lily", "May"]---原数组未改变
```

### 10.filter()

**功能：**1.同 forEach 功能；2.filter 的回调函数需要返回布尔值，当为 true 时，将本次数组的数据返回给 filter，最后 filter 将所有回调函数的返回值组成新数组返回（此功能可理解为“过滤”）。

**参数：**filter()接收一个回调函数作为参数，这个回调函数需要有返回值；filter(callback);callback 默认有三个参数，分别为 value，index，self

**value**：遍历到的数组元素

**index**：元素对应的索引

**self**：数组自身

#### （1）功能 1：同 forEach

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
var a = arr.filter(function(value, index, self) {
  console.log(index + "--" + value + "--" + self);
});
// 打印结果为：---第一列为遍历到的数组元素，第二列为对应的索引，第三列为数组自身
// 0--Tom--Tom,Jack,Lucy,Lily,May
// 1--Jack--Tom,Jack,Lucy,Lily,May
// 2--Lucy--Tom,Jack,Lucy,Lily,May
// 3--Lily--Tom,Jack,Lucy,Lily,May
// 4--May--Tom,Jack,Lucy,Lily,May
```

#### （2）功能 2：当回调函数的返回值为 true 时，本次的数组值返回给 filter，被 filter 组成新数组返回

```javascript
var arr = ["Tom", "Jack", "Lucy", "Lily", "May"];
var a = arr.filter(function(value, index, self) {
  return value.length > 3; //返回元素长度大于3的元素。若有符合条件的元素，返回元素
});
console.log(a); //["Jack", "Lucy", "Lily"]
//相当于一个筛选器（过滤器），可以在数组中查找需要的内容并返回
console.log(arr); //["Tom", "Jack", "Lucy", "Lily", "May"]---原数组未改变
```

### 11.every()

**功能**：判断数组中每一项是否都满足条件，只有所有项都满足条件，才会返回 true。

**参数**：every()接收一个回调函数作为参数，这个回调函数需要有返回值；every(callback);callback 默认有三个参数，分别为 value，index，self

**value**：遍历到的数组元素

**index**：元素对应的索引

**self**：数组自身

#### （1）功能 1：当回调函数的返回值为 true 时，类似于 forEach 的功能，遍历所有；如果为 false，那么停止执行，后面的数据不再遍历，停在第一个返回 false 的位置。

```javascript
//demo1:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.every(function(value, index, self) {
  console.log(value + "--" + index + "--" + (arr == self));
});
// 打印结果为：没有返回值，打印了第一个，默认为false，后面的就不再遍历
// Tom--0--true
//因为回调函数中没有return true，默认返回undefined，等同于返回false

//demo2:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.every(function(value, index, self) {
  console.log(value + "--" + index + "--" + (arr == self));
  return value.length < 4;
});
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
//因为当遍历到Jack时，回调函数到return返回false，此时Jack已经遍历，但是后面数据就不再被遍历了

//demo3:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.every(function(value, index, self) {
  console.log(value + "--" + index + "--" + (arr == self));
  return true;
});
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
// Lucy--3--true
// Lily--4--true
// May--5--true
//因为每个回调函数的返回值都是true，那么会遍历数组所有数据，等同于forEach功能
```

#### （2）功能 2：当每个回调函数的返回值都为 true 时，every 的返回值为 true，只要有一个回调函数的返回值为 false，every 的返回值都为 false

```javascript
//demo1:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.every(function(value, index, self) {
  return value.length > 3;
});
console.log(a); //false---只要出现一个false，返回值就为false

//demo2:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.every(function(value, index, self) {
  return value.length > 2;
});
console.log(a); //true---遍历数组全部为true，才能返回true
```

### 12.some()

**功能**：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true。

**参数**：some()接收一个回调函数作为参数，这个回调函数需要有返回值，some(callback);callback 默认有三个参数，分别为 value，index，self

**value**：遍历到的数组元素

**index**：元素对应的索引

**self**：数组自身

#### （1）功能 1

因为要判断数组中的每一项，只要有一个回调函数返回 true，some 都会返回 true，所以与 every 正好相反，当遇到一个回调函数的返回值为 true 时，可以确定结果，那么停止执行，后面都数据不再遍历，停在第一个返回 true 的位置；当回调函数的返回值为 false 时，需要继续向后执行，到最后才能确定结果，所以会遍历所有数据，实现类似于 forEach 的功能，遍历所有。

```javascript
//demo1:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.some(function(value, index, self) {
  console.log(value + "--" + index + "--" + (arr == self));
  return value.length > 3;
});
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true

//demo2:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.some(function(value, index, self) {
  console.log(value + "--" + index + "--" + (arr == self));
  return true;
});
// 打印结果为：
// Tom--0--true

//demo3:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.some(function(value, index, self) {
  console.log(value + "--" + index + "--" + (arr == self));
  return false;
});
// 打印结果为：
// Tom--0--true
// abc--1--true
// Jack--2--true
// Lucy--3--true
// Lily--4--true
// May--5--true
```

#### （2）功能 2

与 every 相反，只要有一个回调函数的返回值都为 true，some 的返回值为 true，所有回调函数的返回值为 false，some 的返回值才为 false

```javascript
//demo1:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.some(function(value, index, self) {
  return value.length > 3;
});
console.log(a); //true

//demo2:
var arr = ["Tom", "abc", "Jack", "Lucy", "Lily", "May"];
var a = arr.some(function(value, index, self) {
  return value.length > 4;
});
console.log(a); //false
```

### 13.reduce()

**功能**：从数组的第一项开始，逐个遍历到最后，迭代数组的所有项，然后构建一个最终返回的值。

**参数**：reduce()接收一个或两个参数：第一个是回调函数，表示在数组的每一项上调用的函数；第二个参数（可选的）作为归并的初始值，被回调函数第一次执行时的第一个参数接收。

reduce(callback,initial);callback 默认有四个参数，分别为 prev，now，index，self

callback 返回的任何值都会作为下一次执行的第一个参数。

如果 initial 参数被省略，那么第一次迭代发生在数组的第二项上，因此 callback 的第一个参数是数组的第一项，第二个参数就是数组的第二项。

**prev**：初始值, 或者计算结束后的返回值

**now**：当前元素值

**index**：当前元素的索引

**self**：数组自身

```javascript
//demo1:不省略initial参数，回调函数没有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduce(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
}, 2019);
// 打印结果为：
// 2019--10--0--true
// undefined--20--1--true
// undefined--30--2--true
// undefined--40--3--true
// undefined--50--4--true
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

//demo2:省略initial参数，回调函数没有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduce(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
});
// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
// 10--20--1--true
// undefined--30--2--true
// undefined--40--3--true
// undefined--50--4--true
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

//demo3:不省略initial参数，回调函数有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduce(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
  return "hello";
}, 2019);
// 打印结果为：
// 2019--10--0--true
// hello--20--1--true
// hello--30--2--true
// hello--40--3--true
// hello--50--4--true
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值

//demo4:省略initial参数，回调函数有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduce(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
  return "hello";
});
// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
// 10--20--1--true
// hello--30--2--true
// hello--40--3--true
// hello--50--4--true
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值

//demo5：使用reduce计算数组中所有数据的和
var arr = [10, 20, 30, 40, 50];
var sum = arr.reduce(function(prev, now, index, self) {
  return prev + now;
});
console.log(sum); //150
// 回调函数的最后一次return的结果被返回到reduce方法的身上

//demo6：使用reduce计算数组中所有数据的和
var arr = [10, 20, 30, 40, 50];
var sum = arr.reduce(function(prev, now, index, self) {
  return prev + now;
}, 8);
console.log(sum); //158
// 回调函数的最后一次return的结果被返回到reduce方法的身上
// 因为reduce有第二个参数initial，在第一次执行时被计算，所以最终结果被加上8
```

### 14.reduceRight()

**功能**：从数组的第一项开始，逐个遍历到最后，迭代数组的所有项，然后构建一个最终返回的值。

**参数**：reduce()接收一个或两个参数：第一个是回调函数，表示在数组的每一项上调用的函数；第二个参数（可选的）作为归并的初始值，被回调函数第一次执行时的第一个参数接收。

reduce(callback,initial);callback 默认有四个参数，分别为 prev，now，index，self

callback 返回的任何值都会作为下一次执行的第一个参数。

如果 initial 参数被省略，那么第一次迭代发生在数组的第二项上，因此 callback 的第一个参数是数组的第一项，第二个参数就是数组的第二项。

**prev**：初始值, 或者计算结束后的返回值

**now**：当前元素值

**index**：当前元素的索引

**self**：数组自身

```javascript
//demo1:不省略initial参数，回调函数没有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduceRight(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
}, 2019);
// 打印结果为：
//2019--50--4--true
//undefined--40--3--true
//undefined--30--2--true
//undefined--20--1--true
//undefined--10--0--true
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

//demo2:省略initial参数，回调函数没有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduceRight(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
});
// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
//50--40--3--true
//undefined--30--2--true
//undefined--20--1--true
//undefined--10--0--true
// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined

//demo3:不省略initial参数，回调函数有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduceRight(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
  return "hello";
}, 2019);
// 打印结果为：
//2019--50--4--true
//hello--40--3--true
//hello--30--2--true
//hello--20--1--true
//hello--10--0--true
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数reduceRight的值

//demo4:省略initial参数，回调函数有返回值
var arr = [10, 20, 30, 40, 50];
arr.reduceRight(function(prev, now, index, self) {
  console.log(prev + "--" + now + "--" + index + "--" + (arr == self));
  return "hello";
});
// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项
//50--40--3--true
//hello--30--2--true
//hello--20--1--true
//hello--10--0--true
// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数reduceRight的值

//demo5：使用reduce计算数组中所有数据的和
var arr = [10, 20, 30, 40, 50];
var sum = arr.reduceRight(function(prev, now, index, self) {
  return prev + now;
});
console.log(sum); //150
// 回调函数的最后一次return的结果被返回到reduceRight方法的身上

//demo6：使用reduce计算数组中所有数据的和
var arr = [10, 20, 30, 40, 50];
var sum = arr.reduceRight(function(prev, now, index, self) {
  return prev + now;
}, 8);
console.log(sum); //158
// 回调函数的最后一次return的结果被返回到reduceRight方法的身上
// 因为reduceRight有第二个参数initial，在第一次执行时被计算，所以最终结果被加上8
```

### 15.ES6 新增：from()

**功能**：将类数组对象和可遍历对象转化为数组

**参数**：from(object, mapFunction, thisValue)

**object**：必需，要转换为数组的对象

**mapFunction**：可选，数组中每个元素要调用的函数

**thisValue**：可选，映射函数(mapFunction)中的 this 对象

```javascript
var arr = "foo";
console.log(Array.from(arr)); //["f", "o", "o"]---将类数组对象转换为数组
console.log(arr); //"foo"---不改变原对象
```

### 16.ES6 新增：of()

**功能**：将一组值转化为数组

**参数**：of(element0[, element1[, ...[, elementN]]])

**elementN**：任意个参数，将按顺序成为返回数组中的元素

```javascript
console.log(Array.of(1)); // [1]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(undefined)); // [undefined]
```

### 17.ES6 新增：find()

**功能**：在数组内部, 找到第一个符合条件的数组成员

**参数**：find(callback[, thisArg])；callback 回调函数接受三个参数（element，index，self）

**element**：可选；当前遍历到的元素

**index**：可选：当前遍历到的索引

**self**：可选：数组本身

**thisArg**：执行回调时用作`this` 的对象

```javascript
var array = [5, 12, 8, 130, 44];
var found = array.find(function(element) {
  return element > 10;
});
console.log(found); //12
console.log(array); //[5, 12, 8, 130, 44]---原数组不便
```

### 18.ES6 新增数组 findIndex()

**功能**：在数组内部, 找到第一个符合条件的数组成员 ，返回索引，若找不到返回-1

**参数**：arr.findIndex(callback[, thisArg])；callback 回调函数接受三个参数（element，index，self）

**element**：可选；当前遍历到的元素

**index**：可选：当前遍历到的索引

**self**：可选：数组本身

**thisArg**：执行回调时用作`this` 的对象

```javascript
var array = [5, 12, 8, 130, 44];
function isLargeNumber(element) {
  return element > 13;
}
console.log(array.findIndex(isLargeNumber)); //3
console.log(array); //[5, 12, 8, 130, 44]---数组未改变
```

### 19.ES7 新增：includes()

功能：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false

参数： arr.includes(valueToFind[, fromIndex])

**fromIndex**：从`fromIndex` 索引处开始查找 `valueToFind`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即使从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 0。

**valueToFind**：需要查找的元素值

```javascript
var array = [1, 2, 3];
console.log(array1.includes(2)); //true
console.log(array); //[1, 2, 3]---原数组未改变
var pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat")); //true
console.log(pets.includes("at")); //false
console.log(pets); //['cat', 'dog', 'bat']---原数组未改变
```
