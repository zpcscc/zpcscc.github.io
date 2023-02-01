"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7744:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"\u64a4\u9500\u4e0a\u6b21push",sidebar:"auto",date:new Date("2021-04-19T00:00:00.000Z"),categories:["\u5f00\u53d1"],tags:["git"]},a=void 0,c={unversionedId:"note/Git/\u64a4\u9500\u4e0a\u6b21push",id:"note/Git/\u64a4\u9500\u4e0a\u6b21push",title:"\u64a4\u9500\u4e0a\u6b21push",description:"Git \u64a4\u9500\u4e0a\u6b21push",source:"@site/docs/note/Git/\u64a4\u9500\u4e0a\u6b21push.md",sourceDirName:"note/Git",slug:"/note/Git/\u64a4\u9500\u4e0a\u6b21push",permalink:"/docs/note/Git/\u64a4\u9500\u4e0a\u6b21push",draft:!1,tags:[{label:"git",permalink:"/docs/tags/git"}],version:"current",frontMatter:{title:"\u64a4\u9500\u4e0a\u6b21push",sidebar:"auto",date:"2021-04-19T00:00:00.000Z",categories:["\u5f00\u53d1"],tags:["git"]},sidebar:"note",previous:{title:"\u64a4\u9500\u4e0a\u6b21commit",permalink:"/docs/note/Git/\u64a4\u9500\u4e0a\u6b21commit"},next:{title:"\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93",permalink:"/docs/note/Git/\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93"}},p={},s=[{value:"Git \u64a4\u9500\u4e0a\u6b21push",id:"git-\u64a4\u9500\u4e0a\u6b21push",level:2}],u={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"git-\u64a4\u9500\u4e0a\u6b21push"},"Git \u64a4\u9500\u4e0a\u6b21push"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1\u3001\u56de\u9000\u7248\u672c\ngit reset --hard HEAD^  // \u56de\u9000\u5230\u4e0a\u4e2a\u7248\u672c\n// \u6216\ngit reset --hard commit_id  // \u9000\u5230/\u8fdb\u5230 \u6307\u5b9acommit_id\n\n// 2\u3001\u5c06\u672c\u5730\u9000\u56de\u7684\u66f4\u6539\u63d0\u4ea4\u5230\u8fdc\u7a0b\ngit push origin HEAD --force\n")))}l.isMDXComponent=!0}}]);