"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[1428],{

/***/ 16802
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_git_commit_md_198_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-git-二分法调试查找问题commit-md-198.json
const site_docs_tools_git_commit_md_198_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/git/二分法调试查找问题commit","title":"二分法调试查找问题commit","description":"二分法调试查找问题commit","source":"@site/docs/tools/git/二分法调试查找问题commit.md","sourceDirName":"tools/git","slug":"/tools/git/二分法调试查找问题commit","permalink":"/docs/tools/git/二分法调试查找问题commit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"二分法调试查找问题commit"},"sidebar":"tools","previous":{"title":"merge报错修复","permalink":"/docs/tools/git/merge报错修复"},"next":{"title":"切换到某次commit","permalink":"/docs/tools/git/切换到某次commit"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/git/二分法调试查找问题commit.md


const frontMatter = {
	title: '二分法调试查找问题commit'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "二分法调试查找问题commit",
  "id": "二分法调试查找问题commit",
  "level": 2
}, {
  "value": "前言：",
  "id": "前言",
  "level": 2
}, {
  "value": "一、原理",
  "id": "一原理",
  "level": 3
}, {
  "value": "二、使用步骤",
  "id": "二使用步骤",
  "level": 3
}, {
  "value": "1、确定查找范围",
  "id": "1确定查找范围",
  "level": 4
}, {
  "value": "2、启动 <code>git bisect</code> 命令",
  "id": "2启动-git-bisect-命令",
  "level": 4
}, {
  "value": "3、开始排查",
  "id": "3开始排查",
  "level": 4
}, {
  "value": "4、退出 <code>git bisect</code>命令",
  "id": "4退出-git-bisect命令",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "二分法调试查找问题commit",
      children: "二分法调试查找问题commit"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "git bisect"
      }), " 命令用来查找哪一次代码提交引入了错误"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前言",
      children: "前言："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用场景：当项目出现某个问题。但不知道是哪次commit导致此问题的出现。可以使用此命令 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git bisect"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一原理",
      children: "一、原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "原理为，将所有提交的commit记录一分为二。确定错误在前半部分还是后半部分。不断重复缩小范围，直到找到错误的某个commit；"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "二使用步骤",
      children: "二、使用步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1确定查找范围",
      children: "1、确定查找范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// 查看所有commit提交记录，确定查找范围。\ngit log\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "2启动-git-bisect-命令",
      children: ["2、启动 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git bisect"
      }), " 命令"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git bisect start ${最近的commit} ${最远的commit}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3开始排查",
      children: "3、开始排查"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动命令后，项目会切换到刚刚启动范围最中间的一次commit。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时可以运行项目，查看问题是否存在"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若当前commit没有问题则标记good"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git bisect good\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令表示当前commit正常。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记完成后，项目会自动跳转到后半范围的中点commit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直到某次commit中，出现了问题。此时标记bad"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git bisect bad\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此命令表示当前commit出现了问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "标记完成后，项目会自动跳转到前半范围的中点commit"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过此二分法，不断缩小范围。之后不断重复此过程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "直到某次标记后，git给出如下提示"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "${某次commit} is the first bad commit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这是我们就找到了问题第一次出现的某个commit。记录下本次commit。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "查看commit内容，确认问题原因。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "4退出-git-bisect命令",
      children: ["4、退出 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "git bisect"
      }), "命令"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git bisect reset\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "退出命令后。项目会回到最开始启动命令前所在的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此时就可以愉快的修复bug了。"
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