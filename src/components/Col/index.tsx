import { Col as AntdCol, type ColProps as AntColProps } from 'antd';
import { type FC } from 'react';

export type ColProps = AntColProps;

/**
 * @name 布局组件列（只能放在“布局组件行”中）
 * @link 其他参数详见 https://ant.design/components/grid-cn/#Col
 */
const Col: FC<ColProps> = (props) => {
  const { children, ...rest } = props;
  return <AntdCol {...rest}>{children}</AntdCol>;
};

export default Col;
