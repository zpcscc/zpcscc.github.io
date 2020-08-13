什么是选择器：
	帮助我们在css中找到html的元素并且定位到指定元素的身上


三大基础选择器
	html标签选择器：
		只写标签，所有相同的标签都会被选中
			div{}
			
	class选择器：
		为标签添加class属性类名，可写多个类名，多个选择器同时生效，再用选择器选择。相同class名的都可以
			.text{} 
			
	id选择器：
		为标签添加id属性，再用选择器选择。最精确是唯一的
			#box{}

三大基础选择器优先级：
	谁最精确谁的优先级最高
	id选择器>class选择器>html标签选择器




高级选择器
	通配符:
		选择所有的标签,为所有标签设置样式
		效率太低，所以说，实际工作当中很少去使用
			* {}

	并集选择器（群组选择器）:
		同时选中class名叫d1的标签和class名
			.d1,.d2 {}
			
	交集选择器:
		选中div里的box，标签中同时有div和box才能被选中
			div.box {}
			
	后代选择器:
		d1后代里所有的d2,中间空格隔开
			.d1 .d2 {}
			
	div>a 子元素选择器！
		选择儿子辈的元素,选择div里子元素a  如果是div里的div里有a则不会被选中。
		和颜色相关的css属性都存在继承



伪类选择器
    能够帮助我们在现有标签的基础上添加额外的内容
    需要依靠主元素撑腰,如果主元素没有了,则伪类会一起消失

四个伪类选择器
	超链接初始状态:
		a:link{} 
	超链接被访问时的状态:
		a:visited{}	
	鼠标悬浮在上面的状态:
		a:hover{} 
	鼠标按下时的状态:
		a:active{}	
	四个状态顺序不能乱，但可以缺少几个



权重比较
	权重相同，谁在后面听谁的，谁靠的近听谁的。
	距离相同比较权重
	加了impotrant的单个属性的权重变得无限大
	important 提高单个权重，能不用就不用。用太多会导致权重的混乱。
	
	
	
css3选择器
	属性选择器
		div里所有有class的被选中：选择具有某个属性的元素
			div[class]{
				color:red;
			}
		div里精确选择d1的class：选择某个属性等于指定值的元素
			div[class="d1"] {
				color:red;
			}
		div里选择class里以d为开头的所有元素。可以选中，d1,d2,d3.drgerg,dggs。只要谁d开头的就可以，选择器里的d可以是多个字符例如以d1a开头
			div[class^="d"]{
				color：red；
			}
		div里选中div元素class属性值以d为结尾的所有元素
			div[class$="d"]{
				color：red；
			}
		div里class属性中只要包含有d的都可以被选中
			div[class*="d"]{
				color：red；
			}
		div里class多个属性值的其中包含C的元素被选中
			div[class~="c"] {
				color：red；
			}
		div里选择zh的，可以选择zh-开头的
			div[class|="zh"] {
				color：red；
			}
		Tip：正则表达式^表示开始、$表示结束、*表示包含
		
	结构伪类选择器
		选中ul li 中的第一个子元素
			ul li:first-child
		选中ul li 中的最后一个子元素
			ul li:last-child
		选中ul li 中被指定的任意第几个元素
			ul li：nth-child（3）
		选中div里的唯一一个子元素p，如果有多个元素则都不被选中
			div p：only-child
		选中ul li同级标签里的第三个。可任意指定第几个
			ul li：nth-of-type(3){}
		选中ul唯一的一个ul，如果ul有同级的ul将不能被选中	
			ul:only-of-type{}
		选中整个页面中没有同级元素的元素。同级别的只有一个的被选中，同级别有多个的都不被选中	
			:only-of-type{}
		选中整个页面中所有li里同级的第一个元素	
			li:first-of-type{}
		选中li中倒数第二个元素，可指定任意第几个元素。	
			li:nth-last-child(2){}
		选中ul li 中所有的奇数元素
			ul li:nth-child(odd){}
		选中ul li 中所有的偶数元素	
			ul li:nth-child(even){}
		选中所有根元素{}相当于选中html。且优先级比直接选html权重高	
			:root{}
			:root{}和html{}的区别
			权重不同，root大于html。
			来源不同，范围不同，html只能用在在html中，：root还可以用在别的语言中
		选中没有内容的元素，如果元素里加了内容则不会被选中	
			i:empty{}
			
	目标伪类选择器
		被超链接指向，div设置id名和a标签超链接链接地址相同。点击a标签后a标签的锚点地址指向到div，然后被指向的div应用target选择器里的属性
			div：target{}
	
	UI元素状态伪类选择器
		使标签处于禁用状态
			input：disabled{}
		使标签处于启用状态	
			input：enabled
		选中input表单中处于被选中状态的元素	
			input：checked
		选中多行文本域中的，被鼠标选中的文字，选中或处于高亮状态的部分
			textarea：selection{}
	
	否定伪类选择器
		E:not(s) （IE6-8浏览器不支持:not()选择器。）
	
	动态伪类选择器
		E:link:链接伪类选择器
			选择匹配的E元素，而且匹配元素被定义了超链接并未被访问过。常用于链接描点上
		E:visited:链接伪类选择器
			选择匹配的E元素，而且匹配元素被定义了超链接并已被访问过。常用于链接描点上
		E:hover:用户行为选择器
			选择匹配的E元素，且用户鼠标停留在元素E上。IE6及以下浏览器仅支持a:hover
		E:active:用户行为选择器
			选择匹配的E元素，且匹配元素被激活。常用于链接描点和按钮上
			
	层级选择器
		E>F 子元素选择器
		E+F 相邻兄弟选择器
		E~F 通用选择器、普通兄弟选择器
	
	伪类选择器
		:after
		:before
		:first-letter
		:first-line
	