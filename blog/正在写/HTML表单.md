表单控件:form	
	form属性规定输入域所属的一个或多个表单，form属性必须和所属表单的id
	form属性适用于所有input标签的类型，若需要引用一个以上的表单时，用空格分隔
	[注意]IE浏览器不支持该属性，只有元素拥有name属性，该属性才有效
	<form id="form" action="#">
		<input type="submit">
	</form>
	<input name="test" form="form">
	表单的作用:在网页中收集用户输入的信息数据
		用于显示，手机用户数据，并提交给服务器
		一个完整的表单分为：
			实现数据交互的可见界面元素（前端）
			提交后的数据处理（后端）
<form>
	<input type="text" value="请输入用户名:">
</form>
	form控件属性:
		action:表单收集到的文件信息所提交到的地址
			值为空时,数据默认提交到当前页面
		method:提交属性所用的方法
			值为空时,数据默认使用get方法提交
			get方法:
				明文提交，提交的数据会显示在地址栏中
				安全性可能不高
				数据提交时，有大小限制，为2kb
				使用的场合：
					在搜索关键字时
					向服务器索要数据时
			post方法:
				隐式提交，提交的数据不会显示
				安全性高
				提交数据时，无大小限制
				使用的场合：
					登陆，注册，上传文件。。。
				get和post哪个快?
					get快，拿数据直接提交
					post慢，先请求，同意后再回来拿数据，再带着数据提交,共三次。安全性高，但速度慢。
				get和post两者的区别？
					两者都是tcp协议，没有本质区别。get走的是请求头，post是请求体。

