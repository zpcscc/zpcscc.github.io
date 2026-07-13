(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[1102,3689,7687],{

/***/ 87957
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generator_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29802);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
const EditorWrapper=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function EditorWrapper({style,className,...rest},ref){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style",{children:`.editor-wrapper { height: 70vh; border: 1px solid #f5f5f5; }`}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref:ref,className:`editor-wrapper ${className||''}`,style:style,...rest})]});});// 编辑器
const EditorPanel=()=>{const onChange=pageData=>{console.log(pageData);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(EditorWrapper,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_generator_Editor__WEBPACK_IMPORTED_MODULE_0__/* .Editor */ .K,{onChange:onChange})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditorPanel);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "EditorWrapper", 0, /* binding */ EditorWrapper,
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 83773
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53368);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 警告提示
 * @link 其他参数详见 https://ant.design/components/alert-cn/
 */const Alert=props=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{...props});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 40101
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94784);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 按钮
 * @link 其他参数详见 https://ant.design/components/button-cn/
 */const Button=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 20784
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Cascade)
});

// EXTERNAL MODULE: ./src/components/Select/index.tsx
var Select = __webpack_require__(79369);
// EXTERNAL MODULE: ./src/components/TextArea/index.tsx
var TextArea = __webpack_require__(26875);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
;// ./src/components/Cascade/utils/arr2Tree.ts
/**
 * @name  二维数组转为树形结构
 * @param arr 二维数组
 * @returns
 */const arr2Tree=arr=>{if(!Array.isArray(arr))return[];const loopTree=(curr,pre)=>{if(!Array.isArray(curr)||curr.length===0){return pre;}const[first,...other]=curr;// 在树状数据中，找当前对应的数据
const fIndex=pre.findIndex(item=>typeof item==='object'&&item.value===first);if(fIndex===-1){// 没有找到对应的数据，则新添加数据
const childObj={children:other.length>0?loopTree(other,[]):[]};pre.push({value:first,...childObj});}else{// 找到对应的数据，判断是否需要继续递归
const{children=[],...rest}=pre[fIndex];// 若还有其他数据，则继续往下递归
if(other.length>0){pre[fIndex]={...rest,children:loopTree(other,children)};}}return pre;};return arr.reduce((pre,curr)=>{return loopTree(curr,pre);},[]);};/* harmony default export */ const utils_arr2Tree = (arr2Tree);
;// ./src/components/Cascade/utils/initValueArr.ts
/**
 * @name 初始化value数组，确保长度正确，方便后续更改数据；
 * @param value 用户传入的数据
 * @param level 级联的层级
 * @returns
 */const initValueArr=(value,level)=>{let restArr=[];if(level>=value.length){restArr=Array(level-value.length);}return[...value,...restArr];};/* harmony default export */ const utils_initValueArr = (initValueArr);
// EXTERNAL MODULE: ./src/utils/isEmpty/index.ts
var isEmpty = __webpack_require__(70625);
;// ./src/components/Cascade/utils/updateSelectList.ts
// 获取options选项
const getOptions=treeDataItem=>treeDataItem.map(item=>({value:item.value,label:item.value,id:item.value}));/**
 * @name 根据选择的值，更新选择下拉列表
 * @param treeData 完整的树形数据
 * @param valueArr 用户选择的值
 */const updateSelectList=(treeData,valueArr,level)=>{const newSelectList=Array(level).fill({options:[]});// 设置第一级数据
newSelectList[0]={options:getOptions(treeData)};// 根据用户选择的值，设置后几级数据
valueArr.forEach((item,index)=>{const loopTree=treeDataValue=>{treeDataValue.forEach(treeDataItem=>{if(!(0,isEmpty/* default */.A)(treeDataItem.children)&&index+1<level){if(treeDataItem.value===item){newSelectList[index+1]={options:getOptions(treeDataItem.children)};}else{loopTree(treeDataItem.children);}}});};loopTree(treeData);});return newSelectList;};/* harmony default export */ const utils_updateSelectList = (updateSelectList);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/components/Cascade/index.tsx
/**
 * @name 级联组件
 * @param value 每个级联选中的值
 * @param onChange 组件值修改的回调
 * @param level 级联层级
 * @param placeholder 级联输入框占位符
 * @param showTextArea 显示自定义文本框
 * @param selectOptions 自定义下拉框的配置项
 * @param textAreaOptions 自定义文本框的配置项
 * @param cascadeData 外部输入的级联选项数据
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */const Cascade=props=>{const{value=[],cascadeData=[],level=3,showTextArea=false,selectOptions={},textAreaOptions={},placeholders=[],onChange}=props;const treeData=utils_arr2Tree(cascadeData);const[valueArr,setValueArr]=(0,react.useState)(utils_initValueArr(value,showTextArea?level+1:level));const[textValue,setTextValue]=(0,react.useState)(valueArr?.[level]);const[selectList,setSelectList]=(0,react.useState)(utils_updateSelectList(treeData,valueArr,level));const onSelectChange=(selectValue,index)=>{let newValueArr=valueArr;if(showTextArea&&index===level){valueArr[index]=selectValue;newValueArr=valueArr;setTextValue(selectValue);}else{newValueArr=[...valueArr.slice(0,index),selectValue];newValueArr[level]=textValue;setSelectList(utils_updateSelectList(treeData,newValueArr,level));}setValueArr(newValueArr);onChange?.(newValueArr.filter(Boolean));};(0,react.useEffect)(()=>{setSelectList(utils_updateSelectList(treeData,valueArr,level));},[level]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[selectList?.map(({options},index)=>/*#__PURE__*/(0,jsx_runtime.jsx)(Select/* default */.A,{value:valueArr?.[index],placeholder:placeholders?.[index]??'请选择...',options:options,onChange:selectValue=>onSelectChange(selectValue,index),style:{marginBottom:`${index===selectList.length-1&&!showTextArea?0:20}px`},notFoundContent:'暂无数据',...selectOptions},index)),showTextArea&&/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea/* default */.A,{defaultValue:textValue,placeholder:placeholders?.[level]??'请输入...',onChange:textAreaValue=>onSelectChange(textAreaValue,level),...textAreaOptions})]});};/* harmony default export */ const components_Cascade = (Cascade);

/***/ },

/***/ 30390
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55659);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
/**
 * @name 单个勾选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param prefix 前缀内容
 * @param suffix 后缀内容
 * @param spaceOptions Space组件配置
 * @link https://ant.design/components/checkbox-cn/
 */const Checkbox=props=>{const{value,prefix,suffix,spaceOptions,onChange,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:"w-full",...spaceOptions,children:[prefix,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{checked:Boolean(value),onChange:e=>onChange?.(e?.target?.checked),...rest}),suffix]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 80587
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CheckboxGroup */
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55659);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41598);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
/**
 * @name 多选框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param size 组件大小
 * @param optionsConfig 组件选项配置
 * @link 其他参数详见 https://ant.design/components/checkbox-cn/
 */const CheckboxGroup=props=>{const{value,optionsConfig,listOptions={size:'default'},...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"bg-white",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Group,{value:value||optionsConfig?.defaultValue,...rest,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{bordered:true,...listOptions,children:optionsConfig?.options?.map(option=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.Item,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{value:option.value,children:option.label})},option.value))})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxGroup);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 67221
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11122);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Col
 */const Col=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 43456
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52674);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 布局组件-折叠面板（子组件只能为“布局面板”）
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/
 */const Collapse=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collapse);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 50546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52674);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 布局组件折叠面板（只能放在“布局组件折叠”中）
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/#Collapse.Panel
 */const CollapsePanel=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Panel,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollapsePanel);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 71448
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57050);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 分隔线
 * @link 其他参数详见 https://ant.design/components/divider-cn/
 */const Divider=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 50875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */const Input=props=>{const{onChange,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",onChange:e=>onChange?.(e?.target?.value,e),...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 96796
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50875);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
const InputGroup=props=>{const{value=[],placeholders=[],level=2,onChange,...rest}=props;const[valueArr,setValueArr]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array.isArray(value)?value:[]);const onInputChange=(value,index)=>{const newValueArr=[...valueArr];newValueArr[index]=value;setValueArr(newValueArr);onChange?.(newValueArr);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"flex flex-col gap-2",children:Array(level).fill('').map((_item,index)=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_Input__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{defaultValue:valueArr[index]||'',placeholder:placeholders[index]||'请输入...',onChange:value=>onInputChange(value,index),...rest},index))});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 60820
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69136);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 数字输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-number-cn/
 */const InputNumber=props=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",...props});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputNumber);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 69643
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Modal)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
;// ./src/hooks/useDrag.tsx
// 定义返回的 bindDrag 类型
const useDrag=()=>{const dragHandleRef=(0,react.useRef)(null);// 拖拽手柄区域
const dragTargetRef=(0,react.useRef)(null);// 实际移动的元素
const isDragging=(0,react.useRef)(false);const startPos=(0,react.useRef)({x:0,y:0});const currentPos=(0,react.useRef)({x:0,y:0});const resetPosition=(0,react.useCallback)(()=>{currentPos.current={x:0,y:0};},[]);// 开始拖拽
const handleMouseDown=(0,react.useCallback)(event=>{isDragging.current=true;startPos.current={x:event.clientX-currentPos.current.x,y:event.clientY-currentPos.current.y};},[]);// 结束拖拽
const handleMouseUp=(0,react.useCallback)(()=>{isDragging.current=false;},[]);// 拖拽过程中
const handleMouseMove=(0,react.useCallback)(event=>{if(!isDragging.current)return;const newPosX=event.clientX-startPos.current.x;const newPosY=event.clientY-startPos.current.y;currentPos.current={x:newPosX,y:newPosY};// 更新实际移动元素的位置
if(dragTargetRef.current){dragTargetRef.current.style.transform=`translate(${newPosX}px, ${newPosY}px)`;}},[]);// 绑定拖拽手柄
const bindDragHandle=(0,react.useCallback)(node=>{if(node){dragHandleRef.current=node;node.addEventListener('mousedown',handleMouseDown);}// 如果没有指定手柄，直接使用目标元素作为手柄
if(dragTargetRef.current){dragTargetRef.current.addEventListener('mousedown',handleMouseDown);}},[handleMouseDown,handleMouseMove,handleMouseUp]);// 绑定实际移动的目标元素
const bindDragTarget=(0,react.useCallback)(node=>{dragTargetRef.current=node;// 如果没有传入拖拽手柄，目标元素即为手柄
if(!dragHandleRef.current){node?.addEventListener('mousedown',handleMouseDown);}},[handleMouseDown,handleMouseMove,handleMouseUp]);(0,react.useEffect)(()=>{document.addEventListener('mousemove',handleMouseMove);document.addEventListener('mouseup',handleMouseUp);return()=>{document.removeEventListener('mousemove',handleMouseMove);document.removeEventListener('mouseup',handleMouseUp);};},[handleMouseMove,handleMouseUp]);return{bindDragHandle,bindDragTarget,resetPosition};};/* harmony default export */ const hooks_useDrag = (useDrag);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseOutlined.js
var CloseOutlined = __webpack_require__(78613);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuOutlined.js
var MenuOutlined = __webpack_require__(70390);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js
var client = __webpack_require__(99576);
;// ./src/components/Modal/hooks.ts
// 控制弹框动画显示隐藏的 hook
const useAnimation=({id,modals,onClose})=>{const[isVisible,setIsVisible]=(0,react.useState)(false);(0,react.useEffect)(()=>{if(id&&modals[id]){modals[id].setIsVisible=setIsVisible;modals[id].onClose=onClose;}},[id]);return{isVisible,setIsVisible};};// 控制弹框显示隐藏的 hook
const useShowModal=({show,id,hide,setIsVisible,onClose,resetPosition})=>{const[showModal,setShowModal]=(0,react.useState)(false);const handleClose=()=>{resetPosition?.();if(id){hide?.(id);}else{setIsVisible(false);}setTimeout(()=>{setShowModal(false);onClose?.();},300);// 动画时间与 CSS 中的过渡时间保持一致
};(0,react.useEffect)(()=>{if(show){setShowModal(true);setTimeout(()=>{setIsVisible(true);},50);}},[show]);return{handleClose,showModal,setShowModal};};
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/components/Modal/index.tsx
let modalIdCounter=0;// 用于生成唯一 ID
const modals={};// 存储各个 modal 实例的 root
/**
 * @name 自定义弹框
 * @param show 是否显示弹框
 * @param mask 是否开启遮罩
 * @param closeable 是否显示关闭按钮
 * @param draggable 是否可拖动
 * @param children 自定义的需要渲染的dom
 * @param onClose 关闭弹框的回调
 */const Modal=props=>{const{id,mask=true,show=false,closeable=false,draggable=false,children,onClose}=props;const{bindDragHandle,bindDragTarget,resetPosition}=hooks_useDrag();// 拖拽功能
const{isVisible,setIsVisible}=useAnimation({id,modals,onClose});// 控制显示与隐藏的动画
const{showModal,handleClose}=useShowModal({id,show,hide:Modal.hide,resetPosition,onClose,setIsVisible});// 控制显示与隐藏
return showModal&&/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[mask&&/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"fixed top-0 left-0 w-100vw h-100vh bg-#0000007f z-999",style:{transition:'opacity 0.2s ease-in-out',opacity:isVisible?1:0},role:"button",onClick:handleClose}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"fixed top-50% left-50% z-1000",style:{transition:'opacity 0.2s ease-in-out,transform 0.2s ease-in-out',opacity:isVisible?1:0,transform:`translate(-50%, -50%) scale(${isVisible?1:0.8})`},children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{ref:draggable?bindDragTarget:null,children:[closeable&&/*#__PURE__*/(0,jsx_runtime.jsx)(CloseOutlined/* default */.A,{className:"absolute top-6px right-6px bg-transparent b-none text-16px",onClick:handleClose}),draggable&&/*#__PURE__*/(0,jsx_runtime.jsx)(MenuOutlined/* default */.A,{className:"absolute top-6px left-6px bg-transparent b-none text-16px",ref:bindDragHandle}),children]})})]});};// 命令式弹框参数
Modal.show=options=>{const id=`modal-${++modalIdCounter}`;const div=document.createElement('div');div.id=id;document.body.append(div);const root=(0,client.createRoot)(div);root.render(/*#__PURE__*/(0,jsx_runtime.jsx)(Modal,{show:true,id:id,...options}));modals[id]={root};return id;};Modal.hide=id=>{const modalInstance=modals[id];modalInstance?.setIsVisible?.(false);// 触发隐藏动画
setTimeout(()=>{modalInstance?.onClose?.();// 触发隐藏动画
modalInstance?.root?.unmount();// 动画结束后卸载组件
delete modals[id];const div=document.querySelector(`#${id}`);div?.remove();},200);// 动画时间
};/* harmony default export */ const components_Modal = (Modal);

