"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[8073],{

/***/ 35367
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_index_md_670_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-运行机制-index-md-670.json
const site_docs_web_javascript_index_md_670_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/运行机制/index","title":"运行机制","description":"​ 想要了解一门语言，最好的办法就是了解它的运行机制。掌握了运行机制，能够让我们在开发中少走许多弯路，写出高质量的代码。本文简单介绍什么是 JavaScript 的运行机制，给刚刚接触 JavaScript 的小白一个初步的了解，为将来打好基础。","source":"@site/docs/web/javascript/运行机制/index.md","sourceDirName":"web/javascript/运行机制","slug":"/web/javascript/运行机制/","permalink":"/docs/web/javascript/运行机制/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"运行机制"},"sidebar":"web","previous":{"title":"运算符","permalink":"/docs/web/javascript/运算符"},"next":{"title":"TypeScript","permalink":"/docs/category/typescript"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/web/javascript/运行机制/index.md


const frontMatter = {
	title: '运行机制'
};
const contentTitle = '浅谈 JavaScript 运行机制';

const assets = {

};



const toc = [{
  "value": "一、JavaScript 代码运行分两个阶段：",
  "id": "一javascript-代码运行分两个阶段",
  "level": 2
}, {
  "value": "二、JavaScript 运行机制的特点",
  "id": "二javascript-运行机制的特点",
  "level": 2
}, {
  "value": "三、单线程",
  "id": "三单线程",
  "level": 2
}, {
  "value": "1.什么是单线程",
  "id": "1什么是单线程",
  "level": 3
}, {
  "value": "2.为什么 JavaScript 是单线程",
  "id": "2为什么-javascript-是单线程",
  "level": 3
}, {
  "value": "3.单线程带来的问题及解决方法",
  "id": "3单线程带来的问题及解决方法",
  "level": 3
}, {
  "value": "四、同步和异步",
  "id": "四同步和异步",
  "level": 2
}, {
  "value": "五、理解 Event Loop（事件循环）",
  "id": "五理解-event-loop事件循环",
  "level": 2
}, {
  "value": "六、哪些语句会放入异步任务队列",
  "id": "六哪些语句会放入异步任务队列",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "浅谈-javascript-运行机制",
        children: "浅谈 JavaScript 运行机制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ 想要了解一门语言，最好的办法就是了解它的运行机制。掌握了运行机制，能够让我们在开发中少走许多弯路，写出高质量的代码。本文简单介绍什么是 JavaScript 的运行机制，给刚刚接触 JavaScript 的小白一个初步的了解，为将来打好基础。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一javascript-代码运行分两个阶段",
      children: "一、JavaScript 代码运行分两个阶段："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "预解析"
      }), "---把所有的函数定义提前，所有的变量声明提前，变量的赋值不提前"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "执行"
      }), "---从上到下执行（按照 js 运行机制）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二javascript-运行机制的特点",
      children: "二、JavaScript 运行机制的特点"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["1.JavaScript 是一门", (0,jsx_runtime.jsx)(_components.strong, {
        children: "单线程语言"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["2.", (0,jsx_runtime.jsx)(_components.strong, {
        children: "事件循环"
      }), "（Event Loop）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三单线程",
      children: "三、单线程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1什么是单线程",
      children: "1.什么是单线程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript 的一个语言特性（也是这门语言的核心）就是单线程，也就是说，同一个时间只能做一件事，当有多个任务时，只能按照顺序上一个任务完成了再执行下一个。上一个任务未完成则会一直等待。\nJavaScript 所有的多线程都是模拟出来的，本质还是单线程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2为什么-javascript-是单线程",
      children: "2.为什么 JavaScript 是单线程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript 的单线程而不是多线程，主要与它的用途有关。作为浏览器脚本语言，JavaScript 的主要用途是与用户互动，以及操作 DOM（文档对象模型）和 BOM（浏览器对象模型）。而多线程需要共享资源，多线程编程经常面临锁、状态同步等问题。这决定了 JavaScript 只能是单线程。比如，假定 JavaScript 同时有两个线程，一个线程在某个 DOM 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？会带来许多问题\n所以，为了避免复杂性，从一诞生，JavaScript 就是单线程，这已经成了这门语言的核心特征，将来也不会改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3单线程带来的问题及解决方法",
      children: "3.单线程带来的问题及解决方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单线程意味着同一时间只能进行一件事情,前面的事情结束才能执行后面的事件.当碰到需要时间的 IO 事件的时候问题就来了,必须等到这些结束后才往下进行但这时 CPU 是闲着的.这样浪费了很多计算机的性能\nJavaScript 语言的设计者意识到，这时主线程完全可以不管 IO 设备，挂起处于等待中的任务，先运行排在后面的任务。等到 IO 设备返回了结果，再回过头，挂起的任务继续执行下去。将所有任务分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）\n为了提高 CPU 的利用率，HTML5 提出 Web Worker 标准，允许 JavaScript 脚本创建多个线程，但是子线程完全受主线程控制，且不得操作 DOM。所以这个标准并没有改变 JavaScript 单线程的本质"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四同步和异步",
      children: "四、同步和异步"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "同步：\n\t在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；\n异步：\n\t不进入主线程、而进入\"任务队列\"（task queue）的任务，只有\"任务队列\"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "例题："
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log(1);\nsetTimeout(function() {\n  console.log(2);\n}, 0);\nconsole.log(3);\n//1 3 2 ---不是按照123的先后顺序输出。因为延时器触发了异步\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log(\"A\");\nwhile (true) {}\nconsole.log(\"B\");\n//A ---遇到死循环，程序卡在死循环。后面的语句执不了\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log(\"A\");\nsetTimeout(function() {\n  console.log(\"B\");\n}, 0);\nwhile (true) {}\n//A----只输出A，延时器异步等主线程结束后执行，主线程遇到死循环，后面的不再执行\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "五理解-event-loop事件循环",
      children: "五、理解 Event Loop（事件循环）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "异步执行"
      }), "的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "运行机制"
      }), "如下：理解", (0,jsx_runtime.jsx)(_components.strong, {
        children: "任务队列"
      }), "（消息队列）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（1）所有同步任务都在主线程上执行，形成一个", (0,jsx_runtime.jsx)(_components.strong, {
        children: "执行栈"
      }), "（execution context stack）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（2）主线程之外，还存在一个\"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "任务队列"
      }), "\"（task queue）。只要异步任务有了运行结果，就在\"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "任务队列"
      }), "\"之中放置一个事件"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（3）一旦\"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "执行栈"
      }), "\"中的所有同步任务执行完毕，系统就会读取\"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "任务队列"
      }), "\"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入", (0,jsx_runtime.jsx)(_components.strong, {
        children: "执行栈"
      }), "，开始执行"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（4）主线程不断重复上面的第三步"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["​ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "JavaScript 的运行机制"
      }), "：主线程从\"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "任务队列"
      }), "\"中读取事件，这个过程是循环不断的，所以整个的这种运行机制又称为", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event Loop（事件循环）"
      }), "。只要主线程空了，就会去读取\"", (0,jsx_runtime.jsx)(_components.strong, {
        children: "任务队列"
      }), "\"。这个过程会循环反复。以下这张图可以很好说明这点。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "运行机制",
        src: (__webpack_require__(5138)/* ["default"] */ .A) + "",
        width: "820",
        height: "454"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "六哪些语句会放入异步任务队列",
      children: "六、哪些语句会放入异步任务队列"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "一般来说，有以下四种会放入异步任务队列："
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "setTimeout（延时器）和 setInterval（定时器）"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DOM 事件"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ES6 中的 Promise"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Ajax 异步请求"
        }), "\n"]
      }), "\n"]
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

/***/ 5138
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/运行机制-86d0f7239f5c2c7084dc9432c807efcb.png");
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