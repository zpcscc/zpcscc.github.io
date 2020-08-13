响应式
	伊桑马克特 2010年,理论 多种技术的整合
		通过一套固定的html结构代码配合多套css样式代码,从而达到网站能够根据浏览器屏幕的宽度进行自动的样式变化 
	响应式技术
		弹性图片
			响应式图片
				图片能够根据屏幕宽度的变化而变化,无论是较大的屏幕还是较小的屏幕,都可以有个完美的显示
				.ahocsse1 img {
					max-width:100%;
				}
		弹性布局
		媒体查询:
			一种用来判断屏幕的大小的判断语句,通过媒体查询设置版心
			第一种用法
				

```css
@media 媒介类型 逻辑 运算符 媒体属性 {
    具体的css
}
@media screen and (min-width:700px) {
    .d1{}
}
@media screen and (min-width:1200px) {
    .d1{}
}
@media screen and (min-width:300px) and (max-width:800px){
    .d1{}
}
```

​			第二种用法
​				link引入
​			媒介类型
​				all screen print
​			逻辑运算符
​				not and or only |
​			媒体类型
​				min-width/max-width
​				min-height/max-height
​			Tip:媒体响应式开发的理念,并不适用于复杂网页的开发
​			断点:	
​				不存在百分百通用的断点,而是要根据设计图来断定
​		栅格布局
​			将整个网页宽度分为12份,平时在设置其中布局的时候,其中的一个元素,可以设置分几块,而不用具体设置px值
​			
​			
​			
视口
​	可视视口:浏览器的窗口
​	布局视口:布局整个页面的时候.网页的内容
​	理想视口:当布局视口等于可视视口称为理想视口 
​	

将宽度设置为设备宽度，禁止缩放，将初始缩放比例、最大缩放比例以及最小缩放比例都设置为了1.0。
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
开启ie浏览器最新的内核，主要针对的是ie新版本浏览器或者国内的双核浏览器。
	<meta http-equiv="X-UA-Compatible" content="ie=edge">


​	
响应式网页开发概念
​	

响应式:为了适配各种屏幕,只考虑屏幕宽度
移动端:写的网站只写移动端的网页,不考虑pc端

移动端优先:使用媒体查询,先完成的默认样式是小屏幕就是移动端优先
pc端优先:使用媒体查询,先完成的默认样式是大屏幕就是pc端优先

渐进增强:先从低版本的浏览器开始做,再一步步兼容高版本的浏览器
优雅降级:先做高版本的浏览器,再慢慢兼容低版本的浏览器

属性默认值:设置默认值覆盖掉原来的值

单位:
	绝对长度单位
		px
		in 英寸 lin= 2.54cm = 96px
		cm 厘米 1cm = 10 mm = 96/2.54 = 37.8px
		mm
		pt
		pc 派卡
	
	相对长度单位
		跟字体相关的相对长度单位
			em 
				表示元素font-size属性的计算值,如果em单位用于font-size本身,那么是相对于父元素的font-size
				如果是用于其他元素,相对于本身元素的font-size
			rem	
				rem是相当对于根元素heml的font-size值来进行计算
			ex
				ex是指所用字体中小写x的高度,但是不同字体当中x的字体高度可能不尽相同
				实际上,很多浏览器取em值得一半作为ex值.
			ch
				与ex非常类似,被定义为0的宽度,当0的宽度没有办法确定的时候,取em值的一半作为ch值
		
		跟视口相关的"相对长度单位"
			vh
				布局视口高度的1/100
			vw
				布局视口宽度的1/100
			vmin
				布局视口宽度和高度的其中的最小值的1/100
			vmax
				布局视口宽度和高度的其中的最大值的1/100

渐变
	在css3中通过渐变属性实现渐变效果，渐变是从一个颜色过渡到另一个颜色的过程
	线性渐变：
		颜色从一个方向到另外一个方向
		linear-gaadient:point（方向） angle（角度） color（颜色） per（百分百）
		方向默认是从上到下
		在渐变过程中包括起始颜色，和结束颜色
		渐变支持多个颜色。
		方向
			从左到右
				to right
				to left
				to top
				to bottom
				to left top
				to left bottom
				to right top
				to right bottom
			从右到左把to去掉就可以了，不过不推荐
		百分比
			red 30%，yellow 80%
			表示0-30为纯红色，30-80为红色到黄色的渐变，最后20是纯黄色
		在代码中，deg表示角度，角度为正，则为顺时针旋转，角度为负，则为逆时针旋转
	径向渐变：
		颜色从点到面的改变过程
	重复渐变：
		当单次渐变的过程没法满足需求，就可以应用重复线性渐变和重复径向渐变，是吧上述两个变换不断重复
		
		
过渡效果

transition-property：
	规定应用过渡效果的属性值
transition-deration
	定义过渡效果需要时间，单位s、mm
transition-timing-function
	规定过渡效果的时间曲线
		贝塞尔曲线，可以在线获取
transition-delay
	延迟

2D3D转换