"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[8585],{

/***/ 98585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ QuillEditor_QuillEditor)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/quill@2.0.3/node_modules/quill/quill.js + 205 modules
var quill_quill = __webpack_require__(16852);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./src/components/QuillEditor/index.tsx
/**
 * @name 富文本编辑器
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://quilljs.com/docs/quickstart
 */const QuillEditor=props=>{const{value,options={},onChange,onReady}=props||{};const quillRef=(0,react.useRef)(null);const containerRef=(0,react.useRef)(null);const defaultValueRef=(0,react.useRef)(value??'');const onTextChangeRef=(0,react.useRef)(onChange);// const onSelectionChangeRef = useRef(onSelectionChange);
const defaultOptions={theme:'snow',// 或 'bubble'
placeholder:'Hello, World!',modules:{toolbar:[[{header:1},{header:2},{header:3},{header:4},{header:5},{header:6}],// 标题大小 [{ header: [1, 2, 3, 4, 5, 6] }]
['bold','italic','underline','strike',{color:[]},{background:[]}],// 加粗，倾斜，下划线，中划线，文字颜色，文字背景颜色
[{list:'ordered'},{list:'bullet'},{list:'check'}],// 有序列表，无需列表，可勾选列表
[{align:[]},{indent:'-1'},{indent:'+1'},{direction:'rtl'}],// 对齐方式 减小缩进，增加缩进，文本排列方式
['link','image','video'],// 超链接，图片，视频，
['formula',{script:'sub'},{script:'super'}],// 数学公式，下标，上标
['blockquote','code-block','clean'],// 引用，代码块，删除选中文本的格式
[{size:[]},{font:[]}]// 文字大小，字体
]},...options};(0,react.useLayoutEffect)(()=>{onTextChangeRef.current=onChange;// onSelectionChangeRef.current = onSelectionChange;
});(0,react.useEffect)(()=>{if(containerRef.current){const quill=new quill_quill/* default */.Ay(containerRef.current,defaultOptions);// 将quill实例暴露出去。供外部使用；
onReady?.(quill);quillRef.current=quill;// 设置初始值
if(defaultValueRef.current){quill.clipboard.dangerouslyPasteHTML(0,defaultValueRef.current);// quill.setText(defaultValueRef.current);
// quill.setContents(defaultValueRef.current);
}// 监听内容更改
quill.on(quill_quill/* default */.Ay.events.TEXT_CHANGE,(...args)=>{onTextChangeRef.current?.(quillRef.current?.root.innerHTML??'',...args);});// quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
//   onSelectionChangeRef.current?.(...args);
// });
}return()=>{// 清空编辑器；
quillRef.current=null;if(containerRef.current){containerRef.current.innerHTML='';}};},[quillRef]);return/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"w-full flex flex-col [&_.ql-container]:flex-1",children:/*#__PURE__*/(0,jsx_runtime.jsx)("div",{ref:containerRef})});};/* harmony default export */ const components_QuillEditor = (QuillEditor);
// EXTERNAL MODULE: ./src/components/ResultTextarea/index.tsx
var ResultTextarea = __webpack_require__(91864);
// EXTERNAL MODULE: ./src/components/Space/index.tsx
var Space = __webpack_require__(12361);
;// ./docs-components/QuillEditor/QuillEditor.tsx
const App=()=>{const defaultValue='<p>Hello World!</p>';const[value,setValue]=(0,react.useState)(defaultValue);const options={theme:'snow',// 或 'bubble'
placeholder:'Hello, World!',modules:{toolbar:[[{header:1},{header:2},{header:3},{header:4},{header:5},{header:6}],// 标题大小 [{ header: [1, 2, 3, 4, 5, 6] }]
['bold','italic','underline','strike',{color:[]},{background:[]}],// 加粗，倾斜，下划线，中划线，文字颜色，文字背景颜色
[{list:'ordered'},{list:'bullet'},{list:'check'}],// 有序列表，无需列表，可勾选列表
[{align:[]},{indent:'-1'},{indent:'+1'},{direction:'rtl'}],// 对齐方式 减小缩进，增加缩进，文本排列方式
['link','image','video'],// 超链接，图片，视频，
['formula',{script:'sub'},{script:'super'}],// 数学公式，下标，上标
['blockquote','code-block','clean'],// 引用，代码块，删除选中文本的格式
[{size:[]},{font:[]}]// 文字大小，字体
]}};const onChange=value=>{setValue(value);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(Space/* default */.A,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(components_QuillEditor,{value:value,options:options,onChange:onChange}),/*#__PURE__*/(0,jsx_runtime.jsx)(ResultTextarea/* default */.A,{value:value})]});};/* harmony default export */ const QuillEditor_QuillEditor = (App);

/***/ },

/***/ 91864
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12361);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73112);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3987);
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34516);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91987);
/**
 * @name 结果文本域，用于展示组件返回的值
 */const ResultTextarea=props=>{const{value,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{orientation:"vertical",...rest,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:"onChange\u8FD4\u56DE\u7684\u7ED3\u679C"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:"w-300px",value:(0,_utils_toString__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultTextarea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 12361
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85223);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91987);
/**
 * @name Space 间距
 * @link 其他参数详见 https://ant-design.antgroup.com/components/space-cn
 */const Space=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{className:"w-full",...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 73112
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73001);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91987);
/**
 * @name 文本展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */const Text=props=>{const{children,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(antd__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Text,{...rest,children:children});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 3987
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91987);
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

/***/ 42416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 34516
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42416);
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


/***/ }

}]);