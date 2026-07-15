"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[2189],{

/***/ 96493
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_css_index_md_500_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-css-布局-画三角形-index-md-500.json
const site_docs_web_css_index_md_500_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/css/布局/画三角形/index","title":"画三角形","description":"​ 我们都知道在 html 中，想要画出圆形，椭圆，矩形，都很简单，但是常见的三角形，梯形如何用纯 css 画出却较麻烦，许多时候都是直接用三角形的图片。本文将介绍如何用纯 css 画出三角形和梯形","source":"@site/docs/web/css/布局/画三角形/index.md","sourceDirName":"web/css/布局/画三角形","slug":"/web/css/布局/画三角形/","permalink":"/docs/web/css/布局/画三角形/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"画三角形"},"sidebar":"web","previous":{"title":"元素水平居中","permalink":"/docs/web/css/布局/元素水平居中/"},"next":{"title":"隐藏滚动条","permalink":"/docs/web/css/隐藏滚动条"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/web/css/布局/画三角形/index.md


const frontMatter = {
	title: '画三角形'
};
const contentTitle = '用 CSS 画三角形';

const assets = {

};



const toc = [{
  "value": "一、原理",
  "id": "一原理",
  "level": 2
}, {
  "value": "二、画梯形",
  "id": "二画梯形",
  "level": 2
}, {
  "value": "三、画三角形",
  "id": "三画三角形",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "用-css-画三角形",
        children: "用 CSS 画三角形"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ 我们都知道在 html 中，想要画出圆形，椭圆，矩形，都很简单，但是常见的三角形，梯形如何用纯 css 画出却较麻烦，许多时候都是直接用三角形的图片。本文将介绍如何用纯 css 画出三角形和梯形"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一原理",
      children: "一、原理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "​ 授人以鱼不如授人以渔。各种方法只有掌握了原理才能真正理解，自己才能够灵活的运用。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["其实画三角形和梯形很简单。主要涉及到的属性就是", (0,jsx_runtime.jsx)(_components.strong, {
        children: "border 边框属性"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "先给大家看一下在 html 中边框的表现形式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形1",
        src: (__webpack_require__(31720)/* ["default"] */ .A) + "",
        width: "270",
        height: "269"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 200px;\n    width: 200px;\n    border-top: 30px solid red;\n    border-right: 30px solid blue;\n    border-bottom: 30px solid green;\n    border-left: 30px solid purple;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由上图知边框原来是四个梯形组成的。理解这一点下面画三角形和梯形就简单了"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二画梯形",
      children: "二、画梯形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "知道原理那么画梯形就简单了"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["直接将其余三个边框", (0,jsx_runtime.jsx)(_components.strong, {
        children: "颜色设置为透明"
      }), "就可以了（为了方便使用，可直接将 div 的宽或者高设置为 0）"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形2",
        src: (__webpack_require__(68579)/* ["default"] */ .A) + "",
        width: "268",
        height: "276"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 200px;\n    width: 200px;\n    border-bottom: 30px solid green;\n    border-left: 30px solid purple;\n    border-top: 30px solid transparent;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从上图可以看到，写了（上下左）三个边框，上边框设置透明。左边的边框就是个等腰梯形，下边框变成了直角梯形。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "需要注意的是，只有两个边框相接触的地方才会显示一个斜边（参考上图左下角和左上角），如果只有单独一个边框，没有相邻边框，则会显示矩形（参考上图右下角）。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["这样我们就可以画出角度为 45 度的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "等腰梯形"
      }), "了。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果想要画不同角度的梯形，直接改变边框的宽度即可(根据需要组合出自己想要的角度)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形3",
        src: (__webpack_require__(63354)/* ["default"] */ .A) + "",
        width: "341",
        height: "291"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 200px;\n    width: 200px;\n    border-top: 20px solid red;\n    border-right: 40px solid blue;\n    border-bottom: 60px solid green;\n    border-left: 80px solid purple;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三画三角形",
      children: "三、画三角形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上面画梯形我们知道，将 div 宽高其中一项设置为 0 可以得到矩形，如果将 div 宽高全都设置为 0 则可以画出三角形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形4",
        src: (__webpack_require__(21301)/* ["default"] */ .A) + "",
        width: "219",
        height: "218"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 0px;\n    width: 0px;\n    border-top: 100px solid red;\n    border-right: 100px solid blue;\n    border-bottom: 100px solid green;\n    border-left: 100px solid purple;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过隐藏其余边框和设置边框属性则可以得到多种三角形"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "等腰三角形"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形5",
        src: (__webpack_require__(38412)/* ["default"] */ .A) + "",
        width: "211",
        height: "215"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 0px;\n    width: 0px;\n    border-top: 100px solid transparent;\n    border-right: 100px solid transparent;\n    border-bottom: 100px solid green;\n    border-left: 100px solid transparent;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "倾斜三角形"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形6",
        src: (__webpack_require__(23239)/* ["default"] */ .A) + "",
        width: "334",
        height: "203"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 0px;\n    width: 0px;\n    border-top: 100px solid transparent;\n    border-right: 200px solid transparent;\n    border-bottom: 100px solid green;\n    border-left: 100px solid transparent;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "左上三角形"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形7",
        src: (__webpack_require__(35550)/* ["default"] */ .A) + "",
        width: "361",
        height: "337"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 0px;\n    width: 0px;\n    border-top: 100px solid red;\n    border-right: 100px solid transparent;\n    border-bottom: 100px solid transparent;\n    border-left: 100px solid red;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "两个组合三角形"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        alt: "画三角形8",
        src: (__webpack_require__(34441)/* ["default"] */ .A) + "",
        width: "219",
        height: "111"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-html",
        children: "<style>\n  div {\n    height: 0px;\n    width: 0px;\n    border-top: 100px solid transparent;\n    border-right: 100px solid red;\n    border-bottom: none;\n    border-left: 100px solid red;\n  }\n</style>\n<body>\n  <div></div>\n</body>\n"
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

/***/ 31720
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAENCAYAAAD+JYsLAAAFS0lEQVR4nO3dS05bWRRA0QPKwFwjixlZuQaGqEakSFUhgW2/n81aEh3onNbWxX7vnqfX19e35+fnAfgsxQAy4QCyb///xeXprznNZY9ZgAN5mfN8f/v+7t9+OXH8M6e5zGn1oYDjepnznOf9aMz85l8V8YCv66NozPzhMw7xgK/nM9GY+eDDUfGAr+Oz0Zj5xLcq4gGPr0Rj5pNfx4oHPK4ajZnwHId4wOO5Jhoz8QEw8YDHcW00Zq54clQ84P7dEo2ZKx85Fw+4X7dGY+aGd1XEA+7PEtGYufElN/GA+7FUNGYWeDtWPOD4lozGzEKv1YsHHNfS0ZhZ8D4O8YDjWSMaMwtf5CMecBxrRWNmhRvAxAP2t2Y0Zla6OlA8YD9rR2NmxTtHxQO2t0U0Zla+rFg8YDtbRWNmg1vOxQPWt2U0ZjZajyAesJ6tozGz4V4V8YDl7RGNmY0XMokHLGevaMzssMlNPOB2e0ZjZqcVkOIB19s7GjM77o4VD+iOEI2ZnZdOiwd83lGiMXOAbfXiAR87UjRm3tlWv4d/5jSnt7/3HgMO6/y09wT/tfuJA7g/wgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFkwgFk3/YeYGbmcrrM+eW89xhwXKfzzOX73lP8tPuJ43K6zOV02XsMOLbTeeb0svcUP+0aDtGA4EDx2C0cogFXOEg8dgmHaMANDhCPzcMhGrCAneOxaThEAxa0Yzw2C4dowAp2iscm4RANWNEO8Vg9HKIBG9g4HquGQzRgQxvGY7VwiAbsYKN4rBIO0YAdbRCPxcMhGnAAK8dj0XCIBhzIivFYLByiAQe0UjwWCYdowIGtEI+bwyEacAcWjsdN4RANuCMLxuPqcIgG3KGF4nFVOEQD7tgC8cjhEA14ADfGI4VDNOCB3BCPT4dDNOABXRmPT4VDNOCBXRGPD8MhGvAFxHj8MRyiAV9IiMdvwyEa8AWdzj9+PvBuOEQDvrDTy4cnj1+WTosG8OPU8TYz758+nl5fX9+en3ffPQ3cEcUAMuEAMuEAMuEAMuEAsn8Ba20d4FhkbZsAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 68579
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQwAAAEUCAYAAADeCQhlAAAEbElEQVR4nO3dUW6cMBRAUVJ1YdlZk52RldGPKlJaKemdCQMYztnA+OuKAdvvaVmWZQIIfuy9AGAcggFkggFkggFkggFknwZjfp23XAcwgE+D8fbyJhrAX778SyIawEf/fYchGsC79NJTNIBpuuEriWgAN31WFQ24tpv3YYgGXNddG7dEA67p7p2eogHX862t4aIB1/LtsySiAdexyuEz0YBrWO20qmjA+a16vF004NxWvw9DNOC8HnKBjmjAOT3sxi3RgPN56BV9ogHn8vA7PUUDzmOTS4BFA85hs1vDRQPGt+mYAdGAsW0+l0Q0YFy7DDISDRjTbpPPRAPGs+uoRNGAsew+W1U0YBy7B2OaRANGcYhgTJNowAgOE4xp+hMN4LgOFQzg2AQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyAQDyH7uvYCP5ud5enl92XsZcFjLr2XX3z/ME8b8PE/z87z3MoAvHCIYYgFj2D0YYgHj2DUYYgFj2S0YYgHj2SUYYgFj2jwYYgHj2jQYYgFj2ywYYgHj2yQYYgHn8PBgiAWcx0ODIRZwLg8LhljA+TwkGGIB57R6MMQCzmvVYIgFnNtqwRALOL9VgiEWcA3fDoZYwHV8KxhiAddydzDEAq7nrmCIBVzTzcEQC7ium4IhFnBtORhiAaRgiAUwTSEYYgG8+zIYYgF89GkwxAL419OyLPuOgwaGsftsVWAcggFkggFkggFkggFkggFkggFkggFkggFkvwGfaO25pOiisgAAAABJRU5ErkJggg==");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 63354
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 21301
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 38412
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAADXCAYAAACAlmTPAAAEuElEQVR4nO3dOXIkRxREwR4aD8abDfpmmJM1BTJnARpALVG5umuphfLsi/nt8Xg8bsBpf7UeALMQE4SICULEBCFighAxQYiYIERMECImCBEThIgJQsQEIWKCEDFBiJggREwQIiYIEROEiAlCxAQhYoIQMUGImCBETBAiJggRE4SICULEBCFighAxQYiYIERMECImCBEThIgJQsQEIWKCEDFBiJggREwQIiYIEROEiAlCxAQhYoIQMUGImCBETBAiJggRE4SICULEBCFighAxQYiYIERMECImCBEThIgJQsQEIWKCEDFBiJggREwQIiYIEROEiAlCxAQhYoIQMUGImCBETBAiJggRE4SICULEBCFighAxQYiYIERMECImCBEThIgJQsQEIWKCEDFBiJggREwQIiYIEROEiAlCxAQhYoIQMUGImCBETBAiJggRE4SICULEBCFighAxQYiYIERMHbu/3m/313vrGWz0d+sBPHd/vd9efrz8fH//53vDNWzhMnXobUgvP15cqAGIqTNvQyoE1T8xdeSjkApB9U1MnfgqpEJQ/RJTB7aGVAiqT2JqbG9IhaD6I6aGjoZUCKovYmrkbEiFoPohpgZSIRWC6oOYKkuHVAiqPTFVdFVIhaDaElMlV4dUCKodMVVQK6RCUG2I6WK1QyoEVZ+YLtQqpEJQdYnpIq1DKgRVj5gu0EtIhaDqEFNYbyEVgrqemIJ6DakQ1LXEFNJ7SIWgriOmgFFCKgR1DTGdNFpIhaDyxHTCqCEVgsoS00Gjh1QIKkdMB8wSUiGoDDHtNFtIhaDOE9MOs4ZUCOocMW00e0iFoI4T0warhFQI6hgxfWG1kApB7SemT6waUiGofcT0gdVDKgS1nZieENKfBLWNmN4Q0nOC+pqYfiOkzwnqc2L6n5C2EdTHxHQT0l6Cem75mIR0jKDeWzomIZ0jqD8tG5OQMgT1y5IxCSlLUP9ZLiYhXUNQi8UkpGutHtQyMQmpjpWDWiImIdW1alDTxySkNlYMauqYhNTWakFNG5OQ+rBSUFPGJKS+rBLUdDEJqU8rBDVVTELq2+xBTROTkMYwc1BTxCSkscwa1PAxCWlMMwY1dExCGttsQQ0bk5DmMFNQQ8YkpLnMEtRwMQlpTjMENVRMQprb6EENE5OQ1jByUEPEJKS1jBpU9zEJaU0jBtV1TEJa22hBdRuTkLjdxgqqy5iExO9GCaq7mITEMyME1VVMQuIzvQfVTUxCYoueg+oiJiGxR69BNY9JSBzRY1BNYxISZ/QWVLOYhERCT0E1iUlIJPUSVPWYhMQVegiqakxC4kqtg6oWk5CooWVQVWISEjW1CurymIRECy2CujQmIdFS7aAui0lI9KBmUJfEJCR6UiuoeExCokc1gorGJCR6dnVQsZiExAiuDCoSk5AYyVVBnY5JSIzoiqBOxSQkRpYO6nBMQmIGyaAOxSQkZpIKandMQmJGiaB2xSQkZnY2qM0xCYkVnAlqU0xCYiVHg/oyJiGxoiNBfRqTkFjZ3qA+jElIsC+opzEJCX7ZGtS7mIQE720J6tvj8XhU2gNTa/4LBsxCTBAiJggRE4SICULEBCFighAxQYiYIERMEPIvnEjCVlZsJOsAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 23239
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAU4AAADLCAYAAAABWXq2AAAFMElEQVR4nO3du3kbVxSF0ZFaURVugCpIDYi9uApFciGuBQrsz7omQQB7MHOfa2Un29Gfnk+Xy+WyAfCwz60HAIxGOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHhBAgJJ0BIOAFCwgkQEk6AkHAChIQTICScACHh7Njrz9ft659ftx9//2g9BSh8ulwul9YjeO/15+v2/a/v/90vX162b398216+vDRcBWybcHbpbTRLAgrtCWdnbkWzJKDQjnB25NFolgQU6hPOTuyJZklAoR7h7MCz0SwJKJxPOBs7MpolAYXzCGdDZ0WzJKBwPOFspEY0SwIKxxHOBmpHsySg8DzhrKxlNEsCCvsJZ0W9RLMkoJATzkp6jGZJQOFxwllB79EsCSjcJ5wnGymaJQGFjwnniUaNZklA4T3hPMkM0SwJKPwmnCeYLZolAQXhPNzM0SwJKCsTzgOtEs2SgLIi4TzIitEsCSgrEc4DrB7NkoCyAuF8kmheJ6DMTDifIJr3CSgzEs6dRDMjoMxEOHcQzf0ElBkIZ0g0jyGgjEw4A6J5PAFlRML5INE8l4AyEuF8gGjWI6CMQDjvEM02BJSeCecNotmegNIj4fyAaPZFQOmJcF4hmv0SUHognG+I5hgElJaEsyCa4xFQWhDOf4nm2ASUmoRzE82ZCCg1LB9O0ZyTgHKmpcMpmvMTUM6wbDhFcy0CypGWDKdorktAOcJy4RRNtk1Aec5S4RRN3hJQ9lgmnKLJLQJKYolwiiaPElAeMX04RZM9BJRbpg6naPIsAeWaacMpmhxJQClNGU7R5CwCyrZNGE7RpAYBXdtU4RRNahPQNU0TTtGkJQFdyxThFE16IaBrGD6cokmPBHRuQ4dTNOmdgM5p2HCKJiMR0LkMGU7RZFQCOofhwimazEBAxzZUOEWT2QjomIYJp2gyMwEdyxDhFE1WIaBj6D6cosmKBLRvXYdTNFmdgPap23CKJvwmoH3pMpyiCdcJaB+6C6down0C2lZX4RRNyAhoG92EUzRhPwGtq4twiiYcQ0DraB5O0YTjCei5moZTNOFcAnqOZuEUTahHQI/VJJyiCW0I6DGqh1M0oT0BfU7VcIom9EVA96kWTtGEfglopko4RRPGIKCPOT2cognjEdDbTg2naMLYBPS608IpmjAPAf2/U8IpmjAnAf3H4eEUTZjf6gE9NJyiCWtZNaCHhVM0YV2rBfSQcIomsG3rBPTpcIom8NbsAX0qnKIJ3DJrQHeHUzSBR80W0F3hFE1gj1kCGodTNIFnjR7QKJyiCRxp1IA+HE7RBM4yWkAfCqdoAjWMEtC74RRNoLbeA3oznKIJtNRrQD8Mp2gCvegtoFfDKZpAj3oJ6LtwiibQu9YBrfpXHWAGn1sPABiNcAKEhBMgJJwAIeEECAknQEg4AULCCRASToCQcAKEhBMgJJwAIeEECAknQOgX+nHrEP7y3soAAAAASUVORK5CYII=");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 35550
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 34441
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAABvCAYAAABl2LUjAAADzUlEQVR4nO3c227bMBAA0UnRD7e/3H0w2uaiOLqQy+VyBthHAxaCgyQStW+Px+OBmXXv1+gvYLZKYjMLahvb/R78Ncwm6YKNbWy3m+DMPne/P22c7Ps/IwVn9r+L0OCn/9kEZ9YEGuy5QSI4W7lG0GDv3UjB2Yo1hAZHbv0LzlaqMTQ4+pxNcLZCHaDBmYfagrPKdYIGZ0+QCM4q1hEaXDmuJTirVGdocPVspOCsQgHQoMVBZMHZzAVBg1an/gVnMxYIDVq+YiM4m6lgaND6fTbB2QwNgAY9Xh4VnGVuEDTo9aa24CxjA6FBz7UIgrNMDYYGvXeQCM4ylAAaRCz8EZyNLAk0iNquJTgbUSJoELnKTnAWWTJoEL03UnAWUUJoMGJJq+CsZ0mhwaiNyIKzHiWGBiPXjwvOWpYcGoze9S84a9EE0GA0NhCcXWsSaJABGwjOzjURNMiCDQRnx5oMGmTCBoKzfU0IDbJhA8HZ6yaFBhmxgeBsu4mhQVZsIDj72OTQIDM2EJw9KwANsmMDwa1eEWgwAzYQ3KoVggazYAPBrVYxaDATNhDcKhWEBrNhA8FVryg0mBEbCK5qhaHBrNhAcNUqDg1mxgaCq9IC0GB2bCC42VsEGlTABoKbtYWgQRVsILjZWgwaVMIGgpulBaFBNWwguOwtCg0qYgPBZW1haFAVGwguW4tDg8rYQHBZEhpQHRsIbnRC+1d9bCC4UQntQ2tgA8FFJ7QvrYMNBBeV0DZbCxsIrndC+7b1sIHgeiW0l62JDQTXOqH92LrYQHCtEtqu1sYGgrua0HYnNhDc2YR2KLH9TXDHEtrhxPY+we1LaKcS2+cE9zqhnU5sWwluO6FdSmzfJbiPCe1yYnuV4J4JrUli+6nVwQmtWWLb06rghNY0se1tNXBCa57YjrQKOKF1SWxHqw5OaN0S25mqghNa18R2tmrghNY9sV2pCjihhSS2q80OTmhhia1Fs4ITWmhia9Vs4IQWnthaNgs4oQ1JbK3LDk5owxJbj7KCE9rQxNarbOCENjyx9SwLOKGlSGy9Gw1OaGkSW0SjwAktVWKLKhqc0NIltsiiwAktZWKLrjc4oaVNbCPqBU5oqRPbqFqDE1r+HluBEzW32+aP4FC32/jrWGlOtv3J0Rez2lwBJ7T4Odn2J0dfzIpzBpzQxozYCswRcEIbN2IrMnvACW3siK3QvAIntPEjtmKzBU5oOUZsBec9OKHlmZP9Hv2cz170/iG1D6yn7+35i8zMeudxLbOgxGYWlNjMghKbWVBiMwtKbGZBic0sqD8ZKeezhI6WxgAAAABJRU5ErkJggg==");
/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


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