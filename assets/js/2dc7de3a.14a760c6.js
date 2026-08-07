"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[8914],{

/***/ 74083
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_utils_to_string_to_string_mdx_2dc_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/utils/site-docs-utils-to-string-to-string-mdx-2dc.json
const site_docs_utils_to_string_to_string_mdx_2dc_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"toString/to-string","title":"toString","description":"描述","source":"@site/docs-utils/toString/to-string.mdx","sourceDirName":"toString","slug":"/toString/to-string","permalink":"/utils/toString/to-string","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"toString"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs-utils/toString/to-string.mdx


const frontMatter = {
	title: 'toString'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "描述",
  "id": "描述",
  "level": 2
}, {
  "value": "参数",
  "id": "参数",
  "level": 2
}, {
  "value": "返回",
  "id": "返回",
  "level": 2
}, {
  "value": "示例 <em>(ts类型)</em>",
  "id": "示例-ts类型",
  "level": 2
}, {
  "value": "示例 <em>(demo)</em>",
  "id": "示例-demo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "描述",
      children: "描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将各种格式的数据转为string"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数",
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "any"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "需要转换的数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "stringifyArgs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "object"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "其他参数，用于传入JSON.stringify"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回",
      children: "返回"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), " - 转换后的字符串数据"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "示例-ts类型",
      children: ["示例 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(ts类型)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "toString(data:any, stringifyArgs?:any);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "示例-demo",
      children: ["示例 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(demo)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { toString } from '@site/src/utils';\n\nconsole.log(toString(true)); // 'true'\nconsole.log(toString(null)); // ''\nconsole.log(toString()); // ''\nconsole.log(toString(undefined)); // ''\nconsole.log(toString(0)); // '0'\nconsole.log(toString(-0)); // '-0'\nconsole.log(toString(123)); // '123'\nconsole.log(toString(() => {})); // '()=>{}'\nconsole.log(toString([])); // '[]'\nconsole.log(toString({})); // '{}'\nconsole.log(toString(Symbol(1))); // 'Symbol(1)'\n\n// stringifyArgs参数, 相当于，JSON.stringify([1,2,3], null, 2));\nconsole.log(toString([1, 2, 3], null, 2));\n// `[\n//   1,\n//   2,\n//   3\n// ]`\n\n// 部分数据因为赋值给函数时，已被浏览器自动调整，故无法完整原样转为字符串。\nconsole.log(toString(Symbol.iterator)); // 'Symbol(Symbol.iterator)'\nconsole.log(toString(Number.POSITIVE_INFINITY)); // 'Infinity'\nconsole.log(toString(Number.NEGATIVE_INFINITY)); // '-Infinity'\nconsole.log(toString(Number.MIN_VALUE)); // '5e-324'\n"
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