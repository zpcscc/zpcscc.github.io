---
title: package包版本前符号含义
---

### 1、`version`

```
必须匹配某个版本
如：1.1.2，表示必须依赖1.1.2版
```

### 2、`>version`

```
必须大于某个版本
如：>1.1.2，表示必须大于1.1.2版
```

### 3、`>=version`

```
可大于或等于某个版本
如：>=1.1.2，表示可以等于1.1.2，也可以大于1.1.2版本
```

### 4、`<version`

```
必须小于某个版本 
如：<1.1.2，表示必须小于1.1.2版本
```

### 5、`<=version`

```
可以小于或等于某个版本
如：<=1.1.2，表示可以等于1.1.2，也可以小于1.1.2版本
```

### 6、`~version`

```
大概匹配某个版本
如果minor版本号指定了，那么minor版本号不变，而patch版本号任意
如果minor和patch版本号未指定，那么minor和patch版本号任意
如：~1.1.2，表示>=1.1.2 <1.2.0，可以是1.1.2，1.1.3，.....，1.1.n 
如：~1.1，表示>=1.1.0 <1.2.0，可以是同上
如：~1，表示>=1.0.0<2.0.0，
可以是1.0.0，1.0.1，.....，1.1.n，1.2.n，.....，1.n.n
```

### 7、`^version`

```
兼容某个版本
版本号中最左边的非0数字的右侧可以任意
如果缺少某个版本号，则这个版本号的位置可以任意
如：^1.1.2 ，表示>=1.1.2<2.0.0，
可以是1.1.2，1.1.3，.....，1.1.n，1.2.n，.....，1.n.n
如：^0.2.3 ，表示>=0.2.3 <0.3.0，
可以是0.2.3，0.2.4，.....，0.2.n
如：^0.0，表示 >=0.0.0 <0.1.0，
可以是0.0.0，0.0.1，.....，0.0.n
```

### 8、`x-range`

```
x的位置表示任意版本
如：1.2.x，表示可以1.2.0，1.2.1，.....，1.2.n
```

### 9、`*-range`

```
任意版本，""也表示任意版本
如：*，表示>=0.0.0的任意版本
```

### 10、`version1-version2`

```
大于等于version1，小于等于version2
如：1.1.2 - 1.3.1，表示包括1.1.2和1.3.1以及他们件的任意版本
```

### 11、`range1 || range2`

```
满足range1或者满足range2，可以多个范围
如：<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0，
表示满足这3个范围的版本都可以
```



