"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[1884],{

/***/ 10985
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_engineering_performance_index_md_cd8_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-engineering-performance-页面性能优化的简单介绍-index-md-cd8.json
const site_docs_engineering_performance_index_md_cd8_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"engineering/performance/页面性能优化的简单介绍/index","title":"页面性能优化的简单介绍","description":"前言：为什么要进行页面性能优化","source":"@site/docs/engineering/performance/页面性能优化的简单介绍/index.md","sourceDirName":"engineering/performance/页面性能优化的简单介绍","slug":"/engineering/performance/页面性能优化的简单介绍/","permalink":"/docs/engineering/performance/页面性能优化的简单介绍/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"页面性能优化的简单介绍"},"sidebar":"engineering","previous":{"title":"性能优化","permalink":"/docs/category/性能优化"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/engineering/performance/页面性能优化的简单介绍/index.md


const frontMatter = {
	title: '页面性能优化的简单介绍'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、资源压缩与合并",
  "id": "一资源压缩与合并",
  "level": 2
}, {
  "value": "1.html 压缩",
  "id": "1html-压缩",
  "level": 3
}, {
  "value": "2.css 代码压缩：",
  "id": "2css-代码压缩",
  "level": 3
}, {
  "value": "3.js 的压缩和混乱",
  "id": "3js-的压缩和混乱",
  "level": 3
}, {
  "value": "4.文件合并",
  "id": "4文件合并",
  "level": 3
}, {
  "value": "二、利用浏览器缓存",
  "id": "二利用浏览器缓存",
  "level": 2
}, {
  "value": "1.缓存的分类",
  "id": "1缓存的分类",
  "level": 3
}, {
  "value": "1.1 强缓存",
  "id": "11-强缓存",
  "level": 4
}, {
  "value": "1.2 协商缓存",
  "id": "12-协商缓存",
  "level": 4
}, {
  "value": "2.缓存的机制",
  "id": "2缓存的机制",
  "level": 3
}, {
  "value": "3.用户行为对浏览器缓存的影响",
  "id": "3用户行为对浏览器缓存的影响",
  "level": 3
}, {
  "value": "三、使用 CDN",
  "id": "三使用-cdn",
  "level": 2
}, {
  "value": "1.CDN 是怎么做到加速的呢？",
  "id": "1cdn-是怎么做到加速的呢",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "前言：为什么要进行页面性能优化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "互联网有一项著名的 8 秒原则。用户在访问 Web 网页时，如果时间超过 8 秒就会感到不耐烦，如果加载需要太长时间，他们就会放弃访问。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大部分用户希望网页能在 2 秒之内就完成加载。事实上，加载时间每多 1 秒，你就会流失 7%的用户。8 秒并不是准确的 8 秒钟，只是向网站开发者表明了加载时间的重要性。那我们如何优化页面性能，提高页面加载速度呢？这是本文主要要探讨的问题，然而性能优化是个综合性问题，没有标准答案，想要面面俱到罗列出来，并非易事。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本文只是简单介绍了一下页面性能优化有哪些常用方法，给新手普及知识用。也是自我学习的一个过程"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一资源压缩与合并",
      children: "一、资源压缩与合并"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源压缩主要包括这些方面："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "html 压缩"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "css 压缩"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "js 的压缩和混乱"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "文件合并"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "资源压缩"
      }), "可以从文件中去掉多余的字符，比如", (0,jsx_runtime.jsx)(_components.strong, {
        children: "回车"
      }), "、", (0,jsx_runtime.jsx)(_components.strong, {
        children: "空格"
      }), "。你在编辑器中写代码的时候，会使用缩进和注释，这些方法无疑会让你的代码简洁而且易读，但它们也会在文档中添加多余的字节，这些字符就是网页中多余的东西，会影响网页的性能。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1html-压缩",
      children: "1.html 压缩"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["html 代码压缩就是压缩这些在文本文件中有意义，但是在 HTML 中不显示的字符，包括", (0,jsx_runtime.jsx)(_components.strong, {
        children: "空格"
      }), "，", (0,jsx_runtime.jsx)(_components.strong, {
        children: "制表符"
      }), "，", (0,jsx_runtime.jsx)(_components.strong, {
        children: "换行符"
      }), "等，还有一些其他意义的字符，如 HTML 注释也可以被压缩。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何进行 html 压缩："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用在线网站进行压缩(开发过程中一般不用)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "nodejs 提供了 html-minifier 工具"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "后端模板引擎渲染压缩"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2css-代码压缩",
      children: "2.css 代码压缩："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["css", (0,jsx_runtime.jsx)(_components.strong, {
        children: "代码压缩"
      }), "简单来说就是无效代码删除和 css", (0,jsx_runtime.jsx)(_components.strong, {
        children: "语义合并"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何进行 css 压缩："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsxs)(_components.strong, {
          children: ["使用在线网站进行压缩(开发过程中一般不用)（", (0,jsx_runtime.jsx)(_components.a, {
            href: "http://tool.oschina.net/jscompress/%EF%BC%89",
            children: "http://tool.oschina.net/jscompress/）"
          })]
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用 html-minifier 工具"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用 clean-css 对 css 压缩"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "书写 CSS 代码时，尽量用简写，写在一起。"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "CSS代码压缩样例",
        src: (__webpack_require__(50693)/* ["default"] */ .A) + "",
        width: "1240",
        height: "481"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3js-的压缩和混乱",
      children: "3.js 的压缩和混乱"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "js 的压缩和混乱主要包括以下这几部分："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "无效字符的删除"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "剔除注释"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码语义的缩减和优化"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "代码保护(代码逻辑变得混乱，降低代码的可读性，这点很重要)"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "代码保护，将某些需要保护的代码转成加密字符，类似于：（%61%6C%65%72%74%28%22%u9ED1%u5BA2%u9632%u7EBF%22%29%3B）加大别人拷贝你代码的难度"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如何进行 js 的压缩和混乱"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用在线网站进行压缩(开发过程中一般不用)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "使用 html-minifier"
        }), "工具**"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "使用 uglifyjs2 对 js 进行压缩"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其实 css 压缩与 js 的压缩和混乱比 html 压缩收益要大得多，同时 css 代码和 js 代码比 html 代码多得多，通过 css 压缩和 js 压缩带来流量的减少，会非常明显。所以对大公司来说，html 压缩可有可无，但 css 压缩与 js 的压缩和混乱必须要有！"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4文件合并",
      children: "4.文件合并"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将多个小文件合并为一个文件, 减少网络请求数.类似于雪碧图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "文件合并",
        src: (__webpack_require__(39581)/* ["default"] */ .A) + "",
        width: "739",
        height: "578"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从上图可以看出不合并请求有以下缺点："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "文件与文件之间有插入的上行请求，增加了 N-1 个网络延迟"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "压缩合并 css 和 js 可以减少网站 http 请求的次数"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二利用浏览器缓存",
      children: "二、利用浏览器缓存"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于 web 应用来说，缓存是提升页面性能的同时减少服务器压力的利器。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1缓存的分类",
      children: "1.缓存的分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "11-强缓存",
      children: "1.1 强缓存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "强缓存"
      }), "：不用请求服务器，直接使用本地的缓存。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "12-协商缓存",
      children: "1.2 协商缓存"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "协商缓存"
      }), "：浏览器发现本地有资源的副本，但是不太确定要不要使用,不知道内容是否更新，于是去问问服务器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2缓存的机制",
      children: "2.缓存的机制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主要过程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "缓存机制",
        src: (__webpack_require__(76177)/* ["default"] */ .A) + "",
        width: "901",
        height: "815"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3用户行为对浏览器缓存的影响",
      children: "3.用户行为对浏览器缓存的影响"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "1.地址栏访问，链接跳转是正常用户行为，将会触发浏览器缓存机制；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "2.F5 刷新，浏览器会设置 max-age=0，跳过强缓存判断，会进行协商缓存判断；"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3.ctrl+F5 刷新，跳过强缓存和协商缓存，直接从服务器拉取资源。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三使用-cdn",
      children: "三、使用 CDN"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "大型 Web 应用对速度的追求并没有止步于仅仅利用浏览器缓存，因为浏览器缓存始终只是为了提升二次访问的速度，对于首次访问的加速，我们需要从网络层面进行优化，最常见的手段就是 CDN（Content Delivery Network，内容分发网络）加速。通过将静态资源(例如 javascript，css，图片等等）缓存到离用户很近的相同网络运营商的 CDN 节点上，不但能提升用户的访问速度，还能节省服务器的带宽消耗，降低负载。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "CDN",
        src: (__webpack_require__(79887)/* ["default"] */ .A) + "",
        width: "827",
        height: "642"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1cdn-是怎么做到加速的呢",
      children: "1.CDN 是怎么做到加速的呢？"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其实这是 CDN 服务商在全国各个省份部署计算节点，CDN 加速将网站的内容缓存在网络边缘,不同地区的用户就会访问到离自己最近的相同网络线路上的 CDN 节点，当请求达到 CDN 节点后，节点会判断自己的内容缓存是否有效，如果有效，则立即响应缓存内容给用户，从而加快响应速度。如果 CDN 节点的缓存失效，它会根据服务配置去我们的内容源服务器获取最新的资源响应给用户，并将内容缓存下来以便响应给后续访问的用户。因此，一个地区内只要有一个用户先加载资源，在 CDN 中建立了缓存，该地区的其他后续用户都能因此而受益。"
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

/***/ 79887
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/CDN-c350e36e0c3b0179f0a1c2cf5e4cd975.png");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 50693
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/css代码压缩样例-c497ae2adf772480706d20099c2f8465.png");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 39581
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/文件合并-f7957c12d397856fd09369422a0cd4df.png");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 76177
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/缓存机制-d8f8268842955bac8ff7f86febd747c2.png");
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