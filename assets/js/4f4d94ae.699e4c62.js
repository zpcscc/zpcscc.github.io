"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[9292],{

/***/ 94729
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_md_4f4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-数据类型-md-4f4.json
const site_docs_web_javascript_md_4f4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/数据类型","title":"数据类型","description":"一、常见数据类型","source":"@site/docs/web/javascript/数据类型.md","sourceDirName":"web/javascript","slug":"/web/javascript/数据类型","permalink":"/docs/web/javascript/数据类型","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"数据类型"},"sidebar":"web","previous":{"title":"手写call函数","permalink":"/docs/web/javascript/手写promise.all函数"},"next":{"title":"数组","permalink":"/docs/web/javascript/数组/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/web/javascript/数据类型.md


const frontMatter = {
	title: '数据类型'
};
const contentTitle = '数据类型';

const assets = {

};



const toc = [{
  "value": "一、常见数据类型",
  "id": "一常见数据类型",
  "level": 2
}, {
  "value": "二、JavaScript 的三大特殊值 NaN、undefined、null",
  "id": "二javascript-的三大特殊值-nanundefinednull",
  "level": 2
}, {
  "value": "3.如何检测数据类型：",
  "id": "3如何检测数据类型",
  "level": 2
}, {
  "value": "4.数据保存在哪？",
  "id": "4数据保存在哪",
  "level": 2
}, {
  "value": "五、数据类型转换",
  "id": "五数据类型转换",
  "level": 2
}, {
  "value": "数据类型转换的类型分类：",
  "id": "数据类型转换的类型分类",
  "level": 4
}, {
  "value": "1.隐式数据转换",
  "id": "1隐式数据转换",
  "level": 3
}, {
  "value": "2.显式转换",
  "id": "2显式转换",
  "level": 3
}, {
  "value": "<strong>字符转数值</strong>",
  "id": "字符转数值",
  "level": 4
}, {
  "value": "(1) 普通字符转换",
  "id": "1-普通字符转换",
  "level": 5
}, {
  "value": "(2) 特殊字符转换",
  "id": "2-特殊字符转换",
  "level": 5
}, {
  "value": "<strong>数值转字符</strong>",
  "id": "数值转字符",
  "level": 4
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
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
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "数据类型",
        children: "数据类型"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一常见数据类型",
      children: "一、常见数据类型"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "特征"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "举例"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"\"、''"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"hello\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只要是被引号包裹的都是字符"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数字型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "012"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.1415926"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "常见的各类数字"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true、false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "只有两个值，表示真假"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,2,3]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用方括号包起来，逗号隔开的数据"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{key:value}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用大括号包起来，里面是键值对的形式，逗号隔开"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "function"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["function test() = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "{}"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "函数方法"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "未赋值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示被声明了，但是没有被赋值"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "空"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "null"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示空"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示为空"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NaN"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "意外的数字"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NaN"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示意外转换生成的数值型数据"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二javascript-的三大特殊值-nanundefinednull",
      children: "二、JavaScript 的三大特殊值 NaN、undefined、null"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "NaN:不是一个数字的数值型数据\n    代表意外或非法转化的数字\n    NaN和任何数据都不相等，甚至不等于自己\n    //认识isNaN()函数，该函数判断括号内的值是否是NaN，是就返回true，不是就返回false\n    console.log(isNaN(c));\nnull：空\n\t类型是对象，表示空nall。但不是空对象\nundefined：未定义\n    null和undefined隐式类型转换后可能相等（不严格比较）\n    因为都转为布尔值，两者在布尔值中都为false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3如何检测数据类型",
      children: "3.如何检测数据类型："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用关键字：", (0,jsx_runtime.jsx)(_components.strong, {
        children: "typeof"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//在打印内容前加上关键字typeof，打印出来的就是当前内容的数据类型\ncondole.log(typeof '123') //string\ncondole.log(typeof 123) //number\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4数据保存在哪",
      children: "4.数据保存在哪？"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "保存在变量中：变量比作仓库。变量需要声明之后才能使用\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "五数据类型转换",
      children: "五、数据类型转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "数据类型转换的类型分类",
      children: "数据类型转换的类型分类："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1隐式数据转换",
      children: "1.隐式数据转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "情况（场景）：\n    1.在算数运算中（通过算数运算符转换）\n        转换的规则：\n            +号只要两边出现一个字符，另一个也会转换成字符\n            -*%/直接都作为数值运算（可将某srting类型数字*1转换为number类型数字）\n    2.if等判断语句中（if语句括号中的值）\n        数字：非0为true，0为false\n        字符：非空为true，空为false\n        对象：在任何时候都为true\n        数组：在任何时候都为true，数组也是对象的一种\n        函数：在任何时候都为true，函数也是特殊的对象\n        NaN：为false\n        undefined：为false\n        null：为false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2显式转换",
      children: "2.显式转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "字符转数值",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "字符转数值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Tip:我们想做数学运算的时候，应该先对所有的数据类型进行统一（统一成数字格式），这个时候我们就该用到数据类型的转换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1-普通字符转换",
      children: "(1) 普通字符转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "parseInt();括号里就是需要转换的数据（可用于小数取整）\n    数字可以转换，非数字停止。\n    从左向右转换，能转就转，不能转就停止，后面的不再转换。\n    若第一个就不能转，则显示NaN，\n    能用在转换整数，认为小数点是非数字。\n\t例：\n        parseInt(\"123abc\");//123\n       \t\ta做为第一个不是数字的字符；返回a之前的所有值，则该方法返回123\n        parseInt(\"abc123\");//NaN\n        \ta做为第一个不是数字的字符，且处在字符串的第一位，则判定该字符串无法转换为数字返回NaN\n\nparseFloat();\n    数字可以转换，非数字停止\n    从左向右转换，能转就转，不能转就停止，后面的不再转换。\n    若第一个就不能转，则显示NaN，\n    可以识别小数点\n    例：\n        parseFloat(“123.456\");返回123.456\n        parseFloat(“123.4a56\");返回123.4\n        parseFloat(“123.00\");返回123\n        parseFloat(“123.0a56\");返回123\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2-特殊字符转换",
      children: "(2) 特殊字符转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "Math.round();\n    严格转换，不允许出现任何非数字，若有非数字直接显示NaN。\n    可以识别小数点，但会四舍五入取整。小数点后的被四舍五入\n    实质是取最近的整数，能在正数有四舍五入的效果。\n    若为负数；例：Math.round(-3.6);//-4(数字进一反而变小了)\nNumber()//为强制数据类型转换 将string类型的数字转为number类型的数字\n    严格转换，不允许出现任何非数字，若有非数字直接显示NaN。\n    可以识别小数点\n        Number(\"hello world\");    //NaN\n        Number(\"123456\");         //123456\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "数值转字符",
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "数值转字符"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "toString();\n\t直接转换：相当于直接给数值添加个引号\n\t例：\n        var num = 123;\n        num.toString();//\"123\" 转换成字符串\ntoFixed();\n\t保留N位小数的转换（转换后变成字符）\n\t\t直接转换，可以保留N位小数\n\t\t例：\n\t\t\tvar a = 3.1415\n\t\t\ta.toFixed(2);//\"3.14\" a转换为字符 ，保留两位小数，四舍五入\n\t\t字符多位,小数可以补0\n\t\t\ta.toFixed(6);//\"3.141500\"//字符型，后面可以补0\n\t\tTip：而数值多位，小数没办法补0，计算机认为是无意义的，会自动省略。\n"
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