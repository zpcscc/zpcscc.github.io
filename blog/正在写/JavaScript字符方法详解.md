# JavaScript字符方法详解

##### 当我刚开始编写[JavaScript](http://www.cnblogs.com/magetu/category/415280.html)时候，遇到一些要处理的问题时我发现自己经常要谷歌搜索，或使用[Mozilla的参考](https://developer.mozilla.org/en/JavaScript/Reference)，以找到这些确切的语法和参 数的定义与字符串操作的方法。好像高手都是这样过来的，

##### 几年编程下来，我积累了大量的有用信息，所以今天的这篇文章就分享几年以来总结的一些最常见和最有用的字符串相关的方法的例子和简要说明。便于程序员用于快速参考。当然，最有经验的开发人员对这些操作很熟悉，但我认为这是一个很好的方法帮助初学者理解这些函数，他可以帮助你使用简单的语法。完成复杂的操作，

| charAt()            | 返回指定索引位置的字符                                       |
| ------------------- | ------------------------------------------------------------ |
| charCodeAt()        | 返回指定索引位置字符的 Unicode 值                            |
| concat()            | 连接两个或多个字符串，返回连接后的字符串                     |
| fromCharCode()      | 将 Unicode 转换为字符串                                      |
| indexOf()           | 返回字符串中检索指定字符第一次出现的位置                     |
| lastIndexOf()       | 返回字符串中检索指定字符最后一次出现的位置                   |
| localeCompare()     | 用本地特定的顺序来比较两个字符串                             |
| match()             | 找到一个或多个正则表达式的匹配                               |
| replace()           | 替换与正则表达式匹配的子串                                   |
| search()            | 检索与正则表达式相匹配的值                                   |
| slice()             | 提取字符串的片断，并在新的字符串中返回被提取的部分           |
| split()             | 把字符串分割为子字符串数组                                   |
| substr()            | 从起始索引号提取字符串中指定数目的字符                       |
| substring()         | 提取字符串中两个指定的索引号之间的字符                       |
| toLocaleLowerCase() | 根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
| toLocaleUpperCase() | 根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射 |
| toLowerCase()       | 把字符串转换为小写                                           |
| toString()          | 返回字符串对象值                                             |
| toUpperCase()       | 把字符串转换为大写                                           |
| trim()              | 移除字符串首尾空白                                           |
| valueOf()           | 返回某个字符串对象的原始值                                   |

