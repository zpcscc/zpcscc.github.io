---
title: CSS-布局：元素水平垂直居中
date: 2019-11-03
categories:
  - 前端
tags:
  - css
---

本文将依次介绍在不同条件下实现**水平垂直居中**的多种方法

**水平垂直居中**是在写网页时经常会用到的需求，在上两篇博客中，分别介绍了水平居中和垂直居中的方法。本文的水平垂直居中就是将之前的水平居中和垂直居中用到的方法综合起来。用到的原理都是一样的。相信掌握水平居中和垂直居中的 方法后，就能自己总结如何实现水平垂直居中

::: tip
下文中说的适用场景只是举了几个简单的例子方便读者理解。实际应用场景太复杂，生搬硬套容易出错。最重要的是掌握各种方法能够实现居中的原理。只要掌握了原理，那么不管问题怎么变都可以根据自己的理解选择合适的方法。
:::

## 一、使用 text-algin 和 line-height

### 1.原理

使用 text-algin 属性的 center 值，实现水平居中。

使用 line-height 属性，使其的值等于父元素的高度，实现垂直居中

两者综合实现水平垂直居中

### 2.适用场景

（1）通常用于可以设置行高的元素上

### 3.实现步骤

（1）在父元素上设置文本水平居中

```css
text-algin: center;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813145853.png)

（2）在子元素上设置行高等于父元素高度

```css
line-height: 100px;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813145908.png)

4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>水平垂直居中</title>
    <style>
      .box {
        width: 300px;
        height: 100px;
        border: 1px solid #222222;
        text-align: center; /*设置水平居中*/
      }
      p {
        line-height: 100px; /*设置行高等于父元素高度实现垂直居中*/
        margin: 0; /*清除外边距的影响*/
      }
    </style>
  </head>
  <body>
    <div class="box">
      <p>水平垂直居中</p>
    </div>
  </body>
</html>
```

## 二、使用 table 布局

### 1.原理

将元素转为 table 类型。利用 vertical-align 属性进行垂直居中，子元素再使用 margin 进行水平居中最终实现水平垂直居中（vertical-algin 居中需要有参考物，否则不能实现居中。在表单元格中可以直接设置）

### 2.适用场景

（1）有宽度的子元素

### 3.实现步骤

（1）父元素将类型转换为 table-cell

```css
display: table-cell;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813145932.png)

（2）父元素设置 vertical-align 实现垂直居中

```css
vertical-align: middle;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813152359.png)

（3）子元素设置 margin 属性

```css
margin: 0 auto;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813152419.png)

### 4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>水平垂直居中</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
      .box {
        width: 300px;
        height: 100px;
        border: 1px solid #333;
        display: table-cell;
        vertical-align: middle;
      }
      .box .child {
        width: 50px;
        height: 50px;
        background: red;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="child"></div>
    </div>
  </body>
</html>
```

## 三、使用定位

### 方法一：使用 fixed+margin

### 1.原理

通过设置上下左右的定位属性，然后设置 margin 上下左右都为 auto 实现居中

### 2.适用场景

（1）未知大小元素在浏览器中居中

### 3.实现步骤

（1）子元素设置固定定位（没有变化）

```css
position: fixed;
```

（2）子元素设置上下左右的定位值为 0（没有变化）

```css
left: 0;
right: 0;
top: 0;
bottom: 0;
```

（3）子元素设置 margin

```css
margin: auto;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813152438.png)

### 4.完整代码

