"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[5882],{

/***/ 92841
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_css_index_md_975_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-css-布局-元素水平居中-index-md-975.json
const site_docs_web_css_index_md_975_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/css/布局/元素水平居中/index","title":"元素水平居中","description":"本文将依次介绍在不同条件下实现水平居中的多种方法及简单原理","source":"@site/docs/web/css/布局/元素水平居中/index.md","sourceDirName":"web/css/布局/元素水平居中","slug":"/web/css/布局/元素水平居中/","permalink":"/docs/web/css/布局/元素水平居中/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"元素水平居中"},"sidebar":"web","previous":{"title":"元素水平垂直居中","permalink":"/docs/web/css/布局/元素水平垂直居中/"},"next":{"title":"画三角形","permalink":"/docs/web/css/布局/画三角形/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/web/css/布局/元素水平居中/index.md


const frontMatter = {
	title: '元素水平居中'
};
const contentTitle = 'CSS 布局之元素水平居中';

const assets = {

};



const toc = [{
  "value": "一、使用 text-align: center",
  "id": "一使用-text-align-center",
  "level": 2
}, {
  "value": "1.原理",
  "id": "1原理",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码",
  "level": 3
}, {
  "value": "二、使用 margin",
  "id": "二使用-margin",
  "level": 2
}, {
  "value": "1.原理",
  "id": "1原理-1",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤-1",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-1",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-1",
  "level": 3
}, {
  "value": "三、使用相对定位 relative 和绝对定位 absolute",
  "id": "三使用相对定位-relative-和绝对定位-absolute",
  "level": 2
}, {
  "value": "1.原理",
  "id": "1原理-2",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤-2",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-2",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-2",
  "level": 3
}, {
  "value": "四、使用弹性盒子 flex 布局（通用方法）",
  "id": "四使用弹性盒子-flex-布局通用方法",
  "level": 2
}, {
  "value": "方法一： justify-content 属性",
  "id": "方法一-justify-content-属性",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-3",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤-3",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-3",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-3",
  "level": 3
}, {
  "value": "方法二： align-item 属性",
  "id": "方法二-align-item-属性",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-4",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤-4",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-4",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-4",
  "level": 3
}, {
  "value": "方法三： margin 属性",
  "id": "方法三-margin-属性",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-5",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤-5",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-5",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-5",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "css-布局之元素水平居中",
        children: "CSS 布局之元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["本文将依次介绍在不同条件下实现", (0,jsx_runtime.jsx)(_components.strong, {
        children: "水平居中"
      }), "的多种方法及简单原理\n::: tip\n下文中说的适用场景只是举了几个简单的例子方便读者理解。实际应用场景太复杂，生搬硬套容易出错。最重要的是掌握各种方法能够实现居中的原理。只要掌握了原理，那么不管问题怎么变都可以根据自己的理解选择合适的方法。\n:::"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一使用-text-align-center",
      children: "一、使用 text-align: center"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["文本居中对齐", (0,jsx_runtime.jsx)(_components.strong, {
        children: "text-align: center"
      }), "，可以适用于", (0,jsx_runtime.jsx)(_components.strong, {
        children: "文本及图片"
      }), "的对齐"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）直接在父元素中设置 text-align: center;"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）适用于块级元素内部的行内元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）适用于块级元素内图片的水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）此方法对 inline、inline-block、inline-table 和 inline-flex 元素水平居中都有效"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）子元素为行内元素，直接使用 text-align: center;进行水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>这是需要水平居中的文字</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        text-align: center;\n        /*设置子元素内的行内元素水平居中*/\n        border: 1px solid #222222;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <p>这是需要水平居中的文字</p>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "text水平居中1",
        src: (__webpack_require__(62619)/* ["default"] */ .A) + "",
        width: "311",
        height: "112"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）如果子元素是一个块级元素，我们可以先将其由块级元素改变为行内块元素，再通过设置行内块元素居中以达到水平居中。"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>这是需要水平居中的内容</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        text-align: center;\n        /*设置子元素内的行内元素水平居中*/\n        border: 1px solid #222222;\n      }\n      .child {\n        display: inline-block;\n        /*将块级元素转为行内元素实现居中。但不建议，因为转换了元素类型，可能会破坏布局*/\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">这是需要居中的内容</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "text水平居中2",
        src: (__webpack_require__(7584)/* ["default"] */ .A) + "",
        width: "311",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二使用-margin",
      children: "二、使用 margin"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-1",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["利用", (0,jsx_runtime.jsx)(_components.strong, {
        children: "margin"
      }), "属性的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "auto"
      }), "值，设置左右左右外边距为", (0,jsx_runtime.jsx)(_components.strong, {
        children: "自动"
      }), "实现居中（只能设置水平居中，对垂直居中无效）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-1",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）子元素必须要有宽度"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）设置子元素的 margin: 0 auto 实现水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-1",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）有宽度的子元素"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-1",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）有确定宽度使用 margin 居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>margin居中</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #222222;\n      }\n      .child {\n        width: 100px; /*设置子元素宽度*/\n        margin: 0 auto; /*设置左右外边距自动实现水平居中*/\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">margin居中</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "margin居中",
        src: (__webpack_require__(54236)/* ["default"] */ .A) + "",
        width: "317",
        height: "113"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["（2）若不知道子元素宽度可用", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["width", ":fit-content"]
      }), "配合", (0,jsx_runtime.jsx)(_components.strong, {
        children: "margin"
      }), "居中"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>fit-content居中</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #222222;\n      }\n      .child {\n        width: fit-content;\n        /*类似于包裹内容，宽度为内容宽度*/\n        margin: 0 auto;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">fit-content</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "fit-content居中",
        src: (__webpack_require__(72709)/* ["default"] */ .A) + "",
        width: "315",
        height: "110"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（3）用 display", ":table", "；将子元素设为 table 元素，宽度为内容宽，再使用 margin 居中"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>转为表格元素居中</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #222222;\n      }\n      .child {\n        display: table;\n        /*将元素转换为table类型*/\n        margin: 0 auto;\n        /*设置上下外边距为0，左右外边距自动*/\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">转为表格元素居中</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "转为表格元素居中",
        src: (__webpack_require__(25621)/* ["default"] */ .A) + "",
        width: "308",
        height: "109"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三使用相对定位-relative-和绝对定位-absolute",
      children: "三、使用相对定位 relative 和绝对定位 absolute"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-2",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用定位将元素移动到所需要的位置上，将元素", (0,jsx_runtime.jsx)(_components.strong, {
        children: "定位到水平居中的位置"
      }), "就实现了居中"]
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（5）其他各种组合同理，两个对立方向的属性不能同时组合使用。例如 top 和 bottom 同时使用以 top 为准，bottom 会失效。left 和 right；同时使用的话会以 left 为准 right 会失效。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（6）所以定位 50%是，子元素边框移动到 50%的位置，还需要移动回来子元素一半的宽度，达到真正的居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "定位居中原理",
        src: (__webpack_require__(17940)/* ["default"] */ .A) + "",
        width: "656",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-2",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）先将父元素设置为相对定位 relative"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）将子元素设置为绝对定位 absolute（子绝父相）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）向右移动子元素，移动距离为父容器宽度的一半（50%）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（4）通过向左移动子元素的一半宽度以达到水平居中。（通过 transform 或 margin 实现）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-2",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）未知宽度的子元素（使用 transform）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）已知宽度的子元素（使用 margin）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-2",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）使用 transform 属性：不定宽，不需要有确定的宽度也可实现居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>transform居中</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        position: relative;\n        border: 1px solid #222222;\n      }\n      .child {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\">transform居中</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "transform水平居中",
        src: (__webpack_require__(38251)/* ["default"] */ .A) + "",
        width: "316",
        height: "113"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）margin 属性：子元素必须设置确定的宽度，且 margin 值不能用百分制会导致失效，要使用 px"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>margin</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 200px;\n        position: relative;\n        border: 1px solid #222222;\n      }\n      .child {\n        width: 100px;\n        height: 100px;\n        position: absolute;\n        left: 50%;\n        margin-left: -50px;\n        background: red;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\"></div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "块级水平居中",
        src: (__webpack_require__(33411)/* ["default"] */ .A) + "",
        width: "312",
        height: "210"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四使用弹性盒子-flex-布局通用方法",
      children: "四、使用弹性盒子 flex 布局（通用方法）"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法一-justify-content-属性",
      children: "方法一： justify-content 属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-3",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["利用布局神器弹性盒子的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "justify-content 属性"
      }), "进行主轴方向布局。弹性盒子默认主轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "左右方向"
      }), "，侧轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "上下方向"
      }), "，设置主轴左右方向居中。即可达到使子元素左右居中的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-3",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（1）父元素开启弹性盒子 display", ":flex", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（2）父元素设置 justify-content", ":center", ";（主方向居中对齐）"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-3",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）未知宽度的元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）已知宽度的元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）浮动元素的水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（4）可适用于多个子元素同时水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-3",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "（1）通过 justify-content 属性实现居中"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>justify-content</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #222222;\n        display: flex; /*开启弹性盒子*/\n        justify-content: center; /*设置主轴方向居中，对子元素生效*/\n      }\n      .child {\n        width: 50px;\n        height: 50px;\n        background: red;\n        border: 1px solid #222222;\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\"></div>\n      <div class=\"child\"></div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "多元素flex居中",
        src: (__webpack_require__(68674)/* ["default"] */ .A) + "",
        width: "315",
        height: "113"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法二-align-item-属性",
      children: "方法二： align-item 属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-4",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["利用布局神器弹性盒子的", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["flex-direction", ":column"]
      }), "更改主轴方向为上下方向。弹性盒子默认主轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "左右方向"
      }), "，侧轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "上下方向"
      }), "。更改后使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: "align-items 属性"
      }), "设置子元素在侧轴方向居中，即可达到使子元素左右居中的效果。如果想对子元素单独设置，可在子元素上使用 align-self 属性，可以覆盖掉父元素的 align-items 属性。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-4",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（1）父元素开启弹性盒子 display", ":flex", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（2）父元素使用 flex-direction", ":column", " 更改主轴方向为纵向"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）父元素使用 align-items 属性设置子元素在侧轴方向居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-4",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）未知宽度的元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）已知宽度的元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）浮动元素的水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-4",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**align-self 属性：**对子元素使用（解决有多个子元素，用 flex 布局实现其中单个子元素的居中的问题）"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>align-self</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #222222;\n        display: flex;\n        flex-direction: column; /*设置主轴为纵向排列，此时侧轴为横向排列*/\n        align-items: center; /*设置子元素在侧轴方向上居中*/\n      }\n      .child {\n        width: 50px;\n        height: 50px;\n        background: red;\n        border: 1px solid #222222;\n        /*align-self:center;可以单独设置某个子元素的对齐方式*/\n        /*设置本身元素在侧轴方向上居中*/\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\"></div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "单元素flex水平居中",
        src: (__webpack_require__(85610)/* ["default"] */ .A) + "",
        width: "314",
        height: "106"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法三-margin-属性",
      children: "方法三： margin 属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-5",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在开启弹性盒子的时候也可以使用", (0,jsx_runtime.jsx)(_components.strong, {
        children: "margin 属性"
      }), "的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "auto 值"
      }), "来居中，此时不需要有具体宽度"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-5",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（1）父元素开启弹性盒子 display", ":flex", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）子元素使用 margin:0 auto;属性设置自身水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-5",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）未知宽度的元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）已知宽度的元素水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）浮动元素的水平居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-5",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>flex+margin</title>\n    <style>\n      .box {\n        width: 300px;\n        height: 100px;\n        border: 1px solid #222222;\n        display: flex; /*开启弹性盒子*/\n      }\n      .child {\n        width: 50px;\n        height: 50px;\n        background: red;\n        border: 1px solid #222222;\n        margin: 0 auto; /*子元素利用maigin的auto值设置居中*/\n      }\n    </style>\n  </head>\n  <body>\n    <div class=\"box\">\n      <div class=\"child\"></div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "块级水平居中",
        src: (__webpack_require__(33411)/* ["default"] */ .A) + "",
        width: "312",
        height: "210"
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

/***/ 17940
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/定位居中原理-2c35c1f24d13a47c7ba0c7379b5dc88a.png");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 72709
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAABuCAYAAABY6LQ3AAAEbklEQVR4nO3dvW4TWRiA4W9WXESQQmF8B6kC0ja5g7UVJJxyS7poO3YpgulW23EJHiRQvBewEs1KMRXNtiAXWEru4lDgJLYTxw6bP/w9j2QJ+czMOY7EqxmPnVSllBIAK+6n214AwE0QOyCFe/MGms3mTa4D4H/7/Pnz3LG5sVu0I8BdsugEzWUskILYASmIHZCC2K2wwcsqqqqKqmpHPTqK+kkV1ZM6jm57YXALxG5FHb1px+MXreh9KVHKfnTWz9tqEK+qKtpv7nL+bmCNozraVRWvPlzfFNy+C+/G8uMafupHbPdi6yRya9F5W6IzudFoGB9vfmmXcxNrHA2jHxEb1z0Pt8qZHZBDmePhw4fzhrjLvvRKK6LE5GO7Vw7LYeltH/+7lIO9mW0iSqs+XHKS8bGmjj/poHQXHPvb/N1yMLPeye0WrnH2tc6sY/EcM69j/OgOlv5pc4csapbYraiDvdn//NOxK6WcxGL5yJ3uE3sHU8/1BtPj50ZpYp+TkE2s57BunY3NvDWeef7s61t6jkFX5FbAoma5jOUSjqLe3Yn+di8O/3h0+vR6Jzqb0+Ovn65Njb+uWxEv/ox6NHm8VvT+6sTxlmtPf4tuRPz+z2DpdZzOsxad3W7Eu/14fyVzsGrEjksYxvBdROuXrVg7b3j0PvbnjK/93I5W9GM4FaKNaEzdJW5EY3uJZcybZ71xdXOwcsSOGePP41UTj+PP5o3vjG40zk3diYvGPw6X+AjJf8OlPgvY79yfXueDnehf8RysDrFjxrePqJQy8XjbmTqDWhSTi8YXhfIyuoOZdY4f+0+vbg5Wh9ixvPWtaG9H9P9+f/5Z0QXjR//uRz+6sbV5devwvhuXIXaZrTdiIyL6n4ZL7nB8E2An7r+cCM2ojvrD9PizyW88jOp41ulHq/41Hs0e8rvWOJ7nxePpb1aM6mh/z9fh1hvRiiUvf/lhiV1qj+L54Fs0qmW/krX5PMqXXrTG+1RVFdVunJ6xjcdj8v20BzuxMfjey8s5a9x8HmXQnX7fbjfi9cwl91LGd4uPj+VrY6upKuX8P7jTbDb98k7gh7GoWc7sgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5IQeyAFMQOSEHsgBTEDkhB7IAUxA5I4d5Fg81m86bWAXCtqlJKue1FAFw3l7FACmIHpCB2QApiB6TwFV2QBCLBdCPNAAAAAElFTkSuQmCC");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 54236
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT0AAABxCAYAAACndnQ+AAAFK0lEQVR4nO3dvW4aWQCG4W9WuQiQ7AKRdhtXQGnJF7AgLBlKl+6sdBAXMXSrdL4EsLQI9gJWolmJcZXGbSyKIMFdTApwPIyxGf+bfO8jURhm4EQRr86ZA3YQRVEkADDxx1sPAABeE9EDYIXoAbDy4a4H8vn8a44DAJ7s6upq7TF3Ri/tEwDAe5B2osbyFoAVogfACtEDYIXo4XldtBUEgdoXbz2QhYu2gqCt8K3HgXeD6OHdCE8DBcEDbqekDA9H9PC8Cg1FUaRG4XGnl7tTRVG09jb68rzDhg+ih9/DYll961ZsSmqqtHK2yLLXEdHbMPMlYFvhpKtK7A08v4Y2U3f//uXf7Lyy9MavnM/ij87P3+8qvD5uv6tfRyReMzgNb8ZzfUzymt7inMr5LLF8XR2cQS2bamlbOllxcrWjaXJWGLYktTRK3v+jo/Jj/gOw8YjeRmqqdCydRZGiaKpOVWoWAwVBVuPj2Jv6pLQctYu2jnS2FIRBLXt706FXV+n7p/kx/9SUWZwbbNel2PJz+vHv1fFZYVDLarh3HZ2RWmqqFA/qAstbvDSit5HK6nxdxEgZ1Y5b87u/jG6upW3tqlKVBv8Ob8JSaKh/kLl5msLhPJj/JedcLY0+F2M/z9T92pSqHZ3Fzs8cnKlTTTnk+NhU1GG3LPX6Gk5SnDvpqpKYGRY/R4qWxgikQ/Q20o5yW7Eft3IqS2rtxSOQUe7P+54jVDvIqt6TdDlennFVc8rFf54M1e9J5b92lVl6jnWvcaP8cekZlcntrDxu5fJ2u67BXdflVswWgfsQPSPL1/OG2l0sjdPayWXWH/QgA40TM72Vy9sfHZVXXZeLL78lqVdXNu1GxnZdg2f+12AzED0Xk66OaoNYVBp66OLw2/gl51QzjS+fGFY2MpAC0XMxGWugZFTGGvdSnLuV046kwfdx4oFQw5QbGevdjCW5w3zX8nZpA6bQWJ71rbNVU/8R4cfmI3ouCrtqKb5pMVN3v6RmqpMXGw+J3eDwNO35KUzG+qaWdq83O1bN2n7dRmo91+vCDtGzUVQjbEknpcVMKavxcfprepmDvqbd8tJGw3Dv+T46Mvu/r0FyAwV4AcFdfw0tn8/zS0SxVngaqHTZ0fQhS8vbz6J2UJLC+dfXZucVZWvrtxlaYYqvu120FRSlEUvZ317aZjHTwxPMr+nd/ijLA10M1ax2dBgPGMtbvBBmekhldl7Rkc5iH26eqbufVb3XYhaFdyFts+79GxnAtcxBX59OAwVB7M5qR9PoKcta4PURPaQ2/+rXW48CeBqu6QGwQvQAWCF6AKwQPQBWiB4AK0QPgBWiB8AK0QNghegBsEL0AFghegCsED0AVogeACtED4AVogfACtEDYIXoAbBC9ABYIXoArBA9AFaIHgArRA+AFaIHwArRA2CF6AGwQvQAWCF6AKwQPQBWiB4AK0QPgBWiB8AK0QNghegBsEL0AFghegCsED0AVogeACtED4AVogfACtEDYIXoAbBC9ABYIXoArBA9AFaIHgArRA+AFaIHwArRA2CF6AGwQvQAWCF6AKwQPQBWiB4AK0QPgBWiB8AK0QNghegBsEL0AFghegCsED0AVogeACtED4AVogfACtEDYIXoAbBC9ABYIXoArBA9AFaIHgArRA+AFaIHwArRA2CF6AGwQvQAWCF6AKwQPQBWiB4AK0QPgJUP9z2Yz+dfaxwA8CqCKIqitx4EALwWlrcArBA9AFaIHgArRA+AFaIHwArRA2DlJ84jFWazXSmyAAAAAElFTkSuQmCC");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 62619
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAABwCAYAAAB7CDdSAAAIrElEQVR4nO3bPWsb6RrG8UuH/RAyxIXjtGlSZQTbBLY7zRmhgKUqbLldcGfZhTzqQrotl61GgRjpNKcLuAnMuEqTdo0KC6RvMacYyR7Nu2TF3r39/8FAkDOv0ly6534eNaIoigQAxvzrsQ8AAH4Ewg2ASYQbAJMINwAm/ZR+4fDw8DGOAwC2dn19nXktE25F/xEA/o6KCjIeSwGYRLgBMIlwA2AS4QbAJMINgEmEGwCTCDcAJhFuAEwi3ACYRLgBMIlwA2AS4QbAJMINgEmEGwCTCDcAJhFuAEwi3ACYRLgBMIlwSwnP2xrNCv54NVSjMVT4oEeEf7zZSO1GyecKPwThlnLwQur9WRBfr3+V3+nr8uphj+nvYPGprcb5PzfWw/NG/eMvCaPFp7Yab0dabLLzZ10dDybq7W/7xRhqSDhujHBLaR4dyzv7UPBBaqr73lP/S8VH9GqoRqNRaxmmgnLxqV173dXS/rS81WYjtTdct+g4trPQ6O02+0/e9KGGj3LsibP4OtZkcKzus+z5Xf53Iu99V80Nt+mcBvK05Rfj7EBvRlJvn4DbSJTy/Pnz9EtPznzkRur40Tz0Ikm1Fi9MbCD0IsmLgvK9RH4ntV7VMQ3Kt1hnvWCgyB3Nt9tOx4/SawYDN/JvNj+OYkHkqd424/9b7xoGA1Xv/8aP3Lz3d3XeRX+XG/k38ftZ9/OSv4/4fDZfv+71sqkos6jccjSPjuVdTDV9faIoimotJ6/TW+mrVVpx7Kl3kVqlpPLa606ks1bBtu6+0dOVX3q91pk06e7lV35VLsa6TFQO4XlDrbOJxl+T6y80eluzwpiN1N70Ea9CeJ5//VpnKr5+a4+rnoLkext6d9v+s6dXYeq9v/HlSpKa6n6+ez0YSO5oXvh5CQaSOr7mq9c+r6pBV/5Nvc9cvATyhDyEWy5HJ9GJnIr/Vd7HSd0kmWUuv1N/vfnIlQZBvQ934qZJr5e+6YJBYr3cx+nkI+Pkth8ZB1t8I46Pkg9pTXXfv6p+hJqN1N7vSS8Pcv44UW+/ziNpS/2ctfNCJRgo9/rNR27JQa5fm9Z3X79mvsTyHbxwNflrWvDXhabfJfc/bzZ+vEV9hFtC8lv/to9TOEIa6vJM8n4pisAtKrfEtocFlcV6Zbbjkdt0pRp6UudAt/HTceWefVD77SrYxjl9qeV2wpKAWwXbaK7xqZNzg9etXh6uarn80pf3cqrfcqvcVzpIXYfmz225Rb3b2aXGF67aP6fP3NFJNFb3Wb3eZVxxr9bZzXmaUvf59enI9sLmIzfTVwsGyu1BRVH0qD231bFushT14JL9udX+g4FqnFv2mO/+XXXexT23OtegqKdY1HNb2+aNH7npcwu9xPuc0+PLW6din7X6f0Vu+3713oOngJ7bPTSPxopCT31n+W15NYwrl48Fo2avTxRVPtbGPZpsr066d+WW7OWEnsoekdceS5NmI304y1YXzjtfbs1Rv+bRWNFp+iqUnfdK/mNpWd+xdt+wUqridpIPvo5Obnx9cxIV6WyqScGWnHd+tnq7Gqp15inIXJdqi09tNfZ7mnR8zWu0TZ68uin4dJRUFonRsrzqYJuqSRXV0y7OZZttp6uLTBWWUznc5/zv9nX/ym3rfVdWbol9rF6rqNLXrtXy81NUtW517Jnr9/RQue1C4lt60v0jUzU1j8bFAwCht15RpZbxUbNwpK/Wcv6/nD5N3NdLj47mLslRy1Vl+i6/Nmge/S6/01crNdKZPP/0UjwgslxWlcxsqm85PaxN/JABhQTnNJCXHDlO9iVTmkdjBYNlNbgfj7YWVa3OaUl/seLzk62QQbjVFJ7HjyjxjTOPb+7CWeOh/uhOsoMNFz3tlTxSFX64b3y5VU3203+vTUUoexyNb+jU9lZTEWYjtZ2+3NHvJU3qprqfA3kXPe3t+lcLt18g2aZ6/mPp+qO5c5oevS2X/+hcZbMmvvPL3bBH5QRw7AzhVmHV41qf9tBU9/NcfifuDWVmyF9dqq+cD3LBN+/azZg3122/p0nJ9IjM/pcBteofJf8enje011X+SOdyFHMyCGoEhKOTKJB31tr850glFtNv0uDNbT+pbK5Ycg7aY1lMvxX/cfVefjxYvu/L65X3nmHnCLeU8Dx+lOt/CaWrofa6E3lhpCjzTR03xoNBOsRCDZ2+vHAu/3trbYJtfYmKK/U4sj5PrWCu3LOuxon5dAcfk5NZPQUFVcfi6zhuVudUMtO/JnJfpB++HJ1Ec/naVQUX/7wpu5+HVDagkBYfr14erA0s3bYX9qc6TlbFcnSyrMS/OXkTiEv2VBaiyFe3OfcUxA3dxE9piqZ6FG8h8tKDA3V/wlXU1E41tNenOtSZVrH+E521pnXF+a03uO839aDWVJa15nzdnzPVO676P78qG1DIO6bs8W4ygHN7jfOOLfXZqTtt6KkpyizCLWE+8tZG6TYavVrOAbv3qGetcAsSN1liZDHz28fyG/92dPMBRto2n6NWY6S31nzCu20/5RFFy4oyqxFFUZSs5A4PD3V9fb3L4hAAfpiizKLnBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYBLhBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYBLhBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYBLhBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYBLhBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYBLhBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYBLhBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYBLhBsAkwg2ASYQbAJMINwAmEW4ATCLcAJhEuAEwiXADYNJPeS8eHh4+9HEAwE41oiiKHvsgAGDXeCwFYBLhBsAkwg2ASYQbAJP+D7LPeRxBxsJ3AAAAAElFTkSuQmCC");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7584
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 38251
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAABxCAYAAABItB8AAAAFqklEQVR4nO3dv27aahyH8a+PehEgJQOia5ZMBekskXoBxSJSzHTUMVvULaRDAttRt1wCRgrC5w5YjgSZumRN5aFI+C7cAQjGMX+qhkD4PR8pQ2PsvG3lR+/72mqdOI5jAYABf217AADwWggeADMIHgAzCB4AM94tO1gsFl9rHADwIn78+LHw2NLgrToZAHbJqkkaS1oAZhA8AGYQPABmEDz8uaEv13HkOI6cm8G2R7MZQ1+u48ofbnsg+BME742I2q4cp6ndy8lAzcOaguu+4jhWfFXa9oAmf1bO+l+nvqJtDxqvguC9EeFjsO0hZBuG+i6p8XH7oZszDfCKr5Ff2fZI8YoIHpCUXJ4nvw5rChSodpg1S2Sp+1YQvF03uQHLXyWprrLjzJa2k2NueyD/dHzzue3p4myg5txNmVoOP50baXCz5HNKLxFnN/fgZhoCqV4aH2/ez86bv27G0nHR+BeNbXr+fXN1bL6W11rO5r2smXND/fRs8GdLFVXU+pmeJfbVWPOvEttH8HbdgaduHKt/Lc1uxEslF5CBV1Z4Mb4Bu2c5SZH8055Onm7KkVrVusoZe1WBl1fvY/Lmnf9c1HaV944TAbiV/h8nsXQ1DYHUGIyPX37Q5Oc7Kj+0NEqOQTXlM4L6fPwZYxs0pE5NeceR863wdN3+daDaYcbeJktaZCB4++C6PwnNVE7eXTKKOXkXDanTVS89G5o7t6TPfiXxuUi9/wKpWlAhea2z5ft1UftctU5FrW+eZvnKyfvWUkV1/dtOZffZ+DO+/+GzWlVJmr9u6WNDUl29+4zznxmomZoR5s66iu+S48Q+I3h7oPK+sPR41HbllOqSAoWp4KXPzRWOk79S4UhSp6bzdKQW/7RJJF2dHKQOHZzIrUrBY7jW+Oe/PxlL+roHBWXO0TKXtGXVF+7D7eITcLw0greX5vfvznU7XhKubRbG0tVIrep4eflb79kdFRbPmh7Czb8Gkrmk7auRuQ+X3iaY7pWu89CirPqmfy94MQRvDw1uyqonNt6T+2K/LyfvbrpfpvHMaZ331pZFbVkMX0D4GKyc9S7HQ4t9RfD2TqTwQal9NykKv//xlUtXk03+Tqhw4adyOvlUyd4vHPbU7Wz6nb3J719KPc1dvKR1k8v1A0/d1EOh5Uq6jLvy0st37CSC90YU3lckfX+2B/dcRnDumwtev1glkn8zP5sLH9MPMTJGcPZFDQWqXSTPjeRf1BRUW/qc9YDixYQKOxW5f0/nkBmztbmn15scC3YNwXsjcme3alWns5PlG+zzn528xvFbe3hPV5L3j3SemA2VH1oarXyqWdLl02so03Pzqh31N/9E9L6nuo5VYMaFDM6y/6axWCzyD4DiDYnkn+bV/TQa71veNydPp5er+KPV+5xDX+5hV+5Plq+7bFWzmOFhfwx76nYa+jIXL5a0mGGGB2BvMMMDgAmCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8AMggfADIIHwAyCB8CMd6s+UCwWX2McALBxThzH8bYHAQCvgSUtADMIHgAzCB4AMwgeADMIHgAzfgGor4heGCa3vwAAAABJRU5ErkJggg==");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 85610
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAABqCAYAAAAsu50fAAABx0lEQVR4nO3YQWqDQACG0aZ4Euf+R5pcZbot6aIhVKZ8eW+nKPwL+URva631ARD2uXsAwNWO7wdjjF07AF4y5/z1muPxxDM30VF7uXl+38uzz++P0PF+5v2+e8KfGOe5ewL/lH90QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QN6xewD7jfPcPQEuJXRvbs65ewJczqcrkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABeUIH5AkdkCd0QJ7QAXlCB+QJHZAndECe0AF5QgfkCR2QJ3RAntABecfjiTHGjh0Al7mttdbuEQBX8ukK5H0BiL4YPqPEsn8AAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 33411
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAADSCAYAAADe19w6AAADBUlEQVR4nO3YQU7DMBRFUYKyE+9/SVnLZ4qgqhCiuL06Z2hl8EZXdo6ZmTeAoPfdAwAe5fx6sNbasQPg167runn+LXD3PmaT49i9gM/81Xkq9y5lnqhAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZAkckCVwQJbAAVkCB2QJHJAlcECWwAFZAgdkCRyQJXBAlsABWQIHZJ27B/ADM7sXwEtygwOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjggS+CALIEDsgQOyBI4IEvggCyBA7IEDsgSOCBL4IAsgQOyBA7IEjgg67x1uNb67x0Af+6Ymdk9AuARPFGBLIEDsgQOyBI4IEvggKwPXrAUCsTdUtoAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 68674
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAABxCAYAAACqaAR5AAAB6ElEQVR4nO3Y0W2DMBRA0aTKJHj/kcgq7gJJW6kJEO45n1hIzx++yFznnPMCcHJfew8AsAWxAxLEDki4PXo4xth6DoB/Wdf1x/WHsfvLi2zDh+fYnJNj+Ms5eRo7jmO93/ce4SXGslwul/Pth8/gnx2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QcNt7AH43lmXvEV7qbPvhM4jdwa3ruvcIcAqusUCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliBySIHZAgdkCC2AEJYgckiB2QIHZAgtgBCWIHJIgdkCB2QILYAQliByTcni2MMbacA+CtrnPOufcQAO/mGgskiB2QIHZAgtgBCWIHJIgdkPANVQwbs5Rih50AAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 25621
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