/***/ },

/***/ 35059
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_MonacoEditor)
});

// UNUSED EXPORTS: useMonaco

// EXTERNAL MODULE: ./node_modules/.pnpm/@monaco-editor+react@4.7.0_monaco-editor@0.55.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@monaco-editor/react/dist/index.mjs + 11 modules
var dist = __webpack_require__(29463);
;// ./src/components/MonacoEditor/defineTheme.ts
const defineTheme=themeName=>{if(themeName==='light'||themeName==='vs-dark')return true;return new Promise(resolve=>{Promise.all([dist/* loader */.wG.init(),__webpack_require__(66205)(`./${themeName}.json`)]).then(([monaco,themeData])=>{monaco.editor.defineTheme(themeName,themeData);monaco.editor.setTheme(themeName);resolve(true);});});};/* harmony default export */ const MonacoEditor_defineTheme = (defineTheme);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/components/MonacoEditor/index.tsx
/**
 * @name 摩纳哥代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param theme 主题样式 light | vs-dark | OneDarkPro
 * @param options 微软原版monaco-editor配置参数
 * @link rest参数详见 https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html
 * @link 其他参数详见 https://github.com/suren-atoyan/monaco-react
 */const MonacoEditor=props=>{const{value='',language='javascript',theme='OneDarkPro',onChange,...rest}=props;return/*#__PURE__*/(0,jsx_runtime.jsx)(dist/* default */.Ay,{beforeMount:()=>MonacoEditor_defineTheme(theme),language:language,defaultValue:value||'',onChange:onChange,theme:theme,...rest});};/* harmony default export */ const components_MonacoEditor = (MonacoEditor);

/***/ },

/***/ 69417
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_Options)
});

// EXTERNAL MODULE: ./src/utils/getUuId/index.ts
var getUuId = __webpack_require__(28831);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/PlusOutlined.js
var PlusOutlined = __webpack_require__(63073);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(94784);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(91331);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+modifiers@9.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/modifiers/dist/modifiers.esm.js
var modifiers_esm = __webpack_require__(97313);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(905);
// EXTERNAL MODULE: ./src/components/Input/index.tsx
var Input = __webpack_require__(50875);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/CloseCircleOutlined.js
var CloseCircleOutlined = __webpack_require__(20377);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/MenuOutlined.js
var MenuOutlined = __webpack_require__(70390);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+utilities@3.2.2_react@18.3.1/node_modules/@dnd-kit/utilities/dist/utilities.esm.js
var utilities_esm = __webpack_require__(37893);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(29855);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/tooltip/index.js + 7 modules
var tooltip = __webpack_require__(90570);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/checkbox/index.js + 4 modules
var es_checkbox = __webpack_require__(55659);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/radio/index.js + 5 modules
var es_radio = __webpack_require__(66316);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/components/Options/Option.tsx
// 单个选项
const Option=props=>{const{type='Radio',option,inputOptions,onOptionChange,onCheckedChange,onRemoveOption}=props;const{id,checked,label}=option;const{attributes,listeners,setNodeRef,transform,transition}=(0,sortable_esm/* useSortable */.gl)({id:option.id});const style={transform:utilities_esm/* CSS */.Ks.Transform.toString(transform),transition:transition??''};return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex flex-col b-b-1 b-b-solid b-b-#0000007f",ref:setNodeRef,style:style,...attributes,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Input/* default */.A,{defaultValue:label,onChange:value=>{onOptionChange({...option,label:value,value});},prefix:/*#__PURE__*/(0,jsx_runtime.jsx)(MenuOutlined/* default */.A,{...listeners,style:{cursor:'pointer',marginRight:'10px'}}),suffix:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{placement:"top",title:"\u9ED8\u8BA4\u9009\u4E2D\u9879",mouseEnterDelay:0.5,children:type==='Checkbox'?/*#__PURE__*/(0,jsx_runtime.jsx)(es_checkbox/* default */.A,{checked:checked,onClick:()=>onCheckedChange(id)}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.A,{checked:checked,onClick:()=>onCheckedChange(id)})}),/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{placement:"top",title:"\u5220\u9664\u5F53\u524D\u9879",mouseEnterDelay:0.5,children:/*#__PURE__*/(0,jsx_runtime.jsx)(CloseCircleOutlined/* default */.A,{style:{cursor:'pointer',color:'rgba(128,128,128.0.5)'},onClick:()=>onRemoveOption(id)})})]}),variant:"borderless",...inputOptions})});};/* harmony default export */ const Options_Option = (Option);
;// ./src/components/Options/utils/sortOptions.ts
/**
 * @name 选项排序
 * @param options 选项列表
 * @param activeId 选中的id
 * @param overId 覆盖的id
 * @returns
 */const sortOptions=(options,activeId,overId)=>{const oldIndex=options.findIndex(item=>item.id===activeId);const newIndex=options.findIndex(item=>item.id===overId);return (0,sortable_esm/* arrayMove */.be)(options,oldIndex,newIndex);};/* harmony default export */ const utils_sortOptions = (sortOptions);
;// ./src/components/Options/OptionsContainer.tsx
// 选项容器
const OptionsContainer=props=>{const{optionsConfig,inputOptions,onOptionsConfigChange}=props;const sensors=(0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN),(0,core_esm/* useSensor */.MS)(core_esm/* TouchSensor */.IG));const{type,options}=optionsConfig||{};// 拖动结束
const handleDragEnd=event=>{const{active,over}=event;if(active.id!==over?.id&&over?.id!==undefined){onOptionsConfigChange({...optionsConfig,options:utils_sortOptions(options,active.id,over?.id)});}};// 删除选项
const onRemoveOption=id=>{const newOptions=options.filter(item=>item.id!==id);onOptionsConfigChange({...optionsConfig,options:newOptions});};// 更新选项
const onOptionChange=option=>{const newOptions=[...options];const newOptionIndex=options?.findIndex(item=>item.id===option.id);if(newOptionIndex!==-1)newOptions[newOptionIndex]=option;onOptionsConfigChange({...optionsConfig,options:newOptions});};// 更新选项
const onCheckedChange=id=>{const newOptions=optionsConfig?.options?.map(option=>({...option,checked:option.id===id?!option?.checked:optionsConfig?.type==='Checkbox'?option?.checked:false}));onOptionsConfigChange({...optionsConfig,options:newOptions});};return/*#__PURE__*/(0,jsx_runtime.jsx)(core_esm/* DndContext */.Mp,{sensors:sensors,collisionDetection:core_esm/* closestCenter */.fp,onDragEnd:handleDragEnd,modifiers:[modifiers_esm/* restrictToVerticalAxis */.FN],children:/*#__PURE__*/(0,jsx_runtime.jsx)(sortable_esm/* SortableContext */.gB,{items:options,strategy:sortable_esm/* verticalListSortingStrategy */._G,children:options?.map(option=>/*#__PURE__*/(0,jsx_runtime.jsx)(Options_Option,{type:type,option:option,inputOptions:inputOptions,onOptionChange:onOptionChange,onCheckedChange:onCheckedChange,onRemoveOption:onRemoveOption},option.id))})});};/* harmony default export */ const Options_OptionsContainer = (OptionsContainer);
;// ./src/components/Options/utils/formatOptionsConfig.ts
/**
 * @name 格式化配置，补全缺漏的值
 * @params optionsConfig 需要格式化的值
 * @return optionsConfig 格式化完成后的值
 */const formatOptionsConfig=optionsConfig=>{const{type='Radio',defaultValue='',options=[]}=optionsConfig||{};return{type,defaultValue,options:options.map(option=>({...option,id:option.id||(0,getUuId/* default */.A)(),checked:typeof option.checked==='boolean'?option.checked:false}))};};/* harmony default export */ const utils_formatOptionsConfig = (formatOptionsConfig);
;// ./src/components/Options/index.tsx
/**
 * @name 选项配置
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param optionsConfig 选项配置
 */const Options=props=>{const{value,inputOptions,onChange}=props;const[optionsConfig,setOptionsConfig]=(0,react.useState)(utils_formatOptionsConfig(value||props.optionsConfig));const onOptionsConfigChange=newOptionsConfig=>{const{options}=newOptionsConfig;// 设置选中的默认值
let defaultValue=optionsConfig?.type==='Checkbox'?[]:'';options?.forEach(option=>{if(option?.checked){if(optionsConfig?.type==='Checkbox'){defaultValue.push(option.value);}else{defaultValue=option.value;}}});setOptionsConfig({...newOptionsConfig,defaultValue});onChange?.({...newOptionsConfig,defaultValue});};// 添加选项
const addOption=()=>{const optionsLength=optionsConfig?.options?.length;const newOptions=optionsConfig?.options?.concat({id:(0,getUuId/* default */.A)(),label:`选项${optionsLength+1}`,value:`选项${optionsLength+1}`,checked:false});onOptionsConfigChange({...optionsConfig,options:newOptions});};return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Options_OptionsContainer,{optionsConfig:optionsConfig,onOptionsConfigChange:onOptionsConfigChange,inputOptions:inputOptions}),/*#__PURE__*/(0,jsx_runtime.jsxs)(es_button/* default */.A,{type:"text",style:{color:'#00bcd4'},onClick:addOption,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(PlusOutlined/* default */.A,{})," \u6DFB\u52A0\u9009\u9879"]})]});};/* harmony default export */ const components_Options = (Options);

/***/ },

/***/ 69879
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_toAbsolutePath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77687);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31102);
/* harmony import */ var pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45113);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_2__/* .GlobalWorkerOptions */ .EA.workerSrc=(0,_utils_toAbsolutePath__WEBPACK_IMPORTED_MODULE_0__["default"])('/pdf.worker.min.mjs');/**
 * @name pdf查看器
 * @param url pdf的链接
 * @link 其他参数详见 https://github.com/mozilla/pdf.js
 */const PdfViewer=({url,scale=1})=>{const[pdfPages,setPdfPages]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);// pdf所有页面的数组
const pdfPagesRef=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)([]);const pdfDocRef=(0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);// 加载pdf的某一页
const renderPdfPage=async number=>{try{const pdfDoc=pdfDocRef.current;if(!pdfDoc)return;const page=await pdfDoc.getPage(number);// 获取视图
const viewport=page.getViewport({scale});// 获取canvas
const canvas=document.querySelector(`#pdf-page-${number}`);if(canvas){const context=canvas.getContext('2d');if(!context)return;const devicePixelRatio=window.devicePixelRatio||2;const outputScale=Math.max(devicePixelRatio,2);// 输出缩放比例，设置为不低于2，低于2看起来会很糊；
// 设置canvas的宽高
canvas.width=Math.floor(viewport.width*outputScale);canvas.height=Math.floor(viewport.height*outputScale);canvas.style.width='100%';canvas.style.height='100%';const transform=outputScale===1?undefined:[outputScale,0,0,outputScale,0,0];// 渲染pdf
const renderContext={canvasContext:context,canvas,viewport,transform};page.render(renderContext).promise.then(async()=>{if(number<pdfPagesRef.current.length){await renderPdfPage(number+1);}});}}catch(error){console.error(error);}};// 初始化pdf，加载pdf文件
const initPdf=async url=>{// 加载pdf文件
const pdfDoc=await pdfjs_dist_build_pdf__WEBPACK_IMPORTED_MODULE_2__/* .getDocument */ .YE({url,cMapUrl:(0,_utils_toAbsolutePath__WEBPACK_IMPORTED_MODULE_0__["default"])('/cmaps/'),cMapPacked:true}).promise;pdfDocRef.current=pdfDoc;pdfPagesRef.current=[];for(let i=1;i<=pdfDoc.numPages;i++){pdfPagesRef.current.push({id:`pdf-page-${i}`,number:i});}setPdfPages(pdfPagesRef.current);setTimeout(()=>renderPdfPage(1));};(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{// 同步清空旧数据（仅 ref，不触发渲染）
pdfPagesRef.current=[];pdfDocRef.current=null;if((0,_utils_validate__WEBPACK_IMPORTED_MODULE_1__["default"])(url,'url')&&url.endsWith('.pdf')){initPdf(url).catch(console.error);}else{console.error('请输入正确的url');}},[url]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"w-full h-full",children:pdfPages.map(pageItem=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("canvas",{className:"border-1 border-solid border-black",id:pageItem.id},pageItem.id))});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PdfViewer);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 27967
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var quill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27929);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
/**
 * @name 富文本编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://quilljs.com/docs/quickstart
 */const QuillEditor=props=>{const{value,options={},onChange,onReady}=props||{};const quillRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);const containerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);const defaultValueRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(value??'');const onTextChangeRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onChange);// const onSelectionChangeRef = useRef(onSelectionChange);
