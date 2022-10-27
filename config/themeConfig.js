/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  navbar: {
    title: 'DXSIX',
    logo: {
      alt: 'My Site Logo',
      src: 'img/logo.svg'
    },
    items: [
      {
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: '博客'
      },
      {
        type: 'doc',
        docId: 'doc-components/intro',
        position: 'left',
        label: '组件库'
      },
      {
        type: 'doc',
        docId: 'doc-utils/intro',
        position: 'left',
        label: '工具库'
      },
      {
        href: 'https://github.com/dxsixpc/dxsixpc.github.io/',
        label: 'GitHub',
        position: 'right'
      },
      {
        href: 'https://github.com/facebook/docusaurus',
        position: 'right',
        className: 'header-github-link',
        'aria-label': 'GitHub repository'
      }
    ]
  },
  footer: {
    style: 'dark',
    links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Tutorial',
            to: '/docs/intro'
          }
        ]
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus'
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus'
          },
          {
            label: 'Twitter',
            href: 'https://twitter.com/docusaurus'
          }
        ]
      },
      {
        title: 'More',
        items: [
          // {
          //   label: 'Blog',
          //   to: '/blog'
          // },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus'
          }
        ]
      }
    ],
    copyright: ` ${new Date().getFullYear()} 皖ICP备19022295号-1`
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme
  },
  docs: {
    sidebar: {
      // 侧边栏开启隐藏收起功能
      hideable: true,
      // 展开当前类别时，自动折叠其他类别
      autoCollapseCategories: true
    }
  }
};

module.exports = themeConfig;
