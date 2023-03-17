"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9164],{7942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(1163),a=(r(959),r(7942));const o={title:"\u5355\u5206\u652frebase\u63d0\u4ea4"},i=void 0,l={unversionedId:"note/git/\u5355\u5206\u652frebase\u63d0\u4ea4",id:"note/git/\u5355\u5206\u652frebase\u63d0\u4ea4",title:"\u5355\u5206\u652frebase\u63d0\u4ea4",description:"Git \u5355\u5206\u652frebase\u63d0\u4ea4",source:"@site/docs/note/git/\u5355\u5206\u652frebase\u63d0\u4ea4.md",sourceDirName:"note/git",slug:"/note/git/\u5355\u5206\u652frebase\u63d0\u4ea4",permalink:"/docs/note/git/\u5355\u5206\u652frebase\u63d0\u4ea4",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5355\u5206\u652frebase\u63d0\u4ea4"},sidebar:"note",previous:{title:"\u5355\u4e2a\u6587\u4ef6\u8fd8\u539f\u5230\u67d0\u6b21commit",permalink:"/docs/note/git/\u5355\u4e2a\u6587\u4ef6\u8fd8\u539f\u5230\u67d0\u6b21commit"},next:{title:"\u57fa\u7840\u4ecb\u7ecd",permalink:"/docs/note/git/\u57fa\u7840\u4ecb\u7ecd"}},c={},s=[{value:"Git \u5355\u5206\u652frebase\u63d0\u4ea4",id:"git-\u5355\u5206\u652frebase\u63d0\u4ea4",level:2},{value:"\u901a\u8fc7rebase\u5408\u5e76\u63d0\u4ea4\u4ee3\u7801\uff0c\u4f7f\u63d0\u4ea4\u8bb0\u5f55\u4fdd\u6301\u4e00\u6761\u76f4\u7ebf\uff0c\u89e3\u51b3\u4ee3\u7801\u96be\u4ee5\u8ffd\u8e2a\u4fee\u6539\u4eba\u7684\u95ee\u9898",id:"\u901a\u8fc7rebase\u5408\u5e76\u63d0\u4ea4\u4ee3\u7801\u4f7f\u63d0\u4ea4\u8bb0\u5f55\u4fdd\u6301\u4e00\u6761\u76f4\u7ebf\u89e3\u51b3\u4ee3\u7801\u96be\u4ee5\u8ffd\u8e2a\u4fee\u6539\u4eba\u7684\u95ee\u9898",level:3},{value:"\u65b9\u6cd5\u4e00\u3001",id:"\u65b9\u6cd5\u4e00",level:3},{value:"\u65b9\u6cd5\u4e8c\u3001",id:"\u65b9\u6cd5\u4e8c",level:3}],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"git-\u5355\u5206\u652frebase\u63d0\u4ea4"},"Git \u5355\u5206\u652frebase\u63d0\u4ea4"),(0,a.kt)("h3",{id:"\u901a\u8fc7rebase\u5408\u5e76\u63d0\u4ea4\u4ee3\u7801\u4f7f\u63d0\u4ea4\u8bb0\u5f55\u4fdd\u6301\u4e00\u6761\u76f4\u7ebf\u89e3\u51b3\u4ee3\u7801\u96be\u4ee5\u8ffd\u8e2a\u4fee\u6539\u4eba\u7684\u95ee\u9898"},"\u901a\u8fc7rebase\u5408\u5e76\u63d0\u4ea4\u4ee3\u7801\uff0c\u4f7f\u63d0\u4ea4\u8bb0\u5f55\u4fdd\u6301\u4e00\u6761\u76f4\u7ebf\uff0c\u89e3\u51b3\u4ee3\u7801\u96be\u4ee5\u8ffd\u8e2a\u4fee\u6539\u4eba\u7684\u95ee\u9898"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"git add .\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'git commit -m "\u63d0\u4ea4\u4fe1\u606f"\n')),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00"},"\u65b9\u6cd5\u4e00\u3001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"git fetch --all    // \u62c9\u53d6\u7ebf\u4e0a\u6240\u6709\u6700\u65b0\u4ee3\u7801\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"git rebase origin/dev  // \u901a\u8fc7rebase\u5c06\u672c\u5730\u66f4\u6539\u4e0e\u7ebf\u4e0adev\u5206\u652f\u66f4\u6539\u5408\u5e76\n")),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c"},"\u65b9\u6cd5\u4e8c\u3001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"git pull --rebase\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"git push  // \u63d0\u4ea4\u4ee3\u7801\n")))}m.isMDXComponent=!0}}]);