const defaultOptions={theme:'snow',// 或 'bubble'
placeholder:'Hello, World!',modules:{toolbar:[[{header:1},{header:2},{header:3},{header:4},{header:5},{header:6}],// 标题大小 [{ header: [1, 2, 3, 4, 5, 6] }]
['bold','italic','underline','strike',{color:[]},{background:[]}],// 加粗，倾斜，下划线，中划线，文字颜色，文字背景颜色
[{list:'ordered'},{list:'bullet'},{list:'check'}],// 有序列表，无需列表，可勾选列表
[{align:[]},{indent:'-1'},{indent:'+1'},{direction:'rtl'}],// 对齐方式 减小缩进，增加缩进，文本排列方式
['link','image','video'],// 超链接，图片，视频，
['formula',{script:'sub'},{script:'super'}],// 数学公式，下标，上标
['blockquote','code-block','clean'],// 引用，代码块，删除选中文本的格式
[{size:[]},{font:[]}]// 文字大小，字体
]},...options};(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{onTextChangeRef.current=onChange;// onSelectionChangeRef.current = onSelectionChange;
});(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(containerRef.current){const quill=new quill__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay(containerRef.current,defaultOptions);// 将quill实例暴露出去。供外部使用；
onReady?.(quill);quillRef.current=quill;// 设置初始值
if(defaultValueRef.current){quill.clipboard.dangerouslyPasteHTML(0,defaultValueRef.current);// quill.setText(defaultValueRef.current);
// quill.setContents(defaultValueRef.current);
}// 监听内容更改
quill.on(quill__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay.events.TEXT_CHANGE,(...args)=>{onTextChangeRef.current?.(quillRef.current?.root.innerHTML??'',...args);});// quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
//   onSelectionChangeRef.current?.(...args);
// });
}return()=>{// 清空编辑器；
quillRef.current=null;if(containerRef.current){containerRef.current.innerHTML='';}};},[quillRef]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"w-full flex flex-col [&_.ql-container]:flex-1",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{ref:containerRef})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuillEditor);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 34143
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41598);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66316);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
/**
 * @name 单选
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param size 组件大小
 * @param optionsConfig 选项配置
 * @link 其他参数详见 https://ant.design/components/radio-cn/
 */const RadioGroup=props=>{const{value,optionsConfig,listOptions={size:'default'},onChange,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"bg-white",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.Group,{value:value||optionsConfig?.defaultValue,onChange:e=>onChange?.(e?.target?.value),...rest,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{bordered:true,...listOptions,children:optionsConfig?.options?.map(option=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Item,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{value:option.value,children:option.label})},option.value))})})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 83691
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58256);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Row
 */const Row=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 79369
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2381);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */const Select=props=>{const{value,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",value:value,...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 15751
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65904);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67874);
/* harmony import */ var prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_json__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76931);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25102);
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
/**
 * @name 简易代码编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param language 需要语法高亮的语言
 * @link 其他参数详见 https://www.npmjs.com/package/react-simple-code-editor
 */const SimpleCodeEditor=props=>{const{value='',language='javascript',onChange=value=>console.log(value),...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"overflow-auto [&>div]:min-h-full",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react_simple_code_editor__WEBPACK_IMPORTED_MODULE_3___default()),{value:value,onValueChange:onChange,highlight:value=>(0,prismjs__WEBPACK_IMPORTED_MODULE_0__.highlight)(value,prismjs__WEBPACK_IMPORTED_MODULE_0__.languages[language],language),padding:10,...rest})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SimpleCodeEditor);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 15698
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _components_InputNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60820);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73883);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97500);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
/**
 * @name 滑动输入条
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @param showInputNumber 显示数字输入框
 * @param inputNumberOptions 数字显示框的参数
 * @link 其他参数详见 https://ant.design/components/slider-cn/
 */const Slider=props=>{const{value=0,onChange,showInputNumber=false,inputNumberOptions,layout='horizontal',...rest}=props;const[inputValue,setInputValue]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value||0);const isVertical=showInputNumber&&layout==='vertical';const onSliderChange=newValue=>{if(typeof newValue==='number')setInputValue(newValue);onChange?.(newValue);};(0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{// 传入的value变化时，也要及时更新inputValue
setInputValue(value);},[value]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-full min-w-100px flex',{'flex-col':isVertical,'flex-row':!isVertical}),style:{'--margin-right':isVertical?'0px':'16px','--input-number-width':isVertical?'100%':'110px'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{value:inputValue,onChange:onSliderChange,...rest}),showInputNumber&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InputNumber__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{value:inputValue,onChange:value=>{if(value!==null)onSliderChange(Number(value));},min:0,...inputNumberOptions})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 48593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29855);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name Space 间距
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */const Space=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7525
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64221);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 开关
 * @param value 组件的值
 * @param checked 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/switch-cn/
 */const Switch=props=>{const{value,checked,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{checked:value||checked,...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Switch);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 31968
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 文本展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */const Text=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Text,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 26875
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31986);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */const TextArea=props=>{const{onChange,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.TextArea,{onChange:e=>onChange?.(e?.target?.value,e),...rest});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextArea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 64605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15569);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
/**
 * @name 标题展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Title
 */const Title=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Title,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 8232
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30758);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50932);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86070);
const disableContextMenu=event=>event.preventDefault();// https://videojs.com/guides/options/
/**
 * @name video播放器
 * @param url pdf的链接
 * @link 其他参数详见 https://videojs.com/guides/options/
 */const VideoViewer=props=>{const{url,onReady,options={}}=props||{};const optionsRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({autoplay:false,controls:true,responsive:true,fluid:true,preload:'auto',aspectRatio:'16:9',...options});const videoRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);const playerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);// 初始化pdf，加载pdf文件
const initVideo=async url=>{// 清空之前的数据
try{if(url){optionsRef.current.sources=[{src:url,type:'video/mp4'}];}if(playerRef?.current){if(optionsRef.current.sources){playerRef.current.src(optionsRef.current.sources);}if(optionsRef.current.poster){playerRef.current.src(optionsRef.current.poster);}}else{const videoElement=document.createElement('video-js');videoElement.classList.add('vjs-big-play-centered');videoRef.current?.append(videoElement);videoRef.current?.addEventListener('contextmenu',disableContextMenu,false);playerRef.current=(0,video_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(videoElement,optionsRef.current,()=>onReady?.(playerRef.current));}}catch(error){console.error(error);}};// 销毁video
const disposeVideo=()=>{if(playerRef.current){playerRef.current?.dispose?.();playerRef.current=null;videoRef.current?.removeEventListener('contextmenu',disableContextMenu,false);}};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{if(url&&(0,_utils_validate__WEBPACK_IMPORTED_MODULE_0__["default"])(url,'url')){disposeVideo();initVideo(url);}else{console.error('请输入正确的url');}return()=>disposeVideo();},[url]);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"w-full h-full",ref:videoRef});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoViewer);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 29802
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  K: () => (/* reexport */ Editor_Editor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js
var es = __webpack_require__(58003);
// EXTERNAL MODULE: ./src/utils/getUuId/index.ts
var getUuId = __webpack_require__(28831);
// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@dnd-kit/core/dist/core.esm.js + 1 modules
var core_esm = __webpack_require__(91331);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
;// ./src/generator/Editor/atoms/componentStructureState.ts
/**
 * @name 当前画布上的组件数据
 */const componentStructureState=(0,es/* atom */.eU)({key:'structureItems',default:{componentItems:[],structureItems:[]}});/* harmony default export */ const atoms_componentStructureState = (componentStructureState);
;// ./src/generator/Editor/atoms/currentState.ts
/**
 * @name 当前选中的组件默认配置信息
 */const currentState=(0,es/* atom */.eU)({key:'current',default:{fieldConfig:undefined,currentId:undefined}});/* harmony default export */ const atoms_currentState = (currentState);
// EXTERNAL MODULE: ./src/generator/fieldConfig/index.ts
var fieldConfig = __webpack_require__(52618);
// NAMESPACE OBJECT (decoupled): ./src/generator/fieldConfig/index.ts
var fieldConfig_namespaceObject = {};
__webpack_require__.r(fieldConfig_namespaceObject);
__webpack_require__.d(fieldConfig_namespaceObject, {
  cascade: () => (fieldConfig.DJ),
  checkbox: () => (fieldConfig.kv),
  input: () => (fieldConfig.hF),
  inputNumber: () => (fieldConfig.wC),
  radio: () => (fieldConfig.Ow),
  select: () => (fieldConfig.Lt),
  space: () => (fieldConfig.xe),
  submitButton: () => (fieldConfig.RC),
  textarea: () => (fieldConfig.PC)
});

;// ./src/generator/Editor/atoms/leftSortableItemsState.ts
/**
 * @name 左侧组件列表排序数据
 */const leftSortableItemsState=(0,es/* atom */.eU)({key:'leftSortableItems',default:Object.keys(fieldConfig_namespaceObject).map(item=>(0,getUuId/* default */.A)(4,`${item}-`))});/* harmony default export */ const atoms_leftSortableItemsState = (leftSortableItemsState);
// EXTERNAL MODULE: ./src/generator/Render/index.ts + 1 modules
var Render = __webpack_require__(81132);
// EXTERNAL MODULE: ./src/utils/isEmpty/index.ts
var isEmpty = __webpack_require__(70625);
;// ./src/generator/Editor/Layout/utils/copyItem.ts
/**
 * @name 输入id，复制此项
 * @param id
 * @param items
 * @returns item
 */const copyItem=(componentStructure,id,newId)=>{const{componentItems,structureItems}=componentStructure;const newUnId=newId||(0,getUuId/* default */.A)(4,`${id.split('-')[0]}-`);const newComponentItems=[...componentItems];// 递归循环遍历数据
const loopItems=items=>{return items.reduce((prev,curr)=>{if(curr.id===id){prev.push(curr,{...curr,id:newUnId});}else{prev.push({id:curr.id,children:curr.children===undefined||(0,isEmpty/* default */.A)(curr.children)?undefined:loopItems(curr.children)});}return prev;},[]);};newComponentItems.splice(componentItems.findIndex(item=>item.id===id)+1,0,{...componentItems.find(item=>item.id===id),id:newUnId});return{componentItems:newComponentItems,structureItems:loopItems(structureItems)};};/* harmony default export */ const utils_copyItem = (copyItem);
;// ./src/generator/Editor/Layout/utils/getFieldConfig.ts
/**
 * @name 获取对应的属性type
 * @param id
 * @returns
 */const getFieldConfig=id=>{const fieldId=id.split('-')[0];return fieldConfig_namespaceObject[fieldId];};/* harmony default export */ const utils_getFieldConfig = (getFieldConfig);
;// ./src/generator/Editor/Layout/utils/formatItems.ts
/**
 * @name 传入组件的数据结构。格式化，同步组件与结构两者的数据并返回。
 * @param id 需要在内部组件的容器ID
 * @param items 需要添加的item
 * @returns items
 */const formatItems=(componentItems,structureItems)=>{// 以structureItems为基准，将componentItems里的多余数据删除；
const newComponentItems=[];// 递归循环遍历数据
const loopItems=items=>{return items.map(item=>{const currComponentItem=componentItems.find(componentItem=>componentItem.id===item.id)||{...utils_getFieldConfig(item.id).componentItem,id:item.id};newComponentItems.push(currComponentItem);return{...item,children:item.children===undefined||(0,isEmpty/* default */.A)(item.children)?null:loopItems(item.children)};}).filter(Boolean);};loopItems(structureItems);return{componentItems:newComponentItems,structureItems};};/* harmony default export */ const utils_formatItems = (formatItems);
;// ./src/generator/Editor/Layout/utils/deleteItem.ts
/**
 * @name 输入id，删除此项
 * @param id
 * @param items
 * @returns item
 */const deleteItem=(componentStructure,id)=>{const{componentItems,structureItems}=componentStructure;// 递归循环遍历数据
const loopItems=items=>{return items.map(item=>{if(item.id!==id){const children=item.children===undefined||(0,isEmpty/* default */.A)(item.children)?null:loopItems(item.children);return{id:item.id,children};}return null;}).filter(Boolean);};return utils_formatItems(componentItems.filter(item=>item.id!==id),loopItems(structureItems));};/* harmony default export */ const utils_deleteItem = (deleteItem);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(40101);
// EXTERNAL MODULE: ./src/components/Space/index.tsx
var Space = __webpack_require__(48593);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/modal/index.js + 41 modules
var modal = __webpack_require__(15427);
// EXTERNAL MODULE: ./src/components/SimpleCodeEditor/index.tsx
var SimpleCodeEditor = __webpack_require__(15751);
// EXTERNAL MODULE: ./src/utils/toString/index.ts
var utils_toString = __webpack_require__(7772);
;// ./src/generator/Render/utils/separateToIntegrate.ts
// 分离 -> 集成
const separateToIntegrate=(componentItems,structureItems)=>{// 若没有单独写布局，则直接返回组件列表
if(!structureItems)return componentItems||[];// 递归循环遍历json
const loopComponents=components=>{return components.map(component=>component?.children?{...componentItems.find(item=>item?.id===component?.id),children:loopComponents(component?.children)}:componentItems.find(item=>item?.id===component?.id));};return loopComponents(structureItems);};/* harmony default export */ const utils_separateToIntegrate = (separateToIntegrate);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(29855);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(94784);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/message/index.js + 25 modules
var message = __webpack_require__(13186);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-copy-to-clipboard@5.1.1_react@18.3.1/node_modules/react-copy-to-clipboard/lib/index.js
var lib = __webpack_require__(17173);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/generator/Editor/Layout/Content/ContentHeader/modalData/useExportModel.tsx
// 导出弹出框
const useExportModel=setModalType=>{const{componentItems,structureItems}=(0,es/* useRecoilValue */.vc)(atoms_componentStructureState);const componentItemsData=utils_separateToIntegrate(componentItems,structureItems);const value=(0,utils_toString/* default */.A)(componentItemsData,null,2);return{title:'导出',onCancel:()=>setModalType(null),footer:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{onClick:()=>setModalType(null),children:"\u53D6\u6D88"}),/*#__PURE__*/(0,jsx_runtime.jsx)(lib.CopyToClipboard,{text:value,onCopy:()=>{message/* default */.Ay.success('复制成功');setModalType(null);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",children:"\u590D\u5236"})})]}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(SimpleCodeEditor/* default */.A,{value:value,language:"json"})};};/* harmony default export */ const modalData_useExportModel = (useExportModel);
// EXTERNAL MODULE: ./src/utils/toData/index.ts
var toData = __webpack_require__(25621);
// EXTERNAL MODULE: ./src/generator/Render/utils/integrateToSeparate.ts
var integrateToSeparate = __webpack_require__(46657);
;// ./src/generator/Editor/Layout/Content/ContentHeader/modalData/useImportModel.tsx
// 导入弹出框
const useImportModel=setModalType=>{const setComponentStructure=(0,es/* useSetRecoilState */.lZ)(atoms_componentStructureState);const[value,setValue]=(0,react.useState)();return{title:'导入',cancelText:'取消',okText:'确定',onCancel:()=>setModalType(null),onOk:()=>{const componentItems=(0,toData/* default */.A)(value);if(Array.isArray(componentItems)){setComponentStructure((0,integrateToSeparate/* default */.A)(componentItems));setModalType(null);}else{message/* default */.Ay.error('格式错误');}},children:/*#__PURE__*/(0,jsx_runtime.jsx)(SimpleCodeEditor/* default */.A,{value:value,language:"json",onChange:setValue})};};/* harmony default export */ const modalData_useImportModel = (useImportModel);
;// ./src/generator/Editor/Layout/Content/ContentHeader/modalData/usePreviewModel.tsx
// 预览弹出框
const usePreviewModel=setModalType=>{const{componentItems,structureItems}=(0,es/* useRecoilValue */.vc)(atoms_componentStructureState);return{title:'预览',cancelText:'取消',okText:'确定',onCancel:()=>setModalType(null),onOk:()=>setModalType(null),children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"h-[500px] w-full overflow-y-scroll [&::-webkit-scrollbar]:hidden",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Render.Render,{componentItems:componentItems,structureItems:structureItems})})};};/* harmony default export */ const modalData_usePreviewModel = (usePreviewModel);
;// ./src/generator/Editor/Layout/Content/ContentHeader/modalData/index.ts
/**
 * @name 获取弹出框数据
 */const useModelData=setModalType=>{return{exportModel:modalData_useExportModel(setModalType),importModel:modalData_useImportModel(setModalType),previewModel:modalData_usePreviewModel(setModalType)};};/* harmony default export */ const ContentHeader_modalData = (useModelData);
;// ./src/generator/Editor/Layout/Content/ContentHeader/index.tsx
// 中间区域画布头
const ContentHeader=()=>{const setComponentStructure=(0,es/* useSetRecoilState */.lZ)(atoms_componentStructureState);const[modalType,setModalType]=(0,react.useState)(null);const modalDataMap=ContentHeader_modalData(setModalType);const modalData=modalType?modalDataMap[modalType]:{};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Space/* default */.A,{className:"my-2 mx-1",size:[8,16],wrap:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{onClick:()=>setModalType('previewModel'),children:"\u9884\u89C8"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{danger:true,onClick:()=>setComponentStructure({componentItems:[],structureItems:[]}),children:"\u6E05\u7A7A"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{onClick:()=>setModalType('importModel'),children:"\u5BFC\u5165"}),/*#__PURE__*/(0,jsx_runtime.jsx)(Button/* default */.A,{type:"primary",onClick:()=>setModalType('exportModel'),children:"\u5BFC\u51FA"}),/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.A,{open:Boolean(modalType),...modalData})]});};/* harmony default export */ const Content_ContentHeader = (ContentHeader);
;// ./src/generator/Editor/Layout/Content/index.tsx
// 中间画布内容区域
const Content=()=>{const[{componentItems,structureItems},setComponentStructure]=(0,es/* useRecoilState */.L4)(atoms_componentStructureState);const[{currentId},setCurrent]=(0,es/* useRecoilState */.L4)(atoms_currentState);const isInRoot=Boolean(structureItems.some(item=>item?.id===currentId));const{setNodeRef}=(0,core_esm/* useDroppable */.zM)({id:'root',disabled:isInRoot});return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"px-2 pb-2 flex flex-col flex-grow flex-shrink-1 overflow-hidden border-l border-r border-gray-300",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Content_ContentHeader,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex-grow overflow-y-auto bg-gray-100 p-2 [&>div]:h-full [&::-webkit-scrollbar]:hidden",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:setNodeRef,children:componentItems?.length?/*#__PURE__*/(0,jsx_runtime.jsx)(Render.Render,{componentItems:componentItems,structureItems:structureItems,editorProps:{currentId,onSelect:id=>setCurrent({fieldConfig:utils_getFieldConfig(id),currentId:id}),onDelete:id=>{setCurrent({fieldConfig:undefined,currentId:undefined});setComponentStructure(componentStructure=>utils_deleteItem(componentStructure,id));},onCopy:id=>{const newId=(0,getUuId/* default */.A)(4,`${id.split('-')[0]}-`);setCurrent({fieldConfig:utils_getFieldConfig(id),currentId:newId});setComponentStructure(componentStructure=>utils_copyItem(componentStructure,id,newId));}}}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"text-gray-400 h-full flex justify-center items-center",children:"\u70B9\u51FB/\u62D6\u62FD\u5DE6\u4FA7\u680F\u7684\u7EC4\u4EF6\u8FDB\u884C\u6DFB\u52A0"})})})]});};/* harmony default export */ const Layout_Content = (Content);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 19 modules
var es_form = __webpack_require__(81080);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__(8143);
// EXTERNAL MODULE: ./src/generator/Render/renderFn/renderItem.tsx + 1 modules
var renderItem = __webpack_require__(24115);
;// ./src/generator/Editor/Layout/DndDragOverlay.tsx
// 用于拖动时，显示组件
const DndDragOverlay=props=>{const{activeId,currentId,isNew,fieldConfig,componentMap,structureItem,componentItems}=props;return/*#__PURE__*/(0,react_dom.createPortal)(/*#__PURE__*/(0,jsx_runtime.jsx)(core_esm/* DragOverlay */.Hd// 拖动结束后的放置动画
,{dropAnimation:{sideEffects:(0,core_esm/* defaultDropAnimationSideEffects */.WB)({styles:{active:{opacity:'0.5'}}})},children:activeId?isNew?/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{className:"w-[100px]",children:fieldConfig?.label}):/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{layout:"vertical",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Render.SortableContainer,{id:structureItem?.id,editorProps:{currentId},children:(0,renderItem/* default */.A)({structureItem,componentItems,componentMap,editorProps:{currentId}})})}):null}),document.body);};/* harmony default export */ const Layout_DndDragOverlay = (DndDragOverlay);
// EXTERNAL MODULE: ./src/generator/fieldConfig/container/index.ts + 2 modules
var container = __webpack_require__(17273);
// NAMESPACE OBJECT (decoupled): ./src/generator/fieldConfig/container/index.ts + 2 modules
var container_namespaceObject = {};
__webpack_require__.r(container_namespaceObject);
__webpack_require__.d(container_namespaceObject, {
  space: () => (container.x)
});

