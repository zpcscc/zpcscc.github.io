"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[2428],{

/***/ 73319
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_md_436_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-函数-md-436.json
const site_docs_web_javascript_md_436_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/函数","title":"函数","description":"一、函数的概念、特性及特点","source":"@site/docs/web/javascript/函数.md","sourceDirName":"web/javascript","slug":"/web/javascript/函数","permalink":"/docs/web/javascript/函数","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"函数"},"sidebar":"web","previous":{"title":"三大结构","permalink":"/docs/web/javascript/三大结构"},"next":{"title":"变量","permalink":"/docs/web/javascript/变量"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/web/javascript/函数.md


const frontMatter = {
	title: '函数'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、函数的概念、特性及特点",
  "id": "一函数的概念特性及特点",
  "level": 2
}, {
  "value": "1.概念",
  "id": "1概念",
  "level": 3
}, {
  "value": "2.特性",
  "id": "2特性",
  "level": 3
}, {
  "value": "3.特点",
  "id": "3特点",
  "level": 3
}, {
  "value": "二、函数的创建",
  "id": "二函数的创建",
  "level": 2
}, {
  "value": "1.声明式创建",
  "id": "1声明式创建",
  "level": 3
}, {
  "value": "2.赋值式创建",
  "id": "2赋值式创建",
  "level": 3
}, {
  "value": "三、函数的简单分类",
  "id": "三函数的简单分类",
  "level": 2
}, {
  "value": "1.有名函数",
  "id": "1有名函数",
  "level": 3
}, {
  "value": "2.无名函数",
  "id": "2无名函数",
  "level": 3
}, {
  "value": "3.匿名函数",
  "id": "3匿名函数",
  "level": 3
}, {
  "value": "四、函数的执行",
  "id": "四函数的执行",
  "level": 2
}, {
  "value": "1.一般函数执行",
  "id": "1一般函数执行",
  "level": 3
}, {
  "value": "2.匿名函数执行",
  "id": "2匿名函数执行",
  "level": 3
}, {
  "value": "3.事件触发函数执行",
  "id": "3事件触发函数执行",
  "level": 3
}, {
  "value": "五、函数的参数",
  "id": "五函数的参数",
  "level": 2
}, {
  "value": "1.参数的概念",
  "id": "1参数的概念",
  "level": 3
}, {
  "value": "2.参数的分类",
  "id": "2参数的分类",
  "level": 3
}, {
  "value": "3.参数的一一对应",
  "id": "3参数的一一对应",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "一函数的概念特性及特点",
      children: "一、函数的概念、特性及特点"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1概念",
      children: "1.概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "函数是由事件驱动的或者当他被调用时可执行的可重复使用的代码块\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2特性",
      children: "2.特性"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "封装：\n\t将实现某个功能的代码放在一起，类似放在容器中，调用这个容器即可使用这段代码的功能\n抽象：\n\t根据某物体的功能或特点抽象出来形成一个名词。俗称起名\n\t函数也可以看做是一种变量，里面的值是一段功能代码\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3特点",
      children: "3.特点"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "选择使用：可以选择需要使用那些功能\n重复使用：可以重复调用这个函数\n忽略细节：只需要使用函数，不需要了解其内部如何实现的\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二函数的创建",
      children: "二、函数的创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1声明式创建",
      children: "1.声明式创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fu() {}\nfunction //声明关键字，指出这是一个函数\nfn() { //函数名，类似于用来存储函数的变量\n  //函数需要接受的参数，多个参数用“,”隔开\n} //函数内的执行语句，函数体，函数的功能代码\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2赋值式创建",
      children: "2.赋值式创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var fn = function() {};\n//这种方式下，虽然这个函数没有名字，但是这个函数赋值给了fn，因此通过变量fn也能调用到这个函数\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三函数的简单分类",
      children: "三、函数的简单分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1有名函数",
      children: "1.有名函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn() {}\n//声明式创建的函数，正常函数，正常执行，正常使用\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2无名函数",
      children: "2.无名函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1）可以作为", (0,jsx_runtime.jsx)(_components.strong, {
        children: "值"
      }), "存在：赋值给一个", (0,jsx_runtime.jsx)(_components.strong, {
        children: "变量"
      }), "，那么就变成了", (0,jsx_runtime.jsx)(_components.strong, {
        children: "赋值式创建函数"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2）可以作为", (0,jsx_runtime.jsx)(_components.strong, {
        children: "行为处理函数"
      }), "，又叫", (0,jsx_runtime.jsx)(_components.strong, {
        children: "事件触发函数"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "obox.onclick = function() {};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["3）可作为", (0,jsx_runtime.jsx)(_components.strong, {
        children: "实参"
      }), "存在：叫做", (0,jsx_runtime.jsx)(_components.strong, {
        children: "回调函数"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将函数fn2作为参数，传到另一个函数fn1中，在函数fn1中执行函数fn2，那么作为参数的函数fn2就是回调函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn1(cb) {\n  //fn1接收到作为参数的函数fn2\n  cb(1, 2, 3); //调用fn2来执行\n}\nfunction fn2(a, b, c) {\n  //这就是回调函数\n  console.log(a + b + c); //6\n}\nfn1(fn2); //将函数fn2传给函数fn1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3匿名函数",
      children: "3.匿名函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "(function() {})();\n//通常会在匿名函数前后都加分号\";\"，防止和上一行的代码连接出现bug\n//匿名函数不需要调用立即执行，和没写函数时直接执行代码差不多\n//主要用于创建一个大范围的作用域，减少全局变量\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四函数的执行",
      children: "四、函数的执行"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1一般函数执行",
      children: "1.一般函数执行"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var fn = function(){};\n函数名+();//不能丢掉括号\n例：fn();//函数名+小括号就会立即执行函数\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2匿名函数执行",
      children: "2.匿名函数执行"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "(function() {})();\n//自动直接执行，不需要触发\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3事件触发函数执行",
      children: "3.事件触发函数执行"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过各种", (0,jsx_runtime.jsx)(_components.strong, {
        children: "事件触发"
      }), "并执行函数"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1）无名函数："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "obox.onclick = function() {}; //点击obox后就会触发函数function(){}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2)有名函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn() {}\nobox.onclick = fn; //此时fn后不能加小括号，加了就会立即执行---点击obox后就会执行函数fn\ndocument.onclick = fn; //document表示整个页面---点击页面后就会执行函数fn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "五函数的参数",
      children: "五、函数的参数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1参数的概念",
      children: "1.参数的概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "指执行函数给传给函数的内容，参数可以为任何值,任何数据\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2参数的分类",
      children: "2.参数的分类"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "实参"
      }), "：执行函数时，函数名后括号内的参数，实参被形参接受并保存"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "形参"
      }), "：定义函数时，function 后括号内的参数，相当于该函数的某个变量，只不过不用 var 声明，需要遵循变量的命名方式"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "function fn(a) {\n  //a为形参\n  console.log(a); //打印出123\n}\nfn(123); //123为实参\n//参数的传递过程如下图\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ ![img](JavaScript 函数.assets/Image [2].png)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3参数的一一对应",
      children: "3.参数的一一对应"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["​ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "形参的数量多于实参的数量"
      }), "：多出来的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "形参"
      }), "是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["​ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "实参的数量多于形参的数量"
      }), "：多出来的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "实参"
      }), "被传到函数中的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "arguments 数组对象"
      }), "中"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "形参相当于变量（可保存任何值），实参相当于赋的值\n\t形参 = 实参;//实参赋值给形参，可传递所有数据\nfunction fn(a,b,c){      //a = 1, b = 2, c = 3---实参的值一一对应传给形参\n    console.log(a+b+c);  //6\n}\nfn(1,2,3);//执行函数并传值\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {})]
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