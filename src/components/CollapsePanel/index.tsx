import { type CollapsePanelProps as AntCollapsePanelProps, Collapse as AntdCollapse } from 'antd';
import { type FC } from 'react';

export type CollapsePanelProps = AntCollapsePanelProps;

/**
 * @name 布局组件折叠面板（只能放在“布局组件折叠”中）
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/#Collapse.Panel
 */
const CollapsePanel: FC<CollapsePanelProps> = (props) => {
  const { children, ...rest } = props;
  return <AntdCollapse.Panel {...rest}>{children}</AntdCollapse.Panel>;
};

export default CollapsePanel;