// EXTERNAL MODULE: ./src/generator/fieldConfig/display/index.ts + 2 modules
var display = __webpack_require__(79349);
// NAMESPACE OBJECT (decoupled): ./src/generator/fieldConfig/display/index.ts + 2 modules
var display_namespaceObject = {};
__webpack_require__.r(display_namespaceObject);
__webpack_require__.d(display_namespaceObject, {
  submitButton: () => (display.R)
});

// EXTERNAL MODULE: ./src/generator/fieldConfig/form/index.ts + 15 modules
var fieldConfig_form = __webpack_require__(15300);
// NAMESPACE OBJECT (decoupled): ./src/generator/fieldConfig/form/index.ts + 15 modules
var form_namespaceObject = {};
__webpack_require__.r(form_namespaceObject);
__webpack_require__.d(form_namespaceObject, {
  cascade: () => (fieldConfig_form.DJ),
  checkbox: () => (fieldConfig_form.kv),
  input: () => (fieldConfig_form.hF),
  inputNumber: () => (fieldConfig_form.wC),
  radio: () => (fieldConfig_form.Ow),
  select: () => (fieldConfig_form.Lt),
  textarea: () => (fieldConfig_form.PC)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@dnd-kit+sortable@10.0.0_@dnd-kit+core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/sortable/dist/sortable.esm.js
var sortable_esm = __webpack_require__(905);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/typography/index.js + 22 modules
var typography = __webpack_require__(15569);
;// ./src/generator/Editor/Layout/LeftSider/ButtonItem.tsx
// 左侧组件item
const ButtonItem=props=>{const{fieldConfig}=props;const{label,componentItem}=fieldConfig;const[{currentId},setCurrent]=(0,es/* useRecoilState */.L4)(atoms_currentState);const[{componentItems},setComponentStructure]=(0,es/* useRecoilState */.L4)(atoms_componentStructureState);const leftSortableItems=(0,es/* useRecoilValue */.vc)(atoms_leftSortableItemsState);const id=leftSortableItems.find(item=>item.split('-')[0]===componentItem.id)||'input';const{listeners,setNodeRef,attributes,isDragging}=(0,sortable_esm/* useSortable */.gl)({id});const isComponentItem=(0,react.useMemo)(()=>currentId?Boolean(componentItems.some(item=>item.id===currentId)):false,[currentId,componentItems]);const onClick=()=>{const newId=(0,getUuId/* default */.A)(4,`${componentItem.id}-`);setCurrent({fieldConfig:utils_getFieldConfig(id),currentId:newId});setComponentStructure(({componentItems,structureItems})=>({componentItems:[...componentItems,{...componentItem,id:newId}],structureItems:[...structureItems,{id:newId}]}));};return/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{className:"w-[100px]",style:{opacity:isDragging?0.5:undefined},onClick:onClick,ref:isComponentItem?undefined:setNodeRef,...attributes,...listeners,children:label});};/* harmony default export */ const LeftSider_ButtonItem = (ButtonItem);
;// ./src/generator/Editor/Layout/LeftSider/index.tsx
const LeftSider_fieldConfig={表单组件:form_namespaceObject,'容器布局组件(开发中，未完成)':container_namespaceObject,展示组件:display_namespaceObject};// 左侧组件列表
const LeftSider=()=>{const leftSortableItems=(0,es/* useRecoilValue */.vc)(atoms_leftSortableItemsState);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"w-64 flex-shrink-0 pt-2 px-2 overflow-y-auto h-full [&_h5]:ml-2.5 [&_.ant-space]:w-[208px] [&_.ant-space]:flex [&_.ant-space]:justify-start [&_.ant-space]:mx-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)(sortable_esm/* SortableContext */.gB,{items:leftSortableItems,children:Object.entries(LeftSider_fieldConfig).map(([categoryName,configList])=>{return/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(typography/* default */.A.Title,{level:5,children:[categoryName,":"]}),/*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.A,{size:[8,16],wrap:true,children:Object.entries(configList).map(([fieldName,config])=>/*#__PURE__*/(0,jsx_runtime.jsx)(LeftSider_ButtonItem,{fieldConfig:config},fieldName))})]},categoryName);})})});};/* harmony default export */ const Layout_LeftSider = (LeftSider);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/lodash.js
var lodash = __webpack_require__(46746);
// EXTERNAL MODULE: ./src/generator/types.ts
var types = __webpack_require__(28058);
;// ./src/generator/Editor/Layout/utils/updateItem.ts
const ConfigTypeMap=new types/* ConfigType */.$();/**
 * @name 输入id，与需要调整的字段对象，更新组件对应的值
 * @param id
 * @param items
 * @returns item
 */const updateItem=(componentStructure,id,changeValue)=>{if(!changeValue)return componentStructure;const{componentItems,structureItems}=componentStructure;return{componentItems:componentItems.map(item=>{if(item.id===id){if(Object.keys(changeValue)[0]in ConfigTypeMap){return{...item,...changeValue};}return{...item,props:{...item.props,...changeValue}};}return item;}),structureItems};};/* harmony default export */ const utils_updateItem = (updateItem);
;// ./src/generator/Editor/Layout/RightSider/index.tsx
// 右侧组件配置面板,用于渲染配置项
const RightSider=()=>{const{fieldConfig,currentId}=(0,es/* useRecoilValue */.vc)(atoms_currentState);const[{componentItems,structureItems},setComponentStructure]=(0,es/* useRecoilState */.L4)(atoms_componentStructureState);const componentItem=componentItems.find(item=>item.id===currentId);const{configPanel}=fieldConfig||{};const defaultValue={...(0,lodash.omit)(componentItem,['id','type','props','children']),...componentItem?.props};const[form]=es_form/* default */.A.useForm();const onValuesChange=changeValue=>{if(currentId&&changeValue){setComponentStructure(componentStructure=>utils_updateItem(componentStructure,currentId,changeValue));}};(0,react.useEffect)(()=>{// 组件切换时，更新表单面板对应的值
if(defaultValue)form?.setFieldsValue(defaultValue);},[currentId,structureItems]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex-shrink-0 w-64 pt-6 flex flex-col h-full mx-auto [&_.ant-form]:w-56 [&_.ant-form]:mx-auto",children:/*#__PURE__*/(0,jsx_runtime.jsx)(Render.Render,{defaultValue:defaultValue,componentItems:configPanel?.(),onChange:onValuesChange,formOptions:{form}})});};/* harmony default export */ const Layout_RightSider = (RightSider);
;// ./src/generator/Editor/Layout/utils/findContainerItem.ts
/**
 * @name 输入元素id，找到id所在所在的容器item
 * @param id
 * @param items
 * @returns item
 */const findContainerItem=(structureItems,id)=>{if(!id||!structureItems)return undefined;let currStructureItem;if(id==='root'){return{id:'root',children:(0,isEmpty/* default */.A)(structureItems)?undefined:structureItems};}// 递归循环遍历数据
const loopItems=structureItem=>{const{children}=structureItem||{};if(children){for(let i=0;i<children?.length;i++){if(children?.[i]?.id===id){currStructureItem=structureItem;break;}else if(!(0,isEmpty/* default */.A)(children?.[i]?.children)){loopItems(children?.[i]);}}}};loopItems({id:'root',children:structureItems});return currStructureItem;};/* harmony default export */ const utils_findContainerItem = (findContainerItem);
;// ./src/generator/Editor/Layout/utils/sortItems.ts
/**
 * @name 项目排序
 * @param items 选项列表
 * @param activeId 选中的id
 * @param overId 覆盖的id
 * @returns
 */const sortItems=(items,activeId,overId)=>{const oldIndex=items?.findIndex(item=>item?.id===activeId);const newIndex=items?.findIndex(item=>item?.id===overId);return (0,sortable_esm/* arrayMove */.be)(items,oldIndex,newIndex);};/* harmony default export */ const utils_sortItems = (sortItems);
;// ./src/generator/Editor/Layout/utils/sortStructureItems.ts
/**
 * @name 对structureItems进行排序
 * @param id 需要在内部组件的容器ID
 * @param items 需要添加的item
 * @returns items
 */const sortStructureItems=(structureItems,activeId,overId,containerId)=>{// 递归循环遍历数据
const loopItems=items=>{return items.map(item=>{if(item.id===containerId){return{...item,children:utils_sortItems(item.children||[],activeId,overId)};}return{...item,children:item.children===undefined||(0,lodash.isEmpty)(item.children)?null:loopItems(item.children)};});};if(!containerId||containerId==='root'){return utils_sortItems(structureItems||[],activeId,overId);}return loopItems(structureItems);};/* harmony default export */ const utils_sortStructureItems = (sortStructureItems);
;// ./src/generator/Editor/Layout/helpers/onDragEnd.ts
/**
 * @name 拖拽结束时
 * @param event
 * @param structureItems
 * @param setItems
 */const onDragEnd=(event,componentStructure,setComponentStructure)=>{const{active,over}=event;if(!over?.id)return;const activeId=String(active.id);const overId=String(over?.id);const{structureItems}=componentStructure;const activeContainerItem=utils_findContainerItem(structureItems,activeId);const overContainerItem=utils_findContainerItem(structureItems,overId);// 两者id不相等，但容器相等。说明需要的是在同一容器下的排序操作
if(activeId!==overId&&activeContainerItem?.id===overContainerItem?.id){// 当前拖拽组件与所覆盖的组件不是同一个，则进行排序
setComponentStructure(({componentItems,structureItems})=>({componentItems,structureItems:utils_sortStructureItems(structureItems,activeId,overId,activeContainerItem?.id)}));}};/* harmony default export */ const helpers_onDragEnd = (onDragEnd);
// EXTERNAL MODULE: ./src/generator/utils/isContainer.ts
var isContainer = __webpack_require__(710);
;// ./src/generator/Editor/Layout/utils/findStructureItem.ts
/**
 * @name 输入容器id，找到id所在的item
 * @param id
 * @param items
 * @returns item
 */const findStructureItem=(structureItems,id)=>{if(!id||!structureItems)return undefined;let structureItem;const rootStructureItem={id:'root',children:structureItems};// 递归循环遍历数据
const loopItems=items=>{for(const currItem of items){if(currItem?.id===id){structureItem=currItem;break;}else if(!(0,isEmpty/* default */.A)(currItem?.children)){loopItems(currItem.children);}}};loopItems(structureItems);if(id==='root')return rootStructureItem;return structureItem;};/* harmony default export */ const utils_findStructureItem = (findStructureItem);
;// ./src/utils/cloneDeep/index.ts
/**
 * @name cloneDeep
 * @description 将指定数据进行深拷贝，若无法拷贝则返回原数据
 * @param {any} data 待拷贝的数据
 * @returns {string} 深拷贝后的数据
 * @example <caption>ts类型</caption>
cloneDeep(data:any, opt?:number)
 * @example <caption>demo</caption>
import { cloneDeep } from '@zpcscc/utils';

console.log(cloneDeep('Name')); // Name
console.log(cloneDeep({name:'张三'})); // {name:'张三'}
 */const cloneDeep=data=>{try{return structuredClone(data);}catch{return data;}};/* harmony default export */ const utils_cloneDeep = (cloneDeep);
;// ./src/generator/Editor/Layout/utils/updateComponentStructure.ts
/**
 * @name 输入id，删除此项structure
 * @param id 需要在内部组件的容器ID
 * @param items 需要添加的item
 * @returns items
 */const updateComponentStructure=props=>{const{componentStructure,deleteItemId,addContainerId,newStructureItem,structureIndex}=props;const{componentItems,structureItems}=componentStructure;// 递归循环遍历数据
const loopItems=items=>{return items.map(item=>{// 删除对应的元素
if(item.id===deleteItemId)return null;// 在容器的对应位置中，若没有此元素，则添加对应的元素
if(item.id===addContainerId&&!item.children?.find(childrenItem=>childrenItem.id===newStructureItem.id)){const children=utils_cloneDeep(item.children)||[];children.splice(structureIndex,0,newStructureItem);return{...item,children};}return{...item,children:item.children===undefined||(0,isEmpty/* default */.A)(item.children)?null:loopItems(item.children)};}).filter(Boolean);};const cloneStructureItems=utils_cloneDeep(structureItems)||[];// 先递归处理，后判断是否为根元素。若先处理根元素，则递归时，可能会把根元素已添加的元素删除。
const newStructureItems=loopItems(cloneStructureItems);// 若容器是根容器，则直接在根容器上添加对应元素
if(addContainerId==='root')newStructureItems.splice(structureIndex,0,newStructureItem);// 返回前格式化数据，为了同步元素与结构两者的数据
return utils_formatItems(componentItems,newStructureItems);};/* harmony default export */ const utils_updateComponentStructure = (updateComponentStructure);
;// ./src/generator/Editor/Layout/helpers/onDragOver.ts
/**
 * @name 拖拽覆盖到某个组件时
 * @description onDragOver中，不负责组件的排序，只负责组件的添加，和跨容器组件的添加与删除
 * @param param
 * @param items
 * @param setItems
 */const onDragOver=(event,componentStructure,setComponentStructure)=>{const{active,over}=event;if(!over?.id)return;const activeId=String(active.id);const overId=String(over?.id);const{structureItems}=componentStructure;// 获取当前元素所在容器的item
const activeContainerItem=utils_findContainerItem(structureItems,activeId);const overContainerItem=utils_findContainerItem(structureItems,overId);// console.log('activeId: ', activeId, overId);
// console.log('activeContainerItem: ', activeContainerItem, overContainerItem);
// 没有找到所需要覆盖的容器，直接退出
if(!overContainerItem)return;let activeStructureItem=utils_findStructureItem(structureItems,activeId);const overStructureItem=utils_findStructureItem(structureItems,overId);if(!overStructureItem)return componentStructure;// 找不到当前元素的结构数据，说明时新添加的元素。初始化当前元素数据
if(!activeStructureItem)activeStructureItem={id:activeId};const overContainerChildren=overContainerItem.children||[];const overIndex=overContainerChildren.findIndex(item=>item.id===overId);// 是否为同一元素
const isSameItem=activeId===overId;// 是否是同一容器
const isSameContainer=activeContainerItem?.id===overContainerItem.id;/**
   * 以下几种情况，满足其一，则触发数据更新
   * 1、两者不是同一元素，不在同一容器中。
   * 2、两者不是同一元素，在同一容器中。over元素也是容器，且active元素不在over容器中
   */if(// 两者不是同一元素
!isSameItem&&(// 两者不在同一个容器中
!isSameContainer||// 若两者在同一个容器中，但over元素也是个容器
isSameContainer&&(0,isContainer/* default */.A)(overId)&&!overStructureItem.children?.find(item=>item.id===activeId))){// 更新结构数据，将active在对应容器中添加与删除
setComponentStructure(utils_updateComponentStructure({componentStructure,deleteItemId:activeId,addContainerId:(0,isContainer/* default */.A)(overId)?overId:overContainerItem.id,newStructureItem:activeStructureItem,structureIndex:overIndex===-1?overContainerChildren.length:overIndex}));}return false;};/* harmony default export */ const helpers_onDragOver = (onDragOver);
;// ./src/generator/Editor/Layout/index.tsx
// 编辑器布局容器
const Layout=props=>{const{componentMap}=props;const[componentStructure,setComponentStructure]=(0,es/* useRecoilState */.L4)(atoms_componentStructureState);const{componentItems,structureItems}=componentStructure;const[{currentId,fieldConfig},setCurrent]=(0,es/* useRecoilState */.L4)(atoms_currentState);const setLeftSortableItems=(0,es/* useSetRecoilState */.lZ)(atoms_leftSortableItemsState);const[activeId,setActiveId]=(0,react.useState)(null);const[isNew,setIsNew]=(0,react.useState)(false);const structureItem=utils_findStructureItem(structureItems,currentId);const sensors=(0,core_esm/* useSensors */.FR)((0,core_esm/* useSensor */.MS)(core_esm/* PointerSensor */.AN,{activationConstraint:{// 拖移偏移1px的距离后再触发拖拽排序事件。若不设置偏移距离，会使拖拽事件覆盖掉点击事件。导致无法点击聚焦。
distance:1}}));const collisionDetection=(0,react.useCallback)(args=>{// 优先使用指针算法，为了精确识别容器
const pointerCollisions=(0,core_esm/* pointerWithin */.TT)(args);if(pointerCollisions.length>0)return pointerCollisions;return (0,core_esm/* closestCorners */.y$)(args);},[]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"flex overflow-hidden h-full min-h-[30vh] relative",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(core_esm/* DndContext */.Mp,{sensors:sensors,measuring:{droppable:{strategy:core_esm/* MeasuringStrategy */.Pf.Always}},collisionDetection:collisionDetection,onDragStart:({active})=>{if(!active)return;const id=String(active.id);setIsNew(!componentItems.some(item=>item.id===String(active.id)));setActiveId(id);setCurrent({fieldConfig:utils_getFieldConfig(id),currentId:id});},onDragOver:event=>helpers_onDragOver(event,componentStructure,setComponentStructure),onDragEnd:event=>{setActiveId(null);helpers_onDragEnd(event,componentStructure,setComponentStructure);if(isNew){// 若此次添加的是新元素，则更新左侧组件的id
setLeftSortableItems(items=>items.map(item=>{if(item===event.active.id)return (0,getUuId/* default */.A)(4,`${item.split('-')[0]}-`);return item;}));}},onDragCancel:()=>setActiveId(null),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Layout_LeftSider,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Layout_Content,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Layout_RightSider,{}),/*#__PURE__*/(0,jsx_runtime.jsx)(Layout_DndDragOverlay,{componentItems:componentItems,componentMap:componentMap,currentId:currentId,activeId:activeId,structureItem:structureItem,fieldConfig:fieldConfig,isNew:isNew})]})});};/* harmony default export */ const Editor_Layout = (Layout);
;// ./src/generator/Editor/Editor.tsx
const Editor=props=>{return/*#__PURE__*/(0,jsx_runtime.jsx)(es/* RecoilRoot */.bi,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Editor_Layout,{...props})});};/* harmony default export */ const Editor_Editor = (Editor);
;// ./src/generator/Editor/index.tsx


