// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
const themeConfig = {
  navbar: {
    title: 'My Site',
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
        href: 'https://github.com/facebook/docusaurus',
        label: 'GitHub',
        position: 'right'
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
          {
            label: 'Blog',
            to: '/blog'
          },
          {
            label: 'GitHub',
            href: 'https://github.com/facebook/docusaurus'
          }
        ]
      }
    ],
    copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
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
