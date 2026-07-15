"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[1336],{

/***/ 21336
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ screenshot)
});

;// ./src/thirdparty/screenshot/lib/common-methods/CanvasPatch.ts
// 获取canvas上下文对象，对高分屏进行修复
const getCanvas2dCtx=(canvas,width,height)=>{// 获取设备像素比
const dpr=window.devicePixelRatio||1;canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);canvas.style.width=`${width}px`;canvas.style.height=`${height}px`;const ctx=canvas.getContext('2d');if(ctx){// 对画布进行缩放处理
ctx.scale(dpr,dpr);}return ctx;};/* harmony default export */ const CanvasPatch = (getCanvas2dCtx);
;// ./src/thirdparty/screenshot/lib/common-methods/NonNegativeData.ts
/**
 * 对参数进行处理，小于0则返回0
 */const nonNegativeData=data=>{return Math.max(data,0);};/* harmony default export */ const NonNegativeData = (nonNegativeData);
;// ./src/thirdparty/screenshot/lib/common-methods/GetToolRelativePosition.ts
/**
 * 获取截图工具栏相对于视口的位置
 */const getToolRelativePosition=(left,top,dom=document.body)=>{const rect=dom.getBoundingClientRect();return{left:left||Math.abs(rect.left),top:top||Math.abs(rect.top)};};/* harmony default export */ const GetToolRelativePosition = (getToolRelativePosition);
;// ./src/thirdparty/screenshot/lib/common-methods/TakeOutHistory.ts
/**
 * 取出一条历史记录
 */const takeOutHistory=()=>{const data=new InitData();data.popHistory();const screenShortCanvas=data.getScreenShotContainer()?.getContext('2d');if(screenShortCanvas!=null&&data.getHistory().length>0){// eslint-disable-line eqeqeq
screenShortCanvas.putImageData(data.getHistory()[data.getHistory().length-1].data,0,0);}data.setUndoClickNum(data.getUndoClickNum()+1);// 历史记录已取完，禁用撤回按钮点击
if(data.getHistory().length-1<=0){data.setUndoClickNum(0);data.setUndoStatus(false);}};/* harmony default export */ const TakeOutHistory = (takeOutHistory);
;// ./src/thirdparty/screenshot/lib/main-entrance/PlugInParameters.ts
let enableWebRtc=false;// electron环境下使用webrtc需要自己传入屏幕流
let screenFlow=null;// 数据初始化标识
let initStatus=false;// 画布宽高
let canvasWidth=0;let canvasHeight=0;// 展示截屏图片至容器
let showScreenData=false;let screenShotDom=null;// 蒙层颜色
const maskColor={r:0,g:0,b:0,a:0.6};let writeBase64=true;let cutBoxBdColor='#2CABFF';// 最大可撤销次数
let maxUndoNum=15;// 是否使用等比例箭头
let useRatioArrow=false;// 开启图片自适应
let imgAutoFit=false;let saveCallback=null;let saveImgTitle=null;// 截屏比率
let ratio=window.devicePixelRatio||1;class PlugInParameters{constructor(){// 标识为true时则初始化数据
if(initStatus){enableWebRtc=false;canvasWidth=0;canvasHeight=0;cutBoxBdColor='#2CABFF';showScreenData=false;writeBase64=true;screenFlow=null;// 初始化完成设置其值为false
initStatus=false;screenShotDom=null;saveCallback=null;maxUndoNum=15;useRatioArrow=false;imgAutoFit=false;saveImgTitle=null;ratio=window.devicePixelRatio||1;}}// 设置数据初始化标识
setInitStatus(status){initStatus=status;}// 获取数据初始化标识
getInitStatus(){return initStatus;}// 获取webrtc启用状态
getWebRtcStatus(){return enableWebRtc;}// 设置webrtc启用状态
setWebRtcStatus(status){enableWebRtc=status;}setScreenShotDom(dom){screenShotDom=dom;}getCutBoxBdColor(){return cutBoxBdColor;}setCutBoxBdColor(color){cutBoxBdColor=color;}getScreenShotDom(){return screenShotDom;}// 获取屏幕流
getScreenFlow(){return screenFlow;}// 设置屏幕流
setScreenFlow(stream){screenFlow=stream;}// 获取画布宽高
getCanvasSize(){return{canvasWidth,canvasHeight};}// 设置画布宽高
setCanvasSize(width,height){canvasWidth=width;canvasHeight=height;}// 获取展示图片至容器的状态
getShowScreenDataStatus(){return showScreenData;}// 设置展示图片至容器的状态
setShowScreenDataStatus(status){showScreenData=status;}// 设置蒙层颜色
setMaskColor(color){maskColor.r=color.r;maskColor.g=color.g;maskColor.b=color.b;maskColor.a=color.a;}getMaskColor(){return maskColor;}// 设置截图数据的写入状态
setWriteImgState(state){writeBase64=state;}getWriteImgState(){return writeBase64;}setSaveCallback(saveFn){saveCallback=saveFn;}getSaveCallback(){return saveCallback;}setMaxUndoNum(num){maxUndoNum=num;}getMaxUndoNum(){return maxUndoNum;}setRatioArrow(state){useRatioArrow=state;}getRatioArrow(){return useRatioArrow;}setImgAutoFit(state){imgAutoFit=state;}getImgAutoFit(){return imgAutoFit;}setSaveImgTitle(title){saveImgTitle=title;}getSaveImgTitle(){return saveImgTitle;}setRatio(state){ratio=state;}getRatio(){return ratio;}}
;// ./src/thirdparty/screenshot/lib/main-entrance/InitData.ts
// 裁剪框修剪状态
let draggingTrim=false;// 裁剪框拖拽状态
let dragging=false;// 截图工具栏点击状态
let toolClickStatus=false;// 当前选择的颜色
let selectedColor='#F53340';// 当前点击的工具栏名称
let toolName='';//  当前选择的画笔大小
let penSize=2;// 马赛克工具的笔触大小
let mosaicPenSize=10;// 裁剪框顶点边框直径大小
const borderSize=10;// 撤销点击次数
let undoClickNum=0;// 画笔历史记录
let InitData_history=[];// 文本输入工具栏点击状态
const textClickStatus=false;// 工具栏超出截图容器状态
let toolPositionStatus=false;// 裁剪框位置参数
let cutOutBoxPosition={startX:0,startY:0,width:0,height:0};// 获取截图容器dom
let screenShotController=null;// 获取截图工具栏容器dom
let toolController=null;let cutBoxSizeContainer=null;// 获取文本输入区域dom
let textInputController=null;// 截图工具栏画笔选择dom
let optionIcoController=null;// 截图工具栏文字大小选择dom
let optionTextSizeController=null;let brushSelectionController=null;let textSizeContainer=null;let fontSize=17;let optionController=null;let colorSelectController=null;let rightPanel=null;let colorSelectPanel=null;let undoController=null;// 屏幕截图容器
let screenShotImageController=null;// 截图容器是否可滚动
let noScrollStatus=false;// 数据初始化标识
let InitData_initStatus=false;// 当前工具栏内选中的工具
let activeTool='';let textInfo;// 是否需要还原页面的滚动条状态
let resetScrollbarState=false;// 当前是否处于文本编辑状态
let textEditState=false;class InitData{constructor(){// 标识为true时则初始化数据
if(InitData_initStatus){// 初始化完成设置其值为false
InitData_initStatus=false;screenShotController=null;dragging=false;toolController=null;textInputController=null;optionController=null;optionIcoController=null;optionTextSizeController=null;brushSelectionController=null;textSizeContainer=null;cutBoxSizeContainer=null;cutOutBoxPosition={startX:0,startY:0,width:0,height:0};toolClickStatus=false;resetScrollbarState=false;textEditState=false;toolPositionStatus=false;selectedColor='#F53340';toolName='';penSize=2;fontSize=17;mosaicPenSize=10;InitData_history=[];undoClickNum=0;colorSelectController=null;rightPanel=null;colorSelectPanel=null;undoController=null;}}// 设置数据初始化标识
setInitStatus(status){InitData_initStatus=status;}// 设置截图容器宽高
setScreenShotInfo(width,height){this.getScreenShotContainer();if(screenShotController===null)return;// 增加截图锁屏
if(noScrollStatus){document.body.classList.add('__screenshot-lock-scroll');}screenShotController.width=width;screenShotController.height=height;}// 设置截图容器位置
setScreenShotPosition(left,top){this.getScreenShotContainer();if(screenShotController===null)return;const{left:rLeft,top:rTop}=GetToolRelativePosition(left,top);screenShotController.style.left=`${rLeft}px`;screenShotController.style.top=`${rTop}px`;}// 显示截图区域容器
showScreenShotPanel(){this.getScreenShotContainer();if(screenShotController===null)return;screenShotController.style.display='block';}// 获取截图容器dom
getScreenShotContainer(){screenShotController=document.querySelector('#screenShotContainer');return screenShotController;}// 获取截图工具栏dom
getToolController(){toolController=document.querySelector('#toolPanel');return toolController;}// 获取裁剪框尺寸显示容器
getCutBoxSizeContainer(){cutBoxSizeContainer=document.querySelector('#cutBoxSizePanel');return cutBoxSizeContainer;}// 获取文本输入区域dom
getTextInputController(){textInputController=document.querySelector('#textInputPanel');return textInputController;}// 获取文本输入工具栏展示状态
getTextStatus(){return textClickStatus;}// 获取屏幕截图容器
getScreenShotImageController(){return screenShotImageController;}// 设置屏幕截图
setScreenShotImageController(imageController){screenShotImageController=imageController;}// 设置截图工具栏展示状态
setToolStatus(status){toolController=this.getToolController();if(status){toolController.style.display='block';return;}toolController.style.display='none';}// 设置裁剪框尺寸显示容器展示状态
setCutBoxSizeStatus(status){if(cutBoxSizeContainer===null)return;if(status){cutBoxSizeContainer.style.display='flex';return;}cutBoxSizeContainer.style.display='none';}// 设置裁剪框尺寸显示容器位置
setCutBoxSizePosition(x,y){if(cutBoxSizeContainer===null)return;const{left,top}=GetToolRelativePosition(x,y);cutBoxSizeContainer.style.left=`${left}px`;let sscTop=0;if(screenShotController){sscTop=Number.parseInt(screenShotController.style.top);}cutBoxSizeContainer.style.top=`${top+sscTop}px`;}setTextEditState(state){textEditState=state;}getTextEditState(){return textEditState;}// 设置裁剪框尺寸
setCutBoxSize(width,height){if(cutBoxSizeContainer===null)return;// width和height保留整数
const floorWidth=Math.floor(width);const floorHeight=Math.floor(height);const childrenPanel=cutBoxSizeContainer.childNodes;// p标签已存在直接更改文本值即可
if(childrenPanel.length>0){childrenPanel[0].textContent=`${floorWidth} * ${floorHeight}`;return;}// 不存在则渲染
const textPanel=document.createElement('p');textPanel.textContent=`${floorWidth} * ${floorHeight}`;cutBoxSizeContainer.append(textPanel);}// 设置文本输入工具栏展示状态
setTextStatus(status){textInputController=this.getTextInputController();if(textInputController===null)return;if(status){// 显示文本输入工具
textInputController.style.display='block';return;}textInputController.style.display='none';}// 设置截图工具位置信息
setToolInfo(left,top){toolController=document.querySelector('#toolPanel');const{left:rLeft,top:rTop}=GetToolRelativePosition(left,top);toolController.style.left=`${rLeft}px`;let sscTop=0;if(screenShotController){sscTop=Number.parseInt(screenShotController.style.top);}toolController.style.top=`${rTop+sscTop}px`;}// 获取截图工具栏点击状态
getToolClickStatus(){return toolClickStatus;}// 设置截图工具栏点击状态
setToolClickStatus(status){toolClickStatus=status;}setResetScrollbarState(state){resetScrollbarState=state;}getResetScrollbarState(){return resetScrollbarState;}// 获取裁剪框位置信息
getCutOutBoxPosition(){return cutOutBoxPosition;}getDragging(){return dragging;}setDragging(status){dragging=status;}getDraggingTrim(){return draggingTrim;}getToolPositionStatus(){return toolPositionStatus;}setToolPositionStatus(status){toolPositionStatus=status;}setDraggingTrim(status){draggingTrim=status;}// 设置裁剪框位置信息
setCutOutBoxPosition(mouseX,mouseY,width,height){cutOutBoxPosition.startX=mouseX;cutOutBoxPosition.startY=mouseY;cutOutBoxPosition.width=width;cutOutBoxPosition.height=height;}setFontSize(size){fontSize=size;}// 设置截图工具栏画笔选择工具展示状态
setOptionStatus(status){// 获取截图工具栏与三角形角标容器
optionIcoController=this.getOptionIcoController();optionController=this.getOptionController();if(optionIcoController===null||optionController===null)return;if(status){optionIcoController.style.display='block';optionController.style.display='block';return;}optionIcoController.style.display='none';optionController.style.display='none';}getFontSize(){return fontSize;}// 设置截图工具栏文字大小下拉框选项选择工具展示状态
setTextSizeOptionStatus(status){optionTextSizeController=this.getOptionTextSizeController();if(optionTextSizeController===null)return;if(status){optionTextSizeController.style.display='flex';return;}optionTextSizeController.style.display='none';}setTextSizePanelStatus(status){textSizeContainer=this.getTextSizeContainer();if(textSizeContainer===null)return;if(status){textSizeContainer.style.display='flex';return;}textSizeContainer.style.display='none';}setBrushSelectionStatus(status){brushSelectionController=this.getBrushSelectionController();if(brushSelectionController===null)return;if(status){brushSelectionController.style.display='block';return;}brushSelectionController.style.display='none';}// 隐藏画笔工具栏三角形角标
hiddenOptionIcoStatus(){optionIcoController=this.getOptionIcoController();if(optionIcoController===null)return;optionIcoController.style.display='none';}// 获取截图工具栏画笔选择工具dom
getOptionIcoController(){optionIcoController=document.querySelector('#optionIcoController');return optionIcoController;}getTextSizeContainer(){textSizeContainer=document.querySelector('#textSizePanel');return textSizeContainer;}getOptionTextSizeController(){optionTextSizeController=document.querySelector('#textSelectPanel');return optionTextSizeController;}getBrushSelectionController(){brushSelectionController=document.querySelector('#brushSelectPanel');return brushSelectionController;}getOptionController(){optionController=document.querySelector('#optionPanel');return optionController;}// 设置画笔选择工具栏位置
setOptionPosition(position){// 获取截图工具栏与三角形角标容器
optionIcoController=this.getOptionIcoController();optionController=this.getOptionController();if(optionIcoController===null||optionController===null)return;// 修改位置
const toolPosition=this.getToolPosition();if(toolPosition==null)return;// eslint-disable-line eqeqeq
const icoLeft=`${toolPosition.left+position}px`;const icoTop=`${toolPosition.top+44}px`;const optionLeft=`${toolPosition.left}px`;const optionTop=`${toolPosition.top+44+6}px`;optionIcoController.style.left=icoLeft;optionIcoController.style.top=icoTop;optionController.style.left=optionLeft;optionController.style.top=optionTop;}// 获取工具栏位置
getToolPosition(){toolController=this.getToolController();if(toolController===null)return;return{left:toolController.offsetLeft,top:toolController.offsetTop};}// 获取/设置当前选择的颜色
getSelectedColor(){return selectedColor;}setSelectedColor(color){selectedColor=color;colorSelectPanel=this.getColorSelectPanel();if(colorSelectPanel===null)return;colorSelectPanel.style.backgroundColor=selectedColor;}getColorSelectPanel(){colorSelectPanel=document.querySelector('#colorSelectPanel');return colorSelectPanel;}// 获取/设置当前点击的工具栏条目名称
getToolName(){return toolName;}setToolName(itemName){toolName=itemName;}// 获取/设置当前画笔大小
getPenSize(){return penSize;}setPenSize(size){penSize=size;}getMosaicPenSize(){return mosaicPenSize;}setMosaicPenSize(size){mosaicPenSize=size;}getBorderSize(){return borderSize;}getHistory(){return InitData_history;}shiftHistory(){return InitData_history.shift();}popHistory(){return InitData_history.pop();}pushHistory(item){InitData_history.push(item);}getUndoClickNum(){return undoClickNum;}setUndoClickNum(clickNumber){undoClickNum=clickNumber;}getColorPanel(){colorSelectController=document.querySelector('#colorPanel');return colorSelectController;}setColorPanelStatus(status){colorSelectController=this.getColorPanel();if(colorSelectController===null)return;if(status){colorSelectController.style.display='flex';return;}colorSelectController.style.display='none';}getNoScrollStatus(){return noScrollStatus;}setNoScrollStatus(status){if(status!=null){// eslint-disable-line eqeqeq
noScrollStatus=status;}}setActiveToolName(toolName){activeTool=toolName;}getActiveToolName(){return activeTool;}setTextInfo(info){textInfo=info;}getTextInfo(){return textInfo;}getRightPanel(){rightPanel=document.querySelector('#rightPanel');return rightPanel;}setRightPanel(status){rightPanel=this.getRightPanel();if(rightPanel===null)return;if(status){rightPanel.style.display='flex';return;}rightPanel.style.display='none';}setUndoStatus(status){undoController=this.getUndoController();if(undoController===null)return;if(status){// 启用撤销按钮
undoController.classList.add('undo');undoController.classList.remove('undo-disabled');undoController.addEventListener('click',this.cancelEvent);return;}// 禁用撤销按钮
undoController.classList.add('undo-disabled');undoController.classList.remove('undo');undoController.removeEventListener('click',this.cancelEvent);}cancelEvent(){TakeOutHistory();}getUndoController(){undoController=document.querySelector('#undoPanel');return undoController;}// 销毁截图容器
destroyDOM(){if(screenShotController===null||toolController===null||optionIcoController===null||optionController===null||textInputController===null||cutBoxSizeContainer===null){return;}const plugInParameters=new PlugInParameters();// 销毁dom
if(noScrollStatus){document.body.classList.remove('__screenshot-lock-scroll');}screenShotController.remove();toolController.remove();optionIcoController.remove();optionController.remove();textInputController.remove();cutBoxSizeContainer.remove();if(document.body.classList.contains('no-cursor')){document.body.classList.remove('no-cursor');}if(resetScrollbarState){// 还原滚动条状态
document.documentElement.classList.remove('hidden-screen-shot-scroll');document.body.classList.remove('hidden-screen-shot-scroll');}// 重置插件全局参数状态
plugInParameters.setInitStatus(true);}}
;// ./src/thirdparty/screenshot/lib/common-methods/GetColor.ts
const getColor=index=>{const data=new InitData();let currentColor='#F53440';switch(index){case 1:{currentColor='#F53440';break;}case 2:{currentColor='#F65E95';break;}case 3:{currentColor='#D254CF';break;}case 4:{currentColor='#12A9D7';break;}case 5:{currentColor='#30A345';break;}case 6:{currentColor='#FACF50';break;}case 7:{currentColor='#F66632';break;}case 8:{currentColor='#989998';break;}case 9:{currentColor='#000000';break;}case 10:{currentColor='#FEFFFF';break;}}data.setSelectedColor(currentColor);// 隐藏颜色选择面板
data.setColorPanelStatus(false);return currentColor;};/* harmony default export */ const GetColor = (getColor);
;// ./src/thirdparty/screenshot/lib/common-methods/SelectColor.ts
const selectColor=()=>{const data=new InitData();// 显示颜色选择面板
data.setColorPanelStatus(true);};/* harmony default export */ const SelectColor = (selectColor);
;// ./src/thirdparty/screenshot/lib/common-methods/SelectTextSize.ts
const selectTextSize=()=>{const data=new InitData();// 显示文字大小选择面板
data.setTextSizeOptionStatus(true);};const setTextSize=size=>{const data=new InitData();// 设置字体大小
data.setFontSize(size);};const getTextSize=()=>{const data=new InitData();// 获取字体大小
return data.getFontSize();};const hiddenTextSizeOptionStatus=()=>{const data=new InitData();// 隐藏文字大小选择面板
data.setTextSizeOptionStatus(false);};const hiddenColorPanelStatus=()=>{const data=new InitData();// 隐藏颜色选择面板
data.setColorPanelStatus(false);};
;// ./src/thirdparty/screenshot/lib/common-methods/GetBrushSelectedName.ts
/**
 * 获取画笔选项对应的选中时的class名
 * @param itemName
 */const getBrushSelectedName=itemName=>{let className='';switch(itemName){case 1:{className='brush-small-active';break;}case 2:{className='brush-medium-active';break;}case 3:{className='brush-big-active';break;}}return className;};/* harmony default export */ const GetBrushSelectedName = (getBrushSelectedName);
