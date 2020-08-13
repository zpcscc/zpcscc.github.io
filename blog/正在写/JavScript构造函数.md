## 构造函数

```
可以构造某件东西的函数
    var str = "123”;             //字面量方式生成
    console.log(str);            //123
    console.log(typeof str);     //string

    var str = new String("123”); //构造函数方式生成
    console.log(str);            //[1,2,3,…]
    console.log(typeof str);     //object

    构造函数只会产生对象，构造函数是用来构造对象的函数

    构造函数用来构造对象，对象被用来编程，面向对象向编程

    一种新的调用函数的方式：new调用


构造函数，不是一种函数，是函数的一种执行方式
	通过关键字 new 执行构造函数
		几乎所有函数都能通过new执行
		但通常用new执行的函数，需要特殊定义
	构造
		是用来创造对象的，
		构造函数：机器，批量产出相同功能，不同特点的机器
	基本构造函数
		内置的构造的函数
			所有首字母大写的函数，类似Nummber()
			创建数据
				var n = new Number("12");
				var s = new String("s");
			创建任何数据类型都增加了一种方式
				构造函数创建
					字符：var s = new String();
                    自变量方式创建
					字符：vat s = "helllo"
		只要被new执行，那么返回值，必然是对象，没有例外
			如果默认没有写return，new会自动给你写个return，返回对象。
		js中万物是对象
```

​				
