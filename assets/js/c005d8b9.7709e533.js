"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3349],{8507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(1527),i=t(6274);const a={title:"Jest-expect.extend"},r="expect.extend(matchers)",c={id:"note/Jest/expect_extend",title:"Jest-expect.extend",description:"\u4e00\u3001\u7b80\u4ecb",source:"@site/docs/note/Jest/expect_extend.md",sourceDirName:"note/Jest",slug:"/note/Jest/expect_extend",permalink:"/docs/note/Jest/expect_extend",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Jest-expect.extend"},sidebar:"note",previous:{title:"jest",permalink:"/docs/category/jest"},next:{title:"\u57fa\u7840\u4ecb\u7ecd",permalink:"/docs/note/Jest/\u57fa\u7840\u4ecb\u7ecd"}},o={},l=[{value:"\u4e00\u3001\u7b80\u4ecb",id:"\u4e00\u7b80\u4ecb",level:2},{value:"\u4e8c\u3001typescript\u7c7b\u578b\u63d0\u793a",id:"\u4e8ctypescript\u7c7b\u578b\u63d0\u793a",level:2},{value:"\u4e09\u3001\u5f02\u6b65\u5904\u7406",id:"\u4e09\u5f02\u6b65\u5904\u7406",level:2},{value:"\u56db\u3001\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u7684api",id:"\u56db\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u7684api",level:2},{value:"\u4e94\u3001\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u91cc\u53ef\u83b7\u53d6\u5230\u7684\u4e00\u4e9b\u53c2\u6570",id:"\u4e94\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u91cc\u53ef\u83b7\u53d6\u5230\u7684\u4e00\u4e9b\u53c2\u6570",level:2},{value:"1\u3001this.isNot",id:"1thisisnot",level:3},{value:"2\u3001this.promise",id:"2thispromise",level:3},{value:"3\u3001this.equals(a, b)",id:"3thisequalsa-b",level:3},{value:"4\u3001this.expand",id:"4thisexpand",level:3},{value:"5\u3001this.utils",id:"5thisutils",level:3},{value:"\u516d\u3001\u81ea\u5b9a\u4e49\u5feb\u7167\u5339\u914d",id:"\u516d\u81ea\u5b9a\u4e49\u5feb\u7167\u5339\u914d",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"expectextendmatchers",children:"expect.extend(matchers)"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e00\u7b80\u4ecb",children:"\u4e00\u3001\u7b80\u4ecb"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u5339\u914d\u5668\uff0c\u81ea\u5b9a\u4e49\u5339\u914d\u89c4\u5219\u3002\u53ef\u5c06\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u6269\u5c55\u5230jest\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// \u81ea\u5b9a\u4e49\u4e00\u4e2a\u5339\u914d\u6570\u5b57\u8303\u56f4\u7684\u5339\u914d\u5668'toBeWithinRange'\nexpect.extend({\n  toBeWithinRange(received, floor, ceiling) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () =>\n          `expected ${received} not to be within range ${floor} - ${ceiling}`,\n        pass: true,\n      };\n    } else {\n      return {\n        message: () =>\n          `expected ${received} to be within range ${floor} - ${ceiling}`,\n        pass: false,\n      };\n    }\n  },\n});\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n  expect({apples: 6, bananas: 3}).toEqual({\n    apples: expect.toBeWithinRange(1, 10),\n    bananas: expect.not.toBeWithinRange(11, 20),\n  });\n});\n\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e8ctypescript\u7c7b\u578b\u63d0\u793a",children:"\u4e8c\u3001typescript\u7c7b\u578b\u63d0\u793a"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u4f60\u4f7f\u7528'@types/jest'\u65f6\u3002\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u65b9\u6cd5\uff0c\u5728\u5f53\u524d\u6d4b\u8bd5\u6a21\u5757\u4e2d\u58f0\u660e\u65b0\u7684toBeWithinRange\u5339\u914d\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"declare global {\n  namespace jest {\n    interface Matchers<R> {\n      toBeWithinRange(a: number, b: number): R\n    }\n    interface Expect {\n      toBeWithinRange(a: number, b: number): void\n    }\n    interface InverseAsymmetricMatchers {\n      toBeWithinRange(a: number, b: number): void\n    }\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e09\u5f02\u6b65\u5904\u7406",children:"\u4e09\u3001\u5f02\u6b65\u5904\u7406"}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7expect.extend\u6269\u5c55\u4e00\u4e2a\u5f02\u6b65\u5339\u914d\u5668"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"expect.extend({\n  async toBeDivisibleByExternalValue(received) {\n    const externalValue = await getExternalValueFromRemoteSource();\n    const pass = received % externalValue == 0;\n    if (pass) {\n      return {\n        message: () =>\n          `expected ${received} not to be divisible by ${externalValue}`,\n        pass: true,\n      };\n    } else {\n      return {\n        message: () =>\n          `expected ${received} to be divisible by ${externalValue}`,\n        pass: false,\n      };\n    }\n  },\n});\n\ntest('is divisible by external value', async () => {\n  await expect(100).toBeDivisibleByExternalValue();\n  await expect(101).not.toBeDivisibleByExternalValue();\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u56db\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u7684api",children:"\u56db\u3001\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u7684api"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"/* \n \u81ea\u5b9a\u4e49\u5339\u914d\u5668\u8fd4\u56de\u7684\u5e94\u662f\u4e00\u4e2a\u5bf9\u8c61\u6216\u4e00\u4e2apromise\u3002\u5bf9\u8c61\u6709\u4e24\u4e2a\u53c2\u6570\u3002\n pass\u662f\u4e2a\u5e03\u5c14\u7c7b\u578b\uff0c\u6307\u662f\u5426\u901a\u8fc7\u8bf7\u6c42\n message\u662f\u4e2a\u65e0\u53c2\u6570\u7684\u51fd\u6570\uff0c\u8fd4\u56de\u672a\u901a\u8fc7\u6d4b\u8bd5\u7684\u63d0\u793a\u4fe1\u606f\u3002\n \u5f53pass\u4e3afalse\u65f6\uff0cexpect(x).yourmatcher()\u5931\u8d25\u65f6\uff0c\u6d88\u606f\u5e94\u8be5\u8fd4\u56de\u9519\u8bef\u6d88\u606f\u3002\n \u5f53pass\u4e3atrue\u65f6\uff0c\u6d88\u606f\u5e94\u8be5\u8fd4\u56deexpect(x).not.yourmatcher()\u5931\u8d25\u65f6\u7684\u9519\u8bef\u6d88\u606f\u3002\n*/\nexpect.extend({\n  yourMatcher(x, y, z) {\n    return {\n      pass: true,\n      message: () => '',\n    };\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4e94\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u91cc\u53ef\u83b7\u53d6\u5230\u7684\u4e00\u4e9b\u53c2\u6570",children:"\u4e94\u3001\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u91cc\u53ef\u83b7\u53d6\u5230\u7684\u4e00\u4e9b\u53c2\u6570"}),"\n",(0,s.jsx)(n.h3,{id:"1thisisnot",children:"1\u3001this.isNot"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u7528\u4e8e\u5224\u65ad\u5f53\u524d\u6d4b\u8bd5\uff0c\u662f\u5426\u4f7f\u7528\u4e86.not\u4fee\u9970\u7b26"}),"\n",(0,s.jsx)(n.h3,{id:"2thispromise",children:"2\u3001this.promise"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u2018resoves\u2019---\u63d0\u793a\u4f60\uff0c\u6d4b\u8bd5\u4f7f\u7528\u4e86.resoves\u4fee\u9970\u7b26"}),"\n",(0,s.jsx)(n.p,{children:"\u2018rejects\u2019---\u63d0\u793a\u4f60\uff0c\u6d4b\u8bd5\u4f7f\u7528\u4e86.rejects\u4fee\u9970\u7b26"}),"\n",(0,s.jsx)(n.p,{children:"\u2018' '\u2019 ---\u63d0\u793a\u4f60\uff0c\u6d4b\u8bd5\u672a\u4f7f\u7528promise"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3thisequalsa-b",children:"3\u3001this.equals(a, b)"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u8fd9\u662f\u4e00\u4e2a\u6df1\u5ea6\u76f8\u7b49\u51fd\u6570\uff0c\u5982\u679c\u4e24\u4e2a\u5bf9\u8c61\u5177\u6709\u76f8\u540c\u7684\u503c(\u9012\u5f52\u5730)\uff0c\u5219\u8fd4\u56detrue"}),"\n",(0,s.jsx)(n.h3,{id:"4thisexpand",children:"4\u3001this.expand"}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u8ba9\u4f60\u77e5\u9053\u8fd9\u4e2a\u5339\u914d\u5668\u88ab\u4e00\u4e2a\u6269\u5c55\u9009\u9879\u8c03\u7528\u4e86\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u4f7f\u7528\u2014\u2014expand\u6807\u5fd7\u8c03\u7528Jest\u65f6\uff0cexpand\u53ef\u4ee5\u7528\u6765\u786e\u5b9aJest\u662f\u5426\u671f\u671b\u663e\u793a\u5b8c\u6574\u7684\u5dee\u5f02\u548c\u9519\u8bef"}),"\n",(0,s.jsx)(n.h3,{id:"5thisutils",children:"5\u3001this.utils"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u5de5\u5177\u96c6\uff0c\u4e3b\u8981\u7531",(0,s.jsx)(n.a,{href:"https://github.com/facebook/jest/tree/master/packages/jest-matcher-utils",children:"jest-macther-utils"}),"\u5bfc\u51fa"]}),"\n",(0,s.jsx)(n.p,{children:"\u5176\u4e2d\u5e38\u7528\u7684\u4e3a\uff1amatcherHint\uff0cprintExpected\u3001printReceived\u3002\u5b83\u4eec\u53ef\u4ee5\u5f88\u597d\u7684\u683c\u5f0f\u5316\u6570\u636e"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const {diff} = require('jest-diff');\nexpect.extend({\n  toBe(received, expected) {\n    const options = {\n      comment: 'Object.is equality',\n      isNot: this.isNot,\n      promise: this.promise,\n    };\n\n    const pass = Object.is(received, expected);\n\n    const message = pass\n      ? () =>\n          this.utils.matcherHint('toBe', undefined, undefined, options) +\n          '\\n\\n' +\n          `Expected: not ${this.utils.printExpected(expected)}\\n` +\n          `Received: ${this.utils.printReceived(received)}`\n      : () => {\n          const diffString = diff(expected, received, {\n            expand: this.expand,\n          });\n          return (\n            this.utils.matcherHint('toBe', undefined, undefined, options) +\n            '\\n\\n' +\n            (diffString && diffString.includes('- Expect')\n              ? `Difference:\\n\\n${diffString}`\n              : `Expected: ${this.utils.printExpected(expected)}\\n` +\n                `Received: ${this.utils.printReceived(received)}`)\n          );\n        };\n\n    return {actual: received, message, pass};\n  },\n});\n\n\n// \u4f1a\u8f93\u51fa\u7c7b\u4f3c\u4e0b\u9762\u7684\u5185\u5bb9\nexpect(received).toBe(expected)\n   Expected value to be (using Object.is):\n      \"banana\"\n   Received:\n      \"apple\"\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u516d\u81ea\u5b9a\u4e49\u5feb\u7167\u5339\u914d",children:"\u516d\u3001\u81ea\u5b9a\u4e49\u5feb\u7167\u5339\u914d"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u5728\u60a8\u7684\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u4e2d\u4f7f\u7528\u5feb\u7167\u6d4b\u8bd5\uff0c\u60a8\u53ef\u4ee5\u5bfc\u5165jest-snapshot\u5e76\u5728\u60a8\u7684\u5339\u914d\u5668\u4e2d\u4f7f\u7528\u5b83\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u5feb\u7167\u5339\u914d\u5668\uff0c\u5b83\u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u4fee\u526a\uff0c\u4ee5\u5b58\u50a8\u7ed9\u5b9a\u7684\u957f\u5ea6\u3002toMatchTrimmedSnapshot (length)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const {toMatchSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  toMatchTrimmedSnapshot(received, length) {\n    return toMatchSnapshot.call(\n      this,\n      received.substring(0, length),\n      'toMatchTrimmedSnapshot',\n    );\n  },\n});\n\nit('stores only 10 characters', () => {\n  expect('extra long string oh my gerd').toMatchTrimmedSnapshot(10);\n});\n\n// \u5b58\u50a8\u5feb\u7167\u5982\u4e0b\u6240\u793a:\nexports[`stores only 10 characters: toMatchTrimmedSnapshot 1`] = `\"extra long\"`;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u4e3a\u5185\u8054\u5feb\u7167\u521b\u5efa\u5b9a\u5236\u5339\u914d\u5668\uff0c\u5feb\u7167\u5c06\u88ab\u6b63\u786e\u5730\u6dfb\u52a0\u5230\u5b9a\u5236\u5339\u914d\u5668\u4e2d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7136\u800c\uff0c\u5f53\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5c5e\u6027\u5339\u914d\u5668\u65f6\uff0c\u5185\u8054\u5feb\u7167\u603b\u662f\u8bd5\u56fe\u9644\u52a0\u5230\u7b2c\u4e00\u4e2a\u53c2\u6570\u6216\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u56e0\u6b64\u4e0d\u53ef\u80fd\u5728\u81ea\u5b9a\u4e49\u5339\u914d\u5668\u4e2d\u63a5\u53d7\u81ea\u5b9a\u4e49\u53c2\u6570\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const {toMatchInlineSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  toMatchTrimmedInlineSnapshot(received, ...rest) {\n    return toMatchInlineSnapshot.call(this, received.substring(0, 10), ...rest);\n  },\n});\n\nit('stores only 10 characters', () => {\n  expect('extra long string oh my gerd').toMatchTrimmedInlineSnapshot();\n  /*\n  \u5feb\u7167\u5c06\u4ee5\u5185\u8054\u65b9\u5f0f\u6dfb\u52a0\uff0c\u5982\n  expect('extra long string oh my gerd').toMatchTrimmedInlineSnapshot(\n    `\"extra long\"`\n  );\n  */\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u81ea\u5b9a\u4e49\u5185\u8054\u5feb\u7167\u5339\u914d\u5668\u662f\u5f02\u6b65\u7684\uff0c\u5373\u4f7f\u7528async-await\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u50cf\u201c\u591a\u4e2a\u5185\u8054\u5feb\u7167\u7684\u540c\u4e00\u4e2a\u8c03\u7528\u4e0d\u652f\u6301\u201d\u8fd9\u6837\u7684\u9519\u8bef\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Jest\u9700\u8981\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u4fe1\u606f\u6765\u67e5\u627e\u4f7f\u7528\u81ea\u5b9a\u4e49\u5185\u8054\u5feb\u7167\u5339\u914d\u5668\u6765\u6b63\u786e\u66f4\u65b0\u5feb\u7167\u7684\u4f4d\u7f6e\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const {toMatchInlineSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  async toMatchObservationInlineSnapshot(fn, ...rest) {\n    // The error (and its stacktrace) must be created before any `await`\n    this.error = new Error();\n\n    // The implementation of `observe` doesn't matter.\n    // It only matters that the custom snapshot matcher is async.\n    const observation = await observe(async () => {\n      await fn();\n    });\n\n    return toMatchInlineSnapshot.call(this, recording, ...rest);\n  },\n});\n\nit('observes something', async () => {\n  await expect(async () => {\n    return 'async action';\n  }).toMatchTrimmedInlineSnapshot();\n  /*\n  The snapshot will be added inline like\n  await expect(async () => {\n    return 'async action';\n  }).toMatchTrimmedInlineSnapshot(`\"async action\"`);\n  */\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u5e38\uff0cjest\u8bd5\u56fe\u5339\u914d\u6d4b\u8bd5\u4e2d\u9884\u671f\u7684\u6bcf\u4e2a\u5feb\u7167\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u65f6\uff0c\u5982\u679c\u5148\u524d\u7684\u5feb\u7167\u5931\u8d25\uff0c\u7ee7\u7eed\u6d4b\u8bd5\u53ef\u80fd\u6ca1\u6709\u610f\u4e49\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5f53\u60a8\u5728\u5404\u79cd\u8f6c\u6362\u4e4b\u540e\u5bf9\u72b6\u6001\u673a\u505a\u5feb\u7167\u65f6\uff0c\u60a8\u53ef\u4ee5\u5728\u4e00\u4e2a\u8f6c\u6362\u4ea7\u751f\u9519\u8bef\u7684\u72b6\u6001\u65f6\u4e2d\u6b62\u6d4b\u8bd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5728\u7b2c\u4e00\u6b21\u4e0d\u5339\u914d\u65f6\u629b\u51fa\u7684\u81ea\u5b9a\u4e49\u5feb\u7167\u5339\u914d\u5668\uff0c\u800c\u4e0d\u662f\u6536\u96c6\u6bcf\u6b21\u4e0d\u5339\u914d\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const {toMatchInlineSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  toMatchStateInlineSnapshot(...args) {\n    this.dontThrow = () => {};\n\n    return toMatchInlineSnapshot.call(this, ...args);\n  },\n});\n\nlet state = 'initial';\n\nfunction transition() {\n  // Typo in the implementation should cause the test to fail\n  if (state === 'INITIAL') {\n    state = 'pending';\n  } else if (state === 'pending') {\n    state = 'done';\n  }\n}\n\nit('transitions as expected', () => {\n  expect(state).toMatchStateInlineSnapshot(`\"initial\"`);\n\n  transition();\n  // Already produces a mismatch. No point in continuing the test.\n  expect(state).toMatchStateInlineSnapshot(`\"loading\"`);\n\n  transition();\n  expect(state).toMatchStateInlineSnapshot(`\"done\"`);\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6274:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(959);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);