input控件:input
<input type="password" value="请输入密码">
	type属性:用来规定input元素的类型
		[注意]如果input元素没有设置type属性，或者设置的值在浏览器中不支持，那么输入类型会变成type="text"
		text:普通文本,输入框原样显示
		password:输入密码,输入框会显示***号
			Tip:显示密码和隐藏密码可以通过更改type值来实现
		submit:提交按钮,提交输入的内容
		reset:重置,清空所有输入框的内的信息
		button:最普通的按钮,无特殊效果，可按下
			定义可点击按钮（多数情况下，用于通过JavaScript启动脚本）
		radio:单选按钮,一个空心原点,可以选中,选中后中间显示黑色圆点
			其中设置checked的为默认选中状态
			[注意]radio类型的input元素无法设置padding和border(除IE10-浏览器以外)
		checkbox:多选按钮,方形选择框,可选择多个,选中后框内显示√
			其中设置checked的为默认选中状态
			[注意]checkbox类型的input元素无法设置padding和border(除IE10-浏览器以外)
		maxlength 最大输入字符数量
		file:定义输入字段和 "浏览"按钮，供文件上传
		hideen:定义隐藏的输入字段
			定义隐藏输入类型用于在表单中增加对用户不可见，但需要提交的额外数据
			[注意]disabled属性无法与type="hidden"的input元素一起使用
		image:定义图像形式的提交按钮
			type="image"的input输入类型定义图像形式的提交按钮，该类型可以设置width、height、src、alt这四个属性
			用图片作为提交按钮会一起发送点击在图片上的x和y坐标，这样可以与服务器端图片地图结合使用，如果图片有name属性，也会随坐标发送
	placeholder:信息输入提示
		显示在输入框的提示,用户输入内容后自动消失
		当输入框没有内容时会再次出现
		placeholder属性提供占位符文字，描述输入域所期待的值。占位符会在输入域为空时显示出现，在输入域获得焦点时消失
		placeholder属性适用于以下类型的input元素:text、search、url、tel、email、password
		[注意]IE9-浏览器不支持
		要修改placeholder的颜色需要使用::placeholder
			::placeholder{color:green;}
	value:默认值
		value属性为input元素设定值。对于不同的输入类型，value属性的用法也不同：
			type="button"、"reset"、"submit"用于定义按钮上的显示的文本
			type="text"、"password"、"hidden"用于定义输入字段的初始值
			type="checkbox"、"radio"、"image"用于定义与输入相关联的值
		显示在输入框的默认值,用户需要删除此默认值后再输入信息
		[注意1]type="checkbox"或"radio"必须设置value属性
		[注意2]value属性无法与type="file"的input元素一起使用
	name:名字
		name属性用于规定input元素的名称，用于对提交到服务器后的表单数据进行标识，或者在客户端通过javascript引用表单数据
		给后端的一个参照,相同命名的会被认为是同一组,例如单选中多个input选项可用同一个name值归为单选组
		控件的名称，提供给服务器使用
		如果没有该属性，则input元素无法提交，所有的表单控件都具有name属性
		[注意]只有设置了name属性的表单元素才能在提交表单时传递它们的值
		name的值：
			匈牙利命名法
			驼峰命名法
			控件缩写+功能名称
	checked:默认选中
		checked属性规定在页面加载时应该被预先选定的input元素，也可以在页面加载后，通过javascript进行设置
	disabled:禁用
		disabled属性规定应该禁用input元素。被禁用的字段是不能修改的，也不可以使用tab按键切换到该字段，但可以选中或拷贝其文本
		[注意1]disabled属性无法与type="hidden"的input元素一起使用
		　[注意2]对于IE7-浏览器必须设置为disabled="disabled"，而不可以直接设置disabled，否则使用javascript控制时将失效
	enabled:
		启用
	alt：
		alt属性为图像输入规定替代文本，功能类似于image元素的alt属性，为用户由于某些原因无法查看图像时提供备选信息
		[注意]alt属性只能与type="image"的input元素配合使用
	size：
		size属性对于type="text"或"password"的input元素是可见的字符数；而对于其他类型，是以像素为单位的输入字段宽度
		[注意]由于size属性是一个可视化的设计属性，推荐使用CSS来代替它
	src：
		src属性作为提交按钮显示的图像的URL
		[注意]src属性只能且必须与type="image"的input元素配合使用
	readonly：
		readonly属性规定输入字段为只读。只读字段是不能修改的，但用户仍然可以使用tab按键切换到该字段，还可以选中或拷贝其文本
		readonly属性可与type="text"或"password"的input元素配合使用
		[注意]IE7-浏览器不支持使用javascript控制readonly属性
	maxlength：
		maxlength属性规定输入字段的最大长度，以字符个数计
		[注意]该属性只能与type="text"或type="password"的input元素配合使用
	autocomplete：
		autocomplete属性可以在个别元素或整个表单上开启或关闭浏览器的自动完成功能。
		当用户在字段开始键入时，浏览器基于之前键入过的值，显示出在字段中填写的选项
		autocomplete属性适用form元素以及以下类型的input元素：text、search、url、telephone、email、password、date pickers、range、color
		[注意]IE浏览器不支持该属性，只有元素拥有name属性，该属性才有效
	autofocus：
		autofocus属性规定在页面加载时，域自动地获得焦点
		autofous属性适用于button、input、keygen、select和textarea元素
	novalidate：
		novalidate属性规定在提交表单时不验证form或input域
		novalidate属性适用于form元素以及以下类型的input元素：text、search、url、telephone、email、password、date pickers、range、color
		[注意]IE9-浏览器不支持
	height：
		height属性用于规定image类型的input标签的图像高度
	width：
		width属性用于规定image类型的input标签的图像宽度
		[注意]该属性只适用于image类型的input标签
	min：
		最小值
	max：
		最大值
	step：
		数字间隔
	multiple：
		multiple属性规定按住ctrl按键，输入字段可以选择多个值
		该属性适用于type="email"和"file"的input元素
		[注意]该属性IE9-浏览器不支持
	pattern：
		规定用于验证input域的模式
		模型pattern是正则表达式
		pattern属性适用于以下类型的input元素：text、search、url、tel、email、password
		[注意]IE9-浏览器及safari浏览器不支持
		<form action="#">
			<input pattern="\d{3}">    
			<input type="submit">
		</form>
	required：
		required属性规定必须在提交之前填写输入域(不能为空)
		required属性适用于以下类型的input元素：text、search、url、telephone、email、password、date pickers、number、checkbox、radio、file
		[注意]IE9-浏览器及safari浏览器不支持
	新增类型：
		color：定义调色板
			type="color"的input输入类型会创建一个调色板用来选择颜色，颜色值以URL编码后的十六进制数值提交。如黑色会以%23000000发送，其中%23是#的URL编码
			[注意]safari和IE不支持该类型
		date：
			定义选取日、月、年的输入域 
		datetime：
			定义选取时间、日 月、年的输入域(UTC时间)
		datetime-local:
			定义选取时间、日 月、年的输入域(本地时间)
		email：
			定义包含email地址的输入域
			type="email"的input输入类型用于表示语义上的e-mail地址输入域，会自动验证email域的值，外观上与type="text"的input输入类型没有差异，在手机端会唤出英文键盘 
			email类型的input元素支持multiple属性
			[注意]IE9-浏览器及safari浏览器不支持
		month：
			定义选取月、年的输入域
		number：
			定义包含数值的输入域
			type="number"的input输入类型用于处理数字输入，在手机端会唤出数字键盘
			[注意]IE不支持该类型
			属性：
				max允许最大值
				min允许最小值
				step规定合法的数字间隔
				value默认值
		range：
			定义包含一定范围内数字值的输入域
			type="range"的input输入类型用于处理包含在一定范围内的数字输入，类似于type="number"的input类型 
			[注意]IE9-不支持该类型
			属性：
				max规定允许的最大值
				min规定允许的最小值
				step规定合法的数字间隔
				value规定默认值
				Tip：如果不设置min和max，那么默认值为0 和100
		search：
			定义搜索域
			　type="search"的input输入类型用于表示语义上的搜索框，外观上与type="text"的input输入类型没有差异
		tel：
			定义包含电话号码的输入域
			type="tel"的input输入类型用于表示语义上的电话输入域，外观上与type="text"的input输入类型没有差异，在手机端会唤出数字键盘
		time：
			定义选取月、年的输入域
		url：
			定义包含URL地址的输入域 
			type="url"的input输入类型用于表示语义上的url地址的输入域，会自动验证url域的值，外观上与type="text"的input输入类型没有差异
			[注意]IE9-浏览器及safari浏览器不支持
		week：
			定义选取周、年的输入域
			
			
	表单重写属性：
		表单重写属性允许重写form元素的某些属性设定。其中，formnovalidate适用于button或input元素，而其他属性适用于submit或reset的button或input元素
		formaction：
			重写表单的action属性
		formenctype：
			重写表单的enctype属性
			绝对大数情况下并不需要设置
		formmethod：
			重写表单的method属性
		formnovalidate：
			重写表单的novalidate属性
		formtarget：
			重写表单的target属性





