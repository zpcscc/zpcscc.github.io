---
title: JavaScript-三大结构
sidebar: auto
date: 2019-12-04
categories:
  - 前端
tags:
  - JavaScript
---

## 一、三大结构

 **顺序结构**

 自上而下，逐行执行，先来后到，相同语句，后面的覆盖前面的

 **选择分支结构**

 多条路径，根据不同条件，只执行其中的一条或选择性的执行多条

 **循环结构**

 重复执行某些代码，代替某些重复性操作，减少代码冗余，提升效率

## 二、选择分支结构

### 1.单分支结构

 两条路径二选一，做或者不做，有或者没有，执行或不执行；

#### （1）if 判断语句

```javascript
//语法结构：
if(){}
    if	//语句名
    ()	//是否执行的条件，true 或 false
    {}	//执行的内容
//例：
if(true){
   console.log("hello");//"hello"---if括号中是true则输出hello，若为false则不输出
}
```

### 2.双分支结构

 有两个选项，两者必定执行一个

#### （1）if-else 判断语句

```javascript
//当条件判断为true时，执行花括号内的语句，如果条件为假false，跳过花括号内的语句执行else里的内容
if(条件){
    执行语句1，条件为真时执行
}else{
	执行语句2，条件为假时执行
}
```

#### （2）if 条件中的特殊情况

##### 1）常规情况

```javascript
通常if的括号中填写一个判断语句，判断是真还是假
if()括号里面的东西我们通常也叫它逻辑点，判断点
当括号内的内容为true时真，为false时假，true或false是布尔值（boolean）代表真和假，需要通过逻辑运算符得到
```

##### 2）特殊情况

```javascript
先来看一个例题
if(1){ //括号内 填写数字"1"会发生什么
    console.log("会输出么？"); //会输出吗？---会在控制台输出内容
}

数字1是数值型，不是布尔值，更不是true为什么会执行花括号内的语句了呢？
	在一些特定的情况下，计算机会进行一些隐式转换，他和强制类型转换不一样，他不需要你做什么，会自动对数据类型进行转换
    在运算中，if(小括号)中的语句会发生隐式类型转换

//if隐式转换例题
var a = "1",b = 2;
console.log(a + b);//12---+号进行字符串拼接，拼成12，而不是进行数值运算等于3
"+"号有两种含义：
    1、"+"号两边都是数字：此时是数学中的"+"号运算符，将两个数字相加，进行数值运算
    2、"+"号两边出现一个或以上个字符：此时是字符串的拼接
	并且优先进行字符串拼接，所以在检测到+号左右两边只要存在字符串的时候，会自动将另一边不是字符串的数据，转成字符串，再进行字符串拼接操作（字符串拼接就是将"+"号两边的内容完整的不做任何修改的前后接在一起）

注意：除了+号有两层意义为外
	"-*/%"号只有数学意义，所以当进行"-*/%"的时候，
    默认将运算符两边的数据类型隐式转换成数字类型再进行运算

那么如果想要进行相加运算，又不想被"+"号隐式转换为字符怎么办。
方法：
var a = "1",b = 2;
console.log(a + b);//12---默认进行字符串拼接输出字符串"12"
console.log((a-0) + b );//3---先通-0操作将字符转换为数字，再进行相加，输出数值3
```

##### 3）if 中的隐式类型转换

```javascript
if()中只需要布尔值，那么在if判断中，会把括号内所有的数据类型，都隐式转换成布尔型,任何类型最终都被转成布尔类型
	数字：非0为true，0为false
	字符：非空为true，空为false
	对象：在任何时候都为true
	数组：在任何时候都为true，数组也是对象的一种
	函数：在任何时候都为true，函数也是特殊的对象
	NaN：为false
	undefined：为false
	null：为false
isNaN()：
	判断是否为NaN可以间接判断是否为数字，返回为true时为NaN不是数字，返回为false时是数字
```

### 3.多分支结构

至少有两个或以上，根据条件执行其中一条或多条语句

