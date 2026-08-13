"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[9661],{

/***/ 97869
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GlobalEarthDemo: () => (/* binding */ GlobalEarthDemo),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_demo_global_earth_mdx_bf2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/demo/site-docs-demo-global-earth-mdx-bf2.json
const site_docs_demo_global_earth_mdx_bf2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"globalEarth","title":"全球 3D 卫星地球","description":"基于 CesiumJS 构建的 WGS84 球形 3D 地球。默认影像使用 EOX 提供的 Sentinel-2 Cloudless 2025，另可切换免费的 NASA GIBS 公共影像，包括 Blue Marble、MODIS Terra 及三个 VIIRS 每日真彩图层，均无需 API Key。","source":"@site/docs-demo/globalEarth.mdx","sourceDirName":".","slug":"/globalEarth","permalink":"/demo/globalEarth","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"全球 3D 卫星地球"},"sidebar":"demo","previous":{"title":"中国象棋","permalink":"/demo/chineseChess"},"next":{"title":"五子棋","permalink":"/demo/goBang"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
// EXTERNAL MODULE: ./src/components/ClientDemo/index.tsx
var ClientDemo = __webpack_require__(60989);
;// ./docs-demo/globalEarth.mdx


const frontMatter = {
	title: '全球 3D 卫星地球'
};
const contentTitle = '全球 3D 卫星地球';

const assets = {

};




const GlobalEarthDemo = (0,ClientDemo/* createClientDemo */.l)(() => Promise.all(/* import() */[__webpack_require__.e(1869), __webpack_require__.e(3663), __webpack_require__.e(1494), __webpack_require__.e(113)]).then(__webpack_require__.bind(__webpack_require__, 50113)));
const toc = [{
  "value": "在线演示",
  "id": "在线演示",
  "level": 2
}, {
  "value": "操作说明",
  "id": "操作说明",
  "level": 2
}, {
  "value": "数据说明",
  "id": "数据说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "全球-3d-卫星地球",
        children: "全球 3D 卫星地球"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://cesium.com/platform/cesiumjs/",
        children: "CesiumJS"
      }), " 构建的 WGS84 球形 3D 地球。默认影像使用 EOX 提供的 Sentinel-2 Cloudless 2025，另可切换免费的 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://www.earthdata.nasa.gov/data/tools/gibs",
        children: "NASA GIBS"
      }), " 公共影像，包括 Blue Marble、MODIS Terra 及三个 VIIRS 每日真彩图层，均无需 API Key。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在线演示",
      children: "在线演示"
    }), "\n", (0,jsx_runtime.jsx)(GlobalEarthDemo, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作说明",
      children: "操作说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "左键拖拽：旋转地球"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滚轮或双指：放大、缩小"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "右键拖拽：调整俯仰视角"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "工具栏：切换 Sentinel-2 Cloudless、Blue Marble、VIIRS 或 MODIS Terra 影像，复位视角或进入全屏"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "数据说明",
      children: "数据说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["默认的 Sentinel-2 Cloudless 2025 影像由 EOX 基于 Copernicus Sentinel 数据制作，按照 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
        children: "CC BY-NC-SA 4.0"
      }), " 许可用于非商业场景。Blue Marble 由 NASA 提供、EOX 托管，适合稳定查看全球卫星底图。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "VIIRS NOAA-20、NOAA-21 和 Suomi NPP 由 NASA GIBS 按日期提供全球每日真彩影像。VIIRS 的扫描范围比 MODIS 更宽，全球预览通常更连续；但每日观测仍会受到云层、轨道覆盖、极区投影和数据发布时间影响。MODIS Terra 保留用于查看其每日轨道观测，全球视角下可能出现明显的扫描条带。所有每日影像默认选取延迟两天的稳定日期，并自动选择可用的 GIBS 官方节点；遇到持续网络错误时可以手动重新加载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前版本使用椭球地表，不包含商业街景和精细三维建筑。"
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