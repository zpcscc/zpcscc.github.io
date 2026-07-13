"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[1495],{

/***/ 90633
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_regex_vscode_md_173_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-regex-在vscode查找替换中使用正则-md-173.json
const site_docs_tools_regex_vscode_md_173_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/regex/在vscode查找替换中使用正则","title":"在vscode查找替换中使用正则","description":"在vscode查找替换中使用正则","source":"@site/docs/tools/regex/在vscode查找替换中使用正则.md","sourceDirName":"tools/regex","slug":"/tools/regex/在vscode查找替换中使用正则","permalink":"/docs/tools/regex/在vscode查找替换中使用正则","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"在vscode查找替换中使用正则"},"sidebar":"tools","previous":{"title":"正则表达式","permalink":"/docs/category/正则表达式"},"next":{"title":"基础规则","permalink":"/docs/tools/regex/基础规则"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/tools/regex/在vscode查找替换中使用正则.md


const frontMatter = {
	title: '在vscode查找替换中使用正则'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "在vscode查找替换中使用正则",
  "id": "在vscode查找替换中使用正则",
  "level": 2
}, {
  "value": "1、打开vscode查找替换窗口",
  "id": "1打开vscode查找替换窗口",
  "level": 3
}, {
  "value": "2、按下查找窗口右边匹配全部的按钮",
  "id": "2按下查找窗口右边匹配全部的按钮",
  "level": 3
}, {
  "value": "3、在搜索窗口直接输入正则表达式即可，不用输入正则的斜杠和全局等修饰，vscode默认全局",
  "id": "3在搜索窗口直接输入正则表达式即可不用输入正则的斜杠和全局等修饰vscode默认全局",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "在vscode查找替换中使用正则",
      children: "在vscode查找替换中使用正则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1打开vscode查找替换窗口",
      children: "1、打开vscode查找替换窗口"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2按下查找窗口右边匹配全部的按钮",
      children: "2、按下查找窗口右边匹配全部的按钮"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​\tvscode查找窗口有三个基础匹配规则，这里我们选择第三个"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1、是否启用，匹配大小写\n2、是否启用、字符完全匹配，不进行模糊匹配\n3、是否启用正则表达式搜索\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3在搜索窗口直接输入正则表达式即可不用输入正则的斜杠和全局等修饰vscode默认全局",
      children: "3、在搜索窗口直接输入正则表达式即可，不用输入正则的斜杠和全局等修饰，vscode默认全局"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "例如：\n匹配数字的正则是：/^[0-9]*$/\n我们直接在搜索框输入: [0-9]\n"
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