import { Input } from 'antd';
import { type TextAreaProps as AntTextAreaProps } from 'antd/lib/input';
import { type ChangeEvent, type FC } from 'react';

export type TextAreaProps = {
  onChange?: (value: string, e: ChangeEvent<HTMLTextAreaElement>) => void;
} & Omit<AntTextAreaProps, 'onChange'>;

/**
 * @name 多行文本域
 * @param value 组件的值
 * @param onChange 组件值修改的回调
 * @link 其他参数详见 https://ant.design/components/input-cn/#Input.TextArea
 */
const TextArea: FC<TextAreaProps> = (props) => {
  const { onChange, ...rest } = props;
  return <Input.TextArea onChange={(e) => onChange?.(e?.target?.value, e)} {...rest} />;
};

export default TextArea;