;// ./src/thirdparty/screenshot/lib/common-methods/GetSelectedCalssName.ts
const getSelectedClassName=index=>{let className='';switch(index){case 1:{className='square-active';break;}case 2:{className='round-active';break;}case 3:{className='right-top-active';break;}case 4:{className='brush-active';break;}case 5:{className='mosaicPen-active';break;}case 6:{className='text-active';}}return className;};/* harmony default export */ const GetSelectedCalssName = (getSelectedClassName);
;// ./src/thirdparty/screenshot/lib/common-methods/SetSelectedClassName.ts
/**
 * 为当前点击项添加选中时的class，移除其兄弟元素选中时的class
 * @param mouseEvent 需要进行操作的元素
 * @param index 当前点击项
 * @param isOption 是否为画笔选项
 */const setSelectedClassName=(mouseEvent,index,isOption)=>{// 获取当前点击项选中时的class名
let className=GetSelectedCalssName(index);if(isOption){// 获取画笔选项选中时的对应的class
className=GetBrushSelectedName(index);}// 解决event 在火狐和Safari浏览上的兼容性问题
const path=mouseEvent.path||mouseEvent.composedPath&&mouseEvent.composedPath();// 获取div下的所有子元素
const nodes=path[1].children;for(const item of nodes){// 如果工具栏中已经有选中的class则将其移除
if(item.className.includes('active')){item.classList.remove(item.classList[2]);}}// 给当前点击项添加选中时的class
mouseEvent.target.className+=` ${className}`;};/* harmony default export */ const SetSelectedClassName = (setSelectedClassName);
;// ./src/thirdparty/screenshot/lib/common-methods/SetBrushSize.ts
/**
 * 设置画笔大小
 * @param size
 * @param index
 * @param mouseEvent
 */const setBrushSize=(size,index,mouseEvent)=>{const data=new InitData();// 为当前点击项添加选中时的class名
SetSelectedClassName(mouseEvent,index,true);let sizeNum=2;switch(size){case'small':{sizeNum=2;break;}case'medium':{sizeNum=5;break;}case'big':{sizeNum=10;break;}}data.setPenSize(sizeNum);return sizeNum;};/**
 * 设置马赛克工具的笔触大小
 * @param size
 * @param index
 * @param mouseEvent
 */const setMosaicPenSize=(size,index,mouseEvent)=>{const data=new InitData();// 为当前点击项添加选中时的class名
SetSelectedClassName(mouseEvent,index,true);let sizeNum=10;switch(size){case'small':{sizeNum=10;break;}case'medium':{sizeNum=20;break;}case'big':{sizeNum=40;break;}}data.setMosaicPenSize(sizeNum);return sizeNum;};
;// ./src/thirdparty/screenshot/lib/config/Toolbar.ts
/* harmony default export */ const Toolbar = ([{id:1,title:'square'},{id:2,title:'round'},{id:3,title:'right-top'},{id:4,title:'brush'},{id:5,title:'mosaicPen'},{id:6,title:'text'},{id:7,title:'separateLine'},{id:8,title:'save'},{id:9,title:'undo'},{id:10,title:'close'},{id:11,title:'confirm'}]);
;// ./src/thirdparty/screenshot/lib/common-methods/SaveCanvasToBase64.ts
/**
 * 将指定区域的canvas转换为base64格式的图片
 */const saveCanvasToBase64=(context,startX,startY,width,height,quality=0.75,writeBase64=true)=>{// 获取设备像素比
const dpr=window.devicePixelRatio||1;// 获取裁剪框区域图片信息
const img=context.getImageData(startX*dpr,startY*dpr,width*dpr,height*dpr);// 创建canvas标签，用于存放裁剪区域的图片
const canvas=document.createElement('canvas');// 获取裁剪框区域画布
const imgContext=CanvasPatch(canvas,width,height);if(imgContext){// 将图片放进canvas中
imgContext.putImageData(img,0,0);if(writeBase64){// 将图片自动添加至剪贴板中
canvas?.toBlob(blob=>{if(blob===null)return;const Clipboard=globalThis.ClipboardItem;// 浏览器不支持Clipboard
if(Clipboard===null)return;const clipboardItem=new Clipboard({[blob.type]:blob});navigator.clipboard?.write([clipboardItem]);},'image/png',quality);}return canvas.toDataURL('png');}return'';};/* harmony default export */ const SaveCanvasToBase64 = (saveCanvasToBase64);
;// ./src/thirdparty/screenshot/lib/common-methods/SaveCanvasToImage.ts
const saveCanvasToImage=(context,startX,startY,width,height)=>{const plugInParameters=new PlugInParameters();// 获取设备像素比
const dpr=window.devicePixelRatio||1;// 获取裁剪框区域图片信息
// 获取裁剪框区域图片信息
const img=context.getImageData(startX*dpr,startY*dpr,width*dpr,height*dpr);// 创建canvas标签，用于存放裁剪区域的图片
const canvas=document.createElement('canvas');// 获取裁剪框区域画布
const imgContext=CanvasPatch(canvas,width,height);if(imgContext){// 将图片放进裁剪框内
imgContext.putImageData(img,0,0);const a=document.createElement('a');// 获取图片
a.href=canvas.toDataURL('png');// 获取用户传入的文件名
const imgName=plugInParameters?.getSaveImgTitle()||Date.now();// 下载图片
a.download=`${imgName}.png`;a.click();}};/* harmony default export */ const SaveCanvasToImage = (saveCanvasToImage);
;// ./src/thirdparty/screenshot/lib/common-methods/GetCanvasImgData.ts
/**
 * 将指定区域的canvas转为图片
 */const getCanvasImgData=isSave=>{const data=new InitData();const plugInParameters=new PlugInParameters();const screenShotCanvas=data.getScreenShotContainer()?.getContext('2d');// 获取裁剪区域位置信息
const{startX,startY,width,height}=data.getCutOutBoxPosition();let base64='';if(screenShotCanvas){if(isSave){// 将canvas转为图片
SaveCanvasToImage(screenShotCanvas,startX,startY,width,height);}else{// 将canvas转为base64
base64=SaveCanvasToBase64(screenShotCanvas,startX,startY,width,height,0.75,plugInParameters.getWriteImgState());}}return base64;};/* harmony default export */ const GetCanvasImgData = (getCanvasImgData);
;// ./src/thirdparty/screenshot/lib/split-methods/AddHistoryData.ts
// 保存当前画布状态
const addHistory=()=>{const data=new InitData();const plugInParameters=new PlugInParameters();const screenShotController=data.getScreenShotContainer();if(screenShotController===null)return;// 获取canvas容器
// 获取canvas画布与容器
const context=screenShotController.getContext('2d');const controller=screenShotController;if(data.getHistory().length>plugInParameters.getMaxUndoNum()){// 删除最早的一条画布记录
data.shiftHistory();}// 保存当前画布状态
data.pushHistory({data:context.getImageData(0,0,controller.width,controller.height)});// 启用撤销按钮
data.setUndoStatus(true);};/* harmony default export */ const AddHistoryData = (addHistory);
;// ./src/thirdparty/screenshot/lib/split-methods/CalculateOptionIcoPosition.ts
/**
 * 计算截图工具栏画笔选项三角形角标位置
 * @param index
 */const calculateOptionIcoPosition=index=>{switch(index){case 1:{return 24-8;}case 2:{return 24*2+8;}case 3:{return 24*4-6;}case 4:{return 24*5+8;}case 5:{return 24*7+6;}case 6:{return 24*9-6;}default:{return 0;}}};/* harmony default export */ const CalculateOptionIcoPosition = (calculateOptionIcoPosition);
;// ./src/thirdparty/screenshot/lib/split-methods/DrawCutOutBox.ts
/**
 * 绘制裁剪框
 * @param mouseX 鼠标x轴坐标
 * @param mouseY 鼠标y轴坐标
 * @param width 裁剪框宽度
 * @param height 裁剪框高度
 * @param context 需要进行绘制的canvas画布
 * @param borderSize 边框节点直径
 * @param controller 需要进行操作的canvas容器
 * @param imageController 图片canvas容器
 * @param drawBorders
 * @private
 */const drawCutOutBox=(mouseX,mouseY,widthValue,heightValue,context,borderSize,controller,imageController,drawBorders=true)=>{// 获取画布宽高
const canvasWidth=controller?.width;const canvasHeight=controller?.height;const data=new PlugInParameters();const dpr=data.getRatio();// 画布、图片不存在则return
if(!canvasWidth||!canvasHeight||!imageController||!controller)return;// 清除画布
context.clearRect(0,0,canvasWidth,canvasHeight);const width=widthValue===0?5:widthValue;const height=heightValue===0?5:heightValue;// 绘制蒙层
context.save();const maskColor=data.getMaskColor();context.fillStyle='rgba(0, 0, 0, .6)';if(maskColor){context.fillStyle=`rgba(${maskColor.r}, ${maskColor.g}, ${maskColor.b}, ${maskColor.a})`;}context.fillRect(0,0,canvasWidth,canvasHeight);// 将蒙层凿开
context.globalCompositeOperation='source-atop';// 裁剪选择框
context.clearRect(mouseX,mouseY,width,height);// 绘制8个边框像素点并保存坐标信息以及事件参数
context.globalCompositeOperation='source-over';context.fillStyle=data.getCutBoxBdColor();// 是否绘制裁剪框的8个像素点
if(drawBorders){// 像素点大小
const size=borderSize;// 绘制像素点
context.fillRect(mouseX-size/2,mouseY-size/2,size,size);context.fillRect(mouseX-size/2+width/2,mouseY-size/2,size,size);context.fillRect(mouseX-size/2+width,mouseY-size/2,size,size);context.fillRect(mouseX-size/2,mouseY-size/2+height/2,size,size);context.fillRect(mouseX-size/2+width,mouseY-size/2+height/2,size,size);context.fillRect(mouseX-size/2,mouseY-size/2+height,size,size);context.fillRect(mouseX-size/2+width/2,mouseY-size/2+height,size,size);context.fillRect(mouseX-size/2+width,mouseY-size/2+height,size,size);}// 绘制结束
context.restore();// 使用drawImage将图片绘制到蒙层下方
context.save();context.globalCompositeOperation='destination-over';// 图片尺寸使用canvas容器的css中的尺寸
let{imgWidth,imgHeight}={imgWidth:Number.parseInt(controller?.style.width),imgHeight:Number.parseInt(controller?.style.height)};// 用户有传入截图dom绘制时使用其dom的尺寸
const screenShotDom=data.getScreenShotDom();if(screenShotDom!==null){imgWidth=screenShotDom.clientWidth;imgHeight=screenShotDom.clientHeight;}// 非webrtc模式、未开启图片自适应、未传入截图dom时，图片的宽高不做处理
if(!data.getWebRtcStatus()&&!data.getImgAutoFit()&&screenShotDom===null){imgWidth=imageController.width/dpr;imgHeight=imageController.height/dpr;}context.drawImage(imageController,0,0,imgWidth,imgHeight);context.restore();// 返回裁剪框临时位置信息
if(width>0&&height>0){// 考虑左上往右下拉区域的情况
return{startX:mouseX,startY:mouseY,width,height};}else if(width<0&&height<0){// 考虑右下往左上拉区域的情况
return{startX:mouseX+width,startY:mouseY+height,width:Math.abs(width),height:Math.abs(height)};}else if(width>0&&height<0){// 考虑左下往右上拉区域的情况
return{startX:mouseX,startY:mouseY+height,width,height:Math.abs(height)};}else if(width<0&&height>0){// 考虑右上往左下拉区域的情况
return{startX:mouseX+width,startY:mouseY,width:Math.abs(width),height};}return{startX:mouseX,startY:mouseY,width,height};};/* harmony default export */ const DrawCutOutBox = (drawCutOutBox);
;// ./src/thirdparty/screenshot/lib/split-methods/DrawText.ts
/**
 * 绘制文本
 * @param text 需要进行绘制的文字
 * @param mouseX 绘制位置的X轴坐标
 * @param mouseY 绘制位置的Y轴坐标
 * @param color 字体颜色
 * @param fontSize 字体大小
 * @param context 需要你行绘制的画布
 */const drawText=(text,mouseX,mouseY,color,fontSize,context)=>{context.save();context.lineWidth=1;context.fillStyle=color;context.textBaseline='middle';context.font=`bold ${fontSize}px none`;// 处理换行符并绘制多行文本
const lines=text.split('\n');// 根据换行符拆分文本为多行
console.log(lines);const lineHeight=fontSize*1.4;// 设定行高为字体大小的1.4倍
lines.forEach((line,index)=>{// 调整每行的垂直位置
const lineY=mouseY+lineHeight*index;context.fillText(line,mouseX,lineY);});context.restore();};/* harmony default export */ const DrawText = (drawText);
;// ./src/thirdparty/screenshot/lib/split-methods/ToolClickEvent.ts
/**
 * 裁剪框工具栏点击事件
 * @param toolName
 * @param index
 * @param mouseEvent
 */const toolClickEvent=(toolName,index,mouseEvent,completeCallback,closeCallback)=>{const data=new InitData();const plugInParameters=new PlugInParameters();const textInputController=data.getTextInputController();const screenShotController=data.getScreenShotContainer();const ScreenShotImageController=data.getScreenShotImageController();data.setActiveToolName(toolName);if(screenShotController===null||ScreenShotImageController===null)return;// 获取canvas容器
const screenShotCanvas=screenShotController.getContext('2d');// 工具栏尚未点击，当前属于首次点击，重新绘制一个无像素点的裁剪框
if(!data.getToolClickStatus()){const leftValue=data.getToolPosition()?.left||0;const topValue=data.getToolPosition()?.top||0;// 工具栏位置超出时，对其进行修正处理
if(topValue&&data.getToolPositionStatus()){// 调整工具栏位置
data.setToolInfo(leftValue,topValue-46);}data.setToolStatus(true);// 获取裁剪框位置信息
const cutBoxPosition=data.getCutOutBoxPosition();// 开始绘制无像素点裁剪框
DrawCutOutBox(cutBoxPosition.startX,cutBoxPosition.startY,cutBoxPosition.width,cutBoxPosition.height,screenShotCanvas,data.getBorderSize(),screenShotController,ScreenShotImageController,false);}// 更新当前点击的工具栏条目
data.setToolName(toolName);// 为当前点击项添加选中时的class名
SetSelectedClassName(mouseEvent,index,false);if(toolName==='text'){// 显示文字选择容器
data.setTextSizePanelStatus(true);// 隐藏画笔尺寸选择容器
data.setBrushSelectionStatus(false);// 颜色选择容器添加布局兼容样式
data.getColorSelectPanel()?.classList.add('text-select-status');}else{// 隐藏下拉选择框
data.setTextSizePanelStatus(false);// 显示画笔尺寸选择容器
data.setBrushSelectionStatus(true);}// 显示选项面板
data.setOptionStatus(true);// 设置选项面板位置
data.setOptionPosition(CalculateOptionIcoPosition(index));data.setRightPanel(true);if(toolName==='mosaicPen'){// 马赛克工具隐藏右侧颜色面板与角标
data.setRightPanel(false);data.hiddenOptionIcoStatus();}// 清空文本输入区域的内容并隐藏文本输入框
if(textInputController!==null&&data.getTextStatus()||textInputController!==null&&toolName!=='text'){const text=textInputController.textContent;if(text&&text!==''){const{positionX,positionY,color,size}=data.getTextInfo();DrawText(text,positionX,positionY,color,size,screenShotCanvas);// 添加历史记录
AddHistoryData();}textInputController.innerHTML='';data.setTextStatus(false);}// 初始化点击状态
data.setDragging(false);data.setDraggingTrim(false);// 保存图片
if(toolName==='save'){GetCanvasImgData(true);const callback=plugInParameters.getSaveCallback();if(callback){callback(0,'保存成功');}// 销毁组件
data.destroyDOM();data.setInitStatus(true);}// 销毁组件
if(toolName==='close'){// 触发关闭回调函数
if(closeCallback){closeCallback();}data.destroyDOM();data.setInitStatus(true);}// 确认截图
if(toolName==='confirm'){const base64=GetCanvasImgData(false);// 触发回调函数，截图数据回传给插件调用者
if(completeCallback){completeCallback({base64,cutInfo:data.getCutOutBoxPosition()});}// 销毁组件
data.destroyDOM();data.setInitStatus(true);}// 撤销
if(toolName==='undo'){// 隐藏画笔选项工具栏
data.setOptionStatus(false);TakeOutHistory();}// 设置裁剪框工具栏为点击状态
data.setToolClickStatus(true);};/* harmony default export */ const ToolClickEvent = (toolClickEvent);
;// ./src/thirdparty/screenshot/lib/main-entrance/CreateDom.ts
class CreateDom{// 截图区域canvas容器
// 截图工具栏容器
// 绘制选项顶部ico容器
// 画笔绘制选项容器
// 裁剪框大小显示容器
// 文字工具输入容器
// 截图完成回调函数
// 截图关闭毁掉函数
// 需要隐藏的图标
// 截图工具栏图标
textFontSizeList=[12,13,14,15,16,17,20,24,36,48,64,72,96];constructor(options){this.screenShotController=document.createElement('canvas');this.toolController=document.createElement('div');this.optionIcoController=document.createElement('div');this.optionController=document.createElement('div');this.cutBoxSizeContainer=document.createElement('div');this.textInputController=document.createElement('div');this.completeCallback=options?.completeCallback;this.closeCallback=options?.closeCallback;this.hiddenIcoArr=[];this.optionController.addEventListener('click',evt=>{const target=evt.target;if(target.id==='colorSelectPanel'||target.id==='textSizePanel'){return;}// 点击工具栏的其他位置则隐藏文字大小选择面板与颜色选择面板
hiddenTextSizeOptionStatus();hiddenColorPanelStatus();});// 成功回调函数不存在则设置一个默认的
if(!options||!Object.prototype.hasOwnProperty.call(options,'completeCallback')){this.completeCallback=imgInfo=>{sessionStorage.setItem('screenShotImg',JSON.stringify(imgInfo));};}// 筛选需要隐藏的图标
if(options?.hiddenToolIco){for(const iconKey in options.hiddenToolIco){if(options.hiddenToolIco[iconKey]){this.filterHideIcon(iconKey);}}}// 为所有dom设置id
this.setAllControllerId();// 为画笔绘制选项角标设置class
this.setOptionIcoClassName();this.toolbar=Toolbar;// 渲染工具栏
this.setToolBarIco();// 渲染文字大小选择容器
this.setTextSizeSelectPanel();// 渲染画笔相关选项
this.setBrushSelectPanel();// 渲染文本输入
this.setTextInputPanel();// 渲染页面
this.setDomToBody();// 隐藏所有dom
this.hiddenAllDom();}// 渲染截图工具栏图标
setToolBarIco(){for(let i=0;i<this.toolbar.length;i++){const item=this.toolbar[i];// 判断是否有需要隐藏的图标
let icoHiddenStatus=false;for(let j=0;j<this.hiddenIcoArr.length;j++){if(this.hiddenIcoArr[j]===item.title){icoHiddenStatus=true;break;}}// 图标隐藏状态为true则直接跳过本次循环
if(icoHiddenStatus)continue;const itemPanel=document.createElement('div');// 撤销按钮单独处理
if(item.title==='undo'){itemPanel.className='item-panel undo-disabled';itemPanel.id='undoPanel';}else{itemPanel.className=`item-panel ${item.title}`;itemPanel.addEventListener('click',e=>{ToolClickEvent(item.title,item.id,e,this.completeCallback,this.closeCallback);});}itemPanel.dataset.title=item.title;itemPanel.dataset.id=`${item.id}`;this.toolController.append(itemPanel);}// 有需要隐藏的截图工具栏时，则修改其最小宽度
if(this.hiddenIcoArr.length>0){this.toolController.style.minWidth='24px';}}// 渲染文字大小选择容器
setTextSizeSelectPanel(){// 创建文字展示容器
const textSizePanel=document.createElement('div');textSizePanel.className='text-size-panel';textSizePanel.textContent=`${getTextSize()} px`;textSizePanel.id='textSizePanel';// 创建文字大小选择容器
const textSelectPanel=document.createElement('div');textSelectPanel.className='text-select-panel';textSelectPanel.id='textSelectPanel';// 创建文字选择下拉
for(let i=0;i<this.textFontSizeList.length;i++){const itemPanel=document.createElement('div');const size=this.textFontSizeList[i];itemPanel.className='text-item';itemPanel.dataset.value=`${size}`;itemPanel.textContent=`${size} px`;// 添加点击监听
itemPanel.addEventListener('click',()=>{// 隐藏容器
textSelectPanel.style.display='none';const currentTextSize=itemPanel.dataset.value;// 容器赋值
textSizePanel.textContent=`${currentTextSize} px`;if(currentTextSize){setTextSize(Number(currentTextSize));}});textSelectPanel.append(itemPanel);}textSizePanel.style.display='none';textSelectPanel.style.display='none';// 容器点击时，展示文字大小选择容器
textSizePanel.addEventListener('click',()=>{selectTextSize();});this.optionController.append(textSizePanel);this.optionController.append(textSelectPanel);}// 渲染画笔大小选择图标与颜色选择容器
setBrushSelectPanel(){// 创建画笔选择容器
const brushSelectPanel=document.createElement('div');brushSelectPanel.id='brushSelectPanel';brushSelectPanel.className='brush-select-panel';for(let i=0;i<3;i++){// 创建画笔图标容器
const itemPanel=document.createElement('div');itemPanel.className='item-panel';switch(i){case 0:{itemPanel.classList.add('brush-small','brush-small-active');itemPanel.addEventListener('click',e=>{setBrushSize('small',1,e);setMosaicPenSize('small',1,e);});break;}case 1:{itemPanel.classList.add('brush-medium');itemPanel.addEventListener('click',e=>{setBrushSize('medium',2,e);setMosaicPenSize('medium',2,e);});break;}case 2:{itemPanel.classList.add('brush-big');itemPanel.addEventListener('click',e=>{setBrushSize('big',3,e);setMosaicPenSize('big',3,e);});break;}}brushSelectPanel.append(itemPanel);}// 右侧颜色选择容器
const rightPanel=document.createElement('div');rightPanel.className='right-panel';// 创建颜色选择容器
const colorSelectPanel=document.createElement('div');colorSelectPanel.className='color-select-panel';colorSelectPanel.id='colorSelectPanel';colorSelectPanel.addEventListener('click',()=>{SelectColor();});// 创建颜色显示容器
const colorPanel=document.createElement('div');colorPanel.id='colorPanel';colorPanel.className='color-panel';colorPanel.style.display='none';for(let i=0;i<10;i++){const colorItem=document.createElement('div');colorItem.className='color-item';colorItem.addEventListener('click',()=>{GetColor(i+1);});colorItem.dataset.index=`${i}`;colorPanel.append(colorItem);}rightPanel.append(colorPanel);rightPanel.append(colorSelectPanel);rightPanel.id='rightPanel';// 创建颜色下拉箭头选择容器
const pullDownArrow=document.createElement('div');pullDownArrow.className='pull-down-arrow';pullDownArrow.addEventListener('click',()=>{SelectColor();});rightPanel.append(pullDownArrow);// 向画笔绘制选项容器追加画笔选择和颜色显示容器
this.optionController.append(brushSelectPanel);this.optionController.append(rightPanel);}// 渲染文本输入区域容器
setTextInputPanel(){// 让div可编辑
this.textInputController.contentEditable='true';// 关闭拼写检查
this.textInputController.spellcheck=false;}// 为所有Dom设置id
setAllControllerId(){this.screenShotController.id='screenShotContainer';this.toolController.id='toolPanel';this.optionIcoController.id='optionIcoController';this.optionController.id='optionPanel';this.cutBoxSizeContainer.id='cutBoxSizePanel';this.textInputController.id='textInputPanel';}// 隐藏所有dom
hiddenAllDom(){this.screenShotController.style.display='none';this.toolController.style.display='none';this.optionIcoController.style.display='none';this.optionController.style.display='none';this.cutBoxSizeContainer.style.display='none';this.textInputController.style.display='none';}// 将截图相关dom渲染至body
setDomToBody(){this.clearBody();document.body.append(this.screenShotController);document.body.append(this.toolController);document.body.append(this.optionIcoController);document.body.append(this.optionController);document.body.append(this.cutBoxSizeContainer);document.body.append(this.textInputController);}// 清除截图相关dom
clearBody(){document.querySelector('#screenShotContainer')?.remove();document.querySelector('#toolPanel')?.remove();document.querySelector('#optionIcoController')?.remove();document.querySelector('#optionPanel')?.remove();document.querySelector('#optionPanel')?.remove();document.querySelector('#textInputPanel')?.remove();}// 设置画笔绘制选项顶部ico样式
setOptionIcoClassName(){this.optionIcoController.className='ico-panel';}// 将需要隐藏的图标放入对应的数组中
filterHideIcon(icons){switch(icons){case'rightTop':{this.hiddenIcoArr.push('right-top');break;}default:{this.hiddenIcoArr.push(icons);break;}}}}
// EXTERNAL MODULE: ./src/thirdparty/htmlToImage/index.ts + 22 modules
var htmlToImage = __webpack_require__(75278);
;// ./src/thirdparty/screenshot/lib/common-methods/FixedData.ts
/**
 * 计算传进来的数据，不让其移出可视区域
 * @param data 需要计算的数据
 * @param trimDistance 裁剪框宽度
 * @param canvasDistance 画布宽度
 */const fixedData=(data,trimDistance,canvasDistance)=>{if(NonNegativeData(data)+trimDistance>canvasDistance){return NonNegativeData(canvasDistance-trimDistance);}return NonNegativeData(data);};/* harmony default export */ const FixedData = (fixedData);