示例 1：未知大小的元素在浏览器可视窗口中水平居中

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>未知大小的元素在浏览器可视窗口中水平居中</title>
    <style>
      img {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <img src="../images/img13.jpg" alt="" />
    </div>
  </body>
</html>
```

示例 2：已知大小的元素在浏览器可视窗口中水平居中

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>已知大小的元素在浏览器可视窗口中水平居中</title>
    <style>
      .box {
        width: 100px;
        height: 200px;
        background: #f00;
        position: fixed;
        left: 50%;
        top: 50%;
        margin: -100px 0 0 -50px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

### 方法二：使用 relative + absolute

### 1.原理

通过父元素设置相对定位，子元素设置绝对定位。利用 top 值和 left 值进行居中移动，再使用**margin**或**transform**调整位置

Tip：注意元素定位是以元素的**某个边**或者**某个角**作为参考，而不是以元素的中心点为参考

例：单个使用，是以**边框**为参考，两个组合使用是以**角**为参考点

（1）**top：**以元素上边框为参考，top：50px；就是元素上边框距离父元素上边框 50px

（2）**right：**以元素右边框为参考，right：50px；就是元素右边框距离父元素右边框 50px

（3）**left**和**top**组合使用：以元素的左上角的点为参考，top：50px；left：50px；表示元素左上角的点距离父元素上边框 50px，距离父元素左边框 50px；

（4）**right**和**bottom**组合使用：以元素的右下角的点为参考，bottom：50px；right：50px；表示元素右下角的点距离父元素下边框 50px，距离父元素右边框 50px；

（5）其他各种组合同理，两个对立方向的属性不能同时组合使用。例如 top 和 bottom 同时使用**以 top 为准**，bottom 会失效。left 和 right；同时使用的话会**以 left 为准**，right 会失效。

（6）所以 top 和 left 定位 50%，是子元素边框或某个角移动到 50%的位置，还需要移动回来子元素自身一半的长度，达到真正的居中

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813152534.png)

### 2.适用场景

（1）已知大小元素在父元素中居中（margin 属性）

（2）未知大小元素在父元素中居中（transform 属性，有兼容问题）

（3）浮动元素居中

### 3.实现步骤

（1）先将父元素设置为相对定位 relative（无变化）

```css
position: relative;
```

（2）将子元素设置为绝对定位 absolute（子绝父相）（无变化）

```css
position: absolute;
```

（3）向右移动子元素，向下移动子元素，移动距离为父容器的一半（50%）

```css
top: 50%;
left: 50%;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813152557.png)

tip：此时元素的左上角在父元素的中心点

（4）通过向左和向上移动子元素的长度的一半使子元素整体水平居中。

```css
/*margin实现*/
margin: -25px 0 0 -25px;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813152619.png)

```css
/*transform实现*/
transform: translate(-50%, -50%);
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813152637.png)

### 4.完整代码

示例 1：已知大小元素在父元素中水平垂直居中（margin 属性）

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>已知大小元素在父元素中水平垂直居中</title>
    <style>
      .box {
        width: 300px;
        height: 200px;
        border: 1px solid #333333;
        position: relative;
      }
      .box .child {
        width: 50px;
        height: 50px;
        background: #222222;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -25px 0 0 -25px;
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="child"></div>
    </div>
  </body>
</html>
```

示例 2：未知大小元素在父元素中水平垂直居中（transform 属性）

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>未知大小元素在父元素中水平垂直居中</title>
    <style>
      .box {
        width: 300px;
        height: 200px;
        border: 1px solid #333333;
        position: relative;
      }
      .box .child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <div class="box">
      <div class="child">我是transform居中</div>
    </div>
  </body>
</html>
```

## 四、弹性盒子 flex 布局

### 方法一：justify-content+align-items

### 1.原理

css3 中的弹性盒子是布局神器，并且可达到某些自适应变化的效果。利用 flex 布局，其中**justify-content** 用于设置或检索弹性盒子元素在主轴（默认左右横轴）方向上的对齐方式；而**align-items**属性定义 flex 子项在 flex 容器的当前行的侧轴（默认上下纵轴）方向上的对齐方式。不能兼容低版本的 IE 浏览器。

### 2.适用场景

（1）已知元素大小居中

（2）未知元素大小居中

（3）多个元素同时居中

### 3.实现步骤

（1）父元素开启弹性盒子

```css
display: flex;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813153239.png)

（2）父元素设置主轴居中（对子元素生效）

```css
justify-content: center;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813153254.png)

（3）父元素设置侧轴居中（对子元素生效）

```css
align-items: center;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813153315.png)

### 4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>未知大小元素在父元素中水平垂直居中</title>
    <style>
      .box {
        height: 100px;
        width: 200px;
        border: 1px solid #222222;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <div class="child">flex居中</div>
    </div>
  </body>
</html>
```

### 方法二：flex/grid 与 margin:auto (最简单写法)

### 1.原理

父元素开启弹性盒子布局或者网格布局，之后子元素利用 margin 的自动值，实现居中（不能兼容低版本的 IE 浏览）

### 2.适用场景

（1）未知元素大小居中

（2）已知元素大小居中

### 3.实现步骤

（1）给父元素开启弹性盒子布局或者网格布局

```css
/*开启弹性盒子布局*/
display: flex;
/*开启网格布局*/
display: gird;
```

（2）子元素设置 margin 值实现居中

```CSS
marign：auto;
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813153333.png)

### 4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>未知大小元素在父元素中水平垂直居中</title>
    <style>
      .box {
        height: 100px;
        width: 200px;
        border: 1px solid #222222;
        /* display: flex; */
        display: grid;
      }
      .child {
        margin: auto;
      }
    </style>
  </head>

  <body>
    <div class="box">
      <div class="child">flex或gird居中</div>
    </div>
  </body>
</html>
```
