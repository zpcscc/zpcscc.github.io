"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[5894],{

/***/ 29413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_css_index_md_5d6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-css-布局-元素水平垂直居中-index-md-5d6.json
const site_docs_web_css_index_md_5d6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/css/布局/元素水平垂直居中/index","title":"元素水平垂直居中","description":"本文将依次介绍在不同条件下实现水平垂直居中的多种方法","source":"@site/docs/web/css/布局/元素水平垂直居中/index.md","sourceDirName":"web/css/布局/元素水平垂直居中","slug":"/web/css/布局/元素水平垂直居中/","permalink":"/docs/web/css/布局/元素水平垂直居中/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"元素水平垂直居中"},"sidebar":"web","previous":{"title":"元素垂直居中","permalink":"/docs/web/css/布局/元素垂直居中/"},"next":{"title":"元素水平居中","permalink":"/docs/web/css/布局/元素水平居中/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/web/css/布局/元素水平垂直居中/index.md


const frontMatter = {
	title: '元素水平垂直居中'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、使用 text-algin 和 line-height",
  "id": "一使用-text-algin-和-line-height",
  "level": 2
}, {
  "value": "1.原理",
  "id": "1原理",
  "level": 3
}, {
  "value": "2.适用场景",
  "id": "2适用场景",
  "level": 3
}, {
  "value": "3.实现步骤",
  "id": "3实现步骤",
  "level": 3
}, {
  "value": "二、使用 table 布局",
  "id": "二使用-table-布局",
  "level": 2
}, {
  "value": "1.原理",
  "id": "1原理-1",
  "level": 3
}, {
  "value": "2.适用场景",
  "id": "2适用场景-1",
  "level": 3
}, {
  "value": "3.实现步骤",
  "id": "3实现步骤-1",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码",
  "level": 3
}, {
  "value": "三、使用定位",
  "id": "三使用定位",
  "level": 2
}, {
  "value": "方法一：使用 fixed+margin",
  "id": "方法一使用-fixedmargin",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-2",
  "level": 3
}, {
  "value": "2.适用场景",
  "id": "2适用场景-2",
  "level": 3
}, {
  "value": "3.实现步骤",
  "id": "3实现步骤-2",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-1",
  "level": 3
}, {
  "value": "方法二：使用 relative + absolute",
  "id": "方法二使用-relative--absolute",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-3",
  "level": 3
}, {
  "value": "2.适用场景",
  "id": "2适用场景-3",
  "level": 3
}, {
  "value": "3.实现步骤",
  "id": "3实现步骤-3",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-2",
  "level": 3
}, {
  "value": "四、弹性盒子 flex 布局",
  "id": "四弹性盒子-flex-布局",
  "level": 2
}, {
  "value": "方法一：justify-content+align-items",
  "id": "方法一justify-contentalign-items",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-4",
  "level": 3
}, {
  "value": "2.适用场景",
  "id": "2适用场景-4",
  "level": 3
}, {
  "value": "3.实现步骤",
  "id": "3实现步骤-4",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-3",
  "level": 3
}, {
  "value": "方法二：flex/grid 与 margin (最简单写法)",
  "id": "方法二flexgrid-与-margin-最简单写法",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-5",
  "level": 3
}, {
  "value": "2.适用场景",
  "id": "2适用场景-5",
  "level": 3
}, {
  "value": "3.实现步骤",
  "id": "3实现步骤-5",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-4",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文将依次介绍在不同条件下实现", (0,jsx_runtime.jsx)(_components.strong, {
        children: "水平垂直居中"
      }), "的多种方法"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "水平垂直居中"
      }), "是在写网页时经常会用到的需求，在上两篇博客中，分别介绍了水平居中和垂直居中的方法。本文的水平垂直居中就是将之前的水平居中和垂直居中用到的方法综合起来。用到的原理都是一样的。相信掌握水平居中和垂直居中的 方法后，就能自己总结如何实现水平垂直居中"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "::: tip\n下文中说的适用场景只是举了几个简单的例子方便读者理解。实际应用场景太复杂，生搬硬套容易出错。最重要的是掌握各种方法能够实现居中的原理。只要掌握了原理，那么不管问题怎么变都可以根据自己的理解选择合适的方法。\n:::"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一使用-text-algin-和-line-height",
      children: "一、使用 text-algin 和 line-height"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 text-algin 属性的 center 值，实现水平居中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用 line-height 属性，使其的值等于父元素的高度，实现垂直居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两者综合实现水平垂直居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2适用场景",
      children: "2.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）通常用于可以设置行高的元素上"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3实现步骤",
      children: "3.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）在父元素上设置文本水平居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "text-algin: center;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "文字水平垂直居中1",
        src: (__webpack_require__(15054)/* ["default"] */ .A) + "",
        width: "316",
        height: "110"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）在子元素上设置行高等于父元素高度"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "line-height: 100px;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "文字水平垂直居中2",
        src: (__webpack_require__(42885)/* ["default"] */ .A) + "",
        width: "311",
        height: "108"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>水平垂直居中</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #222222;\n        text-align: center; /*设置水平居中*/\n      }\n      p {\n        line-height: 100px; /*设置行高等于父元素高度实现垂直居中*/\n        margin: 0; /*清除外边距的影响*/\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <p>水平垂直居中</p>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二使用-table-布局",
      children: "二、使用 table 布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-1",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将元素转为 table 类型。利用 vertical-align 属性进行垂直居中，子元素再使用 margin 进行水平居中最终实现水平垂直居中（vertical-algin 居中需要有参考物，否则不能实现居中。在表单元格中可以直接设置）"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2适用场景-1",
      children: "2.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）有宽度的子元素"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3实现步骤-1",
      children: "3.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）父元素将类型转换为 table-cell"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "display: table-cell;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "table居中1",
        src: (__webpack_require__(74905)/* ["default"] */ .A) + "",
        width: "307",
        height: "104"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）父元素设置 vertical-align 实现垂直居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "vertical-align: middle;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "table居中2",
        src: (__webpack_require__(60898)/* ["default"] */ .A) + "",
        width: "312",
        height: "114"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）子元素设置 margin 属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "margin: 0 auto;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "table居中3",
        src: (__webpack_require__(24555)/* ["default"] */ .A) + "",
        width: "309",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>水平垂直居中</title>\n    <style>\n      * {\n        margin: 0;\n        padding: 0;\n      }\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #333;\n        display: table-cell;\n        vertical-align: middle;\n      }\n      .box .child {\n        width: 50px;\n        height: 50px;\n        background: red;\n        margin: 0 auto;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\"></div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三使用定位",
      children: "三、使用定位"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法一使用-fixedmargin",
      children: "方法一：使用 fixed+margin"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-2",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置上下左右的定位属性，然后设置 margin 上下左右都为 auto 实现居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2适用场景-2",
      children: "2.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）未知大小元素在浏览器中居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3实现步骤-2",
      children: "3.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）子元素设置固定定位（没有变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "position: fixed;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）子元素设置上下左右的定位值为 0（没有变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "left: 0;\nright: 0;\ntop: 0;\nbottom: 0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）子元素设置 margin"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "margin: auto;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "未知大小元素水平垂直居中",
        src: (__webpack_require__(40121)/* ["default"] */ .A) + "",
        width: "546",
        height: "518"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-1",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例 1：未知大小的元素在浏览器可视窗口中水平居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>未知大小的元素在浏览器可视窗口中水平居中</title>\n    <style>\n      img {\n        position: fixed;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        margin: auto;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <img src=\"../images/img13.jpg\" alt=\"\" />\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例 2：已知大小的元素在浏览器可视窗口中水平居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>已知大小的元素在浏览器可视窗口中水平居中</title>\n    <style>\n      .box {\n        width: 100px;\n        height: 200px;\n        background: #f00;\n        position: fixed;\n        left: 50%;\n        top: 50%;\n        margin: -100px 0 0 -50px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\"></div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法二使用-relative--absolute",
      children: "方法二：使用 relative + absolute"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-3",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过父元素设置相对定位，子元素设置绝对定位。利用 top 值和 left 值进行居中移动，再使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: "margin"
      }), "或", (0,jsx_runtime.jsx)(_components.strong, {
        children: "transform"
      }), "调整位置"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Tip：注意元素定位是以元素的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "某个边"
      }), "或者", (0,jsx_runtime.jsx)(_components.strong, {
        children: "某个角"
      }), "作为参考，而不是以元素的中心点为参考"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["例：单个使用，是以", (0,jsx_runtime.jsx)(_components.strong, {
        children: "边框"
      }), "为参考，两个组合使用是以", (0,jsx_runtime.jsx)(_components.strong, {
        children: "角"
      }), "为参考点"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）**top：**以元素上边框为参考，top：50px；就是元素上边框距离父元素上边框 50px"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）**right：**以元素右边框为参考，right：50px；就是元素右边框距离父元素右边框 50px"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（3）", (0,jsx_runtime.jsx)(_components.strong, {
        children: "left"
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: "top"
      }), "组合使用：以元素的左上角的点为参考，top：50px；left：50px；表示元素左上角的点距离父元素上边框 50px，距离父元素左边框 50px；"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（4）", (0,jsx_runtime.jsx)(_components.strong, {
        children: "right"
      }), "和", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bottom"
      }), "组合使用：以元素的右下角的点为参考，bottom：50px；right：50px；表示元素右下角的点距离父元素下边框 50px，距离父元素右边框 50px；"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（5）其他各种组合同理，两个对立方向的属性不能同时组合使用。例如 top 和 bottom 同时使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: "以 top 为准"
      }), "，bottom 会失效。left 和 right；同时使用的话会", (0,jsx_runtime.jsx)(_components.strong, {
        children: "以 left 为准"
      }), "，right 会失效。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（6）所以 top 和 left 定位 50%，是子元素边框或某个角移动到 50%的位置，还需要移动回来子元素自身一半的长度，达到真正的居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "定位居中原理",
        src: (__webpack_require__(17940)/* ["default"] */ .A) + "",
        width: "656",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2适用场景-3",
      children: "2.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）已知大小元素在父元素中居中（margin 属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）未知大小元素在父元素中居中（transform 属性，有兼容问题）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）浮动元素居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3实现步骤-3",
      children: "3.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）先将父元素设置为相对定位 relative（无变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "position: relative;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）将子元素设置为绝对定位 absolute（子绝父相）（无变化）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "position: absolute;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）向右移动子元素，向下移动子元素，移动距离为父容器的一半（50%）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "top: 50%;\nleft: 50%;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "定位居中1",
        src: (__webpack_require__(30030)/* ["default"] */ .A) + "",
        width: "314",
        height: "214"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "tip：此时元素的左上角在父元素的中心点"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（4）通过向左和向上移动子元素的长度的一半使子元素整体水平居中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/*margin实现*/\nmargin: -25px 0 0 -25px;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "定位居中1",
        src: (__webpack_require__(84037)/* ["default"] */ .A) + "",
        width: "319",
        height: "212"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/*transform实现*/\ntransform: translate(-50%, -50%);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "transform居中",
        src: (__webpack_require__(79194)/* ["default"] */ .A) + "",
        width: "310",
        height: "213"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-2",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例 1：已知大小元素在父元素中水平垂直居中（margin 属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>已知大小元素在父元素中水平垂直居中</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 200px;\n        border: 1px solid #333333;\n        position: relative;\n      }\n      .box .child {\n        width: 50px;\n        height: 50px;\n        background: #222222;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -25px 0 0 -25px;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\"></div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例 2：未知大小元素在父元素中水平垂直居中（transform 属性）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>未知大小元素在父元素中水平垂直居中</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 200px;\n        border: 1px solid #333333;\n        position: relative;\n      }\n      .box .child {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">我是transform居中</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四弹性盒子-flex-布局",
      children: "四、弹性盒子 flex 布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法一justify-contentalign-items",
      children: "方法一：justify-content+align-items"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-4",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["css3 中的弹性盒子是布局神器，并且可达到某些自适应变化的效果。利用 flex 布局，其中", (0,jsx_runtime.jsx)(_components.strong, {
        children: "justify-content"
      }), " 用于设置或检索弹性盒子元素在主轴（默认左右横轴）方向上的对齐方式；而", (0,jsx_runtime.jsx)(_components.strong, {
        children: "align-items"
      }), "属性定义 flex 子项在 flex 容器的当前行的侧轴（默认上下纵轴）方向上的对齐方式。不能兼容低版本的 IE 浏览器。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2适用场景-4",
      children: "2.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）已知元素大小居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）未知元素大小居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）多个元素同时居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3实现步骤-4",
      children: "3.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）父元素开启弹性盒子"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "display: flex;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "flex居中1",
        src: (__webpack_require__(8108)/* ["default"] */ .A) + "",
        width: "216",
        height: "115"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）父元素设置主轴居中（对子元素生效）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "justify-content: center;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "flex居中2",
        src: (__webpack_require__(28167)/* ["default"] */ .A) + "",
        width: "215",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（3）父元素设置侧轴居中（对子元素生效）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "align-items: center;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "flex居中3",
        src: (__webpack_require__(9854)/* ["default"] */ .A) + "",
        width: "217",
        height: "110"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-3",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>未知大小元素在父元素中水平垂直居中</title>\n    <style>\n      .box {\n        height: 100px;\n        width: 200px;\n        border: 1px solid #222222;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">flex居中</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "方法二flexgrid-与-margin-最简单写法",
      children: ["方法二：flex/grid 与 margin", ":auto", " (最简单写法)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-5",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "父元素开启弹性盒子布局或者网格布局，之后子元素利用 margin 的自动值，实现居中（不能兼容低版本的 IE 浏览）"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2适用场景-5",
      children: "2.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）未知元素大小居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）已知元素大小居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3实现步骤-5",
      children: "3.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）给父元素开启弹性盒子布局或者网格布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-css",
        children: "/*开启弹性盒子布局*/\ndisplay: flex;\n/*开启网格布局*/\ndisplay: gird;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（2）子元素设置 margin 值实现居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-CSS",
        children: "marign：auto;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "flex或gird居中",
        src: (__webpack_require__(43869)/* ["default"] */ .A) + "",
        width: "215",
        height: "113"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-4",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\" />\n    <title>未知大小元素在父元素中水平垂直居中</title>\n    <style>\n      .box {\n        height: 100px;\n        width: 200px;\n        border: 1px solid #222222;\n        /* display: flex; */\n        display: grid;\n      }\n      .child {\n        margin: auto;\n      }\n    </style>\n  </head>\n\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">flex或gird居中</div>\n    </div>\n  </body>\n</html>\n"
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

/***/ 8108
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAABzCAYAAAD6+8zAAAAEZElEQVR4nO3cvU4jVxyG8XeivQhbIgU4V7AVdomUC4gRSB5KynQR3c66MHaHttsySuWxlJWdC1iJJpKHiisIcrGW8F2cLcyHDWM8G/zyYZ6fZAkNxhwhHp3/HCOiEEIQAIufnnsBwDojMMCIwAAjAgOM3uVdrFQqT70O4NW5uLhY+pzcwIp+MfBWFd2EGBEBIwIDjAgMMCoQWKZOFCmKIkX7qSbjVLtRpN3exL+6FciOI0XH2XMvA2/UksAmSvdrSva6ugxB4e9YJdtSZkIu+Oic2RYDrMSSwEYafZHqv+0Yw5pVV/dbUAjLHkO1n2Q9wOOszT1Ydpy/y9Wakpq1/F2Q0RFmCwOb9HYVRTUlkgZxWdGy+66zzsJf3ulr3R3prkbC/VS3rzrQwc9FxsPpuu6qp5f3drthS1JreO/6ZVov/EMC/q+FgZUa/ZtR7PoXt99YMCiedRRVE7WzmRGuWbuJrNT4rO6elFQ7us4uO64pUVvDufs6RkSslxWMiJk61URqDfVh+/paVYdpXWqeXgVVUvypq7oSnfQm0jjVSVNqZx9ULfAdJr3dO+NcVR9CmPl+wMv0+MDOTpVIav86n0pp872kc43GVxc2Yn1O6xrEf6rz14EGc0Feyx8Ry/Fg4X3Ua3m7AG/Twr9F/FFJNcq9LxqNJW1MPy41jtSOa0qabQ1D3t5VV/dbX/HG/NVJb1fl/44UPj683w3isqI47zM1Rc2cy62jB18PeKwVnSIuvnea3aUmvZOrCBPV7p7gjUc613tt3onrh1bBIQdemMcHtr2jtgbq/7tkVBun+j0eTA9CsrbUrM2fKo5HGkiavrldZES8PTCRpOrHBw5hcpQa/aU7IvBYK9jBpgcag7g8H8xZZ+ZgYqL0jwMN9ro63Ja0fXjvVHEyOpdaOzeHHnm70c0j4wwRr8NKRsRSo6/LtK6kOrPDfN252SGy47IOvtTV/XR9JH97qjgdFSc6/Weg+i+bq1gO8HKEHFtbW3mXfbJ2kNphGEII4TJ09xSkZY/r5z9s2FJQq8gzgeKKNvIi/lQq+5qonh7OvSfGiIh1EIVw/x+PVioV/mUA8ICijbyIHQxYVwQGGBEYYERggBGBAUYEBhgRGGBEYIARgQFGBAYYERhgRGCAEYEBRgQGGBEYYERggBGBAUYEBhgRGGBEYIARgQFGBAYYERhgRGCAEYEBRgQGGBEYYERggBGBAUYEBhgRGGBEYIARgQFGBAYYERhgRGCAEYEBRgQGGBEYYERggBGBAUYEBhgRGGBEYIARgQFGBAYYERhgRGCAEYEBRgQGGBEYYERggBGBAUYEBhgRGGBEYIARgQFGBAYYERhgRGCAEYEBRgQGGBEYYERggBGBAUYEBhgRGGBEYIARgQFGBAYYERhgRGCAEYEBRgQGGBEYYERggBGBAUYEBhgRGGBEYIDRu0WfqFQqT7kOYC1FIYTw3IsA1hUjImBEYIARgQFGBAYYERhgRGCAEYEBRt8B6ojZdGF9ENYAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 28167
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANcAAABvCAYAAAB/5FWtAAAEZElEQVR4nO3cvW4iVwCG4W+ivQgs2YVNriDVgpTGd5BBWDKUKd1Z28FS2NCttku5SjVjKciTO3ATCajSpN0VBZbgLk4KYxbjwbD2fhCT95FGsoe/g8WrczjGjkIIQQC+ux+2PQBgVxEXYPIm72SxWNz0OIBX58uXL09enhvXOjcE/s/WmYBYFgImxAWYEBdgQlwvMLmqKIoiRVGkzkDqX0aKoo762x7YOm5TVaKK0tttD2R3EddzDTraq2Vq94NCCGq89T3UfMRrHSepJr7hYE3E9UyT4d+S2jo2RvXARU8hhJXHOI03NCCsQly77jZVJW92O6grU6b6Qd7sx3LxeyCub9ZXJ4q0V8skNVWOVr3Pmig9WfbCvbuvxWXc/TKwM5g72SqvtSS8G9eitnqLs9woUaxYyWhx9uup/eKfESTieoaSGrPl1/2LtqFS7nUnSk/2VFei8WzZJtUP7gMrqdFvS926zq6med2mOqtlitPxw/dxLAtfHeIymlydqd6NlXysqTA9Vzh9p7YyXf81jeltQ70LKat9Ul9S//e6smqi304Ly+52Tl+dhSVc4fRa4Y+vj4ftWfrxJ7zURDd/ZlI10fH+/PlDHVal5uehNE2g9L6ndqusD5eSWrGSUU4crbKi1pKHOohUf3Syrd7SGRWbQFxu3br2oscvfWmoiUr3eenXNFaz1lScjlXbz7n6RU/h/WIqfXWiDzocXeffZqapctTMvSTLDTNW8tTdYS0sC92WvVd6sHTr69N0IyKrnT3aqRt+zhT/ePiCQbChsQ3EZVPQ8S+x1LpZ+YmN/mVZzWqicRgrqWaqn8/vHk40/Gf65aCzsDtYVjNnO71yNbf3uF/T9TctD0tqhFUzIdZBXEZ3mxdNlU8expKezG1CDDoqt6T2eU0FFVQ7X9g91FDDbqzKz/fzXM4sNDvGSqqbfIZ4CnFZldQIPbW7de3NZpYz6eN0ZrhNVSk1pYve12332e7hdHk4uFFTP+mQmeT1CTmOjo7yTmPjxiGpKsTp+O7bfjtIWnnMrv+UURJixSEZeZ/BrlqnEWau/7LbG11323r34HdeLAtfiyiEx/9arVgs8mf+wBPWaYSZCzAhLsCEuAAT4gJMiAswIS7AhLgAE+ICTIgLMCEuwIS4ABPiAkyICzAhLsCEuAAT4gJMiAswIS7AhLgAE+ICTIgLMCEuwIS4ABPiAkyICzAhLsCEuAAT4gJMiAswIS7AhLgAE+ICTIgLMCEuwIS4ABPiAkyICzAhLsCEuAAT4gJMiAswIS7AhLgAE+ICTIgLMCEuwIS4ABPiAkyICzAhLsCEuAAT4gJMiAswIS7AhLgAE+ICTIgLMCEuwIS4ABPiAkyICzAhLsCEuAAT4gJMiAswIS7AhLgAE+ICTIgLMCEuwIS4ABPiAkyICzAhLsCEuAAT4gJMiAswIS7AhLgAE+ICTN4su6BYLG5yHMDOiUIIYduDAHYRy0LAhLgAE+ICTIgLMCEuwORfwfrdJP0rhDIAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 9854
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAABuCAYAAACqcba7AAAEZElEQVR4nO3asW4iVwCF4TORHwJLduElT5BqQUrjN8ggLBnKlO6s7WApbOhW26VcpZqxFOTJG7iJBFRp0i6iwBK8xU1hYDEGw65zIGb/T0KyZ8bDxeLXvVw7CiEEAbD5YdcDAPbdwaoT+Xx+m+MAXqV+v7/2mpWRbXoD4Hu16UTEchEwIzLAjMgAMyIDzIgMMCMywIzIADMiA8yIDDAjMsCMyAAzIgPMiAwwIzLAjMgAMyIDzIgMMCMywIzIADMiA8yIDDAjMsCMyAAzIgPMiAwwIzLAjMgAMyIDzIgMMCMywIzIADMiA8yIDDAjMsCMyAAzIgPMiAwwIzLAjMgAMyIDzIgMMCMywIzIADMie6HxTUlRFCmKIrV6Uvc6UhS11N31wDZxn6oUlZTe73og+43IXqLX0mElU7MbFEJQ7a3vqeZj3uhxlmrsGw6+ApG9wHjwt6SmTo1xPXLVUQhh7WOUxlsaEDZBZN+D+1SlZbPdcVWZMlWPl82GLCP/K0T2TbpqRZEOK5mkuorRus9hY6Vnq97AD/daXN5Nl4et3tzBRnGjpeLDuBY11Vmc9YaJYsVKhouzYUfNF/+OMEVk36Sg2mxZNn3z1lRYeu1Y6dmhqko0mi3npOrxNLSCat2m1K7q4maS2X2qi0qmOB09/pzHcvFVIjKz8c2Fqu1YyceKcpNjufN3airT7V+TqN7W1LmSssondSV1f68qKyf67Ty36rZzumotLO1y57cKf3x5PuzWwa4HsN/Guvszk8qJTo/mj5/opCzVPw+kSQqF9x01G0V9uJbUiJUMl0TSKCpqrHiq40jVJweb6qycYbEtRLYN7aoOo6cJSAONVZhmpl/TWPVKXXE6UuVoyeVXHYX3i8l01Yo+6GR4u/xnZuoqRvWlZ7KlgcZKnrsdNsZycRtWfZZ6tKTr6tNkwyKrXDzZ2Rt8zhT/ePKCQbDxsStEZpXT6S+x1Lhb+x8g3eui6uVEozBSUs5UvZzfbRxr8M/ky15rYTexqPqSbfjSzdxe5VFFt1+1bCyoFtbNjNgUkZk9bHLUVTx7HE16NrdZ0Wup2JCalxXllFPlcmG3UQMN2rFKP0/nvSWz0uwxUlLe5ivEOkRmV1AtdNRsV3U4m2kupI+TmeI+ValQl646X7brZ7uNk2Vj7051/aQTZpbXKazw5s2bVaewVaOQlBXidPTwbbcZJK19zK5/zjAJseKQDL2vYF9t2ggz2f/d/Z1u2029e/Q3M5aLr0kUQgjLTuTzefX7/W2PB3g1Nm2EmQwwIzLAjMgAMyIDzIgMMCMywIzIADMiA8yIDDAjMsCMyAAzIgPMiAwwIzLAjMgAMyIDzIgMMCMywIzIADMiA8yIDDAjMsCMyAAzIgPMiAwwIzLAjMgAMyIDzIgMMCMywIzIADMiA8yIDDAjMsCMyAAzIgPMiAwwIzLAjMgAMyIDzA6eO5nP57c1DmBvRSGEsOtBAPuM5SJgRmSAGZEBZkQGmBEZYPYvt/vlGuSTUsQAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 43869
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 74905
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATMAAABoCAYAAACdZhfeAAABnUlEQVR4nO3XsW0DMRBFwZWhjo79V3CqiSrA4dkg8DATMvrRw/J1Xde+P59J2Pv0AuCfrbXmvu9f7z8HtgD8OTEDEsQMSBAzIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyABDEDEsQMSBAzIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyABDEDEsQMSBAzIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyABDEDEsQMSBAzIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyAhPfMzOx9eAbAMy4zIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyABDEDEsQMSBAzIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyABDEDEsQMSBAzIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyABDEDEsQMSBAzIEHMgAQxAxLEDEgQMyBBzIAEMQMSxAxIEDMgQcyABDEDEsQMSBAzIOE9M7PWOr0D4JHX3nufHgHwlG8mkCBmQMIXbMcQZa0GVZkAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 60898
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAByCAYAAADHy83UAAACHklEQVR4nO3dMYrUYACG4UyMrUxhIdiZK+TqspfIEQb0ABYWClYbC2Etdxcm/PryPFWKv/iql8yEyVzWdT1ut9sEUDOPHgBwFoEDspZpmqaHzw+jdwDc3WVd1+N6vY7eAfAq+74/e2Z5zWGAf8G2bS865zs4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7Imqf57egNAKeYP376MHoDwCnm9++W508B/Ifm5c3oCQDn8JAByJofj9ETAM4xf//xOHoDwCnmL1+/jd4AcIp5+vVz9AaAU3jIAGQJHJAlcECWwAFZAgdkCRyQJXBA1t9XiVwuA2fc0eG3Z8Af7uCALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CArOXp6jgGzgC4P3dwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckPX0x8/bto3cAXB3yzRN077vo3cA3J2PqECWwAFZAgdkCRyQJXBAlsABWQIHZP0GaGEfCG9ev/0AAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 24555
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATUAAABvCAYAAACNfVchAAACE0lEQVR4nO3dMarUUACG0UyMrUxhIdiZLWTr8jaRJTzQBVhYKFi92GmjPIQLVz/PKTMp/uojmTCZ277v1+Pj4wJQsM4eADDStizL8vD+YfYOgCFu+75f9/t99g6AP3Ke5y+Pb8+dAPC3OY7jt5/5Tg1IETUgRdSAFFEDUkQNSBE1IEXUgBRRA1LWZX05ewPAMOvbd29mbwAYZn39anv+LIB/xLq9mD0BYBwPCoCU9emaPQFgnPXzl6fZGwCGWT98/DR7A8Aw6/Lt6+wNAMN4UACkiBqQImpAiqgBKaIGpIgakCJqQIpXdPzPbrfZC8a4/NaPn1ypASmiBqSIGpAiakCKqAEpogakiBqQImpAiqgBKaIGpIgakCJqQIqoASmiBqSIGpAiakCKqAEpogakiBqQImpAiqgBKaIGpIgakCJqQIqoASmiBqSIGpAiakCKqAEpogakiBqQImpAiqgBKaIGpIgakCJqQIqoASmiBqSIGpAiakCKqAEpogakiBqQImpAiqgBKaIGpIgakCJqQIqoASnb7AFMdF2zF8BwrtSAFFEDUkQNSBE1IEXUgBRRA1JEDUgRNSBF1IAUUQNSRA1IETUgRdSAFFEDUkQNSBE1IEXUgBRRA1JEDUgRNSBF1IAUUQNSRA1IETUg5cefGR/HMXMHwBDbsizLeZ6zdwAM4fYTSBE1IEXUgBRRA1JEDUj5DjY9HwKmHq3mAAAAAElFTkSuQmCC");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 79194
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 30030
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAADWCAYAAABBs04RAAADHUlEQVR4nO3X0WnDMABF0aZ4E6/g/SfICppFXSAhlMZRuT7n08Lwvi7Sbc45vwDCvlcPADib0AF5QgfkCR2QJ3RA3vbo43Ecn94B8Cf3+/3p2cPQvfoJ4D95dTnzdAXyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogb1s9gGvZ9331hLcYY6yewC+40QF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF52+oBXMsYY/UELsiNDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsgTOiBP6IA8oQPyhA7IEzogT+iAPKED8oQOyBM6IE/ogDyhA/KEDsjbnh0cx/HJHQCnuc055+oRAGfydAXyhA7IEzogT+iAPKED8n4AlekV4N9IzCYAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 84037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT8AAADUCAYAAADqUiReAAADFUlEQVR4nO3X0WnDMABF0aZ4E6+g/SfICppF3SBtILUM95xfC/O+LtJjrbW+AGK+dw8A2EH8gCTxA5KOVx/HGFftAPiI5/P5p3Mv4/fOjwB2e+fC5tkLJIkfkCR+QJL4AUniBySJH5AkfkCS+AFJ4gckiR+QJH5AkvgBSeIHJIkfkCR+QJL4AUniBySJH5AkfkCS+AFJ4gckiR+QJH5AkvgBSeIHJIkfkCR+QJL4AUniBySJH5AkfkCS+AFJ4gckiR+QJH5AkvgBSeIHJIkfkCR+QJL4AUniBySJH5AkfkCS+AFJ4gckiR+QJH5AkvgBSeIHJIkfkCR+QJL4AUniBySJH5AkfkCS+AFJ4gckiR+QJH5AkvgBSeIHJIkfkCR+QJL4AUniBySJH5AkfkCS+AFJ4gckiR+QJH5AkvgBSeIHJIkfkHTsHsD9nOe5e8JHzDl3T+DG3PyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyApGP3AO5nzrl7Avw7Nz8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyAJPEDksQPSBI/IEn8gCTxA5LED0gSPyBJ/IAk8QOSxA9IEj8gSfyApOO3A2OMK3YAXOqx1lq7RwBczbMXSBI/IEn8gCTxA5LED0j6AVLsFdyECzbLAAAAAElFTkSuQmCC");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 17940
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/定位居中原理-2c35c1f24d13a47c7ba0c7379b5dc88a.png");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 15054
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAABuCAYAAAC6NK9OAAAFdklEQVR4nO3avW7iaBiG4YdVDoJImyJh22lSBaRt5gzWiEhANfV2o+lIKAjpRtttvRWONBHsAayUZiQ71TTbbpQikcxZfFsQfmJsMJDw996X5CJO7BiKW+9nO+eccwIAA37a9AUAwLoQPABmHCTtLBQK674OAFjJw8PD3L9JDF7WgwFgG2Qd0ljSAjCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4AEwg+ABMIPgATCD4O2R/k1Zuatw05chqS//PKdcbriV5T9nO6Z801/HBSYKr3Jb8v3hvRA8c+Ixyrpda5iC/k15zt/+Lv3h5Nxw66r288vB99cpxxyqfiv1aoep5x3HMNT1gtd/fb+Brxpbh+Dtm38fFZ+RwqvJCSuv2rfJGI23yPekVpD4O+caKg7PUO3OOX4icHFnjZTzR+pUJM+PUn7v1K3mJ07kqfOU/Hevt0Dtt/x+sdMI3r657epuYvkYXuVUavbU/T6Zwb788yzLTEnPvsrn/lREVzU9JaZPeG+9zA2vkqfAUlNSs5Q8JbLU3QsEb9ckLgnHy02pp/pfg58GsRtMQq+no7xqn09VP5oTvWdf5aO69OF4Ymf6cvKw1ksPRtJ9vNRpcrwFrbSL66l+lGU5W9JFwtFJk2TQSr6myPdmfEnYJQRv18SXhGFbqhxrlKSKJ6/5VeXzYexSlpdnDblwRvSGsfMjdS+LGueyqMZkCCodRSlL4qA1GZYZy9ylsKTF4gjejgv/uZD328dxkD580ZdWT73btoJ5kTlrKPI1mgjH+vI/13UaxifDN5Y6DcaWmQuYflI9CHTj7E2vHDuK4O2yZ19fm57Kv76OUvFTR54udJfhyWS+2pW7LMb3qvYtORKT994Oaz3ptq7DlCVtqRm7Jxe/D/YOS9pZy+pNvvKCLeESnJycJO3GlglacmoFo58j3xv9HPmek9ouiB0z2K/ltlYwfa5Kx0UJ/394fZ4fuSSLXMf0OQLXluc6TynnbcU/dcL3tuJnx3bJ2iwmvF11fz24R/cpPp0N5Kt/qlO5UCn2hDXtlRI397UUlzAJrmjZCe/5UT90quMV7gny0MKoVWqJDXnqOC9h8pmebgLXXmA6yTIdjc658PZ6IltpwgvbL9Nr5DqVLOeYnnQTP1kr+3eF7cKEt69enp72WkGGBwpFNVygdrOk3Ju9Szd+ShvfZk+ICQ9Qlpzw+o8/pNbH0YvQs15WdiHPaDFG8HZM/3tXvUpHUcLy8vG/nrxfjmN7i2q4SB3VdbgXL8/2dfd30ucEMlhlPMTmvb4Bn23plibbkna5Bx/DZelSDwyGW6XjotFy1jnHkhYvsjbr4H1zivdWvHRyl+v9n/lqV6663LGrXm94lZPnR5qcbz0/Sl/e318r98bPWrC7cs45F99ZKBT08PCwiesBgIVlbRb38ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYQfAAmEHwAJhB8ACYcZD2i0KhsM7rAIB3l3POuU1fBACsA0taAGYQPABmEDwAZhA8AGb8Dw8p+ug5roz7AAAAAElFTkSuQmCC");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 42885
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABsCAYAAAAPHPWyAAAFa0lEQVR4nO3aMW/idhjH8Z+rvIhEaoaErrdkCkhd7h3UiEiB6eZup9tIGIBsp26dO+FIF0FfQKUsJ9mZbulalOEimXfx70AAx9jEAXLAk+9H8oATHIOUr56/bc855wQAxvy06RMAgNewl3xRKpU2dR4AsJThcJi5fy+9I+8XAWDbLBrIWJYCMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgZMLquyutEmz4NSSMFZ548b7JVFTwUe0/1evQjTjBT1PG25PvDOhG3NyMdnqLblSb/9qPr6jO/+7v0h5Nzk62v+s+Pb767ynnPgRo30qB+kHvcWfgiXb3w/K/uNvBVYysQNyv+vVd69ok6yclpX/UvyfDMtjjwpXaY+TPnmipPjnDef+b9iZilnTZzjh+rV5P8IM75uVP/fD9xIF+979m/93QL1V3n94udQ9ysuOnrNrEEjDqeKq2B+l+TyRspOCuyVJT0EKh6FswFc1Xz01/+5LbupWrUyZ7uKi1JrUr29MdydWcRt12RuaybLRmlgRp/jV+NwzaecJ5OPfuqfzxR4/CZwD0Eqh42pHdHiZ35S8KD+iA/DlnX3XKnxNkWtvNObqDGYZElaUUXGe/OmhDDdvY5xYG/4EvCtiNuuyK9rIu6Uu1I0/zUfPmtz6qeTcKWs0Q8bcpFCwI3CVsQq39Z1iyNZTWT//S1nuKcZW3YTkZkwVJ1KSxLUQxx21HRPxfyf3s/i8+7T/rUHmhw01X4XFBOm4oDTSe9mZGCjw2dROmJb81yp7zUUvEF5u8Yj2PcPF3rmWOHELdd9BDoc8tX9denASp/6MnXhW4L3CHcP+/LXZbTe1X/kh2E5LWyg/pAumnoIGdZWmmlrqGlr1u9wrJ00dJ4k4+ZYINcwvHxscP2C9tyaofT13HgT1/Hge+krgtT7xnv13JbO5w/Vq3n4oy/Pzk/P4hdlpecx/wxQteV73rfc47bTn/qjO9txc+O7bKoWUxuu+buanxN7UN66hrbP/9TvdqFKqk7nXmPcbhnHwVxGRPeipad3B7u9U0nOlrhGh43FN6QohXEFvjec37GRDM/tYSu+4Kpo8jUMz3mi7enk9ZKk1vUfZxKY9erFTnG/ASb+cnaxb8rbBcmNwse72IO2mGBi/1lNV2obqsib23Pqs3ulqa3xZNfxs2NJSe30f03qf1++lDxogd/XcS90reOuO2I0de+BrWe4owl4v1/A/m/HKX2ltV0sXpq6MDEg6gj3f6d9TmBHEVHPGyXpxfHiy2/8hRbli53U2KytFzqYv5kq/VcPF2SOudYluLRombtvW468VrKl07u8sf+zf3zvtz5cu9d9Xyjjic/iJWcW/0gzl+i313JW/N9EOwWzznnJi9KpZKGw+EmzwcAClvULK65ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwibgBMIm4ATCJuAEwaS+9o1QqbeI8AGCtPOec2/RJAMC6sSwFYBJxA2AScQNg0v+srr8gWK4hbwAAAABJRU5ErkJggg==");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 40121
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/未知大小元素水平垂直居中-c999b9a4ee67ee0e9fae679a1e153506.png");
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