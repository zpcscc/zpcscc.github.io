"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[889],{

/***/ 8542
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_package_md_f16_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-package-关闭校验-md-f16.json
const site_docs_tools_package_md_f16_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/package/关闭校验","title":"关闭校验","description":"1、关闭整个文件校验","source":"@site/docs/tools/package/关闭校验.md","sourceDirName":"tools/package","slug":"/tools/package/关闭校验","permalink":"/docs/tools/package/关闭校验","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"关闭校验"},"sidebar":"tools","previous":{"title":"package包版本前符号含义","permalink":"/docs/tools/package/package包版本前符号含义"},"next":{"title":"pnpm","permalink":"/docs/category/pnpm"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/package/关闭校验.md


const frontMatter = {
	title: '关闭校验'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "1、关闭整个文件校验",
  "id": "1关闭整个文件校验",
  "level": 2
}, {
  "value": "2、关闭当前行校验",
  "id": "2关闭当前行校验",
  "level": 2
}, {
  "value": "3、关闭下一行校验",
  "id": "3关闭下一行校验",
  "level": 2
}, {
  "value": "4、关闭段落校验",
  "id": "4关闭段落校验",
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
      id: "1关闭整个文件校验",
      children: "1、关闭整个文件校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/* eslint-disable */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2关闭当前行校验",
      children: "2、关闭当前行校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "some code // eslint-disable-line\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3关闭下一行校验",
      children: "3、关闭下一行校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// eslint-disable-next-line\nsome code\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4关闭段落校验",
      children: "4、关闭段落校验"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/* eslint-disable */\nsome code\nsome code\n/* eslint-enable */\n"
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