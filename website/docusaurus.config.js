/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { presets, themeConfig } = require('./config');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DXSIX的技术博客',
  tagline: 'Dinosaurs are cool',
  url: 'https://zpcscc.top/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // 使用github pages的相关配置
  // 组织或个人用户名，通常是github用户名
  organizationName: 'dxsixpc',
  // 当前仓库名称
  projectName: 'dxsixpc.github.io',
  // 部署的分支
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN']
  },
  presets,
  // 插件，支持加载scss
  plugins: ['docusaurus-plugin-sass'],
  themeConfig
};

module.exports = config;