/***/ },

/***/ 15308
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10928);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89258);
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(905);
/* harmony import */ var _dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37893);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
/**
 * @name 包裹在组件外的拖拽容器
 * @param props
 * @returns
 */const SortableContainer=props=>{const{id='',children,editorProps}=props;const{onSelect,onCopy,onDelete,currentId}=editorProps||{};const{attributes,listeners,setNodeRef,transform,transition,isDragging}=(0,_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_2__/* .useSortable */ .gl)({id});const isFocus=currentId===id;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{id:id,className:"drag-container min-w-200px border border-dashed border-[rgb(187,187,187)] p-[10px_8px_0] mb-2 bg-white relative",style:{transform:_dnd_kit_utilities__WEBPACK_IMPORTED_MODULE_3__/* .CSS */ .Ks.Translate.toString(transform),transition:transition??'',opacity:isDragging?0.5:undefined,...(isFocus&&{outline:'2px solid rgb(64, 158, 255)',borderColor:'rgb(255, 255, 255)'})},onFocus:e=>{const target=e.target;onSelect?.(target.id);},ref:setNodeRef,...attributes,...listeners,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("style",{children:'.drag-container:hover { border: 1px solid #4096ff; }'}),children,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{className:"absolute z-20 -bottom-2px -right-2px h-24px rounded-tl-8px bg-[rgb(64,158,255)] flex justify-center items-center p-[0_4px]",style:{display:isFocus?'flex':'none'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("style",{children:'.drag-container .pointer { color: rgb(255,255,255); padding: 0 4px; cursor: pointer; }'}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"pointer",role:"button",onClick:()=>onDelete?.(id),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"pointer",role:"button",onClick:()=>onCopy?.(id),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{})})]})]},id);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortableContainer);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 63895
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QQ: () => (/* binding */ getComponent)
});

// UNUSED EXPORTS: ErrorAlertWidget, componentsMap

