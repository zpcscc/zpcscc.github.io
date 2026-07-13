"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[435],{

/***/ 73416
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_utils_fetch_all_index_mdx_a3c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/utils/site-docs-utils-fetch-all-index-mdx-a3c.json
const site_docs_utils_fetch_all_index_mdx_a3c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"fetchAll/index","title":"fetchAll","description":"描述","source":"@site/docs-utils/fetchAll/index.mdx","sourceDirName":"fetchAll","slug":"/fetchAll/","permalink":"/utils/fetchAll/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"fetchAll"},"sidebar":"utils","previous":{"title":"desensitize","permalink":"/utils/desensitize/"},"next":{"title":"getColor","permalink":"/utils/getColor/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs-utils/fetchAll/index.mdx


const frontMatter = {
	title: 'fetchAll'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "描述",
  "id": "描述",
  "level": 2
}, {
  "value": "参数",
  "id": "参数",
  "level": 2
}, {
  "value": "返回",
  "id": "返回",
  "level": 2
}, {
  "value": "示例 <em>(ts类型)</em>",
  "id": "示例-ts类型",
  "level": 2
}, {
  "value": "示例 <em>(demo)</em>",
  "id": "示例-demo",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    em: "em",
    h2: "h2",
    p: "p",
    pre: "pre",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "描述",
      children: "描述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "并发请求控制：传入所有需要请求的接口数据，通过此函数进行并发控制；此函数只做并发控制，请求函数与参数，由外部传入；"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "参数",
      children: "参数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "默认值"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "tasks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Array.&lt;any&gt;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "待请求的接口相关任务列表"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "maxConcurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "最大并发数"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "requestFn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义的请求函数"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "返回",
      children: "返回"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Array.&lt;any&gt;"
      }), " - 请求完成后的数据数组"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "示例-ts类型",
      children: ["示例 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(ts类型)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "fetchAll(tasks: AnyArray, maxConcurrency: number, requestFn: AnyFunction);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "示例-demo",
      children: ["示例 ", (0,jsx_runtime.jsx)(_components.em, {
        children: "(demo)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import { fetchAll } from '@site/src/utils';\n\n// 自定义的任务列表；任意数组类型；\nconst tasks = [\n  { url: 'https://example.com/1' },\n  { url: 'https://example.com/2' },\n  { url: 'https://example.com/3' },\n  { url: 'https://example.com/4' },\n  { url: 'https://example.com/5' },\n  { url: 'https://example.com/6' },\n  { url: 'https://example.com/7' },\n  { url: 'https://example.com/8' },\n  { url: 'https://example.com/9' },\n  { url: 'https://example.com/0' }\n];\n// 自定义的请求函数\nconst requestFn = (taskItem) => fetch(taskItem.url).then((response) => response.text());\n// 并发请求对应的数据\nconst results = await fetchAll(tasks, 3, requestFn);\n"
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