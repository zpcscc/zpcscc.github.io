### 表格属性

```css
border：边框
width：宽度
height：高度
rules：显示规则
cellspacing：单元格与单元格之间的距离
cellpadding：单元格到内容之间的距离
align：行中的对齐方式
colspan：横向合并单元格
rowspan：纵向合并单元格
```





### 列表属性

```css
list-style-image：样式图片
	list-style-image: url(img/02.png);
	列表前序号引用图片

list-style-type：列表符号样式
	disc:实心圆		
	circle:空心圆
	square:实心方块
	none:去掉列表符号	

list-style-position:定义列表符号的位置
	outside:外边
	inside:里边

list-style：简写，列表样式
	none：清除所有列表样式
```

​	
​	

### 文本属性

```css
color:字体颜色;
	color:red;
	color: rgb(255,255,255)

font-size：字体大小；不设置的话默认是16px=1em；
	font-size:30px;
	
font-weight：字体粗细  100-900之间九个等级； 
	font-weight:bold;
    light:较细
    normal:默认值
    bold:加粗
    bolder:更粗的
			
text-decoration：文本修饰
	none:无下划线格式
	underline:添加下划线
	overline:添加上划线
	line-through:添加删除线
	
font-familly:文本字体；
	font-family:字体1,字体2,字体3;
	font-family:"微软雅黑";
        浏览器会首先寻找字体1,不存在则寻找字体2,如果字体3页找不到则按默认显示
        如果字体中包含中文或者空格则需要加双引号
        字体包含多个单词时也需要加双引号
	windows里默认字体:
        中文:宋体/新宋体
        英文:Arial

font-style:文本倾斜
	normal:取消倾斜
	italic:斜体字(字体)
	oblique:倾斜的文字(强制倾斜)

text-align:水平对齐方式
	left:向左对齐
	center:居中对齐
	right:向右对齐
	justify:向两端对齐(在部分浏览器中对中文不起效果)
	可以影响图片
	
vertical-align:垂直对齐方式
	top:向上对齐
	middle:居中对齐
	bottom:向下对齐
	baseline:基线(某些特定类型起作用)
	要用参考物才能发挥作用对齐。只有一个不起作用
	通常设置span的高度为容器高度,作为参考

text-indent:首行缩进
	number+px:设置缩进的具体值
	可以设置负值，只对第一行起作用
	只针对文本，对链接不齐作用

text-transform:检索英文字母大小写
	none:无转换
	capitalize:首字母大写
	uppercase:全都大写
	lowercase:全都小写

line-height:行高
	normal:默认行高
	number+px:具体设置px值
	特殊用法:
		可以通过设置文本行高来调整,单行文本在容器垂直方向的位置
		文本行高等于容器时,可以实现单行文本容器垂直居中对齐
		Tip:IE6以下浏览器有兼容问题
		
letter-spacing:字间距
	number+px:具体值
		设置英文字母或汉字的字间距

word-spacing:词间距
	number+px:设置英文单词词距
	
font:简写属性
	相当于按顺序font-style + font-weight + font-size/line-height + font-family
	简写时注意事项:
		字体和字号必须写
		font-size和line-height只能通过/隔开,不能分开写
			例:12px/20px
		如果没有设置font-style和font-weight,会使用默认值
```



### 文本阴影

​	text-shadow:h-shadow(水平阴影的位置。允许负值。) v-shadow(垂直阴影的位置。允许负值。) blur(模糊的距离。) color(阴影的颜色);
​	text-shadow 属性向文本添加一个或多个阴影。该属性是逗号分隔的阴影列表，每个阴影有两个或三个长度值和一个可选的颜色值进行规定。省略的长度是 0。

### 文本换行

​	word-wrap
​		属性用来标明是否允许浏览器在单词内进行断句，这是为了防止当一个字符串太长而找不到它的自然断句点时产生溢出现象。
​		属性：
​			normal：只在允许的断字点换行（浏览器保持默认处理）
​			break-word：属性允许长单词或 URL 地址换行到下一行。
​	word-break
​		属性：
​			break-all：它断句的方式非常粗暴，它不会尝试把长单词挪到下一行，而是直接进行单词内的断句
​			keep-all：文本不会换行，只能在半角空格或连字符处换行。

### 嵌入字体

```css
@font-face是CSS3中的一个模块，他主要是把自己定义的Web字体嵌入到你的网页中，随着@font-face模块的出现，我们在Web的开发中使用字体不怕只能使用Web安全字体（@font-face这个功能早在IE4就支持）.
	语法：
		@font-face{
			font-family:字体名称;
			src:字体地址;
			font-weight:字体粗细;
			font-style:字体样式;
		}
	例：
		@font-face {
		            font-family: "zhangsan";
		            src: url("./SourceHanSansCN-Heavy.otf");
		        }
		        div {
		            font-family: "zhangsan";
		            color:red;
		        }
```



