---
title: Nginx-常用命令
sidebar: auto
date: 2020-09-25
categories:
  - 开发
tags:
  - nginx
---

## nginx 常用命令



### 1、启动nginx

```javascript
1、在nginx安装文件夹下直接双击nginx文件
2、在nginx安装文件夹下启动终端，输入命令：nginx
```

### 2、修改配置后，重新加载nginx

```javascript
nginx -s reload
```

### 3、重新打开日志文件

```javascript
nginx -s reopen
```

### 4、快速停止nginx

```javascript
nginx -s stop	
```

### 5、优雅停止nginx

```
nginx -s quit
```

### 6、查看nginx配置文件是否正确

```javascript
nginx -t

//输出如下字段则表示配置正确
nginx.conf syntax is ok
nginx.conf test is successfu
```

### 7、查看nginx帮助

```
nginx -h
nginx -？
```

### 8、查看nginx版本

```
nginx -v
```

### 9、查看nginx版本及配置信息

```
nginx -V
```

