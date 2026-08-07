"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[1709],{

/***/ 99069
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_jest_expect_md_f80_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-jest-常用expect-md-f80.json
const site_docs_tools_jest_expect_md_f80_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/jest/常用expect","title":"常用except","description":"expect(value)","source":"@site/docs/tools/jest/常用expect.md","sourceDirName":"tools/jest","slug":"/tools/jest/常用expect","permalink":"/docs/tools/jest/常用expect","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"常用except"},"sidebar":"tools","previous":{"title":"基础介绍","permalink":"/docs/tools/jest/基础介绍"},"next":{"title":"常用匹配器","permalink":"/docs/tools/jest/常用匹配器"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/jest/常用expect.md


const frontMatter = {
	title: '常用except'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "expect(value)",
  "id": "expectvalue",
  "level": 2
}, {
  "value": "expect.anything()",
  "id": "expectanything",
  "level": 2
}, {
  "value": "expect.any(constructor)",
  "id": "expectanyconstructor",
  "level": 2
}, {
  "value": "expect.arrayContaining(array)",
  "id": "expectarraycontainingarray",
  "level": 2
}, {
  "value": "expect.objectContaining(object)",
  "id": "expectobjectcontainingobject",
  "level": 2
}, {
  "value": "expect.stringContaining(string)",
  "id": "expectstringcontainingstring",
  "level": 2
}, {
  "value": "expect.stringMatching(string | regexp)",
  "id": "expectstringmatchingstring--regexp",
  "level": 2
}, {
  "value": "expect.assertions(number)",
  "id": "expectassertionsnumber",
  "level": 2
}, {
  "value": "expect.hasAssertions()",
  "id": "expecthasassertions",
  "level": 2
}, {
  "value": "expect.addSnapshotSerializer(serializer)",
  "id": "expectaddsnapshotserializerserializer",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "expectvalue",
      children: "expect(value)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "期望值。通常value为需要匹配测试的内容"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('the best flavor is grapefruit', () => {\n  expect(bestLaCroixFlavor()).toBe('grapefruit');\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectanything",
      children: "expect.anything()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配除null或undefined以外的任何值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "你可以在toEqual或tocalledwith内部使用它来代替文字值。例如，如果您想检查使用非空参数调用的模拟函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('map calls its argument with a non-null argument', () => {\n  const mock = jest.fn();\n  [1].map(x => mock(x));\n  expect(mock).toBeCalledWith(expect.anything());\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectanyconstructor",
      children: "expect.any(constructor)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配使用给定构造函数创建的任何东西。你可以在toEqual或tocalledwith内部使用它来代替文字值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，如果您想检查一个模拟函数是否被一个数字调用"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function randocall(fn) {\n  return fn(Math.floor(Math.random() * 6 + 1));\n}\n\ntest('randocall calls its callback with a number', () => {\n  const mock = jest.fn();\n  randocall(mock);\n  expect(mock).toBeCalledWith(expect.any(Number));\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectarraycontainingarray",
      children: "expect.arrayContaining(array)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配接收到的包含期望数组中所有元素的数组。也就是说，期望的数组是接收数组的子集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，它匹配接收到的包含不在预期数组中的元素的数组。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "describe('arrayContaining', () => {\n  const expected = ['Alice', 'Bob'];\n  it('matches even if received contains additional elements', () => {\n    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));\n  });\n  it('does not match if received does not contain expected elements', () => {\n    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));\n  });\n});\n\ndescribe('Beware of a misunderstanding! A sequence of dice rolls', () => {\n  const expected = [1, 2, 3, 4, 5, 6];\n  it('matches even with an unexpected number 7', () => {\n    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n  it('does not match without an expected number 2', () => {\n    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n});\n\n\n// 相反的匹配器\ndescribe('not.arrayContaining', () => {\n  const expected = ['Samantha'];\n\n  it('matches if the actual array does not contain the expected elements', () => {\n    expect(['Alice', 'Bob', 'Eve']).toEqual(\n      expect.not.arrayContaining(expected),\n    );\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectobjectcontainingobject",
      children: "expect.objectContaining(object)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "匹配任何接收到的递归匹配预期属性的对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "也就是说，期望的对象是接收对象的子集。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因此，它匹配接收到的包含属于预期对象的属性的对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('onPress gets called with the right thing', () => {\n  const onPress = jest.fn();\n  simulatePresses(onPress);\n  expect(onPress).toBeCalledWith(\n    expect.objectContaining({\n      x: expect.any(Number),\n      y: expect.any(Number),\n    }),\n  );\n});\n\n\n// 相反的匹配器\ndescribe('not.objectContaining', () => {\n  const expected = {foo: 'bar'};\n\n  it('matches if the actual object does not contain expected key: value pairs', () => {\n    expect({bar: 'baz'}).toEqual(expect.not.objectContaining(expected));\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectstringcontainingstring",
      children: "expect.stringContaining(string)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果它是一个字符串，或者它是一个包含确切的期望字符串的字符串，则匹配接收的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "\n// 相反的匹配器\ndescribe('not.stringContaining', () => {\n  const expected = 'Hello world!';\n\n  it('matches if the received value does not contain the expected substring', () => {\n    expect('How are you?').toEqual(expect.not.stringContaining(expected));\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectstringmatchingstring--regexp",
      children: "expect.stringMatching(string | regexp)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果它是字符串，或者它是一个匹配预期字符串或正则表达式的字符串，则匹配接收的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "describe('stringMatching in arrayContaining', () => {\n  const expected = [\n    expect.stringMatching(/^Alic/),\n    expect.stringMatching(/^[BR]ob/),\n  ];\n  it('matches even if received contains additional elements', () => {\n    expect(['Alicia', 'Roberto', 'Evelina']).toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n  it('does not match if received does not contain expected elements', () => {\n    expect(['Roberto', 'Evelina']).not.toEqual(\n      expect.arrayContaining(expected),\n    );\n  });\n});\n\n// 相反的匹配器\ndescribe('not.stringMatching', () => {\n  const expected = /Hello world!/;\n\n  it('matches if the received value does not match the expected regex', () => {\n    expect('How are you?').toEqual(expect.not.stringMatching(expected));\n  });\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectassertionsnumber",
      children: "expect.assertions(number)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验证在测试期间调用了一定数量的断言。这在测试异步代码时非常有用，以确保回调中的断言确实被调用了"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('doAsync calls both callbacks', () => {\n  expect.assertions(2);\n  function callback1(data) {\n    expect(data).toBeTruthy();\n  }\n  function callback2(data) {\n    expect(data).toBeTruthy();\n  }\n\n  doAsync(callback1, callback2);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expecthasassertions",
      children: "expect.hasAssertions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "验证在测试期间至少有一个断言被调用。这在测试异步代码时非常有用，以确保回调中的断言确实被调用了"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "例如，我们有几个函数都是关于状态的。prepareState调用一个带有状态对象的回调函数，validateState在该状态对象上运行，waitOnState返回一个承诺，等待所有prepareState回调完成。我们可以用"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "test('prepareState prepares a valid state', () => {\n  expect.hasAssertions();\n  prepareState(state => {\n    expect(validateState(state)).toBeTruthy();\n  });\n  return waitOnState();\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "expectaddsnapshotserializerserializer",
      children: "expect.addSnapshotSerializer(serializer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您可以调用expect.addSnapshotSerializer添加一个模块来格式化特定于应用程序的数据结构。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于单个测试文件，添加的模块在snapshotserializer配置的所有模块之前，而snapshotserializer配置在内置JavaScript类型和React元素的默认快照序列化之前。添加的最后一个模块是测试的第一个模块。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果您在单个测试文件中添加快照序列化器，而不是将其添加到snapshotserializer配置中:您将使依赖关系显式而不是隐式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "您避免了可能导致从create-react-app弹出的配置限制。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import serializer from 'my-serializer-module';\nexpect.addSnapshotSerializer(serializer);\n\n// affects expect(value).toMatchSnapshot() assertions in the test file\n"
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

/***/ 67008
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);
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