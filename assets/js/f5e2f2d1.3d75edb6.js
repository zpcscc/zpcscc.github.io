"use strict";
(globalThis["webpackChunkwebsite"] = globalThis["webpackChunkwebsite"] || []).push([[9688],{

/***/ 8967
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_git_md_f5e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-git-新建关联克隆仓库-md-f5e.json
const site_docs_tools_git_md_f5e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools/git/新建关联克隆仓库","title":"新建关联克隆仓库","description":"一、创建本地仓库","source":"@site/docs/tools/git/新建关联克隆仓库.md","sourceDirName":"tools/git","slug":"/tools/git/新建关联克隆仓库","permalink":"/docs/tools/git/新建关联克隆仓库","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"新建关联克隆仓库"},"sidebar":"tools","previous":{"title":"撤销上次push","permalink":"/docs/tools/git/撤销上次push"},"next":{"title":"移除远程仓库关联","permalink":"/docs/tools/git/移除远程仓库关联"}}');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mdx-js+react@3.1.1_@types+react@19.2.17_react@18.3.1/node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(67028);
;// ./docs/tools/git/新建关联克隆仓库.md


const frontMatter = {
	title: '新建关联克隆仓库'
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "一、创建本地仓库",
  "id": "一创建本地仓库",
  "level": 2
}, {
  "value": "使用终端进入当前需要新建仓库的文件夹，在当前需要上传代码的文件夹内创建版本库",
  "id": "使用终端进入当前需要新建仓库的文件夹在当前需要上传代码的文件夹内创建版本库",
  "level": 3
}, {
  "value": "将代码 添加到暂存区",
  "id": "将代码-添加到暂存区",
  "level": 3
}, {
  "value": "一次性添加多个文件到暂存区",
  "id": "一次性添加多个文件到暂存区",
  "level": 3
}, {
  "value": "查看 git 当前状态",
  "id": "查看-git-当前状态",
  "level": 3
}, {
  "value": "将暂存区的代码上传到版本库",
  "id": "将暂存区的代码上传到版本库",
  "level": 3
}, {
  "value": "配置用户 git 用户信息",
  "id": "配置用户-git-用户信息",
  "level": 3
}, {
  "value": "二、本地关联到远程仓库",
  "id": "二本地关联到远程仓库",
  "level": 2
}, {
  "value": "关联远程地址",
  "id": "关联远程地址",
  "level": 3
}, {
  "value": "上传本地仓库的代码到远程仓库，如果是第一次上传到远程仓库",
  "id": "上传本地仓库的代码到远程仓库如果是第一次上传到远程仓库",
  "level": 3
}, {
  "value": "配置 SSH 秘钥",
  "id": "配置-ssh-秘钥",
  "level": 3
}, {
  "value": "三、项目组成员克隆项目，提交代码",
  "id": "三项目组成员克隆项目提交代码",
  "level": 2
}, {
  "value": "项目组成员提交本地代码与拉取远程代码",
  "id": "项目组成员提交本地代码与拉取远程代码",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    p: "p",
    pre: "pre",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.h2, {
      id: "一创建本地仓库",
      children: "一、创建本地仓库"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用终端进入当前需要新建仓库的文件夹在当前需要上传代码的文件夹内创建版本库",
      children: "使用终端进入当前需要新建仓库的文件夹，在当前需要上传代码的文件夹内创建版本库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git init\n//创建后会在当前文件夹生成.git文件\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将代码-添加到暂存区",
      children: "将代码 添加到暂存区"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git add readme.md //将readme.md文件添加到暂存区中\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "一次性添加多个文件到暂存区",
      children: "一次性添加多个文件到暂存区"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git add a.txt b.txt c.txt text/d.txt\t//选择添加哪些代码\ngit add .\t//添加所有文件\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "查看-git-当前状态",
      children: "查看 git 当前状态"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git status\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "如果代码更改并没有添加到暂存区，会显示红色部分，\nmodified：   readme.md   //红色的\n如果更改代码添加到暂存区，会显示绿色\nnew file：\treadme.me   //绿色的\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "将暂存区的代码上传到版本库",
      children: "将暂存区的代码上传到版本库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git commit -m '引号内是本次修改的备注'\t//提交代码到版本库\n如果是第一次安装使用git，此处会让你配置用户信息\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置用户-git-用户信息",
      children: "配置用户 git 用户信息"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git config --global user.name '你的github用户名'\ngit config --global user.email '你的github登录邮箱'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "二本地关联到远程仓库",
      children: "二、本地关联到远程仓库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "创建远程仓库，选择SSH，，不建议用https。关联本地的仓库与远程的仓库。只需要关联一次\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "关联远程地址",
      children: "关联远程地址"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git remote add origin + 仓库地址\t//仓库地址建议使用ssh\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "上传本地仓库的代码到远程仓库如果是第一次上传到远程仓库",
      children: "上传本地仓库的代码到远程仓库，如果是第一次上传到远程仓库"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git add .\ngit commit -m \"本地提交的备注\"\ngit push origin -u master\t//第一次上传\ngit push origin master\t\t//不是第一次上传，更新数据\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "因为我们使用的是 SSH，第一次提交代码的时候会提示要配置秘钥"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第 1 步：创建 SSH Key。在用户主目录下，看看有没有.ssh 目录，如果有，再看看这个目录下有没有 id_rsa 和 id_rsa.pub 这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开（Windows 下打开 Git Bash）,一直敲回车即可，创建 SSH Key："
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置-ssh-秘钥",
      children: "配置 SSH 秘钥"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "ssh-keygen -t rsa -C \"你的github邮箱\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第 2 步：打开.ssh/id_rsa.pub 这个文件，复制里面的内容"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "第 3 步：打开 github 的网站，找到设置，选择 SSH 公钥，标题自己写，内容即为第 2 步中复制的内容，需要输入你的码 github 的密码，这一次以后，本台电脑上传代码到该组织再也不用输入密码了"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "三项目组成员克隆项目提交代码",
      children: "三、项目组成员克隆项目，提交代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "git clone + 地址  //建议使用ssh的地址\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "项目组成员提交本地代码与拉取远程代码",
      children: "项目组成员提交本地代码与拉取远程代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拉取远程代码前需要本地 commit 一次，用于保存本地修改的代码到本地仓库里（不用 push）\n再 pull 拉取远程代码。直接 pull 拉取远程代码可能报错或者丢失本地修改的代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "//先commit本地代码\ngit add .\ngit commit -m \"提交本次修改的内容\"\n//再拉取远程代码\ngit pull origin master\n//拉取远程代码后可能会有代码合并的冲突，手动处理冲突。冲突处理完成后，可以进行push提交你本次修改的代码\ngit push origin master\n"
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