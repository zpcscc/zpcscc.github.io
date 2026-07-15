"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[6386],{

/***/ 39993
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_macos_md_425_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-macos-忽略系统更新-md-425.json
const site_docs_tools_macos_md_425_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/macos/忽略系统更新","title":"忽略系统更新","description":"macOS 关闭系统更新","source":"@site/docs/tools/macos/忽略系统更新.md","sourceDirName":"tools/macos","slug":"/tools/macos/忽略系统更新","permalink":"/docs/tools/macos/忽略系统更新","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"忽略系统更新"},"sidebar":"tools","previous":{"title":"macOS","permalink":"/docs/category/macos"},"next":{"title":"解除时间机器备份速度限制","permalink":"/docs/tools/macos/解除时间机器备份速度限制"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/tools/macos/忽略系统更新.md


const frontMatter = {
	title: '忽略系统更新'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "macOS 关闭系统更新",
  "id": "macos-关闭系统更新",
  "level": 2
}, {
  "value": "打开mac终端，根据需求输入如下命令",
  "id": "打开mac终端根据需求输入如下命令",
  "level": 4
}, {
  "value": "1、忽略大版本更新",
  "id": "1忽略大版本更新",
  "level": 3
}, {
  "value": "2、忽略小版本更新",
  "id": "2忽略小版本更新",
  "level": 3
}, {
  "value": "3、关闭更新小红点提示",
  "id": "3关闭更新小红点提示",
  "level": 3
}, {
  "value": "4、恢复系统更新",
  "id": "4恢复系统更新",
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
      id: "macos-关闭系统更新",
      children: "macOS 关闭系统更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "打开mac终端根据需求输入如下命令",
      children: "打开mac终端，根据需求输入如下命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1忽略大版本更新",
      children: "1、忽略大版本更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "sudo softwareupdate --ignore \"此处填系统大版本名称\"\n// 例：\nsudo softwareupdate --ignore \"macOS Catalina\"\n// 输入命令后按回车，会提示输入开机密码(输入密码时，不会显示你输入的密码)。\n// 输入完成后按回车即可\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2忽略小版本更新",
      children: "2、忽略小版本更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "sudo softwareupdate --ignore \"此处填具体想要忽略的小版本号\"\n// 例：\nsudo softwareupdate --ignore \"macOS Catalina 10.15.7 Update\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3关闭更新小红点提示",
      children: "3、关闭更新小红点提示"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// 两行命令\ndefaults write com.apple.systempreferences AttentionPrefBundleIDs 0\n// 第一行输入完成后点击回车\nkillall Dock\n// 第二行输入完成后点击回车，此时小红点将会消失\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4恢复系统更新",
      children: "4、恢复系统更新"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// 取消忽略更新，恢复正常的系统更新\nsudo softwareupdate --reset-ignored\ndefaults write com.apple.systempreferences AttentionPrefBundleIDs 0\n"
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