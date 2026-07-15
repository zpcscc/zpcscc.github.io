"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[4101],{

/***/ 84879
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_index_md_4d4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-数组-index-md-4d4.json
const site_docs_web_javascript_index_md_4d4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/数组/index","title":"数组","description":"一、数组是什么","source":"@site/docs/web/javascript/数组/index.md","sourceDirName":"web/javascript/数组","slug":"/web/javascript/数组/","permalink":"/docs/web/javascript/数组/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"数组"},"sidebar":"web","previous":{"title":"数据类型","permalink":"/docs/web/javascript/数据类型"},"next":{"title":"数组方法详解","permalink":"/docs/web/javascript/数组方法详解"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/web/javascript/数组/index.md


const frontMatter = {
	title: '数组'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、数组是什么",
  "id": "一数组是什么",
  "level": 2
}, {
  "value": "二、数组的特点",
  "id": "二数组的特点",
  "level": 2
}, {
  "value": "三、创建数组",
  "id": "三创建数组",
  "level": 2
}, {
  "value": "1.字面量方法创建",
  "id": "1字面量方法创建",
  "level": 3
}, {
  "value": "2.构造函数创建",
  "id": "2构造函数创建",
  "level": 3
}, {
  "value": "四、数组简单分类",
  "id": "四数组简单分类",
  "level": 2
}, {
  "value": "五、数组的赋值",
  "id": "五数组的赋值",
  "level": 2
}, {
  "value": "1.静态赋值：直接使用指定的值给指定位置的数组",
  "id": "1静态赋值直接使用指定的值给指定位置的数组",
  "level": 3
}, {
  "value": "2.动态赋值：在程序运行过程中，创建具体的值给元素赋值",
  "id": "2动态赋值在程序运行过程中创建具体的值给元素赋值",
  "level": 3
}, {
  "value": "六、各版本数组方法一览表",
  "id": "六各版本数组方法一览表",
  "level": 2
}, {
  "value": "七、数组的排序",
  "id": "七数组的排序",
  "level": 2
}, {
  "value": "1.冒泡排序：",
  "id": "1冒泡排序",
  "level": 3
}, {
  "value": "2.选择排序：",
  "id": "2选择排序",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    img: "img",
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
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "一数组是什么",
      children: "一、数组是什么"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "所谓数组，是有序的元素序列。\n若将多个类型的变量的集合命名，那么这个名称为数组名。\n组成数组的各个变量称为数组的元素，有时也称为下标变量。\n用于区分数组的各个元素的数字编号称为下标。是一组数据的组合,多个数据的集合。数组是一种特殊的对象。\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二数组的特点",
      children: "二、数组的特点"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1.数组内的数据有一些相关性的。\n2.数组里的数据有一定的顺序。\n3.数组里面可以放任何的数据类型，也可同时存放不同类型的数据。\n4.任意数组之间都不相等，哪怕数组内的数据相同也不相等。数组是一种特殊的对象\nTip：js中任何两个对象都不相等，只要相等了，那就是同一个对象，相等于自身\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三创建数组",
      children: "三、创建数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1字面量方法创建",
      children: "1.字面量方法创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [1, 2, 3];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2构造函数创建",
      children: "2.构造函数创建"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = new Array[];\n//构造函数方法创建时，若括号内只有一个数值型数据，则表示这个数组中有几个元素，值为undefined\n//两种方法的不同\n//例：\nvar arr1 = [5]             //表示有一个数组元素5\nvar arr2 = new Array(5)    //表示有5个数组元素，值全部为undefined\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "四数组简单分类",
      children: "四、数组简单分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//数值数组\n\tvar arr = [3,4,5,6];\n//字符数组\n\tvar arr = [\"a\",\"b\",\"c\",\"d\"];\n//数组数组(二维数组，多维数组)\n\tvar arr = [[2,5],[\"a\",\"b\"],[true,false]];\n//json数组\n\tvar arr = [{name:\"admin\"},{name:\"root\",{name:\"zhangsan\"}];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "五数组的赋值",
      children: "五、数组的赋值"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1静态赋值直接使用指定的值给指定位置的数组",
      children: "1.静态赋值：直接使用指定的值给指定位置的数组"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "arr[0] = 1;\narr[1] = \"hello\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2动态赋值在程序运行过程中创建具体的值给元素赋值",
      children: "2.动态赋值：在程序运行过程中，创建具体的值给元素赋值"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "arr[0] = Math.random(); //调用Math的随机数方法，生成随机数赋值给数组\narr[1] = Math.random();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "六各版本数组方法一览表",
      children: "六、各版本数组方法一览表"
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
      id: "七数组的排序",
      children: "七、数组的排序"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1冒泡排序",
      children: "1.冒泡排序："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["​ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "依次对数组中相邻数字进行比较（两两比较，大的放后面）"
      }), "\n", (0,jsx_runtime.jsx)(_components.img, {
        alt: "冒泡懵逼排序",
        src: (__webpack_require__(99956)/* ["default"] */ .A) + "",
        width: "580",
        height: "580"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "var arr = [5, 99, 2, 9, 1, 5, 67, 7, 10, 23]; //定义一个杂乱的数组\nfor (var i = 0; i < arr.length - 1; i++) {\n  //大循环，用于遍历数组每个元素\n  for (var j = 0; j < arr.length - i - 1; j++) {\n    //小循环，用于将数组中的某个元素与其它所有元素相比较\n    var sum; //声明一个局部变量，当作第三个空瓶子\n    if (arr[j] > arr[j + 1]) {\n      //判断当前元素和后一个元素的大小，如果当前元素比后一个元素大\n      sum = arr[j + 1]; //将后一个元素（小元素）放在空瓶子里\n      arr[j + 1] = arr[j]; //将当前元素（大元素）放在后一个元素的位置\n      arr[j] = sum; //将小元素从空瓶子中拿出来，放在当前元素的位置\n    }\n  }\n}\nconsole.log(arr); //完成循环之后，初始数组的顺序已经发生改变\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2选择排序",
      children: "2.选择排序："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["​ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "将第一位依次与后面的元素相比较，得到最小值，与第一位交换。再用第二位依次与后面元素相比较，得到最小值，与第二位交换。"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["​ ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "从原始数据中找到最小元素，并放在数组的最前面。然后再从下面的元素中找到最小元素，放在之前最小元素的后面，直到排序完成。"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://cdn.jsdelivr.net/gh/zpcscc/myImg@master/img/20200813184243.jpg",
        alt: ""
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        metastring: "var arr = [5,99,2,9,1,5,67,7,10,23]",
        children: "var arr = [5, 99, 2, 9, 1, 5, 67, 7, 10, 23];\nfor (var i = 0; i < arr.length - 1; i++) {\n  //大循环，需要比对的次数\n  var min = arr[i]; //假定一个最小值\n  var minIndex = i; //假定最小值的索引\n  for (var j = i + 1; j < arr.length; j++) {\n    //小循环，每次需要比对的次数\n    if (min > arr[j]) {\n      //判断最小值是否为真的最小值\n      min = arr[j]; //获取真正的最小值\n      minIndex = j; //获取真正最小值的索引\n    }\n  }\n  arr[minIndex] = arr[i]; //将当前元素放在最小值的位置\n  arr[i] = min; //将最小值放在当前元素的位置\n}\nconsole.log(arr); //输入排序好的数组\n"
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

/***/ 99956
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/冒泡懵逼排序-5decfa1129604c588cf5441db1f49f18.gif");
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