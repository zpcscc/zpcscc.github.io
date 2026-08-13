# 项目开发规范

## 1. 技术栈与包管理

- 使用项目已经配置的 Docusaurus 3、React 19、TypeScript、pnpm、UnoCSS 和 Ant Design。
- 使用 pnpm 运行包管理任务，并保留 `pnpm-lock.yaml`。
- 使用精确的包版本。现有依赖均已锁定版本，因此新增依赖时不要使用 `^` 或 `~`。
- 新增依赖前，优先复用项目中已有的包。
- 浏览器支持范围应与 `package.json` 中的 `browserslist` 保持一致。

## 2. 仓库目录结构

- 将可复用的界面封装组件放在 `src/components/PascalCase/index.tsx`。
- 将交互演示放在 `src/demo/PascalCase/index.tsx`；只有在能够改善职责分离时，才在附近增加 `type.ts`、`utils.ts` 或子组件。
- 将演示文档放在 `docs-demo/camelCase.mdx`。演示侧边栏会根据这个目录自动生成。
- 将组件示例放在 `docs-components/PascalCase/`，并将组件文档放在该目录的 `index.mdx` 中。
- 将构建集成放在 `plugins/`，并严格控制 Docusaurus 配置的改动范围。
- 在适用时，通过 `@/…` 导入项目模块，通过 `@site/…` 导入仓库级模块。

## 3. React 与 TypeScript

- 使用函数组件和 Hooks。现有可复用组件通常声明为 `FC<Props>`；以最接近的同类文件为准。
- 使用 `type` 而不是 `interface` 定义对象结构，因为 ESLint 强制要求统一的类型定义方式。
- 使用仅类型导入。格式化工具可能会将其合并为行内 `type` 导入。
- 保持与 TypeScript 严格模式、`noImplicitReturns` 和 `noUnusedLocals` 兼容。
- 在 `useEffect` 的清理函数中释放计时器、DOM 监听器、渲染器、查看器和其他命令式资源。
- 不应触发渲染的运行时计算状态放在引用中；用户可见的界面状态放在 React 状态中。
- 除非外部库导致规则无法遵守，否则不要禁用 ESLint 或 TypeScript 检查；确需禁用时，必须严格限制作用范围。

## 4. 使用 UnoCSS 编写样式

- 通过 `className` 原子类表达组件和演示样式。仓库中的常见写法包括 `w-full`、`h-500px`、`b-1px`、`b-solid`、`b-#ccc`，也包括 `grid-cols-[1fr_300px]` 这类任意值和 `[&_.child]:w-full` 这类嵌套选择器。
- 使用 `sm:`、`md:`、`lg:` 和 `max-md:` 等响应式变体，确保主要功能在窄视口中仍可使用。
- 适用时使用 `uno.config.ts` 中的项目快捷方式，包括 `u-center`、`u-center-start` 和 `u-center-between`。
- 使用 `classnames` 处理条件类名。每个分支都必须包含完整的字面量类名；UnoCSS 会静态扫描源代码，因此不要通过字符串插值拼接原子类。
- 嵌入文档的界面优先使用 Docusaurus 变量，例如 `var(--ifm-color-primary)`、`var(--ifm-background-color)` 和 `var(--ifm-color-emphasis-*)`。
- 只对运行前无法确定的值使用行内样式。不要把常规间距、颜色、尺寸、边框或响应式规则移入行内样式。
- 普通功能样式不要创建 CSS Modules 或功能专用 SCSS。需要时可以导入第三方库的 CSS。第三方 DOM 需要覆盖样式时，先尝试 UnoCSS 任意后代选择器；只有选择器或伪元素无法安全表达时，才使用全局样式表。
- 不要编辑作为生成产物的 `src/css/uno.css`。只有快捷方式或主题变量会被多个功能复用时，才将其加入 `uno.config.ts`。

## 5. 演示集成

浏览器 API、画布、WebGL、编辑器，以及在模块求值阶段访问 `window` 或 `document` 的库，必须使用仓库现有的仅客户端 MDX 模式：

```mdx
---
title: '示例标题'
---

import { createClientDemo } from '@/components/ClientDemo';

export const ExampleDemo = createClientDemo(() => import('@/demo/Example'));

# 示例标题

简要说明。

## 在线演示

<ExampleDemo />
```

- 保持实现的默认导出与 `createClientDemo` 兼容。
- 让 `docs-demo` 的自动生成机制添加导航项；新增常规演示时，不要手动编辑 `config/sidebars-demo.ts`。
- 在文档中说明控件、外部数据署名、浏览器要求和重要限制。

## 6. 外部库与数据源

- 禁用会在后台调用令牌受限服务或商业服务的第三方默认配置。
- 根据服务的第一方文档，验证网址模板、瓦片尺寸、坐标方案、缩放范围、日期可用性、跨域资源共享行为和署名要求。
- 在条件允许时，至少测试一个低层级响应和一个高细节、有代表性的响应。
- 不要把每个瓦片错误都视为致命错误。应聚合错误，或区分服务首次加载失败与零星瓦片缺失。
- 切换图层时，在替代图层开始成功加载前，保持最后一个可用图层可见。
- 为用户提供重试入口，并显示准确、非技术化的错误信息。

## 7. 格式化与代码检查

格式与导入顺序以 Prettier 的结果为准：

- 使用分号、单引号（包括 JSX）、每行 100 字符、两空格缩进、尾随逗号、LF 换行符，以及带括号的箭头函数参数。
- 直接运行 Prettier，不要手动对抗其导入整理结果。

相关 ESLint 要求包括：

- 使用类型别名和仅类型导入。
- 不允许未使用变量、重复导入、未定义名称、`var`、`eval`、标签语句、位运算，或未经处理的异常空格。
- 使用严格相等、分号、单引号、箭头回调、对象简写，并优先使用常量。
- 遵循 React JSX 运行时、Hooks 检查和 JSX 可访问性检查。
- 按钮不是表单提交按钮时，必须显式设置 `type`。

## 8. 验证顺序

先检查改动文件，再验证集成后的站点：

```sh
pnpm exec prettier --check <changed-files>
pnpm exec eslint <changed-ts-and-tsx-files>
pnpm exec tsc --noEmit
pnpm build
```

- 改动区域存在测试时，运行相关的聚焦测试。
- 新增 MDX 页面时，确认生成的路由存在。
- 浏览器库通过网址加载工作线程、WASM、字体或图片时，确认复制或生成的运行时资源确实存在。
- 交付前运行 `git diff --check`，并检查 `git status --short`。
- 除非用户扩大工作范围，否则不要修改无关的既有警告或工作区改动。
