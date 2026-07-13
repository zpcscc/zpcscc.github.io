"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[3524],{

/***/ 24051
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_md_f1e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-数组方法详解-md-f1e.json
const site_docs_web_javascript_md_f1e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/数组方法详解","title":"数组方法详解","description":"JavaScript中数组的方法种类众多，在 ES3-ES7 不同版本时期都有新方法；并且数组的方法还有原型方法和从 object 继承的方法，这里我们只介绍数组在每个版本中原型上的方法，本文举例介绍了从 ES3 到 ES7 几乎所有的数组方法。","source":"@site/docs/web/javascript/数组方法详解.md","sourceDirName":"web/javascript","slug":"/web/javascript/数组方法详解","permalink":"/docs/web/javascript/数组方法详解","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"数组方法详解"},"sidebar":"web","previous":{"title":"数组","permalink":"/docs/web/javascript/数组/"},"next":{"title":"浏览器兼容","permalink":"/docs/web/javascript/浏览器兼容"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/web/javascript/数组方法详解.md


const frontMatter = {
	title: '数组方法详解'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、各版本数组方法一览表",
  "id": "一各版本数组方法一览表",
  "level": 2
}, {
  "value": "二、方法详解",
  "id": "二方法详解",
  "level": 2
}, {
  "value": "使用后原数组改变，失去原数组，得到改变后的新数组",
  "id": "使用后原数组改变失去原数组得到改变后的新数组",
  "level": 2
}, {
  "value": "1.pop()",
  "id": "1pop",
  "level": 3
}, {
  "value": "2.push()",
  "id": "2push",
  "level": 3
}, {
  "value": "3.shift()",
  "id": "3shift",
  "level": 3
}, {
  "value": "4.unshift()",
  "id": "4unshift",
  "level": 3
}, {
  "value": "5.reverse()",
  "id": "5reverse",
  "level": 3
}, {
  "value": "6.sort()",
  "id": "6sort",
  "level": 3
}, {
  "value": "1)从小到大排序",
  "id": "1从小到大排序",
  "level": 5
}, {
  "value": "2)从大到小排序",
  "id": "2从大到小排序",
  "level": 5
}, {
  "value": "7.splice()",
  "id": "7splice",
  "level": 3
}, {
  "value": "（1）不传参时：无操作",
  "id": "1不传参时无操作",
  "level": 4
}, {
  "value": "（2）只传入 start：表示从索引为 start 的数据开始删除，直到数组结束",
  "id": "2只传入-start表示从索引为-start-的数据开始删除直到数组结束",
  "level": 4
}, {
  "value": "（3）传入 start 和 num：表示从索引为 start 的数据开始删除，删除 num 个",
  "id": "3传入-start-和-num表示从索引为-start-的数据开始删除删除-num-个",
  "level": 4
}, {
  "value": "（4）传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置",
  "id": "4传入更多表示从索引为-start-的数据开始删除删除-num-个并将第三个参数及后面所有参数插入到-start-的位置",
  "level": 4
}, {
  "value": "1）删除的数据，等于，添加的数据，数量相同。相当于把某几个数据替换了",
  "id": "1删除的数据等于添加的数据数量相同相当于把某几个数据替换了",
  "level": 5
}, {
  "value": "2）删除的数据，多于，添加的数据。多的空位由后面的数据向前移补上",
  "id": "2删除的数据多于添加的数据多的空位由后面的数据向前移补上",
  "level": 5
}, {
  "value": "3)删除的数据，少于，添加的数据。多的数据挤进去，后面的元素都相应后退。",
  "id": "3删除的数据少于添加的数据多的数据挤进去后面的元素都相应后退",
  "level": 5
}, {
  "value": "（5）传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置",
  "id": "5传入更多表示从索引为-start-的数据开始删除删除-num-个并将第三个参数及后面所有参数插入到-start-的位置",
  "level": 4
}, {
  "value": "8.ES6 新增：copyWithin()",
  "id": "8es6-新增copywithin",
  "level": 3
}, {
  "value": "9.ES6 新增：fill()",
  "id": "9es6-新增fill",
  "level": 3
}, {
  "value": "第二类、使用后原数组不变，返回新数组后，仍然可以得到原数组",
  "id": "第二类使用后原数组不变返回新数组后仍然可以得到原数组",
  "level": 2
}, {
  "value": "1.concat()",
  "id": "1concat",
  "level": 3
}, {
  "value": "2.join()",
  "id": "2join",
  "level": 3
}, {
  "value": "3.slice()",
  "id": "3slice",
  "level": 3
}, {
  "value": "4.toString()",
  "id": "4tostring",
  "level": 3
}, {
  "value": "5.valueOf()",
  "id": "5valueof",
  "level": 3
}, {
  "value": "6.indexOf()",
  "id": "6indexof",
  "level": 3
}, {
  "value": "7.lastIndexOf()",
  "id": "7lastindexof",
  "level": 3
}, {
  "value": "8.forEach()",
  "id": "8foreach",
  "level": 3
}, {
  "value": "9.map()",
  "id": "9map",
  "level": 3
}, {
  "value": "（1）功能 1：同 forEach",
  "id": "1功能-1同-foreach",
  "level": 4
}, {
  "value": "（2）功能 2：每次回调函数的返回值被 map 组成新数组返回",
  "id": "2功能-2每次回调函数的返回值被-map-组成新数组返回",
  "level": 4
}, {
  "value": "10.filter()",
  "id": "10filter",
  "level": 3
}, {
  "value": "（1）功能 1：同 forEach",
  "id": "1功能-1同-foreach-1",
  "level": 4
}, {
  "value": "（2）功能 2：当回调函数的返回值为 true 时，本次的数组值返回给 filter，被 filter 组成新数组返回",
  "id": "2功能-2当回调函数的返回值为-true-时本次的数组值返回给-filter被-filter-组成新数组返回",
  "level": 4
}, {
  "value": "11.every()",
  "id": "11every",
  "level": 3
}, {
  "value": "（1）功能 1：当回调函数的返回值为 true 时，类似于 forEach 的功能，遍历所有；如果为 false，那么停止执行，后面的数据不再遍历，停在第一个返回 false 的位置。",
  "id": "1功能-1当回调函数的返回值为-true-时类似于-foreach-的功能遍历所有如果为-false那么停止执行后面的数据不再遍历停在第一个返回-false-的位置",
  "level": 4
}, {
  "value": "（2）功能 2：当每个回调函数的返回值都为 true 时，every 的返回值为 true，只要有一个回调函数的返回值为 false，every 的返回值都为 false",
  "id": "2功能-2当每个回调函数的返回值都为-true-时every-的返回值为-true只要有一个回调函数的返回值为-falseevery-的返回值都为-false",
  "level": 4
}, {
  "value": "12.some()",
  "id": "12some",
  "level": 3
}, {
  "value": "（1）功能 1",
  "id": "1功能-1",
  "level": 4
}, {
  "value": "（2）功能 2",
  "id": "2功能-2",
  "level": 4
}, {
  "value": "13.reduce()",
  "id": "13reduce",
  "level": 3
}, {
  "value": "14.reduceRight()",
  "id": "14reduceright",
  "level": 3
}, {
  "value": "15.ES6 新增：from()",
  "id": "15es6-新增from",
  "level": 3
}, {
  "value": "16.ES6 新增：of()",
  "id": "16es6-新增of",
  "level": 3
}, {
  "value": "17.ES6 新增：find()",
  "id": "17es6-新增find",
  "level": 3
}, {
  "value": "18.ES6 新增数组 findIndex()",
  "id": "18es6-新增数组-findindex",
  "level": 3
}, {
  "value": "19.ES7 新增：includes()",
  "id": "19es7-新增includes",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    hr: "hr",
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
    children: [(0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JavaScript"
      }), "中数组的方法种类众多，在 ES3-ES7 不同版本时期都有新方法；并且数组的方法还有原型方法和从 object 继承的方法，这里我们只介绍数组在每个版本中原型上的方法，本文举例介绍了从 ES3 到 ES7 几乎所有的数组方法。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "一各版本数组方法一览表",
      children: "一、各版本数组方法一览表"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "数组方法名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "对应版本"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "功能"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "原数组是否改变"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pop()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "删除最后一位，并返回删除的数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "在最后一位新增一或多个数据，返回长度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "shift()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "删除第一位，并返回删除的数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "unshift()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "在第一位新增一或多个数据，返回长度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reverse()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "反转数组，返回结果"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sort()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "排序（字符规则），返回结果"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "splice()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "删除指定位置，并替换，返回删除的数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "copyWithin()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES6-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "指定位置的成员复制到其他位置"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "fill()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES6-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "使用给定的值，填充到数组中，类似于替换"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "是"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "concat()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "合并数组，并返回合并之后的数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "join()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "使用分隔符，将数组转为字符串并返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "slice()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "截取指定位置的数组，并返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "toString()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES3-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "直接转为字符串，并返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "valueOf()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "返回数组对象的原始值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "indexOf()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "查询并返回数据的索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "lastIndexOf()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "反向查询并返回数据的索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "forEach()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "参数为回调函数，会遍历数组所有的项，回调函数接受三个参数，分别为 value，index，self；forEach 没有返回值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "map()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "同 forEach，同时回调函数返回数据，组成新数组由 map 返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "filter()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "同 forEach，同时回调函数返回布尔值，为 true 的数据组成新数组由 filter 返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "every()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "同 forEach，同时回调函数返回布尔值，全部为 true，由 every 返回 true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "some()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "同 forEach，同时回调函数返回布尔值，只要有一个为 true，由 some 返回 true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduce()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "归并，同 forEach，迭代数组的所有项，并构建一个最终值，由 reduce 返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "reduceRight()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES5-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "反向归并，同 forEach，迭代数组的所有项，并构建一个最终值，由 reduceRight 返回"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "from()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES6-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "将类数组对象和可遍历对象转化为数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "of()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES6-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "将一组值转化为数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "find()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES6-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "在数组内部, 找到第一个符合条件的数组成员，返回值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "findIndex()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES6-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "在数组内部, 找到第一个符合条件的数组成员，返回索引"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "includes()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ES7-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "表示某个数组是否包含给定的值，与字符串的 includes()方法类似"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "否"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二方法详解",
      children: "二、方法详解"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在讲解数组方法前，我们先简单将数组方法按上方表格内容分为下面两大类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（1）使用后会改变原数组"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "（2）使用后不会改变原数组"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用后原数组改变失去原数组得到改变后的新数组",
      children: "使用后原数组改变，失去原数组，得到改变后的新数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1pop",
      children: "1.pop()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：方法用于删除并返回数组的最后一个元素。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：无"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nconsole.log(arr.pop()); //3---删除并返回3\nconsole.log(arr); //[1,2]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2push",
      children: "2.push()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：向数组的末尾添加一个或更多元素，并返回数组新的长度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：push(newData1, newData2, ......)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nconsole.log(arr.push(\"a\")); //4---返回数组现在的长度\nconsole.log(arr); //[1,2,3,\"a\"]---原数组改变\nconsole.log(arr.push(\"hello\", \"world\")); //6---一次可添加多个数组，返回新的数组长度\nconsole.log(arr); //[1,2,3,\"a\",\"hello\",world]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3shift",
      children: "3.shift()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：方法用于删除并返回数组的第一个元素。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：无"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nconsole.log(arr.shift()); //1---返回被删除的元素\nconsole.log(arr); //[2,3]---原数组改变\nconsole.log(arr.shift()); //2---返回被删除的元素\nconsole.log(arr); //[3]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4unshift",
      children: "4.unshift()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：向数组的开头添加一个或更多元素，并返回新的长度。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：unshift(newData1, newData2, ......)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nconsole.log(arr.unshift(\"world\")); //4---返回当前的数组长度\nconsole.log(arr); //[\"world\",1,2,3]---原数组改变\nconsole.log(arr.unshift(\"a\", \"b\", \"hello\")); //7---返回当前的数组长度，可一次性添加多个元素\nconsole.log(arr); //[\"a\",\"b\",\"hello\",\"world\",1,2,3]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5reverse",
      children: "5.reverse()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：颠倒数组中元素的顺序，并返回更改后的数组"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：无"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nconsole.log(arr.reverse()); //[3,2,1]---返回颠倒后的数组\nconsole.log(arr); //[3,2,1]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6sort",
      children: "6.sort()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：对数组中的元素进行排序，默认是升序，返回新数组"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：无"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [6, 1, 5, 2, 3, 4];\nconsole.log(arr.sort()); //[1, 2, 3, 4, 5, 6]---返回排序后的新数组，默认升序排列\nconsole.log(arr); //[1, 2, 3, 4, 5, 6]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "注意"
      }), "：但是在排序前，会先调用数组的", (0,jsx_runtime.jsx)(_components.strong, {
        children: "toString"
      }), "方法，将每个元素都转成字符之后，再进行排序，此时会按照字符串的排序，逐位比较，进行排序。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [6, 1024, 52, 256, 369];\nconsole.log(arr.sort()); //[1024, 256, 369, 52, 6]---按照第一个字符的大小排序，多位数值的排序会出错\nconsole.log(arr); //[1024, 256, 369, 52, 6]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "解决方法"
      }), "：通过回调函数实现"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：sort(callback)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果需要按照数值排序，需要传参。sort(callback)，callback 为回调函数，该函数应该具有两个参数，比较这两个参数，然后返回一个用于说明这两个值的相对"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顺序的数字（a-b）。其返回值如下：\n若 a 小于 b，返回一个小于 0 的值。\n若 a 等于 b，则返回 0。\n若 a 大于 b，则返回一个大于 0 的值。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1从小到大排序",
      children: "1)从小到大排序"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [6, 1024, 52, 256, 369];\nconsole.log(arr.sort(fn)); //[6, 52, 256, 369, 1024]---排序正常升序\nconsole.log(arr); //[6, 52, 256, 369, 1024]---原数组改变\nfunction fn(a, b) {\n  return a - b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2从大到小排序",
      children: "2)从大到小排序"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [6, 1024, 52, 256, 369];\nconsole.log(arr.sort(fn)); //[1024, 369, 256, 52, 6]---排序正常降序\nconsole.log(arr); //[1024, 369, 256, 52, 6]---原数组改变\nfunction fn(a, b) {\n  return b - a;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7splice",
      children: "7.splice()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：splice(start,num,data1,data2,...); 所有参数全部可选；分为多种情况"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "start"
      }), "：整数，规定添加/删除项目位置的索引，使用负数可从数组结尾处规定删除的位置"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "num"
      }), "：整数，规定要删除元素的数量，若为 0 则不会删除"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "data1，data2，data3....."
      }), ":可选，规定需要添加的元素"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1不传参时无操作",
      children: "（1）不传参时：无操作"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice()); //[]---不传参，不操作，没有没删除替换的元素，返回空数组\nconsole.log(arr); //[\"Tom\",\"Jack\",\"Lucy\",\"Lily\",\"May\"]---无操作，原数组未变，返回原数组\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2只传入-start表示从索引为-start-的数据开始删除直到数组结束",
      children: "（2）只传入 start：表示从索引为 start 的数据开始删除，直到数组结束"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice(2)); //[\"Lucy\", \"Lily\", \"May\"]--从索引为2开始删除，直到结束，返回被删除的数组\nconsole.log(arr); //[\"Tom\", \"Jack\"]---原数组改变，返回改变后的数组\nvar arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice(0)); //[\"Tom\",\"Jack\",\"Lucy\",\"Lily\",\"May\"]--从索引为0开始删除，直到结束\nconsole.log(arr); //[]---原数组数据被全部删除，返回空数组\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3传入-start-和-num表示从索引为-start-的数据开始删除删除-num-个",
      children: "（3）传入 start 和 num：表示从索引为 start 的数据开始删除，删除 num 个"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice(1, 3)); //[\"Jack\", \"Lucy\", \"Lily\",]---从索引为2开始删除，删除3个元素\nconsole.log(arr); //[\"Tom\", \"May\"]---原数组改变，按顺序返回剩下的元素\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "4传入更多表示从索引为-start-的数据开始删除删除-num-个并将第三个参数及后面所有参数插入到-start-的位置",
      children: "（4）传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1删除的数据等于添加的数据数量相同相当于把某几个数据替换了",
      children: "1）删除的数据，等于，添加的数据，数量相同。相当于把某几个数据替换了"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice(2, 2, \"a\", \"b\")); //[\"Lucy\", \"Lily\"]--从索引为2开始删除2个，再把\"a\"\"b\"插入删除的空隙\nconsole.log(arr); //[\"Tom\", \"Jack\", \"a\", \"b\", \"May\"]---原数组改变，相当于被替换了\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2删除的数据多于添加的数据多的空位由后面的数据向前移补上",
      children: "2）删除的数据，多于，添加的数据。多的空位由后面的数据向前移补上"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice(2, 2, \"a\")); //[\"Lucy\", \"Lily\"]--从索引为2开始删除2个，再把\"a\"插入删除的空隙，多的空隙，后面数据补上来。\nconsole.log(arr); //[\"Tom\", \"Jack\", \"a\", \"May\"]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3删除的数据少于添加的数据多的数据挤进去后面的元素都相应后退",
      children: "3)删除的数据，少于，添加的数据。多的数据挤进去，后面的元素都相应后退。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice(2, 1, \"a\", \"b\")); //[\"Lucy\"]--从索引为2开始删除2个，再把\"a\"\"b\"插入删除的空隙\nconsole.log(arr); //[\"Tom\", \"Jack\", \"a\", \"b\", \"Lily\", \"May\"]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "5传入更多表示从索引为-start-的数据开始删除删除-num-个并将第三个参数及后面所有参数插入到-start-的位置",
      children: "（5）传入更多：表示从索引为 start 的数据开始删除，删除 num 个，并将第三个参数及后面所有参数，插入到 start 的位置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.splice(2, 0, \"a\", \"b\")); //[]\nconsole.log(arr); //[\"Tom\", \"Jack\", \"a\", \"b\", \"Lucy\", \"Lily\", \"May\"]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8es6-新增copywithin",
      children: "8.ES6 新增：copyWithin()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：在当前数组内部，将指定位置的成员复制到其他位置顶替掉原来位置的元素，并返回新数组"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：copyWithin(target,start=0,end=this.length)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "target"
      }), "：从该索引位置开始替换元素，如果为负值，则表示从右往左"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "start"
      }), "：从该索引位置开始读取元素（包括该索引对应的元素）。默认为 0，如果为负值，则表示从右往左"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "end"
      }), "：到该索引位置前停止读取元素（不包括该索引对应的元素）。默认等于数组长度，使用负数可从数组结尾处规定位置开始"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), "：数组的长度前后不会改变"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr=[\"Tom\",\"Jack\",\"Lucy\",\"Lily\",\"May\"，\"Alice\",\"Ben\",\"Rouse\",\"Peter\"]\nconsole.log(arr.copyWithin(1,3,6));\n//[\"Tom\", \"Lily\", \"May\", \"Alice\", \"May\", \"Alice\", \"Ben\", \"Rouse\", \"Peter\"]\n//从索引为1的元素开始被替换,从索引为3的元素开始读取要替换的 索引为6的元素前面停止替换\n//简单来说就是将索引为3,4,5位置的元素复制到索引为1,2,3的位置上.后面的元素不变。\n\nvar arr = [1, 2, 3, 4, 5];\nconsole.log(arr.copyWithin(0, -2, -1));//负数表示从右到左数索引。-2相当于索引2的位置，-1相当索引为3的位置\n//[4, 2, 3, 4, 5]\n//表示将索引为-2的元素复制到索引为0的位置上\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9es6-新增fill",
      children: "9.ES6 新增：fill()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：使用给定的值，填充到数组中，类似于替换"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：fill(data,start,end)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "data"
      }), "：要填充数组的值"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "start"
      }), "：填充开始的位置，默认值是 0"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "end"
      }), "：填充结束的位置，默认值是 this.length(数组长度)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"a\", \"b\", \"c\"];\nconsole.log(arr.fill(7)); //[7, 7, 7]---start和end都为0，默认填充所有元素\nconsole.log(arr); //[7, 7, 7]---原数组改变\nvar arr = [\"a\", \"b\", \"c\", \"d\", \"e\", \"f\"];\nconsole.log(arr.fill(7, 1, 4)); //[\"a\", 7, 7, 7, \"e\", \"f\"]---将索引1到4的元素填充为7\nconsole.log(arr); //[\"a\", 7, 7, 7, \"e\", \"f\"]---原数组改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "第二类使用后原数组不变返回新数组后仍然可以得到原数组",
      children: "第二类、使用后原数组不变，返回新数组后，仍然可以得到原数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1concat",
      children: "1.concat()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：用于将两个或多个数组连接到一起"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：concat(data1,data2,...);"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "data"
      }), "：为数组时，将 data 合并到原数组；data 为具体数据时直接添加到原数组尾部；省略时创建原数组的副本"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr1 = [1, 2, 3];\nvar arr2 = arr1.concat();\nconsole.log(arr1); //[1,2,3]---原数组\nconsole.log(arr2); //[1,2,3]---原数组的副本;看起来和原数组一样，但他们是两个东西，不相等。\nconsole.log(arr1 === arr2); //false---数组也是对象的一种，所有对象都不相等，除非是对象本身等于自己\nconsole.log(arr1.concat(\"hello\", \"world\")); //[1,2,3,\"hello\",\"world\"]---将字符拼接到数组后\nconsole.log(arr1.concat([\"a\", \"b\"], [[3, 4], { name: \"admin\" }])); //[1,2,3,\"a\",\"b\",[3,4],{\"name\":\"admin\"}]\nvar arr3 = [4, 5, 6];\nconsole.log(arr1.concat(arr3)); //[1, 2, 3, 4, 5, 6]---将两个数组拼接\nconsole.log(arr1); //[1,2,3]---原数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2join",
      children: "2.join()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：根据指定分隔符将数组中的所有元素放入一个字符串，并返回这个字符串"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：join(str);"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "str"
      }), "：默认为\",\"号，以传入的字符作为分隔符"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nconsole.log(arr.join()); //1,2,3---将数组每个元素用\",\"连接成字符串并返回\nconsole.log(arr.join(\"-\")); //1-2-3---将数组每个元素用\"-\"连接成字符串并返回\nconsole.log(arr); //[1,2,3]---原数组未改变\n\n//当数组里的元素也是数组或对象时\nvar a = [[\"OBKoro1\", \"23\"], \"test\"];\nconsole.log(a.join(\"*\")); //OBKoro1,23*test---数组内的还是用\",\"连接（join只对一维数组连接，多维数组时，里面的数组不连接，只是转成字符串），数组外的用\"*\"连接\nvar b = [{ name: \"OBKoro1\", age: \"23\" }, \"test\"];\nconsole.log(b.join(\"*\")); //[object Object]*test---数组内是对象时。会出问题，先转成数组，对象内容显示\"Object\",再连接。不能显示具体值\n// 对象转字符串推荐JSON.stringify(obj);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3slice",
      children: "3.slice()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：可从已有的数组中返回选定的元素。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：slice(start, end)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "start"
      }), "：为必填，表示从第几位索引开始。若为负数，则表示从后往前计算索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "end"
      }), "：为可填，表示到第几位结束(不包含 end 位)，省略表示到最后一位；若为负数，则表示从后往前计算索引"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nconsole.log(arr.slice(1, 3)); //[\"Jack\",\"Lucy\"]---返回索引为1,2的元素组成的数组\nconsole.log(arr.slice(1)); //[\"Jack\",\"Lucy\",\"Lily\",\"May\"]---返回索引为1,2,3,4的元素组成的数组\nconsole.log(arr.slice(-4, -1)); //[\"Jack\",\"Lucy\",\"Lily\"]\nconsole.log(arr.slice(-2)); //[\"Lily\",\"May\"]\nconsole.log(arr.slice(1, -2)); //[\"Jack\",\"Lucy\"]\nconsole.log(arr); //[\"Tom\",\"Jack\",\"Lucy\",\"Lily\",\"May\"]---原数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4tostring",
      children: "4.toString()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：转换成字符串，类似于没有参数的 join()。该方法会在数据发生隐式类型转换时被自动调用，如果手动调用，就是直接转为字符串。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：无"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nvar a = [{ name: \"OBKoro1\", age: \"23\" }, \"test\"];\nconsole.log(arr.toString()); //1,2,3---转为字符\nconsole.log(a.toString()); //[object Object],test--对象没办法直接转\nconsole.log(arr); //[1,2,3]---原数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5valueof",
      children: "5.valueOf()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：返回数组的原始值（一般情况下其实就是数组自身），一般由 js 在后台调用，并不显式的出现在代码中"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：无"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\nconsole.log(arr.valueOf()); //[1,2,3]---返回的是数组本身\nconsole.log(arr); //[1,2,3]---原数组未变\n//为了证明返回的是数组自身\nconsole.log(arr.valueOf() == arr); //true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6indexof",
      children: "6.indexOf()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：根据指定的数据，从左向右，查询某元素在数组中出现的位置，如果不存在指定的元素，返回-1。该方法是查询方法，不会对数组产生改变。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：indexOf(value, start);"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), "：必填，要查询的数据；"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "start"
      }), "：选填，表示开始查询的位置，当 start 为负数时，从数组的尾部向前数；如果查询不到 value 的存在，则方法返回-1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"h\", \"e\", \"l\", \"l\", \"o\"];\nconsole.log(arr.indexOf(\"l\")); //2---字母\"l\"在数组中的索引，返回第一个索引\nconsole.log(arr.indexOf(\"l\", 3)); //3\nconsole.log(arr.indexOf(\"l\", 4)); //-1---从索引为4的位置开始查询，未找到返回-1\nconsole.log(arr.indexOf(\"l\", -1)); //-1\nconsole.log(arr.indexOf(\"l\", -3)); //2\nconsole.log(arr); // [\"h\",\"e\",\"l\",\"l\",\"o\"]---原数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7lastindexof",
      children: "7.lastIndexOf()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**功能：**根据指定的数据，从右向左，查询在数组中出现的位置，如果不存在指定的数据，返回-1。该方法是查询方法，不会对数组产生改变。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**参数：**lastIndexOf(value, start);"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), "：必填，要查询的数据；"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "start"
      }), "：选填，表示开始查询的位置，当 start 为负数时，从数组的头部向尾部数；如果查询不到 value 的存在，则方法返回-1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"h\", \"e\", \"l\", \"l\", \"o\"];\nconsole.log(arr.lastIndexOf(\"l\")); //3\nconsole.log(arr.lastIndexOf(\"l\", 3)); //3\nconsole.log(arr.lastIndexOf(\"l\", 1)); //-1\nconsole.log(arr.lastIndexOf(\"l\", -3)); //2\nconsole.log(arr.lastIndexOf(\"l\", -4)); //-1\nconsole.log(arr); // [\"h\",\"e\",\"l\",\"l\",\"o\"]---原数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8foreach",
      children: "8.forEach()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：用来遍历数组，该方法没有返回值。forEach 接收的回调函数会根据数组的每一项执行，该回调函数默认有三个参数，分别为：遍历到的数组的数据，对应的索引，数组自身。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：forEach(callback);callback 默认有三个参数，分别为 value，index，self。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), "：遍历到的数组元素"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：元素对应的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：数组自身"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.forEach(function(value, index, self) {\n  console.log(index + \"--\" + value + \"--\" + self);\n});\n// 打印结果为：---第一列为遍历到的数组元素，第二列为对应的索引，第三列为数组自身\n// 0--Tom--Tom,Jack,Lucy,Lily,May\n// 1--Jack--Tom,Jack,Lucy,Lily,May\n// 2--Lucy--Tom,Jack,Lucy,Lily,May\n// 3--Lily--Tom,Jack,Lucy,Lily,May\n// 4--May--Tom,Jack,Lucy,Lily,May\nconsole.log(arr); //[\"Tom\",\"Jack\",\"Lucy\",\"Lily\",\"May\"]---原数组未改变\nconsole.log(a); //undefined---forEach没有返回值\n//该方法为遍历方法，不会修改原数组\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9map",
      children: "9.map()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：1.同 forEach 功能；2.map 的回调函数会将执行结果返回，最后 map 将所有回调函数的返回值组成新数组返回。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：map()接收一个回调函数作为参数，这个回调函数需要有返回值；map(callback);callback 默认有三个参数，分别为 value，index，self。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), "：遍历到的数组元素"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：元素对应的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：数组自身"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1功能-1同-foreach",
      children: "（1）功能 1：同 forEach"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.map(function(value, index, self) {\n  console.log(index + \"--\" + value + \"--\" + self);\n});\n// 打印结果为：---第一列为遍历到的数组元素，第二列为对应的索引，第三列为数组自身\n// 0--Tom--Tom,Jack,Lucy,Lily,May\n// 1--Jack--Tom,Jack,Lucy,Lily,May\n// 2--Lucy--Tom,Jack,Lucy,Lily,May\n// 3--Lily--Tom,Jack,Lucy,Lily,May\n// 4--May--Tom,Jack,Lucy,Lily,May\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2功能-2每次回调函数的返回值被-map-组成新数组返回",
      children: "（2）功能 2：每次回调函数的返回值被 map 组成新数组返回"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.map(function(value, index, self) {\n  return \"hi:\" + value;\n});\nconsole.log(a); //[\"hi:Tom\", \"hi:Jack\", \"hi:Lucy\", \"hi:Lily\", \"hi:May\"]\n//可通过此方法批量修改数组，返回新数组。\nconsole.log(arr); //[\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"]---原数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10filter",
      children: "10.filter()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**功能：**1.同 forEach 功能；2.filter 的回调函数需要返回布尔值，当为 true 时，将本次数组的数据返回给 filter，最后 filter 将所有回调函数的返回值组成新数组返回（此功能可理解为“过滤”）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "**参数：**filter()接收一个回调函数作为参数，这个回调函数需要有返回值；filter(callback);callback 默认有三个参数，分别为 value，index，self"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), "：遍历到的数组元素"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：元素对应的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：数组自身"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1功能-1同-foreach-1",
      children: "（1）功能 1：同 forEach"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.filter(function(value, index, self) {\n  console.log(index + \"--\" + value + \"--\" + self);\n});\n// 打印结果为：---第一列为遍历到的数组元素，第二列为对应的索引，第三列为数组自身\n// 0--Tom--Tom,Jack,Lucy,Lily,May\n// 1--Jack--Tom,Jack,Lucy,Lily,May\n// 2--Lucy--Tom,Jack,Lucy,Lily,May\n// 3--Lily--Tom,Jack,Lucy,Lily,May\n// 4--May--Tom,Jack,Lucy,Lily,May\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2功能-2当回调函数的返回值为-true-时本次的数组值返回给-filter被-filter-组成新数组返回",
      children: "（2）功能 2：当回调函数的返回值为 true 时，本次的数组值返回给 filter，被 filter 组成新数组返回"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.filter(function(value, index, self) {\n  return value.length > 3; //返回元素长度大于3的元素。若有符合条件的元素，返回元素\n});\nconsole.log(a); //[\"Jack\", \"Lucy\", \"Lily\"]\n//相当于一个筛选器（过滤器），可以在数组中查找需要的内容并返回\nconsole.log(arr); //[\"Tom\", \"Jack\", \"Lucy\", \"Lily\", \"May\"]---原数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11every",
      children: "11.every()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：判断数组中每一项是否都满足条件，只有所有项都满足条件，才会返回 true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：every()接收一个回调函数作为参数，这个回调函数需要有返回值；every(callback);callback 默认有三个参数，分别为 value，index，self"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), "：遍历到的数组元素"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：元素对应的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：数组自身"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1功能-1当回调函数的返回值为-true-时类似于-foreach-的功能遍历所有如果为-false那么停止执行后面的数据不再遍历停在第一个返回-false-的位置",
      children: "（1）功能 1：当回调函数的返回值为 true 时，类似于 forEach 的功能，遍历所有；如果为 false，那么停止执行，后面的数据不再遍历，停在第一个返回 false 的位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//demo1:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.every(function(value, index, self) {\n  console.log(value + \"--\" + index + \"--\" + (arr == self));\n});\n// 打印结果为：没有返回值，打印了第一个，默认为false，后面的就不再遍历\n// Tom--0--true\n//因为回调函数中没有return true，默认返回undefined，等同于返回false\n\n//demo2:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.every(function(value, index, self) {\n  console.log(value + \"--\" + index + \"--\" + (arr == self));\n  return value.length < 4;\n});\n// 打印结果为：\n// Tom--0--true\n// abc--1--true\n// Jack--2--true\n//因为当遍历到Jack时，回调函数到return返回false，此时Jack已经遍历，但是后面数据就不再被遍历了\n\n//demo3:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.every(function(value, index, self) {\n  console.log(value + \"--\" + index + \"--\" + (arr == self));\n  return true;\n});\n// 打印结果为：\n// Tom--0--true\n// abc--1--true\n// Jack--2--true\n// Lucy--3--true\n// Lily--4--true\n// May--5--true\n//因为每个回调函数的返回值都是true，那么会遍历数组所有数据，等同于forEach功能\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2功能-2当每个回调函数的返回值都为-true-时every-的返回值为-true只要有一个回调函数的返回值为-falseevery-的返回值都为-false",
      children: "（2）功能 2：当每个回调函数的返回值都为 true 时，every 的返回值为 true，只要有一个回调函数的返回值为 false，every 的返回值都为 false"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//demo1:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.every(function(value, index, self) {\n  return value.length > 3;\n});\nconsole.log(a); //false---只要出现一个false，返回值就为false\n\n//demo2:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.every(function(value, index, self) {\n  return value.length > 2;\n});\nconsole.log(a); //true---遍历数组全部为true，才能返回true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12some",
      children: "12.some()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回 true。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：some()接收一个回调函数作为参数，这个回调函数需要有返回值，some(callback);callback 默认有三个参数，分别为 value，index，self"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "value"
      }), "：遍历到的数组元素"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：元素对应的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：数组自身"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1功能-1",
      children: "（1）功能 1"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为要判断数组中的每一项，只要有一个回调函数返回 true，some 都会返回 true，所以与 every 正好相反，当遇到一个回调函数的返回值为 true 时，可以确定结果，那么停止执行，后面都数据不再遍历，停在第一个返回 true 的位置；当回调函数的返回值为 false 时，需要继续向后执行，到最后才能确定结果，所以会遍历所有数据，实现类似于 forEach 的功能，遍历所有。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//demo1:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.some(function(value, index, self) {\n  console.log(value + \"--\" + index + \"--\" + (arr == self));\n  return value.length > 3;\n});\n// 打印结果为：\n// Tom--0--true\n// abc--1--true\n// Jack--2--true\n\n//demo2:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.some(function(value, index, self) {\n  console.log(value + \"--\" + index + \"--\" + (arr == self));\n  return true;\n});\n// 打印结果为：\n// Tom--0--true\n\n//demo3:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.some(function(value, index, self) {\n  console.log(value + \"--\" + index + \"--\" + (arr == self));\n  return false;\n});\n// 打印结果为：\n// Tom--0--true\n// abc--1--true\n// Jack--2--true\n// Lucy--3--true\n// Lily--4--true\n// May--5--true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2功能-2",
      children: "（2）功能 2"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与 every 相反，只要有一个回调函数的返回值都为 true，some 的返回值为 true，所有回调函数的返回值为 false，some 的返回值才为 false"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//demo1:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.some(function(value, index, self) {\n  return value.length > 3;\n});\nconsole.log(a); //true\n\n//demo2:\nvar arr = [\"Tom\", \"abc\", \"Jack\", \"Lucy\", \"Lily\", \"May\"];\nvar a = arr.some(function(value, index, self) {\n  return value.length > 4;\n});\nconsole.log(a); //false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13reduce",
      children: "13.reduce()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：从数组的第一项开始，逐个遍历到最后，迭代数组的所有项，然后构建一个最终返回的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：reduce()接收一个或两个参数：第一个是回调函数，表示在数组的每一项上调用的函数；第二个参数（可选的）作为归并的初始值，被回调函数第一次执行时的第一个参数接收。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reduce(callback,initial);callback 默认有四个参数，分别为 prev，now，index，self"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "callback 返回的任何值都会作为下一次执行的第一个参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果 initial 参数被省略，那么第一次迭代发生在数组的第二项上，因此 callback 的第一个参数是数组的第一项，第二个参数就是数组的第二项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "prev"
      }), "：初始值, 或者计算结束后的返回值"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "now"
      }), "：当前元素值"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：当前元素的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：数组自身"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//demo1:不省略initial参数，回调函数没有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduce(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n}, 2019);\n// 打印结果为：\n// 2019--10--0--true\n// undefined--20--1--true\n// undefined--30--2--true\n// undefined--40--3--true\n// undefined--50--4--true\n// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined\n\n//demo2:省略initial参数，回调函数没有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduce(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n});\n// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项\n// 10--20--1--true\n// undefined--30--2--true\n// undefined--40--3--true\n// undefined--50--4--true\n// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined\n\n//demo3:不省略initial参数，回调函数有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduce(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n  return \"hello\";\n}, 2019);\n// 打印结果为：\n// 2019--10--0--true\n// hello--20--1--true\n// hello--30--2--true\n// hello--40--3--true\n// hello--50--4--true\n// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值\n\n//demo4:省略initial参数，回调函数有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduce(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n  return \"hello\";\n});\n// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项\n// 10--20--1--true\n// hello--30--2--true\n// hello--40--3--true\n// hello--50--4--true\n// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数return的值\n\n//demo5：使用reduce计算数组中所有数据的和\nvar arr = [10, 20, 30, 40, 50];\nvar sum = arr.reduce(function(prev, now, index, self) {\n  return prev + now;\n});\nconsole.log(sum); //150\n// 回调函数的最后一次return的结果被返回到reduce方法的身上\n\n//demo6：使用reduce计算数组中所有数据的和\nvar arr = [10, 20, 30, 40, 50];\nvar sum = arr.reduce(function(prev, now, index, self) {\n  return prev + now;\n}, 8);\nconsole.log(sum); //158\n// 回调函数的最后一次return的结果被返回到reduce方法的身上\n// 因为reduce有第二个参数initial，在第一次执行时被计算，所以最终结果被加上8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14reduceright",
      children: "14.reduceRight()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：从数组的第一项开始，逐个遍历到最后，迭代数组的所有项，然后构建一个最终返回的值。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：reduce()接收一个或两个参数：第一个是回调函数，表示在数组的每一项上调用的函数；第二个参数（可选的）作为归并的初始值，被回调函数第一次执行时的第一个参数接收。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "reduce(callback,initial);callback 默认有四个参数，分别为 prev，now，index，self"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "callback 返回的任何值都会作为下一次执行的第一个参数。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果 initial 参数被省略，那么第一次迭代发生在数组的第二项上，因此 callback 的第一个参数是数组的第一项，第二个参数就是数组的第二项。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "prev"
      }), "：初始值, 或者计算结束后的返回值"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "now"
      }), "：当前元素值"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：当前元素的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：数组自身"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//demo1:不省略initial参数，回调函数没有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduceRight(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n}, 2019);\n// 打印结果为：\n//2019--50--4--true\n//undefined--40--3--true\n//undefined--30--2--true\n//undefined--20--1--true\n//undefined--10--0--true\n// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined\n\n//demo2:省略initial参数，回调函数没有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduceRight(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n});\n// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项\n//50--40--3--true\n//undefined--30--2--true\n//undefined--20--1--true\n//undefined--10--0--true\n// 此时回调函数没有return，所以从第二次开始，prev拿到的是undefined\n\n//demo3:不省略initial参数，回调函数有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduceRight(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n  return \"hello\";\n}, 2019);\n// 打印结果为：\n//2019--50--4--true\n//hello--40--3--true\n//hello--30--2--true\n//hello--20--1--true\n//hello--10--0--true\n// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数reduceRight的值\n\n//demo4:省略initial参数，回调函数有返回值\nvar arr = [10, 20, 30, 40, 50];\narr.reduceRight(function(prev, now, index, self) {\n  console.log(prev + \"--\" + now + \"--\" + index + \"--\" + (arr == self));\n  return \"hello\";\n});\n// 打印结果为：第一次，回调函数的第一个参数是数组的第一项。第二个参数就是数组的第二项\n//50--40--3--true\n//hello--30--2--true\n//hello--20--1--true\n//hello--10--0--true\n// 此时回调函数有return，所以从第二次开始，prev拿到的是回调函数reduceRight的值\n\n//demo5：使用reduce计算数组中所有数据的和\nvar arr = [10, 20, 30, 40, 50];\nvar sum = arr.reduceRight(function(prev, now, index, self) {\n  return prev + now;\n});\nconsole.log(sum); //150\n// 回调函数的最后一次return的结果被返回到reduceRight方法的身上\n\n//demo6：使用reduce计算数组中所有数据的和\nvar arr = [10, 20, 30, 40, 50];\nvar sum = arr.reduceRight(function(prev, now, index, self) {\n  return prev + now;\n}, 8);\nconsole.log(sum); //158\n// 回调函数的最后一次return的结果被返回到reduceRight方法的身上\n// 因为reduceRight有第二个参数initial，在第一次执行时被计算，所以最终结果被加上8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15es6-新增from",
      children: "15.ES6 新增：from()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：将类数组对象和可遍历对象转化为数组"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：from(object, mapFunction, thisValue)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "object"
      }), "：必需，要转换为数组的对象"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "mapFunction"
      }), "：可选，数组中每个元素要调用的函数"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "thisValue"
      }), "：可选，映射函数(mapFunction)中的 this 对象"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = \"foo\";\nconsole.log(Array.from(arr)); //[\"f\", \"o\", \"o\"]---将类数组对象转换为数组\nconsole.log(arr); //\"foo\"---不改变原对象\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16es6-新增of",
      children: "16.ES6 新增：of()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：将一组值转化为数组"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：of(element0[, element1[, ...[, elementN]]])"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "elementN"
      }), "：任意个参数，将按顺序成为返回数组中的元素"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "console.log(Array.of(1)); // [1]\nconsole.log(Array.of(1, 2, 3)); // [1, 2, 3]\nconsole.log(Array.of(undefined)); // [undefined]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17es6-新增find",
      children: "17.ES6 新增：find()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：在数组内部, 找到第一个符合条件的数组成员"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：find(callback[, thisArg])；callback 回调函数接受三个参数（element，index，self）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "element"
      }), "：可选；当前遍历到的元素"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：可选：当前遍历到的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：可选：数组本身"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "thisArg"
      }), "：执行回调时用作", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " 的对象"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var array = [5, 12, 8, 130, 44];\nvar found = array.find(function(element) {\n  return element > 10;\n});\nconsole.log(found); //12\nconsole.log(array); //[5, 12, 8, 130, 44]---原数组不便\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18es6-新增数组-findindex",
      children: "18.ES6 新增数组 findIndex()"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "功能"
      }), "：在数组内部, 找到第一个符合条件的数组成员 ，返回索引，若找不到返回-1"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "参数"
      }), "：arr.findIndex(callback[, thisArg])；callback 回调函数接受三个参数（element，index，self）"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "element"
      }), "：可选；当前遍历到的元素"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "index"
      }), "：可选：当前遍历到的索引"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "self"
      }), "：可选：数组本身"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "thisArg"
      }), "：执行回调时用作", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " 的对象"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var array = [5, 12, 8, 130, 44];\nfunction isLargeNumber(element) {\n  return element > 13;\n}\nconsole.log(array.findIndex(isLargeNumber)); //3\nconsole.log(array); //[5, 12, 8, 130, 44]---数组未改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19es7-新增includes",
      children: "19.ES7 新增：includes()"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "功能：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "参数： arr.includes(valueToFind[, fromIndex])"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "fromIndex"
      }), "：从", (0,jsx_runtime.jsx)(_components.code, {
        children: "fromIndex"
      }), " 索引处开始查找 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "valueToFind"
      }), "。如果为负值，则按升序从 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "array.length + fromIndex"
      }), " 的索引开始搜 （即使从末尾开始往前跳 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fromIndex"
      }), " 的绝对值个索引，然后往后搜寻）。默认为 0。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "valueToFind"
      }), "：需要查找的元素值"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var array = [1, 2, 3];\nconsole.log(array1.includes(2)); //true\nconsole.log(array); //[1, 2, 3]---原数组未改变\nvar pets = [\"cat\", \"dog\", \"bat\"];\nconsole.log(pets.includes(\"cat\")); //true\nconsole.log(pets.includes(\"at\")); //false\nconsole.log(pets); //['cat', 'dog', 'bat']---原数组未改变\n"
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