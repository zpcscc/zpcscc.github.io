---
title: macOS-忽略系统更新
sidebar: auto
date: 2020-9-29
categories:
  - 其他
tags:
  - mac
---

## macOS 关闭系统更新



#### 打开mac终端，根据需求输入如下命令



### 1、忽略大版本更新

```javascript
sudo softwareupdate --ignore "此处填系统大版本名称"
// 例：
sudo softwareupdate --ignore "macOS Catalina"
// 输入命令后按回车，会提示输入开机密码(输入密码时，不会显示你输入的密码)。
// 输入完成后按回车即可
```

### 2、忽略小版本更新

```javascript
sudo softwareupdate --ignore "此处填具体想要忽略的小版本号"
// 例：
sudo softwareupdate --ignore "macOS Catalina 10.15.7 Update"
```

### 3、关闭更新小红点提示

```javascript
// 两行命令
defaults write com.apple.systempreferences AttentionPrefBundleIDs 0
// 第一行输入完成后点击回车
killall Dock
// 第二行输入完成后点击回车，此时小红点将会消失
```

### 4、恢复系统更新

```javascript
// 取消忽略更新，恢复正常的系统更新
sudo softwareupdate --reset-ignored
defaults write com.apple.systempreferences AttentionPrefBundleIDs 0
```