#### （1)多个 if(){}else{}嵌套使用

```javascript
if (true) {
  console.log("hello");
} else {
  if (true) {
    console.log("hello");
  } else {
    console.log("world");
  }
}
或者;
if (true) {
  console.log("hello1");
} else if (true) {
  console.log("hello2");
} else if (true) {
  console.log("hello3");
} else if (true) {
  console.log("hello4");
}
```

#### （2）使用 switch(){}语句

```javascript
系统提供的语句
switch(){}
switch		语句名
    ()		要判断的值
    {}		执行语句，所有的分支路径都放在一个花括号内
    case	匹配（）内的值则执行，不匹配则往下找，找到执行，都没找到输出default的内容

案例：输入数字，判断后输出星期几
switch(n){
    case 1:console.log("星期一");break;
    case 2:console.log("星期二");break;
    case 3:console.log("星期三");break;
    case 4:console.log("星期四");break;
    case 5:console.log("星期五");break;
    case 6:console.log("星期六");break;
    case 7:console.log("星期七");break;
    default:console.log("请输入1-7之间的数字");
}
```

#### （3）switch 的注意事项

```javascript
case的穿透特性：
	在一个switch中，只会进行一次case判断，如果判断成功，后面的case则不会判断全部执行
阻止case穿透
	使用关键字break;可以跳出当前循环，后面的都不执行

switch和if-else的区别
	switch只能判断具体的值，不能判断范围，不会进行隐式转换
	if else可以判断范围
```

## 三、循环结构

### 1.while 循环

```javascript
while(){}
    while	//语句名
    ()		//执行条件、判断调价
    {}		//执行语句循环体
//例：
var i = 0；
while(i<10){//当括号内的条件为真时，会一直执行
    console.log(i);//输出0-9，十个数字
    i++;//改变计数器
}
//表示重复执行10次
//注意：为避免死循环，一定要在循环体内 改变 条件中使用变量的值-改变计数器。
//通常while被用在不确定执行次数的循环中，循环体内设置if判断，满足条件使用break结束循环，否则一直循环
```

### 2.do-while 循环

```javascript
do{}while(){}
    do		语句名
    {}		do的执行语句
    while	语句名2
    ()		执行条件
    {}		while的执行语句

do{
    console.log("do的执行语句");
    i++;//改变计数器
}while(i<10){
    console.log("while的执行语句");
}
//条件为true时，会执行do后面的语句
//条件为false时，会执行一次while后面的语句
//注意：do-while的改变计数器要鞋子啊do语句中，否则会造成死循环
do-while和while的区别
    do-while任何情况下都比while多执行一次（do-while无论真假都会执行一次while里的语句）
    do-while相对于while结构紧密些
```

### 3.for 循环

```javascript
for(){}
    for		语句名
    ()		条件组
    {}		循环体
for(var i = 0; i < 10; i++){
    console.log(i);//打印0-9。共十个数字
}

for循环括号内的内容
var i=0;	//定义循环开始时计数器的初始值
i<10;		//设置停止循环的条件，满足条件执行循环，不满足条件结束循环
i++		//计数器加一（这条语句是在循环体内容结束后才执行）
//注意：上面的三个内容必须用分号“;”隔开，否则报错

for循环是最长使用的循环，还可进行for循环嵌套
for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
        console.log(i+j);
    }
}
```

### 4.死循环

```
无法靠自身控制结束的循环，称为死循环
不知道要循环几次的问题，利用死循环的原理，每次判断一个条件，直到满足条件，利用break跳出循环
通常使用while来进行死循环
```

### 5.continue 关键字 break 关键字

```javascript
continue和break都是用来控制循环结构的，主要是用来停止循环。
控制关键字：控制循环的执行或停止
    break:结束循环语句，直接跳出当前循环语句，后面所有的下一次循环都不执行。
    continue:表示跳过当前所在的本次循环（continue下面的语句不执行跳过），下一次循环还会正常执行
```
