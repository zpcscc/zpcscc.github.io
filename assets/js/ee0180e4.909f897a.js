"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7453],{7788:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=i(1527),s=i(6274);const a={title:"\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93"},l=void 0,r={id:"note/Git/\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93",title:"\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93",description:"\u4e00\u3001\u521b\u5efa\u672c\u5730\u4ed3\u5e93",source:"@site/docs/note/Git/\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93.md",sourceDirName:"note/Git",slug:"/note/Git/\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93",permalink:"/docs/note/Git/\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u65b0\u5efa\u5173\u8054\u514b\u9686\u4ed3\u5e93"},sidebar:"note",previous:{title:"\u64a4\u9500\u4e0a\u6b21push",permalink:"/docs/note/Git/\u64a4\u9500\u4e0a\u6b21push"},next:{title:"\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054",permalink:"/docs/note/Git/\u79fb\u9664\u8fdc\u7a0b\u4ed3\u5e93\u5173\u8054"}},d={},c=[{value:"\u4e00\u3001\u521b\u5efa\u672c\u5730\u4ed3\u5e93",id:"\u4e00\u521b\u5efa\u672c\u5730\u4ed3\u5e93",level:2},{value:"\u4f7f\u7528\u7ec8\u7aef\u8fdb\u5165\u5f53\u524d\u9700\u8981\u65b0\u5efa\u4ed3\u5e93\u7684\u6587\u4ef6\u5939\uff0c\u5728\u5f53\u524d\u9700\u8981\u4e0a\u4f20\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u5185\u521b\u5efa\u7248\u672c\u5e93",id:"\u4f7f\u7528\u7ec8\u7aef\u8fdb\u5165\u5f53\u524d\u9700\u8981\u65b0\u5efa\u4ed3\u5e93\u7684\u6587\u4ef6\u5939\u5728\u5f53\u524d\u9700\u8981\u4e0a\u4f20\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u5185\u521b\u5efa\u7248\u672c\u5e93",level:3},{value:"\u5c06\u4ee3\u7801 \u6dfb\u52a0\u5230\u6682\u5b58\u533a",id:"\u5c06\u4ee3\u7801-\u6dfb\u52a0\u5230\u6682\u5b58\u533a",level:3},{value:"\u4e00\u6b21\u6027\u6dfb\u52a0\u591a\u4e2a\u6587\u4ef6\u5230\u6682\u5b58\u533a",id:"\u4e00\u6b21\u6027\u6dfb\u52a0\u591a\u4e2a\u6587\u4ef6\u5230\u6682\u5b58\u533a",level:3},{value:"\u67e5\u770b git \u5f53\u524d\u72b6\u6001",id:"\u67e5\u770b-git-\u5f53\u524d\u72b6\u6001",level:3},{value:"\u5c06\u6682\u5b58\u533a\u7684\u4ee3\u7801\u4e0a\u4f20\u5230\u7248\u672c\u5e93",id:"\u5c06\u6682\u5b58\u533a\u7684\u4ee3\u7801\u4e0a\u4f20\u5230\u7248\u672c\u5e93",level:3},{value:"\u914d\u7f6e\u7528\u6237 git \u7528\u6237\u4fe1\u606f",id:"\u914d\u7f6e\u7528\u6237-git-\u7528\u6237\u4fe1\u606f",level:3},{value:"\u4e8c\u3001\u672c\u5730\u5173\u8054\u5230\u8fdc\u7a0b\u4ed3\u5e93",id:"\u4e8c\u672c\u5730\u5173\u8054\u5230\u8fdc\u7a0b\u4ed3\u5e93",level:2},{value:"\u5173\u8054\u8fdc\u7a0b\u5730\u5740",id:"\u5173\u8054\u8fdc\u7a0b\u5730\u5740",level:3},{value:"\u4e0a\u4f20\u672c\u5730\u4ed3\u5e93\u7684\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u4e0a\u4f20\u5230\u8fdc\u7a0b\u4ed3\u5e93",id:"\u4e0a\u4f20\u672c\u5730\u4ed3\u5e93\u7684\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u4e0a\u4f20\u5230\u8fdc\u7a0b\u4ed3\u5e93",level:3},{value:"\u914d\u7f6e SSH \u79d8\u94a5",id:"\u914d\u7f6e-ssh-\u79d8\u94a5",level:3},{value:"\u4e09\u3001\u9879\u76ee\u7ec4\u6210\u5458\u514b\u9686\u9879\u76ee\uff0c\u63d0\u4ea4\u4ee3\u7801",id:"\u4e09\u9879\u76ee\u7ec4\u6210\u5458\u514b\u9686\u9879\u76ee\u63d0\u4ea4\u4ee3\u7801",level:2},{value:"\u9879\u76ee\u7ec4\u6210\u5458\u63d0\u4ea4\u672c\u5730\u4ee3\u7801\u4e0e\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801",id:"\u9879\u76ee\u7ec4\u6210\u5458\u63d0\u4ea4\u672c\u5730\u4ee3\u7801\u4e0e\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u4e00\u521b\u5efa\u672c\u5730\u4ed3\u5e93",children:"\u4e00\u3001\u521b\u5efa\u672c\u5730\u4ed3\u5e93"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528\u7ec8\u7aef\u8fdb\u5165\u5f53\u524d\u9700\u8981\u65b0\u5efa\u4ed3\u5e93\u7684\u6587\u4ef6\u5939\u5728\u5f53\u524d\u9700\u8981\u4e0a\u4f20\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u5185\u521b\u5efa\u7248\u672c\u5e93",children:"\u4f7f\u7528\u7ec8\u7aef\u8fdb\u5165\u5f53\u524d\u9700\u8981\u65b0\u5efa\u4ed3\u5e93\u7684\u6587\u4ef6\u5939\uff0c\u5728\u5f53\u524d\u9700\u8981\u4e0a\u4f20\u4ee3\u7801\u7684\u6587\u4ef6\u5939\u5185\u521b\u5efa\u7248\u672c\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git init\n//\u521b\u5efa\u540e\u4f1a\u5728\u5f53\u524d\u6587\u4ef6\u5939\u751f\u6210.git\u6587\u4ef6\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5c06\u4ee3\u7801-\u6dfb\u52a0\u5230\u6682\u5b58\u533a",children:"\u5c06\u4ee3\u7801 \u6dfb\u52a0\u5230\u6682\u5b58\u533a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git add readme.md //\u5c06readme.md\u6587\u4ef6\u6dfb\u52a0\u5230\u6682\u5b58\u533a\u4e2d\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e00\u6b21\u6027\u6dfb\u52a0\u591a\u4e2a\u6587\u4ef6\u5230\u6682\u5b58\u533a",children:"\u4e00\u6b21\u6027\u6dfb\u52a0\u591a\u4e2a\u6587\u4ef6\u5230\u6682\u5b58\u533a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git add a.txt b.txt c.txt text/d.txt\t//\u9009\u62e9\u6dfb\u52a0\u54ea\u4e9b\u4ee3\u7801\ngit add .\t//\u6dfb\u52a0\u6240\u6709\u6587\u4ef6\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u67e5\u770b-git-\u5f53\u524d\u72b6\u6001",children:"\u67e5\u770b git \u5f53\u524d\u72b6\u6001"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git status\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\u5982\u679c\u4ee3\u7801\u66f4\u6539\u5e76\u6ca1\u6709\u6dfb\u52a0\u5230\u6682\u5b58\u533a\uff0c\u4f1a\u663e\u793a\u7ea2\u8272\u90e8\u5206\uff0c\nmodified\uff1a   readme.md   //\u7ea2\u8272\u7684\n\u5982\u679c\u66f4\u6539\u4ee3\u7801\u6dfb\u52a0\u5230\u6682\u5b58\u533a\uff0c\u4f1a\u663e\u793a\u7eff\u8272\nnew file\uff1a\treadme.me   //\u7eff\u8272\u7684\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5c06\u6682\u5b58\u533a\u7684\u4ee3\u7801\u4e0a\u4f20\u5230\u7248\u672c\u5e93",children:"\u5c06\u6682\u5b58\u533a\u7684\u4ee3\u7801\u4e0a\u4f20\u5230\u7248\u672c\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git commit -m '\u5f15\u53f7\u5185\u662f\u672c\u6b21\u4fee\u6539\u7684\u5907\u6ce8'\t//\u63d0\u4ea4\u4ee3\u7801\u5230\u7248\u672c\u5e93\n\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u5b89\u88c5\u4f7f\u7528git\uff0c\u6b64\u5904\u4f1a\u8ba9\u4f60\u914d\u7f6e\u7528\u6237\u4fe1\u606f\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e\u7528\u6237-git-\u7528\u6237\u4fe1\u606f",children:"\u914d\u7f6e\u7528\u6237 git \u7528\u6237\u4fe1\u606f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git config --global user.name '\u4f60\u7684github\u7528\u6237\u540d'\ngit config --global user.email '\u4f60\u7684github\u767b\u5f55\u90ae\u7bb1'\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u4e8c\u672c\u5730\u5173\u8054\u5230\u8fdc\u7a0b\u4ed3\u5e93",children:"\u4e8c\u3001\u672c\u5730\u5173\u8054\u5230\u8fdc\u7a0b\u4ed3\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"\u521b\u5efa\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u9009\u62e9SSH\uff0c\uff0c\u4e0d\u5efa\u8bae\u7528https\u3002\u5173\u8054\u672c\u5730\u7684\u4ed3\u5e93\u4e0e\u8fdc\u7a0b\u7684\u4ed3\u5e93\u3002\u53ea\u9700\u8981\u5173\u8054\u4e00\u6b21\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u5173\u8054\u8fdc\u7a0b\u5730\u5740",children:"\u5173\u8054\u8fdc\u7a0b\u5730\u5740"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git remote add origin + \u4ed3\u5e93\u5730\u5740\t//\u4ed3\u5e93\u5730\u5740\u5efa\u8bae\u4f7f\u7528ssh\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0a\u4f20\u672c\u5730\u4ed3\u5e93\u7684\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u4e0a\u4f20\u5230\u8fdc\u7a0b\u4ed3\u5e93",children:"\u4e0a\u4f20\u672c\u5730\u4ed3\u5e93\u7684\u4ee3\u7801\u5230\u8fdc\u7a0b\u4ed3\u5e93\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u4e0a\u4f20\u5230\u8fdc\u7a0b\u4ed3\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'git add .\ngit commit -m "\u672c\u5730\u63d0\u4ea4\u7684\u5907\u6ce8"\ngit push origin -u master\t//\u7b2c\u4e00\u6b21\u4e0a\u4f20\ngit push origin master\t\t//\u4e0d\u662f\u7b2c\u4e00\u6b21\u4e0a\u4f20\uff0c\u66f4\u65b0\u6570\u636e\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u7684\u662f SSH\uff0c\u7b2c\u4e00\u6b21\u63d0\u4ea4\u4ee3\u7801\u7684\u65f6\u5019\u4f1a\u63d0\u793a\u8981\u914d\u7f6e\u79d8\u94a5"}),"\n",(0,t.jsx)(n.p,{children:"\u7b2c 1 \u6b65\uff1a\u521b\u5efa SSH Key\u3002\u5728\u7528\u6237\u4e3b\u76ee\u5f55\u4e0b\uff0c\u770b\u770b\u6709\u6ca1\u6709.ssh \u76ee\u5f55\uff0c\u5982\u679c\u6709\uff0c\u518d\u770b\u770b\u8fd9\u4e2a\u76ee\u5f55\u4e0b\u6709\u6ca1\u6709 id_rsa \u548c id_rsa.pub \u8fd9\u4e24\u4e2a\u6587\u4ef6\uff0c\u5982\u679c\u5df2\u7ecf\u6709\u4e86\uff0c\u53ef\u76f4\u63a5\u8df3\u5230\u4e0b\u4e00\u6b65\u3002\u5982\u679c\u6ca1\u6709\uff0c\u6253\u5f00\uff08Windows \u4e0b\u6253\u5f00 Git Bash\uff09,\u4e00\u76f4\u6572\u56de\u8f66\u5373\u53ef\uff0c\u521b\u5efa SSH Key\uff1a"}),"\n",(0,t.jsx)(n.h3,{id:"\u914d\u7f6e-ssh-\u79d8\u94a5",children:"\u914d\u7f6e SSH \u79d8\u94a5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'ssh-keygen -t rsa -C "\u4f60\u7684github\u90ae\u7bb1"\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u7b2c 2 \u6b65\uff1a\u6253\u5f00.ssh/id_rsa.pub \u8fd9\u4e2a\u6587\u4ef6\uff0c\u590d\u5236\u91cc\u9762\u7684\u5185\u5bb9"}),"\n",(0,t.jsx)(n.p,{children:"\u7b2c 3 \u6b65\uff1a\u6253\u5f00 github \u7684\u7f51\u7ad9\uff0c\u627e\u5230\u8bbe\u7f6e\uff0c\u9009\u62e9 SSH \u516c\u94a5\uff0c\u6807\u9898\u81ea\u5df1\u5199\uff0c\u5185\u5bb9\u5373\u4e3a\u7b2c 2 \u6b65\u4e2d\u590d\u5236\u7684\u5185\u5bb9\uff0c\u9700\u8981\u8f93\u5165\u4f60\u7684\u7801 github \u7684\u5bc6\u7801\uff0c\u8fd9\u4e00\u6b21\u4ee5\u540e\uff0c\u672c\u53f0\u7535\u8111\u4e0a\u4f20\u4ee3\u7801\u5230\u8be5\u7ec4\u7ec7\u518d\u4e5f\u4e0d\u7528\u8f93\u5165\u5bc6\u7801\u4e86"}),"\n",(0,t.jsx)(n.h2,{id:"\u4e09\u9879\u76ee\u7ec4\u6210\u5458\u514b\u9686\u9879\u76ee\u63d0\u4ea4\u4ee3\u7801",children:"\u4e09\u3001\u9879\u76ee\u7ec4\u6210\u5458\u514b\u9686\u9879\u76ee\uff0c\u63d0\u4ea4\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"git clone + \u5730\u5740  //\u5efa\u8bae\u4f7f\u7528ssh\u7684\u5730\u5740\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u9879\u76ee\u7ec4\u6210\u5458\u63d0\u4ea4\u672c\u5730\u4ee3\u7801\u4e0e\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801",children:"\u9879\u76ee\u7ec4\u6210\u5458\u63d0\u4ea4\u672c\u5730\u4ee3\u7801\u4e0e\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801"}),"\n",(0,t.jsx)(n.p,{children:"\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801\u524d\u9700\u8981\u672c\u5730 commit \u4e00\u6b21\uff0c\u7528\u4e8e\u4fdd\u5b58\u672c\u5730\u4fee\u6539\u7684\u4ee3\u7801\u5230\u672c\u5730\u4ed3\u5e93\u91cc\uff08\u4e0d\u7528 push\uff09\n\u518d pull \u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801\u3002\u76f4\u63a5 pull \u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801\u53ef\u80fd\u62a5\u9519\u6216\u8005\u4e22\u5931\u672c\u5730\u4fee\u6539\u7684\u4ee3\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'//\u5148commit\u672c\u5730\u4ee3\u7801\ngit add .\ngit commit -m "\u63d0\u4ea4\u672c\u6b21\u4fee\u6539\u7684\u5185\u5bb9"\n//\u518d\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801\ngit pull origin master\n//\u62c9\u53d6\u8fdc\u7a0b\u4ee3\u7801\u540e\u53ef\u80fd\u4f1a\u6709\u4ee3\u7801\u5408\u5e76\u7684\u51b2\u7a81\uff0c\u624b\u52a8\u5904\u7406\u51b2\u7a81\u3002\u51b2\u7a81\u5904\u7406\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u8fdb\u884cpush\u63d0\u4ea4\u4f60\u672c\u6b21\u4fee\u6539\u7684\u4ee3\u7801\ngit push origin master\n'})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},6274:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>l});var t=i(959);const s={},a=t.createContext(s);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);