;// ./src/thirdparty/screenshot/lib/common-methods/IsPC.ts
const isPC=()=>{const userAgentInfo=navigator.userAgent;const Agents=['Android','iPhone','SymbianOS','Windows Phone','iPad','iPod'];let flag=true;for(const Agent of Agents){if(userAgentInfo.indexOf(Agent)>0){flag=false;break;}}return flag;};/* harmony default export */ const IsPC = (isPC);
;// ./src/thirdparty/screenshot/lib/common-methods/IsTouchDevice.ts
// 检测设备是否支持触摸
const isTouchDevice=()=>{// 检查navigator.maxTouchPoints
const maxTouchPoints='maxTouchPoints'in navigator&&navigator.maxTouchPoints>0;// 检查旧版API navigator.msMaxTouchPoints
const msMaxTouchPoints='msMaxTouchPoints'in navigator&&navigator.msMaxTouchPoints>0;// 检查触摸事件处理器
const touchEvent='ontouchstart'in globalThis;// 使用CSS媒体查询检查指针类型
const coarsePointer=globalThis.matchMedia&&globalThis.matchMedia('(pointer: coarse)').matches;// 如果以上任何一种方法返回true，则设备支持触摸
return maxTouchPoints||msMaxTouchPoints||touchEvent||coarsePointer;};/* harmony default export */ const IsTouchDevice = (isTouchDevice);
;// ./src/thirdparty/screenshot/lib/common-methods/SaveBorderArrInfo.ts
/**
 * 保存边框节点的相关信息
 * @param borderSize 边框节点直径大小
 * @param positionInfo 裁剪框位置信息
 * @private
 */const saveBorderArrInfo=(borderSize,positionInfo)=>{// 获取裁剪框位置信息
const{startX,startY,width,height}=positionInfo;const halfBorderSize=borderSize/2;const borderArr=[];// 移动, n北s南e东w西
borderArr[0]={x:startX+halfBorderSize,y:startY+halfBorderSize,width:width-borderSize,height:height-borderSize,index:1,option:1};// n
borderArr[1]={x:startX+halfBorderSize,y:startY,width:width-borderSize,height:halfBorderSize,index:2,option:2};borderArr[2]={x:startX-halfBorderSize+width/2,y:startY-halfBorderSize,width:borderSize,height:halfBorderSize,index:2,option:2};// s
borderArr[3]={x:startX+halfBorderSize,y:startY-halfBorderSize+height,width:width-borderSize,height:halfBorderSize,index:2,option:3};borderArr[4]={x:startX-halfBorderSize+width/2,y:startY+height,width:borderSize,height:halfBorderSize,index:2,option:3};// w
borderArr[5]={x:startX,y:startY+halfBorderSize,width:halfBorderSize,height:height-borderSize,index:3,option:4};borderArr[6]={x:startX-halfBorderSize,y:startY-halfBorderSize+height/2,width:halfBorderSize,height:borderSize,index:3,option:4};// e
borderArr[7]={x:startX-halfBorderSize+width,y:startY+halfBorderSize,width:halfBorderSize,height:height-borderSize,index:3,option:5};borderArr[8]={x:startX+width,y:startY-halfBorderSize+height/2,width:halfBorderSize,height:borderSize,index:3,option:5};// nw
borderArr[9]={x:startX-halfBorderSize,y:startY-halfBorderSize,width:borderSize,height:borderSize,index:4,option:6};// se
borderArr[10]={x:startX-halfBorderSize+width,y:startY-halfBorderSize+height,width:borderSize,height:borderSize,index:4,option:7};// ne
borderArr[11]={x:startX-halfBorderSize+width,y:startY-halfBorderSize,width:borderSize,height:borderSize,index:5,option:8};// sw
borderArr[12]={x:startX-halfBorderSize,y:startY-halfBorderSize+height,width:borderSize,height:borderSize,index:5,option:9};return borderArr;};/* harmony default export */ const SaveBorderArrInfo = (saveBorderArrInfo);
;// ./src/thirdparty/screenshot/lib/common-methods/UpdateContainerMouseStyle.ts
const updateContainerMouseStyle=(container,toolName)=>{switch(toolName){case'text':{container.style.cursor='text';break;}default:{container.style.cursor='default';break;}}};/* harmony default export */ const UpdateContainerMouseStyle = (updateContainerMouseStyle);
;// ./src/thirdparty/screenshot/lib/common-methods/ZoomCutOutBoxPosition.ts
/**
 * 缩放裁剪框
 * @param currentX 当前鼠标X轴坐标
 * @param currentY 当前鼠标Y轴坐标
 * @param startX 裁剪框当前X轴坐标
 * @param startY 裁剪框当前Y轴坐标
 * @param width 裁剪框宽度
 * @param height 裁剪框高度
 * @param option 当前操作的节点
 * @private
 */const zoomCutOutBoxPosition=(currentX,currentY,startX,startY,width,height,option)=>{// 临时坐标
let tempStartX;let tempStartY;let tempWidth;let tempHeight=0;// 判断操作方向
switch(option){case 2:{// n
tempStartY=currentY-(startY+height)>0?startY+height:currentY;tempHeight=NonNegativeData(height-(currentY-startY));return{tempStartX:startX,tempStartY,tempWidth:width,tempHeight};}case 3:{// s
tempHeight=NonNegativeData(currentY-startY);return{tempStartX:startX,tempStartY:startY,tempWidth:width,tempHeight};}case 4:{// w
tempStartX=currentX-(startX+width)>0?startX+width:currentX;tempWidth=NonNegativeData(width-(currentX-startX));return{tempStartX,tempStartY:startY,tempWidth,tempHeight:height};}case 5:{// e
tempWidth=NonNegativeData(currentX-startX);return{tempStartX:startX,tempStartY:startY,tempWidth,tempHeight:height};}case 6:{// nw
tempStartX=currentX-(startX+width)>0?startX+width:currentX;tempStartY=currentY-(startY+height)>0?startY+height:currentY;tempWidth=NonNegativeData(width-(currentX-startX));tempHeight=NonNegativeData(height-(currentY-startY));return{tempStartX,tempStartY,tempWidth,tempHeight};}case 7:{// se
tempWidth=NonNegativeData(currentX-startX);tempHeight=NonNegativeData(currentY-startY);return{tempStartX:startX,tempStartY:startY,tempWidth,tempHeight};}case 8:{// ne
tempStartY=currentY-(startY+height)>0?startY+height:currentY;tempWidth=NonNegativeData(currentX-startX);tempHeight=NonNegativeData(height-(currentY-startY));return{tempStartX:startX,tempStartY,tempWidth,tempHeight};}case 9:{// sw
tempStartX=currentX-(startX+width)>0?startX+width:currentX;tempWidth=NonNegativeData(width-(currentX-startX));tempHeight=NonNegativeData(currentY-startY);return{tempStartX,tempStartY:startY,tempWidth,tempHeight};}default:{// n
tempStartY=currentY-(startY+height)>0?startY+height:currentY;tempHeight=NonNegativeData(height-(currentY-startY));return{tempStartX:startX,tempStartY,tempWidth:width,tempHeight};}}};/* harmony default export */ const ZoomCutOutBoxPosition = (zoomCutOutBoxPosition);
;// ./src/thirdparty/screenshot/lib/split-methods/CalculateToolLocation.ts
/**
 * 计算截图工具栏位置
 * @param position 裁剪框位置信息
 * @param toolWidth 截图工具栏宽度
 * @param containerWidth 截图容器宽度
 * @param placement 展示位置
 * @param containerLocation 截图容器位置信息
 */const calculateToolLocation=(position,toolWidth,containerWidth,placement,containerLocation)=>{// 工具栏X轴坐标 = (裁剪框的宽度 - 工具栏的宽度) / 2 + (裁剪框距离左侧的距离 - 容器距离左侧的距离)
let mouseX=(position.width-toolWidth)/2+(position.startX-containerLocation.left);// 左对齐
if(placement==='left'){mouseX=position.startX;}// 右对齐
if(placement==='right'){mouseX=position.startX+position.width-toolWidth;}// 工具栏超出画布左侧可视区域，进行位置修正
if(mouseX<0)mouseX=0;// 计算工具栏在画布内的占用面积
const toolSize=mouseX+toolWidth;// 工具栏超出画布右侧可视区域，进行位置修正
if(toolSize>containerWidth){mouseX=containerWidth-toolWidth;}// 工具栏Y轴坐标
let mouseY=position.startY+position.height+10;if(position.width<0&&position.height<0||position.width>0&&position.height<0){// 从右下角或者左下角拖动时，工具条y轴的位置应该为position.startY + 10
mouseY=position.startY+10;}// 需要减去容器本身距离顶部的距离
mouseY-=containerLocation.top;return{mouseX,mouseY};};/* harmony default export */ const CalculateToolLocation = (calculateToolLocation);
;// ./src/thirdparty/screenshot/lib/split-methods/DrawArrow.ts
class DrawArrow{// 起始点与结束点
beginPoint={x:0,y:0};stopPoint={x:0,y:0};// 多边形的尺寸信息
polygonVertex=[];// 起点与X轴之间的夹角角度值
angle=0;// 箭头信息
arrowInfo={edgeLen:50,// 箭头的头部长度
angle:30// 箭头的头部角度
};size=1;/**
   * 绘制箭头
   * @param ctx 需要进行绘制的画布
   * @param originX 鼠标按下时的x轴坐标
   * @param originY 鼠标按下式的y轴坐标
   * @param x 当前鼠标x轴坐标
   * @param y 当前鼠标y轴坐标
   * @param color 箭头颜色
   * @param size 箭头尺寸
   */draw(ctx,originX,originY,x,y,color,size){this.beginPoint.x=originX;this.beginPoint.y=originY;this.stopPoint.x=x;this.stopPoint.y=y;this.arrowCord(this.beginPoint,this.stopPoint);this.sideCord();this.drawArrow(ctx,color);switch(size){case 2:{this.size=1;break;}case 5:{this.size=1.3;break;}case 10:{this.size=1.7;break;}default:{this.size=1;break;}}}// 计算箭头底边两个点位置信息
arrowCord(beginPoint,stopPoint){this.polygonVertex[0]=beginPoint.x;// 多边形的第一个顶点设为起点
this.polygonVertex[1]=beginPoint.y;this.polygonVertex[6]=stopPoint.x;// 第七个顶点设为终点
this.polygonVertex[7]=stopPoint.y;// 计算夹角
this.getRadian(beginPoint,stopPoint);// 使用三角函数计算出8、9顶点的坐标
this.polygonVertex[8]=stopPoint.x-this.arrowInfo.edgeLen*Math.cos(Math.PI/180*(this.angle+this.arrowInfo.angle));this.polygonVertex[9]=stopPoint.y-this.arrowInfo.edgeLen*Math.sin(Math.PI/180*(this.angle+this.arrowInfo.angle));// 使用三角函数计算出4、5顶点的坐标
this.polygonVertex[4]=stopPoint.x-this.arrowInfo.edgeLen*Math.cos(Math.PI/180*(this.angle-this.arrowInfo.angle));this.polygonVertex[5]=stopPoint.y-this.arrowInfo.edgeLen*Math.sin(Math.PI/180*(this.angle-this.arrowInfo.angle));}// 计算两个点之间的夹角
getRadian(beginPoint,stopPoint){// 使用atan2算出夹角（弧度），并将其转换为角度值(弧度 / 180)
this.angle=Math.atan2(stopPoint.y-beginPoint.y,stopPoint.x-beginPoint.x)/Math.PI*180;this.setArrowInfo(50*this.size,30*this.size);this.dynArrowSize();}// 计算另两个底边侧面点
sideCord(){const midpoint={x:0,y:0};midpoint.x=(this.polygonVertex[4]+this.polygonVertex[8])/2;// 通过求出第5个顶点和第9个顶点的横纵坐标的平均值，得到多边形的中心点坐标，
midpoint.y=(this.polygonVertex[5]+this.polygonVertex[9])/2;this.polygonVertex[2]=(this.polygonVertex[4]+midpoint.x)/2;this.polygonVertex[3]=(this.polygonVertex[5]+midpoint.y)/2;this.polygonVertex[10]=(this.polygonVertex[8]+midpoint.x)/2;this.polygonVertex[11]=(this.polygonVertex[9]+midpoint.y)/2;}/**
   * 设置箭头的相关绘制信息
   * @param edgeLen 长度
   * @param angle 角度
   * @private
   */setArrowInfo(edgeLen,angle){this.arrowInfo.edgeLen=edgeLen;this.arrowInfo.angle=angle;}// 计算箭头尺寸
dynArrowSize(){const x=this.stopPoint.x-this.beginPoint.x;const y=this.stopPoint.y-this.beginPoint.y;// 计算两点之间的直线距离
const length=Math.hypot(x,y);// 根据箭头始点和终点之间的距离自适应地调整箭头大小。
if(length<50){this.arrowInfo.edgeLen=length/2;}else if(length<250){this.arrowInfo.edgeLen/=2;}else if(length<500){this.arrowInfo.edgeLen=this.arrowInfo.edgeLen*length/500;}}// 在画布上画出递增变粗的箭头
drawArrow(ctx,color){ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(this.polygonVertex[0],this.polygonVertex[1]);ctx.lineTo(this.polygonVertex[2],this.polygonVertex[3]);ctx.lineTo(this.polygonVertex[4],this.polygonVertex[5]);ctx.lineTo(this.polygonVertex[6],this.polygonVertex[7]);ctx.lineTo(this.polygonVertex[8],this.polygonVertex[9]);ctx.lineTo(this.polygonVertex[10],this.polygonVertex[11]);ctx.closePath();ctx.fill();}}
;// ./src/thirdparty/screenshot/lib/split-methods/DrawCircle.ts
/**
 * 绘制圆形
 * @param context 需要进行绘制的画布
 * @param mouseX 当前鼠标x轴坐标
 * @param mouseY 当前鼠标y轴坐标
 * @param mouseStartX 鼠标按下时的x轴坐标
 * @param mouseStartY 鼠标按下时的y轴坐标
 * @param borderWidth 边框宽度
 * @param color 边框颜色
 */const drawCircle=(context,mouseX,mouseY,mouseStartX,mouseStartY,borderWidth,color)=>{// 坐标边界处理，解决反向绘制椭圆时的报错问题
const startX=Math.min(mouseX,mouseStartX);const startY=Math.min(mouseY,mouseStartY);const endX=Math.max(mouseX,mouseStartX);const endY=Math.max(mouseY,mouseStartY);// 计算圆的半径
const radiusX=(endX-startX)*0.5;const radiusY=(endY-startY)*0.5;// 计算圆心的x、y坐标
const centerX=startX+radiusX;const centerY=startY+radiusY;// 开始绘制
context.save();context.beginPath();context.lineWidth=borderWidth;context.strokeStyle=color;if(typeof context.ellipse==='function'){// 绘制圆，旋转角度与起始角度都为0，结束角度为2*PI
context.ellipse(centerX,centerY,radiusX,radiusY,0,0,2*Math.PI);}else{throw'你的浏览器不支持ellipse，无法绘制椭圆';}context.stroke();context.closePath();// 结束绘制
context.restore();};/* harmony default export */ const DrawCircle = (drawCircle);
;// ./src/thirdparty/screenshot/lib/split-methods/DrawLineArrow.ts
/**
 * 绘制箭头
 * @param context 需要进行绘制的画布
 * @param mouseStartX 鼠标按下时的x轴坐标 P1
 * @param mouseStartY 鼠标按下式的y轴坐标 P1
 * @param mouseX 当前鼠标x轴坐标 P2
 * @param mouseY 当前鼠标y轴坐标 P2
 * @param theta 箭头斜线与直线的夹角角度 (θ) P3 ---> (P1、P2) || P4 ---> P1(P1、P2)
 * @param slashLength 箭头斜线的长度 P3 ---> P2 || P4 ---> P2
 * @param borderWidth 边框宽度
 * @param color 边框颜色
 */const drawLineArrow=(context,mouseStartX,mouseStartY,mouseX,mouseY,theta,slashLength,borderWidth,color)=>{/**
   * 已知:
   *    1. P1、P2的坐标
   *    2. 箭头斜线(P3 || P4) ---> P2直线的长度
   *    3. 箭头斜线(P3 || P4) ---> (P1、P2)直线的夹角角度(θ)
   * 求:
   *    P3、P4的坐标
   */const angle=Math.atan2(mouseStartY-mouseY,mouseStartX-mouseX)*180/Math.PI;// 通过atan2来获取箭头的角度
const angle1=(angle+theta)*Math.PI/180;// P3点的角度
const angle2=(angle-theta)*Math.PI/180;// P4点的角度
const topX=slashLength*Math.cos(angle1);// P3点的x轴坐标
const topY=slashLength*Math.sin(angle1);// P3点的y轴坐标
const botX=slashLength*Math.cos(angle2);// P4点的X轴坐标
const botY=slashLength*Math.sin(angle2);// P4点的Y轴坐标
// 开始绘制
context.save();context.beginPath();// P3的坐标位置
let arrowX=mouseStartX-topX;let arrowY=mouseStartY-topY;// 移动笔触到P3坐标
context.moveTo(arrowX,arrowY);// 移动笔触到P1
context.moveTo(mouseStartX,mouseStartY);// 绘制P1到P2的直线
context.lineTo(mouseX,mouseY);// 计算P3的位置
arrowX=mouseX+topX;arrowY=mouseY+topY;// 移动笔触到P3坐标
context.moveTo(arrowX,arrowY);// 绘制P2到P3的斜线
context.lineTo(mouseX,mouseY);// 计算P4的位置
arrowX=mouseX+botX;arrowY=mouseY+botY;// 绘制P2到P4的斜线
context.lineTo(arrowX,arrowY);// 上色
context.strokeStyle=color;context.lineWidth=borderWidth;// 填充
context.stroke();// 结束绘制
context.restore();};/* harmony default export */ const DrawLineArrow = (drawLineArrow);
;// ./src/thirdparty/screenshot/lib/split-methods/DrawMosaic.ts
/**
 * 获取图像指定坐标位置的颜色
 * @param imgData 需要进行操作的图片
 * @param x x点坐标
 * @param y y点坐标
 */const getAxisColor=(imgData,x,y)=>{const w=imgData.width;const d=imgData.data;const color=[];color[0]=d[4*(y*w+x)];color[1]=d[4*(y*w+x)+1];color[2]=d[4*(y*w+x)+2];color[3]=d[4*(y*w+x)+3];return color;};/**
 * 设置图像指定坐标位置的颜色
 * @param imgData 需要进行操作的图片
 * @param x x点坐标
 * @param y y点坐标
 * @param color 颜色数组
 */const setAxisColor=(imgData,x,y,color)=>{const w=imgData.width;const d=imgData.data;d[4*(y*w+x)]=color[0];d[4*(y*w+x)+1]=color[1];d[4*(y*w+x)+2]=color[2];d[4*(y*w+x)+3]=color[3];};/**
 * 绘制马赛克
 *    实现思路：
 *      1. 获取鼠标划过路径区域的图像信息
 *      2. 将区域内的像素点绘制成周围相近的颜色
 * @param mouseX 当前鼠标X轴坐标
 * @param mouseY 当前鼠标Y轴坐标
 * @param size 马赛克画笔大小
 * @param degreeOfBlur 马赛克模糊度
 * @param context 需要进行绘制的画布
 */const drawMosaic=(mouseX,mouseY,size,degreeOfBlur,context)=>{// 获取设备像素比
const dpr=window.devicePixelRatio||1;// 获取鼠标经过区域的图片像素信息
const imgData=context.getImageData(mouseX*dpr,mouseY*dpr,size*dpr,size*dpr);// 获取图像宽高
const w=imgData.width;const h=imgData.height;// 等分图像宽高
const stepW=w/degreeOfBlur;const stepH=h/degreeOfBlur;// 循环画布像素点
for(let i=0;i<stepH;i++){for(let j=0;j<stepW;j++){// 随机获取一个小方格的随机颜色
const color=getAxisColor(imgData,j*degreeOfBlur+Math.floor(Math.random()*degreeOfBlur),i*degreeOfBlur+Math.floor(Math.random()*degreeOfBlur));// 循环小方格的像素点
for(let k=0;k<degreeOfBlur;k++){for(let l=0;l<degreeOfBlur;l++){// 设置小方格的颜色
setAxisColor(imgData,j*degreeOfBlur+l,i*degreeOfBlur+k,color);}}}}// 渲染打上马赛克后的图像信息
context.putImageData(imgData,mouseX*dpr,mouseY*dpr);};/* harmony default export */ const DrawMosaic = (drawMosaic);
;// ./src/thirdparty/screenshot/lib/split-methods/DrawPencil.ts
/**
 * 画笔绘制
 * @param context
 * @param mouseX
 * @param mouseY
 * @param size
 * @param color
 */const drawPencil=(context,mouseX,mouseY,size,color)=>{// 开始绘制
context.save();// 设置边框大小
context.lineWidth=size;// 设置边框颜色
context.strokeStyle=color;context.lineTo(mouseX,mouseY);context.stroke();// 绘制结束
context.restore();};/**
 * 画笔初始化
 */const initPencil=(context,mouseX,mouseY)=>{// 开始||清空一条路径
context.beginPath();// 移动画笔位置
context.moveTo(mouseX,mouseY);};
;// ./src/thirdparty/screenshot/lib/split-methods/DrawRectangle.ts
/**
 * 绘制矩形
 * @param mouseX
 * @param mouseY
 * @param width
 * @param height
 * @param color 边框颜色
 * @param borderWidth 边框大小
 * @param context 需要进行绘制的canvas画布
 */const drawRectangle=(mouseX,mouseY,width,height,color,borderWidth,context)=>{context.save();// 设置边框颜色
context.strokeStyle=color;// 设置边框大小
context.lineWidth=borderWidth;context.beginPath();// 绘制矩形
context.rect(mouseX,mouseY,width,height);context.stroke();// 绘制结束
context.restore();};/* harmony default export */ const DrawRectangle = (drawRectangle);
;// ./src/thirdparty/screenshot/lib/main-entrance/LoadCoreComponents.ts
const registerForRightClickEvent=(container,data,handleFn)=>{container.addEventListener('contextmenu',e=>{e.preventDefault();// 调用者传入了自定义事件则执行
if(handleFn){handleFn();return;}// 销毁组件
data.destroyDOM();data.setInitStatus(true);});};/**
 * 从窗口数据流中截取页面body内容
 * @param videoWidth 窗口宽度
 * @param videoHeight 窗口高度
 * @param containerWidth body内容宽度
 * @param containerHeight body内容高度
 * @param videoController
 * @param dpr
 * @private
 */const getWindowContentData=(videoWidth,videoHeight,containerWidth,containerHeight,videoController,dpr)=>{const videoCanvas=document.createElement('canvas');videoCanvas.width=videoWidth;videoCanvas.height=videoHeight;const videoContext=CanvasPatch(videoCanvas,videoWidth,videoHeight);if(videoContext){videoContext.drawImage(videoController,0,0);const startX=0;const startY=videoHeight-containerHeight;const width=containerWidth;const height=videoHeight-startY;// 获取裁剪框区域图片信息;
return videoContext.getImageData(startX*dpr,startY*dpr,width*dpr,height*dpr);}return null;};const registerContainerShortcuts=(container,screenShotCanvas,data,textInputPosition)=>{container.addEventListener('keydown',event=>{if(screenShotCanvas==null)return;// eslint-disable-line eqeqeq
// command/ctrl + enter 将输入框的文字绘制到画布内
// 按下ESC时如果有内容则绘制
if((event.metaKey||event.ctrlKey)&&event.code==='Enter'||event.code==='Escape'){data.setTextEditState(true);const text=container.textContent;if(!text||text===''){// 隐藏输入框
data.setTextStatus(false);return;}DrawText(text,textInputPosition.mouseX,textInputPosition.mouseY,data.getSelectedColor(),data.getFontSize(),screenShotCanvas);// 清空文本输入区域的内容
container.innerHTML='';// 隐藏输入框
data.setTextStatus(false);// 保存绘制记录
AddHistoryData();}});};const showToolBar=(dpr,data,containerInfo,containerVariable,callerCallback)=>{if(containerInfo.toolController==null||containerInfo.screenShotContainer==null)return;// eslint-disable-line eqeqeq
const res={code:0,data:null,msg:''};// 计算截图工具栏位置
const toolLocation=CalculateToolLocation(containerVariable.drawGraphPosition,containerInfo.toolController.offsetWidth,containerInfo.screenShotContainer.width/dpr,containerVariable.placement,containerVariable.position);const containerHeight=containerInfo.screenShotContainer.height/dpr;// 工具栏的位置超出截图容器时，调整工具栏位置防止超出
if(toolLocation.mouseY>containerHeight-64){toolLocation.mouseY-=containerVariable.drawGraphPosition.height+64;// 超出屏幕顶部时
if(toolLocation.mouseY<0){const containerHeight=Number.parseInt(containerInfo.screenShotContainer.style.height);toolLocation.mouseY=containerHeight-containerVariable.fullScreenDiffHeight;}// 设置工具栏超出状态为true
data.setToolPositionStatus(true);// 隐藏裁剪框尺寸显示容器
data.setCutBoxSizeStatus(false);}// 当前截取的是全屏，则修改工具栏的位置到截图容器最底部，防止超出
if(containerVariable.getFullScreenStatus){const containerHeight=Number.parseInt(containerInfo.screenShotContainer.style.height);// 重新计算工具栏的x轴位置
const toolPositionX=(containerVariable.drawGraphPosition.width/dpr-containerInfo.toolController.offsetWidth)/2;toolLocation.mouseY=containerHeight-containerVariable.fullScreenDiffHeight;toolLocation.mouseX=toolPositionX;}// 显示并设置截图工具栏位置
data.setToolInfo(toolLocation.mouseX+containerVariable.position.left,toolLocation.mouseY+containerVariable.position.top);// 设置裁剪框尺寸显示容器位置
data.setCutBoxSizePosition(containerVariable.drawGraphPosition.startX,containerVariable.drawGraphPosition.startY-35);// 渲染裁剪框尺寸
data.setCutBoxSize(containerVariable.drawGraphPosition.width,containerVariable.drawGraphPosition.height);// 状态重置
res.code=1;res.data=false;callerCallback(res);};const drawPictures=(imgSrc,screenShotImageController,callerCallback)=>{const imgContainer=new Image();const res={code:0,data:null,msg:''};imgContainer.src=imgSrc;imgContainer.width=screenShotImageController.width;imgContainer.height=screenShotImageController.height;imgContainer.crossOrigin='Anonymous';imgContainer.addEventListener('load',()=>{// 将用户传递的图片绘制到图片容器里
screenShotImageController.getContext('2d')?.drawImage(imgContainer,0,0,screenShotImageController.width,screenShotImageController.height);// 初始化截图容器
res.code=1;callerCallback(res);});};const setScreenShotContainerSize=(screenShotImageController,data,canvasSize,viewSize,position)=>{// 设置截图区域canvas宽高
data.setScreenShotInfo(viewSize.width,viewSize.height);// 设置截图容器位置
data.setScreenShotPosition(position.left,position.top);// 设置截图图片存放容器宽高
screenShotImageController.width=viewSize.width;screenShotImageController.height=viewSize.height;// 用户有传宽高则使用用户传进来的
if(canvasSize.canvasWidth!==0&&canvasSize.canvasHeight!==0){data.setScreenShotInfo(canvasSize.canvasWidth,canvasSize.canvasHeight);screenShotImageController.width=canvasSize.canvasWidth;screenShotImageController.height=canvasSize.canvasHeight;}};const filter=node=>{// 过滤掉一些隐藏的dom
if(node.nodeType===1&&(node.style?.display==='none'||node.style?.opacity==='0')){return false;}// 将本截图工具生成的一些dom排除掉
if(['screenShotContainer','toolPanel','optionPanel','cutBoxSizePanel','textInputPanel'].includes(node.id)){return false;}return true;};const h2cScreenShot=(triggerCallback,screenShotDom)=>{const data=new PlugInParameters();const dpr=data.getRatio();return new Promise((resolve,reject)=>{(0,htmlToImage/* toCanvas */.mo)(screenShotDom||document.body,{filter,pixelRatio:dpr}).then(canvas=>{resolve({code:0,data:{canvas}});}).catch(error=>{const msg={code:-1,msg:error};if(triggerCallback!=null){// eslint-disable-line eqeqeq
// 获取页面元素成功，执行回调函数
triggerCallback(msg);}reject(msg);});});};const getContainerSize=(canvasSize,screenShotImageController,wrcWindowMode,dpr)=>{let containerWidth=screenShotImageController?.width;let containerHeight=screenShotImageController?.height;// 用户有传宽高时，则使用用户的
if(canvasSize.canvasWidth!==0&&canvasSize.canvasHeight!==0){containerWidth=canvasSize.canvasWidth;containerHeight=canvasSize.canvasHeight;}let imgContainerWidth=containerWidth;let imgContainerHeight=containerHeight;if(wrcWindowMode){imgContainerWidth=containerWidth*dpr;imgContainerHeight=containerHeight*dpr;}return{containerWidth,containerHeight,imgContainerWidth,imgContainerHeight};};const fixWrcSize=(containerWidth,containerHeight,videoWidth,videoHeight,wrcImgPosition,imgContext,videoController,hiddenScrollBar)=>{let fixWidth=containerWidth;let fixHeight=videoHeight*containerWidth/videoWidth;if(fixHeight>containerHeight){fixWidth=containerWidth*containerHeight/fixHeight;fixHeight=containerHeight;}// 对视频容器的内容进行裁剪
fixWidth=wrcImgPosition.w>0?wrcImgPosition.w:fixWidth;fixHeight=wrcImgPosition.h>0?wrcImgPosition.h:fixHeight;imgContext?.drawImage(videoController,wrcImgPosition.x,wrcImgPosition.y,fixWidth,fixHeight);// 隐藏滚动条会出现部分内容未截取到，需要进行修复
const diffHeight=containerHeight-fixHeight;if(hiddenScrollBar.state&&diffHeight>0&&hiddenScrollBar.fillState){// 填充容器的剩余部分
imgContext.beginPath();let fillWidth=containerWidth;let fillHeight=diffHeight;if(hiddenScrollBar?.fillWidth&&hiddenScrollBar.fillWidth>0){fillWidth=hiddenScrollBar.fillWidth;}if(hiddenScrollBar?.fillHeight&&hiddenScrollBar.fillHeight>0){fillHeight=hiddenScrollBar.fillHeight;}imgContext.rect(0,fixHeight,fillWidth,fillHeight);imgContext.fillStyle=hiddenScrollBar.color||'';imgContext.fill();}};const getDisplayMediaConfig=(screenShotImageController,dpr,wrcWindowMode)=>{let mediaWidth=screenShotImageController.width*dpr;let mediaHeight=screenShotImageController.height*dpr;let curTabState=true;let displayConfig={};// 窗口模式启用时则
if(wrcWindowMode){mediaWidth=window.screen.width*dpr;mediaHeight=window.screen.height*dpr;curTabState=false;displayConfig={displaySurface:'window'};}return{audio:false,video:{width:mediaWidth,height:mediaHeight,...displayConfig},// @ts-ignore
// 当前标签页
preferCurrentTab:curTabState};};const handleMouseDown=(data,drawGraphPosition,mouseInsideCropBox,textInputPosition,position,mouseX,mouseY,containerInfo)=>{// 如果当前操作的是截图工具栏
if(data.getToolClickStatus()){// 记录当前鼠标开始坐标
drawGraphPosition.startX=mouseX;drawGraphPosition.startY=mouseY;}// 当前操作的是画笔
if(data.getToolName()==='brush'&&containerInfo.screenShotCanvas){// 初始化画笔
initPencil(containerInfo.screenShotCanvas,mouseX,mouseY);}// 当前操作的文本
if(data.getToolName()==='text'&&containerInfo.textInputController&&containerInfo.screenShotContainer&&containerInfo.screenShotCanvas){if(!mouseInsideCropBox){return;}// 显示文本输入区域
data.setTextStatus(true);// 判断输入框位置是否变化
if(textInputPosition.mouseX!==0&&textInputPosition.mouseY!==0&&textInputPosition.mouseX!==mouseX&&textInputPosition.mouseY!==mouseY){DrawText(containerInfo.textInputController.textContent??'',textInputPosition.mouseX,textInputPosition.mouseY,data.getSelectedColor(),data.getFontSize(),containerInfo.screenShotCanvas);// 输入框内容不为空时则隐藏
if(containerInfo.textInputController.textContent!==''){// 隐藏输入框
data.setTextStatus(false);}// 清空文本输入区域的内容
containerInfo.textInputController.innerHTML='';// 保存绘制记录
AddHistoryData();}// 计算文本框显示位置, 需要加上截图容器的位置信息
const textMouseX=mouseX+position.left;// 设置文本框位置等信息
containerInfo.textInputController.style.left=`${textMouseX}px`;containerInfo.textInputController.style.fontSize=`${data.getFontSize()}px`;containerInfo.textInputController.style.fontFamily='none';containerInfo.textInputController.style.color=data.getSelectedColor();// 部分操作需要等dom渲染完毕执行
setTimeout(()=>{if(containerInfo.textInputController){// 获取输入框容器的高度
const containerHeight=containerInfo.textInputController.offsetHeight;// 输入框容器y轴的位置需要在坐标的基础上再加上容器高度的一半，容器的位置就正好居中于光标
// canvas渲染的时候就不会出现位置不一致的问题了
const textMouseY=mouseY-Math.floor(containerHeight/2)+position.top;containerInfo.textInputController.style.top=`${textMouseY}px`;// 获取焦点
containerInfo.textInputController.focus();// 记录当前输入框位置
textInputPosition.mouseX=mouseX;textInputPosition.mouseY=mouseY;data.setTextInfo({positionX:mouseX,positionY:mouseY,color:data.getSelectedColor(),size:data.getFontSize()});}});}};const handleGraffitiDraw=(drawStatus,startX,startY,tempWidth,tempHeight,currentX,currentY,degreeOfBlur,data,useRatioArrow,containerInfo,containerFn,callerCallback)=>{const res={code:0,data:null,msg:''};switch(data.getToolName()){case'square':{DrawRectangle(startX,startY,tempWidth,tempHeight,data.getSelectedColor(),data.getPenSize(),containerInfo.screenShotCanvas);break;}case'round':{DrawCircle(containerInfo.screenShotCanvas,currentX,currentY,startX,startY,data.getPenSize(),data.getSelectedColor());break;}case'right-top':{// 绘制等比例箭头
if(useRatioArrow){DrawLineArrow(containerInfo.screenShotCanvas,startX,startY,currentX,currentY,30,10,data.getPenSize(),data.getSelectedColor());break;}// 绘制递增变粗箭头
new DrawArrow().draw(containerInfo.screenShotCanvas,startX,startY,currentX,currentY,data.getSelectedColor(),data.getPenSize());break;}case'brush':{// 画笔绘制
drawPencil(containerInfo.screenShotCanvas,currentX,currentY,data.getPenSize(),data.getSelectedColor());break;}case'mosaicPen':{// 当前为马赛克工具则修改绘制状态
// 前面做了判断，此处需要特殊处理
if(!drawStatus){containerFn.showLastHistory();// 返回一个特殊值，用于修改调用组件的内部状态
res.code=1;res.data=true;res.msg='需要更新组件状态';callerCallback(res);}// 绘制马赛克，为了确保鼠标位置在绘制区域中间，所以对x、y坐标进行-10处理
DrawMosaic(currentX-10,currentY-10,data.getMosaicPenSize(),degreeOfBlur,containerInfo.screenShotCanvas);break;}default:{break;}}return res;};/**
 * 操作裁剪框
 * @param currentX 裁剪框当前x轴坐标
 * @param currentY 裁剪框当前y轴坐标
 * @param startX 鼠标x轴坐标
 * @param startY 鼠标y轴坐标
 * @param width 裁剪框宽度
 * @param height 裁剪框高度
 * @param context 需要进行绘制的canvas画布
 * @param data
 * @param dpr
 * @param containerInfo
 * @param containerVariable
 * @param callerCallback
 * @private
 */const operatingCutOutBox=(currentX,currentY,startX,startY,width,height,context,data,dpr,containerInfo,containerVariable,callerCallback)=>{const res={code:0,msg:'',data:null};// canvas元素不存在
if(containerInfo.screenShotContainer==null){// eslint-disable-line eqeqeq
return;}// 获取鼠标按下时的坐标
const{moveStartX,moveStartY}=containerVariable.movePosition;// 裁剪框边框节点事件存在且裁剪框未进行操作，则对鼠标样式进行修改
if(containerVariable.cutOutBoxBorderArr.length>0&&!data.getDraggingTrim()){// 标识鼠标是否在裁剪框内
let flag=false;// 判断鼠标位置
context.beginPath();for(let i=0;i<containerVariable.cutOutBoxBorderArr.length;i++){context.rect(containerVariable.cutOutBoxBorderArr[i].x,containerVariable.cutOutBoxBorderArr[i].y,containerVariable.cutOutBoxBorderArr[i].width,containerVariable.cutOutBoxBorderArr[i].height);// 当前坐标点处于8个可操作点上，修改鼠标指针样式
if(context.isPointInPath(currentX*dpr,currentY*dpr)){switch(containerVariable.cutOutBoxBorderArr[i].index){case 1:{if(data.getToolClickStatus()){// 修改截图容器内的鼠标样式
UpdateContainerMouseStyle(containerInfo.screenShotContainer,data.getActiveToolName());}else{containerInfo.screenShotContainer.style.cursor='move';}break;}case 2:{// 工具栏被点击则不改变指针样式
if(data.getToolClickStatus())break;containerInfo.screenShotContainer.style.cursor='ns-resize';break;}case 3:{if(data.getToolClickStatus())break;containerInfo.screenShotContainer.style.cursor='ew-resize';break;}case 4:{if(data.getToolClickStatus())break;containerInfo.screenShotContainer.style.cursor='nwse-resize';break;}case 5:{if(data.getToolClickStatus())break;containerInfo.screenShotContainer.style.cursor='nesw-resize';break;}default:{break;}}res.code=1;res.data=containerVariable.cutOutBoxBorderArr[i].option;res.msg='修改borderOption的值';callerCallback(res);flag=true;break;}}res.code=2;res.data=flag;res.msg='修改mouseInsideCropBox的值';callerCallback(res);context.closePath();if(!flag){// 鼠标移出裁剪框重置鼠标样式
containerInfo.screenShotContainer.style.cursor='default';// 重置当前操作的边框节点为null
res.code=3;res.data=null;res.msg='重置borderOption的值';callerCallback(res);}}// 裁剪框正在被操作
if(data.getDraggingTrim()){// 当前操作节点为1时则为移动裁剪框
if(containerVariable.borderOption===1){// 计算要移动的x轴坐标
let x=FixedData(currentX-(moveStartX-startX),width,containerInfo.screenShotContainer.width);// 计算要移动的y轴坐标
let y=FixedData(currentY-(moveStartY-startY),height,containerInfo.screenShotContainer.height);// 计算画布面积
const containerWidth=containerInfo.screenShotContainer.width/dpr;const containerHeight=containerInfo.screenShotContainer.height/dpr;// 计算裁剪框在画布上所占的面积
const cutOutBoxSizeX=x+width;const cutOutBoxSizeY=y+height;// 超出画布的可视区域，进行位置修正
if(cutOutBoxSizeX>containerWidth){x=containerWidth-width;}if(cutOutBoxSizeY>containerHeight){y=containerHeight-height;}// 重新绘制裁剪框
Object.assign(containerVariable.tempGraphPosition,DrawCutOutBox(x,y,width,height,context,data.getBorderSize(),containerInfo.screenShotContainer,containerInfo.screenShotImageController));}else{// 裁剪框其他8个点的拖拽事件
const{tempStartX,tempStartY,tempWidth,tempHeight}=ZoomCutOutBoxPosition(currentX,currentY,startX,startY,width,height,containerVariable.borderOption);// 绘制裁剪框
Object.assign(containerVariable.tempGraphPosition,DrawCutOutBox(tempStartX,tempStartY,tempWidth,tempHeight,context,data.getBorderSize(),containerInfo.screenShotContainer,containerInfo.screenShotImageController));}}};// 调整插件容器层级
const adjustContainerLevels=(level,containerInfo)=>{if(containerInfo.screenShotContainer==null||// eslint-disable-line eqeqeq
containerInfo.toolController==null||// eslint-disable-line eqeqeq
containerInfo.textInputController==null||// eslint-disable-line eqeqeq
containerInfo.optionIcoController==null||// eslint-disable-line eqeqeq
containerInfo.optionController==null||// eslint-disable-line eqeqeq
containerInfo.cutBoxSizeContainer==null||// eslint-disable-line eqeqeq
level<=0){return;}containerInfo.screenShotContainer.style.zIndex=`${level}`;containerInfo.toolController.style.zIndex=`${level+1}`;containerInfo.textInputController.style.zIndex=`${level+1}`;containerInfo.optionIcoController.style.zIndex=`${level+1}`;containerInfo.optionController.style.zIndex=`${level+1}`;containerInfo.cutBoxSizeContainer.style.zIndex=`${level+1}`;};// 初始化裁剪框
const initCropBox=(dpr,cropBoxInfo,data,containerInfo,containerVariable,containerFn)=>{const startX=cropBoxInfo.x;const startY=cropBoxInfo.y;const width=cropBoxInfo.w;const height=cropBoxInfo.h;if(containerInfo.screenShotContainer==null)return;// eslint-disable-line eqeqeq
containerVariable.drawGraphPosition.startX=startX;containerVariable.drawGraphPosition.startY=startY;containerVariable.drawGraphPosition.width=width;containerVariable.drawGraphPosition.height=height;data.setCutOutBoxPosition(startX,startY,width,height);DrawCutOutBox(startX,startY,width,height,containerInfo.screenShotCanvas,data.getBorderSize(),containerInfo.screenShotContainer,containerInfo.screenShotImageController);// 保存边框节点信息
containerVariable.cutOutBoxBorderArr.length=0;containerVariable.cutOutBoxBorderArr.push(...SaveBorderArrInfo(data.getBorderSize(),containerVariable.drawGraphPosition));// 修改鼠标状态为拖动
containerInfo.screenShotContainer.style.cursor='move';// 显示截图工具栏
data.setToolStatus(true);// 显示裁剪框尺寸显示容器
data.setCutBoxSizeStatus(true);if(containerInfo.toolController!==null){// 渲染截图工具栏
showToolBar(dpr,data,{toolController:containerInfo.toolController,screenShotContainer:containerInfo.screenShotContainer},{drawGraphPosition:containerVariable.drawGraphPosition,placement:containerVariable.placement,position:containerVariable.position,fullScreenDiffHeight:containerVariable.fullScreenDiffHeight,getFullScreenStatus:containerVariable.getFullScreenStatus},containerFn.toolBarCallerCallback);}};// 为截图容器添加鼠标||触摸的事件监听
const setScreenShotContainerEventListener=(screenShotContainer,containerFn)=>{if(IsPC()){// 添加鼠标事件监听
screenShotContainer?.addEventListener('mousedown',containerFn.mouseDownEvent);screenShotContainer?.addEventListener('mousemove',containerFn.mouseMoveEvent);screenShotContainer?.addEventListener('mouseup',containerFn.mouseUpEvent);}// 设备不支持触摸事件则退出
if(!IsTouchDevice())return;// 设置触摸监听
screenShotContainer?.addEventListener('touchstart',containerFn.mouseDownEvent,false);screenShotContainer?.addEventListener('touchmove',containerFn.mouseMoveEvent,false);screenShotContainer?.addEventListener('touchend',containerFn.mouseUpEvent,false);};const sendStream=(stream,cancelCallback,triggerCallback,data,containerInfo,containerFn)=>{if(stream instanceof MediaStream){containerInfo.videoController.srcObject=stream;containerFn.loadScreenFlowData(triggerCallback);}else{if(cancelCallback!=null){// eslint-disable-line eqeqeq
cancelCallback({code:-1,msg:'视频流接入失败'});}// 销毁截图组件
data.destroyDOM();throw'视频流接入失败';}return stream;};// 开始捕捉屏幕
const startCapture=async(cancelCallback,data,containerInfo,containerVariable,callerCallback)=>{let captureStream;try{// 捕获屏幕
captureStream=await navigator.mediaDevices.getDisplayMedia(getDisplayMediaConfig(containerInfo.screenShotImageController,containerVariable.dpr,containerVariable.wrcWindowMode));// 将MediaStream输出至video标签
// eslint-disable-next-line require-atomic-updates
containerInfo.videoController.srcObject=captureStream;// 储存屏幕流数据
callerCallback({code:1,data:captureStream,msg:'更新captureStream数据'});}catch(error){const msg='浏览器不支持webrtc或者用户未授权';if(cancelCallback!=null){// eslint-disable-line eqeqeq
cancelCallback({code:-1,msg,errorInfo:error});}// 销毁截图组件
data.destroyDOM();throw`${msg}( ${error} )`;}return captureStream;};// 停止捕捉屏幕
const stopCapture=videoController=>{const srcObject=videoController.srcObject;if(srcObject&&'getTracks'in srcObject){const tracks=srcObject.getTracks();tracks.forEach(track=>track.stop());videoController.srcObject=null;}};
;// ./src/thirdparty/screenshot/lib/main-entrance/MouseEventHandling.ts
/* unused harmony import specifier */ var MouseEventHandling_nonNegativeData;
/* unused harmony import specifier */ var MouseEventHandling_handleGraffitiDraw;
/* unused harmony import specifier */ var MouseEventHandling_operatingCutOutBox;
/* unused harmony import specifier */ var getDrawBoundaryStatus;
/* unused harmony import specifier */ var MouseEventHandling_drawCutOutBox;
const mouseDownCore=(event,data,containerInfo,containerVariable,containerFn)=>{// 当前处于移动端触摸时，需要在按下时判断当前坐标点是否处于裁剪框内，主动更新draggingTrim状态（移动端的move事件只会在按下时才会触发）
if(!IsPC()&&event instanceof TouchEvent&&containerInfo.screenShotCanvas){operatingCutOutBox(event.touches[0].pageX,event.touches[0].pageY,containerVariable.tempGraphPosition.startX,containerVariable.tempGraphPosition.startY,containerVariable.tempGraphPosition.width,containerVariable.tempGraphPosition.height,containerInfo.screenShotCanvas,data,containerVariable.dpr,{screenShotContainer:containerInfo.screenShotContainer,screenShotImageController:containerInfo.screenShotImageController},{movePosition:containerVariable.movePosition,tempGraphPosition:containerVariable.tempGraphPosition,cutOutBoxBorderArr:containerVariable.cutOutBoxBorderArr,borderOption:containerVariable.borderOption},containerFn.croppingBoxCallerCallback);}// 当前操作的是撤销
if(data.getToolName()==='undo')return;data.setDragging(true);// 重置工具栏超出状态
data.setToolPositionStatus(false);const mouseX=NonNegativeData(event instanceof MouseEvent?event.offsetX:event.touches[0].pageX);const mouseY=NonNegativeData(event instanceof MouseEvent?event.offsetY:event.touches[0].pageY);handleMouseDown(data,containerVariable.drawGraphPosition,containerVariable.mouseInsideCropBox,containerVariable.textInputPosition,containerVariable.position,mouseX,mouseY,{textInputController:containerInfo.textInputController,screenShotContainer:containerInfo.screenShotContainer,screenShotCanvas:containerInfo.screenShotCanvas});// 如果操作的是裁剪框
if(containerVariable.borderOption){// 设置为拖动状态
data.setDraggingTrim(true);// 记录移动时的起始点坐标
containerVariable.movePosition.moveStartX=mouseX;containerVariable.movePosition.moveStartY=mouseY;}else{containerFn.saveDrawGraphCallerCallback({code:1,msg:'保存当前裁剪框的坐标',data:{drawGraphPrevX:containerVariable.drawGraphPosition.startX,drawGraphPrevY:containerVariable.drawGraphPosition.startY}});// 绘制裁剪框,记录当前鼠标开始坐标
containerVariable.drawGraphPosition.startX=mouseX;containerVariable.drawGraphPosition.startY=mouseY;}};const mouseMoveCore=(event,data,containerInfo,containerVariable,containerFn)=>{/**
   * 调用视角
   *   // 鼠标移动事件
   *   private mouseMoveEvent2 = (event: MouseEvent | TouchEvent) => {
   *     if (
   *       this.screenShotCanvas === null ||
   *       this.screenShotContainer === null ||
   *       this.data.getToolName() === "undo"
   *     ) {
   *       return;
   *     }
   *     // 去除默认事件
   *     event.preventDefault();
   *
   *     const updateDragFlagCallback = (res: genericMethodPostbackType) => {
   *       if (res.code === 1 && typeof res.data === "boolean") {
   *         this.dragFlag = res.data;
   *       }
   *     };
   *     const updateDrawStatusCallback = (res: genericMethodPostbackType) => {
   *       if (res.code === 1 && typeof res.data === "boolean") {
   *         this.drawStatus = res.data;
   *       }
   *     };
   *     const updateTempGraphPositionCallback = (
   *       res: genericMethodPostbackType
   *     ) => {
   *       if (res.code === 1 && typeof res.data !== null) {
   *         this.tempGraphPosition = res.data as drawCutOutBoxReturnType;
   *       }
   *     };
   *     mouseMoveCore(
   *       event,
   *       this.data,
   *       {
   *         screenShotCanvas: this.screenShotCanvas,
   *         screenShotContainer: this.screenShotContainer,
   *         screenShotImageController: this.screenShotImageController,
   *         textInputController: this.textInputController
   *       },
   *       {
   *         tempGraphPosition: this.tempGraphPosition,
   *         dpr: this.dpr,
   *         movePosition: this.movePosition,
   *         cutOutBoxBorderArr: this.cutOutBoxBorderArr,
   *         borderOption: this.borderOption,
   *         drawGraphPosition: this.drawGraphPosition,
   *         position: this.position,
   *         drawStatus: this.drawStatus,
   *         degreeOfBlur: this.degreeOfBlur,
   *         useRatioArrow: this.plugInParameters.getRatioArrow()
   *       },
   *       {
   *         showLastHistory: this.showLastHistory,
   *         croppingBoxCallerCallback: this.croppingBoxCallerCallback,
   *         updateDragFlagCallback,
   *         updateDrawStatusCallback,
   *         updateTempGraphPositionCallback
   *       }
   *     );
   *   };
   */// 工具栏未选择且鼠标处于按下状态时
if(!data.getToolClickStatus()&&data.getDragging()){// 修改拖动状态为true;
containerFn.updateDragFlagCallback({code:1,msg:'更新拖动状态',data:true});// 隐藏截图工具栏
data.setToolStatus(false);// 隐藏裁剪框尺寸显示容器
data.setCutBoxSizeStatus(false);}// 获取当前绘制中的工具位置信息
const{startX,startY,width,height}=containerVariable.drawGraphPosition;// 获取当前鼠标坐标
const currentX=MouseEventHandling_nonNegativeData(event instanceof MouseEvent?event.offsetX:event.touches[0].pageX);const currentY=MouseEventHandling_nonNegativeData(event instanceof MouseEvent?event.offsetY:event.touches[0].pageY);// 绘制中工具的临时宽高
const tempWidth=currentX-startX;const tempHeight=currentY-startY;// 工具栏绘制
if(data.getToolClickStatus()&&data.getDragging()){// 获取裁剪框位置信息
const cutBoxPosition=data.getCutOutBoxPosition();// 绘制中工具的起始x、y坐标不能小于裁剪框的起始坐标
// 绘制中工具的起始x、y坐标不能大于裁剪框的结束标作
// 当前鼠标的x坐标不能小于裁剪框起始x坐标，不能大于裁剪框的结束坐标
// 当前鼠标的y坐标不能小于裁剪框起始y坐标，不能大于裁剪框的结束坐标
if(!getDrawBoundaryStatus(startX,startY,cutBoxPosition)||!getDrawBoundaryStatus(currentX,currentY,cutBoxPosition)){return;}// 当前操作的不是马赛克则显示最后一次画布绘制时的状态
if(data.getToolName()!=='mosaicPen'){containerFn.showLastHistory();containerFn.updateDrawStatusCallback({code:1,msg:'更新绘制状态',data:true});}const callerCallback=res=>{if(res.code===1&&res.data!==null&&typeof res.data==='boolean'){containerFn.updateDrawStatusCallback({code:1,msg:'更新绘制状态',data:res.data});}};// 处理涂鸦绘制
MouseEventHandling_handleGraffitiDraw(containerVariable.drawStatus,startX,startY,tempWidth,tempHeight,currentX,currentY,containerVariable.degreeOfBlur,data,containerVariable.useRatioArrow,{screenShotCanvas:containerInfo.screenShotCanvas},{showLastHistory:containerFn.showLastHistory},callerCallback);return;}// 执行裁剪框操作函数
MouseEventHandling_operatingCutOutBox(currentX,currentY,startX,startY,width,height,containerInfo.screenShotCanvas,data,containerVariable.dpr,{screenShotContainer:containerInfo.screenShotContainer,screenShotImageController:containerInfo.screenShotImageController},{movePosition:containerVariable.movePosition,tempGraphPosition:containerVariable.tempGraphPosition,cutOutBoxBorderArr:containerVariable.cutOutBoxBorderArr,borderOption:containerVariable.borderOption},containerFn.croppingBoxCallerCallback);// 如果鼠标未点击或者当前操作的是裁剪框都return
if(!data.getDragging()||data.getDraggingTrim())return;// 绘制裁剪框
const tempGraphPosition=MouseEventHandling_drawCutOutBox(startX,startY,tempWidth,tempHeight,containerInfo.screenShotCanvas,data.getBorderSize(),containerInfo.screenShotContainer,containerInfo.screenShotImageController);containerFn.updateTempGraphPositionCallback({code:1,msg:'更新tempGraphPosition的值',data:tempGraphPosition});};const mouseUpCore=(data,containerVariable,containerInfo,containerFn)=>{// 工具栏未点击且鼠标未拖动且单击截屏状态为false则复原裁剪框位置
if(!data.getToolClickStatus()&&!containerVariable.dragFlag&&!containerVariable.clickCutFullScreen){// 复原裁剪框的坐标
containerVariable.drawGraphPosition.startX=containerVariable.drawGraphPrevX;containerVariable.drawGraphPosition.startY=containerVariable.drawGraphPrevY;return;}// 调用者尚未拖拽生成选区
// 鼠标尚未拖动
// 单击截取屏幕状态为true
// 则截取整个屏幕
const cutBoxPosition=data.getCutOutBoxPosition();if(cutBoxPosition.width===0&&cutBoxPosition.height===0&&cutBoxPosition.startX===0&&cutBoxPosition.startY===0&&!containerVariable.dragFlag&&containerVariable.clickCutFullScreen){const borderSize=data.getBorderSize();containerFn.updateTempGraphPositionCallback({code:1,msg:'更新getFullScreenStatus与tempGraphPosition',data:{getFullScreenStatus:true,tempGraphPosition:DrawCutOutBox(0,0,containerInfo.screenShotContainer.width-borderSize/2,containerInfo.screenShotContainer.height-borderSize/2,containerInfo.screenShotCanvas,borderSize,containerInfo.screenShotContainer,containerInfo.screenShotImageController)}});// this.getFullScreenStatus = true;
// 设置裁剪框位置为全屏
// this.tempGraphPosition = drawCutOutBox(
//   0,
//   0,
//   this.screenShotContainer.width - borderSize / 2,
//   this.screenShotContainer.height - borderSize / 2,
//   this.screenShotCanvas,
//   borderSize,
//   this.screenShotContainer,
//   this.screenShotImageController
// ) as drawCutOutBoxReturnType;
}if(containerInfo.screenShotContainer===null||containerInfo.screenShotCanvas===null){return;}// 工具栏已点击且进行了绘制
if(data.getToolClickStatus()&&containerVariable.drawStatus){// 保存绘制记录
AddHistoryData();return;}else if(data.getToolClickStatus()&&!containerVariable.drawStatus){// 工具栏点击了但尚未进行绘制
return;}// 保存绘制后的图形位置信息
Object.assign(containerVariable.drawGraphPosition,containerVariable.tempGraphPosition);// 如果工具栏未点击则保存裁剪框位置
if(!data.getToolClickStatus()){const{startX,startY,width,height}=containerVariable.drawGraphPosition;data.setCutOutBoxPosition(startX,startY,width,height);}// 保存边框节点信息
Object.assign(containerVariable.cutOutBoxBorderArr,SaveBorderArrInfo(data.getBorderSize(),containerVariable.drawGraphPosition));// 鼠标按下且拖动时重新渲染工具栏
if(containerInfo.screenShotContainer!==null&&containerVariable.dragFlag||containerVariable.clickCutFullScreen){// 修改鼠标状态为拖动
containerInfo.screenShotContainer.style.cursor='move';// 显示截图工具栏
data.setToolStatus(true);// 显示裁剪框尺寸显示容器
data.setCutBoxSizeStatus(true);// 复原拖动状态
containerFn.updateDrawStatusCallback({code:1,msg:'更新dragFlag',data:false});if(containerInfo.toolController!==null){showToolBar(containerVariable.dpr,data,{toolController:containerInfo.toolController,screenShotContainer:containerInfo.screenShotContainer},{drawGraphPosition:containerVariable.drawGraphPosition,placement:containerVariable.placement,position:containerVariable.position,fullScreenDiffHeight:containerVariable.fullScreenDiffHeight,getFullScreenStatus:containerVariable.getFullScreenStatus},containerFn.toolBarCallerCallback);}}};
;// ./src/thirdparty/screenshot/lib/split-methods/BoundaryJudgment.ts
/**
 * 获取工具栏工具边界绘制状态
 * @param startX x轴绘制起点
 * @param startY y轴绘制起点
 * @param cutBoxPosition 裁剪框位置信息
 */const BoundaryJudgment_getDrawBoundaryStatus=(startX,startY,cutBoxPosition)=>{if(startX<cutBoxPosition.startX||startY<cutBoxPosition.startY||startX>cutBoxPosition.startX+cutBoxPosition.width||startY>cutBoxPosition.startY+cutBoxPosition.height){// 无法绘制
return false;}// 可以绘制
return true;};/* harmony default export */ const BoundaryJudgment = (BoundaryJudgment_getDrawBoundaryStatus);
;// ./src/thirdparty/screenshot/lib/split-methods/DrawMasking.ts
/**
 * 绘制蒙层
 * @param context 需要进行绘制canvas
 * @param imgData 屏幕截图canvas容器
 */const drawMasking=(context,imgData)=>{const data=new PlugInParameters();const plugInParameters=new PlugInParameters();const canvasSize=plugInParameters.getCanvasSize();const viewSize={width:Number.parseFloat(globalThis.getComputedStyle(document.body).width),height:Number.parseFloat(globalThis.getComputedStyle(document.body).height)};const maxWidth=Math.max(viewSize.width||0,Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),Math.max(document.body.clientWidth,document.documentElement.clientWidth));const maxHeight=Math.max(viewSize.height||0,Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight));// 清除画布
