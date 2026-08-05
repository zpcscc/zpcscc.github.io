"use strict";
(globalThis["webpackChunkwebsite"] ||= []).push([[1146],{

/***/ 26585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_css_index_md_eec_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-css-布局-元素垂直居中-index-md-eec.json
const site_docs_web_css_index_md_eec_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/css/布局/元素垂直居中/index","title":"元素垂直居中","description":"本文将依次介绍在不同条件下实现垂直居中的多种方法及简单原理","source":"@site/docs/web/css/布局/元素垂直居中/index.md","sourceDirName":"web/css/布局/元素垂直居中","slug":"/web/css/布局/元素垂直居中/","permalink":"/docs/web/css/布局/元素垂直居中/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"元素垂直居中"},"sidebar":"web","previous":{"title":"布局","permalink":"/docs/category/布局"},"next":{"title":"元素水平垂直居中","permalink":"/docs/web/css/布局/元素水平垂直居中/"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@19.2.8/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(91987);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.18_react@19.2.8/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67008);
;// ./docs/web/css/布局/元素垂直居中/index.md


const frontMatter = {
	title: '元素垂直居中'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、使用 line-height",
  "id": "一使用-line-height",
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
  "value": "4.完整代码展示",
  "id": "4完整代码展示",
  "level": 3
}, {
  "value": "二、利用 table-cell 布局",
  "id": "二利用-table-cell-布局",
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
  "id": "4完整代码",
  "level": 3
}, {
  "value": "三、利用相对定位 relative 和绝对定位 absolute",
  "id": "三利用相对定位-relative-和绝对定位-absolute",
  "level": 2
}, {
  "value": "1.原理",
  "id": "1原理-2",
  "level": 3
}, {
  "value": "2.步骤",
  "id": "2步骤",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-2",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-1",
  "level": 3
}, {
  "value": "四、使用弹性盒子 flex 布局",
  "id": "四使用弹性盒子-flex-布局",
  "level": 2
}, {
  "value": "方法一：align-items 属性",
  "id": "方法一align-items-属性",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-3",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤-2",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-3",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-2",
  "level": 3
}, {
  "value": "方法二：justify-content 属性",
  "id": "方法二justify-content-属性",
  "level": 3
}, {
  "value": "1.原理",
  "id": "1原理-4",
  "level": 3
}, {
  "value": "2.实现步骤",
  "id": "2实现步骤-3",
  "level": 3
}, {
  "value": "3.适用场景",
  "id": "3适用场景-4",
  "level": 3
}, {
  "value": "4.完整代码",
  "id": "4完整代码-3",
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
        children: "垂直居中"
      }), "的多种方法及简单原理"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "::: tip\n下文中说的适用场景只是举了几个简单的例子方便读者理解。实际应用场景太复杂，生搬硬套容易出错。最重要的是掌握各种方法能够实现居中的原理。只要掌握了原理，那么不管问题怎么变都可以根据自己的理解选择合适的方法。\n:::"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一使用-line-height",
      children: "一、使用 line-height"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "有行高的元素"
      }), "，内容会默认显示在行高的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "垂直中心处"
      }), "，通过设置行高等于父元素的高度，可以达到内容在父元素中垂直居中的效果"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）父元素有一个确定的高度"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）在父元素或在子元素中设置 line-height 等于父元素的高度"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）具有行高属性的单行元素"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "::: tip\n若元素有多行，line-height 用同样的原理也可实现，不过需要根据行数计算且容易出错（若父元素宽度变化影响行数，那么就要重新计算布局），这里不推荐使用 line-height 设置多行居中。\n:::"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码展示",
      children: "4.完整代码展示"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>单行元素垂直居中</title>\n    <style>\n      #box {\n        height: 120px;\n        line-height: 120px;\n        /*设置成和父元素同高，对子元素父元素设置都有效*/\n        border: 2px solid #222222;\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"box\">\n      <span>单行元素垂直居中</span>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "单行元素垂直居中",
        src: (__webpack_require__(69163)/* ["default"] */ .A) + "",
        width: "496",
        height: "138"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二利用-table-cell-布局",
      children: "二、利用 table-cell 布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-1",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["将子元素转为表格中", (0,jsx_runtime.jsx)(_components.strong, {
        children: "单元格"
      }), "的形式，使用表格属性", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vertical-align"
      }), "实现居中"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-1",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（1）父元素转换为表格类型 display", ":table", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（2）子元素转换为表格单元格类型 display", ":table-cell", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（3）子元素使用单元格居中属性 vertical-align", ":middle", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-1",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）未知高度单行元素垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）未知高度多行元素垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）未知高度的块级元素"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>多行元素垂直居中</title>\n    <style>\n      #box {\n        display: table; /*转换为表格元素*/\n        height: 140px;\n        border: 2px solid #222222;\n      }\n      span {\n        display: table-cell; /*转换为为table-cell单元格元素*/\n        vertical-align: middle; /*设置垂直居中对齐*/\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"box\">\n      <span\n        >多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中多行元素垂直居中\n      </span>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "多行元素垂直居中",
        src: (__webpack_require__(65966)/* ["default"] */ .A) + "",
        width: "493",
        height: "152"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三利用相对定位-relative-和绝对定位-absolute",
      children: "三、利用相对定位 relative 和绝对定位 absolute"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-2",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用定位将元素移动到所需要的位置上，将元素", (0,jsx_runtime.jsx)(_components.strong, {
        children: "定位到垂直居中的位置"
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
        src: (__webpack_require__(64558)/* ["default"] */ .A) + "",
        width: "656",
        height: "372"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2步骤",
      children: "2.步骤"
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
        children: "（3）向下移动子元素，移动距离为父容器高度的一半（50%）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（4）通过向上移动子元素的一半宽度（具体 px 值）以达到垂直居中。（通过 margin 实现）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-2",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）已知高度的块级元素垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-1",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>已知高度的块级元素垂直居中</title>\n    <style>\n      #box {\n        position: relative;\n        height: 200px;\n        border: 2px solid #222222;\n      }\n      .child {\n        height: 100px;\n        width: 100px;\n        background: red;\n        position: absolute;\n        top: 50%;\n        /*设置块级元素上边框距离顶部50%，使元素上边框这条线垂直居中于父元素*/\n        margin-top: -50px;\n        /*设置元素上边框向上移动元素高度的一半，使元素整体垂直居中*/\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"box\">\n      <div class=\"child\"></div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "固定高度块级元素垂直居中",
        src: (__webpack_require__(96388)/* ["default"] */ .A) + "",
        width: "492",
        height: "216"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四使用弹性盒子-flex-布局",
      children: "四、使用弹性盒子 flex 布局"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法一align-items-属性",
      children: "方法一：align-items 属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-3",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["利用布局神器弹性盒子的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "align-items"
      }), "属性进行侧轴方向布局。弹性盒子默认主轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "左右方向"
      }), "，侧轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "上下方向"
      }), "，设置侧轴上下方向居中。即可达到使子元素垂直居中的效果。也可对子元素使用 align-self 单独设置居中，可以覆盖掉 align-items 属性"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-2",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（1）父元素开启弹性盒子 display", ":flex", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（2）父元素设置 align-items", ":center", ";（侧轴方向居中对齐）"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-3",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）未知高度的元素垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）已知高度的元素垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）浮动元素的垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-2",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>未知高度元素垂直居中</title>\n    <style>\n      #box {\n        display: flex; /*开启弹性盒子*/\n        align-items: center; /*设置侧轴方向居中*/\n        border: 1px solid #222222;\n        height: 100px;\n      }\n      .child {\n        float: left; /*浮动的元素同样可以居中*/\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"box\">\n      <div class=\"child\">未知高度的元素垂直居中</div>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "未知高度的元素垂直居中",
        src: (__webpack_require__(70423)/* ["default"] */ .A) + "",
        width: "493",
        height: "114"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "方法二justify-content-属性",
      children: "方法二：justify-content 属性"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1原理-4",
      children: "1.原理"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["利用布局神器弹性盒子的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "justify-content"
      }), "属性进行主轴方向布局。弹性盒子默认主轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "左右方向"
      }), "，侧轴是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "上下方向"
      }), "。所以要先用", (0,jsx_runtime.jsx)(_components.strong, {
        children: "flex-direction"
      }), "把主轴方向改为上下方向。再设置主轴居中。即可达到使子元素垂直居中的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2实现步骤-3",
      children: "2.实现步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["（1）父元素开启弹性盒子 display", ":flex", ";"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）父元素将主轴设置为上下方向 flex-direction: column;"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）父元素设置 justify-content: center;（主轴方向居中对齐）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3适用场景-4",
      children: "3.适用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）未知高度的元素垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）已知高度的元素垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（3）浮动元素的垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（4）多行元素的垂直居中"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4完整代码-3",
      children: "4.完整代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>多行元素垂直居中</title>\n    <style>\n      #box {\n        height: 140px;\n        /*需设置高度，不设置的话默认高度为内容撑起的高度，看不出居中效果*/\n        display: flex; /*开启弹性盒子布局*/\n        flex-direction: column; /*设置主轴纵向排列*/\n        justify-content: center; /*在主轴方向上居中*/\n        border: 2px solid #222222;\n      }\n    </style>\n  </head>\n  <body>\n    <div id=\"box\">\n      <span\n        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quidem\n        laudantium quasi, fugit sapiente, culpa at voluptatum neque nemo nobis\n        cupiditate assumenda esse aut\n      </span>\n    </div>\n  </body>\n</html>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "flex垂直居中",
        src: (__webpack_require__(14208)/* ["default"] */ .A) + "",
        width: "660",
        height: "157"
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

/***/ 14208
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 69163
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 96388
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAewAAADYCAYAAAApttBvAAADuklEQVR4nO3YsW3EQAwAQctQJ9d/SaqFnzh44AU5suQFZrJjxGzB22ZmvgCAf+376QUAgN8JNgAECDYABAg2AATs74+11lN7AAA/juP4mLmwASBgPxuelR0A+FtXP90ubAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAIEGwACBBsAAgQbAAI2E+n23bzGlyaeXoDAB7mwgaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoAAwQaAAMEGgADBBoCA/XQ6c/MaAMAVFzYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABAg2AAQINgAECDYABOxnw7XW3XsAABdc2AAQsM3MPL0EAHDNhQ0AAYINAAGCDQABgg0AAYINAAGCDQABL4sZFBiGwLcYAAAAAElFTkSuQmCC");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 65966
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 70423
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 64558
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/定位居中原理-2c35c1f24d13a47c7ba0c7379b5dc88a.png");
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