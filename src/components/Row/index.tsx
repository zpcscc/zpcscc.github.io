import { type RowProps as AntdRowProps, Row as AntdRow } from 'antd';
import { type FC } from 'react';

export type RowProps = AntdRowProps;

/**
 * @name 布局组件行（子组件只能为“布局组件列”）
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Row
 */
const Row: FC<RowProps> = (props) => {
  const { children, ...rest } = props;
  return <AntdRow {...rest}>{children}</AntdRow>;
};

export default Row;
