"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4162],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(9496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),m=o(n),N=r,c=m["".concat(u,".").concat(N)]||m[N]||s[N]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[m]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},5622:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(1966),r=(n(9496),n(9613));const l={title:"\u6570\u636e\u7c7b\u578b"},i="\u6570\u636e\u7c7b\u578b",p={unversionedId:"base/javascript/\u6570\u636e\u7c7b\u578b",id:"base/javascript/\u6570\u636e\u7c7b\u578b",title:"\u6570\u636e\u7c7b\u578b",description:"\u4e00\u3001\u5e38\u89c1\u6570\u636e\u7c7b\u578b",source:"@site/docs/base/javascript/\u6570\u636e\u7c7b\u578b.md",sourceDirName:"base/javascript",slug:"/base/javascript/\u6570\u636e\u7c7b\u578b",permalink:"/docs/base/javascript/\u6570\u636e\u7c7b\u578b",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6570\u636e\u7c7b\u578b"},sidebar:"base",previous:{title:"\u624b\u5199call\u51fd\u6570",permalink:"/docs/base/javascript/\u624b\u5199promise.all\u51fd\u6570"},next:{title:"\u6570\u7ec4",permalink:"/docs/base/javascript/\u6570\u7ec4/"}},u={},o=[{value:"\u4e00\u3001\u5e38\u89c1\u6570\u636e\u7c7b\u578b",id:"\u4e00\u5e38\u89c1\u6570\u636e\u7c7b\u578b",level:2},{value:"\u4e8c\u3001JavaScript \u7684\u4e09\u5927\u7279\u6b8a\u503c NaN\u3001undefined\u3001null",id:"\u4e8cjavascript-\u7684\u4e09\u5927\u7279\u6b8a\u503c-nanundefinednull",level:2},{value:"3.\u5982\u4f55\u68c0\u6d4b\u6570\u636e\u7c7b\u578b\uff1a",id:"3\u5982\u4f55\u68c0\u6d4b\u6570\u636e\u7c7b\u578b",level:2},{value:"4.\u6570\u636e\u4fdd\u5b58\u5728\u54ea\uff1f",id:"4\u6570\u636e\u4fdd\u5b58\u5728\u54ea",level:2},{value:"\u4e94\u3001\u6570\u636e\u7c7b\u578b\u8f6c\u6362",id:"\u4e94\u6570\u636e\u7c7b\u578b\u8f6c\u6362",level:2},{value:"\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u7684\u7c7b\u578b\u5206\u7c7b\uff1a",id:"\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u7684\u7c7b\u578b\u5206\u7c7b",level:4},{value:"1.\u9690\u5f0f\u6570\u636e\u8f6c\u6362",id:"1\u9690\u5f0f\u6570\u636e\u8f6c\u6362",level:3},{value:"2.\u663e\u5f0f\u8f6c\u6362",id:"2\u663e\u5f0f\u8f6c\u6362",level:3},{value:"<strong>\u5b57\u7b26\u8f6c\u6570\u503c</strong>",id:"\u5b57\u7b26\u8f6c\u6570\u503c",level:4},{value:"(1) \u666e\u901a\u5b57\u7b26\u8f6c\u6362",id:"1-\u666e\u901a\u5b57\u7b26\u8f6c\u6362",level:5},{value:"(2) \u7279\u6b8a\u5b57\u7b26\u8f6c\u6362",id:"2-\u7279\u6b8a\u5b57\u7b26\u8f6c\u6362",level:5},{value:"<strong>\u6570\u503c\u8f6c\u5b57\u7b26</strong>",id:"\u6570\u503c\u8f6c\u5b57\u7b26",level:4}],d={toc:o},m="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("h2",{id:"\u4e00\u5e38\u89c1\u6570\u636e\u7c7b\u578b"},"\u4e00\u3001\u5e38\u89c1\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7279\u5f81"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e3e\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b57\u7b26\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"\"\"\u3001''"),(0,r.kt)("td",{parentName:"tr",align:null},'"hello"'),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u8981\u662f\u88ab\u5f15\u53f7\u5305\u88f9\u7684\u90fd\u662f\u5b57\u7b26")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u5b57\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"012"),(0,r.kt)("td",{parentName:"tr",align:null},"3.1415926"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e38\u89c1\u7684\u5404\u7c7b\u6570\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5e03\u5c14\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"true\u3001false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ea\u6709\u4e24\u4e2a\u503c\uff0c\u8868\u793a\u771f\u5047")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4"),(0,r.kt)("td",{parentName:"tr",align:null},"[]"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,2,3]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u65b9\u62ec\u53f7\u5305\u8d77\u6765\uff0c\u9017\u53f7\u9694\u5f00\u7684\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"{key:value}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u5927\u62ec\u53f7\u5305\u8d77\u6765\uff0c\u91cc\u9762\u662f\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\uff0c\u9017\u53f7\u9694\u5f00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"function test() = {}"),(0,r.kt)("td",{parentName:"tr",align:null},"\u51fd\u6570\u65b9\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u8d4b\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"undefined"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u88ab\u58f0\u660e\u4e86\uff0c\u4f46\u662f\u6ca1\u6709\u88ab\u8d4b\u503c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u7a7a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u4e3a\u7a7a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null},"\u610f\u5916\u7684\u6570\u5b57"),(0,r.kt)("td",{parentName:"tr",align:null},"NaN"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8868\u793a\u610f\u5916\u8f6c\u6362\u751f\u6210\u7684\u6570\u503c\u578b\u6570\u636e")))),(0,r.kt)("h2",{id:"\u4e8cjavascript-\u7684\u4e09\u5927\u7279\u6b8a\u503c-nanundefinednull"},"\u4e8c\u3001JavaScript \u7684\u4e09\u5927\u7279\u6b8a\u503c NaN\u3001undefined\u3001null"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"NaN:\u4e0d\u662f\u4e00\u4e2a\u6570\u5b57\u7684\u6570\u503c\u578b\u6570\u636e\n    \u4ee3\u8868\u610f\u5916\u6216\u975e\u6cd5\u8f6c\u5316\u7684\u6570\u5b57\n    NaN\u548c\u4efb\u4f55\u6570\u636e\u90fd\u4e0d\u76f8\u7b49\uff0c\u751a\u81f3\u4e0d\u7b49\u4e8e\u81ea\u5df1\n    //\u8ba4\u8bc6isNaN()\u51fd\u6570\uff0c\u8be5\u51fd\u6570\u5224\u65ad\u62ec\u53f7\u5185\u7684\u503c\u662f\u5426\u662fNaN\uff0c\u662f\u5c31\u8fd4\u56detrue\uff0c\u4e0d\u662f\u5c31\u8fd4\u56defalse\n    console.log(isNaN(c));\nnull\uff1a\u7a7a\n    \u7c7b\u578b\u662f\u5bf9\u8c61\uff0c\u8868\u793a\u7a7anall\u3002\u4f46\u4e0d\u662f\u7a7a\u5bf9\u8c61\nundefined\uff1a\u672a\u5b9a\u4e49\n    null\u548cundefined\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\u540e\u53ef\u80fd\u76f8\u7b49\uff08\u4e0d\u4e25\u683c\u6bd4\u8f83\uff09\n    \u56e0\u4e3a\u90fd\u8f6c\u4e3a\u5e03\u5c14\u503c\uff0c\u4e24\u8005\u5728\u5e03\u5c14\u503c\u4e2d\u90fd\u4e3afalse\n")),(0,r.kt)("h2",{id:"3\u5982\u4f55\u68c0\u6d4b\u6570\u636e\u7c7b\u578b"},"3.\u5982\u4f55\u68c0\u6d4b\u6570\u636e\u7c7b\u578b\uff1a"),(0,r.kt)("p",null,"\u4f7f\u7528\u5173\u952e\u5b57\uff1a",(0,r.kt)("strong",{parentName:"p"},"typeof")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"//\u5728\u6253\u5370\u5185\u5bb9\u524d\u52a0\u4e0a\u5173\u952e\u5b57typeof\uff0c\u6253\u5370\u51fa\u6765\u7684\u5c31\u662f\u5f53\u524d\u5185\u5bb9\u7684\u6570\u636e\u7c7b\u578b\ncondole.log(typeof '123') //string\ncondole.log(typeof 123) //number\n")),(0,r.kt)("h2",{id:"4\u6570\u636e\u4fdd\u5b58\u5728\u54ea"},"4.\u6570\u636e\u4fdd\u5b58\u5728\u54ea\uff1f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u4fdd\u5b58\u5728\u53d8\u91cf\u4e2d\uff1a\u53d8\u91cf\u6bd4\u4f5c\u4ed3\u5e93\u3002\u53d8\u91cf\u9700\u8981\u58f0\u660e\u4e4b\u540e\u624d\u80fd\u4f7f\u7528\n")),(0,r.kt)("h2",{id:"\u4e94\u6570\u636e\u7c7b\u578b\u8f6c\u6362"},"\u4e94\u3001\u6570\u636e\u7c7b\u578b\u8f6c\u6362"),(0,r.kt)("h4",{id:"\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u7684\u7c7b\u578b\u5206\u7c7b"},"\u6570\u636e\u7c7b\u578b\u8f6c\u6362\u7684\u7c7b\u578b\u5206\u7c7b\uff1a"),(0,r.kt)("h3",{id:"1\u9690\u5f0f\u6570\u636e\u8f6c\u6362"},"1.\u9690\u5f0f\u6570\u636e\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"\u60c5\u51b5\uff08\u573a\u666f\uff09\uff1a\n    1.\u5728\u7b97\u6570\u8fd0\u7b97\u4e2d\uff08\u901a\u8fc7\u7b97\u6570\u8fd0\u7b97\u7b26\u8f6c\u6362\uff09\n        \u8f6c\u6362\u7684\u89c4\u5219\uff1a\n            +\u53f7\u53ea\u8981\u4e24\u8fb9\u51fa\u73b0\u4e00\u4e2a\u5b57\u7b26\uff0c\u53e6\u4e00\u4e2a\u4e5f\u4f1a\u8f6c\u6362\u6210\u5b57\u7b26\n            -*%/\u76f4\u63a5\u90fd\u4f5c\u4e3a\u6570\u503c\u8fd0\u7b97\uff08\u53ef\u5c06\u67d0srting\u7c7b\u578b\u6570\u5b57*1\u8f6c\u6362\u4e3anumber\u7c7b\u578b\u6570\u5b57\uff09\n    2.if\u7b49\u5224\u65ad\u8bed\u53e5\u4e2d\uff08if\u8bed\u53e5\u62ec\u53f7\u4e2d\u7684\u503c\uff09\n        \u6570\u5b57\uff1a\u975e0\u4e3atrue\uff0c0\u4e3afalse\n        \u5b57\u7b26\uff1a\u975e\u7a7a\u4e3atrue\uff0c\u7a7a\u4e3afalse\n        \u5bf9\u8c61\uff1a\u5728\u4efb\u4f55\u65f6\u5019\u90fd\u4e3atrue\n        \u6570\u7ec4\uff1a\u5728\u4efb\u4f55\u65f6\u5019\u90fd\u4e3atrue\uff0c\u6570\u7ec4\u4e5f\u662f\u5bf9\u8c61\u7684\u4e00\u79cd\n        \u51fd\u6570\uff1a\u5728\u4efb\u4f55\u65f6\u5019\u90fd\u4e3atrue\uff0c\u51fd\u6570\u4e5f\u662f\u7279\u6b8a\u7684\u5bf9\u8c61\n        NaN\uff1a\u4e3afalse\n        undefined\uff1a\u4e3afalse\n        null\uff1a\u4e3afalse\n")),(0,r.kt)("h3",{id:"2\u663e\u5f0f\u8f6c\u6362"},"2.\u663e\u5f0f\u8f6c\u6362"),(0,r.kt)("h4",{id:"\u5b57\u7b26\u8f6c\u6570\u503c"},(0,r.kt)("strong",{parentName:"h4"},"\u5b57\u7b26\u8f6c\u6570\u503c")),(0,r.kt)("p",null,"Tip:\u6211\u4eec\u60f3\u505a\u6570\u5b66\u8fd0\u7b97\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u5148\u5bf9\u6240\u6709\u7684\u6570\u636e\u7c7b\u578b\u8fdb\u884c\u7edf\u4e00\uff08\u7edf\u4e00\u6210\u6570\u5b57\u683c\u5f0f\uff09\uff0c\u8fd9\u4e2a\u65f6\u5019\u6211\u4eec\u5c31\u8be5\u7528\u5230\u6570\u636e\u7c7b\u578b\u7684\u8f6c\u6362\u3002"),(0,r.kt)("h5",{id:"1-\u666e\u901a\u5b57\u7b26\u8f6c\u6362"},"(1) \u666e\u901a\u5b57\u7b26\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'parseInt();\u62ec\u53f7\u91cc\u5c31\u662f\u9700\u8981\u8f6c\u6362\u7684\u6570\u636e\uff08\u53ef\u7528\u4e8e\u5c0f\u6570\u53d6\u6574\uff09\n    \u6570\u5b57\u53ef\u4ee5\u8f6c\u6362\uff0c\u975e\u6570\u5b57\u505c\u6b62\u3002\n    \u4ece\u5de6\u5411\u53f3\u8f6c\u6362\uff0c\u80fd\u8f6c\u5c31\u8f6c\uff0c\u4e0d\u80fd\u8f6c\u5c31\u505c\u6b62\uff0c\u540e\u9762\u7684\u4e0d\u518d\u8f6c\u6362\u3002\n    \u82e5\u7b2c\u4e00\u4e2a\u5c31\u4e0d\u80fd\u8f6c\uff0c\u5219\u663e\u793aNaN\uff0c\n    \u80fd\u7528\u5728\u8f6c\u6362\u6574\u6570\uff0c\u8ba4\u4e3a\u5c0f\u6570\u70b9\u662f\u975e\u6570\u5b57\u3002\n    \u4f8b\uff1a\n        parseInt("123abc");//123\n            a\u505a\u4e3a\u7b2c\u4e00\u4e2a\u4e0d\u662f\u6570\u5b57\u7684\u5b57\u7b26\uff1b\u8fd4\u56dea\u4e4b\u524d\u7684\u6240\u6709\u503c\uff0c\u5219\u8be5\u65b9\u6cd5\u8fd4\u56de123\n        parseInt("abc123");//NaN\n            a\u505a\u4e3a\u7b2c\u4e00\u4e2a\u4e0d\u662f\u6570\u5b57\u7684\u5b57\u7b26\uff0c\u4e14\u5904\u5728\u5b57\u7b26\u4e32\u7684\u7b2c\u4e00\u4f4d\uff0c\u5219\u5224\u5b9a\u8be5\u5b57\u7b26\u4e32\u65e0\u6cd5\u8f6c\u6362\u4e3a\u6570\u5b57\u8fd4\u56deNaN\n\nparseFloat();\n    \u6570\u5b57\u53ef\u4ee5\u8f6c\u6362\uff0c\u975e\u6570\u5b57\u505c\u6b62\n    \u4ece\u5de6\u5411\u53f3\u8f6c\u6362\uff0c\u80fd\u8f6c\u5c31\u8f6c\uff0c\u4e0d\u80fd\u8f6c\u5c31\u505c\u6b62\uff0c\u540e\u9762\u7684\u4e0d\u518d\u8f6c\u6362\u3002\n    \u82e5\u7b2c\u4e00\u4e2a\u5c31\u4e0d\u80fd\u8f6c\uff0c\u5219\u663e\u793aNaN\uff0c\n    \u53ef\u4ee5\u8bc6\u522b\u5c0f\u6570\u70b9\n    \u4f8b\uff1a\n        parseFloat(\u201c123.456");\u8fd4\u56de123.456\n        parseFloat(\u201c123.4a56");\u8fd4\u56de123.4\n        parseFloat(\u201c123.00");\u8fd4\u56de123\n        parseFloat(\u201c123.0a56");\u8fd4\u56de123\n')),(0,r.kt)("h5",{id:"2-\u7279\u6b8a\u5b57\u7b26\u8f6c\u6362"},"(2) \u7279\u6b8a\u5b57\u7b26\u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'Math.round();\n    \u4e25\u683c\u8f6c\u6362\uff0c\u4e0d\u5141\u8bb8\u51fa\u73b0\u4efb\u4f55\u975e\u6570\u5b57\uff0c\u82e5\u6709\u975e\u6570\u5b57\u76f4\u63a5\u663e\u793aNaN\u3002\n    \u53ef\u4ee5\u8bc6\u522b\u5c0f\u6570\u70b9\uff0c\u4f46\u4f1a\u56db\u820d\u4e94\u5165\u53d6\u6574\u3002\u5c0f\u6570\u70b9\u540e\u7684\u88ab\u56db\u820d\u4e94\u5165\n    \u5b9e\u8d28\u662f\u53d6\u6700\u8fd1\u7684\u6574\u6570\uff0c\u80fd\u5728\u6b63\u6570\u6709\u56db\u820d\u4e94\u5165\u7684\u6548\u679c\u3002\n    \u82e5\u4e3a\u8d1f\u6570\uff1b\u4f8b\uff1aMath.round(-3.6);//-4(\u6570\u5b57\u8fdb\u4e00\u53cd\u800c\u53d8\u5c0f\u4e86)\nNumber()//\u4e3a\u5f3a\u5236\u6570\u636e\u7c7b\u578b\u8f6c\u6362 \u5c06string\u7c7b\u578b\u7684\u6570\u5b57\u8f6c\u4e3anumber\u7c7b\u578b\u7684\u6570\u5b57\n    \u4e25\u683c\u8f6c\u6362\uff0c\u4e0d\u5141\u8bb8\u51fa\u73b0\u4efb\u4f55\u975e\u6570\u5b57\uff0c\u82e5\u6709\u975e\u6570\u5b57\u76f4\u63a5\u663e\u793aNaN\u3002\n    \u53ef\u4ee5\u8bc6\u522b\u5c0f\u6570\u70b9\n        Number("hello world");    //NaN\n        Number("123456");         //123456\n')),(0,r.kt)("h4",{id:"\u6570\u503c\u8f6c\u5b57\u7b26"},(0,r.kt)("strong",{parentName:"h4"},"\u6570\u503c\u8f6c\u5b57\u7b26")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'toString();\n    \u76f4\u63a5\u8f6c\u6362\uff1a\u76f8\u5f53\u4e8e\u76f4\u63a5\u7ed9\u6570\u503c\u6dfb\u52a0\u4e2a\u5f15\u53f7\n    \u4f8b\uff1a\n        var num = 123;\n        num.toString();//"123" \u8f6c\u6362\u6210\u5b57\u7b26\u4e32\ntoFixed();\n    \u4fdd\u7559N\u4f4d\u5c0f\u6570\u7684\u8f6c\u6362\uff08\u8f6c\u6362\u540e\u53d8\u6210\u5b57\u7b26\uff09\n        \u76f4\u63a5\u8f6c\u6362\uff0c\u53ef\u4ee5\u4fdd\u7559N\u4f4d\u5c0f\u6570\n        \u4f8b\uff1a\n            var a = 3.1415\n            a.toFixed(2);//"3.14" a\u8f6c\u6362\u4e3a\u5b57\u7b26 \uff0c\u4fdd\u7559\u4e24\u4f4d\u5c0f\u6570\uff0c\u56db\u820d\u4e94\u5165\n        \u5b57\u7b26\u591a\u4f4d,\u5c0f\u6570\u53ef\u4ee5\u88650\n            a.toFixed(6);//"3.141500"//\u5b57\u7b26\u578b\uff0c\u540e\u9762\u53ef\u4ee5\u88650\n        Tip\uff1a\u800c\u6570\u503c\u591a\u4f4d\uff0c\u5c0f\u6570\u6ca1\u529e\u6cd5\u88650\uff0c\u8ba1\u7b97\u673a\u8ba4\u4e3a\u662f\u65e0\u610f\u4e49\u7684\uff0c\u4f1a\u81ea\u52a8\u7701\u7565\u3002\n')))}s.isMDXComponent=!0}}]);