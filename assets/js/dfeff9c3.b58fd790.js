"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[2949],{

/***/ 63308
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_package_package_md_dfe_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-package-package包版本前符号含义-md-dfe.json
const site_docs_tools_package_package_md_dfe_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/package/package包版本前符号含义","title":"package包版本前符号含义","description":"1、version","source":"@site/docs/tools/package/package包版本前符号含义.md","sourceDirName":"tools/package","slug":"/tools/package/package包版本前符号含义","permalink":"/docs/tools/package/package包版本前符号含义","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"package包版本前符号含义"},"sidebar":"tools","previous":{"title":"包管理","permalink":"/docs/category/包管理"},"next":{"title":"关闭校验","permalink":"/docs/tools/package/关闭校验"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/tools/package/package包版本前符号含义.md


const frontMatter = {
	title: 'package包版本前符号含义'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "1、<code>version</code>",
  "id": "1version",
  "level": 3
}, {
  "value": "2、<code>&gt;version</code>",
  "id": "2version",
  "level": 3
}, {
  "value": "3、<code>&gt;=version</code>",
  "id": "3version",
  "level": 3
}, {
  "value": "4、<code>&lt;version</code>",
  "id": "4version",
  "level": 3
}, {
  "value": "5、<code>&lt;=version</code>",
  "id": "5version",
  "level": 3
}, {
  "value": "6、<code>~version</code>",
  "id": "6version",
  "level": 3
}, {
  "value": "7、<code>^version</code>",
  "id": "7version",
  "level": 3
}, {
  "value": "8、<code>x-range</code>",
  "id": "8x-range",
  "level": 3
}, {
  "value": "9、<code>*-range</code>",
  "id": "9-range",
  "level": 3
}, {
  "value": "10、<code>version1-version2</code>",
  "id": "10version1-version2",
  "level": 3
}, {
  "value": "11、<code>range1 || range2</code>",
  "id": "11range1--range2",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h3: "h3",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.h3, {
      id: "1version",
      children: ["1、", (0,jsx_runtime.jsx)(_components.code, {
        children: "version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "必须匹配某个版本\n如：1.1.2，表示必须依赖1.1.2版\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "2version",
      children: ["2、", (0,jsx_runtime.jsx)(_components.code, {
        children: ">version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "必须大于某个版本\n如：>1.1.2，表示必须大于1.1.2版\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "3version",
      children: ["3、", (0,jsx_runtime.jsx)(_components.code, {
        children: ">=version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "可大于或等于某个版本\n如：>=1.1.2，表示可以等于1.1.2，也可以大于1.1.2版本\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4version",
      children: ["4、", (0,jsx_runtime.jsx)(_components.code, {
        children: "<version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "必须小于某个版本 \n如：<1.1.2，表示必须小于1.1.2版本\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "5version",
      children: ["5、", (0,jsx_runtime.jsx)(_components.code, {
        children: "<=version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "可以小于或等于某个版本\n如：<=1.1.2，表示可以等于1.1.2，也可以小于1.1.2版本\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "6version",
      children: ["6、", (0,jsx_runtime.jsx)(_components.code, {
        children: "~version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "大概匹配某个版本\n如果minor版本号指定了，那么minor版本号不变，而patch版本号任意\n如果minor和patch版本号未指定，那么minor和patch版本号任意\n如：~1.1.2，表示>=1.1.2 <1.2.0，可以是1.1.2，1.1.3，.....，1.1.n \n如：~1.1，表示>=1.1.0 <1.2.0，可以是同上\n如：~1，表示>=1.0.0<2.0.0，\n可以是1.0.0，1.0.1，.....，1.1.n，1.2.n，.....，1.n.n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "7version",
      children: ["7、", (0,jsx_runtime.jsx)(_components.code, {
        children: "^version"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "兼容某个版本\n版本号中最左边的非0数字的右侧可以任意\n如果缺少某个版本号，则这个版本号的位置可以任意\n如：^1.1.2 ，表示>=1.1.2<2.0.0，\n可以是1.1.2，1.1.3，.....，1.1.n，1.2.n，.....，1.n.n\n如：^0.2.3 ，表示>=0.2.3 <0.3.0，\n可以是0.2.3，0.2.4，.....，0.2.n\n如：^0.0，表示 >=0.0.0 <0.1.0，\n可以是0.0.0，0.0.1，.....，0.0.n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "8x-range",
      children: ["8、", (0,jsx_runtime.jsx)(_components.code, {
        children: "x-range"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x的位置表示任意版本\n如：1.2.x，表示可以1.2.0，1.2.1，.....，1.2.n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "9-range",
      children: ["9、", (0,jsx_runtime.jsx)(_components.code, {
        children: "*-range"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "任意版本，\"\"也表示任意版本\n如：*，表示>=0.0.0的任意版本\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "10version1-version2",
      children: ["10、", (0,jsx_runtime.jsx)(_components.code, {
        children: "version1-version2"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "大于等于version1，小于等于version2\n如：1.1.2 - 1.3.1，表示包括1.1.2和1.3.1以及他们件的任意版本\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "11range1--range2",
      children: ["11、", (0,jsx_runtime.jsx)(_components.code, {
        children: "range1 || range2"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "满足range1或者满足range2，可以多个范围\n如：<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0，\n表示满足这3个范围的版本都可以\n"
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