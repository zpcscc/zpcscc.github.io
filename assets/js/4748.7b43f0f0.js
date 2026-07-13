"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[4748],{

/***/ 94784
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* empty/unused harmony star reexport */
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34454);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Button__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 4748
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sortVersions_sortVersions)
});

// EXTERNAL MODULE: ./src/utils/walkSplit/index.ts
var walkSplit = __webpack_require__(85503);
;// ./src/utils/sortVersions/index.ts
// 不是数字，则返回类型对应的权重
const typeMap={experimental:1,alpha:2,beta:3,rc:4,release:5};// 支持的语义化版本号英文
/**
 * @name sortVersions
 * @description 版本号排序
 * @param {string[]} data 需要排序的版本号数组
 * @return {string[]} 从小到大排序过后的数组
 * @example <caption>ts类型</caption>
sortVersions(data:string[])
 * @example <caption>demo</caption>
import { sortVersions } from '@zpcscc/utils';

const beforeSort = [
  '1.2.1',
  '1.1.1',
  '1.1.1-release.2',
  '1.1.1-alpha.10',
  '1.1.1-release.1',
  '1.1.1-beta.1',
  '1.1.1-experimental.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.2-alpha.1'
];

console.log(removeTag('<p>Hello World!</p>')); // afterSort

const afterSort = [
  '1.1.1-experimental.1',
  '1.1.1-alpha.10',
  '1.1.1-beta.1',
  '1.1.1-rc.1',
  '1.1.1-rc.1',
  '1.1.1-release.1',
  '1.1.1-release.2',
  '1.1.1',
  '1.1.2-alpha.1',
  '1.2.1'
];
 */const sortVersions=data=>{return data.sort((a,b)=>{const newA=a.trim();const newB=b.trim();if(newA===newB)return 0;const aIterator=(0,walkSplit/* default */.A)(newA,['.','-']);const bIterator=(0,walkSplit/* default */.A)(newB,['.','-']);// 获取语义化版本号的先后顺序
const getVersionNum=type=>{// 若是数字，则直接返回
if(!Number.isNaN(Number(type)))return Number(type);return typeMap[type]||6;};// 比较两者大小
const compare=(aNum,bNum)=>{if(aNum===bNum){return compare(getVersionNum(aIterator.next().value),getVersionNum(bIterator.next().value));}else if(aNum>bNum)return 1;return-1;};return compare(getVersionNum(aIterator.next().value),getVersionNum(bIterator.next().value));});};/* harmony default export */ const utils_sortVersions = (sortVersions);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(29855);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/input/index.js + 9 modules
var es_input = __webpack_require__(31986);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.0_moment@2.30.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(94784);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./docs-utils/sortVersions/sortVersions.tsx
const SortVersion=()=>{const[input,setInput]=(0,react.useState)(['1.2.1','1.1.1','1.1.1-release.2','1.1.1-alpha.10','1.1.1-release.1','1.1.1-beta.1','1.1.1-experimental.1','1.1.1-rc.1','1.1.1-rc.1','1.1.2-alpha.1'].join('\n'));const[result,setResult]=(0,react.useState)([]);const onChange=e=>{setInput(e?.target?.value);};const onClick=()=>{setResult(utils_sortVersions(input.split('\n')));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{wrap:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_input/* default */.A.TextArea,{style:{width:'300px',height:'300px'},value:input,onChange:onChange}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",onClick:onClick,children:"\u6392\u5E8F"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_input/* default */.A.TextArea,{style:{width:'300px',height:'300px'},value:result.join('\n')})]});};/* harmony default export */ const sortVersions_sortVersions = (SortVersion);

/***/ },

/***/ 85503
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