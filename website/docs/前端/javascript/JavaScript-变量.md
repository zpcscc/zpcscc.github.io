---
title: JavaScript-变量
sidebar: auto
date: 2020-01-20
categories:
  - 前端
tags:
  - JavaScript
---

## 1.变量的概念

```
变量来源于数学，是计算机语言中能储存计算结果或能表示值抽象概念。
```

## 2.声明关键字：**var**

```javascript
var a = 10 //将数字10赋值给变量a
//声明变量以“＝”为区分，左边为变量名（被赋值），右边为存放进变量中的内容（给变量赋值）。
//注意：JS中的“＝”号，和数学中的“＝”不一样，在JS中“＝”的作用是赋值。
//Tip：声明一串变量时可以这么写，var a=1,b=2,c=3;(但是不推荐初学者这么用，因为这样的声明方式会导致注释不明确)
```

## 3.变量的注意事项

```
声明一定要加关键字：var
声明尽量不要 var a=b=10;//这样会导致只有c被声明了，b没有被声明
	相当于
		var a;
		b = 10;//b前没有加关键字var，在严格模式下会报错。普通模式下，会变成全局变量。
		a = b;
严格模式下不声明直接打印会报错
报错会阻塞程序，之后的程序不会运行
var 声明变量的底层原理：我们所写的程序运行在内存中，当我们使用关键字var 声明一个变量的时候，计算机会从内存中划分一个空间，为我们存放不同类型的内容做准备。
```

## 4.变量的命名规则

因为存放在变量中的数据是放在计算机的内存中的，计算机只识别 0 和 1，所以需要对不同类型的数据进行转义，转义的结果会导致所需空间不同，所以 JS 中分成很多种数据类型，以便计算机储存时使用。
​ 变量的名字 就像 人的名字一样，不能乱起。
​ 你的代码不是只有你一个人看，变量既然是名字，那就这个名字就要有特殊的意义

```javascript
(1)必须使用 字母、_ 、$ 开头
(2)最好语义化，看其名知其意，使用数据类型的首字母做前缀 如下图：
(3)不允许使用关键字和保留字（例，typeof，var）
	关键字：系统定义的功能
	保留字：系统将来可能定义功能
(4)变量名由多个单词组成，要使用驼峰式命名法
	大驼峰：从第一个单词的首字母开始大写---UserName
	小驼峰：从第二个单词的首字母开始大写---userName
```

![](https://cdn.jsdelivr.net/gh/dxsixpc/myImg@master/img/20200813183021.png)

## **常见关键字：**

以下这些关键字用于执行特定操作等。按照规则，关键字也是语言保留的，不能用做标识符。

|   break    |    do    | instanceof | typeof |
| :--------: | :------: | :--------: | :----: |
|    case    |   else   |    new     |  var   |
|   catch    | finally  |   return   |  void  |
|  continue  |   for    |   switch   | while  |
| debugger\* | function |    this    |  with  |
|  default   |    if    |   throw    | delete |
|     in     |   try    |            |        |

## **保留字：**未来可能做为关键字的存在

| abstract |    enum    |    int    |    short     |
| :------: | :--------: | :-------: | :----------: |
| boolean  |   export   | interface |    static    |
|   byte   |  extends   |   long    |    super     |
|   char   |   final    |  native   | synchronized |
|  class   |   float    |  package  |    throws    |
|  const   |    goto    |  private  |  transient   |
| debugger | implements | protected |   volatile   |
|  double  |   import   |  public   |              |
