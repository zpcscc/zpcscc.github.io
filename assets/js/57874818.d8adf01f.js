"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[521],{925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(1527),c=t(8672);const i={title:"\u5e38\u7528except"},r=void 0,s={id:"note/Jest/\u5e38\u7528expect",title:"\u5e38\u7528except",description:"expect(value)",source:"@site/docs/note/Jest/\u5e38\u7528expect.md",sourceDirName:"note/Jest",slug:"/note/Jest/\u5e38\u7528expect",permalink:"/docs/note/Jest/\u5e38\u7528expect",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\u5e38\u7528except"},sidebar:"note",previous:{title:"\u57fa\u7840\u4ecb\u7ecd",permalink:"/docs/note/Jest/\u57fa\u7840\u4ecb\u7ecd"},next:{title:"\u5e38\u7528\u5339\u914d\u5668",permalink:"/docs/note/Jest/\u5e38\u7528\u5339\u914d\u5668"}},o={},l=[{value:"expect(value)",id:"expectvalue",level:2},{value:"expect.anything()",id:"expectanything",level:2},{value:"expect.any(constructor)",id:"expectanyconstructor",level:2},{value:"expect.arrayContaining(array)",id:"expectarraycontainingarray",level:2},{value:"expect.objectContaining(object)",id:"expectobjectcontainingobject",level:2},{value:"expect.stringContaining(string)",id:"expectstringcontainingstring",level:2},{value:"expect.stringMatching(string | regexp)",id:"expectstringmatchingstring--regexp",level:2},{value:"expect.assertions(number)",id:"expectassertionsnumber",level:2},{value:"expect.hasAssertions()",id:"expecthasassertions",level:2},{value:"expect.addSnapshotSerializer(serializer)",id:"expectaddsnapshotserializerserializer",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"expectvalue",children:"expect(value)"}),"\n",(0,a.jsx)(n.p,{children:"\u671f\u671b\u503c\u3002\u901a\u5e38value\u4e3a\u9700\u8981\u5339\u914d\u6d4b\u8bd5\u7684\u5185\u5bb9"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"test('the best flavor is grapefruit', () => {\n  expect(bestLaCroixFlavor()).toBe('grapefruit');\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectanything",children:"expect.anything()"}),"\n",(0,a.jsx)(n.p,{children:"\u5339\u914d\u9664null\u6216undefined\u4ee5\u5916\u7684\u4efb\u4f55\u503c\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u5728toEqual\u6216tocalledwith\u5185\u90e8\u4f7f\u7528\u5b83\u6765\u4ee3\u66ff\u6587\u5b57\u503c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u60f3\u68c0\u67e5\u4f7f\u7528\u975e\u7a7a\u53c2\u6570\u8c03\u7528\u7684\u6a21\u62df\u51fd\u6570"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"test('map calls its argument with a non-null argument', () => {\n  const mock = jest.fn();\n  [1].map(x => mock(x));\n  expect(mock).toBeCalledWith(expect.anything());\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectanyconstructor",children:"expect.any(constructor)"}),"\n",(0,a.jsx)(n.p,{children:"\u5339\u914d\u4f7f\u7528\u7ed9\u5b9a\u6784\u9020\u51fd\u6570\u521b\u5efa\u7684\u4efb\u4f55\u4e1c\u897f\u3002\u4f60\u53ef\u4ee5\u5728toEqual\u6216tocalledwith\u5185\u90e8\u4f7f\u7528\u5b83\u6765\u4ee3\u66ff\u6587\u5b57\u503c\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u60f3\u68c0\u67e5\u4e00\u4e2a\u6a21\u62df\u51fd\u6570\u662f\u5426\u88ab\u4e00\u4e2a\u6570\u5b57\u8c03\u7528"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"function randocall(fn) {\n  return fn(Math.floor(Math.random() * 6 + 1));\n}\n\ntest('randocall calls its callback with a number', () => {\n  const mock = jest.fn();\n  randocall(mock);\n  expect(mock).toBeCalledWith(expect.any(Number));\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectarraycontainingarray",children:"expect.arrayContaining(array)"}),"\n",(0,a.jsx)(n.p,{children:"\u5339\u914d\u63a5\u6536\u5230\u7684\u5305\u542b\u671f\u671b\u6570\u7ec4\u4e2d\u6240\u6709\u5143\u7d20\u7684\u6570\u7ec4\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u671f\u671b\u7684\u6570\u7ec4\u662f\u63a5\u6536\u6570\u7ec4\u7684\u5b50\u96c6\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5b83\u5339\u914d\u63a5\u6536\u5230\u7684\u5305\u542b\u4e0d\u5728\u9884\u671f\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u7684\u6570\u7ec4\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"describe('arrayContaining', () => {\n  const expected = ['Alice', 'Bob'];\n  it('matches even if received contains additional elements', () => {\n    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));\n  });\n  it('does not match if received does not contain expected elements', () => {\n    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));\n  });\n});\n\ndescribe('Beware of a misunderstanding! A sequence of dice rolls', () => {\n  const expected = [1, 2, 3, 4, 5, 6];\n  it('matches even with an unexpected number 7', () => {\n    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n  it('does not match without an expected number 2', () => {\n    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n});\n\n\n// \u76f8\u53cd\u7684\u5339\u914d\u5668\ndescribe('not.arrayContaining', () => {\n  const expected = ['Samantha'];\n\n  it('matches if the actual array does not contain the expected elements', () => {\n    expect(['Alice', 'Bob', 'Eve']).toEqual(\n      expect.not.arrayContaining(expected),\n    );\n  });\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectobjectcontainingobject",children:"expect.objectContaining(object)"}),"\n",(0,a.jsx)(n.p,{children:"\u5339\u914d\u4efb\u4f55\u63a5\u6536\u5230\u7684\u9012\u5f52\u5339\u914d\u9884\u671f\u5c5e\u6027\u7684\u5bf9\u8c61\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u4e5f\u5c31\u662f\u8bf4\uff0c\u671f\u671b\u7684\u5bf9\u8c61\u662f\u63a5\u6536\u5bf9\u8c61\u7684\u5b50\u96c6\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u56e0\u6b64\uff0c\u5b83\u5339\u914d\u63a5\u6536\u5230\u7684\u5305\u542b\u5c5e\u4e8e\u9884\u671f\u5bf9\u8c61\u7684\u5c5e\u6027\u7684\u5bf9\u8c61\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"test('onPress gets called with the right thing', () => {\n  const onPress = jest.fn();\n  simulatePresses(onPress);\n  expect(onPress).toBeCalledWith(\n    expect.objectContaining({\n      x: expect.any(Number),\n      y: expect.any(Number),\n    }),\n  );\n});\n\n\n// \u76f8\u53cd\u7684\u5339\u914d\u5668\ndescribe('not.objectContaining', () => {\n  const expected = {foo: 'bar'};\n\n  it('matches if the actual object does not contain expected key: value pairs', () => {\n    expect({bar: 'baz'}).toEqual(expect.not.objectContaining(expected));\n  });\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectstringcontainingstring",children:"expect.stringContaining(string)"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u5b83\u662f\u4e00\u4e2a\u5305\u542b\u786e\u5207\u7684\u671f\u671b\u5b57\u7b26\u4e32\u7684\u5b57\u7b26\u4e32\uff0c\u5219\u5339\u914d\u63a5\u6536\u7684\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"\n// \u76f8\u53cd\u7684\u5339\u914d\u5668\ndescribe('not.stringContaining', () => {\n  const expected = 'Hello world!';\n\n  it('matches if the received value does not contain the expected substring', () => {\n    expect('How are you?').toEqual(expect.not.stringContaining(expected));\n  });\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectstringmatchingstring--regexp",children:"expect.stringMatching(string | regexp)"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u5b83\u662f\u5b57\u7b26\u4e32\uff0c\u6216\u8005\u5b83\u662f\u4e00\u4e2a\u5339\u914d\u9884\u671f\u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u5219\u5339\u914d\u63a5\u6536\u7684\u503c\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"describe('stringMatching in arrayContaining', () => {\n  const expected = [\n    expect.stringMatching(/^Alic/),\n    expect.stringMatching(/^[BR]ob/),\n  ];\n  it('matches even if received contains additional elements', () => {\n    expect(['Alicia', 'Roberto', 'Evelina']).toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n  it('does not match if received does not contain expected elements', () => {\n    expect(['Roberto', 'Evelina']).not.toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n});\n\n// \u76f8\u53cd\u7684\u5339\u914d\u5668\ndescribe('not.stringMatching', () => {\n  const expected = /Hello world!/;\n\n  it('matches if the received value does not match the expected regex', () => {\n    expect('How are you?').toEqual(expect.not.stringMatching(expected));\n  });\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectassertionsnumber",children:"expect.assertions(number)"}),"\n",(0,a.jsx)(n.p,{children:"\u9a8c\u8bc1\u5728\u6d4b\u8bd5\u671f\u95f4\u8c03\u7528\u4e86\u4e00\u5b9a\u6570\u91cf\u7684\u65ad\u8a00\u3002\u8fd9\u5728\u6d4b\u8bd5\u5f02\u6b65\u4ee3\u7801\u65f6\u975e\u5e38\u6709\u7528\uff0c\u4ee5\u786e\u4fdd\u56de\u8c03\u4e2d\u7684\u65ad\u8a00\u786e\u5b9e\u88ab\u8c03\u7528\u4e86"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"test('doAsync calls both callbacks', () => {\n  expect.assertions(2);\n  function callback1(data) {\n    expect(data).toBeTruthy();\n  }\n  function callback2(data) {\n    expect(data).toBeTruthy();\n  }\n\n  doAsync(callback1, callback2);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expecthasassertions",children:"expect.hasAssertions()"}),"\n",(0,a.jsx)(n.p,{children:"\u9a8c\u8bc1\u5728\u6d4b\u8bd5\u671f\u95f4\u81f3\u5c11\u6709\u4e00\u4e2a\u65ad\u8a00\u88ab\u8c03\u7528\u3002\u8fd9\u5728\u6d4b\u8bd5\u5f02\u6b65\u4ee3\u7801\u65f6\u975e\u5e38\u6709\u7528\uff0c\u4ee5\u786e\u4fdd\u56de\u8c03\u4e2d\u7684\u65ad\u8a00\u786e\u5b9e\u88ab\u8c03\u7528\u4e86"}),"\n",(0,a.jsx)(n.p,{children:"\u4f8b\u5982\uff0c\u6211\u4eec\u6709\u51e0\u4e2a\u51fd\u6570\u90fd\u662f\u5173\u4e8e\u72b6\u6001\u7684\u3002prepareState\u8c03\u7528\u4e00\u4e2a\u5e26\u6709\u72b6\u6001\u5bf9\u8c61\u7684\u56de\u8c03\u51fd\u6570\uff0cvalidateState\u5728\u8be5\u72b6\u6001\u5bf9\u8c61\u4e0a\u8fd0\u884c\uff0cwaitOnState\u8fd4\u56de\u4e00\u4e2a\u627f\u8bfa\uff0c\u7b49\u5f85\u6240\u6709prepareState\u56de\u8c03\u5b8c\u6210\u3002\u6211\u4eec\u53ef\u4ee5\u7528"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"test('prepareState prepares a valid state', () => {\n  expect.hasAssertions();\n  prepareState(state => {\n    expect(validateState(state)).toBeTruthy();\n  });\n  return waitOnState();\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"expectaddsnapshotserializerserializer",children:"expect.addSnapshotSerializer(serializer)"}),"\n",(0,a.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u8c03\u7528expect.addSnapshotSerializer\u6dfb\u52a0\u4e00\u4e2a\u6a21\u5757\u6765\u683c\u5f0f\u5316\u7279\u5b9a\u4e8e\u5e94\u7528\u7a0b\u5e8f\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9\u4e8e\u5355\u4e2a\u6d4b\u8bd5\u6587\u4ef6\uff0c\u6dfb\u52a0\u7684\u6a21\u5757\u5728snapshotserializer\u914d\u7f6e\u7684\u6240\u6709\u6a21\u5757\u4e4b\u524d\uff0c\u800csnapshotserializer\u914d\u7f6e\u5728\u5185\u7f6eJavaScript\u7c7b\u578b\u548cReact\u5143\u7d20\u7684\u9ed8\u8ba4\u5feb\u7167\u5e8f\u5217\u5316\u4e4b\u524d\u3002\u6dfb\u52a0\u7684\u6700\u540e\u4e00\u4e2a\u6a21\u5757\u662f\u6d4b\u8bd5\u7684\u7b2c\u4e00\u4e2a\u6a21\u5757\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u60a8\u5728\u5355\u4e2a\u6d4b\u8bd5\u6587\u4ef6\u4e2d\u6dfb\u52a0\u5feb\u7167\u5e8f\u5217\u5316\u5668\uff0c\u800c\u4e0d\u662f\u5c06\u5176\u6dfb\u52a0\u5230snapshotserializer\u914d\u7f6e\u4e2d:\u60a8\u5c06\u4f7f\u4f9d\u8d56\u5173\u7cfb\u663e\u5f0f\u800c\u4e0d\u662f\u9690\u5f0f\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u60a8\u907f\u514d\u4e86\u53ef\u80fd\u5bfc\u81f4\u4ececreate-react-app\u5f39\u51fa\u7684\u914d\u7f6e\u9650\u5236\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import serializer from 'my-serializer-module';\nexpect.addSnapshotSerializer(serializer);\n\n// affects expect(value).toMatchSnapshot() assertions in the test file\n"})})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8672:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var a=t(959);const c={},i=a.createContext(c);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);