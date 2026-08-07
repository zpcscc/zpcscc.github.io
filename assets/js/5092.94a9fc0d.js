"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[5092],{

/***/ 55092
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DesensitizeList: () => (/* binding */ DesensitizeList),
  "default": () => (/* binding */ utils_desensitize)
});

// EXTERNAL MODULE: ./src/utils/toString/index.ts
var utils_toString = __webpack_require__(34516);
;// ./src/utils/desensitize/desensitizeBankCard.ts
/**
 * @name 对银行卡号进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */const desensitizeBankCard=strValue=>{const strLength=strValue.length;const strArr=[...strValue];// 去除空格和-的，纯数字的长度；
const numLength=strValue.replaceAll(/[\s-]/g,'').length;return strArr.map((item,index)=>{// 空格与-统一显示为空格
if(item===' '||item==='-')return' ';const shieldNum=numLength<16?1:3;if(index<=shieldNum||index>=strLength-shieldNum-1){// 前几位与后几位正常显示
return item;}// 其他字段全部屏蔽
return'*';}).join('');};/* harmony default export */ const desensitize_desensitizeBankCard = (desensitizeBankCard);
;// ./src/utils/copyStrByNum/index.ts
/**
 * @name copyStrByNum
 * @description 将指定字符串复制指定次数并使用传入的拼接符号拼接在一起
 * @param {string} str 待复制的字符串
 * @param {number} num=1 复制的次数
 * @param {number} interval 用于拼接字符串的符号
 * @returns {string} 复制拼接后的字符串
 * @example <caption>ts类型</caption>
copyStrByNum(data:string, num?:number,interval?:string)
 * @example <caption>demo</caption>
import { copyStrByNum } from '@zpcscc/utils';

console.log(copyStrByNum('*', 5)); // *****
console.log(copyStrByNum('张三', 3)); // 张三张三张三
console.log(copyStrByNum('李四', 4, '-')); // 李四-李四-李四-李四
console.log(copyStrByNum('Name')); // Name
 */const copyStrByNum=(str,num=1,interval='')=>{return new Array(num).fill((0,utils_toString/* default */.A)(str)).join((0,utils_toString/* default */.A)(interval));};/* harmony default export */ const utils_copyStrByNum = (copyStrByNum);
;// ./src/utils/desensitize/desensitizeDefault.ts
/**
 * @name 默认脱敏规则
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */const desensitizeDefault=strValue=>{const strLength=strValue.length;// 长度  2 < str < 5， 则只显示第一位与最后一位，其他用*代替;
if(strLength>2&&strLength<5){return`${strValue.slice(0,1)}${utils_copyStrByNum('*',strLength-2)}${strValue.slice(-1)}`;}// 其他情况，长度大于等于5的，显示前两位与后两位，中间用*代替;
return`${strValue.slice(0,2)}${utils_copyStrByNum('*',strLength-4)}${strValue.slice(-2)}`;};/* harmony default export */ const desensitize_desensitizeDefault = (desensitizeDefault);
;// ./src/utils/desensitize/desensitizeIDCard.ts
/**
 * @name 对身份证进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */const desensitizeIDCard=strValue=>{const strLength=strValue.length;if(strLength===15){// 15位身份证号，显示前6位，与倒数第二，第三位。其他显示为*号；
return`${strValue.slice(0,6)}${utils_copyStrByNum('*',6)}${strValue.slice(12,14)}*`;}else if(strLength===18){// 18位身份证号，显示前6位，与倒数第三，第四位，其他显示为*号；
return`${strValue.slice(0,6)}${utils_copyStrByNum('*',8)}${strValue.slice(14,16)}**`;}return desensitize_desensitizeDefault(strValue);};/* harmony default export */ const desensitize_desensitizeIDCard = (desensitizeIDCard);
;// ./src/utils/isIncludeChinese/index.ts
/**
 * @name isIncludeChinese
 * @description 判断一个字符串中是否含有中文
 * @param {string} str 待判断的字符串
 * @returns {boolean} 返回布尔值
 * @example <caption>ts类型</caption>
isIncludeChinese(str:string)
 * @example <caption>demo</caption>
import { isIncludeChinese } from '@zpcscc/utils';

console.log(isIncludeChinese('张三')); // true
console.log(isIncludeChinese('张三12')); // true
console.log(isIncludeChinese('12234')); // false
console.log(isIncludeChinese('Name')); // false
 */const isIncludeChinese=str=>/[\u4E00-\u9FFF]+/g.test((0,utils_toString/* default */.A)(str));/* harmony default export */ const utils_isIncludeChinese = (isIncludeChinese);