context.clearRect(0,0,maxWidth,maxHeight);// 屏幕截图存在且展示截图数据的状态为true则进行绘制
if(imgData!=null&&plugInParameters.getShowScreenDataStatus()){// eslint-disable-line eqeqeq
// 调用者传了画布尺寸则使用，否则使用窗口宽高
if(canvasSize.canvasWidth!==0&&canvasSize.canvasHeight!==0){context.drawImage(imgData,0,0,canvasSize.canvasWidth,canvasSize.canvasHeight);}else{context.drawImage(imgData,0,0,maxWidth,maxHeight);}}// 绘制蒙层
context.save();const maskColor=data.getMaskColor();context.fillStyle='rgba(0, 0, 0, .6)';if(maskColor){context.fillStyle=`rgba(${maskColor.r}, ${maskColor.g}, ${maskColor.b}, ${maskColor.a})`;}if(canvasSize.canvasWidth!==0&&canvasSize.canvasHeight!==0){context.fillRect(0,0,canvasSize.canvasWidth,canvasSize.canvasHeight);}else{context.fillRect(0,0,maxWidth,maxHeight);}// 绘制结束
context.restore();};/* harmony default export */ const DrawMasking = (drawMasking);
;// ./src/thirdparty/screenshot/lib/split-methods/KeyboardEventHandle.ts
// 键盘按下事件处理类
class KeyboardEventHandle{// 截图工具栏容器
toolController=null;constructor(screenShotController,toolController){const data=new InitData();const textInputContainer=document.querySelector('#textInputPanel');this.toolController=toolController;// 调整截图容器显示权重
screenShotController.tabIndex=99998;// 监听全局键盘按下事件
document.body.addEventListener('keydown',event=>{// 文本输入框存在时则终止
if(data.getTextEditState()){data.setTextEditState(false);return;}if(event.code==='Escape'){// ESC按下，触发取消截图事件
this.triggerEvent('close');}if(event.code==='Enter'&&textInputContainer&&// @ts-expect-error
textInputContainer.style.display!=='block'){// Enter按下，触发确认截图事件
this.triggerEvent('confirm');}// 按下command+z或者ctrl+z快捷键选中撤销工具
if((event.metaKey||event.ctrlKey)&&event.code==='KeyZ'){this.triggerEvent('undo');}});}/**
   * 触发工具栏指定模块的点击事件
   * @param eventName 事件名, 与截图工具栏中的data-title属性值保持一致
   * @private
   */triggerEvent(eventName){if(this.toolController===null)return;for(let i=0;i<this.toolController.childNodes.length;i++){const childNode=this.toolController.childNodes[i];const toolName=childNode.dataset.title;if(toolName===eventName){// 执行参数事件
childNode.click();}}}}
;// ./src/thirdparty/screenshot/lib/split-methods/SetPlugInParameters.ts
// 为插件的全局参数设置数据
const setPlugInParameters=options=>{const plugInParameters=new PlugInParameters();// webrtc启用状态, 默认为true，如果设置了false则修改默认值
if(options?.enableWebRtc===false){plugInParameters.setWebRtcStatus(false);plugInParameters.setInitStatus(false);}// 读取并设置参数中的视频流数据
if(options?.screenFlow instanceof MediaStream){plugInParameters.setScreenFlow(options.screenFlow);}// 读取参数中的画布宽高, 两者都存在时才设置
if(options?.canvasWidth&&options?.canvasHeight){plugInParameters.setCanvasSize(options.canvasWidth,options.canvasHeight);}// 读取参数设置默认展示截屏数据的状态，默认为false，如果设置了true才修改
if(options?.showScreenData===true){plugInParameters.setShowScreenDataStatus(true);}if(options?.maskColor&&typeof options.maskColor==='object'){plugInParameters.setMaskColor(options.maskColor);}// 调用者关闭了剪切板写入，则修改全局变量（默认为true）
if(options?.writeBase64===false){plugInParameters.setWriteImgState(options.writeBase64);}// 调用者传入了截图dom
if(options?.screenShotDom){plugInParameters.setScreenShotDom(options.screenShotDom);}// 调用者传入了裁剪区域边框像素点颜色信息
if(options?.cutBoxBdColor){plugInParameters.setCutBoxBdColor(options.cutBoxBdColor);}// 调用者传入了保存截图回调
if(options?.saveCallback){plugInParameters.setSaveCallback(options.saveCallback);}// 设置最大撤销次数
if(options?.maxUndoNum){plugInParameters.setMaxUndoNum(options.maxUndoNum);}// 箭头绘制工具是否使用等比例绘制方式
if(options?.useRatioArrow){plugInParameters.setRatioArrow(options.useRatioArrow);}// 设置图片自适应开启状态
if(options?.imgAutoFit){plugInParameters.setImgAutoFit(options.imgAutoFit);}// 设置图片保存时的文件名称
if(options?.saveImgTitle){plugInParameters.setSaveImgTitle(options.saveImgTitle);}// 设置截屏比率
if(options?.ratio){plugInParameters.setRatio(options.ratio);}};/* harmony default export */ const SetPlugInParameters = (setPlugInParameters);
;// ./src/thirdparty/screenshot/index.ts
class ScreenShot{// 当前实例的响应式data数据
// video容器用于存放屏幕MediaStream流
// 截图区域canvas容器
screenShotDom=null;// 截图工具栏dom
// 截图图片存放容器
// 截图区域画布
// 文本区域dom
// 截图工具栏画笔选项dom
wrcReplyTime=500;keyboardEventHandle=null;// 图形位置参数
drawGraphPosition={startX:0,startY:0,width:0,height:0};// 临时图形位置参数
tempGraphPosition={startX:0,startY:0,width:0,height:0};wrcImgPosition={x:0,y:0,w:0,h:0};// 是否隐藏页面滚动条
hiddenScrollBar={color:'#000000',fillState:false,state:false,fillWidth:0,fillHeight:0};wrcWindowMode=false;// 裁剪框边框节点坐标事件
cutOutBoxBorderArr=[];// 当前操作的边框节点
borderOption=null;// 点击裁剪框时的鼠标坐标
movePosition={moveStartX:0,moveStartY:0};// 鼠标拖动状态
dragFlag=false;// 单击截取屏启用状态
clickCutFullScreen=false;// 全屏截取状态
getFullScreenStatus=false;// 上一个裁剪框坐标信息
drawGraphPrevX=0;drawGraphPrevY=0;// 马赛克涂抹区域大小
degreeOfBlur=5;dpr=window.devicePixelRatio||1;// 截全屏时工具栏展示的位置要减去的高度
fullScreenDiffHeight=60;// 截图容器位置信息
position={left:0,top:0};imgSrc=null;// 鼠标是否在裁剪框内
mouseInsideCropBox=false;drawStatus=false;// webrtc模式下的屏幕流数据
captureStream=null;cropBoxInfo=null;// 文本输入框位置
textInputPosition={mouseX:0,mouseY:0};// 工具栏显示位置
placement='center';customRightClickEvent={state:false};constructor(options){this.plugInParameters=new PlugInParameters();// 提取options中的有用参数设置到全局参数中
SetPlugInParameters(options);// 创建截图所需dom并设置回调函数
// eslint-disable-next-line no-new
new CreateDom(options);// 创建并获取webrtc模式所需要的辅助dom
this.videoController=document.createElement('video');this.videoController.autoplay=true;this.screenShotImageController=document.createElement('canvas');// 实例化响应式data
this.data=new InitData();// 设置插件的可选参数
this.setOptionalParameter(options);const{noScroll,triggerCallback,cancelCallback,level}=options;// 获取截图区域canvas容器(获取的同时也会为InitData中的全局变量赋值)
this.setGlobalParameter();// 修改截图容器可滚动状态
this.data.setNoScrollStatus(noScroll);// 加载截图组件
this.load(triggerCallback,cancelCallback).then(()=>{if(this.toolController===null||this.screenShotContainer===null||this.textInputController===null){return;}// 截图组件加载完毕后，对层级进行调整
adjustContainerLevels(level||0,{screenShotContainer:this.screenShotContainer,toolController:this.toolController,textInputController:this.textInputController,optionIcoController:this.optionIcoController,optionController:this.optionController,cutBoxSizeContainer:this.cutBoxSizeContainer});// 为截图容器创建事件监听
if(this.screenShotContainer&&this.toolController&&this.textInputController){this.createEvent(this.screenShotContainer,this.toolController,this.textInputController);}});}// 获取截图区域canvas容器
getCanvasController(){return this.screenShotContainer;}// 销毁组件方法
destroyComponents(){this.data.destroyDOM();this.data.setInitStatus(true);}// 确认截图方法
completeScreenshot(){if(this.keyboardEventHandle){this.keyboardEventHandle.triggerEvent('confirm');}}// 加载截图组件
async load(triggerCallback,cancelCallback){const canvasSize=this.plugInParameters.getCanvasSize();const viewSize={width:Number.parseFloat(globalThis.getComputedStyle(document.body).width),height:Number.parseFloat(globalThis.getComputedStyle(document.body).height)};// 设置截图容器尺寸信息
setScreenShotContainerSize(this.screenShotImageController,this.data,canvasSize,viewSize,this.position);if(this.screenShotContainer==null)return;// eslint-disable-line eqeqeq
// 获取截图区域canvas容器画布
const context=CanvasPatch(this.screenShotContainer,this.screenShotImageController.width,this.screenShotImageController.height);if(context===null)return;// 显示截图区域容器
this.data.showScreenShotPanel();if(!this.plugInParameters.getWebRtcStatus()){// 判断用户是否自己传入截屏图片
if(this.imgSrc!==null){const callerCallback=res=>{if(res.code===1&&res.data===null){this.initScreenShot(triggerCallback,context,this.screenShotImageController);}};drawPictures(this.imgSrc,this.screenShotImageController,callerCallback);return;}const result=await h2cScreenShot(triggerCallback,this.screenShotDom);if(result.code===0){// 存储html-to-image截取的内容
const canvasData=result.data.canvas;this.screenShotImageController=canvasData;// 初始化截图容器
this.initScreenShot(triggerCallback,context,canvasData);}return;}// 调用者有传入屏幕流数据则使用
if(this.plugInParameters.getScreenFlow()){sendStream(this.plugInParameters.getScreenFlow(),cancelCallback,triggerCallback,this.data,{videoController:this.videoController},{loadScreenFlowData:this.loadScreenFlowData});return;}this.wrcScreenShot(cancelCallback,triggerCallback);}loadScreenFlowData(triggerCallback){setTimeout(()=>{// 获取截图区域canvas容器画布
if(this.screenShotContainer==null)return;// eslint-disable-line eqeqeq
const{containerWidth,containerHeight,imgContainerWidth,imgContainerHeight}=getContainerSize(this.plugInParameters.getCanvasSize(),this.screenShotImageController,this.wrcWindowMode,this.dpr);const context=CanvasPatch(this.screenShotContainer,containerWidth,containerHeight);const imgContext=CanvasPatch(this.screenShotImageController,imgContainerWidth,imgContainerHeight);if(context===null||imgContext===null)return;// 赋值截图区域canvas画布
this.screenShotCanvas=context;const{videoWidth,videoHeight}=this.videoController;if(this.wrcWindowMode){// 从窗口视频流中获取body内容
const bodyImgData=getWindowContentData(videoWidth,videoHeight,containerWidth*this.dpr,containerHeight*this.dpr,this.videoController,this.dpr);if(bodyImgData===null)return;// 将body内容绘制到图片容器里
imgContext.putImageData(bodyImgData,0,0);}else{// 对webrtc源提供的图像宽高进行修复
fixWrcSize(containerWidth,containerHeight,videoWidth,videoHeight,this.wrcImgPosition,imgContext,this.videoController,this.hiddenScrollBar);}// 初始化截图容器
this.initScreenShot(undefined,context,this.screenShotImageController);let displaySurface='';let displayLabel='';if(this.captureStream){// 获取当前选择的窗口类型
displaySurface=this.captureStream.getVideoTracks()[0].getSettings()?.displaySurface??'';// 获取当前选择的标签页标识
displayLabel=this.captureStream.getVideoTracks()[0].label;}// 执行截图成功回调
if(triggerCallback){triggerCallback({code:0,msg:'截图加载完成',displaySurface,displayLabel});}// 停止捕捉屏幕
stopCapture(this.videoController);// 重置光标状态
document.body.classList.remove('no-cursor');},this.wrcReplyTime);}// webrtc模式截屏
wrcScreenShot=(cancelCallback,triggerCallback)=>{// 隐藏光标
document.body.classList.add('no-cursor');const callerCallback=res=>{if(res.code===1&&res.data instanceof MediaStream){this.captureStream=res.data;}};// 开始捕捉屏幕
startCapture(cancelCallback,this.data,{screenShotImageController:this.screenShotImageController,videoController:this.videoController},{dpr:this.dpr,wrcWindowMode:this.wrcWindowMode},callerCallback).then(()=>{this.loadScreenFlowData(triggerCallback);});};/**
   * 初始化截图容器
   * src/screenshotparam triggerCallback
   * src/screenshotparam context
   * src/screenshotparam screenShotContainer
   * src/screenshotprivate
   */initScreenShot(triggerCallback,context,screenShotContainer){if(triggerCallback!=null){// eslint-disable-line eqeqeq
// 加载成功，执行回调函数
triggerCallback({code:0,msg:'截图加载完成'});}// 赋值截图区域canvas画布
this.screenShotCanvas=context;// 存储屏幕截图
this.data.setScreenShotImageController(screenShotContainer);// 绘制蒙层
DrawMasking(context,screenShotContainer);// 截图容器添加鼠标点击/触摸事件的监听
setScreenShotContainerEventListener(this.screenShotContainer,{mouseDownEvent:this.mouseDownEvent,mouseMoveEvent:this.mouseMoveEvent,mouseUpEvent:this.mouseUpEvent});// 是否初始化裁剪框
if(this.cropBoxInfo!==null&&Object.keys(this.cropBoxInfo).length===4){initCropBox(this.dpr,this.cropBoxInfo,this.data,{screenShotContainer:this.screenShotContainer,screenShotImageController:this.screenShotImageController,screenShotCanvas:this.screenShotCanvas,toolController:this.toolController},{drawGraphPosition:this.drawGraphPosition,cutOutBoxBorderArr:this.cutOutBoxBorderArr,placement:this.placement,position:this.position,fullScreenDiffHeight:this.fullScreenDiffHeight,getFullScreenStatus:this.getFullScreenStatus},{toolBarCallerCallback:this.toolBarCallerCallback});}}// 鼠标按下事件
mouseDownEvent=event=>{this.drawStatus=false;// 隐藏颜色选择面板
this.data.setColorPanelStatus(false);// 隐藏文字大小选择面板
this.data.setTextSizeOptionStatus(false);// 非鼠标左键按下则终止
if(event instanceof MouseEvent&&event.button!==0)return;const saveDrawGraphCallerCallback=res=>{if(res.code===1&&res.data!==null){this.drawGraphPrevX=res.data.startX;this.drawGraphPrevY=res.data.startY;}};mouseDownCore(event,this.data,{screenShotCanvas:this.screenShotCanvas,screenShotContainer:this.screenShotContainer,screenShotImageController:this.screenShotImageController,textInputController:this.textInputController},{tempGraphPosition:this.tempGraphPosition,dpr:this.dpr,movePosition:this.movePosition,cutOutBoxBorderArr:this.cutOutBoxBorderArr,borderOption:this.borderOption,drawGraphPosition:this.drawGraphPosition,mouseInsideCropBox:this.mouseInsideCropBox,textInputPosition:this.textInputPosition,position:this.position},{croppingBoxCallerCallback:this.croppingBoxCallerCallback,saveDrawGraphCallerCallback});};// 鼠标移动事件
mouseMoveEvent=event=>{if(this.screenShotCanvas===null||this.screenShotContainer===null||this.data.getToolName()==='undo'){return;}// 去除默认事件
event.preventDefault();// 工具栏未选择且鼠标处于按下状态时
if(!this.data.getToolClickStatus()&&this.data.getDragging()){// 修改拖动状态为true;
this.dragFlag=true;// 隐藏截图工具栏
this.data.setToolStatus(false);// 隐藏裁剪框尺寸显示容器
this.data.setCutBoxSizeStatus(false);}// 获取当前绘制中的工具位置信息
const{startX,startY,width,height}=this.drawGraphPosition;// 获取当前鼠标坐标
const currentX=NonNegativeData(event instanceof MouseEvent?event.offsetX:event.touches[0].pageX);const currentY=NonNegativeData(event instanceof MouseEvent?event.offsetY:event.touches[0].pageY);// 绘制中工具的临时宽高
const tempWidth=currentX-startX;const tempHeight=currentY-startY;// 工具栏绘制
if(this.data.getToolClickStatus()&&this.data.getDragging()){// 获取裁剪框位置信息
const cutBoxPosition=this.data.getCutOutBoxPosition();// 绘制中工具的起始x、y坐标不能小于裁剪框的起始坐标
// 绘制中工具的起始x、y坐标不能大于裁剪框的结束标作
// 当前鼠标的x坐标不能小于裁剪框起始x坐标，不能大于裁剪框的结束坐标
// 当前鼠标的y坐标不能小于裁剪框起始y坐标，不能大于裁剪框的结束坐标
if(!BoundaryJudgment(startX,startY,cutBoxPosition)||!BoundaryJudgment(currentX,currentY,cutBoxPosition)){return;}// 当前操作的不是马赛克则显示最后一次画布绘制时的状态
if(this.data.getToolName()!=='mosaicPen'){this.showLastHistory();this.drawStatus=true;}const callerCallback=res=>{if(res.code===1&&res.data!==null&&typeof res.data==='boolean'){this.drawStatus=res.data;}};// 处理涂鸦绘制
if(!this.screenShotCanvas)return;handleGraffitiDraw(this.drawStatus,startX,startY,tempWidth,tempHeight,currentX,currentY,this.degreeOfBlur,this.data,this.plugInParameters.getRatioArrow(),{screenShotCanvas:this.screenShotCanvas},{showLastHistory:this.showLastHistory},callerCallback);return;}// 执行裁剪框操作函数
if(!this.screenShotCanvas||!this.screenShotContainer)return;operatingCutOutBox(currentX,currentY,startX,startY,width,height,this.screenShotCanvas,this.data,this.dpr,{screenShotContainer:this.screenShotContainer,screenShotImageController:this.screenShotImageController},{movePosition:this.movePosition,tempGraphPosition:this.tempGraphPosition,cutOutBoxBorderArr:this.cutOutBoxBorderArr,borderOption:this.borderOption},this.croppingBoxCallerCallback);// 如果鼠标未点击或者当前操作的是裁剪框都return
if(!this.data.getDragging()||this.data.getDraggingTrim())return;// 绘制裁剪框
this.tempGraphPosition=DrawCutOutBox(startX,startY,tempWidth,tempHeight,this.screenShotCanvas,this.data.getBorderSize(),this.screenShotContainer,this.screenShotImageController);};// 鼠标抬起事件
mouseUpEvent=()=>{// 当前操作的是撤销
if(this.data.getToolName()==='undo')return;// 绘制结束
this.data.setDragging(false);this.data.setDraggingTrim(false);// 截图容器判空
if(this.screenShotCanvas===null||this.screenShotContainer===null){return;}const updateTempGraphPositionCallback=res=>{if(res.code===1&&res.data!==null){const{getFullScreenStatus,tempGraphPosition}=res.data;this.getFullScreenStatus=getFullScreenStatus;this.tempGraphPosition=tempGraphPosition;}};const updateDrawStatusCallback=res=>{if(res.code===1&&typeof res.data==='boolean'){this.drawStatus=res.data;}};if(!this.screenShotCanvas||!this.screenShotContainer)return;mouseUpCore(this.data,{dragFlag:this.dragFlag,drawStatus:this.drawStatus,clickCutFullScreen:this.clickCutFullScreen,drawGraphPosition:this.drawGraphPosition,cutOutBoxBorderArr:this.cutOutBoxBorderArr,drawGraphPrevX:this.drawGraphPrevX,drawGraphPrevY:this.drawGraphPrevY,tempGraphPosition:this.tempGraphPosition,placement:this.placement,position:this.position,fullScreenDiffHeight:this.fullScreenDiffHeight,getFullScreenStatus:this.getFullScreenStatus,dpr:this.dpr},{screenShotCanvas:this.screenShotCanvas,screenShotContainer:this.screenShotContainer,screenShotImageController:this.screenShotImageController,toolController:this.toolController},{toolBarCallerCallback:this.toolBarCallerCallback,updateTempGraphPositionCallback,updateDrawStatusCallback});};// 裁剪框回调
// 对组件内部所依赖的数据做处理
croppingBoxCallerCallback=res=>{const{code,data}=res;if(code===1&&typeof data==='number'){this.borderOption=data;}if(code===2&&typeof data==='boolean'){this.mouseInsideCropBox=data;}if(code===3&&data===null){this.borderOption=null;}};// 工具栏展示时，对组件内部所依赖数据做处理
toolBarCallerCallback=res=>{if(res.code===1&&typeof res.data==='boolean'){this.getFullScreenStatus=res.data;}};/**
   * 显示最新的画布状态
   * src/screenshotprivate
   */showLastHistory(){if(this.screenShotCanvas!=null){// eslint-disable-line eqeqeq
const context=this.screenShotCanvas;if(this.data.getHistory().length<=0){AddHistoryData();}context.putImageData(this.data.getHistory()[this.data.getHistory().length-1].data,0,0);}}setGlobalParameter(){this.screenShotContainer=this.data.getScreenShotContainer();this.toolController=this.data.getToolController();this.textInputController=this.data.getTextInputController();this.optionController=this.data.getOptionController();this.optionIcoController=this.data.getOptionIcoController();this.cutBoxSizeContainer=this.data.getCutBoxSizeContainer();}setOptionalParameter(options){// 单击截取全屏启用状态,默认为false
if(options?.clickCutFullScreen===true){this.clickCutFullScreen=true;}// 判断调用者是否传了截图进来
if(options?.imgSrc!=null){// eslint-disable-line eqeqeq
this.imgSrc=options.imgSrc;}// 设置截图容器的位置信息
if(options?.position!=null){// eslint-disable-line eqeqeq
if(options.position?.top!=null){// eslint-disable-line eqeqeq
this.position.top=options.position.top;}if(options.position?.left!=null){// eslint-disable-line eqeqeq
this.position.left=options.position.left;}}// 截图容器dom
if(options?.screenShotDom){this.screenShotDom=options.screenShotDom;}// webrtc截图等待时间
if(options?.wrcReplyTime){this.wrcReplyTime=options.wrcReplyTime;}// 是否初始化裁剪框
if(options?.cropBoxInfo){this.cropBoxInfo=options.cropBoxInfo;}// 是否需要更改工具栏的展示位置
if(options?.toolPosition){this.placement=options.toolPosition;}// 是否需要对webrtc模式下捕获到的内容进行裁剪
if(options?.wrcImgPosition){const{x,y}=options.wrcImgPosition;// 坐标需要取负数才能正确的裁剪
this.wrcImgPosition.x=Math.abs(x)*-1;this.wrcImgPosition.y=Math.abs(y)*-1;}// 是否隐藏滚动条
if(options?.hiddenScrollBar!=null){// eslint-disable-line eqeqeq
const{state,color,fillWidth,fillHeight,fillState}=options.hiddenScrollBar;this.hiddenScrollBar={state,color:color||'#000000',fillWidth:fillWidth||0,fillHeight:fillHeight||0,fillState:fillState||false};if(state){this.data.setResetScrollbarState(true);// 设置页面宽高并隐藏滚动条
document.documentElement.classList.add('hidden-screen-shot-scroll');document.body.classList.add('hidden-screen-shot-scroll');}}// 是否启用窗口截图模式
if(options?.wrcWindowMode!=null){// eslint-disable-line eqeqeq
this.wrcWindowMode=options.wrcWindowMode;}if(options?.customRightClickEvent!=null){// eslint-disable-line eqeqeq
this.customRightClickEvent=options.customRightClickEvent;}}// 创建监听事件
createEvent(screenShotContainer,toolController,textInputController){// 创建键盘事件监听
this.keyboardEventHandle=new KeyboardEventHandle(screenShotContainer,toolController);// 给输入容器设置快捷键监听
registerContainerShortcuts(textInputController,this.screenShotCanvas,this.data,this.textInputPosition);if(this.customRightClickEvent.state){// 给截图容器添加右键事件监听
registerForRightClickEvent(screenShotContainer,this.data,this.customRightClickEvent.handleFn);}}}
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(29855);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/image/index.js + 29 modules
var es_image = __webpack_require__(73139);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@rc-component+util@1.11.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@rc-component/util/es/index.js + 12 modules
var es = __webpack_require__(23392);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/gapSize.js
var gapSize = __webpack_require__(55888);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/hooks/useOrientation.js
var useOrientation = __webpack_require__(9771);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/_util/is.js
var is = __webpack_require__(3557);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(16807);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(90126);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+cssinjs-utils@2.1.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/cssinjs-utils/es/index.js + 23 modules
var cssinjs_utils_es = __webpack_require__(14209);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/utils.js

