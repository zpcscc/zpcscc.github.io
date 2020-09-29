---
title: gitbook文档管理
sidebar: auto
date: 2020-08-12
categories:
  - 开发
tags:
  - tools
---

## 一、全局安装 gitbook

```javascript
npm install -g gitbook-cli
```

## 二、创建 gitbook

```javascript
gitbook init
```

## 三、配置

执行完后，你会看到多了两个文件 —— README.md 和 SUMMARY.md，它们的作用如下所示：

> README.md —— 书籍的介绍写在这个文件里

> SUMMARY.md —— 书籍的目录结构在这里配置

在 SUMMARY.md 中编辑目录,格式如下:

```javascript
[标题名](对应文件的路径)
例：
	[基本介绍](./README.md)
```

## 四、使用

### 1.标题目录设置好后执行

```javascript
gitbook serve
```

### 2.执行完成后会自动打包生成项目

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/gitbook01.png)

直接打开给出的本地项目网址 http://localhost:4000 即可在浏览器中看到生成的笔记

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/gitbook02.png)

## 五、设置可折叠目录

### 1.在项目根目录下创建 book.json 文件

### 2.在 book.json 文件中写入

```javascript
{
    "plugins":["expandable-chapters"]
}
```

### 3.在 SUMMARY.md 文件中配置好层级结构

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/gitbook03.png)

### 4.保存后在根目录执行

```javascript
gitbook serve
```

### 5.此时重新打开页面则会发现目录有了层级结构

 可以收起或展开目录

![](https://cdn.jsdelivr.net/gh/dxsixpc/myimg@master/img/gitbook04.png)
