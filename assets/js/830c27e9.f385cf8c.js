"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[6800],{

/***/ 86230
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_macos_md_830_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-macos-解除时间机器备份速度限制-md-830.json
const site_docs_tools_macos_md_830_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/macos/解除时间机器备份速度限制","title":"解除时间机器备份速度限制","description":"解除时间机器备份速度限制","source":"@site/docs/tools/macos/解除时间机器备份速度限制.md","sourceDirName":"tools/macos","slug":"/tools/macos/解除时间机器备份速度限制","permalink":"/docs/tools/macos/解除时间机器备份速度限制","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"解除时间机器备份速度限制"},"sidebar":"tools","previous":{"title":"忽略系统更新","permalink":"/docs/tools/macos/忽略系统更新"},"next":{"title":"Nginx","permalink":"/docs/category/nginx"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/macos/解除时间机器备份速度限制.md


const frontMatter = {
	title: '解除时间机器备份速度限制'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "解除时间机器备份速度限制",
  "id": "解除时间机器备份速度限制",
  "level": 2
}, {
  "value": "打开mac终端，根据需求输入如下命令",
  "id": "打开mac终端根据需求输入如下命令",
  "level": 4
}, {
  "value": "1、解除速度限制",
  "id": "1解除速度限制",
  "level": 3
}, {
  "value": "2、恢复速度限制",
  "id": "2恢复速度限制",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "解除时间机器备份速度限制",
      children: "解除时间机器备份速度限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "打开mac终端根据需求输入如下命令",
      children: "打开mac终端，根据需求输入如下命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1解除速度限制",
      children: "1、解除速度限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "sudo sysctl debug.lowpri_throttle_enabled=0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2恢复速度限制",
      children: "2、恢复速度限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-shell",
        children: "sudo sysctl debug.lowpri_throttle_enabled=1\n"
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