"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[471],{

/***/ 43764
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_nginx_md_03b_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-nginx-常用命令-md-03b.json
const site_docs_tools_nginx_md_03b_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/nginx/常用命令","title":"常用命令","description":"nginx 常用命令","source":"@site/docs/tools/nginx/常用命令.md","sourceDirName":"tools/nginx","slug":"/tools/nginx/常用命令","permalink":"/docs/tools/nginx/常用命令","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"nginx","permalink":"/docs/tags/nginx"}],"version":"current","frontMatter":{"title":"常用命令","sidebar":"auto","date":"2020-09-25T00:00:00.000Z","categories":["开发"],"tags":["nginx"]},"sidebar":"tools","previous":{"title":"Nginx","permalink":"/docs/category/nginx"},"next":{"title":"包管理","permalink":"/docs/category/包管理"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/nginx/常用命令.md


const frontMatter = {
	title: '常用命令',
	sidebar: 'auto',
	date: new Date('2020-09-25T00:00:00.000Z'),
	categories: [
		'开发'
	],
	tags: [
		'nginx'
	]
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "nginx 常用命令",
  "id": "nginx-常用命令",
  "level": 2
}, {
  "value": "1、启动 nginx",
  "id": "1启动-nginx",
  "level": 3
}, {
  "value": "2、修改配置后，重新加载 nginx",
  "id": "2修改配置后重新加载-nginx",
  "level": 3
}, {
  "value": "3、重新打开日志文件",
  "id": "3重新打开日志文件",
  "level": 3
}, {
  "value": "4、快速停止 nginx",
  "id": "4快速停止-nginx",
  "level": 3
}, {
  "value": "5、优雅停止 nginx",
  "id": "5优雅停止-nginx",
  "level": 3
}, {
  "value": "6、查看 nginx 配置文件是否正确",
  "id": "6查看-nginx-配置文件是否正确",
  "level": 3
}, {
  "value": "7、查看 nginx 帮助",
  "id": "7查看-nginx-帮助",
  "level": 3
}, {
  "value": "8、查看 nginx 版本",
  "id": "8查看-nginx-版本",
  "level": 3
}, {
  "value": "9、查看 nginx 版本及配置信息",
  "id": "9查看-nginx-版本及配置信息",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "nginx-常用命令",
      children: "nginx 常用命令"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1启动-nginx",
      children: "1、启动 nginx"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "1、在nginx安装目录下直接双击nginx文件\n2、在nginx安装目录下启动终端，输入命令：nginx\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2修改配置后重新加载-nginx",
      children: "2、修改配置后，重新加载 nginx"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "nginx -s reload\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3重新打开日志文件",
      children: "3、重新打开日志文件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "nginx -s reopen\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4快速停止-nginx",
      children: "4、快速停止 nginx"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "nginx -s stop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5优雅停止-nginx",
      children: "5、优雅停止 nginx"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nginx -s quit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6查看-nginx-配置文件是否正确",
      children: "6、查看 nginx 配置文件是否正确"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "nginx -t\n\n//输出如下字段则表示配置正确\nnginx.conf syntax is ok\nnginx.conf test is successfu\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7查看-nginx-帮助",
      children: "7、查看 nginx 帮助"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nginx -h\nnginx -？\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8查看-nginx-版本",
      children: "8、查看 nginx 版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nginx -v\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9查看-nginx-版本及配置信息",
      children: "9、查看 nginx 版本及配置信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "nginx -V\n"
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