// EXTERNAL MODULE: ./src/components/Alert/index.tsx
var Alert = __webpack_require__(83773);
// EXTERNAL MODULE: ./src/components/Button/index.tsx
var Button = __webpack_require__(40101);
// EXTERNAL MODULE: ./src/components/Cascade/index.tsx + 3 modules
var Cascade = __webpack_require__(20784);
// EXTERNAL MODULE: ./src/components/Checkbox/index.tsx
var Checkbox = __webpack_require__(30390);
// EXTERNAL MODULE: ./src/components/CheckboxGroup/index.tsx
var CheckboxGroup = __webpack_require__(80587);
// EXTERNAL MODULE: ./src/components/Col/index.tsx
var Col = __webpack_require__(67221);
// EXTERNAL MODULE: ./src/components/Collapse/index.tsx
var Collapse = __webpack_require__(43456);
// EXTERNAL MODULE: ./src/components/CollapsePanel/index.tsx
var CollapsePanel = __webpack_require__(50546);
// EXTERNAL MODULE: ./src/components/Divider/index.tsx
var Divider = __webpack_require__(71448);
// EXTERNAL MODULE: ./src/components/Input/index.tsx
var Input = __webpack_require__(50875);
// EXTERNAL MODULE: ./src/components/InputGroup/index.tsx
var InputGroup = __webpack_require__(96796);
// EXTERNAL MODULE: ./src/components/InputNumber/index.tsx
var InputNumber = __webpack_require__(60820);
// EXTERNAL MODULE: ./src/components/Modal/index.tsx + 2 modules
var Modal = __webpack_require__(69643);
// EXTERNAL MODULE: ./src/components/MonacoEditor/index.tsx + 1 modules
var MonacoEditor = __webpack_require__(35059);
// EXTERNAL MODULE: ./src/components/Options/index.tsx + 4 modules
var Options = __webpack_require__(69417);
// EXTERNAL MODULE: ./src/components/PdfViewer/index.tsx
var PdfViewer = __webpack_require__(69879);
// EXTERNAL MODULE: ./src/components/QuillEditor/index.tsx
var QuillEditor = __webpack_require__(27967);
// EXTERNAL MODULE: ./src/components/RadioGroup/index.tsx
var RadioGroup = __webpack_require__(34143);
// EXTERNAL MODULE: ./src/components/Row/index.tsx
var Row = __webpack_require__(83691);
// EXTERNAL MODULE: ./src/components/Select/index.tsx
var Select = __webpack_require__(79369);
// EXTERNAL MODULE: ./src/components/SimpleCodeEditor/index.tsx
var SimpleCodeEditor = __webpack_require__(15751);
// EXTERNAL MODULE: ./src/components/Slider/index.tsx
var Slider = __webpack_require__(15698);
// EXTERNAL MODULE: ./src/components/Space/index.tsx
var Space = __webpack_require__(48593);
// EXTERNAL MODULE: ./src/components/Switch/index.tsx
var Switch = __webpack_require__(7525);
// EXTERNAL MODULE: ./src/components/Text/index.tsx
var Text = __webpack_require__(31968);
// EXTERNAL MODULE: ./src/components/TextArea/index.tsx
var TextArea = __webpack_require__(26875);
// EXTERNAL MODULE: ./src/components/Title/index.tsx
var Title = __webpack_require__(64605);
// EXTERNAL MODULE: ./src/components/VideoViewer/index.tsx
var VideoViewer = __webpack_require__(8232);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/alert/index.js + 10 modules
var es_alert = __webpack_require__(53368);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/generator/Render/components/ErrorAlertWidget/index.tsx
// 错误提示。当JsonPanel不能正确渲染组件时，用此组件替代，并提示组件渲染错误
const ErrorAlertWidget=props=>{const{componentProps}=props;const label=componentProps?.label?`"${componentProps.label}"`:'';const type=componentProps?.type?`(${componentProps.type})`:'';return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"w-full",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_alert/* default */.A,{type:"error",showIcon:true,message:`${label}组件渲染错误,请检查json里的组件type${type}是否正确`})});};/* harmony default export */ const components_ErrorAlertWidget = (ErrorAlertWidget);
;// ./src/generator/Render/components/index.ts
// 组件库中的所有组件
const componentsMap={Alert: Alert/* default */.A,Button: Button/* default */.A,Cascade: Cascade/* default */.A,Checkbox: Checkbox/* default */.A,CheckboxGroup: CheckboxGroup/* default */.A,Collapse: Collapse/* default */.A,CollapsePanel: CollapsePanel/* default */.A,Col: Col/* default */.A,Divider: Divider/* default */.A,Input: Input/* default */.A,InputNumber: InputNumber/* default */.A,InputGroup: InputGroup/* default */.A,Modal: Modal/* default */.A,MonacoEditor: MonacoEditor/* default */.A,Options: Options/* default */.A,PdfViewer: PdfViewer/* default */.A,QuillEditor: QuillEditor/* default */.A,RadioGroup: RadioGroup/* default */.A,Row: Row/* default */.A,Select: Select/* default */.A,SimpleCodeEditor: SimpleCodeEditor/* default */.A,Slider: Slider/* default */.A,Space: Space/* default */.A,Switch: Switch/* default */.A,Text: Text/* default */.A,TextArea: TextArea/* default */.A,Title: Title/* default */.A,VideoViewer: VideoViewer/* default */.A};/**
 * @name 通过组件type获取对应的组件实例
 * @param componentType 组件类型
 * @param componentMap 外部传入的组件map
 * @returns
 */const getComponent=(componentType,componentMap)=>{if(!componentType)return components_ErrorAlertWidget;return Reflect.get({...componentsMap,...componentMap},componentType)||components_ErrorAlertWidget;};

/***/ },

/***/ 81132
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Render: () => (/* reexport */ Render_Render),
  SortableContainer: () => (/* reexport */ SortableContainer/* default */.A),
  componentRender: () => (/* reexport */ componentRender/* default */.A),
  containerRender: () => (/* reexport */ containerRender/* default */.A),
  loopRender: () => (/* reexport */ loopRender/* default */.A),
  renderItem: () => (/* reexport */ renderItem/* default */.A)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/form/index.js + 19 modules
var es_form = __webpack_require__(81080);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/config-provider/index.js + 6 modules
var config_provider = __webpack_require__(46470);
// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/lodash.js
var lodash = __webpack_require__(46746);
// EXTERNAL MODULE: ./src/generator/Render/renderFn/loopRender.tsx
var loopRender = __webpack_require__(22153);
// EXTERNAL MODULE: ./src/generator/Render/utils/getWrapper.tsx
var getWrapper = __webpack_require__(3385);
// EXTERNAL MODULE: ./src/generator/Render/utils/integrateToSeparate.ts
var integrateToSeparate = __webpack_require__(46657);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./src/generator/Render/Render.tsx
/**
 * @name 渲染器
 * @param defaultValue 初始值
 * @param structureItems 表单的布局结构
 * @param componentList 组件配置列表
 * @param componentMap 自定义组件实例列表
 * @param onValuesChange 表单值改变时的回调
 * @param formOptions 表单组件props
 * @link formOptions参数详见 https://ant.design/components/form-cn/#Form
 */const Render=props=>{const{defaultValue={},componentMap={},formOptions,onChange,editorProps}=props;const[form]=es_form/* default */.A.useForm();const useComponentStructure=!(0,lodash.isEmpty)(props.structureItems);const componentItemState=(0,integrateToSeparate/* default */.A)(props.componentItems||[]);const componentItems=useComponentStructure?props.componentItems||[]:componentItemState.componentItems;const structureItems=useComponentStructure?props.structureItems||[]:componentItemState.structureItems;const onFormValuesChange=(changedValues,values)=>{onChange?.(changedValues,values,form);};const isEditor=!(0,lodash.isEmpty)(editorProps);const{Wrapper,wrapperProps}=(0,getWrapper/* default */.A)(isEditor?'editor':'play',{id:'root',children:structureItems});return/*#__PURE__*/(0,jsx_runtime.jsx)(config_provider/* default */.Ay,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.A,{form:form,layout:"vertical",onValuesChange:onFormValuesChange,style:{overflow:'hidden',padding:2},...formOptions,children:/*#__PURE__*/(0,jsx_runtime.jsx)(Wrapper,{...wrapperProps,children:(0,loopRender/* default */.A)({componentItems,structureItems,defaultValue,componentMap,editorProps})})})});};/* harmony default export */ const Render_Render = (Render);
// EXTERNAL MODULE: ./src/generator/Render/renderFn/componentRender.tsx
var componentRender = __webpack_require__(27526);
// EXTERNAL MODULE: ./src/generator/Render/renderFn/containerRender.tsx
var containerRender = __webpack_require__(55742);
// EXTERNAL MODULE: ./src/generator/Render/renderFn/renderItem.tsx + 1 modules
var renderItem = __webpack_require__(24115);
// EXTERNAL MODULE: ./src/generator/Render/SortableContainer/index.tsx
var SortableContainer = __webpack_require__(15308);
;// ./src/generator/Render/index.ts


/***/ },

/***/ 27526
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export editorStyled */
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81080);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46746);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63895);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86070);
const editorStyled='pointer-events-none';// 渲染组件
const componentRender=props=>{const{componentItem,componentMap={},defaultValue={},editorProps}=props;const{id='',type,showLabel,label}=componentItem||{};const Component=(0,_components__WEBPACK_IMPORTED_MODULE_2__/* .getComponent */ .QQ)(type,componentMap);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Item,{name:id,initialValue:defaultValue?.[id],...(0,lodash__WEBPACK_IMPORTED_MODULE_1__.omit)(componentItem,['styled','id','props','hidden','children','showLabel']),label:(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isNil)(showLabel)?label:showLabel?label:undefined,className:(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(editorProps)?'':editorStyled,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("style",{children:'.ant-form-item-label > label::after { display: inline-block; }'}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component,{...componentItem?.props})]},id);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentRender);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 55742
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generator_utils_isContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(710);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46746);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63895);
/* harmony import */ var _utils_getWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3385);
/* harmony import */ var _loopRender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22153);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86070);
// 渲染包含children的布局组件
const containerRender=props=>{const{componentItem,componentItems,structureItem,componentMap,defaultValue,editorProps}=props;const{id='',children}=structureItem||{};const{type,hidden}=componentItem||{};const isEditor=!(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(editorProps);if(isEditor&&!(0,_generator_utils_isContainer__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(id)||!children||hidden)return;const{Wrapper,wrapperProps}=(0,_utils_getWrapper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(isEditor?'editor':'play',structureItem,componentItem);const Component=(0,_components__WEBPACK_IMPORTED_MODULE_2__/* .getComponent */ .QQ)(type);return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Wrapper,{...wrapperProps,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Component,{...componentItem?.props,children:(0,_loopRender__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({componentItems,structureItems:children,defaultValue,componentMap,editorProps})},id)});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (containerRender);

/***/ },

/***/ 22153
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46746);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3385);
/* harmony import */ var _renderItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24115);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86070);
// 渲染组件列表参数
// 循环渲染页面
const loopRender=props=>{const{componentItems,structureItems,defaultValue,componentMap,editorProps}=props;const isEditor=!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(editorProps);const{Wrapper}=(0,_utils_getWrapper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(isEditor?'component':'play');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:structureItems?.map(structureItem=>{const{id}=structureItem||{};const wrapperProps=isEditor?{id,editorProps}:{};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Wrapper,{...wrapperProps,children:(0,_renderItem__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({componentItems,structureItem,defaultValue,componentMap,editorProps})},id);})});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loopRender);

/***/ },

/***/ 24115
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ renderFn_renderItem)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/lodash.js
var lodash = __webpack_require__(46746);
// EXTERNAL MODULE: ./src/generator/fieldConfig/index.ts
var fieldConfig = __webpack_require__(52618);
// NAMESPACE OBJECT (decoupled): ./src/generator/fieldConfig/index.ts
var fieldConfig_namespaceObject = {};
__webpack_require__.r(fieldConfig_namespaceObject);
__webpack_require__.d(fieldConfig_namespaceObject, {
  cascade: () => (fieldConfig.DJ),
  checkbox: () => (fieldConfig.kv),
  input: () => (fieldConfig.hF),
  inputNumber: () => (fieldConfig.wC),
  radio: () => (fieldConfig.Ow),
  select: () => (fieldConfig.Lt),
  space: () => (fieldConfig.xe),
  submitButton: () => (fieldConfig.RC),
  textarea: () => (fieldConfig.PC)
});

;// ./src/generator/Render/utils/getComponentItem.ts
/**
 * @name 通过id，找到对应的componentItem
 * @param componentConfig
 * @returns
 */const getComponentItem=(componentItems,id)=>{// eslint-disable-next-line import-x/namespace
return componentItems.find(item=>item.id===id)||fieldConfig_namespaceObject[id.split('-')[0]]?.componentItem;};/* harmony default export */ const utils_getComponentItem = (getComponentItem);
// EXTERNAL MODULE: ./src/generator/Render/renderFn/componentRender.tsx
var componentRender = __webpack_require__(27526);
// EXTERNAL MODULE: ./src/generator/Render/renderFn/containerRender.tsx
var containerRender = __webpack_require__(55742);
;// ./src/generator/Render/renderFn/renderItem.tsx
const renderItem=props=>{const{componentItems,structureItem,defaultValue={},componentMap,editorProps}=props;const{id='',children}=structureItem||{};const componentItem=utils_getComponentItem(componentItems,id);return (0,lodash.isEmpty)(children)?(0,componentRender/* default */.A)({componentItem,componentMap,defaultValue,editorProps}):(0,containerRender/* default */.A)({componentItem,componentItems,structureItem,componentMap,defaultValue,editorProps});};/* harmony default export */ const renderFn_renderItem = (renderItem);

/***/ },

/***/ 3385
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30758);
/* harmony import */ var _SortableContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15308);
/**
 * @name 通过type,返回对应的包装容器
 * @param componentConfig
 * @returns
 */const getWrapper=(type,structureItem,componentItem)=>{const{children}=structureItem||{};let strategy;const{props}=componentItem||{};switch(type){case'editor':{strategy=_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__/* .verticalListSortingStrategy */ ._G;// 需要根据容器组件的配置，设置不同的拖拽排序策略。垂直排序或水平排序。
if(componentItem?.type==='Space'&&props?.direction==='horizontal'){strategy=_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__/* .horizontalListSortingStrategy */ .m$;}return{Wrapper:_dnd_kit_sortable__WEBPACK_IMPORTED_MODULE_0__/* .SortableContext */ .gB,wrapperProps:{items:children,strategy}};}case'component':{return{Wrapper:_SortableContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A};}default:{return{Wrapper:react__WEBPACK_IMPORTED_MODULE_1__.Fragment};}}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWrapper);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 46657
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name 数据与布局结构分离
 * @param componentConfig
 * @returns
 */const integrateToSeparate=componentConfig=>{const componentItems=[];// 递归循环遍历json
const loopComponents=components=>{return components.map(component=>{const{id='',children}=component||{};if(children){componentItems.push({...component,children:undefined});return{id,children:loopComponents(children)};}componentItems.push({...component});return{id};});};return{structureItems:loopComponents(componentConfig),componentItems};};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (integrateToSeparate);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 17273
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  x: () => (/* reexport */ container_space)
});

