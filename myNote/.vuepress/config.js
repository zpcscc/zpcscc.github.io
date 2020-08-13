module.exports = {
    title: 'DXSIX的技术博客',   // 博客的标题
    description: 'ZPC_SCC',      // 博客的描述
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],      //设置网页标签头的图标
    theme: 'reco',
    themeConfig: {
        author: 'dxsix',    // 作者
        sidebar: 'auto',    // 在所有页面中启用自动生成侧栏
        sidebarDepth: 6,    // 侧栏目录的深度
        authorAvatar: '/avatar.jpg',    // 作者头像
        type: 'blog',   // 类型
        blogConfig: {
            category: {
                location: 1,    // 在导航栏菜单中所占的位置，默认2
                text: '分类'    // 默认文案 “分类”
            },
            tag: {
                location: 2,     // 在导航栏菜单中所占的位置，默认3
                text: '标签'      // 默认文案 “标签”
            }
        },
        noFoundPageByTencent: false,
        lastUpdated: '最后更新于',
        repo: 'dxsixpc/blog',   // 个人guthub的链接地址
        editLinks: true,
        editLinkText: '编辑此页面',
        docsDir: 'myNote',
        nav: [
            {
                text: '前端学习',
                items: [
                    {
                        text: '基础',
                        items: [
                            { text: 'HTML', link: '/前端/html/' },
                            { text: 'CSS', link: '/前端/css/' },
                            { text: 'JavaScript', link: '/前端/javascript/' },
                        ]
                    },
                    {
                        text: '其他',
                        items: [
                            { text: '分享', link: '/前端/分享/' }
                        ]
                    },
                ]
            },
            {
                text: '开发',
                items: [
                    { text: 'Git', link: '/开发/git/' },
                    { text: 'GitBook', link: '/开发/gitbook/' },
                ]
            },
            {
                text: '日常',
                items: [
                    { text: '日记', link: '/日常/日记/' },
                ]
            },
            {
                text: 'TimeLine',
                link: '/timeline/',
                icon: 'reco-date'
            }
        ],  // 导航栏目录设置
        sidebar: {
            '/前端/html/': [
                '', 'html01'
            ],
            '/前端/css/': [
                '', 'css01', 'css02', 'css03', 'css04',
            ],
            '/前端/javascript/': [
                '', 'js01', 'js02', 'js03', 'js04', 'js05', 'js06', 'js07', 'js08', 'js09', 'js10',
            ],
            '/前端/分享/': [
                '', 'share01', 'share02'
            ],
            '/开发/git/': [
                '',
            ],
            '/开发/gitbook/': [
                '',
            ],
            '/日常/日记/': [
                '',
            ],
        }   // 侧边栏目录设置
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/plugin-medium-zoom'
    ],  // 导入并使用插件
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        lineNumbers: true,  // markdown代码块显示行号
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        // extendMarkdown: md => {
        //     md.use(require('markdown-it-xxx'))
        // }    //markdown-it插件支持
    },   //markdown设置
}