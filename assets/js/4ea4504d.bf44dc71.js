"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[566],{

/***/ 9472
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_md_4ea_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-浏览器兼容-md-4ea.json
const site_docs_web_javascript_md_4ea_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/浏览器兼容","title":"浏览器兼容","description":"获取非行内样式","source":"@site/docs/web/javascript/浏览器兼容.md","sourceDirName":"web/javascript","slug":"/web/javascript/浏览器兼容","permalink":"/docs/web/javascript/浏览器兼容","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"浏览器兼容"},"sidebar":"web","previous":{"title":"数组方法详解","permalink":"/docs/web/javascript/数组方法详解"},"next":{"title":"转义字符还原","permalink":"/docs/web/javascript/转义字符还原"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/web/javascript/浏览器兼容.md


const frontMatter = {
	title: '浏览器兼容'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "获取非行内样式",
  "id": "获取非行内样式",
  "level": 2
}, {
  "value": "获取事件对象",
  "id": "获取事件对象",
  "level": 2
}, {
  "value": "阻止默认事件",
  "id": "阻止默认事件",
  "level": 2
}, {
  "value": "消除事件冒泡",
  "id": "消除事件冒泡",
  "level": 2
}, {
  "value": "获取键盘按键",
  "id": "获取键盘按键",
  "level": 2
}, {
  "value": "添加事件监听",
  "id": "添加事件监听",
  "level": 2
}, {
  "value": "删除事件监听",
  "id": "删除事件监听",
  "level": 2
}, {
  "value": "获取事件源",
  "id": "获取事件源",
  "level": 2
}, {
  "value": "获取滚动条滚动距离",
  "id": "获取滚动条滚动距离",
  "level": 2
}, {
  "value": "AJAX 兼容问题",
  "id": "ajax-兼容问题",
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
      id: "获取非行内样式",
      children: "获取非行内样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function getStyle(obj, attr) {\n  //获取非行间样式，obj是对象，attr是值\n  if (obj.currentStyle) {\n    return obj.currentStyle[attr]; //针对ie获取非行间样式\n  } else {\n    return getComputedStyle(obj, false)[attr]; //针对非ie\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取事件对象",
      children: "获取事件对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(eve) {\n  var e = eve || window.event;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "阻止默认事件",
      children: "阻止默认事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function stopDefault(e) {\n  if (e.preventDefault) {\n    e.preventDefault();\n  } else {\n    e.returnValue = false;\n  }\n}\n//或使用return flase//注意一定要在最后使用，防止提前中断函数\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "消除事件冒泡",
      children: "消除事件冒泡"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function stopBubble(e) {\n  if (e.stopPropagation()) {\n    e.stopPropagation(); //兼容其他浏览器\n  } else {\n    e.cancelBubble = true; //兼容ie浏览器\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取键盘按键",
      children: "获取键盘按键"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function key(eve) {\n  var keyC = eve.keyCode || eve.which;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "添加事件监听",
      children: "添加事件监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function addEvent(obj, type, back) {\n  if (obj.addEventListener) {\n    obj.addEventListener(type, back);\n  } else if (obj.attachEvent) {\n    obj.attachEvent(\"on\" + type, back);\n  } else {\n    obj[\"on\" + type] = back;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "删除事件监听",
      children: "删除事件监听"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function removeEvent(obj, type, back) {\n  if (obj.removeEventListener) {\n    obj.removeEventListener(type, back, false);\n  } else if (obj.detachEvent) {\n    obj.detachEvent(\"on\" + type, back);\n  } else {\n    obj[\"on\" + type] = null;\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取事件源",
      children: "获取事件源"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function getEventtarget(eve) {\n  var e = eve || window.event;\n  var target = e.target || e.srcElement;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取滚动条滚动距离",
      children: "获取滚动条滚动距离"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var sTop = document.documentElement.scrollTop || document.body.scrollTop;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ajax-兼容问题",
      children: "AJAX 兼容问题"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "ajax = new XMLHttpRequest();\najax = new ActiveXObject(\"Microsoft.XMLHTTP\");\n"
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