"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[4089],{

/***/ 50732
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HtmlToImageDemo: () => (/* binding */ HtmlToImageDemo),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_thirdparty_html_to_image_index_mdx_7cb_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/thirdparty/site-docs-thirdparty-html-to-image-index-mdx-7cb.json
const site_docs_thirdparty_html_to_image_index_mdx_7cb_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"htmlToImage/index","title":"截屏库","description":"基于 html-to-image 封装的截屏工具，提供更便捷的 API。","source":"@site/docs-thirdparty/htmlToImage/index.mdx","sourceDirName":"htmlToImage","slug":"/htmlToImage/","permalink":"/thirdparty/htmlToImage/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"截屏库"},"sidebar":"thirdparty","previous":{"title":"cryptoBase64","permalink":"/thirdparty/crypto/crypto-base64"},"next":{"title":"自由截屏库","permalink":"/thirdparty/screenshot/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
// EXTERNAL MODULE: ./src/components/ClientDemo/index.tsx
var ClientDemo = __webpack_require__(72965);
;// ./docs-thirdparty/htmlToImage/index.mdx


const frontMatter = {
	title: '截屏库'
};
const contentTitle = '截屏库';

const assets = {

};




const HtmlToImageDemo = (0,ClientDemo/* createClientDemo */.l)(() => Promise.all(/* import() */[__webpack_require__.e(1954), __webpack_require__.e(7592), __webpack_require__.e(5178), __webpack_require__.e(4454), __webpack_require__.e(4532), __webpack_require__.e(273)]).then(__webpack_require__.bind(__webpack_require__, 21935)));
const toc = [{
  "value": "在线演示",
  "id": "在线演示",
  "level": 2
}, {
  "value": "安装",
  "id": "安装",
  "level": 2
}, {
  "value": "使用",
  "id": "使用",
  "level": 2
}, {
  "value": "API",
  "id": "api",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "截屏库",
        children: "截屏库"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://github.com/bubkoo/html-to-image",
        children: "html-to-image"
      }), " 封装的截屏工具，提供更便捷的 API。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在线演示",
      children: "在线演示"
    }), "\n", (0,jsx_runtime.jsx)(HtmlToImageDemo, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "安装",
      children: "安装"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "npm install @zpcscc/thirdparty\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用",
      children: "使用"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { toPng, toJpeg, toBlob, toSvg, toPixelData, toCanvas } from '@site/src/thirdparty';\n\n// 截取指定DOM节点为PNG\nconst dataUrl = await toPng(node, options);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api",
      children: "API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "方法"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toPng"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截取为 PNG 格式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toJpeg"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截取为 JPEG 格式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toBlob"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截取为 Blob 对象"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toSvg"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截取为 SVG 格式"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toPixelData"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截取为像素数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "toCanvas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "截取为 Canvas 对象"
          })]
        })]
      })]
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

/***/ 87678
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BrowserOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14207);
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
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87678);
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