### 字体图标

```
我们在实际开发过程中，经常需要在网页当中涉及到一些图标，我们除了使用雪碧图的形式以外，还可以采用字体图标的形式来设置这些图标。
	常见第三方网站：
		Font Awesome http://www.fontawesome.com.cn/
		IconFont https://www.iconfont.cn/
		Themify Icons https://themify.me/themify-icons
		Material Design Iconic Font https://zavoloklom.github.io/material-design-iconic-font/index.html
		Weather Icons https://erikflowers.github.io/weather-icons/
		icomoon https://icomoon.io/app/#/select
```

​	
​	
​	
​	
​	

### 边框属性

​	

```css
border:width style color;
	div{
		border:1px solid #FFFFFF;
	}
	width:边框的粗细
	style:边框的样式
		solid:实线
		dotted:虚线（点状虚线）
		dashed:虚线（线状虚线）
	color：边框的颜色
		transparent:透明
	border-radius：
		通过这个属性我们可以设置边框圆角，即可以将四个角设置为统一的圆角，也可以单独的设置具体的某一个角的圆角。
		border-radius: 1-4 length|% / 1-4 length|%;中间可以用/隔开,可以写两组数据.一个角用两个值定义,可以得到椭圆的圆角
			length :定义圆角的具体值
			% ： 通过百分比来设置圆角
		作用:
		1.增加圆角,看起爱美观
		2.用来画圆
	border-image：
		通过这个属性，可以用来给网页的元素设置边框图片。
		兼容：	
			nternet Explorer 11, Firefox, Opera 15, Chrome 以及 Safari 6 支持 border-image 属性。
			Safari 5 支持替代的 -webkit-border-image 属性。
		包含的详细属性：
			border-image-source
				这个属性主要是用来给标签引入边框图片。
				border-image-source:none|url 
			border-image-slice
				通过这个属性，可以指定边框图像顶部，右侧，底部，左侧内偏移量。没有具体的单位值，px ``em rem都不可以。只可以用数字或者百分比。
				使用border-image-slice会将边框图像切成九个区域:4个角，4个边，和一个中间区域。[中间区域如果不设置fill属性，则不会显示]
				假如我们设置了四个值：border-image-slcie : 27 27 27 27 ,则分别代表了上右下左四个方向分别向内偏移27px像素。
				当border的宽度小于偏移量，那么边框图片会进行收缩。
				当border的宽度大于偏移量，那么边框图片会进行放大。
				border-image-slice:numer  | 百分比  {1,4}
			border-image-width
				边框图片宽度，代替盒子本身的边框宽度。
				border-image-width:lenght | number | 百分比 {1,4}
			border-image-outset
				通过这个属性，可以让边框属性延伸到盒子外部。
				但是并不会占用网页实际的空间,实际的空间还在原处
				border-image-outset:length |number {1,4}
			border-image-repeat
				这条属性的作用是设置边框背景是否重复。
				border-image-repeat:stretch | repeat | round{1,2}
					stretch 拉伸 ，四个角，四个区域分别做水平和垂直方向的拉伸，来填补边框的间隙。
					repeat 让四个角四个区域做复制运动,放不下的时候多余的切掉
					round 把四个角和四个区域分成均等区域，然后用背景图像切好能平铺满整个边框空隙。不留空隙
	单边定义：
		border-方向：width style color；
	单属性定义：
		border-属性：
		border-color
		border-width
		border-style
	单边单属性定义：
		border-方向-属性：
			border-left-color：blue；
```

​			

### 浮动属性

```css
float:
    left:向左浮动
    right:向右浮动
```

​		

### 定位属性

​	

```css
position:
    static:默认
    	无特殊定位,等于没有设置定位
    absolute:绝对定位
    	对象从文档流中完全脱离出来
    relative:相对定位
    	没有脱离文档流
    fixed:固定定位
    	脱离文档流,参照的对象是浏览器窗口
    inherit:
    	规定元素的定位方式继承父元素的position的属性值
    sticky:粘性定位
        定位基于用户滚动的位置
        在页面中时,跟随用户滚动,开始超出可视框后,会固定在目标位置
定位元素的层级关系:
    z-index:
    auto:默认
    number:无单位的整数值,可为负数,数值越大,层的顺序越靠上
```

​		

