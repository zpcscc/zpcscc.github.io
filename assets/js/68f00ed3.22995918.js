"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[8301],{

/***/ 84584
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_git_md_68f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-git-基础介绍-md-68f.json
const site_docs_tools_git_md_68f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/git/基础介绍","title":"基础介绍","description":"Git 官网介绍","source":"@site/docs/tools/git/基础介绍.md","sourceDirName":"tools/git","slug":"/tools/git/基础介绍","permalink":"/docs/tools/git/基础介绍","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"基础介绍"},"sidebar":"tools","previous":{"title":"单分支rebase提交","permalink":"/docs/tools/git/单分支rebase提交"},"next":{"title":"将某个commit合并到此分支","permalink":"/docs/tools/git/将某个commit合并到此分支"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/git/基础介绍.md


const frontMatter = {
	title: '基础介绍'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Git 官网介绍",
  "id": "git-官网介绍",
  "level": 2
}, {
  "value": "Git 优点",
  "id": "git-优点",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "git-官网介绍",
      children: "Git 官网介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Git 是一个", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://git-scm.com/about/free-and-open-source",
        children: "免费的开源"
      }), " 分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有内容。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "git-优点",
      children: "Git 优点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Git ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://git-scm.com/doc",
        children: "易于学习"
      }), "， ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://git-scm.com/about/small-and-fast",
        children: "占地面积小，具有闪电般的快速性能"
      }), "。它具有 Subversion，CVS，Perforce 和 ClearCase 之类的 SCM 工具，具有", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://git-scm.com/about/branching-and-merging",
        children: "廉价的本地分支"
      }), "，方便的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://git-scm.com/about/staging-area",
        children: "暂存区域"
      }), "和 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://git-scm.com/about/distributed",
        children: "多个工作流等功能"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1、分支与合并"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2、小而快速"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3、分散式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4、资料保证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "5、免费和开源"
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