"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1294],{7942:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,v=u["".concat(i,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(1163),r=(n(959),n(7942));const o={title:"\u5e38\u7528\u5339\u914d\u5668"},l=void 0,s={unversionedId:"note/jest/\u5e38\u7528\u5339\u914d\u5668",id:"note/jest/\u5e38\u7528\u5339\u914d\u5668",title:"\u5e38\u7528\u5339\u914d\u5668",description:"\u4e00\u3001\u57fa\u7840\u5339\u914d\u5668",source:"@site/docs/note/jest/\u5e38\u7528\u5339\u914d\u5668.md",sourceDirName:"note/jest",slug:"/note/jest/\u5e38\u7528\u5339\u914d\u5668",permalink:"/docs/note/jest/\u5e38\u7528\u5339\u914d\u5668",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5e38\u7528\u5339\u914d\u5668"},sidebar:"note",previous:{title:"\u5e38\u7528except",permalink:"/docs/note/jest/\u5e38\u7528expect"},next:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/docs/note/nginx/\u5e38\u7528\u547d\u4ee4"}},i={},c=[{value:"\u4e00\u3001\u57fa\u7840\u5339\u914d\u5668",id:"\u4e00\u57fa\u7840\u5339\u914d\u5668",level:2},{value:".toBe(value)",id:"tobevalue",level:3},{value:".toEqual(value)",id:"toequalvalue",level:3},{value:".toStrictEqual(value)",id:"tostrictequalvalue",level:3},{value:".toContain(item)",id:"tocontainitem",level:3},{value:".toContainEqual(item)",id:"tocontainequalitem",level:3},{value:"\u4e8c\u3001\u7279\u6b8a\u503c\u5339\u914d\u5668",id:"\u4e8c\u7279\u6b8a\u503c\u5339\u914d\u5668",level:2},{value:".toBeNull()",id:"tobenull",level:3},{value:".toBeUndefined()",id:"tobeundefined",level:3},{value:".toBeDefined()",id:"tobedefined",level:3},{value:".toBeNaN()",id:"tobenan",level:3},{value:".toBeTruthy()",id:"tobetruthy",level:3},{value:".toBeFalsy()",id:"tobefalsy",level:3},{value:".not",id:"not",level:3},{value:"\u4e09\u3001\u6570\u5b57\u5339\u914d\u5668",id:"\u4e09\u6570\u5b57\u5339\u914d\u5668",level:2},{value:".toBeGreaterThan(number | bigint)",id:"tobegreaterthannumber--bigint",level:3},{value:".toBeGreaterThanOrEqual(number | bigint)",id:"tobegreaterthanorequalnumber--bigint",level:3},{value:".toBeLessThan()",id:"tobelessthan",level:3},{value:".toBeLessThanOrEqual()",id:"tobelessthanorequal",level:3},{value:".toBeCloseTo(number, numDigits?)",id:"tobeclosetonumber-numdigits",level:3},{value:"\u56db\u3001\u5f02\u6b65\u5339\u914d\u5668",id:"\u56db\u5f02\u6b65\u5339\u914d\u5668",level:2},{value:".resolves",id:"resolves",level:3},{value:".rejects",id:"rejects",level:3},{value:"\u4e94\u3001\u51fd\u6570\u5339\u914d\u5668",id:"\u4e94\u51fd\u6570\u5339\u914d\u5668",level:2},{value:".toHaveBeenCalled()",id:"tohavebeencalled",level:3},{value:".toHaveBeenCalledTimes(number)",id:"tohavebeencalledtimesnumber",level:3},{value:".toHaveBeenCalledWith(arg1, arg2, ...)",id:"tohavebeencalledwitharg1-arg2-",level:3},{value:".toHaveBeenLastCalledWith(arg1, arg2, ...)",id:"tohavebeenlastcalledwitharg1-arg2-",level:3},{value:".toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)",id:"tohavebeennthcalledwithnthcall-arg1-arg2-",level:3},{value:".toHaveReturned()",id:"tohavereturned",level:3},{value:".toHaveReturnedTimes(number)",id:"tohavereturnedtimesnumber",level:3},{value:".toHaveReturnedWith(value)",id:"tohavereturnedwithvalue",level:3},{value:".toHaveLastReturnedWith(value)",id:"tohavelastreturnedwithvalue",level:3},{value:".toHaveNthReturnedWith(nthCall, value)",id:"tohaventhreturnedwithnthcall-value",level:3},{value:"\u516d\u3001\u5bf9\u8c61\u5339\u914d\u5668",id:"\u516d\u5bf9\u8c61\u5339\u914d\u5668",level:2},{value:".toHaveLength(number)",id:"tohavelengthnumber",level:3},{value:".toHaveProperty(keyPath, value?)",id:"tohavepropertykeypath-value",level:3},{value:".toBeInstanceOf(Class)",id:"tobeinstanceofclass",level:3},{value:".toMatch(regexp | string)",id:"tomatchregexp--string",level:3},{value:".toMatchObject(object)",id:"tomatchobjectobject",level:3},{value:".toMatchSnapshot(propertyMatchers?, hint?)",id:"tomatchsnapshotpropertymatchers-hint",level:3},{value:".toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)",id:"tomatchinlinesnapshotpropertymatchers-inlinesnapshot",level:3},{value:"\u4e03\u3001\u62a5\u9519\u5339\u914d\u5668",id:"\u4e03\u62a5\u9519\u5339\u914d\u5668",level:2},{value:".toThrow(error?)",id:"tothrowerror",level:3},{value:".toThrowErrorMatchingSnapshot(hint?)",id:"tothrowerrormatchingsnapshothint",level:3},{value:".toThrowErrorMatchingInlineSnaps\xcfhot(inlineSnapshot)",id:"tothrowerrormatchinginlinesnaps\xefhotinlinesnapshot",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4e00\u57fa\u7840\u5339\u914d\u5668"},"\u4e00\u3001\u57fa\u7840\u5339\u914d\u5668"),(0,r.kt)("h3",{id:"tobevalue"},".toBe(value)"),(0,r.kt)("p",null,"\u5339\u914d\u6570\u5b57\uff0c\u5b57\u7b26\u7b49\u5b8c\u5168\u76f8\u7b49\uff0c\u4e0d\u80fd\u5339\u914d\u5bf9\u8c61\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const can = {\n  name: 'pamplemousse',\n  ounces: 12,\n};\n\ndescribe('the can', () => {\n  test('has 12 ounces', () => {\n    expect(can.ounces).toBe(12);\n  });\n\n  test('has a sophisticated name', () => {\n    expect(can.name).toBe('pamplemousse');\n  });\n});\n")),(0,r.kt)("h3",{id:"toequalvalue"},".toEqual(value)"),(0,r.kt)("p",null,"\u5339\u914d\u4e24\u8005\u5185\u5bb9\u76f8\u7b49\uff0c\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const can1 = {\n  flavor: 'grapefruit',\n  ounces: 12,\n};\nconst can2 = {\n  flavor: 'grapefruit',\n  ounces: 12,\n};\n\ndescribe('the La Croix cans on my desk', () => {\n  test('have all the same properties', () => {\n    expect(can1).toEqual(can2);\n  });\n  test('are not the exact same can', () => {\n    expect(can1).not.toBe(can2);\n  });\n});\n")),(0,r.kt)("h3",{id:"tostrictequalvalue"},".toStrictEqual(value)"),(0,r.kt)("p",null,"\u5339\u914d\u5bf9\u8c61\u62e5\u6709\u76f8\u540c\u7684\u7c7b\u578b\u548c\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class LaCroix {\n  constructor(flavor) {\n    this.flavor = flavor;\n  }\n}\n\ndescribe('the La Croix cans on my desk', () => {\n  test('are not semantically the same', () => {\n    expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});\n    expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});\n  });\n});\n")),(0,r.kt)("h3",{id:"tocontainitem"},".toContain(item)"),(0,r.kt)("p",null,"\u5339\u914d\u6570\u7ec4\u6216\u5b57\u7b26\u4e32\u91cc\u662f\u5426\u5305\u542b\u67d0\u4e2a\u5177\u4f53\u9879"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('the flavor list contains lime', () => {\n  expect(getAllFlavors()).toContain('lime');\n});\n")),(0,r.kt)("h3",{id:"tocontainequalitem"},".toContainEqual(item)"),(0,r.kt)("p",null,"\u5339\u914d\u6570\u7ec4\u6216\u5bf9\u8c61\u91cc\uff0c\u662f\u5426\u5305\u542b\u67d0\u4e2a\u5bf9\u8c61"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('my beverage', () => {\n  test('is delicious and not sour', () => {\n    const myBeverage = {delicious: true, sour: false};\n    expect(myBeverages()).toContainEqual(myBeverage);\n  });\n});\n")),(0,r.kt)("h2",{id:"\u4e8c\u7279\u6b8a\u503c\u5339\u914d\u5668"},"\u4e8c\u3001\u7279\u6b8a\u503c\u5339\u914d\u5668"),(0,r.kt)("h3",{id:"tobenull"},".toBeNull()"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u4e3aNull"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function bloop() {\n  return null;\n}\n\ntest('bloop returns null', () => {\n  expect(bloop()).toBeNull();\n});\n\n// \u7b49\u4ef7\u4e8e .toBe(null)\n// \u4f46.toBeNull\u7684\u62a5\u9519\u63d0\u793a\u66f4\u53cb\u597d\uff0c\u63a8\u8350\u4f7f\u7528\n")),(0,r.kt)("h3",{id:"tobeundefined"},".toBeUndefined()"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u4e3a \u672a\u5b9a\u4e49\uff0cundefined\uff0c\u6216\u4e00\u4e2a\u51fd\u6570\u662f\u5426\u8fd4\u56deundefined"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('the best drink for octopus flavor is undefined', () => {\n  expect(bestDrinkForFlavor('octopus')).toBeUndefined();\n});\n")),(0,r.kt)("h3",{id:"tobedefined"},".toBeDefined()"),(0,r.kt)("p",null,"\u5339\u914d\u5bf9\u8c61\u662f\u5426\u5b9a\u4e49\u4e86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('there is a new flavor idea', () => {\n  expect(fetchNewFlavorIdea()).toBeDefined();\n});\n")),(0,r.kt)("h3",{id:"tobenan"},".toBeNaN()"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u4e3aNaN"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('passes when value is NaN', () => {\n  expect(NaN).toBeNaN();\n  expect(1).not.toBeNaN();\n});\n")),(0,r.kt)("h3",{id:"tobetruthy"},".toBeTruthy()"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u4e3a\u771f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"drinkSomeLaCroix();\nif (thirstInfo()) {\n  drinkMoreLaCroix();\n}\ntest('drinking La Croix leads to having thirst info', () => {\n  drinkSomeLaCroix();\n  expect(thirstInfo()).toBeTruthy();\n});\n")),(0,r.kt)("h3",{id:"tobefalsy"},".toBeFalsy()"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u4e3a\u5047"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"drinkSomeLaCroix();\nif (!getErrors()) {\n  drinkMoreLaCroix();\n}\ntest('drinking La Croix does not lead to errors', () => {\n  drinkSomeLaCroix();\n  expect(getErrors()).toBeFalsy();\n});\n\n// \u5728javascript\u4e2d\u6709\u8fd9\u516d\u79cd\u5047\u503c  \u2018false\u2019\u3001\u20180\u2019\u3001\u2018''\u2019\u3001\u2018null\u2019,\u2018undefined\u2019\u3001\u2018NaN\u2019\n// \u5176\u4ed6\u503c\u90fd\u4e3a\u771f\n")),(0,r.kt)("h3",{id:"not"},".not"),(0,r.kt)("p",null,"\u7528\u4e8e\u5176\u4ed6\u5339\u914d\u5668\u4e4b\u524d\uff0c\u8868\u793a\u76f8\u53cd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('the best flavor is not coconut', () => {\n  expect(bestLaCroixFlavor()).not.toBe('coconut');\n  expect().toBeTurthy\n    expect().not.toBeFalsy() \n});\n")),(0,r.kt)("h2",{id:"\u4e09\u6570\u5b57\u5339\u914d\u5668"},"\u4e09\u3001\u6570\u5b57\u5339\u914d\u5668"),(0,r.kt)("h3",{id:"tobegreaterthannumber--bigint"},".toBeGreaterThan(number | bigint)"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u5927\u4e8e\u67d0\u4e2a\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('ounces per can is more than 10', () => {\n  expect(ouncesPerCan()).toBeGreaterThan(10);\n});\n")),(0,r.kt)("h3",{id:"tobegreaterthanorequalnumber--bigint"},".toBeGreaterThanOrEqual(number | bigint)"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u5927\u4e8e\u7b49\u4e8e\u67d0\u4e2a\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('ounces per can is at least 12', () => {\n  expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);\n});\n")),(0,r.kt)("h3",{id:"tobelessthan"},".toBeLessThan()"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u5c0f\u4e8e\u67d0\u4e2a\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('ounces per can is less than 20', () => {\n  expect(ouncesPerCan()).toBeLessThan(20);\n});\n")),(0,r.kt)("h3",{id:"tobelessthanorequal"},".toBeLessThanOrEqual()"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u5c0f\u4e8e\u7b49\u4e8e\u67d0\u4e2a\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('ounces per can is at most 12', () => {\n  expect(ouncesPerCan()).toBeLessThanOrEqual(12);\n});\n")),(0,r.kt)("h3",{id:"tobeclosetonumber-numdigits"},".toBeCloseTo(number, numDigits?)"),(0,r.kt)("p",null,"\u5339\u914d\u6d6e\u70b9\u6570\u662f\u5426\u9760\u8fd1\u6307\u5b9a\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u6d4b\u8bd5\u6d6e\u70b9\u6570\uff0c\u9519\u8bef\u793a\u4f8b\u3002\u4f7f\u7528.toBe\u6ca1\u6cd5\u6b63\u786e\u5339\u914d\u3002\ntest('adding works sanely with decimals', () => {\n  // \u5728javascript\u91cc  0.1 + 0.2 \u5b9e\u9645\u7b49\u4e8e\u20180.30000000000000004\u2019\u8fd9\u662f\u4e8c\u8fdb\u5236\u8ba1\u6570\u5bfc\u81f4\u7684\u8bef\u5dee\u3002\n  expect(0.2 + 0.1).toBe(0.3); // Fails!\n});\n\n// \u6b63\u786e\u793a\u4f8b\ntest('adding works sanely with decimals', () => {\n  // \u7cbe\u786e\u5230\u5c0f\u6570\u70b9\u540e\u4e94\u4f4d\n  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);\n});\n\n")),(0,r.kt)("h2",{id:"\u56db\u5f02\u6b65\u5339\u914d\u5668"},"\u56db\u3001\u5f02\u6b65\u5339\u914d\u5668"),(0,r.kt)("h3",{id:"resolves"},".resolves"),(0,r.kt)("p",null,"\u7528\u4e8epromise\u627f\u8bfa\u6210\u529f\u540e\uff0c\u83b7\u53d6\u8fd4\u56de\u7684\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('resolves to lemon', () => {\n  // make sure to add a return statement\n  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');\n});\n\n\n// \u652f\u6301async\u4e0eawait\ntest('resolves to lemon', async () => {\n  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');\n  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');\n});\n")),(0,r.kt)("h3",{id:"rejects"},".rejects"),(0,r.kt)("p",null,"\u7528\u4e8epromise\u627f\u8bfa\u5931\u8d25\u540e\uff0c\u83b7\u53d6\u5f02\u5e38\u60c5\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('rejects to octopus', () => {\n  // make sure to add a return statement\n  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(\n    'octopus',\n  );\n});\n\n// \u652f\u6301async\u4e0eawait\ntest('rejects to octopus', async () => {\n  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');\n});\n")),(0,r.kt)("h2",{id:"\u4e94\u51fd\u6570\u5339\u914d\u5668"},"\u4e94\u3001\u51fd\u6570\u5339\u914d\u5668"),(0,r.kt)("h3",{id:"tohavebeencalled"},".toHaveBeenCalled()"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u51fd\u6570\u662f\u5426\u88ab\u8c03\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function drinkAll(callback, flavour) {\n  if (flavour !== 'octopus') {\n    callback(flavour);\n  }\n}\n\ndescribe('drinkAll', () => {\n  test('drinks something lemon-flavoured', () => {\n    const drink = jest.fn();\n    drinkAll(drink, 'lemon');\n    expect(drink).toHaveBeenCalled();\n  });\n\n  test('does not drink something octopus-flavoured', () => {\n    const drink = jest.fn();\n    drinkAll(drink, 'octopus');\n    expect(drink).not.toHaveBeenCalled();\n  });\n});\n")),(0,r.kt)("h3",{id:"tohavebeencalledtimesnumber"},".toHaveBeenCalledTimes(number)"),(0,r.kt)("p",null,"\u5339\u914d\u51fd\u6570\u88ab\u8c03\u7528\u7684\u51c6\u786e\u6b21\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('drinkEach drinks each drink', () => {\n  const drink = jest.fn();\n  drinkEach(drink, ['lemon', 'octopus']);\n  expect(drink).toHaveBeenCalledTimes(2);\n});\n")),(0,r.kt)("h3",{id:"tohavebeencalledwitharg1-arg2-"},".toHaveBeenCalledWith(arg1, arg2, ...)"),(0,r.kt)("p",null,"\u5339\u914d\u51fd\u6570\u8c03\u7528\u7684\u5177\u4f53\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('registration applies correctly to orange La Croix', () => {\n  const beverage = new LaCroix('orange');\n  register(beverage);\n  const f = jest.fn();\n  applyToAll(f);\n  expect(f).toHaveBeenCalledWith(beverage);\n});\n")),(0,r.kt)("h3",{id:"tohavebeenlastcalledwitharg1-arg2-"},".toHaveBeenLastCalledWith(arg1, arg2, ...)"),(0,r.kt)("p",null,"\u5339\u914d\u8c03\u7528\u51fd\u6570\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('applying to all flavors does mango last', () => {\n  const drink = jest.fn();\n  applyToAllFlavors(drink);\n  expect(drink).toHaveBeenLastCalledWith('mango');\n});\n")),(0,r.kt)("h3",{id:"tohavebeennthcalledwithnthcall-arg1-arg2-"},".toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u51fd\u6570\uff0c\u7b2c\u51e0\u6b21\u8c03\u7528\u65f6\uff0c\u662f\u5426\u4e3a\u6307\u5b9a\u7684\u67d0\u4e2a\u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('drinkEach drinks each drink', () => {\n  const drink = jest.fn();\n  drinkEach(drink, ['lemon', 'octopus']);\n  expect(drink).toHaveBeenNthCalledWith(1, 'lemon');\n  expect(drink).toHaveBeenNthCalledWith(2, 'octopus');\n});\n")),(0,r.kt)("h3",{id:"tohavereturned"},".toHaveReturned()"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u51fd\u6570\u662f\u5426\u6210\u529f\u8fd4\u56de"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('drinks returns', () => {\n  const drink = jest.fn(() => true);\n  drink();\n  expect(drink).toHaveReturned();\n});\n")),(0,r.kt)("h3",{id:"tohavereturnedtimesnumber"},".toHaveReturnedTimes(number)"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u51fd\u6570\u6210\u529f\u8fd4\u56de\u7684\u6b21\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('drink returns twice', () => {\n  const drink = jest.fn(() => true);\n  drink();\n  drink();\n  expect(drink).toHaveReturnedTimes(2);\n});\n")),(0,r.kt)("h3",{id:"tohavereturnedwithvalue"},".toHaveReturnedWith(value)"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u51fd\u6570\u662f\u5426\u8fd4\u56de\u4e86\u6307\u5b9a\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('drink returns La Croix', () => {\n  const beverage = {name: 'La Croix'};\n  const drink = jest.fn(beverage => beverage.name);\n  drink(beverage);\n  expect(drink).toHaveReturnedWith('La Croix');\n});\n")),(0,r.kt)("h3",{id:"tohavelastreturnedwithvalue"},".toHaveLastReturnedWith(value)"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u51fd\u6570\uff0c\u6700\u540e\u4e00\u6b21\u6267\u884c\u8fd4\u56de\u7684\u503c\uff0c\u662f\u5426\u4e3a\u6307\u5b9a\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('drink returns La Croix (Orange) last', () => {\n  const beverage1 = {name: 'La Croix (Lemon)'};\n  const beverage2 = {name: 'La Croix (Orange)'};\n  const drink = jest.fn(beverage => beverage.name);\n  drink(beverage1);\n  drink(beverage2);\n  expect(drink).toHaveLastReturnedWith('La Croix (Orange)');\n});\n")),(0,r.kt)("h3",{id:"tohaventhreturnedwithnthcall-value"},".toHaveNthReturnedWith(nthCall, value)"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u51fd\u6570\uff0c\u6307\u5b9a\u6b21\u6570\u8fd4\u56de\u7684\u503c\uff0c\u662f\u5426\u4e3a\u6307\u5b9a\u7684\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('drink returns expected nth calls', () => {\n  const beverage1 = {name: 'La Croix (Lemon)'};\n  const beverage2 = {name: 'La Croix (Orange)'};\n  const drink = jest.fn(beverage => beverage.name);\n  drink(beverage1);\n  drink(beverage2);\n  expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');\n  expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');\n});\n")),(0,r.kt)("h2",{id:"\u516d\u5bf9\u8c61\u5339\u914d\u5668"},"\u516d\u3001\u5bf9\u8c61\u5339\u914d\u5668"),(0,r.kt)("h3",{id:"tohavelengthnumber"},".toHaveLength(number)"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u6709length\u5c5e\u6027\uff0c\u5177\u4f53\u4e3a\u51e0\u3002\u53ef\u7528\u4e8e\u68c0\u67e5\u6570\u7ec4\u548c\u5b57\u7b26\u4e32\u5927\u5c0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"expect([1, 2, 3]).toHaveLength(3);\nexpect('abc').toHaveLength(3);\nexpect('').not.toHaveLength(5);\n")),(0,r.kt)("h3",{id:"tohavepropertykeypath-value"},".toHaveProperty(keyPath, value?)"),(0,r.kt)("p",null,"\u5339\u914d\u67d0\u4e2a\u5bf9\u8c61\u91cc\u662f\u5426\u542b\u6709\u67d0\u4e2a\u5b57\u6bb5\u5c5e\u6027\uff0c\u503c\u662f\u5426\u6b63\u786e\u3002\u53ef\u901a\u8fc7\u6570\u7ec4\uff0c\u5b57\u7b26\u4e32\u8def\u5f84\u7684\u65b9\u5f0f\uff0c\u67e5\u770b\u6df1\u5c42\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u5f85\u6d4b\u8bd5\u6837\u4f8b\u6570\u636e\nconst houseForSale = {\n  bath: true,\n  bedrooms: 4,\n  kitchen: {\n    amenities: ['oven', 'stove', 'washer'],\n    area: 20,\n    wallColor: 'white',\n    'nice.oven': true,\n  },\n  'ceiling.height': 2,\n};\n\ntest('this house has my desired features', () => {\n  // \u68c0\u67e5\u662f\u5426\u6709\u2018bath\u2019\u5c5e\u6027\n  expect(houseForSale).toHaveProperty('bath');\n  // \u68c0\u67e5\u662f\u5426\u6709\u2018bedrooms\u2019\u5c5e\u6027\uff0c\u503c\u662f\u5426\u4e3a4\n  expect(houseForSale).toHaveProperty('bedrooms', 4);\n  // \u68c0\u67e5\u662f\u5426\u6ca1\u6709\u2018pool\u2019\u5c5e\u6027\n  expect(houseForSale).not.toHaveProperty('pool');\n\n  // \u4f7f\u7528\u70b9\u8868\u793a\u6cd5\u7684\u6df1\u5ea6\u5f15\u7528---\u7528\u70b9\u63cf\u8ff0\u8def\u5f84\n  // \u68c0\u67e5\u2018kitchen.area\u2019\u8def\u5f84\u5c5e\u6027\u662f\u5426\u5b58\u5728\uff0c\u503c\u662f\u5426\u4e3a20\n  expect(houseForSale).toHaveProperty('kitchen.area', 20);\n  expect(houseForSale).toHaveProperty('kitchen.amenities', [\n    'oven',\n    'stove',\n    'washer',\n  ]);\n  expect(houseForSale).not.toHaveProperty('kitchen.open');\n\n  // \u4f7f\u7528\u5305\u542bkeyPath\u7684\u6570\u7ec4\u8fdb\u884c\u6df1\u5ea6\u5f15\u7528--\u7528\u6570\u7ec4\u63cf\u8ff0\u8def\u5f84\n  // \u68c0\u67e5\u2018kitchen.area\u2019\u8def\u5f84\u7684\u5c5e\u6027\u662f\u5426\u5b58\u5728\uff0c\u503c\u662f\u5426\u4e3a20\n  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);\n  expect(houseForSale).toHaveProperty(\n    ['kitchen', 'amenities'],\n    ['oven', 'stove', 'washer'],\n  );\n  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');\n  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);\n  expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);\n\n  // \u5f15\u7528\u952e\u672c\u8eab\u5e26\u6709\u70b9\u7684\u952e\n  expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');\n});\n")),(0,r.kt)("h3",{id:"tobeinstanceofclass"},".toBeInstanceOf(Class)"),(0,r.kt)("p",null,"\u5339\u914d\u4e00\u4e2a\u5bf9\u8c61\u662f\u5426\u662f\u4e00\u4e2a\u7c7b\u7684\u5b9e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"class A {}\nexpect(new A()).toBeInstanceOf(A);\nexpect(() => {}).toBeInstanceOf(Function);\nexpect(new A()).toBeInstanceOf(Function); // throws\n")),(0,r.kt)("h3",{id:"tomatchregexp--string"},".toMatch(regexp | string)"),(0,r.kt)("p",null,"\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u4e0e\u6b63\u5219\u8868\u8fbe\u5f0f\u76f8\u5339\u914d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"describe('an essay on the best flavor', () => {\n  test('mentions grapefruit', () => {\n    expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);\n    expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));\n  });\n});\n\ndescribe('grapefruits are healthy', () => {\n  test('grapefruits are a fruit', () => {\n    expect('grapefruits').toMatch('fruit');\n  });\n});\n")),(0,r.kt)("h3",{id:"tomatchobjectobject"},".toMatchObject(object)"),(0,r.kt)("p",null,"\u5339\u914d\u4e00\u4e2a\u5bf9\u8c61\uff0c\u662f\u5426\u662f\u67d0\u4e2a\u5bf9\u8c61\u7684\u5b50\u96c6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const houseForSale = {\n  bath: true,\n  bedrooms: 4,\n  kitchen: {\n    amenities: ['oven', 'stove', 'washer'],\n    area: 20,\n    wallColor: 'white',\n  },\n};\nconst desiredHouse = {\n  bath: true,\n  kitchen: {\n    amenities: ['oven', 'stove', 'washer'],\n    wallColor: expect.stringMatching(/white|yellow/),\n  },\n};\n\ntest('the house has my desired features', () => {\n  expect(houseForSale).toMatchObject(desiredHouse);\n});\n\n\n\ndescribe('toMatchObject applied to arrays', () => {\n  test('the number of elements must match exactly', () => {\n    expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);\n  });\n\n  test('.toMatchObject is called for each elements, so extra object properties are okay', () => {\n    expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([\n      {foo: 'bar'},\n      {baz: 1},\n    ]);\n  });\n});\n")),(0,r.kt)("h3",{id:"tomatchsnapshotpropertymatchers-hint"},".toMatchSnapshot(propertyMatchers?, hint?)"),(0,r.kt)("p",null,"\u5339\u914d\u5feb\u7167\u4e0e\u6700\u65b0\u7684\u4e00\u4e2a\u503c\u6bd4\u8f83"),(0,r.kt)("h3",{id:"tomatchinlinesnapshotpropertymatchers-inlinesnapshot"},".toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)"),(0,r.kt)("p",null,"\u5339\u914d\u5feb\u7167\u4e0e\u6700\u8fd1\u7684\u4e00\u4e2a\u503c\u6bd4\u8f83"),(0,r.kt)("h2",{id:"\u4e03\u62a5\u9519\u5339\u914d\u5668"},"\u4e03\u3001\u62a5\u9519\u5339\u914d\u5668"),(0,r.kt)("h3",{id:"tothrowerror"},".toThrow(error?)"),(0,r.kt)("p",null,"\u5339\u914d\u662f\u5426\u6709\u62a5\u9519\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"test('throws on octopus', () => {\n  expect(() => {\n    drinkFlavor('octopus');\n  }).toThrow();\n});\n// \u60a8\u5fc5\u987b\u5c06\u4ee3\u7801\u5305\u88c5\u5728\u51fd\u6570\u4e2d\uff0c\u5426\u5219\u5c06\u65e0\u6cd5\u6355\u83b7\u9519\u8bef\uff0c\u65ad\u8a00\u5c06\u5931\u8d25\u3002\n\nfunction drinkFlavor(flavor) {\n  if (flavor == 'octopus') {\n    throw new DisgustingFlavorError('yuck, octopus flavor');\n  }\n  // Do some other stuff\n}\n\ntest('throws on octopus', () => {\n  function drinkOctopus() {\n    drinkFlavor('octopus');\n  }\n  // Test that the error message says \"yuck\" somewhere: these are equivalent\n  expect(drinkOctopus).toThrowError(/yuck/);\n  expect(drinkOctopus).toThrowError('yuck');\n  // Test the exact error message\n  expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);\n  expect(drinkOctopus).toThrowError(new Error('yuck, octopus flavor'));\n  // Test that we get a DisgustingFlavorError\n  expect(drinkOctopus).toThrowError(DisgustingFlavorError);\n});\n")),(0,r.kt)("h3",{id:"tothrowerrormatchingsnapshothint"},".toThrowErrorMatchingSnapshot(hint?)"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u5339\u914d\u51fd\u6570\u5728\u8c03\u7528\u65f6\u629b\u51fa\u5339\u914d\u6700\u8fd1\u5feb\u7167\u7684\u9519\u8bef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"function drinkFlavor(flavor) {\n  if (flavor == 'octopus') {\n    throw new DisgustingFlavorError('yuck, octopus flavor');\n  }\n  // Do some other stuff\n}\n\ntest('throws on octopus', () => {\n  function drinkOctopus() {\n    drinkFlavor('octopus');\n  }\n  expect(drinkOctopus).toThrowErrorMatchingSnapshot();\n});\n\nexports[`drinking flavors throws on octopus 1`] = `\"yuck, octopus flavor\"`;\n")),(0,r.kt)("h3",{id:"tothrowerrormatchinginlinesnaps\xefhotinlinesnapshot"},".toThrowErrorMatchingInlineSnaps\xcfhot(inlineSnapshot)"),(0,r.kt)("p",null,"\u6d4b\u8bd5\u51fd\u6570\u5728\u8c03\u7528\u65f6\u629b\u51fa\u5339\u914d\u6700\u8fd1\u5feb\u7167\u7684\u9519\u8bef"))}h.isMDXComponent=!0}}]);