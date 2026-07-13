import { Divider as AntdDivider } from 'antd';
import { type DividerProps as AntDividerProps } from 'antd/lib/Divider';
import { type FC } from 'react';

export type DividerProps = AntDividerProps;

/**
 * @name 分隔线
 * @link 其他参数详见 https://ant.design/components/divider-cn/
 */
const Divider: FC<DividerProps> = (props) => {
  const { children, ...rest } = props;
  return <AntdDivider {...rest}>{children}</AntdDivider>;
};

export default Divider;