const flexWrapValues = ['wrap', 'nowrap', 'wrap-reverse'];
const justifyContentValues = ['flex-start', 'flex-end', 'start', 'end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch', 'normal', 'left', 'right'];
const alignItemsValues = ['center', 'start', 'end', 'flex-start', 'flex-end', 'self-start', 'self-end', 'baseline', 'normal', 'stretch'];
const genClsWrap = (prefixCls, props) => {
  const wrap = props.wrap === true ? 'wrap' : props.wrap;
  return {
    [`${prefixCls}-wrap-${wrap}`]: wrap && flexWrapValues.includes(wrap)
  };
};
const genClsAlign = (prefixCls, props) => {
  const alignCls = {};
  alignItemsValues.forEach(cssKey => {
    alignCls[`${prefixCls}-align-${cssKey}`] = props.align === cssKey;
  });
  alignCls[`${prefixCls}-align-stretch`] = !props.align && !!props.vertical;
  return alignCls;
};
const genClsJustify = (prefixCls, props) => {
  const justifyCls = {};
  justifyContentValues.forEach(cssKey => {
    justifyCls[`${prefixCls}-justify-${cssKey}`] = props.justify === cssKey;
  });
  return justifyCls;
};
const createFlexClassNames = (prefixCls, props) => {
  return (0,clsx/* clsx */.$)({
    ...genClsWrap(prefixCls, props),
    ...genClsAlign(prefixCls, props),
    ...genClsJustify(prefixCls, props)
  });
};
/* harmony default export */ const utils = (createFlexClassNames);
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/style/index.js


const genFlexStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: 'flex',
      margin: 0,
      padding: 0,
      '&-vertical': {
        flexDirection: 'column'
      },
      '&-rtl': {
        direction: 'rtl'
      },
      '&:empty': {
        display: 'none'
      }
    }
  };
};
const genFlexGapStyle = token => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      '&-gap-small': {
        gap: token.flexGapSM
      },
      '&-gap-medium, &-gap-middle': {
        gap: token.flexGap
      },
      '&-gap-large': {
        gap: token.flexGapLG
      }
    }
  };
};
const genFlexWrapStyle = token => {
  const {
    componentCls
  } = token;
  const wrapStyle = {};
  flexWrapValues.forEach(value => {
    wrapStyle[`${componentCls}-wrap-${value}`] = {
      flexWrap: value
    };
  });
  return wrapStyle;
};
const genAlignItemsStyle = token => {
  const {
    componentCls
  } = token;
  const alignStyle = {};
  alignItemsValues.forEach(value => {
    alignStyle[`${componentCls}-align-${value}`] = {
      alignItems: value
    };
  });
  return alignStyle;
};
const genJustifyContentStyle = token => {
  const {
    componentCls
  } = token;
  const justifyStyle = {};
  justifyContentValues.forEach(value => {
    justifyStyle[`${componentCls}-justify-${value}`] = {
      justifyContent: value
    };
  });
  return justifyStyle;
};
const prepareComponentToken = () => ({});
/* harmony default export */ const flex_style = ((0,genStyleUtils/* genStyleHooks */.OF)('Flex', token => {
  const {
    paddingXS,
    padding,
    paddingLG
  } = token;
  const flexToken = (0,cssinjs_utils_es/* mergeToken */.oX)(token, {
    flexGapSM: paddingXS,
    flexGap: padding,
    flexGapLG: paddingLG
  });
  return [genFlexStyle(flexToken), genFlexGapStyle(flexToken), genFlexWrapStyle(flexToken), genAlignItemsStyle(flexToken), genJustifyContentStyle(flexToken)];
}, prepareComponentToken, {
  // Flex component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/46403
  resetStyle: false
}));
;// ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/flex/index.js
"use client";










