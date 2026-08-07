"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[1084],{

/***/ 21084
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ getColor_getColor)
});

;// ./src/utils/getColor/index.ts
/**
 * @name getColor
 * @description 获取随机颜色
 * @param {'rgb' | 'hex'| 'hsl'} type 返回颜色的格式
 * @return {string} 返回生成的随机颜色字符串
 * @example <caption>ts类型</caption>
getColor(type:'rgb' | 'hex' | 'hsl');
 * @example <caption>demo</caption>
import { getColor } from '@zpcscc/utils';

console.log(getColor()); //  #6ffccf;
console.log(getColor('hex')); //  #8d3eca;
console.log(getColor('rgb')); //  rgb(12,45,145,0.4);
console.log(getColor('hsl')); //  hsl(200,100%,70%);
 */const getColor=type=>{const a=Math.floor(Math.random()*101);if(type==='rgb'){const r=Math.floor(Math.random()*256);const g=Math.floor(Math.random()*256);const b=Math.floor(Math.random()*256);return`rgb(${r},${g},${b},0.${a})`;}else if(type==='hsl'){const h=Math.floor(Math.random()*361);const s=Math.floor(Math.random()*101);const l=Math.floor(Math.random()*101);return`hsl(${h},${s}%,${l}%,${a}%)`;}return`#${Math.random().toString(16).padEnd(6,'0').slice(2,8)}`;};/* harmony default export */ const utils_getColor = (getColor);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/message/index.js + 25 modules
var message = __webpack_require__(33540);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(85223);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/radio/index.js + 7 modules
var es_radio = __webpack_require__(31018);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/button/index.js
var es_button = __webpack_require__(88008);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/input/index.js + 11 modules
var input = __webpack_require__(44417);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/tooltip/index.js + 7 modules
var tooltip = __webpack_require__(36770);
// EXTERNAL MODULE: ./node_modules/.pnpm/clipboard@2.0.11/node_modules/clipboard/dist/clipboard.js
var dist_clipboard = __webpack_require__(79741);
var clipboard_default = /*#__PURE__*/__webpack_require__.n(dist_clipboard);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./docs-utils/getColor/getColor.tsx
const GetRandomColor=()=>{const btn='copy-color-btn';const[type,setType]=(0,react.useState)('hex');const[result,setResult]=(0,react.useState)('');const onChange=e=>{const value=e.target.value;setType(value);setResult(utils_getColor(value));};const onClick=()=>{setResult(utils_getColor(type));};(0,react.useEffect)(()=>{const clipboard=new (clipboard_default())(`.${btn}`);clipboard.on('success',()=>message/* default */.Ay.success('复制成功'));clipboard.on('error',()=>message/* default */.Ay.error('复制失败'));return()=>clipboard.destroy();},[btn]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{wrap:true,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(es_radio/* default */.A.Group,{onChange:onChange,value:type,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.A,{value:'hex',children:"hex"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.A,{value:'rgb',children:"rgb"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default */.A,{value:'hsl',children:"hsl"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{type:"primary",onClick:onClick,children:"\u751F\u6210\u968F\u673A\u989C\u8272"}),/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A.Compact,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{value:type,readOnly:true,style:{width:'50px',textAlign:'center'}}),/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.A,{style:{width:'300px'},value:result,suffix:/*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.A,{title:"\u70B9\u51FB\u590D\u5236",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.A,{className:btn,"data-clipboard-text":result,style:{backgroundColor:result,width:'24px',height:'24px',padding:0}})})})]})]});};/* harmony default export */ const getColor_getColor = (GetRandomColor);

/***/ }

}]);