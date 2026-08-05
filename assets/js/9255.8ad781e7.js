"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[9255],{

/***/ 69255
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ JudgePoint24)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(85223);
// EXTERNAL MODULE: ./node_modules/.pnpm/antd@6.5.3_moment@2.30.1_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/antd/es/input/index.js + 11 modules
var es_input = __webpack_require__(44417);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/index.js
var react = __webpack_require__(71763);
;// ./src/demo/JudgePoint24/judgePoint24.ts
// 计算24点
const judgePoint24=nums=>{const EPSILON=1e-6;const dfs=(nums,expression)=>{if(nums.length===1){if(Math.abs(nums[0]-24)<EPSILON){return expression[0];}return false;}for(let i=0;i<nums.length;i++){for(let j=0;j<nums.length;j++){if(i!==j){const nextNums=[];const nextExpressions=[];for(const[k,num]of nums.entries()){if(k!==i&&k!==j){nextNums.push(num);nextExpressions.push(expression[k]);}}const ops=[{val:nums[i]+nums[j],exp:`(${expression[i]} + ${expression[j]})`},{val:nums[i]-nums[j],exp:`(${expression[i]} - ${expression[j]})`},{val:nums[j]-nums[i],exp:`(${expression[j]} - ${expression[i]})`},{val:nums[i]*nums[j],exp:`(${expression[i]} * ${expression[j]})`},{val:nums[i]/nums[j],exp:`(${expression[i]} / ${expression[j]})`},{val:nums[j]/nums[i],exp:`(${expression[j]} / ${expression[i]})`}];for(const op of ops){if(Math.abs(op.val)<EPSILON&&(op.val===nums[i]||op.val===nums[j]))continue;nextNums.push(op.val);nextExpressions.push(op.exp);const exp=dfs(nextNums,nextExpressions);if(exp){return exp;}nextNums.pop();nextExpressions.pop();}}}}return false;};return dfs(nums,nums.map(num=>num.toString()));};/* harmony default export */ const JudgePoint24_judgePoint24 = (judgePoint24);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
;// ./src/demo/JudgePoint24/index.tsx
const App=()=>{const[input,setInput]=(0,react.useState)('');const[result,setResult]=(0,react.useState)('');const onChange=e=>{const value=e?.target?.value||'';setInput(value);const nums=value.split(',').map(Number).slice(0,4);setResult(String(JudgePoint24_judgePoint24(nums)));};return/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.A,{orientation:"vertical",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_input/* default */.A,{style:{width:'400px'},value:input,placeholder:"\u8BF7\u8F93\u5165\u9700\u8981\u8BA1\u7B97\u7684\u56DB\u4F4D\u6570\u5B57\uFF0C\u9017\u53F7\u5206\u5272\u3002\u4F8B:1,2,3,4",onChange:onChange}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_input/* default */.A.TextArea,{rows:3,style:{width:'400px'},value:String(result)})]});};/* harmony default export */ const JudgePoint24 = (App);

/***/ }

}]);