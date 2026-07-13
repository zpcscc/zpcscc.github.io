import { Switch as AntdSwitch } from 'antd';
import { type SwitchProps as AntSwitchProps } from 'antd/lib/switch';
import { type FC } from 'react';

export type SwitchProps = {
  value?: boolean;
} & AntSwitchProps;

/**
 * @name 开关
 * @param value 组件的值
 * @param checked 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/switch-cn/
 */
const Switch: FC<SwitchProps> = (props) => {
  const { value, checked, ...rest } = props;
  return <AntdSwitch checked={value || checked} {...rest} />;
};

export default Switch;
