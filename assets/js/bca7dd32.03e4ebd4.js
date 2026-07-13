"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[5489],{

/***/ 22545
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_web_javascript_md_bca_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-web-javascript-三大结构-md-bca.json
const site_docs_web_javascript_md_bca_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"web/javascript/三大结构","title":"三大结构","description":"一、三大结构","source":"@site/docs/web/javascript/三大结构.md","sourceDirName":"web/javascript","slug":"/web/javascript/三大结构","permalink":"/docs/web/javascript/三大结构","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"三大结构"},"sidebar":"web","previous":{"title":"js的异步","permalink":"/docs/web/javascript/js的异步"},"next":{"title":"函数","permalink":"/docs/web/javascript/函数"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/web/javascript/三大结构.md


const frontMatter = {
	title: '三大结构'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、三大结构",
  "id": "一三大结构",
  "level": 2
}, {
  "value": "二、选择分支结构",
  "id": "二选择分支结构",
  "level": 2
}, {
  "value": "1.单分支结构",
  "id": "1单分支结构",
  "level": 3
}, {
  "value": "（1）if 判断语句",
  "id": "1if-判断语句",
  "level": 4
}, {
  "value": "2.双分支结构",
  "id": "2双分支结构",
  "level": 3
}, {
  "value": "（1）if-else 判断语句",
  "id": "1if-else-判断语句",
  "level": 4
}, {
  "value": "（2）if 条件中的特殊情况",
  "id": "2if-条件中的特殊情况",
  "level": 4
}, {
  "value": "1）常规情况",
  "id": "1常规情况",
  "level": 5
}, {
  "value": "2）特殊情况",
  "id": "2特殊情况",
  "level": 5
}, {
  "value": "3）if 中的隐式类型转换",
  "id": "3if-中的隐式类型转换",
  "level": 5
}, {
  "value": "3.多分支结构",
  "id": "3多分支结构",
  "level": 3
}, {
  "value": "（1)多个 if()else嵌套使用",
  "id": "1多个-ifelse嵌套使用",
  "level": 4
}, {
  "value": "（2）使用 switch()语句",
  "id": "2使用-switch语句",
  "level": 4
}, {
  "value": "（3）switch 的注意事项",
  "id": "3switch-的注意事项",
  "level": 4
}, {
  "value": "三、循环结构",
  "id": "三循环结构",
  "level": 2
}, {
  "value": "1.while 循环",
  "id": "1while-循环",
  "level": 3
}, {
  "value": "2.do-while 循环",
  "id": "2do-while-循环",
  "level": 3
}, {
  "value": "3.for 循环",
  "id": "3for-循环",
  "level": 3
}, {
  "value": "4.死循环",
  "id": "4死循环",
  "level": 3
}, {
  "value": "5.continue 关键字 break 关键字",
  "id": "5continue-关键字-break-关键字",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "一三大结构",
      children: "一、三大结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "顺序结构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自上而下，逐行执行，先来后到，相同语句，后面的覆盖前面的"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "选择分支结构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "多条路径，根据不同条件，只执行其中的一条或选择性的执行多条"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "循环结构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "重复执行某些代码，代替某些重复性操作，减少代码冗余，提升效率"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二选择分支结构",
      children: "二、选择分支结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1单分支结构",
      children: "1.单分支结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "两条路径二选一，做或者不做，有或者没有，执行或不执行；"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1if-判断语句",
      children: "（1）if 判断语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//语法结构：\nif(){}\n    if\t//语句名\n    ()\t//是否执行的条件，true 或 false\n    {}\t//执行的内容\n//例：\nif(true){\n   console.log(\"hello\");//\"hello\"---if括号中是true则输出hello，若为false则不输出\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2双分支结构",
      children: "2.双分支结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "有两个选项，两者必定执行一个"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "1if-else-判断语句",
      children: "（1）if-else 判断语句"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//当条件判断为true时，执行花括号内的语句，如果条件为假false，跳过花括号内的语句执行else里的内容\nif(条件){\n    执行语句1，条件为真时执行\n}else{\n\t执行语句2，条件为假时执行\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "2if-条件中的特殊情况",
      children: "（2）if 条件中的特殊情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "1常规情况",
      children: "1）常规情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "通常if的括号中填写一个判断语句，判断是真还是假\nif()括号里面的东西我们通常也叫它逻辑点，判断点\n当括号内的内容为true时真，为false时假，true或false是布尔值（boolean）代表真和假，需要通过逻辑运算符得到\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "2特殊情况",
      children: "2）特殊情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "先来看一个例题\nif(1){ //括号内 填写数字\"1\"会发生什么\n    console.log(\"会输出么？\"); //会输出吗？---会在控制台输出内容\n}\n\n数字1是数值型，不是布尔值，更不是true为什么会执行花括号内的语句了呢？\n\t在一些特定的情况下，计算机会进行一些隐式转换，他和强制类型转换不一样，他不需要你做什么，会自动对数据类型进行转换\n    在运算中，if(小括号)中的语句会发生隐式类型转换\n\n//if隐式转换例题\nvar a = \"1\",b = 2;\nconsole.log(a + b);//12---+号进行字符串拼接，拼成12，而不是进行数值运算等于3\n\"+\"号有两种含义：\n    1、\"+\"号两边都是数字：此时是数学中的\"+\"号运算符，将两个数字相加，进行数值运算\n    2、\"+\"号两边出现一个或以上个字符：此时是字符串的拼接\n\t并且优先进行字符串拼接，所以在检测到+号左右两边只要存在字符串的时候，会自动将另一边不是字符串的数据，转成字符串，再进行字符串拼接操作（字符串拼接就是将\"+\"号两边的内容完整的不做任何修改的前后接在一起）\n\n注意：除了+号有两层意义为外\n\t\"-*/%\"号只有数学意义，所以当进行\"-*/%\"的时候，\n    默认将运算符两边的数据类型隐式转换成数字类型再进行运算\n\n那么如果想要进行相加运算，又不想被\"+\"号隐式转换为字符怎么办。\n方法：\nvar a = \"1\",b = 2;\nconsole.log(a + b);//12---默认进行字符串拼接输出字符串\"12\"\nconsole.log((a-0) + b );//3---先通-0操作将字符转换为数字，再进行相加，输出数值3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "3if-中的隐式类型转换",
      children: "3）if 中的隐式类型转换"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "if()中只需要布尔值，那么在if判断中，会把括号内所有的数据类型，都隐式转换成布尔型,任何类型最终都被转成布尔类型\n\t数字：非0为true，0为false\n\t字符：非空为true，空为false\n\t对象：在任何时候都为true\n\t数组：在任何时候都为true，数组也是对象的一种\n\t函数：在任何时候都为true，函数也是特殊的对象\n\tNaN：为false\n\tundefined：为false\n\tnull：为false\nisNaN()：\n\t判断是否为NaN可以间接判断是否为数字，返回为true时为NaN不是数字，返回为false时是数字\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3多分支结构",
      children: "3.多分支结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "至少有两个或以上，根据条件执行其中一条或多条语句"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "1多个-ifelse嵌套使用",
      children: ["（1)多个 if()", "else", "嵌套使用"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "if (true) {\n  console.log(\"hello\");\n} else {\n  if (true) {\n    console.log(\"hello\");\n  } else {\n    console.log(\"world\");\n  }\n}\n或者;\nif (true) {\n  console.log(\"hello1\");\n} else if (true) {\n  console.log(\"hello2\");\n} else if (true) {\n  console.log(\"hello3\");\n} else if (true) {\n  console.log(\"hello4\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "2使用-switch语句",
      children: ["（2）使用 switch()", "语句"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "系统提供的语句\nswitch(){}\nswitch\t\t语句名\n    ()\t\t要判断的值\n    {}\t\t执行语句，所有的分支路径都放在一个花括号内\n    case\t匹配（）内的值则执行，不匹配则往下找，找到执行，都没找到输出default的内容\n\n案例：输入数字，判断后输出星期几\nswitch(n){\n    case 1:console.log(\"星期一\");break;\n    case 2:console.log(\"星期二\");break;\n    case 3:console.log(\"星期三\");break;\n    case 4:console.log(\"星期四\");break;\n    case 5:console.log(\"星期五\");break;\n    case 6:console.log(\"星期六\");break;\n    case 7:console.log(\"星期七\");break;\n    default:console.log(\"请输入1-7之间的数字\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "3switch-的注意事项",
      children: "（3）switch 的注意事项"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "case的穿透特性：\n\t在一个switch中，只会进行一次case判断，如果判断成功，后面的case则不会判断全部执行\n阻止case穿透\n\t使用关键字break;可以跳出当前循环，后面的都不执行\n\nswitch和if-else的区别\n\tswitch只能判断具体的值，不能判断范围，不会进行隐式转换\n\tif else可以判断范围\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三循环结构",
      children: "三、循环结构"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1while-循环",
      children: "1.while 循环"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "while(){}\n    while\t//语句名\n    ()\t\t//执行条件、判断调价\n    {}\t\t//执行语句循环体\n//例：\nvar i = 0；\nwhile(i<10){//当括号内的条件为真时，会一直执行\n    console.log(i);//输出0-9，十个数字\n    i++;//改变计数器\n}\n//表示重复执行10次\n//注意：为避免死循环，一定要在循环体内 改变 条件中使用变量的值-改变计数器。\n//通常while被用在不确定执行次数的循环中，循环体内设置if判断，满足条件使用break结束循环，否则一直循环\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2do-while-循环",
      children: "2.do-while 循环"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "do{}while(){}\n    do\t\t语句名\n    {}\t\tdo的执行语句\n    while\t语句名2\n    ()\t\t执行条件\n    {}\t\twhile的执行语句\n\ndo{\n    console.log(\"do的执行语句\");\n    i++;//改变计数器\n}while(i<10){\n    console.log(\"while的执行语句\");\n}\n//条件为true时，会执行do后面的语句\n//条件为false时，会执行一次while后面的语句\n//注意：do-while的改变计数器要鞋子啊do语句中，否则会造成死循环\ndo-while和while的区别\n    do-while任何情况下都比while多执行一次（do-while无论真假都会执行一次while里的语句）\n    do-while相对于while结构紧密些\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3for-循环",
      children: "3.for 循环"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "for(){}\n    for\t\t语句名\n    ()\t\t条件组\n    {}\t\t循环体\nfor(var i = 0; i < 10; i++){\n    console.log(i);//打印0-9。共十个数字\n}\n\nfor循环括号内的内容\nvar i=0;\t//定义循环开始时计数器的初始值\ni<10;\t\t//设置停止循环的条件，满足条件执行循环，不满足条件结束循环\ni++\t\t//计数器加一（这条语句是在循环体内容结束后才执行）\n//注意：上面的三个内容必须用分号“;”隔开，否则报错\n\nfor循环是最长使用的循环，还可进行for循环嵌套\nfor(var i=0;i<10;i++){\n    for(var j=0;j<10;j++){\n        console.log(i+j);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4死循环",
      children: "4.死循环"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "无法靠自身控制结束的循环，称为死循环\n不知道要循环几次的问题，利用死循环的原理，每次判断一个条件，直到满足条件，利用break跳出循环\n通常使用while来进行死循环\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5continue-关键字-break-关键字",
      children: "5.continue 关键字 break 关键字"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "continue和break都是用来控制循环结构的，主要是用来停止循环。\n控制关键字：控制循环的执行或停止\n    break:结束循环语句，直接跳出当前循环语句，后面所有的下一次循环都不执行。\n    continue:表示跳过当前所在的本次循环（continue下面的语句不执行跳过），下一次循环还会正常执行\n"
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