// EXTERNAL MODULE: ./src/utils/regular.ts
var regular = __webpack_require__(32703);
;// ./src/utils/splitStrByLen/index.ts
/**
 * @name splitStrByLen
 * @description 按指定长度拆分字符串
 * @param {string} value 待分割的字符串
 * @param {number} len 分割的数组每项的字符串长度
 * @returns {string[]} 分割后的数组
 * @example <caption>ts类型</caption>
splitStrByLen(value:string, len?:number)
 * @example <caption>demo</caption>
import { splitStrByLen } from '@zpcscc/utils';

console.log(splitStrByLen('张三张三张三', 2)); // ['张三','张三','张三']
console.log(splitStrByLen('123456789', 3)); // ['123','456','789']
console.log(splitStrByLen('1234567890', 4)); // ['1234','5678','90']
 */const splitStrByLen=(value,len=1)=>{const str=(0,utils_toString/* default */.A)(value);const arr=[];const strLen=str.length;for(let i=0;i<strLen;i+=len){arr.push(str.slice(i,i+len));}return arr;};/* harmony default export */ const utils_splitStrByLen = (splitStrByLen);
;// ./src/utils/desensitize/desensitizeName.ts
/**
 * @name 对姓名进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */const desensitizeName=strValue=>{const strLength=strValue.length;// 处理包含中文的字符串
if(utils_isIncludeChinese(strValue)){// 小于4个字符，只显示第一位，其他用*代替;
if(strLength<4){return`${strValue.slice(0,1)}${utils_copyStrByNum('*',strLength-1)}`;}// 将字符串按数量分割成数组
const strArr=utils_splitStrByLen(strValue,4);// 将数组每项字符串，第一位显示，其他用*代替;
const newStrArr=strArr.map(item=>`${item.slice(0,1)}${utils_copyStrByNum('*',item.length-1)}`);return newStrArr.join('');}// 英文字符串
// 将字符串按空格分割成数组
const strArr=strValue.split(regular/* trimRegExp */.kt);//  若没有空格，则隐藏后三分之二的字符串，用*代替;
if(strArr.length===1){// 需要隐藏的字符串长度
const hideLength=Math.round(strLength*(2/3));const showLength=strLength-hideLength;return`${strValue.slice(0,showLength)}${utils_copyStrByNum('*',hideLength)}`;}const newStrArr=strArr.map((item,index)=>{if(index===0)return item;return utils_copyStrByNum('*',item.length);});return newStrArr.join(' ');};/* harmony default export */ const desensitize_desensitizeName = (desensitizeName);
// EXTERNAL MODULE: ./src/utils/isNumber/index.ts
var isNumber = __webpack_require__(75969);
;// ./src/utils/toNumber/index.ts
/**
 * @name toNumber
 * @description 将“value”转换为有效数字;排除了 Infinity、-Infinity、NaN，这类非正常数字，全部返回 0
 * @param {any} data 要转换的值
 * @returns {number} 返回转换后的有限数字
 * @example <caption>ts类型</caption>
toNumber(value: any);
 * @example <caption>demo</caption>
import { toNumber } from '@zpcscc/utils';

console.log(toNumber(3.2)); // 3.2
console.log(toNumber('3.2')); // 3.2
console.log(toNumber(Number.POSITIVE_INFINITY)); // 0
console.log(toNumber(Number.MIN_VALUE)); // 0
console.log(toNumber(Number.NaN)); // 0
 */const toNumber=data=>{if(!data)return 0;if((0,isNumber/* default */.A)(data))return data;let value=data;try{if(data===Number.POSITIVE_INFINITY||data===Number.NEGATIVE_INFINITY||data===Number.MAX_VALUE||data===Number.MIN_VALUE||Number.isNaN(data)){return 0;}value=Number(data);}catch{return 0;}return Number.isNaN(value)?0:value;};/* harmony default export */ const utils_toNumber = (toNumber);
