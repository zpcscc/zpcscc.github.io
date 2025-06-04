import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
const { github, dracula } = require('prism-react-renderer');

const config: Config = {
  title: 'zhupc',
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
  organizationName: 'zpcscc',
  // 当前仓库名称
  projectName: 'zpcscc.github.io',
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
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./config/sidebars'),
          // 是否使用面包屑导航
          breadcrumbs: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss')
        }
      } satisfies Preset.Options
    ]
  ],
  // 主题配置
  themeConfig: {
    // 导航栏配置
    navbar: {
      title: 'zhupc',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          type: 'doc',
          docId: 'base/javascript/基础介绍',
          position: 'left',
          label: '基础'
        },
        {
          type: 'doc',
          docId: 'note/Git/基础介绍',
          position: 'left',
          label: '笔记'
        },
        {
          type: 'doc',
          docId: 'package/package包版本前符号含义',
          position: 'left',
          label: '项目构建'
        },
        {
          type: 'doc',
          docId: 'other/macOS/忽略系统更新',
          position: 'left',
          label: '其他'
        },
        {
          href: 'https://github.com/zpcscc/zpcscc.github.io/',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '简介',
              to: '/docs/note/intro'
            }
          ]
        },
        {
          title: '相关资源',
          items: [
            {
              label: '组件库',
              href: 'https://github.com/zpcscc/components'
            },
            {
              label: '工具函数库',
              href: 'https://github.com/zpcscc/utils'
            },
            {
              label: '项目配置库',
              href: 'https://github.com/zpcscc/configs'
            }
          ]
        },
        {
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/zpcscc/zpcscc.github.io/'
            }
          ]
        }
      ],
      copyright: `<img src="/img/gonganbeian-logo.png" style="width: 16px;transform: translateY(2px);"> <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">皖公网安备34112502000218号</a> <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备19022295号-1</a>`
    },
    prism: {
      theme: github,
      darkTheme: dracula
    },
    docs: {
      sidebar: {
        // 侧边栏开启隐藏收起功能
        hideable: true,
        // 展开当前类别时，自动折叠其他类别
        autoCollapseCategories: false
      }
    }
  } satisfies Preset.ThemeConfig,
  themes: [
    [
      // 本地搜索插件
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        language: ['en', 'zh'],
        blogDir: 'docs'
      }
    ]
  ]
};

export default config;