### select控件

```css
select元素用来定义一个下拉列表，包含任意数量的option和optgroup元素
	属性：
		autofocus：规定在页面加载后文本区域自动获得焦点
		disabled：规定禁用该下拉列表
		form：规定文本区域所属的一个或多个表单
		multiple：规定可选择多个选项
		name：规定下拉列表的名称
		size：规定下拉列表中可见选项的数目
			注意：size不可为0，默认为1
		注意：safari浏览器无法设置高度
```





### option控件

​	option元素定义下拉列表中的一个选项
​	option元素有两种应用场景，除了用于下拉列表select外，还可以用于选项列表datalist中
​	属性：
​		disabled：规定此选项应在首次加载时被禁用
​		label：定义当使用optgroup时所使用的标注，替代option元素内容
​			注意：firefox不支持label属性
​		selected：规定选项在首次显示在列表中时表现为选中状态
​		value：定义送往服务器的选项值
​			注意：当设置value值时，服务器提交的是value的值；否则提交给服务器的是option的元素内容
​	注意：option无法设置margin、padding、border等盒模型样式	

optgroup控件：
	optgroup元素定义选项组，用于组合选项
		注意：optgroup无法设置margin、padding、border等盒模型样式
		属性：；
			label：为选项组规定描述(必须)
			disabled：规定禁用该选项组(可选)

