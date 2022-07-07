import { defineUserConfig } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';
import { blogConfig } from './config/blogConfig';
import { navbar } from './config/navbar';
import { series } from './config/series';

export default defineUserConfig({
  // 博客的标题
  title: 'DXSIX的技术博客',
  // 博客的描述
  description: 'ZPC_SCC',
  // 语言
  lang: 'zh-CN',
  // 设置网页标签头的图标
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  // 设置博客的主题
  theme: recoTheme({
    // 样式
    style: '@vuepress-reco/style-default',
    // logo
    // logo: '/logo.png',
    // 作者
    author: 'DXSIX',
    // 作者头像
    authorAvatar: '/avatar.jpg',
    // 类型
    type: 'blog',
    // 最后更新于文案
    lastUpdatedText: '最后更新于',
    // 对应的github链接地址
    docsRepo: 'https://github.com/dxsixpc/dxsixpc.github.io',
    // 文档对应的分支
    docsBranch: 'master',
    // 是否开启编辑此页面链接跳转到对应的github地址
    editLinks: true,
    // 顶部导航栏配置
    navbar,
    // 某分类下目录结构
    series,
    // 自动设置分类
    autoSetCategory: true,
  }),
  // 博客主题的配置
  plugins: [], // 导入并使用插件
  markdown: {}, //markdown设置
});
