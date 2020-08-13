响应式布局
	伊桑·马科特（Ethan Marcotte）在2010年提出了响应式网页设计（RWD,Responsive Web Design）这个术语。
	在他的一篇文章《Responsive Web Design · An A List Apart Article》中他将已有的三种发开技巧（弹性图片，弹性网格布局，媒体与媒体查询） 进行了整合，命名为响应式网页设计。
	那什么才是真正的响应式设计？马科特说，真正的响应式设计方法不仅仅是根据可视区域大小而改变网页布局，而是要从整体上颠覆当前网页的设计方法，是针对任意设备的网页内容进行完美布局的一种显示机制。
响应式布局三要素
	弹性图片
		弹性图片也称之为叫做响应式图片，是指图片能够跟随父容器的变化而变化，同时宽度受限于父容器，并不能够按照图片原始尺寸展示。
		实现方式
			1. 将图片的宽度设置为max-width:100%
			2.如果提供了高清图，要根据不同设备大小加载不同的图片，则需要额外的处理。
	媒体查询
		媒体查询media在css2中就已经存在，在css3当中增加了媒体属性和使用场景
		缺点：
			媒体查询的缺点：媒体查询的开发方案并不适用于过于复杂的网页。
		媒体媒介
			screen
			tty
			tv
			projection
			handheld
			print
			braille
			aural
			all
			tip：广泛使用的媒介类型只有screen 和 all
				<style media="screen">
				.box{height: 100px;width: 100px; background-color: lightblue;}    
				</style>
				<div class="box"></div> 
	​	媒体属性：
	​		媒体属性是CSS3新增的内容，多数媒体属性带有“min-”和“max-”前缀，用于表达“小于等于”和“大于等于”。这避免了使用与HTML和XML冲突的“<”和“>”字符
	​		注意：媒体属性必须用括号()包起来，否则无效
	​	逻辑操作符：
	​		not
	​		and
	​		or
	​		only
	​	断点：
	​		我们通过媒体查询的形式来进行网页布局，原理就是设置好几个区间范围，当浏览器的宽度符合了条件区间后就执行相应的css代码。
	​		断点的设置即可以根据实际的情况，也可以参照一些框架的设置。
	​		bootstrap框架的断点：
	​			< 768px 超小屏幕(一般指手机)
				>= 768px and <= 992px 小屏幕(一般指平板)
				>= 992px and <= 1200px 中等屏幕(桌面显示器)
				>= 1200px 大屏幕(较大的桌面显示器)
	弹性布局




移动端网页开发：
	像素：
		像素，又称画素，是图像显示的基本单位，译自英文“pixel”，pix是英语单词picture的常用简写，加上英语单词“元素”element，就得到pixel，故“像素”表示“图像元素”之意，有时亦被称为pel(picture element)
		像素是网页布局的基础。一个像素就是计算机能够显示一种特定颜色的最小区域。当设备尺寸相同但像素变得更密集时，屏幕能显示的画面的过渡更细致，网站看起来更明快。
		分类：
			设备像素
				设备像素(device independent pixels): 设备屏幕的物理像素，任何设备的物理像素的数量都是固定的
			css像素
				CSS像素(CSS pixels): 又称为逻辑像素，是为web开发者创造的，在CSS和javascript中使用的一个抽象的层
	视口：
		分类：
			布局视口
				网页在移动端浏览器中渲染出来的区域，用来加载网页内容
			可视视口
				浏览器的窗口
			理想视口
				让布局视口等于可视视口，即为理想视口，由乔布斯提出
			例如：
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
		布局视口相当于是网页的内容，而移动端的屏幕则相当于可视视口。当我们将布局视口设置为与可视视口相同时，则变成了理想视口。
		

​	而所谓的理想视口，就是布局视口在一个设备上的最佳尺寸，理想视口下的页面便于浏览器 浏览 阅读。	
DPR
​	设备像素比DPR(devicePixelRatio)是默认缩放为100%的情况下，设备像素和CSS像素的比值
​	DPR = 设备像素 / CSS像素(某一方向上)
​	在早先的移动设备中，并没有DPR的概念。随着技术的发展，移动设备的屏幕像素密度越来越高。从iphone4开始，苹果公司推出了所谓的retina视网膜屏幕。之所以叫做视网膜屏幕，是因为屏幕的PPI(屏幕像素密度)太高，人的视网膜无法分辨出屏幕上的像素点。iphone4的分辨率提高了一倍，但屏幕尺寸却没有变化，这意味着同样大小的屏幕上，像素多了一倍，于是DPR = 2
​	以iphone5为例，iphone5的CSS像素为320px568px，DPR是2，所以其设备像素为640px1136px
ppi
​	ppi是指屏幕上每英寸可以显示的像素点的数量，即屏幕像素密度
针对移动端布局的meta标签的设置
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">


​				
​				
​				
​				
​				