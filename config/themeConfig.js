/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { github, dracula } = require('prism-react-renderer');

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  // 导航栏配置
  navbar: {
    title: 'DXSIX',
    logo: {
      alt: 'Logo',
      src: 'img/logo.png',
    },
    items: [
      {
        type: 'doc',
        docId: 'base/javascript/基础介绍',
        position: 'left',
        label: '基础',
      },
      {
        type: 'doc',
        docId: 'note/git/基础介绍',
        position: 'left',
        label: '笔记',
      },
      {
        type: 'doc',
        docId: 'package/package包版本前符号含义',
        position: 'left',
        label: '项目构建',
      },
      {
        type: 'doc',
        docId: 'other/macOS/忽略系统更新',
        position: 'left',
        label: '其他',
      },
      {
        href: 'https://github.com/dxsixpc/dxsixpc.github.io/',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  footer: {
    style: 'dark',
    // links: [
    //   {
    //     title: '文档',
    //     items: [
    //       {
    //         label: '简介',
    //         to: '/docs/note/intro'
    //       }
    //     ]
    //   },
    //   {
    //     title: '相关资源',
    //     items: [
    //       {
    //         label: '组件库',
    //         href: 'https://github.com/dxsixpc/components'
    //       },
    //       {
    //         label: '工具函数库',
    //         href: 'https://github.com/dxsixpc/utils'
    //       },
    //       {
    //         label: '项目配置库',
    //         href: 'https://github.com/dxsixpc/configs'
    //       }
    //     ]
    //   },
    //   {
    //     title: '更多',
    //     items: [
    //       {
    //         label: 'GitHub',
    //         href: 'https://github.com/dxsixpc/dxsixpc.github.io/'
    //       }
    //     ]
    //   }
    // ],
    copyright: ` ${new Date().getFullYear()} 皖ICP备19022295号-1`,
  },
  prism: {
    theme: github,
    darkTheme: dracula,
  },
  docs: {
    sidebar: {
      // 侧边栏开启隐藏收起功能
      hideable: true,
      // 展开当前类别时，自动折叠其他类别
      autoCollapseCategories: false,
    },
  },
};

module.exports = themeConfig;
