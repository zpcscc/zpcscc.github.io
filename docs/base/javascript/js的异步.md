---
title: js的异步
---

## 如何理解js的异步

```
  JS是一门单线程的语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个。
渲染主线程承担着诸多的工作，渲染页面，执行js等操作。
  如果使用同步的方式执行。则极有可能导致主线程的阻塞，从而导致消息队列中的许多任务无法得到执行。
  这样一来，一方面会导致繁忙的主线程白白消耗时间，另一方面导致页面无法更新，给用户造成卡死的现象。
  所以浏览器采用异步的方式来避免。具体做法是当某些任务执行时，比如计时器，网络，事件监听。
  主线程将任务交给其他线程去处理，自身立即结束当前的任务，去执行后续的任务。
当其他线程完成时，事先传递的回调函数函数包装成任务，加入消息队列的末尾来进行排队。等待主线程的执行。
  在这种异步模式下，浏览器永不阻塞，从而最大程度的保证了主线程的流畅运行。
```