### 背景属性

​	

```css
background-color:背景颜色
		#000000
	background-image:背景图片
		URl（）:能盖住背景时平铺，不能盖住背景时，图像和背景同时在
	background-repeat:背景图片重复平铺
		no-repeat:不平铺/repeat平铺/repeat-x：X轴平铺/repeat-y:Y轴平铺
	background-position:背景图片位置
		left/center/right水平方向
		top/center/bottom垂直方向
		background-position：200px 200px；
		当值只有一个的时候表示距离左边的值，而距离顶部的值是自动auto
		可以调用雪碧图
	background-attachment:背景图片固定
		fixed:固定，不随滑轮的滚动而动。
		scroll：不固定，随着滑轮的滚动一起动
	background-origin：背景图像填充的位置
		padding-box 背景图像填充框的相对位置(默认值)
		border-box 背景图像边界框的相对位置
		content-box 背景图像的相对位置的内容框
	background-clip：规定背景的绘制区域
		border-box 背景被裁剪到边框盒(默认值)
		padding-box 背景被裁剪到内边距框
		content-box 背景被裁剪到内容框
	background-size：	
		规定背景图像的尺寸,设置一个值得时候表示的是宽度,高度是按比例自适应auto.
		length：规定背景图的大小。第一个值宽度，第二个值高度。
		Percentage(%)：以百分比为值设置背景图大小
		cover：把背景图像扩展至足够大，以使背景图像完全覆盖背景区域,按比例扩展,可能会溢出导致缺失一部分图像
		contain：把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。尽可能的按宽高比例放大,可以显示完整图片,但不一定能铺满整个背景.

多背景属性：
	p{ background:url(demo.gif) no-repeat; //这是写给不识别下面这句的默认背景图片
	background:url(demo.gif) no-repeat ,url(demo1.gif) no-repeat left bottom, url(demo2.gif) no-repeat 10px 15px; //这是高级浏览器的css多重背景，第一个最上面 ,先来居上
	background-color:yellow; //这是定义的默认背景颜色，全部适合 }
```

​		

### 溢出属性

```css
overflow
    hidden:溢出隐藏，无论是横向还是纵向都会被隐藏
    scroll：滚动条  无论内容食肉溢出，滚动条件区间都会存在
    auto：自动 无论是横向还是纵向，内容只要超出容器都出现滚动条
    overdlow-x：针对横向
    overflow-y：针对纵向
    overflow同样会触发BFD
    inherit:规定应准从父元素继承overflow属性的值
```



### 空余空间管理

```css
内容的可供白区域处理
	while-space:
		normal:默认值,不处理
		nowrap:文本不会换行,强制文本在同一行,直到遇到<br>标签为止
		pre:空白区域会被浏览器保留,其行为类似于pre标签
		pre-wrap:保留空白符序列,但是正常的进行换行
		pre-line:合并空白符序列,但是保留换行符
		inherit:规定因遵循父元素集成whithe-space属性的值
```

​		

### 元素类型转换

```css
display:将元素转换成各种框类型
		none:隐藏元素并且脱离文档流
		inline:转换为行内元素
			可并排显示
			不支持设置宽高
			代码换行被解析成空格
			不支持的格式:	
				background-position
				clear
				clip
				height/max-height/min-height
				width/max-width/min-width
				overflow
				text-align
				text-indent
				text-overflow
		block:转换为块级元素
			不设置宽高时,宽度为父元素
			不支持的样式:
				verical-align
		inline-block:转换为行内块元素
			不设置宽度时,内容撑开宽度
			可以并排显示
			代码换行被解释成空格
			不支持的样式
				clear
			兼容问题:
				IE7浏览器不支持给块级元素设置inline-block样式
				解决方法:
					首先将其变成行内元素,使其具有行内元素的特性,然后触发haslayout,使其具有块级元素的特性,如此可以模拟出inline-block的效果
					示例代码:
						div{
							display:inline-block;
							*display:inline;
							zoom:1;
						}
		list-item:
			不设置宽度时,宽度撑满一行
			独占一行
			支持宽高
		ren-in:
			可以使某些块元素成为下一个元素的行内部分.
			如果一个元素生成run-in框,而且该框后面是一个块级框,那么该run-in元素将成为块级框开始出的一个行内框,run-in框格式化成另一个元素元素中的行内框,但他们任从文档中的父元素继承属性
			兼容性极差
		table:转换为表格
			独占一行,支持宽高
			不设置宽度时,宽度由内容撑开
			默认具有表格特性,可以设置table-lauout/border-collapse/border-spacing等表格专属属性
			Tip:对于display为table和inline-table,若处于分隔边框模型即border-collapse:separate;.margin,padding都可以设置;
				若处于合并边框模型即border-cllapse:collapse;只可以设置amrgin
		inline-table:
			非独占一行,支持宽高
			不设置宽度时,宽度由内容撑开
			默认具有表格特性,可以设置table-lauout/border-collapse/border-spacing等表格专属属性
		table-row-group:
		table-header-group:
		table-footer-group:
		table-row:
		table-column-group:
		table-column:
		table-cell:
			非独占一行,支持宽高
			不设置宽度时,宽度由内容撑开
			垂直对齐,同级等高
			Tip:display:table-cell的元素不可以设置margin,但可以设置padding
		tabel-caption:
		inherit:
```

