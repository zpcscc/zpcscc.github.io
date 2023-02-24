// @ts-check

const { presets, themeConfig } = require('./config');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'DXSIX',
  tagline: '个人博客',
  url: 'https://zpcscc.top/',
  baseUrl: '/',
  // 若有错误的链接，打包时进行报错
  onBrokenLinks: 'throw',
  // 若有错误的md文件链接时，打包时提示
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // 使用github pages的相关配置
  // 组织或个人用户名，通常是github用户名
  organizationName: 'dxsixpc',
  // 当前仓库名称
  projectName: 'dxsixpc.github.io',
  // 部署的分支
  deploymentBranch: 'gh-pages',

  // url路径尾随斜杠
  trailingSlash: false,
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },
  // 插件，支持加载scss
  plugins: ['docusaurus-plugin-sass'],
  // 预设的部分功能
  presets,
  // 主题配置
  themeConfig,
  themes: [
    [
      // 本地搜索插件
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'zh'],
        blogDir: 'docs'
      })
    ]
  ]
};
