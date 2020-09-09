---
title: AntDesign-修改组件内部样式
date: 2019-10-22
categories:
  - 开发
tags:
  - antd
---



## 在react中修改组件内部样式

平常我们在使用antd组件时，直接引入使用，我们看不到具体生成的dom结构

此时想要修改antd生成的dom样式怎么办

### 两种情况

#### 1、导入普通css文件，做全局样式更改

1.在浏览器的开发者模式中，查看需要修改的dom结构的class名

2.在style.css样式文件中写入对应要修改的css样式

```css
.ant-btn {
  color:red;
  background-color:#66ccff;
}
```

3.修改好后，将style.css文件导入组件即可

```js
import './style.css'
```



#### 2、react中使用模块化css

1.在浏览器的开发者模式中，查看需要修改的dom结构的class名

2.在style.module.less样式文件中写入对应要修改的样式，记得这里用到是less，且需要在里面加上：global

global里的样式才能生效，修改到对应的dom

```css
.btn {
  :global {
    .ant-btn {
      background:'red'
    }
  }
}
```

3.修改好后，将style.module.css文件导入组件

```js
import styles from './style.module.css';  //导入样式并重命名
import { Modal } from 'antd'

const Components = () => {
  return <Modal className={styles.btn} />
}
// 这样就能修改Modal这个antd组件下，btn按钮的样式了
```

