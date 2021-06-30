---
title: HTML-标签
sidebar: auto
date: 2019-09-14
categories:
  - 前端
tags:
  - html
---

## HTML 标签

HTML 是标记语言，里面的所有功能都是通过标签来实现的，可以说标签就像一个个“砖块”，H5 前端开发工程师就像是建筑工人，用这些“砖块”按照一定规则组合起来建造成网页。

想要造一栋 HTML 大楼，不了解各个标签是不行的。下面就让我们来简单认识这些常用标签。

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/htm5标签元素周期表.png)

## 1、标签的简单介绍

### 1.1 单标签、双标签

单标签：单个出现，以⾃身单个标签标识结束

双标签：成对出现，以自身第二个标签标识结束

### 1.2 ⾏内标签、块级标签、行内块标签

行内标签：可与其他行内元素并列一行；不能设置宽度和高度，高度是行高（line-height：100px；可设置），宽度是内容的总宽度；默认文字会被放在中间显示。例：&lt;a&gt;

块级标签：拥有⾃身宽⾼，通常独⾃占据⼀⾏独占一行；如果不设置宽度，会默认占满父元素的百分之百；可以当做容器包含其他标签。例：&lt;div&gt;

行内块标签：可以设置宽度高度等样式；可以和其他元素并排显示，现在只有 input 标签符合行内块元素；

### 1.3 单⼀标签、组合标签

单⼀标签：单独出现，表示具体的功能或展示具体的内容。

组合标签：配合使⽤，才能产⽣相应的内容与效果。例：

```html
<table>
  <tr>
    <td></td>
  </tr>
</table>
```

### 1.4 标签大小写书写规范

html5 中的标签不区分大小写，都可以识别，不过这里建议标签全部小写。

因为 js 只能识别小写，为了之后对接 js，标签最好全部小写。

## 2、head 中的标签

head 是网页的头部，里面放置的代码是用来对网页进行相关设置

### meat 标签

```html
<meta charset="UTF-8" />
```

在网页中 meat 标签最常用的设置是用来设置字符集，字符集设置错误将会导致网页打开乱码。

### title 标签

```html
<title>网页标题</title>
```

显示在浏览器标签栏

```html
<title></title> 需要写在 <meta charset="UTF-8" /> 标签后 meta
标签设置字符集，若title写在前，则网页运行 title 时还没有设置字符集导致标题乱码。
```

### style 标签

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
```

style 标签是用来在 head 标签中设置 CSS 样式，美化修饰网页。

### script 标签

script 标签可以在其中写入 js 代码

```html
<script>
  var a = 10;
  var b = 20;
  console.log(a + b);
</script>
```

当然也可以通过 script 标签来引入外部的 js 文件

```html
<script src="01.js"></script>
```

### link 标签

```html
<link rel="stylesheet" href="style.CSS" />
```

通过 link 标签可以引入外部的 CSS 样式文件

###

### ico 图标

```html
<link rel="shortcut icon" href=""/images/favicon.ico">
```

在网页标题前引入 ico 图标

## 3、body 中的标签

body 是网页的主体，网站上所能见到的内容基本都在 body 中，大部分标签也都是在 body 中使用。

### h1-h6 标题标签

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

h1-h6 标签是标题标签。数字表示标题的大小，1 最大，6 最小。

### p 段落标签

```html
<p></p>
```

块级元素。段落标签，内部通常放置文本

### span 标签

```html
<span></span>
```

行内元素 。类似 p 标签，span 里同样用来放置文本，。

注意，span 标签可以放在 p 标签内，但 p 标签里不能放 span 标签

### hr 水平线

```html
<hr />
```

hr 标签在网页中产生一条水平线

### del 删除线

```html
<del></del>
```

del 标签中的文字字中间会被划上一条横线

### b 加粗

```html
<b></b>
```

b 标签中的文字会被加粗

### strong 加粗强调

```html
<strong></strong>
```

strong 标签中的文字会被加粗，并且强调

### I 倾斜文本

```html
<i></i>
```

I 标签中的文字会被倾斜，在网页中显示斜体

### em 倾斜强调

```html
<em></em>
```

em 标签中的文字会被倾斜，并且强调

### pre 预格式文本

```html
<pre></pre>
```

pre 标签表示预格式文本。由于在 html 会有多个空格会被合并成一个，回车换行会失效等问题，导致网页布局混乱。

pre 标签内的内容可以原样显示到网页中

###

### br 换行

```html
<br />
```

br 标签表示换行，相当于 enter 回车键

### ul li 无序列表

```html
<ul>
  <li></li>
  <li></li>
</ul>
```

```html
type:属性值:定义了无序列表序号的类型 disc:实心圆 circle:空心圆 aquare:实心方块
none:什么都没有
```

ul li 标签表示无序列表，类似于表格，可以使文字等以清单的方式显示

###

### ol li 有序列表

```html
<ol>
  <li></li>
  <li></li>
