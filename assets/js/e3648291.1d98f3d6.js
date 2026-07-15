"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[9553],{

/***/ 58936
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ToColorDemo: () => (/* binding */ ToColorDemo),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_utils_to_color_index_mdx_e36_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/utils/site-docs-utils-to-color-index-mdx-e36.json
const site_docs_utils_to_color_index_mdx_e36_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"toColor/index","title":"toColor","description":"描述","source":"@site/docs-utils/toColor/index.mdx","sourceDirName":"toColor","slug":"/toColor/","permalink":"/utils/toColor/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"toColor"},"sidebar":"utils","previous":{"title":"toAbsolutePath","permalink":"/utils/toAbsolutePath/"},"next":{"title":"toData","permalink":"/utils/toData/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
// EXTERNAL MODULE: ./src/components/ClientDemo/index.tsx
var ClientDemo = __webpack_require__(72965);
;// ./docs-utils/toColor/index.mdx


const frontMatter = {
	title: 'toColor'
};
const contentTitle = undefined;

const assets = {

};




const ToColorDemo = (0,ClientDemo/* createClientDemo */.l)(() => Promise.all(/* import() */[__webpack_require__.e(1954), __webpack_require__.e(7592), __webpack_require__.e(5178), __webpack_require__.e(4454), __webpack_require__.e(3791), __webpack_require__.e(7967), __webpack_require__.e(9003), __webpack_require__.e(1986), __webpack_require__.e(570), __webpack_require__.e(5375), __webpack_require__.e(2381), __webpack_require__.e(3129), __webpack_require__.e(2122), __webpack_require__.e(6126)]).then(__webpack_require__.bind(__webpack_require__, 62262)));
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
    children: [(0,jsx_runtime.jsx)(ToColorDemo, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "描述",
      children: "描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将“rgb”、“hsl”、“hex”的颜色格式互相转换，转换为指定的格式"
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“rgb”、“hsl”、“hex”格式的字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "string"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "“rgb”、“hsl”、“hex”"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回",
      children: "返回"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "string"
      }), " - 返回转换为对应格式的颜色字符串"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "示例-ts类型",
      children: ["示例 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(ts类型)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "toColor(data:string, type: 'rgb' | 'hsl' | 'hex');\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "示例-demo",
      children: ["示例 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(demo)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { toColor } from '@site/src/utils';\n\nconsole.log(toColor('#6666cc', 'rgb')); // rgb(102,102,204);\nconsole.log(toColor('rgb(102,102,204)', 'hex')); // #6666cc;\nconsole.log(toColor('#6666cc', 'hsl')); // hsl(240,50%,60%);\n"
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

/***/ 44140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BrowserOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55585);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Similar comp to the one described here:
// https://www.joshwcomeau.com/react/the-perils-of-rehydration/#abstractions
function BrowserOnly({children,fallback}){const isBrowser=(0,_docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();if(isBrowser){if(typeof children!=='function'&&"production"==='development')// removed by dead control flow
{}return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:children?.()});}return fallback??null;}

/***/ },

/***/ 72965
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ClientDemo */
/* unused harmony import specifier */ var Suspense;
/* unused harmony import specifier */ var BrowserOnly;
/* unused harmony import specifier */ var _jsx;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44140);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
/**
 * 客户端-only 的 Demo 包装组件
 * 包裹 MDX 中的 demo，避免 SSR 时加载 browser-only 模块
 */const ClientDemo=({children})=>{return/*#__PURE__*/_jsx(BrowserOnly,{fallback:/*#__PURE__*/_jsx("div",{style:{padding:16,color:'#999'},children:"\u52A0\u8F7D\u4E2D..."}),children:()=>/*#__PURE__*/_jsx(Suspense,{fallback:/*#__PURE__*/_jsx("div",{style:{padding:16,color:'#999'},children:"\u52A0\u8F7D\u4E2D..."}),children:children})});};/**
 * 使用动态 import 避免 SSR 时加载 browser-only 模块
 */const createClientDemo=importFn=>{const LazyComponent=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(importFn);const ClientDemoWrapper=()=>{return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{fallback:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:16,color:'#999'},children:"\u52A0\u8F7D\u4E2D..."}),children:()=>/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense,{fallback:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:16,color:'#999'},children:"\u52A0\u8F7D\u4E2D..."}),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LazyComponent,{})})});};ClientDemoWrapper.displayName='ClientDemoWrapper';return ClientDemoWrapper;};
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "l", 0, /* binding */ createClientDemo
/* harmony export */ ]);


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