​	
​	
​	
​	

### 颜色属性

```css
css中描述颜色有以下几种形式
	英文单词
	rgb
	十六进制
	rgba
在传统的rgb三原色的基础之上新增加了a也就是Alpha透明度。范围是0-1之间。
    opacity
    opacity: value|inherit;
    通过opacity这个属性可以设置元素的不透明度。需要注意的是，通过这个属性设置不透明度会让元素内容也变得透明。
HSL和HSLA
    HSL色彩模式是工业界的一种颜色标准，它是通过对色调(H)、饱和度(S)、亮度(L)三个颜色通道的改变以及它们相互之间的叠加来得到各式各样的颜色。HSL颜色标准几乎包括了人类视力所能感知的所有颜色，是目前运用最广的颜色系统之一。
    HSL即是代表色调，饱和度，亮度三个通道的颜色
    而HSLA就是在HSL的基础上在增加了一个透明度(A)的设置。
        H（色调：Hue）：衍生于色盘，其中0和360是红色，接近120的是绿色，240是蓝色；
        S（饱和度：Saturation）：值为一个百分比数，0%代表灰度，100%代表最高饱和度；
        L（亮度：Lightness）：值也为一个百分比数，其中0%代表最暗，50%为均值，100%表示最亮。
        A（透明度：Alpha）：值为0~1之间的一个数，其中0代表不透明，1代表完全透明。
```

​	
​	
​	

### 透明

```css
IE9及以下:
	filter:alpha(opacity=value)取值范围0-100
其他浏览器:
    opacity:0.5;取值是0.1-0.9或1-9
    rgba(255,255,255,0.5) 最后一位表示透明,取值范围0-1,只支持IE8以上的浏览器
```

​		
​		
​		
​		
​		

### 元素隐藏和显示

```css
visibility:
    hidden
    visible
    inherit
display
    none
    block
二者的区别
	visibility:hidden;属性会使对象不可见，但该对象在网页所占的空间没有改变
	display:none属性会隐藏内容且空间消失。
```

​	
​		
​	

### 鼠标指针

```css
属性
	cursor
	值：
        crosshair(十字架)
        pointer(手形)
        move(移动)
        e-resize(左右方向)
        ne-resize（向右及向上移动)
        nw-resize(向上及向左移动)
        n-resize(向上移动)
        se-resize(向下及向右)
        sw-resize(向下及向左)
        s-resize（向下移动）
        w-resize（向左移动）
        text(文本)
        wait(等待状态)
        help(帮助)
```

​			
​			

### 多列布局

```css
多列布局是css3当中新增加的布局属性，目的是让网页的布局变得更加的灵活。
	属性：
		column-count 规定元素应该被分隔的列数.
			值：number |auto
		column-fill 指定如何填充列(兼容性较差，了解就好)
			值： balance(所有列的高度与其中最高的一列统一)|auto(列高度自适应内容)
		column-gap 指定列与列之间的间隙
			值：length(用长度值来定义列与列之间的间隙。不允许负值 )|normal(与 <' font-size '> 大小相同。假设该对象的font-size为16px，则normal值为16px，类推。 )
		column-rule 所有column-rule-*的属性的简写
			语法：column-rule: column-rule-width column-rule-style column-rule-color
		column-rule-color 指定两列间边框的颜色
		column-rule-style 指定两列间边框的样式
		column-rule-width 指定两列间边框的宽度
			值：thin(较细的边框)|medium(中等边框)|thick(粗)|length;
		column-span 指定元素要跨的列数
			语法：column-span: 1(1或者none,横跨一列)|all(横跨所有列);
		column-width指定列的宽度
			语法：auto(浏览器将决定列的宽度)|length(指定列宽的长度，column-count会产生影响);
		columns 
			设置column-width和column-count的简写
```

​			
​			
​			
​			
​			
​			