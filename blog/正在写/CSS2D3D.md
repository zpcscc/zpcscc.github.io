渐变：
在 css3 当中，通过渐变属性实现之前只能通过图片实现的渐变效果
线性渐变的模式主要是颜色从一个方向过渡到另外一个方向，而径向渐变则是以一个点为基点(圆心)，以点向四周进行渐变。渐变形状为一个圆，重复渐变则分为重复线性渐变和重复径向渐变，是对于前面两种渐变的一种重复模式。
线性渐变
linear-gradient:point| angle color percentage
point 表示方向，angle 表示角度。
方向关键字
to left 从右向左
to right 从左向右
to bottom 从上向下
to top 从下到上
to left top 从右下到左上
to right top 从左下到右上
to left bottom 从右上到左下
to right bottom 从左上到右下
角度
为正，则为顺时针变化
为负，则为逆时针变化
color 表示颜色，一般分为起始颜色、过渡颜色和结束颜色
percentage 表示百分比，一般表示颜色渐变过程中的百分比。
TIP：我们设置了渐变其实相当于设置了 background-image,也就是背景图片
ie 的线性渐变
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff',endColorstr='#ff0000',GradientType='1');
startColorstr 表示起始颜色
endColorstr 表示结束颜色
GradientType 值为 1 表示从左向右 值为 0 表示从上向下
径向渐变
径向渐变有些类似于放射性的，从点放射到四周
background: radial-gradient(center, shape size, start-color, ..., last-color);
正圆 circle
椭圆 ellipse
方向
需要注意的是当设置渐变方向的时候不能加 to
而是直接采用方向关键词的形式
并且添加浏览器前缀
例：
background: -webkit-radial-gradient(left,red,blue,pink);
起始位置
设置 length 来表示起始位置
background: -webkit-radial-gradient(140px 300px,red,blue,pink);
渐变百分比
通过百分比设置渐变百分比
background: -webkit-radial-gradient(red 20%, blue 30%, lightblue 50%);
设置径向渐变的横向半径和纵向半径
background: -webkit-radial-gradient(100px 100px,200px 300px,red,lightblue);
通过关键词设置渐变圆的大小
closest-side：最近边；
farthest-side：最远边；
closest-corner：最近角；
farthest-corner：最远角;
重复渐变
当我们在一个元素中需要将渐变进行重复时，可以使用重复渐变。重复渐变又分为重复线性渐变和重复径向渐变，用法很简单，只是在渐变属性的前面添加 repeating 即可。
background: -webkit-repeating-radial-gradient(100px 100px ,closest-side,blue,lightblue);
过渡
在 css3 中，通过过渡，可以让元素的动画变化放缓，从而具有更好的观感效果。
语法
transition: property duration timing-function delay;  
 transition 是一个简写属性
拆分后
transition-property 规定应用过度的 css 属性名称
none
all
property(css 属性名称，用逗号进行分隔)
transition-duration 定义过渡效果需要时间
单位 s|ms
transition-timing-function 规定过渡效果的时间曲线，默认是“ease”
过渡速度曲线
cubic-bezier (n,n,n,n) 贝塞尔曲线
(https://cubic-bezier.com/)
linear 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）
ease 规定慢速开始，然后变快，然后慢速结束的过渡效果(cubic-bezier(0.25,0.1,0.25,1))
ease-in 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）
ease-out 慢速结束过渡效果 等于 cubic-bezier(0,0,0.58,1)
ease-in-out 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
transition-delay 延迟  
 s|ms
给不同的属性设置过渡
transition: width 2s 1s,height 2s 2s,background-color 3s 1s;
CSS 2D
通过 2d 相关属性，我们可以实现位移、旋转、缩放、斜切等效果。
属性：
transform 2D /3D 转换属性
translate(x,y) 沿着 x y 移动元素/ translateX(n) translateY(n)
scale(x,y) 缩放 更改元素的宽度和高度 ,将宽度改为原来的 x 倍，高度改为原来的 y 倍 / scaleX(n) 更改宽度 scaleY(n) 更改高度
rotate(angle) 旋转
skew(x-angle,y-angle) 定义 2D 倾斜转换 沿着 x 轴和 y 轴 / skewX(angle) 沿着 x 轴转换 skewY(angle) 沿着 y 轴
tip：2D 效果主要针对的是页面当中的 x 轴和 y 轴进行的一系列的元素变化。
transform-origin 更改元素旋转基点
x：
left
right
center
length
%
y：
top
bottom
center
length
%
z：
length
tip：
元素一旦更改了基点之后会影响元素的变化效果
CSS 3d 转换
css3 中的 3d 效果只是视觉上的伪 3d
2d 转换主要围绕着 x 轴和 y 轴，3d 的转换相对于 2d 转换多了一个 z 轴
transform 2d/3d 转换
translate3d(x,y,z) / translateX translateY translateZ
scale3d(x,y,z) / scaleX scaleY scaleZ
rotate3d(x,y,angle) / rotateX(angle) rotateY(angle) rotateZ(angle)
transform-origin 更改基点
transform-style 开启 3D 空间
正常情况下，我们是没有办法创建 3D 空间的，我们需要通过属性 transform-style 属性来开启 3D 空间。
transform-style: flat|preserve-3d;
perspective 视距
观察者沿着平行于 Z 轴的视线与屏幕之间的距离即为视距的距离，简称视距。
视距要设置在父元素的身上，才会有效果。
perspective-origin 景深基点
决定的是从哪一个方向去查看元素
backface-visibibility 背面隐藏
当一个透明的多面体存在时，可以通过这个属性将重叠的透明的两面中的背面隐藏
animation 动画
如果需要让一个元素动起来，可以通过 animation 动画来实现
Animation-name 调用关键帧
Animation-duration 设置完成时间
Animation-timing-function 动画的速度曲线
Animation –delay 延迟
Animation-iteration-count 动画应该播放的次数
N 设置播放次数  
 infinite 无限次播放
Animation-direction 规定是否该轮流反向播放动画
Normal
alternate 动画应该轮流反向播放
Animation-play-state 暂停/运行
Paused 暂停
Running 运行
Animation-fill-mode 规定动画在播放之前或者之后，其动画效果是否可见
None 不改变默认
Forwards 当动画完成后保持最后一个属性值
Backwards 在 Animation –delay 指定的一段时间之内，在动画显示之前，应用开始属性值。
Both 向前和向后填充模式都被应用
Animation: name duration timing-function delay iteration -count direction
关键帧
@keyframes name {
0% {code ...}
10% {code ...}
20% {code ...}
}

​ 也可以通过 from 和 to 来设置:
​ @keyframes name {
​ from {}
​ to {}
​ }

animate 动画库
通过 animate 动画库可以实现一些动画效果
(https://daneden.github.io/animate.css/)
在代码中引入 animate.css，并且将相应的类名设置给不同的元素。
