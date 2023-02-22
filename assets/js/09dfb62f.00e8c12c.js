"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4860],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2901:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const o={title:"\u57fa\u7840\u4ecb\u7ecd",sidebar:"auto",date:new Date("2020-08-20T00:00:00.000Z"),categories:["\u5f00\u53d1"],tags:["git"]},i=void 0,c={unversionedId:"note/Git/\u57fa\u7840\u4ecb\u7ecd",id:"note/Git/\u57fa\u7840\u4ecb\u7ecd",title:"\u57fa\u7840\u4ecb\u7ecd",description:"Git \u5b98\u7f51\u4ecb\u7ecd",source:"@site/docs/note/Git/\u57fa\u7840\u4ecb\u7ecd.md",sourceDirName:"note/Git",slug:"/note/Git/\u57fa\u7840\u4ecb\u7ecd",permalink:"/docs/note/Git/\u57fa\u7840\u4ecb\u7ecd",draft:!1,tags:[{label:"git",permalink:"/docs/tags/git"}],version:"current",frontMatter:{title:"\u57fa\u7840\u4ecb\u7ecd",sidebar:"auto",date:"2020-08-20T00:00:00.000Z",categories:["\u5f00\u53d1"],tags:["git"]},sidebar:"note",previous:{title:"\u5355\u5206\u652frebase\u63d0\u4ea4",permalink:"/docs/note/Git/\u5355\u5206\u652frebase\u63d0\u4ea4"},next:{title:"\u5c06\u67d0\u4e2acommit\u5408\u5e76\u5230\u6b64\u5206\u652f",permalink:"/docs/note/Git/\u5c06\u67d0\u4e2acommit\u5408\u5e76\u5230\u6b64\u5206\u652f"}},l={},p=[{value:"Git \u5b98\u7f51\u4ecb\u7ecd",id:"git-\u5b98\u7f51\u4ecb\u7ecd",level:2},{value:"Git \u4f18\u70b9",id:"git-\u4f18\u70b9",level:2}],s={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"git-\u5b98\u7f51\u4ecb\u7ecd"},"Git \u5b98\u7f51\u4ecb\u7ecd"),(0,a.kt)("p",null,"Git \u662f\u4e00\u4e2a",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/about/free-and-open-source"},"\u514d\u8d39\u7684\u5f00\u6e90")," \u5206\u5e03\u5f0f\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u65e8\u5728\u5feb\u901f\u9ad8\u6548\u5730\u5904\u7406\u4ece\u5c0f\u578b\u5230\u5927\u578b\u9879\u76ee\u7684\u6240\u6709\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"git-\u4f18\u70b9"},"Git \u4f18\u70b9"),(0,a.kt)("p",null,"Git ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/doc"},"\u6613\u4e8e\u5b66\u4e60"),"\uff0c ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/about/small-and-fast"},"\u5360\u5730\u9762\u79ef\u5c0f\uff0c\u5177\u6709\u95ea\u7535\u822c\u7684\u5feb\u901f\u6027\u80fd"),"\u3002\u5b83\u5177\u6709 Subversion\uff0cCVS\uff0cPerforce \u548c ClearCase \u4e4b\u7c7b\u7684 SCM \u5de5\u5177\uff0c\u5177\u6709",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/about/branching-and-merging"},"\u5ec9\u4ef7\u7684\u672c\u5730\u5206\u652f"),"\uff0c\u65b9\u4fbf\u7684",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/about/staging-area"},"\u6682\u5b58\u533a\u57df"),"\u548c ",(0,a.kt)("a",{parentName:"p",href:"https://git-scm.com/about/distributed"},"\u591a\u4e2a\u5de5\u4f5c\u6d41\u7b49\u529f\u80fd"),"\u3002"),(0,a.kt)("p",null,"1\u3001\u5206\u652f\u4e0e\u5408\u5e76"),(0,a.kt)("p",null,"2\u3001\u5c0f\u800c\u5feb\u901f"),(0,a.kt)("p",null,"3\u3001\u5206\u6563\u5f0f"),(0,a.kt)("p",null,"4\u3001\u8d44\u6599\u4fdd\u8bc1"),(0,a.kt)("p",null,"5\u3001\u514d\u8d39\u548c\u5f00\u6e90"))}m.isMDXComponent=!0}}]);