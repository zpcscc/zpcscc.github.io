盒子模型
	网页中所有的元素都会生成一个矩形框,这个就叫元素框,可以看做一个盒子.
	它描述了一个元素在文档布局中所占用的孔家大小.而且每个框影响着其他元素框的位置和大小
	我们所见到的所有的网页都是由这些元素框构建而成的
	而这也是我们所说的盒子模型
	
	
	

​	

### 标准盒子模型

```css
盒子模型当中一般包括有
		width/height:元素的宽高
		content:盒子模型当中的内容
		padding:内边距,指的是内容到边框之间的距离
		border:边框
		margin:外边距,两个元素之间的距离
		外边距+内边距+内容+边框
	内容:一般情况下我们设置的宽高就是盒子模型内容content的宽高
	box(model)
		定义了元素处理边框的内容
	元素占地尺寸：
		元素的总宽度=左右外边距+左右内边距+左右边框+内容宽度
		元素的总到都=上下外边距+上下内边距+上下边框+内容高度
	元素可视化尺寸：
		边框内的宽度=左右外边框+左右内边距+width
	外边距
		元素边框（边缘）之外的距离
		语法：
			属性：
				margin：值：
				margin-方向：值：
			取值：
				具体的数值   px
				百分比       %
				auto
					默认情况下自动计算左右外边距
					它实现了块级元素水平居中对齐
					注意：
						必须为元素设置宽度才能居中对齐
		margin取值方式：
			margin：value
				上下左右外边距全部为value
			margin：value1 value2
				上下外边距都是value1 左右外边距为value2
			margin：value1 value2 value3
				上为value1  左右为value2 下为value3
			margin：value1 value2 value3 value4
				上为value1 右为value2 下为value3 左为value4
			margin塌陷
				当使用margin表示两个元素之间的距离时，并不会以两个元素之间的margin之和表示，而是以两个margin之间的最大宽度为准
			解决方案：
				当元素浮动，脱离文档流。两个元素同时浮动，解决margin塌陷的问题，本质来讲也是触发了BFC
				触发 BFC（块级格式化上下文）
		内边距
			元素的边缘到内容之间的距离
			注意：
				内边距会扩大元素边框所占用的区域
			语法：
				属性：
					padding
					padding-top
					padding-left
					padding-right
					padding-bottom
				取值：
					1 具体的数值   px
					2 百分比       %
					3 auto
						默认情况下自动计算左右外边距
						它实现了块级元素水平居中对齐
						注意：
							必须为元素设置宽度才能居中对齐	
		边框的组成：
			由4个等腰三角形构成
				border:
					border-width:边框宽度
						number+px;
					border-style:边框样式
						solid:直线
					border-color:边框颜色
						#十六进制
						rgb(255,255,255)
					border-radius:
						number+px/%;
						边框的圆角属性,使边框圆润
```

### 	怪异盒子模型

```css
box-sizing:border--box:
	表示设置盒子的宽高就是总宽高,设置内外边距,会自动调整
	box-sizing：
		作用：
			指定框模型的计算方式
				div{
					width:200px;
					border-left:2px solid #000;
					border-right:2px solid #000;
					padding-left:18px;
					padding-right:18px;
				}
				width=200+2+2+18+18=260
					box-sizing:
					取值
						1 content-box(默认值)
							元素的width值，不包含padding和border的
						2 border-box
							元素的总宽度width=width
```











### 内容溢出		

```css
内容溢出
	指盒子模型当中的内容溢出容器,也就是超过容器的范围
	overflow
		hidden:溢出隐藏，无论是横向还是纵向都会被隐藏
		scroll：滚动条  无论内容食肉溢出，滚动条件区间都会存在
		auto：自动 无论是横向还是纵向，内容只要超出容器都出现滚动条
		overdlow-x：针对横向
		overflow-y：针对纵向
		overflow同样会触发BFD
		inherit:规定应准从父元素继承overflow属性的值
```

​			

​	

### 省略号显示

```css
盒子模型内对于溢出的内容显示省略号
    text-overflow:
        clip:不显示省略号
        elipsis:显示省略号标记
如何使用
    text-overflow属性仅是省略号,当单行文本溢出时是否显示省略标记,并不具备其他样式属性定义
    以下情况时可用
        容器宽度:width:value:
        强制文本在一行显示:white-space:nowrap;
        溢出内容为隐藏:overflow:hidden;
        溢出文本显示省略号:text-overflow:elilpsis;
```





### 盒子阴影

```css
box-shadow
	通过box-shadow属性，可以给盒子设置阴影。
	box-shadow:h-shadow v-shadow blur spread color inset;
        h-shadow : 水平阴影的位置 允许负值
        v-shadow : 垂直阴影的位置 允许负值
        blur : 模糊距离
        spread : 阴影的大小
        color : 阴影的颜色
        inset ：将阴影转换为内部阴影。
```