;// ./src/generator/fieldConfig/container/space/config.ts
// 间隔配置项
const spaceConfig=()=>{return[{id:'direction',label:'排列方向',type:'Select',props:{placeholder:'请选择排列方向',options:[{label:'水平排列',value:'horizontal'},{label:'垂直排列',value:'vertical'}]}},{id:'align',label:'对齐方式',type:'Select',props:{placeholder:'请选择排列方向',options:[{label:'首部对齐',value:'start'},{label:'尾部对齐',value:'end'},{label:'居中对齐',value:'center'},{label:'基准线对齐',value:'baseline'}]}}];};
;// ./src/generator/fieldConfig/container/space/index.ts
const space={label:'间隔',componentItem:{id:'space',type:'Space',props:{direction:'horizontal',align:'start'}},configPanel:spaceConfig};/* harmony default export */ const container_space = (space);
;// ./src/generator/fieldConfig/container/index.ts


/***/ },

/***/ 79349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  R: () => (/* reexport */ submitButtons)
});

;// ./src/generator/fieldConfig/display/submitButtons/config.ts
// 提交按钮配置项
const submitButtonConfig=()=>{return[{id:'children',label:'按钮文案',type:'Input',props:{placeholder:'请输入文案'}}];};
;// ./src/generator/fieldConfig/display/submitButtons/index.tsx
// 提交按钮
const submitButton={label:'提交按钮',componentItem:{id:'submitButton',type:'Button',props:{type:'primary',children:'提交按钮',styled:{width:'100%'}}},configPanel:submitButtonConfig};/* harmony default export */ const submitButtons = (submitButton);
;// ./src/generator/fieldConfig/display/index.ts


/***/ },

/***/ 15300
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DJ: () => (/* reexport */ cascades),
  kv: () => (/* reexport */ form_checkbox),
  hF: () => (/* reexport */ form_input),
  wC: () => (/* reexport */ form_inputNumber),
  Ow: () => (/* reexport */ radios),
  Lt: () => (/* reexport */ form_select),
  PC: () => (/* reexport */ textArea)
});

;// ./src/generator/fieldConfig/commonConfig/baseConfig.ts
// 这这里对每个组件进行统一配置
/**
 * @name 标题配置
 */const labelConfig=()=>({id:'label',label:'标题',type:'Input',rules:[{required:true,message:'不能为空'}],props:{placeholder:'请输入标题'}});/**
 * @name 显示标题配置
 */const showLabelConfig=()=>({id:'showLabel',type:'Checkbox',label:'显示标题'});/**
 * @name 标题配置
 */const labelSpaceConfig=()=>({id:'LabelSpace',type:'Space',children:[labelConfig(),showLabelConfig()]});/**
 * @name 占位符配置
 */const placeholderConfig=()=>({id:'placeholder',label:'占位符',type:'Input',props:{placeholder:'请输入占位符'}});/**
 * @name 单选的选项配置
 */const radioOptionsConfig=()=>({id:'optionsConfig',label:'选项',type:'Options',props:{placeholder:'请选择',optionsConfig:{type:'Radio',options:[{label:'选项1',value:'选项1'},{label:'选项2',value:'选项2'},{label:'选项3',value:'选项3'}]}}});/**
 * @name 多选框的选项配置
 */const checkboxOptionsConfig=()=>({id:'optionsConfig',label:'选项',type:'Options',props:{placeholder:'请选择',optionsConfig:{type:'Checkbox',options:[{label:'选项1',value:'选项1'},{label:'选项2',value:'选项2'},{label:'选项3',value:'选项3'}]}}});/**
 * @name 是否实时显示字数
 */const showCountConfig=()=>({id:'showCount',label:'显示字数',type:'Switch',tooltip:'在输入时，实时显示输入的字数'});
;// ./src/generator/fieldConfig/form/cascades/config.ts
// 级联组件配置项
const cascadeConfig=()=>{return[labelSpaceConfig(),{id:'cascadeData',type:'TextArea',props:{placeholder:'可批量添加，以逗号分割，回车换行'}},{label:'级联层级',id:'level',type:'Select',props:{placeholder:'请选择层级。。。',options:[{label:'2',value:2},{label:'3',value:3},{label:'4',value:4}]}},{id:'showTextArea',type:'Checkbox',props:{suffix:'显示文本框'}},// 占位符配置
{label:'占位符',id:'placeholder',type:'InputGroup',props:{placeholders:Array(4).fill('').map((_item,index)=>`请输入第${index+1}级占位符。。。`),level:4}}];};
;// ./src/generator/fieldConfig/form/cascades/index.ts
// import { provinceCityAreaCascadeData } from './province-city-china';
const cascadeDataMock=[['北京市','东城区','东城区'],['北京市','西城区','西城区'],['北京市','朝阳区','朝阳区'],['北京市','丰台区','丰台区'],['北京市','石景山区','石景山区'],['北京市','海淀区','海淀区'],['北京市','门头沟区','门头沟区'],['北京市','房山区','房山区'],['北京市','通州区','通州区'],['北京市','顺义区','顺义区'],['北京市','昌平区','昌平区'],['北京市','大兴区','大兴区'],['北京市','怀柔区','怀柔区'],['北京市','平谷区','平谷区'],['北京市','密云区','密云区'],['北京市','延庆区','延庆区']];// 级联选择框
const cascade={label:'级联组件',componentItem:{id:'cascade',type:'Cascade',label:'级联组件',showLabel:true,props:{level:3,showTextArea:false,placeholders:['请选择...','请选择...','请选择...','请输入...'],cascadeData:cascadeDataMock,// cascadeData: provinceCityAreaCascadeData(),
selectOptions:{size:'large'},textAreaOptions:{size:'large'}}},configPanel:cascadeConfig};/* harmony default export */ const cascades = (cascade);
;// ./src/generator/fieldConfig/form/checkbox/config.ts
// 多选框组件配置项
const checkboxConfig=()=>{return[labelSpaceConfig(),{label:'选项',id:'optionsConfig',type:'Options',props:{optionsConfig:{type:'Checkbox',options:[{label:'选项1',value:'选项1'},{label:'选项2',value:'选项2'},{label:'选项3',value:'选项3'}]}}},{id:'Space',type:'Space',children:[{label:'最少选择几项',id:'min',type:'InputNumber',props:{placeholder:'用户最少选择几项'}},{label:'最多选择几项',id:'max',type:'InputNumber',props:{placeholder:'用户最多选择几项'}}]}];};
;// ./src/generator/fieldConfig/form/checkbox/index.ts
// 多选框
const checkbox_checkbox={label:'多选',componentItem:{id:'checkbox',type:'CheckboxGroup',label:'多选',showLabel:true,props:{size:'large',optionsConfig:checkboxOptionsConfig().props?.optionsConfig}},configPanel:checkboxConfig};/* harmony default export */ const form_checkbox = (checkbox_checkbox);
;// ./src/generator/fieldConfig/form/input/config.ts
// 输入框配置项
const inputConfig=()=>{return[labelSpaceConfig(),placeholderConfig(),showCountConfig()];};
;// ./src/generator/fieldConfig/form/input/index.ts
// 输入框
const input={label:'输入框',componentItem:{id:'input',type:'Input',showLabel:true,label:'输入框',props:{placeholder:'请输入单行文本',size:'large'}},configPanel:inputConfig};/* harmony default export */ const form_input = (input);
;// ./src/generator/fieldConfig/commonConfig/validateConfig.ts
// 通用校验配置
/**
 * @name 必填验证配置
 */const isRequiredConfig=()=>({id:'required',label:'必填',type:'Switch',tooltip:'设为必填后，必须填写该字段才能提交'});/**
 * @name 最小值配置
 */const minConfig=()=>({id:'min',label:'最小值',type:'InputNumber',tooltip:'用户输入的最小值不能超过此数值',props:{placeholder:'请输入最小值'}});/**
 * @name 最大值配置
 */const maxConfig=()=>({id:'max',label:'最大值',type:'InputNumber',tooltip:'用户输入的最大值不能超过此数字',props:{placeholder:'请输入最大值'}});/**
 * @name 精度配置
 */const precisionConfig=()=>({id:'precision',label:'最多几位小数',type:'InputNumber',props:{placeholder:'请输入小数位数'}});
;// ./src/generator/fieldConfig/form/inputNumber/config.ts
// 整数输入框配置项
const inputNumberConfig=()=>{return[labelSpaceConfig(),placeholderConfig(),{id:'Space',type:'Space',children:[minConfig(),maxConfig()]}];};
;// ./src/generator/fieldConfig/form/inputNumber/index.ts
// 数字输入框
const inputNumber={label:'数字输入框',componentItem:{id:'inputNumber',type:'InputNumber',label:'数字输入框',showLabel:true,props:{placeholder:'请输入数字',size:'large'}},configPanel:inputNumberConfig};/* harmony default export */ const form_inputNumber = (inputNumber);
;// ./src/generator/fieldConfig/form/radios/config.ts
// 单选组件配置项
const radioConfig=()=>{return[labelSpaceConfig(),{label:'选项',id:'optionsConfig',type:'Options',props:{placeholder:'请选择',optionsConfig:{type:'Radio',defaultValue:'',options:[{label:'选项1',value:'选项1'},{label:'选项2',value:'选项2'},{label:'选项3',value:'选项3'}]}}}];};
;// ./src/generator/fieldConfig/form/radios/index.ts
// 单选
const radios_radio={label:'单选',componentItem:{id:'radio',type:'RadioGroup',label:'单选',showLabel:true,props:{size:'large',optionsConfig:radioOptionsConfig().props?.optionsConfig}},configPanel:radioConfig};/* harmony default export */ const radios = (radios_radio);
;// ./src/generator/fieldConfig/form/select/config.ts
// 下拉框组件配置项
const selectConfig=()=>{return[labelSpaceConfig(),placeholderConfig(),{label:'选项',id:'optionsConfig',type:'Options',props:{placeholder:'请选择',optionsConfig:{type:'Radio',defaultValue:'',options:[{label:'选项1',value:'选项1'},{label:'选项2',value:'选项2'},{label:'选项3',value:'选项3'}]}}}];};
;// ./src/generator/fieldConfig/form/select/index.ts
// 下拉框
const select_select={label:'下拉框',componentItem:{id:'select',type:'Select',label:'下拉框',showLabel:true,props:{size:'large',placeholder:'请选择...',options:radioOptionsConfig().props?.optionsConfig?.options}},configPanel:selectConfig};/* harmony default export */ const form_select = (select_select);
;// ./src/generator/fieldConfig/form/textArea/index.tsx
// 文本框
const textArea_textarea={label:'文本框',componentItem:{id:'textarea',type:'TextArea',label:'文本框',showLabel:true,props:{placeholder:'请输入文本'}},configPanel:inputConfig};/* harmony default export */ const textArea = (textArea_textarea);
;// ./src/generator/fieldConfig/form/index.ts


/***/ },

/***/ 52618
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DJ: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.DJ),
/* harmony export */   Lt: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.Lt),
/* harmony export */   Ow: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.Ow),
/* harmony export */   PC: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.PC),
/* harmony export */   RC: () => (/* reexport safe */ _display__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   hF: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.hF),
/* harmony export */   kv: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.kv),
/* harmony export */   wC: () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.wC),
/* harmony export */   xe: () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17273);
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79349);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15300);
// 展示组件
// 所有字段组件都在此文件目录下
// 所有涉及到具体某个字段的操作相关的代码，都集中到此目录下的文件中，统一管理
// 这里的组件配置项，配置的都是初始值

/***/ },

/***/ 28058
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ ConfigType)
/* harmony export */ });
/**
 * @name component组件参数的类型
 * @description 传入组件内部的参数变量类型,这里只列出新增的自定义类型
 */// 组件item中可配置的字段类型
class ConfigType{}/**
 * @name component对象的类型
 */// 结构对象类型
// 外部传入的组件对象类型
// 字段配置默认类型，这里的类型用作左侧组件列表展示

/***/ },

/***/ 710
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _fieldConfig_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17273);
var _fieldConfig_container__WEBPACK_IMPORTED_MODULE_0___namespace_object = {};
__webpack_require__.r(_fieldConfig_container__WEBPACK_IMPORTED_MODULE_0___namespace_object);
__webpack_require__.d(_fieldConfig_container__WEBPACK_IMPORTED_MODULE_0___namespace_object, {
	space: () => (_fieldConfig_container__WEBPACK_IMPORTED_MODULE_0__.x)
});
// 容器组件列表
const containerList=Object.keys(_fieldConfig_container__WEBPACK_IMPORTED_MODULE_0___namespace_object);/**
 * @name 判断当前组件是否是容器组件
 */const isContainer=id=>containerList.includes(id.split('-')[0]);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isContainer);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 54856
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// 支持的可返回的数据类型
/**
 * @name getType
 * @description 获取数据类型
 * @param {any} data 需要判断类型的数据
 * @return {string} 返回对应的类型 `Array`、`Boolean`、`Date`、`Error`、`Function`、`Map`、`Null`、`Number`、`RegExp`、`Set`、`String`、`Symbol`、`Undefined`、`Arguments`
 * @example <caption>ts类型</caption>
getType(value:any)
 * @example <caption>demo</caption>
import { getType } from '@zpcscc/utils';

console.log(getType([]));               // 'Array';
console.log(getType(true));             // 'Boolean';
console.log(getType(new Date()));       // 'Date';
console.log(getType(new Error()));      // 'Error';
console.log(getType(()=>{}));           // 'Function';
console.log(getType(new Map()));        // 'Map';
console.log(getType(null));             // 'Null';
console.log(getType(123));              // 'Number';
console.log(getType(/[hello]/g));       // 'RegExp';
console.log(getType(new Set()));        // 'Set';
console.log(getType(Symbol.iterator));  // 'Symbol';
console.log(getType('字符串'));          // 'String';
console.log(getType(undefined));        // 'Undefined';

function () {
  console.log(getType(arguments));      // 'Arguments';
}
 */const getType=data=>{return Object.prototype.toString.call(data).slice(8,-1);};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getType);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 28831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
