"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[9115],{

/***/ 89934
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_arguments_index_md_ad1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-arguments-index-md-ad1.json
const site_docs_web_javascript_arguments_index_md_ad1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/arguments/index","title":"arguments","description":"JavaScript 函数中的 arguments 对象","source":"@site/docs/web/javascript/arguments/index.md","sourceDirName":"web/javascript/arguments","slug":"/web/javascript/arguments/","permalink":"/docs/web/javascript/arguments/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"arguments"},"sidebar":"web","previous":{"title":"JavaScript","permalink":"/docs/category/javascript"},"next":{"title":"基础介绍","permalink":"/docs/web/javascript/intro"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/web/javascript/arguments/index.md


const frontMatter = {
	title: 'arguments'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "JavaScript 函数中的 arguments 对象",
  "id": "javascript-函数中的-arguments-对象",
  "level": 2
}, {
  "value": "一、arguments 概念",
  "id": "一arguments-概念",
  "level": 2
}, {
  "value": "二、arguments 特点",
  "id": "二arguments-特点",
  "level": 2
}, {
  "value": "三、arguments 方法",
  "id": "三arguments-方法",
  "level": 2
}, {
  "value": "1.arguments 对象",
  "id": "1arguments-对象",
  "level": 3
}, {
  "value": "2.arguments.callee",
  "id": "2argumentscallee",
  "level": 3
}, {
  "value": "3.arguments.length",
  "id": "3argumentslength",
  "level": 3
}, {
  "value": "4.arguments[]",
  "id": "4arguments",
  "level": 3
}, {
  "value": "1）输出参数",
  "id": "1输出参数",
  "level": 4
}, {
  "value": "2）设置参数",
  "id": "2设置参数",
  "level": 4
}, {
  "value": "5.arguments 注意事项",
  "id": "5arguments-注意事项",
  "level": 3
}, {
  "value": "四、arguments 转数组",
  "id": "四arguments-转数组",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "javascript-函数中的-arguments-对象",
      children: "JavaScript 函数中的 arguments 对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一arguments-概念",
      children: "一、arguments 概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "在JavaScript中，参数在函数内部是以一个数组表示的，函数接受的永远是一个数组\narguments是函数内部的一个专门用来存储实参的数组对象\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二arguments-特点",
      children: "二、arguments 特点"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "1.arguments对象和Function是分不开的\n2.arguments对象不能显式创建\n3.arguments对象只有函数开始时才可用\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三arguments-方法",
      children: "三、arguments 方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "arguments.callee; //自己，arguments所在的函数，指向当前执行的函数。\narguments.caller; //指向调用当前函数的函数\narguments.length; //获得长度，实参的个数\narguments[i]; //通过遍历索引，获得每个实参\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1arguments-对象",
      children: "1.arguments 对象"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(a, b, c) {\n  console.log(arguments); //输出内容见下图\n  return a + b + c;\n}\nconsole.log(fn(1, 2, 3)); //输出6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "arguments1",
        src: (__webpack_require__(98457)/* ["default"] */ .A) + "",
        width: "400",
        height: "175"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2argumentscallee",
      children: "2.arguments.callee"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(a, b, c) {\n  console.log(arguments.callee); //输出当前函数本身，见下图\n  return a + b + c;\n}\nconsole.log(fn(1, 2, 3)); //输出6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "arguments2",
        src: (__webpack_require__(33922)/* ["default"] */ .A) + "",
        width: "443",
        height: "95"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3argumentslength",
      children: "3.arguments.length"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(a, b, c) {\n  console.log(arguments.length); //输出3---当前arguments的长度\n  return a + b + c;\n}\nconsole.log(fn(1, 2, 3)); //输出6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4arguments",
      children: "4.arguments[]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1输出参数",
      children: "1）输出参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(a, b, c) {\n  for (var i = 0; i < arguments.length; i++) {\n    console.log(arguments[i]); //依次输出1,2,3\n  }\n  return a + b + c;\n}\nconsole.log(fn(1, 2, 3)); //输出6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2设置参数",
      children: "2）设置参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(a, b, c) {\n  arguments[0] = \"hello\"; //参数也可被设置\n  for (var i = 0; i < arguments.length; i++) {\n    console.log(arguments[i]); //依次输出  hello,2,3\n  }\n  return a + b + c;\n}\nconsole.log(fn(1, 2, 3)); //输出hello23---三个值通过+号转为字符串进行连接\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5arguments-注意事项",
      children: "5.arguments 注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//在函数中只要是实参全都传给arguments\n//在函数中，形参和实参的个数，可以为任意个，甚至数量不对应，程序都不会报错，但是在计算过程中可能会出现NaN\nfunction fn(a, b, c) {\n  return a + b + c;\n}\nconsole.log(fn(1, 2)); //输出NaN---因为形参c没有接收到数据，但在进行运算时用到了形参c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四arguments-转数组",
      children: "四、arguments 转数组"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "arguments"
      }), "对象不是一个真正的数组 ，它类似于数组，但除了 length 属性和索引元素之外没有任何数组属性。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例如，它没有 ", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop",
        children: "pop"
      }), " 方法。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["但是它可以被转换为一个真正的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "数组"
      }), "，转换为真实的数组后就可以使用完整的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "数组方法"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(a, b, c) {\n  arguments[0] = \"hello\"; //参数也可被设置\n  var args = Array.from(arguments); //进行转数组操作\n  console.log(args); //结果见下图，输出的是一个数组\n  return a + b + c;\n}\nconsole.log(fn(1, 2, 3)); //输出hello23---通过+号字符串拼接\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "arguments3",
        src: (__webpack_require__(71403)/* ["default"] */ .A) + "",
        width: "257",
        height: "182"
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

/***/ 98457
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/arguments1-561ba8c81b5cca67aa2b5cd32ddcc74f.png");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 33922
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 71403
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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