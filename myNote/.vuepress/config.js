const { nav } = require("./config/nav");
const { blogConfig } = require("./config/blogConfig");
const { sidebar } = require("./config/sidebar");

module.exports = {
  // 博客的标题
  title: "DXSIX的技术博客",
  // 博客的描述
  description: "ZPC_SCC",
  // 设置网页标签头的图标
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  // 设置博客的主题
  theme: "reco",
  // 博客主题的配置
  themeConfig: {
    // 作者
    author: "DXSIX",
    // 作者头像
    authorAvatar: "/avatar.jpg",
    // 在所有页面中启用自动生成侧栏
    sidebar: "auto",
    // 侧栏目录的深度
    sidebarDepth: 6,
    // 类型
    type: "blog",
    // 博客导航栏配置
    blogConfig: blogConfig,
    // 404页面时是否显示腾讯公益页面
    noFoundPageByTencent: false,
    // 最后更新于文案
    lastUpdated: "最后更新于",
    // 对应的github链接地址
    repo: "dxsixpc/dxsixpc.github.io",
    // 是否开启编辑此页面链接跳转到对应的github地址
    editLinks: true,
    // 编辑此页面链接文案
    editLinkText: "编辑此页面",
    // 对应内容文件夹
    docsDir: "myNote",
    // 备案号文案
    record: "皖ICP备19022295号",
    // 点击备案号跳转的链接
    recordLink: "https://beian.miit.gov.cn/#/Integrated/index",
    // 公安备案号文案
    // cyberSecurityRecord: '公安部备案文案',
    // 公安备案号文案跳转链接
    // cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: "2019",
    // 顶部导航栏配置
    nav: nav,
    // 某分类下目录结构
    sidebar: sidebar,
  },
  plugins: [
    "@vuepress/active-header-links",
    "@vuepress/back-to-top",
    "@vuepress/nprogress",
    "@vuepress/plugin-medium-zoom",
  ], // 导入并使用插件
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    lineNumbers: true, // markdown代码块显示行号
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    // extendMarkdown: md => {
    //     md.use(require('markdown-it-xxx'))
    // }    //markdown-it插件支持
  }, //markdown设置
};
