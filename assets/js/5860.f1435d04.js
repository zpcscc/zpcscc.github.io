(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[5860],{

/***/ 57133
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ crypto_base64)
});

// EXTERNAL MODULE: ./src/utils/toData/index.ts
var toData = __webpack_require__(25621);
// EXTERNAL MODULE: ./src/utils/toString/index.ts
var utils_toString = __webpack_require__(7772);
// EXTERNAL MODULE: ./node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/enc-base64.js
var enc_base64 = __webpack_require__(76953);
var enc_base64_default = /*#__PURE__*/__webpack_require__.n(enc_base64);
// EXTERNAL MODULE: ./node_modules/.pnpm/crypto-js@4.2.0/node_modules/crypto-js/enc-utf8.js
var enc_utf8 = __webpack_require__(95345);
var enc_utf8_default = /*#__PURE__*/__webpack_require__.n(enc_utf8);
;// ./src/thirdparty/crypto/cryptoBase64.ts
/**
 * @name base64加密
 * @param {any} data 需要加密的数据
 * @returns {string} 加密后的数据
 */const encrypt=data=>{const dataStr=(0,utils_toString/* default */.A)(data);return enc_base64_default().stringify(enc_utf8_default().parse(dataStr));};/**
 * @name base64解密
 * @param {any} base64 需要解密的数据
 * @returns {string} 解密后的数据
 */const decrypt=base64=>{let decryptValue='';try{decryptValue=enc_base64_default().parse(base64).toString((enc_utf8_default()));}catch{decryptValue='格式错误';}return (0,toData/* default */.A)(decryptValue);};const cryptoBase64={encrypt,decrypt};/* harmony default export */ const crypto_cryptoBase64 = (cryptoBase64);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/RightOutlined.js
var RightOutlined = __webpack_require__(68735);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@6.3.2_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@ant-design/icons/es/icons/LeftOutlined.js
var LeftOutlined = __webpack_require__(22604);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(29855);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 9 modules
var input = __webpack_require__(31986);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(94784);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./docs-thirdparty/crypto/crypto-base64.tsx
const Base64=()=>{// 待加密数据
const[encryptValue,setEncryptValue]=(0,react.useState)('');// 待解密数据
const[decryptValue,setDecryptValue]=(0,react.useState)('');// 加密
const onEncrypt=()=>{setDecryptValue(crypto_cryptoBase64.encrypt(encryptValue));};// 解密
const onDecrypt=()=>{setEncryptValue(crypto_cryptoBase64.decrypt(decryptValue));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{wrap:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A.TextArea,{rows:5,style:{width:'300px'},value:(0,utils_toString/* default */.A)(encryptValue),onChange:e=>setEncryptValue(e.target.value)}),/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{orientation:"vertical",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",onClick:onEncrypt,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(RightOutlined/* default */.A,{}),children:"\u52A0\u5BC6"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",onClick:onDecrypt,icon:/*#__PURE__*/(0,jsx_runtime.jsx)(LeftOutlined/* default */.A,{}),children:"\u89E3\u5BC6"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A.TextArea,{rows:5,style:{width:'300px'},value:(0,utils_toString/* default */.A)(decryptValue),onChange:e=>setDecryptValue(e.target.value)})]});};/* harmony default export */ const crypto_base64 = (Base64);

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

/***/ 95345
(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(81126));
	}
	else // removed by dead control flow
{}
}(this, function (CryptoJS) {

	return CryptoJS.enc.Utf8;

}));

/***/ },

/***/ 73936
() {

/* (ignored) */

/***/ }

}]);