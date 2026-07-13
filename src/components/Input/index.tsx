import { Input as AntdInput } from 'antd';
import { type InputProps as AntInputProps } from 'antd/lib/input';
import { type ChangeEvent, type FC } from 'react';

export type InputProps = {
  onChange?: (value: string, e: ChangeEvent<HTMLInputElement>) => void;
} & Omit<AntInputProps, 'onChange'>;

/**
 * @name 输入框
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-cn/
 */
const Input: FC<InputProps> = (props) => {
  const { onChange, ...rest } = props;
  return (
    <AntdInput className='w-full' onChange={(e) => onChange?.(e?.target?.value, e)} {...rest} />
  );
};

export default Input;