button控件：
	定义按钮
	button元素内部可以放置文本或图像或其他多媒体内容
	禁止使用的元素是图像映射，因为它对鼠标和键盘敏感的动作会干扰表单按钮的行为
	始终具有type属性
		IE7-浏览器的默认类型是button
			IE7-提交button元素之间的文本
		而其他浏览器的默认类型是submit
			而其他浏览器则会提交value属性的内容

leble控件：
	label元素为input元素定义标注，建立文字标签与表单控件的关联。在label元素内点击文本会触发此控件，选择该文本时浏览器会自动把焦点转到和标签相关的表单控件上
	label元素有两种用法：一种是使用for属性，另一种是将表单控件嵌套到label内部。但IE6浏览器只识别使用for属性的方法
	属性：
		for：规定label绑定到哪个表单元素
		form：规定label字段所属的一个或多个表单
		注意：label标签的for属性要与相关元素的id属性相同
		

​	




textarea多行文本域:
	textarea定义多行的文本输入控件，文本区可容纳无限数量的文本
	注意：浏览器不允许textarea嵌套textarea
	注意：IE8-浏览器宽高设置不包含滚动条；其他浏览器宽高设置包含滚动条
<textarea></textarea>
	完成多行文本的录入功能
		属性：
			name  规定文本区的名称
			value  表示文本区的值
			disabled  规定禁用该文本区    
				IE7-浏览器不支持通过setAttribute('disabled','')的写法，必须设置为setAttribute('disabled','disabled')
			readonly  规定文本区为只读 
				注意：IE7-浏览器不支持通过javascript设置readonly属性
			autofous  规定在页面加载后文本区域自动获得焦点
				注意：IE9-浏览器不支持该属性
			required  规定文本区域是必填的
				注意：IE9-浏览器和safari浏览器不支持该属性
			placeholder  规定描述文本区域预期值的简短提示
				注意：IE9-浏览器不支持该属性
			maxlength  规定文本区域的最大字符数
				注意：IE9-浏览器不支持该属性
			cols  规定文本区内的可见列数
			rows  规定文本区内的可见行数
				注意：可以用cols和rows来规定textarea的尺寸，但更好的办法是使用CSS的height和width属性
			wrap  规定当在表单中提交时，文本区域中折行如何处理
				 当wrap="soft"，表示表单提交时，虽然文字在屏幕上折行，但提交的数据里不会有换行符(默认值)；而当wrap="hard"，表示表单提交时，提交的数据包含文本换行符%0D%0A


​	
文字与表单相连接:label
<label></label>
​	作用：
​		label元素为input元素定义标注，建立文字标签与表单控件的关联。在label元素内点击文本会触发此控件，选择该文本时浏览器会自动把焦点转到和标签相关的表单控件上
​		label元素有两种用法：一种是使用for属性，另一种是将表单控件嵌套到label内部。但IE6浏览器只识别使用for属性的方法
​		将文字与表单控件相关联，关联后，点击文字就如同点击表单
​	文件选择框
​		<input type="file">
​				允许打开文件选择框，选择文件进行上传
​			属性：
​				name 缩写 txt
​				for  规定label绑定到哪个表单元素
​				form  规定label字段所属的一个或多个表单
​				注意：label标签的for属性要与相关元素的id属性相同
​			value：
​				值
​			注意：
​				在使用文件时，必须设置method为post
​	控件分组
​		标记：<fieldset></fielset>
​			fieldset元素用于将表单内的相关元素分组，提升可访问性，多数浏览器用一个简单的边框来显示fieldset
​				属性：
​					disabled  禁用fieldset
​					form  规定fieldset所属的一个或多个表单  
​					name  规定fieldset的名称
​		标题：<legend></legend>
​			legend元素用于定义fieldset元素的标题
​				<fieldset>
​				    <legend>健康信息</legend>
​				    身高：<input type="text" />
​				    体重：<input type="text" />
​				</fieldset>




​	