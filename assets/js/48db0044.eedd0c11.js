"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[5293],{

/***/ 40082
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_git_reset_md_48d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-git-找到reset后丢失的代码-md-48d.json
const site_docs_tools_git_reset_md_48d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/git/找到reset后丢失的代码","title":"找到reset后丢失的代码","description":"Git 找到reset后丢失的代码","source":"@site/docs/tools/git/找到reset后丢失的代码.md","sourceDirName":"tools/git","slug":"/tools/git/找到reset后丢失的代码","permalink":"/docs/tools/git/找到reset后丢失的代码","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"找到reset后丢失的代码"},"sidebar":"tools","previous":{"title":"强制拉取最新代码","permalink":"/docs/tools/git/强制拉取最新代码"},"next":{"title":"撤销上次commit","permalink":"/docs/tools/git/撤销上次commit"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/tools/git/找到reset后丢失的代码.md


const frontMatter = {
	title: '找到reset后丢失的代码'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Git 找到reset后丢失的代码",
  "id": "git-找到reset后丢失的代码",
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
      id: "git-找到reset后丢失的代码",
      children: "Git 找到reset后丢失的代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "git reflog // 通过此命令，查找到本地之前的commit记录\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// 找到对应的记录后。切换到对应的commit恢复代码\ngit reset  {commit Id}\n"
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