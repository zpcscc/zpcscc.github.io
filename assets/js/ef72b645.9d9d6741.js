"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[3912],{

/***/ 72281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_intro_md_ef7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-intro-md-ef7.json
const site_docs_web_javascript_intro_md_ef7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/intro","title":"基础介绍","description":"一、是什么？","source":"@site/docs/web/javascript/intro.md","sourceDirName":"web/javascript","slug":"/web/javascript/intro","permalink":"/docs/web/javascript/intro","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"基础介绍"},"sidebar":"web","previous":{"title":"arguments","permalink":"/docs/web/javascript/arguments/"},"next":{"title":"js的异步","permalink":"/docs/web/javascript/js的异步"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/web/javascript/intro.md


const frontMatter = {
	title: '基础介绍'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、是什么？",
  "id": "一是什么",
  "level": 2
}, {
  "value": "1.JavaScript 与 HTML5 的关系",
  "id": "1javascript-与-html5-的关系",
  "level": 3
}, {
  "value": "二、做什么？",
  "id": "二做什么",
  "level": 2
}, {
  "value": "三、什么是行为？",
  "id": "三什么是行为",
  "level": 2
}, {
  "value": "四、js 的历史",
  "id": "四js-的历史",
  "level": 2
}, {
  "value": "五、js 的组成：",
  "id": "五js-的组成",
  "level": 2
}, {
  "value": "六、js 代码写在哪",
  "id": "六js-代码写在哪",
  "level": 2
}, {
  "value": "七、如何编写与运行 js？",
  "id": "七如何编写与运行-js",
  "level": 2
}, {
  "value": "1.外联 JS 的写法为：",
  "id": "1外联-js-的写法为",
  "level": 3
}, {
  "value": "2.内部 JS 的写法为：",
  "id": "2内部-js-的写法为",
  "level": 3
}, {
  "value": "3.错误的写法：",
  "id": "3错误的写法",
  "level": 3
}, {
  "value": "4.js 中的几种基础打印语句：由程序呈现出信息",
  "id": "4js-中的几种基础打印语句由程序呈现出信息",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "一是什么",
      children: "一、是什么？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JavaScript"
      }), "是一种直译式", (0,jsx_runtime.jsx)(_components.strong, {
        children: "脚本语言"
      }), "，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为 JavaScript 引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在 HTML（标准通用标记语言下的一个应用）网页上使用，用来给 HTML 网页增加动态功能。（未来有可能会发展成完善的编程语言）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1javascript-与-html5-的关系",
      children: "1.JavaScript 与 HTML5 的关系"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTML5 是一种新的技术，就目前而言，我们所知的 HTML5 都是一些标签，但是有了 JS 之后，这些标签深层的扩展功能才得以实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二做什么",
      children: "二、做什么？"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["页面分为：", (0,jsx_runtime.jsx)(_components.strong, {
        children: "结构"
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "样式"
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "行为"
      }), "\nHTML：结构\ncss：样式\njs：行为\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Javascript"
      }), "就是用来控制页面行为，对页面进行渲染，让页面有行为，让页面动起来"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三什么是行为",
      children: "三、什么是行为？"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "交互，互相回应\n\t人机交互\n\t\t动作、反映：如点击之后有变化。通过行为、事件触发\n\t前后端交互\n\t\t数据：登录注册\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四js-的历史",
      children: "四、js 的历史"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ JavaScript 在设计之初只是为了做表单验证。但是现如今，JavaScript 已经成为了一门功能全面的脚本语言，已经是 WEB 中不可缺少的一部分，如今的 JavaScript 是一门既简单又复杂的语言，说它简单是因为可能一小时就能学会，但是如果你要真正掌握它，可能就得需要个几年的时间了。\n​ NetScape 公司在 1995 年着手开发了一种名为 liveScript（用于网景浏览器）的脚本语言，为了营销目的，搭上当时媒体热炒的 Java 的顺风车，临时更名为 JavaScript。其实，JavaScript 和 Java 没有一点关系。JavaScript1.0 获得了巨大的成功。\nNetScape 公司趁热打铁继续发布了 JavaScript1.1 版本，使得 Web 获得更高的关注，同时奠定了自己在浏览器届的霸主地位。\n如果事情一直这样下去，那么 NetScape 可能依然是我们现代浏览器的霸主，可是在 1996 年互联网巨头微软公司进入浏览器领域，推出 JScript，和 NetScript 公司开始争夺博主地位。\n​ 最让人担心的问题也因此出现，当时的 JavaScript 和 JScript 是完全不同的两个版本，这个方向的语言没有一个标准存在，业内的吐槽日益严重。终于，多方联合共同制定了一个标准，这个标准就是 ECMAScript，ECMAScript 做为 JavaScript 实现的基础。虽然制定标准之花费了几个月，但是这几个月却对未来 20 年的 JavaScript 发展起到的决定性的作用。\n​ 此时经过 NetScape 和微软的争夺，各大互联网厂商都发现了浏览器这块巨大的蛋糕，于是一场激烈的厮杀就开始了......\n第一次浏览器世界大战开始\n​ 但是 NetScape 并没有放弃，在 1998 年公开源码，并重新命名为 Mozilla，并重写所有程序，在 2002 年发布了第一个浏览器版本 FireFox 登场，在 2004 年开始叫板 IE 浏览器，IE 推出 IE7 与之抗衡，拉开了第二次浏览器大战的序幕。\n第二次浏览器世界大战开始\n最后胜出的是用户"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "五js-的组成",
      children: "五、js 的组成："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.ECMAscript:\n\t是一个标准，它规定了语法、类型、语句、关键字、保留子、操作符、对象。（相当于法律）\n2.DOM:\n\t文档对象模型（html基本结构）DOM把整个页面映射成一个多层节点结构。HTML页面组成都是某种类型的节点，这些节点又包含着不同类型的数据\n3.BOM:\n\t浏览器对象模型，可以访问浏览器窗口的浏览器对象模型，对浏览器窗口进行操作。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "六js-代码写在哪",
      children: "六、js 代码写在哪"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "html代码写在哪：\n\thtml文件中\ncss写在哪：\n\tcss文件中（link标签引入），html文件的style标签中\njs代码写在哪：\n\tjs文件中（script标签引入），html文件的script标签中\n\n引用js绝对不能二合一写在一个script中，但可以分开用写多个script标签，多个标签可以共同作用\nscript是个双标签\n\t外部js：通过script标签的src引入\n\t内部js：写在在script标签包裹的范围内\n\t行内js（内联js）：不推荐，不建议使用\nTip：写代码时注意结构和样式的分离，结构和代码的分离。方便调试修改网页\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "七如何编写与运行-js",
      children: "七、如何编写与运行 js？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JavaScript 是一种脚本语言，他可以有两种方式在 HTML 页面进行引入，一种是外联，一种是内部。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1外联-js-的写法为",
      children: "1.外联 JS 的写法为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//写在html文件外部，通过script标签引入\n<script src=\"相对路径\"></script>\n//这是一条html语句，原则上可以放在html页面的任意位置，不用和link标签一样必须放在head部分\n///浏览器解析代码的顺序（从上到下，从左到右）\n//相对路径链接的是JavaScript文件，文件的扩展名为.js，如index.js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2内部-js-的写法为",
      children: "2.内部 JS 的写法为："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//js脚本写在html文件中的script标签内\n<script>//在script标签内写js脚本</script>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3错误的写法",
      children: "3.错误的写法："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "<script src=\"相对路径\">//在script标签内写js脚本</script>\n//不能在一个script标签内同时写路径和js脚本\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4js-中的几种基础打印语句由程序呈现出信息",
      children: "4.js 中的几种基础打印语句：由程序呈现出信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "alert();打印到弹出框（会中断网页的运行，然后跳出弹出框，不推荐）\ndocument.write();打印在网页页面中（可能会破坏网页布局，不推荐使用）\nconsole.log();打印到浏览器的控制台（不会影响网页，调试时推荐使用）\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上述打印语句都可直接识别并解析 html 的标签和转义字符"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "document.write('<strong>加粗的内容</strong>') //加粗的内容\ndocument.write('&lt;strong&gt;这是一些加粗的内容</strong>') //<strong>这是一些加粗的内容\n"
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