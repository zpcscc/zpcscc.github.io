"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[6789],{

/***/ 7818
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AMapShowcaseDemo: () => (/* binding */ AMapShowcaseDemo),
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_demo_amap_showcase_mdx_195_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/demo/site-docs-demo-amap-showcase-mdx-195.json
const site_docs_demo_amap_showcase_mdx_195_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"amapShowcase","title":"高德多地图展示","description":"基于高德地图 JavaScript API 2.0构建的交互式地图展示，集中呈现高德官方底图、卫星影像、行政区划、3D 城市和实时交通能力。","source":"@site/docs-demo/amapShowcase.mdx","sourceDirName":".","slug":"/amapShowcase","permalink":"/demo/amapShowcase","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"高德多地图展示"},"sidebar":"demo","next":{"title":"画布笔刷工具","permalink":"/demo/canvasTools"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
// EXTERNAL MODULE: ./src/components/ClientDemo/index.tsx
var ClientDemo = __webpack_require__(60989);
;// ./docs-demo/amapShowcase.mdx


const frontMatter = {
	title: '高德多地图展示'
};
const contentTitle = '高德多地图展示';

const assets = {

};




const AMapShowcaseDemo = (0,ClientDemo/* createClientDemo */.l)(() => Promise.all(/* import() */[__webpack_require__.e(3663), __webpack_require__.e(3401)]).then(__webpack_require__.bind(__webpack_require__, 73401)));
const toc = [{
  "value": "在线演示",
  "id": "在线演示",
  "level": 2
}, {
  "value": "地图模式",
  "id": "地图模式",
  "level": 2
}, {
  "value": "操作说明",
  "id": "操作说明",
  "level": 2
}, {
  "value": "能力与权限说明",
  "id": "能力与权限说明",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
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
        id: "高德多地图展示",
        children: "高德多地图展示"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["基于", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lbs.amap.com/api/javascript-api-v2/summary/",
        children: "高德地图 JavaScript API 2.0"
      }), "构建的交互式地图展示，集中呈现高德官方底图、卫星影像、行政区划、3D 城市和实时交通能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在线演示",
      children: "在线演示"
    }), "\n", (0,jsx_runtime.jsx)(AMapShowcaseDemo, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "地图模式",
      children: "地图模式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "基础图层：全国标准地图、全国简洁路网、全国卫星影像、卫星影像与路网混合图"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "行政与交通专题：全国省市区划、广东省市县区划、全球国家与地区区划、北京实时交通"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "3D 与室内：上海 3D 城市楼块、深圳 3D 夜间地图、北京室内地图"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "官方主题：幻影黑、月光银、草色青、雅士灰、涂鸦、马卡龙、靛青蓝、酱籽"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作说明",
      children: "操作说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "鼠标拖拽或单指滑动：移动地图"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "滚轮或双指：放大、缩小"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在 3D 城市模式中使用高德方向控件或地图手势：旋转、调整俯仰"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "顶部工具栏：切换地图、复位视角和进入全屏"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力与权限说明",
      children: "能力与权限说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高德 JSAPI 2.0 的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "viewMode: '3D'"
      }), " 提供可俯仰、旋转的平面城市地图和建筑楼块，不提供类似 Cesium 的球形 3D 地球，因此本示例采用高德官方 3D 地图样式。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "“北京室内地图”依赖高德室内图层数据，地图缩放级别高于 17 且当前位置存在室内数据时，会自动显示楼层、通道和室内地点；实际覆盖范围以高德数据为准。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["“全球行政区划”模式已启用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "showOversea"
      }), "，但高德世界地图属于高级能力。只有当前 Web Key 已通过工单开通世界地图权限时，海外区域才会显示详细道路和地点；否则仍以全国地图能力为主。相关限制请参阅", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://lbs.amap.com/api/javascript-api-v2/guide/map/world-map",
        children: "高德世界地图说明"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["全球国家与地区名称使用高德官方的 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://a.amap.com/jsapi_demos/static/demo-center/js/soc-list.json",
        children: "SOC 国家代码、名称与范围数据"
      }), "，并通过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LabelsLayer"
      }), " 的碰撞避让随缩放级别显示；全球视角会优先保留面积较大的区域名称，放大后可查看更多名称。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本页面按照高德官方要求在线加载 JSAPI。由于站点部署在 GitHub Pages，Web Key 与安全密钥会在浏览器中使用，当前生产白名单为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "zpcscc.top"
      }), "，本地开发白名单为 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "127.0.0.1"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["运行 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm dev"
      }), " 或 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pnpm start"
      }), " 本地调试时，开发服务器会默认绑定到已授权的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "127.0.0.1"
      }), "。项目同时按照高德官方方案，通过同源的 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/_AMapService"
      }), " 开发代理访问地图样式与 Web 服务并在服务端追加安全密钥；该代理不会进入生产构建。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["高德 JSAPI 仍会在浏览器中校验当前页面域名，代理不能绕过 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INVALID_USER_DOMAIN"
      }), "。本地预览请使用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "http://127.0.0.1:3000/demo/amapShowcase"
      }), "；", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost"
      }), " 与 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "127.0.0.1"
      }), " 会被视为不同域名，未单独加入白名单时不要改用 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "localhost"
      }), "。"]
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