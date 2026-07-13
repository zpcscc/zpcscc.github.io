import { Button as AntdButton } from 'antd';
import { type ButtonProps as AntdButtonProps } from 'antd/lib/button';
import { type FC } from 'react';

export type ButtonProps = AntdButtonProps;

/**
 * @name 按钮
 * @link 其他参数详见 https://ant.design/components/button-cn/
 */
const Button: FC<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <AntdButton {...rest}>{children}</AntdButton>;
};

export default Button;
