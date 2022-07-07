// 前端
const frontEnd = {
  text: '前端',
  children: [
    {
      text: '基础',
      children: [
        { text: 'HTML', link: '/docs/前端/HTML/' },
        { text: 'CSS', link: '/docs/前端/CSS/' },
        { text: 'JavaScript', link: '/docs/前端/JavaScript/' },
        { text: 'TypeScript', link: '/docs/前端/TypeScript/' },
        { text: 'Ajax', link: '/docs/前端/Ajax/' },
        { text: 'Jest', link: '/docs/前端/Jest/' },
        { text: 'Webpack', link: '/docs/前端/Webpack/' },
      ],
    },
    {
      text: '其他',
      children: [{ text: '分享', link: '/docs/前端/分享/' }],
    },
  ],
};

// 工具与库
const tools = {
  text: '工具与库',
  children: [
    { text: 'AntDesign', link: '/docs/工具与库/AntDesign/' },
    { text: 'Git', link: '/docs/工具与库/Git/' },
    { text: 'Eslint', link: '/docs/工具与库/Eslint/' },
    { text: 'GitBook', link: '/docs/工具与库/GitBook/' },
    { text: 'Nginx', link: '/docs/工具与库/Nginx/' },
  ],
};

// 其他
const rest = {
  text: '其他',
  children: [
    { text: 'macOS', link: '/docs/其他/macOS/' },
    { test: '正则表达式', link: '/docs/其他/正则表达式' },
  ],
};

// 最上方导航栏目录结构配置
export const navbar = [frontEnd, tools, rest];
