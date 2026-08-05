"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[1851],{

/***/ 88008
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* empty/unused harmony star reexport */
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39806);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 11851
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_walkSplit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5975);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88008);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44417);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85223);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71763);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91987);
const WalkSplit=()=>{const[input,setInput]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('1.2.3-alpha.5');const[split,setSplit]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('.,-');const[result,setResult]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');const[iterator,setIterator]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();const onInputChange=e=>{setInput(e.target.value);};const onSplitChange=e=>{setSplit(e.target.value);};const onInitGenerator=()=>{setIterator((0,_utils_walkSplit__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(input,split.split(',')));};const onClick=()=>{setResult(iterator?.next().value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{wrap:true,orientation:"vertical",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{style:{width:'300px'},addonBefore:"\u9700\u8981\u62C6\u5206\u7684\u5B57\u7B26\u4E32",defaultValue:input,onChange:onInputChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{style:{width:'300px'},addonBefore:"\u7EC8\u6B62\u7B26\uFF0C\u7528\u82F1\u6587\u9017\u53F7\u5206\u9694\u7EC8\u6B62\u7B26",defaultValue:split,onChange:onSplitChange})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{type:"primary",onClick:onInitGenerator,children:"\u751F\u6210\u8FED\u4EE3\u5668"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{type:"primary",onClick:onClick,children:"\u4E0B\u4E00\u6B65"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{style:{width:'300px'},value:result})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalkSplit);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 5975
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/**
 * @name walkSplit
 * @description 这是一个逐步拆分字符串的生成器。可以生成一个迭代器。每次调用 next，会返回当前步骤拆分的字符串内容
 * @param {string} str 需要拆分的字符串数据
 * @param {string[]} terminals 拆分的终止符数组
 * @return {iterator} 返回一个迭代器。可使用.next()，获取下一步的数据
 * @example <caption>ts类型</caption>
walkSplit(data:string,terminals:string[]);
 * @example <caption>demo</caption>
import { walkSplit } from '@zpcscc/utils';

// 生成一个拆分版本号的迭代器
const iterator = walkSplit('1.2.3-alpha.5', ['.', '-']);
// 每次调用next,可以获取下一步拆分出来的数据。
console.log(iterator.next()); // { done: false, value: '1' }
console.log(iterator.next()); // { done: false, value: '2' }
console.log(iterator.next()); // { done: false, value: '3' }
console.log(iterator.next()); // { done: false, value: 'alpha' }
console.log(iterator.next()); // { done: false, value: '5' }
console.log(iterator.next()); // { done: true, value: undefined }

// 也可以使用 for of 遍历迭代器获取 value
for (const item of iterator) {
  console.log(item); // 依次打印 1 2 3 alpha 5
}
 */const walkSplit=function*(str,terminals){// 迭代器，拆分版本号;
let part='';for(const element of str){if(terminals.includes(element)){// 终结符
yield part;part='';}else{part+=element;}}yield part;};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (walkSplit);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ }

}]);