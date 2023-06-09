"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8294],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||g[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(1966),o=(r(9496),r(9613));const i={title:"\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55"},a=void 0,l={unversionedId:"note/git/\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55",id:"note/git/\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55",title:"\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55",description:"Git \u7ec8\u7aef\u67e5\u770b git \u63d0\u4ea4\u8bb0\u5f55",source:"@site/docs/note/git/\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55.md",sourceDirName:"note/git",slug:"/note/git/\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55",permalink:"/docs/note/git/\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55",draft:!1,tags:[],version:"current",frontMatter:{title:"\u7ec8\u7aef\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55"},sidebar:"note",previous:{title:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",permalink:"/docs/note/git/\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054"},next:{title:"\u91cd\u547d\u540d\u6700\u8fd1\u7684\u4e00\u6b21commit",permalink:"/docs/note/git/\u91cd\u547d\u540d\u6700\u65b0\u7684\u4e00\u6b21commit"}},c={},p=[{value:"Git \u7ec8\u7aef\u67e5\u770b git \u63d0\u4ea4\u8bb0\u5f55",id:"git-\u7ec8\u7aef\u67e5\u770b-git-\u63d0\u4ea4\u8bb0\u5f55",level:4},{value:"Git\u4f18\u96c5\u7684\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\uff0c\u5e76\u5c55\u793a\u5206\u652f\u5408\u5e76\u8def\u5f84\u56fe",id:"git\u4f18\u96c5\u7684\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\u5e76\u5c55\u793a\u5206\u652f\u5408\u5e76\u8def\u5f84\u56fe",level:4}],s={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"git-\u7ec8\u7aef\u67e5\u770b-git-\u63d0\u4ea4\u8bb0\u5f55"},"Git \u7ec8\u7aef\u67e5\u770b git \u63d0\u4ea4\u8bb0\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"git log     // git \u9ed8\u8ba4\u63d0\u4f9b\u7684\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\u547d\u4ee4\n")),(0,o.kt)("h4",{id:"git\u4f18\u96c5\u7684\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\u5e76\u5c55\u793a\u5206\u652f\u5408\u5e76\u8def\u5f84\u56fe"},"Git\u4f18\u96c5\u7684\u67e5\u770b\u63d0\u4ea4\u8bb0\u5f55\uff0c\u5e76\u5c55\u793a\u5206\u652f\u5408\u5e76\u8def\u5f84\u56fe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"git config --global alias.lg \"log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit\"\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"git lg   // \u67e5\u770bgit\u5408\u5e76\u53d8\u5316\n")))}g.isMDXComponent=!0}}]);