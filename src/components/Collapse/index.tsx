import { type CollapseProps as AntCollapseProps, Collapse as AntdCollapse } from 'antd';
import { type FC } from 'react';

export type CollapseProps = AntCollapseProps;

/**
 * @name 布局组件-折叠面板（子组件只能为“布局面板”）
 * @param children 子组件
 * @link 其他参数详见 https://ant-design.antgroup.com/components/collapse-cn/
 */
const Collapse: FC<CollapseProps> = (props) => {
  const { children, ...rest } = props;
  return <AntdCollapse {...rest}>{children}</AntdCollapse>;
};

export default Collapse;
