"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[9442],{

/***/ 52337
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_jest_md_089_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-jest-常用匹配器-md-089.json
const site_docs_tools_jest_md_089_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/jest/常用匹配器","title":"常用匹配器","description":"一、基础匹配器","source":"@site/docs/tools/jest/常用匹配器.md","sourceDirName":"tools/jest","slug":"/tools/jest/常用匹配器","permalink":"/docs/tools/jest/常用匹配器","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"常用匹配器"},"sidebar":"tools","previous":{"title":"常用except","permalink":"/docs/tools/jest/常用expect"},"next":{"title":"macOS","permalink":"/docs/category/macos"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/tools/jest/常用匹配器.md


const frontMatter = {
	title: '常用匹配器'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、基础匹配器",
  "id": "一基础匹配器",
  "level": 2
}, {
  "value": ".toBe(value)",
  "id": "tobevalue",
  "level": 3
}, {
  "value": ".toEqual(value)",
  "id": "toequalvalue",
  "level": 3
}, {
  "value": ".toStrictEqual(value)",
  "id": "tostrictequalvalue",
  "level": 3
}, {
  "value": ".toContain(item)",
  "id": "tocontainitem",
  "level": 3
}, {
  "value": ".toContainEqual(item)",
  "id": "tocontainequalitem",
  "level": 3
}, {
  "value": "二、特殊值匹配器",
  "id": "二特殊值匹配器",
  "level": 2
}, {
  "value": ".toBeNull()",
  "id": "tobenull",
  "level": 3
}, {
  "value": ".toBeUndefined()",
  "id": "tobeundefined",
  "level": 3
}, {
  "value": ".toBeDefined()",
  "id": "tobedefined",
  "level": 3
}, {
  "value": ".toBeNaN()",
  "id": "tobenan",
  "level": 3
}, {
  "value": ".toBeTruthy()",
  "id": "tobetruthy",
  "level": 3
}, {
  "value": ".toBeFalsy()",
  "id": "tobefalsy",
  "level": 3
}, {
  "value": ".not",
  "id": "not",
  "level": 3
}, {
  "value": "三、数字匹配器",
  "id": "三数字匹配器",
  "level": 2
}, {
  "value": ".toBeGreaterThan(number | bigint)",
  "id": "tobegreaterthannumber--bigint",
  "level": 3
}, {
  "value": ".toBeGreaterThanOrEqual(number | bigint)",
  "id": "tobegreaterthanorequalnumber--bigint",
  "level": 3
}, {
  "value": ".toBeLessThan()",
  "id": "tobelessthan",
  "level": 3
}, {
  "value": ".toBeLessThanOrEqual()",
  "id": "tobelessthanorequal",
  "level": 3
}, {
  "value": ".toBeCloseTo(number, numDigits?)",
  "id": "tobeclosetonumber-numdigits",
  "level": 3
}, {
  "value": "四、异步匹配器",
  "id": "四异步匹配器",
  "level": 2
}, {
  "value": ".resolves",
  "id": "resolves",
  "level": 3
}, {
  "value": ".rejects",
  "id": "rejects",
  "level": 3
}, {
  "value": "五、函数匹配器",
  "id": "五函数匹配器",
  "level": 2
}, {
  "value": ".toHaveBeenCalled()",
  "id": "tohavebeencalled",
  "level": 3
}, {
  "value": ".toHaveBeenCalledTimes(number)",
  "id": "tohavebeencalledtimesnumber",
  "level": 3
}, {
  "value": ".toHaveBeenCalledWith(arg1, arg2, ...)",
  "id": "tohavebeencalledwitharg1-arg2-",
  "level": 3
}, {
  "value": ".toHaveBeenLastCalledWith(arg1, arg2, ...)",
  "id": "tohavebeenlastcalledwitharg1-arg2-",
  "level": 3
}, {
  "value": ".toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)",
  "id": "tohavebeennthcalledwithnthcall-arg1-arg2-",
  "level": 3
}, {
  "value": ".toHaveReturned()",
  "id": "tohavereturned",
  "level": 3
}, {
  "value": ".toHaveReturnedTimes(number)",
  "id": "tohavereturnedtimesnumber",
  "level": 3
}, {
  "value": ".toHaveReturnedWith(value)",
  "id": "tohavereturnedwithvalue",
  "level": 3
}, {
  "value": ".toHaveLastReturnedWith(value)",
  "id": "tohavelastreturnedwithvalue",
  "level": 3
}, {
  "value": ".toHaveNthReturnedWith(nthCall, value)",
  "id": "tohaventhreturnedwithnthcall-value",
  "level": 3
}, {
  "value": "六、对象匹配器",
  "id": "六对象匹配器",
  "level": 2
}, {
  "value": ".toHaveLength(number)",
  "id": "tohavelengthnumber",
  "level": 3
}, {
  "value": ".toHaveProperty(keyPath, value?)",
  "id": "tohavepropertykeypath-value",
  "level": 3
}, {
  "value": ".toBeInstanceOf(Class)",
  "id": "tobeinstanceofclass",
  "level": 3
}, {
  "value": ".toMatch(regexp | string)",
  "id": "tomatchregexp--string",
  "level": 3
}, {
  "value": ".toMatchObject(object)",
  "id": "tomatchobjectobject",
  "level": 3
}, {
  "value": ".toMatchSnapshot(propertyMatchers?, hint?)",
  "id": "tomatchsnapshotpropertymatchers-hint",
  "level": 3
}, {
  "value": ".toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)",
  "id": "tomatchinlinesnapshotpropertymatchers-inlinesnapshot",
  "level": 3
}, {
  "value": "七、报错匹配器",
  "id": "七报错匹配器",
  "level": 2
}, {
  "value": ".toThrow(error?)",
  "id": "tothrowerror",
  "level": 3
}, {
  "value": ".toThrowErrorMatchingSnapshot(hint?)",
  "id": "tothrowerrormatchingsnapshothint",
  "level": 3
}, {
  "value": ".toThrowErrorMatchingInlineSnapsÏhot(inlineSnapshot)",
  "id": "tothrowerrormatchinginlinesnapsïhotinlinesnapshot",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "一基础匹配器",
      children: "一、基础匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobevalue",
      children: ".toBe(value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配数字，字符等完全相等，不能匹配对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const can = {\n  name: 'pamplemousse',\n  ounces: 12,\n};\n\ndescribe('the can', () => {\n  test('has 12 ounces', () => {\n    expect(can.ounces).toBe(12);\n  });\n\n  test('has a sophisticated name', () => {\n    expect(can.name).toBe('pamplemousse');\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "toequalvalue",
      children: ".toEqual(value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配两者内容相等，对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const can1 = {\n  flavor: 'grapefruit',\n  ounces: 12,\n};\nconst can2 = {\n  flavor: 'grapefruit',\n  ounces: 12,\n};\n\ndescribe('the La Croix cans on my desk', () => {\n  test('have all the same properties', () => {\n    expect(can1).toEqual(can2);\n  });\n  test('are not the exact same can', () => {\n    expect(can1).not.toBe(can2);\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tostrictequalvalue",
      children: ".toStrictEqual(value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配对象拥有相同的类型和结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class LaCroix {\n  constructor(flavor) {\n    this.flavor = flavor;\n  }\n}\n\ndescribe('the La Croix cans on my desk', () => {\n  test('are not semantically the same', () => {\n    expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});\n    expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tocontainitem",
      children: ".toContain(item)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配数组或字符串里是否包含某个具体项"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('the flavor list contains lime', () => {\n  expect(getAllFlavors()).toContain('lime');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tocontainequalitem",
      children: ".toContainEqual(item)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配数组或对象里，是否包含某个对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "describe('my beverage', () => {\n  test('is delicious and not sour', () => {\n    const myBeverage = {delicious: true, sour: false};\n    expect(myBeverages()).toContainEqual(myBeverage);\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二特殊值匹配器",
      children: "二、特殊值匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobenull",
      children: ".toBeNull()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否为Null"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bloop() {\n  return null;\n}\n\ntest('bloop returns null', () => {\n  expect(bloop()).toBeNull();\n});\n\n// 等价于 .toBe(null)\n// 但.toBeNull的报错提示更友好，推荐使用\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobeundefined",
      children: ".toBeUndefined()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否为 未定义，undefined，或一个函数是否返回undefined"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('the best drink for octopus flavor is undefined', () => {\n  expect(bestDrinkForFlavor('octopus')).toBeUndefined();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobedefined",
      children: ".toBeDefined()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配对象是否定义了"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('there is a new flavor idea', () => {\n  expect(fetchNewFlavorIdea()).toBeDefined();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobenan",
      children: ".toBeNaN()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否为NaN"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('passes when value is NaN', () => {\n  expect(NaN).toBeNaN();\n  expect(1).not.toBeNaN();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobetruthy",
      children: ".toBeTruthy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否为真"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "drinkSomeLaCroix();\nif (thirstInfo()) {\n  drinkMoreLaCroix();\n}\ntest('drinking La Croix leads to having thirst info', () => {\n  drinkSomeLaCroix();\n  expect(thirstInfo()).toBeTruthy();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobefalsy",
      children: ".toBeFalsy()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否为假"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "drinkSomeLaCroix();\nif (!getErrors()) {\n  drinkMoreLaCroix();\n}\ntest('drinking La Croix does not lead to errors', () => {\n  drinkSomeLaCroix();\n  expect(getErrors()).toBeFalsy();\n});\n\n// 在javascript中有这六种假值  ‘false’、‘0’、‘''’、‘null’,‘undefined’、‘NaN’\n// 其他值都为真\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "not",
      children: ".not"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于其他匹配器之前，表示相反"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('the best flavor is not coconut', () => {\n  expect(bestLaCroixFlavor()).not.toBe('coconut');\n  expect().toBeTurthy\n\texpect().not.toBeFalsy() \n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三数字匹配器",
      children: "三、数字匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobegreaterthannumber--bigint",
      children: ".toBeGreaterThan(number | bigint)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否大于某个数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('ounces per can is more than 10', () => {\n  expect(ouncesPerCan()).toBeGreaterThan(10);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobegreaterthanorequalnumber--bigint",
      children: ".toBeGreaterThanOrEqual(number | bigint)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否大于等于某个数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('ounces per can is at least 12', () => {\n  expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobelessthan",
      children: ".toBeLessThan()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否小于某个数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('ounces per can is less than 20', () => {\n  expect(ouncesPerCan()).toBeLessThan(20);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobelessthanorequal",
      children: ".toBeLessThanOrEqual()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否小于等于某个数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('ounces per can is at most 12', () => {\n  expect(ouncesPerCan()).toBeLessThanOrEqual(12);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobeclosetonumber-numdigits",
      children: ".toBeCloseTo(number, numDigits?)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配浮点数是否靠近指定值"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// 测试浮点数，错误示例。使用.toBe没法正确匹配。\ntest('adding works sanely with decimals', () => {\n  // 在javascript里  0.1 + 0.2 实际等于‘0.30000000000000004’这是二进制计数导致的误差。\n  expect(0.2 + 0.1).toBe(0.3); // Fails!\n});\n\n// 正确示例\ntest('adding works sanely with decimals', () => {\n  // 精确到小数点后五位\n  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);\n});\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四异步匹配器",
      children: "四、异步匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resolves",
      children: ".resolves"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于promise承诺成功后，获取返回的数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('resolves to lemon', () => {\n  // make sure to add a return statement\n  return expect(Promise.resolve('lemon')).resolves.toBe('lemon');\n});\n\n\n// 支持async与await\ntest('resolves to lemon', async () => {\n  await expect(Promise.resolve('lemon')).resolves.toBe('lemon');\n  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rejects",
      children: ".rejects"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于promise承诺失败后，获取异常情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('rejects to octopus', () => {\n  // make sure to add a return statement\n  return expect(Promise.reject(new Error('octopus'))).rejects.toThrow(\n    'octopus',\n  );\n});\n\n// 支持async与await\ntest('rejects to octopus', async () => {\n  await expect(Promise.reject(new Error('octopus'))).rejects.toThrow('octopus');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "五函数匹配器",
      children: "五、函数匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavebeencalled",
      children: ".toHaveBeenCalled()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个函数是否被调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function drinkAll(callback, flavour) {\n  if (flavour !== 'octopus') {\n    callback(flavour);\n  }\n}\n\ndescribe('drinkAll', () => {\n  test('drinks something lemon-flavoured', () => {\n    const drink = jest.fn();\n    drinkAll(drink, 'lemon');\n    expect(drink).toHaveBeenCalled();\n  });\n\n  test('does not drink something octopus-flavoured', () => {\n    const drink = jest.fn();\n    drinkAll(drink, 'octopus');\n    expect(drink).not.toHaveBeenCalled();\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavebeencalledtimesnumber",
      children: ".toHaveBeenCalledTimes(number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配函数被调用的准确次数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('drinkEach drinks each drink', () => {\n  const drink = jest.fn();\n  drinkEach(drink, ['lemon', 'octopus']);\n  expect(drink).toHaveBeenCalledTimes(2);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavebeencalledwitharg1-arg2-",
      children: ".toHaveBeenCalledWith(arg1, arg2, ...)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配函数调用的具体参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('registration applies correctly to orange La Croix', () => {\n  const beverage = new LaCroix('orange');\n  register(beverage);\n  const f = jest.fn();\n  applyToAll(f);\n  expect(f).toHaveBeenCalledWith(beverage);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavebeenlastcalledwitharg1-arg2-",
      children: ".toHaveBeenLastCalledWith(arg1, arg2, ...)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配调用函数的最后一个参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('applying to all flavors does mango last', () => {\n  const drink = jest.fn();\n  applyToAllFlavors(drink);\n  expect(drink).toHaveBeenLastCalledWith('mango');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavebeennthcalledwithnthcall-arg1-arg2-",
      children: ".toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个函数，第几次调用时，是否为指定的某个参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('drinkEach drinks each drink', () => {\n  const drink = jest.fn();\n  drinkEach(drink, ['lemon', 'octopus']);\n  expect(drink).toHaveBeenNthCalledWith(1, 'lemon');\n  expect(drink).toHaveBeenNthCalledWith(2, 'octopus');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavereturned",
      children: ".toHaveReturned()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个函数是否成功返回"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('drinks returns', () => {\n  const drink = jest.fn(() => true);\n  drink();\n  expect(drink).toHaveReturned();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavereturnedtimesnumber",
      children: ".toHaveReturnedTimes(number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个函数成功返回的次数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('drink returns twice', () => {\n  const drink = jest.fn(() => true);\n  drink();\n  drink();\n  expect(drink).toHaveReturnedTimes(2);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavereturnedwithvalue",
      children: ".toHaveReturnedWith(value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个函数是否返回了指定的值"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('drink returns La Croix', () => {\n  const beverage = {name: 'La Croix'};\n  const drink = jest.fn(beverage => beverage.name);\n  drink(beverage);\n  expect(drink).toHaveReturnedWith('La Croix');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavelastreturnedwithvalue",
      children: ".toHaveLastReturnedWith(value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个函数，最后一次执行返回的值，是否为指定的值"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('drink returns La Croix (Orange) last', () => {\n  const beverage1 = {name: 'La Croix (Lemon)'};\n  const beverage2 = {name: 'La Croix (Orange)'};\n  const drink = jest.fn(beverage => beverage.name);\n  drink(beverage1);\n  drink(beverage2);\n  expect(drink).toHaveLastReturnedWith('La Croix (Orange)');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohaventhreturnedwithnthcall-value",
      children: ".toHaveNthReturnedWith(nthCall, value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某函数，指定次数返回的值，是否为指定的值"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('drink returns expected nth calls', () => {\n  const beverage1 = {name: 'La Croix (Lemon)'};\n  const beverage2 = {name: 'La Croix (Orange)'};\n  const drink = jest.fn(beverage => beverage.name);\n  drink(beverage1);\n  drink(beverage2);\n  expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');\n  expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "六对象匹配器",
      children: "六、对象匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavelengthnumber",
      children: ".toHaveLength(number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个对象是否有length属性，具体为几。可用于检查数组和字符串大小"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "expect([1, 2, 3]).toHaveLength(3);\nexpect('abc').toHaveLength(3);\nexpect('').not.toHaveLength(5);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tohavepropertykeypath-value",
      children: ".toHaveProperty(keyPath, value?)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配某个对象里是否含有某个字段属性，值是否正确。可通过数组，字符串路径的方式，查看深层数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// 待测试样例数据\nconst houseForSale = {\n  bath: true,\n  bedrooms: 4,\n  kitchen: {\n    amenities: ['oven', 'stove', 'washer'],\n    area: 20,\n    wallColor: 'white',\n    'nice.oven': true,\n  },\n  'ceiling.height': 2,\n};\n\ntest('this house has my desired features', () => {\n  // 检查是否有‘bath’属性\n  expect(houseForSale).toHaveProperty('bath');\n  // 检查是否有‘bedrooms’属性，值是否为4\n  expect(houseForSale).toHaveProperty('bedrooms', 4);\n  // 检查是否没有‘pool’属性\n  expect(houseForSale).not.toHaveProperty('pool');\n\n  // 使用点表示法的深度引用---用点描述路径\n  // 检查‘kitchen.area’路径属性是否存在，值是否为20\n  expect(houseForSale).toHaveProperty('kitchen.area', 20);\n  expect(houseForSale).toHaveProperty('kitchen.amenities', [\n    'oven',\n    'stove',\n    'washer',\n  ]);\n  expect(houseForSale).not.toHaveProperty('kitchen.open');\n\n  // 使用包含keyPath的数组进行深度引用--用数组描述路径\n  // 检查‘kitchen.area’路径的属性是否存在，值是否为20\n  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);\n  expect(houseForSale).toHaveProperty(\n    ['kitchen', 'amenities'],\n    ['oven', 'stove', 'washer'],\n  );\n  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');\n  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);\n  expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);\n\n  // 引用键本身带有点的键\n  expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tobeinstanceofclass",
      children: ".toBeInstanceOf(Class)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配一个对象是否是一个类的实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class A {}\nexpect(new A()).toBeInstanceOf(A);\nexpect(() => {}).toBeInstanceOf(Function);\nexpect(new A()).toBeInstanceOf(Function); // throws\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tomatchregexp--string",
      children: ".toMatch(regexp | string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "检查字符串是否与正则表达式相匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "describe('an essay on the best flavor', () => {\n  test('mentions grapefruit', () => {\n    expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);\n    expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));\n  });\n});\n\ndescribe('grapefruits are healthy', () => {\n  test('grapefruits are a fruit', () => {\n    expect('grapefruits').toMatch('fruit');\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tomatchobjectobject",
      children: ".toMatchObject(object)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配一个对象，是否是某个对象的子集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const houseForSale = {\n  bath: true,\n  bedrooms: 4,\n  kitchen: {\n    amenities: ['oven', 'stove', 'washer'],\n    area: 20,\n    wallColor: 'white',\n  },\n};\nconst desiredHouse = {\n  bath: true,\n  kitchen: {\n    amenities: ['oven', 'stove', 'washer'],\n    wallColor: expect.stringMatching(/white|yellow/),\n  },\n};\n\ntest('the house has my desired features', () => {\n  expect(houseForSale).toMatchObject(desiredHouse);\n});\n\n\n\ndescribe('toMatchObject applied to arrays', () => {\n  test('the number of elements must match exactly', () => {\n    expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);\n  });\n\n  test('.toMatchObject is called for each elements, so extra object properties are okay', () => {\n    expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([\n      {foo: 'bar'},\n      {baz: 1},\n    ]);\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tomatchsnapshotpropertymatchers-hint",
      children: ".toMatchSnapshot(propertyMatchers?, hint?)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配快照与最新的一个值比较"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tomatchinlinesnapshotpropertymatchers-inlinesnapshot",
      children: ".toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配快照与最近的一个值比较"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "七报错匹配器",
      children: "七、报错匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tothrowerror",
      children: ".toThrow(error?)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配是否有报错信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('throws on octopus', () => {\n  expect(() => {\n    drinkFlavor('octopus');\n  }).toThrow();\n});\n// 您必须将代码包装在函数中，否则将无法捕获错误，断言将失败。\n\nfunction drinkFlavor(flavor) {\n  if (flavor == 'octopus') {\n    throw new DisgustingFlavorError('yuck, octopus flavor');\n  }\n  // Do some other stuff\n}\n\ntest('throws on octopus', () => {\n  function drinkOctopus() {\n    drinkFlavor('octopus');\n  }\n  // Test that the error message says \"yuck\" somewhere: these are equivalent\n  expect(drinkOctopus).toThrowError(/yuck/);\n  expect(drinkOctopus).toThrowError('yuck');\n  // Test the exact error message\n  expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);\n  expect(drinkOctopus).toThrowError(new Error('yuck, octopus flavor'));\n  // Test that we get a DisgustingFlavorError\n  expect(drinkOctopus).toThrowError(DisgustingFlavorError);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tothrowerrormatchingsnapshothint",
      children: ".toThrowErrorMatchingSnapshot(hint?)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试匹配函数在调用时抛出匹配最近快照的错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function drinkFlavor(flavor) {\n  if (flavor == 'octopus') {\n    throw new DisgustingFlavorError('yuck, octopus flavor');\n  }\n  // Do some other stuff\n}\n\ntest('throws on octopus', () => {\n  function drinkOctopus() {\n    drinkFlavor('octopus');\n  }\n  expect(drinkOctopus).toThrowErrorMatchingSnapshot();\n});\n\nexports[`drinking flavors throws on octopus 1`] = `\"yuck, octopus flavor\"`;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tothrowerrormatchinginlinesnapsïhotinlinesnapshot",
      children: ".toThrowErrorMatchingInlineSnapsÏhot(inlineSnapshot)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "测试函数在调用时抛出匹配最近快照的错误"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ },

/***/ 67028
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ }

}]);