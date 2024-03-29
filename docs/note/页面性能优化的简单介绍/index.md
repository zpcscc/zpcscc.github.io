---
title: 页面性能优化的简单介绍
---

**前言：为什么要进行页面性能优化**

**互联网有一项著名的 8 秒原则。用户在访问 Web 网页时，如果时间超过 8 秒就会感到不耐烦，如果加载需要太长时间，他们就会放弃访问。**

大部分用户希望网页能在 2 秒之内就完成加载。事实上，加载时间每多 1 秒，你就会流失 7%的用户。8 秒并不是准确的 8 秒钟，只是向网站开发者表明了加载时间的重要性。那我们如何优化页面性能，提高页面加载速度呢？这是本文主要要探讨的问题，然而性能优化是个综合性问题，没有标准答案，想要面面俱到罗列出来，并非易事。

本文只是简单介绍了一下页面性能优化有哪些常用方法，给新手普及知识用。也是自我学习的一个过程

## 一、资源压缩与合并

资源压缩主要包括这些方面：

**html 压缩**

**css 压缩**

**js 的压缩和混乱**

**文件合并**

**资源压缩**可以从文件中去掉多余的字符，比如**回车**、**空格**。你在编辑器中写代码的时候，会使用缩进和注释，这些方法无疑会让你的代码简洁而且易读，但它们也会在文档中添加多余的字节，这些字符就是网页中多余的东西，会影响网页的性能。

### 1.html 压缩

html 代码压缩就是压缩这些在文本文件中有意义，但是在 HTML 中不显示的字符，包括**空格**，**制表符**，**换行符**等，还有一些其他意义的字符，如 HTML 注释也可以被压缩。

如何进行 html 压缩：

1. 使用在线网站进行压缩(开发过程中一般不用)
2. nodejs 提供了 html-minifier 工具
3. 后端模板引擎渲染压缩

### 2.css 代码压缩：

css**代码压缩**简单来说就是无效代码删除和 css**语义合并**

如何进行 css 压缩：

1. **使用在线网站进行压缩(开发过程中一般不用)（http://tool.oschina.net/jscompress/）**
2. **使用 html-minifier 工具**
3. **使用 clean-css 对 css 压缩**
4. **书写 CSS 代码时，尽量用简写，写在一起。**

![CSS代码压缩样例](./img/css%E4%BB%A3%E7%A0%81%E5%8E%8B%E7%BC%A9%E6%A0%B7%E4%BE%8B.png)

### 3.js 的压缩和混乱

js 的压缩和混乱主要包括以下这几部分：

1. **无效字符的删除**
2. **剔除注释**
3. **代码语义的缩减和优化**
4. **代码保护(代码逻辑变得混乱，降低代码的可读性，这点很重要)**

代码保护，将某些需要保护的代码转成加密字符，类似于：（%61%6C%65%72%74%28%22%u9ED1%u5BA2%u9632%u7EBF%22%29%3B）加大别人拷贝你代码的难度

如何进行 js 的压缩和混乱

1. **使用在线网站进行压缩(开发过程中一般不用)**
2. **使用 html-minifier**工具\*\*
3. **使用 uglifyjs2 对 js 进行压缩**

其实 css 压缩与 js 的压缩和混乱比 html 压缩收益要大得多，同时 css 代码和 js 代码比 html 代码多得多，通过 css 压缩和 js 压缩带来流量的减少，会非常明显。所以对大公司来说，html 压缩可有可无，但 css 压缩与 js 的压缩和混乱必须要有！

### 4.文件合并

将多个小文件合并为一个文件, 减少网络请求数.类似于雪碧图

![文件合并](./img/%E6%96%87%E4%BB%B6%E5%90%88%E5%B9%B6.png)

从上图可以看出不合并请求有以下缺点：

文件与文件之间有插入的上行请求，增加了 N-1 个网络延迟

压缩合并 css 和 js 可以减少网站 http 请求的次数

## 二、利用浏览器缓存

对于 web 应用来说，缓存是提升页面性能的同时减少服务器压力的利器。

### 1.缓存的分类

#### 1.1 强缓存

**强缓存**：不用请求服务器，直接使用本地的缓存。

#### 1.2 协商缓存

**协商缓存**：浏览器发现本地有资源的副本，但是不太确定要不要使用,不知道内容是否更新，于是去问问服务器。

### 2.缓存的机制

主要过程如下：

![缓存机制](./img/%E7%BC%93%E5%AD%98%E6%9C%BA%E5%88%B6.png)



### 3.用户行为对浏览器缓存的影响

1.地址栏访问，链接跳转是正常用户行为，将会触发浏览器缓存机制；

2.F5 刷新，浏览器会设置 max-age=0，跳过强缓存判断，会进行协商缓存判断；

3.ctrl+F5 刷新，跳过强缓存和协商缓存，直接从服务器拉取资源。

## 三、使用 CDN

大型 Web 应用对速度的追求并没有止步于仅仅利用浏览器缓存，因为浏览器缓存始终只是为了提升二次访问的速度，对于首次访问的加速，我们需要从网络层面进行优化，最常见的手段就是 CDN（Content Delivery Network，内容分发网络）加速。通过将静态资源(例如 javascript，css，图片等等）缓存到离用户很近的相同网络运营商的 CDN 节点上，不但能提升用户的访问速度，还能节省服务器的带宽消耗，降低负载。

![CDN](./img/CDN.png)

### 1.CDN 是怎么做到加速的呢？

其实这是 CDN 服务商在全国各个省份部署计算节点，CDN 加速将网站的内容缓存在网络边缘,不同地区的用户就会访问到离自己最近的相同网络线路上的 CDN 节点，当请求达到 CDN 节点后，节点会判断自己的内容缓存是否有效，如果有效，则立即响应缓存内容给用户，从而加快响应速度。如果 CDN 节点的缓存失效，它会根据服务配置去我们的内容源服务器获取最新的资源响应给用户，并将内容缓存下来以便响应给后续访问的用户。因此，一个地区内只要有一个用户先加载资源，在 CDN 中建立了缓存，该地区的其他后续用户都能因此而受益。
