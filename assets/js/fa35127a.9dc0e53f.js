"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[7345],{

/***/ 97381
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_regex_md_fa3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-regex-常见匹配规则-md-fa3.json
const site_docs_tools_regex_md_fa3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/regex/常见匹配规则","title":"常见匹配规则","description":"常见匹配规则","source":"@site/docs/tools/regex/常见匹配规则.md","sourceDirName":"tools/regex","slug":"/tools/regex/常见匹配规则","permalink":"/docs/tools/regex/常见匹配规则","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"常见匹配规则"},"sidebar":"tools","previous":{"title":"基础规则","permalink":"/docs/tools/regex/基础规则"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/regex/常见匹配规则.md


const frontMatter = {
	title: '常见匹配规则'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "常见匹配规则",
  "id": "常见匹配规则",
  "level": 2
}, {
  "value": "十六进制值",
  "id": "十六进制值",
  "level": 3
}, {
  "value": "手机号",
  "id": "手机号",
  "level": 3
}, {
  "value": "电子邮箱",
  "id": "电子邮箱",
  "level": 3
}, {
  "value": "网页URL",
  "id": "网页url",
  "level": 3
}, {
  "value": "IP地址",
  "id": "ip地址",
  "level": 3
}, {
  "value": "HTML标签",
  "id": "html标签",
  "level": 3
}, {
  "value": "Unicode编码中汉字范围",
  "id": "unicode编码中汉字范围",
  "level": 3
}, {
  "value": "两个符号之间的所有字符",
  "id": "两个符号之间的所有字符",
  "level": 3
}, {
  "value": "单等号",
  "id": "单等号",
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
      id: "常见匹配规则",
      children: "常见匹配规则"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "十六进制值",
      children: "十六进制值"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/^#?([a-f0-9]{6}|[a-f0-9]{3})$/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "手机号",
      children: "手机号"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/^1((3[0-9])\\|(4[1579])\\|(5[0-9])\\|(6[6])\\|(7[0-9])\\|(8[0-9])\\|(9[0-9]))\\d{8}$/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "电子邮箱",
      children: "电子邮箱"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/^([a-z0-9_.-]+)@([\\da-z.-]+).([a-z.]{2,6})$/\n/^[a-z\\d]+(.[a-z\\d]+)*@( [\\da-z] (-[\\da-z])?)+(.{1,2}[a-z]+)+$/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "网页url",
      children: "网页URL"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/^(https?: \\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ip地址",
      children: "IP地址"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/((2[0-4]\\d\\|25[0-5]\\|[01]?\\d\\d?)\\.){3}(2[0-4]\\d\\|25[0-5]\\|[01]?\\d\\d?)/\n/^(?: (?:25[0-5]\\|2 [0-4] [0-9]\\|[01]? [0-9] [0-9]?)\\.){3}(?:25[0-5]\\|2 [0-4] [0-9]\\|[01]? [0-9] [0-9]?)$/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "html标签",
      children: "HTML标签"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/^<([a-z]+)([ ^<]+)*(?:>(.*)<\\/\\1>\\|\\s+\\/>)$/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unicode编码中汉字范围",
      children: "Unicode编码中汉字范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/^[\\u2E80-\\u9FFF]+$/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "两个符号之间的所有字符",
      children: "两个符号之间的所有字符"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/s(.*?)e/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提示：s为开始字符，e为结束字符。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "单等号",
      children: "单等号"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/(?<![\\=\\<\\!\\>])=(?!=)/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "提示：只匹配=，==、===、<=、>=、!=、!==内的等号都不匹配"
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