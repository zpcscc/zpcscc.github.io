"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[2412],{

/***/ 55348
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_jest_md_954_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-jest-基础介绍-md-954.json
const site_docs_tools_jest_md_954_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/jest/基础介绍","title":"基础介绍","description":"Jest 基础介绍","source":"@site/docs/tools/jest/基础介绍.md","sourceDirName":"tools/jest","slug":"/tools/jest/基础介绍","permalink":"/docs/tools/jest/基础介绍","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"基础介绍"},"sidebar":"tools","previous":{"title":"Jest-expect.extend","permalink":"/docs/tools/jest/expect_extend"},"next":{"title":"常用except","permalink":"/docs/tools/jest/常用expect"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/jest/基础介绍.md


const frontMatter = {
	title: '基础介绍'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Jest 基础介绍",
  "id": "jest-基础介绍",
  "level": 2
}, {
  "value": "零配置",
  "id": "零配置",
  "level": 2
}, {
  "value": "快照",
  "id": "快照",
  "level": 2
}, {
  "value": "隔离",
  "id": "隔离",
  "level": 2
}, {
  "value": "优秀的 api",
  "id": "优秀的-api",
  "level": 2
}, {
  "value": "FAST AND SAFE",
  "id": "fast-and-safe",
  "level": 2
}, {
  "value": "CODE COVERAGE",
  "id": "code-coverage",
  "level": 2
}, {
  "value": "EASY MOCKING",
  "id": "easy-mocking",
  "level": 2
}, {
  "value": "GREAT EXCEPTIONS",
  "id": "great-exceptions",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "jest-基础介绍",
      children: "Jest 基础介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Jest 是一个令人愉快的 JavaScript 测试框架，专注于 简洁明快。\nJest 是一个 JavaScript 测试框架，旨在确保任何 JavaScript 代码的正确性。\n它为你提供了 易于理解、熟悉且功能丰富的 API 来编写测试用例，并快速地反馈结果。\nJest 拥有良好的文档，只需很少的配置，并能 根据你的需求进行扩展。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "零配置",
      children: "零配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Jest 的目标是在大部分 JavaScript 项目上实现开箱即用， 无需配置。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "快照",
      children: "快照"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "能够轻松追踪大型对象的测试。 快照可以与测试代码放在一起，也可以集成进代码 行内。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "隔离",
      children: "隔离"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "测试程序拥有自己独立的进程 以最大限度地提高性能。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "优秀的-api",
      children: "优秀的 api"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "从 “it” 到 “expect” - Jest 将整个工具包放在同一个 地方。好书写、好维护、非常方便。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fast-and-safe",
      children: "FAST AND SAFE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "通过确保你的测试具有独一无二的全局状态，Jest 可以 可靠地并行运行测试。\n为了让测试进程加速 会先运行先前失败的测试， 并根据测试文件的耗时重新组织测试顺序。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-coverage",
      children: "CODE COVERAGE"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "通过添加 “--coverage” 标志生成代码覆盖率报告， 无需额外设置。\nJest 可以从 整个项目收集代码覆盖面信息，包括未经测试的文件。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "easy-mocking",
      children: "EASY MOCKING"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Jest 在测试中针对 import 使用自定义解析器， 这让模拟测试范围之外的任何对象都变得容易。 \n你可以将模拟的 import 和丰富的 Mock 函数 API 一起使用，用于监视函数调用并获得可读的测试语法。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "great-exceptions",
      children: "GREAT EXCEPTIONS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "当测试失败时，Jest 提供了丰富的上下文帮助你找出原因。\n"
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