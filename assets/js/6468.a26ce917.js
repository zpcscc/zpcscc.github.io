"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[6468],{

/***/ 96468
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ResultTextarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92208);
/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48593);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26875);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
const App=()=>{const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('这是输入框');const onChange=value=>{setValue(value);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{size:100,align:"end",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{value:value,placeholder:'请输入内容',onChange:onChange}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ResultTextarea__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{value:value})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 92208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48593);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31968);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26875);
/* harmony import */ var _utils_toString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7772);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86070);
/**
 * @name 结果文本域，用于展示组件返回的值
 */const ResultTextarea=props=>{const{value,...rest}=props;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{orientation:"vertical",...rest,children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Text__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{children:"onChange\u8FD4\u56DE\u7684\u7ED3\u679C"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:"w-300px",value:(0,_utils_toString__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(value)})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultTextarea);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 48593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 31968
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 54856
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

/***/ 7772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }

}]);