const Flex = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    rootClassName,
    className,
    style,
    flex,
    gap,
    vertical,
    orientation,
    component: Component = 'div',
    children,
    ...othersProps
  } = props;
  const {
    flex: ctxFlex,
    direction: ctxDirection,
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.QO);
  const prefixCls = getPrefixCls('flex', customizePrefixCls);
  const [hashId, cssVarCls] = flex_style(prefixCls);
  const [, mergedVertical] = (0,useOrientation/* useOrientation */.M)(orientation, vertical ?? ctxFlex?.vertical);
  const mergedCls = (0,clsx/* clsx */.$)(className, rootClassName, ctxFlex?.className, prefixCls, hashId, cssVarCls, utils(prefixCls, {
    ...props,
    vertical: mergedVertical
  }), {
    [`${prefixCls}-rtl`]: ctxDirection === 'rtl',
    [`${prefixCls}-gap-${gap}`]: (0,gapSize/* isPresetSize */.X)(gap),
    [`${prefixCls}-vertical`]: mergedVertical
  });
  const mergedStyle = {
    ...ctxFlex?.style,
    ...style
  };
  if ((0,is/* isNonNullable */.R)(flex)) {
    mergedStyle.flex = flex;
  }
  if ((0,is/* isNonNullable */.R)(gap) && !(0,gapSize/* isPresetSize */.X)(gap)) {
    mergedStyle.gap = gap;
  }
  return /*#__PURE__*/react.createElement(Component, {
    ref: ref,
    className: mergedCls,
    style: mergedStyle,
    ...(0,es/* omit */.cJ)(othersProps, ['justify', 'wrap', 'align'])
  }, children);
});
if (false) // removed by dead control flow
{}
/* harmony default export */ const flex = (Flex);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/index.js + 7 modules
var es_radio = __webpack_require__(86610);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(94784);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./docs-thirdparty/screenshot/screenshot.tsx
// 自由截屏工具
const App=()=>{const[imgSrc,setImgSrc]=(0,react.useState)('https://zpcscc.top/img/logo.png');const[enableWebRtc,setEnableWebRtc]=(0,react.useState)(false);// 截屏
const onScreenshot=()=>{// eslint-disable-next-line no-new
new ScreenShot({enableWebRtc,ratio:2,completeCallback:({base64})=>setImgSrc(base64)});};const onChange=e=>{const value=e.target.value;setEnableWebRtc(value==='WebRtc');};return/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{orientation:"vertical",align:"center",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_image/* default */.A,{width:400,height:300,src:imgSrc}),/*#__PURE__*/(0,jsx_runtime.jsxs)(flex,{gap:"middle",align:"center",justify:"center",children:["\u622A\u5C4F\u6A21\u5F0F",/*#__PURE__*/(0,jsx_runtime.jsxs)(es_radio/* default */.A.Group,{onChange:onChange,defaultValue:"html-to-image",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.A.Button,{value:"WebRtc",children:"WebRtc"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.A.Button,{value:"html-to-image",children:"html-to-image"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",onClick:onScreenshot,children:"\u5F00\u59CB\u622A\u5C4F"})]});};/* harmony default export */ const screenshot = (App);

/***/ },

/***/ 75278
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mo: () => (/* reexport */ converts_toCanvas),
  $E: () => (/* reexport */ converts_toPng)
});

// UNUSED EXPORTS: toBlob, toJpeg, toPixelData, toSvg, toSvgNode

;// ./src/thirdparty/htmlToImage/utils/isApple.ts
/**
 * @name 判断是否为苹果公司的设备
 * @returns {boolean} 返回布尔值
 */const isApple=()=>{const userAgent=navigator.userAgent;// 检测是否为 macOS 设备并且使用 Safari 浏览器，排除 Chrome、Edge 和 Firefox
const isMac=/Macintosh/.test(userAgent);const isSafari=/Safari/.test(userAgent)&&!/Chrome|CriOS|Edg|Edge|Firefox/.test(userAgent);return isMac&&isSafari;};/* harmony default export */ const utils_isApple = (isApple);
;// ./src/thirdparty/htmlToImage/util.ts
const resolveUrl=(url,baseUrl)=>{// url is absolute already
if(/^[a-z]+:\/\//i.test(url)){return url;}// url is absolute already, without protocol
if(/^\/\//.test(url)){return globalThis.location.protocol+url;}// dataURI, mailto:, tel:, etc.
if(/^[a-z]+:/i.test(url)){return url;}const doc=document.implementation.createHTMLDocument();const base=doc.createElement('base');const a=doc.createElement('a');doc.head.append(base);doc.body.append(a);if(baseUrl){base.href=baseUrl;}a.href=url;return a.href;};const uuid=(()=>{// generate uuid for className of pseudo elements.
// We should not use GUIDs, otherwise pseudo elements sometimes cannot be captured.
let counter=0;// ref: http://stackoverflow.com/a/6248722/2519373
const random=()=>`0000${Math.trunc(Math.random()*36**4).toString(36)}`.slice(-4);return()=>{counter+=1;return`u${random()}${counter}`;};})();const delay=ms=>{return args=>new Promise(resolve=>{setTimeout(()=>resolve(args),ms);});};const toArray=arrayLike=>{const arr=[];for(let i=0,l=arrayLike.length;i<l;i++){arr.push(arrayLike[i]);}return arr;};const px=(node,styleProperty)=>{const win=node.ownerDocument.defaultView||globalThis;const val=win.getComputedStyle(node).getPropertyValue(styleProperty);return val?Number.parseFloat(val.replace('px','')):0;};const getNodeWidth=node=>{const leftBorder=px(node,'border-left-width');const rightBorder=px(node,'border-right-width');return node.clientWidth+leftBorder+rightBorder;};const getNodeHeight=node=>{const topBorder=px(node,'border-top-width');const bottomBorder=px(node,'border-bottom-width');return node.clientHeight+topBorder+bottomBorder;};const getImageSize=(targetNode,options={})=>{const width=options.width||getNodeWidth(targetNode);const height=options.height||getNodeHeight(targetNode);return{width,height};};const getPixelRatio=()=>{let ratio=1;let FINAL_PROCESS;try{FINAL_PROCESS=process;// eslint-disable-line no-undef
}catch{// process is not available in browser
}const val=FINAL_PROCESS?.env?.devicePixelRatio;if(val){ratio=Number.parseInt(val,10);if(Number.isNaN(ratio)){ratio=1;}}return ratio||globalThis.devicePixelRatio||1;};const canvasToBlob=(canvas,options={})=>{if(canvas.toBlob){return new Promise(resolve=>{canvas.toBlob(resolve,options.type??'image/png',options.quality??1);});}return new Promise(resolve=>{const binaryString=globalThis.atob(canvas.toDataURL(options.type??undefined,options.quality??undefined).split(',')[1]);const len=binaryString.length;const binaryArray=new Uint8Array(len);for(let i=0;i<len;i+=1){binaryArray[i]=binaryString.codePointAt(i)??0;}resolve(new Blob([binaryArray],{type:options.type??'image/png'}));});};const createImage=url=>{return new Promise((resolve,reject)=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');const img=new Image();img.addEventListener('load',()=>{svg.remove();if(globalThis&&globalThis.requestAnimationFrame){globalThis.requestAnimationFrame(()=>{resolve(img);});}else{resolve(img);}});img.addEventListener('error',error=>{svg.remove();reject(error);});svg.append(img);img.crossOrigin='anonymous';img.decoding='sync';img.loading='eager';img.src=url;document.body.append(svg);});};const svgToDataURL=async svg=>{const svgUrl=await Promise.resolve().then(()=>new XMLSerializer().serializeToString(svg)).then(svgImgToWebP).then(encodeURIComponent).then(html=>`data:image/svg+xml;charset=utf-8,${html}`);return svgUrl;};const nodeToSvg=(node,width,height)=>{const xmlns='http://www.w3.org/2000/svg';const svg=document.createElementNS(xmlns,'svg');const foreignObject=document.createElementNS(xmlns,'foreignObject');svg.setAttribute('width',`${width}`);svg.setAttribute('height',`${height}`);svg.setAttribute('viewBox',`0 0 ${width} ${height}`);foreignObject.setAttribute('width','100%');foreignObject.setAttribute('height','100%');foreignObject.setAttribute('x','0');foreignObject.setAttribute('y','0');foreignObject.setAttribute('externalResourcesRequired','true');svg.append(foreignObject);foreignObject.append(node);return svg;};const shouldEmbed=url=>{const URL_REGEX=/url\((["']?)([^"']+?)\1\)/g;return url.search(URL_REGEX)!==-1;};const svgImgToWebP=svgStr=>{return new Promise(resolve=>{if(utils_isApple()){let svgData=svgStr??'';const base64Regex=/data:image\/(png|jpeg);base64,([\d+/=A-Za-z]+)/g;let match;const promises=[];while((match=base64Regex.exec(svgData))!==null){if(match){const mimeType=match[1];const base64Data=match[2];promises.push(convertToWebP(base64Data,mimeType,match).then(({webpDataUrl,matchArr})=>{svgData=svgData.replace(matchArr?.[0],webpDataUrl);}));}}Promise.all(promises).then(()=>{resolve(svgData);});}else{resolve(svgStr);}});};const convertToWebP=(base64Data,mimeType,matchArr)=>{return new Promise((resolve,reject)=>{const img=new Image();img.src=`data:image/${mimeType};base64,${base64Data}`;img.addEventListener('load',()=>{const canvas=document.createElement('canvas');canvas.width=img.width;canvas.height=img.height;const ctx=canvas.getContext('2d');ctx?.drawImage(img,0,0);canvas.toBlob(blob=>{if(blob){const reader=new FileReader();reader.onloadend=function(){resolve({webpDataUrl:reader.result,matchArr});};reader.addEventListener('error',reject);reader.readAsDataURL(blob);}},'image/webp',0.75// 这里的质量参数可以调整
);});img.addEventListener('error',reject);});};
;// ./src/thirdparty/htmlToImage/utils/createCanvas.ts
// 检查画布尺寸
const checkCanvasDimensions=(canvas,canvasDimensionLimit=16384)=>{if(canvas.width>canvasDimensionLimit||canvas.height>canvasDimensionLimit){if(canvas.width>canvasDimensionLimit&&canvas.height>canvasDimensionLimit){if(canvas.width>canvas.height){canvas.height*=canvasDimensionLimit/canvas.width;canvas.width=canvasDimensionLimit;}else{canvas.width*=canvasDimensionLimit/canvas.height;canvas.height=canvasDimensionLimit;}}else if(canvas.width>canvasDimensionLimit){canvas.height*=canvasDimensionLimit/canvas.width;canvas.width=canvasDimensionLimit;}else{canvas.width*=canvasDimensionLimit/canvas.height;canvas.height=canvasDimensionLimit;}}};// 创建画布
const createCanvas=(ownerDocument,options)=>{const canvas=ownerDocument.createElement('canvas');const context2d=canvas.getContext('2d');const ratio=options.pixelRatio||getPixelRatio();const canvasWidth=options.canvasWidth||options.width||100;const canvasHeight=options.canvasHeight||options.height||100;canvas.width=canvasWidth*ratio;canvas.height=canvasHeight*ratio;if(!options.skipAutoScale){checkCanvasDimensions(canvas,options.maximumCanvasSize);}canvas.style.width=`${canvasWidth}`;canvas.style.height=`${canvasHeight}`;if(options.backgroundColor){context2d.fillStyle=options.backgroundColor;context2d.fillRect(0,0,canvas.width,canvas.height);}return{canvas,context2d};};/* harmony default export */ const utils_createCanvas = (createCanvas);
;// ./src/thirdparty/htmlToImage/utils/checkElement.ts
const isElementNode=node=>node.nodeType===1;// Node.ELEMENT_NODE
const isVideoElement=node=>node.tagName==='VIDEO';const isSVGElementNode=node=>typeof node.className==='object';const isImageElement=node=>node.tagName==='IMG';const isHTMLElementNode=node=>isElementNode(node)&&node.style!==undefined&&!isSVGElementNode(node);const isSVGImageElementNode=node=>node.tagName==='image';const isInstanceOfElement=(node,instance)=>{if(node instanceof instance)return true;const nodePrototype=Object.getPrototypeOf(node);if(nodePrototype===null)return false;return nodePrototype.constructor.name&&instance.name&&nodePrototype.constructor.name===instance.name||isInstanceOfElement(nodePrototype,instance);};
;// ./src/thirdparty/htmlToImage/utils/getDocument.ts
const getDocument=target=>{return(target&&isElementNode(target)?target?.ownerDocument:target)??globalThis.document;};/* harmony default export */ const utils_getDocument = (getDocument);
;// ./src/thirdparty/htmlToImage/utils/createImage.ts
const createImage_createImage=(url,ownerDocument)=>{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');const img=utils_getDocument(ownerDocument).createElement('img');img.addEventListener('load',()=>svg.remove());img.addEventListener('error',()=>svg.remove());svg.append(img);img.decoding='sync';img.loading='eager';img.src=url;document.body.append(svg);return img;};/* harmony default export */ const utils_createImage = (createImage_createImage);
;// ./src/thirdparty/htmlToImage/apply-style.ts
const applyStyle=(node,options)=>{const{style}=node;if(options.backgroundColor){style.backgroundColor=options.backgroundColor;}if(options.width){style.width=`${options.width}px`;}if(options.height){style.height=`${options.height}px`;}const manual=options.style;if(manual){Object.keys(manual).forEach(key=>{style[key]=manual[key];});}return node;};
;// ./src/thirdparty/htmlToImage/clone-pseudos.ts
const formatCSSText=style=>{const content=style.getPropertyValue('content');return`${style.cssText} content: '${content.replaceAll(/'|"/g,'')}';`;};const formatCSSProperties=style=>{return toArray(style).map(name=>{const value=style.getPropertyValue(name);const priority=style.getPropertyPriority(name);return`${name}: ${value}${priority?' !important':''};`;}).join(' ');};const getPseudoElementStyle=(className,pseudo,style)=>{const selector=`.${className}:${pseudo}`;const cssText=style.cssText?formatCSSText(style):formatCSSProperties(style);return document.createTextNode(`${selector}{${cssText}}`);};const clonePseudoElement=(nativeNode,clonedNode,pseudo)=>{const style=globalThis.getComputedStyle(nativeNode,pseudo);const content=style.getPropertyValue('content');if(content===''||content==='none'){return;}const className=uuid();try{clonedNode.className=`${clonedNode.className} ${className}`;}catch{return;}const styleElement=document.createElement('style');styleElement.append(getPseudoElementStyle(className,pseudo,style));clonedNode.append(styleElement);};const clonePseudoElements=(nativeNode,clonedNode)=>{clonePseudoElement(nativeNode,clonedNode,':before');clonePseudoElement(nativeNode,clonedNode,':after');};
;// ./src/thirdparty/htmlToImage/dataurl.ts
const getContentFromDataUrl=dataURL=>{return dataURL.split(/,/)[1];};const isDataUrl=url=>{return url.search(/^(data:)/)!==-1;};const makeDataUrl=(content,mimeType)=>{return`data:${mimeType};base64,${content}`;};const fetchAsDataURL=async(url,init,process)=>{const res=await fetch(url,init);if(res.status===404){throw new Error(`Resource "${res.url}" not found`);}const blob=await res.blob();return new Promise((resolve,reject)=>{const reader=new FileReader();reader.addEventListener('error',reject);reader.onloadend=()=>{try{resolve(process({res,result:reader.result}));}catch(error){reject(error);}};reader.readAsDataURL(blob);});};const cache={};const getCacheKey=(url,contentType,includeQueryParams)=>{let key=url.replace(/\?.*/,'');if(includeQueryParams){key=url;}// font resource
if(/ttf|otf|eot|woff2?/i.test(key)){key=key.replace(/.*\//,'');}return contentType?`[${contentType}]${key}`:key;};const resourceToDataURL=async(resourceUrl,contentType,options)=>{const cacheKey=getCacheKey(resourceUrl,contentType,options.includeQueryParams);if(cache[cacheKey]!==null){return cache[cacheKey];}// ref: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
if(options.cacheBust){// eslint-disable-next-line no-param-reassign
resourceUrl+=(/\?/.test(resourceUrl)?'&':'?')+Date.now();}let dataURL;try{const content=await fetchAsDataURL(resourceUrl,options.fetchRequestInit,({res,result})=>{if(!contentType){// eslint-disable-next-line no-param-reassign
contentType=res.headers.get('Content-Type')||'';}return getContentFromDataUrl(result);});dataURL=makeDataUrl(content,contentType);}catch(error){dataURL=options.imagePlaceholder||'';let msg=`Failed to fetch resource: ${resourceUrl}`;if(error){msg=typeof error==='string'?error:error.message;}if(msg){console.warn(msg);}}// eslint-disable-next-line require-atomic-updates
cache[cacheKey]=dataURL;return dataURL;};
;// ./src/thirdparty/htmlToImage/mimes.ts
const WOFF='application/font-woff';const JPEG='image/jpeg';const mimes={woff:WOFF,woff2:WOFF,ttf:'application/font-truetype',eot:'application/vnd.ms-fontobject',png:'image/png',jpg:JPEG,jpeg:JPEG,gif:'image/gif',tiff:'image/tiff',svg:'image/svg+xml',webp:'image/webp'};const getExtension=url=>{const match=/\.([^./]*?)$/g.exec(url);return match?match[1]:'';};const getMimeType=url=>{const extension=getExtension(url).toLowerCase();return mimes[extension]||'';};
;// ./src/thirdparty/htmlToImage/clone-node.ts
const cloneCanvasElement=async canvas=>{const dataURL=canvas.toDataURL();if(dataURL==='data:,'){return canvas.cloneNode(false);}return createImage(dataURL);};const cloneVideoElement=async(video,options)=>{if(video.currentSrc){const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');canvas.width=video.clientWidth;canvas.height=video.clientHeight;ctx?.drawImage(video,0,0,canvas.width,canvas.height);const dataURL=canvas.toDataURL();return createImage(dataURL);}const poster=video.poster;const contentType=getMimeType(poster);const dataURL=await resourceToDataURL(poster,contentType,options);return createImage(dataURL);};const cloneIFrameElement=async iframe=>{try{if(iframe?.contentDocument?.body){return await cloneNode(iframe.contentDocument.body,{},true);}}catch(error){console.log('error:',error);}return iframe.cloneNode(false);};const cloneSingleNode=async(node,options)=>{if(isInstanceOfElement(node,HTMLCanvasElement)){return cloneCanvasElement(node);}if(isInstanceOfElement(node,HTMLVideoElement)){return cloneVideoElement(node,options);}if(isInstanceOfElement(node,HTMLIFrameElement)){return cloneIFrameElement(node);}return node.cloneNode(false);};const isSlotElement=node=>node.tagName!==null&&node.tagName.toUpperCase()==='SLOT';const cloneChildren=async(nativeNode,clonedNode,options)=>{let children=[];if(isSlotElement(nativeNode)&&nativeNode.assignedNodes){children=toArray(nativeNode.assignedNodes());}else if(isInstanceOfElement(nativeNode,HTMLIFrameElement)&&nativeNode.contentDocument?.body){children=toArray(nativeNode.contentDocument.body.childNodes);}else{children=toArray((nativeNode.shadowRoot??nativeNode).childNodes);}if(children.length===0||isInstanceOfElement(nativeNode,HTMLVideoElement)){return clonedNode;}await children.reduce((deferred,child)=>deferred.then(()=>cloneNode(child,options)).then(clonedChild=>{if(clonedChild){clonedNode.append(clonedChild);}}),Promise.resolve());return clonedNode;};const cloneCSSStyle=(nativeNode,clonedNode)=>{const targetStyle=clonedNode.style;if(!targetStyle){return;}const sourceStyle=globalThis.getComputedStyle(nativeNode);if(sourceStyle.cssText){targetStyle.cssText=sourceStyle.cssText;targetStyle.transformOrigin=sourceStyle.transformOrigin;}else{toArray(sourceStyle).forEach(name=>{let value=sourceStyle.getPropertyValue(name);if(name==='font-size'&&value.endsWith('px')){const reducedFont=Math.floor(Number.parseFloat(value.slice(0,Math.max(0,value.length-2))))-0.1;value=`${reducedFont}px`;}if(isInstanceOfElement(nativeNode,HTMLIFrameElement)&&name==='display'&&value==='inline'){value='block';}if(name==='d'&&clonedNode.getAttribute('d')){value=`path(${clonedNode.getAttribute('d')})`;}targetStyle.setProperty(name,value,sourceStyle.getPropertyPriority(name));});}};const cloneInputValue=(nativeNode,clonedNode)=>{if(isInstanceOfElement(nativeNode,HTMLTextAreaElement)){clonedNode.innerHTML=nativeNode.value;}if(isInstanceOfElement(nativeNode,HTMLInputElement)){clonedNode.setAttribute('value',nativeNode.value);}};const cloneSelectValue=(nativeNode,clonedNode)=>{if(isInstanceOfElement(nativeNode,HTMLSelectElement)){const clonedSelect=clonedNode;const selectedOption=[...clonedSelect.children].find(child=>nativeNode.value===child.getAttribute('value'));if(selectedOption){selectedOption.setAttribute('selected','');}}};const cloneScrollPosition=(nativeNode,clonedNode)=>{// If element is not scrolled, we don't need to move the children.
if(nativeNode.scrollTop===0&&nativeNode.scrollLeft===0){return;}for(let i=0;i<clonedNode.children.length;i+=1){const child=clonedNode.children[i];if(!('style'in child)){return;}const element=child;// For each of the children, get the current transform and translate it with
// the native node's scroll position.
const{transform}=element.style;const matrix=new DOMMatrix(transform);const{a,b,c,d}=matrix;// reset rotation/skew so it wont change the translate direction.
matrix.a=1;matrix.b=0;matrix.c=0;matrix.d=1;matrix.translateSelf(-nativeNode.scrollLeft,-nativeNode.scrollTop);// restore rotation and skew
matrix.a=a;matrix.b=b;matrix.c=c;matrix.d=d;element.style.transform=matrix.toString();}};const decorate=(nativeNode,clonedNode)=>{if(isInstanceOfElement(clonedNode,Element)){cloneCSSStyle(nativeNode,clonedNode);clonePseudoElements(nativeNode,clonedNode);cloneInputValue(nativeNode,clonedNode);cloneSelectValue(nativeNode,clonedNode);cloneScrollPosition(nativeNode,clonedNode);}return clonedNode;};const ensureSVGSymbols=async(clone,options)=>{const uses=clone.querySelectorAll?clone.querySelectorAll('use'):[];if(uses.length===0){return clone;}const processedDefs={};for(const use of uses){const id=use.getAttribute('xlink:href');if(id){const exist=clone.querySelector(id);const definition=document.querySelector(id);if(!exist&&definition&&!processedDefs[id]){processedDefs[id]=await cloneNode(definition,options,true);}}}const nodes=Object.values(processedDefs);if(nodes.length>0){const ns='http://www.w3.org/1999/xhtml';const svg=document.createElementNS(ns,'svg');svg.setAttribute('xmlns',ns);svg.style.position='absolute';svg.style.width='0';svg.style.height='0';svg.style.overflow='hidden';svg.style.display='none';const defs=document.createElementNS(ns,'defs');svg.append(defs);for(const node of nodes){defs.append(node);}clone.append(svg);}return clone;};const cloneNode=async(node,options,isRoot)=>{if(!isRoot&&options.filter&&!options.filter(node)||!node){return null;}return Promise.resolve(node).then(clonedNode=>cloneSingleNode(clonedNode,options)).then(clonedNode=>cloneChildren(node,clonedNode,options)).then(clonedNode=>decorate(node,clonedNode)).then(clonedNode=>ensureSVGSymbols(clonedNode,options));};
;// ./src/thirdparty/htmlToImage/embed-resources.ts
const URL_REGEX=/url\((["']?)([^"']+?)\1\)/g;const URL_WITH_FORMAT_REGEX=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g;const FONT_SRC_REGEX=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;const toRegex=url=>{const escaped=url.replaceAll(/([$()*+./?[\\\]^{|}])/g,String.raw`\$1`);return new RegExp(`(url\\(['"]?)(${escaped})(['"]?\\))`,'g');};const parseURLs=cssText=>{const urls=[];cssText.replaceAll(URL_REGEX,(raw,quotation,url)=>{urls.push(url);return raw;});return urls.filter(url=>!isDataUrl(url));};const embed_resources_embed=async(cssText,resourceURL,baseURL,options,getContentFromUrl)=>{try{const resolvedURL=baseURL?resolveUrl(resourceURL,baseURL):resourceURL;const contentType=getMimeType(resourceURL);let dataURL;if(getContentFromUrl){const content=await getContentFromUrl(resolvedURL);dataURL=makeDataUrl(content,contentType);}else{dataURL=await resourceToDataURL(resolvedURL,contentType,options);}return cssText.replace(toRegex(resourceURL),`$1${dataURL}$3`);}catch(error){console.log('error:',error);}return cssText;};const filterPreferredFontFormat=(str,{preferredFontFormat})=>{return preferredFontFormat?str.replaceAll(FONT_SRC_REGEX,match=>{while(true){const[src,,format]=URL_WITH_FORMAT_REGEX.exec(match)||[];if(!format){return'';}if(format===preferredFontFormat){return`src: ${src};`;}}}):str;};const embedResources=async(cssText,baseUrl,options)=>{if(!shouldEmbed(cssText)){return cssText;}const filteredCSSText=filterPreferredFontFormat(cssText,options);const urls=parseURLs(filteredCSSText);return urls.reduce((deferred,url)=>deferred.then(css=>embed_resources_embed(css,url,baseUrl,options)),Promise.resolve(filteredCSSText));};
;// ./src/thirdparty/htmlToImage/utils/addImageCount.ts
const addImageCount=()=>{if(utils_isApple()){const g=globalThis;g.drawImageCount=(g.drawImageCount||0)+1;}};/* harmony default export */ const utils_addImageCount = (addImageCount);
;// ./src/thirdparty/htmlToImage/embed-images.ts
const embedProp=async(propName,node,options)=>{const propValue=node.style?.getPropertyValue(propName);if(propValue){if(shouldEmbed(propValue)){utils_addImageCount();}const cssString=await embedResources(propValue,null,options);node.style.setProperty(propName,cssString,node.style.getPropertyPriority(propName));return true;}return false;};const embedBackground=async(clonedNode,options)=>{if(!(await embedProp('background',clonedNode,options))){await embedProp('background-image',clonedNode,options);}if(!(await embedProp('mask',clonedNode,options))){await embedProp('mask-image',clonedNode,options);}};const embedImageNode=async(clonedNode,options)=>{const isImageElement=isInstanceOfElement(clonedNode,HTMLImageElement);if(!(isImageElement&&!isDataUrl(clonedNode.src))&&!(isInstanceOfElement(clonedNode,SVGImageElement)&&!isDataUrl(clonedNode.href.baseVal))){return;}const url=isImageElement?clonedNode.src:clonedNode.href.baseVal;const dataURL=await resourceToDataURL(url,getMimeType(url),options);await new Promise((resolve,reject)=>{clonedNode.addEventListener('load',resolve);clonedNode.addEventListener('error',reject);const image=clonedNode;if(image.decode){image.decode=resolve;}if(image.loading==='lazy'){image.loading='eager';}if(isImageElement){clonedNode.srcset='';clonedNode.src=dataURL;}else{clonedNode.href.baseVal=dataURL;}});};const embedChildren=async(clonedNode,options)=>{const children=toArray(clonedNode.childNodes);const deferreds=children.map(child=>embedImages(child,options));await Promise.all(deferreds).then(()=>clonedNode);};const embedImages=async(clonedNode,options)=>{if(isInstanceOfElement(clonedNode,Element)){await embedBackground(clonedNode,options);await embedImageNode(clonedNode,options);await embedChildren(clonedNode,options);}if(isHTMLElementNode(clonedNode)){const properties=['background-image','border-image-source','-webkit-border-image','-webkit-mask-image','list-style-image'];// @ts-expect-error
properties.forEach(property=>{const value=clonedNode.style.getPropertyValue(property);if(!value||value==='none'){return null;}utils_addImageCount();});}if(isElementNode(clonedNode)&&isImageElement(clonedNode)){utils_addImageCount();}};
;// ./src/thirdparty/htmlToImage/embed-webfonts.ts
const cssFetchCache={};const fetchCSS=async url=>{let cache=cssFetchCache[url];if(cache!==null){return cache;}const res=await fetch(url);const cssText=await res.text();cache={url,cssText};// eslint-disable-next-line require-atomic-updates
cssFetchCache[url]=cache;return cache;};const embedFonts=(data,options)=>{let cssText=data.cssText;const regexUrl=/url\(["']?([^"')]+)["']?\)/g;const fontLocs=cssText.match(/url\([^)]+\)/g)||[];const loadFonts=fontLocs.map(async loc=>{let url=loc.replaceAll(regexUrl,'$1');if(!url.startsWith('https://')){url=new URL(url,data.url).href;}return fetchAsDataURL(url,options.fetchRequestInit,({result})=>{cssText=cssText.replace(loc,`url(${result})`);return[loc,result];});});return Promise.all(loadFonts).then(()=>cssText);};const parseCSS=source=>{if(!source){return[];}const result=[];const commentsRegex=/(\/\*[\S\s]*?\*\/)/gi;// strip out comments
let cssText=source.replaceAll(commentsRegex,'');const keyframesRegex=new RegExp(String.raw`((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})`,'gi');while(true){const matches=keyframesRegex.exec(cssText);if(matches===null){break;}result.push(matches[0]);}cssText=cssText.replaceAll(keyframesRegex,'');const importRegex=/@import[\S\s]*?url\([^)]*\)[\S\s]*?;/gi;// to match css & media queries together
const combinedCSSRegex=String.raw`((\s*?(?:\/\*[\s\S]*?\*\/)?\s*?@media[\s\S]`+String.raw`*?){([\s\S]*?)}\s*?})|(([\s\S]*?){([\s\S]*?)})`;// unified regex
const unifiedRegex=new RegExp(combinedCSSRegex,'gi');while(true){let matches=importRegex.exec(cssText);if(matches===null){matches=unifiedRegex.exec(cssText);if(matches===null){break;}else{importRegex.lastIndex=unifiedRegex.lastIndex;}}else{unifiedRegex.lastIndex=importRegex.lastIndex;}result.push(matches[0]);}return result;};const getCSSRules=async(styleSheets,options)=>{const ret=[];const deferreds=[];// First loop inlines imports
styleSheets.forEach(sheet=>{if('cssRules'in sheet){try{toArray(sheet.cssRules||[]).forEach((item,index)=>{if(item.type===CSSRule.IMPORT_RULE){let importIndex=index+1;const url=item.href;const deferred=fetchCSS(url).then(metadata=>embedFonts(metadata,options)).then(cssText=>parseCSS(cssText).forEach(rule=>{try{sheet.insertRule(rule,rule.startsWith('@import')?importIndex+=1:sheet.cssRules.length);}catch(error){console.error('Error inserting rule from remote css',{rule,error});}})).catch(error=>{console.error('Error loading remote css',error.toString());});deferreds.push(deferred);}});}catch(error){const inline=styleSheets.find(a=>a.href===null)||document.styleSheets[0];if(sheet.href!==null){deferreds.push(fetchCSS(sheet.href).then(metadata=>embedFonts(metadata,options)).then(cssText=>parseCSS(cssText).forEach(rule=>{inline.insertRule(rule,sheet.cssRules.length);})).catch(error_=>{console.error('Error loading remote stylesheet',error_);}));}console.error('Error inlining remote css file',error);}}});return Promise.all(deferreds).then(()=>{// Second loop parses rules
styleSheets.forEach(sheet=>{if('cssRules'in sheet){try{toArray(sheet.cssRules||[]).forEach(item=>{ret.push(item);});}catch(error){console.error(`Error while reading CSS rules from ${sheet.href}`,error);}}});return ret;});};const getWebFontRules=cssRules=>{return cssRules.filter(rule=>rule.type===CSSRule.FONT_FACE_RULE).filter(rule=>shouldEmbed(rule.style.getPropertyValue('src')));};const parseWebFontRules=async(node,options)=>{if(node.ownerDocument===null){throw new Error('Provided element is not within a Document');}const styleSheets=toArray(node.ownerDocument.styleSheets);const cssRules=await getCSSRules(styleSheets,options);return getWebFontRules(cssRules);};const getWebFontCSS=async(node,options)=>{const rules=await parseWebFontRules(node,options);const cssTexts=await Promise.all(rules.map(rule=>{const baseUrl=rule.parentStyleSheet?rule.parentStyleSheet.href:null;return embedResources(rule.cssText,baseUrl,options);}));return cssTexts.join('\n');};const embedWebFonts=async(clonedNode,options)=>{const cssText=options.fontEmbedCSS===null?options.skipFonts?null:await getWebFontCSS(clonedNode,options):options.fontEmbedCSS;if(cssText){const styleNode=document.createElement('style');const sytleContent=document.createTextNode(cssText);styleNode.append(sytleContent);if(clonedNode.firstChild){clonedNode.insertBefore(styleNode,clonedNode.firstChild);}else{clonedNode.append(styleNode);}}};
;// ./src/thirdparty/htmlToImage/converts/toSvg.ts
/* unused harmony import specifier */ var toSvg_svgToDataURL;
const toSvgNode=async(node,options={})=>{const{width,height}=getImageSize(node,options);const clonedNode=await cloneNode(node,options,true);await embedWebFonts(clonedNode,options);await embedImages(clonedNode,options);applyStyle(clonedNode,options);return nodeToSvg(clonedNode,width,height);};const toSvg=async(node,options={})=>{const svg=await toSvgNode(node,options);const dataurl=await toSvg_svgToDataURL(svg);return dataurl;};/* harmony default export */ const converts_toSvg = ((/* unused pure expression or super */ null && (toSvg)));
;// ./src/thirdparty/htmlToImage/utils/loadMedia.ts
const loadMedia_getDocument=target=>{return(target&&isElementNode(target)?target?.ownerDocument:target)??globalThis.document;};const loadMedia=(media,options)=>{// @ts-expect-error
return new Promise(resolve=>{const{timeout,ownerDocument,onError:userOnError}=options??{};const node=typeof media==='string'?utils_createImage(media,loadMedia_getDocument(ownerDocument)):media;let timer=null;let removeEventListeners=null;const onResolve=()=>{resolve(node);timer&&clearTimeout(timer);removeEventListeners?.();};if(timeout){timer=setTimeout(onResolve,timeout);}if(isVideoElement(node)){const currentSrc=node.currentSrc||node.src;if(!currentSrc){if(node.poster){// eslint-disable-next-line no-promise-executor-return
return loadMedia(node.poster,options).then(resolve);}onResolve();return;}if(node.readyState>=2){onResolve();return;}const onLoadeddata=onResolve;const onError=error=>{userOnError?.(error);onResolve();};removeEventListeners=()=>{node.removeEventListener('loadeddata',onLoadeddata);node.removeEventListener('error',onError);};node.addEventListener('loadeddata',onLoadeddata,{once:true});node.addEventListener('error',onError,{once:true});}else{const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.append(node);document.body.append(svg);const currentSrc=isSVGImageElementNode(node)?node.href.baseVal:node.currentSrc||node.src;if(!currentSrc){onResolve();return;}const onLoad=async()=>{svg.remove();if(isImageElement(node)&&'decode'in node){try{await node.decode();if(utils_isApple()){// 获取图像并确保 SVG 内部的所有图像已加载
const svgDoc=new DOMParser().parseFromString(decodeURIComponent(node.src.split(',')[1]),'image/svg+xml');const webpImages=[...svgDoc.querySelectorAll('img, div')].map(element=>{// 检查 <image> 标签
if(element.tagName.toLowerCase()==='img'){return element.getAttribute('src');}// 检查 <div> 或其他带背景图片的元素
if(element.tagName.toLowerCase()==='div'&&element.style.backgroundImage){const backgroundImage=element.style.backgroundImage;// 提取 background-image 的 URL，例如 url("data:image/webp;base64,...")
const match=backgroundImage.match(/url\(["']?(data:image\/webp;base64,[^"']+)["']?\)/);return match?match[1]:null;}return null;}).filter(src=>src&&/^data:image\/(webp|png);base64,/.test(src));const loadImagesPromises=[...webpImages].map(url=>{return new Promise((resolve,reject)=>{const imgElement=new Image();imgElement.src=url||'';imgElement.addEventListener('load',resolve);imgElement.addEventListener('error',reject);});});// 等待所有图像加载完成
await Promise.all(loadImagesPromises);}}catch(error){console.log('error:',error);}}if(globalThis&&globalThis.requestAnimationFrame){globalThis.requestAnimationFrame(()=>{onResolve();});}else{onResolve();}};const onError=error=>{console.log('error:',error);svg.remove();onResolve();};if(isImageElement(node)&&node.complete){// eslint-disable-next-line no-promise-executor-return
return onLoad();}removeEventListeners=()=>{node.removeEventListener('load',onLoad);node.removeEventListener('error',onError);};node.addEventListener('load',onLoad,{once:true});node.addEventListener('error',onError,{once:true});}});};/* harmony default export */ const utils_loadMedia = (loadMedia);
;// ./src/thirdparty/htmlToImage/converts/toCanvas.ts
const toCanvas=async(node,options={})=>{const{timeout=30000,drawImageInterval=100}=options;const{width,height}=getImageSize(node,options);const svg=await toSvgNode(node,options);const svgDataUrl=await svgToDataURL(svg);const image=utils_createImage(svgDataUrl,svg.ownerDocument);const loaded=await utils_loadMedia(image,{timeout});const{canvas,context2d}=utils_createCanvas(image.ownerDocument,{...options,width,height});const drawImage=()=>{try{context2d?.drawImage(loaded,0,0,canvas.width,canvas.height);}catch(error){console.log('error:',error);}};drawImage();const g=globalThis;for(let i=0;i<(g.drawImageCount??0);i++){await new Promise(resolve=>{setTimeout(()=>{drawImage();resolve();},i+drawImageInterval);});}g.drawImageCount=0;return canvas;};/* harmony default export */ const converts_toCanvas = (toCanvas);
;// ./src/thirdparty/htmlToImage/converts/toBlob.ts
/* unused harmony import specifier */ var toBlob_canvasToBlob;
/* unused harmony import specifier */ var toBlob_toCanvas;
const toBlob=async(node,options={})=>{const canvas=await toBlob_toCanvas(node,options);const blob=await toBlob_canvasToBlob(canvas);return blob;};/* harmony default export */ const converts_toBlob = ((/* unused pure expression or super */ null && (toBlob)));
;// ./src/thirdparty/htmlToImage/converts/toJpeg.ts
/* unused harmony import specifier */ var toJpeg_toCanvas;
const toJpeg=async(node,options={})=>{const canvas=await toJpeg_toCanvas(node,options);return canvas.toDataURL('image/jpeg',options.quality||1);};/* harmony default export */ const converts_toJpeg = ((/* unused pure expression or super */ null && (toJpeg)));
;// ./src/thirdparty/htmlToImage/converts/toPixelData.ts
/* unused harmony import specifier */ var toPixelData_getImageSize;
/* unused harmony import specifier */ var toPixelData_toCanvas;
const toPixelData=async(node,options={})=>{const{width,height}=toPixelData_getImageSize(node,options);const canvas=await toPixelData_toCanvas(node,options);const ctx=canvas.getContext('2d');return ctx.getImageData(0,0,width,height).data;};/* harmony default export */ const converts_toPixelData = ((/* unused pure expression or super */ null && (toPixelData)));
;// ./src/thirdparty/htmlToImage/converts/toPng.ts
const toPng=async(node,options={})=>{const canvas=await converts_toCanvas(node,options);return canvas.toDataURL();};/* harmony default export */ const converts_toPng = (toPng);
;// ./src/thirdparty/htmlToImage/index.ts


/***/ }

}]);