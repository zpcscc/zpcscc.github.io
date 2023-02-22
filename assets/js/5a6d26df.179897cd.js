"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9720],{9613:(n,t,e)=>{e.d(t,{Zo:()=>p,kt:()=>f});var o=e(9496);function r(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){r(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function l(n,t){if(null==n)return{};var e,o,r=function(n,t){if(null==n)return{};var e,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(r[e]=n[e])}return r}var s=o.createContext({}),c=function(n){var t=o.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},p=function(n){var t=c(n.components);return o.createElement(s.Provider,{value:t},n.children)},u="mdxType",d={inlineCode:"code",wrapper:function(n){var t=n.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),u=c(e),b=r,f=u["".concat(s,".").concat(b)]||u[b]||d[b]||a;return e?o.createElement(f,i(i({ref:t},p),{},{components:e})):o.createElement(f,i({ref:t},p))}));function f(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=n,l[u]="string"==typeof n?n:r,i[1]=l;for(var c=2;c<a;c++)i[c]=e[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,e)}b.displayName="MDXCreateElement"},2896:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=e(1163),r=(e(9496),e(9613));const a={title:"\u57fa\u7840\u4ecb\u7ecd",sidebar:"auto",date:new Date("2019-06-21T00:00:00.000Z"),categories:["\u524d\u7aef"],tags:["css"]},i=void 0,l={unversionedId:"note/css/\u57fa\u7840\u4ecb\u7ecd",id:"note/css/\u57fa\u7840\u4ecb\u7ecd",title:"\u57fa\u7840\u4ecb\u7ecd",description:"CSS \u57fa\u7840\u4ecb\u7ecd",source:"@site/docs/note/css/\u57fa\u7840\u4ecb\u7ecd.md",sourceDirName:"note/css",slug:"/note/css/\u57fa\u7840\u4ecb\u7ecd",permalink:"/docs/note/css/\u57fa\u7840\u4ecb\u7ecd",draft:!1,tags:[{label:"css",permalink:"/docs/tags/css"}],version:"current",frontMatter:{title:"\u57fa\u7840\u4ecb\u7ecd",sidebar:"auto",date:"2019-06-21T00:00:00.000Z",categories:["\u524d\u7aef"],tags:["css"]},sidebar:"note",previous:{title:"package\u5305\u7248\u672c\u524d\u7b26\u53f7\u542b\u4e49",permalink:"/docs/note/Webpack/package\u5305\u7248\u672c\u524d\u7b26\u53f7\u542b\u4e49"},next:{title:"\u5c4f\u853d\u70b9\u51fb\u4e8b\u4ef6",permalink:"/docs/note/css/\u5c4f\u853d\u70b9\u51fb\u4e8b\u4ef6"}},s={},c=[{value:"CSS \u57fa\u7840\u4ecb\u7ecd",id:"css-\u57fa\u7840\u4ecb\u7ecd",level:2}],p={toc:c},u="wrapper";function d(n){let{components:t,...e}=n;return(0,r.kt)(u,(0,o.Z)({},p,e,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"css-\u57fa\u7840\u4ecb\u7ecd"},"CSS \u57fa\u7840\u4ecb\u7ecd"),(0,r.kt)("p",null,"CSS\uff08\u5c42\u53e0\u6837\u5f0f\u8868\uff09\n\u7528\u6765\u8868\u73b0html\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u9759\u6001\u7684\u4fee\u9970\u7f51\u9875\uff0c\u8fd8\u53ef\u4ee5\u9002\u914d\u5404\u79cd\u811a\u672c\u8bed\u8a00\u52a8\u6001\u7684\u5bf9\u7f51\u9875\u5404\u5143\u7d20\u8fdb\u884c\u683c\u5f0f\u5316\n\u5728css\u4e2d\u7528\u6237\u770b\u5230\u7684\u5927\u90e8\u5206\u6548\u679c\u90fd\u662f\u5404\u79cd\u6837\u5f0f\u91cd\u53e0\u4e4b\u540e\u5f62\u6210\u7684\n\u6838\u5fc3\u662f\u5c42\u53e0\uff0c\u591a\u91cd\u5c5e\u6027\u53e0\u52a0\u5171\u540c\u4f5c\u7528\n\u5b9e\u73b0\u4e86\u5185\u5bb9\u4e0e\u6837\u5f0f\u76f8\u5206\u79bb\n\u63d0\u9ad8\u4e86\u4ee3\u7801\u7684\u53ef\u91cd\u7528\u6027"),(0,r.kt)("p",null,"css3\u4ecb\u7ecd\n\u76f8\u5bf9\u4e8ecss2\u6765\u8bf4\uff0ccss3\u66f4\u65b0\u4e86\u5f88\u591a\u7684\u5185\u5bb9\uff0c\u5176\u4e2d\u5305\u62ec\u9009\u62e9\u5668\u3001\u989c\u8272\u3001\u9634\u5f71\u3001\u80cc\u666f\u3001\u6587\u672c\u3001\u8fb9\u6846\u3001\u65b0\u7684\u5e03\u5c40\u65b9\u6848\u30012d\u30013d\u3001\u52a8\u753b\u7b49\u7b49\u3002\n\u4e3a\u4e86\u66f4\u597d\u7684\u517c\u5bb9\uff0c\u5728\u6211\u4eec\u4f7f\u7528\u67d0\u4e9bcss3\u7684\u5c5e\u6027\u7684\u65f6\u5019\uff0c\u662f\u9700\u8981\u52a0\u4e0a\u6d4f\u89c8\u5668\u5185\u6838\u524d\u7f00\u7684\uff0c\u4f8b\u5982-webkit-border-radius:10px;\u3002\n\u5982\u679c\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u9700\u8981\u5927\u91cf\u7684\u5199\u6d4f\u89c8\u5668\u524d\u7f00\uff0c\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91\u5668\u7684\u63d2\u4ef6\u6216\u8005\u901a\u8fc7\u5728\u7ebf\u7684\u5e73\u53f0\u8fdb\u884c\u524d\u7f00\u8865\u5168\u3002"),(0,r.kt)("p",null,"\u6837\u5f0f\u8868\u7684\u7279\u6027\n\u7ee7\u627f\u6027\n\u76f4\u63a5\u4f7f\u7528\u5176\u7236\u5143\u7d20\u5df2\u7ecf\u58f0\u660e\u597d\u7684\u6837\u5f0f\n\u5927\u90e8\u5206\u7684\u5c5e\u6027\u90fd\u662f\u53ef\u4ee5\u88ab\u7ee7\u627f\u7684\n\u5c42\u53e0\u6027\n\u53ef\u4ee5\u4e3a\u4e00\u4e2a\u5143\u7d20\u8bbe\u7f6e\u5f88\u591a\u9009\u62e9\u5668\n\u53ea\u8981\u6837\u5f0f\u4e0d\u53d1\u751f\u51b2\u7a81\uff0c\u5c31\u53ef\u4ee5\u770b\u4f5c\u4e00\u4e2a\n\u4f18\u5148\u7ea7\n\u5f53\u6837\u5f0f\u53d1\u751f\u51b2\u7a81\u65f6\uff0c\u4ed6\u4eec\u4f1a\u6309\u7167\u4e0d\u540c\u4f7f\u7528\u65b9\u5f0f\u7684\u4f18\u5148\u7ea7\u6765\u5e94\u7528\n\u6d4f\u89c8\u5668\u7684\u7f3a\u7701\u8bbe\u7f6e\uff08\u5ffd\u7565\u4e0d\u8ba1\uff09\n\u5916\u90e8\u6837\u5f0f\u6216\u8005\u5185\u90e8\u6837\u5f0f \u4e2d\u7b49\u2014\u2014\u9075\u5b88\u5c31\u8fd1\u539f\u5219\uff0c\u4ece\u4e0a\u5411\u4e0b\u6267\u884c\uff0c\u540e\u9762\u7684\u4f1a\u8986\u76d6\u524d\u9762\u7684\n\u5185\u8054\u6837\u5f0f\u4f18\u5148\u7ea7\u6700\u9ad8\n!important\n\u8c03\u6574\u4f18\u5148\u7ea7\u7684\n\u4e0d\u7ba1\u4ec0\u4e48\u65f6\u5019\u5168\u90e8\u4ee5!important\u4e3a\u51c6\uff0c\u5c3d\u91cf\u5c11\u7528"),(0,r.kt)("p",null,"CSS\u7edf\u7b79\n\u6587\u6863\u7edf\u7b79\n\u6574\u7ad9\u91cc\u76f8\u540c\u7684css\u6837\u5f0f\u63d0\u53d6\u5230\u4e00\u4e2a\u6837\u5f0f\u8868\u91cc,\u5404\u4e2a\u9875\u9762\u8c03\u7528\u76f8\u540c\u7684\u6837\u5f0f\u6587\u4ef6\u5373\u53ef\n\u7f51\u7ad9\u8f83\u5927\u7684\u60c5\u51b5\u4e0b\u4e00\u73ed\u4f1a\u628a\u7f51\u7ad9\u7684\u5934\u90e8,\u5c3e\u90e8\u5355\u72ec\u5206\u79bb\u51fa\u6765,\u5305\u62ec\u6837\u5f0f\u6587\n\u7f51\u7ad9\u81ea\u8eab\u4f18\u5316\n\u9875\u9762\u5934\u90e8\u4f18\u5316:\n\u9875\u9762\u5934\u90e8\u6307\u7684\u662f\u4ee3\u7801\u90e8\u5206,\u5177\u4f53\u7684\u5c31\u662f(Description)\u63cf\u8ff0\u548c(Keywords)\u5173\u952e\u5b57\u4e24\u90e8\u5206\n\u63cf\u8ff0\n\u5e94\u8be5\u7528\u8fd1\u4e4e\u63cf\u8ff0\u7684\u8bed\u8a00\u5199\u4e0b\u4e00\u6bb5\u4ecb\u7ecd\u7f51\u9875\u7684\u6587\u5b57,\u5728\u5176\u4e2d,\u4f60\u5e94\u8be5\u9002\u5f53\u7684\u5bf9\u4f60\u7684\u7f51\u7ad9\u7684\u7279\u8272\u5185\u5bb9\u52a0\u4ee5\u91cd\u590d\u4ee5\u6c42\u7a81\u51fa"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'            <meta name="description" cntent="">\u544a\u8bc9\u641c\u7d22\u5f15\u64ce\u4f60\u7684\u7ad9\u70b9\u7684\u4e3b\u8981\u5185\u5bb9\n        \u5173\u952e\u5b57\n            \u5e94\u8be5\u5217\u51fa\u4f60\u8ba4\u4e3a\u5408\u9002\u7684,\u80fd\u7a81\u51fa\u7f51\u7ad9\u5185\u5bb9\u7684\u5173\u952e\u5b57\u5c31\u53ef\u4ee5\u4e86,\u5173\u952e\u5b57\u4e0d\u8981\u8bbe\u7f6e\u592a\u591a,\u53ef\u8bbe\u7f6e8-10\u4e2a,\u641c\u7d22\u5f15\u64ce\u667a\u6167\u6d4f\u89c8\u9760\u524d\u7684\u51e0\u4e2a\u5173\u952e\u5b57\n            <meta name="keywords" content="">\u5411\u641c\u7d22\u5f15\u64ce\u8bf4\u660e\u4f60\u7f51\u9875\u7684\u5173\u952e\u5b57\n    \u8d85\u94fe\u63a5\u4f18\u5316\n        \u641c\u7d22\u5f15\u64ce\u6709\u4e2a\u4f1a\u81ea\u52a8\u722c\u884c\u4e8e\u4e92\u8054\u7f51\u4e0a\u7684\u673a\u5668\u4eba\u7a0b\u5e8f,\u8fd9\u4e2a\u673a\u5668\u4eba\u987a\u7740\u7f51\u7ad9\u4e4b\u95f4\u7684\u94fe\u63a5\u6e38\u89c8\u4e16\u754c\n        \u91c7\u7528\u7eaf\u6587\u672c\u94fe\u63a5;\n        \u5c3d\u91cf\u4e0d\u8981\u7528flash\u52a8\u753b\u8bbe\u7f6e\u94fe\u63a5\u548c\u56fe\u7247\u94fe\u63a5,\u56e0\u4e3a\u641c\u7d22\u5f15\u64ce\u8bc6\u522b\u4e0d\u4e86flash\u4e0a\u4e3a\u6587\u5b57\n        \u6309\u89c4\u8303\u4e66\u5199\u8d85\u94fe\u63a5,title:\u8d77\u5230\u63d0\u793a\u8bbf\u5ba2\u7684\u4f5c\u7528,\u4e5f\u53ef\u4ee5\u8ba9\u641c\u7d22\u5f15\u64ce\u77e5\u9053\u5b83\u8981\u53bb\u54ea\n    \u56fe\u7247\u4f18\u5316\n        \u56fe\u7247\u4f18\u5316\u662f\u4e3a\u6bcf\u4e2a\u56fe\u7247\u6dfb\u52a0alt\u5c5e\u6027\n        alt\u5c5e\u6027\u7684\u4f5c\u7528\u662f\u5f53\u56fe\u7247\u65e0\u6cd5\u663e\u793a\u65f6,\u4ee5\u6587\u5b57\u7684\u5f62\u4f5c\u4e3a\u66ff\u4ee3\u663e\u793a\u51fa\u6765,\u800c\u5bf9\u4e8eeso\u6765\u8bf4,\u4ed6\u53ef\u4ee5\u4ee4\u641c\u7d22\u5f15\u64ce\u6709\u673a\u4f1a\u7d22\u5f15\u5230\u4f60\u7f51\u7ad9\u4e0a\u7684\u56fe\u7247\n        \u5bf9\u4e8e\u4e00\u4e9b\u6ca1\u6709\u4ec0\u4e48\u610f\u4e49\u7684\u56fe\u7247,\u6700\u597d\u4e5f\u5199alt,\u53ef\u4ee5\u5199\u4f5c alt=""\n    \u907f\u514d\u5927\u4f53\u79ef\u7684\u9875\u9762\n        \u6709\u7ecf\u9a8c\u8868\u660e,\u641c\u7d22\u5f15\u64ce\u4e0d\u559c\u6b22\u7d22\u5f15\u8fc7\u5927\u7684\u9875\u9762,\u5373\u4e00\u4e2a\u9875\u9762\u4ee3\u7801\u90e8\u5206\u7684\u4f53\u79ef\u4e0d\u8981\u592a\u5927,\u63a7\u5236\u5728100kb\u5185\u4e3a\u4f73\n    \u5408\u7406\u7684\u4ee3\u7801\u7ed3\u6784\n        \u641c\u7d22\u5f15\u64ce\u7ec6\u5316\u683c\u5f0f\u6e05\u6670,\u7ed3\u6784\u5206\u660e\u7684\u9875\u9762,\u7406\u8bba\u4e0aXML\u662f\u6700\u5408\u4e4e \u641c\u7d22\u5f15,\u5f53\u7136\u8fd9\u592a\u6781\u7aef\n        \u5982\u679c\u91c7\u7528XHTML+CSS\u6280\u672f\u5c06\u9875\u9762\u6570\u636e\u540c\u8868\u73b0\u5206\u79bb,\u5373\u907f\u514d\u5927\u91cf\u5d4c\u5957\u8868\u683c\u548c\u5176\u4ed6\u5197\u4f59\u7684\u4ee3\u7801,\u8fd8\u662f\u80fd\u591f\u5b8c\u7f8e\u5b9e\u73b0\u8fd9\u4e00\u8981\u6c42\u7684\nCSS\u89c4\u8303\n    \u547d\u540d\u65b9\u6cd5\n        \u8bed\u4e49\u5316\u547d\u540d\n        \u7ed3\u6784\u5316\u547d\u540d\n    css\u547d\u540d\n        \u5efa\u8bae\u4f7f\u7528\u5c0f\u5199\u5b57\u6bcd\n        \u4ee5\u82f1\u6587\u5b57\u6bcd\u5f00\u5934,\u540e\u9762\u53ef\u4ee5\u8fde\u63a5\u6570\u5b57,\u5b57\u6bcd,\u4e0b\u5212\u7ebf,\u8fde\u5b57\u7b26,\u5efa\u8bae\u5c3d\u91cf\u4f7f\u7528\u82f1\u6587\u5b57\u6bcd,\u9002\u5f53\u4f7f\u7528\u4e0b\u5212\u7ebf\u548c\u8fde\u63a5\u7ebf\n        \u8bcd\u5fc5\u8fbe\u610f,\u540d\u79f0\u8981\u53cd\u6620\u7528\u9014\u548c\u76f8\u5173\u4fe1\u606f,\u540c\u65f6\u4e5f\u8981\u7b80\u77ed\nCSS reset\n    \u5728html\u4e2d\u6709\u9ed8\u8ba4\u7684\u6837\u5f0f,\n    \u4f8b\u5982:\n    p\u6807\u7b7e\u6709\u4e0a\u4e0b\u8fb9\u8ddd\n    strong\u6807\u7b7e\u6709\u5b57\u4f53\u52a0\u7c97\u6837\u5f0f\n    em\u6807\u7b7e\u6709\u5b57\u4f53\u503e\u659c\u6837\u5f0f\n    \u4e0d\u540c\u6d4f\u89c8\u5668\u9ed8\u8ba4\u6837\u5f0f\u4e4b\u95f4\u4e5f\u4f1a\u6709\u5dee\u522b\n    \u4f8b\u5982\u7f29\u8fdb\u7684\u6837\u5f0f\n    \u5728ie\u4e0b\u662f\u901a\u8fc7margin\u6765\u5b9e\u73b0\u7684,\n    \u5728firefox\u4e0b\u65f6\u901a\u8fc7padding\u5b9e\u73b0\u7684\n    \u5728\u5207\u6362\u9875\u9762\u7684\u65f6\u5019\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u6837\u5f0f\u901a\u5e38\u4f1a\u7ed9\u6211\u4eec\u5e26\u6765\u9ebb\u70e6,\u5f71\u54cd\u5f00\u53d1\u6548\u7387.\n    \u89e3\u51b3\u65b9\u6cd5:\n        \u4e00\u5f00\u59cb\u5c31\u53bb\u6389\u6d4f\u89c8\u5668\u989d\u9ed8\u8ba4\u6837\u5f0f,\u51c6\u786e\u7684\u8bf4\u662f\u901a\u8fc7\u91cd\u65b0\u5b9a\u4e49\u6807\u7b7e\u6837\u5f0f,\u8986\u76d6\u6d4f\u89c8\u5668\u7684css\u9ed8\u8ba4\u5c5e\u6027,\u6700\u7b80\u5355\u7684\u8bf4\u6cd5\u5c31\u662f\u628a\u6d4f\u89c8\u5668\u63d0\u4f9b\u7684\u9ed8\u8ba4\u6837\u5f0f\u8986\u76d6\u6389,\u8fd9\u5c31\u662fcss reset\n    \u4e3a\u4ec0\u4e48\u7528css reset:\n        \u56e0\u4e3a\u6d4f\u89c8\u5668\u7684\u54c1\u79cd\u5f88\u591a\uff0c\u6bcf\u4e2a\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u6837\u5f0f\u4e5f\u662f\u4e0d\u540c\u7684\uff0c\u6bd4\u5982<button>\u6807\u7b7e\uff0c\u5728IE\u6d4f\u89c8\u5668\u3001Firefox\u6d4f\u89c8\u5668\u4ee5\u53caSafari\u6d4f\u89c8\u5668\u4e2d\u7684\u6837\u5f0f\u90fd\u662f\u4e0d\u540c\u7684\uff0c\u6240\u4ee5\uff0c\u901a\u8fc7\u91cd\u7f6ebutton\u6807\u7b7e\u7684CSS\u5c5e\u6027\uff0c\u7136\u540e\u518d\u5c06\u5b83\u7edf\u4e00\u5b9a\u4e49\uff0c\u5c31\u53ef\u4ee5\u4ea7\u751f\u76f8\u540c\u7684\u663e\u793a\u6548\u679c\u3002\n')),(0,r.kt)("p",null,"\u200b\t"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"BFC \n    \u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587,\u662f\u5229\u7528\u5e03\u5c40\u5757\u7ea7\u76d2\u5b50\u7684\u4e00\u5757\u6e32\u67d3\u533a\u57df\n    \u89e6\u53d1\u673a\u5236:\n        \u6839\u5143\u7d20 html\u5143\u7d20\n        float\u7684\u503c\u4e0d\u4e3anone\n        overflow\u7684\u503c\u4e0d\u4e3avisible\n        diasplay\u7684\u503c\u4e3ainline-block,table-cell,tabel-caption\n        position\u7684\u503c\u4e3aabsolute\u6216fixed\n    \u4f5c\u7528:\n        bfc\u662f\u9875\u9762\u4e0a\u7684\u4e00\u4e2a\u9694\u79bb\u7684\u72ec\u7acb\u5bb9\u5668,\u5bb9\u5668\u91cc\u9762\u7684\u5b50\u5143\u7d20\u4e0d\u4f1a\u5f71\u54cd\u5916\u9762\u5143\u7d20,\u53cd\u4e4b\u4ea6\u7136\n        \u6e05\u9664\u6d6e\u52a8\u5e26\u6765\u7684\u5f71\u54cd\n        \u89e3\u51b3maigin\u584c\u9677\u7684\u95ee\u9898\n    bfc\u4e0e\u666e\u901a\u5757\u7ea7\u5143\u7d20\u7684\u5dee\u5f02\n        \u53ef\u4ee5\u963b\u6b62\u5143\u7d20\u88ab\u6d6e\u52a8\u5143\u7d20\u8986\u76d6\n        \u53ef\u4ee5\u5305\u542b\u6d6e\u52a8\u5143\u7d20\n")),(0,r.kt)("p",null,"\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\n\u200b\ncss\u4e09\u79cd\u4f7f\u7528\u65b9\u5f0f\uff1a\n\u200b\t\u5185\u8054\u6837\u5f0f\uff1a\u628acss\u6837\u5f0f\u5199\u5728\u6807\u7b7e\u7684style\u5c5e\u6027\u5f53\u4e2d\n\u200b\t\u5185\u90e8\u6837\u5f0f\uff1a\u901a\u8fc7style\u6807\u7b7e\u5199\u5728head\u6807\u7b7e\u4e2d\n\u200b\t\u5916\u90e8\u6837\u5f0f\uff1a\u901a\u8fc7link\u6807\u7b7e\uff0c\u5c06css\u5199\u5728\u5916\u90e8css\u6587\u4ef6\u4e2d\n\u200b\t\t\u5f15\u5165\u5916\u90e8\u6837\u5f0f\u8868\u7684\u591a\u79cd\u65b9\u5f0f\n\u200b\t\t\thtml\u4e2d\u7684\u65b9\u6cd5\uff1a",(0,r.kt)("link",{rel:"stylesheet",href:"./css/style.css"}),"\n\u200b\t\t\t\trel\u7684\u4f5c\u7528\u5c31\u662f\u7528\u6765\u544a\u8bc9\u6d4f\u89c8\u5668\u6211\u5373\u5c06\u5f15\u7528\u7684\u5916\u90e8\u6587\u4ef6\u7684\u7c7b\u578b\n\u200b\t\t\tcss\u4e2d\u7684\u65b9\u6cd5\uff1a@import url(./css/style.css);\n\u200b\n\u4e09\u79cd\u4f7f\u7528\u65b9\u5f0f\u7684\u533a\u522b\uff1a\n\u200b\t\u4f18\u5148\u7ea7\u4e0d\u540c:\n\u200b\t\t\u5185\u8054\u6837\u5f0f>\u5185\u90e8\u6837\u5f0f=\u5916\u90e8\u6837\u5f0f\n\u200b\t\tlink\u5f15\u5165\u7684\u5916\u90e8\u6837\u5f0f\u8868\u548cstyle\u6807\u7b7e\u7684\u5185\u90e8\u6837\u5f0f\u8868\uff0c\u4f18\u5148\u7ea7\u76f8\u540c\u3002\u8c01\u5728\u540e\u9762\u542c\u8c01\u7684\u3002\u540e\u6765\u8005\u5c45\u4e0a\n\u200b\t\t\t\u8bf7\u4f7f\u7528\u4e00\u79cd\u65b9\u5f0f\u8bc1\u660e\u4e09\u79cd\u65b9\u5f0f\u7684\u4f18\u5148\u7ea7\uff1a\n\u200b\t\t\t\t\u7528\u4e09\u79cd\u65b9\u5f0f\u540c\u65f6\u5bf9\u4e00\u4e2a\u6807\u7b7e\u7684\u5c5e\u6027\u8fdb\u884c\u8bbe\u7f6e\uff0c\u770b\u6700\u540e\u663e\u793a\u7684\u6548\u679c\n\u200b\t\u4f5c\u7528\u57df\uff1a\n\u200b\t\t\u5185\u8054\u6837\u5f0f\u7684\u4f5c\u7528\u57df\u6700\u5c0f\uff0c\u53ea\u6709\u5f53\u524d\u6807\u7b7e\n\u200b\t\t\u5185\u90e8\u6837\u5f0f\u8868\u4f5c\u7528\u57df\u662f\u5f53\u524d\u7684html\u6587\u4ef6\n\u200b\t\t\u5916\u90e8\u6837\u5f0f\u8868\u4f5c\u7528\u57df\u9002\u7528\u4e8e\u6240\u6709\u7684\u6587\u4ef6\n\u200b\t\tcss\u7edf\u7b79\n\u200b\t\t\t\u6587\u6863\u7edf\u7b79\n\u200b\t\t\t\t\u5c06\u4e00\u4e2a\u7f51\u7ad9\u51e0\u5341\u4e2a\u7f51\u9875\u76f8\u540c\u7684css\u63d0\u53d6\u5230\u4e00\u4e2acss\u6837\u5f0f\u8868\u91cc\n\u200b\t\t\t\t\t\u4f8b\u5982\u4e00\u4e2a\u7f51\u7ad9\u7684\u5934\u548c\u5c3e\n\u200b\n\u200b\t\t\t"),(0,r.kt)("p",null,'\u80cc\u666f\u5c5e\u6027\uff1a\n\u80cc\u666f\u989c\u8272\uff1a\n\u5c5e\u6027\uff1abackground-color\n\u53d6\u503c\uff1a\n\u5408\u6cd5\u7684\u989c\u8272\u503c\ntransparent:\u900f\u660e\u989c\u8272\n\u6ce8\u610f\uff1a\n\u80cc\u666f\u989c\u8272\u4f1a\u586b\u5145\u5230\u6240\u6709\u533a\u57df\n\u80cc\u666f\u56fe\u7247\nbackground-image\uff1a\n\u53d6\u503c\uff1a\nurl\uff08""\uff09\nbackground-image\nimg\n\u80cc\u666f\u91cd\u590d\uff08\u91cd\u94fa\uff09\n\u5f53\u5143\u7d20\u533a\u57df\u5927\u4e8e\u80cc\u666f\u56fe\uff0c\u5219\u9ed8\u8ba4\u662f\u4ee5\u5e73\u94fa\u7684\u65b9\u5f0f\u51fa\u73b0\n\u5c5e\u6027\uff1a\nbackground-repeat\n\u53d6\u503c\uff1a\nrepeat\n\u9ed8\u8ba4\u503c\uff08\u80cc\u666f\u91cd\u590d\u7684\uff09\nrepeat-x\n\u5728\u6c34\u5e73\u65b9\u5411\u4e0a\u5e73\u94fa\nrepeat-y\n\u5728\u5782\u76f4\u65b9\u5411\u4e0a\u5e73\u94fa\nno-repeat\n\u4e0d\u5e73\u94fa\n\u80cc\u666f\u56fe\u7247\u5c3a\u5bf8\n\u5c5e\u6027\uff1a\nbackground-size\n\u53d6\u503c\uff1a\nwidth height\nwidth% height%\ncover\n\u5c06\u56fe\u7247\u7b49\u6bd4\u653e\u5927\u76f4\u5230\u8986\u76d6\u6574\u4e2a\u533a\u57df\u4e3a\u6b62\ncontain\n\u5305\u542b\n\u80cc\u666f\u56fe\u7247\u7684\u56fa\u5b9a\uff1a\n\u4f5c\u7528\uff1a\n\u8ba9\u80cc\u666f\u4e00\u76f4\u4fdd\u6301\u5728\u53ef\u89c6\u5316\u533a\u57df\u4e2d\uff0c\u4e0d\u968f\u7740\u6eda\u52a8\u6761\u7684\u6539\u53d8\u800c\u6539\u53d8\n\u5c5e\u6027\uff1a\nbackground-attachment\n\u53d6\u503c\uff1a\nscroll\n\u6eda\u52a8\uff08\u9ed8\u8ba4\u503c\uff09\nfixed\n\u56fa\u5b9a\nbackground-position\n\u53d6\u503c\uff1a\nx y\nx\u4e3a\u6b63\uff0c\u5219\u80cc\u666f\u56fe\u7247\u5411\u53f3\u79fb\nx\u4e3a\u8d1f\uff0c\u5219\u80cc\u666f\u56fe\u7247\u5411\u5de6\u79fb\ny\u4e3a\u6b63\uff0c\u5219\u80cc\u666f\u56fe\u7247\u5411\u4e0b\u79fb\ny\u4e3a\u8d1f\uff0c\u5219\u80cc\u666f\u56fe\u7247\u5411\u4e0a\u79fb\nx% y%\n0% 0%       \u5f53\u524d\u5bb9\u5668\u5de6\u4e0a\u89d2\n100% 100%   \u5f53\u524d\u5bb9\u5668\u53f3\u4e0b\u89d2\n50% 50%     \u5f53\u524d\u5bb9\u5668\u6b63\u4e2d\u592e\n\u5173\u952e\u5b57\nx:left right center\ny:top bottom center\n\u96ea\u78a7\u56fe/\u7cbe\u7075\u56fe\nCSS sprites\n\u5c06\u82e5\u5e72\u5c0f\u56fe\u7247\u653e\u8fdb\u4e00\u5f20\u5927\u56fe\u4e2d\n\u4ee5\u51cf\u5c11HTTP\u8bf7\u6c42\u6b21\u6570'),(0,r.kt)("p",null,'\u80cc\u666f\u56fe\u7247\u7684\u7b80\u5199\nbackground:color url("") repeat attachment position;\nurl("")\u548cposition\u5fc5\u987b\u540c\u65f6\u4f7f\u7528\uff0c\u5176\u4ed6\u968f\u610f\u7ec4\u5408\t'),(0,r.kt)("p",null,"\u6e10\u53d8\uff1a\n\u4ec0\u4e48\u662f\uff1f\n\u4e24\u79cd\u6216\u8005\u591a\u79cd\u989c\u8272\u5e73\u7f13\u8fc7\u6e21\u7684\u6548\u679c\n\u91cd\u8981\u5143\u7d20\n\u8272\u6807\uff1a\u6307\u5b9a\u6bcf\u4e00\u4e2a\u989c\u8272\u51fa\u73b0\u7684\u4f4d\u7f6e\u4ee5\u53ca\u503c\n\u5206\u7c7b\uff1a\n\u7ebf\u6027\u6e10\u53d8\n\u662f\u4ee5\u76f4\u7ebf\u7684\u65b9\u5f0f\u6765\u586b\u5145\u989c\u8272\n\u5f84\u5411\u6e10\u53d8\n\u662f\u4ee5\u5706\u5f62\u7684\u65b9\u5f0f\u6765\u586b\u5145\u989c\u8272\n\u8bed\u6cd5\uff1a\n\u7ebf\u6027\u6e10\u53d8\n\u5c5e\u6027\uff1a\nbackground-image\n\u53d6\u503c\uff1a\n\u7ebf\u6027\u6e10\u53d8\u53d6\u503c\uff1a\nlinear-gradient\uff08angle,color-point1,color-point2,color-point3\uff09\nangle:\n\u5173\u952e\u503c\uff1a\nto top\nto tight\nto left\nto bottom\n\u5177\u4f53\u7684\u89d2\u5ea6\u503c\n0-360deg\n\u5f84\u5411\u6e10\u53d8\u53d6\u503c\uff1a\n\u5c5e\u6027\uff1a\nbackground-image\n\u53d6\u503c\uff1a\n\u5f84\u5411\u6e10\u53d8\u53d6\u503c\uff1a\nradial-gradient\uff08color-point1,color-point2,color-point3\uff09\nangle:\n\u5173\u952e\u503c\uff1a\nto top\nto tight\nto left\nto bottom\n\u5177\u4f53\u7684\u89d2\u5ea6\u503c\n0-360deg"),(0,r.kt)("p",null,"\u5b9a\u4f4d\uff1a\u6539\u53d8\u5143\u7d20\u5728\u7f51\u9875\u4e2d\u7684\u9ed8\u8ba4\u4f4d\u7f6e\n\u5206\u7c7b\uff1a\u666e\u901a\u6d41\u5b9a\u4f4d\uff1a\u9875\u9762\u4e2d\u9ed8\u8ba4\u7684\u56fa\u5b9a\u65b9\u5f0f\nmargin padding\u6765\u5fae\u8c03\n\u6d6e\u52a8\u5b9a\u4f4d\uff1a\u4f7f\u591a\u4e2a\u5757\u7ea7\u5143\u7d20\u5728\u4e00\u884c\u5185\u663e\u793a\n\u76f8\u5bf9\u5b9a\u4f4d\n\u7edd\u5bf9\u5b9a\u4f4d\n\u56fa\u5b9a\u5b9a\u4f4d\n\u7c98\u6027\u5b9a\u4f4d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    \u666e\u901a\u6d41\u5b9a\u4f4d\uff1a\u53c8\u79f0\u201c\u6587\u6863\u6d41\u5b9a\u4f4d\u201d\n        \u7279\u70b9\uff1a\u6240\u6709\u5757\u7ea7\u5143\u7d20\u90fd\u662f\u4ece\u7236\u5143\u7d20\u5de6\u4e0a\u89d2\u5f00\u59cb\u6392\u5217\n            \u6bcf\u4e2a\u5143\u7d20\u90fd\u6709\u81ea\u5df1\u7684\u63a7\u4ef6\uff0c\u9ed8\u8ba4\u662f\u4e0d\u5141\u8bb8\u88ab\u91cd\u53e0\u7684\n            \u6240\u6709\u7684\u5757\u7ea7\u5143\u7d20\u4ece\u4e0a\u5411\u4e0b\u6392\u5217\n            \u884c\u5185\u5757\u5143\u7d20&&\u884c\u5185\u5143\u7d20\u90fd\u662f\u4ece\u5de6\u5411\u53f3\u6392\u5217\uff0c\u653e\u4e0d\u4e0b\u6362\u884c\n    \u6d6e\u52a8\u5b9a\u4f4d\uff1a\n        \u6d6e\u52a8\uff1a\u5982\u679c\u5c06\u4e00\u4e2a\u5143\u7d20\u8fdb\u884c\u6d6e\u52a8\uff0c\u5177\u6709\u4ee5\u4e0b\u7279\u6027\uff1a\n            \u6d6e\u52a8  \u5c06\u5143\u7d20\u6392\u9664\u5728\u6587\u6863\u6d41\u4e4b\u5916\uff08\u8131\u79bb\u6587\u6863\u6d41\uff09\uff0c\u4e0d\u5360\u636e\u9875\u9762\u7684\u7a7a\u95f4\uff0c\n            \u5176\u4ed6\u5143\u7d20\u4e0a\u524d\u5360\u4f4d\n            \u6d6e\u52a8\u5143\u7d20\u4f1a\u505c\u9760\u5728\u7236\u5143\u7d20\u5de6\u8fb9\u6216\u53f3\u8fb9\uff0c\u6216\u8005\u5176\u4ed6\u5df2\u6d6e\u52a8\u5143\u7d20\u7684\u8fb9\u7f18\u4e0a\n        \u8bed\u6cd5\uff1a\u5c5e\u6027\uff1afloat\n            \u53d6\u503c\uff1a\n                none:\u9ed8\u8ba4\u503c\uff0c\u53ca\u5143\u7d20\u65e0\u4efb\u4f55\u6d6e\u52a8\u6548\u679c\n                left:\u5de6\u6d6e\u52a8\uff0c\u8ba9\u5143\u7d20\u505c\u9760\u5728\u7236\u5143\u7d20\u5de6\u8fb9\uff0c\u6216\u7d27\u6328\u5df2\u6709\u6d6e\u52a8\u5143\u7d20\u53f3\u8fb9\n                right:\u53f3\u6d6e\u52a8\uff0c\u8ba9\u5143\u7d20\u505c\u9760\u5728\u7236\u5143\u7d20\u53f3\u8fb9\uff0c\u6216\u7d27\u6328\u5df2\u6709\u6d6e\u52a8\u5143\u7d20\u5de6\u8fb9\u8fb9\n        \u6d6e\u52a8\u7684\u7279\u6027\uff1a\n            \u6d6e\u52a8\u7684\u5143\u7d20\u8131\u79bb\u6807\u7816\u6587\u6863\u6d41\n                \u5143\u7d20\u4e00\u65e6\u8131\u79bb\u4e86\u6587\u6863\u6d41\u5c31\u4e0d\u5b58\u5728\u7b49\u7ea7\u4e4b\u5206\n            \u6d6e\u52a8\u7684\u5143\u7d20\u4ea7\u751f\u7684\u5b57\u56f4\u6548\u679c\n            \u6d6e\u52a8\u7684\u5143\u7d20\u5f53\u4e00\u884c\u7684\u5bbd\u5ea6\u4e0d\u591f\u4f7f\u7528\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u5f80\u524d\u9762\u7684\u7a7a\u9699\u6324\n            \u5b50\u5143\u7d20\u6d6e\u52a8\u4e4b\u540e\u6700\u597d\u628a\u540c\u7ea7\u7684\u5176\u4ed6\u5b50\u5143\u7d20\u90fd\u6d6e\u52a8\n        \u6d6e\u52a8\u5e26\u6765\u7684\u6076\u52a3\u5f71\u54cd\u5f71\u54cd\uff1a\n            \u5982\u679c\u7236\u5143\u7d20\u6ca1\u6709\u8bbe\u7f6e\u9ad8\u5ea6\uff0c\u513f\u5b50\u5143\u7d20\u5168\u90e8\u90fd\u6d6e\u52a8\u4e86\uff0c\u90a3\u4e48\u7236\u5143\u7d20\u9ad8\u5ea6\u5c06\u53d8\u4e3a0\n            \u524d\u9762\u7684\u5143\u7d20\u6d6e\u52a8\u4e4b\u540e\u4f1a\u5f71\u54cd\u7f51\u9875\u540e\u9762\u5143\u7d20\u7684\u5e03\u5c40\n        \u5982\u4f55\u6e05\u9664\u6d6e\u52a8\u5e26\u6765\u7684\u5f71\u54cd\uff1a\n            \u9694\u5899\u6cd5\uff1aclear both\n                none:\u9ed8\u8ba4\u503c\uff0c\u4e0d\u505a\u4efb\u4f55\u6e05\u9664\u6548\u679c,\u5141\u8bb8\u4e24\u8fb9\u51fa\u73b0\u6d6e\u52a8\n                left:\u6e05\u9664\u524d\u9762\u5143\u7d20\u5de6\u6d6e\u52a8\u5e26\u6765\u7684\u5f71\u54cd\n                right:\u6e05\u9664\u524d\u9762\u4e0e\u5143\u7d20\u53f3\u6d6e\u52a8\u5e26\u6765\u7684\u5f71\u54cd\n                both:\u6e05\u9664\u524d\u9762\u5143\u7d20\u4efb\u4f55\u4e00\u79cd\u6d6e\u52a8\u5e26\u6765\u7684\u5f71\u54cd\n            \u6e05\u9664\u6d6e\u52a8  \u6700\u6210\u719f\u7684\u65b9\u6cd5\u3002\u53ef\u4ee5\u76f4\u63a5\u5199\u5728\u9884\u683c\u5f0f\u6837\u5f0f\u4e2d\n                .clearfix {\n                    *zoom: 1;\n                }\n                .clearfix:before, .clearfix:after {\n                    content: " ";\n                    display: table;\n                }\n                .clearfix:after {\n                    clear: both;\n                }\n            \u7ed9\u7236\u5143\u7d20\u8bbe\u7f6e\u4e00\u4e2a\u5177\u4f53\u7684\u9ad8\u5ea6\n            overflow: hidden;\n                \u6709\u6548\u679c\u662f\u56e0\u4e3a\u89e6\u53d1\u4e86BFC\n                \n    \u76f8\u5bf9\u5b9a\u4f4d\uff1a\u5143\u7d20\u76f8\u5bf9\u4e0e\u5b83\u539f\u6765\u7684\u4f4d\u7f6e\u53d1\u751f\u504f\u79fb\n        \u5c5e\u6027\uff1aposition\n        \u53d6\u503c\uff1arelative\n        \u6ce8\u610f\uff1a\u76f8\u5bf9\u5b9a\u4f4d\u5143\u7d20\u539f\u6765\u4f4d\u7f6e\u4f1a\u88ab\u4fdd\u7559\uff0c\u4e0d\u80fd\u88ab\u5176\u4ed6\u5143\u7d20\u5360\u4f4d\n            \u76f8\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\u5982\u679c\u4e00\u5b9a\uff0c\u53ea\u4e0d\u8fc7\u662f\u89c6\u89c9\u4e0a\u7684\u4f4d\u7f6e\u79fb\u52a8\uff0c\u672c\u8eab\u5e76\u6ca1\u6709\u8fdb\u884c\u79fb\u52a8\n            \u76f8\u5bf9\u5b9a\u4f4d\u5e76\u6ca1\u6709\u591a\u91cc\u6807\u51c6\u6587\u6863\u6d41\n            \u597d\u5904\uff1a\n                \u901a\u8fc7\u76f8\u5bf9\u5b9a\u4f4d\u53ef\u4ee5\u8ba9\u5143\u7d20\u89c6\u89c9\u4e0a\u7075\u6d3b\u7684\u79fb\u52a8\u5230\u6307\u5b9a\u7684\u4f4d\u7f6e\u4e0a\u53bb\uff0c\u5e76\u4e0d\u4f1a\u5f71\u54cd\u5143\u7d20\u672c\u8eab\u7684\u5e03\u5c40\n            \u7f3a\u70b9\uff1a\n                \u76f8\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\u4f4d\u79fb\u53c2\u8003\u662f\u76f8\u5bf9\u4e8e\u5143\u7d20\u672c\u8eab\u7684\u4f4d\u7f6e\uff0c\u4e00\u65e6\u539f\u6765\u672c\u8eab\u7684\u4f4d\u7f6e\u53d1\u751f\u4e86\u6539\u53d8\uff0c\u90a3\u4e48\u76f8\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\u7684\u89c6\u89c9\u4f4d\u7f6e\u4e5f\u4f1a\u5f71\u54cd\u3002\n            \u5143\u7d20\u5f62\u5f71\u5206\u79bb\uff0c\u770b\u5230\u5143\u7d20\u4f4d\u79fb\u4e86\uff0c\u4f46\u539f\u6765\u7684\u4f4d\u7f6e\u8fd8\u5360\u7740\u3002\u53ea\u662f\u770b\u8d77\u6765\u4f4d\u79fb\u4e86\u3002\n            \u79fb\u52a8\u7684\u5f71\u5b50\u53ef\u4ee5\u91cd\u53e0\n            \u770b\u5230\u7684\u5143\u7d20\u79fb\u52a8\u53ea\u662f\u79fb\u52a8\u5f71\u5b50\uff0c\u5b9e\u9645\u672c\u4f53\u8fd8\u5728\u539f\u6765\u7684\u5730\u65b9\u3002\n            margin\u4e0eposition\u533a\u522b\uff1a\n            \u662f\u5426\u5f71\u54cd\u5176\u4ed6\u5143\u7d20\u7684\u4f4d\u7f6e\n    \u7edd\u5bf9\u5b9a\u4f4d\uff1a\u8131\u79bb\u6587\u6863\u6d41\uff0c\u5373\u4e0d\u5360\u636e\u9875\u9762\u7a7a\u95f4\n        \u53ea\u4f1a\u76f8\u5bf9\u4e8e\u79bb\u4ed6\u6700\u8fd1\u7684\u5df2\u5b9a\u4f4d\u7684\u7956\u5148\u5143\u7d20\u53d1\u751f\u4f4d\u7f6e\u7684\u6539\u53d8\n        \u7edd\u5bf9\u5b9a\u4f4d:position:absolute\n            \u4e00\u65e6\u8bbe\u7f6e\u7edd\u5bf9\u5b9a\u4f4d,\u5143\u7d20\u5c31\u8131\u79bb\u7684\u6807\u51c6\u6587\u6863\u6d41,\u4e0d\u518d\u624b\u888b\u6587\u6863\u6d41\u4e2d\u6807\u7b7e\u7684\u7b49\u6781\u9650\u5236\n            \u540c\u65f6\u5143\u7d20\u4e5f\u4f1a\u8131\u79bb\u7684\u6807\u51c6\u6587\u672c\u6d41,\u4e0d\u4f1a\u518d\u5f62\u6210\u7c7b\u4f3c\u4e8e\u6d6e\u52a8\u7684\u5b57\u56f4\u6548\u679c\u4e86.\n            \u7edd\u5bf9\u5b9a\u4f4d\u7684\u4f4d\u79fb\u95ee\u9898\n                \u5b9a\u4f4d\u53c2\u8003\n                    \u7edd\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\u4f4d\u79fb,\u662f\u4ee5\u5177\u6709\u5b9a\u4f4d\u5c5e\u6027\u7684\u7956\u5148\u5143\u7d20\u4e3a\u53c2\u8003.\u53ea\u8981\u662f\u957f\u8f88\u90fd\u884c.\n                    \u5982\u679c\u6240\u6709\u7684\u7956\u5148\u5143\u7d20\u90fd\u6ca1\u6709\u5b9a\u4f4d,\u90a3\u4e48\u5c31\u4f1a\u4ee5body\u4e3a\u53c2\u8003\n                \u5b9a\u4f4d\u9ed8\u8ba4\u503c\n                    \u65e0\u8bba\u662f\u76f8\u5bf9\u5b9a\u4f4d,\u8fd8\u662f\u7edd\u5bf9\u5b9a\u4f4d,\u4f4d\u79fb\u53c2\u6570\u5728\u6ca1\u6709\u8bbe\u7f6e\u7684\u60c5\u51b5\u5199,\u9ed8\u8ba4\u503c\u4e0d\u662f0,\u800c\u662fauto\n                \u4ee5body\u4e3a\u53c2\u8003\u65f6\u7684\u7279\u6b8a\u60c5\u51b5\n                    top:\n                        \u5f53\u4e00\u4e2a\u7edd\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\u4ee5body\u4e3a\u53c2\u8003\u65f6,\u8bbe\u7f6etop\u4e3a\u9996\u5c4f,\u53c2\u8003\u70b9\u4e3a\u9996\u5c4f\u5de6\u4e0a\u89d2.\n                    bottom:\n                        \u5f53\u4e00\u4e2a\u7edd\u5bf9\u5b9a\u4f4d\u7684\u5143\u7d20\u4ee5body\u4e3a\u53c2\u8003\u65f6,\u8bbe\u7f6ebottom,\u53c2\u8003\u70b9\u4e3a\u9996\u5c4f\u5de6\u4e0b\u89d2\n                \u5b50\u7edd\u7236\u76f8\n                    \u5b50\u5143\u7d20\u7edd\u5bf9\u5b9a\u4f4d,\u7236\u5143\u7d20\u76f8\u5bf9\u5b9a\u4f4d.\u5982\u679c\u591a\u4e2a\u7edd\u5bf9\u5b50\u5143\u7d20,\u6700\u5916\u5c42\u7236\u5143\u7d20\u4e00\u5b9a\u8981\u76f8\u5bf9\u5143\u7d20.\n                    \u5982\u679c\u7956\u5148\u5143\u7d20\u4e2d\u5177\u6709\u5b9a\u4f4d\u5c5e\u6027,\u90a3\u4e48\u5c06\u4f1a\u4ee5\u7956\u5148\u5143\u7d20\u4e3a\u53c2\u8003\n                    \u5982\u679c\u4e00\u4e2a\u7956\u5148\u5143\u7d20\u7684\u4f4e\u7aef\u529f\u80fd\u4e3a\u5c5e\u6027\u503c\u4e3astatic,\u90a3\u4e48\u5c06\u4e0d\u80fd\u591f\u4f5c\u4e3a\u5b50\u5143\u7d20\u5b9a\u4f4d\u7684\u53c2\u8003                          \n            \u76f8\u5bf9\u5b9a\u4f4d\u548c\u7edd\u5bf9\u5b9a\u4f4d\u533a\u522b:\n                \u53c2\u7167\u7269\u4e0d\u540c:  \n                    \u7edd\u5bf9\u5b9a\u4f4d\u53c2\u7167\u7269\u662f\u5305\u542b\u5757(\u7236\u7ea7)\n                    \u76f8\u5bf9\u5b9a\u4f4d\u53c2\u7167\u7269\u662f\u672c\u8eab\n                \u6240\u5360\u7a7a\u95f4:\n                    \u7edd\u5bf9\u5b9a\u4f4d\u662f\u5c06\u5bf9\u8c61\u4ece\u6587\u6863\u6d41\u4e2d\u8131\u79bb\u51fa\u6765,\u56e0\u6b64\u4e0d\u5360\u636e\u7a7a\u95f4\n                    \u76f8\u5bf9\u5b9a\u4f4d\u4e0d\u7834\u574f\u6b63\u5e38\u7684\u6587\u6863\u6d41\u987a\u5e8f,\u65e0\u8bba\u662f\u5426\u8fdb\u79fb\u52a8,\u5143\u7d20\u4ecd\u7136\u5360\u636e\u539f\u6765\u7684\u7a7a\u95f4\n                \n    \u56fa\u5b9a\u5b9a\u4f4d:position:fixed\n        \u56fa\u5b9a\u5b9a\u4f4d\u53c2\u8003,\u4ee5\u7f51\u9875\u6d4f\u89c8\u5668\u4e3a\u53c2\u8003\n        \n    \u7c98\u6027\u5b9a\u4f4d:position:sticky\n        \u5b9a\u4f4d\u57fa\u4e8e\u7528\u6237\u6eda\u52a8\u7684\u4f4d\u7f6e\n            \u5728\u9875\u9762\u4e2d\u65f6,\u8ddf\u968f\u7528\u6237\u6eda\u52a8,\u5f00\u59cb\u8d85\u51fa\u53ef\u89c6\u6846\u540e,\u4f1a\u56fa\u5b9a\u5728\u76ee\u6807\u4f4d\u7f6e\n    \n    \u5c42\u7ea7\u5173\u7cfb\n        z-index:\u6570\u5b57. \u9ed8\u8ba4auto\n        \u6570\u5b57\u5927\u7684\u5c42\u53e0\u5728\u4e0a\u9762,\u76f8\u5bf9\u5b9a\u4f4d\u5c31\u53ef\u4ee5\u5728\u4e0d\u5f71\u54cd,\u53ef\u4ee5\u8bbe\u7f6e\u9875\u9762\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528z-index\u503c\n        \u53ea\u80fd\u88ab\u8bbe\u7f6e\u4e86\u5b9a\u4f4d\u7684\u5143\u7d20\u4f7f\u7528\n        \u5c42\u7ea7\u6392\u5e8f    \n            \u5982\u679c\u5927\u5bb6\u90fd\u4e0d\u53bb\u8bbe\u7f6ez-index\u5c31\u4f1a\u91c7\u7528\u540e\u6765\u5c45\u4e0a\u7684\u539f\u5219\n            \u5982\u679c\u5927\u5bb6\u90fd\u8bbe\u7f6e\u4e86z-index\u90a3\u4e48\u8c01\u5927\u542c\u8c01\u7684\n            \u5982\u679c\u7236\u5143\u7d20\u7684z-index\u8f83\u5927,\u53e6\u4e00\u4e2a\u7236\u5143\u7d20\u7684z-index\u503c\u8f83\u5c0f,\u90a3\u4e48\u8f83\u5c0f\u7684\u7236\u5143\u7d20\u7684\u5b50\u5143\u7d20\u6c38\u8fdc\u65e0\u6cd5\u538b\u5012\u8f83\u5927\u7684\u7236\u5143\u7d20\u7684\u5b50\u5143\u7d20\n            (\u7236\u4eb2\u6002\u4e86,\u513f\u5b50\u518dNB\u4e5f\u6ca1\u7528)\n        z-index:\u4e24\u4e2a\u5df2\u7ecf\u5b9a\u4f4d\u7684\u5143\u7d20\u53d1\u751f\u91cd\u53e0\u65f6\uff0c\u901a\u8fc7\u8be5\u5c5e\u6027\u786e\u5b9a\u91cd\u53e0\u5c42\u6b21\n    \n    \u663e\u793a\uff1a\u5c5e\u6027\uff1adisplay\n      \u3000\u3000\u53d6\u503c\uff1anone \u8ba9\u751f\u6210\u7684\u5143\u7d20\u8131\u79bb\u6587\u6863\u6d41\uff0c\u4ece\u9875\u9762\u6d88\u5931\n               block \u8ba9\u751f\u6210\u7684\u5143\u7d20\u8ddf\u5757\u7ea7\u5143\u7d20\u4e00\u6837\n               inline-block \u8ba9\u751f\u6210\u7684\u5143\u7d20\u8ddf\u884c\u5185\u5757\u7ea7\u5143\u7d20\u4e00\u6837\n    \u663e\u793a\u6548\u679c\uff1a\n     \u53ef\u89c1\u6027\uff1a\n            \u5c5e\u6027\uff1avisibility\n            \u53d6\u503c\uff1avisible  \u9ed8\u8ba4\u503c\uff0c\u5143\u7d20\u53ef\u89c1\n                  hidden  \u9690\u85cf\uff0c\u4f46\u672a\u8131\u79bb\u6587\u6863\u6d41\n\n\u5b9a\u4f4d\u5143\u7d20\u7684\u5c42\u7ea7\u5173\u7cfb:\n    z-index:\n        auto:\u9ed8\u8ba4\n        number:\u65e0\u5355\u4f4d\u7684\u6574\u6570\u503c,\u53ef\u4e3a\u8d1f\u6570,\u6570\u503c\u8d8a\u5927,\u5c42\u7684\u987a\u5e8f\u8d8a\u9760\u4e0a\n        Tip:\u6b64\u5c5e\u6027\u4ec5\u4ec5\u4f5c\u7528\u57dfposition\u5c5e\u6027\u503crelative\u6216absolute,fixed\u7684\u5bf9\u8c61\n            \u5b50\u5143\u7d20\u7684\u5c42\u7ea7\u5173\u7cfb\u4f1a\u53d7\u5230\u7236\u5143\u7d20\u7684\u5f71\u54cd\n    \u5305\u542b\u5757:\n        \u5305\u542b\u5757\u662f\u51b3\u5b9a\u5b9a\u4f4d\u7684\u57fa\u7840,\u5305\u542b\u5757\u5c31\u662f\u4e3a\u7edd\u5bf9\u5b9a\u4f4d\u5143\u7d20\u63d0\u4f9b\u5750\u6807,\u504f\u79fb\u548c\u663e\u793a\u8303\u56f4\u7684\u53c2\u7167\u7269,\u5373\u786e\u5b9a\u7edd\u5bf9\u5b9a\u4f4d\u7684\u504f\u79fb\u671f\u5f85\u548c\u767e\u5206\u6bd4\u957f\u5ea6\u7684\u53c2\u8003;\n        \u9ed8\u8ba4\u72b6\u6001\u4e0b,body\u662f\u4e00\u4e2a\u5927\u7684\u5305\u542b\u5757,\u6240\u6709\u7edd\u5bf9\u5b9a\u4f4d\u7684\u504f\u79fb\u8d77\u70b9\u548c\u767e\u5206\u6bd4\u5927\u5c0f\u7684\u663e\u793a\u7684,\u5982\u679c\u6211\u4eec\u5b9a\u4e49\u4e86\u5305\u542b\u5143\u7d20\u4e3a\u5305\u542b\u5143\u7d20\u5757\u4ee5\u540e,\u5bf9\u4e8e\u88ab\u5305\u542b\u7684\u7edd\u5bf9\u5b9a\u4f4d\u5143\u7d20\u6765\u8bf4,\u5c31\u4f1a\u6839\u636e\u6700\u63a5\u8fd1\u7684\u5177\u6709\u5b9a\u4f4d\u529f\u80fd\u7684\u4e0a\u7ea7\u5143\u7d20\u6765\u5b9a\u4f4d\u81ea\u5df1\u663e\u793a\u4f4d\u7f6e\n        \u5b9a\u4e49\u5143\u7d20\u4e3a\u5305\u542b\u5757:\n            \u7ed9\u7edd\u5bf9\u5b9a\u4f4d\u5143\u7d20\u7684\u7236\u5143\u7d20\u6dfb\u52a0\u58f0\u660eposition:relative/absolute\n')),(0,r.kt)("p",null,"\u7f6e\u6362\u5143\u7d20/\u975e\u7f6e\u6362\u5143\u7d20\n\u7f6e\u6362\u5143\u7d20:\n\u4e00\u4e2a\u5185\u5bb9\u4e0d\u53d7CSS\u89c6\u89c9\u683c\u5f0f\u5316\u6a21\u578b\u63a7\u5236,CSS\u6e32\u67d3\u6a21\u578b\u5e76\u4e0d\u8003\u8651\u5bf9\u6b64\u5185\u5bb9\u7684\u6e32\u67d3,\u4e14\u5143\u7d20\u672c\u8eab\u4e00\u822c\u62e5\u6709\u56fa\u5b9a\u5c3a\u5bf8\u7684\u5143\u7d20,\n\u8fd9\u4e9b\u5143\u7d20\u7f51\u5f80\u5f80\u6ca1\u6709\u5b9e\u9645\u7684\u5185\u5bb9,\u5373\u662f\u4e00\u4e2a\u7a7a\u5143\u7d20.\u7f6e\u6362\u5143\u7d20\u5c31\u662f\u6d4f\u89c8\u5668\u6839\u636e\u5143\u7d20\u7684\u5c5e\u6027\u548c\u5c5e\u6027\u503c,\u6765\u51b3\u5b9a\u5143\u7d20\u7684\u5177\u4f53\u663e\u793a\u5185\u5bb9,\u88ab\u79f0\u4e4b\u4e3a\u7f6e\u6362\u5143\u7d20\n\u975e\u7f6e\u6362\u5143\u7d20:\n\u975e\u7f6e\u6362\u5143\u7d20/\u4e0d\u53ef\u7f6e\u6362\u5143\u7d20/HTML\u4e2d\u9664\u4e86\u53ef\u66ff\u6362\u5143\u7d20\u5916,\u5176\u4ed6\u90fd\u662f\u4e0d\u53ef\u66ff\u6362\u5143\u7d20\n\u5373\u5176\u5185\u5bb9\u76f4\u63a5\u8868\u73b0\u7ed9\u7528\u6237\u7aef\u4f8b\u5982\u6d4f\u89c8\u5668"),(0,r.kt)("p",null,"\u6d4f\u89c8\u5668\u524d\u7f00\n-ms- \uff1aIE\n-moz-\uff1afirefox\n-o- \uff1aopera\n-webkit- \uff1achrome|safari"),(0,r.kt)("p",null,"css bug\nCSS\u6837\u5f0f\u5728\u5404\u6d4f\u89c8\u5668\u4e2d\u89e3\u6790\u4e0d\u4e00\u81f4\u7684\u60c5\u51b5\uff0c\u6216\u8005\u8bf4CSS\u6837\u5f0f\u5728\u6d4f\u89c8\u5668\u4e2d\u4e0d\u80fd\u6b63\u786e\u663e\u793a\u7684\u95ee\u9898\u79f0\u4e3aCSS bug."),(0,r.kt)("p",null,"css hack\nCSS\u4e2d\uff0cHack\u662f\u6307\u4e00\u79cd\u517c\u5bb9CSS\u5728\u4e0d\u540c\u6d4f\u89c8\u5668\u4e2d\u6b63\u786e\u663e\u793a\u7684\u6280\u5de7\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5b83\u4eec\u90fd\u5c5e\u4e8e\u4e2a\u4eba\u5bf9CSS\u4ee3\u7801\u7684\u975e\u5b98\u65b9\u7684\u4fee\u6539\uff0c\u6216\u975e\u5b98\u65b9\u7684\u8865\u4e01\u3002\u6709\u4e9b\u4eba\u66f4\u559c\u6b22\u4f7f\u7528patch(\u8865\u4e01)\u6765\u63cf\u8ff0\u8fd9\u79cd\u884c\u4e3a\u3002\n\u4e4b\u524d\u8bf4\u8fc7\u7684filter\uff0c\u5176\u5b9e\u4e5f\u5c5e\u4e8ehack\u7684\u4e00\u79cd\n\u526f\u4f5c\u7528\n\u964d\u4f4e\u4ee3\u7801\u53ef\u8bfb\u6027\n\u589e\u52a0\u4ee3\u7801\u8d1f\u62c5\n\u5e38\u89c1\u7684css hack\u53cacss bug\nIE6\u5e38\u89c1CSS\u89e3\u6790Bug\u53cahack\n\u56fe\u7247\u95f4\u9699\n\u5728\u5143\u7d20\u4e2d\u76f4\u63a5\u63d2\u5165\u56fe\u7247\u65f6\uff0c\u56fe\u7247\u4e0b\u65b9\u4f1a\u4ea7\u751f\u7ea63\u50cf\u7d20\u7684\u95f4\u9699(\u8be5bug\u51fa\u73b0\u5728IE6\u53ca\u66f4\u4f4e\u7248\u672c\u4e2d)\nhack1: \u5c06",(0,r.kt)("img",null),"\u8f6c\u4e3a\u5757\u72b6\u5143\u7d20\uff0c\u7ed9",(0,r.kt)("img",null),"\u6dfb\u52a0\u58f0\u660e\uff1adisplay:block;\nhack2:hack2:\u5c06img\u8bbe\u7f6evertical-align:top/middle/bottom;\u53ea\u8981\u4e0d\u4e3abaseline\n\u53cc\u500d\u6d6e\u5411\uff08\u53cc\u500d\u8fb9\u8ddd\uff09\n\u5f53Ie6\u53ca\u66f4\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\u5728\u89e3\u6790\u6d6e\u52a8\u5143\u7d20\u65f6\uff0c\u4f1a\u9519\u8bef\u5730\u628a\u6d6e\u5411\u8fb9\u8fb9\u754c\u52a0\u500d\u663e\u793a\u3002\nhack:\u7ed9\u6d6e\u52a8\u5143\u7d20\u6dfb\u52a0\u58f0\u660e\uff1adisplay:inline;\n\u9ed8\u8ba4\u9ad8\u5ea6\n\u5728IE6\u53ca\u4ee5\u4e0b\u7248\u672c\u4e2d\uff0c\u90e8\u5206\u5757\u5143\u7d20\u62e5\u6709\u9ed8\u8ba4\u9ad8\u5ea6\uff08\u4f4e\u4e8e16px\u9ad8\u5ea6\uff09\nhack1:\u7ed9\u5143\u7d20\u6dfb\u52a0\u58f0\u660e\uff1afont-size:0;\nhack2\uff1a\u7ed9\u5143\u7d20\u6dfb\u52a0\u58f0\u660e\uff1aoverflow:hidden;\n\u767e\u5206\u6bd4bug\n\u5728IE6\u53ca\u4ee5\u4e0b\u7248\u672c\u4e2d\u5728\u89e3\u6790\u767e\u5206\u6bd4\u65f6\uff0c\u4f1a\u6309\u56db\u820d\u4e94\u5165\u65b9\u5f0f\u8ba1\u7b97\u4ece\u800c\u5bfc\u81f450%\u52a050%\u5927\u4e8e100%\u7684\u60c5\u51b5\u3002\nhack:\u7ed9\u53f3\u9762\u7684\u6d6e\u52a8\u5143\u7d20\u6dfb\u52a0\u58f0\u660e\uff1aclear:right;     \u610f\u601d\uff1a\u6e05\u9664\u53f3\u6d6e\u52a8\u3002\n\u5217\u8868\u9636\u68afBUG\uff08IE6\u53ca\u66f4\u4f4e\u7248\u672c\u7684\u6d4f\u89c8\u5668\u4e2d\uff09\n\u5728\u7ed9\u7684\u5b50\u5143\u7d20\u4e2d\u4f7f\u7528\u4e86Float:left;\u7236\u5143\u7d20\u4e2d\u6ca1\u6709\u8bbe\u7f6e\u6d6e\u52a8\u5c5e\u6027\uff0cli\u9636\u68af\u72b6\u6548\u679c\u3002\nhack:\u7ed9\u7236\u5143\u7d20\u8bbe\u7f6e\u6d6e\u52a8\u4fbf\u80fd\u89e3\u51b3\u6b64\u95ee\u9898\n\u5f53\u7ed9LI\u91cc\u7684A\u8f6c\u6210\u5757\u5143\u7d20\uff0c\u5e76\u8bbe\u7f6e\u4e86\u56fa\u5b9a\u9ad8\u5ea6\u65f6\uff0c\u4e14\u7ed9\u7236\u5143\u7d20\u5199\u4e86\u6d6e\u52a8\u540e\u5728IE6\u53ca\u66f4\u4f4e\u7684\u7248\u672c\u6d4f\u89c8\u5668\u91cc\u4f1a\u51fa\u73b0\u5782\u76f4\u663e\u793a\u3002\nhack:\u7ed9a\u4e5f\u8bbe\u7f6e\u5de6\u6d6e\u52a8\u4fbf\u53ef\u89e3\u51b3\u3002"))}d.isMDXComponent=!0}}]);