// 生成4个随机字符串
const s4=()=>{return Math.floor((1+Math.random())*0x10000).toString(16).slice(1);};/**
 * @name getUuId
 * @description 生成全局唯一ID
 * @param {number} length=4 随机id的长度，不包含自定义前缀
 * @param {string} prefix='' 指定id的前缀
 * @returns {string} 返回一个唯一ID
 * @example <caption>ts类型</caption>
getUuId(prefix?:string);
 * @example <caption>demo</caption>
import { getUuId } from '@zpcscc/utils';

console.log(getUuId()); //  '32f4';
console.log(getUuId(2)); //  'b0';
console.log(getUuId(6)); //  '3e964a';
console.log(getUuId(2,'test_')); //  'test_db';
console.log(getUuId(5,'test_')); //  'test_7ad22';
 */const getUuId=(length,prefix='')=>{let len=length||4;if(!((0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(length)==='Number'))len=4;let count=Math.ceil(len/4);if(!length)return s4();let id='';while(count--){id=id+s4();}return`${prefix}${id.slice(0,len)}`;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUuId);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 70625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
/* harmony import */ var _isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46281);
/**
 * @name isEmpty
 * @description 判断数据是否为空
 * @param {any} value 需要检查的数据
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isEmpty(value: any);
 * @example <caption>demo</caption>
import { isEmpty } from '@zpcscc/utils';

console.log(isEmpty()); // true
console.log(isEmpty('')); // true
console.log(isEmpty(null)); // true
console.log(isEmpty(undefined)); // true
console.log(isEmpty(void 0)); // true
console.log(isEmpty(Number.NaN); // true
console.log(isEmpty(123); // false
console.log(isEmpty('123'); // false
console.log(isEmpty({}); // true
console.log(isEmpty([]); // true
console.log(isEmpty({a:1}); // false
console.log(isEmpty([1,2,3]); // false
console.log(isEmpty(new Map([[1,2],[3,4]])); // false
console.log(isEmpty(new Set([1,2,3])); // false
 */const isEmpty=value=>{if(value===null||value===undefined)return true;if((0,_isNumber__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value))return false;if(Array.isArray(value)||typeof value==='string'||typeof value.splice==='function'||(0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)==='Arguments'){return value.length===0;}const tag=(0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value);if(tag==='Map'||tag==='Set'){return value.size===0;}for(const key in value){/* istanbul ignore next */if(Object.prototype.hasOwnProperty.call(value,key)){return false;}}return true;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isEmpty);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 46281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
/**
 * @name isNumber
 * @description 检查“value”是否是有效“Number“;排除 Infinity、-Infinity、MAX_VALUE、MIN_VALUE、NaN、
 * @param {any} value 要判断的值
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isNumber(value: any);
 * @example <caption>demo</caption>
import { isNumber } from '@zpcscc/utils';

console.log(isNumber()); // false
console.log(isNumber('')); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
console.log(isNumber(void 0)); // false
console.log(isNumber(Number.NaN); // false
console.log(isNumber(Number.POSITIVE_INFINITY); // false
console.log(isNumber(Number.NEGATIVE_INFINITY); // false
console.log(isNumber(1233); // true
console.log(isNumber(1233.345); // true
console.log(isNumber(0); // true
 */const isNumber=value=>{if(Number.isNaN(value)||value===Number.POSITIVE_INFINITY||value===Number.NEGATIVE_INFINITY||value===Number.MAX_VALUE||value===Number.MIN_VALUE){return false;}return typeof value==='number'||(0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)==='Number';};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNumber);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 34167
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony exports binaryStrictRegExp, octalStrictRegExp */
// ** 一些正则校验的规则
// 匹配所有数字
const digitRegExp=/-?\d+\.?\d+/;// 整数
const integerRegExp=/-?\d+/;// 正整数
const integerPlusRegExp=/\d+/;// 负整数
const integerMinusRegExp=/-\d+/;// 小数
const decimalRegExp=/-?\d+\.\d+/;// 正小数
const decimalPlusRegExp=/\d+\.\d+/;// 负小数
const decimalMinusRegExp=/-\d+\.\d+/;// 空格
const trimRegExp=/\s+/;// ** 以下是严格匹配的正则。规定了起止符。不建议在match中使用
// 整数严格匹配
const integerStrictRegExp=/(^-?[1-9](\d*)$|^-?\d$)/;// 邮箱严格匹配
const emailStrictRegExp=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;// 身份证严格匹配
const IDCardStrictRegExp=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0-2|]\d)|3[01])\d{3}(\d|X)$/;// 手机号严格匹配
const phoneNumberStrictRegExp=/^1(3\d|4[014-9]|5[0-35-9]|6[25-7]|7[0-8]|8\d|9[0-35-9])\d{8}$/;// url链接严格匹配
const urlStrictRegExp=/^(http|https|ftp|file):\/\/([\w.]+\/?)\S*/;// 二进制
const binaryStrictRegExp=/^0b[01]+$/;// 八进制
const octalStrictRegExp=/^0o[0-7]+$/;
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "F6", 0, /* binding */ decimalMinusRegExp,
/* harmony export */   "GD", 0, /* binding */ integerMinusRegExp,
/* harmony export */   "Rm", 0, /* binding */ decimalRegExp,
/* harmony export */   "Uh", 0, /* binding */ integerPlusRegExp,
/* harmony export */   "Vs", 0, /* binding */ integerStrictRegExp,
/* harmony export */   "XR", 0, /* binding */ decimalPlusRegExp,
/* harmony export */   "_3", 0, /* binding */ urlStrictRegExp,
/* harmony export */   "cQ", 0, /* binding */ phoneNumberStrictRegExp,
/* harmony export */   "d7", 0, /* binding */ emailStrictRegExp,
/* harmony export */   "kt", 0, /* binding */ trimRegExp,
/* harmony export */   "ns", 0, /* binding */ digitRegExp,
/* harmony export */   "oV", 0, /* binding */ integerRegExp,
/* harmony export */   "oW", 0, /* binding */ IDCardStrictRegExp
/* harmony export */ ]);


/***/ },

/***/ 77687
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @name toAbsolutePath
 * @description 相对路径转绝对路径
 * @param {string} url 相对路径url
 * @return {string} 返回绝对路径url
 * @example <caption>ts类型</caption>
toAbsolutePath(data:string)
 * @example <caption>demo</caption>
import { toAbsolutePath } from '@zpcscc/utils';

console.log(toAbsolutePath('/img/logo.png')); // https://zpcscc.top/img/logo.png
 */const toAbsolutePath=url=>{const a=document.createElement('a');a.href=url;return a.href;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toAbsolutePath);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 25621
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * @name toData
 * @description 将string转为json等数据
 * @param {string} str 需要转换的字符串
 * @param {Object} parseArgs 其他参数，用于传入JSON.parse
 * @returns {any} 返回对应格式的数据
 * @example <caption>ts类型</caption>
toData(str:string, parseArgs?:any);
 * @example <caption>demo</caption>
import { toData } from '@zpcscc/utils';

console.log(toData('1')); // 1
console.log(toData('true')); // true
console.log(toData('{}')); // {}
console.log(toData('[]')); // []
console.log(toData('null')); // null
console.log(toData('undefined')); // undefined
 */// 字符串类型的数据转成真正对应格式的数据
const toData=(str,...parseArgs)=>{if(typeof str!=='string')return str;if(str==='')return'';if(str==='true')return true;if(str==='false')return false;const value=Number(str);if(!Number.isNaN(value))return value;try{return JSON.parse(str,...parseArgs);}catch{return str;}};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toData);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54856);
/**
 * @name toString
 * @description 将各种格式的数据转为string
 * @param {any} data 需要转换的数据
 * @param {object} stringifyArgs 其他参数，用于传入JSON.stringify
 * @returns {string} 转换后的字符串数据
 * @example <caption>ts类型</caption>
toString(data:any, stringifyArgs?:any);
 * @example <caption>demo</caption>
import { toString } from '@zpcscc/utils';

console.log(toString(true)); // 'true'
console.log(toString(null)); // ''
console.log(toString()); // ''
console.log(toString(undefined)); // ''
console.log(toString(0)); // '0'
console.log(toString(-0)); // '-0'
console.log(toString(123)); // '123'
console.log(toString(() => {})); // '()=>{}'
console.log(toString([])); // '[]'
console.log(toString({})); // '{}'
console.log(toString(Symbol(1))); // 'Symbol(1)'

// stringifyArgs参数, 相当于，JSON.stringify([1,2,3], null, 2));
console.log(toString([1,2,3], null, 2));
// `[
//   1,
//   2,
//   3
// ]`

// 部分数据因为赋值给函数时，已被浏览器自动调整，故无法完整原样转为字符串。
console.log(toString(Symbol.iterator)); // 'Symbol(Symbol.iterator)'
console.log(toString(Number.POSITIVE_INFINITY)); // 'Infinity'
console.log(toString(Number.NEGATIVE_INFINITY)); // '-Infinity'
console.log(toString(Number.MIN_VALUE)); // '5e-324'
 */const toString=(data,...stringifyArgs)=>{if(data===null)return'';if(data===undefined)return'';if(typeof data==='string')return data;let str='';if(typeof data==='number'||typeof data==='boolean'){str=`${data}`;}else if((0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data)==='Symbol'){str=data.toString();}else if(Array.isArray(data)||(0,_getType__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(data)==='Object'){str=JSON.stringify(data,...stringifyArgs);}else{str=String(data);}if(`${str}`==='0'&&1/data===Number.NEGATIVE_INFINITY){str='-0';}return str;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toString);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 31102
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ utils_validate),
  validateTypeList: () => (/* binding */ validateTypeList)
});

;// ./src/utils/validate/validateDate.ts
/**
 * @name 验证日期
 * @param {string | Date} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */const validateDate=data=>{return!Number.isNaN(new Date(data).valueOf());};/* harmony default export */ const validate_validateDate = (validateDate);
// EXTERNAL MODULE: ./src/utils/regular.ts
var regular = __webpack_require__(34167);
// EXTERNAL MODULE: ./src/utils/toString/index.ts
var utils_toString = __webpack_require__(7772);
;// ./src/utils/validate/validateEmail.ts
/**
 * @name 验证邮箱
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */const validateEmail=data=>{return regular/* emailStrictRegExp */.d7.test((0,utils_toString/* default */.A)(data));};/* harmony default export */ const validate_validateEmail = (validateEmail);
;// ./src/utils/validate/validateIDCard.ts
/**
 * @name 验证身份证
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */const validateIDCard=data=>{return regular/* IDCardStrictRegExp */.oW.test((0,utils_toString/* default */.A)(data));};/* harmony default export */ const validate_validateIDCard = (validateIDCard);
;// ./src/utils/validate/validateInteger.ts
/**
 * @name 验证整数
 * @param {number} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */const validateInteger=data=>{return regular/* integerStrictRegExp */.Vs.test((0,utils_toString/* default */.A)(data));};/* harmony default export */ const validate_validateInteger = (validateInteger);
;// ./src/utils/validate/validatePhone.ts
/**
 * @name 验证手机号
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */const validatePhone=data=>{return regular/* phoneNumberStrictRegExp */.cQ.test((0,utils_toString/* default */.A)(data));};/* harmony default export */ const validate_validatePhone = (validatePhone);
;// ./src/utils/validate/validateUrl.ts
/**
 * @name 验证Url链接
 * @param {string} data 需要校验数据
 * @return {boolean} 返回校验的结果
 */const validateUrl=data=>{return regular/* urlStrictRegExp */._3.test((0,utils_toString/* default */.A)(data));};/* harmony default export */ const validate_validateUrl = (validateUrl);
;// ./src/utils/validate/index.ts
const validateTypeList={date:'日期',email:'邮箱',IDCard:'身份证',integer:'整数',phone:'电话',url:'链接'};// 可校验的数据类型
/**
 * @name validate
 * @description 数据校验
 * @param {any} data 需要校验的数据
 * @param {ValidateType} type 需要校验的类型 'phone' | 'email' | 'url' | 'IDCard' | 'date' ｜ 'integer'
 * @return {boolean} 返回校验的结果, 默认返回 false
 * @example <caption>ts类型</caption>
type ValidateType = 'phone' | 'email' | 'url' | 'IDCard' | 'date' ｜ 'integer';
validate(data:any, type:ValidateType)
 * @example <caption>demo</caption>
import { validate } from '@zpcscc/utils';
import type { ValidateType } from '@zpcscc/utils';

console.log(validate('17773827673', 'phone')); // true
console.log(validate('123', 'integer')); // true
console.log(validate('110101199003072412', 'IDCard')); // true
console.log(validate('2023-04-01', 'date')); // true
console.log(validate('zpcscc@gmail.com', 'email')); // true
console.log(validate('https://zpcscc.top', 'url')); // true
 */const validate=(data,type)=>{switch(type){case'date':{return validate_validateDate(data);}case'email':{return validate_validateEmail(data);}case'IDCard':{return validate_validateIDCard(data);}case'integer':{return validate_validateInteger(data);}case'phone':{return validate_validatePhone(data);}case'url':{return validate_validateUrl(data);}default:{return false;}}};/* harmony default export */ const utils_validate = (validate);

/***/ },

/***/ 66205
(module, __unused_webpack_exports, __webpack_require__) {

const map = {
	"./AtlanticNight.json": [
		50574,
		[
			574
		]
	],
	"./BrillianceBlack.json": [
		39820,
		[
			9820
		]
	],
	"./OneDarkPro.json": [
		19003,
		[
			1384
		]
	]
};
function webpackAsyncContext(req) {
	try {
		if(!__webpack_require__.o(map, req)) {
			return Promise.resolve().then(() => {
	const e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
});
		}
	} catch(err) {
		return Promise.reject(err);
	}

	const ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1][0]).then(() => (__webpack_require__.t(id, 3 | 16)));
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 66205;
module.exports = webpackAsyncContext;

/***/ },

/***/ 54357
() {

/* (ignored) */

/***/ }

}]);