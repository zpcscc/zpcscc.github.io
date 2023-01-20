"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5504],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={title:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",sidebar:"auto",date:new Date("2021-06-30T00:00:00.000Z"),categories:["\u5f00\u53d1"],tags:["git"]},i=void 0,c={unversionedId:"note/Git/\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",id:"note/Git/\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",title:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",description:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",source:"@site/docs/note/Git/\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054.md",sourceDirName:"note/Git",slug:"/note/Git/\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",permalink:"/docs/note/Git/\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",draft:!1,tags:[{label:"git",permalink:"/docs/tags/git"}],version:"current",frontMatter:{title:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",sidebar:"auto",date:"2021-06-30T00:00:00.000Z",categories:["\u5f00\u53d1"],tags:["git"]},sidebar:"note",previous:{title:"\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93",permalink:"/docs/note/Git/\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93"},next:{title:"\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55",permalink:"/docs/note/Git/\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55"}},l={},p=[{value:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",id:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054"},"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"git remote rm origin\n")))}u.isMDXComponent=!0}}]);