module.exports = {
    title: 'DXSIX的技术博客',   // 博客的标题
    description: 'ZPC_SCC',      // 博客的描述
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],      //设置网页标签头的图标
    theme: 'reco',
    themeConfig: {
        author: 'DXSIX',    // 作者
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
        repo: 'dxsixpc/dxsixpc.github.io',   // 个人guthub的链接地址
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
                            { text: 'HTML', link: '/前端/HTML/' },
                            { text: 'CSS', link: '/前端/CSS/' },
                            { text: 'JavaScript', link: '/前端/JavaScript/' },
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
                text: '工具与库',
                items: [
                    { text: 'AntDesign', link: '/工具与库/AntDesign/' },
                    { text: 'Git', link: '/工具与库/Git/' },
                    { text: 'GitBook', link: '/工具与库/GitBook/' },
                    { text: 'Nginx', link: '/工具与库/Nginx/' },
                ]
            },
            {
                text: '其他',
                items: [
                    { text: 'macOS', link: '/其他/macOS/' },
                ]
            },
            {
                text: 'TimeLine',
                link: '/timeline/',
                icon: 'reco-date'
            }
        ],  // 导航栏目录设置
        sidebar: {
            '/前端/HTML/': [
                '',
                'HTML-标签'
            ],
            '/前端/CSS/': [
                '',
                'CSS-画三角形',
                'CSS-布局：元素垂直居中',
                'CSS-布局：元素水平居中',
                'CSS-布局：元素水平垂直居中',
            ],
            '/前端/JavaScript/': [
                '',
                'JavaScript-数据类型',
                'JavaScript-变量',
                'JavaScript-函数',
                'JavaScript-三大结构',
                'JavaScript-数组',
                'JavaScript-数组方法详解',
                'JavaScript-运算符',
                'JavaScript-运行机制',
                'JavaScript-arguments',
                'JavaScript-浏览器兼容',
            ],
            '/前端/分享/': [
                '',
                '优雅降级与渐进增强',
                '页面性能优化的简单介绍'
            ],
            '/工具与库/AntDesign/': [
                '',
                'Antd-修改组件内部样式'
            ],
            '/工具与库/Git/': [
                '',
                'Git-新建关联克隆仓库',
                'Git-强制切换分支',
                'Git-强制拉取最新代码',
                'Git-终端查看提交记录',
            ],
            '/工具与库/GitBook/': [
                '',
            ],
            '/工具与库/Nginx/': [
                '',
                'Nginx-常用命令'
            ],
            '/其他/macOS/': [
                '',
                'macOS-忽略系统更新'
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