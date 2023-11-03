// 自定义侧边栏
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  base: [{ type: 'autogenerated', dirName: 'base' }],
  note: [{ type: 'autogenerated', dirName: 'note' }],
  other: [{ type: 'autogenerated', dirName: 'other' }],
  package: [{ type: 'autogenerated', dirName: 'package' }]
};

export default sidebars;
