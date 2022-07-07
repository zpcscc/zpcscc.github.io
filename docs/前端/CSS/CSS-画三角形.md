---
title: CSS-画三角形
sidebar: auto
date: 2019-09-28
categories:
  - 前端
tags:
  - css
---

# 用 CSS 画三角形

​ 我们都知道在 html 中，想要画出圆形，椭圆，矩形，都很简单，但是常见的三角形，梯形如何用纯 css 画出却较麻烦，许多时候都是直接用三角形的图片。本文将介绍如何用纯 css 画出三角形和梯形

## 一、原理

​ 授人以鱼不如授人以渔。各种方法只有掌握了原理才能真正理解，自己才能够灵活的运用。

其实画三角形和梯形很简单。主要涉及到的属性就是**border 边框属性**

先给大家看一下在 html 中边框的表现形式

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A201.png)

```html
<style>
  div {
    height: 200px;
    width: 200px;
    border-top: 30px solid red;
    border-right: 30px solid blue;
    border-bottom: 30px solid green;
    border-left: 30px solid purple;
  }
</style>
<body>
  <div></div>
</body>
```

由上图知边框原来是四个梯形组成的。理解这一点下面画三角形和梯形就简单了

## 二、画梯形

知道原理那么画梯形就简单了

直接将其余三个边框**颜色设置为透明**就可以了（为了方便使用，可直接将 div 的宽或者高设置为 0）

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A202.png)

```html
<style>
  div {
    height: 200px;
    width: 200px;
    border-bottom: 30px solid green;
    border-left: 30px solid purple;
    border-top: 30px solid transparent;
  }
</style>
<body>
  <div></div>
</body>
```

从上图可以看到，写了（上下左）三个边框，上边框设置透明。左边的边框就是个等腰梯形，下边框变成了直角梯形。

需要注意的是，只有两个边框相接触的地方才会显示一个斜边（参考上图左下角和左上角），如果只有单独一个边框，没有相邻边框，则会显示矩形（参考上图右下角）。

这样我们就可以画出角度为 45 度的**等腰梯形**了。

如果想要画不同角度的梯形，直接改变边框的宽度即可(根据需要组合出自己想要的角度)

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A203.png)

```html
<style>
  div {
    height: 200px;
    width: 200px;
    border-top: 20px solid red;
    border-right: 40px solid blue;
    border-bottom: 60px solid green;
    border-left: 80px solid purple;
  }
</style>
<body>
  <div></div>
</body>
```

## 三、画三角形

上面画梯形我们知道，将 div 宽高其中一项设置为 0 可以得到矩形，如果将 div 宽高全都设置为 0 则可以画出三角形

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A204.png)

```html
<style>
  div {
    height: 0px;
    width: 0px;
    border-top: 100px solid red;
    border-right: 100px solid blue;
    border-bottom: 100px solid green;
    border-left: 100px solid purple;
  }
</style>
<body>
  <div></div>
</body>
```

通过隐藏其余边框和设置边框属性则可以得到多种三角形

**等腰三角形**

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A205.png)

```html
<style>
  div {
    height: 0px;
    width: 0px;
    border-top: 100px solid transparent;
    border-right: 100px solid transparent;
    border-bottom: 100px solid green;
    border-left: 100px solid transparent;
  }
</style>
<body>
  <div></div>
</body>
```

**倾斜三角形**

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A206.png)

```html
<style>
  div {
    height: 0px;
    width: 0px;
    border-top: 100px solid transparent;
    border-right: 200px solid transparent;
    border-bottom: 100px solid green;
    border-left: 100px solid transparent;
  }
</style>
<body>
  <div></div>
</body>
```

**左上三角形**

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A207.png)

```html
<style>
  div {
    height: 0px;
    width: 0px;
    border-top: 100px solid red;
    border-right: 100px solid transparent;
    border-bottom: 100px solid transparent;
    border-left: 100px solid red;
  }
</style>
<body>
  <div></div>
</body>
```

**两个组合三角形**

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/css%E7%94%BB%E4%B8%89%E8%A7%92%E5%BD%A208.png)

```html
<style>
  div {
    height: 0px;
    width: 0px;
    border-top: 100px solid transparent;
    border-right: 100px solid red;
    border-bottom: none;
    border-left: 100px solid red;
  }
</style>
<body>
  <div></div>
</body>
```
