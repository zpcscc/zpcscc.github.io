import { Typography } from 'antd';
import { type TextProps as AntdTextProps } from 'antd/lib/typography/Text';
import { type FC } from 'react';

export type TextProps = AntdTextProps;

/**
 * @name 文本展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Text
 */
const Text: FC<TextProps> = (props) => {
  const { children, ...rest } = props;
  return <Typography.Text {...rest}>{children}</Typography.Text>;
};

export default Text;
