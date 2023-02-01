"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[643],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",sidebar:"auto",date:new Date("2019-10-22T00:00:00.000Z"),categories:["\u5f00\u53d1"],tags:["antd"]},l=void 0,s={unversionedId:"note/AntDesign/\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",id:"note/AntDesign/\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",title:"\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",description:"\u5728 react \u4e2d\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",source:"@site/docs/note/AntDesign/\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f.md",sourceDirName:"note/AntDesign",slug:"/note/AntDesign/\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",permalink:"/docs/note/AntDesign/\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",draft:!1,tags:[{label:"antd",permalink:"/docs/tags/antd"}],version:"current",frontMatter:{title:"\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",sidebar:"auto",date:"2019-10-22T00:00:00.000Z",categories:["\u5f00\u53d1"],tags:["antd"]},sidebar:"note",previous:{title:"Error\u5904\u7406",permalink:"/docs/note/Ajax/Error\u5904\u7406"},next:{title:"\u5173\u95ed\u6821\u9a8c",permalink:"/docs/note/Eslint/\u5173\u95ed\u6821\u9a8c"}},c={},i=[{value:"\u5728 react \u4e2d\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",id:"\u5728-react-\u4e2d\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f",level:2},{value:"\u4e24\u79cd\u60c5\u51b5",id:"\u4e24\u79cd\u60c5\u51b5",level:3},{value:"1\u3001\u5bfc\u5165\u666e\u901a css \u6587\u4ef6\uff0c\u505a\u5168\u5c40\u6837\u5f0f\u66f4\u6539",id:"1\u5bfc\u5165\u666e\u901a-css-\u6587\u4ef6\u505a\u5168\u5c40\u6837\u5f0f\u66f4\u6539",level:4},{value:"2\u3001react \u4e2d\u4f7f\u7528\u6a21\u5757\u5316 css",id:"2react-\u4e2d\u4f7f\u7528\u6a21\u5757\u5316-css",level:4}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5728-react-\u4e2d\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f"},"\u5728 react \u4e2d\u4fee\u6539\u7ec4\u4ef6\u5185\u90e8\u6837\u5f0f"),(0,a.kt)("p",null,"\u5e73\u5e38\u6211\u4eec\u5728\u4f7f\u7528 antd \u7ec4\u4ef6\u65f6\uff0c\u76f4\u63a5\u5f15\u5165\u4f7f\u7528\uff0c\u6211\u4eec\u770b\u4e0d\u5230\u5177\u4f53\u751f\u6210\u7684 dom \u7ed3\u6784"),(0,a.kt)("p",null,"\u6b64\u65f6\u60f3\u8981\u4fee\u6539 antd \u751f\u6210\u7684 dom \u6837\u5f0f\u600e\u4e48\u529e"),(0,a.kt)("h3",{id:"\u4e24\u79cd\u60c5\u51b5"},"\u4e24\u79cd\u60c5\u51b5"),(0,a.kt)("h4",{id:"1\u5bfc\u5165\u666e\u901a-css-\u6587\u4ef6\u505a\u5168\u5c40\u6837\u5f0f\u66f4\u6539"},"1\u3001\u5bfc\u5165\u666e\u901a css \u6587\u4ef6\uff0c\u505a\u5168\u5c40\u6837\u5f0f\u66f4\u6539"),(0,a.kt)("p",null,"1.\u5728\u6d4f\u89c8\u5668\u7684\u5f00\u53d1\u8005\u6a21\u5f0f\u4e2d\uff0c\u67e5\u770b\u9700\u8981\u4fee\u6539\u7684 dom \u7ed3\u6784\u7684 class \u540d"),(0,a.kt)("p",null,"2.\u5728 style.css \u6837\u5f0f\u6587\u4ef6\u4e2d\u5199\u5165\u5bf9\u5e94\u8981\u4fee\u6539\u7684 css \u6837\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".ant-btn {\n  color: red;\n  background-color: #66ccff;\n}\n")),(0,a.kt)("p",null,"3.\u4fee\u6539\u597d\u540e\uff0c\u5c06 style.css \u6587\u4ef6\u5bfc\u5165\u7ec4\u4ef6\u5373\u53ef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import "./style.css";\n')),(0,a.kt)("h4",{id:"2react-\u4e2d\u4f7f\u7528\u6a21\u5757\u5316-css"},"2\u3001react \u4e2d\u4f7f\u7528\u6a21\u5757\u5316 css"),(0,a.kt)("p",null,"1.\u5728\u6d4f\u89c8\u5668\u7684\u5f00\u53d1\u8005\u6a21\u5f0f\u4e2d\uff0c\u67e5\u770b\u9700\u8981\u4fee\u6539\u7684 dom \u7ed3\u6784\u7684 class \u540d"),(0,a.kt)("p",null,"2.\u5728 style.module.less \u6837\u5f0f\u6587\u4ef6\u4e2d\u5199\u5165\u5bf9\u5e94\u8981\u4fee\u6539\u7684\u6837\u5f0f\uff0c\u8bb0\u5f97\u8fd9\u91cc\u7528\u5230\u662f less\uff0c\u4e14\u9700\u8981\u5728\u91cc\u9762\u52a0\u4e0a\uff1aglobal"),(0,a.kt)("p",null,"global \u91cc\u7684\u6837\u5f0f\u624d\u80fd\u751f\u6548\uff0c\u4fee\u6539\u5230\u5bf9\u5e94\u7684 dom"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'.btn {\n  :global {\n    .ant-btn {\n      background: "red";\n    }\n  }\n}\n')),(0,a.kt)("p",null,"3.\u4fee\u6539\u597d\u540e\uff0c\u5c06 style.module.css \u6587\u4ef6\u5bfc\u5165\u7ec4\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import styles from "./style.module.css"; //\u5bfc\u5165\u6837\u5f0f\u5e76\u91cd\u547d\u540d\nimport { Modal } from "antd";\n\nconst Components = () => {\n  return <Modal className={styles.btn} />;\n};\n// \u8fd9\u6837\u5c31\u80fd\u4fee\u6539Modal\u8fd9\u4e2aantd\u7ec4\u4ef6\u4e0b\uff0cbtn\u6309\u94ae\u7684\u6837\u5f0f\u4e86\n')))}u.isMDXComponent=!0}}]);