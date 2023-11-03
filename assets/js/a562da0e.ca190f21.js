"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9040],{8298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var s=t(1527),r=t(6274);const l={title:"\u624b\u5199call\u51fd\u6570"},o=void 0,a={id:"base/javascript/\u624b\u5199promise.all\u51fd\u6570",title:"\u624b\u5199call\u51fd\u6570",description:"\u5728 promise \u4e0a\u5199 all \u65b9\u6cd5",source:"@site/docs/base/javascript/\u624b\u5199promise.all\u51fd\u6570.md",sourceDirName:"base/javascript",slug:"/base/javascript/\u624b\u5199promise.all\u51fd\u6570",permalink:"/docs/base/javascript/\u624b\u5199promise.all\u51fd\u6570",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u624b\u5199call\u51fd\u6570"},sidebar:"base",previous:{title:"\u624b\u5199call\u51fd\u6570",permalink:"/docs/base/javascript/\u624b\u5199call\u51fd\u6570"},next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/docs/base/javascript/\u6570\u636e\u7c7b\u578b"}},i={},c=[{value:"\u5728 promise \u4e0a\u5199 all \u65b9\u6cd5",id:"\u5728-promise-\u4e0a\u5199-all-\u65b9\u6cd5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function u(e){const n={code:"code",h2:"h2",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u5728-promise-\u4e0a\u5199-all-\u65b9\u6cd5",children:"\u5728 promise \u4e0a\u5199 all \u65b9\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"// \u5c06\u51fd\u6570\u5199\u5728Promise\u4e0a\uff0c\u8fd9\u6837\u6240\u6709\u7684\u51fd\u6570\u90fd\u4f1a\u6709myAll\u65b9\u6cd5\uff1b\nPromise.myAll = function () {\n  let res;\n  let rej;\n  const p = new Promise((resolve, reject) => {\n    res = resolve;\n    rej = reject;\n  });\n  // \u8bbe\u7f6ep\u7684\u72b6\u6001\n  const result = [];\n  // \u8bb0\u5f55promise\u7684\u6570\u91cf\n  let count = 0;\n  // \u8bb0\u5f55\u5b8c\u6210\u7684\u6570\u91cf\n  let fulFilledCount = 0;\n  for (const prom of proms) {\n    const i = count;\n    count++;\n    Promise.resolve(prom).then(\n      ((data) => {\n        // \u5c06\u6210\u529f\u7684\u6570\u636e\u6c47\u603b\u5230 result\n        result[i] = data;\n        // \u5224\u65ad\u662f\u4e0d\u662f\u5168\u90e8\u5b8c\u6210\n        fulFulledCount++;\n        if (fulFulledCount === count) {\n          res(result);\n        }\n      },\n      rej),\n    );\n  }\n  if (count === 0) res(result);\n  return p;\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"Promise.all([1, 2, 3]).then((item) => {\n  console.log(item);\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},6274:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(959);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);