;// ./src/utils/pickNumber/index.ts
// 负小数
const numberTypeRegMap=new Map([['all',regular/* digitRegExp */.ns],['integer',regular/* integerRegExp */.oV],['integerPlus',regular/* integerPlusRegExp */.Uh],['integerMinus',regular/* integerMinusRegExp */.GD],['decimal',regular/* decimalRegExp */.Rm],['decimalPlus',regular/* decimalPlusRegExp */.XR],['decimalMinus',regular/* decimalMinusRegExp */.F6]]);/**
 * @name pickNumber
 * @description 挑选出字符串中的所有数字，返回数字数组
 * @param {string} value 需要处理的字符串
 * @param {NumberType} type 需要挑选的数字类型
 * @return {number[]} 返回数字数组
 * @example <caption>ts类型</caption>
export type NumberType =
  | 'all' // 所有数字类型
  | 'integer' // 所有整数
  | 'integerPlus' // 正整数
  | 'integerMinus' // 负整数
  | 'decimal' // 所有小数
  | 'decimalPlus' // 正小数
  | 'decimalMinus'; // 负小数
pickNumber(value: string,type?: NumberType);
 * @example <caption>demo</caption>
import { pickNumber } from '@zpcscc/utils';

console.log(pickNumber('123-234 32.23 -23.43')); // [123, -234];
console.log(pickNumber('123-234', 'integer')); // [123, -234];
console.log(pickNumber('123-234', 'integerPlus')); // [123, 234]
console.log(pickNumber('123-234', 'integerMinus')); // [-234]
console.log(pickNumber('123-2.34', 'decimal')); // [-2.34]
console.log(pickNumber('12.4-sdf=23.4-23.8', 'decimalPlus')); // [12.4, 23.4, 23.8]
console.log(pickNumber('12.4-234-33.4', 'decimalMinus')); // [-33.4]
console.log(pickNumber('sdjlfajsghasd')); // []
 */const pickNumber=(value,type='all')=>{const strValue=(0,utils_toString/* default */.A)(value);let numArr=[];const mapReg=numberTypeRegMap.get(type)||regular/* digitRegExp */.ns;const regExp=new RegExp(mapReg,'g');numArr=(strValue.match(regExp)||[]).map(utils_toNumber);return numArr;};/* harmony default export */ const utils_pickNumber = (pickNumber);
