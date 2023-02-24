"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6233],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const o={title:"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f"},i=void 0,c={unversionedId:"base/javascript/\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",id:"base/javascript/\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",title:"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",description:"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",source:"@site/docs/base/javascript/\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f.md",sourceDirName:"base/javascript",slug:"/base/javascript/\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",permalink:"/docs/base/javascript/\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",draft:!1,tags:[],version:"current",frontMatter:{title:"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f"},sidebar:"base",previous:{title:"\u6d4f\u89c8\u5668\u517c\u5bb9",permalink:"/docs/base/javascript/\u6d4f\u89c8\u5668\u517c\u5bb9"},next:{title:"\u8fd0\u7b97\u7b26",permalink:"/docs/base/javascript/\u8fd0\u7b97\u7b26"}},l={},p=[{value:"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",id:"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f"},"\u8f6c\u4e49\u5b57\u7b26\u8fd8\u539f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u4f7f\u7528\u539f\u751f\u65b9\u6cd5\uff0c\u5c06\u88ab\u8f6c\u4e49\u7684html\u6570\u636e\u8fd8\u539f\u6210string\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const htmlToString = (htmlString:string) => {\n    let divDom = document.createElement('div');\n    divDom.innerHTML = htmlString;\n    return divDom.innerText || divDom.textContent;\n}\n")))}m.isMDXComponent=!0}}]);