| 方法                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [charAt()](https://www.runoob.com/jsref/jsref-charat.html)   | 返回在指定位置的字符。                                       |
| [charCodeAt()](https://www.runoob.com/jsref/jsref-charcodeat.html) | 返回在指定的位置的字符的 Unicode 编码。                      |
| [concat()](https://www.runoob.com/jsref/jsref-concat-string.html) | 连接两个或更多字符串，并返回新的字符串。                     |
| [fromCharCode()](https://www.runoob.com/jsref/jsref-fromcharcode.html) | 将 Unicode 编码转为字符。                                    |
| [indexOf()](https://www.runoob.com/jsref/jsref-indexof.html) | 返回某个指定的字符串值在字符串中首次出现的位置。             |
| [includes()](https://www.runoob.com/jsref/jsref-string-includes.html) | 查找字符串中是否包含指定的子字符串。                         |
| [lastIndexOf()](https://www.runoob.com/jsref/jsref-lastindexof.html) | 从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。 |
| [match()](https://www.runoob.com/jsref/jsref-match.html)     | 查找找到一个或多个正则表达式的匹配。                         |
| [ repeat()](https://www.runoob.com/jsref/jsref-repeat.html)  | 复制字符串指定次数，并将它们连接在一起返回。                 |
| [replace()](https://www.runoob.com/jsref/jsref-replace.html) | 在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。    |
| [search()](https://www.runoob.com/jsref/jsref-search.html)   | 查找与正则表达式相匹配的值。                                 |
| [slice()](https://www.runoob.com/jsref/jsref-slice-string.html) | 提取字符串的片断，并在新的字符串中返回被提取的部分。         |
| [split()](https://www.runoob.com/jsref/jsref-split.html)     | 把字符串分割为字符串数组。                                   |
| [startsWith()](https://www.runoob.com/jsref/jsref-startswith.html) | 查看字符串是否以指定的子字符串开头。                         |
| [substr()](https://www.runoob.com/jsref/jsref-substr.html)   | 从起始索引号提取字符串中指定数目的字符。                     |
| [substring()](https://www.runoob.com/jsref/jsref-substring.html) | 提取字符串中两个指定的索引号之间的字符。                     |
| [toLowerCase()](https://www.runoob.com/jsref/jsref-tolowercase.html) | 把字符串转换为小写。                                         |
| [toUpperCase()](https://www.runoob.com/jsref/jsref-touppercase.html) | 把字符串转换为大写。                                         |
| [trim()](https://www.runoob.com/jsref/jsref-trim.html)       | 去除字符串两边的空白                                         |
| [ toLocaleLowerCase()](https://www.runoob.com/jsref/jsref-tolocalelowercase.html) | 根据本地主机的语言环境把字符串转换为小写。                   |
| [ toLocaleUpperCase()](https://www.runoob.com/jsref/jsref-tolocaleuppercase.html) | 根据本地主机的语言环境把字符串转换为大写。                   |
| [valueOf()](https://www.runoob.com/jsref/jsref-valueof-string.html) | 返回某个字符串对象的原始值。                                 |
| [ toString()](https://www.runoob.com/jsref/jsref-tostring.html) | 返回一个字符串。                                             |



## 转换字符串

你可以转换一个数字，布尔值，或一个字符串的对象：

```
1 var myNumber = 24; // 24
2 var myString = myNumber.toString(); // "24"
var myNumber = 24; // 24
var myString = String(myNumber); // "24"
```

 

 

## 将字符串分割成多个子字符串

 

为了区分一个字符串转换为一个子字符串数组，你可以使用的`split()`方法：

 

```
1 var myString = "coming,apart,at,the,commas";
2 var substringArray = myString.split(","); // ["coming", "apart", "at", "the", "commas"]
3 var arrayLimited = myString.split(",", 3); // ["coming", "apart", "at"]
```

 

最后一行的第二个参数限制了数组参数所指定的项目的数量。

 

## 获取一个字符串的长度

 

要找出多少个字符长的字符串的`length`属性：

```
1 var myString = "You're quite a character.";
2 var stringLength = myString.length; // 25
```

 

 

## 在字符串中找到一个子串

 

这样做的方法有两种。

使用`indexOf():`

```
1 var stringOne = "Johnny Waldo Harrison Waldo";
2 var wheresWaldo = stringOne.indexOf("Waldo"); // 7
```

`indexOf（）`方法从字符串的开头开始搜索的子串（通过）第一个参数，并返回第一次出现子字符串的开始位置。

`使用lastIndexOf（） `：

```
1 var stringOne = "Johnny Waldo Harrison Waldo";
2 var wheresWaldo = stringOne.lastIndexOf("Waldo"); // 22
```

`lastIndexOf（）`方法是完全一样的，只不过它返回传递的子字符串中最后一次出现的起始位置。

在这两种方法中，如果没有找到子字符串，则返回值`-1`，并允许一个可选的第二个参数表示您要开始搜索的字符在字符串中的位置

 

## 替换掉一个子串

 

要更换一个新的字符串的字符串的一部分或全部，你可以使用`replace()`：

 

```
1 var slugger = "Josh Hamilton";
2 var betterSlugger = slugger.replace("h Hamilton", "e Bautista");
3 console.log(betterSlugger); // "Jose Bautista"
```

 

 第一个参数是你要替换的子字符串，第二个参数是新的子串。这只会替换匹配的子字符串的第一个实例。

 要更换匹配的子字符串的所有实例，使用正则表达式的全局标志：

```
1 var myString = "She sells automotive shells on the automotive shore";
2 var newString = myString.replace(/automotive/g, "sea");
3 console.log(newString); // "She sells sea shells on the sea shore"
```

第二个参数可以包括特殊的替换模式，或可以是一个函数。

 

## 在给定的位置，找到相应的字符

 

要查找的字符是在指定的位置，你可以使用`charAt（）方法`：

```
var myString = "Birds of a Feather";
var whatsAtSeven = myString.charAt(7); // "f"
```

往往是在JavaScript的情况下，引用该字符串中的第一个位置为“0”，而不是“1”。

 或者，您也可以使用`charCodeAt（） `，它给你，而不是字符本身的字符代码：

```
1 var myString = "Birds of a Feather";
2 var whatsAtSeven = myString.charCodeAt(7); // "102"
3 var whatsAtEleven = myString.charCodeAt(11); // "70"
```

请注意，大写字母“F”的位（11）的字符代码与小写字母“f”的位（7）从字符码不同。

 

## 连接多个字符串

 

在大多数情况下，当您连接字符串时，你会使用加法运算符（+）。但你也可以选择使用`CONCAT（）`方法：

```
1 var stringOne = "Knibb High football ";
2 var stringTwo = stringOne.concat("rules."); // "Knibb High football rules"
```

您还可以通过将多个字符串，将被一个个的追加起来（在它们出现的顺序）：

```
1 var stringOne = "Knibb ";
2 var stringTwo = "High ";
3 var stringThree = "football ";
4 var stringFour = "rules.";
5 var finalString = stringOne.concat(stringTwo, stringThree, stringFour);
6 console.log(finalString); // "Knibb high football rules."
```





## 提取字符串（组成新字符串）

 

有三种不同的方法来创建一个新的字符串值：

使用`slice（）方法`：

```
1 var stringOne = "abcdefghijklmnopqrstuvwxyz";
2 var stringTwo = stringOne.slice(5, 10); // "fghij"
```

使用`substring（）方法`：

 

```
var stringOne = "abcdefghijklmnopqrstuvwxyz";
var stringTwo = stringOne.substring(5, 10); // "fghij"
```

 

 

对于这两个`slice()`和`substring（）方法`的第一个参数是你想要的开始的子串，第二个参数（这是可选的）*后*的字符串中的字符结束的字串。因此，在上面的例子中，参数“5，10”，是指，字符5到9，以创建一个新的字符串。

使用`SUBSTR（）`

```
var stringOne = "abcdefghijklmnopqrstuvwxyz";
var stringTwo = stringOne.substr(5, 10); // "fghijklmno"
```

`SUBSTR（） `，第一个参数代表开始新的字符串的字符，第二个参数是可选的。但这个时候，第二个参数表示的字符的总数应包括的开始的字符“5”的位置。

 

## 一个字符串转换为大写或小写

 

有四种方法做大小写转换。有两个字符串转换为全部大写：

```
1 var stringOne = "Speak up, I can't hear you.";
2 var stringTwo = stringOne.toLocaleUpperCase(); // "SPEAK UP, I CAN'T HEAR YOU"
3 var stringThree = stringOne.toUpperCase(); // "SPEAK UP, I CAN'T HEAR YOU"
```

将字符串转换为小写：

```
1 var stringOne = "YOU DON'T HAVE TO YELL";
2 var stringTwo = stringOne.toLocaleLowerCase(); // "you don't have to yell"
3 var stringThree = stringOne.toLowerCase(); // "you don't have to yell"
```

 

## 模式匹配

 

在一个字符串匹配的模式，可以使用两种方法，其基本的工作方式相同。

 

一个字符串``match()方法被调用，并通过正则表达式：



```
1 var myString = "How much wood could a wood chuck chuck";
2 var myPattern = /.ood/;
3 var myResult = myString.match(myPattern); // ["wood"]
4 var patternLocation = myResult.index; // 9
5 var originalString = myResult.input // "How much wood could a wood chuck chuck"
```



 

`exec（）`方法被调用的一个`正则表达式`对象，并通过字符串：



```
var myString = "How much wood could a wood chuck chuck";
var myPattern = /.huck/;
var myResult = myPattern.exec(myString); // ["chuck"]
var patternLocation = myResult.index; // 27
var originalString = myResult.input // "How much wood could a wood chuck chuck"
```



 

 对于这两种方法，只在第一个匹配发生被返回。如果没有找到匹配，将返回`空值`。

 

也可以使用``search()方法，它接受一个正则表达式作为唯一的参数，并返回模式第一次出现的位置：

```
1 var myString = "Assume";
2 var patternLocation = myString.search(/ume/); // 3
```

如果没有找到匹配，则该方法返回“-1”。

 

## 比较两个字符串的排序顺序

 

您可以比较两个字符串，看看哪一个字母先靠前使用```localeCompare`,，有三个可能的返回值：



```
1 var myString = "chicken";
2 var myStringTwo = "egg";
3 var whichCameFirst = myString.localeCompare(myStringTwo); // -1 (except Chrome, which returns -2)
4 whichCameFirst = myString.localeCompare("chicken"); // 0
5 whichCameFirst = myString.localeCompare("apple"); // 1 (Chrome returns 2)
stringObject.localeCompare(target)//公式
```

如上图所示，如果 stringObject 小于 target，则 localeCompare() 返回小于 0 的数。如果 stringObject 大于 target，则该方法返回大于 0 的数。如果两个字符串相等，或根据本地排序规则没有区别，该方法返回 0。

由于浏览器可以返回任何负数或正数之前和之后的结果最好使用` if ( result < 0 ) `，而不是``if ( result === -1 )，后者将无法在Chrome浏览器中运行。

一、charAt()

返回在指定位置的字符

var str="abc"

console.log(str.charAt(0))//a

二、charCodeAt()

返回在指定的位置的字符的 Unicode 编码。

var str="abc"

 console.log(str.charCodeAt(1))//98

三、concat()

连接字符串。

 var a = "abc";  

 var b = "def"; 

 var c = a.concat(b);

 console.log(c);//abcdef

四、indexOf()

检索字符串。indexOf() 方法对大小写敏感！

var str="Hello world!"

console.log(str.indexOf("Hello"))//0

console.log(str.indexOf("World"))//-1

console.log(str.indexOf("world"))///6

五、match()

match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配。该方法类似 indexOf() 和 lastIndexOf()，但是它返回指定的值，而不是字符串的位置。

var str="1 abc 2 def 3"

console.log(str.match(/\d+/g))//123

六、replace()

replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。

var str="abc Def!"

console.log(str.replace(/abc/, "CBA"))//CBA Def!

七、search()

search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。要执行忽略大小写的检索，请追加标志 i。如果没有找到任何匹配的子串，则返回 -1。

var str="abc DEF!"

console.log(str.search(/DEF/))//4

八、slice()

提取字符串的片断，并在新的字符串中返回被提取的部分。

stringObject.slice(**start,end**);

**start** :要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。

**end**：紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 start 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。

var str="abc def ghk"

console.log(str.slice(6))//f ghk

九、split()

把字符串分割为字符串数组。

var str="abc def ghi jkl"    

console.log(str.split(" "))//["abc", "def", "ghi", "jkl"]

console.log(str.split("") )//["a", "b", "c", " ", "d", "e", "f", " ", "g", "h", "i", " ", "j", "k", "l"]

console.log(str.split(" ",3))//["abc", "def", "ghi"]

十、toLocaleLowerCase()

把字符串转换为小写。

var str="ABC def!"

console.log(str.toLocaleLowerCase())//abc def!

十一、toLocaleUpperCase()

把字符串转换为大写。

var str="ABC def!"

console.log(str.toLocaleUpperCase())//ABC DEF!

十二、toLowerCase()

把字符串转换为小写。

var str="ABC def!"

console.log(str.toLowerCase())//abc def!

十三、toUpperCase()

把字符串转换为大写。

var str="ABC def!"

console.log(str.toUpperCase())//ABC DEF!

十四、substr()

从起始索引号提取字符串中指定数目的字符。

stringObject.substr(**start,length**)。

**start：**必需。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。

**length：**可选。子串中的字符数。必须是数值。如果省略了该参数，那么返回从 stringObject 的开始位置到结尾的字串。

var str="abc def"

console.log(str.substr(2))//c def

console.log(str.substr(2,4))// c de

十五、substring()

提取字符串中两个指定的索引号之间的字符。

stringObject.substring(**start,stop**)。

**start ：**必需。一个非负的整数，规定要提取的子串的第一个字符在 stringObject 中的位置。

**stop ：**可选。一个非负的整数，比要提取的子串的最后一个字符在 stringObject 中的位置多 1。如果省略该参数，那么返回的子串会一直到字符串的结尾。

var str="abc def"

console.log(str.substring(2))//c def

console.log(str.substring(2,4))// c

**相同点：**如果只是写一个参数，两者的作用都一样：都是是截取字符串从当前下标以后直到字符串最后的字符串片段。

substr(startIndex);

substring(startIndex);



var str = '123456789';

console.log(str.substr(2));    //  "3456789"

console.log(str.substring(2)) ;//  "3456789"

**相同点：**如果只是写一个参数，两者的作用都一样：都是是截取字符串从当前下标以后直到字符串最后的字符串片段。

substr(startIndex);

substring(startIndex);



var str = '123456789';

console.log(str.substr(2));    //  "3456789"

console.log(str.substring(2)) ;//  "3456789"

**不同点：**第二个参数

substr（startIndex,lenth）： 第二个参数是截取字符串的长度（从起始点截取某个长度的字符串）；

substring（startIndex, endIndex）： 第二个参数是截取字符串最终的下标 （截取2个位置之间的字符串,‘含头不含尾’）。

console.log("123456789".substr(2,5));    //  "34567"

console.log("123456789".substring(2,5)) ;//  "345"

ES6新增的操作字符串的方法

一、codePointAt()

let s = '𠮷a';

s.codePointAt(0) // 134071

s.codePointAt(1) // 57271

s.codePointAt(2) // 97

codePointAt方法的参数，是字符在字符串中的位置（从  0 开始）。上面代码中，JavaScript 将“𠮷a”视为三个字符，codePointAt  方法在第一个字符上，正确地识别了“𠮷”，返回了它的十进制码点  134071（即十六进制的20BB7）。在第二个字符（即“𠮷”的后两个字节）和第三个字符“a”上，codePointAt方法的结果与charCodeAt方法相同。

二、String.fromCodePoint()

ES5 提供String.fromCharCode方法，用于从码点返回对应字符，但是这个方法不能识别 32 位的 UTF-16 字符（Unicode 编号大于0xFFFF）。

String.fromCharCode(0x20BB7)

// "ஷ"

上面代码中，String.fromCharCode不能识别大于0xFFFF的码点，所以0x20BB7就发生了溢出，最高位2被舍弃了，最后返回码点U+0BB7对应的字符，而不是码点U+20BB7对应的字符。

ES6 提供了String.fromCodePoint方法，可以识别大于0xFFFF的字符，弥补了String.fromCharCode方法的不足。在作用上，正好与codePointAt方法相反。

String.fromCodePoint(0x20BB7)

// "𠮷"

String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y'

// true

三、字符串的遍历器接口 for of

for (let codePoint of 'abc') {

  console.log(codePoint)

}

// "a"

// "b"

// "c"

除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。

四、at（）

at方法可以识别Unicode 编号大于0xFFFF的字符，返回正确的字符。

‘abc’.at(0)//"a"

'吉'.at(0)//"吉"

五、normalize()

许多欧洲语言有语调符号和重音符号。为了表示它们，Unicode  提供了两种方法。一种是直接提供带重音符号的字符，比如Ǒ（u01D1）。另一种是提供合成符号（combining  character），即原字符与重音符号的合成，两个字符合成一个字符，比如O（u004F）和ˇ（u030C）合成Ǒ（u004Fu030C）。

这两种表示方法，在视觉和语义上都等价，但是 JavaScript 不能识别。

'\u01D1'==='\u004F\u030C' //false    

'\u01D1'.length // 1

'\u004F\u030C'.length // 2

上面代码表示，JavaScript 将合成字符视为两个字符，导致两种表示方法不相等。

ES6 提供字符串实例的normalize()方法，用来将字符的不同表示方法统一为同样的形式，这称为 Unicode 正规化。

'\u01D1'.normalize() === '\u004F\u030C'.normalize()

// true

六、includes(), startsWith(), endsWith()

传统上，JavaScript 只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中。ES6 又提供了三种新方法。

**includes()**：返回布尔值，表示是否找到了参数字符串。

**startsWith()**：返回布尔值，表示参数字符串是否在原字符串的头部。

**endsWith()**：返回布尔值，表示参数字符串是否在原字符串的尾部。

let s = 'Hello world!';   

s.startsWith('Hello') // true

s.endsWith('!') // true

s.includes('o') // true

这三个方法都支持第二个参数，表示开始搜索的位置。

let s = 'Hello world!';    

s.startsWith('world', 6) // true

s.endsWith('Hello', 5) // true

s.includes('Hello', 6) // false

上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。

七、repeat()

repeat方法返回一个新字符串，表示将原字符串重复n次。

'x'.repeat(3) // "xxx"

'hello'.repeat(2) // "hellohello"

'na'.repeat(0) // ""

参数如果是小数，会被取整。

'na'.repeat(2.9) // "nana"

如果repeat的参数是负数或者Infinity，会报错。

'na'.repeat(Infinity)

// RangeError

'na'.repeat(-1)

// RangeError

八、padStart()，padEnd()

ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

'x'.padStart(5, 'ab') // 'ababx'

'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'

'x'.padEnd(4, 'ab') // 'xaba'

上面代码中，padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。

'xxx'.padStart(2, 'ab') // 'xxx'

'xxx'.padEnd(2, 'ab') // 'xxx'

如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。

'abc'.padStart(10, '0123456789')

// '0123456abc'

如果省略第二个参数，默认使用空格补全长度。

'x'.padStart(4) // '   x'

'x'.padEnd(4) // 'x   '

padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。

'1'.padStart(10, '0') // "0000000001"

'12'.padStart(10, '0') // "0000000012"

'123456'.padStart(10, '0') // "0000123456"

另一个用途是提示字符串格式。

'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"

'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

九、matchAll()

matchAll方法返回一个正则表达式在当前字符串的所有匹配。

十、字符串模板

模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。-----字符串模板，工作中用到比较多。

// 普通字符串

```
In JavaScript '\n' is a line-feed.
```

// 多行字符串

`In JavaScript this is

 not legal.`

console.log(`string text line 1

string text line 2`);

// 字符串中嵌入变量

let name = "Bob", time = "today";

```
Hello ${name}, how are you ${time}?
```

上面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。

let greeting = `\`Yo\` World!`;

如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。

$('#list').html(`

<ul>

  <li>first</li>

  <li>second</li>

</ul>

`);

上面代码中，所有模板字符串的空格和换行，都是被保留的，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。

$('#list').html(`

<ul>

  <li>first</li>

  <li>second</li>

</ul>

`.trim());

模板字符串中嵌入变量，需要将变量名写在${}之中。

function authorize(user, action) {

  if (!user.hasPrivilege(action)) {

​    throw new Error(

​      // 传统写法为

​      // 'User '

​      // + user.name

​      // + ' is not authorized to do '

​      // + action

​      // + '.'

​      `User ${user.name} is not authorized to do ${action}.`);

  }

}

大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。

let x = 1;

let y = 2;

```
${x} + ${y} = ${x + y}
```

// "1 + 2 = 3"

```
${x} + ${y * 2} = ${x + y * 2}
```

// "1 + 4 = 5"

let obj = {x: 1, y: 2};

```
${obj.x + obj.y}
```

// "3"

模板字符串之中还能调用函数。

function fn() {

  return "Hello World";

}   

```
foo ${fn()} bar
```

// foo Hello World bar

如果大括号中的值不是字符串，将按照一般的规则转为字符串。比如，大括号中是一个对象，将默认调用对象的toString方法。

如果模板字符串中的变量没有声明，将报错。

// 变量place没有声明

let msg = `Hello, ${place}`;

// 报错

由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。

```
Hello ${'World'}
```

// "Hello World"

模板字符串甚至还能嵌套。

const tmpl = addrs => `

  <table>

  ${addrs.map(addr => `

​    <tr><td>${addr.first}</td></tr>

​    <tr><td>${addr.last}</td></tr>

  `).join('')}

  </table>

`;

## 字符串

### 查找字符串

#### charAt(返回字符)

**str.charAt(index)**

- charAt()方法从一个字符串中返回指定的字符

- index是0 ~ str.length-1 ,如果指定的index值超出了该范围，则返回一个空字符串

- 输出字符串中不同位置的字符

  ```javascript
  var anyString = "Brave new world";
  console.log("index 0   is '" + anyString.charAt(0)   + "'");
  console.log("index 1   is '" + anyString.charAt(1)   + "'");
  console.log("index 2   is '" + anyString.charAt(2)   + "'");
  console.log("index 3   is '" + anyString.charAt(3)   + "'");
  console.log("index 4   is '" + anyString.charAt(4)   + "'");
  console.log("index 999 is '" + anyString.charAt(999) + "'");
  
  //输出
  //  index 0 is 'B'
  //  index 1 is 'r'
  //  index 2 is 'a'
  //  index 3 is 'v'
  //  index 4 is 'e'
  //  index 999 is ''
  ```

-  

#### charCodeAt(返回ASCII)

**str.charCodeAt(index)**

- 返回索引对应的字符的ASCII表对应的值，0-65535之间的整数，超出范围返回NaN

- index : 0 ~ length-1,如果不是一个数值，则默认为0

  ```javascript
  "ABC".charCodeAt(0) // returns 65
  ```

-  

#### indexOf(返回索引)

**str.indexOf(searchValue[, fromIndex])**

- searchValue 一个字符串表示被查找的值

- fromIndex 可选。

  - fromIndex < 0 则查找整个字符串（如同传进了 0）
  - 如果 fromIndex >= str.length，则该方法返回 -1
  - 如果被查找的字符串是一个空字符串，此时返回 str.length

- 找到第一个元素的位置，没找到返回-1

  ```javascript
  "Hello apple".indexOf("Hello");    // return  0
  "Hello apple".indexOf("Heloo");    // return -1
  "Hello apple".indexOf("apple", 0); // return  6
  "Hello apple".indexOf("apple", 6); // return  6
  "Hello apple".indexOf("", 10);     // return  10
  "Hello apple".indexOf("", 11);     // return  10
  
  //区分大小写
  "Hello apple".indexOf("hello") // returns -1
  
  //检测是否存在某字符串
  "Hello apple".indexOf("hello") !== -1; // true
  "Hello apple".indexOf("heloo") !== -1; // false
  ```

 

使用indexOf统计一个字符串中某个字母出现的次数

```javascript
var str = 'To be, or not to be, that is the question.';
//计数
var count = 0;
//判断str中有没有e元素
var pos = str.indexOf('e');
//如果有e元素，循环
while (pos !== -1) {
  //计数加一
  count++;
  //从索引加1的位置开始找e
  pos = str.indexOf('e', pos + 1);
}
console.log(count); // displays 4
```

-  

#### lastIndexOf(返回索引)

**str.lastIndexOf(searchValue[, fromIndex])**

- searchValue 表示被查找的值

- fromIndex 从后面找。

  - 默认值为 str.length。如果为负值，则被看作 0。如果 fromIndex > str.length，则fromIndex被看作str.length

- 返回值没找到为-1,找到的索引是从前往后的

  ```javascript
  "canal".lastIndexOf("a")   // returns 3
  "canal".lastIndexOf("a",2) // returns 1
  "canal".lastIndexOf("a",0) // returns -1
  "canal".lastIndexOf("x")   // returns -1
  ```

-  

### 截取字符串

#### slice(索引)

**str.slice(beginSlice[, endSlice])**

- beginSlice 开始的字符索引，如果是复数，就strLength + beginSlice

- endSlice 结束的字符索引。可选，如果省略直接到末尾，如果是负数就是strLength + endSlice

- 提取字符串，返回字符串，包括beginSlice，不包括endSlice

- 使用slice()创建一个新的字符串

  ```javascript
  var str1 = 'The morning is upon us.';
  //从第五个开始到不连倒数第二个结束
  var str2 = str1.slice(4, -2);  // returns 'morning is upon u'
  var str2 = str.slice(-3);     // returns 'us.'
  var str2 = str.slice(-3, -1); // returns 'us'
  var str2 = str.slice(0, -1);  // returns 'The morning is upon us'
  console.log(str2); // OUTPUT: morning is upon u
  ```

-  

#### substring(索引)

**str.substring(indexStart[, indexEnd])**

- indexStart  开始索引，0 ~ str.length

- indexEnd 结束索引，可选。 0 ~ str.length，省略则到字符串结束

- 两个参数小于0或者为NaN，被当作0，大于length，则当作length。如果开始大于结束，则结果和参数调换一样

  `str.substring(1, 0) == str.substring(0, 1)`

- 截取开始到结束的字符串，返回新数组

  ```javascript
  var anyString = "Mozilla";
  
  // 输出 "Moz"
  console.log(anyString.substring(0,3));
  console.log(anyString.substring(3,0));
  console.log(anyString.substring(3,-3));
  console.log(anyString.substring(3,NaN));
  console.log(anyString.substring(-2,3));
  console.log(anyString.substring(NaN,3));
  
  // 输出 "lla"
  console.log(anyString.substring(4,7));
  console.log(anyString.substring(7,4));
  
  // 输出 ""
  console.log(anyString.substring(4,4));
  
  // 输出 "Mozill"
  console.log(anyString.substring(0,6));
  
  // 输出 "Mozilla"
  console.log(anyString.substring(0,7));
  console.log(anyString.substring(0,10));
  ```

-  

- 替换一个字符串的子字符串

  ```javascript
  //该例结尾调用的函数将 "Brave New World" 变成了 "Brave New Web"
  function replaceString(oldS, newS, fullS) {
  // Replaces oldS with newS in the string fullS
    for (var i = 0; i < fullS.length; i++) {
      if (fullS.substring(i, i + oldS.length) == oldS) {
       fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
      }
    }
    return fullS;
  }
  
  replaceString("World", "Web", "Brave New World");
  
  //需要注意的是，如果 oldS 是 newS 的子字符串将会导致死循环。例如，尝试把 "World" 替换成 "OtherWorld"。一个更好的方法如下：
  function replaceString(oldS, newS,fullS){
    return fullS.split(oldS).join(newS);
  }
  
  //更简单的要用replace
  ```

-  

#### substr(长度)

**str.substr(start[, length])**

- start 开始提取字符的位置。如果为负值，则被看strLength + start

- length 可选，提取的字符数。不写到结尾

- 返回新字符串

  ```javascript
  var str = "abcdefghij";
  
  console.log("(1,2): "    + str.substr(1,2));   // (1,2): bc
  console.log("(-3,2): "   + str.substr(-3,2));  // (-3,2): hi
  console.log("(-3): "     + str.substr(-3));    // (-3): hij
  console.log("(1): "      + str.substr(1));     // (1): bcdefghij
  console.log("(-20, 2): " + str.substr(-20,2)); // (-20, 2): ab
  console.log("(20, 2): "  + str.substr(20,2));  // (20, 2):
  ```

 

兼容，Microsoft's JScript 不支持负的 start 索引

```javascript
// only run when the substr function is broken
if ('ab'.substr(-1) != 'b')
{
  /**
   *  Get the substring of a string
   *  @param  {integer}  start   where to start the substring
   *  @param  {integer}  length  how many characters to return
   *  @return {string}
   */
  String.prototype.substr = function(substr) {
    return function(start, length) {
      // did we get a negative start, calculate how much it is
      // from the beginning of the string
      if (start < 0) start = this.length + start;
      
      // call the original function
      return substr.call(this, start, length);
    }
  }(String.prototype.substr);
}
```

-  

### 转换大小写

#### toLocaleUpperCase

**str.toLocaleUpperCase()**

- 返回小写转大写的字符串

  ```javascript
  console.log('alphabet'.toLocaleUpperCase()); // 'ALPHABET'
  ```

-  

#### toLocaleLowerCase

**str.toLocaleLowerCase()**

- 返回大写转小写的字符串

  ```javascript
  console.log('ALPHABET'.toLocaleLowerCase()); 
  // 'alphabet'
  
  console.log('中文简体 zh-CN || zh-Hans'.toLocaleLowerCase());
  // '中文简体 zh-cn || zh-hans'
  ```

-  

### 替换字符串

#### replace(生产环境不建议)

**str.replace(regexp|substr,newSubStr|function)**

- regexp 正则对象或者其字面量，在进行全局替换时，要有g标志

- substr 被替换的字符串

- newSubStr 替换的新字符串（可以插入特殊字符串）

  | 变量名  |                   代表的值                   |
   |  $$  |                 插入一个"$"                  |
   |  $&  |                 插入匹配的子串                  |
   |  $`  |              插入当前匹配的子串左边的内容              |
   |  $'  |              插入当前匹配的子串右边的内容              |
   |  $n  | 假如第一个参数的正则对象，n是一个小于100的非负整数，那么插入第n个括号匹配的字符串 |

- *function 创建新字符串的函数，函数返回值是替换的内容，但是特殊替换的参数不能使用*

- 返回值是被替换过的新的字符串，不改变本身

  ```javascript
  //下面的例子将会使 newString 'abc12345#$*%' 变成'abc - 12345 - #$*%'
  function replacer(match, p1, p2, p3, offset, string) {
    // p1 is nondigits, p2 digits, and p3 non-alphanumerics
    return [p1, p2, p3].join(' - ');
  }
  var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
  ```

-  

- 使用正则表达式

  ```javascript
  //replace() 中使用了正则表达式及忽略大小写标示。
  var str = 'Twas the night before Xmas...';
  var newstr = str.replace(/xmas/i, 'Christmas');
  console.log(newstr);  // Twas the night before Christmas...
  ```

 

使用global和ignore选项

```javascript
//下面的例子中,正则表达式包含有全局替换(g)和忽略大小写(i)的选项,这使得replace方法用'oranges'替换掉了所有出现的"apples".
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
console.log(newstr);
// oranges are round, and oranges are juicy.
```

 

交换字符串中的两个单词

```javascript
//下面的例子演示了如何交换一个字符串中两个单词的位置，这个脚本使用$1 和 $2 代替替换文本
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
// Smith, John
console.log(newstr);
```

 

使用行内函数来修改匹配到的字符

```javascript
//所有出现的大写字母转换为小写，并且在匹配位置前加一个连字符。重要的是，在返回一个替换了的字符串前需要在匹配元素前需要进行添加操作。

//在返回前，替换函数允许匹配片段作为参数，并且将它和连字符进行连接作为新的片段。
function styleFormat(name) {
  function lower(match) {
    return '-' + match.toLowerCase();
  }
  return name.replace(/[A-Z]/g, lower);
}
styleFormat('borderTop');  //返回 'border-top'
//因为我们想在最终的替换中进一步转变匹配结果，所以我们必须使用一个函数。这迫使我们在使用toLowerCase()方法前进行评估。如果我们尝试不用一个函数进行匹配，那么使用toLowerCase() 方法将不会有效。

  var newString = propertyName.replace(/[A-Z]/g, '-' + '$&'.toLowerCase());  //报错

  //这是因为 $&.toLowerCase() 会先被解析成字符串字面量（这会导致相同的$&)而不是当作一个模式。
```

-  

### 拼接字符串

#### concat

**str.concat(string2, string3[, ..., stringN])**

- 将一个或多个字符串和原字符串合并，并形成一个新的字符串返回

- 强烈建议使用赋值操作符(+,+=)代替concat方法

  ```javascript
    var hello = "Hello, ";
    console.log(hello.concat("Kevin", " have a nice day."));
    /* Hello, Kevin have a nice day. */
  ```

-  

- 测试比较 (+ > concat + join) 推荐使用



![img](JavaScript字符方法详解.assets/6100773-bf019f6052e92f8e.png)

concat.png

### 比较字符串

#### locateCompare

**referenceStr.localeCompare(compareString[, locales[, options]])**

- referenceStr 引用字符串

- compareStr 比较字符串

- *locales指的是比较的语言，options比较标准。这两个参数很多浏览器不支持，所以不用*

- 如果引用字符串在比较字符串前面，返回-1,当引用字符串在比较字符串后面时返回1。相同位置返回0（不同浏览器的原因，只关注正反即可）

  ```javascript
  //一个字符一个字符比较
  'a'.localeCompare('c'); // -2 or -1 (or some other negative value)
  'check'.localeCompare('against'); // 2 or 1 (or some other positive value)
  'a'.localeCompare('a'); // 0
  ```

 

检查浏览器对扩展参数的支持

```javascript
//locales 和 options 参数还没有被所有阅览器所支持。检查是否被支持， 使用 "i" 参数判断是否有异常 RangeError抛出
function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare('bar', 'i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}
```

-  

### 去空格

#### trim

**str.trim()**

- 删除字符串两端的空白字符，

- 返回一个新字符串

  ```javascript
  var orig = '   foo  ';
  console.log(orig.trim()); // 'foo'
  ```

-  

- 兼容问题，IE8及以下不可用

  ```javascript
  if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  }
  ```

-  

### 切割字符串

#### split(数组)

**str.split([separator[, limit]])**

- 将string对象分割成字符串数组，[]表示参数可选

- 如果str是空字符串，split返回的是一个包含空字符串的数组，而不是一个空数组

- separator 可以是一个字符串或正则表达式

  - 如果没有separator则返回整个字符串的数组形式
  - 如果separator是空字符串，则str将会把原字符串中每个字符的数组形式返回
  - 如果有字符串和表达式，则匹配字符串，separator会从字符串中被移除，按照字符串分隔成子串，分别放入数组

- *limit 一个整数，限定返回的分割片段的数量。split方法仍然分割每一个匹配的separator，但是返回的数组只会截取最多limit个元素。*

  ```javascript
  "Webkit Moz O ms Khtml".split( " " )   
  // ["Webkit", "Moz", "O", "ms", "Khtml"]
  ```

 

限制返回值中分割元素数量

```javascript
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);
console.log(splits);
//["Hello", "World.", "How"]    length = 3
```

 

捕获括号

```javascript
// separator 包含捕获括号（capturing parentheses），则其匹配结果将会包含在返回的数组中
var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(\d)/);
console.log(splits);
//[Hello ,1, word. Sentence number ,2,.]
```