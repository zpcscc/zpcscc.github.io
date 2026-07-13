import { Alert as AntdAlert } from 'antd';
import { type AlertProps as AntdAlertProps } from 'antd/lib/alert';
import { type FC } from 'react';

export type AlertProps = AntdAlertProps;

/**
 * @name 警告提示
 * @link 其他参数详见 https://ant.design/components/alert-cn/
 */
const Alert: FC<AlertProps> = (props) => {
  return <AntdAlert {...props} />;
};

export default Alert;
