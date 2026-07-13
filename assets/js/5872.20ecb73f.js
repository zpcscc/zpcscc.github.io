(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[1102,5872],{

/***/ 754
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40101);
/* harmony import */ var _components_Space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48593);
/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26875);
/* harmony import */ var _components_VideoViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8232);
/* harmony import */ var _utils_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31102);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13186);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86070);
const App=()=>{const[videoUrl,setVideoUrl]=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('https://vjs.zencdn.net/v/oceans.mp4');const[urlText,setUrlText]=(0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_components_Space__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{style:{marginBottom:'10px'},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_TextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{className:"w-400px",rows:3,placeholder:'请输入video链接',value:urlText,onChange:setUrlText}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,{type:"primary",onClick:()=>{if((0,_utils_validate__WEBPACK_IMPORTED_MODULE_4__["default"])(urlText,'url')){setVideoUrl(urlText);}else{antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Ay.error('请输入正确的video链接');}},children:"\u9884\u89C8"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_VideoViewer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{url:videoUrl})]});};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "default", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
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

/***/ 54357
() {

/* (ignored) */

/***/ }

}]);