</ol>
```

```html
type:属性值:定义有序序号的类型 数字:（默认） a:小写英文字母 A:大写英文字母
i:小写的罗马数字 I:大写的罗马数字
```

ol li 标签表示有序列表，类似于表格，可以时文字等以清单的方式显示，并且会在最前面标注序号，1、2、3、4 等

### img 图片

```html
<img src="./img/01.jpg" alt="图片" />
```

img 标签表示在网页中引用图片

###

### a 超链接

```html
<a href="https://www.cnblogs.com/"></a>
```

a 标签表示在网页中添加超链接，a 标签中点内容就会有超链接效果

### div 盒子

```html
<div></div>
```

div 标签常用于切割划分网页，把网页切割成各个部分，方便网页开发。

### table tr th td 表格标签

```html
<table>
  <tr>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
```

table 标签是在网页中插入表格。tr 表示行，td 表示单元格。表格还常用于网页的布局

### form 标签 & input 标签

```html
<form action=" " method="get">
  <input type="text" placeholder="请输入用户名" />
</form>
```

表单标签：用于收集用户输入的信息，并提交到服务器。

input 标签：可设置为输入框，按钮等

下划线:u

```html
<u></u>
```

上标:sup

```html
<sup></sup>
```

下标:sub

```html
<sub></sub>
```

### 表格：table

```html
<table>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>
```

    table属性：
    	border:边框
    	rules:边框显示规则
    	width:宽度
    	height:高度
    	cellpadding:内边距:边框与内容之间的宽度
    	cellspacing:外边距:单元格与单元格之间的宽度
    表格的行：tr
    	align:
    		设置该行内容的水平对齐方式
    		left/center/right
    	valign:
    		设置该行内容的水平对齐方式
    		top/middle/bottom
    表格的标题：th
    	行标题或者列标题，字体具有加粗效果，放在tr中
    表格的单元格：td
    	align: 水平对齐
    	valign:垂直对齐
    	width:宽度
    	heiht:高度
    	colspan：横向合并
    	rowspan：纵向合并
    注意：
    	每行中指定列的宽度，都是以最宽的决定
    	每行中指定列的高度，都是以最高的决定
    表格的标题：
        标记：
            <caption>标题</caption>
        注意：
            cation一定是紧跟table属性后
            一个表格最多只有一个标题

浮动框架:iframe
在网页中嵌套别的网页

```html
<iframe src="此处是网站地址"></iframe>
```

```html
语法：<iframe
  src="规定在 iframe 中显示的文档的 URL(默认的显示页面)"
  width=""
  height=""
  frameborder="1/0"
  name="iframe名称"
  scrolling="yes/no/auto"
>
</iframe>
```

结构标记
​ HTML5 推出的专门用来布局的一组标记
​ 目的：
​ 取代 div，提升整体代码的可读性和语意性
​ <header></header>与<div id="header"></div>一模一样基本没有区别
常用的结构标记

### header:

```html
<header></header>
```

    定义网页的页眉部分或者其他部分的顶部内容

### aside:

```html
<aside></aside>
```

    定义网页的导航部分

### nav:

```html
<nav></nav>
```

    编写网页的导航部分

### section:

```html
<section></section>
```

    整个网页的主体

### footer:

```html
<footer></footer>
```

    表示网页底部，一般情况下是用户不太关注的部分

### article:

```html
<article></article>
```

用来表示文章内容部分
论坛帖子，微博，说收，朋友圈，新闻等

### flash 插件:

```html
<object>
<embed width="value" height="value" wmode="transparet" src="flash路径"></embed>
</object>
```

### 滚动字幕:

```html
</marquee>
```

多媒体标签

```html
<atudio> </atudio>
```

## 4、实体字符

由于标签字符的特殊性，<、>、空格、等特殊符号。会被浏览器误认成 html 语言的标签，不会在网页中显示。

所以为了在网页中正常使用这些字符则需要用到实体字符

下面介绍一些常用实体字符



| 实体字符 | 字符含义   | 网页中显示效果 |
| -------- | ---------- | -------------- |
| `&nbsp;`   | 空格符号   |                |
| `&lt;`   | 小于号     | <              |
| `&gt;`     | 大于号     | >              |
| `&copy;`   | 版权符号   | @              |
| `&yen;`    | 人民币符号 | ¥              |
| `&amp;`    | 和         | &              |
| `&reg;`    | 注册商标   | ®              |
| `&trade;`  | 商标       | ™              |
| `&times;`  | 乘号       | ×              |
| `&divide;` | 除号       | ÷              |

[实体字符大全](http://www.w3school.com.cn/tags/html_ref_entities.html)