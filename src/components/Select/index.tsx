import { Select as AntdSelect } from 'antd';
import { type SelectProps as AntdSelectProps } from 'antd/lib/select';
import { type FC } from 'react';

export type SelectProps = AntdSelectProps;

/**
 * @name 下拉框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/select-cn/
 */
const Select: FC<SelectProps> = (props) => {
  const { value, ...rest } = props;
  return <AntdSelect className='w-full' value={value} {...rest} />;
};

export default Select;
