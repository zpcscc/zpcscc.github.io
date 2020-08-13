全局属性
	所有的标签都能够设置的属性即为全局属性
	title:当鼠标放置在设置了title属性的标签上，可以显示title属性值
	id:理解为身份证号
	class:理解为类名





标准文本流
	网页的文本内容的排列顺序
		默认从上到下,从左到右,多行会显示字围效果	浏览器读取你代码的顺序，网页解析顺序：从上到下，从左到右
	特性：标签会被分类，三类：块级元素 ，行内元素，行内块元素；
	标签分类等级：
		块级元素：div p ul li 
			独占一行；两个相邻的元素会上下排列不会并排显示
			如果不设置宽度，会默认占满父元素的百分之百；
			可以当做容器包含其他标签；
			可以设置背景,宽高等属性
		行内元素：a em 
			与其他行内元素并列一行；行内逐个显示
			不能设置宽度和高度，高度是行高（line-heighe：100px；可设置），宽度是内容的总宽度；
			默认文字会被放在中间显示。
			最小内容单元同样是矩形
			也会遵循盒子模型基本规则,可以定义margin,padding,background-color等,但上下的值没有实际作用
		行内块元素：input
			可以设置宽度高度等样式；可以和其他元素并排显示
			一般情况下需要通过css设置,displa:inline-block;才可以将其他元素变成行内块元素
			现在只有input标签符合行内块元素；
		可变元素:
			需要根据上下文才能确定元素类型是块级元素还是行内元素
			准确的说可变元素也是这两种分类的其中一种
			常见的可变元素:
				applet-java applet
				buttom
				del
				iframe-inline frame
				ins-插入的文本
				map-图片区块
				object-object对象
				script-客户端脚本
		元素类型的转换:
			display:
				block:转换为块级元素
				inline:转换为行内元素
				inline-block:转换为行内块元素
			Tip:大部分的块元素的display默认值为block,其中li列表的默认值为list-item
				大部分的内联元素的display默认值为inline.其中img,imput,默认为inline-block
				
			
			

超链接优化
		链接尽量使用纯文本链接，少用flash和图片链接，爬虫只认识文字。搜索引擎只认识文字
		在写a标签的时候尽量加 title 标题提示，鼠标放上的提示文字
		尽量不使用图片热点链接map标签。在图片上加链接map标签图像映射
			例：在一张图片内放置多张链接
			shape:形状 	
				rect矩形：需要两组坐标  左上角，右下角
				circle圆形：圆形坐标+半径
				poly多边形：把每个角的坐标都写出来
			coords：坐标 前两个坐标是 图片左上角 和 右下角 。后两个坐标是 链接大小宽高
			href：
			<img src="./01.jpg" alt=""  usemap="#aaa">
			<map name="aaa" id="aaa" >
				<area shape="rect" coords="0,0,100,100"  href="http://ww.baidu.com" alt="">
				<area shape="ciitccle" coords="400,400,20"  href="http://ww.baidu.com" alt="">
			</map>



尺寸和边框：
单位：
尺寸的单位
	%:相对单位
	in
	cm
	mm
	pt:
		磅————>point（点）
		1pt=1/72*in
		pt用在字体大小上
	pixel
		px 像素 计算机屏幕上的点
		1024*768
	em
		相对于其父元素字体大小的改变
	rem
		相对于根元素发生字体大小的改变
		网页默认时16px

颜色单位：
	rgb（r，g，b）
		光的三原色：red，green，blue
			r：red（0-255）
			g：green（0-255）
			b：blue（0-255）
	rgba（r，g，b，a）
		a：alpha 透明度

	#rrggbb;
		是由6位16进制的数字来表示
			0-9
			A-F
			eg：#E4393c;（大小写没有影响）
			rr 0-15 15*15=225
			当第一个r为0 15个
			常用颜色：
				#000000; 黑色
				#111111; 深深深灰色
				#eeeeee; 浅浅浅灰色
				#ffffff; 白色
	#rgb
		表示缩写
			#000000;——>#000;
			#aabbcc;——>#abc;
			#aaabbb;——>不能缩写
	颜色英文字母表示方法
		reg green blue


边框的组成：
	由4个等腰三角形构成
	边框的倒角：
		将元素的四个指教换成圆角
		语法：
			border-radius
		取值：
			%
			具体的px值
	单角定义：
	    border-top-left-radius：
	    border-top-right-radius:
	    border-bottom-left-radius:







锚点
	通过网页实现锚点的跳转
	<a href="#+id名">锚点</a>
	跳转到网页，跳转到本地的其他网页
	隐藏元素，
		display:none使物体消失，网页里也没有。不会占据网页空间
		visibility:hidden。使物体隐藏，但网页中不显示，但还在，会占据网页的位置
		opacity：不透明度0-1。0.1,0.2支持持小数点后一位。设置为0则完全透明，但还是占据网页空间
		rgba{0-255，0-255，0-255，0-1}：最后的值也表示透明度
			如果标签内没有内容，标签就会隐藏，如果标签中有内容，就会隐藏背景颜色。
		opacity和rbga的区别：
			opacity设置后内容会受到影响，而rgba不会隐形内容。
			
			
布局方式宽高自适应
	网页布局中经常要定义元素的宽和高。但很多时候我们希望元素的大小能够根据窗口或子元素自动调整，这就是自适应。
	它能够使网页显示更灵活，可以适应在不同设备、不同窗口和不同分辨率下显示。
	实现：
		宽度自适应：块级元素宽度为默认的auto
		高度自适应：元素{height:auto;}/高度不写
		最小宽度/最大宽度：min-width、max-width
		最小高度/最大高度：min-height、max-height
	问题：	
		高度塌陷:
			父元素没有设置高度，子元素设置了浮动后，父元素会发生高度塌陷。(本质来说是浮动所产生的影响)
			解决方法：
				给父元素添加声明overflow:hidden;(缺点：会隐藏溢出的元素
				在浮动元素下方添加空块元素,并给该元素添加声明：clear:both;height:0;overflow:hidden;
				clearfix清除
元素高度自适应窗口高度
	html,body{height:100%;}
	自适应元素高度：height:100%;
		
		
		
过滤器Filter
	它是一种对特定的浏览器或浏览器组显示或隐藏规则或声明的方法。
	常见过滤器
		下划线属性过滤器
			当在一个属性前面增加了一个下划线后，由于符合标准的浏览器不能识别带有下划线的属性而忽略了这个声明，但是在IE6及更低版本浏览器中会继续解析这个规则。
			语法：选择符{_属性：属性值；}
		!important关键字过滤器
			它表示所附加的声明具有最高优先级的意思。但由于IE6及更低版本不能识别它(important)，我们可以利用IE6的这个Bug作为过滤器来兼容ＩＥ６和其它标准浏览器。
			语法：选择符{属性：属性值!important;}
			兼容元素具备最小高度自适应的方法：
				hack1:min-height:value; _height:value;
				hack2:min-height:value;  height:auto!important;   height:value;(建议使用)
		*/+属性过滤器
			当在一个属性前面增加了*后，该属性只能被IE7及以下版本浏览器识别，其它浏览器忽略该属性的作用。
			语法：选择符{*属性：属性值；}
		ie9以下
			语法：选择符{属性：属性值\9;}
		ie8及以上
			语法：选择符{属性：属性值\0;}
		
图片整合
	在网站开发当中，我们经常碰到需要图片的情况，而网页中的每一张图片的加载都相当于是发起了一次http请求
	过多的http请求将直接导致网页加载速度的变慢，从而影响用户体验。
	所以后来就出现了图片整合，而所谓的图片整合还有人称之为叫做雪碧图。就是将网站当中的小图片全部合并成一张大图，这样整个网站在请求这些小图片的时候就只需要发送一次http请求。
	好处 ：
		因为将网站当中所有的小图片都已经合并到了一起。所以当我们请求这个网站的时候，也就是对于这些小图片只发起了一次请求。网站的加载速度将大大得到提高。
		将多张图片合并到一张图片上也可以减少图片的体积。
		Tip：单张整合的图片最好应保持在100k以内
	使用图片整合
		background-position
		当我们通过background-position来设置雪碧图时，不要使用表示位置的关键字，而是使用具体数值来表示位置。
			
浏览器兼容
	属性无法在浏览器中生效或者代码达不到预期的效果
	规则的制定者和执行者之间的出入
	主流浏览器
		safari、ie、chrome、firefox、opera
	主流浏览器内核
		Trident
			ie
			Maxthon(遨游)
			360浏览器
		Gecko
			Mozilla Firefox
		webkit
			Safari、Chrome 
		Presto
			Opera
			它也是世界上公认的渲染速度最快的引擎
		Blink
			由Google和Opera Software开发的浏览器排版引擎，2013年4月发布。
		
	

		
		