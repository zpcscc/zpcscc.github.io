import { InputNumber as AntdInputNumber } from 'antd';
import { type InputNumberProps as AntdInputNumberProps } from 'antd/lib/input-number';
import { type FC } from 'react';

export type InputNumberProps = AntdInputNumberProps;

/**
 * @name 数字输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-number-cn/
 */
const InputNumber: FC<InputNumberProps> = (props) => {
  return <AntdInputNumber className='w-full' {...props} />;
};

export default InputNumber;
