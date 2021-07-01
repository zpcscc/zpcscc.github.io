// 前端分类
const frontEnd = {
  '/前端/HTML/': ['', 'HTML-标签'],
  '/前端/CSS/': [
    '',
    'CSS-画三角形',
    'CSS-隐藏滚动条',
    'CSS-屏蔽点击事件',
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
  '/前端/Jest/': [
    '',
    'Jest-常用匹配器',
    'Jest-常用expect',
    'Jest-expect_extend',
  ],
  '/前端/Webpack/': ['', 'packageJson包版本前符号含义'],
  '/前端/分享/': [
    '',
    '优雅降级与渐进增强',
    '页面性能优化的简单介绍',
    '前端下载图片',
  ],
}

// 工具与库分类
const tools = {
  '/工具与库/AntDesign/': ['', 'Antd-修改组件内部样式'],
  '/工具与库/Git/': [
    '',
    'Git-新建关联克隆仓库',
    'Git-移除远程仓库关联',
    'Git-强制切换分支',
    'Git-切换到某次commit',
    'Git-撤销上次push',
    'Git-撤销上次commit',
    'Git-重命名最新的一次commit',
    'Git-将某个commit合并到此分支',
    'Git-强制拉取最新代码',
    'Git-单分支rebase提交',
    'Git-终端查看提交记录',
  ],
  '/工具与库/GitBook/': [''],
  '/工具与库/Nginx/': ['', 'Nginx-常用命令'],
}

const rest = {
  // 其他分类
  '/其他/macOS/': ['', 'macOS-忽略系统更新'],
  '/其他/正则表达式/': [
    '',
    '正则-常见匹配规则',
    '正则-匹配两个符号之间的所有字符',
    '正则-在vscode查找替换中使用正则',
  ],
}

// 每类文章侧边栏目录设置
exports.sidebar = {
  // 前端分类
  ...frontEnd,
  ...tools,
  ...rest,
}
