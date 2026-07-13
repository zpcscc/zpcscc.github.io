"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[8894],{

/***/ 17103
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_jest_expect_extend_md_14f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-jest-expect-extend-md-14f.json
const site_docs_tools_jest_expect_extend_md_14f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/jest/expect_extend","title":"Jest-expect.extend","description":"一、简介","source":"@site/docs/tools/jest/expect_extend.md","sourceDirName":"tools/jest","slug":"/tools/jest/expect_extend","permalink":"/docs/tools/jest/expect_extend","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Jest-expect.extend"},"sidebar":"tools","previous":{"title":"Jest","permalink":"/docs/category/jest"},"next":{"title":"基础介绍","permalink":"/docs/tools/jest/基础介绍"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/tools/jest/expect_extend.md


const frontMatter = {
	title: 'Jest-expect.extend'
};
const contentTitle = 'expect.extend(matchers)';

const assets = {

};



const toc = [{
  "value": "一、简介",
  "id": "一简介",
  "level": 2
}, {
  "value": "二、typescript类型提示",
  "id": "二typescript类型提示",
  "level": 2
}, {
  "value": "三、异步处理",
  "id": "三异步处理",
  "level": 2
}, {
  "value": "四、自定义匹配器的api",
  "id": "四自定义匹配器的api",
  "level": 2
}, {
  "value": "五、自定义匹配器里可获取到的一些参数",
  "id": "五自定义匹配器里可获取到的一些参数",
  "level": 2
}, {
  "value": "1、this.isNot",
  "id": "1thisisnot",
  "level": 3
}, {
  "value": "2、this.promise",
  "id": "2thispromise",
  "level": 3
}, {
  "value": "3、this.equals(a, b)",
  "id": "3thisequalsa-b",
  "level": 3
}, {
  "value": "4、this.expand",
  "id": "4thisexpand",
  "level": 3
}, {
  "value": "5、this.utils",
  "id": "5thisutils",
  "level": 3
}, {
  "value": "六、自定义快照匹配",
  "id": "六自定义快照匹配",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "expectextendmatchers",
        children: "expect.extend(matchers)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一简介",
      children: "一、简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义匹配器，自定义匹配规则。可将自定义匹配器扩展到jest中使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// 自定义一个匹配数字范围的匹配器'toBeWithinRange'\nexpect.extend({\n  toBeWithinRange(received, floor, ceiling) {\n    const pass = received >= floor && received <= ceiling;\n    if (pass) {\n      return {\n        message: () =>\n          `expected ${received} not to be within range ${floor} - ${ceiling}`,\n        pass: true,\n      };\n    } else {\n      return {\n        message: () =>\n          `expected ${received} to be within range ${floor} - ${ceiling}`,\n        pass: false,\n      };\n    }\n  },\n});\n\ntest('numeric ranges', () => {\n  expect(100).toBeWithinRange(90, 110);\n  expect(101).not.toBeWithinRange(0, 100);\n  expect({apples: 6, bananas: 3}).toEqual({\n    apples: expect.toBeWithinRange(1, 10),\n    bananas: expect.not.toBeWithinRange(11, 20),\n  });\n});\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二typescript类型提示",
      children: "二、typescript类型提示"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当你使用'@types/jest'时。可以通过如下方法，在当前测试模块中声明新的toBeWithinRange匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "declare global {\n  namespace jest {\n    interface Matchers<R> {\n      toBeWithinRange(a: number, b: number): R\n    }\n    interface Expect {\n      toBeWithinRange(a: number, b: number): void\n    }\n    interface InverseAsymmetricMatchers {\n      toBeWithinRange(a: number, b: number): void\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三异步处理",
      children: "三、异步处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你也可以通过expect.extend扩展一个异步匹配器"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "expect.extend({\n  async toBeDivisibleByExternalValue(received) {\n    const externalValue = await getExternalValueFromRemoteSource();\n    const pass = received % externalValue == 0;\n    if (pass) {\n      return {\n        message: () =>\n          `expected ${received} not to be divisible by ${externalValue}`,\n        pass: true,\n      };\n    } else {\n      return {\n        message: () =>\n          `expected ${received} to be divisible by ${externalValue}`,\n        pass: false,\n      };\n    }\n  },\n});\n\ntest('is divisible by external value', async () => {\n  await expect(100).toBeDivisibleByExternalValue();\n  await expect(101).not.toBeDivisibleByExternalValue();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四自定义匹配器的api",
      children: "四、自定义匹配器的api"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/* \n 自定义匹配器返回的应是一个对象或一个promise。对象有两个参数。\n pass是个布尔类型，指是否通过请求\n message是个无参数的函数，返回未通过测试的提示信息。\n 当pass为false时，expect(x).yourmatcher()失败时，消息应该返回错误消息。\n 当pass为true时，消息应该返回expect(x).not.yourmatcher()失败时的错误消息。\n*/\nexpect.extend({\n  yourMatcher(x, y, z) {\n    return {\n      pass: true,\n      message: () => '',\n    };\n  },\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "五自定义匹配器里可获取到的一些参数",
      children: "五、自定义匹配器里可获取到的一些参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1thisisnot",
      children: "1、this.isNot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个布尔值。用于判断当前测试，是否使用了.not修饰符"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2thispromise",
      children: "2、this.promise"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个字符串"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "‘resoves’---提示你，测试使用了.resoves修饰符"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "‘rejects’---提示你，测试使用了.rejects修饰符"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "‘' '’ ---提示你，测试未使用promise"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3thisequalsa-b",
      children: "3、this.equals(a, b)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个布尔值。这是一个深度相等函数，如果两个对象具有相同的值(递归地)，则返回true"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4thisexpand",
      children: "4、this.expand"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "返回一个布尔值。让你知道这个匹配器被一个扩展选项调用了。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当使用——expand标志调用Jest时，expand可以用来确定Jest是否期望显示完整的差异和错误"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5thisutils",
      children: "5、this.utils"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这是一个工具集，主要由", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/facebook/jest/tree/master/packages/jest-matcher-utils",
        children: "jest-macther-utils"
      }), "导出"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中常用的为：matcherHint，printExpected、printReceived。它们可以很好的格式化数据"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const {diff} = require('jest-diff');\nexpect.extend({\n  toBe(received, expected) {\n    const options = {\n      comment: 'Object.is equality',\n      isNot: this.isNot,\n      promise: this.promise,\n    };\n\n    const pass = Object.is(received, expected);\n\n    const message = pass\n      ? () =>\n          this.utils.matcherHint('toBe', undefined, undefined, options) +\n          '\\n\\n' +\n          `Expected: not ${this.utils.printExpected(expected)}\\n` +\n          `Received: ${this.utils.printReceived(received)}`\n      : () => {\n          const diffString = diff(expected, received, {\n            expand: this.expand,\n          });\n          return (\n            this.utils.matcherHint('toBe', undefined, undefined, options) +\n            '\\n\\n' +\n            (diffString && diffString.includes('- Expect')\n              ? `Difference:\\n\\n${diffString}`\n              : `Expected: ${this.utils.printExpected(expected)}\\n` +\n                `Received: ${this.utils.printReceived(received)}`)\n          );\n        };\n\n    return {actual: received, message, pass};\n  },\n});\n\n\n// 会输出类似下面的内容\nexpect(received).toBe(expected)\n   Expected value to be (using Object.is):\n      \"banana\"\n   Received:\n      \"apple\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "六自定义快照匹配",
      children: "六、自定义快照匹配"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "要在您的自定义匹配器中使用快照测试，您可以导入jest-snapshot并在您的匹配器中使用它。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下面是一个快照匹配器，它对字符串进行修剪，以存储给定的长度。toMatchTrimmedSnapshot (length)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const {toMatchSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  toMatchTrimmedSnapshot(received, length) {\n    return toMatchSnapshot.call(\n      this,\n      received.substring(0, length),\n      'toMatchTrimmedSnapshot',\n    );\n  },\n});\n\nit('stores only 10 characters', () => {\n  expect('extra long string oh my gerd').toMatchTrimmedSnapshot(10);\n});\n\n// 存储快照如下所示:\nexports[`stores only 10 characters: toMatchTrimmedSnapshot 1`] = `\"extra long\"`;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也可以为内联快照创建定制匹配器，快照将被正确地添加到定制匹配器中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "然而，当第一个参数是属性匹配器时，内联快照总是试图附加到第一个参数或第二个参数，因此不可能在自定义匹配器中接受自定义参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const {toMatchInlineSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  toMatchTrimmedInlineSnapshot(received, ...rest) {\n    return toMatchInlineSnapshot.call(this, received.substring(0, 10), ...rest);\n  },\n});\n\nit('stores only 10 characters', () => {\n  expect('extra long string oh my gerd').toMatchTrimmedInlineSnapshot();\n  /*\n  快照将以内联方式添加，如\n  expect('extra long string oh my gerd').toMatchTrimmedInlineSnapshot(\n    `\"extra long\"`\n  );\n  */\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果你的自定义内联快照匹配器是异步的，即使用async-await，你可能会遇到像“多个内联快照的同一个调用不支持”这样的错误。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Jest需要额外的上下文信息来查找使用自定义内联快照匹配器来正确更新快照的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const {toMatchInlineSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  async toMatchObservationInlineSnapshot(fn, ...rest) {\n    // The error (and its stacktrace) must be created before any `await`\n    this.error = new Error();\n\n    // The implementation of `observe` doesn't matter.\n    // It only matters that the custom snapshot matcher is async.\n    const observation = await observe(async () => {\n      await fn();\n    });\n\n    return toMatchInlineSnapshot.call(this, recording, ...rest);\n  },\n});\n\nit('observes something', async () => {\n  await expect(async () => {\n    return 'async action';\n  }).toMatchTrimmedInlineSnapshot();\n  /*\n  The snapshot will be added inline like\n  await expect(async () => {\n    return 'async action';\n  }).toMatchTrimmedInlineSnapshot(`\"async action\"`);\n  */\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通常，jest试图匹配测试中预期的每个快照。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有时，如果先前的快照失败，继续测试可能没有意义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，当您在各种转换之后对状态机做快照时，您可以在一个转换产生错误的状态时中止测试。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在这种情况下，可以实现在第一次不匹配时抛出的自定义快照匹配器，而不是收集每次不匹配。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const {toMatchInlineSnapshot} = require('jest-snapshot');\n\nexpect.extend({\n  toMatchStateInlineSnapshot(...args) {\n    this.dontThrow = () => {};\n\n    return toMatchInlineSnapshot.call(this, ...args);\n  },\n});\n\nlet state = 'initial';\n\nfunction transition() {\n  // Typo in the implementation should cause the test to fail\n  if (state === 'INITIAL') {\n    state = 'pending';\n  } else if (state === 'pending') {\n    state = 'done';\n  }\n}\n\nit('transitions as expected', () => {\n  expect(state).toMatchStateInlineSnapshot(`\"initial\"`);\n\n  transition();\n  // Already produces a mismatch. No point in continuing the test.\n  expect(state).toMatchStateInlineSnapshot(`\"loading\"`);\n\n  transition();\n  expect(state).toMatchStateInlineSnapshot(`\"done\"`);\n});\n"
      })
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