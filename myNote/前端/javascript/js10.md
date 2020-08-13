---
title: JavaScript-浏览器兼容
date: 2019-11-29
categories:
  - 前端
tags:
  - JavaScript
---

## 获取非行内样式

```javascript
function getStyle(obj, attr) {
  //获取非行间样式，obj是对象，attr是值
  if (obj.currentStyle) {
    return obj.currentStyle[attr]; //针对ie获取非行间样式
  } else {
    return getComputedStyle(obj, false)[attr]; //针对非ie
  }
}
```

## 获取事件对象

```javascript
function fn(eve) {
  var e = eve || window.event;
}
```

## 阻止默认事件

```javascript
function stopDefault(e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}
//或使用return flase//注意一定要在最后使用，防止提前中断函数
```

## 消除事件冒泡

```javascript
function stopBubble(e) {
  if (e.stopPropagation()) {
    e.stopPropagation(); //兼容其他浏览器
  } else {
    e.cancelBubble = true; //兼容ie浏览器
  }
}
```

## 获取键盘按键

```javascript
function key(eve) {
  var keyC = eve.keyCode || eve.which;
}
```

## 添加事件监听

```javascript
function addEvent(obj, type, back) {
  if (obj.addEventListener) {
    obj.addEventListener(type, back);
  } else if (obj.attachEvent) {
    obj.attachEvent("on" + type, back);
  } else {
    obj["on" + type] = back;
  }
}
```

## 删除事件监听

```javascript
function removeEvent(obj, type, back) {
  if (obj.removeEventListener) {
    obj.removeEventListener(type, back, false);
  } else if (obj.detachEvent) {
    obj.detachEvent("on" + type, back);
  } else {
    obj["on" + type] = null;
  }
}
```

## 获取事件源

```javascript
function getEventtarget(eve) {
  var e = eve || window.event;
  var target = e.target || e.srcElement;
}
```

## 获取滚动条滚动距离

```javascript
var sTop = document.documentElement.scrollTop || document.body.scrollTop;
```

## AJAX 兼容问题

```javascript
ajax = new XMLHttpRequest();
ajax = new ActiveXObject("Microsoft.XMLHTTP");
```
