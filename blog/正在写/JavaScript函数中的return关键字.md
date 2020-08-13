## 函数中的return 关键字

```
alert(parseInt(123.456));            //弹出123

   function fn(a,b,c){
       console.log(a+b+c);
   }
   alert(fn(1,2,3));                    //弹出undefined
   
   因为fn()函数没有返回值，只要没有返回值的函数，都返回一个undefined
   
   可通过关键字return返回函数的值。

   return的作用：1.返回值；2.终止程序
   
   function fn(a,b,c){
       console.log(a+b+c);
       return a+b+c;
   }
   alert(fn(1,2,3));                    //弹出6

   什么是返回值？
       将函数处理后的数据，返回到执行语句上，便于其他程序或用户调用或做二次使用

       如果有return，此时fn(1,2,3)==return的返回值
       如果没有return，此时fn(1,2,3)==undefined

   return中止程序之后，return下面的代码不会执行

   不一定所有函数都要有返回值，只有需要返回数据的函数才加return

   return可以返回任何值，包含函数，当返回函数时，如果需要执行返回的函数，可将返回值当成一个函数名，加上一个()即可执行；
   如fn(2)(3)(4);
自定义的函数和系统内置的函数的区别：有没有返回值
	为什么要有返回值
		为了不频繁修改函数，实现封装。
	作用：
		函数内部的处理结果，返回到函数外部进行二次使用
		立即结束函数，一个函数中最多只能执行一次return，return后的内容不执行
		

所有函数都有返回值
	没有return返回值是undefined
	有return返回值是return后的数据
return的应用场景
	功能函数：实现功能，不需要返回值
	处理数据函数：处理数据，需要返回处理后的数据，必须有返回值
reurn实现的闭包
	return 返回的数据可以是函数
```

​		