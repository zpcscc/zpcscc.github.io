"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4625],{2657:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var a=t(1527),o=t(6274);const c={title:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247"},s=void 0,r={id:"note/\u529f\u80fd\u65b9\u6cd5/\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",title:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",description:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",source:"@site/docs/note/\u529f\u80fd\u65b9\u6cd5/\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247.md",sourceDirName:"note/\u529f\u80fd\u65b9\u6cd5",slug:"/note/\u529f\u80fd\u65b9\u6cd5/\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",permalink:"/docs/note/\u529f\u80fd\u65b9\u6cd5/\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247"},sidebar:"note",previous:{title:"\u4f18\u96c5\u964d\u7ea7\u4e0e\u6e10\u8fdb\u589e\u5f3a",permalink:"/docs/note/\u4f18\u96c5\u964d\u7ea7\u4e0e\u6e10\u8fdb\u589e\u5f3a"},next:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f",permalink:"/docs/category/\u6b63\u5219\u8868\u8fbe\u5f0f"}},i={},d=[{value:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",id:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",level:2}];function l(e){const n={code:"code",h2:"h2",pre:"pre",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247",children:"\u524d\u7aef\u4e0b\u8f7d\u56fe\u7247"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"// \u4e0b\u8f7d\u56fe\u7247\n// \u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u662fimg\u6807\u7b7eid\uff0c\u7b2c\u4e8c\u4e2a\u662f\u56fe\u7247\u540d\nconst downloadImage = (selector: string, name: string) => {\n  const image = new Image();\n  // \u89e3\u51b3\u8de8\u57df canvas \u6c61\u67d3\u95ee\u9898\n  image.setAttribute('crossOrigin', 'anonymous');\n  image.onload = function () {\n    const canvas = document.createElement('canvas');\n    canvas.width = image.width;\n    canvas.height = image.height;\n    const context = canvas.getContext('2d');\n    context?.drawImage(image, 0, 0, image.width, image.height);\n    //\u5f97\u5230\u56fe\u7247\u7684base64\u7f16\u7801\u6570\u636e\n    const url = canvas.toDataURL('image/png');\n    // \u751f\u6210\u4e00\u4e2a a \u6807\u7b7e\n    const a = document.createElement('a');\n    // \u521b\u5efa\u4e00\u4e2a\u70b9\u51fb\u4e8b\u4ef6\n    const event = new MouseEvent('click');\n    // \u5c06 a \u7684 download \u5c5e\u6027\u8bbe\u7f6e\u4e3a\u6211\u4eec\u60f3\u8981\u4e0b\u8f7d\u7684\u56fe\u7247\u7684\u540d\u79f0\uff0c\u82e5 name \u4e0d\u5b58\u5728\u5219\u4f7f\u7528'\u56fe\u7247'\u4f5c\u4e3a\u9ed8\u8ba4\u540d\u79f0\n    a.download = name || '\u56fe\u7247';\n    // \u5c06\u751f\u6210\u7684 URL \u8bbe\u7f6e\u4e3a a.href \u5c5e\u6027\n    a.href = url;\n    // \u89e6\u53d1 a \u7684\u70b9\u51fb\u4e8b\u4ef6\n    a.dispatchEvent(event);\n    // return a;\n  };\n  image.src = document.getElementById(selector)?.src ?? '';\n};\n"})})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},6274:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(959);const o={},c=a.createContext(o);function s(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);