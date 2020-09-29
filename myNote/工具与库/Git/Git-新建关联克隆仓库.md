---
title: Git-新建关联克隆仓库
sidebar: auto
date: 2020-08-10
categories:
  - 开发
tags:
  - git
---


## 一、创建本地仓库

### 使用终端进入当前需要新建仓库的文件夹，在当前需要上传代码的文件夹内创建版本库

```javascript
git init
//创建后会在当前文件夹生成.git文件
```

### 将代码 添加到暂存区

```javascript
git add readme.md //将readme.md文件添加到暂存区中
```

### 一次性添加多个文件到暂存区

```javascript
git add a.txt b.txt c.txt text/d.txt	//选择添加哪些代码
git add .	//添加所有文件
```

### 查看 git 当前状态

```javascript
git stutas
```

```javascript
如果代码更改并没有添加到暂存区，会显示红色部分，
modified：   readme.md   //红色的
如果更改代码添加到暂存区，会显示绿色
new file：	readme.me   //绿色的
```

### 将暂存区的代码上传到版本库

```javascript
git commit -m '引号内是本次修改的备注'	//提交代码到版本库
如果是第一次安装使用git，此处会让你配置用户信息
```

### 配置用户 git 用户信息

```javascript
git config --global user.name '你的github用户名'
git config --global user.email '你的github登录邮箱'
```

## 二、本地关联到远程仓库

```javascript
创建远程仓库，选择SSH，，不建议用https。关联本地的仓库与远程的仓库。只需要关联一次
```

### 关联远程地址

```javascript
git remote add origin + 仓库地址	//仓库地址建议使用ssh
```

### 上传本地仓库的代码到远程仓库，如果是第一次上传到远程仓库

```javascript
git add .
git commit -m "本地提交的备注"
git push origin -u master	//第一次上传
git push origin master		//不是第一次上传，更新数据
```

因为我们使用的是 SSH，第一次提交代码的时候会提示要配置秘钥

第 1 步：创建 SSH Key。在用户主目录下，看看有没有.ssh 目录，如果有，再看看这个目录下有没有 id_rsa 和 id_rsa.pub 这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开（Windows 下打开 Git Bash）,一直敲回车即可，创建 SSH Key：

### 配置 SSH 秘钥

```javascript
ssh-keygen -t rsa -C "你的github邮箱"
```

第 2 步：打开.ssh/id_rsa.pub 这个文件，复制里面的内容

第 3 步：打开 github 的网站，找到设置，选择 SSH 公钥，标题自己写，内容即为第 2 步中复制的内容，需要输入你的码 github 的密码，这一次以后，本台电脑上传代码到该组织再也不用输入密码了

## 三、项目组成员克隆项目，提交代码

```javascript
git clone + 地址  //建议使用ssh的地址
```

### 项目组成员提交本地代码与拉取远程代码

拉取远程代码前需要本地 commit 一次，用于保存本地修改的代码到本地仓库里（不用 push）
再 pull 拉取远程代码。直接 pull 拉取远程代码可能报错或者丢失本地修改的代码

```javascript
//先commit本地代码
git add .
git commit -m "提交本次修改的内容"
//再拉取远程代码
git pull origin master
//拉取远程代码后可能会有代码合并的冲突，手动处理冲突。冲突处理完成后，可以进行push提交你本次修改的代码
git push origin master
```
