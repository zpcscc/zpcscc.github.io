import { Typography } from 'antd';
import { type TitleProps as AntdTitleProps } from 'antd/lib/typography/Title';
import { type FC } from 'react';

export type TitleProps = AntdTitleProps;

/**
 * @name 标题展示
 * @link 其他参数详见 https://ant.design/components/typography-cn/#Typography.Title
 */
const Title: FC<TitleProps> = (props) => {
  const { children, ...rest } = props;
  return <Typography.Title {...rest}>{children}</Typography.Title>;
};

export default Title;
