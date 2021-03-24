// 前端
const frontEnd = {
  text: '前端',
  items: [
    {
      text: '基础',
      items: [
        { text: 'HTML', link: '/前端/HTML/' },
        { text: 'CSS', link: '/前端/CSS/' },
        { text: 'JavaScript', link: '/前端/JavaScript/' },
        { text: 'Webpack', link: '/前端/Webpack/' },
      ],
    },
    {
      text: '其他',
      items: [{ text: '分享', link: '/前端/分享/' }],
    },
  ],
}

// 工具与库
const tools = {
  text: '工具与库',
  items: [
    { text: 'AntDesign', link: '/工具与库/AntDesign/' },
    { text: 'Git', link: '/工具与库/Git/' },
    { text: 'GitBook', link: '/工具与库/GitBook/' },
    { text: 'Nginx', link: '/工具与库/Nginx/' },
  ],
}

// 其他
const rest = {
  text: '其他',
  items: [
    { text: 'macOS', link: '/其他/macOS/' },
    { test: '正则表达式', link: '/其他/正则表达式' },
  ],
}

// 最上方导航栏目录结构配置
exports.nav = [
  frontEnd,
  tools,
  rest,
  {
    text: 'TimeLine',
    link: '/timeline/',
    icon: 'reco-date',
  },
]
