"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[6934],{

/***/ 2688
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_regex_md_8a7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-regex-基础规则-md-8a7.json
const site_docs_tools_regex_md_8a7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/regex/基础规则","title":"基础规则","description":"正则表达式基础规则","source":"@site/docs/tools/regex/基础规则.md","sourceDirName":"tools/regex","slug":"/tools/regex/基础规则","permalink":"/docs/tools/regex/基础规则","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"基础规则"},"sidebar":"tools","previous":{"title":"在vscode查找替换中使用正则","permalink":"/docs/tools/regex/在vscode查找替换中使用正则"},"next":{"title":"常见匹配规则","permalink":"/docs/tools/regex/常见匹配规则"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/tools/regex/基础规则.md


const frontMatter = {
	title: '基础规则'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "正则表达式基础规则",
  "id": "正则表达式基础规则",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
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
      id: "正则表达式基础规则",
      children: "正则表达式基础规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "字符"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["将下一个字符标记为一个特殊字符、或一个原义字符、或一个向后引用、或一个八进制转义符。", (0,jsx_runtime.jsx)("br", {}), "例如：“n”匹配字符“n”。“\\n”匹配一个换行符。串行“\\”匹配“\\”而“(”则匹配“(”"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "^"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配输入字符串的开始位置。如果设置了RegExp对象的Multiline属性，^也匹配“\\n”或“\\r”之后的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配输入字符串的结束位置。如果设置了RegExp对象的Multiline属性，$也匹配“\\n”或“\\r”之前的位置。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["匹配前面的子表达式零次或多次。例如，zo*能匹配“z”以及“zoo”。*等价于", (0,jsx_runtime.jsx)(_components.code, {
              children: "{0,}"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "+"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["匹配前面的子表达式一次或多次。例如，“zo+”能匹配“zo”以及“zoo”，但不能匹配“z”。+等价于", (0,jsx_runtime.jsx)(_components.code, {
              children: "{1,}"
            }), "。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "?"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["匹配前面的子表达式零次或一次。例如，“do(es)?”可以匹配“does”或“does”中的“do”。?等价于", (0,jsx_runtime.jsx)(_components.code, {
              children: "{0,1}"
            }), "。", (0,jsx_runtime.jsx)("br", {}), "当该字符紧跟在任何一个其他限制符（*,+,?，", (0,jsx_runtime.jsx)(_components.code, {
              children: "{n}"
            }), "，", (0,jsx_runtime.jsx)(_components.code, {
              children: "{n,}"
            }), "，", (0,jsx_runtime.jsx)(_components.code, {
              children: "{n,m}"
            }), "）后面时，匹配模式是非贪婪的。", (0,jsx_runtime.jsx)("br", {}), "非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。", (0,jsx_runtime.jsx)("br", {}), "例如，对于字符串“oooo”，“o+?”将匹配单个“o”，而“o+”将匹配所有“o”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{n}"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["n是一个非负整数。匹配确定的n次。例如，“o", (0,jsx_runtime.jsx)(_components.code, {
              children: "{2}"
            }), "”不能匹配“Bob”中的“o”，但是能匹配“food”中的两个o。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{n,}"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["n是一个非负整数。至少匹配n次。例如，“o", (0,jsx_runtime.jsx)(_components.code, {
              children: "{2,}"
            }), "”不能匹配“Bob”中的“o”，但能匹配“foooood”中的所有o。", (0,jsx_runtime.jsx)("br", {}), "例如：“o", (0,jsx_runtime.jsx)(_components.code, {
              children: "{1,}"
            }), "”等价于“o+”。“o", (0,jsx_runtime.jsx)(_components.code, {
              children: "{0,}"
            }), "”则等价于“o*”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "{n,m}"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["m和n均为非负整数，其中", (0,jsx_runtime.jsx)(_components.code, {
              children: "n<=m"
            }), "。最少匹配n次且最多匹配m次。", (0,jsx_runtime.jsx)("br", {}), "例如：“o", (0,jsx_runtime.jsx)(_components.code, {
              children: "{1,3}"
            }), "”将匹配“fooooood”中的前三个o。“o", (0,jsx_runtime.jsx)(_components.code, {
              children: "{0,1}"
            }), "”等价于“o?”。请注意在逗号和两个数之间不能有空格。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "."
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配除“\\n”之外的任何单个字符。要匹配包括“\\n”在内的任何字符，请使用像“(.|\\n)”的模式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(pattern)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["匹配pattern并获取这一匹配。所获取的匹配可以从产生的Matches集合得到。", (0,jsx_runtime.jsx)("br", {}), "在VBScript中使用SubMatches集合，在JScript中则使用$0…$9属性。要匹配圆括号字符，请使用“(”或“)”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: ["(?", ":pattern", ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["匹配pattern但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。", (0,jsx_runtime.jsx)("br", {}), "这在使用或字符“(|)”来组合一个模式的各个部分是很有用。例如“industr(?", ":y", "|ies)”就是一个比“industry|industries”更简略的表达式。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(?=pattern)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["正向肯定预查，在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。", (0,jsx_runtime.jsx)("br", {}), "例如：“Windows(?=95|98|NT|2000)”能匹配“Windows2000”中的“Windows”，但不能匹配“Windows3.1”中的“Windows”。", (0,jsx_runtime.jsx)("br", {}), "预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "(?!pattern)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["正向否定预查，在任何不匹配pattern的字符串开始处匹配查找字符串。", (0,jsx_runtime.jsx)("br", {}), "这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。", (0,jsx_runtime.jsx)("br", {}), "例如“Windows(?!95|98|NT|2000)”能匹配“Windows3.1”中的“Windows”，但不能匹配“Windows2000”中的“Windows”。", (0,jsx_runtime.jsx)("br", {}), "预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(?<=pattern)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["反向肯定预查，与正向肯定预查类拟，只是方向相反。", (0,jsx_runtime.jsx)("br", {}), "例如：", (0,jsx_runtime.jsx)(_components.code, {
              children: "“(?<=95|98|NT|2000)Windows”"
            }), "能匹配“2000Windows”中的“Windows”，但不能匹配“3.1Windows”中的“Windows”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(?<!pattern)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["反向否定预查，与正向否定预查类拟，只是方向相反。", (0,jsx_runtime.jsx)("br", {}), "例如：", (0,jsx_runtime.jsx)(_components.code, {
              children: "“(?<!95|98|NT|2000)Windows”"
            }), "能匹配“3.1Windows”中的“Windows”，但不能匹配“2000Windows”中的“Windows”。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "x|y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配x或y。例如，“z|food”能匹配“z”或“food”。“(z|f)ood”则匹配“zood”或“food”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[xyz]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "字符集合。匹配所包含的任意一个字符。例如，“[abc]”可以匹配“plain”中的“a”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[^xyz]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "负值字符集合。匹配未包含的任意字符。例如，“[ ^abc]”可以匹配“plain”中的“p”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[a-z]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "字符范围。匹配指定范围内的任意字符。例如，“[a-z]”可以匹配“a”到“z”范围内的任意小写字母字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "[^a-z]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "负值字符范围。匹配任何不在指定范围内的任意字符。例如，“[ ^a-z]”可以匹配任何不在“a”到“z”范围内的任意字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个单词边界，也就是指单词和空格间的位置。例如，“er\\b”可以匹配“never”中的“er”，但不能匹配“verb”中的“er”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配非单词边界。“er\\B”能匹配“verb”中的“er”，但不能匹配“never”中的“er”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\cx"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配由x指明的控制字符。例如，\\cM匹配一个Control-M或回车符。x的值必须为A-Z或a-z之一。否则，将c视为一个原义的“c”字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个数字字符。等价于[0-9]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个非数字字符。等价于[ ^0-9]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\f"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个换页符。等价于\\x0c和\\cL。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个换行符。等价于\\x0a和\\cJ。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个回车符。等价于\\x0d和\\cM。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配任何空白字符，包括空格、制表符、换页符等等。等价于[ \\f\\n\\r\\t\\v]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配任何非空白字符。等价于[ ^\\f\\n\\r\\t\\v]。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个制表符。等价于\\x09和\\cI。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\v"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配一个垂直制表符。等价于\\x0b和\\cK。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配包括下划线的任何单词字符。等价于“[A-Za-z0-9_]”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配任何非单词字符。等价于“[ ^A-Za-z0-9_]”。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\xn"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["匹配n，其中n为十六进制转义值。十六进制转义值必须为确定的两个数字长。", (0,jsx_runtime.jsx)("br", {}), "例如：“\\x41”匹配“A”。“\\x041”则等价于“\\x04&1”。正则表达式中可以使用ASCII编码。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\num"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配num，其中num是一个正整数。对所获取的匹配的引用。例如，“(.)\\1”匹配两个连续的相同字符。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\n"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["标识一个八进制转义值或一个向后引用。如果\\n之前至少n个获取的子表达式，则n为向后引用。", (0,jsx_runtime.jsx)("br", {}), "否则，如果n为八进制数字（0-7），则n为一个八进制转义值。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\nm"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["标识一个八进制转义值或一个向后引用。", (0,jsx_runtime.jsx)("br", {}), "如果\\nm之前至少有nm个获得子表达式，则nm为向后引用。", (0,jsx_runtime.jsx)("br", {}), "如果\\nm之前至少有n个获取，则n为一个后跟文字m的向后引用。", (0,jsx_runtime.jsx)("br", {}), "如果前面的条件都不满足，若n和m均为八进制数字（0-7），则\\nm将匹配八进制转义值nm。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\nml"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "如果n为八进制数字（0-3），且m和l均为八进制数字（0-7），则匹配八进制转义值nml。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "\\un"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "匹配n，其中n是一个用四个十六进制数字表示的Unicode字符。例如，\\u00A9匹配版权符号（©）。"
          })]
        })]
      })]
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