;// ./src/utils/desensitize/desensitizePhone.ts
/**
 * @name 对手机号进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */const desensitizePhone=strValue=>{const newStrValue=utils_pickNumber(strValue,'integerPlus').join('');// 手机号，统一只显示前后三位，中间显示5个*号；
return`${newStrValue.slice(0,3)}${utils_copyStrByNum('*',4)}${newStrValue.slice(-4)}`;};/* harmony default export */ const desensitize_desensitizePhone = (desensitizePhone);
;// ./src/utils/desensitize/desensitizeTelephone.ts
/**
 * @name 对固定电话进行脱敏处理
 * @param {string} strValue
 * @returns {string} 脱敏后的字符串
 */const desensitizeTelephone=strValue=>{// 将字符串按“-”分割成数组
const strArr=strValue.split('-');switch(strArr.length){case 1:{//  若没有分隔符，则隐藏后四位;
return`${strValue.slice(0,-4)}${utils_copyStrByNum('*',4)}`;}case 2:{// 若有一个分隔符，区号不隐藏，中间号码隐藏后四位
return`${strArr[0]}-${strArr[1].slice(0,-4)}${utils_copyStrByNum('*',4)}`;}case 3:{// 若有两个分隔符，区号不隐藏，中间号码隐藏后四位，分机号隐藏后两位
return`${strArr[0]}-${strArr[1].slice(0,-4)}${utils_copyStrByNum('*',4)}-${strArr[2].slice(0,-2)}${utils_copyStrByNum('*',2)}`;}default:{return desensitize_desensitizeDefault(strValue);}}};/* harmony default export */ const desensitize_desensitizeTelephone = (desensitizeTelephone);
;// ./src/utils/desensitize/index.ts
const DesensitizeList=['name','phone','IDCard','telephone','bankCard'];/**
 * @name desensitize
 * @description
对数据进行脱敏处理 <br/>
一、姓名脱敏：<br/>
  &nbsp;&nbsp;1、中文姓名：<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;1）每4个汉字展示前1位，末3位屏蔽; <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;2）少于4 个汉字的只展示第1位，其他屏蔽。（数字字母均视同汉字处理）<br/>
  &nbsp;&nbsp;2、英文姓名：<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;1）如果中间是有空格的，屏蔽第一个空格后面的所有英文字母; <br/>
    &nbsp;&nbsp;&nbsp;&nbsp;2）如果中间没有空格，末3分之 2（四舍五入）部B分屏菘掉; <br/>
二、身份证脱敏： <br/>
  &nbsp;&nbsp;1、号码长度为 15位的：号码的第7位到12位和最后1位屏蔽，其他不屏;<br/>
  &nbsp;&nbsp;2、号码长度为 18位的：号码的第7位到14位和最后2位屏蔽，其他不屏; <br/>
三、手机号码： <br/>
  &nbsp;&nbsp;1、只展示前3位、末4位，中间均屏蔽 <br/>
  &nbsp;&nbsp;2、支持格式 带-或者空格 例如会将 178-7777-8888 或178 7777 8888統一输出为178****8888 <br/>
四、固定电话： <br/>
  &nbsp;&nbsp;1、区号不屏蔽；电话号码屏蔽末4位：分机号码屏蔽末2位 <br/>
  &nbsp;&nbsp;2、注意：仅支持2段或3段，如 0571-87006789-1234 <br/>
五、银行卡号 <br/>
  &nbsp;&nbsp;1、号码长度等于或者大于16位的：只展示前4位、末4位，中间均屏 <br/>
  &nbsp;&nbsp;2、纯教字字符串，支持带空格或-，会先将空格或-去除再屏蔽 <br/>
 * @param {string} value
 * @param {DesensitizeType} type
 * @returns {string} 脱敏后的字符串
 * @example <caption>ts类型</caption>
type DesensitizeType = 'name' | 'phone' | 'IDCard' | 'telephone' | 'bankCard';
desensitize(value:string, type?:DesensitizeType)
 * @example <caption>demo</caption>
import { desensitize } from '@zpcscc/utils';
import type { DesensitizeType } from '@zpcscc/utils';

console.log(desensitize('')); // ''
console.log(desensitize('张3李四王五')); // 张3**王五
console.log(desensitize('17775262736', 'phone')); // 177****2736
 */const desensitize=(value,type)=>{// 将传入的值转为字符串，并去除前后空格，确保后续都是对字符串进行操作
const strValue=(0,utils_toString/* default */.A)(value).trim();if(!strValue)return'';const strLength=strValue.length;// 只有一个字符，原样返回
if(strLength===1)return strValue;// 两个字符，只显示第一个字符，其他用*代替
if(strLength===2)return`${strValue[0]}*`;switch(type){case'name':{return desensitize_desensitizeName(strValue);}case'IDCard':{return desensitize_desensitizeIDCard(strValue);}case'phone':{return desensitize_desensitizePhone(strValue);}case'telephone':{return desensitize_desensitizeTelephone(strValue);}case'bankCard':{return desensitize_desensitizeBankCard(strValue);}default:{return desensitize_desensitizeDefault(strValue);}}};/* harmony default export */ const utils_desensitize = (desensitize);

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

/***/ 75969
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _getType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42416);
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

/***/ 32703
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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