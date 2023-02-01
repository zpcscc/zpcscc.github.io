"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",sidebar:"auto",date:new Date("2021-11-25T00:00:00.000Z"),categories:["\u5f00\u53d1"],tags:["git"]},a=void 0,c={unversionedId:"note/Git/\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",id:"note/Git/\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",title:"\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",description:"Git \u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",source:"@site/docs/note/Git/\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801.md",sourceDirName:"note/Git",slug:"/note/Git/\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",permalink:"/docs/note/Git/\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",draft:!1,tags:[{label:"git",permalink:"/docs/tags/git"}],version:"current",frontMatter:{title:"\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",sidebar:"auto",date:"2021-11-25T00:00:00.000Z",categories:["\u5f00\u53d1"],tags:["git"]},sidebar:"note",previous:{title:"\u5f3a\u5236\u62c9\u53d6\u6700\u65b0\u4ee3\u7801",permalink:"/docs/note/Git/\u5f3a\u5236\u62c9\u53d6\u6700\u65b0\u4ee3\u7801"},next:{title:"\u64a4\u9500\u4e0a\u6b21commit",permalink:"/docs/note/Git/\u64a4\u9500\u4e0a\u6b21commit"}},s={},l=[{value:"Git \u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",id:"git-\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"git-\u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801"},"Git \u627e\u5230reset\u540e\u4e22\u5931\u7684\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"git reflog // \u901a\u8fc7\u6b64\u547d\u4ee4\uff0c\u67e5\u627e\u5230\u672c\u5730\u4e4b\u524d\u7684commit\u8bb0\u5f55\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u627e\u5230\u5bf9\u5e94\u7684\u8bb0\u5f55\u540e\u3002\u5207\u6362\u5230\u5bf9\u5e94\u7684commit\u6062\u590d\u4ee3\u7801\ngit reset  {commit Id}\n")))}u.isMDXComponent=!0}}]);