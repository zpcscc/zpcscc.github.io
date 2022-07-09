---
title: CSS-布局：元素垂直居中
sidebar: auto
date: 2019-10-05
categories:
  - 前端
tags:
  - css
---

本文将依次介绍在不同条件下实现**垂直居中**的多种方法及简单原理

::: tip
下文中说的适用场景只是举了几个简单的例子方便读者理解。实际应用场景太复杂，生搬硬套容易出错。最重要的是掌握各种方法能够实现居中的原理。只要掌握了原理，那么不管问题怎么变都可以根据自己的理解选择合适的方法。
:::

## 一、使用 line-height

### 1.原理

**有行高的元素**，内容会默认显示在行高的**垂直中心处**，通过设置行高等于父元素的高度，可以达到内容在父元素中垂直居中的效果

### 2.实现步骤

**（1）父元素有一个确定的高度**

**（2）在父元素或在子元素中设置 line-height 等于父元素的高度**

### 3.适用场景

**（1）具有行高属性的单行元素**

::: tip
若元素有多行，line-height 用同样的原理也可实现，不过需要根据行数计算且容易出错（若父元素宽度变化影响行数，那么就要重新计算布局），这里不推荐使用 line-height 设置多行居中。
:::

### 4.完整代码展示

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>单行元素垂直居中</title>
    <style>
      #box {
        height: 120px;
        line-height: 120px;
        /*设置成和父元素同高，对子元素父元素设置都有效*/
        border: 2px solid #222222;
      }
    </style>
  </head>
  <body>
    <div id="box">
      <span>单行元素垂直居中</span>
    </div>
  </body>
</html>
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/%E5%8D%95%E8%A1%8C%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.png)

## 二、利用 table-cell 布局

### 1.原理

将子元素转为表格中**单元格**的形式，使用表格属性**vertical-align**实现居中

### 2.实现步骤

**（1）父元素转换为表格类型 display:table;**

**（2）子元素转换为表格单元格类型 display:table-cell;**

**（3）子元素使用单元格居中属性 vertical-align:middle;**

### 3.适用场景

**（1）未知高度单行元素垂直居中**

**（2）未知高度多行元素垂直居中**

**（3）未知高度的块级元素**

### 4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>多行元素垂直居中</title>
    <style>
      #box {
        display: table; /*转换为表格元素*/
        height: 140px;
        border: 2px solid #222222;
      }
      span {
        display: table-cell; /*转换为为table-cell单元格元素*/
        vertical-align: middle; /*设置垂直居中对齐*/
      }
    </style>
  </head>
  <body>
    <div id="box">
      <span
        >多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中
      </span>
    </div>
  </body>
</html>
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/%E5%A4%9A%E8%A1%8C%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.png)

## 三、利用相对定位 relative 和绝对定位 absolute

### 1.原理

使用定位将元素移动到所需要的位置上，将元素**定位到垂直居中的位置**就实现了居中

Tip：注意元素定位是以元素的**某个边**或者**某个角**作为参考，而不是以元素的中心点为参考

例：单个使用，是以**边框**为参考，两个组合使用是以**角**为参考点

（1）**top：**以元素上边框为参考，top：50px；就是元素上边框距离父元素上边框 50px

（2）**right：**以元素右边框为参考，right：50px；就是元素右边框距离父元素右边框 50px

（3）**left**和**top**组合使用：以元素的左上角的点为参考，top：50px；left：50px；表示元素左上角的点距离父元素上边框 50px，距离父元素左边框 50px；

（4）**right**和**bottom**组合使用：以元素的右下角的点为参考，bottom：50px；right：50px；表示元素右下角的点距离父元素下边框 50px，距离父元素右边框 50px；

（5）其他各种组合同理，两个对立方向的属性不能同时组合使用。例如 top 和 bottom 同时使用以 top 为准，bottom 会失效。left 和 right；同时使用的话会以 left 为准 right 会失效。

（6）所以定位 50%是，子元素边框移动到 50%的位置，还需要移动回来子元素一半的宽度，达到真正的居中

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/%E5%AE%9A%E4%BD%8D%E5%B1%85%E4%B8%AD%E5%8E%9F%E7%90%86.png)

