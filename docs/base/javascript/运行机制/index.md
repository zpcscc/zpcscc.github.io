---
title: 运行机制
---

# 浅谈 JavaScript 运行机制

​ 想要了解一门语言，最好的办法就是了解它的运行机制。掌握了运行机制，能够让我们在开发中少走许多弯路，写出高质量的代码。本文简单介绍什么是 JavaScript 的运行机制，给刚刚接触 JavaScript 的小白一个初步的了解，为将来打好基础。

## 一、JavaScript 代码运行分两个阶段：

1、**预解析**---把所有的函数定义提前，所有的变量声明提前，变量的赋值不提前

2、**执行**---从上到下执行（按照 js 运行机制）

## 二、JavaScript 运行机制的特点

1.JavaScript 是一门**单线程语言**

2.**事件循环**（Event Loop）

## 三、单线程

### 1.什么是单线程

JavaScript 的一个语言特性（也是这门语言的核心）就是单线程，也就是说，同一个时间只能做一件事，当有多个任务时，只能按照顺序上一个任务完成了再执行下一个。上一个任务未完成则会一直等待。
JavaScript 所有的多线程都是模拟出来的，本质还是单线程

### 2.为什么 JavaScript 是单线程

JavaScript 的单线程而不是多线程，主要与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM（文档对象模型）和 BOM（浏览器对象模型）。而多线程需要共享资源，多线程编程经常面临锁、状态同步等问题。这决定了 JavaScript 只能是单线程。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？会带来许多问题
所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。

### 3.单线程带来的问题及解决方法

单线程意味着同一时间只能进行一件事情,前面的事情结束才能执行后面的事件.当碰到需要时间的 IO 事件的时候问题就来了,必须等到这些结束后才往下进行但这时 CPU 是闲着的.这样浪费了很多计算机的性能
JavaScript 语言的设计者意识到，这时主线程完全可以不管 IO 设备，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 设备返回了结果，再回过头，挂起的任务继续执行下去。将所有任务分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）
为了提高 CPU 的利用率，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以这个标准并没有改变 JavaScript 单线程的本质

## 四、同步和异步

```
同步：
	在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
异步：
	不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行
```

**例题：**

```javascript
console.log(1);
setTimeout(function() {
  console.log(2);
}, 0);
console.log(3);
//1 3 2 ---不是按照123的先后顺序输出。因为延时器触发了异步
```

```javascript
console.log("A");
while (true) {}
console.log("B");
//A ---遇到死循环，程序卡在死循环。后面的语句执不了
```

```javascript
console.log("A");
setTimeout(function() {
  console.log("B");
}, 0);
while (true) {}
//A----只输出A，延时器异步等主线程结束后执行，主线程遇到死循环，后面的不再执行
```

## 五、理解 Event Loop（事件循环）

**异步执行**的**运行机制**如下：理解**任务队列**（消息队列）

（1）所有同步任务都在主线程上执行，形成一个**执行栈**（execution context stack）

（2）主线程之外，还存在一个"**任务队列**"（task queue）。只要异步任务有了运行结果，就在"**任务队列**"之中放置一个事件

（3）一旦"**执行栈**"中的所有同步任务执行完毕，系统就会读取"**任务队列**"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入**执行栈**，开始执行

（4）主线程不断重复上面的第三步

​ **JavaScript 的运行机制**：主线程从"**任务队列**"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为**Event Loop（事件循环）**。只要主线程空了，就会去读取"**任务队列**"。这个过程会循环反复。以下这张图可以很好说明这点。

![运行机制](./img/%E8%BF%90%E8%A1%8C%E6%9C%BA%E5%88%B6.png)

## 六、哪些语句会放入异步任务队列

**一般来说，有以下四种会放入异步任务队列：**

1. setTimeout（延时器）和 setInterval（定时器）

2. DOM 事件

3. ES6 中的 Promise

4. Ajax 异步请求
