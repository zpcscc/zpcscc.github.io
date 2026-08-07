"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[9347],{

/***/ 78408
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ScreenshotDemo: () => (/* binding */ ScreenshotDemo),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_thirdparty_screenshot_index_mdx_4a1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/thirdparty/site-docs-thirdparty-screenshot-index-mdx-4a1.json
const site_docs_thirdparty_screenshot_index_mdx_4a1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"screenshot/index","title":"自由截屏库","description":"基于 html-to-image 封装的截屏工具，提供更便捷的 API。","source":"@site/docs-thirdparty/screenshot/index.mdx","sourceDirName":"screenshot","slug":"/screenshot/","permalink":"/thirdparty/screenshot/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"自由截屏库"},"sidebar":"thirdparty","previous":{"title":"截屏库","permalink":"/thirdparty/htmlToImage/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
// EXTERNAL MODULE: ./src/components/ClientDemo/index.tsx
var ClientDemo = __webpack_require__(60989);
;// ./docs-thirdparty/screenshot/index.mdx


const frontMatter = {
	title: '自由截屏库'
};
const contentTitle = '截屏库';

const assets = {

};




const ScreenshotDemo = (0,ClientDemo/* createClientDemo */.l)(() => Promise.all(/* import() */[__webpack_require__.e(1869), __webpack_require__.e(2626), __webpack_require__.e(1451), __webpack_require__.e(7571), __webpack_require__.e(9806), __webpack_require__.e(9147), __webpack_require__.e(1018), __webpack_require__.e(2298), __webpack_require__.e(259)]).then(__webpack_require__.bind(__webpack_require__, 259)));
const toc = [{
  "value": "在线演示",
  "id": "在线演示",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
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
    }), "\n", (0,jsx_runtime.jsx)(ScreenshotDemo, {})]
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

/***/ 77915
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BrowserOnly)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);
/* harmony import */ var _docusaurus_useIsBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39752);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91987);
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

/***/ 60989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export ClientDemo */
/* unused harmony import specifier */ var Suspense;
/* unused harmony import specifier */ var BrowserOnly;
/* unused harmony import specifier */ var _jsx;
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71763);
/* harmony import */ var _docusaurus_BrowserOnly__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77915);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91987);
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