### 2.步骤

**（1）先将父元素设置为相对定位 relative**

**（2）将子元素设置为绝对定位 absolute（子绝父相）**

**（3）向下移动子元素，移动距离为父容器高度的一半（50%）**

**（4）通过向上移动子元素的一半宽度（具体 px 值）以达到垂直居中。（通过 margin 实现）**

### 3.适用场景

**（1）已知高度的块级元素垂直居中**

### 4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>已知高度的块级元素垂直居中</title>
    <style>
      #box {
        position: relative;
        height: 200px;
        border: 2px solid #222222;
      }
      .child {
        height: 100px;
        width: 100px;
        background: red;
        position: absolute;
        top: 50%;
        /*设置块级元素上边框距离顶部50%，使元素上边框这条线垂直居中于父元素*/
        margin-top: -50px;
        /*设置元素上边框向上移动元素高度的一半，使元素整体垂直居中*/
      }
    </style>
  </head>
  <body>
    <div id="box">
      <div class="child"></div>
    </div>
  </body>
</html>
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/%E5%9B%BA%E5%AE%9A%E9%AB%98%E5%BA%A6%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.png)

## 四、使用弹性盒子 flex 布局

### 方法一：align-items 属性

### 1.原理

利用布局神器弹性盒子的**align-items**属性进行侧轴方向布局。弹性盒子默认主轴是**左右方向**，侧轴是**上下方向**，设置侧轴上下方向居中。即可达到使子元素垂直居中的效果。也可对子元素使用 align-self 单独设置居中，可以覆盖掉 align-items 属性

### 2.实现步骤

**（1）父元素开启弹性盒子 display:flex;**

**（2）父元素设置 align-items:center;（侧轴方向居中对齐）**

### 3.适用场景

**（1）未知高度的元素垂直居中**

**（2）已知高度的元素垂直居中**

**（3）浮动元素的垂直居中**

### 4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>未知高度元素垂直居中</title>
    <style>
      #box {
        display: flex; /*开启弹性盒子*/
        align-items: center; /*设置侧轴方向居中*/
        border: 1px solid #222222;
        height: 100px;
      }
      .child {
        float: left; /*浮动的元素同样可以居中*/
      }
    </style>
  </head>
  <body>
    <div id="box">
      <div class="child">未知高度的元素垂直居中</div>
    </div>
  </body>
</html>
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/%E6%9C%AA%E7%9F%A5%E9%AB%98%E5%BA%A6%E7%9A%84%E5%85%83%E7%B4%A0%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.png)

### 方法二：justify-content 属性

### 1.原理

利用布局神器弹性盒子的**justify-content**属性进行主轴方向布局。弹性盒子默认主轴是**左右方向**，侧轴是**上下方向**。所以要先用**flex-direction**把主轴方向改为上下方向。再设置主轴居中。即可达到使子元素垂直居中的效果。

### 2.实现步骤

**（1）父元素开启弹性盒子 display:flex;**

**（2）父元素将主轴设置为上下方向 flex-direction: column;**

**（3）父元素设置 justify-content: center;（主轴方向居中对齐）**

### 3.适用场景

**（1）未知高度的元素垂直居中**

**（2）已知高度的元素垂直居中**

**（3）浮动元素的垂直居中**

**（4）多行元素的垂直居中**

### 4.完整代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>多行元素垂直居中</title>
    <style>
      #box {
        height: 140px;
        /*需设置高度，不设置的话默认高度为内容撑起的高度，看不出居中效果*/
        display: flex; /*开启弹性盒子布局*/
        flex-direction: column; /*设置主轴纵向排列*/
        justify-content: center; /*在主轴方向上居中*/
        border: 2px solid #222222;
      }
    </style>
  </head>
  <body>
    <div id="box">
      <span
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quidem
        laudantium quasi, fugit sapiente, culpa at voluptatum neque nemo nobis
        cupiditate assumenda esse aut
      </span>
    </div>
  </body>
</html>
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/flex%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD.png)
